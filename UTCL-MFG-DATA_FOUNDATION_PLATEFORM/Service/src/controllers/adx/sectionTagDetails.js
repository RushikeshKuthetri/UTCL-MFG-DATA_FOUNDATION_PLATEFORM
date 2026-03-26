const { sGen } = require("../../utils/stringGenerator");
const client = require("../../db/connection");
const connection = require("../../db/connectionsql");
// const { getQuery } = require("../../helpers/dynamoDB");
// const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

module.exports = {
  sectionTagDetails: async (req, res, next) => {
    const { userId, plants } = req.body;

    if (userId != req.user) {
      return res.status(401).json({ message: "Not authorized, token invalid" });
    }

    if (!userId || !plants || plants?.constructor != Array) {
      return res.status(400).json({
        status: "fail",
        code: 400,
        message: "Please provide userid, plant names in proper format",
      });
    }

    // console.log(req.body);

    var stringPlants = "";

    if (plants) {
      stringPlants = sGen(plants);
    }

    try {
      dataToSend = {};
      /**---------------fetch ui settings --------------*/
      Query = "exec [dbo].[SP_UI_Default_Settings_SelectAllRecord]";

      const uiResult = await connection.query(Query, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });

      const uiDetails = { ...uiResult[0] };
      /**-------------------------------------------*/

      //////////////////// GET UNIQUE LINES/////////////////////
      const resultL = await client.execute(
        "utcprmfgadxiotpd-db",
        `Fn_Unique_lines('${stringPlants}')`
      );
      const newResultL = JSON.parse(
        JSON.stringify(resultL.primaryResults[0])
      ).data;
      //  console.log(newResultL);

      stringPlants.length != 0
        ? (dataToSend["Lines"] = newResultL)
        : (dataToSend["Lines"] = []);

      //////////////////// GET UNIQUE SECTIONS/////////////////////
      const resultS = await client.execute(
        "utcprmfgadxiotpd-db",
        `Fn_Unique_section_line('${stringPlants}')`
      );
      const newResultS = JSON.parse(
        JSON.stringify(resultS.primaryResults[0])
      ).data;
      // console.log(newResultS);

      stringPlants.length != 0
        ? (dataToSend["Sections"] = newResultS)
        : (dataToSend["Sections"] = []);

      ////////////////////// GET UNIQUE TAGS/////////////////////
      const resultT = await client.execute(
        "utcprmfgadxiotpd-db",
        `Fn_Unique_tags('${stringPlants}')`
      );
      const newResultT = JSON.parse(
        JSON.stringify(resultT.primaryResults[0])
      ).data;
      // console.log(newResultT);
      stringPlants.length != 0
        ? (dataToSend["Tag Names"] = newResultT)
        : (dataToSend["Tag Names"] = []);
      // console.log("108", token);

      // if (stringPlants.length == 0) token = null;

      dataToSend.uiDefaultSettings = uiDetails;

      res.status(200).json({
        status: "success",
        code: 200,
        data: { ...dataToSend },
      });
    } catch (error) {
      console.log("sectionTagDetails error.........", error);
      res.status(400).json({
        code: 400,
        status: "failed",
        message: "Something Went Wrong!Try Again.",
      });
    }
  },

  // lineSectionDetails: async (req, res, next) => {
  //   const { plants, userId } = req.body;

  //   if (userId != req.user) {
  //     return res.status(401).json({ message: "Not authorized, token invalid" });
  //   }

  //   if (!userId || !plants || plants?.constructor != Array) {
  //     return res.status(400).json({
  //       status: "fail",
  //       code: 400,
  //       message: "Please provide userid, plant names in proper format",
  //     });
  //   }

  //   try {
  //     dataToSend = {};
  //     /**---------------fetch ui settings --------------*/
  //     Query = "exec [dbo].[SP_UI_Default_Settings_SelectAllRecord]";

  //     const uiResult = await connection.query(Query, {
  //       raw: true,
  //       type: connection.QueryTypes.SELECT,
  //       logging: console.log,
  //     });
  //     // console.log("UI RESULT", uiResult);

  //     const uiDetails = { ...uiResult[0] };

  //     dataToSend[`uiDefaultSettings`] = uiDetails;

  //     //////////////////// GET UNIQUE LINES/////////////////////
  //     const uniqueLines = new Set();
  //     for (const plant of plants) {
  //       const lineParams = {
  //         TableName: "UTCL-TagMaster",
  //         KeyConditionExpression: "Plant = :plant", // partition key
  //         ExpressionAttributeValues: {
  //           ":plant": { S: plant },
  //         },
  //         ProjectionExpression: "Plant, Line",
  //       };
  //       const lineResult = await getQuery(lineParams);
  //       if (lineResult.Items) {
  //         for (const item of lineResult.Items) {
  //           const unmarshalledItem = unmarshall(item);
  //           uniqueLines.add(unmarshalledItem);
  //         }
  //       }
  //     }
  //     // console.log("uniqueLines", uniqueLines);
  //     const plantMap = new Map();
  //     const lineResult = [];
  //     uniqueLines.forEach((item) => {
  //       const { Plant, Line } = item;
  //       if (!plantMap.has(Plant)) {
  //         plantMap.set(Plant, new Set());
  //       }
  //       plantMap.get(Plant).add(Line);
  //     });
  //     plantMap.forEach((lines, plant) => {
  //       lines.forEach((line) => {
  //         lineResult.push({ Plant: plant, Line: line });
  //       });
  //     });

  //     plants.length != 0
  //       ? (dataToSend["Lines"] = lineResult)
  //       : (dataToSend["Lines"] = []);

  //     //////////////////// GET UNIQUE SECTIONS/////////////////////

  //     const uniqueSections = new Set();
  //     for (const plant of plants) {
  //       const sectionParams = {
  //         TableName: "UTCL-TagMaster",
  //         KeyConditionExpression: "Plant = :plant", // partition key
  //         ExpressionAttributeValues: {
  //           ":plant": { S: plant },
  //         },
  //       };
  //       const lineResult = await getQuery(sectionParams);
  //       if (lineResult.Items) {
  //         for (const item of lineResult.Items) {
  //           const unmarshalledItem = unmarshall(item);
  //           uniqueSections.add(unmarshalledItem);
  //         }
  //       }
  //     }
  //     // console.log("uniqueSections", uniqueSections);
  //     const finalResult = [];

  //     // Map to track unique combinations of Plant, Line, and Section
  //     const plantLineMap = new Map();
  //     uniqueSections.forEach((item) => {
  //       const { Plant, Line, Section } = item;

  //       if (!plantLineMap.has(`${Plant}-${Line}`)) {
  //         plantLineMap.set(`${Plant}-${Line}`, new Set());
  //       }

  //       plantLineMap.get(`${Plant}-${Line}`).add(Section);
  //     });

  //     plantLineMap.forEach((sections, plantLine) => {
  //       const [Plant, Line] = plantLine.split("-");
  //       sections.forEach((Section) => {
  //         finalResult.push({ Plant, Line, Section });
  //       });
  //     });
  //     plants.length != 0
  //       ? (dataToSend["Sections"] = finalResult)
  //       : (dataToSend["Sections"] = []);

  //     res.status(200).json({
  //       status: "success",
  //       code: 200,
  //       data: { ...dataToSend },
  //     });
  //   } catch (error) {
  //     console.log("sectionTagDetails error.........", error);
  //     res.status(400).json({
  //       code: 400,
  //       status: "failed",
  //       message: "Something Went Wrong!Try Again.",
  //     });
  //   }
  // },

  // sectionTagDetailsNew: async (req, res, next) => {
  //   const { plants, userId } = req.body;
  //   console.log({ plants });
  //   if (userId != req.user) {
  //     return res.status(401).json({ message: "Not authorized, token invalid" });
  //   }

  //   if (!userId || !plants || plants?.constructor != Array) {
  //     return res.status(400).json({
  //       status: "fail",
  //       code: 400,
  //       message:
  //         "Please provide userid and plant line and section details in proper format",
  //     });
  //   }

  //   try {
  //     let tagItems = [];
  //     if (plants?.length) {
  //       for (const item of plants) {
  //         let FilterExpression = "";
  //         const ExpressionAttributeNames = {
  //           "#plant": "Plant",
  //         };
  //         const ExpressionAttributeValues = {
  //           ":plant": { S: item.Plant },
  //         };
  //         if (item.Line !== null) {
  //           FilterExpression = "#line = :line";
  //           ExpressionAttributeNames["#line"] = "Line";
  //           ExpressionAttributeValues[":line"] = { S: item.Line };
  //         }
  //         if (item?.Section) {
  //           FilterExpression = FilterExpression
  //             ? FilterExpression + " AND #section = :section"
  //             : "#section = :section";
  //           ExpressionAttributeNames["#section"] = "Section";
  //           ExpressionAttributeValues[":section"] = { S: item.Section };
  //         }
  //         const tagParams = {
  //           TableName: "UTCL-TagMaster",
  //           KeyConditionExpression: "#plant = :plant", // Partition key condition,
  //           ExpressionAttributeNames,
  //           ExpressionAttributeValues,
  //         };
  //         if (FilterExpression) {
  //           tagParams["FilterExpression"] = FilterExpression;
  //         }
  //         // let items = [];
  //         const tagResult = await getQuery(tagParams);
  //         if (tagResult?.Items?.length) {
  //           const fetchedItems = tagResult.Items.map((item) => {
  //             const TagUID = Object.values(item["Tag UID"])[0];
  //             const Plant = Object.values(item.Plant)[0];
  //             const Line = item?.Line?.S ? Object.values(item.Line)[0] : null;
  //             const Section = Object.values(item.Section)[0];
  //             const TagName = Object.values(item["Tag Name"])[0];
  //             const key = Object.values(item["Tag Name"])[0];
  //             const UnitOfMeasurement = item[`Unit Of Measurement`]?.S
  //               ? Object.values(item[`Unit Of Measurement`])[0]
  //               : null;
  //             const assetId = item?.AssetID?.S
  //               ? Object.values(item.AssetID)[0]
  //               : null;
  //             const propertyId = item?.PropertyID?.S
  //               ? Object.values(item.PropertyID)[0]
  //               : null;
  //             const description = item["Standard Variable Description"]?.S
  //               ? Object.values(item["Standard Variable Description"])[0]
  //               : null;
  //             return {
  //               TagUID,
  //               Plant,
  //               Line,
  //               Section,
  //               TagName,
  //               key,
  //               UnitOfMeasurement,
  //               assetId,
  //               propertyId,
  //               description
  //             };
  //           });

  //           tagItems = tagItems.concat(fetchedItems);
  //         }
  //       }
  //       // dataToSend["Tag Names"] = tagItems;
  //     }
  //     console.log("tagItems length", tagItems.length);
  //     console.log("tagItems", tagItems);
      
  //     res.status(200).json({
  //       status: "success",
  //       code: 200,
  //       data: { "Tag Names": tagItems },
  //     });
  //   } catch (error) {
  //     console.log("tagDetails error.........", error);
  //     res.status(400).json({
  //       code: 400,
  //       status: "failed",
  //       message: "Something Went Wrong!Try Again.",
  //     });
  //   }
  // },
};

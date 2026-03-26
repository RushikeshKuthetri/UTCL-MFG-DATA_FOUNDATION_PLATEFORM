const connection = require("../../db/connectionsql");
const { getQuery, getScan, describeTable } = require("../../helpers/dynamoDB");
const { unmarshall } = require("@aws-sdk/util-dynamodb");

module.exports = {
  lineSectionDetails: async (req, res, next) => {
    const { plants, userId } = req.body;
    // console.log({plants});

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

    try {
      dataToSend = {};
      /**---------------fetch ui settings --------------*/
      Query = "exec [dbo].[SP_UI_Default_Settings_SelectAllRecord]";

      const uiResult = await connection.query(Query, {
        raw: true,
        type: connection.QueryTypes.SELECT,
        logging: console.log,
      });
      // console.log("33 UI RESULT", uiResult);

      const uiDetails = { ...uiResult[0] };

      dataToSend[`uiDefaultSettings`] = uiDetails;

      //////////////////// GET UNIQUE LINES/////////////////////
      const uniqueData = new Set();
      const totalSegments = 2;

      const scanPlant = async (plant, totalSegments) => {
        let result = { Items: [], Count: 0 };
        const scanPromises = [];

        for (let segment = 0; segment < totalSegments; segment++) {
          const lineParams = {
            TableName: `${plant}_TagMaster`,
            Segment: segment,
            TotalSegments: totalSegments,
            ProjectionExpression: "#line, #section",
            ExpressionAttributeNames: {
              "#line": "Line",
              "#section": "Section",
            },
          };

          scanPromises.push(getScan(lineParams));
        }

        const segmentResults = await Promise.all(scanPromises);

        segmentResults.forEach(({ Items, Count }) => {
          result.Items.push(...Items);
          result.Count += Count;
        });

        const plantItems = new Set();
        if (result?.Items?.length) {
          // for (const item of result.Items) {
          //   const unmarshalledItem = unmarshall(item);
          //   unmarshalledItem[`Plant`] = plant;
          //   plantItems.add(unmarshalledItem);
          // }

          // Added ny TRID to resolve Line undefined issue on 09-02-2026
          for (const item of result.Items) {
            const unmarshalledItem = unmarshall(item);

            // 🚫 SKIP bad Line values early
            if (
              unmarshalledItem.Line === undefined ||
              unmarshalledItem.Line === null ||
              unmarshalledItem.Line === "" ||
              unmarshalledItem.Line === "undefined"
            ) {
              continue;
            }

            unmarshalledItem.Plant = plant;
            plantItems.add(unmarshalledItem);
          }
        }

        return plantItems;
      };

      // Parallelize across all plants
      const plantScanPromises = [];

      for (let plant of plants) {
        plantScanPromises.push(scanPlant(plant, totalSegments));
      }
      // plants.map((plant) => scanPlant(plant, totalSegments));
      const allPlantResults = await Promise.all(plantScanPromises);

      // Merge results
      for (const plantSet of allPlantResults) {
        for (const item of plantSet) {
          uniqueData.add(item);
        }
      }

      // for (const plant of plants) {
      //   // const lineParams = {
      //   //   TableName: "UTCL-TagMaster",
      //   //   KeyConditionExpression: "Plant = :plant", // partition key
      //   //   ExpressionAttributeValues: {
      //   //     ":plant": { S: plant },
      //   //   },
      //   //   ProjectionExpression: "Plant, Line",
      //   // };
      //   // const lineResult = await getQuery(lineParams);
      //   let result = { Items: [], Count: 0 };
      //   const scanPromises = [];

      //   for (let segment = 0; segment < totalSegments; segment++) {
      //     const lineParams = {
      //       TableName: `${plant}_TagMaster`,
      //       Segment: segment,
      //       TotalSegments: totalSegments,
      //     };

      //     // const describe = await describeTable(lineParams);
      //     // // console.log(describe);
      //     // if (describe?.Table) {
      //     scanPromises.push(getScan(lineParams));
      //   }
      //   const segmentResults = await Promise.all(scanPromises);

      //   segmentResults.forEach(({ Items, Count }) => {
      //     result.Items.push(...Items);
      //     result.Count += Count;
      //   });

      //   if (result?.Items && result?.Items?.length) {
      //     for (const item of result.Items) {
      //       const unmarshalledItem = unmarshall(item);
      //       unmarshalledItem[`Plant`] = plant;
      //       uniqueData.add(unmarshalledItem);
      //     }
      //   }
      //   // }
      // }
      // console.log("uniqueData", uniqueData);

      const plantMap = new Map();
      const lineResult = [];
      // uniqueData.forEach((item) => {
      //   const { Plant, Line } = item;
      //   if (!plantMap.has(Plant)) {
      //     plantMap.set(Plant, new Set());
      //   }
      //   plantMap.get(Plant).add(`${Line}`);
      // });

      //  Added ny TRID to resolve Line undefined issue on 09-02-2026
      uniqueData.forEach((item) => {
        const { Plant, Line } = item;

        // 🚫 SKIP invalid Line values
        if (
          Line === undefined ||
          Line === null ||
          Line === "" ||
          Line === "undefined"
        ) {
          return;
        }

        if (!plantMap.has(Plant)) {
          plantMap.set(Plant, new Set());
        }

        plantMap.get(Plant).add(String(Line).trim());
      });

      plantMap.forEach((lines, plant) => {
        lines.forEach((line) => {
          lineResult.push({ Plant: plant, Line: line });
        });
      });

      plants.length != 0
        ? (dataToSend["Lines"] = lineResult)
        : (dataToSend["Lines"] = []);

      //////////////////// GET UNIQUE SECTIONS/////////////////////

      // const uniqueSections = new Set();
      // for (const plant of plants) {
      //   // const sectionParams = {
      //   //   TableName: "UTCL-TagMaster",
      //   //   KeyConditionExpression: "Plant = :plant", // partition key
      //   //   ExpressionAttributeValues: {
      //   //     ":plant": { S: plant },
      //   //   },
      //   // };
      //   // const lineResult = await getQuery(sectionParams);
      //   const lineParams = {
      //     TableName: `${plant}_TagMaster`,
      //   };
      //   const lineResult = await getScan(lineParams);
      //   if (lineResult.Items) {
      //     for (const item of lineResult.Items) {
      //       const unmarshalledItem = unmarshall(item);
      //       unmarshalledItem[`Plant`] = plant;
      //       uniqueSections.add(unmarshalledItem);
      //     }
      //   }
      // }
      // console.log("uniqueSections", uniqueSections);
      const finalResult = [];

      // Map to track unique combinations of Plant, Line, and Section
      const plantLineMap = new Map();
      uniqueData.forEach((item) => {
        const { Plant, Line, Section } = item;

        if (!plantLineMap.has(`${Plant}-${Line}`)) {
          plantLineMap.set(`${Plant}-${Line}`, new Set());
        }

        // plantLineMap.get(`${Plant}-${Line}`).add(Section);
        // Added by TRID to resolve Line undefined issue on 09-02-2026
        if (Section !== undefined && Section !== null && Section !== "") {
          plantLineMap.get(`${Plant}-${Line}`).add(Section);
        }
      });

      plantLineMap.forEach((sections, plantLine) => {
        const [Plant, Line] = plantLine.split("-");
        sections.forEach((Section) => {
          finalResult.push({ Plant, Line, Section });
        });
      });
      plants.length != 0
        ? (dataToSend["Sections"] = finalResult)
        : (dataToSend["Sections"] = []);

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
};

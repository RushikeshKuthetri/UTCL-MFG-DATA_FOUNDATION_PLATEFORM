const { sGen } = require("../../utils/stringGenerator");
const client = require("../../db/connection");
const generateZip = require("../../utils/generateZip");
const fspromise = require("fs/promises");
const fs = require("fs");

const path = require('path');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const moment = require("moment");

const sendMail = require("../../utils/sendMail");
const { createUniqueTimeArray } = require("../../utils/timeFunctions");

module.exports = {
  dataExport: async (req, res, next) => {
    // console.log("inside data export !!!")
    // console.log("req.body !!!",req.body)
    // 'v_UserId','v_tagName','v_stDate','v_enDate','v_interval','v_cluster','v_plant','v_section','v_eq_group','v_vr_group'
    const { userId, tagNames, uids, startDate, endDate, interval, plants, isMobile } = req.body;
    console.log("startDate --",startDate)
    console.log(`startDate formatted ${startDate.replace("T", " ")}`)

    // if (userId != req.user) {
    //   return res.status(401).json({ message: "Not authorized, token invalid" });
    // }

    //set your userid
    req.user = userId;

    if (
      userId == null ||
      userId == "" ||
      startDate == null ||
      startDate == "" ||
      endDate == null ||
      endDate == "" ||
      interval == null ||
      interval == "" ||
      tagNames == null ||
      (uids && uids.length == 0) ||
      uids == null ||
      plants?.length == 0 ||
      plants == null ||
      isMobile == null ||
      (isMobile && typeof isMobile != "boolean")
    ) {
      return res.status(400).json({
        status: "fail",
        code: 400,
        message: "Please provide plant names, tag Names, uids, start Date, end Date, isMobile and interval in proper format",
      });
    }

    if (tagNames.length == 0 && plants.length > 1) {
      return res.status(400).json({
        status: "fail",
        code: 400,
        message: "You can not select all tags for multiple plants",
      });
    }

    if (uids.length > 4000) {
      return res.status(400).json({
        status: "fail",
        code: 400,
        message: "Total number of tags exceeded. You can not select more than 4000 tags.",
      });
    }

    const stringPlants = sGen(plants ? plants : []);
    const stringTagnames = sGen(tagNames ? tagNames : []);

    // console.log("stringPlants --",stringPlants)
    // console.log("stringTagnames --",stringTagnames)

    // console.debug(stringPlants);
    // console.debug(stringTagnames);

    var dataLimitToEmail = 10;
    var responded = -1;

    try {
      const resultT = await client.execute("utcprmfgadxiotpd-db", `Fn_Export_timegenerator('${startDate}','${endDate}',${interval})`);
      const newResultT = JSON.parse(JSON.stringify(resultT.primaryResults[0])).data;
      console.log("newResultT --",newResultT)
      console.log("newResultT length --",newResultT.length)

      const estimatedSize = (newResultT.length * uids.length * 17) / 1000000;
      // console.log("EstimatedSize>>>", estimatedSize);

      if (estimatedSize == 0) {
        return res.status(404).json({
          code: 404,
          status: "failed",
          message: "No data found with selected combination!!",
        });
      }

      if (estimatedSize > 30) {
        return res.status(400).json({
          code: 400,
          status: "failed",
          message: "Maximum dataSize exceeded.Please reduce the number of tags or the time interval",
        });
      } else {
        const EmailTo = req.user;
        FileCreationDate = moment().utcOffset(330).format("DD-MM-YYYY_HH-mm-ss");
        const filename = FileCreationDate + "_" + req.user.split("@")[0];
        // console.log(filename);

        if (estimatedSize > dataLimitToEmail || isMobile == true) {
          responded = 1;
          res.status(200).json({
            code: 200,
            status: "success",
            message: `${isMobile == false ? "Data is larger. " : ""}We are sending the download link to your email id.Please check it in some time.`,
          });
        }

        const result = await client.execute(
          "utcprmfgadxiotpd-db",
          `set maxoutputcolumns=5000;
          Fn_UserWise_PlantData_Int_Export_WithUOM('${stringTagnames ? stringTagnames : ""}','${startDate}','${endDate}',${interval},'${stringPlants ? stringPlants : ""}')`
        );

        console.log("result.primaryResults[0]--",result.primaryResults[0])

        var _rows = result.primaryResults[0]._rows;
        console.log("_rows --",_rows)
        var columns = result.primaryResults[0].columns;
        console.log("columns--",columns)

        /*--------if no data found----------*/
        if (_rows.length === 0 && estimatedSize <= dataLimitToEmail && isMobile == false) {
          return res.status(404).json({
            code: 404,
            status: "failed",
            message: "No data found with selected combination!!",
          });
        }
        if (_rows.length === 0 && (estimatedSize > dataLimitToEmail || isMobile == true)) {
          subject = `Exported Data for ${stringPlants} from ${startDate.replace("T", " ")} to ${endDate.replace("T", " ")}`;
          await sendMail(EmailTo, subject, "No data found with selected combination!!");
          return;
        }
        /*--------if no data found----------*/

        /*--------sort _rows timestamp----------*/
        const sortByDate = (selectedData) => {
          const sorter = (a, b) => {
            return new Date(a[0]).getTime() - new Date(b[0]).getTime();
          };
          selectedData.sort(sorter);
        };
        sortByDate(_rows);
        /*--------sort _rows timestamp----------*/

        /*--------add not fetched timeStamp in _rows----------*/

        // Unique Time Array
        uniqueTimeStampArray = createUniqueTimeArray(_rows[0][0], _rows[_rows.length - 1][0], interval, "", "utc");
        console.log("uniqueTimeStampArray --",uniqueTimeStampArray)
        // Unique Time Array

        //////new way/////
        modified_rows = [];
        let arrToAdd = new Array(_rows[0].length).fill("NaN");
        let i = 0; // for uniqueTimeStampArray
        let j = 0; // _rows

        while (i < uniqueTimeStampArray.length && j < _rows.length) {
          if (uniqueTimeStampArray[i] === _rows[j][0]) {
            modified_rows.push(_rows[j]);
            i++;
            j++;
          } else if (moment(_rows[j][0]).isAfter(uniqueTimeStampArray[i])) {
            arrToAdd[0] = uniqueTimeStampArray[i];
            modified_rows.push([...arrToAdd]);
            i++;
          } else {
            // Timestamp in array2 is smaller, move array2 pointer forward
            j++;
          }
        }

        /*--------add not fetched timeStamp in _rows----------*/

        const newResult1 = [];
        const fetchedUIds = [];
        var result1 = {};
        var result2 = {};
        columns.forEach((key, i) => {
          if (i == 0) {
            result1[key.name] = "";
            result2[key.name] = "";
          } else {
            fetchedUIds.push(key.name.split("@@@")[0]);
            result1[key.name] = key.name.split("@@@")[1];
            result2[key.name] = key.name.split("@@@")[2];
          }
        });
        console.log("result1--",result1)
        console.log("result2--",result2)
        newResult1.push(result1);
        newResult1.push(result2);
        console.log("newResult1 --",newResult1);
        console.log("modified_rows --",modified_rows);

        const newResult2 = modified_rows.map((row, index) => {
          // console.log(row, "row", index);
          if (index == modified_rows.length - 1 && row[0] == null) {
            return false;
          }
          var result = {};
          columns.forEach((key, i) => {
            if (i == 0) {
              return (result[key.name] = moment(row[i].slice(0, -1)).format("YYYY-MM-DD HH:mm:ss").toString());
            } else {
              return (result[key.name] = row[i] ? (+row[i]).toFixed(2) : row[i]);
            }
          });
          return result;
        });
        console.log("newResult2 --",newResult2);


        const newResultInit = [...newResult1, ...newResult2];
        console.log("newResultInit --",newResultInit);


        /*--------add not fetched uids in result----------t*/
        const notInFetchedUids1 = {};
        const notInFetchedUids2 = {};
        const notInFetchedUids3 = {};
        uids.forEach((uid) => {
          if (uid.includes("_:") === false) {
            return;
          }
          filteredUid = uid.split("_:")[0];
          filteredDescription = uid.split("_:")[1];
          // console.log({uid,filteredUid, filteredDescription } );
          if (fetchedUIds.indexOf(filteredUid) == -1) {
            concatUidDesc = filteredUid + "@@@" + filteredDescription + "@@@";
            notInFetchedUids1[concatUidDesc] = filteredDescription;
            notInFetchedUids2[concatUidDesc] = "";
            notInFetchedUids3[concatUidDesc] = "NaN";
          }
        });

        const newResult = newResultInit.map((obj, i) => {
          if (i === 0) {
            return { ...obj, ...notInFetchedUids1 };
          }
          if (i === 1) {
            return { ...obj, ...notInFetchedUids2 };
          }
          return { ...obj, ...notInFetchedUids3 };
        });
        /*--------add not fetched uids in result----------t*/

        // console.debug("--------PAGINATION COMPLETED----------");

        //create header for csv file
        const headerr = Object.keys(newResult[0]).map((r) => ({
          id: r,
          title: r.split("@@@")[0],
        }));

        console.log("header", headerr);

        //create folder
        let dir = "public/uat/" + filename;

        // Define the directory path
// const dir2 = path.join(__dirname, dir);
// console.log("dir2--",dir2)

// Create the directory, including any missing parent directories
// await fs.promises.mkdir(dir2, { recursive: true })
//   .then(() => console.log('Directory created successfully!'))
//   .catch((error) => console.error('Error creating directory:', error));


        // await fspromise.mkdir("test/try")
        // await fspromise.mkdir("test\try2.txt")


        if (!fs.existsSync(dir)) {


          await fspromise.mkdir(dir);

  //         await fs.promises.mkdir(dir2, { recursive: true })
  // .then(() => console.log('Directory created successfully!'))
  // .catch((error) => console.error('Error creating directory:', error));

          //after creatting folder create csv files
          const csvWriter = createCsvWriter({
            // Output csv file name is geek_data
            path: dir + `/${filename}` + ".csv",
            // path: dir2 + `/${filename}` + ".csv",
            header: headerr,
          });

          // Writerecords function to add records
          // console.log("writing records");
          console.log("csvWriter -- newResult---",newResult)
          await csvWriter?.writeRecords(newResult);
          // console.log("Data uploaded into csv successfully");

          const link = process.env.NODE_ENV_LOCAL_URL;

          if (estimatedSize > dataLimitToEmail || isMobile == true) {
            // console.log("in greater than 30");
            await generateZip(filename);
            link1 = link + `${filename}_zip.zip`;
            // console.log(link1, "link when sending mail");
            subject = `Exported Data for ${stringPlants} from ${startDate.replace("T", " ")} to ${endDate.replace("T", " ")}`;
            await sendMail(EmailTo, subject, `Download your zip file using this link : ${link1} \nThis link is valid for 10days\n\n`);
          }

          // console.log(EmailTo, link);

          /////////////////

          if (estimatedSize > 0 && estimatedSize <= dataLimitToEmail && isMobile == false) {
            // console.log("in less than 30");
            link2 = link + `${filename}/${filename}.csv`;
            // console.log(link2, "link when sending response");
            responded = 1;
            res.status(200).json({
              code: 200,
              status: "success",
              link: link2,
            });
          }
        }
      }
    } catch (error) {
      console.log("errrpr" ,error);
      const errorMessage = error.message || "Something Went Wrong! Try Again.";
      if (responded == -1) {
        res.status(400).json({
          code: 400,
          status: "failed",
          message: errorMessage,
        });
      }
    }
  },
};

const axios = require("axios");
// var axios = require("axios");
var qs = require("qs");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");
const moment = require("moment");
async function sendMailForBlaine(content) {
  return new Promise(async (resolve, reject) => {
    try {
      //////////ACCESS TOKEN////////
      const tenant = process.env.NODE_ENV_TENANT_ID;
      const client_id = process.env.NODE_ENV_APP_ID;
      const username = process.env.NODE_ENV_senderOutlookEmail;
      const password = process.env.NODE_ENV_outlookPassword;
      const client_secret = process.env.NODE_ENV_APP_SECRET;
      var data = qs.stringify({
        client_id,
        scope: "Mail.send",
        username,
        password,
        grant_type: "password",
        client_secret,
      });
      
      const link = process.env.NODE_ENV_PROD_URL;
      let filename =
      "blaineAccuracy_data_file" +
      "-" +
      new Date().getTime();
      let dir = "public/uat/BlaineAccuracyData/" + filename;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      let headerr = [];
      Object.keys(content[0]).map((r) => {
        headerr.push({
          id: r,
          title: r,
        });
      });
      
      const csvWriter = createCsvWriter({
        path: dir + `/${filename}-1` + ".csv",
        header: headerr,
      });
      content.forEach((element) => {
        element.Date_Time = moment( element.Date_Time)
        .format("YYYY-MM-DD HH:mm:ss")
        .toString();
        element.time = moment( element.time)
        .format("HH:mm:ss")
        .toString();
      });
      // console.log(content,"ccccccccccccccccccccccccccccccccccccccc")
      await csvWriter
      .writeRecords(content) // returns a promise
      .then(() => {
        console.log("...Done");
      })
      .catch((err) => console.log(err));
      let link1 = link + `BlaineAccuracyData/${filename}/${filename}-1.csv`;
      // console.log(data);
      
      var config = {
        method: "post",
        url: `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: "fpc=AkzZjmefxw9Irj2fsx6JtDLrsbxaAgAAAIDYetoOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd",
        },
        data: data,
      };
      
      const tokenResponse = await axios(config);
      if (tokenResponse?.data?.access_token) {
        const accessToken = tokenResponse.data.access_token;
        const csvData = fs.readFileSync(dir + `/${filename}-1` + ".csv");
        const mailData = JSON.stringify({
          message: {
            subject:  "Daily Blaine Accuracy Data",
            body: {
              contentType: "Text",
              content: `Hello,\nPlease find attached doc for blaine accuracy raw data\n`,
            },
            attachments: [
              {
                '@odata.type': '#microsoft.graph.fileAttachment',
                name: 'data.csv',
                contentBytes: csvData.toString('base64')
              }
            ],
            toRecipients: [
              {
                emailAddress: {
                  address: "shyamsundar.mahake@adityabirla.com"
                }
              },
              {
                emailAddress: {
                  address: "ajeetkumar.singh@adityabirla.com"
                }
              },
              {
                emailAddress: {
                  address: "abhishek.kkumar@adityabirla.com"
                }
              },
              {
                emailAddress: {
                  address: "prathmesh.yadav@adityabirla.com"
                }
              }
            ],
            ccRecipients: [
              {
                emailAddress: {
                  address: 'ankit.sodani@adityabirla.com'
                }
              },
              {
                emailAddress: {
                  address: 'shresth.chaudhary@celebaltech.com'
                }
              },
              {
                emailAddress: {
                  address: 'shubham.jaunjal@celebaltech.com'
                }
              },
              {
                emailAddress: {
                  address: 'mohit.arora@celebaltech.com'
                }
              },
              {
                emailAddress: {
                  address: 'shyam.tailor@celebaltech.com'
                }
              },
              {
                emailAddress: {
                  address: 'manisha.arora@celebaltech.com'
                }
              },
            ]
          },
          saveToSentItems: "false",
        });

        const userMail = await axios({
          method: "post",
          url: "https://graph.microsoft.com/v1.0/me/sendMail",
          headers: {
            Authorization: "Bearer " + accessToken.toString(),
            "Content-Type": "application/json",
          },
          data: mailData,
        });

        console.log("Email sent successfully");
      } else {
        reject(new Error("Unable to send mail"));
      }
      resolve("Email sent successfully");
    } catch (error) {
      console.log(error,"error in sending mail");
      reject(new Error("Unable to send mail"));
    }
  });
}

module.exports = sendMailForBlaine;

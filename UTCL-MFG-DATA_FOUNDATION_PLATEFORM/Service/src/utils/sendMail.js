const axios = require("axios");
// var axios = require("axios");
var qs = require("qs");
async function sendMail(EmailTo, subject, content) {
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

      // console.log(tokenResponse, "mailResponse");
      console.log("EmailTo --",EmailTo)

      if (tokenResponse?.data?.access_token) {
        const accessToken = tokenResponse.data.access_token;

        // console.log(accessToken, "accessToken");
        const mailData = JSON.stringify({
          message: {
            subject: subject ? subject : "Exported Data",
            body: {
              contentType: "Text",
              content: content,
            },
            toRecipients: [
              {
                emailAddress: {
                  // address: "revaz@deloitte.com",
                  address: EmailTo,
                },
              },
            ],
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

        console.log("Email res mailData -",mailData);
        console.log("Email res userMail -",userMail);


        console.log("Email sent successfully");
      } else {
        reject(new Error("Unable to send mail"));
      }
      resolve("Email sent successfully");
    } catch (error) {
      console.log(error);
      reject(new Error("Unable to send mail"));
    }
  });
}

module.exports = sendMail;

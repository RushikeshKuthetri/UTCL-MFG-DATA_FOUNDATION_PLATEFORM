require("dotenv").config();

const { DynamoDBClient, QueryCommand, PutItemCommand } = require('@aws-sdk/client-dynamodb');

const { gzipSync } = require("zlib")

const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda");

const { v4: uuidv4 } = require("uuid");
// const { axios } = require("axios");


module.exports = {
  DownloadHandler: async (req, res, next) => {
    // const { userId, tagNames, uids, startDate, endDate, interval, plants, isMobile } = req.body;
    // console.log("req.body ==", req.body)
    // console.log("req ==",req)
    // const { userId, tagNames, uids, assetIds, startDate, endDate, interval, plants, isMobile, IsTrendChart } = req.body;
    const { userId, tagNames, uids, assetIds, startDate, endDate, interval, plants, isMobile } = req.body;

    
    try {

      let IsTrendChart = false
      if(req.body.IsTrendChart){
      // console.log("if(req.body.IsTrendChart){");
        IsTrendChart = true
      }
  
      const requestId = uuidv4(); // Generate a unique request ID

      // console.log("requestId --",requestId)
      let frontend
      if (tagNames.length == 0 && plants.length > 1) {
        return res.status(400).json({
          status: "fail",
          code: 400,
          message: "You can not select all tags for multiple plants",
        });
      }

      if (assetIds.length > 4000) {

        return res.status(400).json({
          status: "fail",
          code: 400,
          message: "Total number of tags exceeded. You can not select more than 4000 tags.",
        });

      }

      // ------------- Calculate bins -----------

      const formatDatex = (isoDateString) => {
        const date = new Date(isoDateString);
        const month = date.getMonth() + 1; // Months are 0-indexed
        const day = date.getDate();
        const year = date.getFullYear();
        const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const amPm = date.getHours() >= 12 ? 'PM' : 'AM';
  
        return `${month}/${day}/${year}, ${hours || 12}:${minutes}:${seconds} ${amPm}`;
      };
  
      // const startDate = "2025-01-23T09:30:00.000Z";
      // const endDate = "2025-01-23T10:00:00.000Z";
  
      // console.log("Formatted Start Date:", formatDatex(startDate));
      // console.log("Formatted End Date:", formatDatex(endDate));
  
      const formstartDate = formatDatex(startDate)
      const formendDate = formatDatex(endDate)

      const parseDate = (dateString) => new Date(dateString).getTime();
      const formatDate = (timestamp) => new Date(timestamp).toISOString();

      const startTimestamp = parseDate(formstartDate);
      const endTimestamp = parseDate(formendDate);
      let intervalInMinutes = 1;
      if (interval === "1d") {
        intervalInMinutes = 1440;
      } else if (interval === "1h") {
        intervalInMinutes = 60;
      } else if (interval === "15m") {
        intervalInMinutes = 15;
      } else if (interval === "1m") {
        intervalInMinutes = 1;
      }
      const intervalMilliseconds = parseInt(intervalInMinutes, 10) * 60 * 1000;

      // console.log("Start Timestamp:", startTimestamp);
      // console.log("End Timestamp:", endTimestamp);
      // console.log("Interval (ms):", intervalMilliseconds);

      // 1. **Precompute bins efficiently**
      const numBins = Math.ceil((endTimestamp - startTimestamp) / intervalMilliseconds);
      const bins = Array.from({ length: numBins }, (_, i) => formatDate(startTimestamp + i * intervalMilliseconds));

      // console.log("Total bins:", bins.length);
      totalBins = bins.length
      if(IsTrendChart === true) {
        predictedEstimation = (totalBins * tagNames.length * 17) / 1000000;
      } else {
        predictedEstimation = (totalBins * uids.length * 17) / 1000000;
      }
      // console.log("predictedEstimation  :", predictedEstimation);


      // const assetIds= [] // obj with assetIds and propIds

      const addFiveHoursThirtyMinutes = (dateStr) => {
        const date = new Date(dateStr); // Convert the string to a Date object
        // date.setHours(date.getHours() + 5, date.getMinutes() + 30); // Add 5:30
        return date;
      };

      const updatedStartDate = addFiveHoursThirtyMinutes(startDate);
      const updatedEndDate = addFiveHoursThirtyMinutes(endDate);

      // console.log("Beginning service lambda- ", new Date().toLocaleString())



      if (predictedEstimation < 100) {
        frontend = true
      }else if(predictedEstimation > 100 || isMobile == true){
        frontend = false
      }


      //  would need to send this data too sns topic
      const timestamp = Date.now(); // Get current timestamp in milliseconds
      // if (predictedEstimation < 30) {
        
              // -dynamo insert
              const client = new DynamoDBClient({ region: "ap-south-1" });
              
              async function insertIntoDynamoDB(params) {
                try {
                    await client.send(new PutItemCommand(params));
                    // console.log("Item inserted successfully:", params.Item);
                } catch (error) {
                    console.error("Error inserting item:", error);
                    throw error
                }
            }
            let checkDynamoDb = false;
            let payload = {
              userId,
              assetIds,
              updatedStartDate,
              updatedEndDate,
              interval,
              isMobile,
              plants,
              tagNames,
              requestId,
              uids,
              timestamp,
              frontend,
              IsTrendChart,
              checkDynamoDb
            };
            

            const payloadSize = parseFloat((Buffer.byteLength(JSON.stringify(payload), 'utf8') / 1024).toFixed(2)); // size in KB
            // console.log("Payload Size in KB:", payloadSize);
            const tableName = "Look_up_url";
            const dynamodbParams = {
              TableName: tableName,
              Item: {
                  RequestID: { S: requestId }, // String type in DynamoDB
                  timestamp: { N: timestamp.toString() }, // Number type in DynamoDB
                  userId: {S: userId}
              },
            };
            // if payload size is greater than 250 KB. Lambda payload limit is 256 KB
            if (payloadSize > 250) {
              const stringifiedPayload = JSON.stringify(payload);
              const compressedPayload = gzipSync(stringifiedPayload);
              // console.log(
              //   "compressed payload size in kb : ",
              //   Math.round(compressedPayload.length / 1024)
              // );

              dynamodbParams.Item["Payload"] = {B: compressedPayload};
              checkDynamoDb = true;
              payload = { requestId, checkDynamoDb};
            }

            
            await insertIntoDynamoDB(dynamodbParams);
            
                        
                        
                        // ------------- Direct lambda invokation --------
                        const lambdaClient = new LambdaClient({ region: "ap-south-1" }); // Change region accordingly
        
              // await lambda.invoke(params).promise();
              // Prepare Lambda invocation




              const params = {
                FunctionName: process.env.NODE_ENV_DOWNLOAD_HANDLER, //"utcl-service-dev-DownloadLambdaTwo", // Ensure correct function name
                // FunctionName: "utcl-service-dev-DownloadLambdaThree", // Ensure correct function name
                InvocationType: "Event",  // Asynchronous execution

                // Payload: JSON.stringify({
                //   // requestId,
                //   userId,
                //   assetIds,
                //   // startDate,
                //   updatedStartDate,
                //   // endDate,
                //   updatedEndDate,
                //   interval,
                //   isMobile,
                //   plants,
                //   tagNames,
                //   requestId,
                //   uids,
                //   timestamp,
                //   frontend,
                //   IsTrendChart
        
                // }),
                Payload: JSON.stringify(payload)


              };
        
              // Invoke Lambda function
              // console.log(`Before Inokecommand DownloadLambdaTwo`);
              // console.log(`Before Inokecommand DownloadLambdaTwo params -`,params);
        
              const command = new InvokeCommand(params);
              // console.log(`Inokecommand DownloadLambdaTwo`);
        
              await lambdaClient.send(command);
              // const response = await axios.post('http://localhost:3000/dev/downloadLambdaTwo', params, {
              //   headers: {
              //     'Content-Type': 'application/json',
              //   },
              // });
              // console.log(`Triggered DownloadLambdaTwo with Request ID: ${requestId}`);


        
      // } 


      // -------------- sns topic subccription
      // const snsClient = new SNSClient({ region: "ap-south-1" }); // Change region accordingly
      // console.log("Publishing message to SNS - ", new Date().toLocaleString());

      // // Publish message to SNS Topic
      // const params = {
      //   TopicArn: "arn:aws:sns:ap-south-1:311141527939:DownloadRequestTopic", // Replace with your SNS Topic ARN
      //   Message: JSON.stringify({
      //     userId,
      //     assetIds,
      //     updatedStartDate,
      //     updatedEndDate,
      //     interval,
      //     isMobile,
      //   }),
      //   Subject: "Trigger DownloadLambdaTwo",
      // };

      // console.log(`Before PublishCommand DownloadLambdaTwo`);
      // const command = new PublishCommand(params);
      // console.log(`After PublishCommand DownloadLambdaTwo`);
      // await snsClient.send(command);

      // console.log(`Message published to SNS topic for Request ID: ${requestId}`);

      // try {
      //   // Send immediate response to the user
      //   res.status(202).json({
      //     message: "Data generation in progress. Download link will be shared on email",
      //     requestId: requestId,
      //   });
      // } catch (erro) {
      //   console.log("erroerroerroerro -", erro)
      // }

      // console.log(`After res.status(202).json({: ${requestId}`);


        //  would need to send this data too sns topic
        // if (predictedEstimation > 30) {
        //   // furtherExec
        //    res.status(400).json({
        //     code: 400,
        //     status: "failed",
        //     message: "Maximum dataSize exceeded.Please reduce the number of tags or the time interval",
        //     // requestId: requestId,
        //   });
        //   // return false
        // } else {
          // const EmailTo = req.user;
          // FileCreationDate = moment().utcOffset(330).format("DD-MM-YYYY_HH-mm-ss");
          // const filename = FileCreationDate + "_" + req.user.split("@")[0];
          // console.log(filename);
          
          if (predictedEstimation < 100) {
            responded = 1;
            res.status(200).json({
              code: 200,
              status: "success",
              // message: `Data Download in frontend in progess.`,
              requestId: requestId,
              timestamp: timestamp
            });
          }
  
          if (predictedEstimation > 100 || isMobile == true) {
            // responded = 1;
            res.status(200).json({
              code: 200,
              status: "success",
              message: `${isMobile == false ? "Data is larger. " : ""}We are sending the download link to your email id.Please check it in some time.`,
            });
            // return false
          }
        // }

    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error.message || "Something Went Wrong! Try Again.";
      res.status(400).json({
        code: 400,
        status: "failed",
        message: errorMessage,
      });

      // return {
      //     statusCode: 500,
      //     body: JSON.stringify({ message: 'Failed to process the request', error: error.message })
      // };
    }
  },
};

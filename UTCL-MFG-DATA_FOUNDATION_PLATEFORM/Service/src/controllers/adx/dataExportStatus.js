// const { IoTSiteWiseClient, DescribeAssetCommand, GetAssetPropertyValueCommand, BatchGetAssetPropertyValueHistoryCommand  } = require('@aws-sdk/client-iotsitewise');


require("dotenv").config();


const { DynamoDBClient, QueryCommand, PutItemCommand, GetItemCommand } = require('@aws-sdk/client-dynamodb');
// import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";


module.exports = {
    dataExportStatus: async (req, res, next) => {
    // const { userId, tagNames, uids, startDate, endDate, interval, plants, isMobile } = req.body;
    console.log("req.body ==", req.body)
    // console.log("req ==",req)
    const { requestId, timestamp } = req.body;

    console.log("requestId --",requestId)

    try {

        const client = new DynamoDBClient({ region: "ap-south-1" });

      console.log("Beginning service lambda- ", new Date().toLocaleString())

      let err= false
      async function getPreSignedURL(requestId) {
        const tableName = "Look_up_url";
    
        const params = {
            TableName: tableName,
            Key: {
                RequestID: { S: requestId },
                timestamp: { N: timestamp.toString() }
            },
        };
    
        try {
            const result = await client.send(new GetItemCommand(params));
            if(result.Item && result.Item.status_err && result.Item.status_err.S){
                console.log("PreSignedURL:", result.Item.status_err.S);
                err=true
                return result.Item.status_err.S;
            }
            
            if (result.Item && result.Item.PreSignedURL && result.Item.PreSignedURL.S) {
                console.log("PreSignedURL:", result.Item.PreSignedURL.S);
                return result.Item.PreSignedURL.S;
            } else {
                console.log("PreSignedURL does not exist for this RequestID");
                return null; // Handle case where PreSignedURL is missing
            }
        } catch (error) {
            console.error("Error fetching PreSignedURL:", error);
            return null; // Handle case where PreSignedURL is missing

        }
    }
    
    // Example Usage

    const presignedurl = await getPreSignedURL(requestId);
    console.log("presignedurl -",presignedurl)

    if(err){
        return res.status(400).json({
            code: 400,
            status: "failed",
            message: presignedurl,
            error: presignedurl
          });
    }

    if(presignedurl){
        return res.status(200).json({
            code: 200,
            status: "success",
            message: `Data Download completed.`,
            link: presignedurl,
          });
    }else{
        return res.status(200).json({
            code: 200,
            status: "success",
            message: `Data Download in progess.`,
          });

    }

    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error.message || "Something Went Wrong! Try Again.";
      res.status(400).json({
        code: 400,
        status: "failed",
        message: errorMessage,
      });

    }
  },
};

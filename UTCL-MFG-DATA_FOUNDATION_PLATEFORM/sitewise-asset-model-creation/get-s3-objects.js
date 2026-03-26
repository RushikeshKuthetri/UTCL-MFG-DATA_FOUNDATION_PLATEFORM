// import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3"; // ES Modules import
const { S3Client, ListObjectsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
const AWS_ACCESS_KEY = "";
const AWS_SECRET_KEY = "";
const AWS_REGION = "ap-south-1";
const config = {
    region: AWS_REGION,
    // credentials: {
    //     accessKeyId: AWS_ACCESS_KEY,
    //     secretAccessKey: AWS_SECRET_KEY,
    // }
};
const BUCKET = "historical-sitewise-data";
async function main() {
    const client = new S3Client(config);
    const input = { // ListObjectsRequest
        Bucket: BUCKET,
        Prefix: "New_Logic/-RC"
    };
    const command = new ListObjectsCommand(input);
    const response = await client.send(command);
    const list = response.Contents.map((item) => {
        return {
            bucket: BUCKET,
            key: item.Key,
        }
    });
    console.log(list);

}

main();
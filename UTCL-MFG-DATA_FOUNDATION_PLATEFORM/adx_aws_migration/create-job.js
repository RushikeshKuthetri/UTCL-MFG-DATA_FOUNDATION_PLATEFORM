import {
    IoTSiteWiseClient,
    CreateBulkImportJobCommand,
} from "@aws-sdk/client-iotsitewise";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

const AWS_ACCESS_KEY = "";
const AWS_SECRET_KEY = "";
const AWS_REGION = "ap-south-1";
const config = {
    region: AWS_REGION,
    credentials: {
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_KEY,
    }
};

async function createJob(plant, chunk) {
    const client = new IoTSiteWiseClient(config);

    const input = {
        jobName: `Job-For-${plant}`,
        jobRoleArn:
            "arn:aws:iam::311141527939:role/AmazonS3BucketAccessForIoTSiteWise-role-d89fe1",
        files: chunk,
        errorReportLocation: { bucket: "historical-sitewise-data", prefix: "error_reports/" },
        jobConfiguration: {
            fileFormat: {
                csv: {
                    columnNames: [
                        "ALIAS",
                        "DATA_TYPE",
                        "TIMESTAMP_SECONDS",
                        "TIMESTAMP_NANO_OFFSET",
                        "QUALITY",
                        "VALUE",
                    ],
                },
            },
        },
        adaptiveIngestion: true,
        deleteFilesAfterImport: false,
    };

    try {
        console.log(input)
        const command = new CreateBulkImportJobCommand(input);
        const response = await client.send(command);
        console.log("Bulk Import Job created successfully:", response);
        return response;
    } catch (error) {
        console.error("Error creating Bulk Import Job:", error);
        throw error;
    }
}


async function s3list(prefix) {
    const s3Client = new S3Client(config);
    const command = new ListObjectsCommand({
        Bucket: "historical-sitewise-data",
        Prefix: prefix,
    });
    const response = await s3Client.send(command);
    const sortedList = response.Contents.sort((a, b) => {
        return new Date(b.LastModified) - new Date(a.LastModified);
    });
    const list = sortedList.map((item) => {
        return {
            bucket: "historical-sitewise-data",
            key: item.Key,
        }
    });
    console.log(list.length);
    return list;
}

async function main() {
    const plant = "MACW";
    const prefix = "New_Logic/-MACW/";
    let files = await s3list(prefix);
    const chunkSize = 10;
    for (let i = 0; i < files.length; i += chunkSize) {
        const chunk = files.slice(i, i + chunkSize);
        const plantName = `${plant}-${String(i / chunkSize + 1).padStart(2, '0')}`;
        await createJob(plantName, chunk);
    }
}

// main();

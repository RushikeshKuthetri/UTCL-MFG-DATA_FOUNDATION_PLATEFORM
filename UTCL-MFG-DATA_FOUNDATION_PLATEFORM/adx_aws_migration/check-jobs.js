import { IoTSiteWiseClient, ListBulkImportJobsCommand, DescribeBulkImportJobCommand } from "@aws-sdk/client-iotsitewise";
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

async function main() {
    const client = new IoTSiteWiseClient(config);
    // const input = { // DescribeBulkImportJobRequest
    //     jobId: "a7c6aab2-df91-4758-934d-3f4d4612a26f", // required
    // };
    // const command = new DescribeBulkImportJobCommand(input);
    // const response = await client.send(command);
    // console.log(response);

    const input = {
        filter: "RUNNING"
    };

    let jobs = [];
    let response;
    do {
        const command = new ListBulkImportJobsCommand(input);
        response = await client.send(command);
        // process response
        jobs.push(...response.jobSummaries);
        input.nextToken = response.nextToken;

    } while (response.nextToken);
    for (let i = 0; i < jobs.length; i++) {
        console.log(`Job: ${jobs[i].id} - ${jobs[i].name} - ${jobs[i].status}`);
    }
    console.log(jobs.length);
}

main();
const { IoTSiteWiseClient, ListTimeSeriesCommand, TagResourceCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
const client = new IoTSiteWiseClient({ region: "ap-south-1" });

// this function updates the tag for data streams
async function run() {
    let firstIteration = true;
    let token;
    let total = 0;
    do {
        const input = { // ListDatasetsRequest
            nextToken: firstIteration ? undefined : token,
            maxResults: 50,
            // assetId: "STRING_VALUE",
            // aliasPrefix: "ns=3;s=0:C",
            // timeSeriesType: "DISASSOCIATED",
        };
        const command = new ListTimeSeriesCommand(input);
        const response = await client.send(command);
        token = response.nextToken;
        firstIteration = false;
        let timeSeriesSummaries = response.TimeSeriesSummaries;
        // console.log(timeSeriesSummaries[0])
        console.log(`timeSeriesSummaries to update: ${timeSeriesSummaries.length}`);


        const promises = timeSeriesSummaries.map(summary => {
            const arn = summary.timeSeriesArn;
            const input = { // TagResourceRequest
                resourceArn: arn, // required
                tags: { // TagMap // required
                    "map-migrated": "migBUVKJ1ONSK"
                },
            };
            const command = new TagResourceCommand(input);
            return client.send(command);
        });
        await Promise.all(promises);
        total += timeSeriesSummaries.length;
        console.log("total", total)

        console.log("\n\n\n--- waiting for 1 second, to fetch next set of data ---");
        await new Promise((resolve) => setTimeout(resolve, 1000));
    } while (token);
    console.log("overall total", total)

    
}

run();
// list();
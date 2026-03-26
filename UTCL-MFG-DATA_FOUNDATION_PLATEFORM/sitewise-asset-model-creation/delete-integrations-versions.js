const { ApiGatewayV2Client, DeleteIntegrationCommand, GetIntegrationsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
const { LambdaClient, ListVersionsByFunctionCommand, DeleteFunctionCommand } = require("@aws-sdk/client-lambda");

const client = new ApiGatewayV2Client({ region: "ap-south-1" });

const ApiId = "b8z0dik8ll";

async function deleteInegrations() {
    const input = { // GetApiRequest
        ApiId: ApiId
    };
    const command = new GetIntegrationsCommand(input);
    const response = await client.send(command);
    // console.log("res length", response)
    let items = response.Items;
    for (let index = 0; index < items.length; index++) {
        try {
            const Integration = items[index];

            let IntegrationId = Integration.IntegrationId;
            let input1 = { // DeleteIntegrationRequest
                ApiId: ApiId,
                IntegrationId: IntegrationId
            };
            let command1 = new DeleteIntegrationCommand(input1);
            let response1 = await client.send(command1);
            console.log(`IntegrationId ${IntegrationId} Deleted`)
        } catch (error) {
            console.error(`Error deleting integration at index ${index}:`, error);
        }

    }

}

async function deleteLambdaVserions() {
    const FUNCTION = "utcl-service-dev-Service"; // required
    const client = new LambdaClient({ region: "ap-south-1" });
    let versions = [];
    let token = undefined;
    // do {
    console.log("call")
    let input = { // ListVersionsByFunctionRequest
        FunctionName: FUNCTION,
        // Marker: "STRING_VALUE",
        MaxItems: 50,
    };
    let command = new ListVersionsByFunctionCommand(input);
    let response = await client.send(command);
    token = response.NextMarker;
    versions = versions.concat(response.Versions);
    console.log(versions.length)
    // } while (token)

    count = 0;
    // delete from last versions
    for (let index = versions.length - 1; index > 21; index--) {
        const version = versions[index];
        const input = { // DeleteFunctionRequest
            FunctionName: FUNCTION,
            Qualifier: version.Version,
        };
        const command = new DeleteFunctionCommand(input);
        const response = await client.send(command);
        console.log(`Deleted ${version.Version}`);
        count += 1;

    }
    console.log(`Deleted ${count}`);

}

// deleteLambdaVserions()
deleteInegrations()
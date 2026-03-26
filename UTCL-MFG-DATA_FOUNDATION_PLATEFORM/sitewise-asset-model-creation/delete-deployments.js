// import { GreengrassV2Client, DeleteDeploymentCommand, ListDeploymentsCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
const { GreengrassV2Client, DeleteDeploymentCommand, ListDeploymentsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import

const config = {
    region: "ap-south-1",
    // credentials: {
    //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    // },
};

async function deleteDeployment(deploymentId) {
    const client = new GreengrassV2Client(config);
    const input = { // DeleteDeploymentRequest
        deploymentId: deploymentId
    };
    const command = new DeleteDeploymentCommand(input);
    const response = await client.send(command);
    // {};
}

async function getDeployments() {
    const client = new GreengrassV2Client(config);
    let token;
    let firstIteration = true;
    let deployments = [];

    do {
        const input = { // ListDeploymentsRequest
            
            targetArn: "arn:aws:iot:ap-south-1:311141527939:thinggroup/Kotputli_ThingGroup_1",
            historyFilter: "ALL",
            maxResults: 50,
            nextToken: firstIteration ? undefined : token,
        };
        const command = new ListDeploymentsCommand(input);
        const response = await client.send(command);
        token = response.nextToken;
        deployments.push(...response.deployments);
    // console.log(deployments);

    } while (token);

    console.log(deployments);
    // deployments.forEach(deployment => {
    //     if (!deployment.deploymentName){
    //         console.log("YESSS", deployment)
    //     }
    // });
    return deployments;

}

async function main() {
    await getDeployments()
    .then(deployments => {
        console.log("deployments to delete", deployments.length);
        const promises = deployments.map(deployment => {
            const deploymentId = deployment.deploymentId;
            console.log("deploymentId", deploymentId);
            return deleteDeployment(deploymentId);
        });
        return Promise.all(promises);
    });
}

main();
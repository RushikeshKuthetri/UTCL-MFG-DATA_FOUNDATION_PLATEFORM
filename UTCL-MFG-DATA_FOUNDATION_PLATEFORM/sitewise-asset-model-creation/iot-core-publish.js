// import { IoTDataPlaneClient, PublishCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
const { IoTDataPlaneClient, PublishCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import

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
    const client = new IoTDataPlaneClient(config);
    const input = { // PublishRequest
        topic: "test", // required
        qos: 1,
        payload: JSON.stringify({
            "key": "value",
            "key2": 123,
            "key3": true,
            "key4": null,
        })
    };
    const command = new PublishCommand(input);
    const response = await client.send(command);
    // {};
}

main();
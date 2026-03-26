const { EC2Client, CreateRouteCommand } = require("@aws-sdk/client-ec2");
const config = { region: "ap-south-1" };
const CIDR = [
    "10.5.5.64/27",
    "10.5.6.64/27",
    "10.5.4.64/27",
    "10.5.7.64/27",
    "10.5.10.64/27",
    "10.5.8.64/27",
    "10.5.11.64/27",
    "10.5.106.64/27",
    "10.5.17.64/27",
    "10.5.23.64/27",
    "10.5.12.64/27",
    "10.5.16.64/27",
    "10.5.19.64/27",
    "10.5.20.64/27",
    "10.5.24.64/27",
    "10.5.18.64/27",
    "10.5.107.64/27",
    "10.5.13.64/27",
    "10.5.14.64/27",
    "10.5.15.64/27",
    "10.5.21.64/27",
    "10.5.22.64/27",
    "10.5.46.64/27",
    "10.5.36.64/27",
    "10.5.25.64/27",
    "10.5.28.64/27",
    "10.5.29.64/27",
    "10.5.31.64/27",
    "10.5.37.64/27",
    "10.5.42.64/27",
    "10.5.43.64/27",
    "10.5.26.64/27",
    "10.5.27.64/27",
    "10.5.35.64/27",
    "10.5.34.64/27",
    "10.5.38.64/27",
    "10.5.39.64/27",
    "10.5.40.64/27",
    "10.5.41.64/27",
    "10.5.45.64/27",
    "10.5.44.64/27",
    "10.5.47.64/27",
    "10.5.48.64/27",
    "10.5.33.64/27",
    "10.5.49.64/27",
    "10.5.30.64/27",
    "10.5.32.64/27",
    "10.5.9.64/27",
    "10.5.53.64/27",
    "10.5.54.64/27",
    "10.5.5.64/27",

];

const ROUTE_TABLES = [
    "rtb-01d0fb4d68b2bb094",
    "rtb-03cb4feb397e1190d",
    "rtb-0d0e12192b588de39",
    "rtb-02886f3b33d9f182f"
]

async function main() {
    const client = new EC2Client(config);
    let count = 0;
    for (let i = 0; i < ROUTE_TABLES.length; i++) {
        for (let j = 0; j < CIDR.length; j++) {
            const input = {
                TransitGatewayId: "tgw-053ff20c618e8a957",
                RouteTableId: ROUTE_TABLES[i], // required
                DestinationCidrBlock: CIDR[j],
            };
            const command = new CreateRouteCommand(input);
            const response = await client.send(command);
            console.log(`Created route for ${CIDR[j]} in ${ROUTE_TABLES[i]}`);
            count++;
            await new Promise((resolve) => setTimeout(resolve, 5 * 1000));
        }
    }
}

main();
const { sGen } = require("../../utils/stringGenerator");
const client = require("../../db/connection");
const { createUniqueTimeArray } = require("../../utils/timeFunctions");
const { getAssetPropertyHistoryValuewithoutChunks } = require("../../helpers/iotSitewise");
const { v4: uuidv4 } = require("uuid");
const { DownloadLambdaTwo } = require("../../../handlerPlotly");
module.exports = {
    plotlyTrendApi: async (req, res, next) => {

        // const { plant, tagUId, startDate, endDate, interval, assetId, propertyId, tagData, IsTrendChart } = req.body;
        // const { plant, tagUId, startDate, endDate, interval, assetIds, propertyId, tagData, IsTrendChart } = req.body;
        const { userId, tagNames, uids, assetIds, startDate, endDate, interval, plants, isMobile, IsTrendChart } = req.body;

        // console.log(tagName, startDate, endDate, interval);
        try {
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

            console.log("Formatted Start Date:", formatDatex(startDate));
            console.log("Formatted End Date:", formatDatex(endDate));

            const formstartDate = formatDatex(startDate)
            const formendDate = formatDatex(endDate)

            const parseDate = (dateString) => new Date(dateString).getTime();
            const formatDate = (timestamp) => new Date(timestamp).toISOString();

            const startTimestamp = parseDate(formstartDate);
            const endTimestamp = parseDate(formendDate);
            const intervalMilliseconds = parseInt(interval, 10) * 60 * 1000;

            console.log("Start Timestamp:", startTimestamp);
            console.log("End Timestamp:", endTimestamp);
            console.log("Interval (ms):", intervalMilliseconds);

            // 1. **Precompute bins efficiently**
            const numBins = Math.ceil((endTimestamp - startTimestamp) / intervalMilliseconds);
            const bins = Array.from({ length: numBins }, (_, i) => formatDate(startTimestamp + i * intervalMilliseconds));

            console.log("Total bins:", bins.length);
            totalBins = bins.length
            if (IsTrendChart === true) {
                predictedEstimation = (totalBins * tagNames.length * 17) / 1000000;
            }

            console.log("predictedEstimation  :", predictedEstimation);


            const addFiveHoursThirtyMinutes = (dateStr) => {
                const date = new Date(dateStr); // Convert the string to a Date object
                // date.setHours(date.getHours() + 5, date.getMinutes() + 30); // Add 5:30
                return date;
            };

            const updatedStartDate = addFiveHoursThirtyMinutes(startDate);
            const updatedEndDate = addFiveHoursThirtyMinutes(endDate);

            console.log("Beginning service lambda- ", new Date().toLocaleString())


            // const assetData3 = await fetchDataBatch_mul(assetIds, startDate, endDate, interval, isMobile, userId);


            // --------- logic to figure out the size of data wrt to number of tags and date range ----
            // let directDownload = false


            // ------------ original function call
            // const assetData3 = await fetchDataBatch_mul(assetIds, updatedStartDate, updatedEndDate, interval, isMobile, userId, res, requestId);


            if (predictedEstimation < 100 || isMobile == false) {
                frontend = true
            } else if (predictedEstimation > 100 || isMobile == true) {
                frontend = false
            }


            //  would need to send this data too sns topic
            const timestamp = Date.now(); // Get current timestamp in milliseconds
            let lambdaResponse;
            if (predictedEstimation < 30) {

                // // ------------- Direct lambda invokation --------
                // const lambdaClient = new LambdaClient({ region: "ap-south-1" }); // Change region accordingly

                // // await lambda.invoke(params).promise();
                // // Prepare Lambda invocation
                // const params = {
                //   FunctionName: "utcl-service-dev-DownloadLambdaTwo", // Ensure correct function name
                //   InvocationType: "Event",  // Asynchronous execution
                //   Payload: JSON.stringify({
                //     // requestId,
                //     userId,
                //     assetIds,
                //     // startDate,
                //     updatedStartDate,
                //     // endDate,
                //     updatedEndDate,
                //     interval,
                //     isMobile,
                //     plants,
                //     tagNames,
                //     requestId,
                //     uids,
                //     timestamp,
                //     frontend,
                //     IsTrendChart


                //   }),
                // };

                // // Invoke Lambda function
                // console.log(`Before Inokecommand DownloadLambdaTwo`);

                // const command = new InvokeCommand(params);
                // console.log(`Inokecommand DownloadLambdaTwo`);

                // await lambdaClient.send(command);
                // console.log(`Triggered DownloadLambdaTwo with Request ID: ${requestId}`);

                // ==============================
                // LOCAL LAMBDA CALL
                // ==============================
                lambdaResponse = await DownloadLambdaTwo({
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
                    IsTrendChart
                });
            }
            console.log("Completed DownloadLambdaTwo function here================================================>", lambdaResponse)
            // if (userId != req.user) {
            //   return res.status(401).json({ message: "Not authorized, token invalid" });
            // }

            // if (
            //   startDate == null ||
            //   startDate == "" ||
            //   endDate == null ||
            //   endDate == "" ||
            //   interval == null ||
            //   interval == "" ||
            //   // tagUId == null ||
            //   plant == null ||
            //   plant == ""
            //   // tagUId?.length == 0
            //   // assetId == null ||
            //   // assetId == "" ||
            //   // propertyId == null ||
            //   // propertyId == ""
            // ) {
            //   return res.status(400).json({
            //     status: "fail",
            //     code: 400,
            //     message: "Please provide plant name, tag UID, start Date, end Date, assetId, propertyId and interval ",
            //   });
            // }
            if (!lambdaResponse?.body) {
                return res.status(404).json({
                    success: false,
                    message: "Data not found"
                });
            }

            try {
                return res
                    .status(lambdaResponse.statusCode || 200)
                    .json(JSON.parse(lambdaResponse.body));
            } catch (parseError) {
                console.error("Invalid lambda response:", parseError);

                return res.status(500).json({
                    success: false,
                    message: "Invalid data received from trend service"
                });
            }

            return;
            let payload = []
            // const response = await DownloadHandler(req, res, next)
            return res.status(200).json({
                code: 200,
                status: "success",
                selectedDataL: 0,//selectedData.length,
                totalFinalResult: 0,
                seriesData: response,//final,
                uniqueDataDateTime: [],
                minMax: []//selectedDataMinMax,
            });;
            for (const item of tagData) {
                let tempObj = {
                    entryId: `${item.PropertyId}`, // required
                    assetId: item.AssetId,
                    propertyId: item.PropertyId,
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                    qualities: ["GOOD"],
                    timeOrdering: "ASCENDING"
                }
                payload.push(tempObj)
            }
            let propertyHistoryData;
            let historicalData = [];

            if (payload.length) {
                propertyHistoryData = await getAssetPropertyHistoryValuewithoutChunks({ entries: payload })
                // console.log('propertyHistoryData ', JSON.stringify(propertyHistoryData))
                console.log('propertyHistoryData ', propertyHistoryData.length)
                console.log('propertyHistoryData ', propertyHistoryData[0])

                if (propertyHistoryData.successEntries && propertyHistoryData.successEntries.length > 0) {
                    for (const entry of propertyHistoryData.successEntries) {
                        console.log('---in----')
                        if (entry.assetPropertyValueHistory && entry.assetPropertyValueHistory.length > 0) {
                            const matchTag = tagData.filter(i => i.PropertyId == entry.entryId)
                            if (matchTag.length) {
                                console.log('---match----')

                                for (const tag of tagData) {

                                    let obj = {
                                        name: tag.TagName,
                                        showInLegend: true,
                                        zIndex: 1
                                    }
                                    let valudata = []
                                    for (const propval of entry.assetPropertyValueHistory) {
                                        const timestamp = new Date(propval.timestamp.timeInSeconds * 1000); // Convert timestamp to date
                                        const year = timestamp.getFullYear();
                                        const month = String(timestamp.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
                                        const day = String(timestamp.getDate()).padStart(2, '0');
                                        const hours = String(timestamp.getHours()).padStart(2, '0');
                                        const minutes = String(timestamp.getMinutes()).padStart(2, '0');
                                        const seconds = String(timestamp.getSeconds()).padStart(2, '0');
                                        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                                        let propertyValue = null;
                                        if (propval.value.doubleValue) {
                                            propertyValue = propval.value.doubleValue
                                        }
                                        if (propval.value.integerValue) {
                                            propertyValue = propval.value.integerValue
                                        }
                                        let tempobj = [formattedDate, propertyValue]
                                        valudata.push(tempobj)
                                    }

                                    obj['data'] = valudata
                                    // obj['uniqueDataDateTime'] = uniqueDataDateTime
                                    if (historicalData.length) {
                                        const found = historicalData.find(item => item.name === obj.name);
                                        if (found == undefined) {
                                            historicalData.push(obj);//todo
                                        }
                                    } else {
                                        historicalData.push(obj)
                                    }
                                }
                            }
                        } else {
                            return res.status(404).json({
                                code: 404,
                                status: "failed",
                                message: "No data found with selected combination!!",
                            });
                        }
                    }
                }
            }
            let uniqueDataDateTime
            console.log('---historicalData----', historicalData.length)

            if (historicalData.length) {
                console.log('------------here------------')
                uniqueDataDateTime = createUniqueTimeArray(historicalData[0].data[0][0], historicalData[0].data[historicalData[0].data.length - 1][0], interval, "YYYY-MM-DD HH:mm:ss", "");
                res.status(200).json({
                    code: 200,
                    status: "success",
                    selectedDataL: 0,//selectedData.length,
                    totalFinalResult: 0,
                    seriesData: historicalData,//final,
                    uniqueDataDateTime: uniqueDataDateTime,
                    minMax: []//selectedDataMinMax,
                });
            } else {
                console.log('---out----', historicalData.length)

                res.status(200).json({
                    code: 200,
                    status: "success",
                    selectedDataL: 0,//selectedData.length,
                    totalFinalResult: 0,
                    seriesData: historicalData,//final,
                    uniqueDataDateTime: uniqueDataDateTime,
                    minMax: []//selectedDataMinMax,
                });
                // res.status(200).json(selectedData);
                // console.log(selectedData);
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                code: 400,
                status: "failed",
                message: "Something Went Wrong!Try Again.",
            });
        }
    },
}
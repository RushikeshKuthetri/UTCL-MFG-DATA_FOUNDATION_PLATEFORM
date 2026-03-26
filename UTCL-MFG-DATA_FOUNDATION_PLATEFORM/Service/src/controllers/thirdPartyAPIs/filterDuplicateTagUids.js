// Added by TRID AI for the status based on tagUid present in tagmaster or not  30/12/25

const XLSX = require("xlsx");
const moment = require("moment");

const {
    getQueryWithoutPagination,
    getScan,
} = require("../../helpers/dynamoDB");


module.exports = {
    filterDuplicateTagUids: async (req, res, next) => {
        let { plant, pln_code, tagUids } = req.body;
        console.log("Started here ================================>");

        try {
            /* ---------- VALIDATIONS ---------- */
            if (!Array.isArray(tagUids) || !tagUids.length) {
                return next(
                    Object.assign(new Error("tagUids array is required"), { status: 400 })
                );
            }

            if (!plant && !pln_code) {
                return next(
                    Object.assign(new Error("Plant or Plant SAP Code is required"), { status: 400 })
                );
            }

            if (
                plant &&
                (!req.plantAccess ||
                    !req.plantAccess.includes(plant.match(/[\d\.]+|\D+/g)[0]))
            ) {
                return next(
                    Object.assign(
                        new Error(`You only have access to ${req.plantAccess || "no plants"}`),
                        { status: 400 }
                    )
                );
            }

            if (pln_code && (!req.sapCode || !req.sapCode.includes(pln_code))) {
                return next(
                    Object.assign(new Error(`You only have access to ${req.sapCode}`), { status: 400 })
                );
            }

            /* ---------- DERIVE PLANT FROM SAP CODE ---------- */
            if (!plant && pln_code) {
                const plantQuery = {
                    TableName: "Plant_Details",
                    KeyConditionExpression: "#sap = :sap",
                    ExpressionAttributeNames: {
                        "#sap": "Plant_SAP_Code",
                    },
                    ExpressionAttributeValues: {
                        ":sap": { S: pln_code },
                    },
                };

                const plantResult = await getQueryWithoutPagination(plantQuery);

                if (!plantResult?.Items?.length) {
                    return next(
                        Object.assign(new Error("Invalid Plant SAP Code"), { status: 404 })
                    );
                }

                plant = Object.values(
                    plantResult.Items[0].Generic_Plant_Code
                )[0];
            }

            console.log("Requested Plant =============================>", plant);

            /* ---------- FETCH TAGMASTER UIDS ---------- */
            const scanParams = {
                TableName: `${plant}_TagMaster`,
                ProjectionExpression: "#uid",
                ExpressionAttributeNames: {
                    "#uid": "Tag UID",
                },
            };

            const scanResult = await getScan(scanParams);

            // 🔥 NORMALIZE TAGMASTER UIDS (CASE-INSENSITIVE SAFE)
            const tagMasterUids = new Set(
                scanResult.Items
                    ?.map(item => item["Tag UID"]?.S?.trim().toUpperCase())
                    .filter(Boolean)
            );

            console.log(
                "Total TagMaster UIDs fetched ================>",
                tagMasterUids.size
            );

            /* ---------- COMPARE (CASE-INSENSITIVE EXACT MATCH) ---------- */
            const response = tagUids.map(uid => ({
                tagUid: uid,
                status: tagMasterUids.has(uid.trim().toUpperCase()),
            }));

            /* ---------- RESPONSE ---------- */
            return res.status(200).json({
                status: "success",
                result: response,
                total: response.length,
                tokenExpiresAt: moment(req.tokenExpiresAt)
                    .utcOffset(330)
                    .format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
            });

        } catch (error) {
            next(error);
        }
    }
};

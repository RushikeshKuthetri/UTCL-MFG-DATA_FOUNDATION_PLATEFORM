// /* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import {
//     CentralTable,
//     CentralTableLegend,
//     MillRunningStatusTable,
//     ScreenLoader,
// } from "../../../components";
// import {
//     getCentralisedTableData,
//     getLatestDataForCentralisedDashboardTable,
//     // useSocketConnection,
//     getKilnShutDownStatus,
//     getCMShutDownStatus,
// } from "../../../utils";
// import "./NorthClusterSummary.scss";
// import { getHoTagDetails } from "../../../utils/apicalls/centralisedDashboard";

// export const NorthClusterSummary = () => {
//     const { centralisedDashboardData } = useSelector((state) => state);
//     const dispatch = useDispatch();

//     const [intervalId, setIntervalId] = useState(undefined);

//     useEffect(() => {
//         (async () => {
//             dispatch({ type: "START_LOADER" });
//             try {
//                 dispatch({ type: "HO_DASHBOARD_LOADING_TRUE" });
//                 const response = await getCentralisedTableData();
//                 dispatch({ type: "HO_DASHBOARD_LOADING_FALSE" });
//                 dispatch({
//                     type: "INSERT_CENTRALISED_TABLE_DATA",
//                     payload: response,
//                 });
//                 const latesDataResponse =
//                     await getLatestDataForCentralisedDashboardTable();
//                 dispatch({
//                     type: "SOCKET_DATA",
//                     payload: latesDataResponse,
//                 });

//                 const id = setInterval(async () => {
//                     const latesDataResponse =
//                         await getLatestDataForCentralisedDashboardTable();
//                     dispatch({
//                         type: "SOCKET_DATA",
//                         payload: latesDataResponse,
//                     });
//                 }, 60000); // 1 minutes in milliseconds

//                 setIntervalId(id)
//             } catch (error) {
//                 console.error(error);
//             }
//             dispatch({ type: "STOP_LOADER" });
//         })();
//     }, [dispatch]);

//     useEffect(() => {
//         (async () => {
//             dispatch({ type: "START_LOADER" });
//             try {
//                 const kilnResponse = await getKilnShutDownStatus();
//                 dispatch({
//                     type: "KILN_SHUTDOWN_STATUS",
//                     payload: kilnResponse,
//                 });
//                 const cmResponse = await getCMShutDownStatus();
//                 dispatch({
//                     type: "CM_SHUTDOWN_STATUS",
//                     payload: cmResponse,
//                 });
//                 const hoTagDetail = await getHoTagDetails({})
//                 if (hoTagDetail?.length) {
//                     dispatch({
//                         type: "HO_TAGS_DETAILS",
//                         payload: {
//                             tagNames: hoTagDetail,
//                         },
//                     });
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//             dispatch({ type: "STOP_LOADER" });
//         })();
//     }, []);

//     useEffect(() => {
//         return () => {
//             dispatch({
//                 type: "HO_TAGS_DETAILS",
//                 payload: {
//                     tagNames: [],
//                 },
//             });
//             if (intervalId) {
//                 clearInterval(intervalId);
//             }
//         };
//     }, [])
//     // console.log(centralisedDashboardData.centralisedDashboardPlants)
//     // useSocketConnection(centralisedDashboardData.centralisedDashboardPlants);
//     return (
//         <section className="mill-running cd_table_bg px-2">
//             {centralisedDashboardData.loader ? (
//                 <ScreenLoader />
//             ) : (
//                 <div className="h-100">
//                     <div className="table-responsive table-scroll border border-secondary text-nowrap">
//                         <CentralTable />
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

import "./NorthClusterSummary.scss";

const EquipmentCell = ({ tags = [] }) => {
    return (
        <div className="equip-column">
            {tags.map((tag) => (
                <div key={tag.tagUid} className="equip-box">
                    {tag.tagName}
                </div>
            ))}
        </div>
    );
};

const CentralTableHeader = () => {
    return (
        <thead>
            <tr>
                <th className="th_bg plant_name">Plant Name</th>
                <th className="th_bg">Line</th>
                <th className="th_bg">Crusher</th>
                <th className="th_bg">RM</th>
                <th className="th_bg">Coal Mill</th>
                <th className="th_bg">Kiln</th>
                <th className="th_bg">Cement Mill</th>
            </tr>
        </thead>
    );
};

/* ================= Table Body ================= */
const CentralTableBody = ({ data }) => {
    return (
        <tbody>
            {data.map((row) => (
                <tr key={row.plant}>
                    <th className="plant_name">{row.plant}</th>
                    <th>{row.line}</th>

                    <td><EquipmentCell tags={row.crusher} /></td>
                    <td><EquipmentCell tags={row.rm} /></td>
                    <td><EquipmentCell tags={row.coalMill} /></td>
                    <td><EquipmentCell tags={row.kiln} /></td>
                    <td><EquipmentCell tags={row.cementMill} /></td>
                </tr>
            ))}
        </tbody>
    );
};

/* ================= Table Wrapper ================= */
const CentralTable = ({ data }) => {
    return (
        <table className="table cd_table fix-table">
            <CentralTableHeader />
            <CentralTableBody data={data} />
        </table>
    );
};

/* ================= DATA (TAGNAME + TAGUID) ================= */
const data = [
    {
        plant: "Vikram",
        line: "3 Lines",

        crusher: [
            { tagName: "CRUSHER_1_TPH", tagUid: "UID_VIK_CR_1" },
            { tagName: "CRUSHER_2_TPH", tagUid: "UID_VIK_CR_2" },
            { tagName: "CRUSHER_3_TPH", tagUid: "UID_VIK_CR_3" },
        ],

        rm: [
            { tagName: "RM_1_TPH", tagUid: "UID_VIK_RM_1" },
            { tagName: "RM_2_TPH", tagUid: "UID_VIK_RM_2" },
            { tagName: "RM_3_TPH", tagUid: "UID_VIK_RM_3" },
        ],

        coalMill: [
            { tagName: "CM_1_TPH", tagUid: "UID_VIK_CM_1" },
            { tagName: "CM_2_TPH", tagUid: "UID_VIK_CM_2" },
            { tagName: "CM_3_TPH", tagUid: "UID_VIK_CM_3" },
        ],

        kiln: [
            { tagName: "KILN_1_TPH", tagUid: "UID_VIK_KILN_1" },
            { tagName: "KILN_2_TPH", tagUid: "UID_VIK_KILN_2" },
            { tagName: "KILN_3_TPH", tagUid: "UID_VIK_KILN_3" },
        ],

        cementMill: [
            { tagName: "MILL_1_TPH", tagUid: "UID_VIK_MILL_1" },
            { tagName: "MILL_2_TPH", tagUid: "UID_VIK_MILL_2" },
            { tagName: "MILL_3_TPH", tagUid: "UID_VIK_MILL_3" },
        ],
    },

    {
        plant: "Aditya",
        line: "3 Lines",

        crusher: [
            { tagName: "CRUSHER_1_TPH", tagUid: "UID_ADI_CR_1" },
        ],

        rm: [
            { tagName: "RM_1_TPH", tagUid: "UID_ADI_RM_1" },
            { tagName: "RM_2_TPH", tagUid: "UID_ADI_RM_2" },
            { tagName: "RM_3_TPH", tagUid: "UID_ADI_RM_3" },
        ],

        coalMill: [
            { tagName: "CM_1_TPH", tagUid: "UID_ADI_CM_1" },
            { tagName: "CM_2_TPH", tagUid: "UID_ADI_CM_2" },
            { tagName: "CM_3_TPH", tagUid: "UID_ADI_CM_3" },
        ],

        kiln: [
            { tagName: "KILN_1_TPH", tagUid: "UID_ADI_KILN_1" },
            { tagName: "KILN_2_TPH", tagUid: "UID_ADI_KILN_2" },
            { tagName: "KILN_3_TPH", tagUid: "UID_ADI_KILN_3" },
        ],

        cementMill: [
            { tagName: "MILL_1_TPH", tagUid: "UID_ADI_MILL_1" },
            { tagName: "MILL_2_TPH", tagUid: "UID_ADI_MILL_2" },
            { tagName: "MILL_3_TPH", tagUid: "UID_ADI_MILL_3" },
        ],
    },

    {
        plant: "Nathdwara",
        line: "3 Lines",

        crusher: [
            { tagName: "CRUSHER_1_TPH", tagUid: "UID_NAT_CR_1" },
            { tagName: "CRUSHER_2_TPH", tagUid: "UID_NAT_CR_2" },
        ],

        rm: [
            { tagName: "RM_1_TPH", tagUid: "UID_NAT_RM_1" },
            { tagName: "RM_2_TPH", tagUid: "UID_NAT_RM_2" },
            { tagName: "RM_3_TPH", tagUid: "UID_NAT_RM_3" },
        ],

        coalMill: [
            { tagName: "CM_1_TPH", tagUid: "UID_NAT_CM_1" },
            { tagName: "CM_2_TPH", tagUid: "UID_NAT_CM_2" },
            { tagName: "CM_3_TPH", tagUid: "UID_NAT_CM_3" },
        ],

        kiln: [
            { tagName: "KILN_1_TPH", tagUid: "UID_NAT_KILN_1" },
            { tagName: "KILN_2_TPH", tagUid: "UID_NAT_KILN_2" },
            { tagName: "KILN_3_TPH", tagUid: "UID_NAT_KILN_3" },
        ],

        cementMill: [
            { tagName: "MILL_1_TPH", tagUid: "UID_NAT_MILL_1" },
            { tagName: "MILL_2_TPH", tagUid: "UID_NAT_MILL_2" },
            { tagName: "MILL_3_TPH", tagUid: "UID_NAT_MILL_3" },
            { tagName: "MILL_4_TPH", tagUid: "UID_NAT_MILL_4" },
        ],
    },

    {
        plant: "Pali",
        line: "1 Line",

        crusher: [
            { tagName: "CRUSHER_1_TPH", tagUid: "UID_PAL_CR_1" },
        ],

        rm: [
            { tagName: "RM_1_TPH", tagUid: "UID_PAL_RM_1" },
        ],

        coalMill: [
            { tagName: "CM_1_TPH", tagUid: "UID_PAL_CM_1" },
        ],

        kiln: [
            { tagName: "KILN_1_TPH", tagUid: "UID_PAL_KILN_1" },
        ],

        cementMill: [
            { tagName: "MILL_1_TPH", tagUid: "UID_PAL_MILL_1" },
        ],
    },

    {
        plant: "Baga",
        line: "1 Line",

        crusher: [
            { tagName: "CRUSHER_1_TPH", tagUid: "UID_BAG_CR_1" },
            { tagName: "CRUSHER_2_TPH", tagUid: "UID_BAG_CR_2" },
            { tagName: "CRUSHER_3_TPH", tagUid: "UID_BAG_CR_3" },
        ],

        rm: [
            { tagName: "RM_1_TPH", tagUid: "UID_BAG_RM_1" },
            { tagName: "RM_2_TPH", tagUid: "UID_BAG_RM_2" },
        ],

        coalMill: [
            { tagName: "CM_1_TPH", tagUid: "UID_BAG_CM_1" },
        ],

        kiln: [
            { tagName: "KILN_1_TPH", tagUid: "UID_BAG_KILN_1" },
        ],

        cementMill: [
            { tagName: "MILL_1_TPH", tagUid: "UID_BAG_MILL_1" },
        ],
    },

    {
        plant: "Dhar",
        line: "2 Lines",

        crusher: [
            { tagName: "CRUSHER_1_TPH", tagUid: "UID_DHA_CR_1" },
        ],

        rm: [
            { tagName: "RM_1_TPH", tagUid: "UID_DHA_RM_1" },
            { tagName: "RM_2_TPH", tagUid: "UID_DHA_RM_2" },
        ],

        coalMill: [
            { tagName: "CM_1_TPH", tagUid: "UID_DHA_CM_1" },
            { tagName: "CM_2_TPH", tagUid: "UID_DHA_CM_2" },
        ],

        kiln: [
            { tagName: "KILN_1_TPH", tagUid: "UID_DHA_KILN_1" },
            { tagName: "KILN_2_TPH", tagUid: "UID_DHA_KILN_2" },
        ],

        cementMill: [
            { tagName: "MILL_1_TPH", tagUid: "UID_DHA_MILL_1" },
            { tagName: "MILL_2_TPH", tagUid: "UID_DHA_MILL_2" },
            { tagName: "MILL_3_TPH", tagUid: "UID_DHA_MILL_3" },
        ],
    },

    {
        plant: "Kotputli",
        line: "2 Lines",

        crusher: [
            { tagName: "CRUSHER_1_TPH", tagUid: "UID_KOT_CR_1" },
            { tagName: "CRUSHER_2_TPH", tagUid: "UID_KOT_CR_2" },
        ],

        rm: [
            { tagName: "RM_1_TPH", tagUid: "UID_KOT_RM_1" },
            { tagName: "RM_2_TPH", tagUid: "UID_KOT_RM_2" },
        ],

        coalMill: [
            { tagName: "CM_1_TPH", tagUid: "UID_KOT_CM_1" },
            { tagName: "CM_2_TPH", tagUid: "UID_KOT_CM_2" },
        ],

        kiln: [
            { tagName: "KILN_1_TPH", tagUid: "UID_KOT_KILN_1" },
            { tagName: "KILN_2_TPH", tagUid: "UID_KOT_KILN_2" },
        ],

        cementMill: [
            { tagName: "MILL_1_TPH", tagUid: "UID_KOT_MILL_1" },
            { tagName: "MILL_2_TPH", tagUid: "UID_KOT_MILL_2" },
            { tagName: "MILL_3_TPH", tagUid: "UID_KOT_MILL_3" },
        ],
    },
];



/* ================= PAGE ================= */
export const NorthClusterSummary = () => {
    return (
        <section className="mill-running cd_table_bg px-2">
            <div className="h-100">
                <div className="table-responsive table-scroll border border-secondary text-nowrap">
                    <CentralTable data={data} />
                </div>
            </div>
        </section>
    );
};



// ------------------------------------------------------------
// 2️⃣ TABLE MAPPING using your exact provided number mapping
// ------------------------------------------------------------

export const plantOverviewRows = [
    { label: "RUN STATUS" },
    { label: "KW" },
    { label: "FEED" },
    { label: "RUN HOURS" },
    { label: "RUN HOURS" },
    { label: "BLENDING SILO LVL" },
    { label: "CLINKER SILO LVL" },
];

export const plantOverviewColumns = [
    {
        title: "RM1",
        tags: [
            [1],
            [2, 44],
            [3],
            [23],
            [24],
            [19],
            [20]
        ]
    },
    {
        title: "RM2",
        tags: [
            [4],
            [5, 45],
            [6],
            [25],
            [26],
            [21],
            [22]
        ]
    },
    {
        title: "COAL MILL",
        tags: [
            [7],
            [8],
            [9],
            [27],
            [28],
            [],
            []
        ]
    },
    {
        title: "KILN",
        tags: [
            [10],
            [11, 43],
            [42],
            [29],
            [30],
            [16],
            [17]
        ]
    },
    {
        title: "IKN COOLER",
        tags: [
            [12, 13],
            [46],
            [],
            [],
            [47],
            [],
            []
        ]
    },
    {
        title: "PREHEATER",
        tags: [
            [15, 18],
            [40],
            [48],
            [],
            [49],
            [37, 38],
            [39]
        ]
    },
    {
        title: "RABH",
        tags: [
            [14],
            [41],
            [],
            [31],
            [32, 33],
            [34, 35],
            [36]
        ]
    }
];



// Static tag list for fetching data and showing on ui 
export const plantOverviewTagList = [
    {
        "slNo": 1,
        "TagUID": "E-RWCW3-RM1-ST-SV-RM1_363MD1_RUN",
        "key": "RM1_363MD1_RUN",
        "unit": "Status",
        "assetId": "b8f9d9cf-4537-4bfb-9219-552064dfc260",
        "propertyId": "5c43b83c-c2b9-436c-ae8d-c8148c19c0d4",
        "description": "Fixed Roller Main Drive",
        "IsDisplay": true,
        "TagName": "RM1_363MD1_RUN"
    },
    {
        "slNo": 2,
        "TagUID": "E-RWCW3-RM1-J-PV-RM1_363MD1_JI",
        "key": "RM1_363MD1_JI",
        "unit": "kW",
        "assetId": "6f24a96d-10f4-4b3c-8cab-477b897a560e",
        "propertyId": "af1e1e25-3444-47b9-93af-1e8a373dbb88",
        "description": "Fixed Roller Main Drive, Motor Power",
        "IsDisplay": true,
        "TagName": "RM1_363MD1_JI"
    },
    {
        "slNo": 3,
        "TagUID": "E-RWCW3-RM1-ST-SV-RM1_333WF_FEED",
        "key": "RM1_333WF_FEED",
        "unit": "Status",
        "assetId": "b8f9d9cf-4537-4bfb-9219-552064dfc260",
        "propertyId": "70abf55f-0765-494b-a7c4-28ca9a2a3a8c",
        "description": "RM1 Mill Feed Actual",
        "IsDisplay": true,
        "TagName": "RM1_333WF_FEED"
    },
    {
        "slNo": 4,
        "TagUID": "E-RWCW3-RM2-ST-SV-RM2_363MD4_RUN",
        "key": "RM2_363MD4_RUN",
        "unit": "Status",
        "assetId": "68a95737-af38-4166-b624-3d48e4295199",
        "propertyId": "f9722c49-b7e7-494f-839b-c7f15555bf15",
        "description": "Fixed Roller Main Drive",
        "IsDisplay": true,
        "TagName": "RM2_363MD4_RUN"
    },
    {
        "slNo": 5,
        "TagUID": "E-RWCW3-RM2-J-PV-RM2_363MD4_JI",
        "key": "RM2_363MD4_JI",
        "unit": "kW",
        "assetId": "27cd0693-f820-4f28-86bb-7091c9f2d479",
        "propertyId": "4607d547-90a3-4a5f-99ba-2a5ac91d3887",
        "description": "Fixed Roller Main Drive, Motor Power",
        "IsDisplay": true,
        "TagName": "RM2_363MD4_JI"
    },
    {
        "slNo": 6,
        "TagUID": "E-RWCW3-RM2-ST-SV-RM2_333WF_FEED",
        "key": "RM2_333WF_FEED",
        "unit": "Status",
        "assetId": "68a95737-af38-4166-b624-3d48e4295199",
        "propertyId": "d5ce047b-5018-4ba5-9ef7-b273982aa39a",
        "description": "RM2 Mill Feed Actual",
        "IsDisplay": true,
        "TagName": "RM2_333WF_FEED"
    },
    {
        "slNo": 7,
        "TagUID": "E-RWCW3-KM1-ST-SV-KM_L43MD1_RUN",
        "key": "KM_L43MD1_RUN",
        "unit": "Status",
        "assetId": "ca775412-16eb-4c97-94d7-eb34be7eb027",
        "propertyId": "eb3769ab-ba8e-4041-841d-831766cc15b3",
        "description": "Coal Mill Main Drive Run feedback",
        "IsDisplay": true,
        "TagName": "KM_L43MD1_RUN"
    },
    {
        "slNo": 8,
        "TagUID": "E-RWCW3-KM1-J-PV-KM_L43MD1_JI",
        "key": "KM_L43MD1_JI",
        "unit": "kW",
        "assetId": "089a5c33-d430-4579-9333-67bf535d3bf1",
        "propertyId": "f3ea84c7-4a6a-4285-b430-bb73b9acb098",
        "description": "Coal Mill Main drive Wattmeter",
        "IsDisplay": true,
        "TagName": "KM_L43MD1_JI"
    },
    {
        "slNo": 9,
        "TagUID": "E-RWCW3-KM1-F-PV-KM_TOTAL_FEED_RATE",
        "key": "KM_TOTAL_FEED_RATE",
        "unit": "TPH",
        "assetId": "089a5c33-d430-4579-9333-67bf535d3bf1",
        "propertyId": "b0034cb1-cc7c-41b6-aebd-ae9009a303c8",
        "description": "Feed Rate",
        "IsDisplay": true,
        "TagName": "KM_TOTAL_FEED_RATE"
    },
    {
        "slNo": 10,
        "TagUID": "E-RWCW3-KL1-ST-SV-KL_463MD1_RUN",
        "key": "KL_463MD1_RUN",
        "unit": "Status",
        "assetId": "3dc802b0-3b11-4434-b0e9-5f214aa2fa71",
        "propertyId": "be356da1-5d28-49b5-83ee-8665c849f73a",
        "description": "Run Feedback",
        "IsDisplay": true,
        "TagName": "KL_463MD1_RUN"
    },
    {
        "slNo": 11,
        "TagUID": "E-RWCW3-KL1-J-PV-KL_463MD1_KW",
        "key": "KL_463MD1_KW",
        "unit": "kW",
        "assetId": "017d5b49-d6c6-4e82-b521-324670749831",
        "propertyId": "f38cb6a2-309d-4ba8-b6a6-89290f25820e",
        "description": "Kiln Main Drive Master VFD - Power",
        "IsDisplay": true,
        "TagName": "KL_463MD1_KW"
    },
    {
        "slNo": 12,
        "TagUID": "E-RWCW3-CL1-ST-SV-CL_473CC1_RUN",
        "key": "CL_473CC1_RUN",
        "unit": "Status",
        "assetId": "bfac2d60-183d-4f95-a40a-01e35fb1aac4",
        "propertyId": "1d188a5c-b107-4147-a4b5-5cfdaae05ba0",
        "description": "Grate Drive Run Feedback",
        "IsDisplay": true,
        "TagName": "CL_473CC1_RUN"
    },
    {
        "slNo": 14,
        "TagUID": "E-RWCW3-PH1-ST-SV-PH_423FN1_FB",
        "key": "PH_423FN1_FB",
        "unit": "Status",
        "assetId": "66cfc49e-b0c1-4274-a1af-a2be63bd4ab3",
        "propertyId": "0515cbf6-4172-4a9a-9033-5ade8e60ae81",
        "description": "Run Feedback",
        "IsDisplay": true,
        "TagName": "PH_423FN1_FB"
    },
    {
        "slNo": 15,
        "TagUID": "E-RWCW3-PH1-ST-SV-PH_443FN1_FB",
        "key": "PH_443FN1_FB",
        "unit": "Status",
        "assetId": "da69af92-ede2-425c-9e65-d3a520145e7a",
        "propertyId": "9ce32dd8-3be8-404a-ac70-06f19b93ee02",
        "description": "Run Feedback",
        "IsDisplay": true,
        "TagName": "PH_443FN1_FB"
    },
    {
        "slNo": 16,
        "TagUID": "E-RWCW3-PH1-ST-SV-PH_433DQ1_RUN",
        "key": "PH_433DQ1_RUN",
        "unit": "Status",
        "assetId": "da69af92-ede2-425c-9e65-d3a520145e7a",
        "propertyId": "4ee6bbb9-1352-48d6-b083-7a4f6e1bacb9",
        "description": "Remote Mode Selected",
        "IsDisplay": true,
        "TagName": "PH_433DQ1_RUN"
    },
    {
        "slNo": 17,
        "TagUID": "E-RWCW3-PH1-ST-SV-PH_433DQ2_RUN",
        "key": "PH_433DQ2_RUN",
        "unit": "Status",
        "assetId": "da69af92-ede2-425c-9e65-d3a520145e7a",
        "propertyId": "39a3a739-af83-47ab-a05b-f61e0c5ec2dc",
        "description": "Run Feedback",
        "IsDisplay": true,
        "TagName": "PH_433DQ2_RUN"
    },
    {
        "slNo": 18,
        "TagUID": "E-RWCW3-PH1-ST-SV-PH_443FN1_RUN",
        "key": "PH_443FN1_RUN",
        "unit": "Status",
        "assetId": "da69af92-ede2-425c-9e65-d3a520145e7a",
        "propertyId": "8701f44d-cfda-4c2f-9ccb-55c31b87277b",
        "description": "Pre Heater Fan Run",
        "IsDisplay": true,
        "TagName": "PH_443FN1_RUN"
    },
    {
        "slNo": 19,
        "TagUID": "E-RWCW3-PH1-L-PV-PH_393SB1_LT",
        "key": "PH_393SB1_LT",
        "unit": "mtr",
        "assetId": "1ae2e97e-ed77-4adf-8764-f502d4118971",
        "propertyId": "341f0355-9826-4243-ac57-c31679e58459",
        "description": "Level Transmitter",
        "IsDisplay": true,
        "TagName": "PH_393SB1_LT"
    },
    {
        "slNo": 20,
        "TagUID": "E-RWCW3-CL1-L-PV-CL_493SI1_LT1",
        "key": "CL_493SI1_LT1",
        "unit": "mtr",
        "assetId": "d2ba207a-06ce-4c2c-88a3-585edb4557bd",
        "propertyId": "4970a37c-6bc4-4901-801f-b53213ac0aab",
        "description": "Clinker Silo Level",
        "IsDisplay": true,
        "TagName": "CL_493SI1_LT1"
    },
    {
        "slNo": 31,
        "TagUID": "E-RWCW3-PH1-Q-PV-PH_423SK1_DT",
        "key": "PH_423SK1_DT",
        "unit": "mg/m3",
        "assetId": "1ae2e97e-ed77-4adf-8764-f502d4118971",
        "propertyId": "ea952055-88cb-4dde-986b-5a9de2bfa3ad",
        "description": "Opacity Reading",
        "IsDisplay": true,
        "TagName": "PH_423SK1_DT"
    },
    {
        "slNo": 32,
        "TagUID": "E-RWCW3-PH1-Q-PV-PH_423AM1_NOX",
        "key": "PH_423AM1_NOX",
        "unit": "ppm",
        "assetId": "1ae2e97e-ed77-4adf-8764-f502d4118971",
        "propertyId": "65eda3fd-9053-4fdd-91b8-fbfdd4734fe8",
        "description": "NOx Value",
        "IsDisplay": true,
        "TagName": "PH_423AM1_NOX"
    },
    {
        "slNo": 33,
        "TagUID": "E-RWCW3-PH1-Q-PV-PH_423AM1_O2",
        "key": "PH_423AM1_O2",
        "unit": "%",
        "assetId": "1ae2e97e-ed77-4adf-8764-f502d4118971",
        "propertyId": "a2ab7bc8-7a1e-4dbc-aaaf-07d09202e0e9",
        "description": "Oxygen Value",
        "IsDisplay": true,
        "TagName": "PH_423AM1_O2"
    },
    {
        "slNo": 34,
        "TagUID": "E-RWCW3-PH1-Q-PV-PH_423AM1_SOX",
        "key": "PH_423AM1_SOX",
        "unit": "ppm",
        "assetId": "1ae2e97e-ed77-4adf-8764-f502d4118971",
        "propertyId": "03dab144-dc8e-4ed6-9141-eb9b429d8c4d",
        "description": "SOx Value",
        "IsDisplay": true,
        "TagName": "PH_423AM1_SOX"
    },
    {
        "slNo": 35,
        "TagUID": "E-RWCW3-CL1-P-PV-CL_473SK01_SK1",
        "key": "CL_473SK01_SK1",
        "unit": "Bar",
        "assetId": "bfac2d60-183d-4f95-a40a-01e35fb1aac4",
        "propertyId": "94f42ad6-6040-4b24-844c-4d24917edd93",
        "description": "ESP Stack Opacity",
        "IsDisplay": true,
        "TagName": "CL_473SK01_SK1"
    },
    {
        "slNo": 36,
        "TagUID": "E-RWCW3-KM1-Q-PV-KM_L43SK1_SK",
        "key": "KM_L43SK1_SK",
        "unit": "%",
        "assetId": "089a5c33-d430-4579-9333-67bf535d3bf1",
        "propertyId": "561001b7-5819-4d5c-aa9b-26a0ad2ab314",
        "description": "Opacity Reading",
        "IsDisplay": true,
        "TagName": "KM_L43SK1_SK"
    },
    {
        "slNo": 37,
        "TagUID": "E-RWCW3-KL1-WE-PV-KL_453BI1_WT",
        "key": "KL_453BI1_WT",
        "unit": "mt",
        "assetId": "94a41e46-6f50-4d84-9ed6-2d9f00afb92b",
        "propertyId": "2557ff4d-ea68-46a7-995a-41963bcf3991",
        "description": "Coal Bin 1 Weight",
        "IsDisplay": true,
        "TagName": "KL_453BI1_WT"
    },
    {
        "slNo": 38,
        "TagUID": "E-RWCW3-KL1-WE-PV-KL_453BI2_WT",
        "key": "KL_453BI2_WT",
        "unit": "mt",
        "assetId": "94a41e46-6f50-4d84-9ed6-2d9f00afb92b",
        "propertyId": "72323f00-dd06-4a9d-b677-be7a864f4fd4",
        "description": "Coal Bin 2 Weight",
        "IsDisplay": true,
        "TagName": "KL_453BI2_WT"
    },
    {
        "slNo": 39,
        "TagUID": "E-RWCW3-KL1-WE-PV-KL_483BI1_WT",
        "key": "KL_483BI1_WT",
        "unit": "mt",
        "assetId": "94a41e46-6f50-4d84-9ed6-2d9f00afb92b",
        "propertyId": "05105fc4-3385-4db3-8615-465fecb89179",
        "description": "Coal Bin 3 Weight",
        "IsDisplay": true,
        "TagName": "KL_483BI1_WT"
    },
    {
        "slNo": 43,
        "TagUID": "E-RWCW3-KL1-J-PV-KL_463MD2_KW",
        "key": "KL_463MD2_KW",
        "unit": "kW",
        "assetId": "017d5b49-d6c6-4e82-b521-324670749831",
        "propertyId": "4ff0ba3c-5757-4796-96a9-047240ddba06",
        "description": "Kiln Follower Drive Power",
        "IsDisplay": true,
        "TagName": "KL_463MD2_KW"
    },
    {
        "slNo": 44,
        "TagUID": "E-RWCW3-RM1-J-PV-RM1_363MD2_JI",
        "key": "RM1_363MD2_JI",
        "unit": "kW",
        "assetId": "6f24a96d-10f4-4b3c-8cab-477b897a560e",
        "propertyId": "b2cddd3d-2498-43fc-9c12-b217f0818013",
        "description": "Floating Roller Main Drive Power",
        "IsDisplay": true,
        "TagName": "RM1_363MD2_JI"
    },
    {
        "slNo": 45,
        "TagUID": "E-RWCW3-RM2-J-PV-RM2_363MD5_JI",
        "key": "RM2_363MD5_JI",
        "unit": "kW",
        "assetId": "27cd0693-f820-4f28-86bb-7091c9f2d479",
        "propertyId": "10e30c88-24d6-4a01-92dd-c632a4a1d221",
        "description": "Floating Roller Main Drive Power",
        "IsDisplay": true,
        "TagName": "RM2_363MD5_JI"
    },
    {
        "slNo": 13,
        "TagUID": "E-RWCW3-CL1-ST-SV-CL_473FNF_M01_RUN",
        "key": "CL_473FNF_M01_RUN",
        "unit": "Status",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "2a4f65a8-d4d1-4963-bf51-7dd66f63173b",
        "description": "CL_473FNF other",
        "IsDisplay": true,
        "TagName": "CL_473FNF_M01_RUN"
    },
    {
        "slNo": 21,
        "TagUID": "E-RWCW3-PH1-L-PV-PH_393SB1_LT_MT",
        "key": "PH_393SB1_LT_MT",
        "unit": "MT",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "a8a65bad-33c8-431c-9e81-f2a0e9884485",
        "description": "Preheater Fan KW",
        "IsDisplay": true,
        "TagName": "PH_393SB1_LT_MT"
    },
    {
        "slNo": 22,
        "TagUID": "E-RWCW3-CL1-L-PV-CL_493SI1_LT_MT",
        "key": "CL_493SI1_LT_MT",
        "unit": "MT",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "2a4f65a8-d4d1-4963-bf51-7dd66f63173b",
        "description": "Silo Level	",
        "IsDisplay": true,
        "TagName": "CL_493SI1_LT_MT"
    },
    {
        "slNo": 23,
        "TagUID": "E-RWCW3-RM1-TI-PV-RM1_363MD1_TD_RunH",
        "key": "RM1_363MD1_TD_RunH",
        "unit": "hr",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "e23f7210-db4b-48b6-9869-996b828a699e",
        "description": "Running Hours",
        "IsDisplay": true,
        "TagName": "RM1_363MD1_TD_RunH"
    },
    {
        "slNo": 24,
        "TagUID": "E-RWCW3-RM1-TI-PV-RM1_363MD1_PRV_RunH",
        "key": "RM1_363MD1_PRV_RunH",
        "unit": "hr",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "d6bfc85c-d954-4339-ad05-34a5f155f45b",
        "description": "Running Hours",
        "IsDisplay": true,
        "TagName": "RM1_363MD1_PRV_RunH"
    },
    {
        "slNo": 25,
        "TagUID": "E-RWCW3-RM1-TI-PV-RM2_363MD4_TD_RunH",
        "key": "RM2_363MD4_TD_RunH",
        "unit": "hr",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "2569b2fe-4805-4b15-940b-1f64c6ef6c6c",
        "description": "Running Hours",
        "IsDisplay": true,
        "TagName": "RM2_363MD4_TD_RunH"
    },
    {
        "slNo": 26,
        "TagUID": "E-RWCW3-RM1-TI-PV-RM2_363MD4_PRV_RunH",
        "key": "RM2_363MD4_PRV_RunH",
        "unit": "hr",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "8d8189d4-78c9-4e5a-b3af-d68187d154c3",
        "description": "Running Hours",
        "IsDisplay": true,
        "TagName": "RM2_363MD4_PRV_RunH"
    },
    {
        "slNo": 27,
        "TagUID": "E-RWCW3-KM1-TI-PV-KM_L43MD1_TD_RUNH",
        "key": "KM_L43MD1_TD_RUNH",
        "unit": "hr",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "097d11ac-f9f1-4066-a956-c8063d9e1722",
        "description": "Running Hours",
        "IsDisplay": true,
        "TagName": "KM_L43MD1_TD_RUNH"
    },
    {
        "slNo": 28,
        "TagUID": "E-RWCW3-KM1-TI-PV-KM_L43MD1_PRV_RUNH",
        "key": "KM_L43MD1_PRV_RUNH",
        "unit": "hr",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "e895596f-4661-4979-8dba-d5ff2f2eb6ee",
        "description": "Running Hours",
        "IsDisplay": true,
        "TagName": "KM_L43MD1_PRV_RUNH"
    },
    {
        "slNo": 29,
        "TagUID": "E-RWCW3-KL1-TI-PV-KL_463MD_1_2_TD_RunH",
        "key": "KL_463MD_1_2_TD_RunH",
        "unit": "hr",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "9eaef94b-0c00-4e52-b67c-3cbdbbf5fd99",
        "description": "Running Hours",
        "IsDisplay": true,
        "TagName": "KL_463MD_1_2_TD_RunH"
    },
    {
        "slNo": 30,
        "TagUID": "E-RWCW3-KL1-TI-PV-KL_463MD_1_2_PRV_RunH",
        "key": "KL_463MD_1_2_PRV_RunH",
        "unit": "hr",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "1ada5c8a-bf76-4689-9d39-487c8c730c00",
        "description": "Running Hours",
        "IsDisplay": true,
        "TagName": "KL_463MD_1_2_PRV_RunH"
    },
    {
        "slNo": 40,
        "TagUID": "E-RWCW3-PH1-J-PV-PH_443FN1_ETH_JI",
        "key": "PH_443FN1_ETH_JI",
        "unit": "kW",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "a8a65bad-33c8-431c-9e81-f2a0e9884485",
        "description": "Preheater Fan KW",
        "IsDisplay": true,
        "TagName": "PH_443FN1_ETH_JI"
    },
    {
        "slNo": 41,
        "TagUID": "E-RWCW3-PH1-J-PV-PH_423FN1_JI01",
        "key": "PH_423FN1_JI01",
        "unit": "kW",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "c8082d8f-23b3-4155-aef0-97b10c6684db",
        "description": "Baghouse fan KW	",
        "IsDisplay": true,
        "TagName": "PH_423FN1_JI01"
    },
    {
        "slNo": 42,
        "TagUID": "E-RWCW3-PH1-F-PV-KILN_TOTAL_FEED_RATE",
        "key": "KILN_TOTAL_FEED_RATE",
        "unit": "TPH",
        "assetId": "9690225d-de67-492a-ae60-e111f3e4dd2b",
        "propertyId": "5609bcd4-5d00-40b7-b4fe-4e14837eda1a",
        "description": "Feed Rate",
        "IsDisplay": true,
        "TagName": "KILN_TOTAL_FEED_RATE"
    },
    {
        "slNo": 46,
        "TagUID": "E-RWCW3-CL1-R-PV-GrateDrive_man",
        "key": "GrateDrive_man",
        "unit": "SPM",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "2a4f65a8-d4d1-4963-bf51-7dd66f63173b",
        "description": "Cooler Grate SPM",
        "IsDisplay": true,
        "TagName": "GrateDrive_man"
    },
    {
        "slNo": 47,
        "TagUID": "E-RWCW3-CR1-F-PV-CR2_213BW6",
        "key": "CR2_213BW6",
        "unit": "TPH",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "519a7c3b-8681-4fe4-a490-3e370d7ace16",
        "description": "Stacker Belt TPH",
        "IsDisplay": true,
        "TagName": "CR2_213BW6"
    },
    {
        "slNo": 48,
        "TagUID": "E-RWCW3-KL1-R-PV-KL_SPEED_PID",
        "key": "KL_SPEED_PID",
        "unit": "RPM",
        "assetId": "0ea03e61-8ed7-4c1f-b598-e3a79c3a445d",
        "propertyId": "c6b50e95-1737-4f15-ad4f-9a75f1eb75da",
        "description": "KILN SPEED",
        "IsDisplay": true,
        "TagName": "KL_SPEED_PID"
    },
    {
        "slNo": 49,
        "TagUID": "E-RWCW3-KL1-S-PV-KL_LVDT_POS",
        "key": "KL_LVDT_POS",
        "unit": "mm",
        "assetId": "76541e24-e730-4e89-b599-a198964ad27b",
        "propertyId": "96d1028c-ff16-4cd1-b839-fffe815a8269",
        "description": "Kiln Position",
        "IsDisplay": true,
        "TagName": "KL_LVDT_POS"
    }
]
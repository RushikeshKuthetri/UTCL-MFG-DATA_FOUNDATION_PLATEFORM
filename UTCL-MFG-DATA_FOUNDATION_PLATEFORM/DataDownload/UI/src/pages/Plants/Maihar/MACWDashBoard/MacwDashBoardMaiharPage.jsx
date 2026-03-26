import {
  MacwDashBoardMaiharNodes,
  MacwDashBoardMaiharNodesType,
} from "../../../../reactflow";
import "./MacwDashBoardMaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const MacwDashBoardMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={MacwDashBoardMaiharNodes}
        nodeType={MacwDashBoardMaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Cement Mill-3",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 1
              Tags: [
                "61MDR",
                "CM1_OPC_FEED",
                "CM1_PPC_FEED",
                "VRM_AVG_FEED",
                "RP_AVG_FEED",
                "CM1_PPC_AVG_FEED",
                "CM1_OPC_AVG_FEED",
                "CVRM_AVG_FEED",
              ],
            },
            {
              Section: "Cement Mill-2", //line 1
              Tags: [
                "CM2_OPC_FEED",
                "CM2_PPC_FEED",
                "M2MD",
                "62MDR",
                "CM2_PPC_AVG_FEED",
                "CM2_OPC_AVG_FEED",
              ],
            },
            {
              Section: "Coal Mill", //line 1
              Tags: ["M4MD"],
            },
            {
              Section: "General", //line 1
              Tags: ["_KT3012"],
            },
            {
              Section: "Kiln", //line 1
              Tags: [
                "KILN1_FEED",
                "461MD1",
                "462MD1",
                "41LV02",
                "41LV03",
                "M1MD",
                "KILN1_AVG_FEED",
                "KILN2_AVG_FEED",
              ],
            },
            {
              Section: "Raw Mill", //line 1
              Tags: [
                "V23M1",
                "RP_TOTAL_FEED",
                "VRM TOTAL FEED",
                "391SB4_LT",
                "391SB5_LT",
                "391SB6_LT",
                "CVRM_TOTAL_TPH",
                "V23M1",
              ],
            },
            {
              Section: "Raw Mill-2", //line 1
              Tags: ["362MD1"],
            },
            {
              Section: "Kiln", //line 2
              Tags: ["KILN2_FEED", "M3MDRV"],
            },
            {
              Section: "Cement Mill", //line 3
              Tags: [
                "51BM1",
                "51_FEED_OPC",
                "51_FEED_PPC",
                "52_FEED_OPC",
                "52_FEED_PPC",
              ],
            },
            {
              Section: "Cement Mill-2", //line 3
              Tags: ["52BM1", "LT6004", "LT6005", "LT6006"],
            },
            {
              Section: "Coal Mill", //line 3
              Tags: [
                "KT3003",
                "KT3010",
                "KT3011",
                "L40RM1",
                "TOTAL_COALMILL_FEED",
              ],
            },
            {
              Section: "Kiln", //line 3
              Tags: [
                "KW9011_IND",
                "421MD1",
                "LT4001",
                "LT4002",
                "TOTAL_KILN_FEED",
              ],
            },
            {
              Section: "Raw Mill", //line 3
              Tags: ["320RM1", "RM_TOT_FEED", "SILOLVL"],
            },
            {
              Section: "Crusher",
              Tags: ["CR1", "OLBC_BW_TPH_M1", "212CR1P", "211BC7_BW_TPH"],
            },
            // line 4
            {
              Section: "Crusher",
              Tags: ["CR_214BW2_TPH", "CR214MD1_RUN"],
            },
            {
              Section: "Raw Mill-1",
              Tags: [
                "RM_364MD1_VCB_ON",
                "RMH_TOTAL_FEED_RATE",
                "RM_394SB1_CAL_LT",
                "RM_TR4_JI",
                "RM_TR5_JI_CAL",
              ],
            },
            {
              Section: "Coal Mill",
              Tags: ["KM_L44MD1_RUN", "KM_WF_TOT_FR"],
            },
            {
              Section: "Cement Mill-6",
              Tags: [
                "CM_566MD3_VCB_ON",
                "CM_ACTUAL_FR",
                "CM_614SI1_LT",
                "CM_614SI3_LT",
                "CM_614SI4_LT",
                "CM_614SI2_LT",
              ],
            },
            {
              Section: "Kiln",
              Tags: ["TTL_KILN_FEED"],
            },
            {
              Section: "Cement Mill-7",
              Tags: ["CM_567MD3_VCB_ON"],
            },
            {
              Section: "Clinker Transport",
              Tags: ["CL_494SI1_CALC_Level"],
            },
            {
              Section: "PreHeater",
              Tags: ["PH_464MD1_RUN"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

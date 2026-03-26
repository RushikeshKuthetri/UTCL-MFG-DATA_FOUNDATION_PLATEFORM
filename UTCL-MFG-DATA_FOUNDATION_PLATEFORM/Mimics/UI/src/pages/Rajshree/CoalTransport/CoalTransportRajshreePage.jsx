import "./CoalTransportRajshree.scss";
import { ReactFlowProvider } from "reactflow";
import {
  coalTransportRajshreeNodes,
  coalTransportRajshreeNodesType,
} from "../../../reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoalTransportRajshreePage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={coalTransportRajshreeNodes}
        nodeType={coalTransportRajshreeNodesType}
        plantDetails={{
          plantCode: "RC",
          plantName: "rajashree",
          sectionName: "Cement Mill-2",
          section: "Cement Mill-2",
          line: "4",
          extraTagDetails: [
            {
              Section: "Cement Mill",
              Tags: [
                "CMH_534HP5_WA",
                "CMH_534HP7_WA",
                "CMH_K24SB1_LTP",
                "CM1_624SB1_LTP1",
                "CM1_624SB1_LTP2",
                "CM1_624SB1_LTP3",
                "K24BC3_II",
                "K14TT1_IA",
                "CM1_564SK1_LVL",
              ],
            },
            {
              Section: "Clinker Transport",
              Tags: [
                "_534HP8_LTP",
                "CMH_514HP1_LTP",
                "CMH_514HP2_LTP",
                "CMH_514HP3_LTP",
              ],
            },
            {
              Section: "Kiln",
              Tags: [
                "KL_484BI2_WI_P",
                "KL_484BI4_WI_P",
                "KL_484BF1_DPTP",
                "KL_484BI1_WTA1_HW",
                "KL_484FP1_TUB_WI_P",
                "KL_484FP1_TTP1",
                "KL_484BI2_WTA1_HW",
                "KL_484FP2_TUB_WI_P",
                "KL_484FP2_TTP1",
                "KL_484BF2_DPTP",
                "KL_484FP3_TUB_WI_P",
                "KL_484BI3_WTA1_HW",
                "KL_484FP4_TUB_WI_P",
                "KL_484BF3_DPTP",
                "464FN4M01_II",
                "KL_484BL1_PTP",
                "KL_484BL3_PTP",
                "KL_484BL2_PTP",
                "KL_484PC1_FTA",
                "KL_484PC2_FTA",
                "KL_484FP_PTP",
                "KL_484FP1_PTP",
                "KL_484FP2_PTP",
                "KL_484FP3_PTP",
                "KL_484FP4_PTP",
                "KL_484FP3_TTP1",
                "KL_484BL2_BTE1",
                "KL_484BL2_BTE2",
                "KL_484BL2_WTE1",
                "KL_484BL2_WTE2",
                "KL_484BL2_WTE3",
                "KL_484BL1_Curr",
                "KL_484BL1_KW",
                "KL_484BL3_Curr",
                "KL_484BL3_KW",
                "KL_484BL2_Curr",
                "KL_484BL2_KW",
                "KL_484BL4_Curr",
                "KL_484BL5_KW",
                "KL_484BL5_Curr",
                "KL_484FP1_II1",
                "KL_484FP1_SAA",
                "KL_484FP2_II1",
                "KL_484FP2_SAA",
                "KL_484FP3_II1",
                "KL_484FP3_SAA",
                "KL_484FP4_II1",
                "KL_484FP4_SAA",
                "KL_484BL3_BTE1",
                "KL_484BL3_BTE2",
                "KL_484BL3_WTE1",
                "KL_484BL3_WTE2",
                "KL_484BL3_WTE3",
                "KL_484BL1_BTE1",
                "KL_484BL1_BTE2",
                "KL_484BL1_WTE1",
                "KL_484BL1_WTE2",
                "KL_484BL1_WTE3",
                "KL_484BL4_BTE1",
                "KL_484BL4_BTE2",
                "KL_484BL4_WTE1",
                "KL_484BL4_WTE2",
                "KL_484BL4_WTE3",
                "KL_484BL5_BTE1",
                "KL_484BL5_BTE2",
                "KL_484BL5_WTE1",
                "KL_484BL5_WTE2",
                "KL_484BL5_WTE3",
              ],
            },
            {
              Section: "Coal Mill",
              Tags: [
                "KL_484FP1_TUB_WI_P",
                "KL_484FP2_TUB_WI_P",
                "KL_484FP3_TUB_WI_P",
                "KM_484FP2_FTA1",
                "KM_484FP4_FTA1",
              ],
            },
            {
              Section: "General",
              Tags: ["UTLY_AIR_HDR_PTP"],
            },
            {
              Section: "Raw Mill",
              Tags: ["RM1_RPBRG_DIS_RGT_RDM"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

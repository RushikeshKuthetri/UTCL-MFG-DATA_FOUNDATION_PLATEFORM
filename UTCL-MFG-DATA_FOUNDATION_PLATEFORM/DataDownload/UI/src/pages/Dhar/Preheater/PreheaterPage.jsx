import { PreheaterDharNodes, PreheaterDharNodesType } from "../../../reactflow";
import "./PreheaterPage.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PreheaterPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PreheaterDharNodes}
        nodeType={PreheaterDharNodesType}
        plantDetails={{
          plantCode: "DHCW",
          plantName: "dhar",
          sectionName: "PreHeater",
          section: "Preheater",
          line: "1",
          extraTagDetails: [
            {
              Section: "Coal Mill", //line 1
              Tags: [
                "CO_L41MD1_KW",
                "CO_L41DU2_TT1",
                "CO_L41DU2_PT1",
                "CO_L41DU2_PT91",
                "CO_L41DU2_TT91",
                "CO_L41HP1_WT",
                "CO_L481BI1_WT1",
                "CO_L451BI1_WT1",
                "CO_L41DU1_DPT1",
                "CO_L41BF3_DPT",
                "CO_L41WF2_SA",
                "CO_L41SR1_SA",
                "CO_L41SR1_IT",
                "CO_L41MD1_IT",
                "CO_L41SR1_SI1",
                "CO_L41SR1_TT1",
                "CO_L61TT1",
                "CO_L41BF1_PT1",
                "CO_L41MD1_SPC_KW",
                "CO_L41FN2_SPC_KW",
              ],
            },
            {
              Section: "Cooler", //line 1
              Tags: [
                "KL_461KL1_TT2",
                "KL_461KL1_PT4",
                "KL_461KL1_PT3",
                "KL_461KL1_TT3",
                "CL_471EP1_TT1",
                "CL_471FN4_PT",
                "CL_491SI1_LT",
                "CL_491SI2_LT",
              ],
            },
            {
              Section: "Kiln", //line 1
              Tags: [
                "TOTAL_KILN_FEED",
                "KL_441FT2_FT1",
                "KL_461GB1_XT1",
                "KL_461GB1_XT2",
                "KL_461GB1_XT3",
                "KL_461GB1_XT4",
                "KL_441FT_FCV_ZTA",
                "KL_461KT1_ZT1",
                "KL_451DQ1_BIN_WT",
                "KL_441FT1_LT1",
                "KL_451BL1_PT",
                "KL_461MD1_SA",
                "KL_481BL3_PT",
                "KL_481BL4_PT",
                "KL_481BL5_PT",
                "KL_461MD1_IT",
                "KL_461MD1_KW",
                "AFR_TPH",
                "CL_471GS_SA",
                "KL_461KL1_BZONE_TT",
                "CL_491DB1_II",
              ],
            },
            {
              Section: "Raw Mill", //line 1
              Tags: ["RM_391SB1_LT2"],
            },
            {
              Section: "WHRS", //line 1
              Tags: ["PH_PT_102", "PH_TT_102"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

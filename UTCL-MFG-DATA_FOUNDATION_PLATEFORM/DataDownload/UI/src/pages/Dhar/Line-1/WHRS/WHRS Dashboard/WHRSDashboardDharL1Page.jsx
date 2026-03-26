import { WHRSDashboardDharL1Nodes, WHRSDashboardDharL1NodesType } from "../../../../../reactflow";
import "./WHRSDashboardDharL1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const WHRSDashboardDharL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={WHRSDashboardDharL1Nodes}
        nodeType={WHRSDashboardDharL1NodesType}
        plantDetails={{
          plantCode: "DHCW",
          plantName: "dhar",
          sectionName: "WHRS",
          section: "WHRS Dashboard",
          line: "1",
          extraTagDetails: [
            {
              Section: "Coal Mill", //line 1
              Tags: [
                "CO_L41DU2_TT91",
                "CO_L41DU2_TT1",
              ],
            },
            {
              Section: "Cooler", //line 1
              Tags: [
                "KL_461KL1_PT3",
                "KL_461KL1_TT3",
                "CL_471CC1_TI1",
                "CL_471DU1_TT2",
                "CL_471FNF_SA",
                "CL_TOT_FLOW_PER_KG",
                "CL_471FN1_SA",
                "CL_471FN2_SA",
                "CL_471FN3_SA",
                "CL_471FN4_SA",
                "CL_471FN5_SA",
                "CL_471FN6_SA",
                "CL_471FN7_SA",
                "CL_471FN8_SA",
                "CL_471FN9_SSP",
                "CL_471FNA_SA",
                "CL_471FNB_SA",
                "CL_471FNC_SA",
                "CL_471FN1_FT",
                "CL_471FN2_FT",
                "CL_471FN3_FT",
                "CL_471FN4_FT",
                "CL_471FN5_FT",
                "CL_471FN6_FT",
                "CL_471FN7_FT",
                "CL_471FN8_FT",
                "CL_471FN9_FT",
                "CL_471FNA_FT",
                "CL_471FNB_FT",
                "CL_471FNC_FT",
                "CL_471LD6_ZT",
                "CL_471EP1_TT1",
                "CL_471EP1_TT4",
              ],
            },
            {
              Section: "Kiln", //line 1
              Tags: [
                "TOTAL_KILN_FEED",
                "KL_461KL1_BZONE_TT",
                "CL_471GS_SA",
                "KL_461DA1_ZTA",
                "KL_461DA2_ZTA",
                "KL_481DA1_ZT1",
              ],
            },
            {
              Section: "PreHeater", //line 1
              Tags: [
                "PH_461DU1_TT7",
                "PH_441FN1_SA",
                "PH_441FN1_TT2",
                "PH_451PR1_CO",
                "PH_451PR1_O2",
                "PH_451KL_CO",
                "PH_451KL_O2",
                "PH_441PHO_AIAH_CO",
                "PH_441PHO_AIAH_O2",
                "PH_441PH1_CN1A_TT1",
                "PH_441PH1_CN1B_TT1",
                "PH_441PH2_CN1A_TT1",
                "PH_441PH2_CN1B_TT1",
                "PH_WHRS_TT101A",
              ],
            },
            {
              Section: "Raw Mill", //line 1
              Tags: [
                "RM_361DU3_TT92",
                "RM_361DU1_TT1",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

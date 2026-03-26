import "../../../../Plants/Vikram/WHRS/Overview/OverviewVikramWhrsPage.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";
import {
  OverviewVikramWhrsNodes,
  OverviewVikramWhrsNodesType,
} from "../../../../../reactflow";

export const OverviewVikramWhrsPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={OverviewVikramWhrsNodes}
        nodeType={OverviewVikramWhrsNodesType}
        plantDetails={{
          plantCode: "VCW",
          plantName: "Vikram",
          sectionName: "WHRS",
          section: "Overview",
          line: "1",
          extraTagDetails: [
            {
              Section: "WHRS", //line-3
              Tags: [
                "W3_AHP_MAS_003_PT",
                "W3_AHP_MAS_004_TT",
                "W3_AHP_FW_LIT_001A",
                "W3_AHP_MAS_001_PT",
                "W3_A_FLG_001_PT",
                "W3_A_FLG_001_TT",
                "W3_A_FLG_003_PT",
                "W3_A_FLG_008_TT",
                "W3_A_FLG_ISD_001_ZT",
                "W3_A_FLG_MLD_001_ZT",
                "W3_A_FLG_RAV_001_CURNT",
                "W3_A_FLG_CNV_001_CURNT",
                "W3_A_FLG_CNV_003_CURNT",
                "W3_A_FLG_BL_003_SI",
                "W3_PHP_MAS_TI_001",
                "W3_PHP_MAS_FI_001",
                "W3_PHP_FW_LI_001A",
                "W3_PHP_MAS_PI_001",
                "W3_PLP_MAS_TI_001",
                "W3_PLP_FW_LI_001A",
                "W3_PLP_MAS_PI_001",
                "W3_P_FLG_001_PT",
                "W3_P_FLG_001_TT",
                "W3_P_FLG_004_PT",
                "W3_P_FLG_007_TT",
                "W3_P_FLG_ISD_001_ZT",
                "W3_P_FLG_MLD_001_ZT",
                "W3_P_FLG_RAV_001_CURNT",
                "W3_P_FLG_CNV_001_CURNT",
                "W3_P_FLG_CNV_003_CURNT",
                "W3_MW_TODAY_TOT",
                "W3_MW_TODAY_TOT_AVRG",
                "W3_MW_YESTERDAY_TOT",
                "W3_MW_TOT",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

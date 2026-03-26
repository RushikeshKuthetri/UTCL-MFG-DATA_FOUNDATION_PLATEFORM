import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  l1DashBoardVikramNodes,
  l1DashBoardVikramNodesType,
} from "../../../../reactflow";
import "./L1DashboardVikramPage.scss";

export const L1DashboardVikramPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={l1DashBoardVikramNodes}
        nodeType={l1DashBoardVikramNodesType}
        vikramplant={true}
        plantDetails={{
          plantCode: "VCW",
          plantName: "vikram",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Raw Mill",
              Tags: ["rm1run", "VC1RM1_E38_RUN_T", "VC1RM1_TOTAL_FEED", "VC1RM1_SILO1_RDR_LVL", "VC1RM1_SILO1_MT", "VC1RM1_SILO2_RDR_LVL", "VC1RM1_SILO2_MT", "VC1RM1_LSF"]
            },
            {
              Section: "Coal Mill",
              Tags: ["coal1run", "VC1CO1_E96_RUN_T"]
            },
            {
              Section: "Kiln",
              Tags: ["kiln1run", "VC1KL1_E30_RUN_T", "VC1KL1_KILNFEED", "VC1KL1_CLK_T", "CLINKER_TOTAL", "VC1KF1_LSF", "VC3_TPP2_LOAD"]
            },
            {
              Section: "TPP",
              Tags: ["TPP_TOTAL_MW", "TPP_TOTAL_MW"]
            }
          ]
          
        }}
      />
    </ReactFlowProvider>
  );
};

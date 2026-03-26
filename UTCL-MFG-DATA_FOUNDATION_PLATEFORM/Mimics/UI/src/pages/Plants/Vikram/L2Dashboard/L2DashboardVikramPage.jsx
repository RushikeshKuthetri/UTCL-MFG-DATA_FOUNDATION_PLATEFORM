import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  l2DashBoardVikramNodes,
  l2DashBoardVikramNodesType,
} from "../../../../reactflow";
import "./L2DashboardVikramPage.scss";

export const L2DashboardVikramPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={l2DashBoardVikramNodes}
        nodeType={l2DashBoardVikramNodesType}
        vikramplant={true}
        plantDetails={{
          plantCode: "VCW",
          plantName: "vikram",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Raw Mill",
              Tags: [
                "rm2run",
                "VC2RM2_E29_RUN_T",
                "VC2RM2_TOTAL_FEED",
                "VC2RM2_SILO1_RDR_LVL",
                "VC2RM2_SILO1_MT",
                "VC2RM2_SILO2_MT",
                "VC2RM2_LSF",
              ],
            },
            {
              Section: "Coal Mill",
              Tags: ["KL2RUN", "VC2CO2_E3_RUN_T"],
            },
            {
              Section: "Kiln",
              Tags: [
                "KILN2RUN",
                "VC2KL2_E14_RUN_T",
                "VC2KL2_KILNFEED",
                "VC2KL2_CLK_T",
                "CLINKER_TOTAL",
                "VC2KF2_LSF",
                "VC2CL2_FCAO",
                "VC2KL2_AL_SL_RATIO",
              ],
            },
            {
              Section: "Cooler",
              Tags: ["VC2CL2_LSF", "VC2KL2_C3S", "VC2KL2_SO3", "VC2KL2_CL"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

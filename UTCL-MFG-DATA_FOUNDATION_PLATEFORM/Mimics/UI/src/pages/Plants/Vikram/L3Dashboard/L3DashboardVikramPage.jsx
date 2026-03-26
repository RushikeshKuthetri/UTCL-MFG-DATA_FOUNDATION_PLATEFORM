import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  l3DashBoardVikramNodes,
  l3DashboardVikramNodesType,
} from "../../../../reactflow";
import "./L3DashboardVikramPage.scss";

export const L3DashboardVikramPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={l3DashBoardVikramNodes}
        nodeType={l3DashboardVikramNodesType}
        vikramplant={true}
        plantDetails={{
          plantCode: "VCW",
          plantName: "vikram",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "3",
          extraTagDetails: [
            {
              Section: "Raw Mill",
              Tags: [
                "RMRUN",
                "VC3_E34_RUNHRS_T",
                "VC3_RM3_TOTAL_FEED",
                "VC3_SILO_RDR_LVL",
                "VC3RM1_SILO_MT",
                "VC3_RM_LSF",
              ],
            },
            {
              Section: "Coal Mill",
              Tags: ["KMRUN", "VC3_S9_RUN_T"],
            },
            {
              Section: "Kiln",
              Tags: [
                "KILNRUN",
                "VC3_K20_RUN_T",
                "KILNFEED",
                "VC3_CLK_T",
                "CLINKER_TOTAL",
                "VC3_KF_LSF",
                "VC3CL3_C3S",
                "VC3_FCAO",
                "VC3_KL_CL",
                "VC3KL3_AL_SL_RATIO",
              ],
            },
            {
              Section: "Cooler",
              Tags: ["VC3_CL_LSF", "VC3_KL_SO3"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

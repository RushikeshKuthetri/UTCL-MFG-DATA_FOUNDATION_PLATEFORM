import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  uhDashBoardVikramNodes,
  uhDashBoardVikramNodesType,
} from "../../../../reactflow";
import "./UHDashboardVikramPage.scss";

export const UHDashboardVikramPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={uhDashBoardVikramNodes}
        nodeType={uhDashBoardVikramNodesType}
        vikramplant={true}
        plantDetails={{
          plantCode: "VCW",
          plantName: "vikram",
          sectionName: "Cement mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Raw Mill",
              line: "1",
              Tags: ["rm1run", "VC1RM1_E38_RUN_T", "VC1RM1_TOTAL_FEED"],
            },
            {
              Section: "Coal Mill",
              line: "1",
              Tags: ["coal1run", "VC1CO1_E96_RUN_T"],
            },
            {
              Section: "Kiln",
              line: "1",
              Tags: ["kiln1run", "VC1KL1_E30_RUN_T", "VC1KL1_KILNFEED"],
            },
            {
              Section: "Raw Mill",
              line: "2",
              Tags: ["rm2run", "VC2RM2_E29_RUN_T", "VC2RM2_TOTAL_FEED"],
            },
            {
              Section: "Coal Mill",
              line: "2",
              Tags: ["KL2RUN", "VC2CO2_E3_RUN_T"],
            },
            {
              Section: "Kiln",
              line: "2",
              Tags: ["KILN2RUN", "VC2KL2_E14_RUN_T", "VC2KL2_KILNFEED"],
            },
            {
              Section: "Raw Mill",
              line: "3",
              Tags: ["RMRUN", "VC3_E34_RUNHRS_T", "VC3_RM3_TOTAL_FEED"],
            },
            {
              Section: "Coal Mill",
              line: "3",
              Tags: ["KMRUN", "VC3_S9_RUN_T"],
            },
            {
              Section: "Kiln",
              line: "3",
              Tags: ["KILNRUN", "VC3_K20_RUN_T", "KILNFEED"],
            },
            {
              Section: "Cement Mill",
              line: "2",
              Tags: [
                "CM2RUN",
                "VC2CM2_E73_RUN_T",
                "VC2CM2_TOTAL_FEED",
                "VC2CM2_SILO1_RDR_LVL",
                "VC2CM2_SILO1_MT",
                "VC2CM2_SILO2_RDR_LVL",
                "VC2CM2_SILO2_MT",
                "VC2CM2_TOTAL_FEED_T_0",
              ],
            },
            {
              Section: "Cement Mill",
              line: "3",
              Tags: [
                "CMRUN",
                "VC3_N32_RUNHRS_T",
                "VC3_CM3_TOTAL_FEED",
                "VC3_SILO1_RDR_LVL",
                "VC3CM3_SILO1_MT",
                "VC3_SILO2_CONT_LEVEL",
                "VC3CM3_SILO2_MT",
                "VC3_CM3_TOTAL_FEED_T",
                "CMRUN",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

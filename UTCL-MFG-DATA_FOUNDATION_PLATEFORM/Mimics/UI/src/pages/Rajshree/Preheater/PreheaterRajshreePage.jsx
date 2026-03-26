import "./PreheaterRajshree.scss";
import { ReactFlowProvider } from "reactflow";
import {
  preheaterRajshreeNodes,
  preheaterRajshreeNodesType,
} from "../../../reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const PreheaterRajshreePage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={preheaterRajshreeNodes}
        nodeType={preheaterRajshreeNodesType}
        plantDetails={{
          plantCode: "RC",
          plantName: "rajashree",
          sectionName: "PreHeater",
          section: "Preheater",
          line: "4",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: [
                "KL_464DU1_DPTP",
                "KL_464CN1_PTP",
                "KL_464DU2_DPTP",
                "KL_461KS1_G02",
                "KL_484BU2_TTP1",
                "KL_464DU2_TTP",
                "KL_464DU2_PTP",
                "KL_464DU1_PTP",
                "KL_464DU1_TTP",
                "KL_464MD2_Curr",
                "KL_464MD2_Kw",
                "Kiln_Torque",
                "Kiln_filling_per",
                "Kiln_act_Rpm",
                "KL_464MD1_Curr",
                "KL_464MD1_Kw",
                "KL_444PO1_TTP",
                "KL_444PO1_PTP",
                "KL_484BU1_FTA",
                "KL_484BU1_PTP5",
                "KL_464CN1_PTP1",
                "KL__484BU1_PTP1",
                "KL_484BU1_PTP2",
                "KL_444PO1_O2",
                "KL_444PO1_CO",
                "KL_444PO1_NOX",
                "KL_484FP1_FRA",
                "KL_484FP2_FRA",
                "KL_484FP3_FRA",
                "KL_484FP4_FRA",
                "KL_484FP4_TUB_WI_P",
              ],
            },
            {
              Section: "Cooler",
              Tags: [
                "WHRS_TEA1",
                "SHC",
                "CL_474WS1_FTA1",
                "CL_474SK1_FROM_CLR_CAL",
                "KL_464KO1_PTP",
                "KL_464K01_TTP",
                "CL_494PC1_II",
              ],
            },
            {
              Section: "Coal Mill",
              Tags: [
                "KL_484FP1_TUB_WI_P",
                "KL_484FP2_TUB_WI_P",
                "KL_484FP3_TUB_WI_P",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

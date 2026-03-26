import {
  RawMill2KukurdihNodes,
  RawMill2KukurdihNodesType,
} from "../../../../reactflow";
import "./RawMill2KukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMill2KukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill2KukurdihNodes}
        nodeType={RawMill2KukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "Raw Mill-2",
          section: "Raw Mill-2",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill",
              Tags: [
                "CM_561BF2_DPT",
                "CM_561BI1_WT",
                "CM_531WF3_RUN",
                "CM_531WF3_PH",
                "CM_561SG2_CLS",
              ],
            },
            {
              Section: "PreHeater",
              Tags: ["PH_391SB1_LT", "PH_421FN1_M01_RUN", "PH_421FN1_M01_PH"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

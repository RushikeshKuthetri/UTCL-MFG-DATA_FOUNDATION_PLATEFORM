import "./CGRollerPressHirmiL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CGRollerPressHirmiL1Nodes,
  CGRollerPressHirmiL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CGRollerPressHirmiL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CGRollerPressHirmiL1Nodes}
        nodeType={CGRollerPressHirmiL1NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "Cement Mill",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-2",
              Tags: [
                "SILO1_LEVEL",
                "SILO2_LEVEL",
                "SILO3_LEVEL",
                "SILO5_LEVEL",
                "SILO6_LEVEL",
                "Z1L04_L2",
                "Z2S54_F1",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

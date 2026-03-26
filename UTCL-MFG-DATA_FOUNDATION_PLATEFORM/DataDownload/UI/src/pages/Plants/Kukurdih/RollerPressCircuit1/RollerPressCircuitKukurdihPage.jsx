import {
  RollerPressCircuitKukurdihNodes,
  RollerPressCircuitKukurdihNodesType,
} from "../../../../reactflow";
import "./RollerPressCircuitKukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RollerPressCircuitKukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RollerPressCircuitKukurdihNodes}
        nodeType={RollerPressCircuitKukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

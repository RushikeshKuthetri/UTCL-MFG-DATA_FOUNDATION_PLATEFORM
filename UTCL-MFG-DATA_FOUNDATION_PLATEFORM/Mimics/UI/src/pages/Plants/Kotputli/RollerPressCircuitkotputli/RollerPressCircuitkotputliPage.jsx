import {
  RollerPressCircuitkotputliNodes,
  RollerPressCircuitkotputliNodesType,
} from "../../../../reactflow";
import "./RollerPressCircuitkotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RollerPressCircuitkotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RollerPressCircuitkotputliNodes}
        nodeType={RollerPressCircuitkotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "2",
        }}
      />
    </ReactFlowProvider>
  );
};

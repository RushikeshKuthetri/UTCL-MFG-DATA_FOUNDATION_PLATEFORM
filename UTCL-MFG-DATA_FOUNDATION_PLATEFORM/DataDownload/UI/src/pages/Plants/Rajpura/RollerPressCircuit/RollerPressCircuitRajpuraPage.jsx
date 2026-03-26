import {
  RollerPressCircuitRajpuraNodes,
  RollerPressCircuitRajpuraNodesType,
} from "../../../../reactflow";
import "./RollerPressCircuitRajpuraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RollerPressCircuitRajpuraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RollerPressCircuitRajpuraNodes}
        nodeType={RollerPressCircuitRajpuraNodesType}
        plantDetails={{
          plantCode: "RJCW",
          plantName: "Rajpura",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

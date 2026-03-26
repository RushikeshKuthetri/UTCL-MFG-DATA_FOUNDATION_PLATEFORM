import {
  CementGrindingRollerPressMagdallaNodes,
  CementGrindingRollerPressMagdallaNodesType,
} from "../../../../reactflow";
import "./CementGrindingRollerPressMagdallaPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementGrindingRollerPressMagdallaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementGrindingRollerPressMagdallaNodes}
        nodeType={CementGrindingRollerPressMagdallaNodesType}
        plantDetails={{
          plantCode: "NMGD",
          plantName: "magdalla",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

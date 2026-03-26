import {
  FlyashCircuitMagdallaNodes,
  FlyashCircuitMagdallaNodesType,
} from "../../../../reactflow";
import "./FlyashCircuitMagdallaPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const FlyashCircuitMagdallaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={FlyashCircuitMagdallaNodes}
        nodeType={FlyashCircuitMagdallaNodesType}
        plantDetails={{
          plantCode: "NMGD",
          plantName: "Magdalla",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "2",
        }}
      />
    </ReactFlowProvider>
  );
};

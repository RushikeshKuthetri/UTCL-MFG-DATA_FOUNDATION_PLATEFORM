import {
  FlyashHandlingMagdallaNodes,
  FlyashHandlingMagdallaNodesType,
} from "../../../../reactflow";
import "./FlyashHandlingMagdallaPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const FlyashHandlingMagdallaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={FlyashHandlingMagdallaNodes}
        nodeType={FlyashHandlingMagdallaNodesType}
        plantDetails={{
          plantCode: "NMGD",
          plantName: "Magdalla",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

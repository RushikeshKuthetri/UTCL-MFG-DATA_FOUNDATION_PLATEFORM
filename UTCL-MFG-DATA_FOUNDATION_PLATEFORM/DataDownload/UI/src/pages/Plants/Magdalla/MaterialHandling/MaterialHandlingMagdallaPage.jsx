import {
  MaterialHandlingMagdallaNodes,
  MaterialHandlingMagdallaNodesType,
} from "../../../../reactflow";
import "./MaterialHandlingMagdallaPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const MaterialHandlingMagdallaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={MaterialHandlingMagdallaNodes}
        nodeType={MaterialHandlingMagdallaNodesType}
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

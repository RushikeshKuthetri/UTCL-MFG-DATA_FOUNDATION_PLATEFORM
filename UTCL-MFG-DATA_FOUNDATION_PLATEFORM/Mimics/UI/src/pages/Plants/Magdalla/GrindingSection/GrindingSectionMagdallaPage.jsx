import {
  GrindingSectionMagdallaNodes,
  GrindingSectionMagdallaNodesType,
} from "../../../../reactflow";
import "./GrindingSectionMagdallaPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const GrindingSectionMagdallaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={GrindingSectionMagdallaNodes}
        nodeType={GrindingSectionMagdallaNodesType}
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

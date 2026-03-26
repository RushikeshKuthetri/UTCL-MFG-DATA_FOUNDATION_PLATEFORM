import {
  SiloFeedPackingMagdallaNodes,
  SiloFeedPackingMagdallaNodesType,
} from "../../../../reactflow";
import "./SiloFeedPackingMagdallaPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const SiloFeedPackingMagdallaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={SiloFeedPackingMagdallaNodes}
        nodeType={SiloFeedPackingMagdallaNodesType}
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

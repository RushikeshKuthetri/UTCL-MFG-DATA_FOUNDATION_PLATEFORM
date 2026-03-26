import {
  Packer3MagdallaNodes,
  Packer3MagdallaNodesType,
} from "../../../../reactflow";
import "./Packer3MagdallaPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const Packer3MagdallaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Packer3MagdallaNodes}
        nodeType={Packer3MagdallaNodesType}
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

import {
  Packer1MagdallaNodes,
  Packer1MagdallaNodesType,
} from "../../../../reactflow";
import "./Packer1MagdallaPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const Packer1MagdallaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Packer1MagdallaNodes}
        nodeType={Packer1MagdallaNodesType}
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

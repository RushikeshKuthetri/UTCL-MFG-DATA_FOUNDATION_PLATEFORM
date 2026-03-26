import {
  Packer2MagdallaNodes,
  Packer2MagdallaNodesType,
} from "../../../../reactflow";
import "./Packer2MagdallaPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const Packer2MagdallaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Packer2MagdallaNodes}
        nodeType={Packer2MagdallaNodesType}
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

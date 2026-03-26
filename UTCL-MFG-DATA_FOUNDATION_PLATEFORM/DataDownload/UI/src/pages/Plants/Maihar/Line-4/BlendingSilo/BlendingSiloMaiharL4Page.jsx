import {
  BlendingSiloMaiharL4Nodes,
  BlendingSiloMaiharL4NodesType,
} from "../../../../../reactflow";
import "./BlendingSiloMaiharL4Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const BlendingSiloMaiharL4Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BlendingSiloMaiharL4Nodes}
        nodeType={BlendingSiloMaiharL4NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "PreHeater",
          section: "Blending Silo",
          line: "4"
        }}
      />
    </ReactFlowProvider>
  );
};

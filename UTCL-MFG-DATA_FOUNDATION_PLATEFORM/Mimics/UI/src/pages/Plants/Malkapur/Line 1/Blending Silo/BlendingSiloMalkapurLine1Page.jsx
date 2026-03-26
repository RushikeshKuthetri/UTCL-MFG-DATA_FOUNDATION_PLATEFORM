import {
    BlendingSiloMalkapurLine1Nodes,
  BlendingSiloMalkapurLine1NodesType
} from "../../../../../reactflow";
import "./BlendingSiloMalkapurLine1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const BlendingSiloMalkapurLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BlendingSiloMalkapurLine1Nodes}
        nodeType={BlendingSiloMalkapurLine1NodesType}
        plantDetails={{
          plantCode: "MLCW",
          plantName: "malkapur",
          sectionName: "Blending Silo",
          section: "Blending Silo",
        }}
      />
    </ReactFlowProvider>
  );
};

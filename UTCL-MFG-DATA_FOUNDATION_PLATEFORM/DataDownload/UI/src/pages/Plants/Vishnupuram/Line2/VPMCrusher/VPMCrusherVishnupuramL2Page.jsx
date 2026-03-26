import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  VPMCrusherVishnupuramL2Nodes,
  VPMCrusherVishnupuramL2NodesType,
} from "../../../../../reactflow";
import "./VPMCrusherVishnupuramL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const VPMCrusherVishnupuramL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={VPMCrusherVishnupuramL2Nodes}
        nodeType={VPMCrusherVishnupuramL2NodesType}
        plantDetails={{
          plantCode: "VSCW",
          plantName: "Vishnupuram",
          sectionName: "VPM Crusher",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

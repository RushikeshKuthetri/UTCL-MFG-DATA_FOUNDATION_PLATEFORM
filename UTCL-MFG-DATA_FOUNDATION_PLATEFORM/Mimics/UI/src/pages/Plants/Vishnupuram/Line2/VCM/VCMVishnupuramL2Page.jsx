import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  VCMVishnupuramL2Nodes,
  VCMVishnupuramL2NodesType,
} from "../../../../../reactflow";
import "./VCMVishnupuramL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const VCMVishnupuramL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={VCMVishnupuramL2Nodes}
        nodeType={VCMVishnupuramL2NodesType}
        plantDetails={{
          plantCode: "VSCW",
          plantName: "Vishnupuram",
          sectionName: "VCM",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

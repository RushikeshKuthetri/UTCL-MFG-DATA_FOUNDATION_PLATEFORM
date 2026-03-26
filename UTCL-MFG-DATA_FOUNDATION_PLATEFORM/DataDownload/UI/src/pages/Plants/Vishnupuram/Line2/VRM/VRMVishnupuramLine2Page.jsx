import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { VRMVishnupuramL2Nodes, VRMVishnupuramL2NodesType } from "../../../../../reactflow";
import "./VRMVishnupuramL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const VRMVishnupuramL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={VRMVishnupuramL2Nodes}
        nodeType={VRMVishnupuramL2NodesType}
        plantDetails={{
          plantCode: "VSCW",
          plantName: "Vishnupuram",
          sectionName: "",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

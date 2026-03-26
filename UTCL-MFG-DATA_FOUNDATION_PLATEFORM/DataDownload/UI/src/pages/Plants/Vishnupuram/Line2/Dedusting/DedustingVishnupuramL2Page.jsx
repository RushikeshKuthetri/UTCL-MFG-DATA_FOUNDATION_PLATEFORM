import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { DedustingVishnupuramL2Nodes, DedustingVishnupuramL2NodesType } from "../../../../../reactflow";
import "./DedustingVishnupuramL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const DedustingVishnupuramL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={DedustingVishnupuramL2Nodes}
        nodeType={DedustingVishnupuramL2NodesType}
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

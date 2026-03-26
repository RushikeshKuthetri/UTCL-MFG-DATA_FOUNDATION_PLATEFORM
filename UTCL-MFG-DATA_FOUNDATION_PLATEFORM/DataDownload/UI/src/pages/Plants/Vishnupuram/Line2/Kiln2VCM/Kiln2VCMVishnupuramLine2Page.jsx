import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {Kiln2VCMVishnupuramL2Nodes, Kiln2VCMVishnupuramL2NodesType } from "../../../../../reactflow";
import "./Kiln2VCMVishnupuramL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const Kiln2VCMVishnupuramL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Kiln2VCMVishnupuramL2Nodes}
        nodeType={Kiln2VCMVishnupuramL2NodesType}
        plantDetails={{
          plantCode: "VSCW",
          plantName: "vishnupuram",
          sectionName: "Kiln 2 VCM",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  OperationViewBasantnagarL1Nodes,
  OperationViewBasantnagarL1NodesType,
} from "../../../../../reactflow";
import "./OperationViewBasantnagarL1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const OperationViewBasantnagarL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={OperationViewBasantnagarL1Nodes}
        nodeType={OperationViewBasantnagarL1NodesType}
        plantDetails={{
          plantCode: "BOCW",
          plantName: "Basantnagar",
          sectionName: "Operation View",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

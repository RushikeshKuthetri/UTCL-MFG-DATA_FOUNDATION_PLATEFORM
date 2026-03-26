import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { CementMill1And2LNVCiruitBasantnagarL1NodesType,CementMill1And2LNVCiruitBasantnagarL1Nodes } from "../../../../../reactflow";
import "./CementMill1And2LNVCiruitBasantnagarL1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const CementMill1And2LNVCiruitBasantnagarL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill1And2LNVCiruitBasantnagarL1Nodes}
        nodeType={CementMill1And2LNVCiruitBasantnagarL1NodesType}
        plantDetails={{
          plantCode: "BOCW",
          plantName: "Basantnagar",
          sectionName: "Cement Mill 1&2 LNV Circuit",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

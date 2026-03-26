import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill1OverviewBasantnagarL1Nodes,
  CementMill1OverviewBasantnagarL1NodesType,
} from "../../../../../reactflow";
import "./CementMill1OverviewBasantnagarL1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const CementMill1OverviewBasantnagarL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill1OverviewBasantnagarL1Nodes}
        nodeType={CementMill1OverviewBasantnagarL1NodesType}
        plantDetails={{
          plantCode: "BOCW",
          plantName: "Basantnagar",
          sectionName: "Cement Mill 1 Overview",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

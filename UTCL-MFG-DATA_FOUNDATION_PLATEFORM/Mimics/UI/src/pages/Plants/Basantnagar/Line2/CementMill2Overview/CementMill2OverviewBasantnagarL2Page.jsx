import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill2OverviewBasantnagarL2Nodes,
  CementMill2OverviewBasantnagarL2NodesType,
} from "../../../../../reactflow";
import "./CementMill2OverviewBasantnagarL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const CementMill2OverviewBasantnagarL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill2OverviewBasantnagarL2Nodes}
        nodeType={CementMill2OverviewBasantnagarL2NodesType}
        plantDetails={{
          plantCode: "BOCW",
          plantName: "Basantnagar",
          sectionName: "Cement Mill 2 Overview",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

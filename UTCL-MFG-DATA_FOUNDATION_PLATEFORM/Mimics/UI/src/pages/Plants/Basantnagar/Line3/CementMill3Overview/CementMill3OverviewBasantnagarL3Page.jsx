import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill3OverviewBasantnagarL3Nodes,
  CementMill3OverviewBasantnagarL3NodesType,
} from "../../../../../reactflow";
import "./CementMill3OverviewBasantnagarL3Page.scss";

import { ReactFlowProvider } from "reactflow";

export const CementMill3OverviewBasantnagarL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill3OverviewBasantnagarL3Nodes}
        nodeType={CementMill3OverviewBasantnagarL3NodesType}
        plantDetails={{
          plantCode: "BOCW",
          plantName: "Basantnagar",
          sectionName: "Cement Mill 3 Overview",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

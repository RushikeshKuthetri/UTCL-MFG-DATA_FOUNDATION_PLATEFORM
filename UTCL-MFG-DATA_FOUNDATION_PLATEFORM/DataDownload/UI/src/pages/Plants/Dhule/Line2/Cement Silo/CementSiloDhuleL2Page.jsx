import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { CementSiloDhuleL2Nodes, CementSiloDhuleL2NodesType } from "../../../../../reactflow";
import "./CementSiloDhuleL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const CementSiloDhuleL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementSiloDhuleL2Nodes}
        nodeType={CementSiloDhuleL2NodesType}
        plantDetails={{
          plantCode: "DUCW",
          plantName: "Dhule",
          sectionName: "Packing Plant",
          section: "",
          line:"2",
          extraTagDetails: [
            {
              Section: "Cement Mill-1", //line 2
              Tags: ["CM2_612SI1_LT"],
            },]
        }}
      />
    </ReactFlowProvider>
  );
};

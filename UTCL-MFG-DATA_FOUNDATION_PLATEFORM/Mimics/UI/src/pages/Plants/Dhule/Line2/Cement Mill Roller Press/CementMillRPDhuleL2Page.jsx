import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { CementMillRPDhuleL2Nodes, CementMillRPDhuleL2NodesType } from "../../../../../reactflow";
import "./CementMillRPDhuleL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const CementMillRPDhuleL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMillRPDhuleL2Nodes}
        nodeType={CementMillRPDhuleL2NodesType}
        plantDetails={{
          plantCode: "DUCW",
          plantName: "Dhule",
          sectionName: "Cement Mill-1",
          section: "",
          line:"2",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 2
              Tags: ["CM2_532WF1_FR"],
            },]
        }}
      />
    </ReactFlowProvider>
  );
};

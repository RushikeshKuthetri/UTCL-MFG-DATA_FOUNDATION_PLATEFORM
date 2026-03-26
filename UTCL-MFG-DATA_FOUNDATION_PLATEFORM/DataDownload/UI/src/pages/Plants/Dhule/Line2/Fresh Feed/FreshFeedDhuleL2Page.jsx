import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { FreshFeedDhuleL2Nodes, FreshFeedDhuleL2NodesType } from "../../../../../reactflow";
import "./FreshFeedDhuleL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const FreshFeedDhuleL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={FreshFeedDhuleL2Nodes}
        nodeType={FreshFeedDhuleL2NodesType}
        plantDetails={{
          plantCode: "DUCW",
          plantName: "Dhule",
          sectionName: "Cement Mill-1",
          section: "",
          line:"2",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 2
              Tags: ["CM2_532BF1_DPT",
                    "CM2_532FN1_II",
                    "CM2_532FN1_SI",
                    "CM2_532WF1_FR",
                    "CM2_532WF1_II",
                    "CM2_532WF1_SI",
                    "CM2_532WF1_WI",
                    "CM2_532WF2_FR",
                    "CM2_532WF2_II",
                    "CM2_532WF2_SI",
                    "CM2_532WF2_WI",
                    "CM2_532WF3_FR",
                    "CM2_532WF3_II",
                    "CM2_532WF3_SI",
                    "CM2_532WF3_WI",
                                  
                  ],
            },]
        }}
      />
    </ReactFlowProvider>
  );
};

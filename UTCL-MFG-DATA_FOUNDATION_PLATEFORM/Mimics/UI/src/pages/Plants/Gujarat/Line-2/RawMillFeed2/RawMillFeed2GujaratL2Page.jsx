import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  RawMillFeed2GujaratLine2Nodes,
  RawMillFeed2GujaratLine2NodesType,
} from "../../../../../reactflow";
import "./RawMillFeed2GujaratL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const RawMillFeed2GujaratL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMillFeed2GujaratLine2Nodes}
        nodeType={RawMillFeed2GujaratLine2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Raw Mill-2",
          section: "Raw Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line 1
              Tags: [
                "RM_TOTAL_FEED_SP",
                "WF_RECIEPE_COUNTER",
                "WF_RECIEPE_COUNTER_YD",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

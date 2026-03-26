import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  RawMill1FeedGujaratL1Nodes,
  RawMill1FeedGujaratL1NodesType,
} from "../../../../../reactflow";
import "./RawMill1FeedGujaratLine1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const RawMill1FeedGujaratLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill1FeedGujaratL1Nodes}
        nodeType={RawMill1FeedGujaratL1NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Raw Mill-2", //line 2
              Tags: [
                "WF_RECIEPE_COUNTER",
                "WF_RECIEPE_COUNTER_YD",
                "RM_TOTAL_FEED_SP",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

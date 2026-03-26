import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CoalMill1FeedGujaratL1Nodes,
  CoalMill1FeedGujaratL1NodesType,
} from "../../../../../reactflow";
import "./CoalMill1FeedGujaratLine1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const CoalMill1FeedGujaratLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMill1FeedGujaratL1Nodes}
        nodeType={CoalMill1FeedGujaratL1NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Coal Mill",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Calciner", //line 1
              Tags: ["F1J05"],
            },
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["K1A01", "K1A02", "K1J01","K1A01",
                ],
            },
            {
              Section: "Raw Mill", //line 1
              Tags: ["PLC_F1J07_S1"],
            },
            {
              Section: "Coal Mill", //line 2
              Tags: ["F2T12"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  Packer3and4GujaratLine1Nodes,
  Packer3and4GujaratLine1NodesType,
} from "../../../../../reactflow/Plants/Gujarat";
import "./Packer3and4GujaratLine1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const Packer3and4GujaratLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Packer3and4GujaratLine1Nodes}
        nodeType={Packer3and4GujaratLine1NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Packing Plant",
          section: "Packer 3 & 4",
          line: "1",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line 1
              Tags: ["R1M01_T2_PID_SPA", "R1J03","R1B03"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  Packer1and2GujaratLine1Nodes,
  Packer1and2GujaratLine1NodesType,
} from "../../../../../reactflow/Plants/Gujarat";
import "./Packer1and2GujaratLine1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const Packer1and2GujaratLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Packer1and2GujaratLine1Nodes}
        nodeType={Packer1and2GujaratLine1NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Packing Plant",
          section: "Packer 1 & 2",
          line: "1",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line 1
              Tags: ["EMS_R1M03_KW"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

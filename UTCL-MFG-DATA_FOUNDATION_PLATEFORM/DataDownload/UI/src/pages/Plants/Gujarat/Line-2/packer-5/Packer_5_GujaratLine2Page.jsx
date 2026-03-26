import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  Packer_5_GujaratLine2Nodes,
  Packer_5_GujaratLine2NodesType,
} from "../../../../../reactflow";
import "./Packer_5_GujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const Packer_5_GujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Packer_5_GujaratLine2Nodes}
        nodeType={Packer_5_GujaratLine2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Cement Mill",
          section: "packer 5",
          line: "1",
          extraTagDetails: [
            {
              Section: "Packing Plant", //line 1
              Tags: [
                "P1HPF11",
                "P1U10_RUN",
                "P1U52",
                "BE02_IZ",
                "P5_BE01_CURRENT_OUT",
                "PK5_FLOW_METER",
                "SBLC1_WZ",
                "SBLC2_WZ",                
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

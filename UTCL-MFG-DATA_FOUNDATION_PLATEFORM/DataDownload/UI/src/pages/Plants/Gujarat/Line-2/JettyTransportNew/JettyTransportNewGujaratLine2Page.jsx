import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  JettyTransportNewGujaratL2Nodes,
  JettyTransportNewGujaratL2NodesType,
} from "../../../../../reactflow";
import "./JettyTransportNewGujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const JettyTransportNewGujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={JettyTransportNewGujaratL2Nodes}
        nodeType={JettyTransportNewGujaratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "General",
          section: "Jetty Transport New",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill-3", //line 2
              Tags: ["X5U06_W1_TOT", "X5U07_W1_TOT"],
            },
            {
              Section: "Packing Plant", //line 1
              Tags: ["RS2_RH", "SL2_RH"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

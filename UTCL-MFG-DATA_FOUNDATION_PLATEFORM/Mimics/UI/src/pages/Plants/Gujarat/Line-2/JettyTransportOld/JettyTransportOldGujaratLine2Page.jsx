import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  JettyTransportOldGujaratL2Nodes,
  JettyTransportOldGujaratL2NodesType,
} from "../../../../../reactflow";
import "./JettyTransportOldGujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const JettyTransportOldGujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={JettyTransportOldGujaratL2Nodes}
        nodeType={JettyTransportOldGujaratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "General",
          section: "Jetty Transport Old",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill-3", //line 2
              Tags: ["U4U01", "U4U02", "U4U03", "JETTY_CEMENT_TPH", "X1J02",
                ],
            },
            {
              Section: "Cooler", //line 2
              Tags: ["CLINKER SILO"],
            },
            {
              Section: "Cement Mill", //line 1
              Tags: ["U2U04"],
            },
            {
              Section: "Packing Plant", //line 1
              Tags: ["RS1_RH", "SL1_RH"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

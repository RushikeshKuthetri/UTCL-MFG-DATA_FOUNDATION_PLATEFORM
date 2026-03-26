import { ReactFlowProvider } from "reactflow";
import {
  rABHandDustTransportmaiharL4Nodes,
  rABHandDustTransportmaiharL4NodesType,
} from "../../../../../reactflow";
import "./RABHandDustTransportMaiharL4Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const RABHandDustTransportMaiharL4Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={rABHandDustTransportmaiharL4Nodes}
        nodeType={rABHandDustTransportmaiharL4NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "Maihar",
          sectionName: "PreHeater",
          section: "RABH and Dust Transport",
          line: "4",
          extraTagDetails: [
            {
              Section: "Raw Mill-1",
              Tags: [
                "RM_364LD4_EOLS",
                "RM_364LD4_ECLS",
                "RM_364LD4_PH",
                "RM_364LD4_ZT",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

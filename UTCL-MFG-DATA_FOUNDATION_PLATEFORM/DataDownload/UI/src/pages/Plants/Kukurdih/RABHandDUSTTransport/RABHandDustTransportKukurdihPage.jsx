import {
  RABHandDustTransportKukurdihNodes,
  RABHandDustTransportKukurdihNodesType,
} from "../../../../reactflow";
import "./RABHandDustTransportKukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RABHandDustTransportKukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RABHandDustTransportKukurdihNodes}
        nodeType={RABHandDustTransportKukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "PreHeater",
          section: "PreHeater",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

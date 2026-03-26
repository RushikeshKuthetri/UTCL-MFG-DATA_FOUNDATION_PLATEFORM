import {
  RABHandDustTransportkotputliNodes,
  RABHandDustTransportkotputliNodesType,
} from "../../../../reactflow";
import "./RABHandDustTransportkotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RABHandDustTransportkotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RABHandDustTransportkotputliNodes}
        nodeType={RABHandDustTransportkotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "PreHeater",
          section: "",
          line: "2",
        }}
      />
    </ReactFlowProvider>
  );
};

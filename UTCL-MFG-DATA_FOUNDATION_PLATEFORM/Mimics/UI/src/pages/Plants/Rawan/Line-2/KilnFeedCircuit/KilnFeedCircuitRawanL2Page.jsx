import "./KilnFeedCircuitRawanL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  KilnFeedCircuitRawanL2Nodes,
  KilnFeedCircuitRawanL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnFeedCircuitRawanL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnFeedCircuitRawanL2Nodes}
        nodeType={KilnFeedCircuitRawanL2NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Kiln",
          section: "Kiln",
          line: "2",
        }}
      />
    </ReactFlowProvider>
  );
};

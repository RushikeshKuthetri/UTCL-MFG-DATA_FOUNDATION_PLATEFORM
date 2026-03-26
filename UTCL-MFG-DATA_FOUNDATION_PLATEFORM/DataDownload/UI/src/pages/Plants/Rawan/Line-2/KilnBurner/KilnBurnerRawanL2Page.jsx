import "./KilnBurnerRawanL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  KilnBurnerRawanL2Nodes,
  KilnBurnerRawanL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnBurnerRawanL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnBurnerRawanL2Nodes}
        nodeType={KilnBurnerRawanL2NodesType}
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

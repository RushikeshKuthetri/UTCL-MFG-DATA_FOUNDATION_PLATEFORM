import "./PreheaterChilmakurL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  PreheaterChilmakurL1Nodes,
  PreheaterChilmakurL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const PreheaterChilmakurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PreheaterChilmakurL1Nodes}
        nodeType={PreheaterChilmakurL1NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Preheater",
          section: "Preheater",
        }}
      />
    </ReactFlowProvider>
  );
};

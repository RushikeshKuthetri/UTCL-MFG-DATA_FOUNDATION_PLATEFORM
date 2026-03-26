import "./LimestonecrusherMalkapurL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  LimestonecrusherMalkapurL1Nodes,
  LimestonecrusherMalkapurL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const LimestonecrusherMalkapurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={LimestonecrusherMalkapurL1Nodes}
        nodeType={LimestonecrusherMalkapurL1NodesType}
        plantDetails={{
          plantCode: "MLCW",
          plantName: "Malkapur",
          sectionName: "Limestone crusher",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

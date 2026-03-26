import { CoalMillMalkapurL1Nodes, CoalMillMalkapurL1NodesType } from "../../../../../reactflow";
import "./CoalMillMalkapurL1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalMillMalkapurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillMalkapurL1Nodes}
        nodeType={CoalMillMalkapurL1NodesType}
        plantDetails={{
          plantCode: "MLCW",
          plantName: "malkapur",
          sectionName: "Coal Mill",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

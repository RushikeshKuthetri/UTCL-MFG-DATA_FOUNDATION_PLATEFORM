import { RawMill1MalkapurL1Nodes, RawMill1MalkapurL1NodesType } from "../../../../../reactflow";
import "./RawMill1MalkapurL1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMill1MalkapurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill1MalkapurL1Nodes}
        nodeType={RawMill1MalkapurL1NodesType}
        plantDetails={{
          plantCode: "MLCW",
          plantName: "malkapur",
          sectionName: "Raw Mill",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

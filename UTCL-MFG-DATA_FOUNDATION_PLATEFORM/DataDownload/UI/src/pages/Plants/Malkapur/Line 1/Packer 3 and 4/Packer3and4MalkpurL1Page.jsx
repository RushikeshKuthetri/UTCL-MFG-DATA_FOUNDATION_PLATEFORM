import "./Packer3and4MalkapurL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  Packer3and4MalkapurL1Nodes,
  Packer3and4MalkapurL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const Packer3and4MalkapurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Packer3and4MalkapurL1Nodes}
        nodeType={Packer3and4MalkapurL1NodesType}
        plantDetails={{
          plantCode: "MLCW",
          plantName: "malkapur",
          sectionName: "Packer 3 and 4",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

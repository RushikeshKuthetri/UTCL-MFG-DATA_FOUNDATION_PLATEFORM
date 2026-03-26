import "./Packer1and2MalkapurL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  Packer1and2MalkapurL1Nodes,
  Packer1and2MalkapurL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const Packer1and2MalkapurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Packer1and2MalkapurL1Nodes}
        nodeType={Packer1and2MalkapurL1NodesType}
        plantDetails={{
          plantCode: "MLCW",
          plantName: "malkapur",
          sectionName: "Packer 1 and 2",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

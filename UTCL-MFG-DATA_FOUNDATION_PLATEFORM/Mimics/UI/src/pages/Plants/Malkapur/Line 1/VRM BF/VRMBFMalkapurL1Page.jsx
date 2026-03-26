import { VRMBFMalkapurL1Nodes, VRMBFMalkapurL1NodesType } from "../../../../../reactflow";
import "./VRMBFMalkapurL1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const VRMBFMalkapurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={VRMBFMalkapurL1Nodes}
        nodeType={VRMBFMalkapurL1NodesType}
        plantDetails={{
          plantCode: "MLCW",
          plantName: "malkapur",
          sectionName: "",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

import "./PoldosSCMalkapurL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  PoldosSCMalkapurL1Nodes,
  PoldosSCMalkapurL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const PoldosSCMalkapurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PoldosSCMalkapurL1Nodes}
        nodeType={PoldosSCMalkapurL1NodesType}
        plantDetails={{
          plantCode: "MLCW",
          plantName: "malkapur",
          sectionName: "Poldos SC",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

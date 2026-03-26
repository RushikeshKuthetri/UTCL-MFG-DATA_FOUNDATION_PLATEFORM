import "./KilnPHMalkapurL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  KilnPHMalkapurL1Nodes,
  KilnPHMalkapurL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnPHMalkapurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnPHMalkapurL1Nodes}
        nodeType={KilnPHMalkapurL1NodesType}
        plantDetails={{
          plantCode: "MLCW",
          plantName: "Malkapur",
          sectionName: "Kiln PH",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

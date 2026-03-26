import "./Limestonecrusher2MalkapurL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  Limestonecrusher2MalkapurL1Nodes,
  Limestonecrusher2MalkapurL1NodesTypes,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const Limestonecrusher2MalkapurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Limestonecrusher2MalkapurL1Nodes}
        nodeType={Limestonecrusher2MalkapurL1NodesTypes}
        plantDetails={{
          plantCode: "MLCW",
          plantName: "Malkapur",
          sectionName: "Line 2 Limestone Crusher",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

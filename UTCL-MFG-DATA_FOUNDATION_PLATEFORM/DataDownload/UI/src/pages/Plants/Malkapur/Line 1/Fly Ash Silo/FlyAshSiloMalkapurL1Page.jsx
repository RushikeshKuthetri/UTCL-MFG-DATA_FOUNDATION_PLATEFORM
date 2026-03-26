import "./FlyAshSiloMalkapurL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import { FlyAshSiloMalkapurL1Nodes, FlyAshSiloMalkapurL1NodesType } from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const FlyAshSiloMalkapurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={FlyAshSiloMalkapurL1Nodes}
        nodeType={FlyAshSiloMalkapurL1NodesType}
        plantDetails={{
          plantCode: "MLCW",
          plantName: "Malkapur",
          sectionName: "",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

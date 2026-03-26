import "./CoolerMalkapurLine1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
    CoolerMalkapurLine1Nodes,
    CoolerMalkapurLine1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoolerMalkapurLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerMalkapurLine1Nodes}
        nodeType={CoolerMalkapurLine1NodesType}
        plantDetails={{
          plantCode: "MLCW",
          plantName: "Malkapur",
          sectionName: "Cooler",
          section: "Cooler",
        }}
      />
    </ReactFlowProvider>
  );
};

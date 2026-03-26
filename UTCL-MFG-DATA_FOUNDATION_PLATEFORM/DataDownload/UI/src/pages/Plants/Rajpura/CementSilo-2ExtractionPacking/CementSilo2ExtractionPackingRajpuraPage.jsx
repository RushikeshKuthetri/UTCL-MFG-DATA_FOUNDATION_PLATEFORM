import {
  cementSilo2ExtractionPackingRajpuraNodes,
  cementSilo2ExtractionPackingRajpuraNodesType,
} from "../../../../reactflow";
import "./CementSilo2ExtractionPackingRajpuraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSilo2ExtractionPackingRajpuraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementSilo2ExtractionPackingRajpuraNodes}
        nodeType={cementSilo2ExtractionPackingRajpuraNodesType}
        plantDetails={{
          plantCode: "RJCW",
          plantName: "Rajpura",
          sectionName: "Packing Plant",
          section: "Packing Plant",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

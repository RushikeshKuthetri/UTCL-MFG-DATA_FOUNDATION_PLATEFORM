import {
  cementSilo1ExtractionPackingRajpuraNodes,
  cementSilo1ExtractionPackingRajpuraNodesType,
} from "../../../../reactflow";
import "./CementSilo1ExtractionPackingRajpuraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSilo1ExtractionPackingRajpuraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementSilo1ExtractionPackingRajpuraNodes}
        nodeType={cementSilo1ExtractionPackingRajpuraNodesType}
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

import {
  CementSiloExtractionKarurNodes,
  CementSiloExtractionKarurNodesType,
} from "../../../../reactflow";
import "./CementSiloExtractionKarurPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSiloExtractionKarurPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementSiloExtractionKarurNodes}
        nodeType={CementSiloExtractionKarurNodesType}
        plantDetails={{
          plantCode: "KACW",
          plantName: " Karur",
          sectionName: "Packing Plant",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

import {
  ClinkerSiloExtractionPanipatNodes,
  ClinkerSiloExtractionPanipatNodesType,
} from "../../../../reactflow";
import "./ClinkerSiloExtractionPanipatPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerSiloExtractionPanipatPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerSiloExtractionPanipatNodes}
        nodeType={ClinkerSiloExtractionPanipatNodesType}
        plantDetails={{
          plantCode: "PCW",
          plantName: "panipat",
          sectionName: "Clinker Silo Extraction",
          section: "Clinker Silo Extraction",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

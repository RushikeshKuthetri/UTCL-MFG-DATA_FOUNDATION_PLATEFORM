import {
  ClinkerHandlingPanipatNodes,
  ClinkerHandlingPanipatNodesType,
} from "../../../../reactflow";
import "./ClinkerHandlingPanipatPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerHandlingPanipatPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerHandlingPanipatNodes}
        nodeType={ClinkerHandlingPanipatNodesType}
        plantDetails={{
          plantCode: "PCW",
          plantName: "panipat",
          sectionName: "Clinker Handling",
          section: "Clinker Handling",
        }}
      />
    </ReactFlowProvider>
  );
};

import {
  CementPreparationFeedingPanipatNodes,
  CementPreparationFeedingPanipatNodesType,
} from "../../../../reactflow";
import "./CementPreparationFeedingPanipatPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementPreparationFeedingPanipatPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementPreparationFeedingPanipatNodes}
        nodeType={CementPreparationFeedingPanipatNodesType}
        plantDetails={{
          plantCode: "PCW",
          plantName: "panipat",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

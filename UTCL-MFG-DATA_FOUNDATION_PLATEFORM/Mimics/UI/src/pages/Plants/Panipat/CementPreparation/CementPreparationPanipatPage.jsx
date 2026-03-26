import {
  CementPreparationPanipatNodes,
  CementPreparationPanipatNodesType,
} from "../../../../reactflow";
import "./CementPreparationPanipatPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementPreparationPanipatPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementPreparationPanipatNodes}
        nodeType={CementPreparationPanipatNodesType}
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

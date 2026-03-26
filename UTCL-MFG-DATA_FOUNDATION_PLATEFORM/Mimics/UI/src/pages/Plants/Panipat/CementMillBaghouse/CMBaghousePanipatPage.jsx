import {
  CMBaghousePanipatNodes,
  CMBaghousePanipatNodesType,
} from "../../../../reactflow";
import "./CMBaghousePanipatPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CMBaghousePanipatPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CMBaghousePanipatNodes}
        nodeType={CMBaghousePanipatNodesType}
        plantDetails={{
          plantCode: "PCW",
          plantName: "panipat",
          sectionName: "Cement Mill",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

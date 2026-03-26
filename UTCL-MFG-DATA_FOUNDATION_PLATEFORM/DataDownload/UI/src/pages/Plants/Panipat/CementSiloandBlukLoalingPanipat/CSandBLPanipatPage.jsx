import {
  CSandBLPanipatNodes,
  CSandBLPanipatNodesType,
} from "../../../../reactflow";
import "./CSandBLPanipatPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CSandBLPanipatPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CSandBLPanipatNodes}
        nodeType={CSandBLPanipatNodesType}
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

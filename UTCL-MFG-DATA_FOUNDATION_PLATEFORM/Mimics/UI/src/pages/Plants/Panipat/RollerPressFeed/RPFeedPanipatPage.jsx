import {
  RPFeedPanipatNodes,
  RPFeedPanipatNodesType,
} from "../../../../reactflow";
import "./RPFeedPanipatPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RPFeedPanipatPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RPFeedPanipatNodes}
        nodeType={RPFeedPanipatNodesType}
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

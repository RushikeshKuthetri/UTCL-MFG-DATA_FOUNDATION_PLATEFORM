import {
  MTSKilnAndPyroFeedLine3Nodes,
  MTSKilnAndPyroFeedLine3NodesType,
} from "../../../../reactflow";
import "./MTSKilnAndPyroFeedLine3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const MTSKilnAndPyroFeedLine3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={MTSKilnAndPyroFeedLine3Nodes}
        nodeType={MTSKilnAndPyroFeedLine3NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};

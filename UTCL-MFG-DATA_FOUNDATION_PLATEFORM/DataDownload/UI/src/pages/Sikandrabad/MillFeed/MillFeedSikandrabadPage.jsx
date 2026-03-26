import "./MillFeedSikandrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  millFeedSikandrabadNodes,
  millFeedSikandrabadNodesType,
} from "../../../reactflow";

export const MillFeedSikandrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={millFeedSikandrabadNodes}
        nodeType={millFeedSikandrabadNodesType}
        plantDetails={{
          plantCode: "SKCW",
          plantName: "sikandrabad",
          sectionName: "Cement Mill",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

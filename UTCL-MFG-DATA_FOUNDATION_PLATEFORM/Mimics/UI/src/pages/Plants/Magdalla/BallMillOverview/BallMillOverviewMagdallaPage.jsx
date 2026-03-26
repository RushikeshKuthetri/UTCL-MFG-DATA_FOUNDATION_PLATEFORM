import {
  BallMillOverviewMagdallaNodes,
  BallMillOverviewMagdallaNodesType,
} from "../../../../reactflow";
import "./BallMillOverviewMagdallaPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const BallMillOverviewMagdallaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BallMillOverviewMagdallaNodes}
        nodeType={BallMillOverviewMagdallaNodesType}
        plantDetails={{
          plantCode: "NMGD",
          plantName: "Magdalla",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

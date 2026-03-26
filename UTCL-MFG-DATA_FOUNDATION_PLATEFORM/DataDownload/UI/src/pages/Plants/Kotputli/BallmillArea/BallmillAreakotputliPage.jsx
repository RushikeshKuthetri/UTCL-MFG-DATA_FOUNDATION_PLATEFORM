import {
  BallmillAreakotputliNodes,
  BallmillAreakotputliNodesType,
} from "../../../../reactflow";
import "./BallmillAreakotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const BallmillAreakotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BallmillAreakotputliNodes}
        nodeType={BallmillAreakotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "2",
        }}
      />
    </ReactFlowProvider>
  );
};

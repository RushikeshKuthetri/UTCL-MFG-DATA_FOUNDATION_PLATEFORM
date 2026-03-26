import {
  FlyAshSiloRajpuraNodes,
  FlyAshSiloRajpuraNodesType,
} from "../../../../reactflow";
import "./FlyAshSiloRajpuraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const FlyAshSiloRajpuraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={FlyAshSiloRajpuraNodes}
        nodeType={FlyAshSiloRajpuraNodesType}
        plantDetails={{
          plantCode: "RJCW",
          plantName: " Rajpura",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

import {
  PackingPlantRajpuraNodes,
  PackingPlantRajpuraNodesType,
} from "../../../../reactflow";
import "./PackingPlantRajpuraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PackingPlantRajpuraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PackingPlantRajpuraNodes}
        nodeType={PackingPlantRajpuraNodesType}
        plantDetails={{
          plantCode: "RJCW",
          plantName: " Rajpura",
          sectionName: "Packing Plant",
          section: "Packing Plant",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

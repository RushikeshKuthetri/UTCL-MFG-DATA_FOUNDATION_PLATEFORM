import {
  PackingPlantPanipatNodes,
  PackingPlantPanipatNodesType,
} from "../../../../reactflow";
import "./PackingPlantPanipatPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PackingPlantPanipatPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PackingPlantPanipatNodes}
        nodeType={PackingPlantPanipatNodesType}
        plantDetails={{
          plantCode: "PCW",
          plantName: "panipat",
          sectionName: "Packing Plant",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

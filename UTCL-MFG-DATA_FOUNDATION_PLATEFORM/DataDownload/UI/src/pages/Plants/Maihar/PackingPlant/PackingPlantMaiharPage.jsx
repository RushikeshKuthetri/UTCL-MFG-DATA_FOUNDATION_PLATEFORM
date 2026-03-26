import {
  PackingPlantMaiharNodes,
  PackingPlantMaiharNodesType,
} from "../../../../reactflow";
import "./PackingPlantMaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PackingPlantMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PackingPlantMaiharNodes}
        nodeType={PackingPlantMaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Packing Plant",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

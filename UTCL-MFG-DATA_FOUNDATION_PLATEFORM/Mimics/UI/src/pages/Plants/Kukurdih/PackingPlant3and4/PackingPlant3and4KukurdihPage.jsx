import {
  PackingPlant3and4KukurdihNodes,
  PackingPlant3and4KukurdihNodesType,
} from "../../../../reactflow";
import "./PackingPlant3and4KukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PackingPlant3and4KukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PackingPlant3and4KukurdihNodes}
        nodeType={PackingPlant3and4KukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "Packing Plant",
          section: "Packing Plant",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

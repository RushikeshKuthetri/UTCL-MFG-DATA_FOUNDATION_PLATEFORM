import {
  PackingPlant1and2KukurdihNodes,
  PackingPlant1and2KukurdihNodesType,
} from "../../../../reactflow";
import "./PackingPlant1and2KukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PackingPlant1and2KukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PackingPlant1and2KukurdihNodes}
        nodeType={PackingPlant1and2KukurdihNodesType}
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

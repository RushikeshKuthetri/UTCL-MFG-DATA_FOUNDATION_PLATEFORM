import {
  PackingPlant1and2KarurNodes,
  PackingPlant1and2KarurNodesType,
} from "../../../../reactflow";
import "./PackingPlant1and2KarurPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PackingPlant1and2KarurPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PackingPlant1and2KarurNodes}
        nodeType={PackingPlant1and2KarurNodesType}
        plantDetails={{
          plantCode: "KACW",
          plantName: "Karur",
          sectionName: "Packing Plant",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

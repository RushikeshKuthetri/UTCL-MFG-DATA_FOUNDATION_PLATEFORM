import {
  PackingPlant3and4KarurNodes,
  PackingPlant3and4KarurNodesType,
} from "../../../../reactflow";
import "./PackingPlant3and4KarurPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PackingPlant3and4KarurPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PackingPlant3and4KarurNodes}
        nodeType={PackingPlant3and4KarurNodesType}
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

import {
  CementSilo1KarurNodes,
  CementSilo1KarurNodesType,
} from "../../../../reactflow";
import "./CementSilo1KarurPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSilo1KarurPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementSilo1KarurNodes}
        nodeType={CementSilo1KarurNodesType}
        plantDetails={{
          plantCode: "KACW",
          plantName: "Karur",
          sectionName: "Packing Plant",
          section: "Cement Silo",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

import {
  CementSilo2KarurNodes,
  CementSilo2KarurNodesType,
} from "../../../../reactflow";
import "./CementSilo2KarurPage..scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSilo2KarurPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementSilo2KarurNodes}
        nodeType={CementSilo2KarurNodesType}
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

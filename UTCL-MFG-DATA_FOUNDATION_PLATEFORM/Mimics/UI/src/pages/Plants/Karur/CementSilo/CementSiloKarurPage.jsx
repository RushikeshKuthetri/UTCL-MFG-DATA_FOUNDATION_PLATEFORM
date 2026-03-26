import {
  CementSiloKarurNodes,
  CementSiloKarurNodesType,
} from "../../../../reactflow";
import "./CementSiloKarurPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSiloKarurPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementSiloKarurNodes}
        nodeType={CementSiloKarurNodesType}
        plantDetails={{
          plantCode: "KACW",
          plantName: "karur",
          sectionName: "Cement Mill-2",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

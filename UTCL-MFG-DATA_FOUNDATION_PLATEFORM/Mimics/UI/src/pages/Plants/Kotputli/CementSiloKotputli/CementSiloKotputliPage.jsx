import {
  CementSiloKotputliNodes,
  CementSiloKotputliNodesType,
} from "../../../../reactflow";
import "./CementSiloKotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSiloKotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementSiloKotputliNodes}
        nodeType={CementSiloKotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Cement Mill",
          section: "",
          line: "2",
        }}
      />
    </ReactFlowProvider>
  );
};

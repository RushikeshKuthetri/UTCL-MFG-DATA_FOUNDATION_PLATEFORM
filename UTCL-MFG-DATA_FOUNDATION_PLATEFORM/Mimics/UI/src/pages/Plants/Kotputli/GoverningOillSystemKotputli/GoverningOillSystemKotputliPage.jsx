import {
  GoverningOillSystemKotputliNodes,
  GoverningOillSystemKotputliNodesType,
} from "../../../../reactflow";
import "./GoverningOillSystemKotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const GoverningOillSystemKotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={GoverningOillSystemKotputliNodes}
        nodeType={GoverningOillSystemKotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "WHRS",
          section: "WHRS",
          line: "2",
        }}
      />
    </ReactFlowProvider>
  );
};

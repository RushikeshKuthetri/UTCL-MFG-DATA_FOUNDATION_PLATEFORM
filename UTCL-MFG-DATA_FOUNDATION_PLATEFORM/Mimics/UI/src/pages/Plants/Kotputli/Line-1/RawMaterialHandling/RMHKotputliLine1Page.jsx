import {
  rmhKotputliLine1Nodes,
  rmhKotputliLine1NodesType,
} from "../../../../../reactflow";
import "./RMHKotputliLine1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RMHKotputliLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={rmhKotputliLine1Nodes}
        nodeType={rmhKotputliLine1NodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

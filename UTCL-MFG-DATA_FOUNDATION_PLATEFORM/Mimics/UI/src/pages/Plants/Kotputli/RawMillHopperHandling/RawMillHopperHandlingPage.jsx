import {
  RawMillHopperHandlingNodes,
  RawMillHopperHandlingNodesType,
} from "../../../../reactflow";
import "./RawMillHopperHandlingPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMillHopperHandlingPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMillHopperHandlingNodes}
        nodeType={RawMillHopperHandlingNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "2",
        }}
      />
    </ReactFlowProvider>
  );
};

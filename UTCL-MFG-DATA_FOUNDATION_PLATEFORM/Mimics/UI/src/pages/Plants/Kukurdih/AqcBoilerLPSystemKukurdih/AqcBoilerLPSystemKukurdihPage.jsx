import {
  AqcBoilerLPSystemKukurdihNodes,
  AqcBoilerLPSystemKukurdihNodesType,
} from "../../../../reactflow";
import "./AqcBoilerLPSystemKukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const AqcBoilerLPSystemKukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={AqcBoilerLPSystemKukurdihNodes}
        nodeType={AqcBoilerLPSystemKukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "WHRS",
          section: "WHRS",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

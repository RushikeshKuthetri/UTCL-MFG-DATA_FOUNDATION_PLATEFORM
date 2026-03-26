import {
  WaterandSteamsystemNodes,
  WaterandSteamsystemNodesType,
} from "../../../../reactflow";
import "./WaterandSteamsystemPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const WaterandSteamsystemPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={WaterandSteamsystemNodes}
        nodeType={WaterandSteamsystemNodesType}
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

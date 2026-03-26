import {
  FlyashSiloPanipatNodes,
  FlyashSiloPanipatNodesType,
} from "../../../../reactflow";
import "./FlyashSiloPanipatPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const FlyashSiloPanipatPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={FlyashSiloPanipatNodes}
        nodeType={FlyashSiloPanipatNodesType}
        plantDetails={{
          plantCode: "PCW",
          plantName: "panipat",
          sectionName: "Fly ASh Silo",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

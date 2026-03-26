import {
  WRCSiloPanipatNodes,
  WRCSiloPanipatNodesType,
} from "../../../../reactflow";
import "./WRCSiloPanipatPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const WRCSiloPanipatPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={WRCSiloPanipatNodes}
        nodeType={WRCSiloPanipatNodesType}
        plantDetails={{
          plantCode: "PCW",
          plantName: "panipat",
          sectionName: "WRC Silo",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

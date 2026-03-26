import "./KilnChilmakurL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  KilnChilmakurL1Nodes,
  KilnChilmakurL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnChilmakurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnChilmakurL1Nodes}
        nodeType={KilnChilmakurL1NodesType}
        plantDetails={{
          plantCode: "CKCW",
          plantName: "Chilamkur",
          sectionName: "Kiln",
          section: "Kiln",
        }}
      />
    </ReactFlowProvider>
  );
};

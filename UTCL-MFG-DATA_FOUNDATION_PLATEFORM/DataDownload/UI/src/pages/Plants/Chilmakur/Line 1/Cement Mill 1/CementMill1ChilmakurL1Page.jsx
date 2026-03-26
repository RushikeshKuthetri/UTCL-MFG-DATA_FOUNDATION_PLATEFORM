import "./CementMill1ChilmakurL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CementMill1ChilmakurL1Nodes,
  CementMill1ChilmakurL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CementMill1ChilmakurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill1ChilmakurL1Nodes}
        nodeType={CementMill1ChilmakurL1NodesType}
        plantDetails={{
          plantCode: "CKCW",
          plantName: "chilamkur",
          sectionName: "Cement Mill 1",
          section: "Cement Mill",
        }}
      />
    </ReactFlowProvider>
  );
};

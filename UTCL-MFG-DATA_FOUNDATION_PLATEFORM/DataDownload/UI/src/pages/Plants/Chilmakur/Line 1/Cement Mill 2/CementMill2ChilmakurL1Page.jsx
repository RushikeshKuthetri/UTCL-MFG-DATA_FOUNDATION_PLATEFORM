import "./CementMill2ChilmakurL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CementMill2ChilmakurL1Nodes,
  CementMill2ChilmakurL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CementMill2ChilmakurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill2ChilmakurL1Nodes}
        nodeType={CementMill2ChilmakurL1NodesType}
        plantDetails={{
          plantCode: "CKCW",
          plantName: "chilamkur",
          sectionName: "Cement Mill 2",
          section: "Cement Mill",
        }}
      />
    </ReactFlowProvider>
  );
};

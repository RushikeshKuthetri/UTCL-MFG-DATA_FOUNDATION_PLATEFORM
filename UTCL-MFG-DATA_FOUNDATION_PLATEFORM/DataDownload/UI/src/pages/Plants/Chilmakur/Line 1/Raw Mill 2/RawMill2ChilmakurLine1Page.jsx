import "./RawMill2ChilmakurLine1Page.scss";
import { ReactFlowProvider } from "reactflow";
import { RawMill2ChilmakurLine1Nodes, RawMill2ChilmakurLine1NodesType } from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const RawMill2ChilmakurLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill2ChilmakurLine1Nodes}
        nodeType={RawMill2ChilmakurLine1NodesType}
        plantDetails={{
          plantCode: "CKCW",
          plantName: "Chilmakur",
          sectionName: "Raw Mill 2",
          section: "Raw Mill 2",
        }}
      />
    </ReactFlowProvider>
  );
};

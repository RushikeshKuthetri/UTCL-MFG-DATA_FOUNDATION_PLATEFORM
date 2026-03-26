import "./RawMill1ChilmakurLine1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
    RawMill1ChilmakurLine1Nodes,
    RawMill1ChilmakurLine1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const RawMill1ChilmakurLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill1ChilmakurLine1Nodes}
        nodeType={RawMill1ChilmakurLine1NodesType}
        plantDetails={{
          plantCode: "CKCW",
          plantName: "Chilmakur",
          sectionName: "Raw Mill 1",
          section: "Raw Mill 1",
        }}
      />
    </ReactFlowProvider>
  );
};

import "./FineCoalTVRChilmakurLine1Page.scss";
import { ReactFlowProvider } from "reactflow";
import { FineCoalTVRChilmakurLine1Nodes, FineCoalTVRChilmakurLine1NodesType } from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const FineCoalTVRChilmakurLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={FineCoalTVRChilmakurLine1Nodes}
        nodeType={FineCoalTVRChilmakurLine1NodesType}
        plantDetails={{
          plantCode: "CKCW",
          plantName: "Chilmakur",
          sectionName: "Fine Coal TVR",
          section: "Fine Coal TVR",
        }}
      />
    </ReactFlowProvider>
  );
};

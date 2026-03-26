import "./CoolerChilmakurLine1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
    CoolerChilmakurLine1Nodes,
    CoolerChilmakurLine1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoolerChilmakurLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerChilmakurLine1Nodes}
        nodeType={CoolerChilmakurLine1NodesType}
        plantDetails={{
          plantCode: "CKCW",
          plantName: "Chilmakur",
          sectionName: "Cooler",
          section: "Cooler",
        }}
      />
    </ReactFlowProvider>
  );
};

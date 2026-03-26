import {
  CM2BagHouseKotputliLine1Nodes,
  CM2BagHouseKotputliLine1NodesType,
} from "../../../../../reactflow";
import "./CM2BagHouseKotputliLine1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CM2BagHouseKotputliLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CM2BagHouseKotputliLine1Nodes}
        nodeType={CM2BagHouseKotputliLine1NodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Cement Mill-2",
          section: "Cement Mill-2",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

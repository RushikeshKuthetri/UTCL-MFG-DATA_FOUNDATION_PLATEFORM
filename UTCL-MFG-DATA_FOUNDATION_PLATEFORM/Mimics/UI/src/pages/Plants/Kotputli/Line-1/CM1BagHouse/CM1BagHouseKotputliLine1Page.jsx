import {
  CM1BagHouseKotputliLine1Nodes,
  CM1BagHouseKotputliLine1NodesType,
} from "../../../../../reactflow";
import "./CM1BagHouseKotputliLine1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CM1BagHouseKotputliLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CM1BagHouseKotputliLine1Nodes}
        nodeType={CM1BagHouseKotputliLine1NodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Cement Mill-1",
          section: "Cement Mill-1",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

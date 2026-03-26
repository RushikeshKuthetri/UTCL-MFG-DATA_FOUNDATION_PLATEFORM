import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { CoolingWaterSystemBasantL1Nodes, CoolingWaterSystemBasantL1NodesType } from "../../../../../reactflow";
import "./CoolingWaterSystemBasantL1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const CoolingWaterSystemBasantL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolingWaterSystemBasantL1Nodes}
        nodeType={CoolingWaterSystemBasantL1NodesType}
        plantDetails={{
          plantCode: "BOCW",
          plantName: "Basant Nagar",
          sectionName: "Cooling Water System",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

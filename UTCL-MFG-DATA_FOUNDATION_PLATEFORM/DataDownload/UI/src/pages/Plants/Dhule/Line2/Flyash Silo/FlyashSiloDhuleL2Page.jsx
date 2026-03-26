import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { FlyashSiloDhuleL2Nodes, FlyashSiloDhuleL2NodesType } from "../../../../../reactflow";
import "./FlyashSiloDhuleL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const FlyashSiloDhuleL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={FlyashSiloDhuleL2Nodes}
        nodeType={FlyashSiloDhuleL2NodesType}
        plantDetails={{
          plantCode: "DUCW",
          plantName: "Dhule",
          sectionName: "Flyash Silo",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { OldCoalMillChilamkurL1Nodes, OldCoalMillChilamkurL1NodeTypes } from "../../../../../reactflow";
import "./OldCoalMillChilamkurL1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const OldCoalMillChilamkurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={OldCoalMillChilamkurL1Nodes}
        nodeType={OldCoalMillChilamkurL1NodeTypes}
        plantDetails={{
          plantCode: "DUCW",
          plantName: "CKCW",
          sectionName: "Coal Mill",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

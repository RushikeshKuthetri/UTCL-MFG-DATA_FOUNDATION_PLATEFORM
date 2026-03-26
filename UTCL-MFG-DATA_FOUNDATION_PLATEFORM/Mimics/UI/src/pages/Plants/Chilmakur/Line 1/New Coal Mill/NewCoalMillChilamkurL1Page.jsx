import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { NewCoalMillChilamkurL1Nodes, NewCoalMillChilamkurL1NodeTypes } from "../../../../../reactflow";
import "./NewCoalMillChilamkurL1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const NewCoalMillChilamkurL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={NewCoalMillChilamkurL1Nodes}
        nodeType={NewCoalMillChilamkurL1NodeTypes}
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

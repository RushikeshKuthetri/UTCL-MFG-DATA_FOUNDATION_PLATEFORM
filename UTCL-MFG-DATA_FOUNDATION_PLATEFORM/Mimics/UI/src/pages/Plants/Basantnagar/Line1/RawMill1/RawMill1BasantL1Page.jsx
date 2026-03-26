import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { RawMill1BasantL1Nodes, RawMill1BasantL1NodesType } from "../../../../../reactflow";
import "./RawMill1BasantL1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const RawMill1BasantL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill1BasantL1Nodes}
        nodeType={RawMill1BasantL1NodesType}
        plantDetails={{
          plantCode: "BOCW",
          plantName: "Basant Nagar",
          sectionName: "Raw Mill",
          section: "",
        }}
      />
    </ReactFlowProvider>
  );
};

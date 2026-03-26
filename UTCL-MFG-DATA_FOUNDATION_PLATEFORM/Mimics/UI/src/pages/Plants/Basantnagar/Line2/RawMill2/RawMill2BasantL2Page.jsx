import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { RawMill2BasantL2Nodes, RawMill2BasantL2NodesType } from "../../../../../reactflow";
import "./RawMill2BasantL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const RawMill2BasantL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill2BasantL2Nodes}
        nodeType={RawMill2BasantL2NodesType}
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

import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { RawMill3BasantL3Nodes, RawMill3BasantL3NodesType } from "../../../../../reactflow";
import "./RawMill3BasantL3Page.scss";

import { ReactFlowProvider } from "reactflow";

export const RawMill3BasantL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill3BasantL3Nodes}
        nodeType={RawMill3BasantL3NodesType}
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

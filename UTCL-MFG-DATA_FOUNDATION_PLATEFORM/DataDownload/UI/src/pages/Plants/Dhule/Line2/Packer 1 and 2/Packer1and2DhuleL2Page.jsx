import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { Packer1and2DhuleL2Nodes, Packer1and2DhuleL2NodesType } from "../../../../../reactflow";
import "./Packer1and2DhuleL2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const Packer1and2DhuleL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Packer1and2DhuleL2Nodes}
        nodeType={Packer1and2DhuleL2NodesType}
        plantDetails={{
          plantCode: "DUCW",
          plantName: "Dhule",
          sectionName: "Packing Plant",
          section: "",
          line:"2",
        }}
      />
    </ReactFlowProvider>
  );
};

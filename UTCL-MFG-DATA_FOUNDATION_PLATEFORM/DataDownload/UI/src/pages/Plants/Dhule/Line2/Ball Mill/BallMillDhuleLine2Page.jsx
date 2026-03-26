import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { BallMillDhuleLine2Nodes, BallMillDhuleLine2NodeTypes } from "../../../../../reactflow";
import "./BallMillDhuleLine2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const BallMillDhuleLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BallMillDhuleLine2Nodes}
        nodeType={BallMillDhuleLine2NodeTypes}
        plantDetails={{
          plantCode: "DUCW",
          plantName: "Dhule",
          sectionName: "Cement Mill-1",
          section: "",
          line:"2",
        }}
      />
    </ReactFlowProvider>
  );
};

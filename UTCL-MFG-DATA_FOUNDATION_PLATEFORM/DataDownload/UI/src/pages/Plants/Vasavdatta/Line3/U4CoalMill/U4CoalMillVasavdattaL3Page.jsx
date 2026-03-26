import { U4CoalMillVasavdattaL3Nodes, U4CoalMillVasavdattaL3NodesType } from "../../../../../reactflow";
import "./U4CoalMillVasavdattaL3Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const U4CoalMillVasavdattaL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={U4CoalMillVasavdattaL3Nodes}
        nodeType={U4CoalMillVasavdattaL3NodesType}
        plantDetails={{
          plantCode: "SWCW",
          plantName: "vasavdatta",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "4"
        }}
      />
    </ReactFlowProvider>
  );
};

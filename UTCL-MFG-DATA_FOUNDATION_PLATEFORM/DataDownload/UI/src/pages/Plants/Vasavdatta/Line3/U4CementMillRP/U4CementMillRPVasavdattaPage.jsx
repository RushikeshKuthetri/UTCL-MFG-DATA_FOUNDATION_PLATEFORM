import {
  U4CementMillRPVasavdattaNodes,
  U4CementMillRPVasavdattaNodesType,
} from "../../../../../reactflow";
import "./U4CementMillRPVasavdattaPage.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const U4CementMillRPVasavdattaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={U4CementMillRPVasavdattaNodes}
        nodeType={U4CementMillRPVasavdattaNodesType}
        plantDetails={{
          plantCode: "SWCW",
          plantName: "vasavdatta",
          sectionName: "Cement Mill",
          section: "Cement Mill RP",
          line: "4"
        }}
      />
    </ReactFlowProvider>
  );
};

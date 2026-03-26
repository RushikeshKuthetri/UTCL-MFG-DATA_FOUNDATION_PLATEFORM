import {
  CementMillU3VasavdattaNodes,
  CementMillU3VasavdattaNodesType,
} from "../../../../../reactflow";
import "./CementMillU3VasavdattaPage.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMillU3VasavdattaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMillU3VasavdattaNodes}
        nodeType={CementMillU3VasavdattaNodesType}
        plantDetails={{
          plantCode: "SWCW",
          plantName: "Vasavdatta",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};

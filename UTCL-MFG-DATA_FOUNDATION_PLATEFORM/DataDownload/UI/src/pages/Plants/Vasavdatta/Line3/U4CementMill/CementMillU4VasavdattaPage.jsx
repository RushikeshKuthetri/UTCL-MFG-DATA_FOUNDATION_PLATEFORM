import {
  CementMillU4VasavdattaNodes,
  CementMillU4VasavdattaNodesTypes,
} from "../../../../../reactflow";
import "./CementMillU4VasavdattaPage.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMillU4VasavdattaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMillU4VasavdattaNodes}
        nodeType={CementMillU4VasavdattaNodesTypes}
        plantDetails={{
          plantCode: "SWCW",
          plantName: "Vasavdatta",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "4"
        }}
      />
    </ReactFlowProvider>
  );
};

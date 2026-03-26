import {
  CementMillBMU3L3VasavdattaNodes,
  CementMillBMU3L3VasavdattaNodesTypes,
} from "../../../../../reactflow";
import "./CementMillBMU3L3VasavdattaPage.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementMillBMU3L3VasavdattaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMillBMU3L3VasavdattaNodes}
        nodeType={CementMillBMU3L3VasavdattaNodesTypes}
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

import "./CementMillPaliPage.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  cementmillPaliNodes,
  cementmillPaliNodesType,
} from "../../../../reactflow";

export const CementMillPaliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementmillPaliNodes}
        nodeType={cementmillPaliNodesType}
        plantDetails={{
          plantCode: "PLCW",
          plantName: "Pali",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

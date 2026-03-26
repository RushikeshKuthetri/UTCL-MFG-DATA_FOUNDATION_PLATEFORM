import { LPSystemAndhraNodes, LPSystemAndhraNodesType } from "../../../../../../reactflow";
import "./LPSystemAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const LPSystemAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={LPSystemAndhraNodes}
        nodeType={LPSystemAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "WHRS",
          section: "LP System",
          line:"3",
        }}
      />
    </ReactFlowProvider>
  );
};

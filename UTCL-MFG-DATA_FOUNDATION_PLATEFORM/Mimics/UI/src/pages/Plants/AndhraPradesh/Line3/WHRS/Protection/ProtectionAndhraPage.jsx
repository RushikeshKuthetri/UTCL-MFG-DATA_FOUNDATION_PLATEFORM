import { ProtectionAndhraNodes, ProtectionAndhraNodesType } from "../../../../../../reactflow";
import "./ProtectionAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ProtectionAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ProtectionAndhraNodes}
        nodeType={ProtectionAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "WHRS",
          section: "STG Steam System",
          line:"3",
        }}
      />
    </ReactFlowProvider>
  );
};

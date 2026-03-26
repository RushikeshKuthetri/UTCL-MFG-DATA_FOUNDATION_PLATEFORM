import { ProtectionsystemwhrsAndhraNodes, ProtectionsystemwhrsAndhraNodesType } from "../../../../../reactflow";
import "./ProtectionsystemwhrsAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ProtectionsystemwhrsAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ProtectionsystemwhrsAndhraNodes}
        nodeType={ProtectionsystemwhrsAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "WHRS",
          section: "Protection System",
          line: "2",
        }}
      />
    </ReactFlowProvider>
  );
};

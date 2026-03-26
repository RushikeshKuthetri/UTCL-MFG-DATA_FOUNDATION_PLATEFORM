import { KilnAndhraNodes, KilnAndhraNodesType } from "../../../../reactflow";
import "./KilnAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const KilnAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnAndhraNodes}
        nodeType={KilnAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "Kiln",
          section: "Kiln",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};

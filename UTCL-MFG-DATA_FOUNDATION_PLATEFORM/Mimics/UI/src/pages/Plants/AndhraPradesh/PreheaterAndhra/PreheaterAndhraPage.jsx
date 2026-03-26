import {
  PreheaterAndhraNodes,
  PreheaterAndhraNodesType,
} from "../../../../reactflow";
import "./PreheaterAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PreheaterAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PreheaterAndhraNodes}
        nodeType={PreheaterAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "PreHeater",
          section: "Preheater",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};

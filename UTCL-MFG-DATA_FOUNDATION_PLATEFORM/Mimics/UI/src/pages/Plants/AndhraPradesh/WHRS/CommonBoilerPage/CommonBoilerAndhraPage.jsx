import {
  CommonBoilerAndhraNodes,
  CommonBoilerAndhraNodesType,
} from "../../../../../reactflow";
import "./CommonBoilerAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CommonBoilerAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CommonBoilerAndhraNodes}
        nodeType={CommonBoilerAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "WHRS",
          section: "Common Boiler Page",
          line: "2",
        }}
      />
    </ReactFlowProvider>
  );
};

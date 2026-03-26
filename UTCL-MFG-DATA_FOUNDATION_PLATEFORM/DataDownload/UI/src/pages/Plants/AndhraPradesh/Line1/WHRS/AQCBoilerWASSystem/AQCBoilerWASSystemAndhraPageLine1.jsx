import {
  AQCBoilerWASSystemAndhraNodes,
  AQCBoilerWASSystemAndhraNodesType,
} from "../../../../../../reactflow";
import "./AQCBoilerWASSystemAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const AQCBoilerWASSystemAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={AQCBoilerWASSystemAndhraNodes}
        nodeType={AQCBoilerWASSystemAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "WHRS",
          section: "AQC Boiler Water and Steam System",
          line:"3",
        }}
      />
    </ReactFlowProvider>
  );
};

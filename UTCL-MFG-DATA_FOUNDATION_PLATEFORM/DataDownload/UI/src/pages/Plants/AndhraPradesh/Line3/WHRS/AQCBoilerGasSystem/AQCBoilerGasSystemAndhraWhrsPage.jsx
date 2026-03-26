import {
  AQCBoilerGasSystemAndhraNodes,
  AQCBoilerGasSystemAndhraNodesType,
} from "../../../../../../reactflow";
import "./AQCBoilerGasSystemAndhraWhrsPage.scss";
import { ReactFlowRenderer } from "../../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const AQCBoilerGasSystemAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={AQCBoilerGasSystemAndhraNodes}
        nodeType={AQCBoilerGasSystemAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "WHRS",
          section: "AQC Boiler Gas System Page",
          line:"3",
        }}
      />
    </ReactFlowProvider>
  );
};

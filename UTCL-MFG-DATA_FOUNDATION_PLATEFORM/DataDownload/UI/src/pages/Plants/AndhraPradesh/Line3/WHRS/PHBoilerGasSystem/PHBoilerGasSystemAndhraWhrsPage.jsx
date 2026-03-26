import {
  PHBoilerGasSystemAndhraNodes,
  PHBoilerGasSystemAndhraNodesType,
} from "../../../../../../reactflow";
import "./PHBoilerGasSystemAndhraWhrsPage.scss";
import { ReactFlowRenderer } from "../../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PHBoilerGasSystemAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PHBoilerGasSystemAndhraNodes}
        nodeType={PHBoilerGasSystemAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "WHRS",
          section: "PH Boiler Gas System Page",
          line:"3",
        }}
      />
    </ReactFlowProvider>
  );
};

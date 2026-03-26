import { AQCBoilerFlueGasSystemL1AndhraNodes, AQCBoilerFlueGasSystemL1AndhraNodesType } from "../../../../../../reactflow";
import "./AQCBoilerFlueGasSystemL1AndhraPage.scss";
import { ReactFlowRenderer } from "../../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const AQCBoilerFlueGasSystemL1AndhraPage = () => {
  
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={AQCBoilerFlueGasSystemL1AndhraNodes}
        nodeType={AQCBoilerFlueGasSystemL1AndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "WHRS",
          section: "AQC Boiler Flue Gas System",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};

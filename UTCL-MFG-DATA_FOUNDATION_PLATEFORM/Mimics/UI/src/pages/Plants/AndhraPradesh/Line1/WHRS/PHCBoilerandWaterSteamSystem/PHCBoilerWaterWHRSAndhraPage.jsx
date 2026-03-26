import { PHCBoilerWaterWHRSAndhraNodes, PHCBoilerWaterWHRSAndhraNodesType } from "../../../../../../reactflow";
import "./PHCBoilerWaterWHRSAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PHCBoilerWaterWHRSAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PHCBoilerWaterWHRSAndhraNodes}
        nodeType={PHCBoilerWaterWHRSAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "WHRS",
          section: "PHC Boiler and Water Steam System",
          line:"3"
        }}
      />
    </ReactFlowProvider>
  );
};

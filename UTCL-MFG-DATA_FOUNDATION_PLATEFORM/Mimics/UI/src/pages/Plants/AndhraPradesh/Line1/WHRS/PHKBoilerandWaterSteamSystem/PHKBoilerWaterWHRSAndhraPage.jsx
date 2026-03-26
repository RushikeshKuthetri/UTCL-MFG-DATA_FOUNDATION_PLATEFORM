import { PHKBoilerWaterWHRSAndhraNodes, PHKBoilerWaterWHRSAndhraNodesType } from "../../../../../../reactflow";
import "./PHKBoilerWaterWHRSAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PHKBoilerWaterWHRSAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PHKBoilerWaterWHRSAndhraNodes}
        nodeType={PHKBoilerWaterWHRSAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "WHRS",
          section: "PHK Boiler and Water Steam System",
          line:"3",
        }}
      />
    </ReactFlowProvider>
  );
};

import {
  TurbineAndhraNodes,
  TurbineAndhraNodesType,
} from "../../../../../../reactflow";
import "./TurbineAndhraWhrsPage.scss";
import { ReactFlowRenderer } from "../../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const TurbineAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={TurbineAndhraNodes}
        nodeType={TurbineAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "WHRS",
          section: "Turbine Page",
          line:"3",
        }}
      />
    </ReactFlowProvider>
  );
};

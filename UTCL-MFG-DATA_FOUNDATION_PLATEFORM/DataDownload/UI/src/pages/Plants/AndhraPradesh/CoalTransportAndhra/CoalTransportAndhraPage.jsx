import // CoalTransportAndhraNodes,
// CoalTransportAndhraNodesType
"../../../../reactflow";
import { CoalTransportAndhraNodesType } from "../../../../reactflow/Plants/AndhraPradesh/CoalTransportAndhra/CoalTransportAndhraNodesType";
import { CoalTransportAndhraNodes } from "../../../../reactflow/Plants/AndhraPradesh/CoalTransportAndhra/CoalTransportAndhraNodes";

import "./CoalTransportAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalTransportAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalTransportAndhraNodes}
        nodeType={CoalTransportAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "Coal Mill",
          section: "Coal Handling",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};

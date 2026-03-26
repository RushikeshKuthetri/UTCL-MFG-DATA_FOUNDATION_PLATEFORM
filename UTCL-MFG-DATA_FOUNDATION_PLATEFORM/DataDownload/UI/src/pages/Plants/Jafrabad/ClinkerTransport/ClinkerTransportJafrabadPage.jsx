import "./ClinkerTransportJafrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import {
  ClinkerTransportJafrabadNodes,
  ClinkerTransportJafrabadNodesType,
} from "../../../../reactflow/Plants/Jafrabad";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const ClinkerTransportJafrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerTransportJafrabadNodes}
        nodeType={ClinkerTransportJafrabadNodesType}
        plantDetails={{
          plantCode: "NCJW",
          plantName: "Jafrabad",
          sectionName: "Cooler",
          section: "Cooler",
          line: "1",
          extraTagDetails: [
            {
              Section: "General", //line 1
              Tags: ["N_F88_IT", "N_F202_IT"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

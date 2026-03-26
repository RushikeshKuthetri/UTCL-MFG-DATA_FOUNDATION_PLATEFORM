import {
  clinkerStorageandTransportkotputliLine1Nodes,
  clinkerStorageandTransportkotputliLine1NodesType,
} from "../../../../../reactflow";
import "./ClinkerStorageAndTransportKotputliLine1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerStorageAndTransportKotputliLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={clinkerStorageandTransportkotputliLine1Nodes}
        nodeType={clinkerStorageandTransportkotputliLine1NodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Cement Mill-1",
          section: "Cement Mill-1",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cooler",
              Tags: ["CL_491FN2_VFD_SI"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

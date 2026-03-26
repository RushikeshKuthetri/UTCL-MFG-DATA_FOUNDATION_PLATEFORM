import {
  CementSiloExtractionKotputliNodes,
  CementSiloExtractionKotputliNodesType,
} from "../../../../reactflow";
import "./CementSiloExtractionKotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSiloExtractionKotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementSiloExtractionKotputliNodes}
        nodeType={CementSiloExtractionKotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Packing Plant",
          section: "",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill",
              Tags: ["CM_573BE1_BSS_A01", "CM_573FN1_RUN"],
            },
            {
              Section: "Crusher-1",
              Tags: ["CR_212FN2_RUN"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

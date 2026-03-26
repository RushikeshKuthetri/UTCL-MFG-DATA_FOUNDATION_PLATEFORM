import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  ClinkerWagonLoadingL3NathdwaraNodes,
  ClinkerWagonLoadingL3NathdwaraNodestype,
} from "../../../../reactflow";
import "./ClinkerWagonLoadingL3Nathdwara.scss";

export const ClinkerWagonLoadingL3Nathdwara = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerWagonLoadingL3NathdwaraNodes}
        nodeType={ClinkerWagonLoadingL3NathdwaraNodestype}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "Nathdwara",
          sectionName: "Bulk Loading",
          section: "Clinker Wagon Loading",
          line: "2",
          extraTagDetails: [
            {
              Section: "Coal Mill", //line 3
              Tags: ["KM_L43MS1_RUN", "KM_L43SD2_EOLS"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

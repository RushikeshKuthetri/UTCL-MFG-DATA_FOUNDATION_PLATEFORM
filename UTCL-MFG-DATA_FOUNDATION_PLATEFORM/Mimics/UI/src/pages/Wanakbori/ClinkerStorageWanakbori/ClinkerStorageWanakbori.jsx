import {
  ClinkerStorageWanakboriNodes,
  ClinkerStorageWanakboriNodesType,
} from "../../../reactflow";
import "./ClinkerStorageWanakbori.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerStorageWanakboriPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerStorageWanakboriNodes}
        nodeType={ClinkerStorageWanakboriNodesType}
        plantDetails={{
          plantCode: "WKCW",
          plantName: "wanakbori",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Clinker Transport",
              Tags: ["491RA5"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

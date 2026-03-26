import {
  ClinkerTransportAndStorageNodes,
  ClinkerTransportAndStorageNodesType,
} from "../../../../reactflow";
import "./ClinkerTransportAndStoragePage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerTransportAndStoragePage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerTransportAndStorageNodes}
        nodeType={ClinkerTransportAndStorageNodesType}
        plantDetails={{
          plantCode: "RJCW",
          plantName: "Rajpura",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

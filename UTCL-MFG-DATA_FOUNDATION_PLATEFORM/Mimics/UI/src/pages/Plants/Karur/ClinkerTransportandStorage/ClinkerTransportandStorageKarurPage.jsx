import {
  ClinkerTransportandStorageKarurNodes,
  ClinkerTransportandStorageKarurNodesType,
} from "../../../../reactflow";
import "./ClinkerTransportandStorageKarurPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerTransportandStorageKarurPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerTransportandStorageKarurNodes}
        nodeType={ClinkerTransportandStorageKarurNodesType}
        plantDetails={{
          plantCode: "KACW",
          plantName: "Karur",
          sectionName: "Cement Mill",
          section: "",
          line: "1",
        }}
      />
    </ReactFlowProvider>
  );
};

import {
  ClinkerTransportandStorageAndhraNodes,
  ClinkerTransportandStorageAndhraNodesTypes,
} from "../../../../reactflow";
import "./ClinkerTransportandStorageAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerTransportandStorageAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerTransportandStorageAndhraNodes}
        nodeType={ClinkerTransportandStorageAndhraNodesTypes}
        plantDetails={{
          plantCode: "APCW",
          plantName: "andhra pradesh",
          sectionName: "Cooler",
          section: "Clinker Transport and Storage",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};

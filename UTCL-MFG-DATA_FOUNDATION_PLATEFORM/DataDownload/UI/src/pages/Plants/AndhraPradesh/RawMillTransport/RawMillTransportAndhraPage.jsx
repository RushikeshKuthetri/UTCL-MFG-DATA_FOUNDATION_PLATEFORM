import {
  RawMillTransportAndhraNodes,
  RawMillTransportAndhraNodesType,
} from "../../../../reactflow";
import "./RawMillTransportAndhraPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMillTransportAndhraPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMillTransportAndhraNodes}
        nodeType={RawMillTransportAndhraNodesType}
        plantDetails={{
          plantCode: "APCW",
          plantName: "Andhra Pradesh",
          sectionName: "Raw Mill",
          section: "Raw Mill Transport",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};

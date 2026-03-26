import {
  ClinkerESPTransportMaiharNodesType,
  ClinkerESPTransportMaiharNodes,
} from "../../../../reactflow";
import "./ClinkerESPTransportMaiharPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerESPTransportMaiharPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerESPTransportMaiharNodes}
        nodeType={ClinkerESPTransportMaiharNodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Kiln",
          section: "",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};

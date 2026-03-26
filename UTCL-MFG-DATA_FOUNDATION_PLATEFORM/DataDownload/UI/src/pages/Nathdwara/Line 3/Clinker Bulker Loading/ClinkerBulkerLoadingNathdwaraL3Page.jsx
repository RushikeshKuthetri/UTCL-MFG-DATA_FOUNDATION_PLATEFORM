import {
  ClinkerBulkerLoadingNathdwaraL3Nodes,
  ClinkerBulkerLoadingNathdwaraL3NodesType,
} from "../../../../reactflow";
import "./ClinkerBulkerLoadingNathdwaraL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const ClinkerBulkerLoadingNathdwaraL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerBulkerLoadingNathdwaraL3Nodes}
        nodeType={ClinkerBulkerLoadingNathdwaraL3NodesType}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "Nathdwara",
          sectionName: "Bulk Loading",
          section: "Clinker Bulk Loading",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};

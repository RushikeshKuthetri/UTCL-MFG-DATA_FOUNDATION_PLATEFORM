import { CoolerNathdwaraL3Nodes, CoolerNathdwaraL3NodesType } from "../../../../reactflow";
import "./CoolerNathdwaraL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoolerNathdwaraL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerNathdwaraL3Nodes}
        nodeType={CoolerNathdwaraL3NodesType}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "nathdwara",
          sectionName: "Cooler",
          section: "Cooler",
          line: "3",
        }}
      />
    </ReactFlowProvider>
  );
};

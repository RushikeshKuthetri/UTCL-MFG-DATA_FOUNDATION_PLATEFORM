import { CoalMillNathdwaraL3Nodes, CoalMillNathdwaraL3NodesType } from "../../../../reactflow";
import "./CoalMillNathdwaraL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalMillNathdwaraL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillNathdwaraL3Nodes}
        nodeType={CoalMillNathdwaraL3NodesType}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "nathdwara",
          sectionName: "Coal Mill",
          section: "",
          line: "3",
          extraTagDetails: [],
        }}
      />
    </ReactFlowProvider>
  );
};

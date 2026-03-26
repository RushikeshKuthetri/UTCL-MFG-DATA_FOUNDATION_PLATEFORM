import { RabhNathdwaraL3Nodes, RabhNathdwaraL3NodesType } from "../../../../reactflow";
import "./RabhNathdwaraL3Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RabhNathdwaraL3Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RabhNathdwaraL3Nodes}
        nodeType={RabhNathdwaraL3NodesType}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "nathdwara",
          sectionName: "",
          section: "",
          line: "3",
          extraTagDetails: [],
        }}
      />
    </ReactFlowProvider>
  );
};

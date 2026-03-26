import { nodeTypeNew, nodesNew } from "../../../reactflow";
import "./RawMillNew1366.scss";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMillNew = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={nodesNew}
        nodeType={nodeTypeNew}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "nathdwara",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "1",
          extraTagDetails: [{ Section: "PreHeater", Tags: ["K1_431DG1_AO1"] }],
        }}
      />
    </ReactFlowProvider>
  );
};

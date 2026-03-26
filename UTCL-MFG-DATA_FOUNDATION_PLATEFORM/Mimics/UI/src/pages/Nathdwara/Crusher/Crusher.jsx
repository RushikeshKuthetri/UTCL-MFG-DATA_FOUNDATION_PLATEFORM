import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { crusherNode, crusherNodesType } from "../../../reactflow";
import "./Crusher.scss";

export const Crusher = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={crusherNode}
        nodeType={crusherNodesType}
        plantDetails={{
          plantCode: "NDCW",
          plantName: "nathdwara",
          sectionName: "Crusher",
          section: "Crusher",
          line: "1",
          extraTagDetails: [
            {
              Section: "Coal Mill", //line 2
              Tags: ["A2L42BH1_PZ11", "A2L42BH1_PZ11"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

import "./NewOlbcLine2Page.scss";
import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  NewOlbcLine2NodesType,
  NewOlbcLine2Nodes,
} from "../../../../reactflow";

export const NewOlbcLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={NewOlbcLine2Nodes}
        nodeType={NewOlbcLine2NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "Crusher",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Raw Mill", //line-1
              Tags: ["TT6_HPR_LVL"],
            },
            {
              Section: "Crusher", //line-2
              Tags: ["OLBC4A"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

import {
  CementSilo3KarurNodes,
  CementSilo3KarurNodesType,
} from "../../../../reactflow";
import "./CementSilo3KarurPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSilo3KarurPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementSilo3KarurNodes}
        nodeType={CementSilo3KarurNodesType}
        plantDetails={{
          plantCode: "KACW",
          plantName: "Karur",
          sectionName: "Packing Plant",
          section: "Cement Silo",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-3", //line 1
              Tags: ["SM_592BV1_CLS", "SM_592BV1_OLS"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

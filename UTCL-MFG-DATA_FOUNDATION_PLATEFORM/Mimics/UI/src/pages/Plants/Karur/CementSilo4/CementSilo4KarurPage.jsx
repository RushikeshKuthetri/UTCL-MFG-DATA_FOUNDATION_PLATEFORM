import {
  CementSilo4KarurNodes,
  CementSilo4KarurNodesType,
} from "../../../../reactflow";
import "./CementSilo4KarurPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSilo4KarurPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementSilo4KarurNodes}
        nodeType={CementSilo4KarurNodesType}
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

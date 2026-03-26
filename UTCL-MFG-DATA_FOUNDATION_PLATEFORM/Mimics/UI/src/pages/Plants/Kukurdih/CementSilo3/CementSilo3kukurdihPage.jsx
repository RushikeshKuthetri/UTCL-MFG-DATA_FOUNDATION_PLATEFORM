import {
  cementSilo3kukurdihNodes,
  cementSilo3kukurdihNodesType,
} from "../../../../reactflow";
import "./CementSilo3KukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSilo3kukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementSilo3kukurdihNodes}
        nodeType={cementSilo3kukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "Packing Plant",
          section: "Packing Plant",
          line: "1",
          extraTagDetails: [
            {
              Section: "Slag Mill",
              Tags: ["SM_592BV1_OLS", "SM_592BV1_CLS", "SM_592BF1_PT"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

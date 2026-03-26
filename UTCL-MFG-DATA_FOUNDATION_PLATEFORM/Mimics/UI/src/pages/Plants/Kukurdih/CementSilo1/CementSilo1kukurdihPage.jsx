import {
  CementSilo1KukurdihNodes,
  CementSilo1KukurdihNodesType,
} from "../../../../reactflow";
import "./CementSilo1kukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSilo1KukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementSilo1KukurdihNodes}
        nodeType={CementSilo1KukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "Packing Plant",
          section: "Packing Plant",
          line: "1",
          extraTagDetails: [
            {
              Section: "Slag Mill",
              Tags: ["SM_592BV1_OLS", "SM_592BV1_CLS"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

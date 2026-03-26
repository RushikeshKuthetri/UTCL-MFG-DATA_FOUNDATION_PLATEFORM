import {
  CementSilo4KukurdihNodes,
  CementSilo4KukurdihNodesType,
} from "../../../../reactflow";
import "./CementSilo4KukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSilo4KukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementSilo4KukurdihNodes}
        nodeType={CementSilo4KukurdihNodesType}
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

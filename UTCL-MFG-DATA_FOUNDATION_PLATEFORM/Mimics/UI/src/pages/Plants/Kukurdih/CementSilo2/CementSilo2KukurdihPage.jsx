import {
  cementSilo2kukurdihNodes,
  cementSilo2kukurdihNodesType,
} from "../../../../reactflow";
import "./CementSilo2KukurdihPage..scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CementSilo2KukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={cementSilo2kukurdihNodes}
        nodeType={cementSilo2kukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "Packing Plant",
          section: "Packing Plant",
          line: "1",
          extraTagDetails: [
            {
              Section: "Slag Mill",
              Tags: ["SM_592BF1_DPT", "SM_592BF1_PT"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

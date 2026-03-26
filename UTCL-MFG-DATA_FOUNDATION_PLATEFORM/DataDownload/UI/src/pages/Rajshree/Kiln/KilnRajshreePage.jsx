import "./KilnRajshree.scss";
import { ReactFlowProvider } from "reactflow";
import { kilnRajshreeNodes, kilnRajshreeNodesType } from "../../../reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnRajshreePage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={kilnRajshreeNodes}
        nodeType={kilnRajshreeNodesType}
        plantDetails={{
          plantCode: "RC",
          plantName: "rajashree",
          sectionName: "Kiln",
          section: "Kiln",
          line: "4",
          extraTagDetails: [
            {
              Section: "Cooler",
              Tags: ["CL_474SK1_FROM_CLR"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

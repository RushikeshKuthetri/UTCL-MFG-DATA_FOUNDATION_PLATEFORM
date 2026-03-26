import {
  CoalMillkotputliNodes,
  CoalMillkotputliNodesType,
} from "../../../../reactflow";
import "./CoalMillkotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoalMillkotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillkotputliNodes}
        nodeType={CoalMillkotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: ["KL_482BI1_WT", "KL_452BI2_WT", "KL_452BI1_WT"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

import {
  U3CoalMillVasavdattaNodes,
  U3CoalMillVasavdattaNodesType,
} from "../../../../../reactflow";
import "./U3CoalMillVasavdattaPage.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const U3CoalMillVasavdattaPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={U3CoalMillVasavdattaNodes}
        nodeType={U3CoalMillVasavdattaNodesType}
        plantDetails={{
          plantCode: "SWCW",
          plantName: "vasavdatta",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "3",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: ["3K104BL_VFD", "3K111ROS", "3K105BL_VFD", "3K108ROS"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

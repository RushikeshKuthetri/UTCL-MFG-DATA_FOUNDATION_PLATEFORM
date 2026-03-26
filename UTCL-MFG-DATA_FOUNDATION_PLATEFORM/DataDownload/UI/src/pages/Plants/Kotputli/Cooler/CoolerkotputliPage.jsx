import {
  CoolerkotputliNodes,
  CoolerkotputliNodesType,
} from "../../../../reactflow";
import "./CoolerkotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CoolerkotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoolerkotputliNodes}
        nodeType={CoolerkotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Cooler",
          section: "Cooler",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: ["KL_462KL1_TT4"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

import {
  TurbineTripLogickotputliNodes,
  TurbineTripLogickotputliNodesType,
} from "../../../../reactflow";
import "./TurbineTripLogickotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const TurbineTripLogickotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={TurbineTripLogickotputliNodes}
        nodeType={TurbineTripLogickotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "WHRS",
          section: "",
          line: "2",
          extraTagDetails: [
            {
              Section: "PreHeater",
              Tags: ["PH_422SD2_ZT"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

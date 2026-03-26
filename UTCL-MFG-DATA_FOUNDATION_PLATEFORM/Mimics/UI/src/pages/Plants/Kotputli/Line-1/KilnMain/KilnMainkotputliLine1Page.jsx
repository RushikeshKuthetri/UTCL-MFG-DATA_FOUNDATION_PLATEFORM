import {
  KilnMainkotputliLine1Nodes,
  KilnMainkotputliLine1NodesType,
} from "../../../../../reactflow";
import "./KilnMainkotputliLine1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const KilnMainkotputliLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnMainkotputliLine1Nodes}
        nodeType={KilnMainkotputliLine1NodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "PreHeater",
          section: "PreHeater",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: ["PH_451PR1_O2"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

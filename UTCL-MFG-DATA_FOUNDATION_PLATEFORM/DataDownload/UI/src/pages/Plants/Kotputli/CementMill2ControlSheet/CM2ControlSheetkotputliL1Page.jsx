import {
  CM2ControlSheetkotputliL1Nodes,
  CM2ControlSheetkotputliL1NodesType,
} from "../../../../reactflow";
import "./CM2ControlSheetkotputliL1Page.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CM2ControlSheetkotputliL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CM2ControlSheetkotputliL1Nodes}
        nodeType={CM2ControlSheetkotputliL1NodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Cement Mill-2",
          section: "Cement Mill-2",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-1",
              Tags: ["CM1_531RF2_A"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

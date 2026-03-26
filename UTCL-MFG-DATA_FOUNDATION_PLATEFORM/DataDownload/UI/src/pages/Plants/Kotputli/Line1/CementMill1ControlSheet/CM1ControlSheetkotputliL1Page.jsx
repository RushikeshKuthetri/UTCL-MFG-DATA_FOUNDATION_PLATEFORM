import {
  CM1ControlSheetkotputliL1Nodes,
  CM1ControlSheetkotputliL1NodesType,
} from "../../../../../reactflow";
import "./CM1ControlSheetkotputliL1Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const CM1ControlSheetkotputliL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CM1ControlSheetkotputliL1Nodes}
        nodeType={CM1ControlSheetkotputliL1NodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "Cement Mill-1",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Coal Mill",
              Tags: ["KM_L41KM1_XT"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

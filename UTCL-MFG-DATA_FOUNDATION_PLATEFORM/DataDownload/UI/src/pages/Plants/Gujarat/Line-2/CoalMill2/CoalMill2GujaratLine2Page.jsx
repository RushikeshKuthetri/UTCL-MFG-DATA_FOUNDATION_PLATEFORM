import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CoalMill2GujaratL2Nodes,
  CoalMill2GujaratL2NodesType,
} from "../../../../../reactflow";
import "./CoalMill2GujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";
//
export const CoalMill2GujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMill2GujaratL2Nodes}
        nodeType={CoalMill2GujaratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Coal Mill",
          section: "Coal Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln", //line 2
              Tags: ["CP05", "CP06", "K2L04_W1", "K2L05_W1"
                ],
            },
            {
              Section: "Raw Mill-2", //line 2
              Tags: ["HYD_PUMP_COUNT"],
            },
            {
              Section: "Coal Mill", //line 1
              Tags: ["K2S01_T2", "K2S01_T1", "HYD_PUMP_COUNT"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

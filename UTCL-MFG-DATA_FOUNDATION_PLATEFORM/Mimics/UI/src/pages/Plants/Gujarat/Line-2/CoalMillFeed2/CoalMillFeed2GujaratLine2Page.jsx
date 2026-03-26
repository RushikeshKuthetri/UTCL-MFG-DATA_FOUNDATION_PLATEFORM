import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CoalMillFeed2GujaratL2Nodes,
  CoalMillFeed2GujaratL2NodesType,
} from "../../../../../reactflow";
import "./CoalMillFeed2GujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const CoalMillFeed2GujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillFeed2GujaratL2Nodes}
        nodeType={CoalMillFeed2GujaratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Coal Mill",
          section: "",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln", //line 2
              Tags: ["WASTE FIRING"],
            },
            {
              Section: "Calciner", //line 1
              Tags: [
                "F2J01",
                "F3J01",
                "F2J02",
                "F2J03",
                "F2J04",
                "F2J03A",
                "F2J01A",
                "F2J01B",   
              ],
            },
            {
              Section: "Coal Mill", //line 1
              Tags: ["F2J02 TODAY", "F2J02 YESTERDAY"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

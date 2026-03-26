import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  Cooler1GujaratL1Nodes,
  Cooler1GujaratL1NodesType,
} from "../../../../../reactflow";
import "./Cooler1GujaratLine1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const Cooler1GujaratLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Cooler1GujaratL1Nodes}
        nodeType={Cooler1GujaratL1NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Cooler",
          section: "Cooler",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cooler", //line 2
              Tags: [
                "WHRS MW",
                "HAR_TEMP_SP",
                "COOLER_TOTAL_FLOW",
                "KG_AIR_PER_KG_CLINKER",
                "ABS_AIR_PR",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

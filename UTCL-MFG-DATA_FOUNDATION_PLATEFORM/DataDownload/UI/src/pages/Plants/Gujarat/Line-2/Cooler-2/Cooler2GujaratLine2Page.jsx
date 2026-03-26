import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  Cooler2GujaratL2Nodes,
  Cooler2GujaratL2NodesType,
} from "../../../../../reactflow";
import "./Cooler2GujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const Cooler2GujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={Cooler2GujaratL2Nodes}
        nodeType={Cooler2GujaratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Cooler",
          section: "Cooler",
          line: "2",
          extraTagDetails: [
            {
              Section: "Clinker Transport", //line 2
              Tags: ["U3J01_I1", "U3J01_T1", "U3J08_I1"],
            },
            {
              Section: "Cooler", //line 1
              Tags: [
                "HAR_TEMP_SP",
                "ABS_AIR_PR",
                "COOLER_TOTAL_FLOW",
                "KG_AIR_PER_KG_CLINKER",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

import "./CrusherRawanL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CrusherRawanL2Nodes,
  CrusherRawanL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CrusherRawanL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CrusherRawanL2Nodes}
        nodeType={CrusherRawanL2NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Crusher",
          section: "Crusher",
          line: "2",
          extraTagDetails: [
            {
              Section: "Raw Mill",
              Tags: [
                "222AF1/SA",
                "222BC3/IA",
                "222BC1/IA",
                "222BC2/IA",
                "222BC4/IA",
              ],
            },
            {
              Section: "Raw Mill-2",
              Tags: [
                "222BC_6/IA",
                "222ST1/SA",
                "222ST1/ANGLE_POSITION",
                "222DG_1/ZTA",
              ],
            },{
              Section: "General",
              Tags: [
                "DUMP-HOPPER/LVL"
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

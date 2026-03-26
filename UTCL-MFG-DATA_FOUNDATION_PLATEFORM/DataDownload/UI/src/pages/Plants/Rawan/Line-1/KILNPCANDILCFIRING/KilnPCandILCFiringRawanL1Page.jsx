import "./KilnPCandILCFiringRawanL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  KilnPCandILCFiringRawanL1Nodes,
  KilnPCandILCFiringRawanL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnPCandILCFiringRawanL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={KilnPCandILCFiringRawanL1Nodes}
        nodeType={KilnPCandILCFiringRawanL1NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "PreHeater",
          section: "PreHeater",
          line: "1",
          extraTagDetails: [
            {
              Section: "Coal Mill",
              Tags: [
                "53FB3WT1/TON",
                "53FB1TE1/TEMP",
                "53FB1TE2/TEMP",
                "53FB3TE1/TEMP",
                "4C_53BFA/TEMP",
                "4C_53BFB/TEMP",
                "4C_53BFC/TEMP",
                "53FB2WT/TON",
                "53GA4CO/PPM",
                "53BL4II/CURRENT",
              ],
            },
            {
              Section: "Kiln",
              Tags: [
                "53BL5SI1/RPM",
                "53BL5II1/CURRENT",
                "53BLASI1/RPM",
                "53BLAII1/II",
                "53BL7SI1/RPM",
                "6K_53CF1/FRA",
                "53CO1TE1/TEMP",
                "6K_53BL3/RPM",
                "6K_53BL3/AMP",
                "6K_53BL6/SPEED",
                "6K_53BL6/CURRENT",
                "6K_53CF1/WTA",
                "6K_53BL2/AMP",
              ],
            },
            {
              Section: "Cooler",
              Tags: ["EO_COOLER/PC_EO_FEED"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

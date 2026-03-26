import "./BlendingSiloRawanL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  BlendingSiloRawanL2Nodes,
  BlendingSiloRawanL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const BlendingSiloRawanL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BlendingSiloRawanL2Nodes}
        nodeType={BlendingSiloRawanL2NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "PreHeater",
          section: "Kiln",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: [
                "432FNV/M01",
                "432FNU/M01",
                "412BL1/IA",
                "412BL1/PTP",
                "412BL2/IA",
                "412BL2/PTP",
                "412BL3/IA",
                "412BL3/PTP",
                "432DG1/POS_TREND",
                "432FN1/M01",
                "412BF1/DPTP",
                "432BI1/WTIA",
                "432BF1/DPTP",
                "432BL1/PTP",
                "432FM1/432FM1_SP",
                "432BL2/PTP",
                "432FM1/FR",
                "432FM1/DPTP",
                "432FM2/FR",
                "432FM2/ZTA",
                "432FM2/DPTP",
                "432FM3/FR",
                "432FM3/ZTA",
                "432FM3/DPTP",
                "432BF3/DPTP",
                "432FN3/IA",
                "432FN3/SA",
                "432FN2/II",
              ],
            },
            {
              Section: "Raw Mill",
              Tags: ["392BE2/M01"],
            },
            {
              Section: "Raw Mill-1",
              Tags: [
                "392BE2/IT03",
                "392BE2/IT04",
                "392BE2/392BE2-M01",
                "392BE2/392BE2-M02",
                "392BE1M01/IT03",
                "392BE1M02/IT04",
                "392BE1M01/IT01",
                "392BE1M01/IT02",
                "392BE2/M02",
                "393BE1M01/M01",
                "392BE1M01A/M01",
                "392FNS1/M01",
                "392FNT/M01",
                "392FNW/M01",
                "392FNX/M01",
                "382FN4/M01",
                "382FN5/M01",
                "382FN3/M01",
                "382FN2/M01",
                "382FN1/M01",
                "392BF4/M01",
                "392RA4/M01",
                "392FNV/M01",
                "392BF4/DPTP",
                "392SM8/M01",
                "392SM7/M02",
              ],
            },
            {
              Section: "Raw Mill-2",
              Tags: [
                "392BE2/IT03",
                "392BE2/IT04",
                "392BE1M01/IT03",
                "392BE1M01/IT01",
                "392BE1M01/IT02",
                "392BF4/DPTP",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

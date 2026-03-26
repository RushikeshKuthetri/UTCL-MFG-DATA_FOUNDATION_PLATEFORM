import "./BaghouseRawanL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  BaghouseRawanL2Nodes,
  BaghouseRawanL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const BaghouseRawanL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BaghouseRawanL2Nodes}
        nodeType={BaghouseRawanL2NodesType}
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
                "422BF1/DPTP",
                "422LD5/ZTA",
                "422FM1/ZTA",
                "422BH1/PTP1",
                "422BH1/TTP1",
                "422BH1/TE1",
                "422BH1/TE2",
                "422BH1/TE3",
                "422BH1/TE4",
                "422BH1/PTP",
                "422BH1/DPTP",
                "422BH1/DPTP1",
                "422BH1/DPTP3",
                "422BH1/DPTP5",
                "422BH1/DPTP7",
                "422BH1/DPTP9",
                "422BH1/DPTP11",
                "422BH1/DPTP13",
                "422BH1/DPTP15",
                "422BH1/DPTP17",
                "422BH1/DPTP19",
                "422BH1/DPTP2",
                "422BH1/DPTP4",
                "422BH1/DPTP6",
                "422BH1/DPTP8",
                "422BH1/DPTP10",
                "422BH1/DPTP12",
                "422BH1/DPTP14",
                "422BH1/DPTP16",
                "422BH1/DPTP18",
                "422BH1/DPTP20",
                "422CV1/IA",
                "422CV2/IA",
                "422BH1/DPT",
                "422BH1/PTP2",
                "422BH1/TTP2",
                "422LD1/ZTA",
                "422FN1/PTP",
                "422FN1/TTP",
                "422LD2/ZTA",
                "422FN2/PTP",
                "422FN2/TTP",
                "422DG1/ZTA",
                "422DG3/ZTA",
                "422CV5/IA",
                "422CV4/IA",
                "422CV3/IA",
                "422LD4/ZTA",
                "422BE1_M01/POWER",
                "422BE1_M02/POWER",
                "422BE1_M01/CURRENT",
                "422BE1_M02/CURRENT",
                "422FN4/SA",
              ],
            },
            {
              Section: "Raw Mill",
              Tags: ["362LDG/ZTA"],
            },
            {
              Section: "Raw Mill-1",
              Tags: ["392BL1/M01", "392BL2/M02"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

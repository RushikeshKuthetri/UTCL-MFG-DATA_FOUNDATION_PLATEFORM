import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  L3Kiln3VikramNodes,
  L3Kiln3VikramNodesType,
} from "../../../../reactflow";
import "./L3Kiln3VikramPage.scss";

export const L3Kiln3VikramPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={L3Kiln3VikramNodes}
        nodeType={L3Kiln3VikramNodesType}
        vikramplant={true}
        plantDetails={{
          plantCode: "VCW",
          plantName: "vikram",
          sectionName: "Kiln",
          section: "Kiln",
          line: "3",
          extraTagDetails: [
            {
              Section: "PreHeater",
              Tags: [
                "VC3_K1_T06",
                "VC3_K02_SP_SPM",
                "VC3_K1_G05",
                "VC3_PH_FAN_SPRS_I01",
                "VC3_K1_S02",
                "VC3_K1_S04",
                "VC3_K06_XT_AXIAL_DE",
                "VC3_K06_XT_AXIAL_NDE",
                "VC3_K1_T51",
                "VC3_K1_T52",
                "VC3_K1_G100A",
              ],
            },
            {
              Section: "Cooler",
              Tags: ["VC3_L1_T02", "VC3_L1_P01"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

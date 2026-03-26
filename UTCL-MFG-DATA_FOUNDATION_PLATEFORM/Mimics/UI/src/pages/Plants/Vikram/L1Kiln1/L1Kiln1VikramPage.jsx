import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  l1Kiln1VikramNodes,
  l1Kiln1VikramNodesType,
} from "../../../../reactflow";
import "./L1Kiln1VikramPage.scss";

export const L1Kiln1VikramPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={l1Kiln1VikramNodes}
        nodeType={l1Kiln1VikramNodesType}
        vikramplant={true}
        plantDetails={{
          plantCode: "VCW",
          plantName: "vikram",
          sectionName: "Kiln",
          section: "Kiln",
          line: "1",
          extraTagDetails: [
            {
              Section: "Coal Mill",
              Tags: [
                "VC1CF1_E86_707_SP_SPA",
                "VC1CF1_E86_FT_707",
                "VC1CF1_E3_FT_704",
                "VC1CF1_E3_ST_704",
                "VC1CF1_PFSTR_FC709_SPA",
                "VC1CF1_PFSTR_FC709_SPM",
                "VC1CF1_PFSTR_FI_709",
                "VC1CF1_PFSTR_ROT_ST",
                "VC1CF1_E118_SP_REF_SPA",
                "VC1CF1_PFSTR_CAL_WT",
                "VC1CF1_E3_PH_WT",
              ],
            },
            {
              Section: "PreHeater",
              Tags: [
                "VC1KL1_K1_ZT_332_01",
                "VC1KL1_AT_312",
                "VC1KL1_KF_ZT_315",
                "VC1KL1_AT_302",
                "VC1KL1_AT_308",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

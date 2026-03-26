import { ReactFlowProvider } from "reactflow";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  l2Kiln2VikramNodes,
  l2Kiln2VikramNodesType,
} from "../../../../reactflow";
import "./L2Kiln2VikramPage.scss";

export const L2Kiln2VikramPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={l2Kiln2VikramNodes}
        nodeType={l2Kiln2VikramNodesType}
        vikramplant={true}
        plantDetails={{
          plantCode: "VCW",
          plantName: "vikram",
          sectionName: "Kiln",
          section: "Kiln",
          line: "2",
          extraTagDetails: [
            {
              Section: "Coal Mill",
              Tags: [
                "VC2CF2_RM_TT_304",
                "VC2CF2_E90_FC_707_SPA",
                "VC2CF2_E90_FI_707",
                "VC2CF2_E85_ST_704",
                "VC2CF2_PFSTR_FC_210_SPA",
                "VC2CF2_PFSTR_FC_210_SPM",
                "VC2CF2_E85_FI_704",
                "VC2CF2_E85_PH_WT",
              ],
            },
            {
              Section: "PreHeater",
              Tags: [
                "VC2KL2_PT_303",
                "VC2KL2_PS_CYC5_TT_302",
                "VC2KL2_PYRO_CLONE_CO",
                "VC2KL2_PYRO_CLONE_O2",
              ],
            },
            {
              Section: "Cooler",
              Tags: ["VC2CL2_TE_301"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

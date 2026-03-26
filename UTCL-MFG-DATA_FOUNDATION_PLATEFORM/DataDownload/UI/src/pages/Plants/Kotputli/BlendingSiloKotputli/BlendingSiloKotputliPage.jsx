import {
  BlendingSiloKotputliNodes,
  BlendingSiloKotputliNodesType,
} from "../../../../reactflow";
import "./BlendingSiloKotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const BlendingSiloKotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BlendingSiloKotputliNodes}
        nodeType={BlendingSiloKotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "PreHeater",
          section: "PreHeater",
          line: "2",
          extraTagDetails: [
            {
              Section: "Raw Mill",
              Tags: [
                "RM_392FNC_RUN",
                "RM_392FNC_PH",
                "RM_392FND_RUN",
                "RM_392FND_PH",
                "RM_392FNE_RUN",
                "RM_392FNE_PH",
                "RM_392FNJ_RUN",
                "RM_392FNJ_PH",
                "RM_392FNK_RUN",
                "RM_392FNK_PH",
                "RM_392FNF_RUN",
                "RM_392FNF_PH",
                "RM_392FNG_RUN",
                "RM_392FNG_PH",
                "RM_392FNH_RUN",
                "RM_392FNH_PH",
                "RM_392RA5_RUN",
                "RM_392FNL_RUN",
                "RM_392FNL_PH",
                "RM_392BV3_OLS",
                "RM_392BV3_CLS",
                "RM_392BV4_OLS",
                "RM_392BV4_CLS",
                "RM_392BV9_OLS",
                "RM_392BV9_CLS",
                "RM_392BVA_OLS",
                "RM_392BVA_CLS",
                "RM_392BV5_OLS",
                "RM_392BV5_CLS",
                "RM_392BV8_OLS",
                "RM_392BV8_CLS",
                "RM_392BV7_OLS",
                "RM_392BV7_CLS",
                "RM_392BV1_OLS",
                "RM_392BV1_CLS",
                "RM_392BV2_OLS",
                "RM_392BV2_CLS",
                "RM_392BV6_OLS",
                "RM_392BV6_CLS",
              ],
            },
            {
              Section: "Cement Mill",
              Tags: ["CM_563FN5_SI"],
            },
            {
              Section: "Kiln",
              Tags: ["PH_432DQ1_FR"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

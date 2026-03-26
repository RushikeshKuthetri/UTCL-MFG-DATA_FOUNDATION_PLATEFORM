import {
  PreHeaterkotputliNodes,
  PreHeaterkotputliNodesType,
} from "../../../../reactflow";
import "./PreHeaterkotputliPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PreHeaterkotputliPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PreHeaterkotputliNodes}
        nodeType={PreHeaterkotputliNodesType}
        plantDetails={{
          plantCode: "KCW",
          plantName: "Kotputli",
          sectionName: "PreHeater",
          section: "Preheater",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln",
              Tags: [
                "KL_452FN1_RUN",
                "KL_452FN1_PH",
                "KL_462FN9_RUN",
                "KL_462FN9_PH",
                "KL_462FN7_RUN",
                "KL_462FN7_PH",
                "KL_462FN8_RUN",
                "KL_462FN8_PH",
                "KL_482BL5_RUN",
                "KL_482BL5_PH",
                "KL_452BL2_RUN",
                "KL_452BL2_PH",
                "KL_452BL3_RUN",
                "KL_452BL3_PH",
                "KL_482BL1_RUN",
                "KL_482BL1_PH",
                "KL_482BL2_RUN",
                "KL_482BL2_PH",
                "KL_482BL4_RUN",
                "KL_482BL4_PH",
                "KL_482BL3_RUN",
                "KL_482BL3_PH",
                "KL_462FNR_RUN",
                "KL_462FNR_PH",
                "KL_462MD2_RUN",
                "KL_462MD2_PH",
                "KL_462MD1_RUN",
                "KL_462MD1_PH",
                "KL_462FN7_9_RUN",
                "KL_482BL1_M02_RUN",
                "KL_482BL1_M02_PH",
                "KL_482BL1_M03_RUN",
                "KL_482BL1_M03_PH",
                "KL_482BL2_M02_RUN",
                "KL_482BL2_M02_PH",
                "KL_482BL2_M03_RUN",
                "KL_482BL2_M03_PH",
                "KL_482BL4_M02_RUN",
                "KL_482BL4_M02_PH",
                "KL_482BL3_M02_RUN",
                "KL_482BL3_M02_PH",
                "KL_482BV1_OPN",
                "KL_482BV1_CLS",
                "KL_482BV2_OPN",
                "KL_482BV2_CLS",
                "KL_482BV4_OPN",
                "KL_482BV4_CLS",
                "KL_482BV3_OPN",
                "KL_482BV3_CLS",
                "KL_482BV5_OPN",
                "KL_482BV5_CLS",
                "KL_462KL1_TT1",
                "KL_462KL1_TT2",
                "KL_462DU1_TT1",
                "KL_462DU1_PT1",
                "KL_482DQ1_RUN",
                "KL_482DQ1_PH",
                "KL_452DQ1_RUN",
                "KL_452DQ1_PH",
                "KL_452DQ2_RUN",
                "KL_452DQ2_PH",
                "KL_482DQ1_FR",
                "KL_482BI1_WT",
                "KL_452DQ1_FR",
                "KL_452BI1_WT",
                "KL_452DQ2_FR",
                "KL_452BI2_WT",
              ],
            },
            {
              Section: "Cooler",
              Tags: [
                "CL_472RC1_RUN",
                "CL_472RC1_PH",
                "CL_492DB1_RUN",
                "CL_492DB2_PH",
              ],
            },
            {
              Section: "Coal Mill",
              Tags: ["KL_482DQ1_FR", "KL_452DQ1_FR", "KL_452DQ2_FR"],
            },
            {
              Section: "Crusher-1",
              Tags: ["CR_212CR1S_RUN", "CR_212CR1S_PH"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

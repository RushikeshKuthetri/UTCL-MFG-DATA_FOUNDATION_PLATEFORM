import {
  PreheaterMaiharL4Nodes,
  PreheaterMaiharL4NodesType,
} from "../../../../../reactflow";
import "./PreheaterMaiharL4Page.scss";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const PreheaterMaiharL4Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={PreheaterMaiharL4Nodes}
        nodeType={PreheaterMaiharL4NodesType}
        plantDetails={{
          plantCode: "MACW",
          plantName: "maihar",
          sectionName: "PreHeater",
          section: "",
          line: "4",
          extraTagDetails: [
            {
              Section: "Cooler",
              Tags: [
                "CL_474RC1_RUN",
                "CL_474RC1_PH",
                "CL_474RC2_RUN",
                "CL_474RC2_PH",
                "CL_474RC3_RUN",
                "CL_474RC3_PH",
                "CL_474RC4_RUN",
                "CL_474RC4_PH",
                "CL_474RC5_RUN",
                "CL_474RC5_PH",
                "CL_474RC6_RUN",
                "CL_474RC6_PH",
                "CL_494DB1_PH",
                "CL_494DB1_RUN",
                "CL_474FNF_M01",
              ],
            },
            {
              Section: "Kiln",
              Tags: [
                "KL_464FN9_PH",
                "KL_464FN9_RUN",
                "KL_464FN7_PH",
                "KL_464FN7_RUN",
                "KL_464FN8_PH",
                "KL_464FN8_RUN",
                "KL_484BL5_PH",
                "KL_484BL5_RUN",
                "KL_454BL2_PH",
                "KL_454BL2_RUN",
                "KL_454BL3_PH",
                "KL_454BL3_RUN",
                "KL_484BL1_RUN",
                "KL_484BL1_PH",
                "KL_484BL2_RUN",
                "KL_484BL2_PH",
                "KL_484BL3_RUN",
                "KL_484BL3_PH",
                "KL_484BL4_RUN",
                "KL_484BL4_PH",
                "KL_464MD1_2_RUN",
                "KL_484BV1_OLS",
                "KL_484BV1_CLS",
                "KL_484BV2_OLS",
                "KL_484BV2_CLS",
                "KL_484BV4_OLS",
                "KL_484BV4_CLS",
                "KL_484BV3_OLS",
                "KL_484BV3_CLS",
                "KL_484BV5_OLS",
                "KL_484BV5_CLS",
                "KL_464AD1_M02_PH",
                "KL_464AD1_M02_RUN",
              ],
            },
            {
              Section: "Raw Mill-1",
              Tags: ["RM_394SB1_LT"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

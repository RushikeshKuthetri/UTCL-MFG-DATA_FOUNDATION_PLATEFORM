import {
  FlyashSiloKarurNodes,
  FlyashSiloKarurNodesType,
} from "../../../../reactflow";
import "./FlyashSiloKarurPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const FlyashSiloKarurPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={FlyashSiloKarurNodes}
        nodeType={FlyashSiloKarurNodesType}
        plantDetails={{
          plantCode: "KACW",
          plantName: "Karur",
          sectionName: "Cement Mill",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 1
              Tags: [
                "CM_K31BV1_CLS",
                "CM_K31BV1_OLS",
                "CM_K31BV1A_CLS",
                "CM_K31BV1A_OLS",
                "CM_K31BF1_DPT",
                "CM_K31BF1_PT",
                "CM_K31FM1_FR",
                "CM_K31FM1_PT",
                "CM_K31FM1_ZT",
                "CM_K31FM1_SP",
                "CM_K31BL1_PH",
                "CM_K31BL1A_PH",
                "CM_K31FN1_PH",
                "CM_K31FN4_PH",
                "CM_K31FN4A_PH",
                "CM_K31BL1_RUN",
                "CM_K31BL1A_RUN",
                "CM_K31FN1_RUN",
                "CM_K31FN4_RUN",
                "CM_K31FN4A_RUN",
                "CM_K31RA1_RUN",                
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

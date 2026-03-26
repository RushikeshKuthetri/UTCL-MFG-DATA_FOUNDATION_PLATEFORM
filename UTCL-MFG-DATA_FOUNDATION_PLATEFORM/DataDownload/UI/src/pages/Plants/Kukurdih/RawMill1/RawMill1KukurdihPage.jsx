import {
  RawMill1KukurdihNodes,
  RawMill1KukurdihNodesType,
} from "../../../../reactflow";
import "./RawMill1KukurdihPage.scss";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import { ReactFlowProvider } from "reactflow";

export const RawMill1KukurdihPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill1KukurdihNodes}
        nodeType={RawMill1KukurdihNodesType}
        plantDetails={{
          plantCode: "KUCW",
          plantName: "Kukurdih",
          sectionName: "Raw Mill-1",
          section: "Raw Mill-1",
          line: "1",
          extraTagDetails: [
            {
              Section: "PreHeater",
              Tags: [
                "RM_391FN9_RUN",
                "RM_391FN9_PH",
                "PH_391BF1_DPT",
                "PH_421BF1_PT1",
                "PH_421BF1_TT1",
                "PH_421BF1_PT3",
                "PH_421BF1_PT2",
                "PH_421BF1_TT4",
                "PH_421BF1_DPT",
                "PH_391SB1_LT",
                "RM_391BE1_RUN",
                "RM_391BE1_PH",
                "RM_391RA3_RUN",
                "PH_421FN1_M01_RUN",
                "PH_421FN1_M01_PH",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

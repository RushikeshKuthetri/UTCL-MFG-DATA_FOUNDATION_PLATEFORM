import "./CementMill2Line1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CementMill2Line1Nodes,
  CementMill2Line1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CementMill2Line1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill2Line1Nodes}
        nodeType={CementMill2Line1NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "Cement Mill-2",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill",
              Tags: [
                "CM_571BE1II_B",
                "CM_561SR1_PT1",
                "CM_561SR1_TT1",
                "CM_561SR1_PT2",
                "CM_561SR1_TT2",
                "CM_561SR1_SI",
                "CM_561SR1_SPSPM",
                "CM_561SR1_DPT1",
                "CM_561SR1_II",
                "CM_561SR1AI01",
                "CM_561FN1_PT2",
                "CM_561BF1_TT1",
                "CM_561BF1_DPT3",
                "CM_561FN2_PT1",
                "CM_561FN2_TT1",
                "CM_561BF1_TT2",
                "CM_561FN1_SPSPM",
                "CM_561FN1_JI",
                "CM_561FN1_II",
                "CM_561FN1_PT1",
                "CM_561FN1_TT1",
                "CM_561CN1_2_DPT",
                "CM_561CN1_PT1",
                "CM_561FN2_SI",
                "CM_561FN2_SPSPM",
                "CM_561FN2_II",
                "CM_591BE1_M01JI_B",
                "CM_K31BF5_PT1",
                "CM_K31BF5_DPT",
                "CM_561FM1_PT",
                "CM_561FM1_TP",
                "CM_Z1J53_I01",
                "CM_531WFA01I11F01Y1",
                "CM_531WFA01I11F16",
                "CM_K31BI1_WI",
                "CM_K31FM1_FI",
                "Z2J03_J1",
                "CM_561FM1_FI",
                "CM_561FN1_SI",
                "CM_591BE1_M01II_B",
                "U1U08_I1",
                "Z1BUSC_FREQ",
                "Z1M01_T8_LEFTSIDE",
                "Z1M01_T8_RIGHTSIDE",
                "Z1M01_P1",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

import "./CoolerHirmiL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  coolerHirmiL1Nodes,
  coolerHirmiL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoolerHirmiL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={coolerHirmiL1Nodes}
        nodeType={coolerHirmiL1NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "Cooler",
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
                "CM_561FM1_FI",
                "CM_561FN1_SI",
                "CM_591BE1_M01II_B",
                "Z1M01_T8_LEFTSIDE",
                "Z1M01_T8_RIGHTSIDE",
                "Z1M01_P1",
              ],
            },
            {
              Section: "Cement Mill-2",
              Tags: [
                "Z2U02_I1",
                "SILO1_LEVEL",
                "SILO2_LEVEL",
                "SILO3_LEVEL",
                "SILO5_LEVEL",
                "SILO6_LEVEL",
                "Z1L04_L2",
              ],
            },
            {
              Section: "WHRS",
              Tags: [
                "WHRS_AQC_DMPR_003_OPSP",
                "AQC_DAMPER_PID_SPM",
                "WHRS_GEN_PER_TON_CLINKER",
                "WHRS_GENERATION",
              ],
            },
            {
              Section: "Kiln",
              Tags: ["U1U01_L1", "W13W01_T20"],
            },
            {
              Section: "Clinker Transport",
              Tags: ["W1K08_I1", "W1K08_T1"],
            },
            {
              Section: "Coal Mill",
              Tags: ["W1K02_T2"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

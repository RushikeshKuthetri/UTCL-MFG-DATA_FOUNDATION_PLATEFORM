import "./CoalMillHirmiL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CoalMillHirmiL1Nodes,
  CoalMillHirmiL1NodesTypes,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoalMillHirmiL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillHirmiL1Nodes}
        nodeType={CoalMillHirmiL1NodesTypes}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "Coal Mill",
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
                "Z1BUSC_FREQ",
                "Z1M01_T8_LEFTSIDE",
                "Z1M01_T8_RIGHTSIDE",
                "Z1M01_P1",
              ],
            },
            {
              Section: "Cement Mill-2",
              Tags: [
                "Z2U02_I1",
                "Z2M12_P9",
                "Z2M03_I1",
                "Z2M20",
                "Z2M03AI01",
                "Z2K05_F1_TODAY",
                "Z2K04_PIDSPA",
                "Z2K04_PIDSPM",
                "CM2_PCC_TPH_D",
                "Z2P26",
                "CM2TOTALFEED_SPSPA",
                "SILO1_LEVEL",
                "SILO2_LEVEL",
                "SILO3_LEVEL",
                "SILO5_LEVEL",
                "SILO6_LEVEL",
                "Z1L04_L2",
                "Z2AP_PT",
                "Z2J03_J1",
                "Z2K04_Z1",
                "Z2K05_F1",
                "Z2L53_W1",
                "Z2LUBPL_PT",
                "Z2LUBPR_PT",
                "Z2M01_T8_MILLSIDE",
                "Z2M01_T8_MOTORSIDE",
                "Z2M02_P9_PR",
                "Z2M06_J1",
                "Z2M06_X2",
                "Z2M13_P9",
                "Z2J51_I1",
                "Z2M01_P1",
                "Z2M01_P2",
                "Z2M03_J1",
                "Z2M06_I1",
                "Z2M01_T3_NEW",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

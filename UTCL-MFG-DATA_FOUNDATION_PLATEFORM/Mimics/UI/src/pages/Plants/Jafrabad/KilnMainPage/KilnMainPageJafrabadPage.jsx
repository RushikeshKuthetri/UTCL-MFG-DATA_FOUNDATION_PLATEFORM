import "./KilnMainPageJafrabadPage.scss";
import { ReactFlowProvider } from "reactflow";
import {
  kilnMainPageJafrabadNodes,
  kilnMainPageJafrabadNodesType,
} from "../../../../reactflow/Plants/Jafrabad";
import { ReactFlowRenderer } from "../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnMainPageJafrabadPage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={kilnMainPageJafrabadNodes}
        nodeType={kilnMainPageJafrabadNodesType}
        plantDetails={{
          plantCode: "NCJW",
          plantName: "Jafrabad",
          sectionName: "Kiln",
          section: "Kiln",
          line: "1",
          extraTagDetails: [
            {
              Section: "Coal Mill", //line 1
              Tags: [
                "462RM100_N03T01",
                "462SF781_U01J01",
                "462FM790_A01F01",
                "462LC754_N01W01",
                "462SF631_U01J01",
                "462SF631PID_N_SPM",
                "462LC604_N01W01",
                "462SF731_U01J01",
                "462SF731PID_SPA",
                "462SF731_U02J01",
                "462SF731_U02S01",
                "462LC704_N01W01",
                "462LC554_N01W01",
                "FF_BLOWER_PRES"

              ],
            },
            {
              Section: "Cooler", //line 1
              Tags: [
                "441FN300N02P01",
                "441FN305N02P01",
                "441FN310N02P01",
                "441FN315N02P01",
                "441FN320N02P01",
                "441FN325N02P01",
                "441FN330N02P01",
                "FCR_TT520",
                "441KH050N01T01",
                "FCR_PT523",
                "F49_SPEED2",
                "FCR_ZT340",
                "441WI130N01F01",
                "FCR_YT302E",
                "441FN300N01F01",
                "441FN305N01F01",
                "COOLER_TOTAL_FLOW",
                "441FN310N01F01",
                "441FN315N01F01",
                "COOLER_AIR_CLKR_RATIO",
                "441FN320N01F01",
                "441FN325N01F01",
                "F55_PYRO_DISCHARGE",
                "F55_CURRENT",
                "F705_DPC_SPEED",
                "_441FN305N02P01_PID_OUT_MAX",
                "_441FN305N02P01_PID_OUT_MIN",
                "471AC100N01T01",
                "MD140A01S01",
                "MD140A01S02",
                "MD140A01S03",
                "MD140A01S11_SP",
                "441FN305N02P01_PID_SPM",
                "MD140A01S13_SP",
                "441FN305N02P01_PID_SPA",
                "441CC100N09P01",
                "FCR_PT340",
                "F49_SPD_CONTROL_SPA",
                "441FN330N01F01"
              ],
            },
            {
              Section: "PreHeater", //line 1
              Tags: [
                "FKL_AT348B",
                "PH_O/L_CO_SP",
                "FKL_PT306A",
                "FKL_TT317",
                "FKL_TT312",
                "FKL_PT306C",
                "FKL_PT307",
                "FKL_TT319",
                "FKL_TT314",
                "FKL_PT351",
                "FKL_AT326A",
                "FKL_AT326B",
                "PH_ST4_CO_SP",
                "FKL_PT309",
                "FKL_TT321",
                "FKL_TT316",
                "FKL_PT311",
                "FKL_PT311A",
                "BH_STK_NOX_MONITORING1",
                "FKL_TT315",
                "FKL_PT306B",
                "FKL_TT318",
                "FKL_TT313",
                "FKL_PT306D",
                "FKL_PT308",
                "FKL_TT320",
                "FKL_PT310",
                "FKL_PT310A",
                "ST3_NULEONIC_CONE_LVL",
                "ST4_NUELONIC_CONE_LVL",
                "FKL_TT301",
                "FKL_PT390",
                "FKL_IT450",
                "D33_KW1",
                "FKL_PT2070",
                "F_PC2230_SPM",
                "D53_VFD_PID_SPM",
                "D53_VFD_PID_SPA",
                "FKL_PT2050",
                "FKL_TT2111",
                "FKL_TT384",
                "FKL_TT_FFINLET",
                "462SF731_U01S01",
                "COAL_CALC_SPM",
                "PETCOKE_CALC_SPA",
                "462SF581PID_SPM",
                "462PP595_HPR_PRES",
                "FKL_ST2080",
                "261WF150_A01F11_SPA",
                "261WF150_A01F01",
                "261WF150_A01S01",
                "261XA910_N02P01",
                "261RF710_M01I01",
                "261BC610_U01I01"
              ],
            },
            {
              Section: "Raw Mill", //line 1
              Tags: ["FKL_ZT2200", "D_XT1490"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

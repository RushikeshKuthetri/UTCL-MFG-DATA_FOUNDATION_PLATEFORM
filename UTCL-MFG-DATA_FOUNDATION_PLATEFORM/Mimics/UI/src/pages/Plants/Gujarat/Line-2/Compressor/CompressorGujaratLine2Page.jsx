import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CompressorGujaratL2Nodes,
  CompressorGujaratL2NodesType,
} from "../../../../../reactflow";
import "./CompressorGujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const CompressorGujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CompressorGujaratL2Nodes}
        nodeType={CompressorGujaratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Kiln",
          section: "",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 2
              Tags: [
                "SC05_CMP",
                "SC06_CMP",
                "SC07_MR_IND",
                "SC08_MR_IND",
                "CMP05",
                "CMP06",
                "PP_CP07",
                "PP_CP08",
                "PP_CP09",
                "PP_CP12",
                "PP_CP09_SPEED_SP",
                "PP_SC05_TODAY",
                "PP_SC06_TODAY",
                "PP_SC07_TODAY",
                "PP_SC08TODAY",
                "PP_CP05 TODAY",
                "PP_CP06 TODAY",
                "PP_CP07 TODAY",
                "PP_CP08 TODAY",
                "PP_CP09 TODAY",
                "PP_CP12 TODAY",
                "PP_SC08LOAD TODAY",
                "PP_CP05LOAD TODAY",
                "PP_CP06LOAD TODAY",
                "PP_CP07LOAD TODAY",
                "PP_CP08LOAD TODAY",
                "PP_CP09LOAD TODAY",
                "PP_CP12LOAD TODAY",
                "MVDRIVE_ROOMTEMP",
                "Z1_PLCROOM_TEMP",
                "RP_PLC_TEMP",
                "RP1_VFD_ROOM_TEMP",
              ],
            },
            {
              Section: "Cement Mill-2", //line 2
              Tags: ["CM3_RP_DRIVEROOM_TEMP", "CM3_PLCROOM_TEMP"],
            },
            {
              Section: "Cement Mill-3", //line 2
              Tags: [
                "CM4_PLCROOM_TEMP",
                "CM4_PLCROOM_TEMP2",
                "Z4_MVDRIVE_ROOM_TEMP",
              ],
            },
            {
              Section: "Coal Mill", //line 2
              Tags: ["HYD_PLC_ROOM_TEMP", "KM1_PLC ROOM TEMP"],
            },
            {
              Section: "Cooler", //line 2
              Tags: [
                "CLR2_HYD_PLC_RT",
                "CLR_VFD_ROOM_TEMP",
                "CLR1_PLCOOM_TEMP",
                "CLR_HYD_PLC_RT",
                "CLR1_MD_RT",
                "CLR1_VFD_RT",
                "CLR_PLC_TEMP",
              ],
            },
            {
              Section: "Raw Mill-2", //line 2
              Tags: [
                "RM2_PLC_ROOM_TEMP",
                "RM2_VFDROOM_TEMP_1",
                "R2DD_AIRPR",
                "R2POC_AIRPR",
                "R2VITAL_AIRPR",
                "REC_PLC_ROOM_TEMP",
              ],
            },
            {
              Section: "Cement Mill", //line 1
              Tags: ["CMP05_P1"],
            },
            {
              Section: "Coal Mill", //line 1
              Tags: ["CP01_S1", "CP02_P1"],
            },
            {
              Section: "Kiln", //line 1
              Tags: ["CMNY_GA_TMP"],
            },
            {
              Section: "Packing Plant", //line 1
              Tags: [
                "SC07",
                "SC08",
                "PP_PLC_TEMP",
                "PP_CM_PP_DEDUST_HP_AIRPR",
                "PP_CP09_CURRENT",
                "PP_CP09_SPEED",
                "PP_IC_DEDUSTING_AIRPRESS",
                "PP_IC_SILOAERATION_AIRPR",
                "PP_SILOAERATION_AIRPRESS",
              ],
            },
            {
              Section: "Raw Mill", //line 1
              Tags: [
                "REC_PLC_ROOM_TEMP",
                "RM_HYD_PLCROOM_TEMP",
                "RM_PLC_ROOMTEMP",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};

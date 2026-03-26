import { useCaretColorStatus, useColorStatus } from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../../index";
export const CompressorGujaratLine2 = () => {
  return (
    <div className="CompressorGujaratLine2 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <table className="w-100 h-100">
          <tr>
            <th colspan="3">COMPRESSOR HOUSE-5</th>
          </tr>

          <tr>
            <td>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "CP01",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "CP01_S1",
                      useClass: "greenTxt mt-1 ml-3",
                      unit: "%",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
                <BlackContainer
                  data={{
                    label: "CP01_P1",
                    useClass: "greenTxt ml-1",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "CP01"
                  )}`}
                  label="CP01"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("CP01PNL_FSW")}`}
                  label="CP01PNL_FSW"
                  text="W"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("CP01PNL_LOP")}`}
                  label="CP01PNL_LOP"
                  text="O"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP01PNL_TEMP"
                  )}`}
                  label="CP01PNL_TEMP"
                  text="T"
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP01_SEQ_FRM_GC"
                  )}`}
                  label="CP01_SEQ_FRM_GC"
                  text="S"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP01_LOAD_FRM_GC"
                  )}`}
                  label="CP01_LOAD_FRM_GC"
                  text="L"
                />
              </div>
              <div className="d-flex justify-content-around mt-1">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP01_RDY_TO_GC"
                  )}`}
                  label="CP01_RDY_TO_GC"
                  text="R"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP01_MR_TO_GC"
                  )}`}
                  label="CP01_MR_TO_GC"
                  text="R"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex justify-content-between align-items-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CP02 ",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CP02_P1",
                    useClass: "greenTxt ml-1",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "CP02"
                  )}`}
                  label="CP02"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("CP02PNL_FSW")}`}
                  label="CP02PNL_FSW"
                  text="W"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("CP02PNL_LOP")}`}
                  label="CP02PNL_LOP"
                  text="O"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP02PNL_TEMP"
                  )}`}
                  label="CP02PNL_TEMP"
                  text="T"
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP02_SEQ_FRM_GC"
                  )}`}
                  label="CP02_SEQ_FRM_GC"
                  text="S"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP02_LOAD_FRM_GC"
                  )}`}
                  label="CP02_LOAD_FRM_GC"
                  text="L"
                />
              </div>
              <div className="d-flex justify-content-around mt-1">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP02_RDY_TO_GC"
                  )}`}
                  label="CP02_RDY_TO_GC"
                  text="R"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP02_MR_TO_GC"
                  )}`}
                  label="CP02_MR_TO_GC"
                  text="R"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="d-flex justify-content-between align-items-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CP04",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CP04_P1",
                    useClass: "greenTxt ml-1",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "CP04"
                  )}`}
                  label="CP04"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("CP04PNL_FSW")}`}
                  label="CP04PNL_FSW"
                  text="W"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("CP04PNL_LOP")}`}
                  label="CP04PNL_LOP"
                  text="O"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP04PNL_TEMP"
                  )}`}
                  label="CP04PNL_TEMP"
                  text="T"
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP04_SEQ_FRM_GC"
                  )}`}
                  label="CP04_SEQ_FRM_GC"
                  text="S"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP04_LOAD_FRM_GC"
                  )}`}
                  label="CP04_LOAD_FRM_GC"
                  text="L"
                />
              </div>
              <div className="d-flex justify-content-around mt-1">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP04_RDY_TO_GC"
                  )}`}
                  label="CP04_RDY_TO_GC"
                  text="R"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP04_MR_TO_GC"
                  )}`}
                  label="CP04_MR_TO_GC"
                  text="R"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SC03 (SCREW COMPRESSOR-ATLAS COPCO)",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "SC03"
                  )}`}
                  label="SC03"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("SC03PNL_GS")}`}
                  label="SC03PNL_GS"
                  text="S"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC03PNL_LOAD"
                  )}`}
                  label="SC03PNL_LOAD"
                  text="L"
                />
                <MimicCaret
                  parentClass="d-flex tringle-item justify-content-center"
                  firstCaretClass={`fa-solid fa-caret-right digital-tag d-block ${useCaretColorStatus(
                    "SC03_DRV_CMD"
                  )}`}
                  secondCaretClass={`fa-solid fa-caret-left digital-tag d-block ${useCaretColorStatus(
                    "SC03_DRV_CMD"
                  )}`}
                  label="SC03_DRV_CMD"
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC03_SEQ_FRM_GC"
                  )}`}
                  label="SC03_SEQ_FRM_GC"
                  text="S"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC03_LOAD_FRM_GC"
                  )}`}
                  label="SC03_LOAD_FRM_GC"
                  text="L"
                />
              </div>
              <div className="d-flex justify-content-around mt-1">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC03_RDY_TO_GC"
                  )}`}
                  label="SC03_RDY_TO_GC"
                  text="R"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC03_MR_TO_GC"
                  )}`}
                  label="SC03_MR_TO_GC"
                  text="R"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SC04 (SCREW COMPRESSOR-ATLAS COPCO)",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "SC04"
                  )}`}
                  label="SC04"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("SC04PNL_GS")}`}
                  label="SC04PNL_GS"
                  text="S"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC04PNL_LOAD"
                  )}`}
                  label="SC04PNL_LOAD"
                  text="L"
                />
                <MimicCaret
                  parentClass="d-flex tringle-item justify-content-center"
                  firstCaretClass={`fa-solid fa-caret-right digital-tag d-block ${useCaretColorStatus(
                    "SC04_DRV_CMD"
                  )}`}
                  secondCaretClass={`fa-solid fa-caret-left digital-tag d-block ${useCaretColorStatus(
                    "SC04_DRV_CMD"
                  )}`}
                  label="SC04_DRV_CMD"
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC04_SEQ_FRM_GC"
                  )}`}
                  label="SC04_SEQ_FRM_GC"
                  text="S"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC04_LOAD_FRM_GC"
                  )}`}
                  label="SC04_LOAD_FRM_GC"
                  text="L"
                />
              </div>
              <div className="d-flex justify-content-around  mt-1">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC04_RDY_TO_GC"
                  )}`}
                  label="SC04_RDY_TO_GC"
                  text="R"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC04_MR_TO_GC"
                  )}`}
                  label="SC04_MR_TO_GC"
                  text="R"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SC10 (SCREW COMPRESSOR-ELGI)",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "SC10"
                  )}`}
                  label="SC10"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC10_GEN_FLT_IND"
                  )}`}
                  label="SC10_GEN_FLT_IND"
                  text="F"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("SC10_MR_IND")}`}
                  label="SC10_MR_IND"
                  text="R"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC10_LD_UNLD_IND"
                  )}`}
                  label="SC10_LD_UNLD_IND"
                  text="L"
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC10_SEQ_FRM_GC"
                  )}`}
                  label="SC10_SEQ_FRM_GC"
                  text="S"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC10_LOAD_FRM_GC"
                  )}`}
                  label="SC10_LOAD_FRM_GC"
                  text="L"
                />
              </div>
              <div className="d-flex justify-content-around mt-1">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC10_RDY_TO_GC"
                  )}`}
                  label="SC10_RDY_TO_GC"
                  text="R"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "SC10_MR_TO_GC"
                  )}`}
                  label="SC10_MR_TO_GC"
                  text="R"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CP05",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "NA",
                    useClass: "greenTxt ml-3 mt-1",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "CP05"
                  )}`}
                  label="CP05"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("CP05PNL_FSW")}`}
                  label="CP05PNL_FSW"
                  text="W"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("CP05PNL_LOP")}`}
                  label="CP05PNL_LOP"
                  text="O"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP05PNL_TEMP"
                  )}`}
                  label="CP05PNL_TEMP"
                  text="T"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("CP05PNL_ULD")}`}
                  label="CP05PNL_ULD"
                  text="L"
                />
              </div>
            </td>
            <td></td>
          </tr>

          <tr>
            <td>
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CP06",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "NA",
                    useClass: "greenTxt ml-3 mt-1",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "CP06"
                  )}`}
                  label="CP06"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("CP06PNL_FSW")}`}
                  label="CP06PNL_FSW"
                  text="W"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("CP06PNL_LOP")}`}
                  label="CP06PNL_LOP"
                  text="O"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "CP06PNL_TEMP"
                  )}`}
                  label="CP06PNL_TEMP"
                  text="T"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("CP06PNL_ULD")}`}
                  label="CP06PNL_ULD"
                  text="L"
                />
              </div>
            </td>
            <td></td>
          </tr>

          <tr>
            <td>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "VITAL AIR PRESSURE",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "VITALAIR_P1",
                    useClass: "greenTxt ml-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "VITAL AIR PRESSURE",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "R2VITAL_AIRPR",
                    useClass: "greenTxt ml-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "DEDUSTING AIR PRESSURE",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "R2DD_AIRPR",
                    useClass: "greenTxt ml-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "POKING AIR PRESSURE",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "R2POC_AIRPR",
                    useClass: "greenTxt ml-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-3 mx-auto",
                  label: "PLC/VFD ROOM TEMP (KILN/COOLER SECTION)",
                }}
              />
              <div className="d-flex mt-3">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "KILN-1/ KM-1 PLC ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KM1_PLC ROOM TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "COOLER-1 PLC ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CLR1_PLCOOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "COOLER-1 HYD.PLC ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CLR_HYD_PLC_RT",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "STACK GAS ANALYZER ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CMNY_GA_TMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "KILN MAIN DRIVE ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CLR1_MD_RT",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "KM-1 & KILN-1 VFD ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KILN1_VFD_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "COOLER-1 VFD ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CLR1_VFD_RT",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "REC-1 PLC ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "REC_PLC_ROOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mx-auto",
                  label: "PLC ROOM TEMP",
                }}
              />
              <div className="d-flex mt-3">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "RM-1 PLC ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "RM_PLC_ROOMTEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "PP PLC ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "PP_PLC_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "REC PLC ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "REC_PLC_ROOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "RM-1 HYD PLC ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "RM_HYD_PLCROOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-3 mx-auto",
                  label: "PLC/VFD ROOM TEMP",
                }}
              />
              <div className="d-flex mt-3">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "COOLER-2 VFD ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "RM2_VFDROOM_TEMP_1",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "RM-2 & KILN-2 VFD",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "RM2_VFDROOM_TEMP_1",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="position-absolute single-text-2">
        <table className="w-100 h-100">
          <tr>
            <th colSpan="2">COMPRESSOR HOUSE-4</th>
          </tr>

          <tr>
            <td>
              <div className="d-flex justify-content-around">
                <div>
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "SC05(CM1 PLC)",
                    }}
                  />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "SCREW COMP. DEDUSTING",
                    }}
                  />
                </div>
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "SC05_CMP"
                  )}`}
                  label="SC05_CMP"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="d-flex justify-content-around">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "SC06(CM1 PLC)",
                  }}
                />
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "SC06_CMP"
                  )}`}
                  label="SC06_CMP"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex justify-content-around">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "SC07(PP PLC)",
                  }}
                />
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "SC07_MR_IND"
                  )}`}
                  label="SC07_MR_IND"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="d-flex justify-content-around">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "SC08(PP PLC)",
                  }}
                />
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "SC08_MR_IND"
                  )}`}
                  label="SC08_MR_IND"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex justify-content-around">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CP05(CM1 PLC)",
                  }}
                />
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "CMP05"
                  )}`}
                  label="CMP05"
                />
                <BlackContainer
                  data={{
                    label: "CMP05_P1",
                    useClass: "greenTxt ml-2",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex justify-content-around">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CP06(CM1 PLC)",
                  }}
                />
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useColorStatus(
                    "CMP06"
                  )}`}
                  label="CMP06"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td colspan="2">
              <div className="d-flex justify-content-around">
                <div>
                  <div className="d-flex justify-content-around">
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark",
                        label: "CP07 CEMENT SILO AERATION LP",
                      }}
                    />
                    <MotorCircleDigitalTag
                      className={`line-circle digital-tag ${useColorStatus(
                        "PP_CP07"
                      )}`}
                      label="PP_CP07"
                    />
                  </div>
                  <div className="d-flex justify-content-around mt-2">
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark",
                        label: "CP08 CEMENT SILO AERATION LP",
                      }}
                    />
                    <MotorCircleDigitalTag
                      className={`line-circle digital-tag ${useColorStatus(
                        "PP_CP08"
                      )}`}
                      label="PP_CP08"
                    />
                  </div>
                  <div className="d-flex justify-content-around mt-2">
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark",
                        label: "CP09 CEMENT SILO AERATION LP",
                      }}
                    />
                    <MotorCircleDigitalTag
                      className={`line-circle digital-tag ${useColorStatus(
                        "PP_CP09"
                      )}`}
                      label="PP_CP09"
                    />
                  </div>
                  <div className="d-flex justify-content-around mt-2">
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark",
                        label: "CP12 FLYASH UNLOADING",
                      }}
                    />
                    <MotorCircleDigitalTag
                      className={`line-circle digital-tag ${useColorStatus(
                        "PP_CP12"
                      )}`}
                      label="PP_CP12"
                    />
                  </div>
                </div>
                <div>
                  <BlackContainer
                    data={{
                      label: "PP_CP09_SPEED_SP",
                      useClass: "greenTxt",
                      unit: "%",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "PP_CP09_SPEED",
                      useClass: "greenTxt mt-1",
                      unit: "%",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
                <BlackContainer
                  data={{
                    label: "PP_CP09_CURRENT",
                    useClass: "greenTxt ml-3",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="border">
                <div className="d-flex">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "AFTER I/C SILO AIR PRES.",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "PP_IC_SILOAERATION_AIRPR",
                      useClass: "greenTxt ml-2",
                      unit: "bar",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
                <div className="d-flex mt-1">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "AFTER I/C DEDUST AIR PRES.",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "PP_IC_DEDUSTING_AIRPRESS",
                      useClass: "greenTxt ml-2",
                      unit: "bar",
                      unitColor: "unitColor",
                    }}
                  />
                </div>

                <div className="d-flex mt-1">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "CM/PP DEDUSTING AIR PRES.",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "PP_CM_PP_DEDUST_HP_AIRPR",
                      useClass: "greenTxt ml-2",
                      unit: "bar",
                      unitColor: "unitColor",
                    }}
                  />
                </div>

                <div className="d-flex mt-1">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "PP SILO AR. LP REC PRES.",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "PP_SILOAERATION_AIRPRESS",
                      useClass: "greenTxt ml-2",
                      unit: "bar",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-3 mx-auto",
                  label: "PLANT PLC ROOM TEMP",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mx-auto",
                  label: "PRE-CLINKERIZATION",
                }}
              />
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "RECLAIMER-1 ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "REC_PLC_ROOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "RM-2 & KILN-2 PLC ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "RM2_PLC_ROOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>

              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "KM-2 & CLR-2 PLC ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CLR_PLC_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>

              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "KM-2 HYD PLC ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "HYD_PLC_ROOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "COOLER HYD ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CLR2_HYD_PLC_RT",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "KM-2 MV DRIVE ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CLR_VFD_ROOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-3 mx-auto",
                  label: "POST-CLINKERIZATION",
                }}
              />
              <div className="d-flex mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CM-1 & 2 MV DRIVE ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "MVDRIVE_ROOMTEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CM-1,2 & FEEDING PLC ROOM",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "Z1_PLCROOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>

              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CM-1 RP ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "RP_PLC_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>

              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "RP-2 & 4 PLC ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CM4_PLCROOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CM-3 RP DRIVE ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CM3_RP_DRIVEROOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CM-3 PLC, RP & MT PLC ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CM3_PLCROOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CM-4 PLC ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CM4_PLCROOM_TEMP2",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CM-4 MV DRIVE ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "Z4_MVDRIVE_ROOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "RP-1 VFD ROOM TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "RP1_VFD_ROOM_TEMP",
                    useClass: "greenTxt ml-2",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <table className="inner_tb">
                <tr>
                  <td> </td>
                  <td>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mx-1",
                        label: "TOTAL RNH",
                      }}
                    />
                  </td>
                  <td>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mx-1",
                        label: "LOAD RNH",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mx-2",
                        label: "SC05",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_SC05_TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mx-2",
                        label: "SC06",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_SC06_TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mx-2",
                        label: "SC07",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_SC07_TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mx-2",
                        label: "SC08",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_SC08TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_SC08LOAD TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mx-2",
                        label: "CP05",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_CP05 TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_CP05LOAD TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mx-2",
                        label: "CP06",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_CP06 TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_CP06LOAD TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mx-2",
                        label: "CP07",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_CP07 TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_CP07LOAD TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mx-2",
                        label: "CP08",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_CP08 TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_CP08LOAD TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mx-2",
                        label: "CP09",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_CP09 TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_CP09LOAD TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextContainerWithWrapWord
                      data={{
                        useClass: "text-dark mx-2",
                        label: "CP12",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_CP12 TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                  <td>
                    <BlackContainer
                      data={{
                        label: "PP_CP12LOAD TODAY",
                        useClass: "greenTxt ml-3",
                        unit: "h",
                        unitColor: "unitColor",
                      }}
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

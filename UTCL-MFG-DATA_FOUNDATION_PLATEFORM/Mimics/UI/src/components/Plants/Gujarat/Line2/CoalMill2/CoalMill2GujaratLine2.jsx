import {
  useBorderTagsColorStatus,
  useCaretColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
} from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  TransparentBoxWithGate,
  BlueContainerWithDynamicBorder,
  PipeWithCircles,
  MimicCaret,
} from "../../../../index";
export const CoalMill2GujaratLine2 = () => {
  return (
    <div className="CoalMill2GujaratLine2 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex">
        <div>
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "F2J01A_I1",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-3 mt-1",
                label: "J01A CURRENT",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "F2J01A_S1",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-3 mt-1",
                label: "J01A SPEED",
              }}
            />
          </div>
        </div>
        <div>
          <div className="box-1 ml-5 p-2">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-3 mt-1",
                  label: "SP POWER",
                }}
              />
              <BlackContainer
                data={{
                  label: "EMS_COALMILL2_SPC",
                  useClass: "greenTxt mt-1",
                  unit: "kW/t",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-3 mt-1",
                  label: "TPH",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM2 TPH DAY",
                  useClass: "greenTxt mt-1",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div className="d-flex mt-2 ml-5">
            <BlackContainer
              data={{
                label: "F2J05_T1",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM2_POWER",
                useClass: "greenTxt mt-1 ml-5",
                unit: "kW/t",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2">
        <BlackContainer
          data={{
            label: "F2J05_I1",
            useClass: "greenTxt mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
              "F2J05_MG"
            )}`,
            firstCircleText: "G",
            firstCircleLabel: "F2J05_MG",
          }}
          text={{}}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
              "F2J05"
            )}`,
            secondCircleText: "M",
            secondCircleLabel: "F2J05",
          }}
        />
      </div>
      <div className="position-absolute single-text-3">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("F2J05_TUP_MG")} `}
          label="F2J05_TUP_MG"
          text="G"
        />
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <MotorCircleDigitalTag
          className={`square mr-5 digital-tag ${useColorStatus(
            "BIN_WEIG_BYPASS"
          )} `}
          label="BIN_WEIG_BYPASS"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`square mr-3 digital-tag ${useColorStatus("L01BIN_SEL")} `}
          label="L01BIN_SEL"
          text="S"
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "F2T12",
            squareClass: `${useColorStatus("F2T12")}`,
          }}
        />
        <MotorCircleDigitalTag
          className={`square ml-3 digital-tag ${useColorStatus("L02BIN_SEL")} `}
          label="L02BIN_SEL"
          text="S"
        />
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "K2L01_W1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2L01T9",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2L01T8",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOZA",
            }}
          />
        </div>
        <div className="containerImage text-center ml-5">
          <BlackContainer
            data={{
              label: "K2L02_W1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2L02T9",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2L02T8",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOZA",
            }}
          />
        </div>
        <div className="ml-4 ">
          <div className="box-1 p-2">
            <BlackContainer
              data={{
                label: "K2SD01_SP",
                useClass: "greenTxt mx-auto",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2SD01_S1",
                useClass: "greenTxt mt-2 mx-auto",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`square digital-tag position-absolute mt-3 ${useColorStatus(
              "K2SD01"
            )}`}
            label="K2SD01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K2SD01",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K2A01",
            }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
                "K2A01_MG_IND"
              )}`,
              firstCircleText: "G",
              firstCircleLabel: "K2A01_MG_IND",
            }}
            text={{}}
            secondCircle={{
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
                "K2A01"
              )}`,
              secondCircleText: "M",
              secondCircleLabel: "K2A01",
            }}
          />
        </div>
        <div className="ml-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto",
              label: "K2A02",
            }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
                "K2A02"
              )}`,
              firstCircleText: "G",
              firstCircleLabel: "K2A02",
            }}
            text={{}}
            secondCircle={{
              secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
                "K2A02_MG"
              )}`,
              secondCircleText: "M",
              secondCircleLabel: "K2A02_MG",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag mr-1 ${useColorStatus(
            "K2A01_BLT_DRIFT_IND"
          )} `}
          label="K2A01_BLT_DRIFT_IND"
          text="D"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mr-1 ${useColorStatus(
            "K2A01_FLAP_LIMIT_IND"
          )} `}
          label="K2A01_FLAP_LIMIT_IND"
          text="F"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mr-1 ${useColorStatus(
            "K2A01_GFLT_IND"
          )} `}
          label="K2A01_GFLT_IND"
          text="F"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mr-1 ${useColorStatus("K2A01_RFS_IND")} `}
          label="K2A01_RFS_IND"
          text="R"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mr-1 ${useColorStatus(
            "K2A01_DRIVE_OVL_IND"
          )} `}
          label="K2A01_DRIVE_OVL_IND"
          text="O"
        />
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag mr-1 ${useColorStatus("K2A02_BSS")} `}
          label="K2A02_BSS"
          text="D"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mr-1 ${useColorStatus(
            "K2A02_FLAP_IND"
          )} `}
          label="K2A02_FLAP_IND"
          text="F"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mr-1 ${useColorStatus("K2A02_GFLT")} `}
          label="K2A02_GFLT"
          text="R"
        />
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <BlackContainer
          data={{
            label: "KM2_TOTAL_FEED",
            useClass: "greenTxt mt-5 mr-4",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "K2A01_F1",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2A01_I1",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2A01_S1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2A01SP",
              useClass: "greenTxt mt-4",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2A01_SP_SPA",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10">
        <BlackContainer
          data={{
            label: "K2A02_F1",
            useClass: "greenTxt mt-2",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2A02_I1",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2A02_S1",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2A02SP",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2A02_SP_SPA",
            useClass: "greenTxt mt-2",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-11">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat grey-color`,
            firstCircleText: "",
            firstCircleLabel: "K2A02",
          }}
          text={{ useClass: "text-dark", label: "K2J01" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
              "K2J01"
            )}`,
            secondCircleText: "M",
            secondCircleLabel: "K2J01",
          }}
        />
      </div>
      <div className="position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KW PID",
          }}
        />
        <div className="box-1 p-1 mt-1">
          <BlackContainer
            data={{
              label: "K2M03_KW_PID_SPA",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2M03_MV_KW",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1 mt-2">
          <BlackContainer
            data={{
              label: "K2M03_KW_PID_SPM",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K2A04",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag position-absolute mt-1 ${useColorStatus(
            "K2A04_NEW"
          )}`}
          label="K2A04_NEW"
        />
        <BlackContainer
          data={{
            label: "K2A04_I1",
            useClass: "greenTxt mt-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "K2K06_I1",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="box-1 p-1 mt-1">
          <BlackContainer
            data={{
              label: "K2K06_PID_SPA",
              useClass: "greenTxt mt-1",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2M01_F1",
              useClass: "greenTxt mt-1",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "K2M06",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("K2M06")} `}
            label="K2M06"
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "K2M06A",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("K2M06A")} `}
            label="K2M06A"
          />
        </div>
        <BlackContainer
          data={{
            label: "K2M01_P1",
            useClass: "greenTxt mt-2",
            unit: "mmWg",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2M03_J1",
            useClass: "greenTxt mt-2",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2M03_I1",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2M03_ST_DELAY_TIMER",
            useClass: "greenTxt mt-2 ml-3",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2M03_GRR_NEW_SP",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM2_MAIN_MOTOR_SPEED",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM2_MV_DRIVE_ROOM_TEMP",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM2_MV_DRIVE_ROOM_TEMP",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="bigContainer position-absolute single-text-16 text-center ">
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-3 ${useColorStatus("K2S01")} `}
          label="K2S01"
          text="M"
        />
        <BlackContainer
          data={{
            label: "K2S01_X9",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2S01_X2",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-3 ${useColorStatus("K2M01_DOOR")} `}
          label="K2M01_DOOR"
          text="D"
        />
        <BlackContainer
          data={{
            label: "K2M01_X2",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2M01_X1",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2M07_L1",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "GRINDING PRESSURE ON",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RO1",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag position-absolute mt-1 ${useColorStatus(
            "K2R01"
          )}`}
          label="K2R01"
        />
        <BlackContainer
          data={{
            label: "K2R01_T1",
            useClass: "greenTxt mt-4 ml-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="pipe dotted-pipe position-absolute single-text-18">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2R02")} `}
          label="K2R02"
          text="M"
        />
      </div>
      <div className="containerImage position-absolute single-text-19"></div>
      <div className="position-absolute single-text-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WATER SOV",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "REJECT_SOV_CMD"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "REJECT_SOV_CMD"
          )}`}
          label="REJECT_SOV_CMD"
        />
      </div>
      <div className="position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "K2P11_P2",
            useClass: "greenTxt  ml-4 mb-4",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2M01_P2",
            useClass: "greenTxt  ml-4 mb-4",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2M01_T2",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PLC_K2S01_I1",
            useClass: "greenTxt mt-2 ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="box-1 p-1 mt-2">
          <BlackContainer
            data={{
              label: "PLC_K2S01_SP_MODE",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC_K2S01_S1",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="squareplustri d-flex  mt-1 position-absolute single-text-22">
        <div className="d-flex align-items-end justify-content-center mt-1">
          <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-23">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("K2P05")} `}
          label="K2P05"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P05",
          }}
        />
      </div>
      <div className="squareplustri d-flex align-items-end justify-content-center mt-1 position-absolute single-text-24">
        <div className="d-flex align-items-end justify-content-center mt-1">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${"CM_593RAF"}`}
            label="CM_593RAF_RUN"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-25">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("K2K06M2")} `}
            label="K2K06M2"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "K06M2",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("K2K06")} `}
            label="K2K06"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "K06",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-26">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K01",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "K2K01"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "K2K01"
          )}`}
          label="K2K01"
        />
      </div>
      <div className="position-absolute single-text-27">
        <div class="tringle-item">
          <i class="fa-solid fa-caret-down d-block grey-color-caret"></i>
          <i class="fa-solid fa-caret-up d-block grey-color-caret"></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "WTR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TANK",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "K2K01Z1A_SP_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2K01_Z1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1 mt-1">
          <BlackContainer
            data={{
              label: "K2K06_PID_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2K06_S1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="img-83 position-absolute single-text-29">
        <div className="d-flex justify-content-around pt-3">
          <BlackContainer
            data={{
              label: "K2P11_P1",
              useClass: "greenTxt mt-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2P11_A1",
              useClass: "greenTxt mt-2",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2P11_A2",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <div>
            <BlackContainer
              data={{
                label: "K2P11_T2",
                useClass: "greenTxt mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "BAGHOUSE_GAS_MAT_TEMP",
                useClass: "greenTxt ml-autp mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-30 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2C02_L1")} `}
          label="K2C02_L1"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2C01_L1")} `}
          label="K2C01_L1"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2C04_L1")} `}
          label="K2C04_L1"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2C03_L1")} `}
          label="K2C03_L1"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2C06_L1")} `}
          label="K2C06_L1"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2C05_L1")} `}
          label="K2C05_L1"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2C08_L1")} `}
          label="K2C08_L1"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2C07_L1")} `}
          label="K2C07_L1"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2C10_L1")} `}
          label="K2C10_L1"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2C09_L1")} `}
          label="K2C09_L1"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2C12_L1")} `}
          label="K2C12_L1"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K2C12_L1")} `}
          label="K2C12_L1"
          text="L"
        />
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <BlackContainer
          data={{
            label: "QCX_RES90_KM2",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM2 TPH SHIFT",
            useClass: "greenTxt mt-2 ml-5",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-32 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2P24"
            )}`}
            label="K2P24"
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
              "K2P25"
            )}`}
            label="K2P25"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2P26"
            )}`}
            label="K2P26"
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
              "K2P27"
            )}`}
            label="K2P27"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2P28"
            )}`}
            label="K2P28"
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
              "K2P29"
            )}`}
            label="K2P29"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2P30"
            )}`}
            label="K2P30"
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
              "K2P31"
            )}`}
            label="K2P31"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2P32"
            )}`}
            label="K2P32"
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
              "K2P33"
            )}`}
            label="K2P33"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2P34"
            )}`}
            label="K2P34"
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
              "K2P35"
            )}`}
            label="K2P35"
          />
        </div>
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "P37",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("K2P37")}`}
          label="K2P37"
        />
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "P36",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("K2J23")}`}
          label="K2J23"
        />
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2P12"
            )}`}
            label="K2P12"
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
              "K2P13"
            )}`}
            label="K2P13"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2P14"
            )}`}
            label="K2P14"
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
              "K2P15"
            )}`}
            label="K2P15"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2P16"
            )}`}
            label="K2P16"
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
              "K2P17"
            )}`}
            label="K2P17"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2P18"
            )}`}
            label="K2P18"
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
              "K2P19"
            )}`}
            label="K2P19"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2P20"
            )}`}
            label="K2P20"
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
              "K2P21"
            )}`}
            label="K2P21"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2P22"
            )}`}
            label="K2P22"
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag mt-2 ${useFanImgTagsColorStatus(
              "K2P23"
            )}`}
            label="K2P23"
          />
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("K2J23")} `}
          label="K2J23"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "J23",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "K2J24"
          )} position-absolute`}
          label="K2J24"
        />
        <div className="d-flex mt-4 pt-2">
          <BlackContainer
            data={{
              label: "K2M01_P3",
              useClass: "greenTxt  mr-5",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2M01_T1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-38 d-flex box-1 p-1 text-center">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("CP05")} `}
            label="CP05"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "CP05",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("CP06")} `}
            label="CP06"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "CP06",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-39 ">
        <BlackContainer
          data={{
            label: "K2S01_T1",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2S01_T2",
            useClass: "greenTxt mt-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2S01_P1",
            useClass: "greenTxt  mt-4",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-40">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("K2T19")}
          isClickable={true}
          tagLabel="K2T19"
        />
      </div>
      <div className="position-absolute single-text-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4 mt-1",
            label: "T19",
          }}
        />
        <div className="box-1 p-1 mt-3">
          <BlackContainer
            data={{
              label: "K2T19_Z1_PID_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2T19_Z1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "FRESH AIR",
          }}
        />
        <BlackContainer
          data={{
            label: "W2P24_X9",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-auto",
            label: "P23",
          }}
        />
        <BlackContainer
          data={{
            label: "HYD_PUMP_COUNT",
            useClass: "greenTxt mt-2",
            unit: "nos",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-42 d-flex">
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "K2M07_SP_SPM",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2M07_P1",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2 d-flex box-1 p-1 text-center">
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "K2M07M1"
              )} `}
              label="K2M07M1"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "M07",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "K2M07M1"
              )} `}
              label="K2M07M1"
            />
          </div>
        </div>
        <div className="ml-2 d-flex box-1 p-1 text-center">
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "K2M05M1"
              )} `}
              label="K2M05M1"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-2",
                label: "M05",
              }}
            />
          </div>
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "K2M05_P1",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC_GEAR_TEMP",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <div className="d-flex">
          <div className="mr-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FAN SPEED",
              }}
            />
            <div className="box-1 p-1 mt-2">
              <BlackContainer
                data={{
                  label: "PLC_W2P24_SP_SPM",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "PLC_W2P24_S1",
                  useClass: "greenTxt mt-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TEMP.PID(RPM)",
              }}
            />
            <div className="box-1 p-1 mt-2">
              <BlackContainer
                data={{
                  label: "PLC_W2P24_SP_SPA",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "K2M01_T2",
                  useClass: "greenTxt mt-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="mr-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FAN DAMPER",
              }}
            />
            <div className="box-1 p-1 mt-2">
              <BlackContainer
                data={{
                  label: "W2P23_Z1_PID_SPM",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "W2P23_Z1",
                  useClass: "greenTxt mt-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "TEMP.PID(DMPER)",
              }}
            />
            <div className="box-1 p-1 mt-2">
              <BlackContainer
                data={{
                  label: "W2P23_Z1_PID_SPA",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "K2M01_T2",
                  useClass: "greenTxt mt-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="containerImage position-absolute single-text-44">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CYCLONE",
          }}
        />
      </div>
      <div className="position-absolute single-text-45  mt-1">
        <BlackContainer
          data={{
            label: "DCB_TEMP",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="mt-3 d-flex align-items-end justify-content-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2J04"
            )}`}
            label="K2J04"
          />
          <div className="mr-5 d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "J04",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-46">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("K2U15")}`}
          label="K2U15"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-1",
            label: "U15",
          }}
        />
      </div>
      <div className=" position-absolute single-text-47">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("K2U16")}`}
          label="K2U16"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-1",
            label: "U16",
          }}
        />
      </div>
      <div className="position-absolute single-text-48  mt-1">
        <BlackContainer
          data={{
            label: "DCB_PR",
            useClass: "greenTxt",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto mt-2"
          squareProps={{
            tagLabel: "",
            squareClass: `grey-color`,
          }}
        />
        <div className="mt-3 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "J03",
            }}
          />

          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2J03"
            )}`}
            label="K2J03"
          />
        </div>
      </div>
      <div className="position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-1",
            label: "T04",
          }}
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto mt-2"
          squareProps={{
            tagLabel: "K2T04",
            squareClass: `${useColorStatus("K2T04")}`,
          }}
        />
      </div>
      <div className="position-absolute single-text-50 ">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-3",
              label: "B20",
            }}
          />
          <TransparentBoxWithGate
            isClickable={true}
            parentClass="mx-auto mt-2 mr-5"
            squareProps={{
              tagLabel: "W2B20",
              squareClass: `${useColorStatus("W2B20")}`,
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "K2L03_L2",
            useClass: "greenTxt mt-4",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2",
            label: "TO SEC FIRING",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "K2P38"
        )} position-absolute single-text-51`}
        label="K2P38"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "K2J31"
        )} position-absolute single-text-52`}
        label="K2J31"
      />
      <div className="position-absolute single-text-53 d-flex">
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "K2LO4_P1",
              useClass: "greenTxt mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2L04_W1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2L04_MAX_TEMP",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L04",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "K2L04L05_A2",
            useClass: "greenTxt mt-1",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "K2LO5_P1",
              useClass: "greenTxt mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2L05_W1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2L05_MAX_TEMP",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L05",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-54  mt-1 d-flex">
        <div className="mt-3 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "J51",
            }}
          />
          <div className="circle-img c-grey-img-2"></div>
        </div>
        <BlackContainer
          data={{
            label: "K2J31_I1",
            useClass: "greenTxt mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "J31",
          }}
        />
        <div className="mt-3 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-2",
              label: "P40",
            }}
          />

          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K2P40"
            )}`}
            label="K2P40"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-55">
        <BlackContainer
          data={{
            label: "K2P55_T1",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2P55_T2",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="squareplustri d-flex  mt-1">
          <div className="d-flex  mt-5 ml-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag mt-3 ${useFanImgTagsColorStatus(
                "K2P54"
              )}`}
              label="K2P54"
            />
            <div className="mt-4 ml-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-2",
                  label: "P54",
                }}
              />
            </div>
            <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-56">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("K2P55")} `}
          label="K2P55"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P55",
          }}
        />
      </div>
      <div className="position-absolute single-text-57 d-flex">
        <div className="mr-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FAN PID",
            }}
          />
          <div className="box-1 p-1">
            <BlackContainer
              data={{
                label: "K2T01_SP_SPM",
                useClass: "greenTxt",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2T01_S1",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "K2T01_X2",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2T01_X9",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FAN SPEED",
            }}
          />
          <div className="box-1 p-1">
            <BlackContainer
              data={{
                label: "K2T01_SP_SPA",
                useClass: "greenTxt",
                unit: "kW",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2T01_J1",
                useClass: "greenTxt mt-1",
                unit: "kW",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "K2T01_J1_UNFILTERED",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2T01_I1",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-58 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-1",
              label: "T02",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("K2T02")}`}
            isClickable={true}
            tagLabel="K2T02"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-1",
              label: "T01",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag mt-1 ${useColorStatus(
              "K2T01"
            )} `}
            label="K2T01"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-1",
              label: "T08",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={`mt-2 ${useBorderTagsColorStatus("K2T08")}`}
            isClickable={true}
            tagLabel="K2T08"
          />
        </div>
      </div>
      <div className="position-absolute single-text-59 d-flex ">
        <div className="box-1 p-1 align-self-start">
          <BlackContainer
            data={{
              label: "K2T02_Z1_PID_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2T02_Z1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="box-1 p-1">
            <BlackContainer
              data={{
                label: "K2T08_Z1_PID_SPM",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2T08_Z1",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="box-1 p-1 mt-5">
            <BlackContainer
              data={{
                label: "K2T03_Z1_PID_SPM",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2T03_Z1",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-60 ">
        <div className="d-flex">
          <BlueContainerWithDynamicBorder
            useClass={`mx-auto mt-2 mr-4 ${useBorderTagsColorStatus("K2T03")}`}
            isClickable={true}
            tagLabel="K2T03"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "T03",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-61">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "P24",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("W2P24")} `}
          label="W2P24"
        />
        <BlueContainerWithDynamicBorder
          useClass={`mt-2 position-absolute ${useBorderTagsColorStatus(
            "W2P23"
          )}`}
          isClickable={true}
          tagLabel="W2P23"
        />
        <BlackContainer
          data={{
            label: "PLC_W2P24_I1",
            useClass: "greenTxt ml-4 mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`dot digital-tag mt-3 position-absolute single-text-62 ${useColorStatus(
          "K2A02_RFS"
        )} `}
        label="K2A02_RFS"
        text="H"
      />
      <div className="position-absolute single-text-63 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "P12",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-3",
              label: "P13",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "P22",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-3",
              label: "P23",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-64 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "P24",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-3",
              label: "P25",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "P34",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-3",
              label: "P35",
            }}
          />
        </div>
      </div>
      <div className=" d-flex position-absolute single-text-65">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "K2P04"
          )}`}
          label="K2P04"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1 ",
            label: "P04",
          }}
        />
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Hr  position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-9"></div>
      <div className="yellowline-Hr  position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr position-absolute line-14"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Vr  position-absolute line-17"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-18"></div>
      <div className="yellowline-Vr  position-absolute line-19"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-20"></div>
      <div className="yellowline-Vr  position-absolute line-21"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Vr downArrow position-absolute line-36"></div>
      <div className="yellowline-Vr downArrow position-absolute line-37"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-38"></div>
      <div className="yellowline-Vr position-absolute line-39"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-40"></div>
      <div className="yellowline-Vr  position-absolute line-41"></div>
      <div className="yellowline-Hr  position-absolute line-42"></div>
      <div className="yellowline-Vr downArrow position-absolute line-43"></div>
      <div className="yellowline-Vr downArrow position-absolute line-44"></div>
      <div className="yellowline-Vr downArrow position-absolute line-45"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-46"></div>
      <div className="yellowline-Vr downArrow position-absolute line-47"></div>
      <div className="yellowline-Vr downArrow position-absolute line-48"></div>
      <div className="yellowline-Vr downArrow position-absolute line-49"></div>
      <div className="yellowline-Vr downArrow position-absolute line-50"></div>
      <div className="yellowline-Vr downArrow position-absolute line-51"></div>
      <div className="yellowline-Vr downArrow position-absolute line-52"></div>
      <div className="yellowline-Vr downArrow position-absolute line-53"></div>
      <div className="yellowline-Hr  position-absolute line-54"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-55"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-56"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-57"></div>
      <div className="yellowline-Vr  position-absolute line-58"></div>
    </div>
  );
};

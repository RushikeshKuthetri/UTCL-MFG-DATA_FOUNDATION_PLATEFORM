import { useCaretColorStatus, useColorStatus } from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  LinkButton,
  MotorCircleDigitalTag,
  MimicCaret,
  RedBoxWithGate,
} from "../../../../index";

export const RollerPressMaihar = () => {
  return (
    <div className="RollerPressMaihar w-100 h-100 position-relative">
      <div className="box-1 p-3 position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 mx-auto",
            label: " Rolcox lnput Vibration",
          }}
        />

        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2 mr-2",
              label: "FR Horziontal Vib",
            }}
          />

          <BlackContainer
            data={{
              label: "R_INP_362RP1_XT1",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2 mr-2",
              label: " FR Vartical Vib",
            }}
          />
          <BlackContainer
            data={{
              label: "R_INP_362RP1_XT2",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2 mr-2",
              label: "MR Horziontal Vib",
            }}
          />
          <BlackContainer
            data={{
              label: "R_INP_362RP1_XT3",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2 mr-2",
              label: " MR Vartical Vib",
            }}
          />
          <BlackContainer
            data={{
              label: "R_INP_362RP1_XT4",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="box-1 p-3 position-absolute single-text-2">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2 mr-2",
              label: " Current Difference",
            }}
          />
          <BlackContainer
            data={{
              label: "R_STA_Current_Difference",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2 mr-2",
              label: " SP Pressure Left+Right",
            }}
          />

          <BlackContainer
            data={{
              label: "R_STA_SP_Press_LR",
              useClass: "greenTxt mt-2",
              unit: "BAR",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2 mr-2",
              label: "SP Pres+Correction Factor Left",
            }}
          />

          <BlackContainer
            data={{
              label: "R_STA_SP_Press_Corr_L",
              useClass: "greenTxt mt-2",
              unit: "BAR",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2 mr-2",
              label: "SP Pres+Correction Factor Right",
            }}
          />

          <BlackContainer
            data={{
              label: "R_STA_SP_Press_Corr_R",
              useClass: "greenTxt mt-2",
              unit: "BAR",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2 mr-2",
              label: "Bearing + Roller Distance Left",
            }}
          />

          <BlackContainer
            data={{
              label: "R_INP_362RP1_ZZ1",
              useClass: "greenTxt mt-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-2 mr-2",
              label: "Bearing + Roller Distance Right",
            }}
          />

          <BlackContainer
            data={{
              label: "R_INP_362RP1_ZZ2",
              useClass: "greenTxt mt-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-3">
        <div className="text-white position-absolute single-text-a">
          <TextContainerWithWrapWord
            data={{
              label: "362MD2-Temp",
            }}
          />
        </div>
        <div className="d-flex justify-content-between  mt-3">
          <BlackContainer
            data={{
              label: "362MD1_BTE1",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362MD1_BTE2",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between  mt-5">
          <BlackContainer
            data={{
              label: "362MD1_WTE1",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362MD1_WTE2",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362MD1_WTE3",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex justify-content-between  mt-3 mb-2">
          <BlackContainer
            data={{
              label: "362MD1_WTE4",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362MD1_WTE5",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362MD1_WTE6",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-4">
        <div className="text-white position-absolute single-text-a">
          <TextContainerWithWrapWord
            data={{
              useClass: "",
              label: "362MD1-Temp",
            }}
          />
        </div>
        <div className="d-flex justify-content-between  mt-3">
          <BlackContainer
            data={{
              label: "362MD2_BTE1",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362MD2_BTE2",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between  mt-5">
          <BlackContainer
            data={{
              label: "362MD2_WTE1",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362MD2_WTE2",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362MD2_WTE3",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex justify-content-between  mt-3 mb-2">
          <BlackContainer
            data={{
              label: "362MD2_WTE4",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362MD2_WTE5",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362MD2_WTE6",
              useClass: "greenTxt mx-auto mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-2 mr-2",
            label: "362BI1",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mx-auto mt-3 mr-2",
            label: "362LQ3",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-2 mr-2",
            label: "OIL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-2 mr-2",
            label: "TANK",
          }}
        />
        <BlackContainer
          data={{
            label: "R_INP_362HD1_TZ1",
            useClass: "greenTxt mx-auto mt-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "R_INP_362GB1_TE2",
            useClass: "greenTxt  mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R_INP_362GB2_TE1",
            useClass: "greenTxt mx-auto mt-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute d-flex single-text-27">
        <div>
          <BlackContainer
            data={{
              label: "R_INP_362RP1_TE5",
              useClass: "greenTxt mr-4 ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mx-auto mt-2 ",
              label: "362SG2",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "R_INP_362RP1_TE6",
            useClass: "greenTxt  ml-5",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "R_STA_Grease_Count_Left",
          useClass: "greenTxt  mt-2 position-absolute single-text-28",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "R_STA_Grease_Count_Right",
          useClass: "greenTxt  mt-2 position-absolute single-text-29",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "R_INP_362GB1_TE1",
          useClass: "greenTxt  mt-2 position-absolute single-text-30",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "R_INP_362GB2_TE2",
          useClass: "greenTxt  mt-2 position-absolute single-text-31",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className=" position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "R_Inp_362HD1_PZ1",
            useClass: "greenTxt ",
            unit: "Bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R_STA_OP_OUP_PropValve_Left",
            useClass: "greenTxt  mt-4 ml-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "R_INP_362HD1_PZ2",
            useClass: "greenTxt ",
            unit: "Bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R_STA_OP_OUP_PropValve_Right",
            useClass: "greenTxt  mt-4 ml-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-6">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down digital-tag d-block ${useCaretColorStatus(
            "362SG2"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up digital-tag d-block ${useCaretColorStatus(
            "362SG2"
          )}`}
          label="362SG2"
        />
      </div>
      <div className="pipeVr position-absolute pipe-1"></div>
      <RedBoxWithGate
        isClickable={true}
        parentClass="position-absolute single-text-7"
        squareProps={{
          tagLabel: "362SG3",
          squareClass: `${useColorStatus("362SG3")}`,
        }}
      />
      <div className="position-absolute single-text-8">
        <div className="pipeHr position-absolute pipe-2"></div>
        <div className="pipeHr position-absolute pipe-3">
          <div className="d-flex justify-content-around">
            <BlackContainer
              data={{
                label: "R_INP_362RP1_TE2",
                useClass: "greenTxt mx-auto mt-4",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mx-auto mt-4 mr-2",
                  label: "FIXED ROLL",
                }}
              />
              <BlackContainer
                data={{
                  label: "R_INP_362RP1_SZ1_A",
                  useClass: "greenTxt mx-auto mt-2",
                  unit: "RPM",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <BlackContainer
              data={{
                label: "R_INP_362RP1_TE1",
                useClass: "greenTxt mx-auto mt-4",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="pipeHr position-absolute pipe-4"></div>
        <div className="img-86 position-absolute single-text-9"></div>
        <div className="img-86 position-absolute single-text-10"></div>
        <div className="img-86 position-absolute single-text-11"></div>
        <div className="pipeHr position-absolute pipe-5"></div>
        <div className="pipeVr position-absolute pipe-6"></div>
        <div className="pipeHr position-absolute pipe-7"></div>
        <div className="pipeVr position-absolute pipe-8"></div>
        <div className="pipeVr position-absolute pipe-9"></div>
        <div className="pipeVr position-absolute pipe-10"></div>
        <div className="pipeVr position-absolute pipe-11"></div>
        <div className="pipeVr position-absolute pipe-12"></div>
        <div className="pipeVr position-absolute pipe-13"></div>
        <div className="pipeVr position-absolute pipe-14"></div>
        <div className="pipeVr position-absolute pipe-15"></div>
        <div className="img-41 position-absolute single-text-12"></div>
        <div className="yellowline-Vr position-absolute line-1"></div>
        <div className="yellowline-Vr position-absolute line-2"></div>
        <div className="yellowline-Hr position-absolute line-3"></div>
        <div className="yellowline-Hr position-absolute line-4"></div>
        <div className="yellowline-Hr position-absolute line-5"></div>
        <div className="yellowline-Vr position-absolute line-6"></div>
        <div className="yellowline-Vr downArrow position-absolute line-7"></div>
        <div className="yellowline-Vr downArrow position-absolute line-8"></div>
        <div className="yellowline-Vr downArrow position-absolute line-9"></div>
        <div className="yellowline-Vr downArrow position-absolute line-10"></div>
        <div className="yellowline-Hr leftarrow position-absolute line-11"></div>
        <div className="yellowline-Hr rightarrow position-absolute line-12"></div>
        <div className="yellowline-Vr position-absolute line-13"></div>
        <div className="yellowline-Vr position-absolute line-14"></div>
        <div className="yellowline-Hr position-absolute line-15"></div>
        <div className="yellowline-Hr position-absolute line-16"></div>
        <div className="yellowline-Hr position-absolute line-17"></div>
        <div className="yellowline-Vr position-absolute line-18"></div>
        <div className="yellowline-Vr position-absolute line-19"></div>
        <div className="yellowline-Vr upArrow position-absolute line-20"></div>
        <div className="yellowline-Vr upArrow position-absolute line-21"></div>
        <div className="yellowline-Hr  position-absolute line-22"></div>
        <div className="yellowline-Vr  position-absolute line-23"></div>
        <div className="yellowline-Hr  position-absolute line-24"></div>
        <div className="yellowline-Hr  position-absolute line-25"></div>
        <div className="yellowline-Hr  position-absolute line-26"></div>
        <div className="yellowline-Hr  position-absolute line-27"></div>
        <div className="yellowline-Vr  position-absolute line-28"></div>
        <div className="yellowline-Vr  position-absolute line-29"></div>
        <div className="yellowline-Vr  position-absolute line-30"></div>
        <div className="yellowline-Hr  position-absolute line-31"></div>

        <div className="position-absolute single-text-13">
          <div className="img-86 position-absolute"></div>
          <MotorCircleDigitalTag
            className={`line-circle ml-4 digital-tag ${useColorStatus(
              "362LQ1_M02"
            )}`}
            label="362LQ1_M02"
          />
        </div>
        <div className="position-absolute single-text-14">
          <div className="img-86 position-absolute"></div>
          <MotorCircleDigitalTag
            className={`line-circle ml-3 digital-tag ${useColorStatus(
              "362LQ1_M01"
            )}`}
            label="362LQ1_M01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-16">
        <div className="pipeHr position-absolute pipe-2"></div>
        <div className="pipeHr position-absolute pipe-3">
          <div className="d-flex justify-content-around">
            <BlackContainer
              data={{
                label: "R_INP_362RP1_TE4",
                useClass: "greenTxt mx-auto mt-4",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mx-auto mt-4 mr-2",
                  label: "MOVABLE ROLL",
                }}
              />
              <BlackContainer
                data={{
                  label: "R_INP_362RP1_SZ2_A",
                  useClass: "greenTxt mx-auto mt-2",
                  unit: "RPM",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <BlackContainer
              data={{
                label: "R_INP_362RP1_TE3",
                useClass: "greenTxt mx-auto mt-4",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>

        <div className="position-absolute single-text-34 d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus(
              "362HD1_M02"
            )}`}
            label="362HD1_M02"
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ml-4 ${useColorStatus(
              "362HD1_M01"
            )}`}
            label="362HD1_M01"
          />
        </div>
        <div className="pipeHr position-absolute pipe-4"></div>
        <div className="img-86 position-absolute single-text-9"></div>
        <div className="img-86 position-absolute single-text-10"></div>
        <div className="img-86 position-absolute single-text-11"></div>
        <div className="pipeHr position-absolute pipe-5"></div>
        <div className="pipeVr position-absolute pipe-6"></div>
        <div className="pipeHr position-absolute pipe-7"></div>
        <div className="pipeVr position-absolute pipe-8"></div>
        <div className="pipeVr position-absolute pipe-9"></div>
        <div className="img-41 position-absolute single-text-12"></div>
        <div className="yellowline-Vr position-absolute line-1"></div>
        <div className="yellowline-Vr position-absolute line-2"></div>
        <div className="yellowline-Hr position-absolute line-3"></div>
        <div className="yellowline-Hr position-absolute line-4"></div>
        <div className="position-absolute single-text-13">
          <div className="img-86 position-absolute"></div>
          <MotorCircleDigitalTag
            className={`line-circle ml-3 digital-tag ${useColorStatus(
              "362LQ2_M02"
            )}`}
            label="362LQ2_M02"
          />
        </div>
        <div className="position-absolute single-text-14">
          <div className="img-86 position-absolute"></div>
          <MotorCircleDigitalTag
            className={`line-circle ml-3 digital-tag ${useColorStatus(
              "362LQ2_M01"
            )}`}
            label="362LQ2_M01"
          />
        </div>
        <div className="position-absolute single-text-17">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
          />
        </div>
        <div className="position-absolute single-text-18">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
          />
        </div>
        <div className="position-absolute single-text-19">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
          />
        </div>
        <div className="position-absolute single-text-20">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
          />
        </div>
        <div className="position-absolute single-text-21">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
          />
        </div>
        <div className="position-absolute single-text-22">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
          />
        </div>
        <div className="position-absolute single-text-23">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
          />
        </div>
        <div className="position-absolute single-text-24">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div className="mr-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mx-auto mt-2 mr-2",
              label: "362HD1.M01",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mx-auto mt-2 mr-2",
              label: "Pump 1 Pos",
            }}
          />
        </div>
        <div className="ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mx-auto mt-2 mr-2",
              label: "362HD1.M02",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mx-auto mt-2 mr-2",
              label: "Pump 2 Pos",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <div className="mr-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mx-auto mt-2 mr-2",
              label: "Left End Limit",
            }}
          />
        </div>
        <div className="ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mx-auto mt-2 mr-2",
              label: "Right End Limit",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-37 ">
        <div className=" d-flex text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag p-2 ${useColorStatus("362RP_WP1")}`}
            label="362RP_WP1"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white ml-2",
              label: "362RP_WP1",
            }}
          />
        </div>
        <div className=" d-flex text-center mt-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag p-2 ${useColorStatus("362RP_WP2")}`}
            label="362RP_WP2"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white  ml-2",
              label: "362RP_WP2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-38">
        <div className=" d-flex text-center mb-4">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "362MD1_M02"
            )}`}
            label="362MD1_M02"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white  ml-2",
              label: "362MD1_M02",
            }}
          />
        </div>
        <div className=" d-flex text-center mt-5">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "362MD2_M02"
            )}`}
            label="362MD2_M02"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white   ml-2",
              label: "362MD2_M02",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-39 d-flex ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white  mr-4",
            label: "M01",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white  ml-5",
            label: "M02",
          }}
        />
      </div>
      <div className="position-absolute single-text-40 d-flex ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white  mr-4",
            label: "M01",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white  ml-5",
            label: "M02",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <MotorCircleDigitalTag
          className={`dot digital-tag p-2 ml-2 ${useColorStatus("362LQ3_M01")}`}
          text="M"
          label="362LQ3_M01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ml-3 mt-1",
            label: "362LQ3.M01",
          }}
        />
      </div>
      <div className="position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mb-2",
            label: "362MD1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag p-3 mx-auto ${useColorStatus("362MD1")}`}
          text="M"
          label="362MD1"
        />
      </div>
      <div className="position-absolute single-text-43">
        <MotorCircleDigitalTag
          className={`dot digital-tag p-3 mx-auto ${useColorStatus("362MD2")}`}
          text="M"
          label="362MD2"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-3",
            label: "362MD2",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white  position-absolute single-text-44",
          label: "362LQ1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white  position-absolute single-text-45",
          label: "362LQ2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white  position-absolute single-text-48",
          label: "GREASE TANK",
        }}
      />
      <div className="position-absolute single-text-46">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
        />
      </div>
      <div className="position-absolute single-text-47">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
        />
      </div>
      <div className="position-absolute single-text-49 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mr-4",
            label: "V11",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mx-auto",
            label: "V09",
          }}
        />
      </div>
      <div className="position-absolute single-text-50">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mb-4",
            label: "V05",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mx-auto",
            label: "V01",
          }}
        />
      </div>
      <div className="position-absolute single-text-51">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mb-3",
            label: "V08",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mx-auto",
            label: "V07",
          }}
        />
      </div>
      <div className="position-absolute single-text-52 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mr-5",
            label: "V10",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white  mt-3 ml-2",
            label: "V12",
          }}
        />
      </div>
      <div className="position-absolute single-text-53">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mr-5",
            label: "V06",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white  mt-5 ml-4",
            label: "V02",
          }}
        />
      </div>
      <LinkButton
        buttonClassname="d-block btn greenbtn position-absolute single-text-54 link-button"
        link="/chartspage"
        text=" Charts Visualisation"
      />
    </div>
  );
};

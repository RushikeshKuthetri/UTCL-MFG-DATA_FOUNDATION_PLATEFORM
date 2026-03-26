import { useCaretColorStatus, useColorStatus } from "../../../../../utils";
import {
  BlackContainer,
  MimicCaret,
  MotorCircleDigitalTag,
  PipeWithCircles,
  ProgressBarMimic,
  TextContainerWithWrapWord,
} from "../../../../index";

export const CoolerLine3 = () => {
  return (
    <div className="CoolerLine3  w-100 h-100 position-relative">
      <div className="pipeVr position-absolute pipe-1 d-flex flex-column justify-content-around">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ROLLER CRUSHER",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Rev Count",
              }}
            />
            <BlackContainer
              data={{
                label: "422RC1M3_REV_COUNT",
                useClass: "greenTxt mt-1",
                unit: "nos.",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Rev Count",
              }}
            />
            <BlackContainer
              data={{
                label: "422RC1M2_REV_COUNT",
                useClass: "greenTxt mt-1",
                unit: "nos.",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="text-center">
            <BlackContainer
              data={{
                label: "IT4018",
                useClass: "greenTxt mt-1",
                unit: "Amp",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center">
            <BlackContainer
              data={{
                label: "IT4016",
                useClass: "greenTxt mt-1",
                unit: "Amp",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="text-center">
            <BlackContainer
              data={{
                label: "IT4017",
                useClass: "greenTxt mt-1",
                unit: "Amp",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center">
            <BlackContainer
              data={{
                label: "IT4015",
                useClass: "greenTxt mt-1",
                unit: "Amp",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("422RC1M4")} `}
              label="422RC1M4"
              text="M4"
            />
            <BlackContainer
              data={{
                label: "RT4107",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RT4108",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("422RC1M3")} `}
              label="422RC1M3"
              text="M3"
            />
            <BlackContainer
              data={{
                label: "RT4105",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RT4106",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("422RC1M2")} `}
              label="422RC1M2"
              text="M2"
            />
            <BlackContainer
              data={{
                label: "RT4103",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RT4104",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("422RC1M1")} `}
              label="422RC1M1"
              text="M1"
            />
            <BlackContainer
              data={{
                label: "RT4101",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RT4102",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute pipe-2 d-flex">
        <div className="border text-center p-1 w">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "8",
            }}
          />
          <BlackContainer
            data={{
              label: "PT4014",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border text-center p-1 w">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "7",
            }}
          />
          <BlackContainer
            data={{
              label: "PT4013",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border text-center p-1 w">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "6",
            }}
          />
          <BlackContainer
            data={{
              label: "PT4012",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border text-center p-1 w">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "5",
            }}
          />
          <BlackContainer
            data={{
              label: "PT4011",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border text-center p-1 w">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "4",
            }}
          />
          <BlackContainer
            data={{
              label: "PT4010",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border text-center p-1 w">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "3",
            }}
          />
          <BlackContainer
            data={{
              label: "PT4009",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border text-center p-1 w">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "2",
            }}
          />
          <BlackContainer
            data={{
              label: "PT4008",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border text-center p-1 w">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "1",
            }}
          />
          <BlackContainer
            data={{
              label: "PT4007",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-3 d-flex flex-column justify-content-around ">
        <div className="d-flex justify-content-around align-items-center">
          <MotorCircleDigitalTag
            className={`text-dark bg-secondary p-1 digital-tag ${useColorStatus(
              "_422GQ1_RR_L_ACT"
            )} `}
            label="_422GQ1_RR_L_ACT"
            text="ON"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RED RIVER LEFT",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "X10 A4",
            }}
          />
          <ProgressBarMimic />
          <BlackContainer
            data={{
              label: "422GQ1_A4_POS",
              useClass: "greenTxt ",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422GQ1_A4_SET_SPD",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "X9 C3",
            }}
          />
          <ProgressBarMimic />
          <BlackContainer
            data={{
              label: "422GQ1_C3_POS",
              useClass: "greenTxt ",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422GQ1_C3_SET_SPD",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "X8 B3",
            }}
          />
          <ProgressBarMimic />
          <BlackContainer
            data={{
              label: "422GQ1_B3_POS",
              useClass: "greenTxt ",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422GQ1_B3_SET_SPD",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "X7 A3",
            }}
          />
          <ProgressBarMimic />
          <BlackContainer
            data={{
              label: "422GQ1_A3_POS",
              useClass: "greenTxt ",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_422GQ1_A3_SET_SPD",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "X6 C2",
            }}
          />
          <ProgressBarMimic />
          <BlackContainer
            data={{
              label: "422GQ1_C2_POS",
              useClass: "greenTxt ",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422GQ1_C2_SET_SPD",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "X5 B2",
            }}
          />
          <ProgressBarMimic />
          <BlackContainer
            data={{
              label: "422GQ1_B2_POS",
              useClass: "greenTxt ",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_422GQ1_B2_SET_SPD",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "X4 A2",
            }}
          />
          <ProgressBarMimic />
          <BlackContainer
            data={{
              label: "422GQ1_A2_POS",
              useClass: "greenTxt ",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422GQ1_A2_SET_SPD",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "X3 C1",
            }}
          />
          <ProgressBarMimic />
          <BlackContainer
            data={{
              label: "422GQ1_C1_POS",
              useClass: "greenTxt ",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422GQ1_C1_SET_SPD",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "X2 B1",
            }}
          />
          <ProgressBarMimic />
          <BlackContainer
            data={{
              label: "422GQ1_B1_POS",
              useClass: "greenTxt ",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422GQ1_B1_SET_SPD",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "X1 A1",
            }}
          />
          <ProgressBarMimic />
          <BlackContainer
            data={{
              label: "422GQ1_A1_POS",
              useClass: "greenTxt ",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_422GQ1_A1_SET_SPD",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <MotorCircleDigitalTag
            className={`text-dark bg-secondary p-1 digital-tag ${useColorStatus(
              "51_FEED_OPC"
            )} `}
            label="51_FEED_OPC"
            text="ON"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RED RIVER RIGHT",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("430PC1")}`,
          firstCircleText: "M",
          firstCircleLabel: "430PC1",
        }}
        text={{ useClass: "text-dark", label: "430PC1" }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("430PC2")}`,
          firstCircleText: "M",
          firstCircleLabel: "430PC2",
        }}
        text={{ useClass: "text-dark", label: "430PC2" }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <div className="pipeVr position-absolute pipe-6 d-flex align-items-center justify-content-center">
        <BlackContainer
          data={{
            label: "PT4006",
            useClass: "greenTxt",
            unit: "WG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9">
        <div className="text-center p-1">
          <BlackContainer
            data={{
              label: "_422HS1_T1_VALUE",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_422HS1_L1_VALUE",
              useClass: "greenTxt mt-1",
              unit: "Lt",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="yellowline-Vr position-absolute pipe-10"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-11"></div>
      <div className="yellowline-Vr position-absolute pipe-12"></div>
      <div className="yellowline-Vr position-absolute pipe-13"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-14"></div>
      <div className="yellowline-Hr position-absolute pipe-15"></div>
      <div className="yellowline-Hr position-absolute pipe-16"></div>
      <div className="yellowline-Hr position-absolute pipe-17"></div>
      <div className="yellowline-Hr position-absolute pipe-18"></div>
      <div className="yellowline-Vr position-absolute pipe-19"></div>
      <div className="yellowline-Hr position-absolute pipe-20"></div>
      <div className="yellowline-Vr position-absolute pipe-21"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-22"></div>
      <div className="yellowline-Vr position-absolute pipe-23"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-24"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-25"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-26"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-27"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-28"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-29"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-30"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-31"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-32"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-33"></div>
      <div className="yellowline-Hr position-absolute pipe-34"></div>
      <div className="yellowline-Hr position-absolute pipe-35"></div>
      <div className="yellowline-Hr position-absolute pipe-36"></div>
      <div className="yellowline-Hr position-absolute pipe-37"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-38"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-39"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-40"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-42"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-43"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-44"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-45"></div>

      <div className="position-absolute single-text-1 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "422FN8_BLD",
              useClass: "greenTxt",
              unit: "Nm3/m2/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_422FN8_AFR",
              useClass: "greenTxt mt-1",
              unit: "Am3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422FN8_NFR",
              useClass: "greenTxt mt-1",
              unit: "Nm3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FT4010",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AS4010",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "422FN7_BLD",
              useClass: "greenTxt",
              unit: "Nm3/m2/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_422FN7_AFR",
              useClass: "greenTxt mt-1",
              unit: "Am3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422FN7_NFR",
              useClass: "greenTxt mt-1",
              unit: "Nm3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FT4009",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AS4009",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "422FN6_BLD",
              useClass: "greenTxt",
              unit: "Nm3/m2/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_422FN6_AFR",
              useClass: "greenTxt mt-1",
              unit: "Am3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422FN6_NFR",
              useClass: "greenTxt mt-1",
              unit: "Nm3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FT4008",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AS4008",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "422FN5_BLD",
              useClass: "greenTxt",
              unit: "Nm3/m2/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_422FN5_AFR",
              useClass: "greenTxt mt-1",
              unit: "Am3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422FN5_NFR",
              useClass: "greenTxt mt-1",
              unit: "Nm3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FT4007",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AS4007",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "422FN4_BLD",
              useClass: "greenTxt",
              unit: "Nm3/m2/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_422FN4_AFR",
              useClass: "greenTxt mt-1",
              unit: "Am3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422FN4_NFR",
              useClass: "greenTxt mt-1",
              unit: "Nm3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FT4006",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AS4006",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "422FN3_BLD",
              useClass: "greenTxt",
              unit: "Nm3/m2/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_422FN3_AFR",
              useClass: "greenTxt mt-1",
              unit: "Am3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422FN3_NFR",
              useClass: "greenTxt mt-1",
              unit: "Nm3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FT4005",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AS4005",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "422FN2_BLD",
              useClass: "greenTxt",
              unit: "Nm3/m2/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_422FN2_AFR",
              useClass: "greenTxt mt-1",
              unit: "Am3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422FN2_NFR",
              useClass: "greenTxt mt-1",
              unit: "Nm3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FT4004",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AS4004",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "422FN1_BLD",
              useClass: "greenTxt",
              unit: "Nm3/m2/ss",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422FN1_AFR",
              useClass: "greenTxt mt-1",
              unit: "Am3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422FN1_NFR",
              useClass: "greenTxt mt-1",
              unit: "Nm3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FT4003",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AS4003",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      {/* <div className="position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Nm3/M2/s",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Am3/h",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Nm3/h",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "mBar",
          }}
        />
      </div> */}
      <div className="position-absolute single-text-3">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Roller Crusher",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Cooling Fans",
            }}
          />
        </div>
        <div className="d-flex justify-content-around">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("422FN9")} mt-1`}
            label="422FN9"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("422FN10")} mt-1`}
            label="422FN10"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Crusher Grease Unit",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("422LQ1M2")} mt-1`}
            label="422LQ1M2"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-5">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "TT4017",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Dedusting",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6">
        <div className="text-center d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LANE START",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("422GQ1")} ml-2`}
            label="422GQ1"
          />
        </div>
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "422FN8"
              )} mt-1`}
              label="422FN8"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "422FN8",
            }}
          />
        </div>
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "422FN7"
              )} mt-1`}
              label="422FN7"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "422FN7",
            }}
          />
        </div>
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "422FN6"
              )} mt-1`}
              label="422FN6"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "422FN6",
            }}
          />
        </div>
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "422FN5"
              )} mt-1`}
              label="422FN5"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "422FN5",
            }}
          />
        </div>
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "422FN4"
              )} mt-1`}
              label="422FN4"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "422FN4",
            }}
          />
        </div>
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "422FN3"
              )} mt-1`}
              label="422FN3"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "422FN3",
            }}
          />
        </div>
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "422FN2"
              )} mt-1`}
              label="422FN2"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "422FN2",
            }}
          />
        </div>
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "422FN1"
              )} mt-1`}
              label="422FN1"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "422FN1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Kiln Feed",
            }}
          />
          <BlackContainer
            data={{
              label: "KILN_TOTAL_FEED",
              useClass: "greenTxt ml-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Sec Air",
            }}
          />
          <BlackContainer
            data={{
              label: "TT4004",
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
              label: "TAD",
            }}
          />
          <BlackContainer
            data={{
              label: "TT4003",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="img-96 position-absolute single-text-9"></div>
      <div className="position-absolute single-text-10 border p-1">
        <div className=" text-center p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Crusher Grease Unit",
            }}
          />
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <div className="pipeVr position-relative "></div>
          <div className="ml-2">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "Pump On Time",
                }}
              />
              <BlackContainer
                data={{
                  label: "422LQ1_PMP_ON_TIME",
                  useClass: "greenTxt ml-2",
                  unit: "M",
                  unitColor: "unitColor",
                }}
              />
            </div>

            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "Pump Off Time",
                }}
              />
              <BlackContainer
                data={{
                  label: "422LQ1_PMP_OFF_TIME",
                  useClass: "greenTxt ml-2",
                  unit: "M",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-11 border p-1">
        <div className=" text-center p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Counters",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "422LQ1_PMP_ON_COUNT",
              useClass: "greenTxt",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422LQ1_PMP_OFF_COUNT",
              useClass: "greenTxt mt-2",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Total Fan Air Flow",
            }}
          />
          <BlackContainer
            data={{
              label: "422GQ1_Air_Flow",
              useClass: "greenTxt ml-2",
              unit: "Am3/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Specific Air Flow",
            }}
          />
          <BlackContainer
            data={{
              label: "422GQ1_SPEC_AIRFLOW",
              useClass: "greenTxt ml-2",
              unit: "Nm3/kgCl",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Cooler Ambient Temp",
            }}
          />
          <BlackContainer
            data={{
              label: "RT4097",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "_422HS1_M5_EN"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
            "_422HS1_M5_EN"
          )}`}
          label="_422HS1_M5_EN"
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "_422HS1_M4_EN"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
            "_422HS1_M4_EN"
          )}`}
          label="_422HS1_M4_EN"
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "_422HS1_M3_EN"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
            "_422HS1_M3_EN"
          )}`}
          label="_422HS1_M3_EN"
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "_422HS1_M2_EN"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
            "_422HS1_M2_EN"
          )}`}
          label="_422HS1_M2_EN"
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "_422HS1_M1_EN"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
            "_422HS1_M1_EN"
          )}`}
          label="_422HS1_M1_EN"
        />
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("_422HS1_M5_RUN")} `}
          label="_422HS1_M5_RUN"
          text=""
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("_422HS1_M4_RUN")} `}
          label="_422HS1_M4_RUN"
          text=""
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("_422HS1_M3_RUN")} `}
          label="_422HS1_M3_RUN"
          text=""
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("_422HS1_M2_RUN")} `}
          label="_422HS1_M2_RUN"
          text=""
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("_422HS1_M1_RUN")} `}
          label="_422HS1_M1_RUN"
          text=""
        />
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("_422PM1_M1_RUN")} `}
          label="_422PM1_M1_RUN"
          text=""
        />
      </div>
      <BlackContainer
        data={{
          label: "_422HS1_P4_VALUE",
          useClass: "greenTxt position-absolute single-text-16",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "_422HS1_P3_VALUE",
          useClass: "greenTxt position-absolute single-text-17",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "_422HS1_P2_VALUE",
          useClass: "greenTxt position-absolute single-text-18",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "_422HS1_P1_VALUE",
          useClass: "greenTxt position-absolute single-text-19",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "13TT101_IND",
          useClass: "greenTxt position-absolute single-text-20",
          unit: "DEG C",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-21",
          label: "To WHRS",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-22",
          label: "COOLING WATER",
        }}
      />
      <BlackContainer
        data={{
          label: "422GQ1_ACT_SPD",
          useClass: "greenTxt position-absolute single-text-23",
          unit: "SPM",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-24 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "V7",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "A3",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "V6",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "C2",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "V5",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "B2",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "V4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "A2",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "V3",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "C1",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "V2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "B1",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "V1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "A1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-25">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "V10",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "A4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "V9",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "C3",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "V8",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "B3",
            }}
          />
        </div>
      </div>
    </div>
  );
};

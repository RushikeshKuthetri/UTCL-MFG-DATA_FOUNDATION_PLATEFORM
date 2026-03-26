import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
  TransparentBoxWithGate,
  BlueContainerWithDynamicBorder,
} from "../../../../index";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useBorderTagsColorStatus,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
  useFanImgTagsColorStatus,
} from "../../../../../utils";

export const Packer1and2GujaratLine1 = () => {
  return (
    <div className="Packer1and2GujaratLine1 w-100 h-100 position-relative">
      <MotorCircleDigitalTag
        className={`position-absolute pipe-1 square digital-tag ${useColorStatus(
          "S1U01"
        )}`}
        label="S1U01"
      />
      <MotorCircleDigitalTag
        className={`position-absolute pipe-2 square digital-tag ${useColorStatus(
          "S1U02"
        )}`}
        label="S1U02"
      />
      <MotorCircleDigitalTag
        className={`position-absolute pipe-3 square digital-tag ${useColorStatus(
          "S1U01"
        )}`}
        label="S1U01"
      />
      <MotorCircleDigitalTag
        className={`position-absolute pipe-4 square digital-tag ${useColorStatus(
          "S1U02"
        )}`}
        label="S1U02"
      />

      <div className="position-absolute text-center pipe-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HPF11",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("P1HPF11")} mt-1`}
          label="P1HPF11"
        />
      </div>
      <div className="position-absolute text-center pipe-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HPF21",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("P1HPF21")} mt-1`}
          label="P1HPF21"
        />
      </div>
      <div className="position-absolute text-center pipe-7">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("P1U01M1")}`}
          label="P1U01M1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1",
            label: "P1UO1M1",
          }}
        />
      </div>
      <div className="position-absolute text-center pipe-8">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("P1U02M1")}`}
          label="P1U02M1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1",
            label: "P1UO2M1",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "U10" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U10_RUN")}`,
          secondCircleLabel: "P1U10_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U12" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U12")}`,
          secondCircleLabel: "P1U12",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U50" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U50")}`,
          secondCircleLabel: "P1U50",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U53" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U53")}`,
          secondCircleLabel: "P1U53",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-13"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U52" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U52")}`,
          secondCircleLabel: "P1U52",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-14"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "U20" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U20_RUN")}`,
          secondCircleLabel: "P1U20_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-15"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U22" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U22")}`,
          secondCircleLabel: "P1U22",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-16"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U50" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U50")}`,
          secondCircleLabel: "P1U50",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-17"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U53" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U53")}`,
          secondCircleLabel: "P1U53",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-18"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "P1U52" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("P1U52")}`,
          secondCircleLabel: "P1U52",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-19"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-20"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleText: "",
        }}
      />
      <div className="pipe  position-absolute pipe-21"></div>
      <div className="pipe  position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-25"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-26"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-27"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-28"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-29"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-30"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-31"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-32"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-33"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-34"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-35"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-36"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-37"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-38"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-39"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-40"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-42"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-43"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-44"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-45"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-46"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-47"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-48"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-49"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-50"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-51"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-52"></div>
      <div className="yellowline-Vr position-absolute pipe-53"></div>
      <div className="yellowline-Hr position-absolute pipe-54"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-55"></div>
      <div className="yellowline-Hr position-absolute pipe-56"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-57"></div>
      <div className="yellowline-Hr position-absolute pipe-58"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-59"></div>
      <div className="yellowline-Hr position-absolute pipe-60"></div>
      <div className="yellowline-Hr position-absolute pipe-61"></div>
      <div className="yellowline-Hr position-absolute pipe-62"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-63"></div>
      <div className="yellowline-Hr position-absolute pipe-64"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-65"></div>
      <div className="yellowline-Vr position-absolute pipe-66"></div>
      <div className="yellowline-Hr position-absolute pipe-67"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-68"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-69"></div>
      <div className="yellowline-Vr position-absolute pipe-70"></div>
      <div className="yellowline-Hr position-absolute pipe-71"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-72"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-73"></div>
      <div className="yellowline-Vr position-absolute pipe-74"></div>
      <div className="yellowline-Hr position-absolute pipe-75"></div>
      <div className="yellowline-Vr position-absolute pipe-76"></div>
      <div className="yellowline-Hr position-absolute pipe-77"></div>
      <div className="yellowline-Hr position-absolute pipe-78"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-79"></div>
      <div className="yellowline-Hr position-absolute pipe-80"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-81"></div>
      <div className="yellowline-Hr position-absolute pipe-82"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-83"></div>
      <div className="yellowline-Hr position-absolute pipe-84"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-85"></div>
      <div className="yellowline-Hr position-absolute pipe-86"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-87"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-88"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-89"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-90"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-91"></div>

      <div className="position-absolute single-text-1 d-flex">
        <div className="containerImage text-center ">
          <BlackContainer
            data={{
              label: "ECS4245SVR01::Z1L04_L2",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EGC",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO 1",
            }}
          />
        </div>
        <div className="containerImage text-center ">
          <BlackContainer
            data={{
              label: "ECS4245SVR01::Z1L05_L2",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "OPC",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO 2",
            }}
          />
        </div>
        <div className="containerImage text-center ">
          <BlackContainer
            data={{
              label: "ECS4245SVR01::Z1L03_L2",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SUPER PPC",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO 3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div className="containerImage text-center ">
          <BlackContainer
            data={{
              label: "EMS_R1M03_KW",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EGC",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO 1",
            }}
          />
        </div>
        <div className="containerImage text-center ">
          <BlackContainer
            data={{
              label: "EMS_R1M03_KW",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "OPC",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO 2",
            }}
          />
        </div>
        <div className="containerImage text-center ">
          <BlackContainer
            data={{
              label: "EMS_R1M03_KW",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SUPER PPC",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO 3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div className="squareplustri"></div>
        <div className="squareplustri"></div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div className="squareplustri"></div>
        <div className="squareplustri"></div>
      </div>
      <div className="position-absolute single-text-5 d-flex flex-column">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "REJECT",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "REJECT",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex flex-column">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "VS11",
            }}
          />
          <BlackContainer
            data={{
              label: "P1L11_W1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "VS21",
            }}
          />
          <BlackContainer
            data={{
              label: "P1L21_W1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7 d-flex flex-column">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("P1N11_RUN")}`}
            label="P1N11_RUN"
            text="M"
          />
        </div>
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("P1N21_RUN")}`}
            label="P1N21_RUN"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <div className="squareplustri"></div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "SC09_CMP_PR",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SC09_CMP_CURRENT",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SC09_CMP_SPEED",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "PACKER-1 RECY EMERGENCY STOP",
            }}
          />
        </div>
        <div className="d-flex">
          <div>
            <div className="d-flex align-items-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "SC07",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("SC07")} ml-2`}
                label="SC07"
                text="M"
              />
            </div>
            <div className="d-flex align-items-center mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "SC09",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("SC09_CMP")} ml-2`}
                label="SC09_CMP"
                text="M"
              />
            </div>
          </div>
          <div className="ml-4">
            <div className="d-flex align-items-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "SC08",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("SC08")} ml-2`}
                label="SC08"
                text="M"
              />
            </div>
            <div className="d-flex align-items-center mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "CMP09",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("CMP09")} ml-2`}
                label="CMP09"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-10">
        <div className="d-flex">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "FLYASH SIDE",
              }}
            />
            <BlackContainer
              data={{
                label: "PPSLO_AER_PI",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "PPICSLO_AER_PI",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center ml-4">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MCC/PP SIDE",
              }}
            />
            <BlackContainer
              data={{
                label: "PPIC_DED_PI",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "PROJECT SIDE",
              }}
            />
            <BlackContainer
              data={{
                label: "CMPP_DED_PI",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "PACKER-2 RECY EMERGENCY STOP",
          }}
        />
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMPP_5_PR",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "COMP 5 PR",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CMPP_6_PR",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "COMP 6 PR",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-7 & 8",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-3 & 4",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-1 & 2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-7 & 8",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-3 & 4",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOWARDS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TL-1 & 2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <BlackContainer
          data={{
            label: "P1P15_DP",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "PP PLC ROOM TEMP.",
          }}
        />
        <div className="mt-1">
          <BlackContainer
            data={{
              label: "PP_PLC_TEMP",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "P1FN11_DP",
              useClass: "greenTxt mt-4",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "P1N21_PT",
          useClass: "greenTxt position-absolute single-text-15",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <div className="text-center position-absolute single-text-16">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("P1J01")}`}
          label="P1J01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "J01",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-17 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1P15")}`}
            label="P1P15"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "P15",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("NA")}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FN11",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-18 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1P25")}`}
            label="P1P25"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "P25",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1FN21")}`}
            label="P1FN21"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FN21",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-19 d-flex flex-column">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1RB11")}`}
            label="P1RB11"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RB11",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1RB21")}`}
            label="P1RB21"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RB21",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-20 d-flex flex-column">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1HPF11")}`}
            label="P1HPF11"
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1HPF21")}`}
            label="P1HPF21"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-21 d-flex flex-column">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1U11")}`}
            label="P1U11"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "U11",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1U21")}`}
            label="P1U21"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "U21",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-22 d-flex flex-column">
        <div className="text-center d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1BN11")}`}
            label="P1BN11"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BN11",
            }}
          />
        </div>
        <div className="text-center d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("P1BN21")}`}
            label="P1BN21"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BN21",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-23 d-flex flex-column">
        <div className="text-center d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "P1J16",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("P1J16")} ml-2`}
            label="P1J16"
            text="M"
          />
        </div>
        <div className="text-center d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "P1J26",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("P1J26")} ml-2`}
            label="P1J26"
            text="M"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-24 d-flex flex-column">
        <div className="">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("P1VS11")} ml-2`}
            label="P1VS11"
            text="M"
          />
        </div>
        <div className="">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("P1VS21")} ml-2`}
            label="P1VS21"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "P24",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "P1P24"
            )}`}
            label="P1P24"
          />
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RA21",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "P1RA21"
            )}`}
            label="P1RA21"
          />
        </div>
      </div>
      <div className="position-absolute single-text-26 d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ARM S/W",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ARM S/W",
          }}
        />
      </div>
    </div>
  );
};

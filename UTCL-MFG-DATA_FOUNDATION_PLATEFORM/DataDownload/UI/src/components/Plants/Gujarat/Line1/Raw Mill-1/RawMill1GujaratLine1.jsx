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

export const RawMill1GujaratLine1 = () => {
  return (
    <div className="RawMill1GujaratLine1 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "JO1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("R1J01")}`,
          secondCircleLabel: "R1J01",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: `dot  ${useColorStatus("NA")}`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "JO2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("R1J02")}`,
          secondCircleLabel: "R1J02",
          secondCircleText: "M",
        }}
      />
      {/* <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("R1J03_Z1")}`,
          firstCircleLabel: "R1J03_Z1",
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "JO3" }}
        secondCircle={{
          secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens(
            "NA"
          )}`,
          secondCircleLabel: "NA",
          secondCircleText: "M",
        }}
      /> */}
      {/* <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("NA")}`,
          firstCircleLabel: "NA",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "JO4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("R1J04_Z1")}`,
          secondCircleLabel: "R1J04_Z1",
          secondCircleText: "G",
        }}
      /> */}
          <MotorCircleDigitalTag
        className={`position-absolute pipe-3 square digital-tag ${useColorStatus(
          "R1J03"
        )}`}
        label="R1J03"
      />
            <MotorCircleDigitalTag
        className={`square digital-tag position-absolute pipe-4 ${useColorStatus(
          "R1J04"
        )}`}
        label="R1J04"
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus(
            "NA"
          )}`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("R1J05")}`,
          secondCircleLabel: "R1J05",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
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
        parentDivClass="hpipecircle position-absolute pipe-7"
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
        parentDivClass="hpipecircle position-absolute pipe-8"
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
        parentDivClass="hpipecircle position-absolute pipe-9"
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
        parentDivClass="hpipecircle position-absolute pipe-10"
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
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleText: "",
        }}
      />
      <div className="position-absolute text-center pipe-12">
        <div className={`square digital-tag ${useColorStatus("R1B03")}`} />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "BO3",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`position-absolute pipe-13 square digital-tag ${useColorStatus(
          "R1B02M1"
        )}`}
        label="R1B02M1"
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-14"
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
        parentDivClass="hpipecircle position-absolute pipe-14a"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleText: "",
        }}
      />
      <div className="yellowline-Vr downArrow position-absolute pipe-15"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-21"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-25"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-26"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-27"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-28"></div>
      <div className="yellowline-Vr position-absolute pipe-29"></div>
      <div className="yellowline-Hr position-absolute pipe-30"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-31"></div>
      <div className="yellowline-Vr  upArrow position-absolute pipe-32"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-33"></div>
      <div className="yellowline-Vr position-absolute pipe-34"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-35"></div>
      <div className="yellowline-Hr leftarrow rightarrow position-absolute pipe-36"></div>
      <div className="yellowline-Vr position-absolute pipe-37"></div>
      <div className="yellowline-Hr position-absolute pipe-38"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-39"></div>
      <div className="yellowline-Hr leftarrow rightarrow position-absolute pipe-40"></div>
      <div className="yellowline-Hr position-absolute pipe-41"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-42"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-43"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-44"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-45"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-46"></div>
      <div className="yellowline-Hr position-absolute pipe-47"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-48"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-49"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-50"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-51"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-52"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-53"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-54"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-55"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-56"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-57"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-58"></div>
      <div className="yellowline-Hr position-absolute pipe-59"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-60"></div>
      <div className="yellowline-Hr position-absolute pipe-61"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-62"></div>
      <div className="yellowline-Hr position-absolute pipe-63"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-64"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-65"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-66"></div>
      <div className="yellowline-Hr position-absolute pipe-67"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-68"></div>
      <div className="yellowline-Hr position-absolute pipe-69"></div>
      <div className="yellowline-Vr position-absolute pipe-70"></div>
      <div className="yellowline-Hr position-absolute pipe-71"></div>
      <div className="yellowline-Vr position-absolute pipe-72"></div>
      <div className="yellowline-Vr position-absolute pipe-73"></div>
      <div className="yellowline-Hr position-absolute pipe-74"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-75"></div>

      <div className="bigContainer position-absolute single-text-1 d-flex flex-column justify-content-around align-content-center">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R1M24")}`}
            label="R1M24"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "M24",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "R1M01_L4",
              useClass: "greenTxt ",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M01_L2",
              useClass: "greenTxt mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M01_L1",
              useClass: "greenTxt mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "RAW MIX",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LO4",
          }}
        />
        <BlackContainer
          data={{
            label: "R1L04_W1",
            useClass: "greenTxt mt-2",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "LO5",
          }}
        />
        <BlackContainer
          data={{
            label: "R1L05_W1",
            useClass: "greenTxt mt-2",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P38",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-5"></div>
      <div className="squareplustri text-center position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "WATER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TANK",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P61",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P31",
          }}
        />
      </div>
      <div className="pipe  position-absolute single-text-9"></div>
      <div className="pipe  position-absolute single-text-10"></div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="squareplustri text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S11",
            }}
          />
        </div>
        <div className="squareplustri text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S13",
            }}
          />
        </div>
        <div className="squareplustri text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S15",
            }}
          />
        </div>
        <div className="squareplustri text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S17",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div className="d-flex align-items-center">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SHIFT",
              }}
            />
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "F1J05",
                useClass: "greenTxt",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "F1J05_DE_MG1",
                useClass: "greenTxt mt-1",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RAW MILL PLC ROOM TEMP.",
            }}
          />
          <BlackContainer
            data={{
              label: "F1J05_TUP_MG2_IND",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RAC PLC ROOM",
            }}
          />
          <BlackContainer
            data={{
              label: "F1J05_DE_MG2_IND",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "GRID AND PUMP",
              }}
            />
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "R1P07_SETPOINT",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "R1G01_F1_FB",
                useClass: "greenTxt mt-1",
                unit: "lit/h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex flex-column">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SKEW",
            }}
          />
          <BlackContainer
            data={{
              label: "REC_SKEW_POT_FB",
              useClass: "greenTxt ml-2",
              unit: "mm",
              unitColor: "unitColor",
             
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AD1",
            }}
          />
          <BlackContainer
            data={{
              label: "R1A01_F1",
              useClass: "greenTxt ml-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AD2",
            }}
          />
          <BlackContainer
            data={{
              label: "R1A02_F1",
              useClass: "greenTxt ml-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AD3",
            }}
          />
          <BlackContainer
            data={{
              label: "R1A03_F1",
              useClass: "greenTxt ml-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AD4",
            }}
          />
          <BlackContainer
            data={{
              label: "R1A04_F1",
              useClass: "greenTxt ml-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AD5",
            }}
          />
          <BlackContainer
            data={{
              label: "R1A05_F1",
              useClass: "greenTxt ml-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AD6",
            }}
          />
          <BlackContainer
            data={{
              label: "R1A06_F1",
              useClass: "greenTxt ml-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SA01",
            }}
          />
          <BlackContainer
            data={{
              label: "SWA01_F1",
              useClass: "greenTxt ml-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex flex-column">
        <div className="border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RAWMIX BIN",
            }}
          />
          <BlackContainer
            data={{
              label: "F1J05_MG1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "F1J05_I1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "F1J05_W1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "MAX",
            }}
          />
          <BlackContainer
            data={{
              label: "PLC_F1J07_S1",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "MIN",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L01_W1",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "R1J01",
            }}
          />
          <BlackContainer
            data={{
              label: "R1J01_INV_I1",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "A2J04",
            }}
          />
          <BlackContainer
            data={{
              label: "A2J04_INV_I1",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "A2J03",
            }}
          />
          <BlackContainer
            data={{
              label: "A2J03_INV_I1",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BOGIE SPEED:",
            }}
          />
          <BlackContainer
            data={{
              label: "DATA2_RECL1_RM1_01",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CHAIN CURRENT:",
            }}
          />
          <BlackContainer
            data={{
              label: "REC_CHAIN_I1",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15 text-center d-flex flex-column">
        <div className="border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "SURGE BIN PID",
            }}
          />
          <BlackContainer
            data={{
              label: "REC_SURGE_SP_SPA",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1L08_W1",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "REC_SURGE_SP_SPM",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="justify-content-around text-center d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MAX",
              }}
            />
            <BlackContainer
              data={{
                label: "SURGE_PID_MAX",
                useClass: "greenTxt mt-1",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MIN",
              }}
            />
            <BlackContainer
              data={{
                label: "SURGE_PID_MIN",
                useClass: "greenTxt mt-1",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SEP. ROTOR RPM",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M24_ROTOR_S1",
              useClass: "greenTxt ml-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SEP. BRG TEMP.",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M24_T1",
              useClass: "greenTxt ml-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex flex-column">
        <BlackContainer
          data={{
            label: "R1M01_T2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1M01_P2",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1M24_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "R1M24_SP_SPM",
              useClass: "greenTxt ",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M24_S1",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "R1M14_P9",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <div>
          <div className="border p-1">
            <BlackContainer
              data={{
                label: "R1K02_SP_PID_SPM",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "R1K02_S1",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "R1K02_I1",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className=" text-center">
          <div className="border p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "WATER FLOW",
              }}
            />
            <BlackContainer
              data={{
                label: "R1K01_F1",
                useClass: "greenTxt mt-1",
                unit: "m3/h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <BlackContainer
          data={{
            label: "R1J02_S1",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1J02_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 d-flex align-items-center">
        <div className="">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MAX",
              }}
            />
            <BlackContainer
              data={{
                label: "R1J02_SP1",
                useClass: "greenTxt ml-2",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MIN",
              }}
            />
            <BlackContainer
              data={{
                label: "R1J02_SP2",
                useClass: "greenTxt ml-2",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "R1J02_SP_PID_SPM",
              useClass: "greenTxt ",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1J02_S1",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "R1J02_SP_PID_SPA",
              useClass: "greenTxt ",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M01_P1",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-20 d-flex flex-column">
        <BlackContainer
          data={{
            label: "R1M01_P1_UNFILTER",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1M01_P1",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "R1M01_X2",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "R1M01_X1",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "R1M01_X1A",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "R1M03_J1_UNFILTRD",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1M03_J1",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1M03_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21 d-flex flex-column">
        <div className="border p-1 text-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "GEAR UNIT",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "R1M05_BRG_TEMP",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex justify-content-around mt-1 gap">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "R1M05M10"
              )}`}
              label="R1M05M10"
            />
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "R1M05M11"
              )}`}
              label="R1M05M11"
            />
            <BlackContainer
              data={{
                label: "GU_R1M05T9",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <BlackContainer
            data={{
              label: "HU_OIL_TNK_TMP",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1 text-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "HYD. UNIT",
              }}
            />
          </div>

          <div className="d-flex justify-content-around gap align-items-center">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("R1M07M2")}`}
              label="R1M07M2"
            />
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "R1M07M1"
              )} `}
              label="R1M07M1"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("R1M07E1")}`}
              label="R1M07E1"
            />
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("R1M07_SP_SPM")}`}
                label="R1M07_SP_SPM"
                text="A"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "HU_HYD_PR"
                )} mt-1`}
                label="HU_HYD_PR"
                text="A"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <BlackContainer
            data={{
              label: "LU_OIL_TNK_TMP",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1 text-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "ROLLER LUB.",
              }}
            />
          </div>

          <div className="d-flex justify-content-around gap align-items-center">
            <div>
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus("R1M09E1")}`}
                label="R1M09E1"
              />
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus(
                  "R1M09E2"
                )} mt-1`}
                label="R1M09E2"
              />
            </div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("R1M09M1")}`}
              label="R1M09M1"
            />
            <div className="flex-column d-flex">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "R1M09M2"
                )}`}
                label="R1M09M2"
              />
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "R1M09M5"
                )} mt-1`}
                label="R1M09M5"
              />
            </div>
            <div className="flex-column d-flex">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "R1M09M3"
                )}`}
                label="R1M09M3"
              />
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "R1M09M6"
                )} mt-1`}
                label="R1M09M6"
              />
            </div>
            <div className="flex-column d-flex">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "R1M09M4"
                )}`}
                label="R1M09M4"
              />
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "R1M09M7"
                )} mt-1`}
                label="R1M09M7"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-22 border p-1 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "EMS POWER",
          }}
        />
        <BlackContainer
          data={{
            label: "EMS_R1M03_KW",
            useClass: "greenTxt ml-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 d-flex  ">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R1J02_Z1")} `}
            label="R1J02_Z1"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R1J02_Z2")} ml-2`}
            label="R1J02_Z2"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R1J02_Z3")} ml-2`}
            label="R1J02_Z3"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R1J02_Z4")} ml-2`}
            label="R1J02_Z4"
            text="S"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R1J02_SAL1")} `}
            label="R1J02_SAL1"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R1J02_SAL2")} ml-2`}
            label="R1J02_SAL2"
            text="S"
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1J01_BSS")} `}
          label="R1J01_BSS"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1J01_BELT_TEAR")} `}
          label="R1J01_BELT_TEAR"
          text="B"
        />
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1J04_BSS")} `}
          label="R1J04_BSS"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1J04_BSS")} `}
          label="R1J04_BSS"
          text="B"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "JO4",
          }}
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R1J04_SAL1")} `}
            label="R1J04_SAL1"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R1J04_SAL2")} ml-2`}
            label="R1J04_SAL2"
            text="S"
          />
        </div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1J04_Z1")}`}
          label="R1J04_Z1"
          text="G"
        />
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1J03_Z1")} `}
          label="R1J03_Z1"
          text="G"
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R1J03_SAL1")} `}
            label="R1J03_SAL1"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R1J03_SAL2")} ml-3`}
            label="R1J03_SAL2"
            text="S"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "J03",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1J03_BSS")} `}
          label="R1J03_BSS"
          text="B"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1J03_BSS")} `}
          label="R1J03_BSS"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-27 d-flex align-items-end">
        <div className="d-flex">
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("R1B01M1")} `}
              label="R1B01M1"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "M1",
              }}
            />
          </div>
          <div className="text-center ml-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("R1B01M2")} `}
              label="R1B01M2"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "M2",
              }}
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "R1J03_I1",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <BlackContainer
          data={{
            label: "R1B03_I1",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "R1B03_SP_SPM",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1B03_S1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29">
        <BlackContainer
          data={{
            label: "R1M01_T3",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1M01_P3",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1M01_T4",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "R1S23_PID_SPM",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1S23_Z1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HOT AIR",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "R1T08_PID_SPM",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1T08_Z1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-32 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "M2",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "R1T03M2"
            )} mt-1`}
            label="R1T03M2"
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "M2",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "R1T02M2"
            )} mt-1`}
            label="R1T02M2"
          />
        </div>
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <div>
          <div className="text-center d-flex">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("R1U07")} `}
              label="R1U07"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "U07",
              }}
            />
          </div>
          <div className="text-center d-flex mt-1">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("R1U03S")} `}
              label="R1U03S"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "U035",
              }}
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "R1S30_METAL_DET_CTU",
            useClass: "greenTxt ",
            unit: "N",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34">
        <div className="text-center d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("R1U12")} `}
            label="R1U12"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "U12",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("R1U12S")} `}
            label="R1U12S"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "U12S",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "O/L TEMP. PID",
            }}
          />
          <div className="border p-1 mt-1">
            <BlackContainer
              data={{
                label: "R1M01_T2_PID_SPA",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            {/* <BlackContainer
              data={{
                label: "KM_L53LD1_ZT",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            /> */}
          </div>
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "J1P70",
            }}
          />
          <div className="border p-1 mt-1">
            <BlackContainer
              data={{
                label: "J1P70_SP",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "J1P70_Z1",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex flex-column text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "FAN KW PID",
          }}
        />
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "R1S19_SP_SPA",
              useClass: "greenTxt ",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1S19_J1",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "R1P35_DP",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1P35_OP_SP",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1P35_INV_S1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1P35_INV_I1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <BlackContainer
          data={{
            label: "RM1 TPH DAY",
            useClass: "greenTxt ",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Res212",
              }}
            />
            <BlackContainer
              data={{
                label: "RAWMILL1_ANALYSIS_RES212",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LSF",
              }}
            />
            <BlackContainer
              data={{
                label: "RAWMILL1_ANALYSIS_LSF",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <div className="border p-1">
            <BlackContainer
              data={{
                label: "R1S19_SP_SPM",
                useClass: "greenTxt ",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L53LD1",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "R1S19_T1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1S19_P1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-38 d-flex">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "R1S19_J1_UNFILTER",
              useClass: "greenTxt ",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_CLR_DCVOLT",
              useClass: "greenTxt ml-2",
              unit: "V",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "J1P01_CH_HIGH",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P01_DPI",
              useClass: "greenTxt mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-39  d-flex flex-column ">
        <BlackContainer
          data={{
            label: "J1J02_P1",
            useClass: "greenTxt ",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <div className="border p-1  text-center">
          <BlackContainer
            data={{
              label: "R1M01_T2_PID_SPM",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1S21_Z1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "U06",
            }}
          />
          <BlackContainer
            data={{
              label: "H1U06M1_J1",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "H1U06M4_J1",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "U10",
            }}
          />
          <BlackContainer
            data={{
              label: "H1U10M1_J1",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "H1U10M4_J1",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "RM1_STP_FREQ_DAY",
              useClass: "greenTxt ",
              unit: "N",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_SINGLE_START_COUNTER",
              useClass: "greenTxt mt-1",
              unit: "N",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PH-1 TO PH-2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "TRANS",
            }}
          />
          <BlackContainer
            data={{
              label: "R1FK01_I1",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FRESH AIR",
          }}
        />
      </div>
      <div className="position-absolute single-text-40 d-flex">
        <div className="text-center border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CF SILO LVL",
            }}
          />
          <BlackContainer
            data={{
              label: "H1H01_SILOTONNAGE",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "HT INCOMER MV",
            }}
          />
          <BlackContainer
            data={{
              label: "RM_HT_INCMR_MW",
              useClass: "greenTxt mt-1",
              unit: "MW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-41">
        <div className="text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EMS POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "R1S19_P1_SP_SPM",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-42">
        <div className="text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FAM O/P SHAFT RPM",
            }}
          />
          <BlackContainer
            data={{
              label: "R1S19_S1A",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <BlackContainer
          data={{
            label: "R1M01_P4",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <div className="text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S/B BL WR",
            }}
          />
          <BlackContainer
            data={{
              label: "BLOWER_TRIP_TIMER",
              useClass: "greenTxt mt-1",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-44">
        <BlackContainer
          data={{
            label: "R1M24_X2",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1M24_X9",
            useClass: "greenTxt mt-1",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-45 d-flex">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S12",
            }}
          />
          <div
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "W13P24"
            )}`}
          ></div>
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S14",
            }}
          />
          <div
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "R1S14"
            )}`}
          ></div>
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S16",
            }}
          />
          <div
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "R1S16"
            )}`}
          ></div>
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S18",
            }}
          />
          <div
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "R1S18"
            )}`}
          ></div>
        </div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-46">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "U11",
          }}
        />
        <div
          className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
            "R1U11"
          )}`}
        ></div>
      </div>
      <div className="text-center position-absolute single-text-47">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("R1P40")}`}
          label="R1P40"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P40",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-48">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("R1P65")}`}
          label="R1P65"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "P65",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-49">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("RTR1P35")}`}
          label="RTR1P35"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P35",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-50 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "S23",
          }}
        />
        <div className="ml-2">
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("R1S23")}
            isClickable={true}
            tagLabel="R1S23"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-51 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TD8",
          }}
        />
        <div className="ml-2">
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("R1T08")}
            isClickable={true}
            tagLabel="R1T08"
          />
        </div>
      </div>
      <div className="position-absolute single-text-52 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "R1U08_P1",
              useClass: "greenTxt",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <div className="text-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "AUTO SAMPLER",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "DRAFT",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "R1J04_I1",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="">
            <BlueContainerWithDynamicBorder
              useClass={useBorderTagsColorStatus("R1U08M1")}
              isClickable={true}
              tagLabel="R1U08M1"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "U08",
            }}
          />
          <BlackContainer
            data={{
              label: "SAMPLE_TAKEN_COUNTER",
              useClass: "greenTxt mt-2",
              unit: "N",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-53">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("R1U10")}`}
          label="R1U10"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "U10",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-54">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1U01M1")}`}
          label="R1U01M1"
          text="M"
        />
      </div>
      <div className="text-center position-absolute single-text-55">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("H1U06")}`}
          label="H1U06"
          text="M"
        />
      </div>
      <div className="text-center position-absolute single-text-56">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("R1J02A")}`}
          label="R1J02A"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "J02A",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-57">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("R1M06")}`}
          label="R1M06"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "M06",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-58 d-flex align-items-center">
        <div className="text-center">
          <div className="rot">
            <BlueContainerWithDynamicBorder
              useClass={useBorderTagsColorStatus("R1S20")}
              isClickable={true}
              tagLabel="R1S20"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "S20",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("R1S19")}`}
            label="R1S19"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "S19",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("R1S22M1")}`}
            label="R1S22M1"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S22",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-59">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("NA")
          }`}
          label="NA"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "U03",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-60 d-flex ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1M03LRS_ON")}`}
          label="R1M03LRS_ON"
          text="A"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1M03LRS_LVL")} ml-2`}
          label="R1M03LRS_LVL"
          text="L"
        />
      </div>
      <div className="position-absolute single-text-61 d-flex align-items-center justify-content-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1M03")}`}
          label="R1M03"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-62">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("J1P64")}
          isClickable={true}
          tagLabel="J1P64"
        />
      </div>
      <div className="position-absolute single-text-63 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "R1S20_PID_SPM",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1S20_Z1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "R1S19_I1",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1S19_X1",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1S19_X2",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "R1S19_P2",
              useClass: "greenTxt ",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "H1U06_ILTIM01",
              useClass: "greenTxt mt-1",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-64 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "S21",
          }}
        />
        <div className="ml-2">
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("R1S21")}
            isClickable={true}
            tagLabel="R1S21"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-65">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1J05_MG")}`}
          label="R1J05_MG"
          text="S"
        />
      </div>
      <div className="position-absolute single-text-66 ">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("R1B02M2")} `}
            label="R1B02M2"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "M2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-67">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "R1J01_TAKEUP_GUARD"
            )} `}
            label="R1J01_TAKEUP_GUARD"
            text="G"
          />
        </div>
      </div>
      <div className="position-absolute single-text-68">
        <BlackContainer
          data={{
            label: "R1U01M1_J1",
            useClass: "greenTxt ",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-69">
        <BlackContainer
          data={{
            label: "R1M06_P1",
            useClass: "greenTxt ",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-70 d-flex">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K02",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("R1K02")} mt-2 ml-2`}
          label="R1K02"
        />
       
      </div>
      <div className="position-absolute single-text-71 text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("R1U05")}`}
          label="R1U05"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "U05",
          }}
        />
      </div>
    </div>
  );
};

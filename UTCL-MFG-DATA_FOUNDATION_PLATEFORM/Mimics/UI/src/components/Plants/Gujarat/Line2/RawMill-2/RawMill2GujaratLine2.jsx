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

export const RawMill2GujaratLine2 = () => {
  return (
    <div className="RawMill2GujaratLine2 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "JO1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("R2J01")}`,
          secondCircleLabel: "R2J01",
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
          secondCircleClass: `dot digital-tag ${useColorStatus("R2J02")}`,
          secondCircleLabel: "R2J02",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("NA")}`,
          firstCircleLabel: "NA",
          firstCircleText: "G",
        }}
        text={{ useClass: "text-dark", label: "JO3" }}
        secondCircle={{
          secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens(
            "R2J03"
          )}`,
          secondCircleLabel: "R2J03",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("R2J04")}`,
          firstCircleLabel: "R2J04",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "JO4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("NA")}`,
          secondCircleLabel: "NA",
          secondCircleText: "G",
        }}
      />
      {/* <MotorCircleDigitalTag
        className={`position-absolute pipe-3 square digital-tag ${useColorStatus(
          "R1J03"
        )}`}
        label="R1J03"
      /> */}
      {/* <MotorCircleDigitalTag
        className={`square digital-tag position-absolute pipe-4 ${useColorStatus(
          "R1J04"
        )}`}
        label="R1J04"
      /> */}

      <div className="position-absolute pipe-5">
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R1U05")}`}
            label="R1U05"
            text="L"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "R2J05 REJECT RBC",
            }}
          />
        </div>
        <PipeWithCircles
          parentDivClass="hpipecircle position-absolute mt-1"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("NA")}`,
            firstCircleLabel: "NA",
            firstCircleText: "G",
          }}
          text={{ useClass: "text-dark", label: "" }}
          secondCircle={{
            secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens(
              "R2J05_SAL1_ALARM"
            )}`,
            secondCircleLabel: "R2J05_SAL1_ALARM",
            secondCircleText: "S",
          }}
        />
      </div>

      {/* <PipeWithCircles
        parentDivClass="hpipecircle position-absolute "
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("NA")}`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("R1J05")}`,
          secondCircleLabel: "R1J05",
          secondCircleText: "M",
        }}
      /> */}
      <MotorCircleDigitalTag
        className={`position-absolute pipe-6 square digital-tag ${useColorStatus(
          "R2U03_U03S"
        )} z-index`}
        label="R2U03_U03S"
      />
      <MotorCircleDigitalTag
        className={`position-absolute pipe-7 square digital-tag ${useColorStatus(
          "R2U05_U03S"
        )} z-index`}
        label="R2U05_U03S"
      />
      <MotorCircleDigitalTag
        className={`position-absolute pipe-8 square digital-tag ${useColorStatus(
          "R2U07_U03S"
        )} z-index`}
        label="R2U07_U03S"
      />
      <MotorCircleDigitalTag
        className={`position-absolute pipe-9 square digital-tag ${useColorStatus(
          "R2U10_U10S"
        )} z-index`}
        label="R2U10_U10S"
      />
      {/* <PipeWithCircles
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
      /> */}
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
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
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
        parentDivClass="hpipecircle position-absolute pipe-13"
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
      <div className="yellowline-Vr position-absolute pipe-32"></div>
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
      <div className="yellowline-Vr position-absolute pipe-68"></div>
      <div className="yellowline-Hr position-absolute pipe-69"></div>
      <div className="yellowline-Vr position-absolute pipe-70"></div>
      <div className="yellowline-Hr position-absolute pipe-71"></div>
      <div className="yellowline-Vr position-absolute pipe-72"></div>
      {/* <div className="yellowline-Vr position-absolute pipe-73"></div> */}
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
            label: "R2L04_W1",
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
            label: "R2L05_W1",
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
      {/* <div className="triangle-with-squares text-center position-absolute single-text-5"></div> */}
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
        <div className="border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "A01",
            }}
          />
          <BlackContainer
            data={{
              label: "WF_RECIPE_B01CN",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2A01_F1",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SA02",
            }}
          />
          <BlackContainer
            data={{
              label: "WF_RECIPE_G01CN",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2K02_I1",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "A02",
            }}
          />
          <BlackContainer
            data={{
              label: "WF_RECIPE_C01CN",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2A02_F1",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "A06",
            }}
          />
          <BlackContainer
            data={{
              label: "WF_RECIPE_A01CN",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2A06_F1",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="d-flex">
            <div className="border p-1 text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "A03",
                }}
              />
              <BlackContainer
                data={{
                  label: "WF_RECIPE_D01CN",
                  useClass: "greenTxt mt-1",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "R2A03_F1",
                  useClass: "greenTxt mt-1",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="border p-1 text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "A04",
                }}
              />
              <BlackContainer
                data={{
                  label: "WF_RECIPE_E01CN",
                  useClass: "greenTxt mt-1",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "R2A04_F1",
                  useClass: "greenTxt mt-1",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="border p-1 text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "A05",
                }}
              />
              <BlackContainer
                data={{
                  label: "WF_RECIPE_F01CN",
                  useClass: "greenTxt mt-1",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "R2A05_F1",
                  useClass: "greenTxt mt-1",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div className="border p-4 d-flex align-items-center justify-content-center ">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "REC PLC TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "REC_PLC_ROOM_TEMP",
                useClass: "greenTxt ml-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      {/* <div className="position-absolute single-text-13 d-flex flex-column">
        <div className="border p-1  text-center">
          <BlackContainer
            data={{
              label: "R2J01_S1_SP",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2J01_S1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "COLLECTING RBC TPH",
            }}
          />
        </div>
        <div className=" ">
          <div className="d-flex justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MAX",
              }}
            />
            <BlackContainer
              data={{
                label: "R2J02_SP1",
                useClass: "greenTxt ml-2",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MIN",
              }}
            />
            <BlackContainer
              data={{
                label: "R2J02_SP2",
                useClass: "greenTxt ml-2",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div> */}
      <div className="position-absolute single-text-13 d-flex flex-column">
        <div className="border p-1  text-center">
          <BlackContainer
            data={{
              label: "R2J01_S1_SP",
              useClass: "greenTxt",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2J01_S1",
              useClass: "greenTxt mt-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "A6J04_W2",
              useClass: "greenTxt ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "COLLECTING RBC TPH",
            }}
          />
        </div>
        <div className=" ">
          <div className="d-flex justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MAX",
              }}
            />
            <BlackContainer
              data={{
                label: "R2J02_SP1",
                useClass: "greenTxt ml-2",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MIN",
              }}
            />
            <BlackContainer
              data={{
                label: "R2J02_SP2",
                useClass: "greenTxt ml-2",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-14 border p-1">
        <div className="d-flex align-items-center">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "GRINDING AID SP",
              }}
            />
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "GRINDING_AID_VFD_SP",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM2_GA_F1",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-15 text-center d-flex flex-column border p-1">
        <div className="d-flex align-items-center">
          <div className="border p-1 text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "A6J03_W1 PID",
              }}
            />
            <BlackContainer
              data={{
                label: "SURGE_BIN_SP_SPA",
                useClass: "greenTxt mt-1",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "R2L08_W1",
                useClass: "greenTxt mt-1",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "RM TOTAL SP",
              }}
            />
          </div>
        </div>
        <div className="justify-content-around text-center d-flex">
          <div>
            <BlackContainer
              data={{
                label: "SURGE_BIN_SP_SPM",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "RM_TOTAL_FEED_SP",
                useClass: "greenTxt",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="justify-content-around text-center d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MIN",
              }}
            />
            <BlackContainer
              data={{
                label: "SURGE_BIN_MIN",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MAX",
              }}
            />
            <BlackContainer
              data={{
                label: "SURGE_BIN_MAX",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex flex-column align-items-center">
        <BlackContainer
          data={{
            label: "R2M01_T2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R2M01_P2",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R2M24_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="border p-1 text-center">
          <BlackContainer
            data={{
              label: "R2M24_SP_SPM",
              useClass: "greenTxt ",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2M24_S1",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "R2M14_P9A",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R2M24_T1",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 d-flex flex-column align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "SURGE BIN",
          }}
        />
        <BlackContainer
          data={{
            label: "R2K02_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
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
                label: "R2M01_F1",
                useClass: "greenTxt mt-1",
                unit: "m3/h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-17a d-flex flex-column ">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CH CUR",
            }}
          />
          <BlackContainer
            data={{
              label: "REC_CHN_I1",
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
              label: "R2J01",
            }}
          />
          <BlackContainer
            data={{
              label: "R2J01_INV_I1",
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
              label: "A6J04",
            }}
          />
          <BlackContainer
            data={{
              label: "A6J04_INV_I1",
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
              label: "A6J03",
            }}
          />
          <BlackContainer
            data={{
              label: "A6J03_DOL_I1",
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
              label: "A6J05",
            }}
          />
          <BlackContainer
            data={{
              label: "A6J05_I1",
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
              label: "A6J06",
            }}
          />
          <BlackContainer
            data={{
              label: "A6J06_I1",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <BlackContainer
          data={{
            label: "R2J02_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 d-flex align-items-center">
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "R2J02_SP_SPM",
              useClass: "greenTxt ",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2J02_S1",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "MILL DP PID",
            }}
          />
          <div className="border p-1 mt-1">
            <BlackContainer
              data={{
                label: "R2J02_SP_SPA",
                useClass: "greenTxt ",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "R2M01_P1",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-20 d-flex flex-column">
        <BlackContainer
          data={{
            label: "R2M01_P1_UNFILTER",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R2M01_P1",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "R2M01_X2",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "R2M01_X1",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "R2M01_X1A",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "R2M03_J1_UNFILTER",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R2M03_J1",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R2M03_I1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21 d-flex flex-column">
        <div className="d-flex justify-content-end">
          <BlackContainer
            data={{
              label: "DATA_GR_RM2_01",
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
                label: "GEAR UNIT",
              }}
            />
          </div>
          <div className="d-flex justify-content-around mt-1 gap">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "R2M05M1"
              )}`}
              label="R2M05M1"
            />
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "R2M05M2"
              )}`}
              label="R2M05M2"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <BlackContainer
            data={{
              label: "DATA_HYD_RM2_01",
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
          <div className="d-flex justify-content-around gap align-items-center mt-1">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("R2M07M1")}`}
              label="R2M07M1"
            />
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "R2M07M2"
              )} `}
              label="R2M07M2"
            />
            <div>
              <BlackContainer
                data={{
                  label: "R2M07HY_SP_SPM",
                  useClass: "greenTxt ",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "R2M07HY_P1",
                  useClass: "greenTxt mt-1",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
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
          <div className="d-flex justify-content-around gap align-items-center mt-1">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("R2M09M1")}`}
              label="R2M09M1"
            />
            <div className="flex-column d-flex">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "R2M09M2"
                )}`}
                label="R2M09M2"
              />
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "R2M09M5"
                )} mt-1`}
                label="R2M09M5"
              />
            </div>
            <div className="flex-column d-flex">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "R2M09M3"
                )}`}
                label="R2M09M3"
              />
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "R2M09M6"
                )} mt-1`}
                label="R2M09M6"
              />
            </div>
            <div className="flex-column d-flex">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "R2M09M4"
                )}`}
                label="R2M09M4"
              />
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "R2M09M7"
                )} mt-1`}
                label="R2M09M7"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="position-absolute single-text-22 border p-1 d-flex">
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
      </div> */}
      <div className="position-absolute single-text-23 d-flex  ">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R2J02_Z1")} `}
            label="R2J02_Z1"
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
            className={`dot digital-tag ${useColorStatus("R2M24")} ml-2`}
            label="R2M24"
            text="S"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("NA")} `}
            label="NA"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("NA")} ml-2`}
            label="NA"
            text="S"
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R2J01_BSS")} `}
          label="R2J01_BSS"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R2J01_BELT_TEAR")} `}
          label="R2J01_BELT_TEAR"
          text="B"
        />
      </div>
      {/* <div className="position-absolute single-text-25 d-flex">
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
      </div> */}
      {/* <div className="position-absolute single-text-26 d-flex">
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
      </div> */}
      <div className="position-absolute single-text-27 d-flex align-items-end">
        <div className="d-flex">
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("R2B01M1")} `}
              label="R2B01M1"
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
              className={`dot digital-tag ${useColorStatus("R2B01M2")} `}
              label="R2B01M2"
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
        <div className="d-flex">
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("R2B02M1")} `}
              label="R2B02M1"
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
              className={`dot digital-tag ${useColorStatus("R2B02M2")} `}
              label="R2B02M2"
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
      </div>
      <div className="position-absolute single-text-28">
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "R2B03_SP_SPM",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2B03_S1",
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
            label: "R2M01_T3",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R2M01_P3",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R2M01_T4",
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
              label: "R2S23_Z1_SPM",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2S23_Z1",
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
              label: "R2T08_Z1_SPM",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2T08_Z1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      {/* <div className="position-absolute single-text-32 d-flex">
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
      </div> */}
      <div className="position-absolute single-text-33 d-flex">
        <div>
          <div className="text-center ">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("R2U07")} `}
              label="R2U07"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "U07",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-34">
        <div className="text-center d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("R2U10S")} `}
            label="R2U10S"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "U10S",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("R2U12")} `}
            label="R2U12"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "U12",
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
                label: "R2M01_T2_SP_SPA",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "R2M01_T2",
                useClass: "greenTxt mt-1",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "J/B P67",
            }}
          />
          <div className="border p-1 mt-1">
            <BlackContainer
              data={{
                label: "R2M01_T2_SP_SPM",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "J2P67_POS",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex flex-column align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "FAN KW PID",
          }}
        />
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "R2S19_SP_SPA",
              useClass: "greenTxt ",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2S19_J1",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "R2P35_DP",
            useClass: "greenTxt",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Res212",
            }}
          />
          <BlackContainer
            data={{
              label: "RM2 Res212",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-38">
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "R2S19_SP_SPM",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2S19_S1",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-39  d-flex flex-column ">
        <div className="border p-1  text-center">
          <BlackContainer
            data={{
              label: "R2S21_Z1_SPM",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2S21_Z1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className=" text-center">
          <BlackContainer
            data={{
              label: "H2U06M1_J1",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "H2U06M2_J1",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-40">
        <div className="text-center border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "HT INCOMER MV",
            }}
          />
          <BlackContainer
            data={{
              label: "RM2_MW",
              useClass: "greenTxt mt-1",
              unit: "MW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      {/* <div className="position-absolute single-text-41">
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
      </div> */}
      {/* <div className="position-absolute single-text-42">
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
      </div> */}
      <div className="position-absolute single-text-43">
        <div className="text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "S/B BL WR",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-44">
        <BlackContainer
          data={{
            label: "R2M24_X1",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R2M24_X2",
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
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "R2S12"
            )}`}
            label="R2S12"
          />
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S14",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "R2S14"
            )}`}
            label="R2S14"
          />
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S16",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "R2S16"
            )}`}
             label="R2S16"
          />
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "S18",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
              "R2S18"
            )}`}
            label="R2S18"
          />
        </div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-46">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "U11",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ml-2 ${useFanImgTagsColorStatus(
            "NA"
          )}`}
          label="NA"
        />
      </div>
      <div className="text-center position-absolute single-text-47">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("R2P40")}`}
          label="R2P40"
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
          className={`line-circle digital-tag ${useColorStatus("R2P65")}`}
          label="R2P65"
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
          className={`line-circle digital-tag ${useColorStatus("R2P35")}`}
          label="R2P35"
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
            useClass={useBorderTagsColorStatus("NA")}
            isClickable={true}
            tagLabel="NA"
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
            useClass={useBorderTagsColorStatus("NA")}
            isClickable={true}
            tagLabel="NA"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "FRESH AIR",
          }}
        />
      </div>
      {/* <div className="position-absolute single-text-52 d-flex">
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
      </div> */}
      <div className="text-center position-absolute single-text-53">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("R2U10")}`}
          label="R2U10"
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
          className={`dot digital-tag ${useColorStatus("R2U01M1")}`}
          label="R2U01M1"
          text="M"
        />
      </div>
      <div className="text-center position-absolute single-text-55">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("H2U06M1")}`}
          label="H2U06M1"
          text="M"
        />
      </div>
      <div className="text-center position-absolute single-text-56">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "M1",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "R2M06M1"
            )} ml-2`}
            label="R2M06M1"
          />
        </div>
        <div className="d-flex align-items-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "M2",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "R2M06M2"
            )} ml-2`}
            label="R2M06M2"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-57">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("NA")}`}
          label="NA"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "M06",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-58 ">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("R2S19")}`}
            label="R2S19"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "S19",
            }}
          />
        </div>
      </div>
      {/* <div className="text-center position-absolute single-text-59">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("NA")}`}
          label="NA"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "U03",
          }}
        />
      </div> */}
      {/* <div className="text-center position-absolute single-text-60 d-flex ">
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
      </div> */}
      <div className="position-absolute single-text-61 text-center">
        <div className="d-flex align-items-center justify-content-center custom">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("R2M03")}`}
            label="R2M03"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "M03",
          }}
        />
      </div>
      <div className="position-absolute single-text-62">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("NA")}
          isClickable={true}
          tagLabel="NA"
        />
      </div>
      <div className="position-absolute single-text-63 d-flex align-items-end">
        <div className="border p-1 text-center">
          <BlackContainer
            data={{
              label: "R2S20M1_Z1_SPM",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2S20M1_Z1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FAN O/P RPM",
            }}
          />
          <BlackContainer
            data={{
              label: "R2S19_S1_NEW",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2S19_J1_UNFILTER",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2S19_J1",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "R2S19_P2",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2S19_I1",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2S19_X1",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2S19_X2",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
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
            useClass={useBorderTagsColorStatus("NA")}
            isClickable={true}
            tagLabel="NA"
          />
        </div>
      </div>
      {/* <div className="text-center position-absolute single-text-65">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("R1J05_MG")}`}
          label="R1J05_MG"
          text="S"
        /> */}
      {/* </div>
      <div className="position-absolute single-text-66 ">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("NA")} `}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "M2",
            }}
          />
        </div>
      </div> */} 
      {/* <div className="position-absolute single-text-67">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "R1J01_TAKEUP_GUARD"
            )} `}
            label="R1J01_TAKEUP_GUARD"
            text="G"
          />
        </div>
      </div> */}
      <div className="position-absolute single-text-68">
        <BlackContainer
          data={{
            label: "R2U01M1_J1",
            useClass: "greenTxt ",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-69 border">
        <div className="border p-1 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GB BOTTOM BRG. TEMP.",
            }}
          />
          <BlackContainer
            data={{
              label: "R2M05_BRG_TEMP",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HS BRG TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "HIGH_SPD_BRG_TEMP",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center mt-1 mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BRG COVER TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "HIGH_SPD_BRG_HSNG_TEMP",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-70 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K02",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus(
            "NA"
          )} mt-2 ml-2`}
          label="NA"
        />
      </div>
      <div className="position-absolute single-text-71 text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("R2U05")}`}
          label="R2U05"
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

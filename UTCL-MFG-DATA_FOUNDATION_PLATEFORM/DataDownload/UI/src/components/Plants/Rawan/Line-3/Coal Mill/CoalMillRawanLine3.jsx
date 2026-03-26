import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../../index";
import {
  useCaretColorStatus,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useImgColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const CoalMillRawanL3 = () => {
  return (
    <div className="CoalMillAndhra CoalMillRawanL3 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        text={{ useClass: "text-dark mx-auto", label: "L23MS1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KM_L23MS1_RUN",
              healthyLabel: "KM_L23MS1_PH",
            }
          )}`,
          secondCircleLabel: "KM_L23MS1_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "L23BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L23BC1_RUN", healthyLabel: "KM_L23BC1_PH" }
          )}`,
          secondCircleLabel: "KM_L23BC1_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "L23BC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L23BC2_RUN", healthyLabel: "KM_L23BC2_PH" }
          )}`,
          secondCircleLabel: "KM_L23BC2_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "L43WF1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KM_L43WF1_MR",
              healthyLabel: "KM_L43WF1_PH",
            }
          )}`,
          secondCircleLabel: "KM_L43WF1_MR",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "L43WF2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KM_L43WF2_MR",
              healthyLabel: "KM_L43WF2_PH",
            }
          )}`,
          secondCircleLabel: "KM_L43WF2_MR",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "L43BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L43BC1_RUN", healthyLabel: "KM_L43BC1_PH" }
          )}`,
          secondCircleLabel: "KM_L43BC1_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L63CV1_RUN", healthyLabel: "KM_L63CV1_PH" }
          )}`,
          firstCircleLabel: "KM_L63CV1_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L63CV1" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "L93SC3" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L93SC3_RUN", healthyLabel: "KM_L93SC3_PH" }
          )}`,
          secondCircleLabel: "KM_L93SC3_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "L93SC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L93SC2_RUN", healthyLabel: "KM_L93SC2_PH" }
          )}`,
          secondCircleLabel: "KM_L93SC2_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "L93SC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L93SC1_RUN", healthyLabel: "KM_L93SC1_PH" }
          )}`,
          secondCircleLabel: "KM_L93SC1_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L93SC4_RUN", healthyLabel: "KM_L93SC4_PH" }
          )}`,
          firstCircleLabel: "KM_L93SC4_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L93SC4" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L93SC5_RUN", healthyLabel: "KM_L93SC5_PH" }
          )}`,
          firstCircleLabel: "KM_L93SC5_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L93SC5" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-13"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L93SC6_RUN", healthyLabel: "KM_L93SC6_PH" }
          )}`,
          firstCircleLabel: "KM_L93SC6_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L93SC6" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-14"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "L92SC7" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L93SC7_RUN", healthyLabel: "KM_L93SC7_PH" }
          )}`,
          secondCircleLabel: "KM_L93SC7_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-15"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L93SC8_RUN", healthyLabel: "KM_L93SC8_PH" }
          )}`,
          firstCircleLabel: "KM_L93SC8_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L93SC8" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-102"
        text={{ useClass: "text-dark mx-auto", label: "L43BC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KM_L43BC2_PH", runLabel: "KM_L43BC2_RUN" }
          )}`,
          secondCircleLabel: "KM_L43BC2_RUN",
          secondCircleText: "M",
        }}
      />
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-21"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
      <div className="yellowline-Hr position-absolute pipe-25"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-26"></div>
      <div className="yellowline-Vr position-absolute pipe-27"></div>
      <div className="yellowline-Hr position-absolute pipe-28"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-29"></div>
      <div className="yellowline-Hr position-absolute pipe-30"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-31"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-32"></div>
      <div className="d-flex align-items-center pl-4 yellowline-Hr position-absolute pipe-35">
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Hr position-absolute pipe-36"></div>
      <div className="d-flex flex-column align-items-center justify-content-around yellowline-Vr position-absolute pipe-37">
        <i className="fa-solid fa-caret-up"></i>
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="yellowline-Vr position-absolute pipe-38"></div>
      <div className=" d-flex align-items-center justify-content-around yellowline-Hr position-absolute pipe-39">
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div className="yellowline-Vr position-absolute pipe-40"></div>
      <div className="yellowline-Vr position-absolute pipe-41"></div>
      <div className="yellowline-Vr position-absolute pipe-42"></div>
      <div className="yellowline-Vr position-absolute pipe-43"></div>
      <div className="yellowline-Vr position-absolute pipe-44"></div>
      <div className="yellowline-Hr position-absolute pipe-45"></div>
      <div className="yellowline-Vr position-absolute pipe-46"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-47"></div>
      <div className="yellowline-Hr position-absolute pipe-48"></div>
      <div className="yellowline-Hr position-absolute pipe-49"></div>
      <div className="d-flex flex-column align-items-center justify-content-around yellowline-Vr position-absolute pipe-50">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="d-flex align-items-center justify-content-center yellowline-Hr position-absolute pipe-51">
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div className="d-flex align-items-center pl-5 yellowline-Hr position-absolute pipe-52">
        <i className="fa-solid fa-caret-right"></i>
        <i className="fa-solid fa-caret-right ml-5"></i>
      </div>
      <div className="d-flex align-items-center justify-content-center yellowline-Hr position-absolute pipe-53">
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Vr downArrow position-absolute pipe-54"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-55"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-56"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-57"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-58"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-59"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-60"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-61"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-62"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-63"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-64"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-65"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-66"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-67"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-68"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-69"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-70"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-71"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-72"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-73"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-74"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-75"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-76"></div>
      <div className="d-flex flex-column align-items-center justify-content-center yellowline-Vr position-absolute pipe-77">
        <i className="fa-solid fa-caret-down"></i>
      </div>
      <div className="yellowline-Hr position-absolute pipe-78"></div>
      <div className="yellowline-Vr position-absolute pipe-79"></div>
      <div className="yellowline-Vr position-absolute pipe-80"></div>
      <div className="d-flex align-items-center justify-content-around yellowline-Hr position-absolute pipe-81">
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="d-flex align-items-center justify-content-around yellowline-Hr position-absolute pipe-82">
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div className="yellowline-Vr downArrow position-absolute pipe-83"></div>
      <div className="yellowline-Vr position-absolute pipe-87"></div>
      <div className="yellowline-Vr position-absolute pipe-88"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-89"></div>
      <div className="yellowline-Hr position-absolute pipe-90"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-91"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-103"></div>
      <div className="yellowline-Hr position-absolute pipe-104"></div>
      <div className="yellowline-Hr position-absolute pipe-105"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-106"></div>
      <div className="yellowline-Vr position-absolute pipe-107"></div>
      <div className="d-flex position-absolute pipe-108">
        <div className="yellowline-Vr upArrow position-relative"></div>
        <div className="yellowline-Vr upArrow position-relative"></div>
        <div className="yellowline-Vr upArrow position-relative"></div>
      </div>

      <div className="containerImage text-center position-absolute single-text-1">
        <div className="text-left">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L43HP1_LS"
            )}`}
            label="KM_L43HP1_LS"
            text="LS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L43HP1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "RAW COAL",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43WF1_WI",
            useClass: "greenTxt ",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-2">
        <div className="text-left">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L43HP2_LS"
            )}`}
            label="KM_L43HP2_LS"
            text="LS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L43HP2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PET COKE",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43WF2_WI",
            useClass: "greenTxt ",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-3 d-flex">
        <div className="containerImage text-center">
          <div className="d-flex justify-content-end">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "KM_453BI1_LS"
              )} `}
              label="KM_453BI1_LS"
              text="LS"
            />
          </div>
          <div className="p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "KILN",
              }}
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "453BI1",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_453BI1_WT",
                useClass: "greenTxt ",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="containerImage text-center">
          <div className="d-flex justify-content-end">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "KM_453BI2_LS"
              )} `}
              label="KM_453BI2_LS"
              text="LS"
            />
          </div>
          <div className="p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "KILN/",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CALCINER",
              }}
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "453BI2",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_453BI2_WT",
                useClass: "greenTxt ",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="containerImage text-center">
          <div className="d-flex justify-content-end">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "KM_483BI1_LS"
              )} `}
              label="KM_483BI1_LS"
              text="LS"
            />
          </div>
          <div className="p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "CALCINER",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "483BI1",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_483BI1_WT",
                useClass: "greenTxt ",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>

      <div className="middle-sqr-container position-absolute single-text-4"></div>
      <div className="middle-sqr-container position-absolute single-text-5"></div>
      <div className="middle-sqr-container position-absolute single-text-6 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L43TK1",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43WI1_LT1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <div className="middle-sqr-container"></div>
        <div className="middle-sqr-container"></div>
        <div className="middle-sqr-container"></div>
        <div className="middle-sqr-container"></div>
      </div>
      <div className="bigContainer position-absolute single-text-8 text-center"></div>
      <div className=" position-absolute single-text-9 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-5",
            label: "CLASSIFER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L43SR1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "COAL MILL",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43KM1_DP",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43_HT1_AVGPO1_FB",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "HP1",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43BF3_HP_TE1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "HP2",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43BF3_HP_TE2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "HP3",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43BF3_HP_TE4",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "HP4",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43BF3_HP_TE5",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "HP5",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43BF3_HP_TE3",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "HP6",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43BF3_HP_TE6",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11">
        <div className="roller-drum d-flex justify-content-center align-items-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L43MD1_RUN", healthyLabel: "KM_L43MD1_PH" }
            )}`}
            label="KM_L43MD1_RUN"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L43MD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-12 bg-secondary"></div>
      <div className="position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "KM_L23BF1_DPT",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L23BF1_PT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "BYPASS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L23BF1",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex flex-column align-items-center justify-content-between pt-3">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "KM_L23BF1_RUN"
              )}`}
              label="KM_L23BF1_RUN"
            />
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L23RA_1"
              )}`}
              label="KM_L23RA_1_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L23FN1_RUN", healthyLabel: "KM_L23FN1_PH" }
              )}`}
              label="KM_L23FN1_RUN"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "KM_L43BF2_DPT",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43BF2_PT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "BYPASS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L43BF2",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex flex-column align-items-center justify-content-between pt-2">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "KM_L43BF2_RUN"
              )}`}
              label="KM_L43BF2_RUN"
            />

            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L43RA2"
              )}`}
              label="KM_L43RA2_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L43FN2_RUN", healthyLabel: "KM_L43FN2_PH" }
              )}`}
              label="KM_L43FN2_RUN"
            />
          </div>
        </div>
      </div>

      <div className="hpipecircle position-absolute single-text-15">
        <div className="d-flex justify-content-around text-center mt-1">
          <div>
            <BlackContainer
              data={{
                label: "KM_L43BF3_TT1",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43BF3_PT2",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "KM_L43AM1_CO",
                useClass: "greenTxt ",
                unit: "ppm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark border p-1 mt-1 bg-light",
                label: "BH RUN",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark border p-1 mt-1 bg-light",
                label: "L43BF3",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "KM_L43AM1_O2",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "KM_L43BF3_TT2",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43BF3_PT1",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="triangle-with-squares position-absolute single-text-16 d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex justify-content-start">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L23BI1_LS"
            )}`}
            label="KM_L23BI1_LS"
            text="LS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L23BI1",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RAW COAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CAP-4T",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L23BI1_WT",
            useClass: "greenTxt ",
            unit: "T",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="triangle-with-squares position-absolute single-text-17 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "L63BI1",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L63BI1_LS")}`}
          label="KM_L63BI1_LS"
        />
      </div>
      <div className="position-absolute single-text-18">
        <MotorCircleDigitalTag
          className={`grn-gry-img  digital-tag ${useImgColorStatus(
            "KM_L23DG1_SOV"
          )}`}
          label="KM_L23DG1_SOV"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L23DG1",
          }}
        />
      </div>

      <div className="position-absolute single-text-19 d-flex">
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L93RA1"
              )}`}
              label="KM_L93RA1_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA1",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L93RA2"
              )}`}
              label="KM_L93RA2_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA2",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L93RA3"
              )}`}
              label="KM_L93RA3_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA3",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L93RA4"
              )}`}
              label="KM_L93RA4_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA4",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L93RA5"
              )}`}
              label="KM_L93RA5_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA5",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L93RA6"
              )}`}
              label="KM_L93RA6_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA6",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L93RA7"
              )}`}
              label="KM_L93RA7_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA7",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L93RA8"
              )}`}
              label="KM_L93RA8_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA8",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L93RA9"
              )}`}
              label="KM_L93RA9_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RA9",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L93RAA"
              )}`}
              label="KM_L93RAA_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RAA",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L93RAB"
              )}`}
              label="KM_L93RAB_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RAB",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L93RAC"
              )}`}
              label="KM_L93RAC_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L93RAC",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-20 d-flex">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "KM_L43SD3_EOLS",
                  closeLabel: "KM_L43SD3_ECLS",
                }
              )}`}
              label="KM_L43SD3_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L43SD3",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43LD2_ZT",
              useClass: "greenTxt mt-2 ml-2",
              unit: "m³/hr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "KM_L43LD1_EOLS",
                  closeLabel: "KM_L43LD1_ECLS",
                  healthyLabel: "KM_L43LD1_PH",
                }
              )}`}
              label="KM_L43LD1_EOLS_RUN"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L43LD1",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-21 d-flex">
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "KM_L93RAD"
            )}`}
            label="KM_L93RAD_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L93RAD",
            }}
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "KM_L93RAE"
            )}`}
            label="KM_L93RAE_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L93RAE",
            }}
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "KM_L93RAF"
            )}`}
            label="KM_L93RAF_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L93RAF",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <div className="d-flex ">
          <div className="dot-square-line-Hr d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KM_L93SG2_1")}`}
              label="KM_L93SG2_1"
            />
            <div className="yellowline-Hr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L93SG2",
            }}
          />
        </div>
        <div className="d-flex ">
          <div className="dot-square-line-Hr d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KM_L93SG3_1")}`}
              label="KM_L93SG3_1"
            />
            <div className="yellowline-Hr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L93SG3",
            }}
          />
        </div>
        <div className="d-flex ">
          <div className="dot-square-line-Hr d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KM_L93SG4_1")}`}
              label="KM_L93SG4_1"
            />
            <div className="yellowline-Hr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L93SG4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "KM_L53LD1_EOLS",
                  closeLabel: "KM_L53LD1_ECLS",
                  healthyLabel: "KM_L53LD1_PH",
                }
              )}`}
              label="KM_L53LD1_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark p-1",
              label: "L53LD1",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "KM_L53SD1_EOLS",
                  closeLabel: "KM_L53SD1_ECLS",
                  healthyLabel: "KM_L53SD1_PH",
                }
              )}`}
              label="KM_L53SD1_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark p-1",
              label: "L53SD1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "KM_L43SD1_EOLS", closeLabel: "KM_L43SD1_ECLS" }
            )}`}
            label="KM_L43SD1_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "L43SD1",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-26",
          label: "CO2 SYSTEM",
        }}
      />
      <div className="position-absolute single-text-27 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "KM_L43LD2_EOLS",
                closeLabel: "KM_L43LD2_ECLS",
                healthyLabel: "KM_L43LD2_PH",
              }
            )}`}
            label="KM_L43LD2_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "L43LD2",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "KM_L43SD2_EOLS", closeLabel: "KM_L43SD2_ECLS" }
            )}`}
            label="KM_L43SD2_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "L43SD2",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L43BF3_PT3",
          useClass: "greenTxt position-absolute single-text-29",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L43LD1_ZT",
          useClass: "greenTxt position-absolute single-text-33",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L43LD2_ZT",
          useClass: "greenTxt position-absolute single-text-34",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-35 d-flex">
        <BlackContainer
          data={{
            label: "KM_L93SC3_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L93SC2_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L93SC1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <BlackContainer
          data={{
            label: "KM_L93SC4_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L93SC5_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <BlackContainer
          data={{
            label: "KM_453AM3_CO",
            useClass: "greenTxt",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_453AM4_CO",
            useClass: "greenTxt ml-1",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_483AM1_CO",
            useClass: "greenTxt ml-1",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L93SC6_II",
          useClass: "greenTxt position-absolute single-text-38",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L93SC8_II",
          useClass: "greenTxt position-absolute single-text-39",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L93SC7_II",
          useClass: "greenTxt position-absolute single-text-40",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-41 d-flex align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L93SM1_RUN", healthyLabel: "KM_L93SM1_PH" }
          )}`}
          label="KM_L93SM1_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L93SM1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-44">
        <BlackContainer
          data={{
            label: "KM_L53LD1_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43KM1_TT4",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L43WP2_STE",
          useClass: "greenTxt position-absolute single-text-46",
          unit: "℃",
          unitColor: "unitColor",
        }}
      />

      <div className="position-absolute single-text-48 d-flex flex-column ">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L43FN3_RUN", healthyLabel: "KM_L43FN3_PH" }
            )}`}
            label="KM_L43FN3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "L43FN3",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L43FN4_RUN", healthyLabel: "KM_L43FN4_PH" }
            )}`}
            label="KM_L43FN4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-01",
              label: "L43FN4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-49 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "KM_L43WI1_FT",
              useClass: "greenTxt ",
              unit: "m³/hr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L43KM1_PT1",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43KM1_TT1",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-50 ">
        <BlackContainer
          data={{
            label: "KM_L43FN3_4_PT1",
            useClass: "greenTxt ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43FN3_4_PT2",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43FN3_4_PT3",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-51">
        <BlackContainer
          data={{
            label: "KM_L43MD1_JI",
            useClass: "greenTxt ",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43MD1_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L43BC1_II",
          useClass: "position-absolute greenTxt single-text-52",
          unit: "A",
          unitColor: "unitColor",
        }}
      />

      <div className="position-absolute single-text-54 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "KM_L43WF1_SI",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43WF1_FR",
              useClass: "greenTxt mt-1",
              unit: "toh",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43WF1_SP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L43WF2_SI",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43WF2_FR",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43WF2_SP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-56">
        <BlackContainer
          data={{
            label: "KM_L43KM1_TT2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43KM1_PT3",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43MD2_KW",
            useClass: "greenTxt mt-3",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43SR1_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43SR1_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L23BC2_II",
          useClass: "greenTxt position-absolute single-text-57",
          unit: "A",
          unitColor: "unitColor",
        }}
      />

      <div className="position-absolute single-text-59 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L43EX1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L43EX2",
          }}
        />
      </div>

      <div className="position-absolute single-text-64 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "For Calibration/",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Rejects",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-65 ml-3",
          label: "To Rejects",
        }}
      />
      <div className="d-flex position-absolute single-text-67">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark m-1",
            label: "L63SG1",
          }}
        />
        <div className="dot-square-line-Hr d-flex align-items-center">
          <div className={`square grey-color`}></div>
          <div className="yellowline-Hr position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "KM_L63SG1_OLS", closeLabel: "KM_L63SG1_CLS" }
            )}`}
            label="KM_L63SG1_OLS"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-68">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark m-1",
            label: "L63SG2",
          }}
        />
        <div className="dot-square-line-Hr d-flex align-items-center">
          <div className={`square grey-color`}></div>
          <div className="yellowline-Hr position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "KM_L63SG2_OLS", closeLabel: "KM_L63SG2_CLS" }
            )}`}
            label="KM_L63SG2_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-76 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L43AD1_RUN", healthyLabel: "KM_L43AD1_PH" }
          )}`}
          label="KM_L43AD1_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L41AD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-77 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "GB Lubrication",
            }}
          />
        </div>
        <div className="mt-1">
          <div className="d-flex align-items-center justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "L43PU1",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ml-1 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L43PU1_RUN", healthyLabel: "KM_L43PU1_PH" }
              )}`}
              label="KM_L43PU1_RUN"
            />
            <div className="ml-2">
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "FT1",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KM_L43LQ1_FT1",
                    useClass: "greenTxt ml-1",
                    unit: "min",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "FT2",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KM_L43LQ1_FT2",
                    useClass: "greenTxt ml-1",
                    unit: "min",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "L43PU2",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ml-1 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L43PU2_RUN", healthyLabel: "KM_L43PU2_PH" }
              )}`}
              label="KM_L43PU2_RUN"
            />
            <div className="ml-2">
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "PT",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KM_L43GB1_PT",
                    useClass: "greenTxt ml-1",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TT1",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "KM_L43LQ1_TT1",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-79 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Hyd Tens Sys",
            }}
          />
        </div>
        <div className="d-flex">
          <div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-2",
                  label: "L43PU3",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "KM_L43PU3_RUN", healthyLabel: "KM_L43PU3_PH" }
                )}`}
                label="KM_L43PU3_RUN"
                text="M"
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "Oil Level",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_L43HT1_LT",
                  useClass: "greenTxt ml-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "Setpoint",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_L43HT1_ZT01",
                  useClass: "greenTxt ml-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex align-items-center mt-2 justify-content-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "Tension Pr.",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_L43HT1_PT1",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_L43HT1_ZT02",
                  useClass: "greenTxt ml-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex align-items-center mt-2 justify-content-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "Lifting Pr.",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_L43HT1_PT2",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_L43HT1_ZT03",
                  useClass: "greenTxt ml-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-82",
          label: "Hot Gas",
        }}
      />
      <div className="position-absolute single-text-83">
        <div className="chimni-red d-flex align-items-end">
          <MotorCircleDigitalTag
            className={`dot digital-tag p-1 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "KM_L43SK1_M01_PH",
                runLabel: "KM_L43SK1_M01_RUN",
              }
            )}`}
            label="KM_L43SK1_M01_RUN"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L43K1",
          }}
        />
      </div>

      <div className="position-absolute single-text-87">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L23MT1_MD"
            )}`}
            label="KM_L23MT1_MD"
            text="MD"
          />
          <MotorCircleDigitalTag
            className={`ml-2 text-dark digital-tag ${useColorStatus(
              "KM_L23MT1_PH"
            )}`}
            label="KM_L23MT1_PH"
            text="PH"
          />
          <MotorCircleDigitalTag
            className={`ml-2 text-dark digital-tag ${useColorStatus(
              "KM_L23MT1_FB"
            )}`}
            label="KM_L23MT1_FB"
            text="FB"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L23MT1",
          }}
        />
      </div>
      <div className="position-absolute single-text-89 d-flex ">
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L23DG1_CLS"
            )}`}
            label="KM_L23DG1_CLS"
            text="CLS"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L23DG1_OLS"
            )}`}
            label="KM_L23DG1_OLS"
            text="OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-92 d-flex">
        <div className="d-flex ">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L43EX1_OLS1"
            )}`}
            label="KM_L43EX1_OLS1"
            text="L1"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L43EX1_OLS2"
            )} ml-2`}
            label="KM_L43EX1_OLS2"
            text="L2"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L43EX2_OLS1"
            )}`}
            label="KM_L43EX2_OLS1"
            text="L1"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L43EX2_OLS2"
            )} ml-2`}
            label="KM_L43EX2_OLS2"
            text="L2"
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "KM_L43RF1_II",
          useClass: "greenTxt position-absolute single-text-93 mt-3",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-94">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("KM_L43WI1_PS1")}`}
          label="KM_L43WI1_PS1"
          text="PS1"
        />
        <MotorCircleDigitalTag
          className={`text-dark mt-1 digital-tag ${useColorStatus(
            "KM_L43KM1_ZS"
          )}`}
          label="KM_L43KM1_ZS"
          text="ZS"
        />
        <div className="d-flex mt-1">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L43MD1_DLS02"
            )}`}
            label="KM_L43MD1_DLS02"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ml-2 ${useColorStatus(
              "KM_L43MD1_DLS03"
            )}`}
            label="KM_L43MD1_DLS03"
          />
        </div>
      </div>

      <div className="text-center ml-3 position-absolute single-text-98">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "KM_L43WI1_SV1"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
            "KM_L43WI1_SV1"
          )}`}
          label="KM_L43WI1_SV1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SV1",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-99 d-flex">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "KM_L43WI1_SV2"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
            "KM_L43WI1_SV2"
          )}`}
          label="KM_L43WI1_SV2"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SV2",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`text-dark position-absolute single-text-100  digital-tag ${useColorStatus(
          "KM_L43WI1_PS2"
        )}`}
        label="KM_L43WI1_PS2"
        text="PS2"
      />
      <div className="text-center position-absolute single-text-101 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L43SD2_ECLS")}`}
          label="KM_L43SD2_ECLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L43SD2_EOLS")}`}
          label="KM_L43SD2_EOLS"
          text="O"
        />
      </div>
      <div className="text-center position-absolute single-text-103 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L43BF3_HP1_LS1"
          )} ml-2`}
          label="KM_L43BF3_HP1_LS1"
          text="LS1"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L43BF3_HP2_LS1"
          )} ml-2`}
          label="KM_L43BF3_HP2_LS1"
          text="LS2"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L43BF3_HP4_LS1"
          )} ml-2`}
          label="KM_L43BF3_HP4_LS1"
          text="LS3"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L43BF3_HP5_LS1"
          )} ml-2`}
          label="KM_L43BF3_HP5_LS1"
          text="LS4"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L43BF3_HP3_LS1"
          )} ml-2`}
          label="KM_L43BF3_HP3_LS1"
          text="LS5"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L43BF3_HP6_LS1"
          )} ml-2`}
          label="KM_L43BF3_HP6_LS1"
          text="LS6"
        />
      </div>
      <div className="position-absolute single-text-104 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93GA1_CLS")}`}
          label="KM_L93GA1_CLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93GA1_OLS")}`}
          label="KM_L93GA1_OLS"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93GA2_CLS")}`}
          label="KM_L93GA2_CLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93GA2_OLS")}`}
          label="KM_L93GA2_OLS"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93GA4_CLS")}`}
          label="KM_L93GA4_CLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93GA4_OLS")}`}
          label="KM_L93GA4_OLS"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93GA5_CLS")}`}
          label="KM_L93GA5_CLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93GA5_OLS")}`}
          label="KM_L93GA5_OLS"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93GA3_CLS")}`}
          label="KM_L93GA3_CLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93GA3_OLS")}`}
          label="KM_L93GA3_OLS"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93GA6_CLS")}`}
          label="KM_L93GA6_CLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93GA6_OLS")}`}
          label="KM_L93GA6_OLS"
          text="O"
        />
      </div>
      <div className="d-flex position-absolute single-text-106">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93SG1_OLS")}`}
          label="KM_L93SG1_OLS"
          text="C"
        />
        <div>
          <div className="dot-square-line-Hr d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KM_L93SG1_SOV")}`}
              label="KM_L93SG1_SOV"
            />
            <div className="yellowline-Hr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L93SG1",
            }}
          />
        </div>
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93SG1_CLS")}`}
          label="KM_L93SG1_CLS"
          text="O"
        />
      </div>
      <div className="text-center position-absolute single-text-107 ">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "KM_L43TK1_SV3"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
            "KM_L43TK1_SV3"
          )}`}
          label="KM_L43TK1_SV3"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SV3",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-108 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L93SG4_ECLS")}`}
            label="KM_L93SG4_ECLS"
            text="C"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L93SG3_ECLS")}`}
            label="KM_L93SG3_ECLS"
            text="C"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L93SG2_ECLS")}`}
            label="KM_L93SG2_ECLS"
            text="C"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-109 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L93GA9_CLS")}`}
            label="KM_L93GA9_CLS"
            text="C"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L93GA9_OLS"
            )} ml-2`}
            label="KM_L93GA9_OLS"
            text="O"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L93GA8_CLS")}`}
            label="KM_L93GA8_CLS"
            text="C"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L93GA8_OLS"
            )} ml-2`}
            label="KM_L93GA8_OLS"
            text="O"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L93GA7_CLS")}`}
            label="KM_L93GA7_CLS"
            text="C"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L93GA7_OLS"
            )} ml-2`}
            label="KM_L93GA7_OLS"
            text="O"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-110 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L43SD1_ECLS")}`}
          label="KM_L43SD1_ECLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L43SD1_EOLS")}`}
          label="KM_L43SD1_EOLS"
          text="O"
        />
      </div>
      <div className="text-center position-absolute single-text-115 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L63CV1_RUN", healthyLabel: "KM_L63CV1_PH" }
          )}`}
          label="KM_L63CV1_RUN"
          text="M"
        />
      </div>

      <div className="text-center position-absolute single-text-117 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L53SD1_ECLS")}`}
          label="KM_L53SD1_ECLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L53SD1_EOLS")}`}
          label="KM_L53SD1_EOLS"
          text="O"
        />
      </div>
      <div className="d-flex position-absolute single-text-118">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L23BC2_NDE_MG")}`}
          label="KM_L23BC2_NDE_MG"
        />
        <div className="">
          <div class="yellowline-Hr w leftarrow position-relative"></div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-1 ${useColorStatus(
              "KM_L23BC2_ZSS"
            )}`}
            label="KM_L23BC2_ZSS"
            text="ZSS"
          />
        </div>

        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L23BC2_DE_MG")}`}
          label="KM_L23BC2_DE_MG"
        />
      </div>
      <div class="yellowline-Hr w rightarrow position-absolute single-text-119"></div>
      <div class="yellowline-Hr w rightarrow  position-absolute single-text-120"></div>
      <div class="yellowline-Hr w leftarrow position-absolute single-text-121 position-absolute"></div>
      <div class="yellowline-Hr w leftarrow position-absolute position-absolute single-text-122"></div>
      <div className="position-absolute single-text-123 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93SG4_EOLS")}`}
          label="KM_L93SG4_EOLS"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93SG3_EOLS")}`}
          label="KM_L93SG3_EOLS"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93SG2_EOLS")}`}
          label="KM_L93SG2_EOLS"
          text="O"
        />
      </div>
      <div className="position-absolute single-text-124">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("KM_L43AD1_ZS")}`}
          label="KM_L43AD1_ZS"
          text="ZS"
        />
      </div>

      <div className="position-absolute single-text-131">
        <BlackContainer
          data={{
            label: "KM_L43BF1_DPT",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43BF1_PT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "BYPASS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L43BF1",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex flex-column align-items-center justify-content-between pt-2">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "KM_L43BF1_RUN"
              )}`}
              label="KM_L43BF1_RUN"
            />

            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L43RA1"
              )}`}
              label="KM_L43RA1_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end"></div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-132">
        <div className="middle-sqr-container"></div>
        <div className="middle-sqr-container"></div>
        <div className="middle-sqr-container"></div>
        <div className="middle-sqr-container"></div>
      </div>
      <div className="d-flex position-absolute single-text-133">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L23SG1_ECLS")}`}
          label="KM_L23SG1_ECLS"
          text="C"
        />
        <div className="dot-square-line-Hr d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "KM_L23SG1_EOLS",
                openLabel: "KM_L23SG1_ECLS",
              }
            )}`}
            label="KM_L23SG1_EOLS"
          />
          <div className="yellowline-Hr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L23SG1_EOLS")}`}
          label="KM_L23SG1_EOLS"
          text="O"
        />
      </div>
      <div className="border p-1 position-absolute single-text-134">
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "TOTAL FEED TPH",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_TOTAL_FEED_RATE",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "KM_L63BI1_WI",
          useClass: "greenTxt position-absolute single-text-135",
          unit: "Ton",
          unitColor: "unitColor",
        }}
      />

      <div className="d-flex position-absolute single-text-136">
        <div className="dot-square-line-Hr d-flex align-items-center">
          <div className={`square grey-color`}></div>
          <div className="yellowline-Hr position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "KM_L63SG3_EOLS", closeLabel: "KM_L63SG3_ECLS" }
            )}`}
            label="KM_L63SG3_EOLS"
          />
        </div>
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L63SG3_ECLS")}`}
          label="KM_L63SG3_ECLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L63SG3_EOLS")}`}
          label="KM_L63SG3_EOLS"
          text="O"
        />
      </div>
      <div className="grid-container-2 position-absolute single-text-137">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L63SG1_CLS")}`}
          label="KM_L63SG1_CLS"
          text="C"
        />

        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L63SG1_OLS")}`}
          label="KM_L63SG1_OLS"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L63SG2_CLS")}`}
          label="KM_L63SG2_CLS"
          text="C"
        />

        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L63SG2_OLS")}`}
          label="KM_L63SG2_OLS"
          text="O"
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L43MD1_XT1",
          useClass: "greenTxt position-absolute single-text-138",
          unit: "mm/sec",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-139">
        <BlackContainer
          data={{
            label: "KM_L53FN1_II",
            useClass: "greenTxt mr-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L53FN1_SI",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-140">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "RD1",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_453BI1_EX_LS1"
            )}`}
            label="KM_453BI1_EX_LS1"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "RD2",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_453BI1_EX_LS2"
            )}`}
            label="KM_453BI1_EX_LS2"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "RD1",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_453BI2_EX_LS1"
            )}`}
            label="KM_453BI2_EX_LS1"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "RD2",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_453BI2_EX_LS2"
            )}`}
            label="KM_453BI2_EX_LS2"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "RD1",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_483BI1_EX_LS1"
            )}`}
            label="KM_483BI1_EX_LS1"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "RD2",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_483BI1_EX_LS2"
            )}`}
            label="KM_483BI1_EX_LS2"
          />
        </div>
      </div>
      <div className="position-absolute single-text-141">
        <BlackContainer
          data={{
            label: "KM_L43KM1_TT5",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43KM1_PT6",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L53FN1_KW",
            useClass: "greenTxt mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-142">
        <BlackContainer
          data={{
            label: "KM_L43BF3_DPT_CALC",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43BF3_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-143">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "Diff of TE2-TE1",
            }}
          />
          <BlackContainer
            data={{
              label: "DIFF_TE2_TE1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "Diff of TE1 to 40-TE3",
            }}
          />
          <BlackContainer
            data={{
              label: "DIFF_TE3_40_TE1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-144">
        <BlackContainer
          data={{
            label: "KM_L43SK1_PT",
            useClass: "greenTxt ",
            unit: "mmH2O",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43SK1_SK",
            useClass: "greenTxt mt-1",
            unit: "Mg/m³",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43FN4_JO1",
            useClass: "greenTxt mt-1",
            unit: "Kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43FN4",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-145">
        <BlackContainer
          data={{
            label: "KM_L43KM1_PT2",
            useClass: "greenTxt mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43WP1_STE",
            useClass: "greenTxt ml-4",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-146 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "L43RF1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L43RF1_RUN", healthyLabel: "KM_L43RF1_PH" }
          )}`}
          label="KM_L43RF1_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ml-1 ${useColorStatus(
            "KM_L43RF1_ZSS2"
          )}`}
          label="KM_L43RF1_ZSS2"
        />
      </div>
      <div className="d-flex position-absolute single-text-147">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L23RA1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L43RA2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L43RA1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-148">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L23FN1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L43FN2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L43FN1",
          }}
        />
      </div>
      <div className="position-absolute single-text-149">
        <BlackContainer
          data={{
            label: "KM_L43FN5_KW",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43FN5_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43FN5_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-150">
        <BlackContainer
          data={{
            label: "KM_L43KM1_TT3",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43KM1_PT5",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-151">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L43SD3_ECLS")}`}
          label="KM_L43SD3_ECLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L43SD3_EOLS")}`}
          label="KM_L43SD3_EOLS"
          text="O"
        />
      </div>
      <div className="d-flex position-absolute single-text-152">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L43LD1_ECLS")}`}
          label="KM_L43LD1_ECLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L43LD1_EOLS")}`}
          label="KM_L43LD1_EOLS"
          text="O"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-153",
          label: "TANK WEIGHT",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-101"
        text={{ useClass: "text-dark", label: "L43MS1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KM_L43MS1_PH", runLabel: "KM_L43MS1_RUN" }
          )}`,
          secondCircleLabel: "KM_L43MS1_RUN",
          secondCircleText: "M",
        }}
      />
      <div className="grid-container-2 position-absolute single-text-154">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-success",
            label: "K2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-success",
            label: "CO2 BINS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-success",
            label: "CO2 BF2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-success",
            label: "CO2 MILL",
          }}
        />
      </div>

      <div className="grid-container-2 position-absolute single-text-155">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-success",
            label: "K2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-success",
            label: "CO2 BINS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-success",
            label: "CO2 BF2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-success",
            label: "CO2 MILL",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-156",
          label: "Reject Bin",
        }}
      />
      <div className="d-flex position-absolute single-text-157">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L23BC2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L43BC2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L43BC1",
          }}
        />
      </div>
    </div>
  );
};

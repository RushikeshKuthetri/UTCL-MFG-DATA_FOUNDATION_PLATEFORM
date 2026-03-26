import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../../index";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const CoalMillAndhra = () => {
  return (
    <div className="CoalMillAndhra w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L23MS1" }}
        secondCircle={{
          secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens({
            runLabel: "KM_L23MS1_RUN",
            healthyLabel: "KM_L23MS1_PH",
          })}`,
          secondCircleLabel: "KM_L23MS1_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L23BC4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L23BC4_RUN", healthyLabel: "KM_L23BC4_PH" }
          )}`,
          secondCircleLabel: "KM_L23BC4_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L23BC5" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L23BC5_RUN", healthyLabel: "KM_L23BC5_PH" }
          )}`,
          secondCircleLabel: "KM_L23BC5_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L43WF1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KM_L43WF1_RUN",
              healthyLabel: "KM_L43WF1_PH",
            }
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "KM_L43WF1_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L43WF2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KM_L43WF2_RUN",
              healthyLabel: "KM_L43WF2_PH",
            }
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "KM_L43WF2_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
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
            { runLabel: "KM_L62CV1_RUN", healthyLabel: "KM_L62CV1_PH" }
          )}`,
          firstCircleLabel: "KM_L62CV1_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L63CV1" }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleLabel: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
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
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L93SC2_RUN", healthyLabel: "KM_L93SC2_PH" }
          )}`,
          firstCircleLabel: "KM_L93SC2_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L93SC2" }}
        secondCircle={{
          secondCircleClass: ``,
          firstCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L93SC1_RUN", healthyLabel: "KM_L93SC1_PH" }
          )}`,
          firstCircleLabel: "KM_L93SC1_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L93SC1" }}
        secondCircle={{
          secondCircleClass: ``,
          firstCircleText: "",
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
          secondCircleClass: ``,
          firstCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L93SC5" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L93SC5_RUN", healthyLabel: "KM_L93SC5_PH" }
          )}`,
          secondCircleLabel: "KM_L93SC5_RUN",
          secondCircleText: "M",
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
          secondCircleClass: ``,
          firstCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-14"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
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
          secondCircleClass: ``,
          firstCircleText: "",
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
      <div className="yellowline-Vr position-absolute pipe-33"></div>
      <div className="yellowline-Hr position-absolute pipe-34"></div>
      <div className="yellowline-Hr position-absolute pipe-35"></div>
      <div className="yellowline-Hr position-absolute pipe-36"></div>
      <div className="yellowline-Vr position-absolute pipe-37"></div>
      <div className="yellowline-Vr position-absolute pipe-38"></div>
      <div className="yellowline-Hr position-absolute pipe-39"></div>
      <div className="yellowline-Vr position-absolute pipe-40"></div>
      <div className="yellowline-Vr position-absolute pipe-41"></div>
      <div className="yellowline-Vr position-absolute pipe-42"></div>
      <div className="yellowline-Vr position-absolute pipe-43"></div>
      <div className="yellowline-Vr position-absolute pipe-44"></div>
      <div className="yellowline-Hr position-absolute pipe-45"></div>
      <div className="yellowline-Vr position-absolute pipe-46"></div>
      {/* <div className="yellowline-Hr position-absolute pipe-47"></div> */}
      <div className="yellowline-Hr position-absolute pipe-48"></div>
      <div className="yellowline-Hr position-absolute pipe-49"></div>
      <div className="yellowline-Vr position-absolute pipe-50"></div>
      <div className="yellowline-Hr position-absolute pipe-51"></div>
      <div className="yellowline-Hr position-absolute pipe-52"></div>
      <div className="yellowline-Hr position-absolute pipe-53"></div>
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
      <div className="yellowline-Vr position-absolute pipe-77"></div>
      <div className="yellowline-Hr position-absolute pipe-78"></div>
      <div className="yellowline-Vr position-absolute pipe-79"></div>
      <div className="yellowline-Vr position-absolute pipe-80"></div>
      <div className="yellowline-Hr position-absolute pipe-81"></div>
      <div className="yellowline-Hr position-absolute pipe-82"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-83"></div>
      <div className="yellowline-Vr position-absolute pipe-84"></div>
      <div className="yellowline-Vr position-absolute pipe-85"></div>
      <div className="yellowline-Hr position-absolute pipe-86"></div>
      <div className="yellowline-Vr position-absolute pipe-87"></div>
      <div className="yellowline-Vr position-absolute pipe-88"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-89"></div>
      <div className="yellowline-Hr position-absolute pipe-90"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-91"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-92"></div>
      {/* <div className="yellowline-Vr downArrow position-absolute pipe-93"></div> */}
      {/* <div className="yellowline-Hr position-absolute pipe-94"></div> */}
      {/* <div className="yellowline-Hr position-absolute pipe-95"></div> */}
      {/* <div className="yellowline-Vr downArrow position-absolute pipe-96"></div> */}
      {/* <div className="yellowline-Vr downArrow position-absolute pipe-97"></div> */}

      <div className="containerImage text-center position-absolute single-text-1">
        <div className="text-left">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L43HP1_LS_RUN"
            )}`}
            label="KM_L43HP1_LS_RUN"
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
            label: "KM_L43HP1_BIW",
            useClass: "greenTxt ",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-2">
        <div className="text-left">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L43HP2_LS_RUN"
            )}`}
            label="KM_L43HP2_LS_RUN"
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
            useClass: "text-dark ",
            label: "PET COKE",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43HP2_BIW",
            useClass: "greenTxt ",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-3 d-flex">
        <div className="containerImage text-center">
          <div className="d-flex justify-content-end">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "KM_453BI1_LS_RUN"
              )} `}
              label="KM_453BI1_LS_RUN"
              text="LS"
            />
          </div>
          <div className="p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "CALCINER",
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
                label: "KM_453BI1_WT1",
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
                "KM_453BI2_LS_RUN"
              )} `}
              label="KM_453BI2_LS_RUN"
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
                label: "KM_453BI2_WT1",
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
                label: "KILN",
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
                label: "KM_483BI1_WT1",
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
            label: "KM_L43WI1_LT",
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
            label: "KM_L43KM1_PT2",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
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
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "HP1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <BlackContainer
            data={{
              label: "KM_L43BF2_HP_TE1",
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
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <BlackContainer
            data={{
              label: "KM_L43BF2_HP_TE2",
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
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <BlackContainer
            data={{
              label: "KM_L43BF2_HP_TE3",
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
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <BlackContainer
            data={{
              label: "KM_L43BF2_HP_TE4",
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
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <BlackContainer
            data={{
              label: "KM_L43BF2_HP_TE5",
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
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <BlackContainer
            data={{
              label: "KM_L43BF2_HP_TE6",
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
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
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
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "BYPASS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L23BF3",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L23RA3"
              )}`}
              label="KM_L23RA3_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L23FN3_RUN", healthyLabel: "KM_L23FN3_PH" }
              )}`}
              label="KM_L23FN3_RUN"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-14 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "BYPASS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L43BF1",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L43RA1"
              )}`}
              label="KM_L43RA1_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L43FN3_RUN", healthyLabel: "KM_L43FN3_PH" }
              )}`}
              label="KM_L43FN3_RUN"
            />
          </div>
        </div>
      </div>
      <div className="hpipecircle position-absolute single-text-15">
        <div className="d-flex justify-content-around text-center mt-1">
          <div>
            <BlackContainer
              data={{
                label: "KM_L43BF2_TT1",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43BF2_PT2",
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
                label: "L43BF2",
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
                label: "KM_L43BF2_TT2",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43BF2_PT3",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="triangle-with-squares position-absolute single-text-16 d-flex flex-column align-items-center justify-content-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L63BI1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RAW",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "COAL",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L63BI1_WI",
            useClass: "greenTxt ",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="triangle-with-squares position-absolute single-text-17 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "L63BI1",
          }}
        />
      </div>
      <div className="grn-gry-img position-absolute single-text-18"></div>
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
                { openLabel: "NA", closeLabel: "NA" }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark p-1",
              label: "L43SD3",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "KM_L43LD1_EOLS_RUN",
                  closeLabel: "KM_L43LD1_ECLS_RUN",
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
              useClass: "text-dark p-1",
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
        <div className="d-flex">
          <div className="dot-square-line-Hr d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "KM_L93SG2_EOLS_RUN",
                  closeLabel: "KM_L93SG2_ECLS_RUN",
                  healthyLabel: "KM_L93SG2_PH",
                }
              )}`}
              label="KM_L93SG2_EOLS_RUN"
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
        <div className="d-flex">
          <div className="dot-square-line-Hr d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "KM_L93SG3_EOLS_RUN",
                  closeLabel: "KM_L93SG3_ECLS_RUN",
                  healthyLabel: "KM_L93SG3_PH",
                }
              )}`}
              label="KM_L93SG3_EOLS_RUN"
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
        <div className="d-flex">
          <div className="dot-square-line-Hr d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "KM_L93SG4_EOLS_RUN",
                  closeLabel: "KM_L93SG4_ECLS_RUN",
                  healthyLabel: "KM_L93SG4_PH",
                }
              )}`}
              label="KM_L93SG4_EOLS_RUN"
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
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "NA", closeLabel: "NA" }
              )}`}
              label="NA"
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
                  openLabel: "KM_L53SD1_EOLS_RUN",
                  closeLabel: "KM_L53SD1_ECLS_RUN",
                  healthyLabel: "KM_L53SD1_PH",
                }
              )}`}
              label="KM_L53SD1_EOLS_RUN"
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
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
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
      <div className="position-absolute single-text-25 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "For Kiln",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "For Kiln/Calciner",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "For Calciner",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "CO2 SYSTEM",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "KM_L43LD2_EOLS_RUN",
                closeLabel: "KM_L43LD2_ECLS_RUN",
                healthyLabel: "KM_L43LD2_PH",
              }
            )}`}
            label="KM_L43LD2_EOLS_RUN"
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
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
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
      <div className="position-absolute single-text-29 text-center">
        {/* <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "COMP. AIR",
          }}
        /> */}
        <BlackContainer
          data={{
            label: "KM_L43BF2_PT1",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-30 text-center d-flex align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "KM_L43FN4_SI",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div>
            <BlackContainer
              data={{
                label: "KM_L43FN4_II",
                useClass: "greenTxt ",
                unit: "A",
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
          </div>
          <div className="mt-2">
            <BlackContainer
              data={{
                label: "KM_L43FN4",
                useClass: "greenTxt ",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <BlackContainer
        data={{
          label: "KM_L43BF2_DPT",
          useClass: "greenTxt position-absolute single-text-31",
          unit: "mmWc",
          unitColor: "unitColor",
        }}
      />
      {/* <BlackContainer
        data={{
          label: "KM_L42SK1_SK",
          useClass: "greenTxt position-absolute single-text-32",
          unit: "A/mm",
          unitColor: "unitColor",
        }}
      /> */}
      <div className="position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "KM_L43LD1",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43LD1_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "KM_L43LD2_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43LD2",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
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
            useClass: "greenTxt ",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_453AM4_CO",
            useClass: "greenTxt ",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_483AM1_CO",
            useClass: "greenTxt ",
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
      <div className="position-absolute single-text-42 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot ${useColorStatus("NA")}`}
          label="NA"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L43FN4",
          }}
        />
      </div>
      {/* <div className="position-absolute single-text-43 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L52FN1_RUN", healthyLabel: "KM_L52FN1_PH" }
          )}`}
          label="KM_L52FN1_RUN"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L52FN1",
          }}
        />
      </div> */}
      <div className="position-absolute single-text-44">
        <div>
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
              label: "KM_L53LD1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-45">
        <BlackContainer
          data={{
            label: "KM_L43WP1_M1",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-46  d-flex">
        <div>
          <BlackContainer
            data={{
              label: "KM_L43WP2_M1",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L43WP2_TE1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-47 d-flex flex-column ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")} `}
          label="NA"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")} `}
          label="NA"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-48 d-flex flex-column ">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L43FN1_RUN", healthyLabel: "KM_L43FN1_PH" }
            )}`}
            label="KM_L43FN1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L43FN1",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L43FN2_RUN", healthyLabel: "KM_L43FN2_PH" }
            )}`}
            label="KM_L43FN2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L43FN2",
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
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L43MD1_XT1",
              useClass: "greenTxt ",
              unit: "mm/sec",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43KM1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43KM1_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-50  ">
        <BlackContainer
          data={{
            label: "KM_L43FN1_PT1",
            useClass: "greenTxt ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43FN1_PT2",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43FN1_PT3",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-51  ">
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
      <div className="position-absolute single-text-52a">
        <BlackContainer
          data={{
            label: "KM_L43RF1_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L43_HT1_AVGPO1_FB",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-53 d-flex align-items-end">
        <div>
          <BlackContainer
            data={{
              label: "KM_L43SR1_SI",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L43SR1_J01",
              useClass: "greenTxt ",
              unit: "KW",
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
          <BlackContainer
            data={{
              label: "KM_L43MD2",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-54 d-flex  ">
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
              label: "KM_L43WF1_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43WF1_FR",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43WF1_SSP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
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
              label: "KM_L43WF2_FR",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43WF2_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43WF2_SSP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-55 d-flex  ">
        <div>
          <BlackContainer
            data={{
              label: "KM_L23BF3_DPT",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L23BF3_PT",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L43BF1_DPT",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L43BF1_PT1",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-56">
        <BlackContainer
          data={{
            label: "KM_L43KM1_TT2",
            useClass: "greenTxt ",
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
      </div>
      <BlackContainer
        data={{
          label: "KM_L23BC1_II",
          useClass: "greenTxt position-absolute single-text-57",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L23BC3_II",
          useClass: "greenTxt position-absolute single-text-58",
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
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-60",
          label: "L23FN3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-61",
          label: "L23RA3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-62",
          label: "L43FN3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-63",
          label: "L43RA1",
        }}
      />
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
      <div className="d-flex position-absolute single-text-65 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO REJECT BIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L63BI1",
          }}
        />
      </div>
      <div className="position-absolute single-text-66 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L63SG1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L63SG2",
          }}
        />
      </div>
      <div className="position-absolute single-text-67 ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "KM_L63SG1_OLS_RUN",
                closeLabel: "KM_L63SG1_CLS_RUN",
              }
            )}`}
            label="KM_L63SG1_OLS_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-68 ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "KM_L63SG2_OLS_RUN",
                closeLabel: "KM_L63SG2_CLS_RUN",
              }
            )}`}
            label="KM_L63SG2_OLS_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-69 ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "KM_L63SG3_EOLS_RUN",
                closeLabel: "KM_L63SG3_ECLS_RUN",
                healthyLabel: "KM_L63SG3_PH",
              }
            )}`}
            label="KM_L63SG3_EOLS_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      {/* <div className="position-absolute single-text-70 d-flex">
        <BlackContainer
          data={{
            label: "KM_L62SG3_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L62SG3",
          }}
        />
      </div> */}
      <div className="position-absolute single-text-71 ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("NA")}`}
          label="NA"
        />
      </div>
      <div className="position-absolute single-text-72">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("NA")}`}
          label="NA"
        />
      </div>
      {/* <div className="position-absolute single-text-73 d-flex">
        <div>
          <div className="rounded bg-secondary ">BSS-L</div>
          <div className="rounded bg-secondary mt-1">BSS-L</div>
        </div>
        <div>
          <div className="rounded bg-secondary ">BSS-R</div>
          <div className="rounded bg-secondary mt-1">BSS-R</div>
        </div>
      </div> */}
      {/* <div className="position-absolute single-text-743d-flex">
        <div>
          <div className="rounded bg-secondary ">BSS-L</div>
          <div className="rounded bg-secondary mt-1">BSS-L</div>
        </div>
        <div>
          <div className="rounded bg-secondary ">BSS-R</div>
          <div className="rounded bg-secondary mt-1">BSS-R</div>
        </div>
      </div> */}
      {/* <div className="position-absolute single-text-75 d-flex">
        <div>
          <div className="rounded bg-secondary ">BSS-L</div>
          <div className="rounded bg-secondary mt-1">BSS-R</div>
        </div>
        <div>
          <div className="rounded bg-secondary ">BSS-R</div>
          <div className="rounded bg-secondary mt-1">BSS-L</div>
        </div>
      </div> */}
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
            label: "L43AD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-77 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "GB Lubrication",
            }}
          />
        </div>
        <div className="d-flex mt-1 align-items-center">
          <div className="">
            <div className="d-flex align-items-center justify-content-center mt-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "KM_L43PU1_RUN", healthyLabel: "KM_L43PU1_PH" }
                )}`}
                label="KM_L43PU1_RUN"
                text="M"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "L43PU1",
                }}
              />
            </div>
            <div className="d-flex align-items-center mt-2 justify-content-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "KM_L43PU2_RUN", healthyLabel: "KM_L43PU2_PH" }
                )}`}
                label="KM_L43PU2_RUN"
                text="M"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "L42PU2",
                }}
              />
            </div>
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "KM_L43LQ1_FT1",
                useClass: "greenTxt",
                unit: "Lpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43LQ1_FT2",
                useClass: "greenTxt mt-1",
                unit: "Lpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43GB1_PT",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L43LQ1_TT1",
                useClass: "greenTxt mt-1",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      {/* <div className="position-absolute single-text-78 border p-1">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L42PU3_RUN", healthyLabel: "KM_L42PU3_PH" }
            )}`}
            label="KM_L42PU3_RUN"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L42PU3",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L42PU4_RUN", healthyLabel: "KM_L42PU4_PH" }
            )}`}
            label="KM_L42PU4_RUN"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L42PU4",
            }}
          />
        </div>
      </div> */}
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
            <div className="text-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "KM_L43PU3_RUN", healthyLabel: "KM_L43PU3_PH" }
                )}`}
                label="KM_L43PU3_RUN"
                text="M"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "L43PU3",
                }}
              />
            </div>
            <div className="text-center mt-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "KM_L43PU4_RUN", healthyLabel: "KM_L43PU4_PH" }
                )}`}
                label="KM_L43PU4_RUN"
                text="M"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "L43PU4",
                }}
              />
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-center mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "Setpoint",
                }}
              />
              <BlackContainer
                data={{
                  label: "KM_HYDTENS_GRPSP03",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
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
                  label: "Tension.pr.",
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
                  label: "Lifting.pr.",
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
      {/* <div className="d-flex position-absolute single-text-80">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L42MD2_RUN", healthyLabel: "KM_L42MD2_PH" }
            )}`}
            label="KM_L42MD2_RUN"
          />
          <div
            className="yellowline-Vr position-relative"
            style={{ visibility: "hidden" }}
          ></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L42MD1",
          }}
        />
      </div> */}
      <div className="position-absolute single-text-81 d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "L43RF1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "NA", healthyLabel: "NA" }
          )}`}
          label="NA"
          text="M"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-82",
          label: "Hot Gas",
        }}
      />
      <div className=" position-absolute single-text-83">
        <div className="chimni-red"></div>
        <div className="text-center ml-2 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "STACK",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "L43K1",
            }}
          />
        </div>
      </div>
      {/* <div className="position-absolute single-text-84 text-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "KM_L22MT1_C_Pday",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L22MT1_C_Pday",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "KM_L22MT1_C_Today",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L22MT1_C_Today",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div> */}
      {/* <div className="position-absolute single-text-85 text-center">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "GRINDING HR",
            }}
          />
          <BlackContainer
            data={{
              label: "GRINDING_HR",
              useClass: "greenTxt ml-2",
              unit: "HR",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-1 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TOTAL FEED IN GRINDING MODE",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_WF_TOTAL_FR",
              useClass: "greenTxt ml-2",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-1 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "L42MD1 START To START TIMER",
            }}
          />
          <BlackContainer
            data={{
              label: "L42MD1_STR_STP_T",
              useClass: "greenTxt ml-2",
              unit: "Sec",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div> */}
      {/* <BlackContainer
        data={{
          label: "KM_L42KM1_FT1",
          useClass: "greenTxt position-absolute single-text-86",
          unit: "m3/hr",
          unitColor: "unitColor",
        }}
      /> */}
      <div className="position-absolute single-text-87 ">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L23MT1_PH_RUN"
            )}`}
            label="KM_L23MT1_PH_RUN"
            text="PH"
          />
          <MotorCircleDigitalTag
            className={`ml-2 dot digital-tag ${useColorStatus(
              "KM_L23MT1_RST_CMD_RUN"
            )}`}
            label="KM_L23MT1_RST_CMD_RUN"
            text="P"
          />
          <MotorCircleDigitalTag
            className={`ml-2 text-dark digital-tag ${useColorStatus(
              "KM_L23MT1_FB_RUN"
            )}`}
            label="KM_L23MT1_FB_RUN"
            text="FB"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L23MT1",
            }}
          />
          <MotorCircleDigitalTag
            className={`ml-2 text-dark digital-tag ${useColorStatus(
              "KM_L23MT1_MD_RUN"
            )}`}
            label="KM_L23MT1_MD_RUN"
            text="MD"
          />
        </div>
      </div>
      <div className="position-absolute single-text-88 ">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L23BC4_ZSS_RUN"
          )}`}
          label="KM_L23BC4_ZSS_RUN"
          text="ZSS"
        />
      </div>
      <div className="position-absolute single-text-89 d-flex ">
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L23DG1_CLS_RUN"
            )}`}
            label="KM_L23DG1_CLS_RUN"
            text="CLS"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L23DG1_OLS_RUN"
            )}`}
            label="KM_L23DG1_OLS_RUN"
            text="OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L23DG1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-90">
        <BlackContainer
          data={{
            label: "KM_L23BC4_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-91 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L63BI1_LS_RUN"
          )}`}
          label="KM_L63BI1_LS_RUN"
          text="LS"
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ml-2  ${useColorStatus(
              "KM_L43BC1_ZSS_RUN"
            )}`}
            label="KM_L43BC1_ZSS_RUN"
            text="ZSS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-92 d-flex">
        <div className="d-flex ">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L43EX1_OLS1_RUN"
            )}`}
            label="KM_L43EX1_OLS1_RUN"
            text="L1"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L43EX1_OLS2_RUN"
            )} ml-2`}
            label="KM_L43EX1_OLS2_RUN"
            text="L2"
          />
        </div>
        <div className="d-flex ">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L43EX2_OLS1_RUN"
            )}`}
            label="KM_L43EX2_OLS1_RUN"
            text="L1"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L43EX2_OLS2_RUN"
            )} ml-2`}
            label="KM_L43EX2_OLS2_RUN"
            text="L2"
          />
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`text-dark digital-tag position-absolute single-text-93 ${useColorStatus(
          "KM_L43RF1_ZSS1"
        )}`}
        label="KM_L43RF1_ZSS1"
        text="ZSS"
      />
      <div className="position-absolute single-text-94 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L43KM1_ZS_RUN"
          )}`}
          label="KM_L43KM1_ZS_RUN"
          text="ZS"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KM_L43KM1_LIGHT_RUN")}`}
          label="KM_L43KM1_LIGHT_RUN"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-95 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L63SG2_CLS_RUN"
            )}`}
            label="KM_L63SG2_CLS_RUN"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L63SG2_OLS_RUN"
            )}`}
            label="KM_L63SG2_OLS_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-96 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L63SG1_CLS_RUN"
            )}`}
            label="KM_L63SG1_CLS_RUN"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L63SG1_OLS_RUN"
            )}`}
            label="KM_L63SG1_OLS_RUN"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-97 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L43MD1_SB01_RUN"
          )}`}
          label="KM_L43MD1_SB01_RUN"
          text="V"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L43MD1_SB02_RUN"
          )}`}
          label="KM_L43MD1_SB02_RUN"
          text="V"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L43MD1_XB01_RUN"
          )}`}
          label="KM_L43MD1_XB01_RUN"
          text="V"
        />
      </div>
      <div className="text-center position-absolute single-text-98">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "NA", closeLabel: "NA" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "NA", closeLabel: "NA" }
          )}`}
          label="NA"
        />
        <div className="mt-1 d-flex">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L43WI1_PS01"
            )}`}
            label="KM_L43WI1_PS01"
            text="PS1"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag  ml-3`}
            text="SV1"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-99 d-flex">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "NA", closeLabel: "NA" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "NA", closeLabel: "NA" }
          )}`}
          label="NA"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "SV2",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-100 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L43WI1_PS02_RUN"
          )}`}
          label="KM_L43WI1_PS02_RUN"
          text="PS2"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "COMP AIR",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-101 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L43SD2_EXCLS_RUN"
          )}`}
          label="KM_L43SD2_EXCLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L43SD2_EXOLS_RUN"
          )}`}
          label="KM_L43SD2_EXOLS_RUN"
        />
      </div>
      <div className="text-center position-absolute single-text-102 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "KM_L43SD2_MAG_CMD_RUN"
          )} `}
          label="KM_L43SD2_MAG_CMD_RUN"
          text="P"
        />
      </div>
      <div className="text-center position-absolute single-text-103 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("NA")} ml-2`}
          label="NA"
          text="LS1"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("NA")} ml-2`}
          label="NA"
          text="LS2"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("NA")} ml-2`}
          label="NA"
          text="LS3"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("NA")} ml-2`}
          label="NA"
          text="LS4"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("NA")} ml-2`}
          label="NA"
          text="LS5"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("NA")} ml-2`}
          label="NA"
          text="LS6"
        />
      </div>
      <div className="position-absolute single-text-104 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93GA1_CLS_RUN"
          )}`}
          label="KM_L93GA1_CLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93GA1_OLS_RUN"
          )}`}
          label="KM_L93GA1_OLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93GA2_CLS_RUN"
          )}`}
          label="KM_L93GA2_CLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93GA2_OLS_RUN"
          )}`}
          label="KM_L93GA2_OLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93GA3_CLS_RUN"
          )}`}
          label="KM_L93GA3_CLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93GA3_OLS_RUN"
          )}`}
          label="KM_L93GA3_OLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93GA4_CLS_RUN"
          )}`}
          label="KM_L93GA4_CLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93GA4_OLS_RUN"
          )}`}
          label="KM_L93GA4_OLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93GA5_CLS_RUN"
          )}`}
          label="KM_L93GA5_CLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93GA5_OLS_RUN"
          )}`}
          label="KM_L93GA5_OLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93GA6_CLS_RUN"
          )}`}
          label="KM_L93GA6_CLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93GA6_OLS_RUN"
          )}`}
          label="KM_L93GA6_OLS_RUN"
        />
      </div>
    
      <div className="text-center position-absolute single-text-106 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93SG1_CLS_RUN"
          )}`}
          label="KM_L93SG1_CLS_RUN"
        />
        <div>
          <div className="dot-square-line-Hr d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "NA",
                  closeLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Hr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "",
            }}
          />
        </div>
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L93SG1_OLS_RUN"
          )}`}
          label="KM_L93SG1_OLS_RUN"
        />
      </div>
      <div className="text-center position-absolute single-text-107 ">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "NA", closeLabel: "NA" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "NA", closeLabel: "NA" }
          )}`}
          label="NA"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "SV3",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-108 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L93SG2_ECLS_RUN"
            )}`}
            label="KM_L93SG2_ECLS_RUN"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L93SG3_ECLS_RUN"
            )}`}
            label="KM_L93SG3_ECLS_RUN"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L93SG4_ECLS_RUN"
            )}`}
            label="KM_L93SG4_ECLS_RUN"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-109 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L93GA7_CLS_RUN"
            )}`}
            label="KM_L93GA7_CLS_RUN"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L93GA7_OLS_RUN"
            )} ml-2`}
            label="KM_L93GA7_OLS_RUN"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L93GA8_CLS_RUN"
            )}`}
            label="KM_L93GA8_CLS_RUN"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L93GA8_OLS_RUN"
            )} ml-2`}
            label="KM_L93GA8_OLS_RUN"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L93GA9_CLS_RUN"
            )}`}
            label="KM_L93GA9_CLS_RUN"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L93GA9_OLS_RUN"
            )} ml-2`}
            label="KM_L93GA9_OLS_RUN"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-110 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L43SD1_EXCLS_RUN"
          )}`}
          label="KM_L43SD1_EXCLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L43SD1_EXOLS_RUN"
          )}`}
          label="KM_L43SD1_EXOLS_RUN"
        />
      </div>
      <div className="text-center position-absolute single-text-111 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "KM_L43SD1_MAG_CMD_RUN"
          )}`}
          label="KM_L43SD1_MAG_CMD_RUN"
          text="P"
        />
      </div>
      <div className="text-center position-absolute single-text-112 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L43SD3_EXCLS_RUN"
          )}`}
          label="KM_L43SD3_EXCLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L43SD3_EXOLS_RUN"
          )}`}
          label="KM_L43SD3_EXOLS_RUN"
        />
      </div>
      <div className="text-center position-absolute single-text-113 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "KM_L43SD3_MAG_CMD_RUN"
          )} `}
          label="KM_L43SD3_MAG_CMD_RUN"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-114 ">
        <div className="bg-secondary text-center">
          <i class="fa-solid fa-volume-off"></i>
        </div>
      </div>
      <div className="text-center position-absolute single-text-115 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L43MD1_M2_RUN", healthyLabel: "KM_L43MD1_M2_PH" }
          )}`}
          label="KM_L43MD1_M2_RUN"
          text="M"
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L43WP1_TE1",
          useClass: "greenTxt position-absolute single-text-116",
          unit: "℃",
          unitColor: "unitColor",
        }}
      />
      <div className="text-center position-absolute single-text-117 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L53SD1_ECLS_RUN"
          )}`}
          label="KM_L53SD1_ECLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L53SD1_EOLS_RUN"
          )}`}
          label="KM_L53SD1_EOLS_RUN"
        />
      </div>
      <div className="text-center position-absolute single-text-118 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L23BC5_ZSS_RUN"
          )}`}
          label="KM_L23BC5_ZSS_RUN"
          text="LSS"
        />
        <div className="ml-3">
          <div>
            <div class="yellowline-Hr w rightarrow leftarrow position-absolute"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark t",
              label: "L43BC5",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-119 text-center">
        <div>
          <div class="yellowline-Hr w rightarrow  position-absolute"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "L43BC1",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-120 text-center">
        <div>
          <div class="yellowline-Hr w rightarrow  position-absolute"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "L93SG1",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-121 text-center">
        <div>
          <div class="yellowline-Hr w leftarrow  position-absolute"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "L93SC7",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-122 text-center">
        <div>
          <div class="yellowline-Hr w rightarrow  position-absolute"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "L93SC8",
          }}
        />
      </div>
      <div className="position-absolute single-text-123 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93SG2_EOLS_RUN")}`}
          label="KM_L93SG2_EOLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93SG3_EOLS_RUN")}`}
          label="KM_L93SG3_EOLS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L93SG4_EOLS_RUN")}`}
          label="KM_L93SG4_EOLS_RUN"
        />
      </div>
      <div className="position-absolute single-text-124">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L43AD1_ZS_RUN"
          )}`}
          label="KM_L43AD1_ZS_RUN"
          text="LS"
        />
      </div>
      <div className="position-absolute single-text-125 ">
        <div className="bg-secondary text-center">
          <i class="fa-solid fa-volume-off"></i>
        </div>
      </div>
    </div>
  );
};

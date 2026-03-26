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
export const CoalMillkotputli = () => {
  return (
    <div className="CoalMillkotputli w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot ${useColorStatus("NA")}`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L22BC3" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L22BC3_RUN", healthyLabel: "KM_L22BC3_PH" }
          )}`,
          secondCircleLabel: "KM_L22BC3_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L22BC4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L22BC4_RUN", healthyLabel: "KM_L22BC4_PH" }
          )}`,
          secondCircleLabel: "KM_L22BC4_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L42WF1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KM_L42WF1_ON",
              healthyLabel: "KM_L42WF1_PH",
            }
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "KM_L42WF1_ON",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L42WF2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KM_L42WF2_ON",
              healthyLabel: "KM_L42WF2_PH",
            }
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "KM_L42WF2_ON",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L42BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L42BC1_RUN", healthyLabel: "KM_L42BC1_PH" }
          )}`,
          secondCircleLabel: "KM_L42BC1_RUN",
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
        text={{ useClass: "text-dark", label: "L62CV1" }}
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
        text={{ useClass: "text-dark", label: "L92SC3" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L92SC3_RUN", healthyLabel: "KM_L92SC3_PH" }
          )}`,
          secondCircleLabel: "KM_L92SC3_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L92SC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L92SC2_RUN", healthyLabel: "KM_L92SC2_PH" }
          )}`,
          secondCircleLabel: "KM_L92SC2_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L92SC1_RUN", healthyLabel: "KM_L92SC1_PH" }
          )}`,
          firstCircleLabel: "KM_L92SC1_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L92SC1" }}
        secondCircle={{
          secondCircleClass: ``,
          firstCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L92SC4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L92SC4_RUN", healthyLabel: "KM_L92SC4_PH" }
          )}`,
          secondCircleLabel: "KM_L92SC4_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L92SC5_RUN", healthyLabel: "KM_L92SC5_PH" }
          )}`,
          firstCircleLabel: "KM_L92SC5_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L92SC5" }}
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
        text={{ useClass: "text-dark", label: "L92SC6" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L92SC6_RUN", healthyLabel: "KM_L92SC6_PH" }
          )}`,
          secondCircleLabel: "KM_L92SC6_RUN",
          secondCircleText: "M",
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
            { runLabel: "KM_L92SC7_RUN", healthyLabel: "KM_L92SC7_PH" }
          )}`,
          secondCircleLabel: "KM_L92SC7_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-15"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L92SC8" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L92SC8_RUN", healthyLabel: "KM_L92SC8_PH" }
          )}`,
          secondCircleLabel: "KM_L92SC8_RUN",
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
      <div className="yellowline-Hr position-absolute pipe-47"></div>
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
      <div className="yellowline-Vr downArrow position-absolute pipe-93"></div>
      {/* <div className="yellowline-Hr position-absolute pipe-94"></div>
      <div className="yellowline-Hr position-absolute pipe-95"></div> */}
      {/* <div className="yellowline-Vr downArrow position-absolute pipe-96"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-97"></div> */}

      <div className="containerImage text-center position-absolute single-text-1">
        <div className="text-left">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L42HP1_LS"
            )}`}
            label="KM_L42HP1_LS"
            text="LS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L42HP1",
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
            label: "KM_L42HP1_BIW",
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
              "KM_L42HP2_LS"
            )}`}
            label="KM_L42HP2_LS"
            text="LS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L42HP2",
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
            label: "KM_L42HP2_BIW",
            useClass: "greenTxt ",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-3 d-flex">
        <div className="containerImage text-center">
          <div className="text-right">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "KM_482BI1_LS"
              )} `}
              label="KM_482BI1_LS"
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
                label: "BIN",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "482-BI1",
              }}
            />
            <BlackContainer
              data={{
                label: "KL_482BI1_WT",
                useClass: "greenTxt ",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="containerImage text-center">
          <div className="text-right">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "KM_452BI2_LS"
              )} `}
              label="KM_452BI2_LS"
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
                label: "CALCINER",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "452-BI2",
              }}
            />
            <BlackContainer
              data={{
                label: "KL_452BI2_WT",
                useClass: "greenTxt ",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="containerImage text-center">
          <div className="text-right">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "KM_452BI1_LS"
              )} `}
              label="KM_452BI1_LS"
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
                label: "BIN",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "452-BI1",
              }}
            />
            <BlackContainer
              data={{
                label: "KL_452BI1_WT",
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
            label: "L421TK1",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L42WI1_LT",
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
            label: "L42SR1",
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
            label: "KM_L42KM1_DP",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L42KM1",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L42_HT1_AVGPOS",
            useClass: "greenTxt ",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "GRIND",
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
              { runLabel: "KM_L92HR1_RUN", healthyLabel: "KM_L92HR1_PH" }
            )}`}
            label="KM_L92HR1_RUN"
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
              { runLabel: "KM_L92HR2_RUN", healthyLabel: "KM_L92HR2_PH" }
            )}`}
            label="KM_L92HR2_RUN"
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
              { runLabel: "KM_L92HR3_RUN", healthyLabel: "KM_L92HR3_PH" }
            )}`}
            label="KM_L92HR3_RUN"
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
              { runLabel: "KM_L92HR4_RUN", healthyLabel: "KM_L92HR4_PH" }
            )}`}
            label="KM_L92HR4_RUN"
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
              { runLabel: "KM_L92HR5_RUN", healthyLabel: "KM_L92HR5_PH" }
            )}`}
            label="KM_L92HR5_RUN"
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
              { runLabel: "KM_L92HR6_RUN", healthyLabel: "KM_L92HR6_PH" }
            )}`}
            label="KM_L92HR6_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-11">
        <div className="roller-drum d-flex justify-content-center align-items-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L42MD1_RUN", healthyLabel: "KM_L42MD1_BR_SER" }
            )}`}
            label="KM_L42MD1_RUN"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L42MD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-12 bg-secondary"></div>
      <div className="position-absolute single-text-13 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L22BF3",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L22RA3"
              )}`}
              label="KM_L22RA3_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L22FN3_RUN", healthyLabel: "KM_L22FN3_PH" }
              )}`}
              label="KM_L22FN3_RUN"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-14 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L42BF1",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L42RA1"
              )}`}
              label="KM_L42RA1_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L42FN3_RUN", healthyLabel: "KM_L42FN3_PH" }
              )}`}
              label="KM_L42FN3_RUN"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-15 bg-secondary">
        <div className="d-flex justify-content-around text-center align-items-center">
          <div>
            <BlackContainer
              data={{
                label: "KM_L42BF2_TT1",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L42BF2_PT2",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark border p-1 mt-1 bg-light",
                label: "BH PURGING",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark border p-1 mt-1 bg-light",
                label: "L42BF2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark border p-1 mt-1 bg-light",
                label: "AM1",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "KM_L42BF2_TT2",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L42BF2_PT3",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="triangle-with-squares position-absolute single-text-16 text-center">
        <BlackContainer
          data={{
            label: "KM_L62BI1_WI",
            useClass: "greenTxt mt-1",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L42MD1",
          }}
        />
      </div>
      <div className="triangle-with-squares position-absolute single-text-17 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L62BI1",
          }}
        />
      </div>
      <div className="grn-gry-img position-absolute single-text-18"></div>
      <div className="position-absolute single-text-19 d-flex">
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L92RA1"
              )}`}
              label="KM_L92RA1_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RA1",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L92RA2"
              )}`}
              label="KM_L92RA2_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RA2",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L92RA3"
              )}`}
              label="KM_L92RA3_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RA3",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L92RA4"
              )}`}
              label="KM_L92RA4_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RA4",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L92RA5"
              )}`}
              label="KM_L92RA5_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RA5",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L92RA6"
              )}`}
              label="KM_L92RA6_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RA6",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L92RA7"
              )}`}
              label="KM_L92RA7_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RA7",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L92RA8"
              )}`}
              label="KM_L92RA8_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RA8",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L92RA9"
              )}`}
              label="KM_L92RA9_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RA9",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L92RAA"
              )}`}
              label="KM_L92RAA_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RAA",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L92RAB"
              )}`}
              label="KM_L92RAB_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RAB",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L92RAC"
              )}`}
              label="KM_L92RAC_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RAC",
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
                { openLabel: "KM_L42SD3_OLS", closeLabel: "KM_L42SD3_CLS" }
              )}`}
              label="KM_L42SD3_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L42SD3",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "KM_L42LD1_EOLS",
                  closeLabel: "KM_L42LD1_ECLS",
                  healthyLabel: "KM_L42LD1_PH",
                }
              )}`}
              label="KM_L42LD1_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L42LD1",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-21 d-flex">
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "KM_L92RAD"
            )}`}
            label="KM_L92RAD_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L92RAD",
            }}
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "KM_L92RAE"
            )}`}
            label="KM_L92RAE_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L92RAE",
            }}
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "KM_L92RAF"
            )}`}
            label="KM_L92RAF_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L92RAF",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <div className="d-flex ">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "KM_L92SG2_EOLS", closeLabel: "KM_L92SG2_ECLS" }
              )}`}
              label="KM_L92SG2_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L92SG2",
            }}
          />
        </div>
        <div className="d-flex ">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "KM_L92SG3_EOLS", closeLabel: "KM_L92SG3_ECLS" }
              )}`}
              label="KM_L92SG3_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L92SG3",
            }}
          />
        </div>
        <div className="d-flex ">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "KM_L92SG4_EOLS", closeLabel: "KM_L92SG4_ECLS" }
              )}`}
              label="KM_L92SG4_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L92SG4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "KM_L52LD1_OLS", closeLabel: "KM_L52LD1_CLS" }
              )}`}
              label="KM_L52LD1_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L52LD1",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "KM_L52SD1_OLS", closeLabel: "KM_L52SD1_CLS" }
              )}`}
              label="KM_L52SD1_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L52SD1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "KM_L42SD1_OLS", closeLabel: "KM_L42SD1_CLS" }
            )}`}
            label="KM_L42SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L42SD1",
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
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L42P1",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "KM_L42LD2_EOLS",
                closeLabel: "KM_L42LD2_ECLS",
                healthyLabel: "KM_L42LD2_PH",
              }
            )}`}
            label="KM_L42LD2_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "L42LD2",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "KM_L42SD2_OLS", closeLabel: "KM_L42SD2_CLS" }
            )}`}
            label="KM_L42SD2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L42SD2",
          }}
        />
      </div>
      <div className="position-absolute single-text-29 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "COMP. AIR",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L42BF2_PT1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-30 text-center d-flex">
        <div>
          <BlackContainer
            data={{
              label: "KM_L42AM1_CO",
              useClass: "greenTxt ",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42AM1_O2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42FN4",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "KM_L42BF2_DPT",
          useClass: "greenTxt position-absolute single-text-31",
          unit: "mmWc",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L42SK1_SK",
          useClass: "greenTxt position-absolute single-text-32",
          unit: "A/mm",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "KM_L42LD1",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L42LD1_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "KM_L42LD2",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L42LD2_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <BlackContainer
          data={{
            label: "KM_L92SC1_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L92SC2_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L92SC3_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <BlackContainer
          data={{
            label: "KM_L92SC4_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L92SC5_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <BlackContainer
          data={{
            label: "KM_482AM1_CO",
            useClass: "greenTxt ",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_452AM4_CO",
            useClass: "greenTxt ",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_452AM3_CO",
            useClass: "greenTxt ",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L92SC6_II",
          useClass: "greenTxt position-absolute single-text-38",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L92SC7_II",
          useClass: "greenTxt position-absolute single-text-39",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L92SC8_II",
          useClass: "greenTxt position-absolute single-text-40",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-41 d-flex align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L92SM1_RUN", healthyLabel: "KM_L92SM1_PH" }
          )}`}
          label="KM_L92SM1_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "L92SM1",
          }}
        />
      </div>
      <div className="position-absolute single-text-42 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot ${useColorStatus("KM_L42FN4")}`}
          label="KM_L42FN4"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L42FN4",
          }}
        />
      </div>
      <div className="position-absolute single-text-43 text-center">
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
      </div>
      <div className="position-absolute single-text-44  d-flex">
        <div>
          <BlackContainer
            data={{
              label: "KM_L52FN1",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L52LD1",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L52LD1_ZT",
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
            label: "KM_L42WP1_M1",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-46  d-flex">
        <div>
          <BlackContainer
            data={{
              label: "KM_L42WP2_M1",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L42WP2_TE",
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
              { runLabel: "KM_L42FN1_RUN", healthyLabel: "KM_L42FN1_PH" }
            )}`}
            label="KM_L42FN1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42FN1",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L42FN2_RUN", healthyLabel: "KM_L42FN2_PH" }
            )}`}
            label="KM_L42FN2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42FN2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-49 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "KM_L42WI1_FT",
              useClass: "greenTxt ",
              unit: "m3/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42WI1_FT1",
              useClass: "greenTxt mt-1",
              unit: "L/hr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L42MD1_XT1",
              useClass: "greenTxt ",
              unit: "mm/sec",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42KM1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42KM1_TT1",
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
            label: "KM_L42FN1_PT1",
            useClass: "greenTxt ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L42FN1_PT2",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L42FN1_PT3",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-51  ">
        <BlackContainer
          data={{
            label: "KM_L42MD1_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L42MD1_JI",
            useClass: "greenTxt mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-52 d-flex  ">
        <BlackContainer
          data={{
            label: "KM_L42BC1_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L42RF1_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-53 d-flex  ">
        <div>
          <BlackContainer
            data={{
              label: "KM_L42SR1_SP",
              useClass: "greenTxt ",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42SR1_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L42SR1_J01",
              useClass: "greenTxt ",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42SR1_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-54 d-flex  ">
        <div>
          <BlackContainer
            data={{
              label: "KM_L42WF1_SA",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42WF1_ITA",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42WF1_SSP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42WF1_FR",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L42WF2_SA",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42WF2_ITA",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42WF2_SSP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42WF2_FR",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-55 d-flex  ">
        <div>
          <BlackContainer
            data={{
              label: "KM_L22BF3_PT",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L22BF3_DPT",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L42BF1_PT1",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42BF1_DPT",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-56">
        <BlackContainer
          data={{
            label: "KM_L42KM1_TT2",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L42KM1_PT2",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L42KM1_PT3",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L22BC4_II",
          useClass: "greenTxt position-absolute single-text-57",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L22BC3_II",
          useClass: "greenTxt position-absolute single-text-58",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-59 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "EX1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "EX2",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-60",
          label: "L22FN3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-61",
          label: "L22RA3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-62",
          label: "L42FN3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-63",
          label: "L42RA1",
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
      <div className="position-absolute single-text-65 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO REJECT BIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L62BI1",
          }}
        />
      </div>
      <div className="position-absolute single-text-66 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L62SG1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L62SG2",
          }}
        />
      </div>
      <div className="position-absolute single-text-67 ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "KM_L62SG1_OLS", closeLabel: "KM_L62SG1_CLS" }
            )}`}
            label="KM_L62SG1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-68 ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "KM_L62SG2_OLS", closeLabel: "KM_L62SG2_CLS" }
            )}`}
            label="KM_L62SG2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-69 ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "KM_L62SG3_EOLS", closeLabel: "KM_L62SG3_ECLS" }
            )}`}
            label="KM_L62SG3_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-70 d-flex">
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
      </div>
      <div className="position-absolute single-text-71 ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L22BF3")}`}
          label="KM_L22BF3"
        />
      </div>
      <div className="position-absolute single-text-72">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L42BF1")}`}
          label="KM_L42BF1"
        />
      </div>
      <div className="position-absolute single-text-73 d-flex">
        <div>
          <div className="rounded bg-secondary ">BSS-L</div>
          <div className="rounded bg-secondary mt-1">BSS-L</div>
        </div>
        <div>
          <div className="rounded bg-secondary ">BSS-R</div>
          <div className="rounded bg-secondary mt-1">BSS-R</div>
        </div>
      </div>
      <div className="position-absolute single-text-74 d-flex">
        <div>
          <div className="rounded bg-secondary ">BSS-L</div>
          <div className="rounded bg-secondary mt-1">BSS-L</div>
        </div>
        <div>
          <div className="rounded bg-secondary ">BSS-R</div>
          <div className="rounded bg-secondary mt-1">BSS-R</div>
        </div>
      </div>
      <div className="position-absolute single-text-75 d-flex">
        <div>
          <div className="rounded bg-secondary ">BSS-L</div>
          <div className="rounded bg-secondary mt-1">BSS-R</div>
        </div>
        <div>
          <div className="rounded bg-secondary ">BSS-R</div>
          <div className="rounded bg-secondary mt-1">BSS-L</div>
        </div>
      </div>
      <div className="position-absolute single-text-76 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L42AD1_RUN", healthyLabel: "KM_L42AD1_PH" }
          )}`}
          label="KM_L42AD1_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L42AD1",
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
        <div className="d-flex align-items-center justify-content-center mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L42PU1_RUN", healthyLabel: "KM_L42PU1_PH" }
            )}`}
            label="KM_L42PU1_RUN"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L42PU1",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-2 justify-content-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L42PU2_RUN", healthyLabel: "KM_L42PU2_PH" }
            )}`}
            label="KM_L42PU2_RUN"
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
      <div className="position-absolute single-text-78 border p-1">
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
      </div>
      <div className="position-absolute single-text-79 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Hyd Sys",
            }}
          />
        </div>
        <div className="d-flex align-items-center justify-content-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "Setpoint",
            }}
          />
          <BlackContainer
            data={{
              label: "HYD_TENS_GRPSP03",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42HT1_ZT01",
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
              label: "KM_L42HT1_PT1",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42HT1_ZT02",
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
              label: "KM_L42HT1_PT2",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L42HT1_ZT03",
              useClass: "greenTxt ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-80">
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
      </div>
      <div className="position-absolute single-text-81 d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "L42RF1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L42RF1_RUN", healthyLabel: "KM_L42RF1_PH" }
          )}`}
          label="KM_L42RF1_RUN"
          text="M"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-82",
          label: "Hot Gas",
        }}
      />
      <div className=" position-absolute single-text-83 d-flex align-items-center">
        <div className="chimni-red"></div>
        <div className="text-center ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "STACK",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "L42SK1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-84 text-center">
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
      </div>
      <div className="position-absolute single-text-85 text-center">
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
      </div>
      <BlackContainer
        data={{
          label: "KM_L42KM1_FT1",
          useClass: "greenTxt position-absolute single-text-86",
          unit: "m3/hr",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-87 ">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("KM_L22MT1_PH")}`}
          label="KM_L22MT1_PH"
          text="PH"
        />
        <MotorCircleDigitalTag
          className={`mt-2 text-dark digital-tag ${useColorStatus(
            "KM_L22MT1_MD"
          )}`}
          label="KM_L22MT1_MD"
          text="MD"
        />
      </div>
      <div className="position-absolute single-text-88 ">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="ZSS"
        />
        <div className="bg-secondary mt-2 text-center">
          <i class="fa-solid fa-volume-off"></i>
        </div>
      </div>
      <div className="position-absolute single-text-89 d-flex text-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CLS",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L22DG1_CLS")}`}
            label="KM_L22DG1_CLS"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "OLS",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L22DG1_OLS")}`}
            label="KM_L22DG1_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-90">
        <div className="bg-secondary text-center">
          <i class="fa-solid fa-volume-off"></i>
        </div>
        <MotorCircleDigitalTag
          className={`text-dark digital-tag mt-2  ${useColorStatus("NA")}`}
          label="NA"
          text="ZSS"
        />
      </div>
      <div className="position-absolute single-text-91 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("KM_L62BI1_LS")}`}
          label="KM_L62BI1_LS"
          text="LS"
        />
        <div className="d-flex">
          <div className="bg-secondary text-center">
            <i class="fa-solid fa-volume-off"></i>
          </div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ml-2  ${useColorStatus("NA")}`}
            label="NA"
            text="ZSS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-92 d-flex">
        <div className="d-flex ">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L42EX1_OLS1"
            )}`}
            label="KM_L42EX1_OLS1"
            text="L1"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L42EX1_OLS2"
            )} ml-2`}
            label="KM_L42EX1_OLS2"
            text="L2"
          />
        </div>
        <div className="d-flex ">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L42EX2_OLS1"
            )}`}
            label="KM_L42EX2_OLS1"
            text="L1"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L42EX2_OLS2"
            )} ml-2`}
            label="KM_L42EX2_OLS2"
            text="L2"
          />
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`text-dark digital-tag position-absolute single-text-93 ${useColorStatus(
          "NA"
        )}`}
        label="NA"
        text="ZSS"
      />
      <div className="position-absolute single-text-94 d-flex">
        <div className="bg-secondary text-center">
          <i class="fa-solid fa-volume-off"></i>
        </div>
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L42AD1_AD1_ZS"
          )}`}
          label="KM_L42AD1_AD1_ZS"
          text="ZS"
        />
      </div>
      <div className="position-absolute single-text-95 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L62SG2_OLS")}`}
            label="KM_L62SG2_OLS"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L62SG2_CLS")}`}
            label="KM_L62SG2_CLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-96 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L62SG1_OLS")}`}
            label="KM_L62SG1_OLS"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L62SG1_CLS")}`}
            label="KM_L62SG1_CLS"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-97 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L42MD1_SB01"
          )}`}
          label="KM_L42MD1_SB01"
          text="V"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L42MD1_SB02"
          )}`}
          label="KM_L42MD1_SB02"
          text="V"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L42MD1_XB01"
          )}`}
          label="KM_L42MD1_XB01"
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
              "KM_L42WI1_PS1"
            )}`}
            label="KM_L42WI1_PS1"
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
          className={`text-dark digital-tag ${useColorStatus("KM_L42WI1_PS2")}`}
          label="KM_L42WI1_PS2"
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
          className={`square digital-tag ${useColorStatus("KM_L42SD2_EXCLS")}`}
          label="KM_L42SD2_EXCLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L42SD2_EXOLS")}`}
          label="KM_L42SD2_EXOLS"
        />
      </div>
      <div className="text-center position-absolute single-text-102 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")} `}
          label="NA"
          text="P"
        />
      </div>
      <div className="text-center position-absolute single-text-103 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L42BF2_LS1"
          )} ml-2`}
          label="KM_L42BF2_LS1"
          text="LS1"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L42BF2_LS2"
          )} ml-2`}
          label="KM_L42BF2_LS2"
          text="LS2"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L42BF2_LS3"
          )} ml-2`}
          label="KM_L42BF2_LS3"
          text="LS3"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L42BF2_LS4"
          )} ml-2`}
          label="KM_L42BF2_LS4"
          text="LS4"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L42BF2_LS5"
          )} ml-2`}
          label="KM_L42BF2_LS5"
          text="LS5"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "KM_L42BF2_LS6"
          )} ml-2`}
          label="KM_L42BF2_LS6"
          text="LS6"
        />
      </div>
      <div className="position-absolute single-text-104 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92GA1_CLS")}`}
          label="KM_L92GA1_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92GA1_OLS")}`}
          label="KM_L92GA1_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92GA2_CLS")}`}
          label="KM_L92GA2_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92GA2_OLS")}`}
          label="KM_L92GA2_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92GA3_CLS")}`}
          label="KM_L92GA3_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92GA3_OLS")}`}
          label="KM_L92GA3_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92GA4_CLS")}`}
          label="KM_L92GA4_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92GA4_OLS")}`}
          label="KM_L92GA4_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92GA5_CLS")}`}
          label="KM_L92GA5_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92GA5_OLS")}`}
          label="KM_L92GA5_OLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92GA6_CLS")}`}
          label="KM_L92GA6_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92GA6_OLS")}`}
          label="KM_L92GA6_OLS"
        />
      </div>
      <div className="position-absolute single-text-105 align-items-center">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "KM_L92SG1_SOV_OLS",
                closeLabel: "KM_L92SG1_SOV_CLS",
              }
            )}`}
            label="KM_L92SG1_SOV_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L42MD1",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-106 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92SG1_CLS")}`}
          label="KM_L92SG1_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L92SG1_OLS")}`}
          label="KM_L92SG1_OLS"
        />
      </div>
      <div className="text-center position-absolute single-text-107 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "SV3",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center mt-1"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "NA", closeLabel: "NA" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "NA", closeLabel: "NA" }
          )}`}
          label="NA"
        />
      </div>
      <div className="text-center position-absolute single-text-108 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L92SG2_ECLS")}`}
            label="KM_L92SG2_ECLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L92SG2_EOLS"
            )} ml-2`}
            label="KM_L92SG2_EOLS"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L92SG3_ECLS")}`}
            label="KM_L92SG3_ECLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L92SG3_EOLS"
            )} ml-2`}
            label="KM_L92SG3_EOLS"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L92SG4_ECLS")}`}
            label="KM_L92SG4_ECLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L92SG4_EOLS"
            )} ml-2`}
            label="KM_L92SG4_EOLS"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-109 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L92GA7_CLS")}`}
            label="KM_L92GA7_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L92GA7_OLS"
            )} ml-2`}
            label="KM_L92GA7_OLS"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L92GA8_CLS")}`}
            label="KM_L92GA8_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L92GA8_OLS"
            )} ml-2`}
            label="KM_L92GA8_OLS"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L92GA9_CLS")}`}
            label="KM_L92GA9_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L92GA9_OPS"
            )} ml-2`}
            label="KM_L92GA9_OPS"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-110 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L42SD1_EXOLS")}`}
          label="KM_L42SD1_EXOLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L42SD1_EXCLS")}`}
          label="KM_L42SD1_EXCLS"
        />
      </div>
      <div className="text-center position-absolute single-text-111 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="P"
        />
      </div>
      <div className="text-center position-absolute single-text-112 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L42SD3_EXCLS")}`}
          label="KM_L42SD3_EXCLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L42SD3_EXOLS")}`}
          label="KM_L42SD3_EXOLS"
        />
      </div>
      <div className="text-center position-absolute single-text-113 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")} `}
          label="NA"
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
            { runLabel: "KM_L42MD1_M2_RUN", healthyLabel: "KM_L42MD1_M2_PH" }
          )}`}
          label="KM_L42MD1_M2_RUN"
          text="M"
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L42WP1_TE",
          useClass: "greenTxt position-absolute single-text-116",
          unit: "℃",
          unitColor: "unitColor",
        }}
      />
      <div className="text-center position-absolute single-text-117 border p-1">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPC POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "KM2_SP_POWER",
              useClass: "greenTxt ml-2",
              unit: "KWH/T",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SPC PWR AVG",
            }}
          />
          <BlackContainer
            data={{
              label: "KM2_SP_POWER_AVG",
              useClass: "greenTxt ml-2",
              unit: "KWH/T",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FAN/MILL SPC",
            }}
          />
          <BlackContainer
            data={{
              label: "KM2_FN_MD_SP_PWR",
              useClass: "greenTxt ml-2",
              unit: "KWH/T",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FEED RATE",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_TOTAL_FEED",
              useClass: "greenTxt ml-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FEED AVG",
            }}
          />
          <BlackContainer
            data={{
              label: "KM2_FEED_POWER_AVG",
              useClass: "greenTxt ml-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
    </div>
  );
};

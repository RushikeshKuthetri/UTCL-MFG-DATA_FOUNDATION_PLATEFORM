import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../index";
import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const CoalMillkukurdih = () => {
  return (
    <div className="CoalMillkotputli CoalMillkukurdih w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L21MS1_RUN", healthyLabel: "KM_L21MS1_PH" }
          )}`,
          secondCircleLabel: "KM_L21MS1_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L21BC3" }}
        secondCircle={{
          secondCircleClass: `dot  ${useMotorTagsColorStatusForNewPlantScreens({
            runLabel: "KM_L21BC3_RUN",
            healthyLabel: "KM_L21BC3_PH",
          })}`,
          secondCircleLabel: "KM_L21BC3_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L21BC4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L21BC4_RUN", healthyLabel: "KM_L21BC4_PH" }
          )}`,
          secondCircleLabel: "KM_L21BC4_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L41WF1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L41WF1_RUN", healthyLabel: "KM_L41WF1_PH" }
          )}`,
          secondCircleLabel: "KM_L41WF1_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L41WF2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L41WF2_RUN", healthyLabel: "KM_L41WF2_PH" }
          )}`,
          secondCircleLabel: "KM_L41WF2_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L41BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L41BC1_RUN", healthyLabel: "KM_L41BC1_PH" }
          )}`,
          secondCircleLabel: "KM_L41BC1_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleLabel: "",
        }}
        text={{ useClass: "text-dark", label: "L61CV1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L61CV1_RUN", healthyLabel: "KM_L61CV1_PH" }
          )}`,
          secondCircleLabel: "KM_L61CV1_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L91SC3" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L91SC3_RUN", healthyLabel: "KM_L91SC3_PH" }
          )}`,
          secondCircleLabel: "KM_L91SC3_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L91SC2_RUN", healthyLabel: "KM_L91SC2_PH" }
          )}`,
          firstCircleLabel: "KM_L91SC2_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L91SC2" }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L91SC1_RUN", healthyLabel: "KM_L91SC1_PH" }
          )}`,
          firstCircleLabel: "KM_L91SC1_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L91SC1" }}
        secondCircle={{
          secondCircleClass: ``,
          firstCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L91SC4_RUN", healthyLabel: "KM_L91SC4_PH" }
          )}`,
          firstCircleLabel: "KM_L91SC4_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L91SC4" }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleLabel: "",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L91SC5" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L91SC5_RUN", healthyLabel: "KM_L91SC5_PH" }
          )}`,
          secondCircleLabel: "KM_L91SC5_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-13"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L91SC6_RUN", healthyLabel: "KM_L91SC6_PH" }
          )}`,
          firstCircleLabel: "KM_L91SC6_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L91SC6" }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-14"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "L91SC7" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L91SC7_RUN", healthyLabel: "KM_L91SC7_PH" }
          )}`,
          secondCircleLabel: "KM_L91SC7_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-15"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L91SC8_RUN", healthyLabel: "KM_L91SC8_PH" }
          )}`,
          firstCircleLabel: "KM_L91SC8_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark mx-auto", label: "L91SC8" }}
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
      <div className="yellowline-Hr rightarrow position-absolute pipe-89"></div>
      <div className="yellowline-Hr position-absolute pipe-90"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-91"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-92"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-93"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-94"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-95"></div>
      <div className="yellowline-Vr position-absolute pipe-96"></div>
      <div className="containerImage text-center position-absolute single-text-1">
        <div className="text-left">
          <MotorCircleDigitalTag
            className={`square digital-tag mt-1 ml-1 ${useColorStatus(
              "KM_L41HP1_LS"
            )}`}
            label="KM_L41HP1_LS"
            text="LS"
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-between h-75">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L41HP1",
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
            label: "KM_L41HP1_BIW",
            useClass: "greenTxt ",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
        </div>

      </div>
      <div className="containerImage text-center position-absolute single-text-2">
        <div className="text-left">
          <MotorCircleDigitalTag
            className={`square digital-tag mt-1 ml-1 ${useColorStatus(
              "KM_L41HP2_LS"
            )}`}
            label="KM_L41HP2_LS"
            text="LS"
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-between h-75">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L41HP2",
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
            label: "KM_L41HP2_BIW",
            useClass: "greenTxt ",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
          </div>

      </div>
      <div className=" position-absolute single-text-3 d-flex">
        <div className="containerImage text-center">
          <div className="text-right">
            <MotorCircleDigitalTag
              className={`square digital-tag mt-1 ml-1 ${useColorStatus(
                "KM_451BI1_LS"
              )} `}
              label="KM_451BI1_LS"
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
                useClass: "text-dark bg-secondary",
                label: "451BI1",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_451BI1_WT1",
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
              className={`square digital-tag mt-1 ml-1 ${useColorStatus(
                "KM_451BI2_LS"
              )} `}
              label="KM_451BI2_LS"
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
                useClass: "text-dark",
                label: "CALCINER",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  bg-secondary",
                label: "451BI2",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_451BI2_WT1",
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
              className={`square digital-tag  mt-1 ml-1 ${useColorStatus(
                "KM_481BI1_LS"
              )} `}
              label="KM_481BI1_LS"
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
                useClass: "text-dark  bg-secondary",
                label: "481BI1",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_481BI1_WT1",
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
            label: "L41TK1",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41WI1_LT",
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
            label: "L41SR1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "COAL MILL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L41KM1",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41KM1_DP",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L41MD1_SB01")}
            )}`}
            label="KM_L41MD1_SB01"
            text="V"
          />
          <MotorCircleDigitalTag
            className={`square ml-1 digital-tag ${useColorStatus(
              "KM_L41MD1_SB02"
            )}
            )}`}
            label="KM_L41MD1_SB02"
            text="V"
          />
          <MotorCircleDigitalTag
            className={`square ml-1 digital-tag ${useColorStatus(
              "KM_L41MD1_XB01"
            )}
            )}`}
            label="KM_L41MD1_XB01"
            text="V"
          />
        </div>
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
              label: "KM_L41BF2_HP_TE1",
              useClass: "greenTxt ",
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
              label: "KM_L41BF2_HP_TE2",
              useClass: "greenTxt ",
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
              label: "KM_L41BF2_HP_TE3",
              useClass: "greenTxt ",
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
              label: "KM_L41BF2_HP_TE4",
              useClass: "greenTxt ",
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
              label: "KM_L41BF2_HP_TE5",
              useClass: "greenTxt ",
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
              label: "KM_L41BF2_HP_TE6",
              useClass: "greenTxt ",
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
              { runLabel: "KM_L41MD1_RUN", healthyLabel: "KM_L41MD1_PH" }
            )}`}
            label="KM_L41MD1_RUN"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L41MD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-12 bg-secondary"></div>
      <div className="position-absolute single-text-13 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L21BF3",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L21RA3_RUN", healthyLabel: "KM_L21RA3_PH" }
              )}`}
              label="KM_L21RA3_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L21FN3_RUN", healthyLabel: "KM_L21FN3_PH" }
              )}`}
              label="KM_L21FN3_RUN"
              text=""
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-14 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L41BF1",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L41RA1_RUN", healthyLabel: "KM_L41RA1_PH" }
              )}`}
              label="KM_L41RA1_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L41FN3_RUN", healthyLabel: "KM_L41FN3_PH" }
              )}`}
              label="KM_L41FN3_RUN"
              text=""
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-15 bg-secondary">
        <div className="d-flex justify-content-around text-center align-items-center">
          <div>
            <BlackContainer
              data={{
                label: "KM_L41BF2_TT1",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L41BF2_PT2",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "KM_L41AM1_CO",
              useClass: "greenTxt ",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
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
                label: "L42BF2",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "KM_L41AM1_O2",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <div>
            <BlackContainer
              data={{
                label: "KM_L41BF2_TT2",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L41BF2_PT3",
                useClass: "greenTxt mt-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="triangle-with-squares position-absolute single-text-16 text-center">
        <div className="d-flex">

          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L61BI1_LS")}`}
            label="KM_L61BI1_LS"
            text="LS"
          />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "L61BI1",
          }}
        />
     
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "RAW COAL CAP 4T",
          }}
        />
     
             <BlackContainer
            data={{
              label: "KM_L61BI1_WI",
              useClass: "greenTxt mt-2",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
      </div>
      <div className="triangle-with-squares position-absolute single-text-17 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "L61BI1",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <div className="grn-gry-img"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-1",
            label: "L21DG1",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L91RA1_RUN", healthyLabel: "KM_L91RA1_PH" }
              )}`}
              label="KM_L91RA1_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L91RA1",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L91RA2_RUN", healthyLabel: "KM_L91RA2_PH" }
              )}`}
              label="KM_L91RA2_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L91RA2",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L91RA3_RUN", healthyLabel: "KM_L91RA3_PH" }
              )}`}
              label="KM_L91RA3_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L91RA3",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L91RA4_RUN", healthyLabel: "KM_L91RA4_PH" }
              )}`}
              label="KM_L91RA4_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L91RA4",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L91RA5_RUN", healthyLabel: "KM_L91RA5_PH" }
              )}`}
              label="KM_L91RA5_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L91RA5",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L91RA6_RUN", healthyLabel: "KM_L91RA6_PH" }
              )}`}
              label="KM_L91RA6_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L91RA6",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L91RA7"
              )}`}
              label="KM_L91RA7_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L91RA7",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L91RA8"
              )}`}
              label="KM_L91RA8_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L91RA8",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L91RA9_RUN"
              )}`}
              label="KM_L91RA9_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L91RA9",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L91RAA"
              )}`}
              label="KM_L91RAA_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L91RAA",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L91RAB"
              )}`}
              label="KM_L91RAB_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L91RAB",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "KM_L91RAC"
              )}`}
              label="KM_L91RAC_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L91RAC",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  healthyLabel: "KM_L41SD3_PH",
                  closeLabel: "KM_L41SD3_CLS",
                  openLabel: "KM_L41SD3_OLS",
                }
              )}`}
              label="KM_L41SD3_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark p-1",
              label: "L41SD3",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  healthyLabel: "KM_L41LD1_PH",
                  closeLabel: "KM_L41LD1_CLS",
                  openLabel: "KM_L41LD1_OLS",
                }
              )}`}
              label="KM_L41LD1_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark p-1",
              label: "L41LD1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "KM_L91RAD"
            )}`}
            label="KM_L91RAD_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L91RAD",
            }}
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "KM_L91RAE"
            )}`}
            label="KM_L91RAE_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L91RAE",
            }}
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "KM_L91RAF"
            )}`}
            label="KM_L91RAF_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L91RAF",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <div className="d-flex ">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  healthyLabel: "KM_L91SG2_PH",
                  closeLabel: "KM_L91SG2_CLS",
                  openLabel: "KM_L91SG2_OLS",
                }
              )}`}
              label="KM_L91SG2_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L91SG2",
            }}
          />
        </div>
        <div className="d-flex ">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  healthyLabel: "KM_L91SG3_PH",
                  closeLabel: "KM_L91SG3_CLS",
                  openLabel: "KM_L91SG3_OLS",
                }
              )}`}
              label="KM_L91SG3_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L91SG3",
            }}
          />
        </div>
        <div className="d-flex ">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  healthyLabel: "KM_L91SG4_PH",
                  closeLabel: "KM_L91SG4_CLS",
                  openLabel: "KM_L91SG4_OLS",
                }
              )}`}
              label="KM_L91SG4_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L91SG4",
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
                  healthyLabel: "KM_L51LD1_PH",
                  closeLabel: "KM_L51LD1_CLS",
                  openLabel: "KM_L51LD1_OLS",
                }
              )}`}
              label="KM_L51LD1_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark p-1",
              label: "L51LD1",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  healthyLabel: "KM_L51SD1_PH",
                  closeLabel: "KM_L51SD1_CLS",
                  openLabel: "KM_L51SD1_OLS",
                }
              )}`}
              label="KM_L51SD1_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark p-1",
              label: "L51SD1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "KM_L41SD1_PH",
                closeLabel: "KM_L41SD1_CLS",
                openLabel: "KM_L41SD1_OLS",
              }
            )}`}
            label="KM_L41SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "L41SD1",
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
            label: "L41P1",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "KM_L41LD2_PH",
                closeLabel: "KM_L41LD2_CLS",
                openLabel: "KM_L41LD2_OLS",
              }
            )}`}
            label="KM_L41LD2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "L41LD2",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="dot-square-line d-flex flex-column align-items-center">
          {/* <div className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KM_L42SD2_OLS", closeLabel: "KM_L42SD2_CLS" })}`}></div> */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "KM_L41SD2_PH",
                closeLabel: "KM_L41SD2_CLS",
                openLabel: "KM_L41SD2_OLS",
              }
            )}`}
            label="KM_L41SD2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "L41SD2",
          }}
        />
      </div>
      <div className="position-absolute single-text-30 text-center d-flex">
        <BlackContainer
          data={{
            label: "KM_L41FN4_SI",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "KM_L41FN4_II",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L41FN4_JO1",
              useClass: "greenTxt mt-1",
              unit: "Kw",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L41FN4",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L41FN4",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "KM_L41BF2_PT1",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41BF2_DPT",
            useClass: "greenTxt ml-4",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "KM_L41LD1",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41LD1_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "KM_L41LD2_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41LD2",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <BlackContainer
          data={{
            label: "KM_L91SC3_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L91SC2_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L91SC1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <BlackContainer
          data={{
            label: "KM_L91SC4_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L91SC5_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <BlackContainer
          data={{
            label: "KM_451AM3_CO",
            useClass: "greenTxt ",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_451AM4_CO",
            useClass: "greenTxt ",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_481AM1_CO",
            useClass: "greenTxt ",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L91SC6_II",
          useClass: "greenTxt position-absolute single-text-38",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L91SC8_II",
          useClass: "greenTxt position-absolute single-text-39",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L91SC7_II",
          useClass: "greenTxt position-absolute single-text-40",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-41 d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "L91SM1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L91SM1_RUN", healthyLabel: "KM_L91SM1_PH" }
          )}`}
          label="KM_L91SM1_RUN"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-42 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L41FN4_RUN", healthyLabel: "KM_L41FN4_PH" }
          )}`}
          label="KM_L41FN4_RUN"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L41FN4",
          }}
        />
      </div>
      <div className="position-absolute single-text-43 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L51FN1_RUN", healthyLabel: "KM_L51FN1_PH" }
          )}`}
          label="KM_L51FN1_RUN"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L51FN1",
          }}
        />
      </div>
      <div className="position-absolute single-text-44  d-flex">
        <div>
          <BlackContainer
            data={{
              label: "KM_L51FN1_PID",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L51LD1_ZT",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L51LD1",
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
            label: "KM_L41WP1_M1",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41WP1_M1",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-46 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "KM_L41WP2_M1",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L41WP2_M1",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L41WP2_TE1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-47 d-flex flex-column ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L41WP1_M1_RUN", healthyLabel: "KM_L41WP1_M1_PH" }
          )}`}
          label="KM_L41WP1_M1_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L41WP2_M1_RUN", healthyLabel: "KM_L41WP2_M1_PH" }
          )}`}
          label="KM_L41WP2_M1_RUN"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-48 d-flex flex-column ">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L41FN1_RUN", healthyLabel: "KM_L41FN1_PH" }
            )}`}
            label="KM_L41FN1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L41FN1",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L41FN2_RUN", healthyLabel: "KM_L41FN2_PH" }
            )}`}
            label="KM_L41FN2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L41FN2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-49 d-flex flex-column">
        <BlackContainer
          data={{
            label: "KM_L41WI1_FT",
            useClass: "greenTxt mt-1",
            unit: "m3/hr",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "KM_L41MD1_XT1",
              useClass: "greenTxt ",
              unit: "mm/sec",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L41KM1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L41KM1_TT1",
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
            label: "KM_L41FN1_PT1",
            useClass: "greenTxt ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41FN1_PT2",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41FN1_PT3",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-51  ">
        <BlackContainer
          data={{
            label: "KM_L41MD1_JI",
            useClass: "greenTxt ",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41MD1_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L41BC1_II",
          useClass: "greenTxt position-absolute single-text-52",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-53 d-flex ">
        <div>
          <BlackContainer
            data={{
              label: "KM_L41SR1_J01",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L41SR1_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L41MD2",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />{" "}
          <BlackContainer
            data={{
              label: "KM_L41MD2",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L41MD2_RUN", healthyLabel: "KM_L41MD2_PH" }
            )}`}
            label="KM_L41MD2_RUN"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-54">
        <BlackContainer
          data={{
            label: "KM_L41WF1_SI",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41WF1_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41WF1_FR",
            useClass: "greenTxt mt-1",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41WF1_SSP",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-55 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "KM_L21BF3_DPT",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L21BF3_PT",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KM_L41BF1_DPT",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KM_L41BF1_PT1",
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
            label: "KM_L41KM1_TT2",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41KM1_PT2",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41KM1_PT3",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L21BC1_II",
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
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-60",
          label: "L21FN3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-61",
          label: "L21RA3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-62",
          label: "L41FN3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-63",
          label: "L41RA1",
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
            label: "L61BI1",
          }}
        />
      </div>
      <div className="position-absolute single-text-66 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L61SG1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L61SG2",
          }}
        />
      </div>
      <div className="position-absolute single-text-67 ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          {/* <div className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KM_L62SG1_OLS", closeLabel: "KM_L62SG1_CLS" })}`}></div> */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "KM_L61SG1_PH",
                closeLabel: "KM_L61SG1_CLS",
                openLabel: "KM_L61SG1_OLS",
              }
            )}`}
            label="KM_L61SG1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-68 ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          {/* <div className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "KM_L62SG2_OLS", closeLabel: "KM_L62SG2_CLS" })}`}></div> */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "KM_L61SG2_PH",
                closeLabel: "KM_L61SG2_CLS",
                openLabel: "KM_L61SG2_OLS",
              }
            )}`}
            label="KM_L61SG2_OLS"
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
                healthyLabel: "KM_L61SG3_PH",
                closeLabel: "KM_L61SG3_CLS",
                openLabel: "KM_L61SG3_OLS",
              }
            )}`}
            label="KM_L61SG3_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      {/* <div className="position-absolute single-text-70">
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
            label: "L61SG3",
          }}
        />
      </div> */}
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

      <div className="position-absolute single-text-77 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "GB Lubrication",
            }}
          />
        </div>
        <div className="d-flex align-items-center">
          <div>
            <div className="d-flex align-items-center justify-content-center mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "L41PU1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot ml-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "KM_L41PU1_RUN", healthyLabel: "KM_L41PU1_PH" }
                )}`}
                label="KM_L41PU1_RUN"
                text=""
              />
            </div>
            <div className="d-flex align-items-center mt-2 justify-content-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "L41PU2",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot ml-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "KM_L41PU2_RUN", healthyLabel: "KM_L41PU2_PH" }
                )}`}
                label="KM_L41PU2_RUN"
                text=""
              />
            </div>
          </div>
          <div className="ml-3">
            <BlackContainer
              data={{
                label: "KM_L41LQ1_FT1",
                useClass: "greenTxt mt-1",
                unit: "Lpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L41LQ1_FT2",
                useClass: "greenTxt mt-1",
                unit: "Lpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L41GB1_PT",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L41LQ1_TT1",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-79 border p-1">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "RollersLowering Auto",
            }}
          />
          <div className="d-flex mt-3">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L41PU3_RUN", healthyLabel: "KM_L41PU3_PH" }
              )}`}
              label="KM_L41PU3_RUN"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "L41PU3",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "KM_L41PU4_RUN", healthyLabel: "KM_L41PU4_PH" }
              )}`}
              label="KM_L41PU4_RUN"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "L41PU4",
              }}
            />
          </div>
        </div>
        <div className="ml-2">
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
                label: "KM_HYDTENS_GRPSP03",
                useClass: "greenTxt ml-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L41HT1_ZT01",
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
                label: "KM_L41HT1_PT1",
                useClass: "greenTxt ml-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L41HT1_ZT02",
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
                label: "KM_L41HT1_PT2",
                useClass: "greenTxt ml-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "KM_L41HT1_ZT03",
                useClass: "greenTxt ml-2",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-81 d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "L41RF1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L41RF1_RUN", healthyLabel: "KM_L41RF1_PH" }
          )}`}
          label="KM_L41RF1_RUN"
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
              useClass: "text-dark",
              label: "L41K1",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column align-items-end position-absolute single-text-87">
        {/* <MotorCircleDigitalTag className={`bg-secondary text-dark digital-tag ${useColorStatus("KM_L22MT1_PH")}`} label="KM_L22MT1_PH" text="PH" /> */}
        <MotorCircleDigitalTag
          className={`bg-secondary text-dark digital-tag ${useColorStatus(
            "KM_L21MT1_PH"
          )}`}
          label="KM_L21MT1_PH"
          text="PH"
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "L21MT1",
            }}
          />
          <MotorCircleDigitalTag
            className={`bg-secondary text-dark digital-tag ${useColorStatus(
              "KM_L21MT1_MD"
            )}`}
            label="KM_L21MT1_MD"
            text="MD"
          />
        </div>

        <div className="bg-secondary text-dark">ZSS</div>
      </div>
      <div className="position-absolute single-text-89 d-flex text-center">
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L21DG1_CLS"
            )}`}
            label="KM_L21DG1_OLS"
            text="CLS"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L22DG1_OLS"
            )}`}
            label="KM_L22DG1_OLS"
            text="OLS"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-90">
      <BlackContainer
        data={{
          label: "KM_L21BC4_II",
          useClass: "greenTxt",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary mt-3 ml-4",
            label: "ZSS",
          }}
        />
      </div>
  
      <div className="d-flex position-absolute single-text-91">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary",
            label: "ZSS",
          }}
        />
        <div className="bg-secondary">
          <i class="fa-solid fa-volume-off"></i>
        </div>
      </div>
      <div className="position-absolute single-text-92 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L41EX1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L41EX2",
          }}
        />
      </div>
      <div className="position-absolute single-text-93">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary",
            label: "ZSS",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41RF1_II",
            useClass: "greenTxt mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41_HT1_AVGPO1_FB",
            useClass: "greenTxt mt-3 ml-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-95 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L61SG2_CLS")}`}
            label="KM_L61SG2_CLS"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L61SG2_OLS")}`}
            label="KM_L61SG2_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-96 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L61SG1_CLS")}`}
            label="KM_L61SG1_CLS"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L61SG1_OLS")}`}
            label="KM_L61SG1_OLS"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-98">
        <MimicCaret
          parentClass="d-flex tringle-item  justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block  grey-color-caret`}
        />
        <div className="mt-1 d-flex">
          <MotorCircleDigitalTag className={`square digital-tag`} text="SV1" />
          <MotorCircleDigitalTag
            className={`bg-secondary ml-2 digital-tag ${useColorStatus(
              "KM_L41WI1_PS01"
            )}`}
            label="KM_L41WI1_PS01"
            text="PS1"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-99 d-flex">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block  grey-color-caret`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SV2",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-100 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "COMP AIR",
          }}
        />
        <MotorCircleDigitalTag
          className={`bg-secondary digital-tag ${useColorStatus(
            "KM_L41WI1_PS02"
          )}`}
          label="KM_L41WI1_PS02"
          text="PS2"
        />
      </div>
      <div className="text-center position-absolute single-text-101 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L41SD2_EXCLS")}`}
          label="KM_L41SD2_EXCLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L41SD2_EXOLS")}`}
          label="KM_L41SD2_EXOLS"
        />
      </div>
      <div className="text-center position-absolute single-text-102 d-flex">
        {/* <div className={`dot ${useSKCWColorStatus("581SR1_MR")}`}>P</div> */}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KM_L41SD2_MAG_CMD")}`}
          label="KM_L41SD2_MAG_CMD"
          text="P"
        />
      </div>
      <div className="text-center position-absolute single-text-103 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L41BF2_LS1"
          )} ml-2`}
          label="KM_L41BF2_LS1"
          text="LS1"
        />

        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L41BF2_LS2"
          )} ml-2`}
          label="KM_L41BF2_LS2"
          text="LS2"
        />

        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L41BF2_LS3"
          )} ml-2`}
          label="KM_L41BF2_LS3"
          text="LS3"
        />

        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L41BF2_LS4"
          )} ml-2`}
          label="KM_L41BF2_LS4"
          text="LS4"
        />

        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L41BF2_LS5"
          )} ml-2`}
          label="KM_L41BF2_LS5"
          text="LS5"
        />

        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L41BF2_LS6"
          )} ml-2`}
          label="KM_L41BF2_LS6"
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
      <div className=" position-absolute single-text-105 align-items-center">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <div
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                openLabel: "KM_L92SG1_SOV_OLS",
                closeLabel: "KM_L92SG1_SOV_CLS",
              }
            )}`}
          ></div>
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L91SG1",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-106 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L91SG1_CLS")}`}
          label="KM_L91SG1_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L91SG1_OLS")}`}
          label="KM_L91SG1_OLS"
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
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block  grey-color-caret`}
        />
      </div>
      <div className="text-center position-absolute single-text-108 d-flex">
        <div className="d-flex flex-column justify-content-between">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L91SG2_ECLS")}`}
            label="KM_L91SG2_ECLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L91SG2_EOLS")}`}
            label="KM_L91SG2_EOLS"
          />
        </div>
        <div className="d-flex flex-column justify-content-between">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L91SG3_ECLS")}`}
            label="KM_L91SG3_ECLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L91SG3_EOLS")}`}
            label="KM_L91SG3_EOLS"
          />
        </div>
        <div className="d-flex flex-column justify-content-between">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L91SG4_ECLS")}`}
            label="KM_L91SG4_ECLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L91SG4_EOLS")}`}
            label="KM_L91SG4_EOLS"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-109 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L91GA7_CLS")}`}
            label="KM_L91GA7_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L91GA7_OLS"
            )} ml-3`}
            label="KM_L91GA7_OLS"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L91GA8_CLS")}`}
            label="KM_L91GA8_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L91GA8_OLS"
            )} ml-3`}
            label="KM_L91GA8_OLS"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L91GA9_CLS")}`}
            label="KM_L91GA9_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L91GA9_OPS"
            )} ml-3`}
            label="KM_L91GA9_OPS"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-110 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L41SD1_EXCLS")}`}
          label="KM_L41SD1_EXCLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L41SD1_EXOLS")}`}
          label="KM_L41SD1_EXOLS"
        />
      </div>
      <div className="text-center position-absolute single-text-111 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KM_L41SD1_MAG_CMD")}`}
          label="KM_L41SD1_MAG_CMD"
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
          className={`dot digital-tag ${useColorStatus("KM_L41SD3_MAG_CMD")}`}
          label="KM_L41SD3_MAG_CMD"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-114 ">
        <div className="bg-secondary text-center px-1">
          <i class="fa-solid fa-volume-off"></i>
        </div>
      </div>
      <div className="text-center position-absolute single-text-115 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KM_L41MD1_M2_RUN", healthyLabel: "KM_L41MD1_M2_PH" }
          )}`}
          label="KM_L41MD1_M2_RUN"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-116">
        <BlackContainer
          data={{
            label: "KM_L41WF1_SI",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41WF2_FR",
            useClass: "greenTxt mt-1",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41WF2_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KM_L41WF2_SSP",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-117">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KM_L51SD1_ECLS")}`}
          label="KM_L51SD1_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "KM_L51SD1_EOLS"
          )} ml-3`}
          label="KM_L51SD1_EOLS"
        />
      </div>
      <div className="d-flex position-absolute single-text-118">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L21MS1",
          }}
        />
        <div className="bg-secondary px-2 ml-2 text-center">
          <i class="fa-solid fa-volume-off"></i>
        </div>
      </div>
      <div className="bg-secondary px-2 text-center position-absolute single-text-119">
        <i class="fa-solid fa-volume-off"></i>
      </div>
      <div className="d-flex position-absolute single-text-120">
        <div className="d-flex ">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L41EX1_OLS1")}`}
            label="KM_L41EX1_OLS1"
            text="L1"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L41EX1_OLS2"
            )} ml-2`}
            label="KM_L41EX1_OLS2"
            text="L2"
          />
        </div>
        <div className="d-flex ">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KM_L41EX2_OLS1")}`}
            label="KM_L41EX2_OLS1"
            text="L1"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "KM_L41EX2_OLS2"
            )} ml-2`}
            label="KM_L41EX2_OLS2"
            text="L2"
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "KM_L41SR1_SI",
          useClass: "greenTxt position-absolute single-text-121",
          unit: "RPM",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-122">
        <div className="d-flex ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "KM_L41AD1_RUN", healthyLabel: "KM_L41AD1_PH" }
            )}`}
            label="KM_L41AD1_RUN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "KM_L41AD1_AD1_ZS"
            )} ml-3`}
            label="KM_L41AD1_RUN"
            text="ZS"
          />
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "L41AD1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-123">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary",
              label: "N2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary mt-1",
              label: "CO2 BF2",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary",
              label: "CO2 BINS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary mt-1",
              label: "CO2 MILL",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-124">
        <span className="dot grey-color">M</span>
        <MotorCircleDigitalTag
          className={`ml-3 bg-secondary text-dark digital-tag ${useColorStatus(
            "KM_L21MT1_FB"
          )}`}
          label="KM_L21MT1_FB"
          text="FS"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-125",
          label: "Reject Bin",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L41WP1_TE1",
          useClass: "greenTxt position-absolute single-text-126",
          unit: "℃",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KM_L51FN1",
          useClass: "greenTxt position-absolute single-text-127",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
    </div>
  );
};

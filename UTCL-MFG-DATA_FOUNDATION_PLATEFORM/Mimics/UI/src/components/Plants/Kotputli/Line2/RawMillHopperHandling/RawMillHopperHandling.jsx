import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";
import {
  useColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";
export const RawMillHopperHandling = () => {
  return (
    <div className="RMHopperHandlingkotputli w-100 h-100 position-relative">
      <div className="position-absolute pipe-1 d-flex z-index">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "312BC1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_312BC1_RUN", healthyLabel: "RM_312BC1_PH" }
            )}`,
            secondCircleLabel: "RM_312BC1_RUN",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_312BC1_II",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute pipe-2 d-flex z-index">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "312BC2" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_312BC2_RUN", healthyLabel: "RM_312BC2_PH" }
            )}`,
            secondCircleLabel: "RM_312BC2_RUN",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_312BC2_II",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute pipe-3 d-flex z-index">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "312BC3" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_312BC3_RUN", healthyLabel: "RM_312BC3_PH" }
            )}`,
            secondCircleLabel: "RM_312BC3_RUN",
          }}
        />{" "}
        <BlackContainer
          data={{
            label: "RMH_312BC3_II",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute pipe-4 d-flex z-index">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "312BC4" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_312BC4_RUN", healthyLabel: "RM_312BC4_PH" }
            )}`,
            secondCircleLabel: "RM_312BC4_RUN",
          }}
        />{" "}
        <BlackContainer
          data={{
            label: "RMH_312BC4_II",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute pipe-5 z-index">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "312BC5" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_312BC5_RUN", healthyLabel: "RM_312BC5_PH" }
            )}`,
            secondCircleLabel: "RM_312BC5_RUN",
          }}
        />
        <div className="d-flex justify-content-end">
          <BlackContainer
            data={{
              label: "RMH_312BC5_II",
              useClass: "greenTxt mt-2 mr-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: ``,
          firstCircleText: "",
        }}
      />
      <div className="position-absolute pipe-7 d-flex z-index">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "322BC1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RMH_322BC1_RUN", healthyLabel: "RMH_322BC1_PH" }
            )}`,
            secondCircleLabel: "RMH_322BC1_RUN",
          }}
        />{" "}
        <BlackContainer
          data={{
            label: "RMH_322BC1_II",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute pipe-8 d-flex z-index">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "322BC2" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RMH_322BC2_RUN", healthyLabel: "RMH_322BC2_PH" }
            )}`,
            secondCircleLabel: "RMH_322BC2_RUN",
          }}
        />{" "}
        <BlackContainer
          data={{
            label: "RMH_322BC2_II",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute pipe-9 d-flex z-index">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "322BC3" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RMH_322BC3_RUN", healthyLabel: "RMH_322BC3_PH" }
            )}`,
            secondCircleLabel: "RMH_322BC3_RUN",
          }}
        />{" "}
        <BlackContainer
          data={{
            label: "RMH_322BC3_II",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute pipe-10 d-flex z-index">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "322BC4" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RMH_322BC4_RUN", healthyLabel: "RMH_322BC4_PH" }
            )}`,
            secondCircleLabel: "RMH_322BC4_RUN",
          }}
        />{" "}
        <BlackContainer
          data={{
            label: "RMH_322BC4_II",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "NA",
              healthyLabel: "NA",
            }
          )}`,
          secondCircleLabel: "NA",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "NA",
              healthyLabel: "NA",
            }
          )}`,
          secondCircleLabel: "NA",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-13"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "NA",
              healthyLabel: "NA",
            }
          )}`,
          secondCircleLabel: "NA",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-14"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "NA",
              healthyLabel: "NA",
            }
          )}`,
          secondCircleLabel: "NA",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-15"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "NA",
              healthyLabel: "NA",
            }
          )}`,
          secondCircleLabel: "NA",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-16"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "332BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RMH_332BC1_RUN", healthyLabel: "RMH_332BC1_PH" }
          )}`,
          secondCircleLabel: "RMH_332BC1_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-17"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "332BC2" }}
        secondCircle={{
          secondCircleClass: ``,
          firstCircleText: "",
        }}
      />
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
      <div className="yellowline-Hr rightarrow position-absolute pipe-50"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-51"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-52"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-53"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-54"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-55"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-56"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-57"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-58"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-59"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-60"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-61"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-62"></div>
      <div className="yellowline-Hr position-absolute pipe-63"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-64"></div>
      <div className="yellowline-Vr position-absolute pipe-65"></div>
      <div className="yellowline-Hr position-absolute pipe-66"></div>
      <div className="yellowline-Vr position-absolute pipe-67"></div>
      <div className="yellowline-Hr position-absolute pipe-68"></div>
      <div className="yellowline-Vr position-absolute pipe-69"></div>
      <div className="yellowline-Hr position-absolute pipe-70"></div>
      <div className="yellowline-Vr position-absolute pipe-71"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-72"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-73"></div>
      <div className="yellowline-Hr position-absolute pipe-74"></div>
      <div className="yellowline-Vr position-absolute pipe-75"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-76"></div>

      <div className=" position-absolute single-text-1 d-flex">
        <div className="containerImage">
          <div className="p-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("RMH_332HP1_LS")}`}
              label="RMH_332HP1_LS"
              text="L"
            />
          </div>
          <div className="text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LIME STONE",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "332HP1",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_BIW",
                useClass: "greenTxt mt-2",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="containerImage">
          <div className="p-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("RMH_332HP2_LS")}`}
              label="RMH_332HP2_LS"
              text="L"
            />
          </div>
          <div className="text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "LIME STONE",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "332HP2",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF2_BIW",
                useClass: "greenTxt mt-2",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="containerImage">
          <div className="p-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("RMH_332HP3_LS")}`}
              label="RMH_332HP3_LS"
              text="L"
            />
          </div>
          <div className="text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "ADDITIVE 1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "332HP3",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF3_BIW",
                useClass: "greenTxt mt-2",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="containerImage">
          <div className="p-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("RMH_332HP4_LS")}`}
              label="RMH_332HP4_LS"
              text="L"
            />
          </div>
          <div className="text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "ADDITIVE 2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "332HP4",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF4_BIW",
                useClass: "greenTxt mt-2",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="containerImage">
          <div className="p-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("RMH_332HP5_LS")}`}
              label="RMH_332HP5_LS"
              text="L"
            />
          </div>
          <div className="text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "ADDITIVE 2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "332HP5",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF5_BIW",
                useClass: "greenTxt mt-2",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary p-1 ml-2 mt-1",
            label: "BYP",
          }}
        />
        <div className="d-flex">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "RM_312RA1"
              )}`}
              label="RM_312RA1_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM_312FN1_RUN", healthyLabel: "RM_312FN1_PH" }
              )}`}
              label="RM_312FN1_RUN"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "312BF2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary p-1 ml-2 mt-1",
            label: "BYP",
          }}
        />
        <div className="d-flex">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "RM_312RA2"
              )}`}
              label="RM_312RA2_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM_312FN2_RUN", healthyLabel: "RM_312FN2_PH" }
              )}`}
              label="RM_312FN2_RUN"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "322BF1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary p-1 ml-2 mt-1",
            label: "BYP",
          }}
        />
        <div className="d-flex">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "RM_322RA1"
              )}`}
              label="RM_322RA1_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM_322FN1_RUN", healthyLabel: "RM_322FN1_PH" }
              )}`}
              label="RM_322FN1_RUN"
            />
          </div>
          <div className=" ml-3 mt-2">
            <BlackContainer
              data={{
                label: "RMH_322FN1_II",
                useClass: "greenTxt ",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_322FN1_SI",
                useClass: "greenTxt mt-1",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "332BF1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary p-1 ml-2 mt-1",
            label: "BYP",
          }}
        />
        <div className="d-flex">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "RM_332RA1"
              )}`}
              label="RM_332RA1_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM_332FN1_RUN", healthyLabel: "RM_332FN1_PH" }
              )}`}
              label="RM_332FN1_RUN"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_312BC2_PCSL1")}`}
          label="RMH_312BC2_PCSL1"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_312BC2_DE_MG")}`}
          label="RMH_312BC2_DE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_312BC2_NDE_MG")}`}
          label="RMH_312BC2_NDE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_312BC2_VGTU")}`}
          label="RMH_312BC2_VGTU"
          text="V"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_312BC2_PCSL2")}`}
          label="RMH_312BC2_PCSL2"
          text="S"
        />
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_312BC4_DE_MG")}`}
          label="RMH_312BC4_DE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_312BC4_NDE_MG")}`}
          label="RMH_312BC4_NDE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="Z"
        />
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_312BC5_DE_MG")}`}
          label="RMH_312BC5_DE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_312BC5_NDE_MG")}`}
          label="RMH_312BC5_NDE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="Z"
        />
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_322BC4_NDE_MG")}`}
          label="RMH_322BC4_NDE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_322BC4_DE_MG")}`}
          label="RMH_322BC4_DE_MG"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_322BC1_NDE_MG")}`}
          label="RMH_322BC1_NDE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_322BC1_NDE_MG")}`}
          label="RMH_322BC1_NDE_MG"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <MotorCircleDigitalTag
          className={`dot mt-2 digital-tag ${useColorStatus(
            "RMH_322BC3_DE_MG"
          )}`}
          label="RMH_322BC3_DE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-2 digital-tag ${useColorStatus(
            "RMH_322BC3_NDE_MG"
          )}`}
          label="RMH_322BC3_NDE_MG"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_322DG2_OLS")}`}
          label="RMH_322DG2_OLS"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_322DG2_CLS")}`}
          label="RMH_322DG2_CLS"
          text="L"
        />
      </div>
      <div className="position-absolute single-text-13 ">
        <MotorCircleDigitalTag
          className={`dot mt-2 digital-tag ${useColorStatus(
            "RMH_332BC2_NDE_MG"
          )}`}
          label="RMH_332BC2_NDE_MG"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_332MS1_BSS")}`}
          label="RMH_332MS1_BSS"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="Z"
        />
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_332BC1_DE_MG")}`}
          label="RMH_332BC1_DE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_332BC1_NDE_MG")}`}
          label="RMH_332BC1_NDE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="Z"
        />
      </div>
      <div className="position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "332BC2",
          }}
        />
        <div className="roller-drum d-flex justify-content-center align-items-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_332MS1_RUN", healthyLabel: "RM_332MS1_PH" }
            )}`}
            label="RM_332MS1_RUN"
            text="M"
          />
        </div>
      </div>
      <div className="img-98 position-absolute single-text-17"></div>
      <div className=" position-absolute single-text-18 d-flex">
        <div className="grn-gry-img"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "332DG1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-19 d-flex">
        <div className="grn-gry-img"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "332DG2",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-20",
          label: "FROM LIME STONE STOCKPILE",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-21",
          label: "FROM LINE 1 HOPPER BUILDING",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-22",
          label: "TO RAW MILL",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-23",
          label: "FOR CALIBRATION",
        }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-24",
          label: "TO LINE 1 HOPPER",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-25",
          label: "312FN1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-26",
          label: "312RA1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-27",
          label: "312BC2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-28",
          label: "312FN2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-29",
          label: "312RA2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-30",
          label: "332HP1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-31",
          label: "332FN1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-32",
          label: "332RA1",
        }}
      />
      <div className="position-absolute single-text-33 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "332V11",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "332V12",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "332V13",
          }}
        />
      </div>
      <div className="position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "RM_322DG1",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_322DG1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-35">
        <BlackContainer
          data={{
            label: "RMH_312BF1_DPT",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_312BF1_PT1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-36">
        <BlackContainer
          data={{
            label: "RMH_322BF1_DPT",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_322BF1_PT1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <BlackContainer
          data={{
            label: "RMH_312BF2_DPT",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_312BF2_DPT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-38">
        <BlackContainer
          data={{
            label: "RMH_312FN2_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_312FN2_SI",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_312FN2_II",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "RMH_312FN2_SI",
          useClass: "greenTxt position-absolute single-text-39",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-40 d-flex">
        <div>
          <div className="d-flex text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF1_FR",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_FR",
                useClass: "greenTxt ml-2",
                unit: "Tph",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF1_SI",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_SI",
                useClass: "greenTxt ml-2",
                unit: "Rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF1_ITA",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF1_ITA",
                useClass: "greenTxt ml-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF1_SP",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_332WF1_SP",
                useClass: "greenTxt ml-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF2_FR",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF2_FR",
                useClass: "greenTxt ml-2",
                unit: "Tph",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF2_SI",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF2_SI",
                useClass: "greenTxt ml-2",
                unit: "Rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF2_ITA",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF2_ITA",
                useClass: "greenTxt ml-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF2_SP",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_332WF2_SP",
                useClass: "greenTxt ml-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF3_FR",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF3_FR",
                useClass: "greenTxt ml-2",
                unit: "Tph",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF3_SI",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF3_SI",
                useClass: "greenTxt ml-2",
                unit: "Rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF3_ITA",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF3_ITA",
                useClass: "greenTxt ml-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF3_SP",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_332WF3_SP",
                useClass: "greenTxt ml-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF4_FR",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF4_FR",
                useClass: "greenTxt ml-2",
                unit: "Tph",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF4_SI",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF4_SI",
                useClass: "greenTxt ml-2",
                unit: "Rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF4_ITA",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF4_ITA",
                useClass: "greenTxt ml-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF4_SP",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_332WF4_SP",
                useClass: "greenTxt ml-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF5_FR",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF5_FR",
                useClass: "greenTxt ml-2",
                unit: "Tph",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF5_SI",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF5_SI",
                useClass: "greenTxt ml-2",
                unit: "Rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF5_ITA",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_332WF5_ITA",
                useClass: "greenTxt ml-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "332WF5_SP",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_332WF5_SP",
                useClass: "greenTxt ml-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-41">
        <BlackContainer
          data={{
            label: "RMH_332MS1_E",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_332MS1_II",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-42">
        <BlackContainer
          data={{
            label: "RMH_332BF1_DPT",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_332BF1_PT1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "RMH_332FN1_II",
          useClass: "greenTxt position-absolute single-text-43",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "RMH_332FN1_SI",
          useClass: "greenTxt position-absolute single-text-44",
          unit: "rpm",
          unitColor: "unitColor",
        }}
      />
      <div className=" position-absolute single-text-45">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className=" position-absolute single-text-46">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "RM_322DG1_OLS",
                closeLabel: "RM_322DG1_CLS",
                healthyLabel: "RM_322DG1_PH",
              }
            )}`}
            label="RM_322DG1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
    </div>
  );
};

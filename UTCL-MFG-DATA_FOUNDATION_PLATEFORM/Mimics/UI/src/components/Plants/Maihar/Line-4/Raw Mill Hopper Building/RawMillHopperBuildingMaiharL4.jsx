import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";
import {
  useColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
  useImgColorStatus,
  useImgColorStatusForNewPlantScreen,
} from "../../../../../utils";
export const RawMillHopperBuildingMaiharL4 = () => {
  return (
    <div className="RMHopperHandlingkotputli RMHBmaihar w-100 h-100 position-relative">
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
      <div className="yellowline-Vr downArrow position-absolute pipe-48"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-49"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-55"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-56"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-57"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-58"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-59"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-60"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-61"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-73"></div>
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Hr position-absolute line-5"></div>

      <div className="position-absolute pipe-1">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          text={{ useClass: "text-dark mx-auto", label: "314BC1" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            // secondCircleLabel: "RM_314BC1_RUN",
          }}
        />
      </div>
      <div className="position-absolute pipe-2">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          text={{ useClass: "text-dark mx-auto", label: "314BC2" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            // secondCircleLabel: "RM_314BC2_RUN",
          }}
        />
      </div>
      <div className="position-absolute pipe-3">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          text={{ useClass: "text-dark mx-auto", label: "314BC3" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            // secondCircleLabel: "RM_314BC3_RUN",
          }}
        />
      </div>
      <div className="position-absolute pipe-4">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          text={{ useClass: "text-dark mx-auto", label: "314BC4" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            // secondCircleLabel: "RM_314BC4_RUN",
          }}
        />
      </div>
      <div className="position-absolute pipe-5">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          text={{ useClass: "text-dark mx-auto", label: "314BC5" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            // secondCircleLabel: "RM_314BC5_RUN",
          }}
        />
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute pipe-6" />
      <div className="position-absolute pipe-7">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          text={{ useClass: "text-dark mx-auto", label: "324BC1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RMH_324BC1_RUN", healthyLabel: "RMH_324BC1_PH" }
            )}`,
            secondCircleLabel: "RMH_324BC1_RUN",
          }}
        />
      </div>
      <div className="position-absolute pipe-8">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          text={{ useClass: "text-dark mx-auto", label: "324BC2" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RMH_324BC2_RUN", healthyLabel: "RMH_324BC2_PH" }
            )}`,
            secondCircleLabel: "RMH_324BC2_RUN",
          }}
        />
      </div>
      <div className="position-absolute pipe-9">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          text={{ useClass: "text-dark mx-auto", label: "324BC3" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RMH_324BC3_RUN", healthyLabel: "RMH_324BC3_PH" }
            )}`,
            secondCircleLabel: "RMH_324BC3_RUN",
          }}
        />
      </div>
      <div className="position-absolute pipe-10">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          text={{ useClass: "text-dark mx-auto", label: "324BC4" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "RMH_324BC4_PH", runLabel: "RMH_324BC4_RUN" }
            )}`,
            secondCircleLabel: "RMH_324BC4_RUN",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        text={{ useClass: "text-dark mx-auto", label: "334WF1" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          // secondCircleLabel: "NA",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        text={{ useClass: "text-dark mx-auto", label: "334WF2" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          // secondCircleLabel: "NA",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-13"
        text={{ useClass: "text-dark mx-auto", label: "334WF3" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          // secondCircleLabel: "NA",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-14"
        text={{ useClass: "text-dark mx-auto", label: "334WF4" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          // secondCircleLabel: "NA",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-15"
        text={{ useClass: "text-dark mx-auto", label: "334WF5" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          // secondCircleLabel: "NA",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-16"
        text={{ useClass: "text-dark mx-auto", label: "334BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RMH_334BC1_RUN", healthyLabel: "RMH_334BC1_PH" }
          )}`,
          secondCircleLabel: "RMH_334BC1_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-17"
        text={{ useClass: "text-dark mx-auto", label: "334BC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              healthyLabel: "RMH_334BC2_PH",
              runLabel: "RMH_334BC2_RUN",
            }
          )}`,
          secondCircleLabel: "RMH_334BC2_RUN",
        }}
      />

      <div className="position-absolute single-text-1 d-flex">
        <div className="containerImage">
          <div className="p-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("RMH_334HP1_LS")}`}
              label="RMH_334HP1_LS"
              text="E"
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
                label: "334HP1",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF1_WI",
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
              className={`dot digital-tag ${useColorStatus("RMH_334HP2_LS")}`}
              label="RMH_334HP2_LS"
              text="E"
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
                label: "334HP2",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF2_WI",
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
              className={`dot digital-tag ${useColorStatus("RMH_334HP3_LS")}`}
              label="RMH_334HP3_LS"
              text="E"
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
                label: "334HP3",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF3_WI",
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
              className={`dot digital-tag ${useColorStatus("RMH_334HP4_LS")}`}
              label="RMH_334HP4_LS"
              text="E"
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
                label: "334HP4",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF4_WI",
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
              className={`dot digital-tag ${useColorStatus("RMH_334HP5_LS")}`}
              label="RMH_334HP5_LS"
              text="E"
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
                label: "334HP5",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF5_WI",
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
            useClass: "text-dark ",
            label: "314BF3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary p-1 ml-2 mt-1",
            label: "BYP",
          }}
        />
        <div className="d-flex">
          <div className="squareplustri pt-2 d-flex flex-column align-items-center justify-content-between">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("RM_314BF3")}`}
              label="RM_314BF3"
            />
            <MotorCircleDigitalTag
              className={`circle-img c-grey-img-2`}
              label="NA"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "RM_314FN3"
              )}`}
              label="RM_314FN3"
            />
            <div className="yellowline-Vr upArrow position-ansolute"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "324BF2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary p-1 ml-2 mt-1",
            label: "BYP",
          }}
        />
        <div className="d-flex">
          <div className="squareplustri pt-2 d-flex flex-column align-items-center justify-content-between">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("RM_324BF2")}`}
              label="RM_324BF2"
            />
            <MotorCircleDigitalTag
              className={`circle-img c-grey-img-2`}
              label="NA"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "RM_324FN2"
              )}`}
              label="RM_324FN2"
            />

            <div className="yellowline-Vr upArrow position-ansolute"></div>
          </div>
          <div className=" ml-3 mt-2">
            <BlackContainer
              data={{
                label: "RMH_324FN2_SI",
                useClass: "greenTxt ",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_324FN2_II",
                useClass: "greenTxt mt-1",
                unit: "%",
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
            label: "334BF1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary p-1 ml-2 mt-1",
            label: "BYP",
          }}
        />
        <div className="d-flex">
          <div className="squareplustri pt-2 d-flex flex-column align-items-center justify-content-between">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("RM_334BF1")}`}
              label="RM_334BF1"
            />
            <MotorCircleDigitalTag
              className={`circle-img c-grey-img-2`}
              label="NA"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "RM_334FN1"
              )}`}
              label="RM_334FN1"
            />

            <div className="yellowline-Vr upArrow position-ansolute"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_314BC2_DE_MG")}`}
          label="RMH_314BC2_DE_MG"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_314BC2_NDE_MG")}`}
          label="RMH_314BC2_NDE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_314BC2_VGTU")}`}
          label="RMH_314BC2_VGTU"
          text="V"
        />
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_314BC4_DE_MG")}`}
          label="RMH_314BC4_DE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_314BC4_NDE_MG")}`}
          label="RMH_314BC4_NDE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_314BC4_ZSS")}`}
          label="RMH_314BC4_ZSS"
          text="Z"
        />
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_314BC5_DE_MG")}`}
          label="RMH_314BC5_DE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_314BC5_NDE_MG")}`}
          label="RMH_314BC5_NDE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_314BC5_ZSS")}`}
          label="RMH_314BC5_ZSS"
          text="Z"
        />
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_324BC4_NDE_MG")}`}
          label="RMH_324BC4_NDE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_324BC4_DE_MG")}`}
          label="RMH_324BC4_DE_MG"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_324BC1_DE_MG")}`}
          label="RMH_324BC1_DE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_324BC1_NDE_MG")}`}
          label="RMH_324BC1_NDE_MG"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <MotorCircleDigitalTag
          className={`dot mt-2 digital-tag ${useColorStatus(
            "RMH_324BC3_DE_MG"
          )}`}
          label="RMH_324BC3_DE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot mt-2 digital-tag ${useColorStatus(
            "RMH_324BC3_NDE_MG"
          )}`}
          label="RMH_324BC3_NDE_MG"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_324DG2_OLS")}`}
          label="RMH_324DG2_OLS"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_324DG2_CLS")}`}
          label="RMH_324DG2_CLS"
          text="L"
        />
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_334MS1_BSS")}`}
          label="RMH_334MS1_BSS"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_334MS1_ZSS")}`}
          label="RMH_334MS1_ZSS"
          text="Z"
        />
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_334BC1_DE_MG")}`}
          label="RMH_334BC1_DE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_334BC1_NDE_MG")}`}
          label="RMH_334BC1_NDE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_334BC1_ZSS")}`}
          label="RMH_334BC1_ZSS"
          text="Z"
        />
      </div>
      <div className="position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "332MS1",
          }}
        />
        <div className="roller-drum d-flex justify-content-center align-items-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("RM_334MS1")}`}
            label="RM_334MS1"
            text="M"
          />
        </div>
      </div>
      <div className="img-98 position-absolute single-text-17"></div>
      <div className=" position-absolute single-text-18 d-flex">
        <MotorCircleDigitalTag
          className={`grn-gry-img digital-tag ${useImgColorStatus(
            "RM_324DG1"
          )}`}
          label="RM_324DG1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "324DG1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-19 d-flex">
        <MotorCircleDigitalTag
          className={`grn-gry-img digital-tag ${useImgColorStatusForNewPlantScreen(
            { openLabel: "RMH_324DG2_OLS", closeLabel: "RMH_324DG2_CLS" }
          )}`}
          label="RMH_324DG2_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "324DG2",
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
          label: "314FN3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-26",
          label: "314RA3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-31",
          label: "334FN1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-32",
          label: "334RA1",
        }}
      />
      <div className="position-absolute single-text-33 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "334V11",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "334V12",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "334V13",
          }}
        />
      </div>
      <div className="position-absolute single-text-40 d-flex">
        <div>
          <div className="d-flex text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "334WF1_FR",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF1_FR",
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
                label: "334WF1_SI",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF1_SI",
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
                label: "334WF1_ITA",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF1_SI",
                useClass: "greenTxt ml-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "334WF1_SP",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_334WF1_SP",
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
                useClass: "text-dark",
                label: "334WF2_FR",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF2_FR",
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
                label: "334WF2_SI",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF2_SI",
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
                label: "334WF2_ITA",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF2_II",
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
                label: "334WF2_SP",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_334WF2_SP",
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
                label: "334WF3_FR",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF3_FR",
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
                label: "334WF3_SI",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF3_SI",
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
                label: "334WF3_ITA",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF3_II",
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
                label: "334WF3_SP",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_334WF3_SP",
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
                label: "334WF4_FR",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF4_FR",
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
                label: "334WF4_SI",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF4_SI",
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
                label: "334WF4_ITA",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF4_II",
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
                label: "RM_334WF4_SP",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_334WF4_SP",
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
                label: "334WF5_FR",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF5_FR",
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
                label: "334WF5_SI",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF5_SI",
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
                label: "334WF5_ITA",
              }}
            />
            <BlackContainer
              data={{
                label: "RMH_334WF5_II",
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
                label: "334WF5_SP",
              }}
            />
            <BlackContainer
              data={{
                label: "RM_334WF5_SP",
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
            label: "RMH_334MS1_E",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_334MS1_II",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-42">
        <BlackContainer
          data={{
            label: "RMH_334BF1_DPT",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_334BF1_PT1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "RMH_334FN1_II",
          useClass: "greenTxt position-absolute single-text-43",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "RMH_334FN1_SI",
          useClass: "greenTxt position-absolute single-text-44",
          unit: "rpm",
          unitColor: "unitColor",
        }}
      />
      <div className=" position-absolute single-text-45">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("RM_314RE1")}`}
            label="RM_314RE1"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      {/* new tags added */}
      <div className="img-98 position-absolute single-text-50"></div>
      <div className="position-absolute single-text-51">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("RM_311RE1")}`}
            label="RM_311RE1"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="trapezoid position-absolute single-text-52"></div>
      <div className="trapezoid position-absolute single-text-53"></div>
      <div className="trapezoid position-absolute single-text-54"></div>
      <div className="trapezoid position-absolute single-text-55"></div>

      <div className="position-absolute single-text-56">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary p-1 ml-2 mt-1",
            label: "BYP",
          }}
        />
        <div className="d-flex">
          <div className="squareplustri pt-2 d-flex flex-column align-items-center justify-content-between">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("RM_314BF1")}`}
              label="RM_314BF1"
            />
            <MotorCircleDigitalTag
              className={`circle-img c-grey-img-2`}
              label="NA"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle grey-color`}
              label="NA"
            />                
          </div> 
        </div>
      </div>
      <div className="position-absolute single-text-57">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "314BF2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary p-1 ml-2 mt-1",
            label: "BYP",
          }}
        />
        <div className="d-flex">
          <div className="squareplustri pt-2 d-flex flex-column align-items-center justify-content-between">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("RM_314BF2")}`}
              label="RM_314BF2"
            />
            <MotorCircleDigitalTag
              className={`circle-img c-grey-img-2`}
              label="NA"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`dot  grey-color`}
              label="NA"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-58">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "324BF1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary p-1 ml-2 mt-1",
            label: "BYP",
          }}
        />
        <div className="d-flex">
          <div className="squareplustri pt-2 d-flex flex-column align-items-center justify-content-between">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("RM_324BF1")}`}
              label="RM_324BF1"
            />
            <MotorCircleDigitalTag
              className={`circle-img c-grey-img-2`}
              label="NA"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "RM_324FN1"
              )}`}
              label="RM_324FN1"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-59">
        <BlackContainer
          data={{
            label: "RMH_314BF1_PT1",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_314BF1_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-60">
        <BlackContainer
          data={{
            label: "RMH_314BF2_PT",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_314BF2_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-61">
        <BlackContainer
          data={{
            label: "RMH_314BF3_DPT",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_314BF3_PT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-62">
        <BlackContainer
          data={{
            label: "RMH_314FN3_SI",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_314FN3_II",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-63">
        <BlackContainer
          data={{
            label: "RM_314BC4_Current",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_314BC4_Speed",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-64">
        <BlackContainer
          data={{
            label: "RM_314BC5_Current",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_314BC5_Speed",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-65">
        <BlackContainer
          data={{
            label: "RMH_324BC5_Current",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_324BC5_Speed",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-66">
        <BlackContainer
          data={{
            label: "RMH_324BF2_DPT",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_324BF2_PT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-67">
        <BlackContainer
          data={{
            label: "RMH_324BF1_DPT",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RMH_324BF1_PT1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-68">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_334WF1_PCS")}`}
          label="RMH_334WF1_PCS"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot ml-3 digital-tag ${useColorStatus("RMH_334WF1_BSS")}`}
          label="RMH_334WF1_BSS"
          text="P"
        />
      </div>
      <div className="d-flex position-absolute single-text-69">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_334WF2_BSS")}`}
          label="RMH_334WF2_BSS"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot ml-3 digital-tag ${useColorStatus("RMH_334WF2_PCS")}`}
          label="RMH_334WF2_PCS"
          text="P"
        />
      </div>
      <div className="d-flex position-absolute single-text-70">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_334WF3_BSS")}`}
          label="RMH_334WF3_BSS"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot ml-3 digital-tag ${useColorStatus("RMH_334WF3_PCS")}`}
          label="RMH_334WF3_PCS"
          text="P"
        />
      </div>
      <div className="d-flex position-absolute single-text-71">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_334WF4_BSS")}`}
          label="RMH_334WF4_BSS"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot ml-3 digital-tag ${useColorStatus("RMH_334WF4_PCS")}`}
          label="RMH_334WF4_PCS"
          text="P"
        />
      </div>
      <div className="d-flex position-absolute single-text-72">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_334WF5_BSS")}`}
          label="RMH_334WF5_BSS"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot ml-3 digital-tag ${useColorStatus("RMH_334WF5_PCS")}`}
          label="RMH_334WF5_PCS"
          text="P"
        />
      </div>
      <div className="d-flex position-absolute single-text-73">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RMH_334BC2_PCS_L")}`}
          label="RMH_334BC2_PCS_L"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot ml-2 digital-tag ${useColorStatus(
            "RMH_334BC2_PCS_R"
          )}`}
          label="RMH_334BC2_PCS_R"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot ml-2 digital-tag ${useColorStatus(
            "RMH_334BC2_NDE_MG"
          )}`}
          label="RMH_334BC2_NDE_MG"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot ml-2 digital-tag ${useColorStatus(
            "RM_334BC2_DE_MG"
          )}`}
          label="RM_334BC2_DE_MG"
          text="P"
        />
      </div>
      <div className="d-flex position-absolute single-text-74">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM_334BC2_BSS_L")}`}
          label="RM_334BC2_BSS_L"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot ml-2 digital-tag ${useColorStatus(
            "RM_334BC2_VGTU2"
          )}`}
          label="RM_334BC2_VGTU2"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot ml-2 digital-tag ${useColorStatus("RM_334BC2_VGT")}`}
          label="RM_334BC2_VGT"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot ml-2 digital-tag ${useColorStatus(
            "RM_334BC2_VGTU1"
          )}`}
          label="RM_334BC2_VGTU1"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-75">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "314FN1",
          }}
        />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2",
          label: "314RA1",
        }}
      />
      </div>
      <div className="position-absolute single-text-76">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "314FN2",
          }}
        />
     <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2",
          label: "314RA2",
        }}
      />
      </div> 
      <div className="position-absolute single-text-77">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "324FN2",
          }}
        />
     <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2",
          label: "324RA2",
        }}
      />
      </div>
  
    </div>
  );
};

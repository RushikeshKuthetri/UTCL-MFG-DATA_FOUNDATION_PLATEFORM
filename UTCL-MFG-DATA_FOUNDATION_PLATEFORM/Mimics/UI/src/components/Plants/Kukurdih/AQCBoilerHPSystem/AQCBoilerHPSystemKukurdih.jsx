import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../index";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const AQCBoilerHPSystemKukurdih = () => {
  return (
    <div className=" AQCBoilerHPSystemKukurdih w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot grey-color`,
          // firstCircleLabel: "66CL8",
        }}
        text={{ useClass: "text-dark", label: "DCC-1" }}
        secondCircle={{
          secondCircleText: "",
          secondCircleClass: `dot grey-color`,
          secondCircleLabel: "RM1_361CV1_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot grey-color`,
          // firstCircleLabel: "66CL8",
        }}
        text={{ useClass: "text-dark", label: "DCC-2" }}
        secondCircle={{
          secondCircleText: "",
          secondCircleClass: `dot grey-color`,
          secondCircleLabel: "RM1_361CV1_RUN",
        }}
      />
      <div class="yellowline-Vr downArrow  position-absolute pipe-3"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-4"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-5"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-6"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-7"></div>
      <div class="yellowline-Hr rightarrow position-absolute pipe-8"></div>
      <div class="yellowline-Vr position-absolute pipe-9"></div>
      <div class="yellowline-Vr position-absolute pipe-10"></div>
      <div class="yellowline-Hr position-absolute pipe-11"></div>
      <div class="yellowline-Hr leftarrow position-absolute pipe-12"></div>
      <div class="yellowline-Vr position-absolute pipe-13"></div>
      <div class="yellowline-Vr position-absolute pipe-14"></div>
      <div class="yellowline-Hr position-absolute pipe-15"></div>
      <div class="yellowline-Vr position-absolute pipe-16"></div>
      <div class="yellowline-Vr position-absolute pipe-17"></div>
      <div class="yellowline-Hr rightarrow position-absolute pipe-18"></div>
      <div class="yellowline-Hr rightarrow position-absolute pipe-19"></div>
      <div class="yellowline-Hr leftarrow position-absolute pipe-20"></div>
      <div class="yellowline-Hr leftarrow position-absolute pipe-21"></div>
      <div class="yellowline-Vr position-absolute pipe-22"></div>
      <div class="yellowline-Hr rightarrow position-absolute pipe-23"></div>
      <div class="yellowline-Hr position-absolute pipe-24"></div>
      <div class="yellowline-Vr position-absolute pipe-25"></div>
      <div class="yellowline-Hr position-absolute pipe-26"></div>
      <div class="yellowline-Vr position-absolute pipe-27"></div>
      <div class="yellowline-Hr position-absolute pipe-28"></div>
      <div class="yellowline-Vr position-absolute pipe-29"></div>
      <div class="yellowline-Hr rightarrow position-absolute pipe-30"></div>
      <div class="yellowline-Hr rightarrow position-absolute pipe-31"></div>
      <div class="yellowline-Hr  position-absolute pipe-32"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-33"></div>
      <div class="yellowline-Vr position-absolute pipe-34"></div>
      <div class="yellowline-Hr position-absolute pipe-35"></div>
      <div class="yellowline-Hr position-absolute pipe-36"></div>
      <div class="yellowline-Vr position-absolute pipe-37"></div>
      <div class="yellowline-Vr upArrow position-absolute pipe-38"></div>
      <div class="yellowline-Hr position-absolute pipe-39"></div>
      <div class="yellowline-Vr position-absolute pipe-40"></div>
      <div class="yellowline-Hr position-absolute pipe-41"></div>
      <div class="yellowline-Vr position-absolute pipe-42"></div>
      <div class="yellowline-Hr position-absolute pipe-43"></div>
      <div class="yellowline-Vr position-absolute pipe-44"></div>
      <div class="yellowline-Hr position-absolute pipe-45"></div>
      <div class="yellowline-Vr position-absolute pipe-46"></div>
      <div class="yellowline-Hr position-absolute pipe-47"></div>
      <div class="yellowline-Hr position-absolute pipe-48"></div>
      <div class="yellowline-Vr position-absolute pipe-49"></div>
      <div class="yellowline-Hr position-absolute pipe-50"></div>
      <div class="yellowline-Vr position-absolute pipe-51"></div>
      <div class="yellowline-Hr rightarrow position-absolute pipe-52"></div>
      <div class="yellowline-Vr upArrow position-absolute pipe-53"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-54"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-55"></div>
      <div class="pipeHr position-absolute pipe-56"></div>
      <div class="pipeVr position-absolute pipe-57"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-58"></div>

      <div className="img-101 position-absolute single-text-1 d-flex flex-column justify-content-end gap">
        <div>
          <div className="d-flex justify-content-around">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p",
                label: "LP ECO (PH)",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p",
                label: "LP ECO (ACQ)",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-around">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p",
                label: "HP ECO-1 (PH)",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p",
                label: "HP ECO-1 (ACQ)",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center flex-column">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p",
                label: "LP EVAP-2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p mt-1",
                label: "LP EVAP-1",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-around">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p",
                label: "HP ECO-2 (PH)",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p",
                label: "HP ECO-2 (AQC)",
              }}
            />
          </div>
          <div className="d-flex mt-1 justify-content-around">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p",
                label: "HP ECO-3 (PH)",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p",
                label: "HP ECO-3 (AQC)",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center flex-column">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p",
                label: "LP SH",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p mt-1",
                label: "HP EVAP-2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p mt-1",
                label: "HP EVAP-1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p mt-1",
                label: "HP SH-1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p mt-1",
                label: "HP SH-2A",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-primary p mt-1",
                label: "HP SH-2B",
              }}
            />
          </div>
        </div>
        <div className=" text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SACRIFICING TUBES",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 triangle-with-squares"></div>
      <div className="position-absolute single-text-3 d-flex flex-column">
        <div className="d-flex ">
          <div className="text-center">
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
                label: "FCV-500A",
              }}
            />
          </div>
          <div className="text-center ml-2">
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
                useClass: "text-dark",
                label: "MOV-500A",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="text-center">
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
                label: "FCV-500B",
              }}
            />
          </div>
          <div className="text-center ml-2">
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
                useClass: "text-dark",
                label: "MOV-500B",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex flex-column">
        <div className="d-flex ">
          <div className="text-center">
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
                label: "FCV-500A",
              }}
            />
          </div>
          <div className="text-center ml-2">
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
                useClass: "text-dark",
                label: "MOV-500A",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="text-center">
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
                label: "FCV-500B",
              }}
            />
          </div>
          <div className="text-center ml-2">
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
                useClass: "text-dark",
                label: "MOV-500B",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex flex-column">
        <div className="text-center">
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
              label: "TCV-607",
            }}
          />
        </div>
        <div className="text-center ">
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
              useClass: "text-dark",
              label: "TCV-608",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex flex-column">
        <div className="text-center">
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
              label: "TCV-609",
            }}
          />
        </div>
        <div className="text-center ">
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
              useClass: "text-dark",
              label: "TCV-610",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7 d-flex ">
        <div className="text-center d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "MOV-01A",
            }}
          />
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
        </div>
        <div className="text-center d-flex align-items-center">
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
              useClass: "text-dark",
              label: "MOV-02A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex flex-column">
        <div className="text-center d-flex">
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
              label: "PCV-606",
            }}
          />
        </div>
        <div className="text-center d-flex">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W1_AQC_MOV004_OLS",
                closeLabel: "W1_AQC_MOV004_CLS",
              }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W1_AQC_MOV004_OLS",
                closeLabel: "W1_AQC_MOV004_CLS",
              }
            )}`}
            label="W1_AQC_MOV004_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TT-607A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQC_MOV004_CLS"
          )}`}
          label="W1_AQC_MOV004_CLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W1_AQC_MOV004_OLS"
          )}`}
          label="W1_AQC_MOV004_OLS"
          text="O"
        />
      </div>
      <div className="position-absolute single-text-10">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W1_HP_MAS_MOV_608A_CLS"
            )}`}
            label="W1_HP_MAS_MOV_608A_CLS"
            text="C"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W1_HP_MAS_MOV_608A_OLS"
            )} ml-3`}
            label="W1_HP_MAS_MOV_608A_OLS"
            text="O"
          />
        </div>
        <div className="text-center">
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
              label: "MOV-608A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_FDW_500A_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ZT-500A",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "W1_AQC_HP_FDW_FCV_500A_SP",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQCHP-FDW-FIC-500",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQCHP_FIC_500",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQCHP-SW-LIC-600B",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQCHP_LIC_600B",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex align-items-end">
        <div className="text">
          <BlackContainer
            data={{
              label: "W1_AQCHP_FT_500",
              useClass: "greenTxt ",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FT-500A",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_AQC_HP_FDW_500A_FT",
                useClass: "greenTxt ml-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FT-500B",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_AQC_HP_FDW_500A_FT",
                useClass: "greenTxt ml-1",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>

        <div className="text-center border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQCHP-SW-LIC-600A",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQCHP_LIC_600A",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_FDW_500_PT",
              useClass: "greenTxt",
              unit: "kg/cm2",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PT-500",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_PH_HP_FDW_500B_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "ZT-500B",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_PH_HP_FDW_FCV_500B_SP",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div>
          <div className="text-center">
            <BlackContainer
              data={{
                label: "W1_PH_HP_FDW_500A_ZT",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "ZT-500A",
              }}
            />
          </div>
          <div className="text-center">
            <BlackContainer
              data={{
                label: "W1_PH_HP_FDW_504_PT",
                useClass: "greenTxt mt-2",
                unit: "kg/cm2",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "PT-504",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "W1_PH_HP_FDW_FCV_500A_SP",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "W1_PHHP_FT_500",
                useClass: "greenTxt",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_PH_HP_FDW_500A_FT",
                useClass: "greenTxt",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_PH_HP_FDW_500B_FT",
                useClass: "greenTxt",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "W1_PH_HP_FDW_500_PT",
              useClass: "greenTxt ml-2",
              unit: "kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MAN-SP",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_FDW_500B_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "ZT-500B",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_FDW_FCV_500B_SP",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15 d-flex flex-column">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_FDW_504_PT",
              useClass: "greenTxt",
              unit: "kg/cm2",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PT-504",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_FDW_505_TT",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PT-505",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex flex-column">
        <div className="text-center d-flex">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_MAS_601A_FT",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "FT-601A",
            }}
          />
        </div>
        <div className="text-center d-flex">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_MAS_601B_FT",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "FT-601B",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex ">
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_FDW_510_FT",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FT-510",
            }}
          />
        </div>
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_FDW_511_FT",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FT-511",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 d-flex ">
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_FDW_607_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "ZT-607",
            }}
          />
        </div>
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_FDW_TCV_607_SP",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex ">
        <div className="d-flex align-items-center">
          <div>
            <div className="d-flex ">
              <div className="text-center ">
                <BlackContainer
                  data={{
                    label: "W1_AQC_HP_FDW_608_ZT",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ZT-608",
                  }}
                />
              </div>
              <BlackContainer
                data={{
                  label: "W1_AQC_HP_FDW_TCV_608_SP",
                  useClass: "greenTxt ml-2",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex ">
              <div className="text-center mt-2">
                <BlackContainer
                  data={{
                    label: "W1_AQC_HP_FDW_609_ZT",
                    useClass: "greenTxt",
                    unit: "mmWC",
                    unitColor: "unitColor",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ZT-609",
                  }}
                />
              </div>
              <BlackContainer
                data={{
                  label: "W1_AQC_HP_FDW_TCV_609_SP",
                  useClass: "greenTxt ml-2 mt-2",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-20 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQCHP-MAS-TIC-602",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQCHP_TIC_602",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TT-602A",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQC_TI_602",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQC_HP_MAS_602A_TT",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQC_HP_MAS_602B_TT",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TT-602B",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQCHP-MAS-TIC-603",
            }}
          />
          <BlackContainer
            data={{
              label: "AQCHP_TIC_603",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <BlackContainer
            data={{
              label: "W1_AQC_TI_603",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQC_HP_MAS_603A_TT",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQC_HP_MAS_603B_TT",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_AQCHP_TT_607",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "W1_AQC_HP_MAS_607A_TT",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQC_HP_MAS_607B_TT",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "TT-607B",
            }}
          />
        </div>
        <div className="text">
          <BlackContainer
            data={{
              label: "W1_AQCHP_FT_608",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <div className="mt-1 d-flex text">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "FT-608A",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_AQC_HP_MAS_608A_FT",
                useClass: "greenTxt ml-1",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mt-1 d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "FT-608A",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_AQC_HP_MAS_608B_FT",
                useClass: "greenTxt ml-1",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FE-608",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQCHP-MAS-PIC-606",
            }}
          />
          <BlackContainer
            data={{
              label: "HP_PIC_606",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PT-606",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQC_HP_MAS_606_PT",
              useClass: "greenTxt mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_MAS_606_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_MAS_PCV_606_SP",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ZT-01A",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQC_HP_BDS_01A_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ZT-02A",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQC_HP_BDS_02A_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-26 ">
        <div className="text">
          <BlackContainer
            data={{
              label: "W1_AQCHP_LT_600",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center mt-1 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LT-600A",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQC_HP_SW_600A_LT",
              useClass: "greenTxt ml-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center mt-1 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LT-600A",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQC_HP_SW_600B_LT",
              useClass: "greenTxt ml-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PT-600",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AQC_HP_SS_600_PT",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_PH_HP_FDW_505_TT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_FDW_610_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "ZT-610",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_FDW_TCV_610_SP",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex flex-column">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_MAS_601_TT",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "TT-601",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W1_AQC_HP_MAS_604_TT",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "TT-604",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-31 d-flex flex-column">
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "FROM BFWP COMMON",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "DISCHARGE LINE",
            }}
          />
        </div>
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LP FW TO",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "AQC & PH BOILER",
            }}
          />
        </div>
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TO PH BOILER HP STEAM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "DRUM",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-32 d-flex flex-column">
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "HP DOSING PUMP",
            }}
          />
        </div>
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "HP STEAM FROM PH BOILER",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-33 pipeHr d-flex justify-content-center align-items-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "HP STEAM DRUM",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34">
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TO STG BULIDING",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
            {}
          )}`}
          text="N"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
            {}
          )}`}
          text="L"
        />
      </div>
      <div className="position-absolute single-text-36 d-flex ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
            {}
          )}`}
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
            {}
          )}`}
          text="K"
        />
      </div>
      <div className="position-absolute single-text-37">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
            {}
          )}`}
          text="L"
        />
      </div>
      <div className="position-absolute single-text-38">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
            {}
          )}`}
          text="M"
        />
      </div>
      <div className="position-absolute single-text-39">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
            {}
          )}`}
          text="J"
        />
      </div>
      <div className="position-absolute single-text-40">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT-603A",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT-603B",
          }}
        />
      </div>
      <div className="position-absolute single-text-41 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            ""
          )}`}
          label=""
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            ""
          )}`}
          label=""
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            ""
          )}`}
          label=""
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            ""
          )}`}
          label=""
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            ""
          )}`}
          label=""
        />
      </div>
      <div className="position-absolute single-text-42">
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "PUPPY HEADER",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <div className="text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "AQCHP-MAS-TIC-607",
            }}
          />
          <BlackContainer
            data={{
              label: "AQCHP_TIC_607",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
    </div>
  );
};

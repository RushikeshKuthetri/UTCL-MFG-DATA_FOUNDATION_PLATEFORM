import {
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
  TextContainerWithWrapWord,
} from "../../../../../index";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useCaretColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
} from "../../../../../../utils";

export const AQCBoilerHPSystemAndhraLine3 = () => {
  return (
    <div className="AQCBoilerHPSystemKukurdih w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useColorStatus(
            "W3_473CV4_RUN"
          )}`,
          firstCircleLabel: "W3_473CV4_RUN",
        }}
        text={{ useClass: "text-dark", label: "DCC-1" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useColorStatus(
            "W3_473CV5_RUN"
          )}`,
          firstCircleLabel: "W3_473CV5_RUN",
        }}
        text={{ useClass: "text-dark", label: "DCC-2" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <div class="yellowline-Vr downArrow  position-absolute pipe-3"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-4"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-5"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-6"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-7"></div>
      <div class="yellowline-Hr d-flex align-items-center justify-content-end position-absolute pipe-8">
        <i className="fa-solid fa-caret-left d-block"></i>
      </div>
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
      <div class="yellowline-Hr d-flex align-items-center justify-content-end position-absolute pipe-30">
        <i className="fa-solid fa-caret-left d-block"></i>
      </div>
      <div class="yellowline-Hr d-flex align-items-center justify-content-end position-absolute pipe-31">
        <i className="fa-solid fa-caret-left d-block"></i>
      </div>
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
      <div class="yellowline-Vr position-absolute pipe-59"></div>

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
        <div className="text-center ml-2">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_AQC_MOV_500A_OLS",
                closeLabel: "W3_AQC_MOV_500A_CLS",
              }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_AQC_MOV_500A_OLS",
                closeLabel: "W3_AQC_MOV_500A_CLS",
              }
            )}`}
            label="W3_AQC_MOV_500A_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOV-500A",
            }}
          />
        </div>
        <div className="text-center ml-2">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_AQC_MOV_500B_OLS",
                closeLabel: "W3_AQC_MOV_500B_CLS",
              }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_AQC_MOV_500B_OLS",
                closeLabel: "W3_AQC_MOV_500B_CLS",
              }
            )}`}
            label="W3_AQC_MOV_500B_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOV-500B",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex flex-column">
        <div className="text-center ml-2">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_PH_MOV_500A_OLS",
                closeLabel: "W3_PH_MOV_500A_CLS",
              }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_PH_MOV_500A_OLS",
                closeLabel: "W3_PH_MOV_500A_CLS",
              }
            )}`}
            label="W3_PH_MOV_500A_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOV-500A",
            }}
          />
        </div>
        <div className="text-center ml-2">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_PH_MOV_500B_OLS",
                closeLabel: "W3_PH_MOV_500B_CLS",
              }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_PH_MOV_500B_OLS",
                closeLabel: "W3_PH_MOV_500B_CLS",
              }
            )}`}
            label="W3_PH_MOV_500B_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOV-500B",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex flex-column">
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TCV-607",
            }}
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
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
            firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TCV-609",
            }}
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
            secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
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
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "W3_AQC_MOV_01A_M01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "W3_AQC_MOV_01A_M01"
            )}`}
            label="W3_AQC_MOV_01A_M01"
          />
        </div>
        <div className="text-center d-flex align-items-center">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "W3_AQC_MOV_02A_M01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "W3_AQC_MOV_02AW3_AQC_MOV_02A_M0101"
            )}`}
            label="W3_AQC_MOV_02A_M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MOV-02A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <div className="text-center d-flex">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_AQC_MOV_004_OLS",
                closeLabel: "W3_AQC_MOV_004_CLS",
              }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_AQC_MOV_004_OLS",
                closeLabel: "W3_AQC_MOV_004_CLS",
              }
            )}`}
            label="W3_AQC_MOV_004_OLS"
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
            "W3_AQC_MOV_004_CLS"
          )}`}
          label="W3_AQC_MOV_004_CLS"
          text="C"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_AQC_MOV_004_OLS"
          )}`}
          label="W3_AQC_MOV_004_OLS"
          text="O"
        />
      </div>
      <div className="position-absolute single-text-10">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_MOV_608A_CLS"
            )}`}
            label="W3_AQC_MOV_608A_CLS"
            text="C"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "W3_AQC_MOV_608A_OLS"
            )} ml-3`}
            label="W3_AQC_MOV_608A_OLS"
            text="O"
          />
        </div>
        <div className="text-center mt-2">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_AQC_MOV_608A_OLS",
                closeLabel: "W3_AQC_MOV_608A_CLS",
              }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "W3_AQC_MOV_608A_OLS",
                closeLabel: "W3_AQC_MOV_608A_CLS",
              }
            )}`}
            label="W3_AQC_MOV_608A_OLS"
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
              label: "W3_AQC_FDW_FCV_500A_ZT",
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
        <div>&nbsp;</div>
        <div className="text-center border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQCHP-FDW-FIC-500",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_FDW_500_FIC",
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
              label: "W3_AQC_SW_600B_LIC",
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
              label: "W3_AQC_FDW_500_FT",
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
                label: "W3_AQC_FDW_500A_FT",
                useClass: "greenTxt ml-1",
                unit: "TPH",
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
                label: "W3_AQC_FDW_500B_FT",
                useClass: "greenTxt ml-1",
                unit: "TPH",
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
              label: "W3_AQC_SW_600A_LIC",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W3_AQC_FDW_500_PT",
              useClass: "greenTxt",
              unit: "Kg/cm2",
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
              label: "W3_PH_FCV_500B_ZT",
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
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div>
          <div className="text-center">
            <BlackContainer
              data={{
                label: "W3_PH_FCV_500A_ZT",
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
                label: "W3_PH_FDW_504_PT",
                useClass: "greenTxt mt-2",
                unit: "Kg/cm2",
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
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "W3_PH_FDW_500_FT",
                useClass: "greenTxt ml-auto",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "FT-500A",
                }}
              />
              <BlackContainer
                data={{
                  label: "W3_PH_FDW_500A_FT",
                  useClass: "greenTxt",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mr-1",
                  label: "FT-500B",
                }}
              />
              <BlackContainer
                data={{
                  label: "W3_PH_FDW_500B_FT",
                  useClass: "greenTxt",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "W3_PH_FDW_500_PT",
                useClass: "greenTxt",
                unit: "Kg/cm2",
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
        </div>
      </div>
      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "W3_AQC_FDW_FCV_500B_ZT",
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
      <div className="position-absolute single-text-15 d-flex flex-column">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W3_AQC_FDW_504_PT",
              useClass: "greenTxt",
              unit: "Kg/cm2",
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
              label: "W3_AQC_FDW_505_TT",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "TT-505",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16">
        <div className="text-center d-flex">
          <BlackContainer
            data={{
              label: "W3_AQC_MAS_601A_FT",
              useClass: "greenTxt",
              unit: "TPH",
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
        <div className="text-center d-flex mt-1">
          <BlackContainer
            data={{
              label: "W3_AQC_MAS_601B_FT",
              useClass: "greenTxt",
              unit: "TPH",
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
              label: "W3_AQC_FDW_510_FT",
              useClass: "greenTxt",
              unit: "TPH",
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
              label: "W3_AQC_FDW_511_FT",
              useClass: "greenTxt",
              unit: "TPH",
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
              label: "W3_AQC_TCV_607_ZT",
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
              label: "W3_AQC_TCV_607_SP",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19">
        <BlackContainer
          data={{
            label: "W3_AQC_TCV_608_ZT",
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
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "ZT-609",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_AQC_TCV_609_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQCHP-MAS-TIC-602",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_MAS_602_TIC",
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
              label: "W3_AQC_MAS_602_TT",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_MAS_602A_TT",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_MAS_602B_TT",
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
              label: "W3_AQC_MAS_603_TIC",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <BlackContainer
            data={{
              label: "W3_AQC_MAS_603_TT",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_MAS_603A_TT",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_MAS_603B_TT",
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
              label: "W3_AQC_MAS_607_TT",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "W3_AQC_MAS_607A_TT",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AQC_MAS_607B_TT",
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
              label: "W3_AQC_MAS_608_FT",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <div className="mt-1 d-flex text">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FT-608A",
              }}
            />
            <BlackContainer
              data={{
                label: "W3_AQC_MAS_608A_FT",
                useClass: "greenTxt ml-1",
                unit: "TPH",
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
                label: "W3_AQC_MAS_608B_FT",
                useClass: "greenTxt ml-1",
                unit: "TPH",
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
              label: "W3_AQC_MAS_606_PIC",
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
              label: "W3_AQC_MAS_606_PT",
              useClass: "greenTxt mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "W3_AQC_PCV_606_ZT",
          useClass: "greenTxt position-absolute single-text-24",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
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
              label: "W3_AQC_MOV_01A_ZT",
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
              label: "W3_AQC_MOV_02A_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-26">
        <div className="text">
          <BlackContainer
            data={{
              label: "W3_AQC_SW_600_LT",
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
              label: "W3_AQC_SW_600A_LT",
              useClass: "greenTxt ml-1",
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
              label: "W3_AQC_SW_600B_LT",
              useClass: "greenTxt ml-1",
              unit: "%",
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
              label: "W3_AQC_SS_600_PT",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TT-505",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PH_FDW_505_TT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <BlackContainer
          data={{
            label: "W3_AQC_TCV_610_ZT",
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
      <div className="position-absolute single-text-30 d-flex flex-column">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "W3_AQC_MAS_601_TT",
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
              label: "W3_AQC_MAS_604_TT",
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
        <div className="dot grey-color">N</div>
        <div className="dot grey-color">L</div>
      </div>
      <div className="position-absolute single-text-36 d-flex ">
        <div className="dot grey-color">M</div>
        <div className="dot grey-color">K</div>
      </div>
      <div className="position-absolute single-text-37">
        <div className="dot grey-color">L</div>
      </div>
      <div className="position-absolute single-text-38">
        <div className="dot grey-color">M</div>
      </div>
      <div className="position-absolute single-text-39">
        <div className="dot grey-color">J</div>
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
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W3_AQC_FLG_M701"
          )}`}
          label="W3_AQC_FLG_M701"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W3_AQC_FLG_M702"
          )}`}
          label="W3_AQC_FLG_M702"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W3_AQC_FLG_M703"
          )}`}
          label="W3_AQC_FLG_M703"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W3_AQC_FLG_M704"
          )}`}
          label="W3_AQC_FLG_M704"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "W3_AQC_FLG_M705"
          )}`}
          label="W3_AQC_FLG_M705"
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
              label: "W3_AQC_MAS_607_TIC",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="text-center d-flex position-absolute single-text-44">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "ACW-NOV001",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "W3_ACW_MOV001"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
            "W3_ACW_MOV001"
          )}`}
          label="W3_ACW_MOV001"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-45",
          label: "Sacrificing Valve",
        }}
      />
    </div>
  );
};

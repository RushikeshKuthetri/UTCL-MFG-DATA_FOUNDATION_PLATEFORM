import {
  TextContainerWithWrapWord,
  BlackContainer,
  BlueContainerWithDynamicBorder,
  MimicCaret,
  MotorCircleDigitalTag,
  TransparentBoxWithGate,
} from "../../../../index";

import {
  useColorStatus,
  useFanImgTagsColorStatus,
  useSKCWColorStatus,
  useBorderTagsColorStatus,
  useBVTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useCaretColorStatus,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
  useDampersValveTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const BulkLoadingDhuleLine2 = () => {
  return (
    <div className="dhule-l2-bulk-loading w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FromCement Silos",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "612ASC",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "612ASF",
          }}
        />
      </div>
      <div className="single-text-2  position-absolute ">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "PP2_622BF1_DPT",
              useClass: "greenTxt ml-3 mb-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP2_622BF1_PT",
              useClass: "greenTxt mb-1 ml-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "622BF1",
            }}
          />
          <div className=" squareplustri d-flex justify-content-center align-items-center ">
            
          </div>
          <MotorCircleDigitalTag
            className={`circle-img my-2 digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "PP2_622RA1"
            )}`}
            label="PP2_622RA1_RUN"
          />
        </div>
      </div>
      <div className="single-text-3 position-absolute d-flex ">
        <div className="containerImage d-flex align-items-center justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "621BI1 (E)",
            }}
          />
        </div>
        <div className="containerImage d-flex flex-column align-items-center justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "622BI1",
            }}
          />
          <BlackContainer
            data={{
              label: "PP2_622BI1_WI",
              useClass: "greenTxt ",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="truck single-text-4 position-absolute"></div>
      <div className="single-text-5 position-absolute d-flex">
        <div className="d-flex align-items-center">
          <div className="img-85"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pl-2",
              label: "621RB1 (E)",
            }}
          />
        </div>
        <div className="d-flex align-items-center">
          <div className="img-85"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pl-2",
              label: "622RB1",
            }}
          />
        </div>
      </div>
      <div className="single-text-6 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle mb-1 digital-tag  ${useMotorTagsColorStatusForNewPlantScreens({
            runLabel:"PP2_622FN1_RUN", healthyLabel:"PP2_622FN1_PH"
          })}`}
          label="PP2_622FN1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "622FN1",
          }}
        />
      </div>
      <div className="single-text-7 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "GATE POSITION",
          }}
        />
        <BlackContainer
          data={{
            label: "PP2_622CG1_SPSPM",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-8 position-absolute border p-2 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "OPERATOR SET POINT",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "SP",
            }}
          />
          <BlackContainer
            data={{
              label: "PP2_622CG1_SP",
              useClass: "greenTxt ",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-9  position-absolute ">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "PP2_622BF2_DPT",
              useClass: "greenTxt ml-3 mb-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PP2_622BF2_PT",
              useClass: "greenTxt mb-1 ml-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "622BF2",
            }}
          />
          <div className=" squareplustri d-flex justify-content-center align-items-center ">
          </div>
          <MotorCircleDigitalTag
            className={`circle-img my-2 digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "PP2_622RA2"
            )}`}
            label="PP2_622RA2_RUN"
          />
        </div>
      </div>
      <div className="single-text-10 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle mb-1 digital-tag  ${useMotorTagsColorStatusForNewPlantScreens({runLabel : "PP2_622FN2_RUN", healthyLabel: "PP2_622FN2_PH"})}`}
          label="PP2_622FN2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "622FN2",
          }}
        />
      </div>
      <div className="single-text-11 position-absolute">
        <BlackContainer
          data={{
            label: "PP2_622FN2_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-12 position-absolute">
        <BlackContainer
          data={{
            label: "PP2_622WB1_WI",
            useClass: "greenTxt ",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "621VS1 (E)",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel:"PP1_621VS1_RUN", healthyLabel:"PP1_621VS1_PH"
            })}`}
            label="PP1_621VS1_RUN"
            text="M"
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "622VS1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel:"PP2_622VS1_RUN", healthyLabel:"PP2_622VS1_PH"
            })}`}
            label="PP2_622VS1_RUN"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex flex-column ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
            runLabel:"PP2_622BE1M01_RUN", healthyLabel:"PP2_622BE1M01_PH"
          })}`}
          label="PP2_622BE1M01_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
            runLabel:"PP2_622BE1M02_RUN", healthyLabel:"PP2_622BE1M02_PH"
          })}`}
          label="PP2_622BE1M02_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_TS")}`}
          label="PP2_622BE1_TS"
          text="T"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_ZS")}`}
          label="PP2_622BE1_ZS"
          text="Z"
        />
      </div>
      <div className="position-absolute single-text-15 d-flex flex-column ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_BMS1")}`}
          label="PP2_622BE1_BMS1"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_BMS2")}`}
          label="PP2_622BE1_BMS2"
          text="X"
        />
      </div>
      <div className="position-absolute single-text-16 d-flex flex-column ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_BSS1")}`}
          label="PP2_622BE1_BSS1"
          text="T"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_BSS1_ALM")}`}
          label="PP2_622BE1_BSS1_ALM"
          text="B"
        />
      </div>
      <div className="position-absolute single-text-17 d-flex flex-column ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_BSS2")}`}
          label="PP2_622BE1_BSS2"
          text="T"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_BSS2_ALM")}`}
          label="PP2_622BE1_BSS2_ALM"
          text="B"
        />
      </div>
      <div className="position-absolute single-text-18 d-flex flex-column ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_BSS3")}`}
          label="PP2_622BE1_BSS3"
          text="T"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_BSS3_ALM")}`}
          label="PP2_622BE1_BSS3_ALM"
          text="B"
        />
      </div>
      <div className="position-absolute single-text-19 d-flex flex-column ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_BSS4")}`}
          label="PP2_622BE1_BSS4"
          text="T"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_BSS4_ALM")}`}
          label="PP2_622BE1_BSS4_ALM"
          text="B"
        />
      </div>
      <div className="position-absolute single-text-20 d-flex ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_LS1")}`}
          label="PP2_622BE1_LS1"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PP2_622BE1_LS2")}`}
          label="PP2_622BE1_LS2"
          text="L"
        />
      </div>
      <div className="single-text-21 position-absolute text-center">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle mb-1 digital-tag  ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel:"PP2_622BL1_RUN", healthyLabel:"PP2_622BL1_PH"
            }
            )}`}
            label="PP2_622BL1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "622BL1",
            }}
          />
        </div>
        <div className="mt-3">
          <MotorCircleDigitalTag
            className={`line-circle mb-1 digital-tag  ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel:"PP2_622BL2_RUN", healthyLabel:"PP2_622BL2_PH"
            }
            )}`}
            label="PP2_622BL2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "622BL2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "BV5",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
            openLabel:"PP2_622BV5_OLS", closeLabel:"PP2_622BV5_CLS"
          }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
            openLabel:"PP2_622BV5_OLS", closeLabel:"PP2_622BV5_CLS"
          }
          )}`}
          label="PP2_622BV5_OLS"
        />
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "622SG5",
            }}
          />
          {/* <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("J1P64")}
            isClickable={true}
            tagLabel="J1P64"
          /> */}
          <TransparentBoxWithGate
            isClickable={true}
            squareProps={{
              tagLabel: "PP2_622SG5_OLS",
              squareClass: `${useDampersValveTagsColorStatusForNewPlantScreens({
                openLabel:"PP2_622SG5_OLS", closeLabel:"PP2_622SG5_CLS"
              })}`,
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "622SC1",
            }}
          />
          {/* <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("NA")}
            isClickable={true}
            tagLabel="NA"
          /> */}
          <TransparentBoxWithGate
            isClickable={true}
            squareProps={{
              tagLabel: "PP2_622CG1_OLS",
              squareClass: `${useDampersValveTagsColorStatusForNewPlantScreens({
                openLabel:"PP2_622CG1_OLS", closeLabel:"PP2_622CG1_CLS"
              })}`,
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "622SG3",
          }}
        />
        {/* <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("J1P64")}
          isClickable={true}
          tagLabel="J1P64"
        /> */}
        <TransparentBoxWithGate
            isClickable={true}
            squareProps={{
              tagLabel: "PP2_622SG3_OLS",
              squareClass: `${useDampersValveTagsColorStatusForNewPlantScreens({
                openLabel:"PP2_622SG3_OLS", closeLabel:"PP2_622SG3_CLS"
              })}`,
            }}
          />
      </div>
      {/* <div className="position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "622SG4",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("NA")}
          isClickable={true}
          tagLabel="NA"
        />
      </div> */}
      <div className="position-absolute single-text-26">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "622SG2",
          }}
        />
        {/* <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("J1P64")}
          isClickable={true}
          tagLabel="J1P64"
        /> */}
        <TransparentBoxWithGate
            isClickable={true}
            squareProps={{
              tagLabel: "PP2_622SG2_OLS",
              squareClass: `${useDampersValveTagsColorStatusForNewPlantScreens({
                openLabel:"PP2_622SG2_OLS", closeLabel:"PP2_622SG2_CLS"
              })}`,
            }}
          />
      </div>
      <div className="position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "PP2_622BL2_PT",
            useClass: "greenTxt mb-1 ml-3",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <MotorCircleDigitalTag
          className={`text-dark p-2 mb-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
            runLabel:"PP2_622HR1_RUN", healthyLabel:"PP2_622HR1_PH"
          }
          )}`}
          label="PP2_622HR1_RUN"
          text=""
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "622HR1",
          }}
        />
        <BlackContainer
          data={{
            label: "PP2_622HR1_TE",
            useClass: "greenTxt ml-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <BlackContainer
          data={{
            label: "PP2_622BE1M01II_B",
            useClass: "greenTxt mb-1 ml-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-30 position-absolute text-center">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle mb-1 digital-tag  ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel:"PP2_622BV5_OLS", closeLabel:"PP2_622BV5_CLS"
            }
            )}`}
            label="PP2_622BV5_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "622FN5",
            }}
          />
        </div>
        <div className="mt-3">
          <MotorCircleDigitalTag
            className={`line-circle mb-1 digital-tag  ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel:"PP2_622FN6_RUN", healthyLabel:"PP2_622FN6_PH"
            }
            )}`}
            label="PP2_622FN6_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "622FN6",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-31 d-flex flex-column">
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel:"PP2_622BV3_OLS", closeLabel:"PP2_622BV3_CLS"
            }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel:"PP2_622BV3_OLS", closeLabel:"PP2_622BV3_CLS"
            }
            )}`}
            label="PP2_622BV3_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "622BV3",
            }}
          />
        </div>
        <div>
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
              openLabel:"PP2_622BV4_OLS", closeLabel:"PP2_622BV4_CLS"
            }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens({
              openLabel:"PP2_622BV4_OLS", closeLabel:"PP2_622BV4_CLS"
            }
            )}`}
            label="PP2_622BV4_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "622BV4",
            }}
          />
        </div>
      </div>
      <div className="single-text-32 position-absolute text-center d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle mb-1 digital-tag  ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel:"PP2_622FN3_RUN", healthyLabel:"PP2_622FN3_PH"
            }
            )}`}
            label="PP2_622FN3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "622FN3",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle mb-1 digital-tag  ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel:"PP2_622FN4_RUN", healthyLabel:"PP2_622FN4_PH"
            }
            )}`}
            label="PP2_622FN4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "622FN4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-33">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
            openLabel:"PP2_622BV2_OLS",
            closeLabel:"PP2_622BV2_CLS",
          }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({
            openLabel:"PP2_622BV2_OLS",
            closeLabel:"PP2_622BV2_CLS"
          }
          )}`}
          label="PP2_622BV2_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "622BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-34 d-flex">
        {/* <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("J1P64")}
          isClickable={true}
          tagLabel="J1P64"
        /> */}
        <TransparentBoxWithGate
            isClickable={true}
            squareProps={{
              tagLabel: "PP2_622SG1_OLS",
              squareClass: `${useDampersValveTagsColorStatusForNewPlantScreens({
                openLabel:"PP2_622SG1_OLS", closeLabel:"PP2_622SG1_CLS"
              })}`,
            }}
          />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "622SG1",
          }}
        />
      </div>
      <div className="single-text-35 position-absolute">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "622DB1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-36">
        <BlackContainer
          data={{
            label: "PP2_622BL1_PT",
            useClass: "greenTxt mb-1 ml-3",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-37 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "622BE1",
          }}
        />
      </div>
      <div className="single-text-38 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "622RA1",
          }}
        />
      </div>
      <div className="single-text-39 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "622RA2",
          }}
        />
      </div>
      <div className="single-text-40 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`text-dark p-2 mr-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
            runLabel:"PP2_622BK1_RUN", healthyLabel:"PP2_622BK1_PH"
          }
          )}`}
          label="PP2_622BK1_RUN"
          text=""
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "622BK1",
          }}
        />
      </div>

      <div className="pipe-1 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-2 pipeHr position-absolute"></div>
      <div className="pipe-3 pipeHr position-absolute"></div>
      <div className="pipe-4 pipeHr position-absolute"></div>
      <div className="pipe-5 pipeHr position-absolute"></div>
      <div className="pipe-6 pipeHr position-absolute"></div>
      <div className="pipe-7 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-8 pipeHr position-absolute"></div>
      <div className="pipe-9 pipeHr position-absolute"></div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Hr position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Hr position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Hr position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Hr position-absolute line-17"></div>
      <div className="yellowline-Vr upArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Vr upArrow position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="yellowline-Vr position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Vr upArrow position-absolute line-26"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-27"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-28"></div>
      <div className="yellowline-Hr position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Vr position-absolute line-31"></div>
      <div className="yellowline-Vr position-absolute line-32"></div>
      <div className="yellowline-Vr position-absolute line-33"></div>
      <div className="yellowline-Hr position-absolute line-34"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-35"></div>
      <div className="yellowline-Vr upArrow position-absolute line-36"></div>
      <div className="yellowline-Vr downArrow position-absolute line-37"></div>
      <div className="yellowline-Hr position-absolute line-38"></div>
      <div className="yellowline-Hr position-absolute line-39"></div>
      <div className="yellowline-Vr position-absolute line-40"></div>
      <div className="yellowline-Vr position-absolute line-41"></div>
      <div className="yellowline-Hr position-absolute line-42"></div>
      <div className="yellowline-Vr position-absolute line-43"></div>
    </div>
  );
};

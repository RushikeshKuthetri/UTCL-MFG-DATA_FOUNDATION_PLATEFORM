import { TextContainerWithWrapWord, BlackContainer, PipeWithCircles, MotorCircleDigitalTag, MimicCaret } from "../../../../../index";
import { useColorStatus, useCaretColorStatus, useBVTagsColorStatusForNewPlantScreens } from "../../../../../../utils";
export const STGSteamSystemAndhraWHRS = () => {
  return (
    <div className="STGSteamSystemAndhraWHRS w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex flex-column">
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LP STEAM FROM ",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "AQC BOILER",
            }}
          />
        </div>
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LP STEAM FROM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "PH BOILER",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex flex-column">
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "HP STEAM FROM ",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "AOC BOILER",
            }}
          />
        </div>
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "STEAM FROM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "INTIAL PEGGING",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex flex-column">
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TO CEP",
            }}
          />
        </div>
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "UP TO INLET OF ",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "HOGGER/EJECTOR",
            }}
          />
        </div>
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "UP TO INLET OF",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "GSC",
            }}
          />
        </div>
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "SPARY WATER FROM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BFP DISCHARGE HDR",
            }}
          />
        </div>
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "AUX STEAM TO",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "DEAERATOR",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4 pipeHr d-flex justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "CSDH-001",
          }}
        />
      </div>
      <div className="position-absolute single-text-5 triangle-with-squares text-center"></div>
      <div className="position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "STEAM TURBINE",
          }}
        />
      </div>
      <div className="position-absolute single-text-7 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "AIR COOLED ",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "CONDENSER",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: "dot grey-color",
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: "dot grey-color",
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
          secondCircleText: "",
        }}
      />
      <div className="position-absolute single-text-10 pipeHr d-flex justify-content-center align-items-center flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "CONDENSATE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "STORAGE TANK",
          }}
        />
      </div>
      <div className="position-absolute single-text-11 ">
        <BlackContainer
          data={{
            label: "W3_DEA_SS_101_PT_RMVD",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_DEA_SS_101A_PT_RMVD",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_DEA_SS_101B_PT_RMVD",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-12 d-flex ">
        <BlackContainer
          data={{
            label: "W3_PSS_AUX_636_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PSS_AUX_635_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-13 ">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_EXT_PT_MED",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_107_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_108_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_109_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 ">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_102A_FTC",
            useClass: "greenTxt mb-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_102A_FT",
            useClass: "greenTxt mb-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_102_FTC",
            useClass: "greenTxt mb-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_102_FT",
            useClass: "greenTxt mb-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_101_FTC",
            useClass: "greenTxt mb-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_101_FT",
            useClass: "greenTxt mb-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_101A_FT",
            useClass: "greenTxt mb-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_101A_FTC",
            useClass: "greenTxt mb-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16 ">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_110_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_111_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_112_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 ">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_LP_ST_PT_MED",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "INJ_STEM_TEMP_MED",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_112_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_113_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_114_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_115_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 ">
        <BlackContainer
          data={{
            label: "W3_STG_PSS_MAS_PCV623_ZT",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_PSS_MAS_PCV623_SP",
            useClass: "greenTxt mb-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_105_PT",
            useClass: "greenTxt mb-3",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_PCV101",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_101_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_102_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_103_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_101_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_102_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_103_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_104_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_STEAM_PT_MED",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24 d-flex ">
        <BlackContainer
          data={{
            label: "W3_PSS_MAS_640_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PSS_MAS_640_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25 ">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_PCV101_ZT",
            useClass: "greenTxt mb-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_PCV101_SP",
            useClass: "greenTxt mb-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <BlackContainer
          data={{
            label: "W3_PSS_TCV_633A_SP",
            useClass: "greenTxt mb-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PSS_TCV_633A_ZTN",
            useClass: "greenTxt mb-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <BlackContainer
          data={{
            label: "W3_PSS_TCV_633B_SP",
            useClass: "greenTxt mb-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PSS_TCV_633B_ZTN",
            useClass: "greenTxt mb-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-28 d-flex ">
        <BlackContainer
          data={{
            label: "W3_PSS_AUX_634_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PSS_AUX_633_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "W3_PSS_PCV_634A_SP",
              useClass: "greenTxt mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_PSS_PCV_634A_ZT",
              useClass: "greenTxt mb-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "ZT-634A",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "W3_PSS_PCV_634B_SP",
              useClass: "greenTxt mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_PSS_PCV_634B_ZT",
              useClass: "greenTxt mb-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "ZT-634B",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "W3_PSS_PCV_101_SP",
              useClass: "greenTxt mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_PSS_AUX_101_ZT",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex flex-column">
        <BlackContainer
          data={{
            label: "W3_STG_PSS_MAS_PCV635_SP",
            useClass: "greenTxt mb-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_PSS_MAS_PCV635_ZT",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_104_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 d-flex flex-column">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_106_PT",
            useClass: "greenTxt mb-1 ml-2",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_105_PT",
            useClass: "greenTxt mb-1",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MAS_111_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "DEA-SS-PIC-101",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_DEA_PIC_101_RMVD",
            useClass: "greenTxt mb-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "PSS-AUX-TIC-633",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PSS_AUX_633_TIC",
            useClass: "greenTxt mb-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "FT_633",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PSS_AUX_633_FT",
            useClass: "greenTxt mb-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "FE_633",
          }}
        />
      </div>
      <div className="position-absolute single-text-35">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "PSS-AUX-PIC-634",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_PSS_AUX_634_PIC",
            useClass: "greenTxt mb-2",
            unit: "Kg/Cm²",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-36 text-center">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_107_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_EXT_TT_MED",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-38 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("W3_STG_MAS_105_CLS")}`} label="W3_STG_MAS_105_CLS" text="C" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("W3_STG_MAS_105_OLS")}`} label="W3_STG_MAS_105_OLS" text="O" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("W3_STG_MAS_101_CLS")}`} label="W3_STG_MAS_101_CLS" text="C" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("W3_STG_MAS_101_OLS")}`} label="W3_STG_MAS_101_OLS" text="O" />
      </div>
      <div className="position-absolute single-text-39 ">
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "W3-STG-MAS-PAHH-101",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W3_STG_MAS_101_PS")}`} label="W3_STG_MAS_101_PS" text="P" />
        </div>
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "W3-STG-MAS-PAHH-102",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W3_STG_MAS_102_PS")}`} label="W3_STG_MAS_102_PS" text="P" />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "W3-STG-MAS-PAHH-103",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W3_STG_MAS_103_PS")}`} label="W3_STG_MAS_103_PS" text="P" />
        </div>
      </div>
      <div className="position-absolute single-text-40 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "H",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("LP_STEAM_PR_HI")}`} label="LP_STEAM_PR_HI" text="X" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("LP_STEAM_PR_LO")}`} label="LP_STEAM_PR_LO" text="X" />
      </div>
      <div className="position-absolute single-text-41">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("START_HAND_BARRING")}`} label="START_HAND_BARRING" text="X" />
      </div>
      <div className="position-absolute single-text-42">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W3_STG_MAS_01_DPS")}`} label="W3_STG_MAS_01_DPS" text="P" />
      </div>
      <div className="position-absolute single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "MOV_622A",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("W3_PSS_MAS_M622A")}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("W3_PSS_MAS_M622A")}`}
          label="W3_PSS_MAS_M622A"
        />
      </div>
      <div className="position-absolute single-text-44">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_STG_MAS_105_OLS", closeLabel: "W3_STG_MAS_105_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W3_STG_MAS_105_OLS", closeLabel: "W3_STG_MAS_105_CLS" })}`}
          label="W3_STG_MAS_105_OLS"
        />
      </div>
      <div className="position-absolute single-text-45">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("W3_PSS_MAS_M632A")}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("W3_PSS_MAS_M632A")}`}
          label="W3_PSS_MAS_M632A"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "MOV_632A",
          }}
        />
      </div>
      <div className="position-absolute single-text-46 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "PT_640",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TT_640",
          }}
        />
      </div>
      <div className="position-absolute single-text-47 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "PT_634",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TT_633",
          }}
        />
      </div>
      <div className="position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "ZT_101",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "PT_101A",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "PT_101B",
          }}
        />
      </div>
      <div className="position-absolute single-text-49 text-center">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_106_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-50 text-center">
        <BlackContainer
          data={{
            label: "W3_STG_MAS_105_TT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div class="yellowline-Vr downArrow  position-absolute line-1 "></div>
      <div class="yellowline-Hr position-absolute line-2 d-flex justify-content-around align-items-center">
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div class="yellowline-Vr position-absolute line-3 d-flex justify-content-center align-items-center ">
        <i className="fa-solid fa-caret-down"></i>
      </div>
      <div class="yellowline-Vr position-absolute line-4 d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-caret-down"></i>
      </div>
      <div class="yellowline-Hr position-absolute line-5 d-flex justify-content-around align-items-center">
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div class="yellowline-Hr position-absolute line-6 d-flex justify-content-around align-items-center">
        <i className="fa-solid fa-caret-right"></i>
      </div>
      <div class="yellowline-Vr downArrow  position-absolute line-7"></div>
      <div class="yellowline-Vr position-absolute line-8"></div>
      <div class="yellowline-Vr position-absolute line-9"></div>
      <div class="yellowline-Hr position-absolute line-10"></div>
      <div class="yellowline-Vr position-absolute line-11 d-flex justify-content-center align-items-center ">
        <i className="fa-solid fa-caret-down"></i>
      </div>
      <div class="yellowline-Hr position-absolute line-12"></div>
      <div class="yellowline-Vr position-absolute line-13"></div>
      <div class="yellowline-Hr position-absolute line-14"></div>
      <div class="yellowline-Vr position-absolute line-15"></div>
      <div class="yellowline-Hr position-absolute line-16"></div>
      <div class="yellowline-Vr position-absolute line-17 d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-caret-down"></i>
      </div>
      <div class="yellowline-Hr position-absolute line-18"></div>
      <div class="yellowline-Vr position-absolute line-19 d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div class="yellowline-Hr position-absolute line-20"></div>
      <div class="yellowline-Hr position-absolute line-21"></div>
      <div class="yellowline-Vr position-absolute line-22"></div>
      <div class="yellowline-Vr position-absolute line-23"></div>
      <div class="yellowline-Hr position-absolute line-24"></div>
      <div class="yellowline-Hr position-absolute line-25"></div>
      <div class="yellowline-Vr position-absolute line-26"></div>
      <div class="yellowline-Vr position-absolute line-27"></div>
      <div class="yellowline-Hr position-absolute line-28"></div>
      <div class="yellowline-Vr position-absolute line-29"></div>
      <div class="yellowline-Vr position-absolute line-30"></div>
      <div class="yellowline-Hr position-absolute line-31"></div>
      <div class="yellowline-Hr position-absolute line-32"></div>
      <div class="yellowline-Hr position-absolute line-33"></div>
      <div class="yellowline-Hr position-absolute line-34"></div>
      <div class="yellowline-Hr position-absolute line-35"></div>
      <div class="yellowline-Hr position-absolute line-36"></div>
      <div class="yellowline-Hr position-absolute line-37"></div>
      <div class="yellowline-Vr position-absolute line-38"></div>
      <div class="yellowline-Vr position-absolute line-39"></div>
      <div class="yellowline-Vr position-absolute line-40"></div>
      <div class="yellowline-Hr position-absolute line-41"></div>
      <div class="yellowline-Hr position-absolute line-42"></div>
      <div class="yellowline-Vr position-absolute line-43"></div>
      <div class="yellowline-Vr position-absolute line-44"></div>
      <div class="yellowline-Vr position-absolute line-45"></div>
      <div class="yellowline-Vr position-absolute line-46"></div>
      <div class="yellowline-Hr position-absolute line-47"></div>
      <div class="yellowline-Vr position-absolute line-48"></div>
      <div class="yellowline-Hr position-absolute line-49"></div>
    </div>
  );
};

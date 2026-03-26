import { useBVTagsColorStatusForNewPlantScreens, useColorStatus, useGateTagsColorStatusForNewPlantScreens, useMotorTagsColorStatusForNewPlantScreens } from "../../../../../utils";
import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, MimicCaret } from "../../../../index";

export const AQC1SteamWaterVikramWHRS = () => {
  return (
    <div className="AQC1_STEAM_AND_WATER_Vikram w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 box-1 d-flex">
        <div className="box-1 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "DRM LVL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "MS TEMP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "MS PR",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQC1",
            }}
          />
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "W1_AHP_FW_LI_001A",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_ALP_FW_LI_001A",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "W1_AHP_MAS_TIC_002",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_ALP_MAS_TIC_002",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "W1_AHP_MAS_PI_002",
                useClass: "greenTxt ml-2",
                unit: "Kg/cm2",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_ALP_MAS_PI_002",
                useClass: "greenTxt ml-2",
                unit: "Kg/cm2",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PH1",
            }}
          />
        </div>
        <div className="box-1 p-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQC2",
            }}
          />
        </div>
        <div className="box-1 p-2 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PH2",
            }}
          />
        </div>
        <div className=" box-1 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQC3",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AHP_FW_LIT_001A",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AHP_MAS_TIC_002",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W3_AHP_MAS_PI_02",
              useClass: "greenTxt mt-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className=" box-1 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PH3",
            }}
          />
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "W3_PHP_FW_LI_001A",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W3_PLP_FW_LI_001A",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "W3_PHP_MAS_TI_001",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W3_PLP_MAS_TI_001",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "W3_PHP_MAS_PI_002",
                useClass: "greenTxt ml-2",
                unit: "Kg/cm2",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "W3_PLP_MAS_PI_002",
                useClass: "greenTxt ml-2",
                unit: "Kg/cm2",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className=" box-1 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "LUBE OIL PR",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_LOC_506_PT",
              useClass: "greenTxt mt-2 ml-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "CONTRL OIL PR",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_COC_454_PT",
              useClass: "greenTxt mt-2 ml-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 d-flex p-2 px-1">
          <div>
            <div>
              <div className="yellowline-Vr upArrow  position-absolute line-a"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "W1_ACC_FN01_RUN", healthyLabel: "W1_ACC_FN01_PH" })}`}
                label="W1_ACC_FN01_RUN"
              />
            </div>
            <div>
              <div className="yellowline-Vr upArrow  position-absolute line-a"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-2 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "W1_ACC_FN05_RUN", healthyLabel: "W1_ACC_FN05_PH" })}`}
                label="W1_ACC_FN05_RUN"
              />
            </div>
          </div>
          <div className="ml-3">
            <div>
              <div className="yellowline-Vr upArrow  position-absolute line-a"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "W1_ACC_FN02_RUN", healthyLabel: "W1_ACC_FN02_PH" })}`}
                label="W1_ACC_FN02_RUN"
              />
            </div>
            <div>
              <div className="yellowline-Vr upArrow  position-absolute line-a"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-2 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "W1_ACC_FN06_RUN", healthyLabel: "W1_ACC_FN06_PH" })}`}
                label="W1_ACC_FN06_RUN"
              />
            </div>
          </div>
          <div className="ml-3">
            <div>
              <div className="yellowline-Vr upArrow  position-absolute line-a"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "W1_ACC_FN03_RUN", healthyLabel: "W1_ACC_FN03_PH" })}`}
                label="W1_ACC_FN03_RUN"
              />
            </div>
            <div>
              <div className="yellowline-Vr upArrow  position-absolute line-a"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-2 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "W1_ACC_FN07_RUN", healthyLabel: "W1_ACC_FN07_PH" })}`}
                label="W1_ACC_FN07_RUN"
              />
            </div>
          </div>
          <div className="ml-3">
            <div>
              <div className="yellowline-Vr upArrow  position-absolute line-a"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "W1_ACC_FN04_RUN", healthyLabel: "W1_ACC_FN04_PH" })}`}
                label="W1_ACC_FN04_RUN"
              />
            </div>
            <div>
              <div className="yellowline-Vr upArrow  position-absolute line-a"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-2 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "W1_ACC_FN08_RUN", healthyLabel: "W1_ACC_FN08_PH" })}`}
                label="W1_ACC_FN08_RUN"
              />
            </div>
          </div>
        </div>
        <div className="box-1 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "TURBINE HP STEAM",
            }}
          />
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MS TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_STG_MAS_STEAM_TT_MED",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MS PR",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_STG_MAS_STEAM_PT_MED",
                useClass: "greenTxt ml-2",
                unit: "Kg/cm2",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="box-1 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "TURBINE LP STEAM",
            }}
          />
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MS TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "INJ_STEM_TEMP_MED",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MS PR",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_STG_MAS_LP_ST_PT_MED",
                useClass: "greenTxt ml-2",
                unit: "Kg/cm2",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="box-1 px-1 d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "ACW DISH PR",
              }}
            />
            <BlackContainer
              data={{
                label: "WC_CWS_ACW_001_PT",
                useClass: "greenTxt mt-2",
                unit: "Kg/cm2",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "EXH PR HH",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_STG_MAS_EXT_PT_MED",
                useClass: "greenTxt mt-2",
                unit: "Kg/cm2",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "HOT WELL LEVEL",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_ACC_CDS_103_LT1",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "DRAIN TNK LVI",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_STG_TGD_253_LT1",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "DEARTOR LEVEL",
              }}
            />
            <BlackContainer
              data={{
                label: "WC_DEA_FW_LT_MED",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "CST LEVEL",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_ACC_CDS_CST_LT1_MED",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SPEED",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_STG_PCS_901_SI",
                useClass: "greenTxt mt-2",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "ACT. POWER",
              }}
            />
            <BlackContainer
              data={{
                label: "W1_STG_MW001",
                useClass: "greenTxt mt-2",
                unit: "MW",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute pipeHr single-text-2  p-1"></div>
      <div className=" position-absolute single-text-3 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "W1_AHP_FW_001_LT",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AHP_FW_001_LT1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AHP_FW_LI_001A",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "W1_AHP_FW_002_LT",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AHP_FW_002_LT1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "W1_AHP_FW_003_LT",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AHP_FW_003_LT1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute pipeHr single-text-4  p-1"></div>
      <div className=" position-absolute single-text-5 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "W1_ALP_FW_001_LT",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_ALP_FW_001_LT1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_ALP_FW_LI_001A",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "W1_ALP_FW_002_LT",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_ALP_FW_002_LT1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "W1_ALP_FW_003_LT",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_ALP_FW_003_LT1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <BlackContainer
          data={{
            label: "W1_AHP_MAS_001_PT",
            useClass: "greenTxt",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AHP_MAS_PI_001",
            useClass: "greenTxt",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AHP_MAS_002_PT",
            useClass: "greenTxt",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_ALP_MAS_PI_002",
            useClass: "greenTxt",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_A_FLG_009_TT",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <BlackContainer
          data={{
            label: "W1_ALP_MAS_001_PT",
            useClass: "greenTxt",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_ALP_MAS_PI_001",
            useClass: "greenTxt",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_ALP_MAS_002_PT",
            useClass: "greenTxt",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "DRUM PR COMP",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "FLG AT O/L CPH TEMP.",
          }}
        />
      </div>
      <div className="position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "HP STEAM DRUM",
          }}
        />
      </div>
      <div className="position-absolute single-text-10 d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "DRUM PR COMP",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "LP STEAM DRUM",
          }}
        />
      </div>
      <div className="position-absolute single-text-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "STA STM FLW 1",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AHP_MAS_001_FT",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "STA STM FLW 2",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AHP_MAS_002_FT",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "W1_AHP_MAS_FIC1_001",
            useClass: "greenTxt mt-3",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "STA STM FLW CMP",
          }}
        />
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div>
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_BD_MOV_002_OLS", closeLabel: "W1_AHP_BD_MOV_002_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_BD_MOV_002_OLS", closeLabel: "W1_AHP_BD_MOV_002_CLS" })}`}
            label="W1_AHP_BD_MOV_002_OLS"
          />
        </div>
        <div>
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_BD_MOV_001_OLS", closeLabel: "W1_AHP_BD_MOV_001_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_BD_MOV_001_OLS", closeLabel: "W1_AHP_BD_MOV_001_CLS" })}`}
            label="W1_AHP_BD_MOV_001_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div>
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_ALP_BD_MOV_001_OLS", closeLabel: "W1_ALP_BD_MOV_001_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_ALP_BD_MOV_001_OLS", closeLabel: "W1_ALP_BD_MOV_001_CLS" })}`}
            label="W1_ALP_BD_MOV_001_OLS"
          />
        </div>
        <div>
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_ALP_BD_MOV_002_OLS", closeLabel: "W1_ALP_BD_MOV_002_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_ALP_BD_MOV_002_OLS", closeLabel: "W1_ALP_BD_MOV_002_CLS" })}`}
            label="W1_ALP_BD_MOV_002_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "W1_AHP_BD_MOV_002_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4",
              label: "FW TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AHP_FW_001_TT",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "W1_AHP_BD_MOV_001_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "EBD REG",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "CBD REG",
          }}
        />
      </div>
      <div className="img-101 position-absolute single-text-16"></div>
      <div className="position-absolute single-text-17 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "GAS OLET",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 bg-info p-1",
            label: "CPH-3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 bg-info p-1",
            label: "CPH-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 bg-info p-1",
            label: "CPH-1",
          }}
        />
        <div className="ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FLG AT I/L TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_A_FLG_008_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 bg-info p-1",
            label: "LP EVAP",
          }}
        />
        <div className="ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FLG AT I/L LP  EVAP TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_A_FLG_007_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 bg-info p-1",
            label: "ECO",
          }}
        />
        <div className="ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FLG AT I/L HP  ECO TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_A_FLG_006_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 bg-info p-1",
            label: "LP SH",
          }}
        />
        <div className="ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FLG AT I/L LP  SH TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_A_FLG_005_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 bg-info p-1",
            label: "HP EVAP",
          }}
        />
        <div className="ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FLG AT I/L HP  EVAP TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_A_FLG_004_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 bg-info p-1",
            label: "HP PSH",
          }}
        />
        <div className="ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FLG AT I/L HP PSH TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_A_FLG_003_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 bg-info p-1",
            label: "HP FSH",
          }}
        />
        <div className="ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FLG AT I/L HP FSH TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_A_FLG_002_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute pipeVr single-text-18  p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "DOSING TANK",
          }}
        />
      </div>
      <div className="position-absolute  single-text-19 d-flex">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_A_CHD_001_LS")}`} label="W1_A_CHD_001_LS" text="L" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LVL SW",
          }}
        />
      </div>

      <div className="position-absolute  single-text-21 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DEA_TMP",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_DEA_FW_TT_002",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AHP_FW_001_PT",
              useClass: "greenTxt mt-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute  single-text-22 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FW FLW CMP",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AHP_FW_FI_002A",
              useClass: "greenTxt mt-2",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AHP_FW_FCV_001_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FW FLW-1",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AHP_FW_002_FT",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "FW FLW-2",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AHP_FW_003_FT",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute  single-text-23 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_FW_MOV_01_OLS", closeLabel: "W1_AHP_FW_MOV_01_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_FW_MOV_01_OLS", closeLabel: "W1_AHP_FW_MOV_01_CLS" })}`}
          label="W1_AHP_FW_MOV_01_OLS"
        />

        <div className="d-flex gap-1">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_AHP_FW_FCV_001_CLS")}`} label="W1_AHP_FW_FCV_001_CLS" text="C" />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_FW_FCV_001_OLS", closeLabel: "W1_AHP_FW_FCV_001_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_FW_FCV_001_OLS", closeLabel: "W1_AHP_FW_FCV_001_CLS" })}`}
            label="W1_AHP_FW_FCV_001_OLS"
          />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_AHP_FW_FCV_001_OLS")}`} label="W1_AHP_FW_FCV_001_OLS" text="O" />
        </div>
      </div>
      <div className="position-absolute  single-text-24 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FCV UP STRM VLV",
            }}
          />

          <MimicCaret
            parentClass="tringle-item position-absolute"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_FW_MOV_02_OLS", closeLabel: "W1_AHP_FW_MOV_02_CLS" })}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_FW_MOV_02_OLS", closeLabel: "W1_AHP_FW_MOV_02_CLS" })}`}
            label="W1_AHP_FW_MOV_02_OLS"
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FCV-2 AUTO",
            }}
          />
          <div className="d-flex gap-1 mt-1">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_AHP_FW_FCV_002_CLS")}`} label="W1_AHP_FW_FCV_002_CLS" text="C" />

            <MimicCaret
              parentClass="tringle-item"
              firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_FW_FCV_002_OLS", closeLabel: "W1_AHP_FW_FCV_002_CLS" })}`}
              secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_FW_FCV_002_OLS", closeLabel: "W1_AHP_FW_FCV_002_CLS" })}`}
              label="W1_AHP_FW_FCV_002_OLS"
            />
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_AHP_FW_FCV_002_OLS")}`} label="W1_AHP_FW_FCV_002_OLS" text="O" />
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-25">
        <BlackContainer
          data={{
            label: "W1_AHP_MAS_001_TT",
            useClass: "greenTxt mt-2  ml-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute  single-text-27">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FW FLW CMP",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AHP_FW_FI_001A",
            useClass: "greenTxt mt-2",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "W2_AHP_FW_001_FT",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AHP_FW_001_FT",
            useClass: "greenTxt mt-2",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute  single-text-28">
        <BlackContainer
          data={{
            label: "W1_AHP_MAS_PCV_001_ZT",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute  single-text-30">
        <BlackContainer
          data={{
            label: "W1_AHP_MAS_003_FT",
            useClass: "greenTxt mt-2",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AHP_MAS_004_FT",
            useClass: "greenTxt mt-2",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute  single-text-31 d-flex flex-column">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_MAS_MOV_002_OLS", closeLabel: "W1_AHP_MAS_MOV_002_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_MAS_MOV_002_OLS", closeLabel: "W1_AHP_MAS_MOV_002_CLS" })}`}
          label="W1_AHP_MAS_MOV_002_OLS"
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_MAS_MOV_001_OLS", closeLabel: "W1_AHP_MAS_MOV_001_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_MAS_MOV_001_OLS", closeLabel: "W1_AHP_MAS_MOV_001_CLS" })}`}
          label="W1_AHP_MAS_MOV_001_OLS"
        />
      </div>
      <BlackContainer
        data={{
          label: "W1_AHP_MAS_FIC_002",
          useClass: "greenTxt mt-2 position-absolute  single-text-32",
          unit: "tph",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute  single-text-33">
        <div>
          <BlackContainer
            data={{
              label: "W1_AHP_FW_TCV_001_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-3">
          <BlackContainer
            data={{
              label: "W1_AHP_FW_TCV_002_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "W1_AHP_MAS_MOV_002_ZT",
          useClass: "greenTxt mt-2 position-absolute  single-text-34",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute  single-text-35">
        <div className="d-flex gap-1">
          <BlackContainer
            data={{
              label: "W1_AHP_MAS_003_PT",
              useClass: "greenTxt mt-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AHP_MAS_004_PT",
              useClass: "greenTxt mt-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "W1_AHP_MAS_PI_002",
            useClass: "greenTxt mt-3 mx-auto",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute  single-text-36">
        <BlackContainer
          data={{
            label: "W1_AHP_MAS_004_TT",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AHP_MAS_005_TT",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_AHP_MAS_TIC_002",
            useClass: "greenTxt mt-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute  single-text-37">
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ATTMP TMP-1",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AHP_MAS_002_TT",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ATTMP TMP-2",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_AHP_MAS_003_TT",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute  single-text-38">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_MAS_MOV_003_OLS", closeLabel: "W1_AHP_MAS_MOV_003_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_AHP_MAS_MOV_003_OLS", closeLabel: "W1_AHP_MAS_MOV_003_CLS" })}`}
          label="W1_AHP_MAS_MOV_003_OLS"
        />
      </div>
      <div className="position-absolute  single-text-39 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("W1_AHP_MAS_PCV_001_CLS")}`} label="W1_AHP_MAS_PCV_001_CLS" text="C" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("W1_AHP_MAS_PCV_001_OLS")}`} label="W1_AHP_MAS_PCV_001_OLS" text="O" />
      </div>
      <div className="position-absolute  single-text-40 d-flex">
        <div className="containerImage"></div>
        <div className="containerImage"></div>
      </div>
      <div className="position-absolute  single-text-41 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "W1_A_FLG_001_PT",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_A_FLG_001_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACTIVE POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_MW001",
              useClass: "greenTxt mt-2",
              unit: "MW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute  single-text-42 d-flex flex-column">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_A_FLG_001_LSHH")}`} label="W1_A_FLG_001_LSHH" text="H" />
        <MotorCircleDigitalTag className={`dot ml-1 digital-tag ${useColorStatus("W1_A_FLG_001_LSH")}`} label="W1_A_FLG_001_LSH" text="L" />
        <MotorCircleDigitalTag className={`dot  ml-2 digital-tag ${useColorStatus("W1_A_FLG_001_LSL")}`} label="W1_A_FLG_001_LSL" text="L" />
      </div>
      <div className="position-absolute  single-text-43 d-flex flex-column">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_A_FLG_002_LSHH")}`} label="W1_A_FLG_002_LSHH" text="H" />
        <MotorCircleDigitalTag className={`dot ml-1 digital-tag ${useColorStatus("W1_A_FLG_002_LSH")}`} label="W1_A_FLG_002_LSH" text="L" />
        <MotorCircleDigitalTag className={`dot  ml-2 digital-tag ${useColorStatus("W1_A_FLG_002_LSL")}`} label="W1_A_FLG_002_LSL" text="L" />
      </div>
      <div className="position-absolute  single-text-44">
        <BlackContainer
          data={{
            label: "W1_A_FLG_DP",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute  single-text-45 ">
        <div className="dot-square-line d-flex flex-column align-items-center mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "W1_AHP_CDS_MOV_001_OLS",
              closeLabel: "W1_AHP_CDS_MOV_001_CLS",
              healthyLabel: "W1_AHP_CDS_MOV_001_PH",
            })}`}
            label="W1_AHP_CDS_MOV_001_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className="square grey-color"></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "W1_AHP_CDS_MOV_002_OLS",
              closeLabel: "W1_AHP_CDS_MOV_002_CLS",
              healthyLabel: "W1_AHP_CDS_MOV_002_PH",
            })}`}
            label="W1_AHP_CDS_MOV_002_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className="square grey-color"></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "W1_AHP_CDS_MOV_003_OLS",
              closeLabel: "W1_AHP_CDS_MOV_003_CLS",
              healthyLabel: "W1_AHP_CDS_MOV_003_PH",
            })}`}
            label="W1_AHP_CDS_MOV_003_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className="square grey-color"></div>
        </div>
      </div>

      <div className="position-absolute  single-text-46">
        <BlackContainer
          data={{
            label: "W1_ALP_MAS_001_FT",
            useClass: "greenTxt mt-4",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_ALP_MAS_002_FT",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute  single-text-47 d-flex">
        <BlackContainer
          data={{
            label: "W1_ALP_BD_MOV_001_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_ALP_BD_MOV_002_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute  single-text-48 d-flex">
        <BlackContainer
          data={{
            label: "W1_ALP_FW_FCV_002_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "W1_ALP_FW_FCV_001_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute  single-text-49 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_ALP_FW_FCV_002_CLS")}`} label="W1_ALP_FW_FCV_002_CLS" text="P" />
          <MotorCircleDigitalTag className={`dot  ml-3 digital-tag ${useColorStatus("W1_ALP_FW_FCV_002_OLS")}`} label="W1_ALP_FW_FCV_002_OLS" text="P" />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_ALP_FW_FCV_001_OLS")}`} label="W1_ALP_FW_FCV_001_OLS" text="P" />
          <MotorCircleDigitalTag className={`dot  ml-3 digital-tag ${useColorStatus("W1_ALP_FW_FCV_001_CLS")}`} label="W1_ALP_FW_FCV_001_CLS" text="P" />
        </div>
      </div>
      <div className="position-absolute  single-text-50 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_ALP_FW_MOV_02_OLS", closeLabel: "W1_ALP_FW_MOV_02_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_ALP_FW_MOV_02_OLS", closeLabel: "W1_ALP_FW_MOV_02_CLS" })}`}
          label="W1_ALP_FW_MOV_02_OLS"
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_ALP_FW_MOV_01_OLS", closeLabel: "W1_ALP_FW_MOV_01_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_ALP_FW_MOV_01_OLS", closeLabel: "W1_ALP_FW_MOV_01_CLS" })}`}
          label="W1_ALP_FW_MOV_01_OLS"
        />
      </div>
      <div className="position-absolute  single-text-51">
        <BlackContainer
          data={{
            label: "W1_ALP_FW_001_PT",
            useClass: "greenTxt",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_ALP_FW_001_FT",
            useClass: "greenTxt mt-5",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_ALP_FW_002_FT",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_ALP_FW_FI_001A",
            useClass: "greenTxt mt-1",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute  single-text-52 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "W1_ALP_MAS_001_TT",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_ALP_MAS_002_TT",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_ALP_MAS_TIC_002",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "W1_ALP_MAS_003_PT",
              useClass: "greenTxt",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_ALP_MAS_004_PT",
              useClass: "greenTxt mt-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_ALP_MAS_PI_002",
              useClass: "greenTxt mt-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute  single-text-53 d-flex flex-column">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_ALP_MAS_MOV_002_OLS", closeLabel: "W1_ALP_MAS_MOV_002_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_ALP_MAS_MOV_002_OLS", closeLabel: "W1_ALP_MAS_MOV_002_CLS" })}`}
          label="W1_ALP_MAS_MOV_002_OLS"
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_ALP_MAS_MOV_001_OLS", closeLabel: "W1_ALP_MAS_MOV_001_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_ALP_MAS_MOV_001_OLS", closeLabel: "W1_ALP_MAS_MOV_001_CLS" })}`}
          label="W1_ALP_MAS_MOV_001_OLS"
        />
      </div>
      <BlackContainer
        data={{
          label: "W1_ALP_MAS_PCV_001_ZT",
          useClass: "greenTxt mt-1 position-absolute  single-text-54",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "W1_ALP_MAS_MOV_002_ZT",
          useClass: "greenTxt mt-1 position-absolute  single-text-55",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "W1_ALP_MAS_FIC_001",
          useClass: "greenTxt mt-1 position-absolute  single-text-57",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute  single-text-58 box-1 d-flex">
        <div className="box-1 d-flex p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "BD LEVEL",
            }}
          />
          <MotorCircleDigitalTag className={`square ml-3 digital-tag  ${useColorStatus("W3_A_BD_001_LSL")}`} label="W3_A_BD_001_LSL" />
        </div>
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FRESH AIR BD",
            }}
          />
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "W1_A_FLG_BL_001_SI",
                useClass: "greenTxt mt-1",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <div>
              <div className="yellowline-Vr upArrow  position-absolute line-a"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ml-3 ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "W1_A_FLG_BL_001_RUN", healthyLabel: "W1_A_FLG_BL_001_PH" })}`}
                label="W1_A_FLG_BL_001_RUN"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "W1_A_FLG_MLD_001_ZT",
              useClass: "greenTxt mt-1 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "BYPASS DAMPER",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_A_FLG_MLD_002_ZT",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute  single-text-59 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "W1_A_FLG_SG001_SV_OLS",
              closeLabel: "W1_A_FLG_SG001_SV_CLS",
              healthyLabel: "W1_A_FLG_SG001_SV_PH",
            })}`}
            label="W1_A_FLG_SG001_SV_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className="square grey-color"></div>
        </div>
        <div className="dot-square-line d-flex flex-column align-items-center mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "W1_A_FLG_SG002_SV_OLS",
              closeLabel: "W1_A_FLG_SG002_SV_CLS",
              healthyLabel: "W1_A_FLG_SG002_SV_PH",
            })}`}
            label="W1_A_FLG_SG002_SV_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className="square grey-color"></div>
        </div>
      </div>
      <div className=" position-absolute  single-text-60 box-1 p-1">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DPC-358.02 RUN",
            }}
          />
          <MotorCircleDigitalTag className={`dot ml-2 digital-tag ${useColorStatus("W1_DPC_2_RUN")}`} label="W1_DPC_2_RUN" />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "DPC-358.01 RUN",
            }}
          />
          <MotorCircleDigitalTag className={`dot ml-2 digital-tag ${useColorStatus("W1_DPC_1_RUN")}`} label="W1_DPC_1_RUN" />
        </div>
      </div>
      <div className=" position-absolute  single-text-61 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "ISOL_STRTUP VENT",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${{ openLabel: "WC_PSS_MOV_05_OLS", closeLabel: "WC_PSS_MOV_05_CLS" }}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${{ openLabel: "WC_PSS_MOV_05_OLS", closeLabel: "WC_PSS_MOV_05_CLS" }}`}
          label="WC_PSS_MOV_05_OLS"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute  single-text-62",
          label: "TO SAFE HEIGHT",
        }}
      />
      <div className=" position-absolute  single-text-63 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FCV ISOL VALV",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FCV ISOL VALV",
          }}
        />
      </div>
      <div className=" position-absolute  single-text-64 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CBD REG",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "EBD REG",
          }}
        />
      </div>
      <div className=" position-absolute  single-text-65 bg-info p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FROM: LINE 1 AQC",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ECO INLET",
          }}
        />
      </div>
      <div className=" position-absolute  single-text-66 bg-info p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LP STEAM FROM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LINK-1 PH BOILER",
          }}
        />
      </div>
      <div className=" position-absolute  single-text-67 bg-info p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO LP  MIXING POINT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "NEAR LINK 2",
          }}
        />
      </div>
      <div className=" position-absolute  single-text-68 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO BD TANK",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO BD TANK",
          }}
        />
      </div>
      <div className=" position-absolute  single-text-69 d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CPH-1 I/L ISOL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CPH-2 I/L ISOL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CPH-2 I/L ISOL",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "W1_AHP_FW_FCV_002_ZT",
          useClass: "greenTxt  position-absolute  single-text-70",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute  single-text-71",
          label: "FCV-AUTO",
        }}
      />
      <div className="position-absolute  single-text-72">
        <i class="fas fa-long-arrow-alt-up"></i>
      </div>
      <div className="position-absolute  single-text-73">
        <i class="fas fa-long-arrow-alt-up"></i>
      </div>
      <div className="position-absolute  single-text-74">
        <i class="fas fa-long-arrow-alt-up"></i>
      </div>
      <div className="position-absolute  single-text-75">
        <i class="fas fa-long-arrow-alt-up"></i>
      </div>

      <div className="yellowline-Vr  position-absolute line-1"></div>
      <div className="yellowline-Hr  position-absolute line-2 d-flex align-items-center justify-content-around">
        <i className="fa-solid  fa-caret-left"></i>
      </div>
      <div className="yellowline-Hr  position-absolute line-3 d-flex align-items-center justify-content-center">
        <i className="fa-solid  fa-caret-righr"></i>
      </div>
      <div className="yellowline-Vr  position-absolute line-4"></div>
      <div className="yellowline-Hr  position-absolute line-5"></div>
      <div className="yellowline-Hr  position-absolute line-6"></div>
      <div className="yellowline-Vr  position-absolute line-7"></div>
      <div className="yellowline-Vr  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr  position-absolute line-11 d-flex align-items-center justify-content-center">
        <div>
          <i className="fa-solid  fa-caret-down"></i>
          <i className="fa-solid mt-5 fa-caret-down"></i>
        </div>
      </div>
      <div className="yellowline-Hr  position-absolute line-12"></div>
      <div className="yellowline-Vr  position-absolute line-13"></div>
      <div className="yellowline-Hr  position-absolute line-14"></div>
      <div className="yellowline-Vr  position-absolute line-15"></div>
      <div className="yellowline-Hr  position-absolute line-16 d-flex align-items-center justify-content-around">
        <i className="fa-solid  fa-caret-left"></i>
      </div>
      <div className="yellowline-Vr  position-absolute line-17"></div>
      <div className="yellowline-Hr  position-absolute line-18 d-flex align-items-center justify-content-around">
        <i className="fa-solid  fa-caret-left"></i>
      </div>
      <div className="yellowline-Hr  position-absolute line-19"></div>
      <div className="yellowline-Vr  position-absolute line-20"></div>
      <div className="yellowline-Hr  position-absolute line-21 d-flex align-items-center justify-content-around">
        <i className="fa-solid  fa-caret-left"></i>
      </div>
      <div className="yellowline-Hr  position-absolute line-22"></div>
      <div className="yellowline-Vr  position-absolute line-23"></div>
      <div className="yellowline-Vr  position-absolute line-24"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-25"></div>
      <div className="yellowline-Vr  position-absolute line-26"></div>
      <div className="yellowline-Hr  position-absolute line-27"></div>
      <div className="yellowline-Hr  position-absolute line-28"></div>
      <div className="yellowline-Vr  position-absolute line-29"></div>
      <div className="yellowline-Hr  position-absolute line-30"></div>
      <div className="yellowline-Vr  position-absolute line-31"></div>
      <div className="yellowline-Hr  position-absolute line-32 d-flex align-items-center justify-content-around">
        <i className="fa-solid  fa-caret-right"></i>
      </div>
      <div className="yellowline-Hr rightarrow position-absolute line-33"></div>
      <div className="yellowline-Hr  position-absolute line-34"></div>
      <div className="yellowline-Hr  position-absolute line-35"></div>
      <div className="yellowline-Vr  position-absolute line-36 d-flex align-items-center justify-content-center">
        <i className="fa-solid  fa-caret-down"></i>
      </div>
      <div className="yellowline-Vr  position-absolute line-37"></div>
      <div className="yellowline-Hr  position-absolute line-38"></div>
      <div className="yellowline-Vr  position-absolute line-39"></div>
      <div className="yellowline-Hr  position-absolute line-40  d-flex align-items-center">
        <i className="fa-solid ml-5 fa-caret-right"></i>
      </div>
      <div className="yellowline-Vr  position-absolute line-41"></div>
      <div className="yellowline-Vr  position-absolute line-42"></div>
      <div className="yellowline-Hr  position-absolute line-43"></div>
      <div className="yellowline-Hr  position-absolute line-44"></div>
      <div className="yellowline-Vr downArrow position-absolute line-45"></div>
      <div className="yellowline-Vr downArrow position-absolute line-46"></div>
      <div className="yellowline-Vr  position-absolute line-47 d-flex align-items-center justify-content-center">
        <i className="fa-solid  fa-caret-up"></i>
      </div>
      <div className="yellowline-Hr  position-absolute line-48"></div>
      <div className="yellowline-Vr  position-absolute line-49"></div>
      <div className="yellowline-Hr  position-absolute line-50 d-flex align-items-center justify-content-around">
        <i className="fa-solid  fa-caret-left"></i>
      </div>
      <div className="yellowline-Vr  position-absolute line-51"></div>
      <div className="yellowline-Vr  position-absolute line-52"></div>
      <div className="yellowline-Hr  position-absolute line-53"></div>
      <div className="yellowline-Hr  position-absolute line-54"></div>
      <div className="yellowline-Vr  position-absolute line-55"></div>
      <div className="yellowline-Vr  position-absolute line-56"></div>
      <div className="yellowline-Vr upArrow position-absolute line-57"></div>
      <div className="yellowline-Hr  position-absolute line-58 d-flex align-items-center justify-content-around">
        <i className="fa-solid  fa-caret-right"></i>
      </div>
      <div className="yellowline-Hr  position-absolute line-59 d-flex align-items-center justify-content-around">
        <i className="fa-solid  fa-caret-left"></i>
      </div>
    </div>
  );
};

import { useBVTagsColorStatusForNewPlantScreens, useColorStatus, useMotorTagsColorStatusForNewPlantScreens } from "../../../../../utils";
import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, MimicCaret } from "../../../../index";

export const TurbineSteamVikramWHRS = () => {
  return (
    <div className="TurbineSteamPathSystem  w-100 h-100 position-relative">
      <div className="yellowline-Hr  position-absolute line-1"></div>
      <div className="yellowline-Hr  position-absolute line-2"></div>
      <div className="yellowline-Hr  position-absolute line-3"></div>
      <div className="yellowline-Vr  position-absolute line-4"></div>
      <div className="yellowline-Hr  position-absolute line-5"></div>
      <div className="yellowline-Vr  position-absolute line-6"></div>
      <div className="yellowline-Vr  position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow position-absolute line-8"></div>
      <div className="yellowline-Hr  position-absolute line-9"></div>
      <div className="yellowline-Vr  position-absolute line-10"></div>
      <div className="yellowline-Vr  position-absolute line-11"></div>
      <div className="yellowline-Vr  position-absolute line-12"></div>
      <div className="yellowline-Vr  position-absolute line-13"></div>
      <div className="yellowline-Vr  position-absolute line-14"></div>
      <div className="yellowline-Vr  position-absolute line-15"></div>
      <div className="yellowline-Vr  position-absolute line-16"></div>
      <div className="yellowline-Vr  position-absolute line-17"></div>
      <div className="yellowline-Hr  position-absolute line-18"></div>
      <div className="yellowline-Hr  position-absolute line-19"></div>
      <div className="yellowline-Hr  position-absolute line-20"></div>
      <div className="yellowline-Hr  position-absolute line-21"></div>
      <div className="yellowline-Vr  position-absolute line-22"></div>
      <div className="yellowline-Vr  position-absolute line-23"></div>
      <div className="yellowline-Hr  position-absolute line-24"></div>
      <div className="yellowline-Hr  position-absolute line-25"></div>
      <div className="yellowline-Vr  position-absolute line-26"></div>
      <div className="yellowline-Vr  position-absolute line-27"></div>
      <div className="yellowline-Vr  position-absolute line-28"></div>
      <div className="yellowline-Vr  position-absolute line-29"></div>
      <div className="yellowline-Vr  position-absolute line-30"></div>
      <div className="yellowline-Vr  position-absolute line-31"></div>
      <div className="yellowline-Hr  position-absolute line-32"></div>
      <div className="yellowline-Hr  position-absolute line-33"></div>
      <div className="yellowline-Hr  position-absolute line-34"></div>
      <div className="yellowline-Hr  position-absolute line-35"></div>
      <div className="yellowline-Vr  position-absolute line-36"></div>
      <div className="yellowline-Vr  position-absolute line-37"></div>
      <div className="yellowline-Vr  position-absolute line-38"></div>
      <div className="yellowline-Vr  position-absolute line-39"></div>
      <div className="yellowline-Vr  position-absolute line-40"></div>

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
                label: "INJ_STEM_TEMP_MED",
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
      <div className="position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "ACTUAL FLW",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_102_FT",
            useClass: "greenTxt mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "COMP FLW",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_102_FTC",
            useClass: "greenTxt mt-2",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-3">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_STG_MAS_107_PS")}`} label="W1_STG_MAS_107_PS" text="P" />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_110_PT",
              useClass: "greenTxt ml-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_STG_MAS_108_PS")}`} label="W1_STG_MAS_108_PS" text="P" />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_111_PT",
              useClass: "greenTxt ml-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_STG_MAS_109_PS")}`} label="W1_STG_MAS_109_PS" text="P" />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_112_PT",
              useClass: "greenTxt ml-2",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "W3-STG-MAS-PTII0",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_LP_ST_PT_MED",
            useClass: "greenTxt  mt-2",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-5 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "W3-STG-MAS-TII112/113/114/115",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_112_TT",
            useClass: "greenTxt  mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_113_TT",
            useClass: "greenTxt  mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_114_TT",
            useClass: "greenTxt  mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_115_TT",
            useClass: "greenTxt  mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-6 text-center">
        <BlackContainer
          data={{
            label: "INJ_STEM_TEMP_MED",
            useClass: "greenTxt  mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-7 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LP STEAM TO",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TURBINE EXTERNAL",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-8 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HP",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "MAIN SIEAM",
          }}
        />
      </div>
      <div className="position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "ACTUAL FLW",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_101_FT",
            useClass: "greenTxt mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "COMP FLW",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_101_FTC",
            useClass: "greenTxt mt-2",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-10">
        <BlackContainer
          data={{
            label: "W1_STG_MAS_101_PT",
            useClass: "greenTxt mt-2",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_102_PT",
            useClass: "greenTxt mt-2",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_103_PT",
            useClass: "greenTxt mt-2",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PT_101/102/103",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_STEAM_PT_MED",
            useClass: "greenTxt  mt-2",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-12">
        <BlackContainer
          data={{
            label: "W1_STG_MAS_101_TT",
            useClass: "greenTxt  mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_102_TT",
            useClass: "greenTxt  mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_103_TT",
            useClass: "greenTxt  mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "W1_STG_MAS_TT_101/102/103",
          }}
        />
      </div>
      <div className="position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "W1_STG_MAS_STEAM_TT_MED",
            useClass: "greenTxt  mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-14 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BLOWING STEAM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "OPEN TO ATM",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "W1_STG_MAS_101A_FTC",
            useClass: "greenTxt  mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_101A_FT",
            useClass: "greenTxt  mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "T1-PRESET 720 MIN",
            }}
          />
          <BlackContainer
            data={{
              label: "T1_TIMER_ACC",
              useClass: "greenTxt ml-2",
              unit: "MIN",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "T2-PRESET 8760 HRS",
            }}
          />
          <BlackContainer
            data={{
              label: "T2_TIMER_ACC",
              useClass: "greenTxt ml-2",
              unit: "HRS",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17 box-1 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TURBINE CASING TEMPERA TURE",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Turbing Casing Top Temp. ",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_108_TT",
              useClass: "greenTxt  mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Turbing Casing Inner Temp. ",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_110_TT",
              useClass: "greenTxt  mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Turbing Casing Center Temp. ",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_111_TT",
              useClass: "greenTxt  mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Turbing Casing bottom Temp. ",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_109_TT",
              useClass: "greenTxt  mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Turbing Kendal Probe-1 Temp. ",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_116_TT",
              useClass: "greenTxt  mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Turbing Kendal Probe-2 Temp. ",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_117_TT",
              useClass: "greenTxt  mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Turbing Kendal Probe-3 Temp. ",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_118_TT",
              useClass: "greenTxt  mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 box-1 p-1">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "M1_STG_GCB_ON",
            }}
          />

          <MotorCircleDigitalTag className={`dot mt-1 ml-auto digital-tag ${useColorStatus("W1_STG_GCB_ON")}`} label="W1_STG_GCB_ON" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "MAIN STEAM TEMP BOILER",
          }}
        />
        <BlackContainer
          data={{
            label: "TIXXXA",
            useClass: "greenTxt  mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "TIXXXB",
              useClass: "greenTxt  mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "MS_BOILER_MED",
              useClass: "greenTxt  mt-1 ml-4",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "TIXXXC",
            useClass: "greenTxt  mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-19"></div>
      <div className="triangle-with-squares position-absolute single-text-20"></div>
      <div className="bg-light position-absolute single-text-21 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AUXILARY STEAM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "EXTERNAL",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-22 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ESV DRAIN -1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "DRAIN SYSTEM",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-23 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "VALVE CHEST DRAIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "DRAIN SYSTEM",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-24 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AK-2 DRAIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: " TO DRAIN SYSTEM",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-25 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WHEEL CHAMBER DRAIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: " DRAIN SYSTEM",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-26 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CASING DRAIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: " DRAIN SYSTEM",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-27 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "INJECNON LINE DRAIN-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TO DRAIN SYSTEM",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-28 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AK DRAIN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: " TO DRAIN SYSTEM",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-29 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "EXHAUST CASING DRAIN-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: " TO DRAIN SYSTEM",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-30 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "EXHAUST CASING DRAIN-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: " TO DRAIN SYSTEM",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-31 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CEP DISCHARGE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "COND SYSTEM",
          }}
        />
      </div>
      <div className="bg-light position-absolute single-text-32 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: " TO ACC EXTERNAL",
          }}
        />
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_STG_MAS_101_PS")}`} label="W1_STG_MAS_101_PS" text="P" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_STG_MAS_102_PS")}`} label="W1_STG_MAS_102_PS" text="P" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_STG_MAS_103_PS")}`} label="W1_STG_MAS_103_PS" text="P" />
      </div>
      <div className="position-absolute single-text-34">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "WC_PSS_MOV_05_OLS", closeLabel: "WC_PSS_MOV_05_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "WC_PSS_MOV_05_OLS", closeLabel: "WC_PSS_MOV_05_CLS" })}`}
          label="WC_PSS_MOV_05_OLS"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-35",
          label: "STG-MAS-PAHH101/102/103",
        }}
      />
      <MotorCircleDigitalTag className={`square digital-tag position-absolute single-text-36 ${useColorStatus("TURB_LSTAGE_TEMP_TR")}`} label="TURB_LSTAGE_TEMP_TR" />
      <div className=" position-absolute single-text-37 d-flex">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_STG_MAS_101_DPS")}`} label="W1_STG_MAS_101_DPS" text="P" />
      </div>
      <div className="position-absolute single-text-38">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "WC_PSS_MOV_04_OLS", closeLabel: "WC_PSS_MOV_04_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "WC_PSS_MOV_04_OLS", closeLabel: "WC_PSS_MOV_04_CLS" })}`}
          label="WC_PSS_MOV_04_OLS"
        />
        {/* <MimicCaret parentClass="tringle-item" firstCaretClass={`fa-solid fa-caret-down d-block ${"541SG1"}`} secondCaretClass={`fa-solid fa-caret-up d-block ${"541SG1"}`} /> */}
      </div>
      <div className="position-absolute single-text-39">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_STG_MAS_105_OLS", closeLabel: "W1_STG_MAS_105_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_STG_MAS_105_OLS", closeLabel: "W1_STG_MAS_105_CLS" })}`}
          label="W1_STG_MAS_105_OLS"
        />
      </div>
      <div className=" position-absolute single-text-40 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("W1_STG_MAS_105_CLS")}`} label="W1_STG_MAS_105_CLS" text="C" />
        <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("W1_STG_MAS_105_OLS")}`} label="W1_STG_MAS_105_OLS" text="O" />
      </div>
      <div className=" position-absolute single-text-41 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "W1-STG-MAS-PCV01",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_PCV101_ZT",
            useClass: "greenTxt  mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-42 ">
        <BlackContainer
          data={{
            label: "W1_STG_MAS_PCV101",
            useClass: "greenTxt  mt-1",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "W1_STG_MAS_PCV101_SP",
              useClass: "greenTxt  mt-1 ml-5",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-43 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Turbine Exh to ACC Ext Pressure",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_EXT_PT_MED",
            useClass: "greenTxt  mt-1",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-44 text-center d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "W1_STG_MAS_104_PT",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_104_PT",
              useClass: "greenTxt  mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "W1_STG_MAS_106_PT",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_106_PT",
              useClass: "greenTxt  mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "W1_STG_MAS_105_PT",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_105_PT",
              useClass: "greenTxt  mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-45">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_STG_MAS_102_OLS", closeLabel: "W1_STG_MAS_102_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_STG_MAS_102_OLS", closeLabel: "W1_STG_MAS_102_CLS" })}`}
          label="W1_STG_MAS_102_OLS"
        />
      </div>
      <div className=" position-absolute single-text-46 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("W1_STG_MAS_102_OLS")}`} label="W1_STG_MAS_102_OLS" text="O" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("W1_STG_MAS_102_CLS")}`} label="W1_STG_MAS_102_CLS" text="C" />
      </div>
      <div className=" position-absolute single-text-47 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "W1_STG_MAS_PT_107/108/109",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MAS_107_PT",
            useClass: "greenTxt  mt-2",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "W1_STG_MAS_108_PT",
              useClass: "greenTxt  mt-1",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_MAS_EXT_PT_MED",
              useClass: "greenTxt  mt-1 ml-4",
              unit: "Kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "W1_STG_MAS_109_PT",
            useClass: "greenTxt  mt-1",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-48 ">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TURBINE SPEED",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_PCS_901_SI",
              useClass: "greenTxt  ml-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACRIVE POWER",
            }}
          />
          <BlackContainer
            data={{
              label: "W1_STG_MW001",
              useClass: "greenTxt  ml-2",
              unit: "MW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-49 d-flex">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_STG_MAS_104_PS")}`} label="W1_STG_MAS_104_PS" text="P" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_STG_MAS_105_PS")}`} label="W1_STG_MAS_105_PS" text="P" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("W1_STG_MAS_106_PS")}`} label="W1_STG_MAS_106_PS" text="P" />
      </div>
      <div className=" position-absolute single-text-50 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ACTIVE POWER",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MW001",
            useClass: "greenTxt  mt-1",
            unit: "MW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MW002",
            useClass: "greenTxt  mt-1",
            unit: "MW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MW003",
            useClass: "greenTxt  mt-1",
            unit: "MW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_STG_MW004",
            useClass: "greenTxt  mt-1",
            unit: "MW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-51">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_STG_CDS_103_OLS", closeLabel: "W1_STG_CDS_103_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_STG_CDS_103_OLS", closeLabel: "W1_STG_CDS_103_CLS" })}`}
          label="W1_STG_CDS_103_OLS"
        />
      </div>
      <div className=" position-absolute single-text-52 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("W1_STG_CDS_103_OLS")}`} label="W1_STG_CDS_103_OLS" text="O" />
        <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("W1_STG_CDS_103_CLS")}`} label="W1_STG_CDS_103_CLS" text="C" />
      </div>
      <div className="position-absolute single-text-53">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_STG_CDS_104_OLS", closeLabel: "W1_STG_CDS_104_CLS" })}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens({ openLabel: "W1_STG_CDS_104_OLS", closeLabel: "W1_STG_CDS_104_CLS" })}`}
          label="W1_STG_CDS_104_OLS"
        />
      </div>
      <div className=" position-absolute single-text-54 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("W1_STG_CDS_104_OLS")}`} label="W1_STG_CDS_104_OLS" text="O" />
        <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("W1_STG_CDS_104_CLS")}`} label="W1_STG_CDS_104_CLS" text="C" />
      </div>
      <div className=" position-absolute single-text-55 text-center d-flex">
        <div>
          <BlackContainer
            data={{
              label: "W1_STG_MAS_105_TT",
              useClass: "greenTxt  mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "W3_STG_MAS_TT105",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "W1_STG_MAS_106_TT",
              useClass: "greenTxt  mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "W1_STG_MAS_TT106",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "W1_STG_MAS_107_TT",
              useClass: "greenTxt  mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "W3_STG_MAS_TT107",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "W1_STG_MAS_EXT_TT_MED",
          useClass: "greenTxt  mt-1 position-absolute single-text-56",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "W1_STG_CDS_113_PT",
          useClass: "greenTxt  mt-1 position-absolute single-text-57",
          unit: "Kg/cm2",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-58 d-flex">
        <MotorCircleDigitalTag className={`dot digital-tag mt-3 ${useColorStatus("START_HAND_BARRING")}`} label="START_HAND_BARRING" />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "STEAM TURBINE",
            }}
          />
          <div className="ml-4 mt-3">
            <BlackContainer
              data={{
                label: "W1_STG_MAS_111_TT",
                useClass: "greenTxt  ml-5",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "W1_STG_MAS_111",
              }}
            />
          </div>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-59",
          label: "MAS_101_DPS",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-60",
          label: "TO SAFE HEIGHT",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-2 position-absolute single-text-61 bg-info p-1",
          label: "INJ VALVE OPEN CONDITION",
        }}
      />
    </div>
  );
};

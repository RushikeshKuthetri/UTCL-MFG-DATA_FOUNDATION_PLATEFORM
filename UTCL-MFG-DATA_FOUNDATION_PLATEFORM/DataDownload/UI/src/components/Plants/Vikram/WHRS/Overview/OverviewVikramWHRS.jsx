import { useColorStatus, useMotorTagsColorStatusForNewPlantScreens } from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
} from "../../../../index";

export const OverviewVikramWHRS = () => {
  return (
    <div className="TurbineAndhra Overviewvikramwhrs w-100 h-100 position-relative">
      <div className="position-absolute w-100 single-item-1 px-2">
        <table className="w-100 table mb-0">
          <tr>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark p-1 w-100",
                  label: "BOILER PARAMETER",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark p-1 w-100",
                  label: "AQC-1 BOILER",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark p-1 w-100",
                  label: "AQC-2 BOILER",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark p-1 w-100",
                  label: "AQC-3 BOILER",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark p-1 w-100",
                  label: "PH-1 BOILER",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark p-1 w-100",
                  label: "PH-2 BOILER",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark p-1 w-100",
                  label: "PH-3 BOILER",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark p-1 w-100",
                  label: "TURBINE PARAMETER",
                }}
              />
            </th>
            <th colSpan={2}>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark p-1 w-100",
                  label: "ACC PARAMETER",
                }}
              />
            </th>
          </tr>
          {/* 1 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "MP MAIN STEAM PRESS.",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_AHP_MAS_003_PT",
                  useClass: "greenTxt",
                  unit: "Kg/cm2g",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_AHP_MAS_003_PT",
                  useClass: "greenTxt",
                  unit: "Kg/cm2g",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_PHP_MAS_PI_001",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_PHP_MAS_PI_002",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TURBINE SPEED",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_PCS_901_SI",
                    useClass: "greenTxt ml-1",
                    unit: "rpm",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex justify-content-between mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TG MAIN STM. PR.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_MAS_STEAM_PT_MED",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "DEA LEVEL",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_DEA_FW_LT_MED",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ACC FAN-1",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({runLabel:"W1_ACC_FN01_RUN",healthyLabel:"W1_ACC_FN01_PH"})}`}
                    label="W1_ACC_FN01_RUN"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>

                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2",
                    label: "ACC FAN-5",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({runLabel:"W1_ACC_FN05_RUN",healthyLabel:"W1_ACC_FN05_PH"})}`}
                    label="W1_ACC_FN05_RUN"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
              </div>
            </td>
          </tr>
          {/* 2 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "MP MAIN STEAM TEMP.",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_AHP_MAS_004_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_AHP_MAS_004_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_PHP_MAS_TI_001",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_PHP_MAS_TI_001",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TG MAIN STM. TEM.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_MAS_STEAM_TT_MED",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex justify-content-between mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TG MAIN STM. FLOW.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_MAS_101_FTC",
                    useClass: "greenTxt ml-1",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "DEA PRESS",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_DEA_FW_002_PT",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2g",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <BlackContainer
                  data={{
                    label: "W1_ACC_FN01_SI",
                    useClass: "greenTxt",
                    unit: "rpm",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_ACC_FN05_SI",
                    useClass: "greenTxt",
                    unit: "rpm",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          {/* 3 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "MP MAIN STEAM FLOW.",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_AHP_MAS_FIC_002",
                  useClass: "greenTxt",
                  unit: "tph",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_AHP_MAS_FIC_002",
                  useClass: "greenTxt",
                  unit: "tph",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_PHP_MAS_FI_001",
                  useClass: "greenTxt",
                  unit: "tph",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_PHP_MAS_FI_001",
                  useClass: "greenTxt",
                  unit: "tph",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "LP STM INJ PR",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_MAS_LP_ST_PT_MED",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex justify-content-between mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "LP STM INJ TEMP",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "INJ_STEM_TEMP_MED",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "DEA TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_DEA_FW_001_TT",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ACC FAN-2",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({runLabel:"W1_ACC_FN02_RUN",healthyLabel:"W1_ACC_FN02_PH"})}`}
                    label="W1_ACC_FN02_RUN"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>

                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2",
                    label: "ACC FAN-6",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({runLabel:"W1_ACC_FN06_RUN",healthyLabel:"W1_ACC_FN06_PH"})}`}
                    label="W1_ACC_FN06_RUN"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
              </div>
            </td>
          </tr>
          {/* 4 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "MP DRUM LEVEL.",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_AHP_FW_LI_001A",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_AHP_FW_LIT_001A",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_PHP_FW_002_LT",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_PHP_FW_LI_001A",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "LP STM LINE FLOW",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_MAS_102_FTC",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex justify-content-between mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "EXHAUST PRES.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_MAS_EXT_PT_MED",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "DM WT LEVEL.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_DMS_DM_001_LT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <BlackContainer
                  data={{
                    label: "W1_ACC_FN02_SI",
                    useClass: "greenTxt",
                    unit: "rpm",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_ACC_FN06_SI",
                    useClass: "greenTxt",
                    unit: "rpm",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          {/* 5 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "MP DRUM PRESSURE.",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_AHP_MAS_001_PT",
                  useClass: "greenTxt",
                  unit: "kg/cm2g",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_AHP_MAS_001_PT",
                  useClass: "greenTxt",
                  unit: "Kg/cm2g",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_PHP_MAS_PI_002",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_PHP_MAS_PI_001",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "EXHAUST TEMP",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_MAS_EXT_TT_MED",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="d-flex justify-content-between mt-1">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "PRDS PRESS.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_PSS_AUX_001_PT",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2g",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ACW HD PRESS.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_CWS_ACW_001_PT",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ACC FAN-3",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({runLabel:"W1_ACC_FN03_RUN",healthyLabel:"W1_ACC_FN03_PH"})}`}
                    label="W1_ACC_FN03_RUN"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>

                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2",
                    label: "ACC FAN-7",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({runLabel:"W1_ACC_FN07_RUN",healthyLabel:"W1_ACC_FN07_PH"})}`}
                    label="W1_ACC_FN07_RUN"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
              </div>
            </td>
          </tr>
          {/* 6 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "MP MAIN STEAM PRESS.",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_ALP_MAS_004_PT",
                  useClass: "greenTxt",
                  unit: "kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td> </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_PLP_MAS_PI_002",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_PLP_MAS_PI_002",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "PRDS TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_PSS_AUX_001_TT",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "HOT WELL LEVEL",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_ACC_CDS_103_LT1",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <BlackContainer
                  data={{
                    label: "W1_ACC_FN03_SI",
                    useClass: "greenTxt",
                    unit: "rpm",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_ACC_FN07_SI",
                    useClass: "greenTxt",
                    unit: "rpm",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          {/* 7 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "MP MAIN STEAM TEMP.",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_ALP_MAS_001_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td> </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_PLP_MAS_TI_001",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_PLP_MAS_TI_001",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "GLAND SEAL PRESS.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_AUX_301_PT",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CST LEVEL",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_ACC_CDS_CST_LT1_MED",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ACC FAN-4",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "W1_ACC_FN04_RUN", healthyLabel: "W1_ACC_FN04_PH" }
              )}`}
                    label="W1_ACC_FN04_RUN"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>

                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2",
                    label: "ACC FAN-8",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "W1_ACC_FN08_RUN", healthyLabel: "W1_ACC_FN08_PH" }
              )}`}
                    label="W1_ACC_FN08_RUN"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
              </div>
            </td>
          </tr>
          {/* 8 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "MP DRUM LEVEL.",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_ALP_FW_LI_001A",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td> </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_PLP_MAS_PI_001",
                  useClass: "greenTxt",
                  unit: "kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_PLP_FW_LI_001A",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "GLAND SEAL TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_AUX_302_TT",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "DRAIN LEVEL",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_TGD_253_LT1",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <BlackContainer
                  data={{
                    label: "W1_ACC_FN04_SI",
                    useClass: "greenTxt",
                    unit: "rpm",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_ACC_FN08_SI",
                    useClass: "greenTxt",
                    unit: "rpm",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          {/* 9 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "MP DRUM PRESURE.",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_ALP_FW_LI_001A",
                  useClass: "greenTxt",
                  unit: "Kg/cm2g",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td> </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_PLP_FW_002_LT",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_PLP_MAS_PI_001",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "LUBE OIL TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_LOC_505_TT",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "COOL TW. LEVEL",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_CWS_ACW_001_LT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary p-1",
                  label: "FAN'S PARAM",
                }}
              />
            </td>
          </tr>
          {/* 10 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "BOILER INLET DRAFT.",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_A_FLG_001_PT",
                  useClass: "greenTxt",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_A_FLG_001_PT",
                  useClass: "greenTxt",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_P_FLG_001_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_P_FLG_001_PT",
                  useClass: "greenTxt",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "LUBE OIL PRES.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_LOC_506_PT",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CDP-1(Hot Well)",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_ACC_CDS_M251_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2",
                    label: "TODAY TOT (MW)",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W3_MW_TODAY_TOT",
                    useClass: "greenTxt ml-2",
                    unit: "MW",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          {/* 11 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "BOILER INLET TEMP.",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_A_FLG_001_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_A_FLG_001_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_P_FLG_001_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_P_FLG_001_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "LUBE OIL FILTER DP",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_LOC_501_DPT",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CDP-2 (Hot Well)",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_ACC_CDS_M252_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2",
                    label: "CUMULATIVE TOT (MW)",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W3_MW_TODAY_TOT_AVRG",
                    useClass: "greenTxt ml-2",
                    unit: "MW",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          {/* 12 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "BOILER OUTLET DRAFT.",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_A_FLG_003_PT",
                  useClass: "greenTxt",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_A_FLG_003_PT",
                  useClass: "greenTxt",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W1_P_FLG_004_PT",
                  useClass: "greenTxt",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_P_FLG_004_PT",
                  useClass: "greenTxt",
                  unit: "mmWC",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CONTROL OIL PRESS.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_COC_401_PT",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2",
                    label: "TODAY TOT AVERAGE (MW)",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W3_MW_YESTERDAY_TOT",
                    useClass: "greenTxt ml-2",
                    unit: "MW",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          {/* 13 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "BOILER OUTLET TEMP.",
                }}
              />
            </td>
            {/* 13 */}
            <td>
              <BlackContainer
                data={{
                  label: "W1_A_FLG_010_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            {/* 33 */}
            <td>
              <BlackContainer
                data={{
                  label: "W3_A_FLG_008_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            {/* 59 */}
            <td>
              <BlackContainer
                data={{
                  label: "W1_P_FLG_008_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_P_FLG_007_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CASING TEMP.",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_MAS_111_TT",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2",
                    label: "YESTERDAY TOT (MW)",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W3_MW_TOT",
                    useClass: "greenTxt ml-2",
                    unit: "MW",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          {/* 14 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "INLET DAMPER FB.",
                }}
              />
            </td>
            <td>                
                <BlackContainer
                  data={{
                    label: "W1_A_FLG_ISD_001_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td> </td>
            <td>              
                <BlackContainer
                  data={{
                    label: "W3_A_FLG_ISD_001_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td>
              
                <BlackContainer
                  data={{
                    label: "W1_P_FLG_ISD_001_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td></td>
            <td></td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "HP DEMAND",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_HP001",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2",
                    label: "YEST TOT AVERAGE (MW)",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "MW_TOT",
                    useClass: "greenTxt ml-2",
                    unit: "MW",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          {/* 15 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "OUTLET DAMPER FB.",
                }}
              />
            </td>
            <td>
                <BlackContainer
                  data={{
                    label: "W1_A_FLG_ISD_002_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td> </td>
            <td>
                <BlackContainer
                  data={{
                    label: "W3_A_FLG_ISD_002_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td>
          
            </td>
            <td> </td>
            <td> </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "C SDH TEMPERATURE",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_PSS_MAS_001_TT",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "DM MAKEUP-1",
                  }}
                />
               
                <BlackContainer
                  data={{
                    label: "WC_DMSP_M_001_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
          </tr>
          {/* 16 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "BYPASS DAMPER FB.",
                }}
              />
            </td>
            <td>
                <BlackContainer
                  data={{
                    label: "W1_A_FLG_MLD_002_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              
            </td>
            <td> </td>
            <td>
            
                
                <BlackContainer
                  data={{
                    label: "W3_A_FLG_MLD_002_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td>
              
                <BlackContainer
                  data={{
                    label: "W1_P_FLG_MLD_001_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              
            </td>
            <td> </td>
            <td>
              
                <BlackContainer
                  data={{
                    label: "W3_P_FLG_ISD_001_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark bg-secondary p-1",
                    label: "BLINKING ALARM",
                  }}
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("W1_CMP_1_RUN")}`}
                  label="W1_CMP_1_RUN"
                  text="M"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus("W1_CMP_2_RUN")}`}
                  label="W1_CMP_2_RUN"
                  text="M"
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "DM MAKEUP-2",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_DMSP_M_002_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between align-items-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TG FRONT",
                  }}
                />
                <div className="ml-2">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "VIBRATION",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_801_XT",
                      useClass: "greenTxt mt-1",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_802_XT",
                      useClass: "greenTxt mt-1",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
                <div className="ml-2">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark",
                      label: "TEMP",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_805_TE",
                      useClass: "greenTxt mt-1",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_806_TE",
                      useClass: "greenTxt mt-1",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
              </div>
            </td>
          </tr>
          {/* 17 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "FRESH AIR DAMPER FB.",
                }}
              />
            </td>
            <td>                
                <BlackContainer
                  data={{
                    label: "W1_A_FLG_MLD_001_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td> </td>
            <td>
             
                <BlackContainer
                  data={{
                    label: "W3_A_FLG_MLD_001_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td></td>

            <td></td>

            <td>
             
                <BlackContainer
                  data={{
                    label: "W3_P_FLG_ISD_002_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "COMP PRESS",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_CMP_IA_001_PT",
                    useClass: "greenTxt ml-1",
                    unit: "kg/cm2g",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between align-items-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "INI. FILL PUMP",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_DMS_IFP_M_001_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between align-items-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TG REAR",
                  }}
                />
                <div className="ml-2">
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_803_XT",
                      useClass: "greenTxt",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_804_XT",
                      useClass: "greenTxt mt-1",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
                <div className="ml-2">
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_807_TE",
                      useClass: "greenTxt",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_808_TE",
                      useClass: "greenTxt mt-1",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
              </div>
            </td>
          </tr>
          {/* 18 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "ROTORY AIRLOCK-1",
                }}
              />
            </td>
            <td>
              
                <BlackContainer
                  data={{
                    label: "W1_A_FLG_RAV_001_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td> </td>
            <td>
              
                <BlackContainer
                  data={{
                    label: "W3_A_FLG_RAV_001_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td>
             
                <BlackContainer
                  data={{
                    label: "W1_P_FLG_RAV_001_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td></td>
            <td>
             
                <BlackContainer
                  data={{
                    label: "W3_P_FLG_MLD_001_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td>
              
                
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ACTIVE POWER",
                  }}
                />
            </td>
            <td>
              <div className="d-flex justify-content-between align-items-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CTF-1",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useColorStatus("WC_CWS_ACTF_01")}`}
                    label="WC_CWS_ACTF_01"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
                <BlackContainer
                  data={{
                    label: "WC_CWS_ACTF1_SI",
                    useClass: "greenTxt ml-1",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_CWS_ACTF1_II",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "GB HS DE",
                  }}
                />
                <div className="ml-2">
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_805_XT",
                      useClass: "greenTxt",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_806_XT",
                      useClass: "greenTxt mt-1",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
                <div className="ml-2">
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_809_TE",
                      useClass: "greenTxt",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_810_TE",
                      useClass: "greenTxt mt-1",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
              </div>
            </td>
          </tr>
          {/* 19 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "ROTORY AIRLOCK-2",
                }}
              />
            </td>
            <td>
              
                <BlackContainer
                  data={{
                    label: "W1_A_FLG_RAV_002_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
              
            </td>
            <td> </td>
            <td>
              
                <BlackContainer
                  data={{
                    label: "W3_A_FLG_RAV_002_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td>
             
                <BlackContainer
                  data={{
                    label: "W1_P_FLG_RAV_002_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td></td>
            <td>
                <BlackContainer
                  data={{
                    label: "W3_P_FLG_RAV_001_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td>
             
                <BlackContainer
                  data={{
                    label: "W1_STG_MW001",
                    useClass: "greenTxt ml-1",
                    unit: "MW",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td>
              <div className="d-flex justify-content-between align-items-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CTF-2",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useColorStatus("WC_CWS_ACTF_02")}`}
                    label="WC_CWS_ACTF_02"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
                <BlackContainer
                  data={{
                    label: "WC_CWS_ACTF2_SI",
                    useClass: "greenTxt ml-1",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_CWS_ACTF2_II",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>

            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "GB HS NDE",
                  }}
                />
                <div className="ml-2">
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_807_XT",
                      useClass: "greenTxt",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_808_XT",
                      useClass: "greenTxt mt-1",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
                <div className="ml-2">
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_811_TE",
                      useClass: "greenTxt",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_812_TE",
                      useClass: "greenTxt mt-1",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
              </div>
            </td>
          </tr>
          {/* 20 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "DRAG CHAIN CONV-1",
                }}
              />
            </td>
            <td>
             
                <BlackContainer
                  data={{
                    label: "W1_A_FLG_CNV_001_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td> </td>
            <td>
              
                <BlackContainer
                  data={{
                    label: "W3_A_FLG_CNV_001_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
                
            </td>
            <td>
              
                <BlackContainer
                  data={{
                    label: "W1_P_FLG_CNV_001_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td></td>
            <td>
              
                <BlackContainer
                  data={{
                    label: "W3_P_FLG_RAV_002_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "BFP-1",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "WC_DEA_FW_BFP_001_RUN", healthyLabel: "WC_DEA_FW_BFP_001_PH" }
              )}`}
                    label="WC_DEA_FW_BFP_001_RUN"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
                <BlackContainer
                  data={{
                    label: "WC_DEA_FW_003_PT",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_DEA_FW_BFP_001_SI",
                    useClass: "greenTxt ml-1",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between align-items-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "GB LS DE",
                  }}
                />
                <div className="ml-2">
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_811_XT",
                      useClass: "greenTxt",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_812_XT",
                      useClass: "greenTxt mt-1",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
                <div className="ml-2">
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_815_TE",
                      useClass: "greenTxt",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_816_TE",
                      useClass: "greenTxt mt-1",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
              </div>
            </td>
          </tr>
          {/* 21 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "DRAG CHAIN CONV-2",
                }}
              />
            </td>
            <td>
            
                <BlackContainer
                  data={{
                    label: "W1_A_FLG_CNV_002_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td> </td>
            <td>
             
                <BlackContainer
                  data={{
                    label: "W3_A_FLG_CNV_002_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td>
              
                <BlackContainer
                  data={{
                    label: "W1_P_FLG_CNV_002_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td></td>
            <td>
              
                <BlackContainer
                  data={{
                    label: "W3_P_FLG_CNV_001_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "AOP MOTOR",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_LOC_M501_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "BFP-2",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "WC_DEA_FW_BFP_002_RUN", healthyLabel: "WC_DEA_FW_BFP_002_PH" }
              )}`}
                    label="WC_DEA_FW_BFP_002_RUN"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
                <BlackContainer
                  data={{
                    label: "WC_DEA_FW_003_PT",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_DEA_FW_BFP_002_SI",
                    useClass: "greenTxt ml-1",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between align-items-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "GB LS NDE",
                  }}
                />
                <div className="ml-2">
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_809_XT",
                      useClass: "greenTxt",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_810_XT",
                      useClass: "greenTxt mt-1",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
                <div className="ml-2">
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_813_TE",
                      useClass: "greenTxt",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_814_TE",
                      useClass: "greenTxt mt-1",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
              </div>
            </td>
          </tr>
          {/* 22 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "DRAG CHAIN CONV-3",
                }}
              />
            </td>
            <td></td>
            <td> </td>
            <td>
             
                <BlackContainer
                  data={{
                    label: "W3_A_FLG_CNV_003_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>
            <td> </td>
            <td> </td>
            <td>
              
                <BlackContainer
                  data={{
                    label: "W3_P_FLG_CNV_002_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>

            <td>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "BFP-3",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "WC_DEA_FW_BFP_003_RUN", healthyLabel: "WC_DEA_FW_BFP_003_PH" }
              )}`}
                    label="WC_DEA_FW_BFP_003_RUN"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
                <BlackContainer
                  data={{
                    label: "WC_DEA_FW_003_PT",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_DEA_FW_BFP_003_SI",
                    useClass: "greenTxt ml-1",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between align-items-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ALTER FR/RR",
                  }}
                />
                <div className="ml-2">
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_813_XT",
                      useClass: "greenTxt",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_814_XT",
                      useClass: "greenTxt mt-1",
                      unit: "μ",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
                <div className="ml-2">
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_815_XT",
                      useClass: "greenTxt",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                  <BlackContainer
                    data={{
                      label: "W1_STG_PCS_816_XT",
                      useClass: "greenTxt mt-1",
                      unit: "°C",
                      unitColor: "unitColor",
                    }}
                  />
                </div>
              </div>
            </td>
          </tr>
          {/* 23 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "INLET SEAL AIR FAN",
                }}
              />
            </td>
            <td>
             
            </td>
            <td> </td>
            <td>
             
            </td>
            <td></td>

            <td></td>

            <td>
              
            </td>

            <td>
              
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CEP-1",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useColorStatus("W1_ACC_CEP_01")}`}
                    label="W1_ACC_CEP_01"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
                <BlackContainer
                  data={{
                    label: "W1_ACC_CDS_401_PT",
                    useClass: "greenTxt ml-1",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_ACC_CEP01_SI",
                    useClass: "greenTxt ml-1",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "THR A SIDE T/B",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_PCS_802_TE",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_PCS_804_TE",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          {/* 24 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "OUTLET SEAL AIR FAN",
                }}
              />
            </td>
            <td>
             
            </td>
            <td> </td>
            <td>
             
            </td>
            <td>
              
            </td>
            <td></td>

            <td>
              
                <BlackContainer
                  data={{
                    label: "W3_P_FLG_CNV_003_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
            </td>

            <td>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CEP-2",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useColorStatus("W1_ACC_CEP_02")}`}
                    label="W1_ACC_CEP_02"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
                <BlackContainer
                  data={{
                    label: "W1_ACC_CDS_401_PT",
                    useClass: "greenTxt ml-1",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_ACC_CEP02_SI",
                    useClass: "greenTxt ml-1",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "THR NA SIDE T/B",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_PCS_801_TE",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_PCS_803_TE",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          {/* 25 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "FRESH AIR BLOWER",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "W1_A_FLG_BL_001_RUN", healthyLabel: "W1_A_FLG_BL_001_PH" }
              )}`}
                    label="W1_A_FLG_BL_001_RUN"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
                <BlackContainer
                  data={{
                    label: "W1_A_FLG_BL_001_SI",
                    useClass: "greenTxt ml-1",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
            <td>
              <div className="d-flex">
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useColorStatus("W3_A_FLG_BL_001")}`}
                    label="W3_A_FLG_BL_001"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
                <BlackContainer
                  data={{
                    label: "W3_A_FLG_BL_003_SI",
                    useClass: "greenTxt ml-1",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              
            </td>
            <td> </td>
            <td>
            
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "DR TRANS. PMP-1",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_CDS_M201_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ACW-1",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useColorStatus("WC_CWS_ACWP_01")}`}
                    label="WC_CWS_ACWP_01"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
                <BlackContainer
                  data={{
                    label: "WC_CWS_ACW_001_PT",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_CWS_ACWP1_SI",
                    useClass: "greenTxt ml-1",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ROTOR AXIAL 1/2",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_PCS_801_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "mm",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_PCS_802_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "mm",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
          {/* 26 row */}
          <tr>
            <td>
              
            </td>
            <td>
              
            </td>
            <td> </td>
            <td>
              
            </td>
            <td>
             
            </td>
            <td> </td>
            <td>
             
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "DR TRANS. PMP-2",
                  }}
                />
              
                <BlackContainer
                  data={{
                    label: "W1_STG_CDS_M202_CURNT",
                    useClass: "greenTxt ml-1",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ACW-2",
                  }}
                />
                <div>
                  <MotorCircleDigitalTag
                    className={`dot digital-tag ${useColorStatus("WC_CWS_ACWP_02")}`}
                    label="WC_CWS_ACWP_02"
                  />
                  <div className="yellowline-Vr upArrow position-absolute"></div>
                </div>
                <BlackContainer
                  data={{
                    label: "WC_CWS_ACW_001_PT",
                    useClass: "greenTxt ml-1",
                    unit: "Kg/cm2",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "WC_CWS_ACWP2_SI",
                    useClass: "greenTxt ml-1",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ALT FR/RR BEAR",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_PCS_817_TE",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W1_STG_PCS_818_TE",
                    useClass: "greenTxt ml-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

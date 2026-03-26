import {
  TextContainerWithWrapWord,
  TransparentBoxWithGate,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";

import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

export const AFRGujaratLine1 = () => {
  return (
    <div className="afr-gujarat-line1 w-100 h-100 position-relative">
      <div className="single-text-1 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "EXTRACTOR-1",
          }}
        />
        <div className="d-flex justify-content-between my-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DB FLOW SP",
            }}
          />
          <BlackContainer
            data={{
              label: "SAFR_PID_SPM",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "DOSING BELT FLOW",
            }}
          />
          <BlackContainer
            data={{
              label: "DB_FL1",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "ATS SYSTEM READY",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "ATS_SYS_READY"
            )}`}
            label="ATS_SYS_READY"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "EXTRACTOR ON",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "EXT_ON"
            )}`}
            label="EXT_ON"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "EXTRACTOR FAULT",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "EXT_FAULT"
            )}`}
            label="EXT_FAULT"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "DOZING BELT ON",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "DOZ_BLT_ON"
            )}`}
            label="DOZ_BLT_ON"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "DOZING BELT FAULT",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "DOZ_BLT_FLT"
            )}`}
            label="DOZ_BLT_FLT"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "CALIBRATOR ON",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "CAL_ON"
            )}`}
            label="CAL_ON"
          />
        </div>
        <div className="d-flex justify-content-between mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "CALIBRATOR FAULT",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "CAL_FLT"
            )}`}
            label="CAL_FLT"
          />
        </div>
      </div>
      <div className="single-text-2 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "EXTRACTOR-2",
          }}
        />
        <div className="d-flex justify-content-between my-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "EXT-2 FLOW SP",
            }}
          />
          <BlackContainer
            data={{
              label: "EXT2_TPH_SP",
              useClass: "greenTxt mb-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "EXT-2 FLOW RATE",
            }}
          />
          <BlackContainer
            data={{
              label: "EXT2_ACTL_FL",
              useClass: "greenTxt mb-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "EXTRACTOR REMOTE MODE",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "EXT2_RMT_MODE"
            )}`}
            label="EXT2_RMT_MODE"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "EXT-2 SYSTEM READY",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "EXT2_SYS_RDY"
            )}`}
            label="EXT2_SYS_RDY"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "EXTRACTOR ON",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "EXT2_SYS_RUN"
            )}`}
            label="EXT2_SYS_RUN"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "APRON ON",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "EXT2_APRON_RUN"
            )}`}
            label="EXT2_APRON_RUN"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "APRON FAULT",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "EXT2_APRON_FLT"
            )}`}
            label="EXT2_APRON_FLT"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "DOZING BELT ON",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "EXT2_DOZ_BELT_RUN"
            )}`}
            label="EXT2_DOZ_BELT_RUN"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "DOZING BELT FAULT",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "EXT2_DOZ_BELT_FLT"
            )}`}
            label="EXT2_DOZ_BELT_FLT"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "CALIBRATOR ON",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "EXT2_CLBTR_RUN"
            )}`}
            label="EXT2_CLBTR_RUN"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "CALIBRATOR ROTATION FAULT",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "EXT2_CLBTR_ROTAN_FLT"
            )}`}
            label="EXT2_CLBTR_ROTAN_FLT"
          />
        </div>
        <div className="d-flex justify-content-between mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-nowrap",
              label: "CALIBRATOR LIFTING FAULT",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
              "EXT2_CLBTR_LIFTG_FLT"
            )}`}
            label="EXT2_CLBTR_LIFTG_FLT"
          />
        </div>
      </div>
      <div className="single-text-3 position-absolute border  p-2">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "AFR_LIQUID_CL",
            }}
          />
          <BlackContainer
            data={{
              label: "AFR_LIQUID_CL",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2 mr-1",
              label: "AFR_LIQUID_S",
            }}
          />
          <BlackContainer
            data={{
              label: "AFR_LIQUID_S",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "AFR_SOLID_CL",
            }}
          />
          <BlackContainer
            data={{
              label: "AFR_SOLID_CL",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "AFR_SOLID_S",
            }}
          />
          <BlackContainer
            data={{
              label: "AFR_SOLID_S",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-4 position-absolute ">
        <div className="border p-2">
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "AFR COUNTER YESTERDAY",
              }}
            />
            <BlackContainer
              data={{
                label: "DB_FLW_YD",
                useClass: "greenTxt mb-1",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "AFR COUNTER TODAY",
              }}
            />
            <BlackContainer
              data={{
                label: "DB_TODAY",
                useClass: "greenTxt mb-1",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "AFR COUNTER MONTH",
              }}
            />
            <BlackContainer
              data={{
                label: "DB_FLW_MONTH",
                useClass: "greenTxt mb-1",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "AFR COMULATIVE COUNTER",
              }}
            />
            <BlackContainer
              data={{
                label: "DB_FLW_CUMMU",
                useClass: "greenTxt",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="border p-2 mt-1">
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "WASTE IN PH-1",
              }}
            />
            <BlackContainer
              data={{
                label: "WF_TPH_PH1",
                useClass: "greenTxt mb-1",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "WASTE FIRING IN PH-1 YD",
              }}
            />
            <BlackContainer
              data={{
                label: "WF_TPH_PH1_YD",
                useClass: "greenTxt mb-1",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "WASTE FIRING IN PH-1 TD",
              }}
            />
            <BlackContainer
              data={{
                label: "WF_TPH_PH1_TODAY",
                useClass: "greenTxt mb-1",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "WASTE FIRING IN PH-1 SHIFT",
              }}
            />
            <BlackContainer
              data={{
                label: "WF_TPH_PH1_SHIFT",
                useClass: "greenTxt",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="border p-2 mt-1">
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "WASTE IN PH-2",
              }}
            />
            <BlackContainer
              data={{
                label: "WF_TPH_PH2",
                useClass: "greenTxt mb-1",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "WASTE FIRING IN PH-2 YD",
              }}
            />
            <BlackContainer
              data={{
                label: "WF_TPH_PH2_YD",
                useClass: "greenTxt mb-1",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "WASTE FIRING IN PH-2 TD",
              }}
            />
            <BlackContainer
              data={{
                label: "WF_TPH_PH2_TODAY",
                useClass: "greenTxt mb-1",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "WASTE FIRING IN PH-2 SHIFT",
              }}
            />
            <BlackContainer
              data={{
                label: "WF_TPH_PH2_SHIFT",
                useClass: "greenTxt",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="border p-2 mt-1">
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "SAFR PID AUTO RUN HOUR",
              }}
            />
            <BlackContainer
              data={{
                label: "SAFR_AUTO_RUN_HRS",
                useClass: "greenTxt mb-1",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "SAFR PID AUTO RH YD",
              }}
            />
            <BlackContainer
              data={{
                label: "SAFR_AUTO_RUN_HRS_YD",
                useClass: "greenTxt mb-1",
                unit: "h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "SAFR PID AUTO RH TODAY",
              }}
            />
            <BlackContainer
              data={{
                label: "SAFR_AUTO_RUN_HRS_TODAY",
                useClass: "greenTxt mb-1",
                unit: "h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="single-text-5 position-absolute p-2">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "SCHREDER1 RBC CURRENT",
            }}
          />
          <BlackContainer
            data={{
              label: "SCHR1_RBC_CUR",
              useClass: "greenTxt mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "SCHREDER2 RBC CURRENT",
            }}
          />
          <BlackContainer
            data={{
              label: "SCHR2_RBC_CUR",
              useClass: "greenTxt mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "SIDSA OIL COOL PRESSURE1",
            }}
          />
          <BlackContainer
            data={{
              label: "SIDSA_COOL_P1",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "SIDSA OIL COOL PRESSURE2",
            }}
          />
          <BlackContainer
            data={{
              label: "SIDSA_COOL_P2",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-6 position-absolute">
        <table>
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "TODAY",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "YESTERDAY",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "SHIFT",
                  }}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row ">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "NAPTHA SHREDDER RUN",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "SHREDDER1_RUN_TODAY",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "SHREDDER1_RUN_YESTERDAY",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "SHREDDER1_RUN_SHIFT",
                    useClass: "greenTxt",
                    unit: "h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "PLANT SHREDDER RUN",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "PLNT_SHDR_RUN_TDY",
                    useClass: "greenTxt",
                    unit: "h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "PLNT_SHDR_RUN_YDAY",
                    useClass: "greenTxt",
                    unit: "h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "PLNT_SHDR_RUN_SHIFT",
                    useClass: "greenTxt",
                    unit: "h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "CONN. SHREDDER RUN",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CON_SDR_RUN_TDY",
                    useClass: "greenTxt",
                    unit: "h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CON_SDR_RUN_YDAY",
                    useClass: "greenTxt",
                    unit: "h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CON_SDR_RUN_SHIFT",
                    useClass: "greenTxt",
                    unit: "h",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark p-1",
                    label: "EXTRACTOR 2",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "EXT2_TON_TODAY",
                    useClass: "greenTxt",
                    unit: "t",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "EXT2_TON_YD",
                    useClass: "greenTxt",
                    unit: "t",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "EXT2_TON_SHIFT",
                    useClass: "greenTxt",
                    unit: "t",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="single-text-7 position-absolute border p-2">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "EXT-2 COUNTER TODAY",
            }}
          />
          <BlackContainer
            data={{
              label: "EXT2_TON_TODAY",
              useClass: "greenTxt mb-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "EXT-2 COUNTER MTD",
            }}
          />
          <BlackContainer
            data={{
              label: "EXT2_TON_MTD",
              useClass: "greenTxt mb-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "EXT-2 COUNTER YTD",
            }}
          />
          <BlackContainer
            data={{
              label: "EXT2_TON_YTD",
              useClass: "greenTxt mb-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-8 position-absolute">
        <div className=" border p-2">
          <div className="d-flex justify-content-center mb-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  ",
                label: "W1J01 RUNNING HRS",
              }}
            />
          </div>
          <div className="d-flex justify-content-between g-2">
            <div className="">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1",
                  label: "TODAY",
                }}
              />
              <BlackContainer
                data={{
                  label: "W1J01_TODAY",
                  useClass: "greenTxt mb-1",
                  unit: "h",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 pl-2",
                  label: "YESTERDAY",
                }}
              />
              <BlackContainer
                data={{
                  label: "W1J01_YESTERDAY",
                  useClass: "greenTxt mb-1 ml-2",
                  unit: "h",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 pl-2",
                  label: "SHIFT",
                }}
              />
              <BlackContainer
                data={{
                  label: "W1J01_SHIFT",
                  useClass: "greenTxt mb-1 ml-2",
                  unit: "h",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className=" border p-2 mt-1">
          <div className="d-flex justify-content-center mb-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  ",
                label: "WFJ01 RUNNING HRS",
              }}
            />
          </div>
          <div className="d-flex justify-content-between g-2">
            <div className="">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1",
                  label: "TODAY",
                }}
              />
              <BlackContainer
                data={{
                  label: "WFJ01_TODAY",
                  useClass: "greenTxt mb-1",
                  unit: "h",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 pl-2",
                  label: "YESTERDAY",
                }}
              />
              <BlackContainer
                data={{
                  label: "WFJ01_YESTERDAY",
                  useClass: "greenTxt mb-1 ml-2",
                  unit: "h",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-1 pl-2",
                  label: "SHIFT",
                }}
              />
              <BlackContainer
                data={{
                  label: "WFJ01_SHIFT",
                  useClass: "greenTxt mb-1 ml-2",
                  unit: "h",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="single-text-9 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1 mx-auto",
            label: "SAFR PID",
          }}
        />
        <div className="border">
          <BlackContainer
            data={{
              label: "SAFR_PID_SPA",
              useClass: "greenTxt mb-1",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SAFR_PV",
              useClass: "greenTxt ",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-10 position-absolute border">
        <BlackContainer
          data={{
            label: "W1J01_SP_SPM",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1J01_S1",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-11 position-absolute border">
        <BlackContainer
          data={{
            label: "F3J01_SP_SPM",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F3J01_S1",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-12 position-absolute">
        <BlackContainer
          data={{
            label: "W1J01_TE",
            useClass: "greenTxt mb-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1J01_P1",
            useClass: "greenTxt ",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-13 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "DB_FL1_FLT",
            useClass: "greenTxt mb-1",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F3J01_I1",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="single-text-14 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "F3J01" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F3J01")}`,
          secondCircleText: "M",
          secondCircleLabel: "F3J01",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-15 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "F3J03" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F3J03")}`,
          secondCircleText: "M",
          secondCircleLabel: "F3J03",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-16 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "F3J02" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F3J02")}`,
          secondCircleText: "M",
          secondCircleLabel: "F3J02",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-17 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "F1J05" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F1J05")}`,
          secondCircleText: "M",
          secondCircleLabel: "F1J05",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-18 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "F2J03A" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F2J03A")}`,
          secondCircleText: "M",
          secondCircleLabel: "F2J03A",
        }}
      />
      <div className="single-text-19 position-absolute">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{ squareClass: `grey-color` }}
        />
      </div>
      <div className="single-text-20 position-absolute">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            squareClass: `grey-color`,
          }}
        />
      </div>
      <div className="single-text-21 position-absolute">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            squareClass: `grey-color`,
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="single-text-22 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "F2J01A" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F2J01A")}`,
          secondCircleText: "M",
          secondCircleLabel: "F2J01A",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-23 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "WFJ01" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("WFJ01")}`,
          secondCircleText: "M",
          secondCircleLabel: "WFJ01",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-24 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "F2J01B" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F2J01B")}`,
          secondCircleText: "M",
          secondCircleLabel: "F2J01B",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-25 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "F2J01" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F2J01")}`,
          secondCircleText: "M",
          secondCircleLabel: "F2J01",
        }}
      />
      <div className="single-text-26 position-absolute">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            squareClass: `grey-color`,
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="single-text-27 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "WFJ03A" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("WFJ03A")}`,
          secondCircleText: "M",
          secondCircleLabel: "WFJ03A",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-28 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "WFJ03" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("WFJ03")}`,
          secondCircleText: "M",
          secondCircleLabel: "WFJ03",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-29 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "WFJ04" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("WFJ04")}`,
          secondCircleText: "M",
          secondCircleLabel: "WFJ04",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-30 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "F2J02" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F2J02")}`,
          secondCircleText: "M",
          secondCircleLabel: "F2J02",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-31 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "F3J04" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F3J04")}`,
          secondCircleText: "M",
          secondCircleLabel: "F3J04",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-32 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "F2J04" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F2J04")}`,
          secondCircleText: "M",
          secondCircleLabel: "F2J04",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-33 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "F2J03" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("F2J03")}`,
          secondCircleText: "M",
          secondCircleLabel: "F2J03",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-34 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "WFJ02" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("WFJ02")}`,
          secondCircleText: "M",
          secondCircleLabel: "WFJ02",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-35 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "W1J01" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("W1J01")}`,
          secondCircleText: "M",
          secondCircleLabel: "W1J01",
        }}
      />
      <div className="single-text-36 position-absolute">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "SWT01",
            squareClass: `${useColorStatus("SWT01")}`,
          }}
        />
      </div>
      <div className="single-text-37 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "PH-2 CYCLONE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "TO CALC VESSEL",
          }}
        />
      </div>
      <div className="single-text-38 position-absolute">
        <BlackContainer
          data={{
            label: "WFJ02_I1",
            useClass: "greenTxt mb-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH1_AFR_CAL_TPH",
            useClass: "greenTxt ",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="single-text-39 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "WFBC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("WFBC2")}`,
          secondCircleText: "M",
          secondCircleLabel: "WFBC2",
        }}
      />
      <PipeWithCircles
        parentDivClass="single-text-40 position-absolute hpipecircle"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "WFBC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("WFBC1")}`,
          secondCircleText: "M",
          secondCircleLabel: "WFBC1",
        }}
      />
      <div className="single-text-41 position-absolute">
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            squareClass: `grey-color`,
          }}
        />
      </div>
      <div className="single-text-42 position-absolute border">
        <BlackContainer
          data={{
            label: "K2DV01_SP",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2DV01_Z1",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-43 position-absolute">
        <BlackContainer
          data={{
            label: "WFJ01_SP",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "WFJ01_S1",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-44 position-absolute">
        <BlackContainer
          data={{
            label: "EXT_CURRENT",
            useClass: "greenTxt mb-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "DB_CURRENT",
            useClass: "greenTxt mb-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "WFJ01_I1",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-45 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "K1L01",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "T23",
          }}
        />
      </div>
      <div className="single-text-46 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "F2J03",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "TO PH-1",
          }}
        />
      </div>
      <div className="single-text-47 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "T12",
          }}
        />
      </div>
      <div className="single-text-48 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "K1L02",
          }}
        />
      </div>
      <div className="single-text-49 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "F3T01",
          }}
        />
      </div>
      <div className="single-text-50 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "F2J05",
          }}
        />
      </div>
      <div className="single-text-51 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "WFP01",
          }}
        />
      </div>
      <div className="single-text-52 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "WFVB01",
          }}
        />
      </div>
      <div className="single-text-53 position-absolute">
        <BlackContainer
          data={{
            label: "DB_FL1",
            useClass: "greenTxt ",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-54 position-absolute squareplustri">
        <BlackContainer
          data={{
            label: "EXT_WEIGHT",
            useClass: "greenTxt m-auto",
            unit: "kg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-55 position-absolute squareplustri">
        <BlackContainer
          data={{
            label: "EXT2_WBF_ACTL_WEIGHT",
            useClass: "greenTxt m-auto",
            unit: "kg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-56 position-absolute">
        <BlackContainer
          data={{
            label: "WFS_EXT_I1",
            useClass: "greenTxt m-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-57 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "PH 2 SIDE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "PH-1 SIDE",
          }}
        />
      </div>
      <div className="single-text-58 position-absolute ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "F3P01_SEQ",
          }}
        />
        <div className=" squareplustri"></div>
      </div>
      <div className="single-text-59 position-absolute ">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag mr-2 text-center ${useColorStatus(
            "F3P05"
          )}`}
          label="F3P05"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "F3P05",
          }}
        />
      </div>
      <div className="single-text-60 position-absolute">
        <BlackContainer
          data={{
            label: "F2J01_T1",
            useClass: "greenTxt m-auto",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-61 position-absolute d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pr-1",
            label: "F3P04",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "F3P04"
          )}`}
          label="F3P04"
        />
      </div>
      <div className="single-text-62 position-absolute">
        <div className="squareplustri text-center pb-2">WASTE FEED</div>
      </div>
      <div className="single-text-63 position-absolute ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-white p-1",
            label: "EXTRACTOR",
          }}
        />
      </div>
      <div className="single-text-64 position-absolute ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-white p-1",
            label: "EXTRACTOR2",
          }}
        />
      </div>
      <div className="single-text-65 position-absolute ">
        <BlackContainer
          data={{
            label: "KM2_F2J03A_MRUN2_TODAY",
            useClass: "greenTxt m-auto",
            unit: "h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-66 position-absolute ">
        <BlackContainer
          data={{
            label: "WFJ02_T1",
            useClass: "greenTxt m-auto",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-67 position-absolute ">
        <BlackContainer
          data={{
            label: "W1J01_I1",
            useClass: "greenTxt m-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-68 position-absolute">
        <div className="squareplustri text-center pb-2">PH-2 GS</div>
      </div>
      <MotorCircleDigitalTag
        className={`square digital-tag position-absolute pipe-1 ${useColorStatus(
          "DOZ_BLT_ON"
        )}`}
        label="DOZ_BLT_ON"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag position-absolute pipe-2 ${useColorStatus(
          "EXT2_DOZ_BELT_RUN"
        )}`}
        label="EXT2_DOZ_BELT_RUN"
      />
      <div class="yellowline-Vr downArrow  position-absolute line-1"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-2"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-3"></div>
      <div class="yellowline-Hr position-absolute line-4"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-6"></div>
      <div class="yellowline-Hr position-absolute line-7"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-8"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-9"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-10"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-11"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-12"></div>
      <div class="yellowline-Hr position-absolute line-13"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-14"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-15"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-16"></div>
      <div class="yellowline-Hr position-absolute line-17"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-18"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-19"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-20"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-21"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-22"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-23"></div>
      <PipeWithCircles parentDivClass="line-24 position-absolute hpipecircle" />
      <div class="yellowline-Vr downArrow  position-absolute line-25"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-26"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-27"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-28"></div>
      <div class="yellowline-Vr position-absolute line-29"></div>
      <div class="yellowline-Hr  position-absolute line-30"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-31"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-32"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-33"></div>
      <div class="yellowline-Hr rightarrow  position-absolute line-34"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-35"></div>
      <div class="yellowline-Hr position-absolute line-36"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-37"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-38"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-39"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-40"></div>
      <div class="yellowline-Hr position-absolute line-41"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-42"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-43"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-44"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-45"></div>
      <div class="yellowline-Hr position-absolute line-46"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-47"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-48"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-49"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-50"></div>
    </div>
  );
};

import { useColorStatus } from "../../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
} from "../../../../../index";

export const TurbineAndhra = () => {
  return (
    <div className="TurbineAndhra w-100 h-100 position-relative">
      <div className="yellowline-Hr position-absolute line-1"></div>
      <div className="yellowline-Hr position-absolute line-2"></div>
      <div className="yellowline-Hr position-absolute line-3"></div>
      <div className="yellowline-Hr position-absolute line-4"></div>
      <div className="yellowline-Hr position-absolute line-5"></div>
      <div className="yellowline-Hr position-absolute line-6"></div>
      <div className="yellowline-Hr position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Hr position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-13"></div>
      <div className="yellowline-Hr position-absolute line-14"></div>
      <div className="yellowline-Hr position-absolute line-15"></div>
      <div className="d-flex flex-column position-absolute line-16">
        <div className="yellowline-Hr position-relative"></div>
        <div className="yellowline-Hr position-relative"></div>
        <div className="yellowline-Hr position-relative"></div>
        <div className="yellowline-Hr position-relative"></div>
        <div className="yellowline-Hr position-relative"></div>
        <div className="yellowline-Hr position-relative"></div>
      </div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Vr position-absolute line-18"></div>
      <div className="yellowline-Vr position-absolute line-19"></div>
      <div className="yellowline-Vr position-absolute line-20"></div>
      <div className="yellowline-Vr position-absolute line-21"></div>
      <div className="yellowline-Vr position-absolute line-22"></div>
      <div className="yellowline-Vr position-absolute line-23"></div>
      <div className="yellowline-Vr position-absolute line-24"></div>
      <div className="yellowline-Vr position-absolute line-25"></div>

      <div className="position-absolute single-text-1">
        <table className="w-100 table mb-0">
          <tr>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary p-1 w-100",
                  label: "DESCRIPTION",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary p-1 w-100",
                  label: "PV",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary p-1 w-100",
                  label: "ALM",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary p-1 w-100",
                  label: "TRP",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary p-1 w-100",
                  label: "DESCRIPTION",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary p-1 w-100",
                  label: "PV",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary p-1 w-100",
                  label: "ALM",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary p-1 w-100",
                  label: "TRP",
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
                  label: "TRIP: MS PR LL",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_MAS_STEAM_PT_MED",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "MAIN_STEAM_PR_LO"
                )}`}
                label="MAIN_STEAM_PR_LO"
                text="L"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "MAIN_STEAM_PR_LL"
                )}`}
                label="MAIN_STEAM_PR_LL"
                text="LL"
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "ALT WINDING TEMP V4 PH(TE829)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_829_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "130",
                }}
              />
            </td>
          </tr>
          {/* 2 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "WS OR HS OR RUNNING",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <MotorCircleDigitalTag
                  className={`square px-1 text-dark digital-tag ${useColorStatus(
                    "TURBINE_WARM_ST"
                  )}`}
                  label="TURBINE_WARM_ST"
                  text="WARM"
                />
                <MotorCircleDigitalTag
                  className={`square px-1 ml-2 text-dark digital-tag ${useColorStatus(
                    "TURBINE_HOT_ST"
                  )}`}
                  label="TURBINE_HOT_ST"
                  text="HOT"
                />
              </div>
            </td>
            <td rowSpan={4}>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "MAIN_STEAM_TEMP_LO"
                )}`}
                label="MAIN_STEAM_TEMP_LO"
                text="L"
              />
            </td>
            <td rowSpan={4}>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "MAIN_STEAM_TEMP_LL"
                )}`}
                label="MAIN_STEAM_TEMP_LL"
                text="LL"
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "ALT WINDING TEMP W4 PH (TE830)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_830_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "130",
                }}
              />
            </td>
          </tr>
          {/* 3 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TRIP: MAIN STEAM TEMP LL",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_MAS_STEAM_TT_MED",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>

            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "INLET AIR TEMP -1 (TE834)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_834_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "55",
                }}
              />
            </td>
          </tr>
          {/* 4 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "COLD START",
                }}
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-1 text-dark digital-tag ${useColorStatus(
                  "TURBINE_COLD_ST"
                )}`}
                label="TURBINE_COLD_ST"
                text="COLD"
              />
            </td>

            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "INLET AIR TEMP -3 (TE836)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_836_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "55",
                }}
              />
            </td>
          </tr>
          {/* 5 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TRUBINE SPEED < 90%",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_901_SI",
                  useClass: "greenTxt",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>

            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "ALT FRONT BEARING TEMP(TE817)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_817_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "90",
                }}
              />
            </td>
          </tr>
          {/* 6 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "MAIN STEAM TEMP HH",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_MAS_STEAM_TT_MED",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "MAIN_STEAM_TEMP_HI"
                )}`}
                label="MAIN_STEAM_TEMP_HI"
                text="H"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "MAIN_STEAM_TEMP_HH"
                )}`}
                label="MAIN_STEAM_TEMP_HH"
                text="HH"
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "ALT REAR BEARING TEMP(TE818)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_818_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "90",
                }}
              />
            </td>
          </tr>
          {/* 7 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "MAIN STEAM PR HH",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_MAS_STEAM_PT_MED",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "MAIN_STEAM_PR_HH"
                )}`}
                label="MAIN_STEAM_PR_HH"
                text="HH"
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TURBINE FRONT SHAFT VIB. HH(YIT891)",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_801_XT",
                    useClass: "greenTxt",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_802_XT",
                    useClass: "greenTxt ml-1",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "W3_STG_YIT891"
                )}`}
                label="W3_STG_YIT891"
                text="V"
              />
            </td>
          </tr>
          {/* 8 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "MAIN STEAM TEMP GRAD HH",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "MAIN_STEAM_TEMP_GRAD",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "TEMP_GRAD_HI_ALM"
                )}`}
                label="TEMP_GRAD_HI_ALM"
                text="H"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "TEMP_GRAD_HIHI_TRIP"
                )}`}
                label="TEMP_GRAD_HIHI_TRIP"
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TURBINE REAR SHAFT VIB. HH(YIT892)",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_803_XT",
                    useClass: "greenTxt",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_804_XT",
                    useClass: "greenTxt ml-1",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "W3_STG_YIT892"
                )}`}
                label="W3_STG_YIT892"
                text="V"
              />
            </td>
          </tr>
          {/* 9 row */}
          <tr>
            <td colSpan={2}>
              <div className="d-flex justify-content-between">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "NO LOAD",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "TUR_TR_NO_LOAD_TMR",
                    useClass: "greenTxt ml-1",
                    unit: "sec",
                    unitColor: "unitColor",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ml-2",
                    label: "Turbine No Load, Trip Timer",
                  }}
                />
              </div>
            </td>

            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "TURB_OP_NO_LOAD_AL"
                )}`}
                label="TURB_OP_NO_LOAD_AL"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "TURB_OP_NO_LOAD_TR"
                )}`}
                label="TURB_OP_NO_LOAD_TR"
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GEN. FRONT SHAFT VIB. HH(YIT897)",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_813_XT",
                    useClass: "greenTxt",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_814_XT",
                    useClass: "greenTxt ml-1",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "W3_STG_YIT897"
                )}`}
                label="W3_STG_YIT897"
                text="V"
              />
            </td>
          </tr>
          {/* 10 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "EXE STEAM TEMP > 120 DEG C",
                }}
              />
            </td>
            <td rowSpan={2}>
              <BlackContainer
                data={{
                  label: "W3_STG_MAS_EXT_TT_MED",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "EXH_TEMP_HH"
                )}`}
                label="EXH_TEMP_HH"
                text="HH"
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GEN. REAR SHAFT VIB. HH(YIT898)",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_815_XT",
                    useClass: "greenTxt",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_816_XT",
                    useClass: "greenTxt ml-1",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "W3_STG_YIT898"
                )}`}
                label="W3_STG_YIT898"
                text="V"
              />
            </td>
          </tr>
          {/* 11 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "EXE STEAM TEMP > 105 DEG FOR 1 Hrs",
                }}
              />
              <BlackContainer
                data={{
                  label: "EXE_STM_TT_TMR",
                  useClass: "greenTxt",
                  unit: "sec",
                  unitColor: "unitColor",
                }}
              />
            </td>

            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "EXH_TEMP_HI"
                )}`}
                label="EXH_TEMP_HI"
                text="H"
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GB. HS DE SHAFT VIB. HH(YIT893)",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_805_XT",
                    useClass: "greenTxt",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_806_XT",
                    useClass: "greenTxt ml-1",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "W3_STG_YIT893"
                )}`}
                label="W3_STG_YIT893"
                text="V"
              />
            </td>
          </tr>
          {/* 12 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "LUBE OIL HEADER PR LL",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "W3_STG_LOC_509_PS"
                  )}`}
                  label="W3_STG_LOC_509_PS"
                  text="P"
                />
                <MotorCircleDigitalTag
                  className={`dot ml-2 digital-tag ${useColorStatus(
                    "W3_STG_LOC_510_PS"
                  )}`}
                  label="W3_STG_LOC_510_PS"
                  text="P"
                />
                <MotorCircleDigitalTag
                  className={`dot ml-2 digital-tag ${useColorStatus(
                    "W3_STG_LOC_511_PS"
                  )}`}
                  label="W3_STG_LOC_511_PS"
                  text="P"
                />
              </div>
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "W3_STG_LOC_507_PT_LO"
                )}`}
                label="W3_STG_LOC_507_PT_LO"
                text="L"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "W3_STG_LOC_507_PT_LL"
                )}`}
                label="W3_STG_LOC_507_PT_LL"
                text="LL"
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GB. HS NDE SHAFT VIB. HH(YIT894)",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_807_XT",
                    useClass: "greenTxt",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_808_XT",
                    useClass: "greenTxt ml-1",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "W3_STG_YIT894"
                )}`}
                label="W3_STG_YIT894"
                text="V"
              />
            </td>
          </tr>
          {/* 13 row */}
          <tr>
            <td rowSpan={3}>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TURBINE LAST STAGE TEMP HH",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_MAS_116_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td rowSpan={3}>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "TURB_LSTAGE_TEMP_TR"
                )}`}
                label="TURB_LSTAGE_TEMP_TR"
                text="HH"
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GB. LS NDE SHAFT VIB. HH(YIT895)",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_809_XT",
                    useClass: "greenTxt",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_810_XT",
                    useClass: "greenTxt ml-1",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "W3_STG_YIT895"
                )}`}
                label="W3_STG_YIT895"
                text="V"
              />
            </td>
          </tr>
          {/* 14 row */}
          <tr>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_MAS_117_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>

            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GB. LS DE SHAFT VIB. HH(YIT896)",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_811_XT",
                    useClass: "greenTxt",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_812_XT",
                    useClass: "greenTxt ml-1",
                    unit: "μ",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "W3_STG_YIT896"
                )}`}
                label="W3_STG_YIT896"
                text="V"
              />
            </td>
          </tr>
          {/* 15 row */}
          <tr>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_MAS_118_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>

            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "THRUST TEMP NONACTIVE TOP(TE801)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_801_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "120",
                }}
              />
            </td>
          </tr>
          {/* 16 row */}
          <tr>
            <td>
              <div className="d-flex">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "EXE. PR HH",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "EXH_PR_HH_VALUE_VA",
                    useClass: "greenTxt ml-1",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_MAS_EXT_PT_MED",
                  useClass: "greenTxt ml-1",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "EXHAUST_PR_HI"
                )}`}
                label="EXHAUST_PR_HI"
                text="H"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "EXHAUST_PR_HH"
                )}`}
                label="EXHAUST_PR_HH"
                text="HH"
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "THRUST TEMP ACTIVE TOP(TE802)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_802_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "120",
                }}
              />
            </td>
          </tr>
          {/* 17 row */}
          <tr>
            <td rowSpan={2}>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "DRAIN TANK LEVEL HH",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_TGD_251_LT",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "DRAIN_TANK_LEVEL_HI"
                )}`}
                label="DRAIN_TANK_LEVEL_HI"
                text="H"
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-2 text-dark digital-tag ${useColorStatus(
                  "DRAIN_TANK_LEVEL_HH"
                )}`}
                label="DRAIN_TANK_LEVEL_HH"
                text="HH"
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "THRUST TEMP NONACTIVE BOT(TE803)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_803_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "120",
                }}
              />
            </td>
          </tr>
          {/* 18 row */}
          <tr>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_TGD_252_LT",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "THRUST TEMP ACTIVE BOT(TE804)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_804_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "120",
                }}
              />
            </td>
          </tr>
          {/* 19 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GB HS BTE DE SIDE (TE809)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_809_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "107",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TURBINE FRONT BEARING TEMP(TE805)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_805_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "120",
                }}
              />
            </td>
          </tr>
          {/* 20 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GB HS BTE DE SIDE (TE810)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_810_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "107",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TURBINE FRONT BEARING TEMP(TE806)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_806_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "120",
                }}
              />
            </td>
          </tr>
          {/* 21 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GB HS BTE NDE SIDE (TE811)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_811_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "107",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TURBINE REAR BEARING TEMP(TE807)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_807_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "120",
                }}
              />
            </td>
          </tr>
          {/* 22 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GB HS BTE NDE SIDE (TE812)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_812_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "107",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TURBINE REAR BEARING TEMP(TE808)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_808_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "120",
                }}
              />
            </td>
          </tr>
          {/* 23 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GB LS BTE NDE SIDE (TE813)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_813_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "107",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "OS TRIP FROM GOV",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "W3_STG_OSP901"
                  )}`}
                  label="W3_STG_OSP901"
                  text="P"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ml-2 ${useColorStatus(
                    "W3_STG_OSP902"
                  )}`}
                  label="W3_STG_OSP902"
                  text="P"
                />

                <MotorCircleDigitalTag
                  className={`dot digital-tag ml-2 ${useColorStatus(
                    "W3_STG_OSP903"
                  )}`}
                  label="W3_STG_OSP903"
                  text="P"
                />
              </div>
            </td>
            <td></td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "OS_GOV_TRIP"
                )}`}
                label="OS_GOV_TRIP"
              />
            </td>
          </tr>
          {/* 24 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GB LS BTE NDE SIDE (TE814)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_814_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "107",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "OS TRIP FROM OS SYSTEM",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "W3_STG_OSP904"
                  )}`}
                  label="W3_STG_OSP904"
                  text="P"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ml-2 ${useColorStatus(
                    "W3_STG_OSP905"
                  )}`}
                  label="W3_STG_OSP905"
                  text="P"
                />

                <MotorCircleDigitalTag
                  className={`dot digital-tag ml-2 ${useColorStatus(
                    "W3_STG_OSP906"
                  )}`}
                  label="W3_STG_OSP906"
                  text="P"
                />
              </div>
            </td>
            <td></td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "OS_OSPS_TRIP"
                )}`}
                label="OS_OSPS_TRIP"
              />
            </td>
          </tr>
          {/* 25 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GB LS BTE DE SIDE (TE815)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_815_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "107",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "ROTOR AXIAL DISPLACEMENT HH (YIT899)",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_801_ZT",
                    useClass: "greenTxt",
                    unit: "mm",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "W3_STG_PCS_802_ZT",
                    useClass: "greenTxt ml-1",
                    unit: "mm",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </td>
            <td></td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "W3_STG_YIT899"
                )}`}
                label="W3_STG_YIT899"
              />
            </td>
          </tr>
          {/* 26 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GB LS BTE DE SIDE (TE816)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_816_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "107",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GEN DIFFERENTIAL -1 (D86B)",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "W3_STG_D86B"
                )}`}
                label="W3_STG_D86B"
              />
            </td>
          </tr>
          {/* 27 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "ALT WINDING TEMP U3 PH (TE825)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_825_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "130",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "GEN DIFFERENTIAL -2 (D86D)",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "W3_STG_D86D"
                )}`}
                label="W3_STG_D86D"
              />
            </td>
          </tr>
          {/* 28 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "ALT WINDING TEMP V3 PH (TE826)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_826_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "130",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "EMERGENCY TRIP FROM TSP (EPB001A)",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "W3_STG_EPB001A"
                )}`}
                label="W3_STG_EPB001A"
              />
            </td>
          </tr>
          {/* 29 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "ALT WINDING TEMP W3 PH (TE827)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_827_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "130",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "EMERGENCY TRIP FROM TSP (EPB001B)",
                }}
              />
            </td>

            <td> </td>
            <td> </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "W3_STG_EPB001B"
                )}`}
                label="W3_STG_EPB001B"
              />
            </td>
          </tr>
          {/* 30 row */}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "ALT WINDING TEMP U4 PH (TE828)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_PCS_828_TE",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-danger",
                  label: "130",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "EMERGENCY SHUTDOWN GOV (ESD901)",
                }}
              />
            </td>
            <td></td>
            <td> </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "W3_STG_ESD901"
                )}`}
                label="W3_STG_ESD901"
              />
            </td>
          </tr>
          {/* 31 row */}
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "CONTROL OIL HEADER PRESSURE LL",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "W3_STG_COC_PAL_PT_LL"
                )}`}
                label="W3_STG_COC_PAL_PT_LL"
              />
            </td>
          </tr>
        </table>
      </div>
      <div className="position-absolute single-text-2">
        <table className="w-100 table mb-0">
          <tr>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary p-1 w-100",
                  label: "START PERMISSIVE",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary p-1 w-100",
                  label: "PV",
                }}
              />
            </th>
            <th>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary p-1 w-100",
                  label: "STS",
                }}
              />
            </th>
          </tr>
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "EOP READY",
                }}
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "W3_STG_EOC_EOP501_C"
                )} mx-auto`}
                label="W3_STG_EOC_EOP501_C"
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "LUBE OIL TEMP AFTER COOLER>35",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_LOC_505_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "OH. OIL TANK LEVEL NOT LOW>80%",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_LOC_701_LT",
                  useClass: "greenTxt mt-1",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "OH. OIL TANK LEVEL",
                }}
              />
            </td>
            <td>
              <MotorCircleDigitalTag
                className={`square px-3 digital-tag ${useColorStatus(
                  "W3_STG_LOC_701_LS"
                )} mx-auto`}
                label="W3_STG_LOC_701_LS"
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "LUBE OIL TANK LEVEL NOT LOW",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "W3_STG_LOC_501_LT",
                  useClass: "greenTxt mt-1",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <div className="d-flex">
                <MotorCircleDigitalTag
                  className={`dot mr-2 digital-tag ${useColorStatus(
                    "W3_STG_LOC_501_LS1"
                  )}`}
                  label="W3_STG_LOC_501_LS1"
                  text="L"
                />
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useColorStatus(
                    "W3_STG_LOC_501_LS2"
                  )}`}
                  label="W3_STG_LOC_501_LS2"
                  text="L"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "CASING +10",
                }}
              />
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-3">
        <div className="yellowline-Vr position-relative"></div>
        <div className={`dot p-3 grey-color`}>OR</div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-4">
        <div className="yellowline-Vr position-relative"></div>
        <div className={`dot p-3 grey-color`}>OR</div>
      </div>
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeHr position-absolute pipe-3"></div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeHr d-flex align-items-center justify-content-center position-absolute pipe-5">
      <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AND",
            }}
          />
      </div>
      <div className="d-flex flex-column position-absolute single-text-5">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_O86T1")}`}
            label="W3_STG_O86T1"
            text="P"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "086T1",
            }}
          />
        </div>

        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_O86T2")}`}
            label="W3_STG_O86T2"
            text="P"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "086T2",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_O86T3")}`}
            label="W3_STG_O86T3"
            text="P"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "086T3",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_O86T4")}`}
            label="W3_STG_O86T4"
            text="P"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "086T4",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_O86T5")}`}
            label="W3_STG_O86T5"
            text="P"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "086T5",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_O86T6")}`}
            label="W3_STG_O86T6"
            text="P"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "086T6",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "IMPLUSE OIL PT",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_COC_455_PT",
            useClass: "greenTxt",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GOV ST PERMISSIVE CMD",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W3_STG_GOV002")}`}
          label="W3_STG_GOV002"
          text="P"
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_GOV003")}`}
            label="W3_STG_GOV003"
            text="P"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "GOV RUN",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column align-items-center position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GENERATOR BREAKER",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("W3_STG_GCB_ON")}`}
          label="W3_STG_GCB_ON"
          text="P"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1 mt-2",
            label: "GOV RUN CMD",
          }}
        />
      </div>
      <div className="d-flex flex-column align-items-end position-absolute single-text-8">
        <MotorCircleDigitalTag
          className={`square px-3 digital-tag ${useColorStatus(
            "TURBINE_GOV_ST_INT"
          )}`}
          label="TURBINE_GOV_ST_INT"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TURBINE_GOV_ST_INT",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("TURB_TRIP")}`}
          label="TURB_TRIP"
          text="P"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TURBINE HEALTHY",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark my-1",
            label: "ESV_OPEN_LIMIT",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_STG_COC_401_OLS"
          )}`}
          label="W3_STG_COC_401_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark my-1",
            label: "ESV_CLOSE_LIMIT",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "W3_STG_COC_1401_CLS"
          )}`}
          label="W3_STG_COC_1401_CLS"
        />
      </div>
      <div className="p-2 bg-secondary d-flex flex-column text-center position-absolute single-text-10">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_D86A")}`}
            label="W3_STG_D86A"
            text="T"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "DB6A",
            }}
          />
        </div>

        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_D86B")}`}
            label="W3_STG_D86B"
            text="T"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "DB6B",
            }}
          />
        </div>

        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_D86C")}`}
            label="W3_STG_D86C"
            text="T"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "DB6C",
            }}
          />
        </div>

        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_D86D")}`}
            label="W3_STG_D86D"
            text="T"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "DB6D",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GEN TRIP FB",
          }}
        />
      </div>
      <div className="p-2 bg-secondary d-flex flex-column text-center position-absolute single-text-11">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_D86T1")}`}
            label="W3_STG_D86T1"
            text="T"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "DB6T1",
            }}
          />
        </div>

        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_D86T2")}`}
            label="W3_STG_D86T2"
            text="T"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "DB6T2",
            }}
          />
        </div>

        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("W3_STG_D86T3")}`}
            label="W3_STG_D86T3"
            text="T"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "DB6T3",
            }}
          />
        </div>

        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "W3_STG_OSP911"
            )}`}
            label="W3_STG_OSP911"
            text="OS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "OSP911",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "TURBINE TRIP FB",
          }}
        />
      </div>

      <MotorCircleDigitalTag
        className={`dot digital-tag ${useColorStatus(
          "W3_STG_GOV001"
        )} position-absolute single-text-12`}
        label="W3_STG_GOV001"
        text="P"
      />
      <div className="text-center position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TURBINE SPEED",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_PCS_901_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "position-absolute single-text-14",
          label: "ESD FROM GOV",
        }}
      />

      <div className="text-center position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HP VALVE DEMAND",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_HP001",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WHRS POWER GENERATION",
          }}
        />
        <BlackContainer
          data={{
            label: "W3_STG_MW001",
            useClass: "greenTxt mt-1",
            unit: "MW",
            unitColor: "unitColor",
          }}
        />
      </div>
    </div>
  );
};

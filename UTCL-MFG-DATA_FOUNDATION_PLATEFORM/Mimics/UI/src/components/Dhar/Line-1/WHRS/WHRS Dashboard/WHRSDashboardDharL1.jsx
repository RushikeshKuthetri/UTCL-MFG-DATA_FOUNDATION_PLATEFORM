import { TextContainerWithWrapWord, BlackContainer, TextColumn, SingleText, TopLeftBox, ProgressBar } from "../../../../index";

export const WHRSDashboardDharL1 = () => {
  return (
    <div className="TurbineAndhra Whrsdashboarddharl1 w-100 h-100 position-relative">
      <div className="position-absolute single-item-1 w-100 pl-2">
        <table className="w-100 table mb-0">
          <tr>
            <th colSpan={2}>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white bg-secondary p-1 w-100",
                  label: "Turbine Generator",
                }}
              />
            </th>
            <th colSpan={2}>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white bg-secondary p-1 w-100",
                  label: "Cooler",
                }}
              />
            </th>
            <th colSpan={2}>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white bg-secondary p-1 w-100",
                  label: "AQC Boiler",
                }}
              />
            </th>
            <th colSpan={2}>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white bg-secondary p-1 w-100",
                  label: "Pre-Heater",
                }}
              />
            </th>
            <th colSpan={2}>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white bg-secondary p-1 w-100",
                  label: "Pre-Heater Boiler",
                }}
              />
            </th>
          </tr>
          {/* raw 1 start*/}
          <tr>
            <td colSpan={2}>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white font-weight-bold",
                  label: "RawMeal feed",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Hood Draft",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "KL_461KL1_PT3",
                  useClass: "greenTxt",
                  unit: "mmwc",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Mid tap temperature at Cooler end",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_TT_101B",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH Fan 1 Speed",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_441FN1_SA",
                  useClass: "greenTxt",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cyclone Out Temp to PH Boiler",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
          </tr>
          {/* raw 2 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Kiln Line-1",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "TOTAL_KILN_FEED",
                  useClass: "greenTxt",
                  unit: "Tph",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Burning Zone temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "KL_461KL1_BZONE_TT",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "AQC Boiler Inlet Flue Gas Temp - Mid tap-1/ Single tap",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH fan-1 exit gas temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_441FN1_TT2",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH1 Cyclone 1A",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_441PH1_CN1A_TT1",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 3 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Kiln Line-2",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "Tph",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TAD Air temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_461DU1_TT7",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "AQC Boiler Gas temperature below SH - Tap-1",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_TT_102",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH Fan 2 Speed",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH1 Cyclone 1B",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_441PH1_CN1B_TT1",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 4 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Kiln Line-3",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "Tph",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Secondary air temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "KL_461KL1_TT3",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "AQC Boiler Inlet Flue Gas Temp - Mid tap-2",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH fan-2 exit gas temperature",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH2 Cyclone 1A",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_441PH2_CN1A_TT1",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 5 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Kiln Line-4",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "Tph",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Clinker Temp",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471CC1_TI1",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "AQC Boiler Gas temperature below SH - Tap-2",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH Fan 3 Speed",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH2 Cyclone 1B",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_441PH2_CN1B_TT1",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 6 start*/}
          <tr>
            <td colSpan={2}>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white font-weight-bold",
                  label: "WHRS Power Generation-MW",
                }}
              />
            </td>

            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Coolar Grate Speed/strock",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471GS_SA",
                  useClass: "greenTxt",
                  unit: "SPM",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "AQC Boiler Outlet Flue Gas Temp",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_TT_108",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH fan-3 exit gas temperature",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH Boiler inlet Gas temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_TT_103",
                  useClass: "greenTxt",
                  unit: "mmWc",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 7 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-1",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "MW",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Clinker cooler Bed hieght",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "mmwc",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Evaporator Inlet Gas temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_TT_103",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TAD -1 damper position",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "KL_461DA1_ZTA",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Evaporator inlet gas temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_TT_104",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 8 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-2",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "STG_KW_TR",
                  useClass: "greenTxt",
                  unit: "MW",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "HAR Common Header Air temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471DU1_TT2",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Fresh Air damper Opening",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TAD -2 damper position",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "KL_461DA2_ZTA",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH Boiler Outlet Gas temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_TT_110",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 9 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-3",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "MW",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "ESP ID Fan RPM",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FNF_SA",
                  useClass: "greenTxt",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Fresh Air fan Speed",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "Rpm",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Calciner exit CO",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_451PR1_CO",
                  useClass: "greenTxt",
                  unit: "PPM",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "DP across Boiler",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_DPT_101",
                  useClass: "greenTxt",
                  unit: "KSc",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 10 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-4",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "MW",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Total Cooler Air Flow ",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Vent damper (AQC Bypass) opening",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471LD6_ZT",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Calciner exit Oxygen",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_451PR1_O2",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH Bypass damper opening",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "KL_481DA1_ZT1",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 11 start*/}
          <tr>
            <td colSpan={2}>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white font-weight-bold",
                  label: "HP Demand",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Total specific cooling air",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_TOT_FLOW_PER_KG",
                  useClass: "greenTxt",
                  unit: "Nm³/Kg",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Vent damper exit gas temperature",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Kiln inlet CO",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_451KL_CO",
                  useClass: "greenTxt",
                  unit: "PPM",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH Bypass damper exit gas temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_WHRS_TT101A",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 12 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-1",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 1",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN1_SA",
                  useClass: "greenTxt",
                  unit: "Rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "ESP gas inlet temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471EP1_TT1",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Kiln inlet Oxygen",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_451KL_O2",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH HP Steam Pressure (MSSV Outlet)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_PT_606B",
                  useClass: "greenTxt",
                  unit: "KSc",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 13 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-2",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "STG_AEH_200",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 2",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN2_SA",
                  useClass: "greenTxt",
                  unit: "Rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "ESP Gas Exit temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471EP1_TT4",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Top cyclone exit CO",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_441PHO_AIAH_CO",
                  useClass: "greenTxt",
                  unit: "PPM",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH HP Steam temperature (MSSV Outlet)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_TT_607A",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 14 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-3",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 3",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN3_SA",
                  useClass: "greenTxt",
                  unit: "Rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "DP across Boiler",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_DPT_103",
                  useClass: "greenTxt",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Top cyclone exit Oxygen",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_441PHO_AIAH_O2",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH HP steam Generation",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_FT_608B",
                  useClass: "greenTxt",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 15 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-4",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 4",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN4_SA",
                  useClass: "greenTxt",
                  unit: "Rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "AQC HP Steam Pressure (MSSV Outlet)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_PT_606B",
                  useClass: "greenTxt",
                  unit: "mmWc",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Raw Mill inlet gas temp after recirculation gas mixing ",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "RM_361DU3_TT92",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH LP Steam Pressure (MSSV Outlet)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_PT_616A",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 16 start*/}
          <tr>
            <td colSpan={2}>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white font-weight-bold",
                  label: "ACC/ Condensor Performance - Vacuum",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 5",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN5_SA",
                  useClass: "greenTxt",
                  unit: "Rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "AQC HP Steam temperature (MSSV Outlet)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_TT_607A",
                  useClass: "greenTxt",
                  unit: "KSc",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Raw Mill outlet gas temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "RM_361DU1_TT1",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH LP Steam temperature (MSSV Outlet)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_TT_617A",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 17 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-1",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "STG_PT_150A",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 6",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN6_SA",
                  useClass: "greenTxt",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "AQC HP Steam Generation (Sat Steam)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_FT_601A",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Coal Mill inlet gas temp after recirculation gas mixing",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CO_L41DU2_TT91",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "PH LP Steam Generation ",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "PH_FT_618A",
                  useClass: "greenTxt",
                  unit: "",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          {/* raw 18 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-2",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 7",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN7_SA",
                  useClass: "greenTxt",
                  unit: "Rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "AQC HP steam Generation incl PH Steam",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "HP_TG_FT631A",
                  useClass: "greenTxt",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Coal Mill outlet gas temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CO_L41DU2_TT1",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Steam temperature at Common header",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
          </tr>
          {/* raw 19 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-3",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 8",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN8_SA",
                  useClass: "greenTxt",
                  unit: "Rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Attemperation -1 Inlet Steam temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_TT_601",
                  useClass: "greenTxt",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          {/* raw 19 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-4",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 9",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN9_SSP",
                  useClass: "greenTxt",
                  unit: "Rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Attemperation -1 Outlet Steam temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_TT_602A",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          {/* raw 20 start*/}
          <tr>
            <td colSpan={2}>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white font-weight-bold",
                  label: "Turbine Exhaust Steam Temperature",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 10",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FNA_SA",
                  useClass: "greenTxt",
                  unit: "Rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Attemperation -1 FW flow",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_FT_510",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* raw 21 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-1",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "STG_TE_150B",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 11",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FNB_SA",
                  useClass: "greenTxt",
                  unit: "Rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Attemperation -2 Inlet Steam temperature",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "tph",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td> </td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          {/* raw 22 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-2",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 12",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FNC_SA",
                  useClass: "greenTxt",
                  unit: "Rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Attemperation -2 Outlet Steam temperature",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td> </td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          {/* raw 23 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-3",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 13",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Attemperation -2 FW flow",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td> </td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          {/* raw 24 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG-4",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 14",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "rpm",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "AQC LP Steam Pressure (MSSV Outlet)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_PT_616A",
                  useClass: "greenTxt",
                  unit: "kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          {/* raw 25 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG HP Steam Pressure",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "STG_PT_110A",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 1",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN1_FT",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "AQC LP Steam temperature (MSSV Outlet)",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_TT_617B",
                  useClass: "greenTxt",
                  unit: "Rpm",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          {/* raw 26 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG HP Steam temperature",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_TT_607A",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 2",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN2_FT",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "AQC LP Steam Generation",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_FT_618B",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          {/* raw 27 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG HP Steam Flow",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_FT_608A",
                  useClass: "greenTxt",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 3",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN3_FT",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "HP Steam temperature at Common header",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td> </td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          {/* raw 28 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG LP Steam Pressure ",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_PT_616A",
                  useClass: "greenTxt",
                  unit: "Kg/cm2",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 4",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN4_FT",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "LP Steam temperature at Common header",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td> </td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          {/* raw 29 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG LP Steam temperature ",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_TT_617A",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 5",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN5_FT",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          {/* raw 30 start*/}
          <tr>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TG LP Steam Flow",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "AQC_FT_618A",
                  useClass: "greenTxt",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 6",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN6_FT",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          {/* raw 31 start*/}
          <tr>
            <td> </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 7",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN7_FT",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          {/* raw 32 start*/}
          <tr>
            <td> </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 8",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN8_FT",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          {/* raw 33 start*/}
          <tr>
            <td> </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 9",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FN9_FT",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          {/* raw 34 start*/}
          <tr>
            <td> </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 10",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FNA_FT",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          {/* raw 35 start*/}
          <tr>
            <td> </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 11",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FNB_FT",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          {/* raw 36 start*/}
          <tr>
            <td> </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 12",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "CL_471FNC_FT",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          {/* raw 37 start*/}
          <tr>
            <td> </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 13",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          {/* raw 38 start*/}
          <tr>
            <td> </td>
            <td> </td>
            <td>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "Cooler Fan 14",
                }}
              />
            </td>
            <td>
              {/* <BlackContainer
                data={{
                  label: "",
                  useClass: "greenTxt",
                  unit: "M3/Min",
                  unitColor: "unitColor",
                }}
              /> */}
            </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

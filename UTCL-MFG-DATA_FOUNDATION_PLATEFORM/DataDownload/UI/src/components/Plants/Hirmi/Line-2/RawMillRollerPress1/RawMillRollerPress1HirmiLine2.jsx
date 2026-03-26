import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  MimicCaret,
  TransparentBoxWithGate,
} from "../../../../index";

import { useCaretColorStatus, useColorStatus } from "../../../../../utils";

export const RawMillRollerPress1HirmiLine2 = () => {
  return (
    <div className="RawMillRollerPress1Hirmil2 w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr upArrow position-absolute line-5"></div>
      <div className="yellowline-Vr upArrow position-absolute line-6"></div>
      <div className="yellowline-Vr upArrow position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow position-absolute line-8"></div>
      <div className="yellowline-Vr position-absolute line-9"></div>
      <div className="yellowline-Vr position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Vr position-absolute line-12"></div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Vr position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr position-absolute line-16"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-17"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-18"></div>
      <div className="yellowline-Hr position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="yellowline-Hr position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>

      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>

      <div className="pipeHr d-flex justify-content-around align-items-center position-absolute single-text-1">
        <BlackContainer
          data={{
            label: "RM1_R_INP_RP01_T01",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Fixed Roller",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "RM1_R_INP_RP01_T02",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_INP_RP01_S01_A",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="pipeHr d-flex justify-content-around align-items-center position-absolute single-text-2">
        <BlackContainer
          data={{
            label: "RM1_R_INP_RP01_T11",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Movable Roller",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "RM1_R_INP_RP01_T12",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_INP_RP01_S11_A",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <div className="squareplustri text-center pt-2 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BI1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "15m",
            }}
          />
        </div>
      </div>
      <div className="pipeHr text-center position-absolute single-text-4">
        <BlackContainer
          data={{
            label: "RM1_R_INP_HD01_T01",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Oil Tank",
          }}
        />
      </div>
      <div className="position-absolute single-text-5">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "RM1_362LQ3_M01"
            )}`}
            label="RM1_362LQ3_M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LQ3M01",
            }}
          />
        </div>
        <div className="pipeHr position-relative text-center mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Grease Tank",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "RM1_362LQ6_C01",
            useClass: "greenTxt mt-2",
            unit: "kg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-around position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1 text-center w-100",
            label: "Scada_Parameter",
          }}
        />
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Operating Pressure",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "30-145 Bar",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_PRESS_SP",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Pressure - Inc MAX",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "10-99 Bar",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_PRESS_INCMAX",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Pressure - Ratio",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "0-8 Bar/min",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_PRESS_RATIO",
              useClass: "greenTxt ml-2",
              unit: "bar/min",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Pressure - Tolerance",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "5-25 Bar",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_PRES_TOLE",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Pressure - Dif MAX",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "0-70 Bar",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_PRES_DIFFMAX",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Pressure - Corr.Factor K3",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "0-100%",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_PRESCORFACK3",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Bypass Open(PressCorr+Tol)",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "0-50 Bar",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_PRESSBYPOPEN",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Prop.V Press Incr Time delay",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "0-180 Sec",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_PROVLVINCDEL",
              useClass: "greenTxt ml-2",
              unit: "sec",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Prop. Valves - -Press Increase",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "0-100 %",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_PROPVLV_INC",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Prop. Valves P Dec Low Point",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "20-100 %",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_PROPVLVDECLP",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Prop. Valves P Dec High Point",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "20-100 %",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_PROVLVDECHP",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Bearing Distance - Lmin",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "1-12 mm",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_BEARDISTLMIN",
              useClass: "greenTxt ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Bearing Distance L2 (BCON 4)",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "5-30 mm",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_BEARDIST_L2",
              useClass: "greenTxt ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Bearing Distance L2 Inc(BCON 1)",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "5-45 mm",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_BEARDISL2INC",
              useClass: "greenTxt ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Gap Diff. Permit",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "2-10 mm",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_BRGDISDIFMAX",
              useClass: "greenTxt ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Roller Distance Min L/R",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "0-30 mm",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_BEARDISLRMIN",
              useClass: "greenTxt ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Grease Pulse rate",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "5-99 P/Hr",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_GREASPULRATE",
              useClass: "greenTxt ml-2",
              unit: "pulse/hr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Prebin - Level Max",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "20-95 %",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_FEDBINLVLMAX",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Prebin - Level Min",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "0-50 %",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_FEDBINLVLMIN",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Main Drive Current Operation",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "100-132 A",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_CURR_OPER",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Main Drive Current MAX Diff.",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "0-40 A",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_CURR_DIFF",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Main Drive Excess Current",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "100-132 A",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_CURR_EXCESS",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Bladder Acc. Pressure",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "0-200 Bar",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_BLAD_ACCPRES",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Pres Dec gap correction",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "20-100 %",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_PROPVLVDECLP",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Pres Dec Overload",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "20-100 %",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_SPARE_2",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Feed Regu.Gate - Position SP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "0-100 %",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_DG_POS_SP",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Feed Regu.Gate Hystersis",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "1-5 %",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_S_PAR_DG_POS_HYS",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="img-74 position-absolute single-text-7"></div>
      <div className="position-absolute single-text-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark px-1 text-center w-100",
            label: "Rolcox Input Vibration",
          }}
        />
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FRH Vibr.",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_INP_RP01_X31",
              useClass: "greenTxt ml-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FRV Vibr.",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_INP_RP01_X32",
              useClass: "greenTxt ml-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MRH Vibr.",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_INP_RP01_X33",
              useClass: "greenTxt ml-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MRV Vibr.",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_INP_RP01_X34",
              useClass: "greenTxt ml-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9">
        <div className="d-flex justify-content-between mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Current Difference",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_STA_CUR_DIFF",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SP Pressure L+R",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_STA_SP_PRESS_LR",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SP Pres.+Correction Factor-L",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_STA_SP_PRESS_CORR_L",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SP Pres.+Correction Factor-R",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_STA_SP_PRESS_CORR_R",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BCON Step",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_STA_STEP_BCON",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10">
        <div className="d-flex justify-content-between pl-5 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "With Load",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Total Load",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Hour",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_STA_OP_TIM_HR_LOAD",
              useClass: "greenTxt ml-2",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_STA_OP_TIM_HR",
              useClass: "greenTxt ml-2",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Min",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_STA_OP_TIM_MIN_LOAD",
              useClass: "greenTxt ml-2",
              unit: "min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_R_STA_OP_TIM_MIN",
              useClass: "greenTxt ml-2",
              unit: "min",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Current Step Bearing Control",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_R_STA_STEP_BCON",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex align-items-end position-absolute single-text-12">
        <div className="d-flex flex-column ml-2">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "RM1_362MD1_M02"
            )}`}
            label="RM1_362MD1_M02"
          />
          <MotorCircleDigitalTag
            className={`line-circle mt-2 digital-tag ${useColorStatus(
              "RM1_362MD1_M03"
            )}`}
            label="RM1_362MD1_M03"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-3",
              label: "MD1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("RM1_362MD1")}`}
            label="RM1_362MD1"
            text="M"
          />
        </div>
      </div>
      <div className="d-flex align-items-end position-absolute single-text-13">
        <div className="d-flex flex-column ml-2">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "RM1_362MD2_M02"
            )}`}
            label="RM1_362MD2_M02"
          />
          <MotorCircleDigitalTag
            className={`line-circle mt-2 digital-tag ${useColorStatus(
              "RM1_362MD2_M03"
            )}`}
            label="RM1_362MD2_M03"
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-3",
              label: "MD2",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("RM1_362MD2")}`}
            label="RM1_362MD2"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "RM1_362MD1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_362MD1_JI",
            useClass: "greenTxt mt-2",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "RM1_362MD2_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_362MD2_JI",
            useClass: "greenTxt mt-2",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "LQ1M01",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus(
            "RM1_362LQ1_M01"
          )}`}
          label="RM1_362LQ1_M01"
        />
        <MotorCircleDigitalTag
          className={`line-circle ml-2 digital-tag ${useColorStatus(
            "RM1_362LQ1_M02"
          )}`}
          label="RM1_362LQ1_M02"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "M02",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "LQ2M01",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus(
            "RM1_362LQ2_M01"
          )}`}
          label="RM1_362LQ2_M01"
        />
        <MotorCircleDigitalTag
          className={`line-circle ml-2 digital-tag ${useColorStatus(
            "RM1_362LQ2_M02"
          )}`}
          label="RM1_362LQ2_M02"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "M02",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-18">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V11"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V11"
          )}`}
          label="RM1_R_OUP_HD01_V11"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "V11",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-19">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V09"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V09"
          )}`}
          label="RM1_R_OUP_HD01_V09"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "V09",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-20">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V05"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V05"
          )}`}
          label="RM1_R_OUP_HD01_V05"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "V5",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-21">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V06"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V06"
          )}`}
          label="RM1_R_OUP_HD01_V06"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "V6",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-22">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V10"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V10"
          )}`}
          label="RM1_R_OUP_HD01_V10"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "V10",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-23">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V12"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V12"
          )}`}
          label="RM1_R_OUP_HD01_V12"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "V12",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_PROP_VAL_L"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_PROP_VAL_L"
          )}`}
          label="RM1_R_OUP_PROP_VAL_L"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "V1 V2",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V08"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V08"
          )}`}
          label="RM1_R_OUP_HD01_V08"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "V8",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V07"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_HD01_V07"
          )}`}
          label="RM1_R_OUP_HD01_V07"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "V7",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_PROP_VAL_R"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "RM1_R_OUP_PROP_VAL_R"
          )}`}
          label="RM1_R_OUP_PROP_VAL_R"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "V3 V4",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-28">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "RM1_362HD1_M01"
            )}`}
            label="RM1_362HD1_M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HD1M01",
            }}
          />
        </div>
        <div className="text-center ml-2">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "RM1_362HD1_M02"
            )}`}
            label="RM1_362HD1_M02"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HD1M02",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-danger mb-1",
            label: "LEFT",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_R_INP_RP01_T21",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <BlackContainer
          data={{
            label: "RM1_362BI1_WI",
            useClass: "greenTxt",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_R_INP01_L01",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-danger mb-1",
            label: "RIGHT",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_R_INP_RP01_T22",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "RM1_R_INP_RP01_T12",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "PV",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_S_PAR_DG_POS_SP",
            useClass: "greenTxt ml-5",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "SV",
          }}
        />
      </div>
      <div className="d-flex flex-column ustify-content-between position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "RM1_R_INP_LQ01_T01",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_R_INP_LQ02_T01",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "RM1_R_INP_RP01_G01_DIFF",
          useClass: "greenTxt position-absolute single-text-33",
          unit: "mm",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PH_422BF1_TT1",
          useClass: "greenTxt position-absolute single-text-34",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "RM1_R_OUP_PROP_VAL_R",
          useClass: "greenTxt position-absolute single-text-35",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <TransparentBoxWithGate
        isClickable={true}
        parentClass="position-absolute single-text-36"
        squareProps={{
          tagLabel: "RM1_S_PAR_DG_POS_SP",
          squareClass: `${useColorStatus("RM1_S_PAR_DG_POS_SP")}`,
        }}
      />
    </div>
  );
};

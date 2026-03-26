import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
} from "../../../index";
import { useColorStatus } from "../../../../utils";
import { useDispatch } from "react-redux";

export const BallMillOverviewMagdalla = () => {
  const dispatch = useDispatch();
  return (
    <div className="BMOverviewMagdalla position-relative w-100 h-100">
        <div className="border position-absolute line-23"></div>
      <div className="border position-absolute line-24"></div>
      <div className="border position-absolute line-25"></div>
      <div className="border position-absolute line-26"></div>
      <div className="border position-absolute line-27"></div>
      <div className="yellowline-Vr position-absolute line-1"></div>
      <div className="yellowline-Vr position-absolute line-2"></div>
      <div className="yellowline-Vr position-absolute line-3"></div>
      <div className="yellowline-Vr position-absolute line-4"></div>
      <div className="yellowline-Vr position-absolute line-5"></div>
      <div className="yellowline-Vr position-absolute line-6"></div>
      <div className="yellowline-Vr position-absolute line-7"></div>
      <div className="yellowline-Vr position-absolute line-8"></div>
      <div className="yellowline-Vr position-absolute line-9"></div>
      <div className="yellowline-Vr position-absolute line-10"></div>
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Hr position-absolute line-13"></div>
      <div className="yellowline-Hr position-absolute line-14"></div>
      <div className="yellowline-Hr position-absolute line-15"></div>
      <div className="yellowline-Hr position-absolute line-16"></div>
      <div className="yellowline-Hr position-absolute line-17"></div>
      <div className="yellowline-Hr position-absolute line-18"></div>
      <div className="yellowline-Hr position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Vr position-absolute line-28"></div>
   
      <div className="squareplustri text-center position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K13S1 CAP 400MT",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K13LCHP1",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K13LCHP2",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "MILL STACK SPM",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_MILL_STACK_SPM",
            useClass: "greenTxt ml-1",
            unit: "SPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WIND VELOCITY",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_WIND_VELOCITY",
            useClass: "greenTxt ml-1",
            unit: "KM/H",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "STACK TEMP",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_Stack_temp_m1",
            useClass: "greenTxt ml-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1 w-100",
            label: "FEED (tph)",
          }}
        />
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "G43.1",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G43_1_702I",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "G43.2",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G43_2_703I",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "G47",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G47_704I",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "G35D",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G35_D_TPH",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K13SF1",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_K13SF1_705I",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K31FM1",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_K13SF2_IN",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-2 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "THROPUT TPH",
            }}
          />
          <BlackContainer
            data={{
              label: "PAC1_TOTALTPH",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary mt-1 p-1 w-100",
            label: "FEED COUNTER",
          }}
        />
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "G43.1",
            }}
          />
          <BlackContainer
            data={{
              label: "G43_1_TOT_TD",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "G43.2",
            }}
          />
          <BlackContainer
            data={{
              label: "G43_2_TOT_TD",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "G47",
            }}
          />
          <BlackContainer
            data={{
              label: "G47_TOT_TD",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "G35D",
            }}
          />
          <BlackContainer
            data={{
              label: "G35D_TOT_TD",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K13SF1",
            }}
          />
          <BlackContainer
            data={{
              label: "K13SF1_TOT_TD",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K31FM1",
            }}
          />
          <BlackContainer
            data={{
              label: "K13SF2_TOT_TD",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "OPC",
            }}
          />
          <BlackContainer
            data={{
              label: "OPC_TOT_TD",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PPC",
            }}
          />
          <BlackContainer
            data={{
              label: "PPC_TOT_TD",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-1 px-1 pb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOTAL",
            }}
          />
          <BlackContainer
            data={{
              label: "TOTAL_FEED",
              useClass: "greenTxt ml-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <button
          className="d-block btn greenbtn"
          onClick={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "magdallabmoppopup2",
                plant: "magdalla",
                plantcode: "NMGD",
              },
            });
          }}
          onTouchStart={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "magdallabmoppopup2",
                plant: "magdalla",
                plantcode: "NMGD",
              },
            });
          }}
        >
          TOTALIZER
        </button>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1 mt-2 w-100",
            label: "MILL TEMPRATURE",
          }}
        />
        <div className="d-flex justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "AI_G51_515_1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G52_5_514_1",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "AI_G51_515_2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G52_5_514_2",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "AI_G51_515_3",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G52_2_514_3",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "AI_G51_515_4",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G52_1_514_4",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "AI_G51_515_5",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G51_514_5",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "AI_G51_515_6",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G51_514_6",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1 mt-2 w-100",
            label: "MOTOR TEMPRATURE",
          }}
        />
        <div className="d-flex justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "AI_G51_511_1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G51_511_4",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "AI_G51_511_2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G51_511_5",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "AI_G51_511_3",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G51_511_6",
              useClass: "greenTxt ml-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-1 mt-2 w-100",
            label: "MILL VIBRATION",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G51_E_518",
            useClass: "greenTxt mt-1 ml-auto",
            unit: "mm/sec.",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G51_E_520",
            useClass: "greenTxt mt-01 ml-auto",
            unit: "mm/sec.",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G51_E_519",
            useClass: "greenTxt mt-01 ml-auto",
            unit: "mm/sec.",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G51_E_521",
            useClass: "greenTxt mt-01 ml-auto",
            unit: "mm/sec.",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex border p-1 position-absolute single-text-9">
        <MotorCircleDigitalTag
          className={`dot mt-2 mr-3 digital-tag ${useColorStatus(
            "DOSING_P_Run"
          )}`}
          label="DOSING_P_Run"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Dosing PV",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_Dosing_PV",
            useClass: "greenTxt ml-2",
            unit: "Ltr/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-10">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "MULFN1",
          }}
        />
        <BlackContainer
          data={{
            label: "MUL_FN1_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_MULFN1_DP",
            useClass: "greenTxt mt-3",
            unit: "MMWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`dot p-3 position-absolute single-text-11 digital-tag ${useColorStatus(
          "MUL_FN1_Run"
        )}`}
        text="M"
        label="MUL_FN1_Run"
      />
      <div className="d-flex position-absolute single-text-12">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("H24_DCF_Run")}`}
          text="M"
          label="H24_DCF_Run"
        />
        <div className="ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "H24",
            }}
          />
          <BlackContainer
            data={{
              label: "H24_DCF_AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AI_G24_DP",
              useClass: "greenTxt mt-3",
              unit: "MMWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-text-13">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus(
            "50AB_7_AR_SL_BL_Run"
          )}`}
          text="M"
          label="50AB_7_AR_SL_BL_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("50_BE1_Run")}`}
          label="50_BE1_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus(
            "50AB_1_AR_SL_BL_Run"
          )}`}
          text="M"
          label="50AB_1_AR_SL_BL_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("FC1_Run")}`}
          text="M"
          label="FC1_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("50RA3_Run")}`}
          text="M"
          label="50RA3_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("50SC1_Run")}`}
          label="50SC1_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("G69_DCF_Run")}`}
          label="G69_DCF_Run"
        />
      </div>
      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "50AB_7_AR_SL_BL_AMP",
            useClass: "greenTxt ml-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "50_BE1_AMP",
            useClass: "greenTxt mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "50AB1",
          }}
        />
        <BlackContainer
          data={{
            label: "50AB_1_AR_SL_BL_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "50SC2",
          }}
        />
        <BlackContainer
          data={{
            label: "FC1_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "50SC1",
          }}
        />
        <BlackContainer
          data={{
            label: "50SC1_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SILO DRAFT",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_CSILO1_Vent",
            useClass: "greenTxt mt-1",
            unit: "MMWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_CSILO2_Vent",
            useClass: "greenTxt mt-1",
            unit: "MMWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_CSILO3_Vent",
            useClass: "greenTxt mt-1",
            unit: "MMWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_CSILO4_Vent",
            useClass: "greenTxt mt-1",
            unit: "MMWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "SILO LEVEL",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_SILO1_LEVEL",
            useClass: "greenTxt mt-1",
            unit: "Mtr",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_SILO2_LEVEL",
            useClass: "greenTxt mt-1",
            unit: "Mtr",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_SILO3_LEVEL",
            useClass: "greenTxt mt-1",
            unit: "Mtr",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_SILO4_LEVEL",
            useClass: "greenTxt mt-1",
            unit: "Mtr",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "NEW FEED END",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G52_1_DPT_NEW",
            useClass: "greenTxt mt-1",
            unit: "PSI",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G52_3_PT_NEW",
            useClass: "greenTxt mt-1",
            unit: "BAR",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G52_3_FL_TX",
            useClass: "greenTxt mt-1",
            unit: "GPM",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "NEW DISCH END",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G52_2_DPT_NEW",
            useClass: "greenTxt mt-1",
            unit: "PSI",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G52_4_PT_NEW",
            useClass: "greenTxt mt-1",
            unit: "BAR",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G52_4_FL_TX",
            useClass: "greenTxt mt-1",
            unit: "GPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus(
              "G56_1_AIR_SL_BL_Run"
            )}`}
            text="M"
            label="G56_1_AIR_SL_BL_Run"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark w-50 ml-1",
              label: "G56.1 BRG COOL FAN",
            }}
          />
        </div>
        <button
          className="d-block btn greenbtn mt-2"
          onClick={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "magdallabmoppopup1",
                plant: "magdalla",
                plantcode: "NMGD",
              },
            });
          }}
          onTouchStart={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "magdallabmoppopup1",
                plant: "magdalla",
                plantcode: "NMGD",
              },
            });
          }}
        >
          MILL PAGE
        </button>
      </div>
      <div className="position-absolute single-text-20">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "NEW GG",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-2 ${useColorStatus(
              "GG_NEWSPRAY_Run"
            )}`}
            label="GG_NEWSPRAY_Run"
          />
        </div>
        <div className="d-flex mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "OLD GG",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot ml-2 digital-tag ${useColorStatus(
              "GG_OLDSPRAY_Run"
            )}`}
            label="GG_OLDSPRAY_Run"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-21">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("G51_4_HT_ST_CF_Run")}`}
          label="G51_4_HT_ST_CF_Run"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "G51.4",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "AI_G51_4_CURRENT",
          useClass: "greenTxt position-absolute single-text-22",
          unit: "Amp",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-23">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus(
            "G51_1_BM_GB_LUB_Run"
          )}`}
          text="M"
          label="G51_1_BM_GB_LUB_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 mt-3 digital-tag ${useColorStatus(
            "G52_5_BM_PIN_LP_Run"
          )}`}
          text="M"
          label="G52_5_BM_PIN_LP_Run"
        />
      </div>
      <div className="position-absolute single-text-24">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "G52.4",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("G52_4_NEW_Run")}`}
            label="G52_4_NEW_Run"
          />

        </div>
        <div className="d-flex mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "G52.2",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("G52_2_NEW_Run")}`}
            label="G52_2_NEW_Run"
          />

        </div>
      </div>
      <div className="position-absolute single-text-25">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus(
              "G52_3_NEW_Run"
            )}`}
            label="G52_3_NEW_Run"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "G52.3",
            }}
          />

        </div>
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus(
              "G52_1_NEW_Run"
            )}`}
            label="G52_1_NEW_Run"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "G52.1",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-26">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus(
            "G51_3S_BM_SR_CF_Run"
          )}`}
          text="M"
          label="G51_3S_BM_SR_CF_Run"
        />
        <div className="square bg-white ml-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("G51_MILL_HT_Run")}`}
            label="G51_MILL_HT_Run"
          />
        </div>
      </div>
      <div className="position-absolute single-text-27">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus(
            "G51_5_HT_SL_CF_Run"
          )}`}
          text="M"
          label="G51_5_HT_SL_CF_Run"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Mill Aux Drive",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "G79.1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("G79_1_DC_Run")}`}
          label="G79_1_DC_Run"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mr-2 mt-1",
            label: "G79",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus("G79_DCF_Run")}`}
          text="M"
          label="G79_DCF_Run"
        />
      </div>
      <div className="position-absolute single-text-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "MILL FE DRAFT",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_MillFE_Draft",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "MILL DE DRAFT",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G51_B_517",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Discharge Temp",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G51_512",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "G43.1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "G43_1_CLK_WF_Run"
            )}`}
            label="G43_1_CLK_WF_Run"
          />
        </div>
        <BlackContainer
          data={{
            label: "AI_G43_1_702I",
            useClass: "greenTxt mt-3",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "G35D",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "G35D_GYP_WF_Run"
            )}`}
            label="G35D_GYP_WF_Run"
          />
        </div>
        <BlackContainer
          data={{
            label: "AI_G35_D_TPH",
            useClass: "greenTxt mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G35_D_A",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("G43_2_CLK_WF_Run")}`}
            label="G43_2_CLK_WF_Run"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "G43.2",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "AI_G43_2_703I",
            useClass: "greenTxt mt-3",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("G47_GYP_WF_Run")}`}
            label="G47_GYP_WF_Run"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "G47",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "AI_G47_704I",
            useClass: "greenTxt mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G47_A",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "AI_G43_1_A",
          useClass: "greenTxt position-absolute single-text-32",
          unit: "Amp",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "AI_G43_2_A",
          useClass: "greenTxt position-absolute single-text-33",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "MILL KW",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G51_KW",
            useClass: "greenTxt mt-1",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G51_E",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "AI_G39_DP",
          useClass: "greenTxt position-absolute single-text-35",
          unit: "MMWG",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto",
            label: "G51.1",
          }}
        />
        <div className="d-flex mt-1">
          <BlackContainer
            data={{
              label: "AI_G52_3_FL_TX",
              useClass: "greenTxt",
              unit: "LPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "G51_1_BM_GB_LUB_AMP",
              useClass: "greenTxt ml-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "G52.5",
          }}
        />
        <BlackContainer
          data={{
            label: "G52_5_BM_PIN_LP_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "G51.3",
          }}
        />
        <BlackContainer
          data={{
            label: "G51_3S_BM_SR_CF_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "G51.5",
          }}
        />
        <BlackContainer
          data={{
            label: "G51_4_HT_ST_CF_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "AI_G35_D_TPH",
          useClass: "greenTxt position-absolute single-text-40",
          unit: "MMWG",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark bg-secondary p-1 position-absolute single-text-41",
          label: "BALL MILL VENT GROUP",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark bg-secondary p-1 position-absolute single-text-42",
          label: "MILL LUB GROUP",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark bg-secondary p-1 position-absolute single-text-43",
          label: "FLY ASH GROUP",
        }}
      />
      <div className="d-flex flex-column justify-content-between position-absolute single-text-44">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus(
            "50AB_6_AR_SL_BL_Run"
          )}`}
          text="M"
          label="50AB_6_AR_SL_BL_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("K13RAL1_Run")}`}
          text="M"
          label="K13RAL1_Run"
        />
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-text-45">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("K13FN1_DCF_Run")}`}
          text="M"
          label="K13FN1_DCF_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("K13HE1_Run")}`}
          text="M"
          label="K13HE1_Run"
        />
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-46">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("K13BL1_Run")}`}
          text="M"
          label="K13BL1_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("K13BL2_Run")}`}
          text="M"
          label="K13BL2_Run"
        />
      </div>
      <div className="position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K13RAL1",
          }}
        />
        <BlackContainer
          data={{
            label: "K13RAL1_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K13FN1",
          }}
        />
        <BlackContainer
          data={{
            label: "K13FN1_DCF_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "50AB6",
          }}
        />
        <BlackContainer
          data={{
            label: "50AB_6_AR_SL_BL_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-50",
          label: "K13SF1",
        }}
      />
      <div className="position-absolute single-text-51">
        <BlackContainer
          data={{
            label: "AI_K13FN_1_DP",
            useClass: "greenTxt",
            unit: "MMWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K13BL2",
          }}
        />
        <BlackContainer
          data={{
            label: "K13BL2_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-52">
        <BlackContainer
          data={{
            label: "AI_K13HE1_516",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_flyash_level",
            useClass: "greenTxt mt-1",
            unit: "meters",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-53">
        <BlackContainer
          data={{
            label: "K13HE1_AMP",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_K13Hop_Draft",
            useClass: "greenTxt mt-4",
            unit: "MMWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-54">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("K13RF1_Run")}`}
          text="M"
          label="K13RF1_Run"
        />
        <BlackContainer
          data={{
            label: "K13RF1_AMP",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "AI_K13_LCH2",
          useClass: "greenTxt position-absolute single-text-55",
          unit: "TON",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "AI_K13_LCHP1",
          useClass: "greenTxt position-absolute single-text-56",
          unit: "TON",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-57">
        <BlackContainer
          data={{
            label: "AI_K13SF2_IN",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_K13_SF1_RPMin",
            useClass: "greenTxt ml-2 mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_K13_SF1_RPMin",
            useClass: "greenTxt ml-2 mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-58">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "K13RF3",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("K13RF3_FF_Run")}`}
          text="M"
          label="K13RF3_FF_Run"
        />
      </div>
      <div className="d-flex position-absolute single-text-59">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "K13SF2",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("K13SF2_Run")}`}
          text="M"
          label="K13SF2_Run"
        />
        <BlackContainer
          data={{
            label: "AI_K13SF1_705I",
            useClass: "greenTxt ml-1 mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-60">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("BL3_ASL_Run")}`}
          label="BL3_ASL_Run"
          text="M"
        />
        <BlackContainer
          data={{
            label: "BL3_ASL_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>

      <BlackContainer
        data={{
          label: "AI_G69_A",
          useClass: "greenTxt mt-1 position-absolute single-text-61",
          unit: "A",
          unitColor: "unitColor",
        }}
      />

      <div className="position-absolute single-text-62">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("J100_C_CT_Run")}`}
          text="M"
          label="J100_C_CT_Run"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "J100.C",
          }}
        />
        <BlackContainer
          data={{
            label: "CP4_AC",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "J100_6_CIR_WP_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "J100_7_CIR_WP_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "J100_8_CIR_WP_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-text-63">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("CP3_Run")}`}
          text="M"
          label="CP3_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("CP4_AC_Run")}`}
          label="CP4_AC_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus(
            "J100_6_CIR_WP_Run"
          )}`}
          text="M"
          label="J100_6_CIR_WP_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus(
            "J100_7_CIR_WP_Run"
          )}`}
          text="M"
          label="J100_7_CIR_WP_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus(
            "J100_8_CIR_WP_Run"
          )}`}
          text="M"
          label="J100_8_CIR_WP_Run"
        />
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-text-64">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("CP6_Run")}`}
          text="M"
          label="CP6_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("CP1_Run")}`}
          text="M"
          label="CP1_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("CP5_Run")}`}
          text="M"
          label="CP5_Run"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("CP2_Run")}`}
          text="M"
          label="CP2_Run"
        />

        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("J100_2_COMP_Run")}`}
          text="M"
          label="J100_2_COMP_Run"
        />
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-text-65">
        <BlackContainer
          data={{
            label: "CP6",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CP1",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CP5",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CP2",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "J100_2_COMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-66">
        <BlackContainer
          data={{
            label: "AI_G32_LEVEL",
            useClass: "greenTxt",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "G32",
          }}
        />
      </div>

      <div className="position-absolute single-text-67">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "G32A",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G32A_LEVEL",
            useClass: "greenTxt",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
    
      </div>


      <div className="d-flex flex-column justify-content-between position-absolute single-text-68">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("G28_DCF_Run")}`}
          label="G28_DCF_Run"
        />
        <div>
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("G28_1_DCF_Run")}`}
            label="G28_1_DCF_Run"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "628.1",
            }}
          />
          <BlackContainer
            data={{
              label: "G28_1_DCF_AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-69">
        <BlackContainer
          data={{
            label: "G28_DCF_AMP",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "G28",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 mt-3 digital-tag ${useColorStatus(
            "G4_A1_BC_Run"
          )}`}
          label="G4_A1_BC_Run"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "G4A1",
          }}
        />
        <BlackContainer
          data={{
            label: "G4_A1_BC_AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-70">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "G4",
          }}
        />
        <BlackContainer
          data={{
            label: "G4_BC",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 mt-3 digital-tag ${useColorStatus("G4_BC_Run")}`}
          label="G4_BC_Run"
        />

        <BlackContainer
          data={{
            label: "G4_RATE",
            useClass: "greenTxt mt-3",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "G4_BELTWEIGHER_TOT",
            useClass: "greenTxt mt-1",
            unit: "MT",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AI_G4_706",
            useClass: "greenTxt mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-71">
        <BlackContainer
          data={{
            label: "AI_G9_DP",
            useClass: "greenTxt",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "G9",
          }}
        />
        <BlackContainer
          data={{
            label: "G9_DCF_AMP",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 mt-3 digital-tag ${useColorStatus("G9_DCF_Run")}`}
          label="G9_DCF_Run"
        />
      </div>
      <div className="position-absolute single-text-72">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "G2",
          }}
        />
        <BlackContainer
          data={{
            label: "G2_BC_AMP",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 mt-3 digital-tag ${useColorStatus("G2_BC_Run")}`}
          label="G2_BC_Run"
        />
      </div>
      <div className="border p-2 position-absolute single-text-73">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "G11",
          }}
        />
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("G11_BC_Run")}`}
            label="G11_BC_Run"
          />
          <BlackContainer
            data={{
              label: "G11_BC_AMP",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark bg-secondary p-1 position-absolute single-text-74",
          label: "UTILITY SECTION",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark bg-secondary p-1 position-absolute single-text-75",
          label: "RAW MAT. GROUP",
        }}
      />
      <div className="position-absolute single-text-76">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "50MS1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 ml-auto digital-tag ${useColorStatus(
            "50MS1_Run"
          )}`}
          label="50MS1_Run"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark bg-secondary p-1 position-absolute single-text-77",
          label: "PACKING SECTION",
        }}
      />

      <MotorCircleDigitalTag
        className={`dot position-absolute single-text-78 digital-tag ${useColorStatus(
          "K13SF1_Run"
        )}`}
        label="K13SF1_Run"
      />
      <div className="d-flex position-absolute single-text-79">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("G39_DCF_Run")}`}
          label="G39_DCF_Run"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-1",
            label: "G39",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot ml-2 digital-tag ${useColorStatus("G39_1_DC_Run")}`}
          text="M"
          label="G39_1_DC_Run"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "G39.1",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-80",
          label: "50BE1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-81",
          label: "50BE1",
        }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-82",
          label: "G51",
        }}
      />

      <div className=" position-absolute single-text-83">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K13BL1",
          }}
        />
        <BlackContainer
          data={{
            label: "K13BL1_AMP",
            useClass: "greenTxt mt-1 ml-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="d-flex flex-column justify-content-between position-absolute single-text-84">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CP3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CP4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "J100.6",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "J100.7",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "J100.8",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-text-85">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CP6",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CP1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CP5",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CP2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "J100.2",
          }}
        />
      </div>
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-86",
            label: "50FN02",
          }}
        />
    </div>
  );
};

import { useColorStatus } from "../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
} from "../../../index";
export const KilnMainPageJafrabad = () => {
  return (
    <div className="KilnMainJafrabad w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr position-absolute line-6"></div>
      <div className="yellowline-Vr position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow position-absolute line-8"></div>
      <div className="yellowline-Vr position-absolute line-9"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Vr position-absolute line-12"></div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-14"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-15"></div>
      <div className="yellowline-Hr position-absolute line-16"></div>
      <div className="yellowline-Hr position-absolute line-17"></div>
      <div className="pipeHr position-absolute pipe-1"> </div>
      <div className="pipeHr position-absolute pipe-2"> </div>
      <div className="pipeHr position-absolute pipe-3"> </div>
      <div className="pipeHr position-absolute pipe-4"> </div>
      <div className="pipeHr pt-1 position-absolute pipe-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "KILN",
          }}
        />
        <div className="w-100 d-flex justify-content-center mt-1">
          <BlackContainer
            data={{
              label: "KILN_FILLING_PERC",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TEMPMaxTempKiln",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FEED_TO_RPM_RATIO",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="pipeHr pt-2 position-absolute pipe-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "KILN HOOD",
          }}
        />{" "}
      </div>
      <div className="pipeHr py-2 d-flex justify-content-around align-items-end position-absolute pipe-7">
        <BlackContainer
          data={{
            label: "441FN300N02P01",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "441FN305N02P01",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN310N02P01",
              useClass: "greenTxt mt-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "441FN315N02P01",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN320N02P01",
              useClass: "greenTxt mt-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "441FN325N02P01",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN330N02P01",
              useClass: "greenTxt mt-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-8"> </div>
      <div className="pipeHr position-absolute pipe-9"> </div>
      <div className="pipeHr position-absolute pipe-10"> </div>
      <div className="pipeHr position-absolute pipe-11"> </div>
      <div className="pipeHr position-absolute pipe-12"> </div>
      <div className="pipeHr position-absolute pipe-13"> </div>
      <div className="pipeVr position-absolute pipe-14"> </div>
      <div className="pipeVr position-absolute pipe-15"> </div>
      <div className="pipeVr position-absolute pipe-16"> </div>
      <div className="pipeVr position-absolute pipe-17"> </div>
      <div className="pipeVr position-absolute pipe-18"> </div>
      <div className="squareplustri text-center position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "1A",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "1B",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "2",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "3",
          }}
        />
      </div>
      <div className="squareplustri text-center position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "4",
          }}
        />
      </div>
      <div className="img-65 position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "CAL",
          }}
        />
      </div>
      <div className="img-96 position-absolute single-text-7"></div>
      <div className="border p-1 grid-container-2 position-absolute single-text-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "O2",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_AT348A_OLD",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "CO",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_AT348B",
            useClass: "greenTxt",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_O/L_CO_SP",
            useClass: "greenTxt first-col",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "Stage 1A",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_PT306A",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_TT317",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_TT312",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_PT306C",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-10">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "Stage 2",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_PT307",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_TT319",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_TT314",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_PT351",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_STAGE2_CONE_DRAFT2",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-11">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "O2",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_AT326A",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CO",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_AT326B",
              useClass: "greenTxt ml-1",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_ST4_CO_SP",
            useClass: "greenTxt mt-1 ml-4",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "Stage 4",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_PT309",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_TT321",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_TT316",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_PT311",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_PT311A",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-13">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "O2",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_AT333A",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CO",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_AT333B",
              useClass: "greenTxt ml-1",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "NOx",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_AT333C",
              useClass: "greenTxt ml-1",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "SO2",
            }}
          />
          <BlackContainer
            data={{
              label: "KILN_INLET_SOX",
              useClass: "greenTxt ml-1",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 position-absolute single-text-14">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "BH NOX",
            }}
          />
          <BlackContainer
            data={{
              label: "BH_STK_NOX_MONITORING1",
              useClass: "greenTxt ml-1",
              unit: "mg/Nn",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <BlackContainer
            data={{
              label: "BU500_481BU1P03",
              useClass: "greenTxt",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BH_STK_NOX",
              useClass: "greenTxt ml-1",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mx-auto",
            label: "Jet Air Blower",
          }}
        />
        <div className="d-flex justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "BL560_U01I01",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BU500_481BU1P02",
              useClass: "greenTxt ml-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex ml-1">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("BL550")}`}
              label="BL550"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white ml-1",
                label: "BL550",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-01">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "BL560",
            }}
          />
          <BlackContainer
            data={{
              label: "BL560_PID_SPA",
              useClass: "greenTxt",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BL550_PID_SPA",
              useClass: "greenTxt",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("BL560_DOL")}`}
            label="BL560_DOL"
          />
          <BlackContainer
            data={{
              label: "BL560_PID_SPM",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BL550_PIDSPA",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-between mt-01">
          <BlackContainer
            data={{
              label: "BL560_U01S01",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BL550_U01S01",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 position-absolute single-text-16">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mx-auto",
              label: "Swirl Air Blower",
            }}
          />
          <BlackContainer
            data={{
              label: "BU500_481BU1P01",
              useClass: "greenTxt",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="grid-container-4 mt-2">
          <BlackContainer
            data={{
              label: "LD565_PID_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CHEMICAL_RA_VFD_SETPOINT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "LD555_PID_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "F124_VFD_SP",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "LD565_M01Z01",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CHEMICAL_RA_VFD_RPM",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "LD555_M01Z01",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white w-50",
            label: "E282 BELT POSITION",
          }}
        />
        <BlackContainer
          data={{
            label: "E282_ANALOG_BSS",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "FEEDPIPE_MAT_TEMP1",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FEEDPIPE_MAT_TEMP2",
            useClass: "greenTxt ml-1 mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FEEDPIPE_MAT_TEMP3",
            useClass: "greenTxt ml-2 mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_TT315",
            useClass: "greenTxt ml-3 mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 d-flex position-absolute single-text-19">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "RM SILO LEVEL",
          }}
        />
        <BlackContainer
          data={{
            label: "D_XT1490",
            useClass: "greenTxt",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-20">
        <BlackContainer
          data={{
            label: "F_TT301_SPM",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border d-flex p-1 position-absolute single-text-21">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white vtext",
            label: "Stage 1B",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "FKL_PT306B",
              useClass: "greenTxt mt-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_TT318",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_TT313",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_PT306D",
              useClass: "greenTxt mt-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border d-flex p-1 position-absolute single-text-22">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white vtext",
            label: "Stage 3",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "FKL_PT308",
              useClass: "greenTxt mt-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_TT320",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_PT310",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_PT310A",
              useClass: "greenTxt mt-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "ST1A_FEEDPIPE",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "ST1B_FEEDPIPE",
            useClass: "greenTxt ml-3",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <BlackContainer
          data={{
            label: "ST2_FEED_PIPE_DRAFT",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "ST3_NULEONIC_CONE_LVL",
            useClass: "greenTxt mt-1 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <BlackContainer
          data={{
            label: "ST4_NUELONIC_CONE_LVL",
            useClass: "greenTxt ml-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_STAGE4_FEED_PIPE_DRAFT",
            useClass: "greenTxt mt-3",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "E295B",
          }}
        />
        <BlackContainer
          data={{
            label: "1004",
            useClass: "greenTxt ml-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "ST3_FEED_PIPE",
            useClass: "greenTxt mt-3",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "FKL_PT332",
            useClass: "greenTxt ml-3",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_TT322",
            useClass: "greenTxt ml-3 mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "Diesel Firing",
          }}
        />
        <BlackContainer
          data={{
            label: "BU500_A01Z11_PID_SPM",
            useClass: "greenTxt ml-3 mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "BU500_A01F01",
            useClass: "greenTxt ml-3 mt-1",
            unit: "l/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "WIND SPEED",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_WIND_VELOCITY",
            useClass: "greenTxt mt-01",
            unit: "KMPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_ST349",
            useClass: "greenTxt mt-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mx-auto",
            label: "D32A",
          }}
        />
        <BlackContainer
          data={{
            label: "D32A_PIDSPM",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D32A_DAMP_POS",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "FKL_TT301",
            useClass: "greenTxt ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_PT390",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "FKL_VT346",
            useClass: "greenTxt ml-3",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_IT450",
            useClass: "greenTxt ml-2 mt-01",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D33_KW1",
            useClass: "greenTxt ml-1 mt-01",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D33_NEW_VIB",
            useClass: "greenTxt ml-3 mt-01",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D33_SP_KW",
            useClass: "greenTxt ml-2 mt-01",
            unit: "kW/t",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D33_ANALG_SPEED2",
            useClass: "greenTxt mt-01",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D33_LRS_AUTO_SP",
            useClass: "greenTxt ml-2 mt-01",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 d-flex position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "PH FAN EXIT PT",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_PT2230",
            useClass: "greenTxt ml-2",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "462RM100_N03T01",
            useClass: "greenTxt ml-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_PT2070",
            useClass: "greenTxt mt-01",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 text-center position-absolute single-text-35">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "D42",
          }}
        />
        <BlackContainer
          data={{
            label: "F_PC2230_SPM",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_ZT2200",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "KILN SP POWER",
          }}
        />
        <BlackContainer
          data={{
            label: "KILN_SP_POWER",
            useClass: "greenTxt mt-2",
            unit: "kW/t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white bg-secondary p-2",
            label: "BH",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "BH STACK",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_YT2180",
              useClass: "greenTxt ml-2",
              unit: "mg/Nm³",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mx-auto",
            label: "BH/D53 VFD PARA",
          }}
        />
        <div className="grid-container-2 mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "SPD SP",
            }}
          />
          <BlackContainer
            data={{
              label: "D53_VFD_PID_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "PID SP",
            }}
          />
          <BlackContainer
            data={{
              label: "D53_VFD_PID_SPA",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "BH IN PT",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_PT2070",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "BH DP",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_PT2050",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "BH IN TT",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_TT2111",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 position-absolute single-text-39">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "KILN FEED SYSTEM DRAFT",
          }}
        />
        <div className="d-flex mt-1">
          <BlackContainer
            data={{
              label: "FKL_PT345A",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_PT345",
              useClass: "greenTxt ml-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 d-flex position-absolute single-text-40">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "ELEVATOR KILN FEED",
          }}
        />
        <BlackContainer
          data={{
            label: "E290_E3+_CURRENT",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 grid-container-2 position-absolute single-text-41">
        <BlackContainer
          data={{
            label: "FKL_ZT336",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_ZT337",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F_FT324A_SPM",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F_FT336A_SPM",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_FT324A",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_FT336A",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F_FT324A_SPA",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F_FT336A_SPA",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "SP TOT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "PV TOT",
          }}
        />
        <BlackContainer
          data={{
            label: "TOTAL KILN FEED SP",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "TOTAL_KILN_FEED",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-42">
        <BlackContainer
          data={{
            label: "F15_TRIP_DELAY",
            useClass: "greenTxt ml-2",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "TT321 Avg",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_TT328_AVG",
            useClass: "greenTxt ml-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "Calciner",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_PT331",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_TT328",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-44">
        <BlackContainer
          data={{
            label: "CLINKER_TPH",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_TT384",
            useClass: "greenTxt ml-3 mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-45">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "F15.1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("F15_1_I01")}`}
          label="F15_1_I01"
          text="M"
        />
        <BlackContainer
          data={{
            label: "F15_1_I01",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-46">
        <BlackContainer
          data={{
            label: "FKL_ST335",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F_F15SP_SPM",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-47">
        <BlackContainer
          data={{
            label: "FKL_IT334",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F15_AMP_PERCENTAGE",
            useClass: "greenTxt mt-1 ml-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ml-auto",
            label: "VITAL AIR PR",
          }}
        />
        <div className="grid-container-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "MAIN AIR PR",
            }}
          />
          <BlackContainer
            data={{
              label: "SX8_PRESSURE_VALUE",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "A_PT370",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "HZ",
            }}
          />
          <BlackContainer
            data={{
              label: "I_1_FREQ",
              useClass: "greenTxt",
              unit: "Hz",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mx-auto",
            label: "ESP",
          }}
        />
        <BlackContainer
          data={{
            label: "FCR_TT520",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-01">
          <BlackContainer
            data={{
              label: "441KH050N01T01",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FCR_PT523",
              useClass: "greenTxt ml-2",
              unit: "WG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-01">
          <BlackContainer
            data={{
              label: "F49_SPEED2",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FCR_ZT340",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-01">
          <BlackContainer
            data={{
              label: "441WI130N01F01",
              useClass: "greenTxt",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FCR_YT302E",
              useClass: "greenTxt ml-2",
              unit: "mg/Nn",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-50">
        <BlackContainer
          data={{
            label: "441FN300N01F01",
            useClass: "greenTxt",
            unit: "m³/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "441FN305N01F01",
            useClass: "greenTxt mt-1",
            unit: "m³/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "COOLER_TOTAL_FLOW",
            useClass: "greenTxt mt-1",
            unit: "m³/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-51">
        <BlackContainer
          data={{
            label: "441FN310N01F01",
            useClass: "greenTxt",
            unit: "m³/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "441FN315N01F01",
            useClass: "greenTxt mt-1",
            unit: "m³/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "COOLER_AIR_CLKR_RATIO",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-52">
        <BlackContainer
          data={{
            label: "441FN320N01F01",
            useClass: "greenTxt",
            unit: "m³/min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "441FN325N01F01",
            useClass: "greenTxt mt-1",
            unit: "m³/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-53">
        <BlackContainer
          data={{
            label: "F55_PYRO_DISCHARGE",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CR400_HOOD_DRAFT",
            useClass: "greenTxt ml-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "STG4_FEED_PIPE_DRAFT",
              useClass: "greenTxt ml-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "STG4_CONE_DRAFT3",
              useClass: "greenTxt mt-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 position-absolute single-text-54">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mx-auto",
            label: "CLK TRNSPRT",
          }}
        />
        <BlackContainer
          data={{
            label: "F55_CURRENT",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F705_CURRENT",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F705_DPC_SPEED",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-55">
        <BlackContainer
          data={{
            label: "_441FN305N02P01_PID_OUT_MAX",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_441FN305N02P01_PID_OUT_MIN",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "CR400_CURRENT",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mx-auto mt-1",
              label: "DISCH TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "471AC100N01T01",
              useClass: "greenTxt mt-1",
              unit: "'°C'",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 position-absolute single-text-56">
        <div className="grid-container-3">
          <BlackContainer
            data={{
              label: "MD140A01S01",
              useClass: "greenTxt",
              unit: "st/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "MD140A01S02",
              useClass: "greenTxt",
              unit: "st/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "MD140A01S03",
              useClass: "greenTxt",
              unit: "st/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "MD140A01S11_SP",
              useClass: "greenTxt",
              unit: "st/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN305N02P01_PID_SPM",
              useClass: "greenTxt",
              unit: "st/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "MD140A01S13_SP",
              useClass: "greenTxt",
              unit: "st/min",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex  justify-content-between">
          <BlackContainer
            data={{
              label: "GRATE1_RATIO",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "GRATE3_RATIO",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex  justify-content-center">
          <BlackContainer
            data={{
              label: "441FN305N02P01_PID_SPA",
              useClass: "greenTxt",
              unit: "WG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441CC100N09P01",
              useClass: "greenTxt ml-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-57">
        <BlackContainer
          data={{
            label: "FCR_PT340",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F49_SPD_CONTROL_SPA",
            useClass: "greenTxt mt-1 ml-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        <BlackContainer
          data={{
            label: "TAD_DARFT-2",
            useClass: "greenTxt ml-2",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KILN_OL_SEAL_AIR_TEMP",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K_BUR_ZONE_TEMP",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mx-auto mt-1",
            label: "K_BUR_ZONE",
          }}
        />
      </div>
      <div className="position-absolute single-text-59">
        <BlackContainer
          data={{
            label: "FIRE_HOOD_TEMP",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KILN RESIDENCE TIME",
            useClass: "greenTxt mt-1",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-60">
        <BlackContainer
          data={{
            label: "AFR_DAY_TOTALIZER",
            useClass: "greenTxt",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "EXPECTED_CLINKER",
            useClass: "greenTxt mt-1 ml-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-61">
        <BlackContainer
          data={{
            label: "FKL_TT_FFINLET",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_PT330",
            useClass: "greenTxt mt-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-62">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "462FM790_N01P01",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KILN_BLOWER_PRES",
              useClass: "greenTxt ml-1",
              unit: "Psi",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462FM640_N01P01",
              useClass: "greenTxt ml-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="border-right p-1 mr-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "SF781 / FM790",
              }}
            />
            <div className="grid-container-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "CRNT FB",
                }}
              />
              <BlackContainer
                data={{
                  label: "462SF781_U01J01",
                  useClass: "greenTxt",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "SPD FB",
                }}
              />
              <BlackContainer
                data={{
                  label: "462SF631_U01S01",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TPH SP",
                }}
              />
              <BlackContainer
                data={{
                  label: "462SF631PID_SPM",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TPH FB",
                }}
              />
              <BlackContainer
                data={{
                  label: "462FM790_A01F01",
                  useClass: "greenTxt",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <BlackContainer
              data={{
                label: "462SF631PID_SPA",
                useClass: "greenTxt",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mx-auto",
                  label: "BI750 WT",
                }}
              />
              <BlackContainer
                data={{
                  label: "462LC754_N01W01",
                  useClass: "greenTxt",
                  unit: "t",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div className="p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mx-auto",
                label: "SF631 / FM640",
              }}
            />
            <div className="grid-container-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "CRNT FB",
                }}
              />
              <BlackContainer
                data={{
                  label: "462SF631_U01J01",
                  useClass: "greenTxt",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "SPD FB",
                }}
              />
              <BlackContainer
                data={{
                  label: "462SF631_U01S01",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TPH FB",
                }}
              />
              <BlackContainer
                data={{
                  label: "462FM640_A01F01",
                  useClass: "greenTxt",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TPH SP",
                }}
              />
              <BlackContainer
                data={{
                  label: "462SF631PID_N_SPM",
                  useClass: "greenTxt",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "BI600 WT",
                }}
              />
              <BlackContainer
                data={{
                  label: "462LC604_N01W01",
                  useClass: "greenTxt",
                  unit: "t",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border p-1 text-center position-absolute single-text-63">
        <div className="d-flex justify-content-between">
          <BlackContainer
            data={{
              label: "462FM740_N01P01",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "CALC PETCOKE",
            }}
          />
          <BlackContainer
            data={{
              label: "CALC_COAL_SUM1",
              useClass: "greenTxt ml-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1 border-bottom w-100",
            label: "SF731 / FM740",
          }}
        />
        <div className="d-flex">
          <div className="border-right p-1 mr-1">
            <div className="grid-container-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "SC1 CRNT",
                }}
              />
              <BlackContainer
                data={{
                  label: "462SF731_U01J01",
                  useClass: "greenTxt",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "SC1 SPD",
                }}
              />
              <BlackContainer
                data={{
                  label: "462SF731_U01S01",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <BlackContainer
              data={{
                label: "462SF731_U01S01",
                useClass: "greenTxt ml-auto",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "462SF731PID_SPA",
                useClass: "greenTxt ml-auto",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="p-1">
            <div className="grid-container-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "SC2 CRNT",
                }}
              />
              <BlackContainer
                data={{
                  label: "462SF731_U02J01",
                  useClass: "greenTxt",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "SC2 SPD",
                }}
              />
              <BlackContainer
                data={{
                  label: "462SF731_U02S01",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TPH SP",
                }}
              />
              <BlackContainer
                data={{
                  label: "COAL_CALC_SPM",
                  useClass: "greenTxt",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TPH FB",
                }}
              />
              <BlackContainer
                data={{
                  label: "COAL_CALC_SPM",
                  useClass: "greenTxt",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <BlackContainer
              data={{
                label: "COAL_CALC_SPA",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "FKL_TT321",
                useClass: "greenTxt",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex  justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "BI700 WT",
            }}
          />
          <BlackContainer
            data={{
              label: "462LC704_N01W01",
              useClass: "greenTxt ml-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 text-center position-absolute single-text-64">
        <div className="d-flex">
          <div>
            <BlackContainer
              data={{
                label: "PC_CO_COAL_CUT",
                useClass: "greenTxt ml-auto mt-1",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CALC_DATA1",
                useClass: "greenTxt ml-auto mt-1",
                unit: "",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "PETCOKE_CALC_SPA",
                useClass: "greenTxt mt-1",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-1 border-bottom w-100",
                label: "SF581 / FM590",
              }}
            />
            <div className="grid-container-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "CRNT",
                }}
              />
              <BlackContainer
                data={{
                  label: "_462PP795_HPR_PRES_DB",
                  useClass: "greenTxt",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "SPD FB",
                }}
              />
              <BlackContainer
                data={{
                  label: "_462SF581_U01S01_DB",
                  useClass: "greenTxt",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TPH FB",
                }}
              />
              <BlackContainer
                data={{
                  label: "_462FM590_A01F01_DB",
                  useClass: "greenTxt",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white",
                  label: "TPH SP",
                }}
              />
              <BlackContainer
                data={{
                  label: "462SF581PID_SPM",
                  useClass: "greenTxt",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "BI550 WT",
            }}
          />
          <BlackContainer
            data={{
              label: "462LC554_N01W01",
              useClass: "greenTxt ml-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 grid-container-2 position-absolute single-text-65">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "KILN FK PMP PT",
          }}
        />
        <BlackContainer
          data={{
            label: "462PP795_HPR_PRES",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "CAL FK PMP PT",
          }}
        />
        <BlackContainer
          data={{
            label: "462PP595_HPR_PRES",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FF_BLOWER_PRES",
            useClass: "greenTxt",
            unit: "Psi",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "462FM590_N01P01",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="grid-container-2 position-absolute single-text-66">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "D53 SP",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "D53 RPM FB",
          }}
        />
        <BlackContainer
          data={{
            label: "D53_GRR_SPM",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_ST2080",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "CALC COAL %",
          }}
        />
        <BlackContainer
          data={{
            label: "CALC_FIRING_PER",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "KILN COAL %",
          }}
        />
        <BlackContainer
          data={{
            label: "KILN_FIRING_%",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 text-center position-absolute single-text-67">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "CLR DRV SP",
          }}
        />
        <BlackContainer
          data={{
            label: "EO_CLR_DRIVES_SP_OUT",
            useClass: "greenTxt",
            unit: "st/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 text-center position-absolute single-text-68">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "CLC COAL SP",
          }}
        />
        <BlackContainer
          data={{
            label: "EO_PC_COAL_SP_OUT",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 text-center position-absolute single-text-69">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mr-2",
              label: "EO_KILN & PH FAN",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag p-3 ${useColorStatus(
              "EO_KILN_IND3"
            )}`}
            label="EO_KILN_IND3"
          />
        </div>

        <div className="grid-container-2 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "FAN SP",
            }}
          />
          <BlackContainer
            data={{
              label: "EO_KILN_ID_FAN_SP_OUT",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "KILN SPD SP",
            }}
          />
          <BlackContainer
            data={{
              label: "EO_KILN_SPEED_SP_OUT",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "KILN FEED SP",
            }}
          />
          <BlackContainer
            data={{
              label: "EO_KILN_FEED_SP_OUT1",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "KILN COAL SP",
            }}
          />
          <BlackContainer
            data={{
              label: "EO_KILN_COKE_SP_OUT",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 d-flex position-absolute single-text-70">
        <BlackContainer
          data={{
            label: "261WF150_A01F11_SPA",
            useClass: "greenTxt mt-3",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "AFR WF TPH",
            }}
          />
          <BlackContainer
            data={{
              label: "261WF150_A01F01",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "261WF150_A01S01",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "Chute draft",
            }}
          />
          <BlackContainer
            data={{
              label: "261XA910_N02P01",
              useClass: "greenTxt mt-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "RF710",
            }}
          />
          <BlackContainer
            data={{
              label: "261RF710_M01I01",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>

        <BlackContainer
          data={{
            label: "261FY110D1",
            useClass: "greenTxt ml-2 mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "AFR Screw Drv",
            }}
          />

          <BlackContainer
            data={{
              label: "261FY110D2",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "BC610 Current",
            }}
          />
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "261FY110D3",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "261BC610_U01I01",
                useClass: "greenTxt ml-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <BlackContainer
        data={{
          label: "HTD_POS1",
          useClass: "greenTxt position-absolute single-text-72",
          unit: "mm",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "BL550_U01I01",
          useClass: "greenTxt position-absolute single-text-73",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "441FN330N01F01",
          useClass: "greenTxt position-absolute single-text-74",
          unit: "m³/min",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "D33_SPRS_ROOM_TEMP",
          useClass: "greenTxt position-absolute single-text-75",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KILN_COAL_SUM1",
          useClass: "greenTxt position-absolute single-text-76",
          unit: "t/h",
          unitColor: "unitColor",
        }}
      />
    </div>
  );
};

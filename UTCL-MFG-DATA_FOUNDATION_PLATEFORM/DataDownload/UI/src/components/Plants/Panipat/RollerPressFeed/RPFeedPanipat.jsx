import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../index";

import { useColorStatus, useFanImgTagsColorStatus } from "../../../../utils";

export const RPFeedPanipat = () => {
  return (
    <div className="Panipat-Roller-Press-Feed w-100 h-100 position-relative">
      <div className="pipe-1 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-2 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-3 position-absolute pipeVr"></div>
      <div className="pipe-4 d-flex align-items-center justify-content-around position-absolute pipeHr">
        <i className="fa-solid fa-caret-right d-block"></i>
        <i className="fa-solid fa-caret-left d-block"></i>
      </div>
      <div className="pipe-5 d-flex align-items-center justify-content-around position-absolute pipeHr">
        <i className="fa-solid fa-caret-right d-block"></i>
      </div>
      <div className="pipe-6 d-flex align-items-center justify-content-around position-absolute pipeHr">
        <i className="fa-solid fa-caret-left d-block"></i>
      </div>
      <div className="pipe-7 position-absolute pipeVr"></div>
      <div className="pipe-8 position-absolute pipeVr"></div>
      <div className="pipe-9 position-absolute pipeVr"></div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr position-absolute line-3"></div>
      <div className="yellowline-Vr position-absolute line-4"></div>
      <div className="yellowline-Hr position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr upArrow position-absolute line-12"></div>
      <div className="yellowline-Hr position-absolute line-13"></div>
      <div className="yellowline-Vr upArrow position-absolute line-14"></div>
      <div className="yellowline-Hr position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Hr position-absolute line-17"></div>
      <div className="yellowline-Vr upArrow position-absolute line-18"></div>
      <div className="yellowline-Hr position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr position-absolute line-21"></div>
      <div className="single-text-1 position-absolute d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CM_541BE2_II",
              useClass: "greenTxt mb-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_541BE2M02_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_541BE2_JI",
              useClass: "greenTxt mb-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_541BE2M02_JI",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-2"
        firstCircle={{
          firstCircleClass: "grayDot",
        }}
        text={{ useClass: "text-dark", label: "541BC1" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "M",
        }}
      />
      <div className="single-text-3 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "FHP_PR",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_FHPUMP_PT",
            useClass: "greenTxt mt-2",
            unit: "Kg/Cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-4 position-absolute d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "CM I/L Temp.",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Draught",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mb-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "mmwg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mb-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-5 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "BH STACK EMISSION",
          }}
        />
        <BlackContainer
          data={{
            label: "BAGHOUSE_STACK",
            useClass: "greenTxt mt-2",
            unit: "mg/m3",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle mt-2 digital-tag  ${useColorStatus(
              "CM_STACK_BLOWER"
            )}`}
            label="CM_STACK_BLOWER"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "STACK_BLW",
            }}
          />
        </div>
      </div>
      <div className="single-text-6 position-absolute">
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_551VS_TE01",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-7 border p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info",
            label: "Manual",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "MV",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_541SG2_PID",
              useClass: "greenTxt mt-2 ml-3",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-8 position-absolute">
        <div className="d-flex ml-3">
          <BlackContainer
            data={{
              label: "RP_GAP_DIFF",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "GAP DIFF",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "FED_REG_GATE",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RP_BRG_DIS_LFT_RDM",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "HYD_PRS_LFT",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AMPS_FR_DRV",
            useClass: "greenTxt mt-2",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_541MD1_JI",
            useClass: "greenTxt mt-2",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("CM_541BC2M01")}`,
          firstCircleText: "M",
          firstCircleLabel: "CM_541BC2M01",
        }}
        text={{ useClass: "text-dark", label: "541BC2" }}
        secondCircle={{
          secondCircleClass: "grayDot",
        }}
      />
      <div className="single-text-10 position-absolute img-112 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 ml-3",
            label: "551VS1",
          }}
        />
      </div>
      <div className="single-text-11 position-absolute containerImage text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "541FB1",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_541FB1_WI",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-12 position-absolute pipeHr d-flex justify-content-center align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "BRG_DE_TMP_FR",
              useClass: "greenTxt mb-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BRG_DE_TMP_MR",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "BRG_NDE_TMP_FR",
              useClass: "greenTxt mb-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "BRG_NDE_TMP_MR",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-13  position-absolute text-center">
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt mb-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "521BF5",
          }}
        />
        <div className=" squareplustri text-center pt-3">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("NA")}`}
            label="NA"
          />
        </div>
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus("NA")}`}
          label="NA"
        />
      </div>
      <div className="single-text-14 position-absolute d-flex ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_541BE2_LH1")}`}
          label="CM_541BE2_LH1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_541BE2_LH2")}`}
          label="CM_541BE2_LH2"
        />
      </div>
      <div className="single-text-15 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_541BE1_ZS")}`}
          label="CM_541BE1_ZS"
        />
      </div>
      <div className="single-text-16 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CM_541RP1_MR_DOPN"
          )}`}
          label="CM_541RP1_MR_DOPN"
        />
        <BlackContainer
          data={{
            label: "RP_BRG_DIS_RGT_RDM",
            useClass: "greenTxt mt-3",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "HYD_PRS_RGT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AMPS_MR_DRV",
            useClass: "greenTxt mt-1",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_541MD2_JI",
            useClass: "greenTxt mt-1",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-17 position-absolute">
        <BlackContainer
          data={{
            label: "F2J01A_I1",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-18 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "521BF4",
          }}
        />
        <div className="squareplustri text-center pt-2">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_521BF4")}`}
            label="CM_521BF4"
          />
        </div>
      </div>
      <div className="single-text-19 position-absolute">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_541BE1_ZS2")}`}
          label="CM_541BE1_ZS2"
        />
      </div>
      <div className="single-text-20 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "COOLING TOWER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "WATER TEMP",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt mb-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <BlackContainer
        data={{
          label: "CM_541BC2M01_II",
          useClass: "greenTxt mb-2 single-text-21 position-absolute",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-22 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "581LD3",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_581LD3_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-23 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "CM_581LD1_ZT",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "581LD1",
          }}
        />
      </div>

      <div className="single-text-24 position-absolute">
        <BlackContainer
          data={{
            label: "GA_PMP_WRC_FLOW",
            useClass: "greenTxt",
            unit: "LPH",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "RECIRCULATION AIR FROM B/H FAN",
          }}
        />
      </div>

      <div className="single-text-25 position-absolute">
        <BlackContainer
          data={{
            label: "METAL DETECTOR CTR",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-2",
            label: "531DG1",
          }}
        />
      </div>
      <div className="single-text-26 position-absolute d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CM_551VS1_PT02",
              useClass: "greenTxt",
              unit: "mBar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_551VS_TE02",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_551VS1_PT02_1",
              useClass: "greenTxt mt-3",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-27 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mb-3",
            label: "541MS1",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("CM_541MS1")}`,
            firstCircleText: "M",
            firstCircleLabel: "CM_541MS1",
          }}
          secondCircle={{
            secondCircleClass: "grayDot",
          }}
        />
      </div>
      <div className="single-text-28 position-absolute">
        <BlackContainer
          data={{
            label: "CM_541BC1M01_II",
            useClass: "greenTxt mb-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mb-1",
            label: "541FV1",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_541BC1_LVL_HI")}`}
          label="CM_541BC1_LVL_HI"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "541FV2",
          }}
        />
      </div>
      <div className="single-text-29 position-absolute d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mb-1",
              label: "521RF4A",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_521RF4A_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mb-1",
              label: "521RF4",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_521RF4_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-30 position-absolute">
        <div className=" squareplustri text-center pt-4">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_541RPHL1_LH")}`}
            label="CM_541RPHL1_LH"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "Hopper level",
            }}
          />
        </div>
      </div>
      <div className="single-text-31 position-absolute d-flex">
        <div>
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag  ${useColorStatus(
                "CM_541CF1M01"
              )}`}
              label="CM_541CF1M01"
            />
            <MotorCircleDigitalTag
              className={`line-circle ml-2 digital-tag  ${useColorStatus(
                "CM_541CF2M01"
              )}`}
              label="CM_541CF2M01"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "541CF1_CF2",
            }}
          />
        </div>

        <div>
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag  ${useColorStatus(
                "CM_541CF3M01"
              )}`}
              label="CM_541CF3M01"
            />
            <MotorCircleDigitalTag
              className={`line-circle ml-2 digital-tag  ${useColorStatus(
                "CM_541CF4M01"
              )}`}
              label="CM_541CF4M01"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "541CF3_CF4",
            }}
          />
        </div>
      </div>
      <div className="single-text-32 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "541BE1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-2 ${useColorStatus("CM_541BE1")}`}
          label="CM_541BE1"
          text="M"
        />
      </div>
      <div className="single-text-33 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "541BE2",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-2 ${useColorStatus("CM_541BE2M01")}`}
          label="CM_541BE2M01"
          text="M"
        />
      </div>
      <div className="single-text-34 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "541SG1",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("541SG1 _OPN")}`}
          label="541SG1 _OPN"
          text="O"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("541SG1 _CLS")}`}
          label="541SG1 _CLS"
          text="C"
        />
      </div>
      <div className="single-text-35 position-absolute d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CM_541BE2M01_GB_TMP",
              useClass: "greenTxt mb-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_541BE2_ZSS1")}`}
            label="CM_541BE2_ZSS1"
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_541BE2M02_GB_TMP",
              useClass: "greenTxt mb-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_541BE2_ZSS2")}`}
            label="CM_541BE2_ZSS2"
          />
        </div>
      </div>
      <div className="single-text-36 position-absolute text-center">
        <BlackContainer
          data={{
            label: "TMP_HYD_OIL_TNK",
            useClass: "greenTxt mb-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RP HYD OIL TNK TEMP",
          }}
        />
      </div>
      <div className="single-text-37 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "CM_531DG1_TOWARDS_REJECT  COUNT",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "Divert Count",
          }}
        />
      </div>
      <div className="single-text-38 position-absolute  text-center">
        <div className="hpipecircle">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-4",
              label: "551AS3",
            }}
          />
        </div>
      </div>

      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "CM_541RP1_FR_DOPN"
        )} single-text-39 position-absolute`}
        label="CM_541RP1_FR_DOPN"
      />

      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "CM_531BC2_NT-RN_ALM"
        )} single-text-40 position-absolute`}
        label="CM_531BC2_NT-RN_ALM"
      />

      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "CM_541BE2_ZS2"
        )} single-text-41 position-absolute`}
        label="CM_541BE2_ZS2"
      />

      <BlackContainer
        data={{
          label: "NA",
          useClass: "greenTxt single-text-42 position-absolute",
          unit: "A",
          unitColor: "unitColor",
        }}
      />

      <MotorCircleDigitalTag
        className={`dot digital-tag mt-2 ${useColorStatus(
          "CM_541FB1_LHH"
        )} single-text-43 position-absolute `}
        label="CM_541FB1_LHH"
        text="X"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "CM_541BC2_BSS"
        )} single-text-44 position-absolute`}
        label="CM_541BC2_BSS"
      />

      <div className="single-text-45 position-absolute">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus(
              "CM_551FN3"
            )}`}
            label="CM_551FN3"
          />
        </div>
      </div>

      <BlackContainer
        data={{
          label: "CM_521BF4_DPT",
          useClass: "greenTxt single-text-46 position-absolute",
          unit: "mmwc",
          unitColor: "unitColor",
        }}
      />

      <div className="single-text-47 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "521FN5",
          }}
        />
        <div className="yellowline-Vr upArrow position-relative ml-2"></div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus(
              "CM_541SX1M01"
            )}`}
            label="CM_541SX1M01"
          />
        </div>
      </div>
      <div className="single-text-48 position-absolute">
        <div className="yellowline-Vr upArrow position-relative ml-2"></div>
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag  ${useColorStatus(
              "CM_521FN4"
            )}`}
            label="CM_521FN4"
          />
        </div>
      </div>
      <div className="single-text-49 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "551FN3",
          }}
        />
      </div>
      <div className="single-text-50 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "521RF5",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`square digital-tag single-text-51 position-absolute ${useColorStatus(
          "CM_521BF4_LH"
        )}`}
        label="CM_521BF4_LH"
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark single-text-52 position-absolute",
          label: "FRESH AIR",
        }}
      />
    </div>
  );
};

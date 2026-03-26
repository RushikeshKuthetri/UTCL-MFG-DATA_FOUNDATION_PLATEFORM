import { useBorderTagsColorStatus, useColorStatus } from "../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  TransparentBoxWithGate,
  BlueContainerWithDynamicBorder,
  PipeWithCircles,
} from "../../../index";
export const BagHouseJafrabad = () => {
  return (
    <div className="BagHouseJafrabad w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <div className="img-84"></div>
      </div>
      <div className="position-absolute single-text-3 box-1 p-2 mt-1">
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-auto",
              label: "RABH Stack SOX Counter",
            }}
          />
          <BlackContainer
            data={{
              label: "RABH_STACK_SOX_COUNTER",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-auto",
              label: "RABH Stack Opacity Counter",
            }}
          />
          <BlackContainer
            data={{
              label: "RABH_STACK_COUNTER",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-auto",
              label: "RABH Stack NOX Counter",
            }}
          />
          <BlackContainer
            data={{
              label: "RABH_STACK_NOX_COUNTER",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-auto",
              label: "ESP_Stack_Counter",
            }}
          />
          <BlackContainer
            data={{
              label: "FCR_YT302E_ESP_STACK_COUNTER",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-auto",
              label: "COAL_Stack_Counter",
            }}
          />
          <BlackContainer
            data={{
              label: "_462AM420_A01A01_COAL_STACK_COUNTER",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <BlackContainer
          data={{
            label: "RM FAN O/L DRAFT_NEW",
            useClass: "greenTxt mb-4",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "F_TC2111_SPA",
              useClass: "greenTxt mb-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_ZT2190",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "F_TC2111_SPM",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "FKL_PT2230",
          useClass: "position-absolute single-text-6 greenTxt",
          unit: "mmWG",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-7 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "FKL_TT2111",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
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
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "FKL_PT2050",
              useClass: "greenTxt mb-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mb-1",
              label: "REVERSE AIR BAG HOUSE",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "MRV",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "BH_SEQ_COUNT",
              useClass: "greenTxt mb-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mb-1",
              label: "PARALLEL SEQ SEL.",
            }}
          />
          <BlackContainer
            data={{
              label: "BH_SEQ_T2",
              useClass: "greenTxt mb-1",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <BlackContainer
          data={{
            label: "TAD_DARFT-2",
            useClass: "greenTxt mb-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "ESP_INLET_DARFT",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-9 ">
        <BlackContainer
          data={{
            label: "RA_FAN_VIBRATION",
            useClass: "greenTxt mb-1",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_IT2040",
            useClass: "greenTxt mb-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_ST2090",
            useClass: "greenTxt mb-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "F_SC2090_SPM",
              useClass: "greenTxt mr-4",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "F_SC2090_SPA",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("D50_21")}`}
          label="D50_21"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "D50.21",
          }}
        />
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="mt-auto mb-0">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "RABH O/L DRAFT",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_PT2052",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "FKL_VT2170",
              useClass: "greenTxt mb-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_IT2030",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D53_VFD_CUBICAL_TEMP",
              useClass: "greenTxt mb-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D53_VFD_SPD_FB",
              useClass: "greenTxt mb-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D53_VFD_AMP_FB",
              useClass: "greenTxt mb-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D53_VFD_KW_FB",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "FKL_ZT2220",
              useClass: "greenTxt mb-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "F_PC2070_SPA",
              useClass: "greenTxt mb-1",
              unit: "WG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "F_PC2070_SPM",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "D53_VFD_PID_SPA",
              useClass: "greenTxt mb-1",
              unit: "mmWG",
              unitColor: "unitColor",
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
        </div>
        <div>
          <BlackContainer
            data={{
              label: "FKL_ST2081",
              useClass: "greenTxt mb-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_ST2080",
              useClass: "greenTxt mb-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "FKL_YT2180",
            useClass: "greenTxt mb-1",
            unit: "mg/Nm³",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 box-1 p-2 mt-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-auto",
              label: "CEMS Stack Analyser",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-auto",
              label: "SO2",
            }}
          />
          <BlackContainer
            data={{
              label: "BH_STK_SOX_NORMAL",
              useClass: "greenTxt ml-2",
              unit: "mg/Nm³",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-auto",
              label: "NOx",
            }}
          />
          <BlackContainer
            data={{
              label: "BH_STK_NOX",
              useClass: "greenTxt ml-2",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-auto",
              label: "O2",
            }}
          />
          <BlackContainer
            data={{
              label: "BH_STK_O2",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-auto",
              label: "PRESS",
            }}
          />
          <BlackContainer
            data={{
              label: "BH_STK_PRES",
              useClass: "greenTxt ml-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-auto",
              label: "TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "BH_STK_TEMP",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-auto",
              label: "FLOW",
            }}
          />
          <BlackContainer
            data={{
              label: "RABH_GAS_FLOW_RATE",
              useClass: "greenTxt ml-2",
              unit: "m³/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "ST1A_FEEDPIPE",
            useClass: "greenTxt mb-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "ST1B_FEEDPIPE",
            useClass: "greenTxt mb-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "ST3_FEED_PIPE",
            useClass: "greenTxt mb-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "ST2_FEED_PIPE_DRAFT",
            useClass: "greenTxt mb-1",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "D50_1_CURRENT",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2 mt-2`}
            label=""
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D50_3_CURRENT",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2 mt-2`}
            label=""
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D50_5_CURRENT",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2 mt-2`}
            label=""
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D50_7_CURRENT",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2 mt-2`}
            label=""
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D50_9_CURRENT",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2 mt-2`}
            label=""
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D50_11_CURRENT",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2 mt-2`}
            label=""
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D50_13_CURRENT",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2 mt-2`}
            label=""
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D50_15_CURRENT",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2 mt-2`}
            label=""
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D50_17",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2 mt-2`}
            label=""
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D50_19_CURRENT",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2 mt-2`}
            label=""
          />
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2`}
            label=""
          />
          <BlackContainer
            data={{
              label: "D50_2_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2`}
            label=""
          />
          <BlackContainer
            data={{
              label: "D50_4_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2`}
            label=""
          />
          <BlackContainer
            data={{
              label: "D50_6_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2`}
            label=""
          />
          <BlackContainer
            data={{
              label: "D50_8_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2`}
            label=""
          />
          <BlackContainer
            data={{
              label: "D50_10_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2`}
            label=""
          />
          <BlackContainer
            data={{
              label: "D50_12_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2`}
            label=""
          />
          <BlackContainer
            data={{
              label: "D50_14_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2`}
            label=""
          />
          <BlackContainer
            data={{
              label: "D50_16_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2`}
            label=""
          />
          <BlackContainer
            data={{
              label: "D50_18_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={` circle-img c-grey-img-2`}
            label=""
          />
          <BlackContainer
            data={{
              label: "D50_20_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <BlackContainer
          data={{
            label: "D68_1I01",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle ml-5"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "M",
          }}
          text={{ useClass: "text-dark" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <BlackContainer
          data={{
            label: "FKL_TT2112",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "RABH_CAL_DP",
              useClass: "greenTxt mt-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "RABH CAL DP",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "D68_2_CURRENT",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div>
          <BlueContainerWithDynamicBorder
            useClass={`${useBorderTagsColorStatus("D52")}`}
            isClickable={true}
            tagLabel="D52"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "D52",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("D53_VFD")}`}
            label="D53_VFD"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "D53",
            }}
          />
        </div>
      </div>
      <div className="brick-cooler-img position-absolute single-text-21"></div>
      <div className="position-absolute single-text-22 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "DUST BIN SIDE",
          }}
        />
        <TransparentBoxWithGate
          isClickable={false}
          squareProps={{
            squareClass: `grey-color`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "SILO SIDE",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-white p-2 position-absolute single-text-23",
          label: "Dust Transport",
        }}
      />
      <div className="position-absolute yellowline-Hr rightarrow line-1"></div>
      <div className="position-absolute yellowline-Vr downArrow line-2"></div>
      <div className="position-absolute yellowline-Hr leftarrow line-3"></div>
      <div className="position-absolute yellowline-Hr rightarrow line-4"></div>
      <div className="position-absolute line-5 d-flex">
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
        <div className=" yellowline-Vr downArrow position-relative"></div>
      </div>
      <div className="position-absolute yellowline-Vr downArrow line-25"></div>
      <div className="position-absolute yellowline-Vr  line-26"></div>
      <div className="position-absolute yellowline-Vr  line-27"></div>
      <div className="position-absolute yellowline-Hr  line-28"></div>
      <div className="position-absolute yellowline-Hr  line-29"></div>
      <div className="position-absolute yellowline-Vr downArrow line-30"></div>
      <div className="position-absolute yellowline-Vr downArrow line-31"></div>
    </div>
  );
};

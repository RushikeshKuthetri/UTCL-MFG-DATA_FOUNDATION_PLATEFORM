import { useColorStatus, useFanImgTagsColorStatus } from "../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  PipeWithCircles,
} from "../../../index";
export const RawMillJafrabad = () => {
  return (
    <div className="RawMillJafrabad w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 text-center d-flex">
        <div>
          <BlackContainer
            data={{
              label: "D_ST1032",
              useClass: "greenTxt mt-2 mb-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage text-center pt-2">
            <BlackContainer
              data={{
                label: "D19A_LVL_TX",
                useClass: "greenTxt mt-2 ",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "LATERITE/",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "COPPER SLAG",
              }}
            />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-5"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "D19A" }}
            secondCircle={{
              secondCircleClass: `dot dot-rotat grey-color`,
              secondCircleText: "M",
              secondCircleLabel: "",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-2"></div>

          <BlackContainer
            data={{
              label: "DRMFC1300_SPM",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DRMFC1300_SPA",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_FT1300",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D19 CONT OP PERCENTAGE",
              useClass: "greenTxt mt-2 mb-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage text-center pt-2">
            <BlackContainer
              data={{
                label: "D19_LVL_TX",
                useClass: "greenTxt mt-2 ",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "LOW GRADE/",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "BESALT",
              }}
            />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-5"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "D19" }}
            secondCircle={{
              secondCircleClass: `dot dot-rotat grey-color`,
              secondCircleText: "M",
              secondCircleLabel: "",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-2"></div>

          <BlackContainer
            data={{
              label: "DRMFC1060_SPM",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DRMFC1060_SPA",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_FT1060",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D7 CONT OP PERCENTAGE",
              useClass: "greenTxt mt-2 mb-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage text-center pt-2">
            <BlackContainer
              data={{
                label: "D7_LVL_TX",
                useClass: "greenTxt mt-2 ",
                unit: "m",
                unitColor: "unitColor",
              }}
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SWEETNER",
              }}
            />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-5"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "D7" }}
            secondCircle={{
              secondCircleClass: `dot dot-rotat grey-color`,
              secondCircleText: "M",
              secondCircleLabel: "",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-2"></div>

          <BlackContainer
            data={{
              label: "DRMFC1040_SPM",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DRMFC1040_SPA",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_FT1040",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D_IT1051",
              useClass: "greenTxt mt-2 mb-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage text-center pt-2">
            <BlackContainer
              data={{
                label: "D15_LVL_TX",
                useClass: "greenTxt mt-2 ",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "BAUXITE",
              }}
            />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-5"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "D15" }}
            secondCircle={{
              secondCircleClass: `dot dot-rotat grey-color`,
              secondCircleText: "M",
              secondCircleLabel: "",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-2"></div>

          <BlackContainer
            data={{
              label: "DRMFC1050_SPM",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DRMFC1050_SPA",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_FT1050",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D3 CONT OP PERCENTAGE",
              useClass: "greenTxt mt-2 mb-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage text-center pt-2">
            <BlackContainer
              data={{
                label: "D3_LVL_TX",
                useClass: "greenTxt mt-2 ",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "LIME STONE",
              }}
            />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-5"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
              firstCircleText: "",
            }}
            text={{ useClass: "text-dark", label: "D3" }}
            secondCircle={{
              secondCircleClass: `dot dot-rotat grey-color`,
              secondCircleText: "M",
              secondCircleLabel: "",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-2"></div>

          <BlackContainer
            data={{
              label: "DRMFC1030_SPM",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DRMFC1030_SPA",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_FT1030",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D11 CONT OP PERCENTAGE",
              useClass: "greenTxt mt-2 mb-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage text-center pt-2">
            <BlackContainer
              data={{
                label: "D11_LVL_TX",
                useClass: "greenTxt mt-2 ",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "LIME STONE",
              }}
            />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <PipeWithCircles
            parentDivClass="hpipecircle mt-5"
            firstCircle={{
              firstCircleClass: `dot dot-rotat grey-color`,
            }}
            text={{ useClass: "text-dark", label: "D11" }}
            secondCircle={{
              secondCircleClass: `dot dot-rotat grey-color`,
              secondCircleText: "M",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-2"></div>

          <BlackContainer
            data={{
              label: "DRMFC1070_SPM",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DRMFC1070_SPA",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_FT1070",
              useClass: "greenTxt mt-2 ",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 text-center d-flex">
        <BlackContainer
          data={{
            label: "C19_CURRENT",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "MICRO_TIME",
            useClass: "greenTxt mt-2",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-3">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "D21.1" }}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "M",
            secondCircleLabel: "",
          }}
        />
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <BlackContainer
          data={{
            label: "FDFL_TRP_TMR",
            useClass: "greenTxt mt-2",
            unit: "s",
            unitColor: "unitColor",
          }}
        />

        <div>
          <BlackContainer
            data={{
              label: "D3_MANSP",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D3_RATIO1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D11_MANSP",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D11_RATIO1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "MICRO_TIME_SET_POINT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DRM_TOTAL_FEED",
              useClass: "greenTxt mt-4",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DRMPC1020_SPM",
              useClass: "greenTxt mt-1",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "DRMPC1020_SPA",
                useClass: "greenTxt mt-2",
                unit: "mmWG",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "RM_TRPLE_GATE_DRAUGHT",
                useClass: "greenTxt mt-2 ml-3",
                unit: "mmWG",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-5 ">
        <div>
          <BlackContainer
            data={{
              label: "DP_AUTODB_MAX",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DP_AUTODB_MIN",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "D_ZT1022",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_FAO1021_SPM",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "D_FAO1023_SPM",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-7">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "D21" }}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "M",
            secondCircleLabel: "",
          }}
        />
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "D21_CURRENT",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D21_1_SP_POWER",
              useClass: "greenTxt mt-2",
              unit: "kW/T",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D29_1_SEP_TOP_BRG_TEMP",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SEP_VIB_NEW",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D_ST1180",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_ST1181",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DRMSC1180_SPA",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_ST1180",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="bigContainer position-absolute single-text-9 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-5 pt-4 ml-3",
            label: "RAW MILL",
          }}
        />
        <BlackContainer
          data={{
            label: "D_VT1240",
            useClass: "greenTxt mt-5",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D_VT1260",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-10 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "D_PT1130",
              useClass: "greenTxt mt-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_PT1230",
              useClass: "greenTxt mt-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_PT1134",
              useClass: "greenTxt mt-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R2_CAL",
              useClass: "greenTxt mt-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D_TT1112",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_TT1110",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R4_CAL",
              useClass: "greenTxt mt-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D_ZT1420",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DRMTC1100_SPM",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "FKL_ZT2200",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "F_PC2230_SPM",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D42_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "FKL_PT2230",
              useClass: "greenTxt mt-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "F_PC2230_SPA",
              useClass: "greenTxt mt-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="d-flex align-items-center justify-content-cente">
          <div className="yellowline-Vr  line-212 ml-auto"></div>

          <div className="squareplustri text-center">
            <div className="mt-2 ">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus("D25")}`}
                label="D25"
              />
            </div>
            <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
          </div>
        </div>
        <div className="d-flex mt-3 single-text-15 ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2 mt-1",
              label: "D261",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "D26_1"
            )}`}
            label="D26_1"
          />
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GRLS FLOW",
          }}
        />
        <BlackContainer
          data={{
            label: "D_FT1321",
            useClass: "greenTxt mt-2",
            unit: "gpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D_FT1325",
            useClass: "greenTxt mt-2",
            unit: "gpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D_FT1322",
            useClass: "greenTxt mt-2",
            unit: "gpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D_FT1326",
            useClass: "greenTxt mt-2",
            unit: "gpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D_FT1323",
            useClass: "greenTxt mt-2",
            unit: "gpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D_FT1327",
            useClass: "greenTxt mt-2",
            unit: "gpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D_FT1324",
            useClass: "greenTxt mt-2",
            unit: "gpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D_FT1328",
            useClass: "greenTxt mt-2",
            unit: "gpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-13">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("D26")}`}
          label="D26"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "D26",
          }}
        />
      </div>
      <div className="position-absolute single-text-14">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-4",
              label: "Res212",
            }}
          />
          <BlackContainer
            data={{
              label: "RML_Res212",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-4",
              label: "Silo level",
            }}
          />
          <BlackContainer
            data={{
              label: "D_XT1490",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-4",
              label: "RM SP PWR",
            }}
          />
          <BlackContainer
            data={{
              label: "DRM_TOT_SP_PWR",
              useClass: "greenTxt mt-1",
              unit: "kWh/T",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <div className="mt-5">
          <BlackContainer
            data={{
              label: "D_PT1310",
              useClass: "greenTxt mt-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_TT1100",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CYCLONE",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "COLLECTOR",
            }}
          />
          <BlackContainer
            data={{
              label: "D_PT1343",
              useClass: "greenTxt mt-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "D62 PID",
            }}
          />
          <BlackContainer
            data={{
              label: "DRMSC1460S_SPM",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_IT1530",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D62_ACTUAL_POWER",
              useClass: "greenTxt mt-2",
              unit: "kWh",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "D62 PARA",
            }}
          />
          <BlackContainer
            data={{
              label: "D_IT1520",
              useClass: "greenTxt mt-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_ST1270",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D29_FREQ",
              useClass: "greenTxt mt-2",
              unit: "Hz",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D62_LL_VOLT",
              useClass: "greenTxt mt-2",
              unit: "kW/t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_VT1402",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_VT1403",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D62SPRS_KW",
              useClass: "greenTxt mt-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "D64A BH STACK",
            }}
          />
          <BlackContainer
            data={{
              label: "FKL_YT2180",
              useClass: "greenTxt mt-2",
              unit: "mg/Nm³ ",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D64A1_MAN_SP",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_ZT1043",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <div className="box-1 p-2 mt-4">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "D71A",
              }}
            />
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 mr-2",
                  label: "I",
                }}
              />

              <BlackContainer
                data={{
                  label: "D71A_CURRENT",
                  useClass: "greenTxt mt-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 mr-2",
                  label: "KW",
                }}
              />

              <BlackContainer
                data={{
                  label: "D_IT1590",
                  useClass: "greenTxt mt-2",
                  unit: "kW",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 mr-2",
                  label: "TPH",
                }}
              />

              <BlackContainer
                data={{
                  label: "D11_MANSP",
                  useClass: "greenTxt mt-2",
                  unit: "t/h",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "D_ZT1480",
              useClass: "greenTxt mt-2",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "D_TT1290",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "D53 VFD ROOM TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "D53_VFD_CUBICAL_TEMP",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "D53_VFD_SPD_FB",
            useClass: "greenTxt mt-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18 hpipecircle"></div>
      <div className="position-absolute single-text-19 hpipecircle"></div>
      <div className="position-absolute single-text-20 hpipecircle"></div>
      <div className=" position-absolute single-text-21">
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe mt-2"
          firstCircle={{
            firstCircleClass: ``,
            firstCircleText: "",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-22">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "D71A",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot grey-color mt-2 ml-3`}
          text="M"
        />
      </div>
      <div className=" position-absolute single-text-23 box-1 p-2">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "D29_3_WORKING_PRESS_SP",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D29_3_COUNTER_PRESS_SP",
              useClass: "greenTxt mt-2 ml-5",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "D29_3_OPRTNG_PRESS",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D29_3_COUNTER_PRESS",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "ROLLER_UP_SP",
            useClass: "greenTxt mt-1",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-24">
        <BlackContainer
          data={{
            label: "D_ZT1430",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "DRMPC1130_SPM",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "DRMPC1130_SPA",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" d-flex position-absolute single-text-25">
        <BlackContainer
          data={{
            label: "SX8_PRESSURE_VALUE",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "A_PT370",
            useClass: "greenTxt mt-2 ml-5",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "D_PT1137A",
            useClass: "greenTxt ",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3 mt-2",
            label: "D25",
          }}
        />
      </div>

      <BlackContainer
        data={{
          label: "D_IT1041",
          useClass: "greenTxt mt-2 position-absolute single-text-27",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "D_RM_AUTO_SAMP_DRAFT",
          useClass: "greenTxt mt-2 position-absolute single-text-28",
          unit: "mmWG",
          unitColor: "unitColor",
        }}
      />
      <div className=" d-flex position-absolute single-text-29">
        <div>
          <BlackContainer
            data={{
              label: "D_ST1272",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_IT1510",
              useClass: "greenTxt mt-5",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_IT1580",
              useClass: "greenTxt mt-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "D_VT1140",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "D_VT1150",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 ">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-4",
              label: "D29",
            }}
          />
          <div className="pole-shape">
            <MotorCircleDigitalTag
              className={`dot digital-tag mt-2 ml-1 position-absolute ${useColorStatus(
                "D29"
              )}`}
              label="D29"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-31  box-1 p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "RM REJECT REC SYSTEM",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "RM REJECT TPH",
          }}
        />
        <div className="d-flex mt-3">
          <BlackContainer
            data={{
              label: "D_FT1080",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle ml-3"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "M",
            }}
            text={{ useClass: "text-dark", label: "D94" }}
            secondCircle={{
              secondCircleClass: `dot grey-color`,
            }}
          />
        </div>
        <PipeWithCircles
          parentDivClass="hpipecircle ml-3 mt-2"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "M",
          }}
          text={{ useClass: "text-dark", label: "D95" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
          }}
        />
      </div>
      <div className="position-absolute single-text-32 box-1 p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "D93",
          }}
        />
        <BlackContainer
          data={{
            label: "D93_VFD_SP",
            useClass: "greenTxt mt-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D93_VFD_SPD",
            useClass: "greenTxt mt-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "D93_1_E3+_CURRENT",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33 box-1 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "Bag H",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_PT2050",
            useClass: "greenTxt mt-2",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FKL_TT2111",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-35",
          label: "TO BH",
        }}
      />
      <div className="position-absolute single-text-34 hpipecircle"></div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr  position-absolute line-2"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-3"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-3"></div>
      <div className="yellowline-Hr  position-absolute line-4"></div>
      <div className="yellowline-Hr  position-absolute line-4"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-5"></div>
      <div className="yellowline-Vr  position-absolute line-6"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-7"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-8"></div>
      <div className="yellowline-Vr  position-absolute line-9"></div>
      <div className="yellowline-Vr  position-absolute line-10"></div>
      <div className="yellowline-Hr  position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Hr  position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
    </div>
  );
};

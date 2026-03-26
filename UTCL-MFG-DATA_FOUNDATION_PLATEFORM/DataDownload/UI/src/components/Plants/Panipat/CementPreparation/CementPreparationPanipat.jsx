import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
  ProgressBarMimic,
  TransparentBoxWithGate,
  BlueContainerWithDynamicBorder,
} from "../../../index";
import { useBorderTagsColorStatus, useCaretColorStatus, useColorStatus, useFanImgTagsColorStatus, useImgColorStatus } from "../../../../utils";

export const CementPreparationPanipat = () => {
  return (
    <div className="PanipatCementPreparation  w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex">
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "551SR1_TE01",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_551SR1_TE01",
                useClass: "greenTxt ml-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "551SR1_TE02",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_551SR1_TE02",
                useClass: "greenTxt ml-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "551SR1_TE03",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_551SR1_TE03",
                useClass: "greenTxt ml-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "551SR1_TE04",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_551SR1_TE04",
                useClass: "greenTxt ml-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "551SR1_TE05",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_551SR1_TE05",
                useClass: "greenTxt ml-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_551SR1_RPM",
              useClass: "greenTxt ml-3",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_551SR1_II",
              useClass: "greenTxt ml-3 mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_551SR1_KW",
              useClass: "greenTxt ml-3 mt-2",
              unit: "Kw",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM_521FN7_BTE01",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_521FN7_BTE01",
              useClass: "greenTxt ml-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM_521FN7_BTE02",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_521FN7_BTE02",
              useClass: "greenTxt ml-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM_521FN7_BTE03",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_521FN7_BTE03",
              useClass: "greenTxt ml-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM_521FN7_BTE04",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_521FN7_BTE04",
              useClass: "greenTxt ml-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM_541BE2M01 GB T",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_541BE2M01_GB_TMP",
              useClass: "greenTxt ml-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM_541BE2M02 GB T",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_541BE2M02_GB_TMP",
              useClass: "greenTxt ml-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <div class="pipeVr text-center pipe-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "551SR1",
            }}
          />
        </div>
        <div class="pipeVr text-center pipe-2 d-flex">
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("CM_551SKS_DOOR")}`} label="CM_551SKS_DOOR" />
          <div className="mt-2">
            <MotorCircleDigitalTag className={`dot p-2  digital-tag ${useColorStatus("CM_551CF1")}`} label="CM_551CF1" text="M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "551CF1",
              }}
            />
          </div>
          <div className="mt-2">
            <MotorCircleDigitalTag className={`dot p-2  digital-tag ${useColorStatus("CM_551SR1")}`} label="CM_551SR1" text="M" />
            <div className="yellowline-Vr downArrow position-relative line-1"></div>
          </div>
        </div>
        <div className="trapezoid"></div>
      </div>
      <div className="d-flex position-absolute single-text-4">
        <MotorCircleDigitalTag className={`dot p-2  digital-tag ${useColorStatus("CM_551SR1_TS1")}`} label="CM_551SR1_TS1" text="X" />
        <MotorCircleDigitalTag className={`dot p-2 ml-4  digital-tag ${useColorStatus("CM_551SR1_TS2")}`} label="CM_551SR1_TS2" text="X" />
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("CM_551FV2")}`} label="CM_551FV2" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-2",
              label: "551FV2",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ml-3 ${useColorStatus("CM_551FV3")}`} label="CM_551FV3" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-2",
              label: "551FV3",
            }}
          />
        </div>
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-6" text={{ useClass: "text-dark mx-auto", label: "571AS2" }} />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-7" text={{ useClass: "text-dark mx-auto", label: "551AS4" }} />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-8" text={{ useClass: "text-dark mx-auto", label: "551AS1" }} />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-9" text={{ useClass: "text-dark mx-auto", label: "551AS3" }} />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-10" text={{ useClass: "text-dark mx-auto", label: "241AS4" }} />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-11" text={{ useClass: "text-dark mx-auto", label: "551AS2" }} />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-12" text={{ useClass: "text-dark mx-auto", label: "241AS5" }} />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-13" text={{ useClass: "text-dark mx-auto", label: "521AS1" }} />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-14" text={{ useClass: "text-dark mx-auto", label: "571AS1" }} />
      <div className="position-absolute single-text-15 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mr-2",
            label: "551FN4",
          }}
        />
        <div className="connector-icon  justify-content-start pl-1">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_551FN4")}`} label="CM_551FN4" />
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex">
        <div className="connector-icon  justify-content-start pl-1">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_551FN1 ")}`} label="CM_551FN1 " />
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_551FN1_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "551FN1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <div className="connector-icon  justify-content-start pl-1">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_551FN2 ")}`} label="CM_551FN2 " />
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_551FN2_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "551FN2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <div className="connector-icon  justify-content-start pl-1">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_551FN3")}`} label="CM_551FN3" />
          <div className="yellowline-Vr upArrow position-absolute line-1"></div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "551FN3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <div>
          <div className="connector-icon  justify-content-start pl-1">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_571FN1")}`} label="CM_571FN1" />
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          </div>
          <BlackContainer
            data={{
              label: "CM_571FN1_II",
              useClass: "greenTxt mt-3",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "571FN1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <BlackContainer
          data={{
            label: "CM_571FN2_STDBY_II",
            useClass: "greenTxt mr-3 mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div>
          <div className="connector-icon  justify-content-start pl-1">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_571FN2_STDBY")}`} label="CM_571FN2_STDBY" />
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "571FN2_STDBY",
            }}
          />
        </div>

        <MotorCircleDigitalTag className={`square digital-tag ml-3 ${useColorStatus("CM_571BE1_BSS4")}`} label="CM_571BE1_BSS4" />
      </div>
      <div className="position-absolute single-text-21 drumContainer text-center">
        <div className="d-flex justify-content-center mt-4">
          <BlackContainer
            data={{
              label: "CM_MILL_KW",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561MD1_II",
              useClass: "greenTxt ml-3",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "561BM1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "CEMENT MILL",
          }}
        />
        <div className="d-flex justify-content-center">
          <MotorCircleDigitalTag className={`dot p-2 mt-1 digital-tag ${useColorStatus("CM_561MD1")}`} label="CM_561MD1" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "561MD1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <BlueContainerWithDynamicBorder useClass={` ml-3 ${useBorderTagsColorStatus("CM_551DG1")}`} isClickable={true} tagLabel="CM_551DG1" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "551DG1",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_551DG1_ZT",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TO RP",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_551FN3_II",
            useClass: "greenTxt  ml-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-24",
          label: "TO V-SEPT",
        }}
      />
      <div className="position-absolute single-text-25 d-flex">
        <BlackContainer
          data={{
            label: "CM_561BM1_PT02",
            useClass: "greenTxt mt-4",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CM_551FM1_LSP")}`} label="CM_551FM1_LSP" />
          <MotorCircleDigitalTag className={`square digital-tag ml-3 ${useColorStatus("CM_551FM1_PH")}`} label="CM_551FM1_PH" />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_551FM1_FI",
              useClass: "greenTxt ",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BM1_TE03",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561FV1",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-26">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CM_561LQ2__FS01")}`} label="CM_561LQ2__FS01" />
        <MotorCircleDigitalTag className={`square digital-tag ml-3 ${useColorStatus("CM_561LQ2__FS02")}`} label="CM_561LQ2__FS02" />
        <BlackContainer
          data={{
            label: "CM_561BM1_PT01",
            useClass: "greenTxt  ml-3",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "INLET",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_561BM1_TE01",
                useClass: "greenTxt  ml-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "INLET",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_561BM1_TE02",
                useClass: "greenTxt  ml-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "O/L",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_561BM1_TE05",
                useClass: "greenTxt  ml-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "O/L",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_561BM1_TEMP_TE06",
                useClass: "greenTxt  ml-3",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561LQ2_T2",
              useClass: "greenTxt  ml-3",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561LQ1_T2",
              useClass: "greenTxt  ml-3 mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "MILL INLET LUB. SYSTEM",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <div className="d-flex box-1 p-2">
          <MotorCircleDigitalTag className={`dot p-2  digital-tag ${useColorStatus("CM_561LQ1_M01")}`} label="CM_561LQ1_M01" text="M" />
          <MotorCircleDigitalTag className={`dot p-2 ml-2 digital-tag ${useColorStatus("CM_561LQ1_M02")}`} label="CM_561LQ1_M02" text="M" />
          <MotorCircleDigitalTag className={`dot p-2 ml-2 digital-tag ${useColorStatus("CM_561LQ1_M03")}`} label="CM_561LQ1_M03" text="M" />
          <MotorCircleDigitalTag className={`dot p-2 ml-2 digital-tag ${useColorStatus("CM_561LQ1_M04")}`} label="CM_561LQ1_M04" text="M" />
          <MotorCircleDigitalTag className={`dot p-2  ml-2 digital-tag ${useColorStatus("CM_561LQ1_M05")}`} label="CM_561LQ1_M05" text="M" />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CM_561LQ1_H01")}`} label="CM_561LQ1_H01" />
          <MotorCircleDigitalTag className={`square digital-tag ml-3 ${useColorStatus("CM_561LQ2_H01")}`} label="CM_561LQ2_H01" />
        </div>
        <div className="d-flex box-1 p-2">
          <MotorCircleDigitalTag className={`dot p-2  digital-tag ${useColorStatus("CM_561LQ2_M01")}`} label="CM_561LQ2_M01" text="M" />
          <MotorCircleDigitalTag className={`dot p-2 ml-2 digital-tag ${useColorStatus("CM_561LQ2_M02")}`} label="CM_561LQ2_M02" text="M" />
          <MotorCircleDigitalTag className={`dot p-2 ml-2 digital-tag ${useColorStatus("CM_561LQ2_M03")}`} label="CM_561LQ2_M03" text="M" />
          <MotorCircleDigitalTag className={`dot p-2 ml-2 digital-tag ${useColorStatus("CM_561LQ2_M04")}`} label="CM_561LQ2_M04" text="M" />
          <MotorCircleDigitalTag className={`dot p-2  ml-2 digital-tag ${useColorStatus("CM_561LQ2_M06")}`} label="CM_561LQ2_M06" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-29 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "561LQ1H01",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561LQ1H01",
            }}
          />
          <MotorCircleDigitalTag className={`dot p-2 ml-2 digital-tag ${useColorStatus("CM_561LQ2_M05")}`} label="CM_561LQ2_M05" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CM_561LQ1_FS02")}`} label="CM_561LQ1_FS02" />
        <MotorCircleDigitalTag className={`square digital-tag ml-3 ${useColorStatus("CM_561LQ1_FS01")}`} label="CM_561LQ1_FS01" />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4",
              label: "MILL OUTLET LUB.",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SYSTEM",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CM_561BM1_TE04",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <div>
          <MotorCircleDigitalTag className={`dot p-2 ml-2 digital-tag ${useColorStatus("CM_561LQ3_M01")}`} label="CM_561LQ3_M01" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561LQ3",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-2 ${useColorStatus("CM_561LQ3_FS")}`} label="CM_561LQ3_FS" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CM_561GB1_ZS")}`} label="CM_561GB1_ZS" />
          <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("CM_561LQ3_DPS")}`} label="CM_561LQ3_DPS" />
        </div>
      </div>
      <div className="position-absolute single-text-32 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561CF1",
            }}
          />
          <MotorCircleDigitalTag className={`dot p-2 ml-2 digital-tag ${useColorStatus("CM_561CF1M01")}`} label="CM_561CF1M01" />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561CF2",
            }}
          />
          <MotorCircleDigitalTag className={`dot p-2 ml-2 digital-tag ${useColorStatus("CM_561CF2M01")}`} label="CM_561CF2M01" />
        </div>
      </div>
      <div className="position-absolute single-text-33 ">
        <BlackContainer
          data={{
            label: "CM_561LD3_ZT",
            useClass: "greenTxt  mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "COOLING  TOWER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "WATER TEMP",
          }}
        />
        <BlackContainer
          data={{
            label: "PP_CLG_WTR_TE",
            useClass: "greenTxt  mt-2 ml-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "561AD1",
          }}
        />
        <MotorCircleDigitalTag className={`dot p-2 mt-1 digital-tag ${useColorStatus("CM_561AD1M01")}`} label="CM_561AD1M01" text="M" />
        <BlackContainer
          data={{
            label: "CM_561MD1_BTE02",
            useClass: "greenTxt  mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561MD1_BTE01",
            useClass: "greenTxt  mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CM_561BM1_TEA",
          useClass: "greenTxt  mt-1 position-absolute single-text-34",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-35 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FIELD CHANGE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "OVER SELECTION",
          }}
        />
        <MotorCircleDigitalTag className={`square mt-2 ml-5 digital-tag ${useColorStatus("GA_PMP_FLD_SEL_PPC")}`} label="GA_PMP_FLD_SEL_PPC" />
        <MotorCircleDigitalTag className={`square mt-2 ml-5 digital-tag ${useColorStatus("GA_PMP_FLD_SEL_WRC")}`} label="GA_PMP_FLD_SEL_WRC" />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CM_531GA1",
            }}
          />
          <MotorCircleDigitalTag className={`dot p-2 ml-2 digital-tag ${useColorStatus("CM_531GA1")}`} label="CM_531GA1" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-36 ">
        <div>
          <BlackContainer
            data={{
              label: "CM_551SR1_XT",
              useClass: "greenTxt  mt-1 ",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_551LQ1_II",
              useClass: "greenTxt  mt-3",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <div className="img-86 d-flex text-center">
              <MotorCircleDigitalTag className={`dot p-2 ml-2  mt-5 mx-auto digital-tag ${useColorStatus("CM_551LQ1")}`} label="CM_551LQ1" text="M" />
            </div>
            <MotorCircleDigitalTag className={`dot p-2 ml-2 mt-5 digital-tag ${useColorStatus("CM_551LQ1_TS")}`} label="CM_551LQ1_TS" text="x" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "551LQ1",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "551DG3",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_551DG3_ZT",
              useClass: "greenTxt  mt-1 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-37 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "WRC GA Pump in DCS selected",
          }}
        />
        <MotorCircleDigitalTag className={`square mt-2 ml-3 digital-tag ${useColorStatus("WRC GA PUMP IN DCS SELECTED")}`} label="WRC GA PUMP IN DCS SELECTED" />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "WRC GA Pump Flow",
            }}
          />
          <BlackContainer
            data={{
              label: "GA_PMP_WPC_FLOW",
              useClass: "greenTxt  mt-1 ml-2",
              unit: "LPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "ppc GA Pump Flow",
            }}
          />
          <BlackContainer
            data={{
              label: "GA_PMP_PPC_FLOW",
              useClass: "greenTxt  mt-1 ml-2",
              unit: "ml/min",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <BlackContainer
            data={{
              label: "CM_561FN1_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div>
            <MotorCircleDigitalTag className={`line-circle ml-4 digital-tag ${useColorStatus("CM_531GA2")}`} label="CM_531GA2" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "GA MP",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PLANT VOLTAGE",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_PLANT_VOLTAGE1",
            useClass: "greenTxt mt-2",
            unit: "KV",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "MAIN HSEB VOLTAGE",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_MAIN_HSEB",
            useClass: "greenTxt mt-2",
            unit: "KV",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HSEB MD",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_HSEB_MD",
            useClass: "greenTxt mt-2",
            unit: "KVA",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-39 d-flex">
        <div className="containerImage d-flex">
          <MotorCircleDigitalTag className={`square mt-4 ml-4 digital-tag ${useColorStatus("CM_521BF6_LH01")}`} label="CM_521BF6_LH01" />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="containerImage d-flex">
          <MotorCircleDigitalTag className={`square mt-4 ml-4 digital-tag ${useColorStatus("CM_521BF6_LH02")}`} label="CM_521BF6_LH02" />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="containerImage d-flex">
          <MotorCircleDigitalTag className={`square mt-4 ml-4 digital-tag ${useColorStatus("CM_521BF6_LH03")}`} label="CM_521BF6_LH03" />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-40 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("CM_521RF9")}`} label="CM_521RF9" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("CM_521RF10")}`} label="CM_521RF10" />
        <div className="d-flex">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("CM_521RF11")}`} label="CM_521RF11" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-3",
              label: "521RF9-11",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-41">
        <BlackContainer
          data={{
            label: "CM_521BF6_DPT",
            useClass: "greenTxt mx-auto",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "521BF6",
          }}
        />
        <MotorCircleDigitalTag className={`square mt-4 ml-4 digital-tag ${useColorStatus("CM_521BF6")}`} label="CM_521BF6" />
      </div>
      <div className="position-absolute single-text-42">
        <BlackContainer
          data={{
            label: "CM_521LD2_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={` mt-2 ${useBorderTagsColorStatus("CM_521LD2")}`} isClickable={true} tagLabel="CM_521LD2" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "521LD2",
          }}
        />
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square mt-5 ml-3 digital-tag ${useColorStatus("CM_571BE1_BSS1")}`} label="CM_571BE1_BSS1" />
          <MotorCircleDigitalTag className={`square mt-5 ml-5 digital-tag ${useColorStatus("CM_571BE1_BSS2")}`} label="CM_571BE1_BSS2" />
        </div>
      </div>
      <div className="position-absolute single-text-43 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mr-2",
            label: "521FNA",
          }}
        />
        <div>
          <div className="connector-icon  justify-content-start pl-1">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_521FNA")}`} label="CM_521FNA" />
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-44 d-flex">
        <MotorCircleDigitalTag className={`square ml-3  digital-tag ${useColorStatus("CM_571BE1_ZSS1")}`} label="CM_571BE1_ZSS1" />
        <MotorCircleDigitalTag className={`square  ml-3  digital-tag ${useColorStatus("CM_571BE1_LH")}`} label="CM_571BE1_LH" />
        <MotorCircleDigitalTag className={`square  ml-3  digital-tag ${useColorStatus("CM_571BE1_ZSS2")}`} label="CM_571BE1_ZSS2" />
      </div>
      <PipeWithCircles parentDivClass="pipe dotted-pipe position-absolute single-text-45" />
      <div className=" position-absolute single-text-46 d-flex">
        <MotorCircleDigitalTag className={`dot p-2 ml-2 digital-tag ${useColorStatus("CM_571AX1_M01")}`} label="CM_571AX1_M01" text="M" />
        <MotorCircleDigitalTag className={`dot p-2 ml-5 digital-tag ${useColorStatus("CM_571BE1")}`} label="CM_571BE1" text="M" />
        <div>
          <MotorCircleDigitalTag className={`square mt-2 ml-3 digital-tag ${useColorStatus("CM_571BE1_ZS")}`} label="CM_571BE1_ZS" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "571BE1",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_571BE1_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag className={`square mt-3 ml-3 digital-tag ${useColorStatus("CM_571BE1_BSS3")}`} label="CM_571BE1_BSS3" />
        </div>
      </div>
      <div className=" position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-4",
            label: "521SK2",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_OUTLT_DUCT_TEMP",
            useClass: "greenTxt mb-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <div className=" d-flex">
          <div>
            <div className="connector-icon  justify-content-start pl-1">
              <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_521FN6VFD")}`} label="CM_521FN6VFD" />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-2",
                label: "521FN6",
              }}
            />
          </div>
          <div>
            <BlueContainerWithDynamicBorder useClass={` mt-2 ${useBorderTagsColorStatus("CM_561LD2")}`} isClickable={true} tagLabel="CM_561LD2" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 mr-2",
                label: "561LD2",
              }}
            />
          </div>
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "CM_561LD2_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_521FN6_XT",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="chimni-red position-absolute single-text-48"></div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-49" text={{ useClass: "text-dark mx-auto", label: "521RA2_5 DIS" }} />
      <div className=" position-absolute single-text-50">
        <BlackContainer
          data={{
            label: "CM_551SR1_TE04",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag className={`dot p-2  mt-2 digital-tag ${useColorStatus("CM_551LQ1_PS")}`} label="CM_551LQ1_PS" text="X" />
      </div>
      <div className=" position-absolute single-text-51 d-flex">
        <MotorCircleDigitalTag className={`dot p-2  mt-2 digital-tag ${useColorStatus("CM_521RF7")}`} label="CM_521RF7" text="M" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-3",
            label: "SKS GB Cooling fan",
          }}
        />
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-52" text={{ useClass: "text-dark mx-auto", label: "" }} />
      <div className="position-absolute single-text-53 bg-secondary p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Manul",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "MV",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_521FN6_PID",
              useClass: "greenTxt ",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
        </div>
        {/* <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3",
              label: "OUT",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_551SR1_TE04",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div> */}
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr  position-absolute line-8"></div>
      <div className="yellowline-Hr  position-absolute line-9"></div>
      <div className="yellowline-Hr  position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Hr  position-absolute line-12"></div>
      <div className="yellowline-Vr  position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Hr position-absolute line-17"></div>
      <div className="yellowline-Hr position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Hr  position-absolute line-22"></div>
      <div className="yellowline-Hr  position-absolute line-23"></div>
    </div>
  );
};

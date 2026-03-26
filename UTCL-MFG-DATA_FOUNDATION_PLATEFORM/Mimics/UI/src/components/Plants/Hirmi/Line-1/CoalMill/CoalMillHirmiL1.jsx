import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";
import {
  useCaretColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
} from "../../../../../utils";
import { useDispatch } from "react-redux";

export const CoalMillHirmiL1 = () => {
  const dispatch = useDispatch();
  return (
    <div className="CoalMillHirmiL1 w-100 h-100 position-relative">
      <div className=" position-absolute single-text-1">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot  grey-color`,
          }}
          text={{ useClass: "text-dark", label: "J02" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("F1J02")}`,
            secondCircleLabel: "F1J02",
            secondCircleText: "M",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 ml-2"
          firstCircle={{
            firstCircleClass: `dot  grey-color`,
          }}
          text={{ useClass: "text-dark", label: "J06" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("F1J06")}`,
            secondCircleLabel: "F1J06",
            secondCircleText: "M",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 ml-3"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
          }}
          text={{ useClass: "text-dark", label: "J03" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("F1J03")}`,
            secondCircleLabel: "F1J03",
            secondCircleText: "M",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 ml-4"
          firstCircle={{
            firstCircleClass: `dot  grey-color`,
          }}
          text={{ useClass: "text-dark", label: "J04" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("F1J04")}`,
            secondCircleLabel: "F1J04",
            secondCircleText: "M",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-3 ml-5"
          firstCircle={{
            firstCircleClass: `dot  grey-color`,
          }}
          text={{ useClass: "text-dark", label: "J05" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("F1J05")}`,
            secondCircleLabel: "F1J05",
          }}
        />
      </div>
      <div className=" position-absolute single-text-2 d-flex">
        <div className="containerImage text-center pt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K1LO1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PET COKE",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L01_W1",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L01_DROP",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center pt-2 ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K1LO2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "NORMAL COAL",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L02_W1",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L02_DROP",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className=" position-absolute single-text-3 d-flex">
        <BlackContainer
          data={{
            label: "K1A01_MANUAL_SP",
            useClass: "greenTxt mr-3 mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mr-3"
          firstCircle={{
            firstCircleClass: `dot  grey-color`,
          }}
          text={{ useClass: "text-dark", label: "A01" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("K1A01")}`,
            secondCircleLabel: "K1A01",
            secondCircleText: "M",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle ml-4"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat  ${useColorStatus(
              "K1A02"
            )}`,
            firstCircleText: "M",
            firstCircleLabel: "K1A02",
          }}
          text={{ useClass: "text-dark", label: "A02" }}
          secondCircle={{
            secondCircleClass: `dot  grey-color`,
          }}
        />
        <BlackContainer
          data={{
            label: "K1A02_MANUAL_SP",
            useClass: "greenTxt ml-3 mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div className="mr-5">
          <BlackContainer
            data={{
              label: "K1A01_F1",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1A01_S1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1A01_I1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "K1A02_F1",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1A02_S1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1A02_I1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className=" position-absolute single-text-5 d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle mr-3"
          firstCircle={{
            firstCircleClass: `dot  `,
          }}
          text={{ useClass: "text-dark", label: "J05" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("K1J05")}`,
            secondCircleText: "M",
            secondCircleLabel: "K1J05",
          }}
        />
        <div>
          <div className="box-1 p-2 ml-4">
            <BlackContainer
              data={{
                label: "K1K06_PID_SPA",
                useClass: "greenTxt mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1K06_PID_SPM",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1K06_Z1",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "K1A04_I1",
              useClass: "greenTxt mt-2 mx-auto",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-6">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("K1A04")}`}
          label="K1A04"
        />
        <BlackContainer
          data={{
            label: "K1M10_I1",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto",
            label: "A04",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "M10",
            }}
          />
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "K1M10"
              )} ml-3`}
              label="K1M10"
            />
            <div className="yellowline-Hr rightarrow position-absolute line-2"></div>
          </div>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "M10_STBY",
            }}
          />
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "K1M10_STBY"
              )} ml-3`}
              label="K1M10_STBY"
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-8">
        <PipeWithCircles
          parentDivClass="hpipecircle mr-3"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("K1U01")}`,
            firstCircleText: "M",
            firstCircleLabel: "K1U01",
          }}
          secondCircle={{
            secondCircleClass: `dot  `,
          }}
        />
      </div>
      <div className=" position-absolute single-text-9">
        <div className="containerImage text-center pt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COAL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "REJECT",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "HOPPER",
            }}
          />
        </div>
        <div className="truck"></div>
      </div>
      <div className=" position-absolute single-text-10 ">
        <div className="d-flex">
          <div className="box-1 p-1 d-flex ">
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K1M07M1")} `}
                label="K1M07M1"
                text="M"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "M1",
                }}
              />
            </div>
            <div className="ml-2 mr-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K1M07M2")} `}
                label="K1M07M2"
                text="M"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "M2",
                }}
              />
            </div>
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("K1M07E1")} `}
                label="K1M07E1"
                text="M"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "E1",
                }}
              />
            </div>
          </div>
          <div className="ml-2 mt-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("K1M07")} `}
              label="K1M07"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ML-3",
                label: "M07",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div>
            <BlackContainer
              data={{
                label: "K1M07_Y1_SPM",
                useClass: "greenTxt mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1M07_P1",
                useClass: "greenTxt mt-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "K1M03_J1",
              useClass: "greenTxt mt-2 ml-2",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-11">
        <div className="d-flex gap1">
          <BlackContainer
            data={{
              label: "K1A01SP",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1A02SP",
              useClass: "greenTxt ml-4",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <BlackContainer
            data={{
              label: "K1A01_Y1_SPA",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1A02_Y1_SPA",
              useClass: "greenTxt ml-4",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mx-auto mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MILL FEED RATIO",
            }}
          />
          <BlackContainer
            data={{
              label: "K1M01P3_PID_SPM",
              useClass: "greenTxt ml-4 mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-12 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K05",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag   ${useColorStatus(
              "K1K05"
            )} ml-3`}
            label="K1K05"
          />
        </div>
        <div className="ml-3">
          <div className="hpipecircle mx-auto text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "WATER",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "TANK",
              }}
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "K1K05_F1",
            useClass: "greenTxt ml-4 mt-2",
            unit: "m3/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="bigContainer position-absolute single-text-13 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-5",
            label: "COAL MILL",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M01_TH2",
            useClass: "greenTxt  mt-4",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M01_TH3",
            useClass: "greenTxt  mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M01_TH1",
            useClass: "greenTxt  mt-3",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div className="pole-shape">
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-2 ml-1 ${useColorStatus("K1M03")}`}
            label="K1M03"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "M03",
          }}
        />
      </div>
      <div className=" position-absolute single-text-15">
        <div className="containerImage text-center pt-2">
          <BlackContainer
            data={{
              label: "K1S05_P1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1S05_T2",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1S05_T3",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div class="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-3",
              label: "S06",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K1S06"
            )}`}
            label="K1S06"
          />
        </div>
        <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      </div>
      <div className=" position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-5",
            label: "P20",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag  ${useColorStatus("K1P20")}`}
          label="K1P20"
        />
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "K1S01_Y1_SPM",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1S01_S1",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1S01_J1",
              useClass: "greenTxt  mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="pole-shape mt-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag mt-2 ml-1 position-absolute  ${useColorStatus(
                "K1S01"
              )}`}
              label="K1S01"
            />
          </div>
          <div className="pole-shape mt-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag  mt-2 ml-1 position-absolute  ${useColorStatus(
                "K1S01DUMMY"
              )}`}
              label="K1S01DUMMY"
            />
          </div>
        </div>
        <div className="mt-2">
          <BlackContainer
            data={{
              label: "K1S01DUMMY_Y1_SPM",
              useClass: "greenTxt  mt-2",
              unit: "%38",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1S01DUMMY_S1",
              useClass: "greenTxt  mt-2",
              unit: "%39",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1S01DUMMY_J1",
              useClass: "greenTxt  mt-2",
              unit: "A40",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "K1P11_P2",
            useClass: "greenTxt mx-auto",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <div className="containerImage text-center pt-2 mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "BAGFILTER P11",
            }}
          />

          <BlackContainer
            data={{
              label: "K1P11_T3",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1P11_T2",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1P11_P1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-4",
              label: "P13",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag  ${useColorStatus("K1P13")}`}
            label="K1P13"
          />
        </div>
        <div class="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-3",
              label: "P14",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K1P14"
            )}`}
            label="K1P14"
          />
        </div>
        <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      </div>
      <div className=" position-absolute single-text-19">
        <BlackContainer
          data={{
            label: "K1P21_P2",
            useClass: "greenTxt mx-auto",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <div className="containerImage text-center pt-2 mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "BAGFILTER P21",
            }}
          />

          <BlackContainer
            data={{
              label: "K1P21_T3",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1P21_T2",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1P21_P1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-4",
              label: "P23",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag  ${useColorStatus("K1P23")}`}
            label="K1P23"
          />
        </div>
        <div class="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-3",
              label: "P24",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K1P24"
            )}`}
            label="K1P24"
          />
        </div>
        <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      </div>
      <div className=" position-absolute single-text-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "P30",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag  ${useColorStatus("K1P30")}`}
          label="K1P30"
        />
      </div>
      <div className="position-absolute single-text-21">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("K1P40M1")}`,
            firstCircleLabel: "K1P40M1",
            firstCircleText: "M",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("K1P40M2")}`,
            secondCircleLabel: "K1P40M2",
            secondCircleText: "M",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "P40M1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-auto",
              label: "P40M2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "K1T02_MV_DRIVE_SP",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T02_MV_S1",
            useClass: "greenTxt mt-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T02_J1",
            useClass: "greenTxt mt-2",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1T02_MV_I1",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "K1P11_JPF_CO",
            useClass: "greenTxt mt-2",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P21_JPF_CO",
            useClass: "greenTxt mt-2",
            unit: "ppm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="brick-cooler-img position-absolute single-text-24"></div>
      <div className=" position-absolute single-text-25 d-flex">
        <div className="containerImage text-center pt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CAL BIN",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K1LO4",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L04_BIN_CO",
              useClass: "greenTxt mt-2",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L04_W1",
              useClass: "greenTxt mt-4",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center pt-1 ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KILN BIN",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K1LO5",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L05_BIN_CO",
              useClass: "greenTxt mt-2",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L05_W1_DIR",
              useClass: "greenTxt mt-4",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center pt-1 ml-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RISER BIN",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K1LO3",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L03_BIN_CO",
              useClass: "greenTxt mt-2",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1L03_W1",
              useClass: "greenTxt mt-4",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "K1S01_X1",
            useClass: "greenTxt ",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M03_X2",
            useClass: "greenTxt mt-4",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <div className="d-flex">
          <div className="mr-5">
            <BlackContainer
              data={{
                label: "K1M01_T1",
                useClass: "greenTxt ",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1M01_X1",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-5">
            <BlackContainer
              data={{
                label: "K1K01_PID_SPM",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1K01_Z1",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="mr-4 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K1M03 MV DRV",
              }}
            />
            <BlackContainer
              data={{
                label: "K1M03_MV_DRV_SP",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1M03_MV_DRV_S1",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1M03_MV_DRV_CUR",
                useClass: "greenTxt mt-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-1 mr-3 mt-4">
            <BlackContainer
              data={{
                label: "K1T03_PID_SPA",
                useClass: "greenTxt ",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1M01_P1",
                useClass: "greenTxt mt-2",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-1 mt-4">
            <BlackContainer
              data={{
                label: "K1S04_PID_SPM",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1S04_Z1",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-28">
        <BlackContainer
          data={{
            label: "K1T01_T2",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1M01_P1",
            useClass: "greenTxt mt-4",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-29">
        <div className="squareplustri text-center pt-2 ml-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "P81",
            }}
          />
        </div>
        <div class="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "P84",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "K1P84"
            )}`}
            label="K1P84"
          />
        </div>
        <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      </div>
      <div className="position-absolute single-text-30">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("K1T02")} ml-3`}
          label="K1T02"
        />
      </div>
      <div className="position-absolute single-text-31">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("K1P85")} ml-3`}
          label="K1P85"
        />
      </div>
      <div className="position-absolute single-text-32 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mr-2",
            label: "K06",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "K1K06"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag  ${useCaretColorStatus(
            "K1K06"
          )}`}
          label="K1K06"
        />
      </div>
      <div className="d-flex position-absolute single-text-33">
        <i className="fa-solid fa-caret-up"></i>
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "position-absolute single-text-34 text-dark mt-1",
          label: "T02",
        }}
      />

      <button
        className="d-block btn greenbtn position-absolute single-text-35"
        onClick={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "hirmil1coalmillparameterspopup1",
              plant: "hirmi",
              plantcode: "HCW",
            },
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "hirmil1coalmillparameterspopup1",
              plant: "hirmi",
              plantcode: "HCW",
            },
          });
        }}
      >
        Coal Mill Parameters
      </button>
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Hr position-absolute line-9"></div>
      <div className="yellowline-Vr upArrow position-absolute line-10"></div>
      <div className="yellowline-Vr upArrow position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Vr  position-absolute line-13"></div>
      <div className="yellowline-Hr position-absolute line-14"></div>
      <div className="yellowline-Vr  position-absolute line-15"></div>
      <div className="yellowline-Hr  position-absolute line-16"></div>
      <div className="yellowline-Vr  position-absolute line-18"></div>
      <div className="yellowline-Vr  position-absolute line-19"></div>
      <div className="yellowline-Hr  position-absolute line-20"></div>
      <div className="yellowline-Vr  position-absolute line-21"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-22"></div>
      <div className="yellowline-Hr  position-absolute line-24"></div>
      <div className="yellowline-Vr  position-absolute line-25"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Hr  position-absolute line-29"></div>
      <div className="yellowline-Vr  position-absolute line-30"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-31"></div>
      <div className="yellowline-Vr position-absolute line-32"></div>
      <div className="yellowline-Vr position-absolute line-33"></div>
      <div className="yellowline-Hr position-absolute line-34"></div>
      <div className="yellowline-Vr position-absolute line-35"></div>
      <div className="yellowline-Hr position-absolute line-36"></div>
      <div className="yellowline-Vr downArrow position-absolute line-37"></div>
      <div className="yellowline-Vr downArrow position-absolute line-38"></div>
      <div className="yellowline-Vr downArrow position-absolute line-39"></div>
      <div className="yellowline-Vr  position-absolute line-40"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-41"></div>
      <div className="yellowline-Hr  position-absolute line-46"></div>
      <div className="yellowline-Vr upArrow position-absolute line-47"></div>
      <div className="yellowline-Vr  position-absolute line-54"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-55"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-56"></div>
    </div>
  );
};

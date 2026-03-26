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
} from "../../../../index";
import { useBorderTagsColorStatus, useCaretColorStatus, useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

import * as tagsData from "../../../../../data/hirmi/Line-1/Kiln/hirmiKilnTextColumn";

export const RawMill1HirmiL1 = () => {
  return (
    <div className="RawMill1HirmiL1 w-100 h-100 position-relative">
      <div className=" position-absolute single-text-1">
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "R1K03SB_PID_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "R1K03SB_I1",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1K03SB_S1",
            useClass: "greenTxt mt-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-5 ml-2 ",
            label: "R1K04",
          }}
        />
        <div>
          <div className="middle-sqr-container ml-3">
            <ProgressBarMimic />
            <div className="text-center">
              <BlackContainer
                data={{
                  label: "R1K04_LVL",
                  useClass: "greenTxt mt-2",
                  unit: "m",
                  unitColor: "unitColor",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "WATER",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "TANK",
                }}
              />
            </div>
          </div>
          <div class="yellowline-Vr  ml-4 line-1"></div>
          <div class="yellowline-Hr  ml-4 line-2"></div>
          <div class="yellowline-Hr  ml-4 line-3"></div>
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 ml-2 ",
            label: "K01",
          }}
        />
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R1K01")}`} label="R1K01" />
        </div>

        <div className="connector-icon mt-2">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R1K03SB")}`} label="R1K03SB" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-2",
            label: "K03",
          }}
        />
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-5 ml-2 ",
            label: "R1L04",
          }}
        />
        <div>
          <div className="middle-sqr-container ml-3">
            <div className="text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 pt-2",
                  label: "RAW MIX",
                }}
              />
              <BlackContainer
                data={{
                  label: "R1L04_W1",
                  useClass: "greenTxt mt-2",
                  unit: "t",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div class="yellowline-Vr downArrow ml-4 line-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  pt-2",
            label: "A1J15",
          }}
        />
        <div className="box-1 p-1 ml-4">
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-6">
        <BlackContainer
          data={{
            label: "R1J01_I1_EXP",
            useClass: "greenTxt mb-2 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot dot-rotat grey-color`,
            firstCircleText: "",
            firstCircleLabel: "",
          }}
          text={{ useClass: "text-dark mx-auto", label: "R1J01" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R1J01")}`,
            secondCircleText: "M",
            secondCircleLabel: "R1J01",
          }}
        />
      </div>

      <div className=" position-absolute single-text-7 d-flex ">
        <div>
          <div className="box-1 p-1">
            <BlackContainer
              data={{
                label: "R1J01_MIN_LOCK",
                useClass: "greenTxt mb-2 ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "R1J01 MIN LOCK",
              }}
            />
            <BlackContainer
              data={{
                label: "R1J01_MAX_LOCK",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-2",
                label: "R1J01 MAX LOCK",
              }}
            />
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  pt-2",
              label: "VIBO FEEDER",
            }}
          />
          <div className="box-1 p-1 mt-2 align-self-start">
            <div className="d-flex">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("R1A02M1")}`} label="R1A02M1" text="M" />
              <MotorCircleDigitalTag className={`dot digital-tag ml-3 ${useColorStatus("R1A02M2")}`} label="R1A02M2" text="M" />
            </div>
            <div className="mt-3 d-flex">
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("R1A03M1")}`} label="R1A03M1" text="M" />
              <MotorCircleDigitalTag className={`dot digital-tag ml-3 ${useColorStatus("R1A03M2")}`} label="R1A03M2" text="M" />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "R1J01_I1",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="box-1 p-1 ml-3 align-self-start">
          <BlackContainer
            data={{
              label: "R1M01P3_PID_SPM",
              useClass: "greenTxt mb-2 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1J01_S1",
              useClass: "greenTxt mb-2 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1 ml-3 align-self-start">
          <BlackContainer
            data={{
              label: "R1M01P3_PID_SPA",
              useClass: "greenTxt mb-2 ",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M01_P3",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "R1M24_X2",
              useClass: "greenTxt mb-2 ",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M06_I1",
              useClass: "greenTxt mb-2 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2",
                label: "R1M06",
              }}
            />
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R1M06")} `} label="R1M06" />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-8">
        <BlackContainer
          data={{
            label: "R1J03_W1",
            useClass: "greenTxt mb-2 mx-auto",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus("R1J03")}`,
            firstCircleText: "M",
            firstCircleLabel: "R1J03",
          }}
          text={{ useClass: "text-dark mx-auto", label: "R1J03" }}
          secondCircle={{
            secondCircleClass: `dot dot-rotat grey-color`,
            secondCircleText: "",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "R1J03_ONLY_W1",
              useClass: "greenTxt mt-2 mx-auto",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_REJECT_TOTALISER",
              useClass: "greenTxt mt-2 ml-auto",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  pt-2",
            label: "HYD UNIT",
          }}
        />
        <div className="box-1 p-1 mt-2 align-self-start">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  pt-2",
                  label: "M1",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("R1M07_IND")}`} label="R1M07_IND" text="M" />
            </div>
            <div className="ml-3">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  pt-2",
                  label: "M2",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("R1M07M2_IND")}`} label="R1M07M2_IND" text="M" />
            </div>
          </div>
          <div className="mt-2 d-flex">
            <BlackContainer
              data={{
                label: "R1M07_I1",
                useClass: "greenTxt ml-auto",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-10">
        <BlackContainer
          data={{
            label: "R1M06_P2_TX",
            useClass: "greenTxt mb-2",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1M01_X4",
            useClass: "greenTxt mb-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <div className="box-1 p-1 mt-2">
          <BlackContainer
            data={{
              label: "R1M07_Y1_SPM",
              useClass: "greenTxt mb-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M07_P1",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="bigContainer position-absolute single-text-11">
        {/* <ProgressBarMimic label="511SB1_LI" /> */}
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  pt-2 mx-auto mt-5",
            label: "RM-1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-3 pt-2 mx-auto",
            label: "M01",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag mx-auto mt-2 ${useColorStatus("R1M07_RUP")} `} label="R1M07_RUP" text="G" />

        <BlackContainer
          data={{
            label: "R1M01_L1",
            useClass: "greenTxt mb-2 mt-5 mx-auto",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1 pt-2",
            label: "K02",
          }}
        />
        <div className="d-flex ">
          <div className="box-1 p-1 align-self-start mr-4">
            <BlackContainer
              data={{
                label: "R1K02_PID_SPM",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "R1K02_Z1",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <div className="box-1 p-1">
              <BlackContainer
                data={{
                  label: "R1M01T2_PID_SPA",
                  useClass: "greenTxt",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
              <BlackContainer
                data={{
                  label: "R1M01_T2",
                  useClass: "greenTxt mt-2",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <BlackContainer
              data={{
                label: "R1M24_TRIP_TIMER",
                useClass: "greenTxt mt-2",
                unit: "min",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <BlackContainer
          data={{
            label: "R1K02_F2",
            useClass: "greenTxt mr-5",
            unit: "m³/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1S20_P1",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div>
          <div className="d-flex align-items-center justify-content-cente">
            <div className="yellowline-Vr  line-212 ml-auto"></div>
            <div className="squareplustri text-center">
              <div className="mx-auto  mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "S11",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "R1S11_P1",
                    useClass: "greenTxt mt-2",
                    unit: "mm",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
            </div>
          </div>
          <div className="d-flex mt-3 single-text-15 ">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2 mt-1",
                label: "S12",
              }}
            />
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("R1S12")}`} label="R1S12" />
          </div>
        </div>
        <div className="ml-5">
          <div className="d-flex align-items-center justify-content-cente">
            <div className="yellowline-Vr  line-212 ml-auto"></div>
            <div className="squareplustri text-center">
              <div className="mx-auto  mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "S13",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "R1S13_P1",
                    useClass: "greenTxt mt-2",
                    unit: "mm",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="yellowline-Vr downArrow  line-211 ml-auto"></div>
            </div>
          </div>
          <div className="d-flex mt-3 single-text-15">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2 mt-1",
                label: "S14",
              }}
            />
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("R1S14")}`} label="R1S14" />
          </div>
        </div>
        <div className="ml-5">
          <div className="d-flex align-items-center justify-content-cente">
            <div className="yellowline-Vr  line-212 ml-auto"></div>
            <div className="squareplustri text-center">
              <div className="mx-auto  mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "S15",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "R1S15_P1",
                    useClass: "greenTxt mt-2",
                    unit: "mm",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
            </div>
          </div>
          <div className="d-flex mt-3 single-text-15">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2 mt-1",
                label: "S16",
              }}
            />
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("R1S16")}`} label="R1S16" />
          </div>
        </div>
        <div className="ml-5">
          <div className="d-flex align-items-center justify-content-cente">
            <div className="yellowline-Vr  line-212 ml-auto"></div>
            <div className="squareplustri text-center">
              <div className="mx-auto  mt-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "S17",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "R1S17_P1",
                    useClass: "greenTxt mt-2",
                    unit: "mm",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="yellowline-Vr downArrow  line-211 ml-auto"></div>
            </div>
          </div>
          <div className="d-flex mt-3 single-text-15">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2 mt-1",
                label: "S18",
              }}
            />
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("R1S18")}`} label="R1S18" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-16">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R1S20")} `} label="R1S20" />
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <BlackContainer
          data={{
            label: "R1S20_20MIN_TIMER",
            useClass: "greenTxt mt-2 mr-3 ",
            unit: "min",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1S20_S3",
            useClass: "greenTxt mt-2 ml-5",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <div>
          <div className="box-1 p-1">
            <BlackContainer
              data={{
                label: "R1S20_Y1_SPM",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "R1S20_S1",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "R1S20_CONT_STEP_FEEDBACK",
              useClass: "greenTxt mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <div className="box-1 p-1">
            <BlackContainer
              data={{
                label: "R1S20J1_PID_SPA",
                useClass: "greenTxt ",
                unit: "kw",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "R1S20_J1",
                useClass: "greenTxt mt-2",
                unit: "kw",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="box-1 p-1 mt-3">
            <BlackContainer
              data={{
                label: "R1M01T2_PID_SPM",
                useClass: "greenTxt ",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "R1S23_Z1",
                useClass: "greenTxt mt-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <div>
          <PipeWithCircles parentDivClass="hpipecircle position-absolute" text={{ useClass: "text-dark mx-auto", label: "U01" }} />
        </div>
        <div>
          <PipeWithCircles parentDivClass="hpipecircle position-absolute" text={{ useClass: "text-dark mx-auto", label: "U02" }} />
        </div>
      </div>
      <div className="position-absolute single-text-20">
        {/* <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto mb-2",
            label: "SAMPLE TAKEN COUNTER",
          }}
        /> */}
        <PipeWithCircles parentDivClass="hpipecircle position-absolute mt-3" />
      </div>
      <div className="position-absolute single-text-21">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-3",
            label: "U03",
          }}
        />
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R1U03")} `} label="R1U03" />
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mr-3",
            label: "X04",
          }}
        />
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R1X04")} `} label="R1X04" />
      </div>
      <div className="position-absolute single-text-23">
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "R1M24_Y1_SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M24_S1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "R1M14_P1",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1M24_J1",
            useClass: "greenTxt mt-2",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("R1M14M2")} `} label="R1M14M2" text="M" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "M24",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <PipeWithCircles parentDivClass="hpipecircle position-absolute" text={{ useClass: "text-dark mx-auto", label: "U04" }} />
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-5 position-absolute",
            label: "U06",
          }}
        />
      </div>

      <div className="position-absolute single-text-26">
        <div className="box-1 p-1">
          <div className="d-flex">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("R1M09M15_IND")}`} label="R1M09M15_IND" text="M" />
            <MotorCircleDigitalTag className={`dot digital-tag ml-3 ${useColorStatus("R1M09M16_IND")}`} label="R1M09M16_IND" text="M" />
            <MotorCircleDigitalTag className={`dot digital-tag ml-3 ${useColorStatus("R1M09M17_IND")}`} label="R1M09M17_IND" text="M" />
          </div>
          <div className="mt-3 d-flex">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("R1M09M18_IND")}`} label="R1M09M18_IND" text="M" />
            <MotorCircleDigitalTag className={`dot digital-tag ml-3 ${useColorStatus("R1M09M19_IND")}`} label="R1M09M19_IND" text="M" />
            <MotorCircleDigitalTag className={`dot digital-tag ml-3 ${useColorStatus("R1M09M20_IND")}`} label="R1M09M20_IND" text="M" />
            <MotorCircleDigitalTag className={`dot digital-tag ml-3 ${useColorStatus("R1M09M21_IND")}`} label="R1M09M21_IND" text="M" />
          </div>
        </div>
        <div className="box-1 p-1 mt-4">
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "RUP_VIB",
                useClass: "greenTxt mt-1",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ml-2",
                label: "RUP COUNT VIBRATION",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "RUP_KW",
                useClass: "greenTxt mt-1",
                unit: "",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ml-2",
                label: "RUP COUNT KW HIGH",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "R1M01_P1",
            useClass: "greenTxt mt-2",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1M01_T3",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R1M01_T4",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "LUB_RET_OIL_TEMP",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "LUB_TANK_OIL_TEMP",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "R1M01_L2",
              useClass: "greenTxt mt-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M01_L3",
              useClass: "greenTxt mt-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <div className="mr-5">
            <BlackContainer
              data={{
                label: "R1M05_V_X1",
                useClass: "greenTxt mt-5",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "R1M05_A_X1",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "R1M01_X2",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M02_V_X2",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M02_V_X3",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M03_I1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1M03_J1",
              useClass: "greenTxt mt-2",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5 text-center">
          <BlackContainer
            data={{
              label: "RUP_4MM",
              useClass: "greenTxt mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "VIBRATION > 4MM/SEC COUNTER",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29 d-flex">
        <div className="box-1 p-1 d-flex align-self-start">
          <div className="mr-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 mb-2",
                label: "M10",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("R1M05M10_IND")} `} label="R1M05M10_IND" text="M" />
          </div>
          <div className="mr-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 mb-2",
                label: "M11",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag ml-1 ${useColorStatus("R1M05M11_IND")} `} label="R1M05M11_IND" text="M" />
          </div>
          <div className="mr-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 mb-2",
                label: "M12",
              }}
            />

            <MotorCircleDigitalTag className={`dot digital-tag ml-1 ${useColorStatus("R1M05M12_IND")} `} label="R1M05M12_IND" text="M" />
          </div>
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "RM2_GR_OIL_TANK_TEMP",
              useClass: "greenTxt mt-2 ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "GR_HIGH_SP_BRG_TEMP1",
              useClass: "greenTxt mt-2 ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5 box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Temp>260 deg.Bag house trips",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "Pass-1/L temp",
              }}
            />
            <BlackContainer
              data={{
                label: "J1P11_T4_BH",
                useClass: "greenTxt mt-2 ml-4",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mt-2 d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "Pass-1/L temp",
              }}
            />

            <BlackContainer
              data={{
                label: "J1P11_T5_BH",
                useClass: "greenTxt mt-2 ml-4",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mr-3",
            label: "S23",
          }}
        />
        <div className="pipe dotted-pipe">
          <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("R2U22M1")} `} label="R2U22M1" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-31 text-center">
        <PipeWithCircles parentDivClass="hpipecircle position-absolute" text={{ useClass: "text-dark mx-auto", label: "U03" }} />
      </div>
      <div className="position-absolute single-text-32">
        <div className="box-1 p-1">
          <BlackContainer
            data={{
              label: "R1S20J1_PID_SPM",
              useClass: "greenTxt mt-2 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "R1S21_Z1",
              useClass: "greenTxt mt-2 ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-4">
          <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("R2U22M3")} `} label="R2U22M3" text="M" />
          <MotorCircleDigitalTag className={`dot digital-tag mt-2  ml-2 ${useColorStatus("R2U22M4")} `} label="R2U22M4" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <div>
          <div className="d-flex align-items-center justify-content-cente">
            <div className="yellowline-Vr  line-212 ml-auto"></div>
            <div className="squareplustri text-center">
              <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
            </div>
          </div>
          <div className="d-flex mt-3 single-text-15 ">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2 mt-1",
                label: "P34",
              }}
            />
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("H1P34")}`} label="H1P34" />
          </div>
        </div>
        <div className="ml-4">
          <div className="d-flex align-items-center justify-content-cente">
            <div className="yellowline-Vr  line-212 ml-auto"></div>
            <div className="squareplustri text-center">
              <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
            </div>
          </div>
          <div className="d-flex mt-3 single-text-15 ">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2 mt-1",
                label: "P14",
              }}
            />
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("H1P14")}`} label="H1P14" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-34">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("H1P35")} `} label="H1P35" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "P35",
          }}
        />
      </div>
      <div className="position-absolute single-text-35">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("H1P15")} `} label="H1P15" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "P15",
          }}
        />
      </div>
      <div className="position-absolute single-text-36 middle-sqr-container mx-auto d-flex">
        <div className="mx-auto">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "C.F. SILO",
            }}
          />
          <BlackContainer
            data={{
              label: "CF_SILO_TON",
              useClass: "greenTxt mt-2 ",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "H1H01_L4",
              useClass: "greenTxt mt-2 ",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "U22M1",
          }}
        />
        <BlackContainer
          data={{
            label: "R2U22M1_I1",
            useClass: "greenTxt mt-2 ",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "R2U22M2_I1",
            useClass: "greenTxt mt-2 ",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-38 d-flex">
        <div>
          <div className="d-flex align-items-center justify-content-cente">
            <div className="yellowline-Vr  line-212 ml-auto"></div>
            <div className="squareplustri text-center">
              <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
            </div>
          </div>
          <div className="d-flex mt-3 single-text-15 ">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-2 mt-1",
                label: "R2P74",
              }}
            />
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("R2P74")}`} label="R2P74" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-39">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("R2P75")} `} label="R2P75" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "R2P75",
          }}
        />
      </div>
      <div className="position-absolute single-text-40 polygon-shape">
        <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("R1U05_L1")} `} label="R1U05_L1" text="L" />
        <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("R1U05_P2")} `} label="R1U05_P2" text="P" />
      </div>
      <div className="position-absolute single-text-41 mx-auto">
        <MotorCircleDigitalTag className={`dot digital-tag mt-2 ${useColorStatus("LS_CRUSHER_RUNNING")} `} label="LS_CRUSHER_RUNNING" text="M" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "LS CRUSHER",
          }}
        />
      </div>
      <div className="position-absolute single-text-42 pole-shape">
        <MotorCircleDigitalTag className={`dot digital-tag mt-2 ml-1 ${useColorStatus("R1M03")} position-absolute`} label="R1M03" />
      </div>
      <div className="position-absolute single-text-43 text-center">
        <PipeWithCircles parentDivClass="hpipecircle position-absolute" text={{ useClass: "text-dark mx-auto", label: "U21" }} />
      </div>
      <div className="position-absolute single-text-44 pole-shape">
        <MotorCircleDigitalTag className={`dot digital-tag mt-2 ml-1 ${useColorStatus("R1M24")} position-absolute`} label="R1M24" />
      </div>
      <BlackContainer
        data={{
          label: "R1S20_X1",
          useClass: "greenTxt mt-2 position-absolute single-text-45 ",
          unit: "mm/s",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-46 ">
        <BlueContainerWithDynamicBorder useClass={`mx-auto mt-2 mr-4 ${useBorderTagsColorStatus("R1S23")}`} isClickable={true} tagLabel="R1S23" />
      </div>
      <div className="position-absolute single-text-47 ">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus("R1J03_SOV_CMD_IND")}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus("R1J03_SOV_CMD_IND")}`}
          label="R1J03_SOV_CMD_IND"
        />
      </div>
      <div className="position-absolute single-text-48 ">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus("R1K02")}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus("R1K02")}`}
          label="R1K02"
        />
      </div>

      <div className="yellowline-Vr position-absolute line-1"></div>
      <div className="yellowline-Hr position-absolute line-2"></div>
      <div className="yellowline-Vr position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Hr  position-absolute line-6"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Hr  position-absolute line-9"></div>
      <div className="yellowline-Vr  position-absolute line-10"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-11"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-12"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-13"></div>
      <div className="yellowline-Hr   position-absolute line-14"></div>
      <div className="yellowline-Vr   position-absolute line-15"></div>
      <div className="yellowline-Hr position-absolute line-16"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-17"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-18"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-19"></div>
      <div className="yellowline-Vr  position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr upArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Hr  position-absolute line-26"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-27"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-28"></div>
      <div className="yellowline-Vr  position-absolute line-29"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-30"></div>
      <div className="yellowline-Hr   position-absolute line-31"></div>
      <div className="yellowline-Hr   position-absolute line-32"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-33"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-35"></div>
      <div className="yellowline-Hr   position-absolute line-36"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-37"></div>
      <div className="yellowline-Vr   position-absolute line-38"></div>
      <div className="yellowline-Hr   position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-41"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-42"></div>
      <div className="yellowline-Hr   position-absolute line-43"></div>
      <div className="yellowline-Vr position-absolute line-44"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-45"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-46"></div>
      <div className="yellowline-Hr leftarrow  position-absolute line-47"></div>
      <div className="yellowline-Vr  position-absolute line-48"></div>
    </div>
  );
};

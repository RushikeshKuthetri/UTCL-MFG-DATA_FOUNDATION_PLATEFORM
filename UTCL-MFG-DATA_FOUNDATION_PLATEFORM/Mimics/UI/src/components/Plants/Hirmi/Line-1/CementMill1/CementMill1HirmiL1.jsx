import { TextContainerWithWrapWord, BlackContainer, MimicCaret, TransparentBoxWithGate, BlueContainerWithDynamicBorder, MotorCircleDigitalTag, PipeWithCircles } from "../../../../index";
import { useBorderTagsColorStatus, useCaretColorStatus, useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

export const CementMill1HirmiL1 = () => {
  return (
    <div className="CementMillHirmiL1 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 box-1 p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GA TANK LEVEL",
          }}
        />
        <div className="d-flex mt-2 text-center">
          <BlackContainer
            data={{
              label: "Z2_GA_TANK_LVL",
              useClass: "greenTxt",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2_GA_TANK_LVL_LTR",
              useClass: "greenTxt ml-3",
              unit: "lit",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 ">
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "OPC",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-1  ${useColorStatus("CM1_OPC_SEL")}`} label="CM1_OPC_SEL" text="O" />
        </div>
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PPC",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-1  ${useColorStatus("CM1_PPC_SEL")}`} label="CM1_PPC_SEL" text="P" />
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div className="box-1 p-2">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Feed Towards Mill O/L",
              }}
            />
            <MotorCircleDigitalTag className={`square digital-tag ml-3  ${useColorStatus("CM_FLY_FEED_OL_S01")}`} label="CM_FLY_FEED_OL_S01" text="" />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Feed Towards Mill l/L",
              }}
            />
            <MotorCircleDigitalTag className={`square digital-tag ml-3  ${useColorStatus("CM_FLY_FEED_IL_S01")}`} label="CM_FLY_FEED_IL_S01" text="" />
          </div>
        </div>
        <div className="d-flex mt-3">
          <BlackContainer
            data={{
              label: "CM_K31BF4_PT",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_K31BF4_DPT",
              useClass: "greenTxt ml-4",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K31BF5",
          }}
        />
        <div className="d-flex align-items-center justify-content-cente">
          <div className="squareplustri ">
            <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
          </div>
        </div>
        <div className="d-flex ml-2 mt-3">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("CM_K31RA5")}`} label="CM_K31RA5" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "K31RA5",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5">
        <div className="ml-5 text-center">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_K31FNC")} `} label="CM_K31FNC" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K31FNC",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CM_K31BF5_PT1",
            useClass: "greenTxt mt-3",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K31BF5_DPT",
            useClass: "greenTxt mt-3",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K31BF4",
          }}
        />
        <div className="d-flex align-items-center justify-content-cente">
          <div className="squareplustri ">
            <div className="yellowline-Vr  position-absolute line-1 ml-auto"></div>
          </div>
        </div>
        <div className="d-flex ml-2 mt-2">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("CM_K31RA4")}`} label="CM_K31RA4" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "K31RA4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7 text-center">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_K31FNB")} `} label="CM_K31FNB" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K31FNB",
          }}
        />
      </div>
      <div className="position-absolute single-text-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mr-4",
            label: "FROM  561 SR1",
          }}
        />
        <div className="d-flex align-items-center justify-content-cente">
          <div className="squareplustri ">
            <div className="yellowline-Vr downArrow position-absolute line-1 ml-auto"></div>
          </div>
        </div>
        <div className=" single-text-1">
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "561GA1",
              }}
            />
            <MotorCircleDigitalTag className={`square digital-tag mt-1 ml-2 ${useColorStatus("CM_561GA1")}`} label="CM_561GA1" text="" />
          </div>
          <div className="d-flex  mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "561RA1",
              }}
            />
            <MotorCircleDigitalTag className={`circle-img digital-tag  ml-1 mt-1 ${useFanImgTagsColorStatus("CM_561RA1")}`} label="CM_561RA1" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "PV",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_Z1J53_I01",
                useClass: "greenTxt mt-2 ml-3",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "OUT",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_561RA1_SPSPM",
                useClass: "greenTxt mt-2 ml-3",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "CM_561RA1_II",
              useClass: "greenTxt mt-2 ml-auto",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CM_K31FM1",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531WFA01I11F01Y1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_531WFA01I11F16",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_K31FM1_FI",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM1_PPC_K31FM1_FEED_COUNTER_TODAY",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="square mt-1 grey-color"></div>
        {/* <MotorCircleDigitalTag className={``} label="CM_531WF2" /> */}
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "561AS1",
          }}
        />
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="text-center mr-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K31FM1",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1  ${useColorStatus("CM_K31FM1")}`} label="CM_K31FM1" text="M" />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K31AS1",
            }}
          />
          <div className="square mt-1 grey-color"></div>
          {/* <MotorCircleDigitalTag className={`square digital-tag mt-1  ${useColorStatus("CM_531WF2")}`} label="CM_531WF2" text="" /> */}
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div className="square mt-1 grey-color"></div>
        {/* <MotorCircleDigitalTag className={`square digital-tag mt-1  ${useColorStatus("CM_531WF2")}`} label="CM_531WF2" text="" /> */}
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "K31ASS",
          }}
        />
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div className="square mt-1 grey-color"></div>
        {/* <MotorCircleDigitalTag className={`square digital-tag mt-1  ${useColorStatus("CM_531WF2")}`} label="CM_531WF2" text="" /> */}
      </div>
      <div className="asset-67 position-absolute single-text-14 "></div>
      <div className="position-absolute single-text-15 text-center ">
        <div className="yellowline-Hr  line-2"></div>
        <div className="yellowline-Vr position-absolute upArrow line-3"></div>

        <div className="d-flex">
          <div>
            <div className="yellowline-Vr  line-1"></div>

            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_K31FNF")} `} label="CM_K31FNF" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K31FNF",
              }}
            />
          </div>
          <div className="ml-2">
            <div className="yellowline-Vr  line-1"></div>
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_K31FNG")} `} label="CM_K31FNG" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K31FNG",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-16 text-center ">
        <div className="yellowline-Hr  line-2"></div>
        <div className="yellowline-Vr position-absolute upArrow line-3"></div>

        <div className="d-flex">
          <div>
            <div className="yellowline-Vr  line-1"></div>

            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_K31FND")} `} label="CM_K31FND" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K31FND",
              }}
            />
          </div>
          <div className="ml-2">
            <div className="yellowline-Vr  line-1"></div>
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_K31FNE")} `} label="CM_K31FNE" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K31FNE",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-17 text-center ">
        <div className="yellowline-Hr  line-2"></div>
        <div className="yellowline-Vr position-absolute upArrow line-3"></div>

        <div className="d-flex">
          <div>
            <div className="yellowline-Vr  line-1"></div>

            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_571FN4")} `} label="CM_571FN4" />
          </div>
          <div className="ml-2">
            <div className="yellowline-Vr  line-1"></div>
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_571FN4A")} `} label="CM_571FN4A" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "571AS2",
            }}
          />
          <div className="square mt-1 grey-color"></div>
          {/* <MotorCircleDigitalTag className={`square digital-tag mt-1  ${useColorStatus("CM_531WF2")}`} label="CM_531WF2" text="" /> */}
        </div>
      </div>
      <div className="position-absolute single-text-19">
        <table className=" ">
          <tbody>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "CM1 SPEC POWER",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM1_SPEC_POWER",
                    useClass: "greenTxt",
                    unit: "kWh",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "CM1 OPC BLAIN",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM1_OPC_LSF_QCX",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "CM1 PPC BLAIN",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM1_PPC_LSF_QCX",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "CM1 OPC R45",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM1_OPC_R45",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "CM1 PPC R45",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM1_PPC_R45",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "CM1 OPC R90",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM1_OPC_R90",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "CM1 OPC LIME",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM1_OPC_LIME",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "CM1 PPC LIME",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM1_PPC_LIME",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {/* <table className=" mt-3">
          <tbody>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "CM1 OPC RUN HRS",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "SWA01_S1",
                    useClass: "greenTxt",
                    unit: "h24",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "CM1 PPC RUN HRS",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "SWA01_S1",
                    useClass: "greenTxt",
                    unit: "h  25",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
      <div className="position-absolute single-text-20">
        <div className="d-flex ml-4 mb-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "561FM1",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("CM_561FM1")}`} label="CM_561FM1" text="M" />
        </div>
        <div className="d-flex mt-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "U1U08",
            }}
          />
          <BlackContainer
            data={{
              label: "U1U08_I1",
              useClass: "greenTxt ml-4 mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "Z1M01_T9_MILLSIDE",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z1M01_T9_MOTORSIDE",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z1K03_F1",
              useClass: "greenTxt mt-2",
              unit: "l/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z1K02PIDSPA",
              useClass: "greenTxt mt-4",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z1M01_T2",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z1K02PIDSPM",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z1K02PIDSPM",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z1M01_T2",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "CM_R_INP_RP01_G01_DIFF",
              useClass: "greenTxt mt-2",
              unit: "℃35",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "Z1M10_P9",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex  mt-2">
            <div>
              <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("Z1M10")} `} label="Z1M10" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "10",
                }}
              />
            </div>
            <div className="ml-3">
              <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("Z1M11")} `} label="Z1M11" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "11",
                }}
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "Z1M11_P9",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="middle-sqr-container position-absolute single-text-22 text-center">
        <BlackContainer
          data={{
            label: "CM_K31BI1_WI",
            useClass: "greenTxt mt-1",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K31BI1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "DRY FLY ASH",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HWI",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-23 text-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K31DV1",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-1 box-1 ${useColorStatus("CM_K31DV1")}`} label="CM_K31DV1" text="" />
        </div>
        <div className="ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K31SG1",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-1 box-1  ${useColorStatus("CM_K31SG1")}`} label="CM_K31SG1" text="" />
        </div>
      </div>
      <div className="bagHouse position-absolute single-text-24 text-center pt-1  ">
        <BlackContainer
          data={{
            label: "CALCULATED_BH_DP",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1BH_P1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <BlackContainer
          data={{
            label: "Z1P11_P2",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1P11_T2",
            useClass: "greenTxt mt-2",
            unit: "degC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1P15_I2",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "Z1P11_P2",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <div className="mt-4">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_Z1P15")} `} label="CM_Z1P15" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "P15",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "Z1P15_X1",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1P15_Y1SPA",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1P15_Y1AI01",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1P15_Y1SPM",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1P15_S1",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1P15_I2",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-27 d-lfex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("Z1P13")}`} label="Z1P13" text="P13" />
      </div>
      <div className="pipe  position-absolute single-text-28"></div>
      <div className="position-absolute single-text-29 text-center">
        <div className="mt-2">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_K31BL1_M01")} `} label="CM_K31BL1_M01" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K31BL1",
            }}
          />
        </div>
        <div className="mt-5">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_K31BL1A")} `} label="CM_K31BL1A" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K31BL1A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30">
        <BlackContainer
          data={{
            label: "CM_K31FM1_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_K31BL1_PT",
            useClass: "greenTxt ml-5",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-31 text-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "K31DG1",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-1 box-1 ${useColorStatus("CM_K31DG1")}`} label="CM_K31DG1" text="" />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "Z1M01_P1",
            useClass: "greenTxt  mt-3",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "CEMENT MILL-1",
            }}
          />
          <BlackContainer
            data={{
              label: "Z1M01_X1",
              useClass: "greenTxt ml-2 mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "Z1LUBPL_PT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "M3",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("Z1M14M3")}`} label="Z1M14M3" text="M" />
        </div>
        <div className="d-flex mt-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "M2",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-2 ${useColorStatus("Z1M14M2")}`} label="Z1M14M2" text="M" />
        </div>
      </div>
      <div className=" position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "Z1M01_P2",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1M12_P9",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex  mt-2">
          <div>
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("Z1M12")} `} label="Z1M12" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "12",
              }}
            />
          </div>
          <div className="ml-3">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("Z1M13")} `} label="Z1M13" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "13",
              }}
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "Z1M13_P9",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1LUBPR_PT",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1M01_T8_LEFTSIDE",
            useClass: "greenTxt mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1M01_T8_RIGHTSIDE",
            useClass: "greenTxt mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1K04PIDSPA",
            useClass: "greenTxt mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1M01_T3_NEW",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1K04PIDSPM",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-35">
        <div className="square mt-1 grey-color"></div>
        {/* <MotorCircleDigitalTag className={`square digital-tag mt-1  ${useColorStatus("CM_531WF2")}`} label="CM_531WF2" text="" /> */}
      </div>
      <div className="position-absolute single-text-36">
        <div className="d-flex mb-5">
          <MotorCircleDigitalTag className={`dot digital-tag mt-1  ${useColorStatus("Z1M08")}`} label="Z1M08" text="M" />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-3  ${useColorStatus("Z1M09")}`} label="Z1M09" text="M" />
        </div>
        <div className="d-flex mt-5 mb-2">
          <MotorCircleDigitalTag className={`dot digital-tag mt-1  ${useColorStatus("Z1M20")}`} label="Z1M20" text="M" />
          <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-3  ${useColorStatus("Z1M21")}`} label="Z1M21" text="M" />
        </div>
        <BlackContainer
          data={{
            label: "Z1M05_P9_PR",
            useClass: "greenTxt ml-2 mt-5",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <BlackContainer
          data={{
            label: "Z1M03_J1",
            useClass: "greenTxt mt-2",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1M03_I1",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag className={`dot digital-tag mt-1  ${useColorStatus("Z1M03")}`} label="Z1M03" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "M03",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "Z1M06_J1",
            useClass: "greenTxt mt-4",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Z1M06_I1",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag className={`dot digital-tag mt-1  ${useColorStatus("Z1M03")}`} label="Z1M03" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1",
              label: "M03",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-38 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "K31AS3",
            }}
          />
          <div className="square mt-1 grey-color"></div>
          {/* <MotorCircleDigitalTag className={`square digital-tag mt-1  ${useColorStatus("CM_531WF2")}`} label="CM_531WF2" text="" /> */}
        </div>
      </div>
      <div className="position-absolute single-text-39 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "Z1M01_T3_REV_TIMER",
              useClass: "greenTxt  mt-2",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z1AP_PT",
              useClass: "greenTxt  mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <div>
            <MotorCircleDigitalTag className={`line-circle digital-tag mt-1  ${useColorStatus("CM_571FN3")}`} label="CM_571FN3" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "571FN3",
              }}
            />
          </div>
          <div className="ml-3">
            <MotorCircleDigitalTag className={`line-circle digital-tag mt-1 ml-3  ${useColorStatus("CM_571FN3A")}`} label="CM_571FN3A" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "571FN3A",
              }}
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "CM_Z1J53_I01",
            useClass: "greenTxt  mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40 d-flex">
        <div>
          <div className="connector-both-side">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("Z1K03")} `} label="Z1K03" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "K03",
            }}
          />
          <div className="yellowline-Vr line-1"></div>
        </div>
        <div>
          <div className="connector-both-side">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("Z1K05M1")} `} label="Z1K05M1" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "K05-M1",
            }}
          />
          <div className="yellowline-Vr line-2"></div>
        </div>
        <div>
          <div className="connector-both-side">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("Z1K05")} `} label="Z1K05" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-3",
              label: "K05",
            }}
          />

          <BlackContainer
            data={{
              label: "Z1M01_T3_NEW",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z1K04_Z1",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <div className="yellowline-Vr line-3"></div>
        </div>
      </div>
      <div className="position-absolute single-text-41">
        <table className=" ">
          <tbody>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "SILO 1",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "OPC",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "SILO1_LEVEL",
                    useClass: "greenTxt",
                    unit: "m",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "SILO 2",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "PPC",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "SILO2_LEVEL",
                    useClass: "greenTxt",
                    unit: "m",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "SILO 3",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "PCC",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "SILO3_LEVEL",
                    useClass: "greenTxt",
                    unit: "m",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "SILO 4",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "FA",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "Z1L04_L2",
                    useClass: "greenTxt",
                    unit: "m",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "SILO 5",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "PPC",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "SILO5_LEVEL",
                    useClass: "greenTxt",
                    unit: "m",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "SILO 6",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "OPC",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "SILO6_LEVEL",
                    useClass: "greenTxt",
                    unit: "m",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="position-absolute single-text-42">
        <table className=" ">
          <tbody>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "Z2L53W1",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2L53_W1",
                    useClass: "greenTxt",
                    unit: "t",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "Z2J51I1",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "Z2J51_I1",
                    useClass: "greenTxt",
                    unit: "A",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="position-absolute single-text-43 box-1 p-2 d-flex">
        <div>
          <div className="d-flex align-items-center justify-content-cente">
            <div className="squareplustri ">
              <div className="yellowline-Vr downArrow position-absolute line-1 ml-auto"></div>
            </div>
          </div>
          <div className="squareplustri"></div>
          <div className="d-flex ml-2 mt-2">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("Z1P24")}`} label="Z1P24" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2 mt-1",
                label: "P24",
              }}
            />
          </div>
          <div className="square mt-3 grey-color"></div>
          {/* <MotorCircleDigitalTag className={`square digital-tag mt-3  ${useColorStatus("CM_531WF2")}`} label="CM_531WF2" text="" /> */}
          <div className="ml-3">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("Z1S26M1")} `} label="Z1S26M1" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "S26M1",
              }}
            />
          </div>
        </div>
        <div className="">
          <div className="d-flex">
            <div>
              <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("Z1P105")} `} label="Z1P105" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "Z1P105",
                }}
              />
            </div>
            <div className="ml-3">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SLAG FEEDING",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SYSTEM",
                }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="mt-4 loadingtruck"></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SLAG",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "BOWSER",
              }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-44">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("CM_Z1P14")}`} label="CM_Z1P14" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "P14",
          }}
        />
      </div>
      <div className="position-absolute single-text-45">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-1",
            label: "J53",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag mt-1 ml-3 ${useColorStatus("CM_Z1J53")}`} label="CM_Z1J53" text="M" />
      </div>
      <BlackContainer
        data={{
          label: "Z1K05_F1",
          useClass: "greenTxt  mt-2 position-absolute single-text-46",
          unit: "l/min",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-47 text-center ">
        <div className="d-flex">
          <div>
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-3",
                  label: "561FN6",
                }}
              />
              <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_561FN6")} `} label="CM_561FN6" />
            </div>
          </div>
          <div className="ml-2">
            <div className="d-flex">
              <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_561FN7")} `} label="CM_561FN7" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-3",
                  label: "561FN7",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-48 text-center">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CM_561FN7A")} `} label="CM_561FN7A" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "561FN7A",
          }}
        />
      </div>
      <div className="position-absolute single-text-49">
        <BlackContainer
          data={{
            label: "CM_561FM1_FI",
            useClass: "greenTxt  mt-2 ",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561FM1_PT",
            useClass: "greenTxt  mt-2 ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561FM1_TP",
            useClass: "greenTxt  mt-2 ",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "TO 561FBM1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "INLET",
          }}
        />
      </div>
      <div className="position-absolute single-text-50 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2 mr-2",
              label: "K02",
            }}
          />
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus("Z1K02")}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus("Z1K02")}`}
            label="Z1K02"
          />
        </div>
        <div className="d-flex">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus("Z1K04")}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus("Z1K04")}`}
            label="Z1K04"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2 ml-2",
              label: "K04",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-51 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "K31BV1A",
          }}
        />
        <MimicCaret
          parentClass="tringle-item d-flex mt-2 ml-4"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("CM_K31BV1A")}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus("CM_K31BV1A")}`}
          label="CM_K31BV1A"
        />
      </div>
      <div className="position-absolute single-text-52 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-1",
            label: "K31BV1",
          }}
        />
        <MimicCaret
          parentClass="tringle-item d-flex mt-2 ml-4"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("CM_K31BV1")}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus("CM_K31BV1")}`}
          label="CM_K31BV1"
        />
      </div>

      <div className="yellowline-Hr  position-absolute  line-2"></div>
      <div className="yellowline-Vr upArrow position-absolute  line-3"></div>
      <div className="yellowline-Hr  position-absolute  line-4"></div>
      <div className="yellowline-Vr upArrow position-absolute  line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute  line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute  line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute  line-8"></div>
      <div className="yellowline-Vr  position-absolute  line-9"></div>
      <div className="yellowline-Hr  position-absolute  line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute  line-11"></div>
      <div className="yellowline-Hr  position-absolute  line-12"></div>
      <div className="yellowline-Vr  position-absolute  line-13"></div>
      <div className="yellowline-Hr  position-absolute  line-14"></div>
      <div className="yellowline-Vr downArrow  position-absolute  line-15"></div>
      <div className="yellowline-Vr downArrow  position-absolute  line-16"></div>
      <div className="yellowline-Hr   position-absolute  line-17"></div>
      <div className="yellowline-Vr   position-absolute  line-18"></div>
      <div className="yellowline-Hr rightarrow  position-absolute  line-19"></div>
      <div className="yellowline-Hr   position-absolute  line-20"></div>
      <div className="yellowline-Vr upArrow  position-absolute  line-21"></div>
      <div className="yellowline-Vr upArrow  position-absolute  line-22"></div>
      <div className="yellowline-Hr   position-absolute  line-23"></div>
      <div className="yellowline-Hr   position-absolute  line-24"></div>
      <div className="yellowline-Hr   position-absolute  line-25"></div>
      <div className="yellowline-Vr upArrow  position-absolute  line-26"></div>
      <div className="yellowline-Vr   position-absolute  line-27"></div>
      <div className="yellowline-Hr position-absolute  line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute  line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute  line-30"></div>
      <div className="yellowline-Hr  position-absolute  line-31"></div>
      <div className="yellowline-Hr  position-absolute  line-32"></div>
      <div className="yellowline-Vr  position-absolute  line-33"></div>
      <div className="yellowline-Hr  position-absolute  line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute  line-35"></div>
      <div className="yellowline-Vr downArrow position-absolute  line-36"></div>
      <div className="yellowline-Vr downArrow position-absolute  line-37"></div>
      <div className="yellowline-Hr position-absolute  line-38"></div>
      <div className="yellowline-Hr position-absolute  line-39"></div>
      <div className="yellowline-Vr upArrow position-absolute  line-40"></div>
      <div className="yellowline-Vr upArrow position-absolute  line-41"></div>
      <div className="yellowline-Vr upArrow position-absolute  line-42"></div>
      <div className="yellowline-Hr  position-absolute  line-43"></div>
      <div className="yellowline-Hr rightarrow position-absolute  line-44"></div>
      <div className="yellowline-Hr leftarrow position-absolute  line-45"></div>
      <div className="yellowline-Hr  position-absolute line-46"></div>
      <div className="yellowline-Hr  position-absolute line-47"></div>
      <div className="yellowline-Hr leftarrow position-absolute  line-48"></div>
      <div className="yellowline-Vr  position-absolute line-49"></div>
    </div>
  );
};

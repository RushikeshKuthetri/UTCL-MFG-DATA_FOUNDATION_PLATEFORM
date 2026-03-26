import {
  BlackContainer,
  LinkButton,
  MotorCircleDigitalTag,
  PipeWithCircles,
} from "../../../../index";
import { useColorStatus, useImgColorStatus } from "../../../../../utils";

export const VRMOperationMaihar = () => {
  return (
    <div className="VRMOperationMaihar  w-100 h-100 position-relative">
      <div className="text-center  position-absolute pipe-1">
        <div className="hpipecircle ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("V23BC3")}`}
            label="V23BC3"
            text="M"
          />
          <span className="text">BC3</span>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus("V23BC3_PC")}`}
            label="V23BC3_PC"
            text="PC"
          />
          <span className="greenDot bg-secondary"></span>
        </div>
      </div>
      <div className="text-center  position-absolute pipe-2">
        <div className="hpipecircle ">
          <span className="dot grey-color">M</span>
          <span className="text">BC2</span>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus("V23BC2_PC")}`}
            label="V23BC2_PC"
            text="PC"
          />
          <span className="greenDot bg-secondary"></span>
        </div>
      </div>
      <div className="text-center  position-absolute pipe-3">
        <div className="hpipecircle ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("GR VRM 03/V23BC1")}`}
            label="GR VRM 03/V23BC1"
            text="M"
          />
          <span className="text">BC1</span>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus("V23BC1_PC")}`}
            label="V23BC1_PC"
            text="PC"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus("V23MT_FB")}`}
            label="V23MT_FB"
            text="MT"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("V23MSM")}`}
            label="V23MSM"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("V23MSMGT")}`}
            label="V23MSMGT"
            text="M"
          />
          <span className="greenDot bg-secondary"></span>
        </div>
      </div>
      <div className="text-center  position-absolute pipe-4">
        <div className="hpipecircle ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("M23L8")}`}
            label="M23L8"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus("V23L8_PC")}`}
            label="V23L8_PC"
            text="PC"
          />
          <span className="text">L8</span>
          <span className="greenDot bg-secondary"></span>
        </div>
      </div>
      <div className="text-center  position-absolute pipe-5">
        <div className="hpipecircle ">
          <span className="greenDot bg-secondary"></span>
          <span className="text">L7</span>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus("V23L7_PC")}`}
            label="V23L7_PC"
            text="PC"
          />

          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("V23L7")}`}
            label="V23L7"
            text="M"
          />
        </div>
      </div>
      <div className="text-center  position-absolute pipe-6">
        <div className="text">VRM SIDE</div>
        <div className="hpipecircle mt-1">
          <span className="greenDot bg-secondary"></span>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus("V23L8_PC")}`}
            label="V23L8_PC"
            text="PC"
          />
          <span className="text">L8</span>

          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("V23L8")}`}
            label="V23L8"
            text="M"
          />
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9"></div>
      <div className="pipeHr position-absolute pipe-10"></div>
      <div className="pipeHr position-absolute pipe-11"></div>
      <div className="pipeVr position-absolute pipe-12"></div>
      <div className="pipeVr position-absolute pipe-13"></div>
      <div className="pipeVr position-absolute pipe-14"></div>
      <div className="pipeVr position-absolute pipe-15"></div>
      <div className="pipeVr position-absolute pipe-16"></div>
      <div className="pipeVr position-absolute pipe-17"></div>
      <div className="pipeVr position-absolute pipe-18"></div>
      <div className="pipeVr position-absolute pipe-19"></div>
      <div className="pipeVr position-absolute pipe-20"></div>
      <div className="pipeVr position-absolute pipe-21"></div>
      <div className="pipeVr position-absolute pipe-22"></div>
      <div className="pipeVr position-absolute pipe-23"></div>
      <div className="pipeHr position-absolute pipe-24"></div>
      <div className="pipeHr position-absolute pipe-25"></div>
      <div className="text-center  position-absolute pipe-26">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleText: "M",
            secondCircleClass: `dot digital-tag ${useColorStatus("V23CFW16")}`,
            secondCircleLabel: "V23CFW16",
          }}
        />
      </div>
      <div className="text-center  position-absolute pipe-27">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleText: "M",
            secondCircleClass: `dot digital-tag ${useColorStatus("V23CFW15")}`,
            secondCircleLabel: "V23CFW15",
          }}
        />
      </div>
      <div className="text-center  position-absolute pipe-28">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleText: "M",
            secondCircleClass: `dot digital-tag ${useColorStatus("V23CFW14")}`,
            secondCircleLabel: "V23CFW14",
          }}
        />
      </div>
      <div className="text-center  position-absolute pipe-29">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleText: "M",
            secondCircleClass: `dot digital-tag ${useColorStatus("V23CFW13")}`,
            secondCircleLabel: "V23CFW13",
          }}
        />
      </div>
      <div className="text-center  position-absolute pipe-30">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleText: "M",
            secondCircleClass: `dot digital-tag ${useColorStatus("V23CFW12")}`,
            secondCircleLabel: "V23CFW12",
          }}
        />
      </div>
      <div className="pipeVr position-absolute pipe-31"></div>
      <div className="pipeVr position-absolute pipe-32"></div>
      <div className="pipeVr position-absolute pipe-33"></div>
      <div className="pipeVr position-absolute pipe-34"></div>
      <div className="pipeVr position-absolute pipe-35"></div>
      <div className="pipeVr position-absolute pipe-36"></div>
      <div className="text-center  position-absolute pipe-37">
        <div className="hpipecircle "></div>
      </div>
      <div className="text-center  position-absolute pipe-38">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleText: "M",
            firstCircleClass: `dot digital-tag ${useColorStatus(
              "V23ELVSMPLR"
            )}`,
            firstCircleLabel: "V23ELVSMPLR",
          }}
        />
      </div>
      <div className="yellowline-Vr   position-absolute pipe-39"></div>
      <div className="yellowline-Vr  downArrow position-absolute pipe-40"></div>
      <div className="yellowline-Vr  downArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr   position-absolute pipe-42"></div>
      <div className="yellowline-Vr   position-absolute pipe-43"></div>
      <div className="yellowline-Vr   position-absolute pipe-44"></div>
      <div className="yellowline-Vr   position-absolute pipe-45"></div>
      <div className="yellowline-Hr   position-absolute pipe-46"></div>
      <div className="yellowline-Vr downArrow  position-absolute pipe-47"></div>
      <div className="bigContainer position-absolute single-text-1 text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("V23M1S")}`}
          label="V23M1S"
        />
        <div className="text">SEP</div>
        <div className="text mt-2">MILL DP</div>
        <div className="text">
          <BlackContainer
            data={{
              label: "23MILL DP",
              useClass: "greenTxt mx-auto text mt-1",
              unit: "MMWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text mt-2">VRM</div>
      </div>
      <div className="containerImage position-absolute single-text-2 text-center">
        <div className="text mt-2">
          <BlackContainer
            data={{
              label: "23DP01",
              useClass: "greenTxt mx-auto text",
              unit: "MMWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-3 text-center">
        <div>
          <div className="containerImage">
            <div className="mt-1">
              <BlackContainer
                data={{
                  label: "V23HPR16_LVL",
                  useClass: "greenTxt mx-auto text mt-1",
                  unit: "MTRS",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="text">FEEDABLE</div>
            <div className="text">CFW16</div>
          </div>
        </div>
        <div>
          <div className="containerImage">
            <div className="mt-1">
              <BlackContainer
                data={{
                  label: "V23HPR15_LVL",
                  useClass: "greenTxt mx-auto text mt-1",
                  unit: "MTRS",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="text">FEEDABLE</div>
            <div className="text">CFW15</div>
          </div>
        </div>
        <div>
          <div className="containerImage">
            <div className="mt-1">
              <BlackContainer
                data={{
                  label: "V23HPR14_LVL",
                  useClass: "greenTxt mx-auto text mt-1",
                  unit: "MTRS",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="text">HIGH GRADE</div>
            <div className="text">CFW14</div>
          </div>
        </div>
        <div>
          <div className="containerImage">
            <div className="mt-1">
              <BlackContainer
                data={{
                  label: "V23HPR13_LVL",
                  useClass: "greenTxt mx-auto text mt-1",
                  unit: "MTRS",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="text">LATERITE</div>
            <div className="text">CFW13</div>
          </div>
        </div>
        <div>
          <div className="containerImage">
            <div className="mt-1">
              <BlackContainer
                data={{
                  label: "V23HPR12_LVL",
                  useClass: "greenTxt mx-auto text mt-1",
                  unit: "MTRS",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="text">LOW GRADE</div>
            <div className="text">CFW12</div>
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-4 text-center">
        <BlackContainer
          data={{
            label: "23CFW16_FEED",
            useClass: "greenTxt mx-auto text",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "23CFW15_FEED",
            useClass: "greenTxt mx-auto text",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "23CFW14",
            useClass: "greenTxt mx-auto text",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "23CFW13_FEED",
            useClass: "greenTxt mx-auto text",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "23CFW12",
            useClass: "greenTxt mx-auto text",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-9 text-center">
        <div className="d-flex gap">
          <div className="text">RG BRG 1</div>
          <BlackContainer
            data={{
              label: "V23RT27",
              useClass: "greenTxt mx-auto  text",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap">
          <div className="text">RG BRG 2</div>
          <BlackContainer
            data={{
              label: "V23RT28",
              useClass: "greenTxt mx-auto  text",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap">
          <div className="text">RG OIL TEMP</div>
          <BlackContainer
            data={{
              label: "V23RGLTOT",
              useClass: "greenTxt mx-auto text",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="border p-1 position-absolute single-text-10 text-center">
        <div className="text">EXH FAN</div>
        <BlackContainer
          data={{
            label: "_23VIBR02",
            useClass: "greenTxt mx-auto mt-2 text",
            unit: "microM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_V23F1_SPRS_RPM1",
            useClass: "greenTxt mx-auto mt-2 text",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "V23F1_SP_PROXY",
            useClass: "greenTxt mx-auto mt-1 text",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "23F1_KW",
            useClass: "greenTxt mx-auto mt-1 text",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <div className="text">V23F1 SPRSON</div>
        <div className="text">ROTOR OPEN FLT</div>
      </div>
      <div className="border p-1 position-absolute single-text-11 text-center">
        <div className="text">PUMPS & HEATERS</div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("V23M1P2")}`}
            label="V23M1P2"
          />
          <div>
            <div className="d-flex gap text-center">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "V23M1P3"
                )}`}
                label="V23M1P3"
              />
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "V23M1P4"
                )}`}
                label="V23M1P4"
              />
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "V23M1P5"
                )}`}
                label="V23M1P5"
              />
            </div>
            <div className="text text-center">RG LUB PUMP</div>
          </div>
          <div className="text-center">
            <div className="d-flex gap text-center">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "V23M1P6"
                )}`}
                label="V23M1P6"
              />
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "V23M1P7"
                )}`}
                label="V23M1P7"
              />
            </div>
            <div className="text text-center">ROL TNS PUMP</div>
          </div>
          <div className="text-center">
            <div className=" text-center">
              <BlackContainer
                data={{
                  label: "RLGP_PRS_IO",
                  useClass: "greenTxt mx-auto mt-2 text",
                  unit: "Ton",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="text text-center">ROL TNS PRS</div>
          </div>
          <div className="text-center">
            <div className=" text-center">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "V23M1P1"
                )}`}
                label="V23M1P1"
              />
            </div>
            <div className="text text-center">ROLLER LUB</div>
          </div>
          <div className="text-center">
            <div className=" text-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("V23M1PH1")}`}
                label="V23M1PH1"
                text="M"
              />
            </div>
            <div className="text text-center">PH1</div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-12 text-center">
        <div className="text">MILL PID</div>

        <div className="border p-1">
          <BlackContainer
            data={{
              label: "V23_FEED_PID",
              useClass: "greenTxt mx-auto text",
              unit: "MMWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "V23_FEED_PID",
              useClass: "greenTxt mx-auto mt-1 text",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-13 text-center">
        <div className="text">SEP SP</div>

        <div className="border p-1">
          <BlackContainer
            data={{
              label: "_23SEP_SP1",
              useClass: "greenTxt mx-auto  text",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "23SP01",
              useClass: "greenTxt mx-auto mt-1 text",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-14 text-center">
        <div className="border p-1">
          <BlackContainer
            data={{
              label: "PID_23ZI06",
              useClass: "greenTxt mx-auto  text",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PID_23ZI06",
              useClass: "greenTxt mx-auto mt-1 text",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-15 text-center">
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("V23WP1")}`}
            label="V23WP1"
          />
          <div className="text">WP1</div>
        </div>
        <div className="d-flex gap">
          <div className="text">WP2</div>

          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("V23WP2")}`}
            label="V23WP2"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-16 text-center">
        <div className="border p-1">
          <div className="text">TOTAL FEED</div>
          <BlackContainer
            data={{
              label: "VRM TOTAL FEED",
              useClass: "greenTxt mx-auto  text",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17 text-center d-flex">
        <BlackContainer
          data={{
            label: "V23RT29",
            useClass: "greenTxt mx-auto mt-2 text",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "V23RT26",
            useClass: "greenTxt mx-auto mt-2 text",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "23FSW",
            useClass: "greenTxt mx-auto mt-2 text",
            unit: "m³/Hr",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18 text-center d-flex">
        <div className="text">ELV1</div>
        <BlackContainer
          data={{
            label: "23ELEV_KW",
            useClass: "greenTxt mx-auto text",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("V23ELV_BSS1")}`}
          label="V23ELV_BSS1"
          text="BSS1"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("V23ELV2_BSS2")}`}
          label="V23ELV2_BSS2"
          text="BSS2"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("V23ELV2_BSS3")}`}
          label="V23ELV2_BSS3"
          text="BSS3"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("V23ELV2_BSS4")}`}
          label="V23ELV2_BSS4"
          text="BSS4"
        />
      </div>
      <div className="position-absolute single-text-19 text-center d-flex">
        <div>
          <div className="text">DE</div>
          <BlackContainer
            data={{
              label: "V23ELV_BRG_DE_TEMP",
              useClass: "greenTxt mx-auto text",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="text">NDE</div>
          <BlackContainer
            data={{
              label: "_V23ELV_BRG_NDE_TEMP",
              useClass: "greenTxt mx-auto  text",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-20 text-center d-flex">
        <div>
          <div className="text">LINE FREQ</div>
          <BlackContainer
            data={{
              label: "VMLINE_FREQ",
              useClass: "greenTxt mx-auto text",
              unit: "HZ",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="text">VRM IO TEMP</div>
          <BlackContainer
            data={{
              label: "VRM_IO_ROOM_TEMP",
              useClass: "greenTxt mx-auto  text",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21 text-center d-flex">
        <div>
          <BlackContainer
            data={{
              label: "23TT03",
              useClass: "greenTxt mx-auto text",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap">
          <div>
            <BlackContainer
              data={{
                label: "23PT03",
                useClass: "greenTxt mx-auto mt-2 text",
                unit: "MMWC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <div className="text">EXF BLR FB</div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "V23F1BLR_FB"
              )}`}
              label="V23F1BLR_FB"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-22 text-center ">
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("V23F1P1")}`}
            label="V23F1P1"
            text="M"
          />
          <div className="text">F1P1</div>
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("V23F1P2")}`}
            label="V23F1P2"
            text="M"
          />
          <div className="text">F1P2</div>
        </div>
      </div>
      <div className="position-absolute single-text-23 text-center">
        <BlackContainer
          data={{
            label: "426SD1_ZT",
            useClass: "greenTxt mx-auto text",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="connector-both-side-2 position-absolute text-center single-text-24">
        <span className="greenDot">M</span>
      </div>
      <div className=" position-absolute text-center single-text-25 d-flex">
        <div className="">
          <div className="text">TOT FEED</div>
          <div>
            <BlackContainer
              data={{
                label: "VRM TOTAL FEED",
                useClass: "greenTxt mx-auto text",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>

        <BlackContainer
          data={{
            label: "V23F1_SP_PROXY",
            useClass: "greenTxt mx-auto text",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "23PT04",
            useClass: "greenTxt mx-auto text",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute text-center single-text-26 d-flex">
        <BlackContainer
          data={{
            label: "V23RT30",
            useClass: "greenTxt mx-auto text",
            unit: "",
            unitColor: "unitColor",
          }}
        />

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("V23RAL")}`}
          label="V23RAL"
          text="M"
        />
        <BlackContainer
          data={{
            label: "V23RAL AMP",
            useClass: "greenTxt mx-auto text",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute text-center single-text-27 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("V23RF2")}`}
          label="V23RF2"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("V23RF1")}`}
          label="V23RF1"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-28 text-center">
        <BlackContainer
          data={{
            label: "23ELEV2_KW",
            useClass: "greenTxt mx-auto text",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29 text-center">
        <BlackContainer
          data={{
            label: "23PT01",
            useClass: "greenTxt mx-auto text",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "V23TT01",
            useClass: "greenTxt mx-auto mt-2 text",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-30 d-flex gap text-center">
        <BlackContainer
          data={{
            label: "23LM_KW",
            useClass: "greenTxt mx-auto text",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "V23VIBR01",
            useClass: "greenTxt mx-auto  text",
            unit: "microM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 text-center">
        <BlackContainer
          data={{
            label: "23SP03",
            useClass: "greenTxt mx-auto text",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-32 text-center">
        <BlackContainer
          data={{
            label: "V23BC2 AMP",
            useClass: "greenTxt mx-auto text",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33 text-center">
        <BlackContainer
          data={{
            label: "23BC1_AMP",
            useClass: "greenTxt mx-auto text",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34 text-center">
        <BlackContainer
          data={{
            label: "V23L8_AMP",
            useClass: "greenTxt mx-auto text",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute text-center single-text-36  d-flex">
        <div className="">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus("V23RF2_ZSS1")}`}
            label="V23RF2_ZSS1"
            text="ZSS1"
          />
          <MotorCircleDigitalTag
            className={`text-dark mt-1 digital-tag ${useColorStatus(
              "V23RF2_ZSS2"
            )}`}
            label="V23RF2_ZSS2"
            text="ZSS2"
          />
        </div>
        <div className="">
          <MotorCircleDigitalTag
            className={`text-dark  digital-tag ${useColorStatus(
              "V23RF1_ZSS1"
            )}`}
            label="V23RF1_ZSS1"
            text="ZSS1"
          />
          <MotorCircleDigitalTag
            className={`text-dark mt-1 digital-tag ${useColorStatus(
              "V23RF1_ZSS2"
            )}`}
            label="V23RF1_ZSS2"
            text="ZSS2"
          />
        </div>
      </div>
      <div className="position-absolute single-text-37 text-center">
        <BlackContainer
          data={{
            label: "23PT02",
            useClass: "greenTxt mx-auto text",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-38 text-center">
        <div className="text">PARAMETERS</div>
        <div>
          <BlackContainer
            data={{
              label: "V23PWT_LVL",
              useClass: "greenTxt mx-auto mt-2 text",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`text-dark mt-1 digital-tag ${useColorStatus(
              "V23F1_BRG_TH"
            )}`}
            label="V23F1_BRG_TH"
            text="BRG TH"
          />
          <MotorCircleDigitalTag
            className={`text-dark mt-2 digital-tag ${useColorStatus(
              "V23PTWL_ALM"
            )}`}
            label="V23PTWL_ALM"
            text="PTWL LOW"
          />
          <div className="d-flex gap mt-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("V23PWP1")}`}
              label="V23PWP1"
            />
            <BlackContainer
              data={{
                label: "V23PTWL_ALM2",
                useClass: "greenTxt mx-auto",
                unit: "MTR",
                unitColor: "unitColor",
              }}
            />
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("V23PWP2")}`}
              label="V23PWP2"
            />
          </div>
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`gray-green-red-img position-absolute digital-tag single-text-39 ${useImgColorStatus(
          "V23L7DIV"
        )}`}
        label="V23L7DIV"
      />
      <div className="  position-absolute single-text-40 ">
        <div className="text">L8 CUR</div>
      </div>
      <div className=" img-66 position-absolute single-text-41 ">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag mt-2 ml-1 ${useColorStatus(
            "V23F1"
          )}`}
          label="V23F1"
        />
      </div>
      <div className=" position-absolute single-text-42 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "V23M1_BRG_TH"
            )}`}
            label="V23M1_BRG_TH"
            text="H1"
          />
          <MotorCircleDigitalTag
            className={`text-dark mt-1 digital-tag ${useColorStatus(
              "V23M1_BRG_THH"
            )}`}
            label="V23M1_BRG_THH"
            text="H2"
          />
        </div>

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("V23M1")}`}
          label="V23M1"
          text="M"
        />
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus("V23RGBRG_TH")}`}
            label="V23RGBRG_TH"
            text="H1"
          />
          <MotorCircleDigitalTag
            className={`text-dark mt-1 digital-tag ${useColorStatus(
              "V23RGBRG_THH"
            )}`}
            label="V23RGBRG_THH"
            text="H2"
          />
        </div>
      </div>
      <LinkButton
        buttonClassname="d-block btn greenbtn position-absolute single-text-43 link-button"
        link="/chartspage"
        text=" Charts Visualisation"
      />

      <div className="border p-1 text-center position-absolute single-text-44">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("211AF1_M")}`}
          label="211AF1_M"
        />
        <BlackContainer
          data={{
            label: "211BC1_TPH",
            useClass: "greenTxt mx-auto mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`square mt-1 digital-tag ${useColorStatus("211AF5")}`}
          label="211AF5"
        />
        <MotorCircleDigitalTag
          className={`square mt-1 digital-tag ${useColorStatus("211BC1_M")}`}
          label="211BC1_M"
        />
        <MotorCircleDigitalTag
          className={`square mt-1 digital-tag ${useColorStatus("211BCF")}`}
          label="211BCF"
        />
        <BlackContainer
          data={{
            label: "211BC1_TPH",
            useClass: "greenTxt mx-auto mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "211BCF_TPH",
            useClass: "greenTxt mx-auto mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
    </div>
  );
};

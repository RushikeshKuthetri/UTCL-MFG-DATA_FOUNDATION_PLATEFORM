import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  ProgressBarMimic,
  MotorCircleDigitalTag,
} from "../../../../index";

export const Cooler1Maihar = () => {
  return (
    <div className="Cooler1Maihar w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "K1DC" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("41DC")}`,
          secondCircleLabel: "41DC",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "471CV4" }}
        secondCircle={
          {
            // secondCircleClass: `dot digital-tag ${useColorStatus("")}`,
            // secondCircleLabel: "",
            // secondCircleText: "M",
          }
        }
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "471CV5" }}
        secondCircle={
          {
            // secondCircleClass: `dot digital-tag ${useColorStatus("")}`,
            // secondCircleLabel: "",
            // secondCircleText: "M",
          }
        }
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "K1DBC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("K1DBC1")}`,
          secondCircleLabel: "K1DBC1",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "K1DBC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("K1DBC2")}`,
          secondCircleLabel: "K1DBC2",
          secondCircleText: "M",
        }}
      />
      <div className="pipeVr position-absolute pipe-6 d-flex flex-column justify-content-end">
        <div className="text-center p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COOLER 1",
            }}
          />
          <BlackContainer
            data={{
              label: "K1_CBC_Feed_Oil_Press_CC101_104",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1_CBC_Feed_Oil_Press_CC105_107",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "From Kiln",
            }}
          />
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-7">
        <div className="mt d-flex flex-column">
          <div className="d-flex justify-content-end">
            <BlackContainer
              data={{
                label: "K1_CBC_Frame_Pos_Drive1",
                useClass: "greenTxt",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-end">
            <BlackContainer
              data={{
                label: "K1_CBC_Frame_Pos_Drive2",
                useClass: "greenTxt",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-end">
            <BlackContainer
              data={{
                label: "41PT52",
                useClass: "greenTxt",
                unit: "mbar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1_CBC_Frame_Pos_Drive3",
                useClass: "greenTxt ml-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-end">
            <BlackContainer
              data={{
                label: "41PT51",
                useClass: "greenTxt",
                unit: "mbar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1_CBC_Frame_Pos_Drive4",
                useClass: "greenTxt ml-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-end">
            <BlackContainer
              data={{
                label: "41PT50",
                useClass: "greenTxt",
                unit: "mbar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1_CBC_Frame_Pos_Drive5",
                useClass: "greenTxt ml-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-end">
            <BlackContainer
              data={{
                label: "41TT51",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1_CBC_Frame_Pos_Drive6",
                useClass: "greenTxt ml-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-end">
            <BlackContainer
              data={{
                label: "41TT50",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1_CBC_Frame_Pos_Drive7",
                useClass: "greenTxt ml-2",
                unit: "",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-8">
        <div className="d-flex gap mt-2">
          <BlackContainer
            data={{
              label: "K1_CBC_Drv_REV_Press_Max",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "441.CC100",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "CM_531WF4_SP",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="mt">
          <ProgressBarMimic />
        </div>
        <div>
          <ProgressBarMimic />
        </div>
        <div>
          <ProgressBarMimic />
        </div>
        <div>
          <ProgressBarMimic />
        </div>
        <div>
          <ProgressBarMimic />
        </div>
        <div>
          <ProgressBarMimic />
        </div>
        <div>
          <ProgressBarMimic />
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-9">
        <div className="d-flex justify-content-around mt-1 align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary p",
              label: "LOCAL",
            }}
          />
          <div className="text-center bg-secondary p">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "CBC OIL Cond",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "Sart",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary p",
              label: "Oil Cond Ready",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1 align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary p",
              label: "BYB KILN DRV",
            }}
          />
          <div className="text-center bg-secondary p">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "CBC OIL Cond",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "Release",
              }}
            />
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-secondary p",
                label: "Oil Cond Ready",
              }}
            />
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary p",
                  label: "M1 Ready",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-secondary ml-1 p",
                  label: "M2 Ready",
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around mt-2 align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("441MD140_M")} `}
            label="441MD140_M"
            text="M"
          />
          <BlackContainer
            data={{
              label: "K1_CBC_Drv_Spd_PV_CPM",
              useClass: "greenTxt ",
              unit: "SPM",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary p",
              label: "OP1 RDY",
            }}
          />
          {/* <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_472CV8_ZS1")} `} label="CL_472CV8_ZS1" text="M" />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_472CV8_ZS1")} `} label="CL_472CV8_ZS1" text="M" /> */}
        </div>
        <div className="d-flex justify-content-around mt-1 align-items-center">
          {/* <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_472CV8_ZS1")} `} label="CL_472CV8_ZS1" text="M" /> */}
          {/* <BlackContainer
            data={{
              label: "CL_472DB1_Curr",
              useClass: "greenTxt ",
              unit: "SPM",
              unitColor: "unitColor",
            }}
          /> */}
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary  p",
              label: "OP2 RDY",
            }}
          />
          {/* <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_472CV8_ZS1")} `} label="CL_472CV8_ZS1" text="M" />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_472CV8_ZS1")} `} label="CL_472CV8_ZS1" text="M" /> */}
        </div>
        <div className="d-flex justify-content-around mt-2 align-items-center">
          <BlackContainer
            data={{
              label: "K1_HRB_TransRoll1_Trq_PV",
              useClass: "greenTxt ",
              unit: "Nm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1_HRB_CrushRoll1_Trq_PV",
              useClass: "greenTxt ",
              unit: "Nm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1_HRB_CrushRoll2_Trq_PV",
              useClass: "greenTxt ",
              unit: "Nm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1 align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary p",
              label: "REVERSE T1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary p",
              label: "REVERSE C1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary p",
              label: "REVERSE C2",
            }}
          />
        </div>
        {/* <div className="d-flex justify-content-around mt-1 align-items-center">
          <BlackContainer
            data={{
              label: "CL_472DB1_Curr",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472DB1_Curr",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472DB1_Curr",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div> */}
        <div className="d-flex justify-content-around mt-1 align-items-center">
          <BlackContainer
            data={{
              label: "K1_HRB_TransRoll1_Spd_PV",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1_HRB_CrushRoll1_Spd_PV",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1_HRB_CrushRoll2_Spd_PV",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1 align-items-center">
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "K1_HRB_T1_Fwd_FB"
              )} `}
              label="K1_HRB_T1_Fwd_FB"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-secondary mt-1 p",
                label: "FWD",
              }}
            />
          </div>
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "K1_HRB_C1_Rev_FB"
              )} `}
              label="K1_HRB_C1_Rev_FB"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-secondary mt-1 p",
                label: "FWD",
              }}
            />
          </div>
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "K1_HRB_C2_Fwd_FB"
              )} `}
              label="K1_HRB_C2_Fwd_FB"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-secondary mt-1 p",
                label: "FWD",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute pipe-10 d-flex">
        <div className="border text-center p-1 w">1</div>
        <div className="border text-center p-1 w">2</div>
        <div className="border text-center p-1 w">3</div>
        <div className="border text-center p-1 w">4</div>
        <div className="border text-center p-1 w">5</div>
        <div className="border text-center p-1 w">6</div>
        <div className="border text-center p-1 w">7</div>
      </div>
      <div className="pipeVr position-absolute pipe-11">
        <div className="d-flex justify-content-around mt-1">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "C1ESPZ1",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("C1ESPZ1")} mt-1`}
              label="C1ESPZ1"
              text="M"
            />
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "C1ESPZ2",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("C1ESPZ2")} mt-1`}
              label="C1ESPZ2"
              text="M"
            />
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "C1ESPZ3",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("C1ESPZ3")} mt-1`}
              label="C1ESPZ3"
              text="M"
            />
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "C1ESPZ4",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("471EP4")} mt-1`}
              label="471EP4"
              text="M"
            />
          </div>
        </div>
        <div className="d-flex justify-content-around mt-2">
          <BlackContainer
            data={{
              label: "_41KV01",
              useClass: "greenTxt",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_41KV02",
              useClass: "greenTxt",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_41KV03",
              useClass: "greenTxt",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "471EP4_KV",
              useClass: "greenTxt",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-2">
          <BlackContainer
            data={{
              label: "C1ESPZ1 MA",
              useClass: "greenTxt",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C1ESPZ2 MA",
              useClass: "greenTxt",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "C1ESPZ3 MA",
              useClass: "greenTxt",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "471EP4_II",
              useClass: "greenTxt",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-12"></div>
      <div className="pipeVr position-absolute pipe-13"></div>
      <div className="pipeHr position-absolute pipe-14"></div>
      <div className="pipeVr position-absolute pipe-15"></div>
      <div className="pipeVr position-absolute pipe-16"></div>
      <div className="pipeVr position-absolute pipe-17"></div>
      <div className="pipeHr position-absolute pipe-18"></div>
      <div className="pipeHr position-absolute pipe-19"></div>
      <div className="pipeHr position-absolute pipe-20"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-21"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-25"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-26"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-27"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-28"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-29"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-30"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-31"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-32"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-33"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-34"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-35"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-36"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-37"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-38"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-39"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-40"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-41"></div>
      <div className="pipeVr position-absolute pipe-42"></div>

      <div className="position-absolute single-text-1 d-flex flex-column">
        <div className="d-flex align-items-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Hyd Drv 1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "K1_CBC_Drv1_Run"
            )} ml-1`}
            label="K1_CBC_Drv1_Run"
            text="M"
          />
          <div className="ml-1">
            <BlackContainer
              data={{
                label: "K1_CBC_Drv1_Temp1",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K1_CBC_Drv1_Temp2",
                useClass: "greenTxt mt-1",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Hyd Drv 2",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "K1_CBC_Drv2_Run"
            )} ml-1`}
            label="K1_CBC_Drv2_Run"
            text="M"
          />

          <BlackContainer
            data={{
              label: "K1_CBC_Drv2_Temp",
              useClass: "greenTxt ml-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Hyd Drv 3",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "K1_CBC_Drv3_Run"
            )} ml-1`}
            label="K1_CBC_Drv3_Run"
            text="M"
          />

          <BlackContainer
            data={{
              label: "K1_CBC_Drv3_Temp",
              useClass: "greenTxt ml-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Hyd Drv 4",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "K1_CBC_Drv4_Run"
            )} ml-1`}
            label="K1_CBC_Drv4_Run"
            text="M"
          />

          <BlackContainer
            data={{
              label: "K1_CBC_Drv4_Temp",
              useClass: "greenTxt ml-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Hyd Drv 5",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "K1_CBC_Drv5_Run"
            )} ml-1`}
            label="K1_CBC_Drv5_Run"
            text="M"
          />

          <BlackContainer
            data={{
              label: "K1_CBC_Drv5_Temp",
              useClass: "greenTxt ml-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Hyd Drv 6",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "K1_CBC_Drv6_Run"
            )} ml-1`}
            label="K1_CBC_Drv6_Run"
            text="M"
          />

          <BlackContainer
            data={{
              label: "K1_CBC_Drv6_Temp",
              useClass: "greenTxt ml-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Hyd Drv 7",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "K1_CBC_Drv7_Run"
            )} ml-1`}
            label="K1_CBC_Drv7_Run"
            text="M"
          />

          <BlackContainer
            data={{
              label: "K1_CBC_Drv7_Temp",
              useClass: "greenTxt ml-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "_41CF01_AS",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF01_TEMP",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF01_Amp",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT60",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT61",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS60",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS61",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41FT53",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41FT53_CALC",
              useClass: "greenTxt mt-1",
              unit: "Nm3/Hr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "_41CF02_AS",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF02_TEMP",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF02_Amp",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT68",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT69",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS68",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS69",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41FT54",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41FT54_CALC",
              useClass: "greenTxt mt-1",
              unit: "Nm3/Hr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "_41CF03_AS",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF03_TEMP",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF03_Amp",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT62",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT63",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS62",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS63",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "_41CF04_AS",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF04_TEMP",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF04_Amp",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT64",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT65",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS64",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS65",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "_41CF05_AS",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF05_TEMP",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF05_Amp",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT70",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT71",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS70",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS71",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41FT57",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41FT57_CALC",
              useClass: "greenTxt mt-1",
              unit: "Nm3/Hr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "_41CF06_AS",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF06_TEMP",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF06_Amp",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT66",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT67",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS66",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS67",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "_41CF07_AS",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF07_TEMP",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41CF07_Amp",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT72",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41RT73",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS72",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41VS73",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_41FT59",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "41FT59_CALC",
              useClass: "greenTxt mt-1",
              unit: "Nm3/Hr",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-3 d-flex">
        <div className="triangle-with-squares">
          {/* <BlackContainer
            data={{
              label: "CM_591BF2_PT",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="triangle-with-squares">
          {/* <BlackContainer
            data={{
              label: "CM_591BF2_PT",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="triangle-with-squares">
          {/* <BlackContainer
            data={{
              label: "CM_591BF2_PT",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="triangle-with-squares text-center">
          {/* <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-secondary",
              label: "LS",
            }}
          /> */}
        </div>
      </div>
      <div className=" position-absolute single-text-4 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "C1ESPRF1"
          )}`}
          label="C1ESPRF1"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "C1ESPRF2"
          )}`}
          label="C1ESPRF2"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "C1ESPRF3"
          )}`}
          label="C1ESPRF3"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "471RA4"
          )}`}
          label="471RA4"
        />
      </div>
      <div className=" position-absolute single-text-5 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "K1_HRB_DE_BRG_Temp_CR1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1_HRB_NDE_BRG_Temp_CR1",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "K1_HRB_DE_BRG_Temp_CR2",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1_HRB_NDE_BRG_Temp_CR2",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "K1_HRB_DE_BRG_Temp_TR1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K1_HRB_NDE_BRG_Temp_TR1",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "41CF01"
              )} mt-1`}
              label="41CF01"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "41CF01",
            }}
          />
        </div>
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "41CF02"
              )} mt-1`}
              label="41CF02"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "41CF02",
            }}
          />
        </div>
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "41CF03"
              )} mt-1`}
              label="41CF03"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "41CF03",
            }}
          />
        </div>
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "41CF04"
              )} mt-1`}
              label="41CF04"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "41CF04",
            }}
          />
        </div>
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "41CF05"
              )} mt-1`}
              label="41CF05"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "41CF05",
            }}
          />
        </div>
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "41CF06"
              )} mt-1`}
              label="41CF06"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "41CF06",
            }}
          />
        </div>
        <div className=" text-center">
          <div className=" connector-both-side-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "41CF07"
              )} mt-1`}
              label="41CF07"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "41CF07",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7">
        <BlackContainer
          data={{
            label: "K1_CBC_Drv_FWD_Press_Max",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1_CBC_Drv_FWD_Press_Min",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1_Grease_Spray_System",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1_CBC_Drv_REV_Press_Min",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1_CBC_Drv_FWD_Press_Avg",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1_CBC_Drv_REV_Press_Avg",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1_CBC_Tank_Oil_Temp",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1_CBC_Tank_Oil_Level",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-8 text-center">
        <div className="connector-both-side-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("K1IDF")} mt-1`}
            label="K1IDF"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "K1IDF_471FN8",
          }}
        />
      </div>
      <div className="chimni-red position-absolute single-text-9"></div>
      <div className=" position-absolute single-text-10 d-flex">
        <div className="bg-red ">
          <div className="greenSqure"></div>
        </div>
        <div className="bg-red ">
          <div className="greenSqure"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-11 ">
        <div className="bg-red ">
          <div className="greenSqure"></div>
        </div>
        <BlackContainer
          data={{
            label: "K1IDF_II",
            useClass: "greenTxt mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1IDF_SA",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "_K1DBC1_AMP_M",
          useClass: "greenTxt position-absolute single-text-12",
          unit: "Amps",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "_K1DBC2_AMP_M",
          useClass: "greenTxt position-absolute single-text-13",
          unit: "Amps",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "471EP1_PT1",
            useClass: "greenTxt",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "471EP1_TT1",
            useClass: "greenTxt mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <BlackContainer
          data={{
            label: "_41PT61",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "_41FT60",
              useClass: "greenTxt",
              unit: "m3/HR",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_41PT60",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "441WI130",
          }}
        />
        <div className="roller-drum d-flex justify-content-center align-items-center mt-1 ">
          {/* <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_472CV8_ZS1")} mt-1`} label="CL_472CV8_ZS1" text="M" /> */}
        </div>
      </div>
      <div className="position-absolute single-text-17 text-center d-flex">
        <BlackContainer
          data={{
            label: "461KH1_TT1",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <div className="text-center p-1 bg-secondary">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Water Spray",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "System",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "461KH1_PT1",
          useClass: "greenTxt position-absolute single-text-18",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-19 text-center d-flex">
        <BlackContainer
          data={{
            label: "41PT53",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "41PT54",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "41PT55",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "41PT56",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "41PT57",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "41PT58",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "_41PT59",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="img-96 position-absolute single-text-20"></div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-21",
          label: "Air Blast System",
        }}
      />
      <div className="gray-green-red-img red-img position-absolute single-text-22"></div>
      <div className="gray-green-red-img red-img position-absolute single-text-23"></div>
      <div className="position-absolute single-text-24 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO EXISTING",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CLIKER SILO",
          }}
        />
      </div>
    </div>
  );
};

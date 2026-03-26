import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";
import {
  useColorStatus,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";
export const CoolerAndhra = () => {
  return (
    <div className="CoolerAndhra w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_473CV4_RUN", healthyLabel: "CL_473CV4_PH" }
          )}`,
          secondCircleLabel: "CL_473CV4_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV5" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_473CV5_RUN", healthyLabel: "CL_473CV5_PH" }
          )}`,
          secondCircleLabel: "CL_473CV5_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_473CV1_RUN", healthyLabel: "CL_473CV1_PH" }
          )}`,
          secondCircleLabel: "CL_473CV1_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_473CV2_RUN", healthyLabel: "CL_473CV2_PH" }
          )}`,
          secondCircleLabel: "CL_473CV2_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV3" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_473CV3_RUN", healthyLabel: "CL_473CV3_PH" }
          )}`,
          secondCircleLabel: "CL_473CV3_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "493DB1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_493DB1_RUN", healthyLabel: "CL_493DB1_PH" }
          )}`,
          secondCircleLabel: "CL_493DB1_RUN",
          secondCircleText: "",
        }}
      />
      {/* <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "492DB2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_492DB2_RUN", healthyLabel: "CL_492DB2_PH" }
          )}`,
          secondCircleLabel: "CL_492DB2_RUN",
          secondCircleText: "M",
        }}
      /> */}
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "WHRS" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV6" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_473CV6_RUN", healthyLabel: "CL_473CV6_PH" }
          )}`,
          secondCircleLabel: "CL_473CV6_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV7" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_473CV7_RUN", healthyLabel: "CL_473CV7_PH" }
          )}`,
          secondCircleLabel: "CL_473CV7_RUN",
          secondCircleText: "",
        }}
      />
      <div className="yellowline-Vr downArrow position-absolute pipe-12"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-13"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-14"></div>
      <div className="yellowline-Vr position-absolute pipe-15"></div>
      <div className="yellowline-Hr position-absolute pipe-15a"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-15b"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Vr position-absolute pipe-19"></div>
      <div className="yellowline-Hr position-absolute pipe-19a"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-19b"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
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
      <div className="yellowline-Vr downArrow position-absolute pipe-35"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-36"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-37"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-38"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-39"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-40"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-42"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-43"></div>
      {/* <div className="yellowline-Vr downArrow position-absolute pipe-44"></div> */}
      <div className="yellowline-Vr position-absolute pipe-45"></div>
      <div className="yellowline-Hr position-absolute pipe-46"></div>
      <div className="yellowline-Vr position-absolute pipe-47"></div>
      <div className="yellowline-Vr position-absolute pipe-48"></div>
      <div className="yellowline-Hr position-absolute pipe-49"></div>
      <div className="yellowline-Vr position-absolute pipe-50"></div>
      <div className="yellowline-Vr position-absolute pipe-51"></div>
      <div className="yellowline-Hr position-absolute pipe-52"></div>
      <div className="yellowline-Vr position-absolute pipe-53"></div>
      <div className="yellowline-Vr position-absolute pipe-54"></div>
      <div className="yellowline-Hr position-absolute pipe-55"></div>
      <div className="yellowline-Vr position-absolute pipe-56"></div>
      <div className="yellowline-Vr position-absolute pipe-57"></div>
      <div className="yellowline-Hr position-absolute pipe-58"></div>
      <div className="yellowline-Vr position-absolute pipe-59"></div>
      <div className="yellowline-Vr position-absolute pipe-60"></div>
      <div className="yellowline-Hr position-absolute pipe-61"></div>
      <div className="yellowline-Vr position-absolute pipe-62"></div>
      <div className="yellowline-Vr position-absolute pipe-63"></div>
      <div className="yellowline-Hr position-absolute pipe-64"></div>
      <div className="yellowline-Vr position-absolute pipe-65"></div>
      <div className="yellowline-Vr position-absolute pipe-66"></div>
      <div className="yellowline-Hr position-absolute pipe-67"></div>
      <div className="yellowline-Vr position-absolute pipe-68"></div>
      <div className="yellowline-Vr position-absolute pipe-69"></div>
      <div className="yellowline-Hr position-absolute pipe-70"></div>
      <div className="yellowline-Vr position-absolute pipe-71"></div>
      <div className="yellowline-Vr position-absolute pipe-72"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-73"></div>
      <div className="yellowline-Hr position-absolute pipe-74"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-75"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-76"></div>
      <div className="yellowline-Hr position-absolute pipe-77"></div>
      <div className="yellowline-Vr position-absolute pipe-78"></div>
      <div className="yellowline-Vr position-absolute pipe-79"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-80"></div>
      <div className="yellowline-Hr position-absolute pipe-81"></div>
      <div className="yellowline-Hr position-absolute pipe-82"></div>
      <div className="yellowline-Vr position-absolute pipe-83"></div>
      <div className="yellowline-Hr position-absolute pipe-84"></div>
      <div className="yellowline-Vr position-absolute pipe-85"></div>
      <div className="yellowline-Hr position-absolute pipe-86"></div>
      <div className="yellowline-Vr position-absolute pipe-87"></div>
      <div className="yellowline-Hr position-absolute pipe-88"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-89"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-90"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-91"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-92"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-93"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-94"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-95"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-96"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-97"></div>
      <div className="yellowline-Vr position-absolute pipe-98"></div>
      <div className="yellowline-Hr position-absolute pipe-99"></div>
      <div className="yellowline-Vr position-absolute pipe-101"></div>
      <div className="yellowline-Hr position-absolute pipe-102"></div>
      <div className="yellowline-Hr position-absolute pipe-103"></div>
      <div className="yellowline-Vr position-absolute pipe-104"></div>
      <div className="yellowline-Hr position-absolute pipe-105"></div>
      <div className="yellowline-Hr position-absolute pipe-106"></div>
      <div className="yellowline-Hr position-absolute pipe-107"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-108"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-109"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-110"></div>

      <div className=" position-absolute single-text-1 d-flex">
        <div className="triangle-with-squares text-center"></div>
        <div className="triangle-with-squares ml"></div>
        <div className="triangle-with-squares ml"></div>
        <div className="triangle-with-squares ml"></div>
        <div className="triangle-with-squares ml"></div>
        <div className="triangle-with-squares ml"></div>
        <div className="triangle-with-squares ml"></div>
        <div className="triangle-with-squares ml"></div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473EP1_HP1_LS_RUN"
          )}`}
          label="CL_473EP1_HP1_LS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473EP1_HP2_LS_RUN"
          )}`}
          label="CL_473EP1_HP2_LS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473EP1_HP3_LS_RUN"
          )}`}
          label="CL_473EP1_HP3_LS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473EP1_HP4_LS_RUN"
          )}`}
          label="CL_473EP1_HP4_LS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473EP1_HP5_LS_RUN"
          )}`}
          label="CL_473EP1_HP5_LS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473EP1_HP6_LS_RUN"
          )}`}
          label="CL_473EP1_HP6_LS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473EP1_HP7_LS_RUN"
          )}`}
          label="CL_473EP1_HP7_LS_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473EP1_HP8_LS_RUN"
          )}`}
          label="CL_473EP1_HP8_LS_RUN"
        />
      </div>
      <div className="pipeHr  position-absolute single-text-3 d-flex justify-content-around align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "CL_473EP1_TT1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473EP1_TT3",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473EP1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473EP1_PT3",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div>
            <div className="d-flex align-items-center justify-content-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "CL_473MTP1_PH" }
                )}`}
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-1",
                  label: "473EP1",
                }}
              />
            </div>
            <div className="d-flex  text-center mt-1">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "PENT TEMP",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_473EP1_TE11",
                    useClass: "greenTxt mt-1",
                    unit: "℃",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_473EP1_TE23",
                    useClass: "greenTxt mt-1",
                    unit: "℃",
                    unitColor: "unitColor",
                  }}
                />
              </div>
              <div className="ml-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "AIR NOZ TEMP",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_473EP1_TE12",
                    useClass: "greenTxt mt-1",
                    unit: "℃",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_473EP1_TE24",
                    useClass: "greenTxt mt-1",
                    unit: "℃",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_473EP1_TT2",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473EP1_TT4",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473EP1_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473EP1_PT4",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex border p-1">
        <div className="text-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "HYD Pump 1",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot mt-2 p-1 digital-tag ${useColorStatus(
                "DB16_DBX136_1_RUN"
              )}`}
              label="DB16_DBX136_1_RUN"
              text="M"
            />
          </div>
          <BlackContainer
            data={{
              label: "DB16_DBW34",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DB16_DBW36",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DB16_DBW38",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "HYD Pump 2",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot mt-2 p-1 digital-tag ${useColorStatus(
                "DB16_DBX138_1_RUN"
              )}`}
              label="DB16_DBX138_1_RUN"
              text="M"
            />
          </div>
          <BlackContainer
            data={{
              label: "DB16_DBW42",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DB16_DBW44",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DB16_DBW46",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "HYD Pump 3",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot mt-2 p-1 digital-tag ${useColorStatus(
                "DB16_DBX140_1_RUN"
              )}`}
              label="DB16_DBX140_1_RUN"
              text="M"
            />
          </div>
          <BlackContainer
            data={{
              label: "DB16_DBW50",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DB16_DBW52",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DB16_DBW54",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex border p-1">
        <div>
          <BlackContainer
            data={{
              label: "CL_473FN1_PT1",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN1_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN1_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN1_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN1_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_473FN2_PT1",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN2_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN2_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN2_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN2_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_473FN3_PT1",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN3_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN3_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN3_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN3_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_473FN4_PT1",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN4_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN4_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN4_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN4_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_473FN5_PT1",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN5_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN5_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN5_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN5_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_473FN6_PT1",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN6_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN6_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN6_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN6_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_473FN7_PT1",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN7_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN7_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN7_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN7_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_473FN8_PT1",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN8_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN8_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN8_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN8_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_473FN9_PT1",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN9_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN9_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN9_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN9_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_473FNA_PT1",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FNA_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FNA_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FNA_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FNA_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_473FNB_PT1",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FNB_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FNB_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FNB_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FNB_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_473FNC_PT1",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FNC_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FNC_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FNC_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FNC_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_473FND_PT1",
              useClass: "greenTxt",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FND_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FND_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FND_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FND_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Hot Air Recirculation(℃)",
            }}
          />
        </div>
        <div className="mt-1">
          <div className="d-flex justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "473DU2 TT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_473DU02_TT",
                useClass: "greenTxt ml-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "473DU2 TT1",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_473DU02_TT1",
                useClass: "greenTxt ml-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "473DU2 TT2",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_473DU02_TT2",
                useClass: "greenTxt ml-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "473DU2 TT3",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_473DU02_TT3",
                useClass: "greenTxt ml-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "HAR Cooler Trip Tima",
              }}
            />
            <BlackContainer
              data={{
                label: "CoolerOff",
                useClass: "greenTxt mt-1",
                unit: "sec",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-around mt-1">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CL_473DU4_TT_ALM1_RUN"
              )}`}
              label="CL_473DU4_TT_ALM1_RUN"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CL_473DU4_TT_ALM2_RUN"
              )}`}
              label="CL_473DU4_TT_ALM2_RUN"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-7 pipeHr ">
        <div className="d-flex justify-content-around mt-1 align-items-center">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark p-1 bg-secondary",
                label: "CLR AIR BLASTER",
              }}
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark p-1 bg-secondary",
                label: "473CC1HW",
              }}
            />
          </div>
          <div>
            <div className="d-flex ">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "SP",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW20",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Act",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW22",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Oil Temp",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW26",
                  useClass: "greenTxt ml-2",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Oil Level",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW24",
                  useClass: "greenTxt ml-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>

          <div className="text-center">
            <div className="d-flex align-items-center ">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Life Bit",
                }}
              />
              <MotorCircleDigitalTag
                className={`ml-2 square digital-tag ${useColorStatus(
                  "DB16_DBX114_7_RUN"
                )}`}
                label="DB16_DBX114_7_RUN"
              />
            </div>
            <BlackContainer
              data={{
                label: "GrateDrive_Man",
                useClass: "greenTxt  mt-1",
                unit: "spm",
                unitColor: "unitColor",
              }}
            />
          </div>

          <div>
            <div className="d-flex ">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "OCP Current",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW30",
                  useClass: "greenTxt ml-2",
                  unit: "A",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Grate Speed",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW18",
                  useClass: "greenTxt ml-2",
                  unit: "spm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "GD Cyl-1 Pos",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW10",
                  useClass: "greenTxt ml-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "GD Cyl-2 Pos",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW12",
                  useClass: "greenTxt ml-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div>
            <div className="d-flex ">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Cyl1 Piston PR",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW0",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Cyl2 Piston PR",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW4",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Cyl1 Rod PR",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW2",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Cyl2 Rod PR",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW6",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Cyl POS Diff",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW14",
                  useClass: "greenTxt ml-2",
                  unit: "mm",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark p-1 bg-secondary mt-1",
                label: "GRATE TABLE",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark p-1 bg-secondary mt-1",
                label: "FAN TABLE",
              }}
            />
          </div>
          <div>
            <div className="text-center  ">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "UP MNT 1",
                }}
              />
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 ${useColorStatus(
                  "CL_UP_MNT_1_RUN"
                )}`}
                label="CL_UP_MNT_1_RUN"
              />
            </div>
            <div className="text-center  mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "UP MNT 2",
                }}
              />
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 ${useColorStatus(
                  "CL_UP_MNT_2_RUN"
                )}`}
                label="CL_UP_MNT_2_RUN"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "GD RUN",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "DB16_DBX130_4_RUN"
              )} ml-2`}
              label="DB16_DBX130_4_RUN"
            />
          </div>
          <div className="d-flex ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "OTC ON",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "DB16_DBX125_6_RUN"
              )} ml-2`}
              label="DB16_DBX125_6_RUN"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-8 pipeHr"></div>
      <div className="position-absolute single-text-9 d-flex">
        <div>
          <div className="d-flex align-items-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "473LQ1",
              }}
            />
            <MotorCircleDigitalTag
              className={`ml-2 line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_473LQ1_RUN", healthyLabel: "CL_473LQ1_PH" }
              )}`}
              label="CL_473LQ1_RUN"
            />
          </div>
        </div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "CL_473LQ1_GRS_ZS1_RUN"
          )}`}
          label="CL_473LQ1_GRS_ZS1_RUN"
          text="F"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "CL_473LQ1_GRS_ZS2_RUN"
          )}`}
          label="CL_473LQ1_GRS_ZS2_RUN"
          text="F"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "CL_473LQ1_GRS_LS_RUN"
          )}`}
          label="CL_473LQ1_GRS_LS_RUN"
          text="L"
        />
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_473RC1_RUN", healthyLabel: "CL_473RC1_PH" }
            )}`}
            label="CL_473RC1_RUN"
            text="M"
          />
          <BlackContainer
            data={{
              label: "RC1_Curr",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_473RC2_RUN", healthyLabel: "CL_473RC2_PH" }
            )}`}
            label="CL_473RC2_RUN"
          />
          <BlackContainer
            data={{
              label: "RC2_Curr",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_473RC3_RUN", healthyLabel: "CL_473RC3_PH" }
            )}`}
            label="CL_473RC3_RUN"
          />
          <BlackContainer
            data={{
              label: "RC3_Curr",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_473RC4_RUN", healthyLabel: "CL_473RC4_PH" }
            )}`}
            label="CL_473RC4_RUN"
          />
          <BlackContainer
            data={{
              label: "RC4_Curr",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_473RC5_RUN", healthyLabel: "CL_473RC5_PH" }
            )}`}
            label="CL_473RC5_RUN"
          />
          <BlackContainer
            data={{
              label: "RC5_Curr",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_473RC6_RUN", healthyLabel: "CL_473RC6_PH" }
            )}`}
            label="CL_473RC6_RUN"
            text="M"
          />
          <BlackContainer
            data={{
              label: "RC6_Curr",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 1",
            }}
          />
          <div className="d-flex justify-content-around mt-1">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CL_473CC1_LS31_RUN"
              )}`}
              label="CL_473CC1_LS31_RUN"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "DB16_DBX120_0_RUN"
              )} `}
              label="DB16_DBX120_0_RUN"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CL_473CC1_LS32_RUN"
              )} `}
              label="CL_473CC1_LS32_RUN"
            />
          </div>
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 2",
            }}
          />
          <MotorCircleDigitalTag
            className={`mt-1 square digital-tag ${useColorStatus(
              "DB16_DBX120_1_RUN"
            )}`}
            label="DB16_DBX120_1_RUN"
          />
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 3",
            }}
          />
          <div className="d-flex justify-content-around mt-1">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CL_473CC1_LS33_RUN"
              )}`}
              label="CL_473CC1_LS33_RUN"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "DB16_DBX120_2_RUN"
              )} `}
              label="DB16_DBX120_2_RUN"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CL_473CC1_LS34_RUN"
              )} `}
              label="CL_473CC1_LS34_RUN"
            />
          </div>
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 4",
            }}
          />
          <MotorCircleDigitalTag
            className={`mt-1 square digital-tag ${useColorStatus(
              "DB16_DBX120_3_RUN"
            )}`}
            label="DB16_DBX120_3_RUN"
          />
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 5",
            }}
          />
          <div className="d-flex justify-content-around mt-1">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CL_473CC1_LS35_RUN"
              )}`}
              label="CL_473CC1_LS35_RUN"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "DB16_DBX120_4_RUN"
              )} `}
              label="DB16_DBX120_4_RUN"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CL_473CC1_LS36_RUN"
              )} `}
              label="CL_473CC1_LS36_RUN"
            />
          </div>
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 6",
            }}
          />
          <MotorCircleDigitalTag
            className={`mt-1 square digital-tag ${useColorStatus(
              "DB16_DBX120_5_RUN"
            )}`}
            label="DB16_DBX120_5_RUN"
          />
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 7",
            }}
          />
          <MotorCircleDigitalTag
            className={`mt-1 square digital-tag ${useColorStatus(
              "DB16_DBX120_6_RUN"
            )}`}
            label="DB16_DBX120_6_RUN"
          />
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 8",
            }}
          />
          <MotorCircleDigitalTag
            className={`mt-1 square digital-tag ${useColorStatus(
              "DB16_DBX121_0_RUN"
            )}`}
            label="DB16_DBX121_0_RUN"
          />
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 9",
            }}
          />
          <MotorCircleDigitalTag
            className={`mt-1 square digital-tag ${useColorStatus(
              "DB16_DBX121_1_RUN"
            )}`}
            label="DB16_DBX121_1_RUN"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-12 d-flex">
        <div className="d-flex">
          <div className="triangle-with-squares "></div>
          <div className="triangle-with-squares ml"></div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares "></div>
          <div className="triangle-with-squares ml"></div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares "></div>
          <div className="triangle-with-squares ml"></div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares "></div>
          <div className="triangle-with-squares ml"></div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares "></div>
          <div className="triangle-with-squares ml"></div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares "></div>
          <div className="triangle-with-squares ml"></div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares "></div>
          <div className="triangle-with-squares ml"></div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares "></div>
          <div className="triangle-with-squares ml"></div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares "></div>
          <div className="triangle-with-squares ml"></div>
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP1_LFT_RUN"
            )}`}
            label="CL_473CC1_HP1_LFT_RUN"
          />{" "}
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP1_RGT_RUN"
            )}`}
            label="CL_473CC1_HP1_RGT_RUN"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP2_LFT_RUN"
            )}`}
            label="CL_473CC1_HP2_LFT_RUN"
          />{" "}
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP2_RGT_RUN"
            )}`}
            label="CL_473CC1_HP2_RGT_RUN"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP3_LFT_RUN"
            )}`}
            label="CL_473CC1_HP3_LFT_RUN"
          />{" "}
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP3_RGT_RUN"
            )}`}
            label="CL_473CC1_HP3_RGT_RUN"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP4_LFT_RUN"
            )}`}
            label="CL_473CC1_HP4_LFT_RUN"
          />{" "}
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP4_RGT_RUN"
            )}`}
            label="CL_473CC1_HP4_RGT_RUN"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP5_LFT_RUN"
            )}`}
            label="CL_473CC1_HP5_LFT_RUN"
          />{" "}
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP5_RGT_RUN"
            )}`}
            label="CL_473CC1_HP5_RGT_RUN"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP6_LFT_RUN"
            )}`}
            label="CL_473CC1_HP6_LFT_RUN"
          />{" "}
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP6_RGT_RUN"
            )}`}
            label="CL_473CC1_HP6_RGT_RUN"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP7_LFT_RUN"
            )}`}
            label="CL_473CC1_HP7_LFT_RUN"
          />{" "}
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP7_RGT_RUN"
            )}`}
            label="CL_473CC1_HP7_RGT_RUN"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP8_LFT_RUN"
            )}`}
            label="CL_473CC1_HP8_LFT_RUN"
          />{" "}
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP8_RGT_RUN"
            )}`}
            label="CL_473CC1_HP8_RGT_RUN"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP9_LFT_RUN"
            )}`}
            label="CL_473CC1_HP9_LFT_RUN"
          />{" "}
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_473CC1_HP9_RGT_RUN"
            )}`}
            label="CL_473CC1_HP9_RGT_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_473FN1_RUN",
                  healthyLabel: "CL_473FN1_PH",
                }
              )}`}
              label="CL_473FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "472FN1",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_473FN2_RUN",
                  healthyLabel: "CL_473FN2_PH",
                }
              )}`}
              label="CL_473FN2_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "472FN2",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_473FN3_RUN",
                  healthyLabel: "CL_473FN3_PH",
                }
              )}`}
              label="CL_473FN3_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "472FN3",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_473FN4_RUN",
                  healthyLabel: "CL_473FN4_PH",
                }
              )}`}
              label="CL_473FN4_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "472FN4",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_473FN5_RUN",
                  healthyLabel: "CL_473FN5_PH",
                }
              )}`}
              label="CL_473FN5_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "472FN5",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_473FN6_RUN",
                  healthyLabel: "CL_473FN6_PH",
                }
              )}`}
              label="CL_473FN6_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "472FN6",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_473FN7_RUN",
                  healthyLabel: "CL_473FN7_PH",
                }
              )}`}
              label="CL_473FN7_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "472FN7",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_473FN8_RUN",
                  healthyLabel: "CL_473FN8_PH",
                }
              )}`}
              label="CL_473FN8_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "472FN8",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_473FN9_RUN",
                  healthyLabel: "CL_473FN9_PH",
                }
              )}`}
              label="CL_473FN9_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "472FN9",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_473FNA_RUN",
                  healthyLabel: "CL_473FNA_PH",
                }
              )}`}
              label="CL_473FNA_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "472FNA",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "NA",
                  healthyLabel: "NA_PH",
                }
              )}`}
              label="NA"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "472FNB",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_473FNC_RUN",
                  healthyLabel: "CL_473FNC_PH",
                }
              )}`}
              label="CL_473FNC_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "472FNC",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_473FND_RUN",
                  healthyLabel: "CL_473FND_PH",
                }
              )}`}
              label="CL_473FND_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "472FND",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-14a d-flex">
        <BlackContainer
          data={{
            label: "CL_473FN1",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN2",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN3",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN4",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN5",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN6",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN7",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN8",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN9",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FNA",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FNB",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FNC",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FND",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Specific Power",
            }}
          />
          <BlackContainer
            data={{
              label: "SpecificPower",
              useClass: "greenTxt ml-2",
              unit: "UNIT/TON",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Specific Flow",
            }}
          />
          <BlackContainer
            data={{
              label: "TotalcoolingAir",
              useClass: "greenTxt ml-2",
              unit: "Nm3/Kg",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Kilin Feed SP",
            }}
          />
          <BlackContainer
            data={{
              label: "Kilnfeed_SP",
              useClass: "greenTxt ml-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Kilin Feed PV",
            }}
          />
          <BlackContainer
            data={{
              label: "Kilnfeed",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 pipeHr"></div>
      <div className="position-absolute single-text-17 d-flex flex-column ">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "SA Temp",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_463KL1_TT5",
              useClass: "greenTxt ml-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex align-items-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Hood Draught Temp",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_HOOD_DRAFT",
              useClass: "greenTxt ml-2",
              unit: "mmWg",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17a  ">
        <div className=" text-center">
          <BlackContainer
            data={{
              label: "BNFan_ET",
              useClass: "greenTxt",
              unit: "sec",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "OC PUMP",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "473BF1",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "CL_473RA9"
              )}`}
              label="CL_473RA9_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <div>
              <div className="yellowline-Vr upArrow position-absolute"></div>

              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CL_473FNE_RUN", healthyLabel: "CL_473FNE_PH" }
                )}`}
                label="CL_473FNE_RUN"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex flex-column">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "473BL1",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_473BL1_RUN", healthyLabel: "CL_473BL1_PH" }
            )}`}
            label="CL_473BL1_RUN"
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_473BL2_RUN", healthyLabel: "CL_473BL2_PH" }
            )}`}
            label="CL_473BL2_RUN"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "473BL2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "CL_473LD8_EOLS_RUN",
                  closeLabel: "CL_473LD8_ECLS_RUN",
                  healthyLabel: "CL_473LD8_PH",
                }
              )}`}
              label="CL_473LD8_EOLS_RUN"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark t",
              label: "473LD8",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "CL_473LD9_EOLS_RUN",
                  closeLabel: "CL_473LD9_ECLS_RUN",
                  healthyLabel: "CL_473LD9_PH",
                }
              )}`}
              label="CL_473LD9_EOLS_RUN"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark t",
              label: "473LD9",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_473LD1_EOLS_RUN",
                closeLabel: "CL_473LD1_ECLS_RUN",
                healthyLabel: "CL_473LD1_PH",
              }
            )}`}
            label="CL_473LD1_EOLS_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "473LD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_473SD2_EOLS_RUN",
                closeLabel: "CL_473SD2_ECLS_RUN",
                healthyLabel: "CL_473SD2_PH",
              }
            )}`}
            label="CL_473SD2_EOLS_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "473LD7",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 d-flex flex-column">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "CL_473LD7_EOLS_RUN",
                  closeLabel: "CL_473LD7_ECLS_RUN",
                  healthyLabel: "CL_473LD7_PH",
                }
              )}`}
              label="CL_473LD7_EOLS_RUN"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 t",
              label: "473LD7",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "CL_473SD4_EOLS_RUN",
                  closeLabel: "CL_473SD4_ECLS_RUN",
                  healthyLabel: "CL_473SD4_PH",
                }
              )}`}
              label="CL_473SD4_EOLS_RUN"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 t",
              label: "473LD4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_473SD6_EOLS_RUN",
                closeLabel: "CL_473SD6_ECLS_RUN",
                healthyLabel: "CL_473SD6_PH",
              }
            )}`}
            label="CL_473SD6_EOLS_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "473LD6",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_473SD5_EOLS_RUN",
                closeLabel: "CL_473SD5_ECLS_RUN",
                healthyLabel: "CL_473SD5_PH",
              }
            )}`}
            label="CL_473SD5_EOLS_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "473SD5",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_473LD4_EOLS_RUN",
                closeLabel: "CL_473LD4_ECLS_RUN",
                healthyLabel: "CL_473LD4_PH",
              }
            )}`}
            label="CL_473LD4_EOLS_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "473LD4",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_473LD5_EOLS_RUN",
                closeLabel: "CL_473LD5_ECLS_RUN",
                healthyLabel: "CL_473LD5_PH",
              }
            )}`}
            label="CL_473LD5_EOLS_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "473LD5",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_473LD6_EOLS_RUN",
                closeLabel: "CL_473LD6_ECLS_RUN",
                healthyLabel: "CL_473LD6_PH",
              }
            )}`}
            label="CL_473LD6_EOLS_RUN"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "473LD6",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-29",
          label: "FRESH AIR",
        }}
      />
      <div className="position-absolute single-text-30">
        <BlackContainer
          data={{
            label: "CL_473LD6_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "CL_473LD6_PID",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 p-1 bg-secondary",
            label: "TIMERS",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "CL_473BF1_DPT",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473BF1_PT1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-32 d-flex ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FRESH AIR",
          }}
        />
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CL_473FNJ_M01_RUN",
                healthyLabel: "CL_473FNJ_M01_PH",
              }
            )}`}
            label="CL_473FNJ_M01_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "473FNJ",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-33 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CL_473FNF_PT1",
              useClass: "greenTxt ",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FNF_M01",
              useClass: "greenTxt mt-3",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CL_473LD4_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-36 d-flex">
        <BlackContainer
          data={{
            label: "CL_473SD2_ZT",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473SD4_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MID-1 AIR",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FOR WHRS",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MID-11 AIR",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FOR WHRS",
            }}
          />
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`dot digital-tag ${useColorStatus(
          "WHRS_RunFB_RUN"
        )} position-absolute single-text-38`}
        label="WHRS_RunFB_RUN"
        text="H"
      />
      {/* <div className="position-absolute single-text-39 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="F"
        />
      </div> */}
      <div className="position-absolute single-text-40 d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "473LD7-ZT1",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473LD7_ZT",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CL_473EP1_TT4",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-41 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_PA_Start_RUN")}`}
          label="KL_PA_Start_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("NA")}`}
          label="NA"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "473LD1-ZT1",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473LD1_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-42 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CL_473SD3_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473LD8_ZT",
            useClass: "greenTxt ml",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CL_473LD9_ZT",
          useClass: "greenTxt position-absolute single-text-43",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-44 d-flex">
        <BlackContainer
          data={{
            label: "CL_473SD5_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473SD5_ZT",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      {/* <div className=" position-absolute single-text-45 d-flex flex-column">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "492DB1(Amps)",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472DB1_Curr",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "492DB2(Amps)",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472DB2_Curr",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div> */}
      <div className="position-absolute single-text-46 border p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-left",
            label: "Clinker Silo",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center p-1 bg-secondary",
            label: "SILO>>",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-right",
            label: "Reject Silo",
          }}
        />
      </div>
      <div className="position-absolute single-text-47 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "Min Cyl PR",
          }}
        />
        <BlackContainer
          data={{
            label: "DB16_DBW8",
            useClass: "greenTxt ml-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-48 text-center">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CL_473FNF_M01_RUN",
                healthyLabel: "CL_473FNF_M01_PH",
              }
            )}`}
            label="CL_473FNF_M01_RUN"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "473FNF_M01",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-49",
          label: "TO CV1",
        }}
      />
      <div className="position-absolute single-text-50 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_473RA1"
          )}`}
          label="CL_473RA1_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_473RA2"
          )}`}
          label="CL_473RA2_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_473RA3"
          )}`}
          label="CL_473RA3_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_473RA4"
          )}`}
          label="CL_473RA4_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_473RA5"
          )}`}
          label="CL_473RA5_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_473RA6"
          )}`}
          label="CL_473RA6_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_473RA7"
          )}`}
          label="CL_473RA7_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_473RA8"
          )}`}
          label="CL_473RA8_RUN"
        />
      </div>
      <div className="position-absolute single-text-51 d-flex align-items-center">
        <div className="d-flex align-items-center gap  p-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "", healthyLabel: "CL_473TR1_PH" }
            )}`}
            label=""
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "", healthyLabel: "CL_473TR2_PH" }
            )}`}
            label=""
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "", healthyLabel: "CL_473TR3_PH" }
            )}`}
            label=""
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "", healthyLabel: "CL_473TR4_PH" }
            )}`}
            label=""
          />
        </div>

        <div className=" d-flex align-items-center gap  p-1 ml-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "", healthyLabel: "CL_473TR5_PH" }
            )}`}
            label=""
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "", healthyLabel: "CL_473TR6_PH" }
            )}`}
            label=""
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "", healthyLabel: "CL_473TR7_PH" }
            )}`}
            label=""
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "", healthyLabel: "CL_473TR8_PH" }
            )}`}
            label=""
          />
        </div>
      </div>
      <div className="position-absolute single-text-52 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CL_473CV7_Curr",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473CV6_Curr",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      {/* <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark p-1 bg-secondary position-absolute single-text-53",
          label: "CLR ROLLER CRUSHER",
        }}
      /> */}
      <div className=" position-absolute single-text-54 d-flex align-items-center">
        <div className="chimni-red"></div>
        <div className="text-center ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "473SK1",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-54a d-flex align-items-center">
        <div className="chimni-red"></div>
        <div className="text-center ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-55 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "COANDA NOZZLE TABLE",
            }}
          />
        </div>
        <table className="">
          <tr>
            <th></th>
            <th>LL</th>
            <th>L</th>
            <th>C</th>
            <th>R</th>
            <th>RR</th>
          </tr>

          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW64",
                  useClass: "greenTxt",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW66",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td></td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW68",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td></td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW70",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td></td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW72",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW74",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW76",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW80",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW82",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>

            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW84",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW86",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW88",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW90",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>

            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW92",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW94",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW96",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW98",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td></td>

            <td>
              <BlackContainer
                data={{
                  label: "DB1_DBW100",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW102",
                  useClass: "greenTxt ",
                  unit: "℃",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
        </table>
      </div>
      <BlackContainer
        data={{
          label: "CL_493DB1_Curr",
          useClass: "greenTxt position-absolute single-text-56",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CL_473LD5_ZT",
          useClass: "greenTxt position-absolute single-text-57",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-58 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473CV6_FS1_RUN"
          )}`}
          label="CL_473CV6_FS1_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473CV6_ZS1_RUN"
          )}`}
          label="CL_473CV6_ZS1_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473CV6_ZS2_RUN"
          )}`}
          label="CL_473CV6_ZS2_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473CV6_ZS3_RUN"
          )}`}
          label="CL_473CV6_ZS3_RUN"
        />
      </div>
      <div className="position-absolute single-text-59 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473CV7_FS1_RUN"
          )}`}
          label="CL_473CV7_FS1_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473CV7_ZS1_RUN"
          )}`}
          label="CL_473CV7_ZS1_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473CV7_ZS2_RUN"
          )}`}
          label="CL_473CV7_ZS2_RUN"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_473CV7_ZS3_RUN"
          )}`}
          label="CL_473CV7_ZS3_RUN"
        />
      </div>
      <div className="position-absolute single-text-60 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_473SM1_RUN", healthyLabel: "CL_473SM1_PH" }
          )}`}
          label="CL_473SM1_RUN"
        />
      </div>
      <div className="d-flex position-absolute single-text-61 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("BullNoseRun_FB_RUN")}`}
          label="BullNoseRun_FB_RUN"
          text="F"
        />
        <div className="text-center ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "473FNG",
            }}
          />

          <MotorCircleDigitalTag
            className={`ml-2 line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_473FNG_RUN", healthyLabel: "CL_473FNG_PH" }
            )}`}
            label="CL_473FNG_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-62 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_473SK1_M01_RUN", healthyLabel: "CL_473SK1_M01_PH" }
          )}`}
          label="CL_473SK1_M01_RUN"
        />
      </div>
      <div className="position-absolute single-text-63 ">
        <MotorCircleDigitalTag
          className={`square digital-tag 
           ${useColorStatus("NA")}`}
          label="NA"
        />
      </div>
      <div className="position-absolute single-text-65 d-flex">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "CL_473CC1_TT31",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473CC1_TT32",
              useClass: "greenTxt ml-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "CL_473CC1_TT33",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473CC1_TT34",
              useClass: "greenTxt ml-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "CL_473CC1_TT35",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473CC1_TT36",
              useClass: "greenTxt ml-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-66 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "RA1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "RA2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "RA3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "RA4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "RA5",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "RA6",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "RA7",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "RA8",
          }}
        />
      </div>
      <div className="position-absolute single-text-67 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "FROM 473CV5",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "FROM 473CV4",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "PH_443FN1_Run_RUN"
          )} mt-1`}
          label="PH_443FN1_Run_RUN"
        />
      </div>
    </div>
  );
};

import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";
import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";
export const Coolerkotputli = () => {
  return (
    <div className="Coolerkotputli w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_472CV4_RUN", healthyLabel: "CL_472CV4_PH" }
          )}`,
          secondCircleLabel: "CL_472CV4_RUN",
          secondCircleText: "M",
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
            { runLabel: "CL_472CV5_RUN", healthyLabel: "CL_472CV5_PH" }
          )}`,
          secondCircleLabel: "CL_472CV5_RUN",
          secondCircleText: "M",
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
            { runLabel: "CL_472CV1_RUN", healthyLabel: "CL_472CV1_PH" }
          )}`,
          secondCircleLabel: "CL_472CV1_RUN",
          secondCircleText: "M",
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
            { runLabel: "CL_472CV2_RUN", healthyLabel: "CL_472CV2_PH" }
          )}`,
          secondCircleLabel: "CL_472CV2_RUN",
          secondCircleText: "M",
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
            { runLabel: "CL_472CV3_RUN", healthyLabel: "CL_472CV3_PH" }
          )}`,
          secondCircleLabel: "CL_472CV3_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "492DB1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_492DB1_RUN", healthyLabel: "CL_492DB1_PH" }
          )}`,
          secondCircleLabel: "CL_492DB1_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
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
      />
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
        text={{ useClass: "text-dark", label: "CV7" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_472CV7_RUN", healthyLabel: "CL_472CV7_PH" }
          )}`,
          secondCircleLabel: "CL_472CV7_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV8" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_472CV8_RUN", healthyLabel: "CL_472CV8_PH" }
          )}`,
          secondCircleLabel: "CL_472CV8_RUN",
          secondCircleText: "M",
        }}
      />
      <div className="yellowline-Vr downArrow position-absolute pipe-12"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-13"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-14"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-15"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>
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
      <div className="yellowline-Vr downArrow position-absolute pipe-44"></div>
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
      <div className="yellowline-Hr position-absolute pipe-97"></div>
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
          className={`dot digital-tag ${useColorStatus("CL_472EP1_HP1_LS")}`}
          label="CL_472EP1_HP1_LS"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472EP1_HP2_LS")}`}
          label="CL_472EP1_HP2_LS"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472EP1_HP3_LS")}`}
          label="CL_472EP1_HP3_LS"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472EP1_HP4_LS")}`}
          label="CL_472EP1_HP4_LS"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472EP1_HP5_LS")}`}
          label="CL_472EP1_HP5_LS"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472EP1_HP6_LS")}`}
          label="CL_472EP1_HP6_LS"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472EP1_HP7_LS")}`}
          label="CL_472EP1_HP7_LS"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472EP1_HP8_LS")}`}
          label="CL_472EP1_HP8_LS"
          text="L"
        />
      </div>
      <div className="pipeHr  position-absolute single-text-3 d-flex justify-content-around align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "CL_472EP1_TT1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472EP1_TT3",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472EP1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472EP1_PT3",
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
                  { runLabel: "CL_472MT1_RUN", healthyLabel: "CL_472MT1_PH" }
                )}`}
                label="CL_472MT1_RUN"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-1",
                  label: "CL_472MT1",
                }}
              />
            </div>
            <div className="d-flex  text-center mt-1">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "PENT HOUSE",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_472EP1_TE11",
                    useClass: "greenTxt mt-1",
                    unit: "℃",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_472EP1_TE23",
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
                    label: "AIR NOZZLE",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_472EP1_TE12",
                    useClass: "greenTxt mt-1",
                    unit: "℃",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_472EP1_TE24",
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
              label: "CL_472EP1_TT2",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472EP1_TT4",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472EP1_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472EP1_PT4",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
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
                "DB16_DBX136_0"
              )}`}
              label="DB16_DBX136_0"
              text="P"
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
                "DB16_DBX138_0"
              )}`}
              label="DB16_DBX138_0"
              text="P"
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
                "DB16_DBX140_0"
              )}`}
              label="DB16_DBX140_0"
              text="P"
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
              label: "CL_472FN1_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN1_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN1_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN1_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN1_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN1_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN1_PID",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_472FN2_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN2_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN2_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN2_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN2_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN2_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN2_PID",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_472FN3_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN3_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN3_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN3_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN3_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN3_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN3_PID",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_472FN4_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN4_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN4_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN4_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN4_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN4_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN4_PID",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_472FN5_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN5_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN5_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN5_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN5_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN5_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN5_PID",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_472FN6_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN6_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN6_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN6_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN6_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN6_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN6_PID",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_472FN7_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN7_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN7_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN7_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN7_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN7_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN7_PID",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_472FN8_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN8_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN8_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN8_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN8_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN8_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN8_PID",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_472FN9_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN9_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN9_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN9_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN9_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN9_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FN9_PID",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_472FNA_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNA_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNA_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNA_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNA_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNA_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNA_PID",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_472FNB_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNB_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNB_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNB_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNB_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNB_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNB_PID",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_472FNC_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNC_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNC_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNC_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNC_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNC_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FNC_PID",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_472FND_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FND_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FND_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FND_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FND_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FND_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472FND_PID",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
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
                label: "472DU4 TT1",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_472DU4_TT1",
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
                label: "472DU4 TT2",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_472DU4_TT2",
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
                label: "472DU4 TT3",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_472DU4_TT3",
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
                label: "CL_472DU4_TT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_472DU4_TT",
                useClass: "greenTxt ml-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-7 pipeHr ">
        <div className="d-flex justify-content-around mt-1 align-items-center">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "Working Pressure",
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
          <div>
            <div className="d-flex align-items-center ">
              <div className="square grey-color"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "GDP1",
                }}
              />
            </div>
            <div className="d-flex align-items-center mt-1">
              <div className="square grey-color"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "GDP2",
                }}
              />
            </div>
            <div className="d-flex align-items-center mt-1 ">
              <div className="square grey-color"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-2",
                  label: "GDP3",
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
                  "DB16_DBX114_7"
                )}`}
                label="DB16_DBX114_7"
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
            <BlackContainer
              data={{
                label: "GrateDrive_Man",
                useClass: "greenTxt  mt-1",
                unit: "spm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "GrateDrive_Man",
                useClass: "greenTxt  mt-1",
                unit: "spm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center">
            <div className="d-flex align-items-center ">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Life Bit",
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

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark p-1 bg-secondary mt-1",
                label: "GO START",
              }}
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark p-1 bg-secondary mt-1",
                label: "GO READY",
              }}
            />
          </div>
          <div>
            <div className="d-flex ">
              {/* <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Grate Speed SP",
                }}
              />
              <BlackContainer
                data={{
                  label: "CM1_561MD1_IT",
                  useClass: "greenTxt ml-2",
                  unit: "spm",
                  unitColor: "unitColor",
                }}
              /> */}
            </div>
            <div className="d-flex mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "Grate Speed PV",
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
                  label: "Cyl POS Dill",
                }}
              />
              <BlackContainer
                data={{
                  label: "DB16_DBW14",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
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
                className={`square digital-tag mt-1 ${useColorStatus("NA")}`}
                label="NA"
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
                className={`square digital-tag mt-1 ${useColorStatus("NA")}`}
                label="NA"
              />
            </div>
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
                label: "472LQ1",
              }}
            />
            <MotorCircleDigitalTag
              className={`ml-2 line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_472LQ1_RUN", healthyLabel: "CL_472LQ1_PH" }
              )}`}
              label="CL_472LQ1_RUN"
            />
          </div>
        </div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472LQ1_FS1")}`}
          label="CL_472LQ1_FS1"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472LQ1_FS2")}`}
          label="CL_472LQ1_FS2"
          text="S"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472LQ1_LS1")}`}
          label="CL_472LQ1_LS1"
          text="L"
        />
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_472RC1_RUN", healthyLabel: "CL_472RC1_PH" }
            )}`}
            label="CL_472RC1_RUN"
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
              { runLabel: "CL_472RC2_RUN", healthyLabel: "CL_472RC2_PH" }
            )}`}
            label="CL_472RC2_RUN"
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
              { runLabel: "CL_472RC3_RUN", healthyLabel: "CL_472RC3_PH" }
            )}`}
            label="CL_472RC3_RUN"
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
              { runLabel: "CL_472RC4_RUN", healthyLabel: "CL_472RC4_PH" }
            )}`}
            label="CL_472RC4_RUN"
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
              { runLabel: "CL_472RC5_RUN", healthyLabel: "CL_472RC5_PH" }
            )}`}
            label="CL_472RC5_RUN"
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
              { runLabel: "CL_472RC6_RUN", healthyLabel: "CL_472RC6_PH" }
            )}`}
            label="CL_472RC6_RUN"
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
          <MotorCircleDigitalTag
            className={`mt-1 square digital-tag ${useColorStatus(
              "DB16_DBX120_0"
            )}`}
            label="DB16_DBX120_0"
          />
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
              "DB16_DBX120_1"
            )}`}
            label="DB16_DBX120_1"
          />
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 3",
            }}
          />
          <MotorCircleDigitalTag
            className={`mt-1 square digital-tag ${useColorStatus(
              "DB16_DBX120_2"
            )}`}
            label="DB16_DBX120_2"
          />
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
              "DB16_DBX120_3"
            )}`}
            label="DB16_DBX120_3"
          />
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 5",
            }}
          />
          <MotorCircleDigitalTag
            className={`mt-1 square digital-tag ${useColorStatus(
              "DB16_DBX120_4"
            )}`}
            label="DB16_DBX120_4"
          />
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
              "DB16_DBX120_5"
            )}`}
            label="DB16_DBX120_5"
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
              "DB16_DBX120_6"
            )}`}
            label="DB16_DBX120_6"
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
              "DB16_DBX120_7"
            )}`}
            label="DB16_DBX120_7"
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
              "DB16_DBX121_1"
            )}`}
            label="DB16_DBX121_1"
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
            className={`dot digital-tag ${useColorStatus("CL_472CC1_HP1_LFT")}`}
            label="CL_472CC1_HP1_LFT"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CL_472CC1_HP1_RGT"
            )} ml-1`}
            label="CL_472CC1_HP1_RGT"
            text="L"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_472CC1_HP2_LFT")}`}
            label="CL_472CC1_HP2_LFT"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CL_472CC1_HP2_RGT"
            )} ml-1`}
            label="CL_472CC1_HP2_RGT"
            text="L"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_472CC1_HP3_LFT")}`}
            label="CL_472CC1_HP3_LFT"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CL_472CC1_HP3_RGT"
            )} ml-1`}
            label="CL_472CC1_HP3_RGT"
            text="L"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_472CC1_HP4_LFT")}`}
            label="CL_472CC1_HP4_LFT"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CL_472CC1_HP4_RGT"
            )} ml-1`}
            label="CL_472CC1_HP4_RGT"
            text="L"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_472CC1_HP5_LFT")}`}
            label="CL_472CC1_HP5_LFT"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CL_472CC1_HP5_RGT"
            )} ml-1`}
            label="CL_472CC1_HP5_RGT"
            text="L"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_472CC1_HP6_LFT")}`}
            label="CL_472CC1_HP6_LFT"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CL_472CC1_HP6_RGT"
            )} ml-1`}
            label="CL_472CC1_HP6_RGT"
            text="L"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_472CC1_HP7_LFT")}`}
            label="CL_472CC1_HP7_LFT"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CL_472CC1_HP7_RGT"
            )} ml-1`}
            label="CL_472CC1_HP7_RGT"
            text="L"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_472CC1_HP8_LFT")}`}
            label="CL_472CC1_HP8_LFT"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CL_472CC1_HP8_RGT"
            )} ml-1`}
            label="CL_472CC1_HP8_RGT"
            text="L"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_472CC1_HP9_LFT")}`}
            label="CL_472CC1_HP9_LFT"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CL_472CC1_HP9_RGT"
            )} ml-1`}
            label="CL_472CC1_HP9_RGT"
            text="L"
          />
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_472FN1_RUN", healthyLabel: "CL_472FN1_PH" }
              )}`}
              label="CL_472FN1_RUN"
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
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "NA", healthyLabel: "NA" }
              )}`}
              label="NA"
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
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_472FN3_RUN", healthyLabel: "CL_472FN3_PH" }
              )}`}
              label="CL_472FN3_RUN"
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
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_472FN4_RUN", healthyLabel: "CL_472FN4_PH" }
              )}`}
              label="CL_472FN4_RUN"
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
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_472FN5_RUN", healthyLabel: "CL_472FN5_PH" }
              )}`}
              label="CL_472FN5_RUN"
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
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_472FN6_RUN", healthyLabel: "CL_472FN6_PH" }
              )}`}
              label="CL_472FN6_RUN"
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
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_472FN7_RUN", healthyLabel: "CL_472FN7_PH" }
              )}`}
              label="CL_472FN7_RUN"
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
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_472FN8_RUN", healthyLabel: "CL_472FN8_PH" }
              )}`}
              label="CL_472FN8_RUN"
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
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_472FN9_RUN", healthyLabel: "CL_472FN9_PH" }
              )}`}
              label="CL_472FN9_RUN"
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
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_472FNA_RUN", healthyLabel: "CL_472FNA_PH" }
              )}`}
              label="CL_472FNA_RUN"
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
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_472FNB_RUN", healthyLabel: "CL_472FNB_PH" }
              )}`}
              label="CL_472FNB_RUN"
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
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_472FNC_RUN", healthyLabel: "CL_472FNC_PH" }
              )}`}
              label="CL_472FNC_RUN"
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
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_472FND_RUN", healthyLabel: "CL_472FND_PH" }
              )}`}
              label="CL_472FND_RUN"
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
      <div className="position-absolute single-text-15">
        <div className="d-flex align-items-center">
          {/* <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Specific Power",
            }}
          />
          <BlackContainer
            data={{
              label: "CM1_561MD1_IT",
              useClass: "greenTxt ml-2",
              unit: "UNIT/T",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="d-flex align-items-center mt-1">
          {/* <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Specific Flow",
            }}
          />
          <BlackContainer
            data={{
              label: "CM1_561MD1_IT",
              useClass: "greenTxt ml-2",
              unit: "Nm3/Kg",
              unitColor: "unitColor",
            }}
          /> */}
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
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          {/* <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Kilin Feed PV",
            }}
          />
          <BlackContainer
            data={{
              label: "CM1_561MD1_IT",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Clinker Bed Height",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 pipeHr"></div>
      <div className="position-absolute single-text-17">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "SA Temp",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_462KL1_TT4",
              useClass: "greenTxt ml-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <div className="ml-4 text-center">
            <BlackContainer
              data={{
                label: "DB16_DBW30",
                useClass: "greenTxt",
                unit: "A",
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
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TA Temp",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Hood Draught Temp",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_HoodDraft",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "472BF1",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "CL_472RA1"
              )}`}
              label="CL_472RA1_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <div>
              <div className="yellowline-Vr upArrow position-absolute"></div>

              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CL_472FNE_RUN", healthyLabel: "CL_472FNE_PH" }
                )}`}
                label="CL_472FNE_RUN"
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
              label: "472BL1",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_472BL1_RUN", healthyLabel: "CL_472BL1_PH" }
            )}`}
            label="CL_472BL1_RUN"
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_472BL2_RUN", healthyLabel: "CL_472BL2_PH" }
            )}`}
            label="CL_472BL2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "472BL2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({ openLabel: "CL_472LD2_OLS", closeLabel: "CL_472LD2_CLS", healthyLabel: "CL_472LD2_PH" })}`}
              label="CL_472LD2_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LD2",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({ openLabel: "CL_472LD3_OLS", closeLabel: "CL_472LD3_CLS", healthyLabel: "CL_472LD3_PH" })}`}
              label="CL_472LD3_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LD3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({ openLabel: "CL_472LD1_OLS", closeLabel: "CL_472LD1_CLS", healthyLabel: "CL_472LD1_PH" })}`}
            label="CL_472LD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "LD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "SD1",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({ openLabel: "CL_472SD1_OLS", closeLabel: "CL_472SD1_CLS", healthyLabel: "CL_472SD1_PH" })}`}
            label="CL_472SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-23">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "LD1A",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({ openLabel: "CL_472LD1A_OLS", closeLabel: "CL_472LD1A_CLS", healthyLabel: "CL_472LD1A_PH" })}`}
              label="CL_472LD1A_OLS"
            />  
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "SD2",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({ openLabel: "CL_472SD2_OLS", closeLabel: "CL_472SD2_CLS" })}`}
              label="CL_472SD2_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({ openLabel: "CL_472SD3_OLS", closeLabel: "CL_472SD3_CLS", healthyLabel: "CL_472SD3_PH" })}`}
            label="CL_472SD3_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "SD3",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({ openLabel: "CL_472SD4_OLS", closeLabel: "CL_472SD4_CLS", healthyLabel: "CL_472SD4_PH" })}`}
            label="CL_472SD4_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "SD4",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({ openLabel: "CL_472LD4_OLS", closeLabel: "CL_472LD4_CLS", healthyLabel: "CL_472LD4_PH" })}`}
            label="CL_472LD4_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "LD4",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({ openLabel: "CL_472SD5_OLS", closeLabel: "CL_472SD5_CLS", healthyLabel: "CL_472SD5_PH" })}`}
            label="CL_472SD5_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "SD5",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({ openLabel: "CL_472LD5_OLS", closeLabel: "CL_472LD5_CLS", healthyLabel: "CL_472LD5_PH" })}`}
            label="CL_472LD5_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "472LD5",
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
            label: "CL_472LD5_PID",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_472LD5_PID",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_472LD5_PID",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_472LD5_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 p-1 bg-secondary",
            label: "TIMERS",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "CL_472BF1_PT1",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_472BF1_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-32",
          label: "FRESH AIR",
        }}
      />
      <div className="position-absolute single-text-33 d-flex">
        <BlackContainer
          data={{
            label: "CL_472FNF_TT1",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_472LD4_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-36 d-flex">
        <BlackContainer
          data={{
            label: "CL_472SD2_ZT",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "DB16_DBW16",
            useClass: "greenTxt ",
            unit: "spm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1 bg-secondary",
            label: "Grate Drive Interlock",
          }}
        />
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
          className={`dot digital-tag ${useColorStatus("NA")} position-absolute single-text-38`}
          label="NA"
          text="H"
        />
      <div className="position-absolute single-text-39 d-flex">
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
      </div>
      <div className="position-absolute single-text-40 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CL_472LD1A_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_472SD1_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CL_472LD1_ZT",
          useClass: "greenTxt position-absolute single-text-41",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-42 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CL_472SD3_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_472LD2_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CL_472LD3_ZT",
          useClass: "greenTxt position-absolute single-text-43",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CL_472SD4_ZT",
          useClass: "greenTxt position-absolute single-text-44",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className=" position-absolute single-text-45 d-flex flex-column">
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
      </div>
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
        {/* <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "Cooler Trips in",
          }}
        />
        <BlackContainer
          data={{
            label: "CM1_561MD1_IT",
            useClass: "greenTxt ml-2",
            unit: "sec",
            unitColor: "unitColor",
          }}
        /> */}
      </div>
      <div className="position-absolute single-text-48 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "472FNF.M01",
          }}
        />
        <div>
          <div className="yellowline-Vr upArrow position-absolute"></div>

          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CL_472FNF_M01_RUN",
                healthyLabel: "CL_472FNF_M01_PH",
              }
            )}`}
            label="CL_472FNF_M01_RUN"
          />
        </div>
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
            "CL_472RA2"
          )}`}
          label="CL_472RA2_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_472RA3"
          )}`}
          label="CL_472RA3_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_472RA4"
          )}`}
          label="CL_472RA4_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_472RA5"
          )}`}
          label="CL_472RA5_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_472RA6"
          )}`}
          label="CL_472RA6_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_472RA7"
          )}`}
          label="CL_472RA7_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_472RA8"
          )}`}
          label="CL_472RA8_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_472RA9"
          )}`}
          label="CL_472RA9_RUN"
        />
      </div>
      <div className="position-absolute single-text-51 d-flex align-items-center">
        <div className="square grey-color"></div>
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_472TR1_HT_ON", healthyLabel: "CL_472TR1_RM_TRP" })}`} label="CL_472TR1_HT_ON" />
        <div className="square grey-color"></div>
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_472TR2_HT_ON", healthyLabel: "CL_472TR2_RM_TRP" })}`} label="CL_472TR2_HT_ON" />
        <div className="square grey-color"></div>
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_472TR3_HT_ON", healthyLabel: "CL_472TR3_RM_TRP" })}`} label="CL_472TR3_HT_ON" />
        <div className="square grey-color"></div>
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_472TR4_HT_ON", healthyLabel: "CL_472TR4_RM_TRP" })}`} label="CL_472TR4_HT_ON" />
        <div className="square grey-color"></div>
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_472TR5_HT_ON", healthyLabel: "CL_472TR5_RM_TRP" })}`} label="CL_472TR5_HT_ON" />
        <div className="square grey-color"></div>
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_472TR6_HT_ON", healthyLabel: "CL_472TR6_RM_TRP" })}`} label="CL_472TR6_HT_ON" />
        <div className="square grey-color"></div>
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_472TR7_HT_ON", healthyLabel: "CL_472TR7_RM_TRP" })}`} label="CL_472TR7_HT_ON" />
        <div className="square grey-color"></div>
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_472TR8_HT_ON", healthyLabel: "CL_472TR8_RM_TRP" })}`} label="CL_472TR8_HT_ON" />
      </div>
      <div className="position-absolute single-text-52 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CL_472CV7_Curr",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_472CV8_Curr",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark p-1 bg-secondary position-absolute single-text-53",
          label: "CLR ROLLER CRUSHER",
        }}
      />
      <div className=" position-absolute single-text-54 d-flex align-items-center">
        <div className="chimni-red"></div>
        <div className="text-center ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "SK1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-55 ">
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
          label: "CL_492SD1_ZT",
          useClass: "greenTxt position-absolute single-text-56",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CL_472SD5_ZT",
          useClass: "greenTxt position-absolute single-text-57",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-58 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472CV7_ZS1")}`}
          label="CL_472CV7_ZS1"
          text="Z"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472CV7_ZS2")}`}
          label="CL_472CV7_ZS2"
          text="Z"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472CV7_FS1")}`}
          label="CL_472CV7_FS1"
          text="F"
        />
      </div>
      <div className="position-absolute single-text-59 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472CV8_ZS1")}`}
          label="CL_472CV8_ZS1"
          text="Z"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472CV8_ZS2")}`}
          label="CL_472CV8_ZS2"
          text="Z"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472CV8_FS1")}`}
          label="CL_472CV8_FS1"
          text="F"
        />
      </div>
      <div className="position-absolute single-text-60 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_472SM1_RUN", healthyLabel: "CL_472SM1_PH" }
          )}`}
          label="CL_472SM1_RUN"
        />
      </div>
      <div className="d-flex position-absolute single-text-61 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="F"
        />
        <MotorCircleDigitalTag
          className={`ml-2 line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_472FNG_RUN", healthyLabel: "CL_472FNG_PH" }
          )}`}
          label="CL_472FNG_RUN"
        />
      </div>
      <div className="position-absolute single-text-62 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_472FNF_HTR_ON")}`}
          label="CL_472FNF_HTR_ON"
          text="H"
        />
      </div>
      <div className="position-absolute single-text-63 ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_472BF1_RUN", healthyLabel: "CL_472BF1_PH" }
          )}`}
          label="CL_472BF1_RUN"
        />
      </div>
    </div>
  );
};

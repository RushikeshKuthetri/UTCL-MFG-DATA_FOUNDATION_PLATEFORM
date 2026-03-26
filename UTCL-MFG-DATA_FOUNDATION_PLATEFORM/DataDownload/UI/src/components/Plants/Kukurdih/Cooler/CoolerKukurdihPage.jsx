import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../index";
import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const CoolerKukurdihPage = () => {
  return (
    <div className=" Coolerkotputli cooler-kukurdih w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471CV4_RUN", healthyLabel: "CL_471CV4_PH" }
          )}`,
          secondCircleLabel: "CL_471CV4_RUN",
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
            { runLabel: "CL_471CV5_RUN", healthyLabel: "CL_471CV5_PH" }
          )}`,
          secondCircleLabel: "CL_471CV5_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471CV2_RUN", healthyLabel: "CL_471CV2_PH" }
          )}`,
          secondCircleLabel: "CL_471CV2_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471CV1_RUN", healthyLabel: "CL_471CV1_PH" }
          )}`,
          secondCircleLabel: "CL_471CV1_RUN",
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
            { runLabel: "CL_471CV3_RUN", healthyLabel: "CL_471CV3_PH" }
          )}`,
          secondCircleLabel: "CL_471CV3_RUN",
          secondCircleText: "",
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
            { runLabel: "CL_491DB1_RUN", healthyLabel: "CL_491DB1_PH" }
          )}`,
          secondCircleLabel: "CL_491DB1_RUN",
          secondCircleText: "",
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
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471CV6_RUN", healthyLabel: "CL_471CV6_PH" }
          )}`,
          secondCircleLabel: "CL_471CV6_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471CV7_RUN", healthyLabel: "CL_471CV7_PH" }
          )}`,
          secondCircleLabel: "CL_471CV7_RUN",
          secondCircleText: "",
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
      <div className="yellowline-Hr leftarrow  position-absolute pipe-111"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-112"></div>
      <div className="yellowline-Hr  position-absolute pipe-113"></div>
   
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
        <div
          className={`square digital-tag ${useColorStatus("CL_471EP1_HP1_LS")}`}
          label="CL_471EP1_HP1_LS"
        ></div>

        <div
          className={`square digital-tag ${useColorStatus("CL_471EP1_HP2_LS")}`}
          label="CL_471EP1_HP2_LS"
        ></div>

        <div
          className={`square digital-tag ${useColorStatus("CL_471EP1_HP3_LS")}`}
          label="CL_471EP1_HP3_LS"
        ></div>
        <div
          className={`square digital-tag ${useColorStatus("CL_471EP1_HP4_LS")}`}
          label="CL_471EP1_HP4_LS"
        ></div>
        <div
          className={`square digital-tag ${useColorStatus("CL_471EP1_HP5_LS")}`}
          label="CL_471EP1_HP5_LS"
        ></div>
        <div
          className={`square digital-tag ${useColorStatus("CL_471EP1_HP6_LS")}`}
          label="CL_471EP1_HP6_LS"
        ></div>
        <div
          className={`square digital-tag ${useColorStatus("CL_471EP1_HP7_LS")}`}
          label="CL_471EP1_HP7_LS"
        ></div>
        <div
          className={`square digital-tag ${useColorStatus("CL_471EP1_HP8_LS")}`}
          label="CL_471EP1_HP8_LS"
        ></div>
        {/* 
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_472EP1_HP8_LS")}`}
            label="CL_472EP1_HP8_LS"
            text="L"
          /> */}
      </div>
      <div className="pipeHr  position-absolute single-text-3 d-flex justify-content-around align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "CL_471EP1_TT1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471EP1_TT3",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471EP1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471EP1_PT3",
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
                  {
                    runLabel: "CL_471MT1_1_RUN",
                    healthyLabel: "CL_471MT1_1_PH",
                  }
                )}`}
                label="CL_471MT1_RUN"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-1",
                  label: "CL_471MT1",
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
                    label: "CL_471EP1_TE11",
                    useClass: "greenTxt mt-1",
                    unit: "℃",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_471EP1_TE23",
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
                    label: "CL_471EP1_TE12",
                    useClass: "greenTxt mt-1",
                    unit: "℃",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_471EP1_TE24",
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
              label: "CL_471EP1_TT2",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471EP1_TT4",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471EP1_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471EP1_PT4",
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
            <div
              className={`square digital-tag ${useColorStatus(
                "DB16_DBX136_0"
              )}`}
              label="DB16_DBX136_0"
            ></div>
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
            <div
              className={`square digital-tag ${useColorStatus(
                "DB16_DBX138_0"
              )}`}
              label="DB16_DBX138_0"
            ></div>
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
            <div
              className={`square digital-tag ${useColorStatus(
                "DB16_DBX140_0"
              )}`}
              label="DB16_DBX140_0"
            ></div>
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
              label: "CL_471FN1_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN1_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN1_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN1_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN1_PID",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
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
            />*/}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN2_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN2_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN2_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN2_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN2_PID",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
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
            /> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN3_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN3_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN3_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN3_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN3_PID",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
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
            /> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN4_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN4_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN4_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN4_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN4_PID",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
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
            Tag no 145 done
            
            */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN5_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN5_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN5_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN5_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN5_PID",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
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
            /> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN6_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN6_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN6_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN6_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN6_PID",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
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
            /> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN7_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN7_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN7_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN7_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN7_PID",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
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
            /> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN8_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN8_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN8_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN8_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN8_PID",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
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
            /> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN9_FT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN9_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN9_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN9_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN9_PID",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
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
            /> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FNA_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNA_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNA_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNA_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNA_PID",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
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
            /> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FNB_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNB_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNB_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNB_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNB_PID",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
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
            /> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FNC_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNC_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNC_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNC_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNC_PID",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
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
            /> */}
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FND_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FND_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FND_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FND_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FND_PID",
              useClass: "greenTxt mt-1",
              unit: "m3/min",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
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
            /> */}
        </div>
      </div>
      <div className="position-absolute single-text-6 border p-1 text-center">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Hot Air Recirculation(℃)",
            }}
          />
        </div>
        <div className="mt-1 mb-2">
          <div className="d-flex justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "471DU4 TT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471DU4_TT",
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
                label: "471DU4 TT1",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471DU4_TT1",
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
                label: "471DU4 TT2",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471DU4_TT2",
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
                label: "CL_471DU4_TT3",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471DU4_TT3",
                useClass: "greenTxt ml-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HAR COOLER TRIP TIME",
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

        <div className="d-flex mt-2 justify-content-center align-items-center">
          <div
            className={`square mr-3 digital-tag ${useColorStatus(
              "CL_471DU4_TT_ALM1"
            )}`}
            label="CL_471DU4_TT_ALM1"
          ></div>
          <div
            className={`square digital-tag ${useColorStatus(
              "CL_471DU4_TT_ALM2"
            )}`}
            label="CL_471DU4_TT_ALM2"
          ></div>
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
          <div className="mb-2">
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
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-left mb-1",
                label: "HPP1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-left mb-1",
                label: "HPP2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-left mb-1",
                label: "HPP3",
              }}
            />
          </div>
          <div>
            <div className="d-flex align-items-center ">
              <div
                className={`dot digital-tag ${useColorStatus("DB16_DBX136_1")}`}
                label="DB16_DBX136_1"
              >
                M
              </div>
            </div>
            <div className="d-flex align-items-center mt-1">
              <div
                className={`dot digital-tag ${useColorStatus("DB16_DBX138_1")}`}
                label="DB16_DBX138_1"
              >
                M
              </div>
            </div>
            <div className="d-flex align-items-center mt-1 ">
              <div
                className={`dot digital-tag ${useColorStatus("DB16_DBX140_1")}`}
                label="DB16_DBX140_1"
              >
                M
              </div>
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
            {/* <BlackContainer
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
              /> */}
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
                className={`dot digital-tag mt-1 ${useColorStatus(
                  "CL_UP_MNT_1"
                )}`}
                label="CL_UP_MNT_1"
                text="L"
              />
            </div>
            <div className="text-center ml-1  mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "UP MNT 2",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 ${useColorStatus(
                  "CL_UP_MNT_2"
                )}`}
                label="CL_UP_MNT_2"
                text="L"
              />
            </div>

            <div className="d-flex text-center mt-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag mr-1 ${useColorStatus(
                  "CL_471LQ1_GRS_ZS1"
                )}`}
                label="CL_471LQ1_GRS_ZS1"
                text="S"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag mr-1 ${useColorStatus(
                  "CL_471LQ1_GRS_ZS2"
                )}`}
                label="CL_471LQ1_GRS_ZS2"
                text="S"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag mr-1 ${useColorStatus(
                  "CL_471LQ1_GRS_LS"
                )}`}
                label="CL_471LQ1_GRS_LS"
                text="L"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-8 pipeHr"></div>
      <div className="position-absolute single-text-9 d-flex  mt-1">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "471LQ1",
            }}
          />
          <MotorCircleDigitalTag
            className={`ml-2 line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_471LQ1_RUN", healthyLabel: "CL_471LQ1_PH" }
            )}`}
            label="CL_471LQ1_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="text-center">
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag mr-1 ${useColorStatus(
                "CL_471RC1_ZSS"
              )}`}
              label="CL_471RC1_ZSS"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                runLabel: "CL_471RC1_RUN",
                healthyLabel: "CL_471RC1_PH",
              })}`}
              label="CL_471RC1_RUN"
            />
          </div>
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
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag mr-1 ${useColorStatus(
                "CL_471RC2_ZSS"
              )}`}
              label="CL_471RC2_ZSS"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                runLabel: "CL_471RC2_RUN",
                healthyLabel: "CL_471RC2_PH",
              })}`}
              label="CL_471RC2_RUN"
            />
          </div>
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
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag mr-1 ${useColorStatus(
                "CL_471RC3_ZSS"
              )}`}
              label="CL_471RC3_ZSS"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                runLabel: "CL_471RC3_RUN",
                healthyLabel: "CL_471RC3_PH",
              })}`}
              label="CL_471RC3_RUN"
            />
          </div>
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
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag mr-1 ${useColorStatus(
                "CL_471RC4_ZSS"
              )}`}
              label="CL_471RC4_ZSS"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                runLabel: "CL_471RC4_RUN",
                healthyLabel: "CL_471RC4_PH",
              })}`}
              label="CL_471RC4_RUN"
            />
          </div>
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
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag mr-1 ${useColorStatus(
                "CL_471RC5_ZSS"
              )}`}
              label="CL_471RC5_ZSS"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                runLabel: "CL_471RC5_RUN",
                healthyLabel: "CL_471RC5_PH",
              })}`}
              label="CL_471RC5_RUN"
            />
          </div>
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
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag mr-1 ${useColorStatus(
                "CL_471RC6_ZSS"
              )}`}
              label="CL_471RC6_ZSS"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                runLabel: "CL_471RC6_RUN",
                healthyLabel: "CL_471RC6_PH",
              })}`}
              label="CL_471RC6_RUN"
            />
          </div>
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
        <div className="border p-2 text-center d-flex flex-column align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 1",
            }}
          />
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "CL_471CC1_LS31"
              )}`}
              label="CL_471CC1_LS31"
            />
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "DB16_DBX120_0"
              )}`}
              label="DB16_DBX120_0"
            />
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "CL_471CC1_LS34"
              )}`}
              label="CL_471CC1_LS34"
            />
          </div>
        </div>
        <div className="border p-2 text-center d-flex flex-column align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 3",
            }}
          />
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "CL_471CC1_LS32"
              )}`}
              label="CL_471CC1_LS32"
            />
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "DB16_DBX120_1"
              )}`}
              label="DB16_DBX120_1"
            />
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "CL_471CC1_LS35"
              )}`}
              label="CL_471CC1_LS35"
            />
          </div>
        </div>
        <div className="border p-2 text-center d-flex flex-column align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 5",
            }}
          />
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "CL_471CC1_LS33"
              )}`}
              label="CL_471CC1_LS33"
            />
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "DB16_DBX120_2"
              )}`}
              label="DB16_DBX120_2"
            />
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "CL_471CC1_LS36"
              )}`}
              label="CL_471CC1_LS36"
            />
          </div>
        </div>
        <div className="border p-2 text-center d-flex flex-column align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 4",
            }}
          />
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "DB16_DBX120_3"
              )}`}
              label="DB16_DBX120_3"
            />
          </div>
        </div>
        <div className="border p-2 text-center d-flex flex-column align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 5",
            }}
          />
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "DB16_DBX120_4"
              )}`}
              label="DB16_DBX120_4"
            />
          </div>
        </div>
        <div className="border p-2 text-center d-flex flex-column align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 6",
            }}
          />
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "DB16_DBX120_5"
              )}`}
              label="DB16_DBX120_5"
            />
          </div>
        </div>
        <div className="border p-2 text-center d-flex flex-column align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 7",
            }}
          />
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "CL_471CC1_LS37"
              )}`}
              label="CL_471CC1_LS37"
            />
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "DB16_DBX120_6"
              )}`}
              label="DB16_DBX120_6"
            />
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "CL_471CC1_LS39"
              )}`}
              label="CL_471CC1_LS39"
            />
          </div>
        </div>
        <div className="border p-2 text-center d-flex flex-column align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 9",
            }}
          />
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "CL_471CC1_LS38"
              )}`}
              label="CL_471CC1_LS38"
            />
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "DB16_DBX120_7"
              )}`}
              label="DB16_DBX120_7"
            />
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "CL_471CC1_LS40"
              )}`}
              label="CL_471CC1_LS40"
            />
          </div>
        </div>
        <div className="border p-2 text-center d-flex flex-column align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 8",
            }}
          />
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`square mr-1 digital-tag ${useColorStatus(
                "DB16_DBX121_0"
              )}`}
              label="DB16_DBX121_0"
            />
          </div>
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
              "CL_471CC1_HP1_LFT"
            )}`}
            label="CL_471CC1_HP1_LFT"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP1_RGT"
            )}`}
            label="CL_471CC1_HP1_RGT"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP2_LFT"
            )}`}
            label="CL_471CC1_HP2_LFT"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP2_RGT"
            )}`}
            label="CL_471CC1_HP2_RGT"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP3_LFT"
            )}`}
            label="CL_471CC1_HP3_LFT"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP3_RGT"
            )}`}
            label="CL_471CC1_HP3_RGT"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP4_LFT"
            )}`}
            label="CL_471CC1_HP4_LFT"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP4_RGT"
            )}`}
            label="CL_471CC1_HP4_RGT"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP5_LFT"
            )}`}
            label="CL_471CC1_HP5_LFT"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP5_RGT"
            )}`}
            label="CL_471CC1_HP5_RGT"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP6_LFT"
            )}`}
            label="CL_471CC1_HP6_LFT"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP6_RGT"
            )}`}
            label="CL_471CC1_HP6_RGT"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP7_LFT"
            )}`}
            label="CL_471CC1_HP7_LFT"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP7_RGT"
            )}`}
            label="CL_471CC1_HP7_RGT"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP8_LFT"
            )}`}
            label="CL_471CC1_HP8_LFT"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP8_RGT"
            )}`}
            label="CL_471CC1_HP8_RGT"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP9_LFT"
            )}`}
            label="CL_471CC1_HP9_LFT"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_471CC1_HP9_RGT"
            )}`}
            label="CL_471CC1_HP9_RGT"
          />
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_471FN1_RUN", healthyLabel: "CL_471FN1_PH" }
              )}`}
              label="CL_471FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN1",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_471FN2_RUN", healthyLabel: "CL_471FN2_PH" }
              )}`}
              label="CL_471FN2_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN2",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_471FN3_RUN", healthyLabel: "CL_471FN3_PH" }
              )}`}
              label="CL_471FN3_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN3",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_471FN4_RUN", healthyLabel: "CL_471FN4_PH" }
              )}`}
              label="CL_471FN4_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN4",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_471FN5_RUN", healthyLabel: "CL_471FN5_PH" }
              )}`}
              label="CL_471FN5_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN5",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_471FN6_RUN", healthyLabel: "CL_471FN6_PH" }
              )}`}
              label="CL_471FN6_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN6",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_471FN7_RUN", healthyLabel: "CL_471FN7_PH" }
              )}`}
              label="CL_471FN7_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN7",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_471FN8_RUN", healthyLabel: "CL_471FN8_PH" }
              )}`}
              label="CL_471FN8_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN8",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_471FN9_RUN", healthyLabel: "CL_471FN9_PH" }
              )}`}
              label="CL_471FN9_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN9",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_471FNA_RUN", healthyLabel: "CL_471FNA_PH" }
              )}`}
              label="CL_471FNA_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FNA",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_471FNB_RUN", healthyLabel: "CL_471FNB_PH" }
              )}`}
              label="CL_471FNB_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FNB",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_471FNC_RUN", healthyLabel: "CL_471FNC_PH" }
              )}`}
              label="CL_471FNC_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FNC",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className="yellowline-Vr upArrow position-absolute"></div>

            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CL_471FND_RUN", healthyLabel: "CL_471FND_PH" }
              )}`}
              label="CL_471FND_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FND",
            }}
          />
        </div>
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
              unit: " ",
              unitColor: "unitColor",
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
              label: "KL_461KL1_TT5",
              useClass: "greenTxt ml-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className=" mt-3">
          <BlackContainer
            data={{
              label: "KL_461KL1_PT2",
              useClass: "greenTxt ml-2",
              unit: "mmwg",
              unitColor: "unitColor",
            }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Hood Draught Temp",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "471BF1",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "CL_471RA9"
              )}`}
              label="CL_471RA9_RUN"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <div>
              <div className="yellowline-Vr upArrow position-absolute"></div>

              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CL_471FNE_RUN", healthyLabel: "CL_471FNE_PH" }
                )}`}
                label="CL_471FNE_RUN"
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
              label: "471BL1",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_471BL1_RUN", healthyLabel: "CL_471BL1_PH" }
            )}`}
            label="CL_471BL1_RUN"
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_471BL2_RUN", healthyLabel: "CL_471BL2_PH" }
            )}`}
            label="CL_471BL2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "471BL2",
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
                  openLabel: "NA",
                  closeLabel: "NA",
                  healthyLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "471LD8",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "NA",
                  closeLabel: "NA",
                  healthyLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "471LD9",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "NA",
                closeLabel: "NA",
                healthyLabel: "NA",
              }
            )}`}
            label="NA"
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
            label: "471SD2",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "NA",
                closeLabel: "NA",
                healthyLabel: "NA",
              }
            )}`}
            label="NA"
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
              label: "471LD7",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "NA",
                  closeLabel: "NA",
                  healthyLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "471SD4",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "NA", closeLabel: "NA" }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "NA",
                closeLabel: "NA",
                healthyLabel: "NA",
              }
            )}`}
            label="NA"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "471SD6",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "NA",
                closeLabel: "NA",
                healthyLabel: "NA",
              }
            )}`}
            label="NA"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "471SD5",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "NA",
                closeLabel: "NA",
                healthyLabel: "NA",
              }
            )}`}
            label="CL_472LD4_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "471LD4",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "NA",
                closeLabel: "NA",
                healthyLabel: "NA",
              }
            )}`}
            label="NA"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        {/* <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "SD5",
          }}
        /> */}
      </div>
      <div className="position-absolute single-text-28">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "472LD6",
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
            label: "CL_471LD6_PID",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        {/* <BlackContainer
            data={{
              label: "CL_472LD5_PID",
              useClass: "greenTxt mt-1",
              unit: "%",
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
          /> */}
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
            label: "CL_471BF1_DPT",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471BF1_PT1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      {/* <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-32",
            label: "FRESH AIR",
          }}
        /> */}
      <div className="position-absolute single-text-33 d-flex">
        <BlackContainer
          data={{
            label: "CL_471LD4_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-36 d-flex">
        <BlackContainer
          data={{
            label: "CL_471SD4_ZT",
            useClass: "greenTxt ",
            unit: "℃",
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
        className={`dot digital-tag ${useColorStatus(
          "WHRS_RunFB"
        )} position-absolute single-text-38`}
        label="WHRS_RunFB"
        text="H"
      />
      <div className="position-absolute single-text-39 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_KL_FlameDetect"
          )}`}
          label="CL_KL_FlameDetect"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_KL_PA_Start")}`}
          label="CL_KL_PA_Start"
        />
      </div>
      <div className="position-absolute single-text-40 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CL_471LD7_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471SD2_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CL_471LD1_ZT",
          useClass: "greenTxt position-absolute single-text-41",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-42 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CL_471SD3_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471LD8_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CL_471LD9_ZT",
          useClass: "greenTxt position-absolute single-text-43",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CL_471SD5_ZT",
          useClass: "greenTxt position-absolute single-text-44",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className=" position-absolute single-text-45 d-flex ">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CL_471FNF_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "CL_471LD5_ZT",
              useClass: "greenTxt ",
              unit: "%",
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
            label: "471FNF.M01",
          }}
        />
        <div>
          <div className="yellowline-Vr upArrow position-absolute"></div>

          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CL_471FNF_M01_RUN",
                healthyLabel: "CL_471FNF_M01_PH",
              }
            )}`}
            label="CL_471FNF_M01_RUN"
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
            "CL_471RA1"
          )}`}
          label="CL_471RA1_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_471RA2"
          )}`}
          label="CL_471RA2_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_471RA3"
          )}`}
          label="CL_471RA3_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_471RA4"
          )}`}
          label="CL_471RA4_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_471RA5"
          )}`}
          label="CL_471RA5_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_471RA6"
          )}`}
          label="CL_471RA6_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_471RA7"
          )}`}
          label="CL_471RA7_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CL_471RA8"
          )}`}
          label="CL_471RA8_RUN"
        />
      </div>
      <div className="position-absolute single-text-51 d-flex align-items-center">
        {/* <div className="square grey-color"></div> */}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471TR1_RUN", healthyLabel: "CL_471TR1_PH" }
          )}`}
          label="CL_471TR1_RUN"
        />
        {/* <div className="square grey-color"></div> */}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471TR2_RUN", healthyLabel: "CL_471TR2_PH" }
          )}`}
          label="CL_471TR2_RUN"
        />
        {/* <div className="square grey-color"></div> */}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471TR3_RUN", healthyLabel: "CL_471TR3_PH" }
          )}`}
          label="CL_471TR3_RUN"
        />
        {/* <div className="square grey-color"></div> */}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471TR4_RUN", healthyLabel: "CL_471TR4_PH" }
          )}`}
          label="CL_471TR4_RUN"
        />
        {/* <div className="square grey-color"></div> */}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471TR5_RUN", healthyLabel: "CL_471TR5_PH" }
          )}`}
          label="CL_471TR5_RUN"
        />
        {/* <div className="square grey-color"></div> */}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471TR6_RUN", healthyLabel: "CL_471TR6_PH" }
          )}`}
          label="CL_471TR6_RUN"
        />
        {/* <div className="square grey-color"></div> */}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471TR7_RUN", healthyLabel: "CL_471TR7_PH" }
          )}`}
          label="CL_471TR7_RUN"
        />
        {/* <div className="square grey-color"></div> */}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471TR8_RUN", healthyLabel: "CL_471TR8_PH" }
          )}`}
          label="CL_471TR8_RUN"
        />
      </div>
      <div className="position-absolute single-text-52 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CL_471CV7_Curr",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471CV6_Curr",
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
              label: "471SK1",
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
          label: "CL_491DB1_Curr",
          useClass: "greenTxt position-absolute single-text-56",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-57">
        <BlackContainer
          data={{
            label: "CL_471FNF_PID",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        {/* <BlackContainer
            data={{
              label: "CL_472SD5_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_472SD5_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          /> */}
      </div>

      <div className="position-absolute single-text-58 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_471CV6_FS1")}`}
          label="CL_471CV6_FS1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_471CV6_ZS1")}`}
          label="CL_471CV6_ZS1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_471CV6_ZS2")}`}
          label="CL_471CV6_ZS2"
        />
      </div>
      <div className="position-absolute single-text-59 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_471CV7_FS1")}`}
          label="CL_471CV7_FS1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_471CV7_ZS1")}`}
          label="CL_471CV7_ZS1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_471CV7_ZS2")}`}
          label="CL_471CV7_ZS2"
        />
      </div>
      <div className="position-absolute single-text-60 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471SM1_RUN", healthyLabel: "CL_471SM1_PH" }
          )}`}
          label="CL_471SM1_RUN"
        />
      </div>
      <div className="d-flex position-absolute single-text-61 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("BullNoseRun_FB")}`}
          label="BullNoseRun_FB"
          text="F"
        />
        <MotorCircleDigitalTag
          className={`ml-2 dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CL_471FNG_RUN", healthyLabel: "CL_471FNG_PH" }
          )}`}
          label="CL_471FNG_RUN"
        />
      </div>
      <div className="position-absolute single-text-62 "></div>
      <div className="position-absolute single-text-63 ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_471BF1_DPT")}`}
          label="CL_471BF1_DPT"
        />
      </div>

      <div className="position-absolute single-text-64">
        <BlackContainer
          data={{
            label: "KL_461KL1_PT2",
            useClass: "greenTxt  mt-2",
            unit: "mmwg",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-65">
        <BlackContainer
          data={{
            label: "CL_471CC1_TT",
            useClass: "greenTxt  mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-66 mt-3 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-left",
            label: "Department Reset",
          }}
        />
        <div className="border p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "CL",
            }}
          />
        </div>
      </div>

      <div className="postion-absolute single-text-67">
        <div className="chimni-red"></div>
      </div>

      <div className="position-absolute single-text-68 text-center">
        <BlackContainer
          data={{
            label: "DB16_DBW30",
            useClass: "greenTxt mb-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex align-items-center">
          <BlackContainer
            data={{
              label: "CL_HoodDraft",
              useClass: "greenTxt mr-4",
              unit: "%",
              unitColor: "unitColor",
            }}
          />

          <div className=" align-items-center">
            <BlackContainer
              data={{
                label: "BNFan_ET",
                useClass: "greenTxt ",
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
      </div>

      <div className="position-absolute single-text-69 d-flex">
        <BlackContainer
          data={{
            label: "CL_471CC1_TT31",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471CC1_TT34",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471CC1_TT32",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471CC1_TT35",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471CC1_TT33",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471CC1_TT36",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-70">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CL_491DB1_PCSL"
          )} `}
          label="CL_491DB1_PCSL"
          text="PCL"
        />

        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CL_491DB1_PCSR"
          )} `}
          label="CL_491DB1_PCSR"
          text="PCR"
        />
      </div>

      <div className="position-absolute single-text-71 d-flex flex-column">
        <div className="d-flex">
          <div
            className={`dot digital-tag mr-3 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_471WP1_RUN", healthyLabel: "CL_471WP1_PH" }
            )}`}
            label="CL_471WP1_RUN"
          ></div>
          <div
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CL_471WP2_RUN", healthyLabel: "CL_471WP2_PH" }
            )}`}
            label="CL_471WP2_RUN"
          ></div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left mr-3",
              label: "471WP1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left ",
              label: "471WP2",
            }}
          />
        </div>
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark text-left single-text-72",
          label: "COANDA NOZZLE TABLE",
        }}
      />
      <BlackContainer
        data={{
          label: "CL_471LD6_ZT",
          useClass: "greenTxt single-text-73",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />

      <div className="single-text-74 d-flex flex-column position-absolute">
        <div className="data-1"> 
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "471GK1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "GAL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "GAM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "GAN",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "GAP",
            }}
          />
              <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "GAQ",
            }}
          />
                 <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "GAR",
            }}
          />
                      <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "GAS",
            }}
          />
        </div>

        <div className="data-1 ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "RA1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "RA2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "RA3",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "RA4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "RA5",
            }}
          />
           <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "RA6",
            }}
          />
           <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "RA7",
            }}
          />
           <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "RA8",
            }}
          />
        </div>
      </div> 

      <div className="position-absolute single-text-75">
        <p>FROM KILN</p>
      <div className="yellowline-Hr rightarrow position-absolute pipe-114"></div>
      </div>
      <div className="yellowline-Vr downArrow position-absolute pipe-115"></div>
    </div>
  );
};

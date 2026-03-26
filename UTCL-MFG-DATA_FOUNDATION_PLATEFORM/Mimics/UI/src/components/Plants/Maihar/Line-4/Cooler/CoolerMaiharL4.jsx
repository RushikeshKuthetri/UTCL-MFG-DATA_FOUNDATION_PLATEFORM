import {
  BlackContainer,
  TextContainerWithWrapWord,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";
import {
  useColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const CoolerMaiharL4 = () => {
  return (
    <div className="cooler-maihar-l4 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "NA", healthyLabel: "NA" }
          )}`,
          secondCircleLabel: "NA",
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
            { runLabel: "NA", healthyLabel: "NA" }
          )}`,
          secondCircleLabel: "NA",
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
            { runLabel: "NA", healthyLabel: "NA" }
          )}`,
          secondCircleLabel: "NA",
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
            { runLabel: "NA", healthyLabel: "NA" }
          )}`,
          secondCircleLabel: "NA",
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
            { runLabel: "NA", healthyLabel: "NA" }
          )}`,
          secondCircleLabel: "NA",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "494DB1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "NA", healthyLabel: "NA" }
          )}`,
          secondCircleLabel: "NA",
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
            { runLabel: "NA", healthyLabel: "NA" }
          )}`,
          secondCircleLabel: "NA",
          secondCircleText: "",
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
            { runLabel: "NA", healthyLabel: "NA" }
          )}`,
          secondCircleLabel: "NA",
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
          className={`square digital-tag ${useColorStatus("CL_474EP1_HP1_LS")}`}
          label="CL_474EP1_HP1_LS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474EP1_HP2_LS")}`}
          label="CL_474EP1_HP2_LS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474EP1_HP3_LS")}`}
          label="CL_474EP1_HP3_LS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474EP1_HP4_LS")}`}
          label="CL_474EP1_HP4_LS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474EP1_HP5_LS")}`}
          label="CL_474EP1_HP5_LS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474EP1_HP6_LS")}`}
          label="CL_474EP1_HP6_LS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474EP1_HP7_LS")}`}
          label="CL_474EP1_HP7_LS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474EP1_HP8_LS")}`}
          label="CL_474EP1_HP8_LS"
        />
      </div>
      <div className="pipeHr  position-absolute single-text-3 d-flex justify-content-around align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "CL_474EP1_TT1",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474EP1_TT3",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474EP1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474EP1_PT3",
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
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                label="NA"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-1",
                  label: "474EP1",
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
                    label: "CL_474EP1_TE11",
                    useClass: "greenTxt mt-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_474EP1_TE23",
                    useClass: "greenTxt mt-1",
                    unit: "°C",
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
                    label: "CL_474EP1_TE12",
                    useClass: "greenTxt mt-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_474EP1_TE24",
                    useClass: "greenTxt mt-1",
                    unit: "°C",
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
              label: "CL_474EP1_TT2",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474EP1_TT4",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474EP1_PT2",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474EP1_PT4",
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
              className={`dot mt-1 p-1 digital-tag ${useColorStatus(
                "DB16_DBX136_0"
              )}`}
              label="DB16_DBX136_0"
              text="H"
            />
            <MotorCircleDigitalTag
              className={`mt-1 square digital-tag ${useColorStatus(
                "DB16_DBX136_1"
              )}`}
              label="DB16_DBX136_1"
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
              className={`dot mt-1 p-1 digital-tag ${useColorStatus(
                "DB16_DBX138_0"
              )}`}
              label="DB16_DBX138_0"
              text="H"
            />
            <MotorCircleDigitalTag
              className={`mt-1 square digital-tag ${useColorStatus(
                "DB16_DBX138_1"
              )}`}
              label="DB16_DBX138_1"
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
              className={`dot mt-1 p-1 digital-tag ${useColorStatus(
                "DB16_DBX140_0"
              )}`}
              label="DB16_DBX140_0"
              text="H"
            />
            <MotorCircleDigitalTag
              className={`mt-1 square digital-tag ${useColorStatus(
                "DB16_DBX140_1"
              )}`}
              label="DB16_DBX140_1"
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
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FN1",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN1_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN1_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN1_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN1_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FN2",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN2_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN2_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN2_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN2_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN2_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FN3",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN3_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN3_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN3_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN3_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN3_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FN4",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN4_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN4_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN4_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN4_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN4_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FN5",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN5_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN5_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN5_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN5_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN5_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FN6",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN6_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN6_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN6_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN6_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN6_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FN7",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN7_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN7_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN7_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN7_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN7_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FN8",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN8_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN8_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN8_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN8_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN8_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FN9",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN9_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN9_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN9_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN9_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FN9_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FNA",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNA_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNA_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNA_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNA_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNA_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FNB",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNB_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNB_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNB_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNB_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNB_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FNC",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNC_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNC_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNC_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNC_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FNC_PID",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FND",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FND_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FND_FT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FND_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FND_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474FND_PID",
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
                label: "474DU4 TT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_474DU4_TT",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "474DU4 TT1",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_474DU4_TT1",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "474DU4 TT2",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_474DU4_TT2",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "474DU4 TT3",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_474DU4_TT3",
                useClass: "greenTxt ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "HAR Cooler Trip Time",
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
                "CL_474DU4_TT_ALM1"
              )}`}
              label="CL_474DU4_TT_ALM1"
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CL_474DU4_TT_ALM2"
              )}`}
              label="CL_474DU4_TT_ALM2"
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
                useClass: "text-dark ",
                label: "Working Pressure",
              }}
            />
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
                  unit: "°C",
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
          </div>

          <div>
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
                  "CL_UP_MNT_1"
                )}`}
                label="CL_UP_MNT_1"
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
                  "CL_UP_MNT_2"
                )}`}
                label="CL_UP_MNT_2"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center single-text-64 mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "GD RUN",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "DB16_DBX130_4"
              )} ml-2`}
              label="DB16_DBX130_4"
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
                label: "474LQ1",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "NA", healthyLabel: "NA" }
              )}`}
              label="NA"
            />
          </div>
        </div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_474LQ1_FS1")}`}
          label="CL_474LQ1_FS1"
          text="F"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_474LQ1_FS2")}`}
          label="CL_474LQ1_FS2"
          text="F"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_474LQ1_LS1")}`}
          label="CL_474LQ1_LS1"
          text="L"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RCTripAlarm")} ml-5`}
          label="RCTripAlarm"
          text="E"
        />
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
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
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
            text="M"
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
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
            text="M"
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
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
            text="M"
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
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
            text="M"
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
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
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
                "DB16_DBX120_0"
              )} `}
              label="DB16_DBX120_0"
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
          <div className="d-flex justify-content-around mt-1">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "DB16_DBX120_2"
              )}`}
              label="DB16_DBX120_2"
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
          <div className="d-flex justify-content-around mt-1">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "DB16_DBX120_4"
              )}`}
              label="DB16_DBX120_4"
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
              "DB16_DBX121_0"
            )}`}
            label="DB16_DBX121_0"
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
            className={`mt-1 square digital-tag ${useColorStatus("NA")}`}
            label="NA"
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
              "CL_474CC1_HP1_LFT_LS"
            )}`}
            label="CL_474CC1_HP1_LFT_LS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP1_RGT_LS"
            )}`}
            label="CL_474CC1_HP1_RGT_LS"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP2_LFT_LS"
            )}`}
            label="CL_474CC1_HP2_LFT_LS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP2_RGT_LS"
            )}`}
            label="CL_474CC1_HP2_RGT_LS"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP3_LFT_LS"
            )}`}
            label="CL_474CC1_HP3_LFT_LS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP3_RGT_LS"
            )}`}
            label="CL_474CC1_HP3_RGT_LS"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP4_LFT_LS"
            )}`}
            label="CL_474CC1_HP4_LFT_LS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP4_RGT_LS"
            )}`}
            label="CL_474CC1_HP4_RGT_LS"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP5_LFT_LS"
            )}`}
            label="CL_474CC1_HP5_LFT_LS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP5_RGT_LS"
            )}`}
            label="CL_474CC1_HP5_RGT_LS"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP6_LFT_LS"
            )}`}
            label="CL_474CC1_HP6_LFT_LS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP6_RGT_LS"
            )}`}
            label="CL_474CC1_HP6_RGT_LS"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP7_LFT_LS"
            )}`}
            label="CL_474CC1_HP7_LFT_LS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP7_RGT_LS"
            )}`}
            label="CL_474CC1_HP7_RGT_LS"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP8_LFT_LS"
            )}`}
            label="CL_474CC1_HP8_LFT_LS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP8_RGT_LS"
            )}`}
            label="CL_474CC1_HP8_RGT_LS"
          />
        </div>
        <div className="d-flex gap">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP9_LFT_LS"
            )}`}
            label="CL_474CC1_HP9_LFT_LS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CL_474CC1_HP9_RGT_LS"
            )}`}
            label="CL_474CC1_HP9_RGT_LS"
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
                  runLabel: "CL_474FN1_RUN",
                  healthyLabel: "CL_474FN1_PH",
                }
              )}`}
              label="CL_474FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
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
                  runLabel: "CL_474FN2_RUN",
                  healthyLabel: "CL_474FN2_PH",
                }
              )}`}
              label="CL_474FN2_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
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
                  runLabel: "CL_474FN3_RUN",
                  healthyLabel: "CL_474FN3_PH",
                }
              )}`}
              label="CL_474FN3_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
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
                  runLabel: "CL_474FN4_RUN",
                  healthyLabel: "CL_474FN4_PH",
                }
              )}`}
              label="CL_474FN4_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
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
                  runLabel: "CL_474FN5_RUN",
                  healthyLabel: "CL_474FN5_PH",
                }
              )}`}
              label="CL_474FN5_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "474FN5",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_474FN6_RUN",
                  healthyLabel: "CL_474FN6_PH",
                }
              )}`}
              label="CL_474FN6_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "474FN6",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_474FN7_RUN",
                  healthyLabel: "CL_474FN7_PH",
                }
              )}`}
              label="CL_474FN7_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "474FN7",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_474FN8_RUN",
                  healthyLabel: "CL_474FN8_PH",
                }
              )}`}
              label="CL_474FN8_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "474FN8",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_474FN9_RUN",
                  healthyLabel: "CL_474FN9_PH",
                }
              )}`}
              label="CL_474FN9_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "474FN9",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_474FNA_RUN",
                  healthyLabel: "CL_474FNA_PH",
                }
              )}`}
              label="CL_474FNA_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "474FNA",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_474FNB_RUN",
                  healthyLabel: "CL_474FNB_PH",
                }
              )}`}
              label="CL_474FNB_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "474FNB",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_474FNC_RUN",
                  healthyLabel: "CL_474FNC_PH",
                }
              )}`}
              label="CL_474FNC_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "474FNC",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CL_474FND_RUN",
                  healthyLabel: "CL_474FND_PH",
                }
              )}`}
              label="CL_474FND_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "474FND",
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
              unit: "Unit/TON",
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
              label: "DB16_DBW30",
              useClass: "greenTxt ml-3",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex align-items-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Hood Draught",
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
            label: "474BF1",
          }}
        />
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "NA"
              )}`}
              label="NA"
            />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <div>
              <div className="yellowline-Vr upArrow position-absolute"></div>

              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CL_474FNE_RUN", healthyLabel: "CL_474FNE_PH" }
                )}`}
                label="CL_474FNE_RUN"
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
              label: "474BL1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
            text="M"
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "474BL2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "CL_474LD2_EOLS",
                  closeLabel: "CL_474LD2_ECLS",
                }
              )}`}
              label="CL_474LD2_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark t",
              label: "474LD2",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "CL_474LD3_OLS",
                  closeLabel: "CL_474LD3_CLS",
                  healthyLabel: "CL_474LD3_PH",
                }
              )}`}
              label="CL_474LD3_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark t",
              label: "474LD3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_474LD1_OLS",
                closeLabel: "CL_474LD1_CLS",
                healthyLabel: "CL_474LD1_PH",
              }
            )}`}
            label="CL_474LD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "474LD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_474SD1_OLS",
                closeLabel: "CL_474SD1_CLS",
                healthyLabel: "CL_474SD1_PH",
              }
            )}`}
            label="CL_474SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "474SD1_ZT",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 d-flex flex-column">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "CL_474LD1A_OLS",
                  closeLabel: "CL_474LD1A_CLS",
                  healthyLabel: "CL_474LD1A_PH",
                }
              )}`}
              label="CL_474LD1A_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 t",
              label: "474LD1A",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "CL_474SD2_EOLS",
                  closeLabel: "CL_474SD2_ECLS",
                  healthyLabel: "CL_474SD2_PH",
                }
              )}`}
              label="CL_474SD2_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 t",
              label: "474SD2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_474SD3_EOLS",
                closeLabel: "CL_474SD3_ECLS",
                healthyLabel: "CL_474SD3_PH",
              }
            )}`}
            label="CL_474SD3_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "474SD3",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_474SD4_EOLS",
                closeLabel: "CL_474SD4_ECLS",
                healthyLabel: "CL_474SD4_PH",
              }
            )}`}
            label="CL_474SD4_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "474SD4",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_474LD4_OLS",
                closeLabel: "CL_474LD4_CLS",
                healthyLabel: "CL_474LD4_PH",
              }
            )}`}
            label="CL_474LD4_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "474LD4",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_474SD5_EOLS",
                closeLabel: "CL_474SD5_ECLS",
                healthyLabel: "CL_474SD5_PH",
              }
            )}`}
            label="CL_474SD5_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "474SD5",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CL_474LD5_OLS",
                closeLabel: "CL_474LD5_CLS",
                healthyLabel: "CL_474LD5_PH",
              }
            )}`}
            label="CL_474LD5_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "474LD5",
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
            label: "CL_474LD6_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "CL_474LD5_PID",
            useClass: "greenTxt mt-4",
            unit: "°C",
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
            label: "CL_474BF1_DPT",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_474BF1_PT1",
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
          <div className={`line-circle  grey-color`}></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FNJ",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-33 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CL_474FNF_PT1",
              useClass: "greenTxt mt-3",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CL_474LD4_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-36 d-flex">
        <BlackContainer
          data={{
            label: "CL_474SD1_ZT",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_474SD2_ZT",
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
          "WHRS_RUNFB"
        )} position-absolute single-text-38`}
        label="WHRS_RUNFB"
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
              label: "474LD7-ZT1",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_474LD1A_ZT",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-41 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_PA_Start")}`}
          label="KL_PA_Start"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("KL_FlameDetected")}`}
          label="KL_FlameDetected"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "474LD1-ZT1",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_474LD1_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-42 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CL_474SD3_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_474LD2_ZT",
            useClass: "greenTxt ml",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CL_474LD3_ZT",
          useClass: "greenTxt position-absolute single-text-43",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-44 d-flex">
        <BlackContainer
          data={{
            label: "CL_474SD5_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_474FNF_PID",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
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
      <div className="position-absolute single-text-47 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CV7CycTime")}`}
          label="CV7CycTime"
          text="E"
        />
      </div>
      <div className="position-absolute single-text-48 text-center">
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_474FNF_M01")}`}
            label="CL_474FNF_M01"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "474FNF_M01",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-49",
          label: "TO CV2",
        }}
      />
      <div className="position-absolute single-text-50 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "NA"
          )}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "NA"
          )}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "NA"
          )}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "NA"
          )}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "NA"
          )}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "NA"
          )}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "NA"
          )}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "NA"
          )}`}
          label="NA"
        />
      </div>
      <div className="position-absolute single-text-51 d-flex align-items-center">
        <div className="d-flex align-items-center gap  p-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_474TR1")}`}
            label="CL_474TR1"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_474TR2")}`}
            label="CL_474TR2"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_474TR3")}`}
            label="CL_474TR3"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_474TR4")}`}
            label="CL_474TR4"
          />
        </div>

        <div className=" d-flex align-items-center gap  p-1 ml-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_474TR5")}`}
            label="CL_474TR5"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_474TR6")}`}
            label="CL_474TR6"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_474TR7")}`}
            label="CL_474TR7"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CL_474TR8")}`}
            label="CL_474TR8"
          />
        </div>
      </div>
      <div className="position-absolute single-text-52 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CL_474CV8_Curr",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_474CV7_Curr",
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
              label: "474SK1",
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
                  unit: "°C",
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
                  unit: "°C",
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
                  unit: "°C",
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
                  unit: "°C",
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
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW74",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW76",
                  useClass: "greenTxt ",
                  unit: "°C",
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
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW82",
                  useClass: "greenTxt ",
                  unit: "°C",
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
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW86",
                  useClass: "greenTxt ",
                  unit: "°C",
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
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW90",
                  useClass: "greenTxt ",
                  unit: "°C",
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
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW94",
                  useClass: "greenTxt ",
                  unit: "°C",
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
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW98",
                  useClass: "greenTxt ",
                  unit: "°C",
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
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
            <td>
              <BlackContainer
                data={{
                  label: "DB16_DBW102",
                  useClass: "greenTxt ",
                  unit: "°C",
                  unitColor: "unitColor",
                }}
              />
            </td>
          </tr>
        </table>
      </div>
      <BlackContainer
        data={{
          label: "CL_494DB1_Curr",
          useClass: "greenTxt position-absolute single-text-56",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CL_474LD5_ZT",
          useClass: "greenTxt position-absolute single-text-57",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-58 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474CV7_FS1")}`}
          label="CL_474CV7_FS1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474CV7_ZS1")}`}
          label="CL_474CV7_ZS1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474CV7_ZS2")}`}
          label="CL_474CV7_ZS2"
        />
      </div>
      <div className="position-absolute single-text-59 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474CV8_FS1")}`}
          label="CL_474CV8_FS1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474CV8_ZS1")}`}
          label="CL_474CV8_ZS1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474CV8_ZS2")}`}
          label="CL_474CV8_ZS2"
        />
      </div>
      <div className="position-absolute single-text-60 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "NA", healthyLabel: "NA" }
          )} `}
          label="NA"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "474SM1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-61 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("BullNoseRun_FBss")} `}
          label="BullNoseRun_FB"
          text="F"
        />
        <div className="text-center ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "474FNG",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )}`}
            label="NA"
          />
        </div>
      </div>
      <div className="position-absolute single-text-62 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "NA", healthyLabel: "NA" }
          )}`}
          label="NA"
        />
      </div>
      <div className="position-absolute single-text-63 ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CL_474BF1")}`}
          label="CL_474BF1"
        />
      </div>
      <div className="position-absolute single-text-65 ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CV8CycTime")}`}
          label="CV8CycTime"
          text="E"
        />
      </div>
      <div className="position-absolute single-text-66 d-flex">
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
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "RA9",
          }}
        />
      </div>
      <div className="position-absolute single-text-67 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "FROM 474CV5",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "FROM 474CV4",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CL_PH_444FN1_RUN"
          )} mt-1`}
          label="CL_PH_444FN1_RUN"
        />
      </div>
      <div className="position-absolute single-text-68 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("NA")}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("NA")}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("NA")}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("NA")}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("NA")}`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("NA")}`}
          label="NA"
        />
      </div>
      <div className="position-absolute single-text-69 d-flex">
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
      <div className="position-absolute single-text-70 d-flex">
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "474RA1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "FROM 474CV3",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "473FNE",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "474RA1-ZSS1",
            }}
          />
        </div>
      </div>
    </div>
  );
};

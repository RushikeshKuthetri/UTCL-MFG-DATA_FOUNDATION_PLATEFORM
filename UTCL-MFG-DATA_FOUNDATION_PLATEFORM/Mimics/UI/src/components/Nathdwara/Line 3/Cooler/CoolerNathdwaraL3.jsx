import { BlackContainer, TextContainerWithWrapWord, MotorCircleDigitalTag, PipeWithCircles, MimicCaret } from "../../../index";

import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const CoolerNathdwaraL3 = () => {
  return (
    <div className="Nathdwara-L3-Cooler Rawan-L3-Cooler cooler-maihar-l4 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "CV4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473CV4_RUN", healthyLabel: "CL_473CV4_PH" })}`,
          secondCircleLabel: "CL_473CV4_RUN",
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
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473CV5_RUN", healthyLabel: "CL_473CV5_PH" })}`,
          secondCircleLabel: "CL_473CV5_RUN",
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
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473CV1_RUN", healthyLabel: "CL_473CV1_PH" })}`,
          secondCircleLabel: "CL_473CV1_RUN",
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
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473CV2_RUN", healthyLabel: "CL_473CV2_PH" })}`,
          secondCircleLabel: "CL_473CV2_RUN",
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
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473CV3_RUN", healthyLabel: "CL_473CV3_PH" })}`,
          secondCircleLabel: "CL_473CV3_RUN",
          secondCircleText: "M",
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
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_493DB1_RUN", healthyLabel: "CL_493DB1_PH" })}`,
          secondCircleLabel: "CL_493DB1_RUN",
          secondCircleText: "",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "WHRS EXTRACTION SEL" }}
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
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473CV7_RUN", healthyLabel: "CL_473CV7_PH" })}`,
          secondCircleLabel: "CL_473CV7_RUN",
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
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473CV8_RUN", healthyLabel: "CL_473CV8_PH" })}`,
          secondCircleLabel: "CL_473CV8_RUN",
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
      <div className="yellowline-Hr rightarrow position-absolute pipe-96 mt-1"></div>
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
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473EP1_HP1_LS")}`} label="CL_473EP1_HP1_LS" text="L" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473EP1_HP2_LS")}`} label="CL_473EP1_HP2_LS" text="L" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473EP1_HP3_LS")}`} label="CL_473EP1_HP3_LS" text="L" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473EP1_HP4_LS")}`} label="CL_473EP1_HP4_LS" text="L" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473EP1_HP5_LS")}`} label="CL_473EP1_HP5_LS" text="L" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473EP1_HP6_LS")}`} label="CL_473EP1_HP6_LS" text="L" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473EP1_HP7_LS")}`} label="CL_473EP1_HP7_LS" text="L" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473EP1_HP8_LS")}`} label="CL_473EP1_HP8_LS" text="L" />
      </div>
      <div className="pipeHr  position-absolute single-text-3 d-flex justify-content-around align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "CL_473EP1_TT1",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473EP1_TT3",
              useClass: "greenTxt mt-1",
              unit: "°C",
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
              <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473MT1_RUN", healthyLabel: "CL_473MT1_PH" })}`} label="CL_473MT1_RUN" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ml-1",
                  label: "CL_473MT1",
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
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_473EP1_TE23",
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
                    label: "CL_473EP1_TE12",
                    useClass: "greenTxt mt-1",
                    unit: "°C",
                    unitColor: "unitColor",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "CL_473EP1_TE24",
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
              label: "CL_473EP1_TT2",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473EP1_TT4",
              useClass: "greenTxt mt-1",
              unit: "°C",
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
      <div className="position-absolute single-text-5">
        <div>
          <BlackContainer
            data={{
              label: "CL_473FN1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473FN1_FT_CAL",
              useClass: "greenTxt mt-1",
              unit: "m³/m",
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
      </div>
      <div className="position-absolute single-text-116">
        <BlackContainer
          data={{
            label: "CL_473FN1A_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN1A_FT_CAL",
            useClass: "greenTxt mt-1",
            unit: "m³/m",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN1A_SI",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN1A_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN1A_PID",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-117">
        <BlackContainer
          data={{
            label: "CL_473FN2_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN2_FT_CAL",
            useClass: "greenTxt mt-1",
            unit: "m³/m",
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
      <div className="position-absolute single-text-118">
        <BlackContainer
          data={{
            label: "CL_473FN2A_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN2A_FT_CAL",
            useClass: "greenTxt mt-1",
            unit: "m³/m",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN2A_SI",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN2A_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN2A_PID",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-119">
        <BlackContainer
          data={{
            label: "CL_473FN3_PT1_",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN3_FT_CAL",
            useClass: "greenTxt mt-1",
            unit: "m³/m",
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
      <div className="position-absolute single-text-120">
        <BlackContainer
          data={{
            label: "CL_473FN4_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN4_FT_CAL",
            useClass: "greenTxt mt-1",
            unit: "m³/m",
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
      <div className="position-absolute single-text-121">
        <BlackContainer
          data={{
            label: "CL_473FN5_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN5_FT_CAL",
            useClass: "greenTxt mt-1",
            unit: "m³/m",
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
      <div className="position-absolute single-text-122">
        <BlackContainer
          data={{
            label: "CL_473FN6_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN6_FT_CAL",
            useClass: "greenTxt mt-1",
            unit: "m³/m",
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
      <div className="position-absolute single-text-123">
        <BlackContainer
          data={{
            label: "CL_473FN7_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN7_FT_CAL",
            useClass: "greenTxt mt-1",
            unit: "m³/m",
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
      <div className="position-absolute single-text-124">
        <BlackContainer
          data={{
            label: "CL_473FN8_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN8_FT_CAL",
            useClass: "greenTxt mt-1",
            unit: "m³/m",
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
      <div className="position-absolute single-text-125">
        <BlackContainer
          data={{
            label: "CL_473FN9_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FN9_FT_CAL",
            useClass: "greenTxt mt-1",
            unit: "m³/m",
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
            label: "CL_473FN9__PID",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-126">
        <BlackContainer
          data={{
            label: "CL_473FNA_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FNA_FT_CAL",
            useClass: "greenTxt mt-1",
            unit: "m³/m",
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
      <div className="position-absolute single-text-127">
        <BlackContainer
          data={{
            label: "CL_473FNB_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FNB_FT_CAL",
            useClass: "greenTxt mt-1",
            unit: "m³/m",
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
            label: "CL_473FNB__PID",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-128">
        <BlackContainer
          data={{
            label: "CL_473FNC_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FNC_FT_CAL",
            useClass: "greenTxt mt-1",
            unit: "m³/m",
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
                label: "473DU4 TT1",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_473DU02_TT1",
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
                label: "473DU4 TT2",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_473DU02_TT2",
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
                label: "473DU4 TT3",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_473DU02_TT3",
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
                label: "473DU4_TT",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_473DU4_TT",
                useClass: "greenTxt ml-2",
                unit: "°C",
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
                useClass: "text-dark p-1 bg-secondary",
                label: "Cooler Stope",
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
              <MotorCircleDigitalTag className={`ml-2 square digital-tag ${useColorStatus("DB16_DBX114_7")}`} label="DB16_DBX114_7" />
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
              <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("CL_473CC1_ZS1")}`} label="CL_473CC1_ZS1" text="L" />
            </div>
            <div className="text-center  mt-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "UP MNT 2",
                }}
              />
              <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("CL_473CC1_ZS2")}`} label="CL_473CC1_ZS2" text="L" />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-8 pipeHr"></div>

      <div className="position-absolute single-text-11 d-flex">
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 1",
            }}
          />
          <div className="d-flex justify-content-around mt-1">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_LS31")}`} label="CL_473CC1_LS31" text="L" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("DB16_DBX120_0")} `} label="DB16_DBX120_0" />
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_LS32")}`} label="CL_473CC1_LS32" text="L" />
          </div>
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 2",
            }}
          />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("DB16_DBX120_1")}`} label="DB16_DBX120_1" />
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 3",
            }}
          />
          <div className="d-flex justify-content-around mt-1">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_LS33")}`} label="CL_473CC1_LS33" text="L" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("DB16_DBX120_2")}`} label="DB16_DBX120_2" />
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_LS34")}`} label="CL_473CC1_LS34" text="L" />
          </div>
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 4",
            }}
          />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("DB16_DBX120_3")}`} label="DB16_DBX120_3" />
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 5",
            }}
          />
          <div className="d-flex justify-content-around mt-1">
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_LS35")}`} label="CL_473CC1_LS35" text="L" />
            <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("DB16_DBX120_4")}`} label="DB16_DBX120_4" />
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_LS36")}`} label="CL_473CC1_LS36" text="L" />
          </div>
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 6",
            }}
          />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("DB16_DBX120_5")}`} label="DB16_DBX120_5" />
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 7",
            }}
          />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("DB16_DBX120_6")}`} label="DB16_DBX120_6" />
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 8",
            }}
          />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("DB16_DBX121_0")}`} label="DB16_DBX121_0" />
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 9",
            }}
          />
          <MotorCircleDigitalTag className={`square mt-1 digital-tag ${useColorStatus("DB16_DBX121_1")}`} label="DB16_DBX121_1" />
        </div>
        <div className="border p-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LWR MNT 10",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-12 d-flex">
        <div className="d-flex">
          <div className="triangle-with-squares d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP1_LFT_LS")}`} label="CL_473CC1_HP1_LFT_LS" text="L" />
          </div>
          <div className="triangle-with-squares ml d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP1_RGT_LS")}`} label="CL_473CC1_HP1_RGT_LS" text="L" />
          </div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP2_LFT_LS")}`} label="CL_473CC1_HP2_LFT_LS" text="L" />
          </div>
          <div className="triangle-with-squares ml d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP2_RGT_LS")}`} label="CL_473CC1_HP2_RGT_LS" text="L" />
          </div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP3_LFT_LS")}`} label="CL_473CC1_HP3_LFT_LS" text="L" />
          </div>
          <div className="triangle-with-squares ml d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP3_RGT_LS")}`} label="CL_473CC1_HP3_RGT_LS" text="L" />
          </div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP4_LFT_LS")}`} label="CL_473CC1_HP4_LFT_LS" text="L" />
          </div>
          <div className="triangle-with-squares ml d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP4_RGT_LS")}`} label="CL_473CC1_HP4_RGT_LS" text="L" />
          </div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP5_LFT_LS")}`} label="CL_473CC1_HP5_LFT_LS" text="L" />
          </div>
          <div className="triangle-with-squares ml d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP5_RGT_LS")}`} label="CL_473CC1_HP5_RGT_LS" text="L" />
          </div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP6_LFT_LS")}`} label="CL_473CC1_HP6_LFT_LS" text="L" />
          </div>
          <div className="triangle-with-squares ml d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP6_RGT_LS")}`} label="CL_473CC1_HP6_RGT_LS" text="L" />
          </div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP7_LFT_LS")}`} label="CL_473CC1_HP7_LFT_LS" text="L" />
          </div>
          <div className="triangle-with-squares ml d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP7_RGT_LS")}`} label="CL_473CC1_HP7_RGT_LS" text="L" />
          </div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares d-flex align-items-center justify-content-center pt-2 ">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP8_LFT_LS")}`} label="CL_473CC1_HP8_LFT_LS" text="L" />
          </div>
          <div className="triangle-with-squares ml d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP8_RGT_LS")}`} label="CL_473CC1_HP8_RGT_LS" text="L" />
          </div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP9_LFT_LS")}`} label="CL_473CC1_HP9_LFT_LS" text="L" />
          </div>
          <div className="triangle-with-squares ml d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP9_RGT_LS")}`} label="CL_473CC1_HP9_RGT_LS" text="L" />
          </div>
        </div>
        <div className="d-flex">
          <div className="triangle-with-squares d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP10_LFT_LS")}`} label="CL_473CC1_HP10_LFT_LS" text="L" />
          </div>
          <div className="triangle-with-squares ml d-flex align-items-center justify-content-center pt-2">
            {" "}
            <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473CC1_HP10_RGT_LS")}`} label="CL_473CC1_HP10_RGT_LS" text="L" />
          </div>
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
              label: "Kilnfeed_ACTUAL",
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
              label: "Clinker Bed Height",
            }}
          />
          <BlackContainer
            data={{
              label: "CLINKER_BED_HEIGHT",
              useClass: "greenTxt ml-2",
              unit: "mm",
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
              label: "KL_463KL1_PT3",
              useClass: "greenTxt ml-2",
              unit: "mmWc",
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
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CL_473RA1")}`} label="CL_473RA1_RUN" />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <div>
              <div className="yellowline-Vr upArrow position-absolute"></div>

              <div className="dot grey-color"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex flex-column ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "473BL1",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle grey-color digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473BL1_RUN", healthyLabel: "CL_473BL1_PH" })}`}
            label="CL_473BL1_RUN"
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle grey-color digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473BL2_RUN", healthyLabel: "CL_473BL2_PH" })} `}
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
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                openLabel: "CL_473LD2_EOLS",
                closeLabel: "CL_473LD2_ECLS",
                healthyLabel: "CL_473LD2_PH",
              })}`}
              label="CL_473LD2_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark t",
              label: "473LD2",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                openLabel: "CL_473LD3_EOLS",
                closeLabel: "CL_473LD3_ECLS",
                healthyLabel: "CL_473LD3_PH",
              })}`}
              label="CL_473LD3_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark t",
              label: "473LD3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CL_473LD1_EOLS",
              closeLabel: "CL_473LD1_ECLS",
              healthyLabel: "CL_473LD1_PH",
            })}`}
            label="CL_473LD1_EOLS"
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

      <div className="position-absolute single-text-24">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CL_473SD3_EOLS",
              closeLabel: "CL_473SD3_ECLS",
              healthyLabel: "CL_473SD3_PH",
            })}`}
            label="CL_473SD3_EOLS"
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
      <div className="position-absolute single-text-25 ml-3">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CL_473SD4_EOLS",
              closeLabel: "CL_473SD4_ECLS",
              healthyLabel: "CL_473SD4_PH",
            })}`}
            label="CL_473SD4_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-26">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CL_473LD4_EOLS",
              closeLabel: "CL_473LD4_ECLS",
              healthyLabel: "CL_473LD4_PH",
            })}`}
            label="CL_473LD4_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LD4",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CL_473SD5_EOLS",
              closeLabel: "CL_473SD5_ECLS",
              healthyLabel: "CL_473SD5_PH",
            })}`}
            label="CL_473SD5_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "SD5",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CL_473LD5_EOLS",
              closeLabel: "CL_473LD5_ECLS",
              healthyLabel: "CL_473LD5_PH",
            })}`}
            label="CL_473LD5_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "473LD5",
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
            label: "CL_473LD5_PID",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "CL_473LD5_ZT",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-33 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CL_473FNF_TT1",
              useClass: "greenTxt mt-3",
              unit: "°C",
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

      <div className="position-absolute single-text-48 text-center">
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473FNF_M01_RUN",
              healthyLabel: "CL_473FNF_M01_PH",
            })}`}
            label="CL_473FNF_M01_RUN"
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-49",
          label: "TO CV2",
        }}
      />
      <div className="position-absolute single-text-50 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CL_473RA2")}`} label="CL_473RA2_RUN" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CL_473RA3")}`} label="CL_473RA3_RUN" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CL_473RA4")}`} label="CL_473RA4_RUN" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CL_473RA5")}`} label="CL_473RA5_RUN" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CL_473RA6")}`} label="CL_473RA6_RUN" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CL_473RA7")}`} label="CL_473RA7_RUN" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CL_473RA8")}`} label="CL_473RA8_RUN" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens("CL_473RA9")}`} label="CL_473RA9_RUN" />
      </div>
      <div className="position-absolute single-text-51 d-flex align-items-center">
        <div className="d-flex align-items-center gap  p-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473TR1_RUN",
              healthyLabel: "CL_473TR1_PH",
            })}`}
            label="CL_473TR1_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473TR2_RUN",
              healthyLabel: "CL_473TR2_PH",
            })}`}
            label="CL_473TR2_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473TR3_RUN",
              healthyLabel: "CL_473TR3_PH",
            })}`}
            label="CL_473TR3_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473TR4_RUN",
              healthyLabel: "CL_473TR4_PH",
            })}`}
            label="CL_473TR4_RUN"
          />
        </div>

        <div className=" d-flex align-items-center gap  p-1 ml-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473TR5_RUN",
              healthyLabel: "CL_473TR5_PH",
            })}`}
            label="CL_473TR5_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473TR6_RUN",
              healthyLabel: "CL_473TR6_PH",
            })}`}
            label="CL_473TR6_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473TR7_RUN",
              healthyLabel: "CL_473TR7_PH",
            })}`}
            label="CL_473TR7_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473TR8_RUN",
              healthyLabel: "CL_473TR8_PH",
            })}`}
            label="CL_473TR8_RUN"
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
            label: "CL_473CV8_Curr",
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
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "CL_473SK01_SK1",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473SK01_PT",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473SK01_TT",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-54a d-flex align-items-center">
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
                  label: "DB16_DBW72",
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
          label: "CL_493SD1_ZT",
          useClass: "greenTxt position-absolute single-text-56",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CL_473SD5_ZT",
          useClass: "greenTxt position-absolute single-text-57",
          unit: "%",
          unitColor: "unitColor",
        }}
      />

      <div className="position-absolute single-text-60 ">
        <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473SM1_RUN", healthyLabel: "CL_473SM1_PH" })} `} label="CL_473SM1_RUN" text="" />
      </div>
      <div className="d-flex position-absolute single-text-61 ">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("BullNoseRun_FB")} `} label="BullNoseRun_FB" text="F" />
        <div className="text-center ml-2 d-flex">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473FNG_RUN", healthyLabel: "CL_473FNG_PH" })}`}
            label="CL_473FNG_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "473FNG",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-63 ">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CL_473BF1")}`} label="CL_473BF1" />
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
        <div className="ml-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "473RA1",
            }}
          />
        </div>
        <div className="ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "473FNE",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-71 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473RC1_RUN", healthyLabel: "CL_473RC1_PH" })}`}
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
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473RC2_RUN", healthyLabel: "CL_473RC2_PH" })}`}
            label="CL_473RC2_RUN"
            text=""
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
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473RC3_RUN", healthyLabel: "CL_473RC3_PH" })}`}
            label="CL_473RC3_RUN"
            text=""
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
          <MotorCircleDigitalTag className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473RC4", healthyLabel: "CL_473RC4" })}`} label="CL_473RC4" text="" />
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
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473RC5_RUN", healthyLabel: "CL_473RC5_PH" })}`}
            label="CL_473RC5_RUN"
            text=""
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
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473RC6_RUN", healthyLabel: "CL_473RC6_PH" })}`}
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
      <div className="position-absolute single-text-72 d-flex">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473LQ1_GRS_ZS1")}`} label="CL_473LQ1_GRS_ZS1" text="Z" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473LQ1_GRS_ZS2")}`} label="CL_473LQ1_GRS_ZS2" text="Z" />
      </div>
      <div className="position-absolute  single-text-73 mt-1">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CL_PH_442FN1_Run")} ml-2`} label="CL_PH_442FN1_Run" />
        </div>
      </div>
      <div className="position-absolute single-text-74 d-flex">
        <div>
          <div className="d-flex align-items-center mb-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "473LQ1",
              }}
            />
            <MotorCircleDigitalTag
              className={`line-circle grey-color digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473LQ1_RUN", healthyLabel: "CL_473LQ1_PH" })} ml-1`}
              label="CL_473LQ1_RUN"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-75 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CL_473TDE2_ZS1")}`} label="CL_473TDE2_ZS1" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CL_473TDE2_ZS2")}`} label="CL_473TDE2_ZS2" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CL_473TDE2_ZS3")}`} label="CL_473TDE2_ZS3" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CL_473TDE2_FS1")}`} label="CL_473TDE2_FS1" />
      </div>
      <div className="position-absolute single-text-76 d-flex">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CL_473TDE1_ZS1")}`} label="CL_473TDE1_ZS1" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CL_473TDE1_ZS2")}`} label="CL_473TDE1_ZS2" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CL_473TDE1_ZS3")}`} label="CL_473TDE1_ZS3" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CL_473TDE1_FS1")}`} label="CL_473TDE1_FS1" />
      </div>
      <div className="position-absolute single-text-77 d-flex">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Specific Power",
            }}
          />
          <BlackContainer
            data={{
              label: "CL2_SP_POWER",
              useClass: "greenTxt ml-2",
              unit: "KWH/T",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "AVG",
            }}
          />
          <BlackContainer
            data={{
              label: "CL2_SP_POWER_AVG",
              useClass: "greenTxt ml-2",
              unit: "KWH/T",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-78 border p-1 ">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "Clinker Silo",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center bg-secondary",
              label: "SILO>>",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-left",
              label: "Cl Silo Wt",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_493SI1_LT1",
              useClass: "greenTxt",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-right",
            label: "Reject Silo",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-79"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "493DB2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_493DB2_RUN", healthyLabel: "CL_493DB2_PH" })}`,
          secondCircleLabel: "CL_493DB2_RUN",
          secondCircleText: "",
        }}
      />
      <div className="position-absolute single-text-80 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "Trips in",
          }}
        />
        <BlackContainer
          data={{
            label: "CoolerOff",
            useClass: "greenTxt ml-2",
            unit: "sec",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-81">
        <BlackContainer
          data={{
            label: "CL_473FNE_SI",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FNE_II",
            useClass: "greenTxt mt-1",
            unit: "A",
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
        <BlackContainer
          data={{
            label: "CL_473BF1_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-82 ">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("KL_PA_Start")} `} label="KL_PA_Start" text="S" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("KL_FlameDetected")} `} label="KL_FlameDetected" text="F" />
      </div>
      <div className="position-absolute single-text-83 d-flex">
        <BlackContainer
          data={{
            label: "CL_473SD4_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473FNF_SI",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-84">
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
            useClass: "text-dark mt-1 ",
            label: "OC PUMP",
          }}
        />
      </div>
      <div className="position-absolute single-text-85 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "WHRS SEL",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("WHRS_RunFB")}`} label="WHRS_RunFB" text="H" />
      </div>
      <div className="position-absolute single-text-86 ">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel: "CL_493BS1_OLS",
              closeLabel: "CL_493BS1_CLS",
            })}`}
            label="CL_493BS1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "493BS1",
          }}
        />
      </div>
      <div className="position-absolute single-text-87">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel: "CL_493TS1_OLS",
              closeLabel: "CL_493TS1_CLS",
            })}`}
            label="CL_493TS1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-88">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens({
              openLabel: "CL_OWRBG_MOTOR_OLS",
              closeLabel: "CL_OWRBG_MOTOR_CLS",
            })}`}
            label="CL_OWRBG_MOTOR_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-89 d-flex flex-column">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                openLabel: "CL_473SD2_OLS",
                closeLabel: "CL_473SD2_CLS",
                healthyLabel: "CL_473SD2_PH",
              })}`}
              label="CL_473SD2_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 t",
              label: "SD2",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
                openLabel: "CL_473LD1A_EOLS",
                closeLabel: "CL_473LD1A_ECLS",
                healthyLabel: "CL_473LD1A_PH",
              })}`}
              label="CL_473LD1A_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 t",
              label: "LD1A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-90 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "WHRS_CL_MIDTAP1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "MID TAP 1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TEMP",
            }}
          />
          <div className=" d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                runLabel: "CL_473FNK_RUN",
                healthyLabel: "CL_473FNK_PH",
              })}`}
              label="CL_473FNK_RUN"
              text=""
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "473FNK",
              }}
            />
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "WHRS_CL_MIDTAP2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "MID TAP 2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TEMP",
            }}
          />
          <div className=" d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                runLabel: "CL_473FNL_RUN",
                healthyLabel: "CL_473FNL_PH",
              })}`}
              label="CL_473FNL_RUN"
              text=""
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "473FNL",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-91 d-flex">
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
      <div className="position-absolute single-text-92">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CL_473SD1_OLS",
              closeLabel: "CL_473SD1_CLS",
              healthyLabel: "CL_473SD1_PH",
            })}`}
            label="CL_473SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark t",
            label: "SD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-93 d-flex">
        <BlackContainer
          data={{
            label: "CL_473LD2_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473LD3_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-94 d-flex">
        <div className=" d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473FNJ_RUN",
              healthyLabel: "CL_473FNJ_PH",
            })}`}
            label="CL_473FNJ_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "473FNJ",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473FNM_RUN",
              healthyLabel: "CL_473FNM_PH",
            })}`}
            label="CL_473FNM_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "473FNM",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-95 d-flex">
        <div className=" d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "473FNN",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473FNN_RUN",
              healthyLabel: "CL_473FNN_PH",
            })}`}
            label="CL_473FNN_RUN"
          />
        </div>
        <div className=" d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473FNP_RUN",
              healthyLabel: "CL_473FNP_PH",
            })}`}
            label="CL_473FNP_RUN"
            text=""
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "473FNP",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-96 p-1 border">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-3 mb-1",
            label: "WATER SPRAY",
          }}
        />
        <div className="d-flex">
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                runLabel: "CL_473WP1_RUN",
                healthyLabel: "CL_473WP1_PH",
              })}`}
              label="CL_473WP1_RUN"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "473WP1",
              }}
            />
          </div>
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
                runLabel: "CL_473WP2_RUN",
                healthyLabel: "CL_473WP2_PH",
              })}`}
              label="CL_473WP2_RUN"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "473FWP2",
              }}
            />
          </div>
        </div>
      </div>
      <BlackContainer
        data={{
          label: "CL_473CC1_TT",
          useClass: "greenTxt position-absolute single-text-97",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CL_473DB1_Curr",
          useClass: "greenTxt position-absolute single-text-98",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CL_473DB2_Curr",
          useClass: "greenTxt position-absolute single-text-99",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-100 d-flex">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "CL_473CC1_TT31",
              useClass: "greenTxt mr-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473CC1_TT32",
              useClass: "greenTxt mr-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "CL_473CC1_TT33",
              useClass: "greenTxt mr-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473CC1_TT34",
              useClass: "greenTxt mr-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "CL_473CC1_TT35",
              useClass: "greenTxt mr-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473CC1_TT36",
              useClass: "greenTxt mr-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "CL_473CC1_TT37",
              useClass: "greenTxt mr-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_473CC1_TT38",
              useClass: "greenTxt mr-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-101 d-flex">
        <BlackContainer
          data={{
            label: "CL_473CC1_TT39",
            useClass: "greenTxt mr-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473CC1_TT40",
            useClass: "greenTxt mr-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473CC1_TT41",
            useClass: "greenTxt mr-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_473CC1_TT42",
            useClass: "greenTxt mr-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-102 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473WP7_RUN",
              healthyLabel: "CL_473WP7_PH",
            })}`}
            label="CL_473WP7_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "473WP7",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CL_473WP8_RUN",
              healthyLabel: "CL_473WP8_PH",
            })}`}
            label="CL_473WP8_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "473FWP8",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-104">
        <div className="text-center">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FNC",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-105 d-flex ">
        <MotorCircleDigitalTag
          className={`line-circle grey-color digital-tag ${useMotorTagsColorStatusForNewPlantScreens({ runLabel: "CL_473FNH_RUN", healthyLabel: "CL_473FNH_PH" })} ml-2`}
          label="CL_473FNH_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "473FNH",
          }}
        />
      </div>
      <div className="position-absolute single-text-106 mt-1">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("CL_473DB1_FS")} ml-2`} label="CL_473DB1_FS" />
      </div>
      <BlackContainer
        data={{
          label: "CL_473LD1_ZT",
          useClass: "greenTxt position-absolute single-text-107",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-108">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens({
              openLabel: "CL_493SG1_EOLS",
              closeLabel: "CL_493SG1_ECLS",
              healthyLabel: "CL_493SG1_PH",
            })}`}
            label="CL_493SG1_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-110 d-flex">
        <div className="text-center">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FN1",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FN1A",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FN2",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FN2A",
            }}
          />
        </div>
        <div className="text-center ">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FN3",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FN4",
            }}
          />
        </div>
        <div className="text-center ml-1">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FN5",
            }}
          />
        </div>
        <div className="text-center ml-1">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FN6",
            }}
          />
        </div>
        <div className="text-center ml-1">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FN7",
            }}
          />
        </div>
        <div className="text-center ml-2">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FN8",
            }}
          />
        </div>
        <div className="text-center">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FN9",
            }}
          />
        </div>
        <div className="text-center ml-1">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FNA",
            }}
          />
        </div>
        <div className="text-center ml-1">
          <div>
            <div className={`line-circle grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "473FNB",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "CL_473LD1A_ZT",
          useClass: "greenTxt mr-1 position-absolute single-text-111",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-112 d-flex">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473RC1_ZSS")}`} label="CL_473RC1_ZSS" text="Z" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473RC2_ZSS")}`} label="CL_473RC2_ZSS" text="Z" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473RC3_ZSS")}`} label="CL_473RC3_ZSS" text="Z" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473LQ1_GRS_LS")}`} label="CL_473LQ1_GRS_LS" text="Z" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473RC4_ZSS")}`} label="CL_473RC4_ZSS" text="Z" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473RC5_ZSS")}`} label="CL_473RC5_ZSS" text="Z" />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473RC6_ZSS")}`} label="CL_473RC6_ZSS" text="Z" />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-113",
          label: "SD4",
        }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-114",
          label: "493SG1",
        }}
      />
      <div className="position-absolute single-text-115">
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CL_473FNF_HTR_ON")}`} label="CL_473FNF_HTR_ON" text="P" />
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr position-absolute line-4"></div>
      <div className="yellowline-Hr position-absolute line-5"></div>
      <div className="yellowline-Vr upArrow position-absolute line-6"></div>
      <div className="yellowline-Vr upArrow position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow position-absolute line-8"></div>
      <div className="yellowline-Vr upArrow position-absolute line-9"></div>
      <div className="yellowline-Vr upArrow position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
    </div>
  );
};

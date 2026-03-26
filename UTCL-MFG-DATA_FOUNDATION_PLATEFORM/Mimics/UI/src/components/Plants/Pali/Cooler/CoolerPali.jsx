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

export const CoolerPali = () => {
  return (
    <div className="CoolerPali w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "471CV5" }}
        secondCircle={{
          secondCircleLabel: "CL_472CV4_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "471CV6" }}
        secondCircle={{
          secondCircleLabel: "CL_472CV5_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleLabel: "CL_472CV1_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleLabel: "CL_472CV2_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "471CV1" }}
        secondCircle={{
          secondCircleLabel: "CL_472CV3_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "471CV1" }}
        secondCircle={{
          secondCircleLabel: "CL_492DB1_RUN",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "491DB1" }}
        secondCircle={{
          secondCircleLabel: "CL_492DB2_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7a"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "491DB2" }}
        secondCircle={{
          secondCircleLabel: "CL_492DB2_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: ``,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "LD2" }}
        secondCircle={{
          secondCircleClass: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8a"
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
          secondCircleLabel: "CL_472CV7_RUN",
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
          secondCircleLabel: "CL_472CV8_RUN",
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
      <div className="yellowline-Vr  position-absolute pipe-26"></div>
      <div className="yellowline-Vr  position-absolute pipe-27"></div>
      <div className="yellowline-Vr  position-absolute pipe-28"></div>
      <div className="yellowline-Vr  position-absolute pipe-29"></div>
      <div className="yellowline-Vr  position-absolute pipe-30"></div>
      <div className="yellowline-Vr  position-absolute pipe-31"></div>
      <div className="yellowline-Vr  position-absolute pipe-32"></div>
      <div className="yellowline-Vr  position-absolute pipe-33"></div>
      <div className="yellowline-Vr  position-absolute pipe-34"></div>
      <div className="yellowline-Vr  position-absolute pipe-35"></div>
      <div className="yellowline-Vr  position-absolute pipe-36"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-37"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-38"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-39"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-40"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-42"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-43"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-44"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-45"></div>
      <div className="yellowline-Hr position-absolute pipe-46"></div>
      <div className="yellowline-Vr position-absolute pipe-47"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-48"></div>
      <div className="yellowline-Vr position-absolute pipe-49"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-50"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-51"></div>
      <div className="yellowline-Hr position-absolute pipe-52"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-53"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-54"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-55"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-56"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-57"></div>
      {/* <div className="yellowline-Hr position-absolute pipe-58"></div> */}
      <div className="yellowline-Vr downArrow position-absolute pipe-59"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-60"></div>
      {/* <div className="yellowline-Hr position-absolute pipe-61"></div> */}
      <div className="yellowline-Vr downArrow position-absolute pipe-62"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-63"></div>
      {/* <div className="yellowline-Hr position-absolute pipe-64"></div> */}
      <div className="yellowline-Vr downArrow position-absolute pipe-65"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-66"></div>
      {/* <div className="yellowline-Hr position-absolute pipe-67"></div> */}
      <div className="yellowline-Vr downArrow position-absolute pipe-68"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-69"></div>
      <div className="yellowline-Hr position-absolute pipe-70"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-71"></div>
      <div className="yellowline-Vr position-absolute pipe-72"></div>
      {/* <div className="yellowline-Vr upArrow position-absolute pipe-73"></div> */}
      {/* <div className="yellowline-Hr position-absolute pipe-74"></div> */}
      <div className="yellowline-Vr upArrow position-absolute pipe-75"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-76"></div>
      {/* <div className="yellowline-Hr position-absolute pipe-77"></div> */}
      <div className="yellowline-Vr downArrow position-absolute pipe-78"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-79"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-80"></div>
      {/* <div className="yellowline-Hr position-absolute pipe-81"></div>
      <div className="yellowline-Hr position-absolute pipe-82"></div>
      <div className="yellowline-Vr position-absolute pipe-83"></div> */}
      <div className="yellowline-Hr rightarrow position-absolute pipe-84"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-85"></div>
      <div className="yellowline-Hr position-absolute pipe-86"></div>
      <div className="yellowline-Vr position-absolute pipe-87"></div>
      {/* <div className="yellowline-Hr position-absolute pipe-88"></div> */}
      <div className="yellowline-Vr upArrow position-absolute pipe-89"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-90"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-91"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-92"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-93"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-94"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-95"></div>
      {/* <div className="yellowline-Hr rightarrow position-absolute pipe-96"></div>
      <div className="yellowline-Hr position-absolute pipe-97"></div> */}
      {/* <div className="yellowline-Vr position-absolute pipe-98"></div>
      <div className="yellowline-Hr position-absolute pipe-99"></div>
      <div className="yellowline-Vr position-absolute pipe-101"></div>
      <div className="yellowline-Hr position-absolute pipe-102"></div> */}
      <div className="yellowline-Hr rightarrow position-absolute pipe-103"></div>
      <div className="yellowline-Hr position-absolute pipe-106"></div>
      {/* <div className="yellowline-Hr position-absolute pipe-107"></div> */}
      <div className="yellowline-Vr downArrow position-absolute pipe-108"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-109"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-110"></div>

      <div className="squareplustri position-absolute single-text-1">
        <div className="d-flex justify-content-around">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M09",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M10",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M11",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M12",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M13",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M14",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M15",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M16",
              }}
            />
            <div className="dot">M</div>
          </div>
        </div>
        <div className="d-flex justify-content-around mt-1">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M01",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M02",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M03",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M04",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M05",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M06",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M07",
              }}
            />
            <div className="dot">M</div>
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M08",
              }}
            />
            <div className="dot">M</div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-5 d-flex">
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
              label: "CL_471FN1JI_B",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN1_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
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
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "CL_471FN1_SPSPA",
                useClass: "greenTxt",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN1_FT1",
                useClass: "greenTxt mt-1",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN1_SPSPM",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
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
              label: "CL_471FN2JI_B",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN2_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
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
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "CL_471FN2_SPSPA",
                useClass: "greenTxt",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN2_FT1",
                useClass: "greenTxt mt-1",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN2_SPSPM",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
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
              label: "CL_471FN3JI_B",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN3_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
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
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "CL_471FN3_SPSPA",
                useClass: "greenTxt",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN3_FT1",
                useClass: "greenTxt mt-1",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN3_SPSPM",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
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
              label: "CL_471FN4JI_B",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN4_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
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
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "CL_471FN4_SPSPA",
                useClass: "greenTxt",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN4_FT1",
                useClass: "greenTxt mt-1",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN4_SPSPM",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
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
              label: "CL_471FN5JI_B",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN5_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
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
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "CL_471FN5_SPSPA",
                useClass: "greenTxt",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN5_FT1",
                useClass: "greenTxt mt-1",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN5_SPSPM",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
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
              label: "CL_471FN6JI_B",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN6_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
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
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "CL_471FN6_SPSPA",
                useClass: "greenTxt",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN6_FT1",
                useClass: "greenTxt mt-1",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN6_SPSPM",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
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
              label: "CL_471FN7JI_B",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN7_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
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
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "CL_471FN7_SPSPA",
                useClass: "greenTxt",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN7_FT1",
                useClass: "greenTxt mt-1",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN7_SPSPM",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
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
              label: "CL_471FN8JI_B",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN8_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
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
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "CL_471FN8_SPSPA",
                useClass: "greenTxt",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN8_FT1",
                useClass: "greenTxt mt-1",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN8_SPSPM",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CL_471FN9_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN9JI_B",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FN9_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
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
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "CL_471FN9_SPSPA",
                useClass: "greenTxt",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN9_FT1",
                useClass: "greenTxt mt-1",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FN9_SPSPM",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
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
              label: "CL_471FNAJI_B",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNA_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
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
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "CL_471FNA_SPSPA",
                useClass: "greenTxt",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FNA_FT1",
                useClass: "greenTxt mt-1",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FNA_SPSPM",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
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
              label: "CL_471FNBJI_B",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNB_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
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
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "CL_471FNB_SPSPA",
                useClass: "greenTxt",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FNB_FT1",
                useClass: "greenTxt mt-1",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FNB_SPSPM",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
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
              label: "CL_471FNCJI_B",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FNC_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
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
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "CL_471FNC_SPSPA",
                useClass: "greenTxt",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FNC_FT1",
                useClass: "greenTxt mt-1",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FNC_SPSPM",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
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
              label: "CL_471FNDJI_B",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471FND_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
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
          <div className="mt-3">
            <BlackContainer
              data={{
                label: "CL_471FND_SPSPA",
                useClass: "greenTxt",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FND_FT1",
                useClass: "greenTxt mt-1",
                unit: "m3/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CL_471FND_SPSPM",
                useClass: "greenTxt mt-1",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-7 pipeHr "></div>
      <div className="position-absolute single-text-8 pipeHr"></div>

      <div className="position-absolute single-text-11 d-flex">
        <div className="border p text-center"></div>
        <div className="border p text-center"></div>
        <div className="border p text-center"></div>
        <div className="border p text-center"></div>
        <div className="border p text-center"></div>
        <div className="border p text-center"></div>
        <div className="border p text-center"></div>
        <div className="border p text-center"></div>
        <div className="border p text-center"></div>
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

      <div className="position-absolute single-text-14 d-flex">
        <div className="text-center">
          <div className={`line-circle`} />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN1",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`line-circle`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN2",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`line-circle`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN3",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`line-circle`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN4",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`line-circle`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN5",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`line-circle`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN6",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`line-circle`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN7",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`line-circle`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN8",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`line-circle`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FN9",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`line-circle`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FNA",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`line-circle`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FNE",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`line-circle`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FNC",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`line-circle`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt",
              label: "471FND",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15">
        <div className="d-flex align-items-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Grate Speed SP",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471CC1_SP",
              useClass: "greenTxt ml-2",
              unit: "st/min",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex align-items-center mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Grate Speed PV",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_471CC1_SI",
              useClass: "greenTxt ml-2",
              unit: "st/min",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 pipeHr"></div>
      <div className="position-absolute single-text-17 text-center">
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <div className={`circle-img c-grey-img-2`} />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <div>
              <div className={`dot`} />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-18 text-center">
        <div className="d-flex mt-1">
          <div className="squareplustri d-flex align-items-end justify-content-center  ">
            <div className={`circle-img c-grey-img-2`} />
          </div>
          <div className="img-97 d-flex justify-content-center align-items-end">
            <div>
              <div className="dot" />
            </div>
          </div>
        </div>
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-29",
          label: "FRESH AIR",
        }}
      />

      <div className="position-absolute single-text-31 d-flex">
        <BlackContainer
          data={{
            label: "CL_471RC1II_B",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471RC3II_B",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471RC5II_B",
            useClass: "greenTxt ",
            unit: "A",
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

      <div className="position-absolute single-text-40 ">
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
            label: "CL_471EP1_PT1",
            useClass: "greenTxt mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-41 ">
        <BlackContainer
          data={{
            label: "CL_471EP1_PT2",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471EP1_TT3",
            useClass: "greenTxt mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-42 d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "491DB1",
          }}
        />
        <BlackContainer
          data={{
            label: "W1_TSP_MW001",
            useClass: "greenTxt ",
            unit: "MW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1A_AQC_FG_102_TT",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1B1_AQC_FG_INLT_DP",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "W1A_AQC_FG_103_PT",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-44">
        <BlackContainer
          data={{
            label: "CL_471FNF_SPSPA",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_KL_HD_DRAFT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471FNF_SPSPM",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_471FNF_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-45 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Clinker Silo",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_491SI1_LT1",
              useClass: "greenTxt ",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-46 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Clinker Bed Height",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_BED_HEIGHT",
              useClass: "greenTxt ",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-50 d-flex">
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
        <div className={`circle-img c-grey-img-2`} />
      </div>

      <div className=" position-absolute single-text-54 d-flex align-items-center">
        <div className="chimni-red"></div>
        <div className="text-center ml-2"></div>
      </div>
      <div className=" position-absolute single-text-55">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "471RA5",
          }}
        />
      </div>
      <div className=" position-absolute single-text-56 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA6",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA7",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA8",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RA9",
          }}
        />
      </div>
    </div>
  );
};

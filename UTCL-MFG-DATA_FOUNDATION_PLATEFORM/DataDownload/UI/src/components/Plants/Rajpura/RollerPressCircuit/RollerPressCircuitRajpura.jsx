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
  useImgColorStatusForNewPlantScreen,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const RollerPressCircuitRajpura = () => {
  return (
    <div className="RollerPressCircuitRajpura w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        text={{ useClass: "text-dark mx-auto", label: "531BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_531BC1_RUN", healthyLabel: "CM_531BC1_PH" }
          )}`,
          secondCircleLabel: "CM_531BC1_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        text={{ useClass: "text-dark mx-auto", label: "531BC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_531BC2_RUN", healthyLabel: "CM_531BC2_PH" }
          )}`,
          secondCircleLabel: "CM_531BC2_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        text={{ useClass: "text-dark mx-auto", label: "531BC3" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_531BC3_RUN", healthyLabel: "CM_531BC3_PH" }
          )}`,
          secondCircleLabel: "CM_531BC3_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        text={{ useClass: "text-dark mx-auto", label: "531WF4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_531WF4_RUN", healthyLabel: "CM_531WF4_PH" }
          )}`,
          secondCircleLabel: "CM_531WF4_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        text={{ useClass: "text-dark mx-auto", label: "531BC4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_531BC4_RUN", healthyLabel: "CM_531BC4_PH" }
          )}`,
          secondCircleLabel: "CM_531BC4_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        text={{ useClass: "text-dark mx-auto", label: "561BC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561BC2_RUN", healthyLabel: "CM_561BC2_PH" }
          )}`,
          secondCircleLabel: "CM_561BC2_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        text={{ useClass: "text-dark mx-auto", label: "561SC2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561SC2_RUN", healthyLabel: "CM_561SC2_PH" }
          )}`,
          secondCircleLabel: "CM_561SC2_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561BC1_RUN", healthyLabel: "CM_561BC1_PH" }
          )}`,
          firstCircleLabel: "CM_561BC1_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "561BC1" }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561SC1_RUN", healthyLabel: "CM_561SC1_PH" }
          )}`,
          firstCircleLabel: "CM_561SC1_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "561SC1" }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleText: "",
        }}
      />
      <div className="dashedHr-Pipe position-absolute pipe-10 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "571AS2",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute pipe-11 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "561FB1",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute pipe-12 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "561AS1",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute pipe-13 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "561AS2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute pipe-14">
        <div className="pipe dotted-pipe"></div>
      </div>
      <div className="position-absolute pipe-15">
        <div className="pipe dotted-pipe"></div>
      </div>
      <div className="position-absolute pipe-16">
        <div className="pipe dotted-pipe"></div>
      </div>
      <div className="dashedHr-Pipe position-absolute pipe-17 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "591AS3",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute pipe-18 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "591AS4",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute pipe-19 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "591AS1",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute pipe-20 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "591AS2",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute pipe-21 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "591AS1",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute pipe-22 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "591AS5",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-23"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_591SM1_RUN", healthyLabel: "CM_591SM1_PH" }
          )}`,
          firstCircleLabel: "CM_591SM1_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "591SM1" }}
        secondCircle={{
          secondCircleClass: ``,
          secondCircleText: "",
        }}
      />

      <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
      <div className="yellowline-Hr position-absolute pipe-25"></div>
      <div className="yellowline-Hr position-absolute pipe-26"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-27"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-28"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-29"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-30"></div>
      <div className="yellowline-Hr position-absolute pipe-31"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-32"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-33"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-34"></div>
      <div className="yellowline-Hr position-absolute pipe-35"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-36"></div>
      <div className="yellowline-Vr position-absolute pipe-37"></div>
      <div className="yellowline-Hr position-absolute pipe-38"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-39"></div>
      <div className="yellowline-Hr position-absolute pipe-40"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr position-absolute pipe-42"></div>
      <div className="yellowline-Vr position-absolute pipe-43"></div>
      <div className="yellowline-Hr position-absolute pipe-44"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-45"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-46"></div>
      <div className="yellowline-Vr position-absolute pipe-47"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-48"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-49"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-50"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-51"></div>
      <div className="yellowline-Vr position-absolute pipe-52"></div>
      <div className="yellowline-Hr position-absolute pipe-53"></div>
      <div className="yellowline-Vr position-absolute pipe-54"></div>
      <div className="yellowline-Hr position-absolute pipe-55"></div>
      <div className="yellowline-Vr position-absolute pipe-56"></div>
      <div className="yellowline-Hr position-absolute pipe-57"></div>
      <div className="yellowline-Vr position-absolute pipe-58"></div>
      <div className="yellowline-Hr position-absolute pipe-59"></div>
      <div className="yellowline-Vr position-absolute pipe-60"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-61"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-62"></div>
      <div className="yellowline-Vr position-absolute pipe-63"></div>
      <div className="yellowline-Hr position-absolute pipe-64"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-65"></div>
      <div className="yellowline-Vr position-absolute pipe-66"></div>
      <div className="yellowline-Hr position-absolute pipe-67"></div>
      <div className="yellowline-Vr position-absolute pipe-68"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-69"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-70"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-71"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-72"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-73"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-74"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-75"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-76"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-77"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-78"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-79"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-80"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-81"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-82"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-83"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-84"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-85"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-86"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-87"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-88"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-89"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-90"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-91"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-92"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-93"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-94"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-95"></div>
      <div className="yellowline-Hr position-absolute pipe-96"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-97"></div>
      <div className="yellowline-Vr position-absolute pipe-98"></div>
      <div className="yellowline-Hr position-absolute pipe-99"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-100"></div>
      <div className="yellowline-Hr position-absolute pipe-101"></div>
      <div className="yellowline-Vr position-absolute pipe-102"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-103"></div>
      <div className="yellowline-Vr position-absolute pipe-104"></div>
      <div className="yellowline-Hr position-absolute pipe-105"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-106"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-107"></div>
      <div className="yellowline-Vr  position-absolute pipe-108"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-109"></div>
      <div className="yellowline-Hr position-absolute pipe-110"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-111"></div>
      <div className="yellowline-Hr position-absolute pipe-112"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-113"></div>
      <div className="yellowline-Vr position-absolute pipe-114"></div>
      <div className="yellowline-Hr position-absolute pipe-115"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-116"></div>
      <div className="yellowline-Hr position-absolute pipe-117"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-118"></div>
      <div className="yellowline-Hr position-absolute pipe-119"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-120"></div>
      <div className="yellowline-Hr position-absolute pipe-121"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-122"></div>
      <div className="yellowline-Hr position-absolute pipe-123"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-124"></div>
      <div className="yellowline-Hr position-absolute pipe-125"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-126"></div>
      <div className="yellowline-Hr position-absolute pipe-127"></div>
      <div className="yellowline-Vr position-absolute pipe-128"></div>
      <div className="yellowline-Hr position-absolute pipe-129"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-130"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-131"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-132"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-133"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-134"></div>

      <div className="position-absolute single-text-1 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOT FD SP",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_Tot_Feed_SP",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PB WGHT",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BI1_WI",
              useClass: "greenTxt ml-1",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CM_TOTAL_FR",
            useClass: "greenTxt ml-3",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-2 ">
        <table>
          <thead>
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "FEED SP",
                  }}
                />
              </th>
              <th scope="col">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark ",
                    label: "SET POINT",
                  }}
                />
              </th>
              <th scope="col">FEED RATE</th>
              <th scope="col">RPM</th>
              <th scope="col">BIN WGHT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "CLINKER",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_WF1_Feed_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF1_SP",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF1_FR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF1_SI",
                    useClass: "greenTxt",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF1_WI",
                    useClass: "greenTxt ",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "GYPSUM",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_WF2_Feed_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF2_SP",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF2_FR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF2_SI",
                    useClass: "greenTxt",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF2_WI",
                    useClass: "greenTxt ",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-1",
                    label: "ADDITIVE",
                  }}
                />
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_WF3_Feed_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF3_SP",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF3_FR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF3_SI",
                    useClass: "greenTxt",
                    unit: "RPM",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_531WF3_WI",
                    useClass: "greenTxt ",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="text-center">
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ",
                      label: "DRY",
                    }}
                  />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark ",
                      label: "FLYASH",
                    }}
                  />
                </div>
              </th>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_DryAsh_Feed_SP",
                    useClass: "greenTxt",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_K31FM1_SP",
                    useClass: "greenTxt",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </td>
              <td>
                <BlackContainer
                  data={{
                    label: "CM_K31FM1_FR",
                    useClass: "greenTxt",
                    unit: "TPH",
                    unitColor: "unitColor",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_531WF1_RUN", healthyLabel: "CM_531WF1_PH" }
          )}`}
          label="CM_531WF1_RUN"
        />

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_531WF2_RUN", healthyLabel: "CM_531WF2_PH" }
          )}`}
          label="CM_531WF2_RUN"
        />

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_531WF3_RUN", healthyLabel: "CM_531WF3_PH" }
          )}`}
          label="CM_531WF3_RUN"
        />
      </div>
      <div className="img-85 position-absolute single-text-4"></div>
      <div className="img-85 position-absolute single-text-5"></div>
      <div className=" position-absolute single-text-6">
        <div className="triangle-with-squares text-center">
          <BlackContainer
            data={{
              label: "CM_531BI1_WI",
              useClass: "greenTxt ",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "531BI1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "REJECT",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BIN",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-7">
        <div className="triangle-with-squares text-center">
          <BlackContainer
            data={{
              label: "CM_531BI2_WI",
              useClass: "greenTxt ",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "531BI2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "REJECT",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BIN",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-8">
        <div className="triangle-with-squares text-center">
          <BlackContainer
            data={{
              label: "CM_561BI1_WI",
              useClass: "greenTxt ",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "561BI1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PRE-BIN",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-9">
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "OVERFLOW",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BIN",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-10">
        <div className="triangle-with-squares text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "571NB1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <div className={`square grey-color`}></div>
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <div className="yellowline-Vr upArrow position-absolute"></div>

              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CM_561FN1_RUN", healthyLabel: "CM_561FN1_PH" }
                )}`}
                label="CM_561FN1_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "561FN1",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <div className={`square grey-color`}></div>
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <div className="yellowline-Vr upArrow position-absolute"></div>

              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CM_561FN2_RUN", healthyLabel: "CM_561FN2_PH" }
                )}`}
                label="CM_561FN2_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "561FN2",
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <div className={`square grey-color`}></div>
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CM_561FN3_RUN", healthyLabel: "CM_561FN3_PH" }
                )}`}
                label="CM_561FN3_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "561FN3",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex text-center">
        <div>
          <BlackContainer
            data={{
              label: "CM_561BF1_DPT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561BF1",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561BF2_DPT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561BF2",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561BF3_DPT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561BF3",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-13">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_591BF1")}`}
            label="CM_591BF1"
          />
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_591FN1_RUN", healthyLabel: "CM_591FN1_PH" }
              )}`}
              label="CM_591FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "591FN1",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_591BF1_PT",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-14">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_591BF2")}`}
            label="CM_591BF2"
          />
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_591FN2_RUN", healthyLabel: "CM_591FN2_PH" }
              )}`}
              label="CM_591FN2_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "591FN2",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-15">
        <div className="squareplustri"></div>
        <div className="squareplustri"></div>
        <div className="squareplustri"></div>
        <div className="squareplustri"></div>
      </div>
      <div className="d-flex position-absolute single-text-16">
        <div className="triangle-with-squares text-center">
          <BlackContainer
            data={{
              label: "CM_561CN1_PT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561CN1",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_561CN1_LS")}`}
            label="CM_561CN1_LS"
          />
        </div>
        <div className="triangle-with-squares text-center">
          <BlackContainer
            data={{
              label: "CM_561CN2_PT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561CN2",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_561CN2_LS")}`}
            label="CM_561CN2_LS"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-17">
        <div className="d-flex justify-content-center align-items-center squareplustri">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_571BF1")}`}
            label="CM_571BF1"
          />
        </div>
        <div>
          <div className="img-97 d-flex justify-content-center align-items-end mt-3">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_571FN1_RUN", healthyLabel: "CM_571FN1_PH" }
              )}`}
              label="CM_571FN1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "571FN1",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-18 text-center">
        <div>
          <BlackContainer
            data={{
              label: "CM_561BF5_DPT",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561BF5",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="squareplustri d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CM_561BF5_HP1_LS"
              )}`}
              label="CM_561BF5_HP1_LS"
            />
          </div>
          <div className="squareplustri d-flex justify-content-center align-items-end">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CM_561BF5_HP2_LS"
              )}`}
              label="CM_561BF5_HP2_LS"
            />
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-19">
        <div className="asset-71 text-center">
          <div className="rot">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "561MD1",
                }}
              />
            </div>
            <div className="d-flex justify-content-around">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CM_561MD1_RUN", healthyLabel: "CM_561MD1_PH" }
                )}`}
                label="CM_561MD1_RUN"
                text="M"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "CM_561MD1_RUN", healthyLabel: "CM_561MD1_PH" }
                )}`}
                label="CM_561MD1_RUN"
                text="M"
              />
            </div>

            <div className="d-flex justify-content-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "CM_561MD1_M02_RUN",
                    healthyLabel: "CM_561MD1_M02_PH",
                  }
                )}`}
                label="CM_561MD1_M02_RUN"
                text="M"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "CM_561MD2_M02_RUN",
                    healthyLabel: "CM_561MD2_M02_PH",
                  }
                )}`}
                label="CM_561MD2_M02_RUN"
                text="M"
              />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark ",
                  label: "561RP1",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-20">
        <div className="img-92"></div>
      </div>
      <div className="d-flex position-absolute single-text-21">
        <div className="asset-67"></div>
      </div>
      <div className="d-flex position-absolute single-text-22">
        <div className="squareplustri text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561SR1",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-23 text-center">
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatusForNewPlantScreen(
            { closeLabel: "CM_531DG1_CLS", openLabel: "CM_531DG1_OLS" }
          )}`}
          label="CM_531DG1_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "531DG1",
          }}
        />
      </div>

      <div className=" position-absolute single-text-24 text-center">
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatusForNewPlantScreen(
            { closeLabel: "CM_531DG2_CLS", openLabel: "CM_531DG2_OLS" }
          )}`}
          label="CM_531DG2_OLS"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "531DG2",
          }}
        />
      </div>

      <div className=" position-absolute single-text-25 text-center">
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatusForNewPlantScreen(
            { closeLabel: "CM_531DG3_CLS", openLabel: "CM_531DG3_OLS" }
          )}`}
          label="CM_531DG3_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "531DG3",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <div className="yellowpolygon"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "561FM1",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex align-items-center">
        <div className="chimni-red"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "561SK1",
          }}
        />
      </div>
      <div className="position-absolute single-text-28 d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "561SK2",
          }}
        />
        <div className="chimni-red ml-1"></div>
      </div>
      <div className="position-absolute single-text-29 d-flex align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "CM_FF_PID",
              useClass: "greenTxt ",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt ",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt ",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561BE1M01_II",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BE1M02_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561BE1M03_II",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BE1M04_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CM_561FN1_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561FN1_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561FN1_RPM_SP",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BF1_PT",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561FN2_II",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561FN2_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561FN2_RPM_SP",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561BF3_PT",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "CM_561BF2_PT",
          useClass: "greenTxt position-absolute single-text-31",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <div className=" position-absolute single-text-32 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CM_561SR1_TT1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561SR1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561SR1_TT2",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561SR1_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-33">
        <div>
          <BlackContainer
            data={{
              label: "CM_561LQ4_FT",
              useClass: "greenTxt ",
              unit: "IPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561LQ4_PT2",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-34">
        <div>
          <BlackContainer
            data={{
              label: "CM_561SR1_II",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561SR1_SI",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561SR1_RPM_SP",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CM_561MD1_II",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561MD1_JT",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DB104_DBD108",
              useClass: "greenTxt mt-3",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561MD1_JT",
              useClass: "greenTxt ",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "DB104_DBD112",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
       
      </div>
      <div className="position-absolute single-text-35a">
        
        <div>
          <BlackContainer
            data={{
              label: "CM_561MD2_IT",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561MD2_JT",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-36">
        <div>
          <BlackContainer
            data={{
              label: "CM_561SG5",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "CM_561LD3_ZT",
          useClass: "greenTxt position-absolute single-text-37",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className=" position-absolute single-text-38 d-flex ">
        <div>
          <BlackContainer
            data={{
              label: "CM_561LD3_PID",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561LD1_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561VS1_PT2",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561VS1_TT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-39">
        <div>
          <BlackContainer
            data={{
              label: "CM_561VS1_PT1",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "CM_561VS1_TT1",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_561LD2_ZT",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "CM_561SG1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561SG1_ZT",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-40 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "CM_561FN4_PID",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561BM1_TT1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BM1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-41 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CM_561SG4_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "CM_561SG4",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-42">
        <div>
          <BlackContainer
            data={{
              label: "CM_561MD3_ITA",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561MD3_JTA",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561MD4_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561MD4_JI",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BM1_TT3",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BM1_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43 d-flex align-items-end">
        <div>
          <BlackContainer
            data={{
              label: "CM_561BF5_PT2",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BF5_TT5",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561BF5_PT1",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561BF5_PT3",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BF5_TT6",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-44 d-flex">
        <BlackContainer
          data={{
            label: "CM_561BM1_TT2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_571BF1_PT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-45 ">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DUST",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561SK2_DT",
              useClass: "greenTxt ml-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PRESS",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561SK2_PT",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561SK2_TT",
              useClass: "greenTxt ml-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FLOW",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561SK2_FT",
              useClass: "greenTxt ml-2",
              unit: "Ipm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-46 text-center">
        <BlackContainer
          data={{
            label: "CM_561FN5_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561FN5_SI",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561FN5_RPM_SP",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_571BF1_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-47 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "CM_561RA4_PID",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt ",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561RA4_II",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <BlackContainer
              data={{
                label: "CM_561RA4_SI",
                useClass: "greenTxt ",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_561FM1_TOTAL",
                useClass: "greenTxt ml-2",
                unit: "Ton",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "CM_561RA4_RPM_SP",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CM_561FM1_FR",
            useClass: "greenTxt ",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-48 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "CM_561FN6_PT1",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561FN6_TT1",
              useClass: "greenTxt mt-1 ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CM_561CN_DPT",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-49 d-flex flex-column">
        <BlackContainer
          data={{
            label: "CM_561FN6_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561FN6_SI",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561FN6_RPM_SP",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "CM_561FN6_PT2",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-50 d-flex align-items-end">
        <div>
          <BlackContainer
            data={{
              label: "CM_561BF4_PT1",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BF4_PT2",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BF4_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "561BF4",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag mt-1 ${useColorStatus("CM_561BF4")}`}
            label="CM_561BF4"
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "CM_561BF4_DPT",
              useClass: "greenTxt ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BF4_PT3",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BF4_TT2",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "CM_571BE1_M01_I",
          useClass: "greenTxt position-absolute single-text-51",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-52">
        <BlackContainer
          data={{
            label: "CM_561FN4_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561FN4_SI",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561FN4_RPM_SP",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-53">
        <BlackContainer
          data={{
            label: "CM_561SK1_DUST",
            useClass: "greenTxt ",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561SK1_PRESS",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561SK1_TEMP",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_561SK1_FLOW",
            useClass: "greenTxt mt-1",
            unit: "Ipm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CM_591BF1_DPT",
          useClass: "greenTxt position-absolute single-text-54",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CM_591BF2_DPT",
          useClass: "greenTxt position-absolute single-text-55",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-56 d-flex">
        <BlackContainer
          data={{
            label: "CM_591BF2_PT",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_591BE1_M01_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-57">
        <BlackContainer
          data={{
            label: "CM_531WF4_SP",
            useClass: "greenTxt ",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_531WF4_FR",
            useClass: "greenTxt mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CM_561VS1_PT3",
          useClass: "greenTxt position-absolute single-text-58",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-59 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531DG1_CLS")}`}
          label="CM_531DG1_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531DG1_OLS")}`}
          label="CM_531DG1_OLS"
        />
      </div>
      <div className="position-absolute single-text-60 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531DG2_CLS")}`}
          label="CM_531DG2_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531DG2_OLS")}`}
          label="CM_531DG2_OLS"
        />
      </div>
      <div className="position-absolute single-text-61 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531DG3_CLS")}`}
          label="CM_531DG3_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531DG3_OLS")}`}
          label="CM_531DG3_OLS"
        />
      </div>
      <div className="position-absolute single-text-62">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531BI1_LS")}`}
          label="CM_531BI1_LS"
        />
      </div>
      <div className="position-absolute single-text-63 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531SG1_ECLS")}`}
          label="CM_531SG1_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531SG1_EOLS")}`}
          label="CM_531SG1_EOLS"
        />
      </div>
      <div className="position-absolute single-text-64 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531MT2_PH")}`}
          label="CM_531MT2_PH"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531MT2_MD")}`}
          label="CM_531MT2_MD"
        />
      </div>
      <div className="position-absolute single-text-65 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531SG2_CLS")}`}
          label="CM_531SG2_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531SG2_OLS")}`}
          label="CM_531SG2_OLS"
        />
      </div>
      <div className="position-absolute single-text-66 d-flex">
        <div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CM_561BE1_ZSS1"
            )}`}
            label="CM_561BE1_ZSS1"
            text="ZSS"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
            label="CM_561SG2_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ml-2 ${useColorStatus(
              "CM_561SG2_OLS"
            )}`}
            label="CM_561SG2_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-67">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_531BI2_LS")}`}
          label="CM_531BI2_LS"
        />
      </div>
      <div className="position-absolute single-text-68 d-flex">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("CM_561BE1_LS1")}`}
          label="CM_561BE1_LS1"
          text="LS1"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("CM_561BE1_LS2")}`}
          label="CM_561BE1_LS2"
          text="LS2"
        />
      </div>
      <div className="position-absolute single-text-69 d-flex">
        <div className="d-flex ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_561BE1_RUN", healthyLabel: "CM_561BE1_PH" }
            )}`}
            label="CM_561BE1_RUN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-1 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_561BE1_RUN", healthyLabel: "CM_561BE1_PH" }
            )}`}
            label="CM_561BE1_RUN"
            text="M"
          />
        </div>
        <div className="d-flex ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM_561BE1_Aux_RUN",
                healthyLabel: "CM_561BE1_Aux_PH",
              }
            )}`}
            label="CM_561BE1_Aux_RUN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-1 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CM_561BE1_Aux_RUN",
                healthyLabel: "CM_561BE1_Aux_PH",
              }
            )}`}
            label="CM_561BE1_Aux_RUN"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-70 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CM_561BE1_BMS1"
          )}`}
          label="CM_561BE1_BMS1"
          text="BMS1"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("CM_561BE1_TS1")}`}
          label="CM_561BE1_TS1"
          text="TS1"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus("CM_561BE1_TS2")}`}
          label="CM_561BE1_TS2"
          text="TS2"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CM_561BE1M01_ZS1"
          )}`}
          label="CM_561BE1M01_ZS1"
          text="ZS1"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CM_561BE1M02_ZS2"
          )}`}
          label="CM_561BE1M02_ZS2"
          text="ZS2"
        />
      </div>
      <div className="position-absolute single-text-71 d-flex align-items-end">
        <div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "531MS1",
              }}
            />
          </div>
          <div className="roller-drum d-flex justify-content-center align-items-center ">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_531MS1_RUN", healthyLabel: "CM_531MS1_PH" }
              )}`}
              label="CM_531MS1_RUN"
              text="M"
            />
          </div>
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_531MT1_PH")}`}
            label="CM_531MT1_PH"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_531MT1_MD")}`}
            label="CM_531MT1_MD"
          />
        </div>
      </div>
      <div className="position-absolute single-text-72 d-flex align-items-center">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "561MS1",
            }}
          />
        </div>
        <div className="roller-drum d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_561MS1_RUN", healthyLabel: "CM_561MS1_PH" }
            )}`}
            label="CM_561MS1_RUN"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-73 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561LD1_EOLS")}`}
          label="CM_561LD1_EOLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561LD1_ECLS")}`}
          label="CM_561LD1_ECLS"
        />
      </div>
      <div className="position-absolute single-text-74 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561SG1_ECLS")}`}
          label="CM_561SG1_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561SG1_EOLS")}`}
          label="CM_561SG1_EOLS"
        />
      </div>
      <div className="position-absolute single-text-75 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561LD3_ECLS")}`}
          label="CM_561LD3_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561LD3_EOLS")}`}
          label="CM_561LD3_EOLS"
        />
      </div>
      <div className="position-absolute single-text-76 d-flex flex-column">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_561SG3_CLS")}`}
            label="CM_561SG3_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ml-3 ${useColorStatus(
              "CM_561SG3_OLS"
            )}`}
            label="CM_561SG3_OLS"
          />
        </div>
        {/* <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("")}`} label="" />
          <MotorCircleDigitalTag className={`square digital-tag ml-3 ${useColorStatus("")}`} label="" />
        </div> */}
      </div>
      <div className="position-absolute single-text-77 d-flex flex-column align-items-center ">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CM_561RA1"
          )}`}
          label="CM_561RA1_RUN"
        />
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "To",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RISER DUCT",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-78 d-flex flex-column align-items-center ">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CM_561RA2"
          )}`}
          label="CM_561RA2_RUN"
        />
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "To",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "561BE1 INLET",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-79 d-flex flex-column align-items-center ">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CM_561RA3"
          )}`}
          label="CM_561RA3_RUN"
        />
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "To",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BM INLET",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-80 d-flex  ">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CM_591RA1"
            )}`}
            label="CM_591RA1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "591RA1",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CM_591RA2"
            )}`}
            label="CM_591RA2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "591RA2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-81 d-flex  ">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CM_591RA5"
            )}`}
            label="CM_591RA5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "591RA5",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CM_591RA6"
            )}`}
            label="CM_591RA6_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "591RA6",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CM_591RA7"
            )}`}
            label="CM_591RA7_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "591RA7",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CM_591RA8"
            )}`}
            label="CM_591RA8_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "591RA8",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-82 text-center">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CM_591RA3"
          )}`}
          label="CM_591RA3_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "591RA3",
          }}
        />
      </div>
      <div className="position-absolute single-text-83 text-center">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CM_591RA4"
          )}`}
          label="CM_591RA4_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "591RA4",
          }}
        />
      </div>
      <div className="position-absolute single-text-84 d-flex  ">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CM_571RA2"
            )}`}
            label="CM_571RA2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "571RA2",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CM_571RA3"
            )}`}
            label="CM_571RA3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "571RA3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-85 text-center">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "CM_571RA1"
          )}`}
          label="CM_571RA1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "571RA1",
          }}
        />
      </div>
      <div className="position-absolute single-text-86 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_571BE1_M01_RUN", healthyLabel: "CM_571BE1_M01_PH" }
          )}`}
          label="CM_571BE1_M01_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ml-1 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_571BE1_M02_RUN", healthyLabel: "CM_571BE1_M02_PH" }
          )}`}
          label="CM_571BE1_M02_RUN"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-87 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_591GA1_ECLS")}`}
            label="CM_591GA1_ECLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ml-3 ${useColorStatus(
              "CM_591GA1_EOLS"
            )}`}
            label="CM_591GA1_EOLS"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_591GA2_ECLS")}`}
            label="CM_591GA2_ECLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ml-3 ${useColorStatus(
              "CM_591GA2_EOLS"
            )}`}
            label="CM_591GA2_EOLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-88 d-flex">
        <div className="">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CM_571BE1_BSS1"
            )}`}
            label="CM_571BE1_BSS1"
            text="BSS1"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_571BE1_BSS1_ALM"
            )}`}
            label="CM_571BE1_BSS1_ALM"
            text="BSS1A"
          />
        </div>
        <div className="">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CM_571BE1_BSS2"
            )}`}
            label="CM_571BE1_BSS2"
            text="BSS2"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_571BE1_BSS2_ALM"
            )}`}
            label="CM_571BE1_BSS2_ALM"
            text="BSS2A"
          />
        </div>
      </div>
      <div className="position-absolute single-text-89 d-flex">
        <div className="">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CM_571BE1_BSS3_ALM"
            )}`}
            label="CM_571BE1_BSS3_ALM"
            text="BSS3A"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_571BE1_BSS3"
            )}`}
            label="CM_571BE1_BSS3"
            text="BSS3"
          />
        </div>
        <div className="">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CM_571BE1_BSS4_ALM"
            )}`}
            label="CM_571BE1_BSS4_ALM"
            text="BSS4A"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_571BE1_BSS4"
            )}`}
            label="CM_571BE1_BSS4"
            text="BSS4"
          />
        </div>
      </div>
      <div className="position-absolute single-text-90">
        <div className="">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CM_571BE1_LS2"
            )}`}
            label="CM_571BE1_LS2"
            text="LS2"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_571BE1_LS1"
            )}`}
            label="CM_571BE1_LS1"
            text="LS1"
          />
        </div>
      </div>
      <div className="position-absolute single-text-91">
        <div className="">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CM_591BE1_BMS"
            )}`}
            label="CM_591BE1_BMS"
            text="BMS"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_591BE1_TS"
            )}`}
            label="CM_591BE1_TS"
            text="TS"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_591BE1_ZS"
            )}`}
            label="CM_571BE1_LS1"
            text="ZS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-92 d-flex">
        <div className="">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CM_591BE1_BSS1"
            )}`}
            label="CM_591BE1_BSS1"
            text="BSS1"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_591BE1_BSS1_ALM"
            )}`}
            label="CM_591BE1_BSS1_ALM"
            text="BSS1A"
          />
        </div>
        <div className="">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CM_591BE1_BSS2"
            )}`}
            label="CM_591BE1_BSS2"
            text="BSS2"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_591BE1_BSS2_ALM"
            )}`}
            label="CM_591BE1_BSS2_ALM"
            text="BSS2A"
          />
        </div>
      </div>
      <div className="position-absolute single-text-93 d-flex">
        <div className="">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CM_591BE1_BSS3"
            )}`}
            label="CM_591BE1_BSS3"
            text="BSS3"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_591BE1_BSS3_ALM"
            )}`}
            label="CM_591BE1_BSS3_ALM"
            text="BSS3A"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_591BE1_ZSS"
            )}`}
            label="CM_591BE1_ZSS"
            text="ZSS"
          />
        </div>
        <div className="">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "CM_591BE1_BSS4"
            )}`}
            label="CM_591BE1_BSS4"
            text="BSS4"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_591BE1_BSS4_ALM"
            )}`}
            label="CM_591BE1_BSS4_ALM"
            text="BSS4A"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_591BE1_LS2"
            )}`}
            label="CM_591BE1_LS2"
            text="LS2"
          />
          <MotorCircleDigitalTag
            className={`text-dark digital-tag mt-2 ${useColorStatus(
              "CM_591BE1_LS1"
            )}`}
            label="CM_591BE1_LS1"
            text="LS1"
          />
        </div>
      </div>
      <div className="position-absolute single-text-94 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_571FN3_RUN", healthyLabel: "CM_571FN3_PH" }
            )}`}
            label="CM_571FN3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "571FN3",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_571FN3A_RUN", healthyLabel: "CM_571FN3A_PH" }
            )}`}
            label="CM_571FN3A_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "571FN3A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-95 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_591FN6_RUN", healthyLabel: "CM_591FN6_PH" }
            )}`}
            label="CM_591FN6_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "591FN6",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_591FN6A_RUN", healthyLabel: "CM_591FN6A_PH" }
            )}`}
            label="CM_591FN6A_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "591FN6A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-96 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_591FN3_RUN", healthyLabel: "CM_591FN3_PH" }
            )}`}
            label="CM_591FN3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "591FN3",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_591FN3A_RUN", healthyLabel: "CM_591FN3A_PH" }
            )}`}
            label="CM_591FN3A_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "591FN3A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-97 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_561FN8_RUN", healthyLabel: "CM_561FN8_PH" }
            )}`}
            label="CM_561FN8_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561FN8",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_561FN8A_RUN", healthyLabel: "CM_561FN8A_PH" }
            )}`}
            label="CM_561FN8A_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561FN8A",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_561FN9_RUN", healthyLabel: "CM_561FN9_PH" }
            )}`}
            label="CM_561FN9_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "561FN9",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-98 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_591FN5_RUN", healthyLabel: "CM_591FN5_PH" }
            )}`}
            label="CM_591FN5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "591FN5",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_591FN4A_RUN", healthyLabel: "CM_591FN4A_PH" }
            )}`}
            label="CM_591FN4A_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "591FN4A",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_591FN4_RUN", healthyLabel: "CM_591FN4_PH" }
            )}`}
            label="CM_591FN4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "591FN4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-99 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_571FN2_RUN", healthyLabel: "CM_571FN2_PH" }
            )}`}
            label="CM_571FN2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "571FN2",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_571FN2A_RUN", healthyLabel: "CM_571FN2A_PH" }
            )}`}
            label="CM_571FN2A_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "571FN2A",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-100 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561LQ4_M01_RUN", healthyLabel: "CM_561LQ4_M01_PH" }
          )}`}
          label="CM_561LQ4_M01_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561LQ4_M02_RUN", healthyLabel: "CM_561LQ4_M02_PH" }
          )}`}
          label="CM_561LQ4_M02_RUN"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-101 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561SR1_M02_RUN", healthyLabel: "CM_561SR1_M02_PH" }
          )}`}
          label="CM_561SR1_M02_RUN"
          text="M"
        />

        <MotorCircleDigitalTag
          className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CM_561SR1_M01_RUN",
              healthyLabel: "CM_561SR1_M01_PH",
            }
          )}`}
          label="CM_561SR1_M01_RUN"
        />
      </div>
      <div className="position-absolute single-text-102 text-center">
        <MotorCircleDigitalTag
          className={`line-circle mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561FN7_RUN", healthyLabel: "CM_561FN7_PH" }
          )}`}
          label="CM_561FN7_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "561FN7",
          }}
        />
      </div>
      <div className="position-absolute single-text-103 text-center">
        <MotorCircleDigitalTag
          className={`dot mt-4 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561RA4_RUN", healthyLabel: "CM_561RA4_PH" }
          )}`}
          label="CM_561RA4_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "561RA4",
          }}
        />
      </div>
      <div className="position-absolute single-text-104 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561MD3_RUN", healthyLabel: "CM_561MD3_PH" }
          )}`}
          label="CM_561MD3_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561MD3_RUN", healthyLabel: "CM_561MD3_PH" }
          )}`}
          label="CM_561MD3_RUN"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-105 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_591FNC_RUN", healthyLabel: "CM_591FNC_PH" }
            )}`}
            label="CM_591FNC_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "591FNC",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CM_591FND_RUN", healthyLabel: "CM_591FND_PH" }
            )}`}
            label="CM_591FND_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "591FND",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-106 d-flex flex-column">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_571SG1_CLS")}`}
            label="CM_571SG1_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ml-3 ${useColorStatus(
              "CM_571SG1_OLS"
            )}`}
            label="CM_571SG1_OLS"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_571SG2_CLS")}`}
            label="CM_571SG2_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ml-3 ${useColorStatus(
              "CM_571SG2_OLS"
            )}`}
            label="CM_571SG2_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-107 d-flex ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_571SG3_CLS")}`}
          label="CM_571SG3_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_571SG3_OLS")}`}
          label="CM_571SG3_OLS"
        />
      </div>
      <div className="position-absolute single-text-108 ">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CM_591SG1_CLS")}`}
            label="CM_591SG1_CLS"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ml-3 ${useColorStatus(
              "CM_591SG1_OLS"
            )}`}
            label="CM_591SG1_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-109 d-flex ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561GA1_CLS")}`}
          label="CM_561GA1_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561GA1_OLS")}`}
          label="CM_561GA1_OLS"
        />
      </div>
      <div className="position-absolute single-text-110 d-flex ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561LD2_ECLS")}`}
          label="CM_561LD2_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561LD2_EOLS")}`}
          label="CM_561LD2_EOLS"
        />
      </div>
      <div className="position-absolute single-text-111 d-flex ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561SG4_ECLS")}`}
          label="CM_561SG4_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561SG4_EOLS")}`}
          label="CM_561SG4_EOLS"
        />
      </div>
      <div className="d-flex position-absolute single-text-112 align-items-end">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "CM_561SG2_OLS", closeLabel: "CM_561SG2_CLS" }
            )}`}
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "561SG2",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-113 align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "561SG1",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center ml-4">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CM_561SG1_EOLS",
                closeLabel: "CM_561SG1_ECLS",
                healthyLabel: "CM_561SG1_PH",
              }
            )}`}
            label="CM_561SG1_EOLS"
          />

          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-114 align-items-start">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "CM_561LD3_OLS", closeLabel: "CM_561LD3_CLS" }
            )}`}
            label="CM_561LD3_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "561LD3",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-115 align-items-end">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "CM_561LD2_OLS", closeLabel: "CM_561LD2_CLS" }
            )}`}
            label="CM_561LD2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "561LD2",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-116 align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "561SG4",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center ml-4">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CM_561SG4_EOLS",
                closeLabel: "CM_561SG4_ECLS",
                healthyLabel: "CM_561SG4_PH",
              }
            )}`}
            label="CM_561SG4_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-117 flex-column">
        <div className="d-flex  align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "561SG3",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center ml-4">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "CM_561SG3_OLS", closeLabel: "CM_561SG3_CLS" }
              )}`}
              label="CM_561SG3_OLS"
            />

            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div className="d-flex  align-items-center t">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "561SG5",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center ml-4">
            <div className={`square grey-color`}></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`dot   grey-color`}></div>
          </div>
        </div>
      </div>

      <div className="d-flex position-absolute single-text-118 flex-column">
        <div className="d-flex  align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "571SG1",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center ml-4">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "CM_571SG1_OLS", closeLabel: "CM_571SG1_CLS" }
              )}`}
              label="CM_571SG1_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div className="d-flex  align-items-center t">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "571SG2",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center ml-4">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "CM_571SG2_OLS", closeLabel: "CM_571SG2_CLS" }
              )}`}
              label="CM_571SG2_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-119 align-items-start">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "CM_571SG3_OLS", closeLabel: "CM_571SG3_CLS" }
            )}`}
            label="CM_571SG3_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-120 align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "591SG1",
          }}
        />

        <div className="dot-square-line d-flex flex-column align-items-center ml-4">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "CM_591SG1_OLS", closeLabel: "CM_591SG1_CLS" }
            )}`}
            label="CM_591SG1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-121 align-items-center">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CM_531SG1_EOLS",
                closeLabel: "CM_531SG1_ECLS",
                healthyLabel: "CM_531SG1_PH",
              }
            )}`}
            label="CM_531SG1_EOLS"
          />

          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "591SG1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-122 align-items-center">
        <div className="dot-square-line d-flex flex-column align-items-center">
          {/* d23 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CM_531SG2_OLS",
                closeLabel: "CM_531SG2_CLS",
                healthyLabel: "CM_531SG2_PH",
              }
            )}`}
            label="CM_531SG2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "591SG2",
          }}
        />
      </div>
      <div className="position-absolute single-text-123 d-flex">
        {/* 106 */}
        <MotorCircleDigitalTag
          className={`dot  digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561FN6_RUN", healthyLabel: "CM_561FN6_PH" }
          )}`}
          label="CM_561FN6_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561FN4_RUN", healthyLabel: "CM_561FN4_PH" }
          )}`}
          label="CM_561FN4_RUN"
        />
      </div>
      <div className="position-absolute single-text-124 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_591BE1_M01_RUN", healthyLabel: "CM_591BE1_M01_PH" }
          )}`}
          label="CM_591BE1_M01_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_591BE1_M02_RUN", healthyLabel: "CM_591BE1_M02_PH" }
          )}`}
          label="CM_591BE1_M02_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "591BE1",
          }}
        />
      </div>
      <div className="truck position-absolute single-text-125"></div>
      <div className="img-85 position-absolute single-text-126"></div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-127",
          label: "TO 571BE1",
        }}
      />
      <div className="position-absolute single-text-128">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561BI1_LS")}`}
          label="CM_561BI1_LS"
        />
      </div>
      <div className="d-flex position-absolute single-text-129 align-items-center">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "CM_561LD1_OLS", closeLabel: "CM_561LD1_CLS" }
            )}`}
            label="CM_561LD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-130 align-items-center">
        <div className="dot-square-line d-flex flex-column align-items-center">
          {/* 105 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "CM_561SD1_OLS", closeLabel: "CM_561SD1_CLS" }
            )}`}
            label="CM_561SD1_OLS"
          />

          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-131 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561SD1_ECLS")}`}
          label="CM_561SD1_ECLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "CM_561SD1_EOLS"
          )} ml-1`}
          label="CM_561SD1_EOLS"
        />
      </div>
      <div className="position-absolute single-text-132 ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561BF5")}`}
          label="CM_561BF5"
        />
      </div>
      <div className="position-absolute single-text-133 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CM_561FN5_RUN", healthyLabel: "CM_561FN5_PH" }
          )}`}
          label="CM_561FN5_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "561FN5",
          }}
        />
      </div>
      <div className="position-absolute single-text-134 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561BF4_HP1_LS")}`}
          label="CM_561BF4_HP1_LS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561BF4_HP2_LS")}`}
          label="CM_561BF4_HP2_LS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561BF4_HP3_LS")}`}
          label="CM_561BF4_HP3_LS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_561BF4_HP4_LS")}`}
          label="CM_561BF4_HP4_LS"
        />
      </div>
    </div>
  );
};

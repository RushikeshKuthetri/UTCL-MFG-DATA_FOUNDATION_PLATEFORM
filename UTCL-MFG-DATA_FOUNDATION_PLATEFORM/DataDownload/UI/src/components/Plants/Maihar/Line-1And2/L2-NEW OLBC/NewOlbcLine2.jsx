import { useDispatch } from "react-redux";
import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";

export const NewOlbcLine2 = () => {
  const dispatch = useDispatch();
  return (
    <div className="NewOlbcLine2Page w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot ${useColorStatus("21BC4_M1")} digital-tag`,
          firstCircleLabel: "21BC4_M1",
        }}
        text={{ useClass: "text-dark", label: "212-BC4" }}
        secondCircle={{
          secondCircleText: "X",
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleText: "X",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "APRON 211 AF3" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useColorStatus("211AF3")}`,
          secondCircleLabel: "211AF3",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "211-SX3" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useColorStatus("211SX3")}`,
          secondCircleLabel: "211SX3",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleText: "X",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "OLBC-211 BC_7" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useColorStatus("211BC7")}`,
          secondCircleLabel: "211BC7",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleText: "X",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "OLBC-211 BC_8" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useColorStatus("211BC8")}`,
          secondCircleLabel: "211BC8",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleText: "X",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "OLBC-211 BC_9" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useColorStatus("211BC9")}`,
          secondCircleLabel: "211BC9",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleText: "X",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "OLBC-211 BC_A" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useColorStatus("211BCA")}`,
          secondCircleLabel: "211BCA",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "BC4BRUN" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("OLBC4A")}`,
          firstCircleLabel: "OLBC4A",
          firstCircleText:"M"
        }}
        text={{ useClass: "text-dark", label: "OLBC-4A" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useColorStatus("20PRD_CONV")}`,
          firstCircleLabel: "20PRD_CONV",
        }}
        text={{ useClass: "text-dark", label: "PRD CONV" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleText: "X",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "OLBC-211 BC_B" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useColorStatus("211BCB")}`,
          secondCircleLabel: "211BCB",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11a"
        firstCircle={{
          firstCircleText: "X",
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "OLBC-211 BC_C" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useColorStatus("211BCC")}`,
          secondCircleLabel: "211BCC",
        }}
      />
      <div class="yellowline-Vr downArrow  position-absolute pipe-16"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-17"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-18"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-19"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-20"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-21"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-22"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-23"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-24"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-25"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-26"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-27"></div>
      <div class="yellowline-Hr rightarrow  position-absolute pipe-29"></div>
      <div class="yellowline-Hr rightarrow  position-absolute pipe-30"></div>
      <div class="yellowline-Hr rightarrow  position-absolute pipe-31"></div>
      <div class="yellowline-Hr rightarrow  position-absolute pipe-32"></div>
      <div class="yellowline-Hr rightarrow  position-absolute pipe-32a"></div>
      <div class="yellowline-Hr rightarrow  position-absolute pipe-33"></div>
      <div class="yellowline-Hr position-absolute pipe-34"></div>
      <div class="yellowline-Hr position-absolute pipe-35"></div>
      <div class="yellowline-Hr position-absolute pipe-36"></div>
      <div class="yellowline-Hr position-absolute pipe-37"></div>
      <div class="yellowline-Hr position-absolute pipe-38"></div>
      <div class="yellowline-Hr position-absolute pipe-38a"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-39"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-40"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-41"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-42"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-43"></div>
      <div className="yellowline-Vr upArrow  position-absolute pipe-43a"></div>
      <div className="pipeVr position-absolute pipe-44"></div>
      <div className="pipeVr position-absolute pipe-45"></div>
      <div className="pipeVr position-absolute pipe-46"></div>
      <div className="pipeVr position-absolute pipe-47"></div>
      <div className="pipeVr position-absolute pipe-48"></div>
      <div className="pipeVr position-absolute pipe-48a"></div>
      <div className="pipeVr position-absolute pipe-49"></div>
      <div className="pipeVr position-absolute pipe-50"></div>
      <div className="position-absolute containerImage single-text-1">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "LT1001",
              useClass: "greenTxt mt-2",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "OLD",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "SURGE BIN",
            }}
          />
        </div>
      </div>
      <div className="position-absolute containerImage single-text-2">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "TT6_HPR_LVL_HI"
          )}`}
          label="TT6_HPR_LVL_HI"
          text="LSH"
        />
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "SURGE BIN",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <BlackContainer
            data={{
              label: "TT6_HPR_LVL",
              useClass: "greenTxt",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "HPR_LVL2",
              useClass: "greenTxt ml-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute  single-text-3">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BAG FILTER",
            }}
          />
          <div className="containerImage mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "20DC4",
              }}
            />
          </div>
          <div className="d-flex align-items-center fix">
            <MotorCircleDigitalTag
              className={` circle-img digital-tag ${useFanImgTagsColorStatus(
                "20DC4_SB_RAL"
              )} ml-2`}
              label="20DC4_SB_RAL"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-4">
        <div className="text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BAG FILTER",
            }}
          />
          <div className="containerImage mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "20DC1",
              }}
            />
          </div>
          <div className="d-flex align-items-center fix">
            <MotorCircleDigitalTag
              className={` circle-img digital-tag ${useFanImgTagsColorStatus(
                "20DC1_RAL"
              )} ml-2`}
              label="20DC1_RAL"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-5">
        <div className="text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BAG FILTER",
            }}
          />
          <div className="containerImage mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "20DC2",
              }}
            />
          </div>
          <div className="d-flex align-items-center fix">
            <MotorCircleDigitalTag
              className={` circle-img digital-tag ${useFanImgTagsColorStatus(
                "20DC2_RAL"
              )} ml-2`}
              label="20DC2_RAL"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-6">
        <div className="text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BAG FILTER",
            }}
          />
          <div className="containerImage mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "20DC3",
              }}
            />
          </div>
          <div className="d-flex align-items-center fix">
            <MotorCircleDigitalTag
              className={` circle-img digital-tag ${useFanImgTagsColorStatus(
                "20DC3_RAL"
              )} ml-2`}
              label="20DC3_RAL"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-7">
        <div className="text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BAG FILTER",
            }}
          />
          <div className="containerImage mt-1">
            {" "}
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "20DC4",
              }}
            />
          </div>
          <div className="d-flex align-items-center fix">
            <MotorCircleDigitalTag
              className={` circle-img digital-tag ${useFanImgTagsColorStatus(
                "20DC4_RAL"
              )} ml-2`}
              label="20DC4_RAL"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-7a">
        <div className="text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BAG FILTER",
            }}
          />
          <div className="containerImage mt-1">
            {" "}
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "20DC5",
              }}
            />
          </div>
          <div className="d-flex align-items-center fix">
            <MotorCircleDigitalTag
              className={` circle-img digital-tag ${useFanImgTagsColorStatus(
                "20DC5_RAL"
              )} ml-2`}
              label="20DC5_RAL"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute text-center single-text-8">
        <div className="connector-icon ">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "20DC4_SB_FAN"
            )}`}
            label="20DC4_SB_FAN"
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-9">
        <div className="connector-icon ">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("20DC1_FAN")}`}
            label="20DC1_FAN"
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-10">
        <div className="connector-icon ">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("20DC2_FAN")}`}
            label="20DC2_FAN"
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-11">
        <div className="connector-icon ">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("20DC3_FAN")}`}
            label="20DC3_FAN"
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-12">
        <div className="connector-icon ">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("20DC4_FAN")}`}
            label="20DC4_FAN"
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-12a">
        <div className="connector-icon ">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("20DC5_FAN")}`}
            label="20DC5_FAN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "211AF3_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "211AF3_SI",
            useClass: "greenTxt mt-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "211BCA_II",
          useClass: "greenTxt position-absolute single-text-18",
          unit: "A",
          unitColor: "unitColor",
        }}
      />

      <div className="position-absolute single-text-19 text-center">
        <BlackContainer
          data={{
            label: "211BC7_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="img-88 position-absolute single-text-20"></div>
      <div className="img-88 position-absolute single-text-21"></div>
      <div className="position-absolute d-flex single-text-23">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PLANT PERMISSIVE",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "_ MINES_PERMISSIVE"
          )} ml-2`}
          label="_MINES_PERMISSIVE"
        />
      </div>
      <div className="position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "To L2 SB",
          }}
        />
      </div>
      <div className="position-absolute single-text-25 text-center d-flex">
        <BlackContainer
          data={{
            label: "211BC8_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "211BC9_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "211BCB_II",
          useClass: "greenTxt position-absolute single-text-26",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "211BCC_SI",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "211BCC_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="grn-gry-img position-absolute single-text-28"></div>
      <button
        className="position-absolute single-text-29 btn greenbtn Btn-1 ml-2 mt-4"
        onClick={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "maiharline1oldolbcpopup2",
              plant: "maihar",
              plantcode: "MACW",
            },
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "maiharline1oldolbcpopup2",
              plant: "maihar",
              plantcode: "MACW",
            },
          });
        }}
      >
        211BC9-Temp
      </button>
      <button
        className="position-absolute single-text-30 btn greenbtn Btn-1 ml-2 mt-4"
        onClick={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "maiharline1oldolbcpopup1",
              plant: "maihar",
              plantcode: "MACW",
            },
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_MIMIC_POPUP",
            payload: {
              mimicName: "maiharline1oldolbcpopup1",
              plant: "maihar",
              plantcode: "MACW",
            },
          });
        }}
      >
        282BC9-Temp
      </button>
    </div>
  );
};

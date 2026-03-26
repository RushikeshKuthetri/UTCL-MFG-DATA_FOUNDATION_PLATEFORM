import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  MotorCircleDigitalTag,
  Connector,
  ProgressBarMimic,
} from "../../../../index";

import * as tagsData from "../../../../../data/Kotputli/Line1/CM1ControlSheet/kotputliLine1CM1ControlSheetTextcolumn";
import {
  useColorStatus,
  useFanImgTagsColorStatus,
  useImgColorStatus,
  useImgHexaLColorStatus,
  useImgHexaRColorStatus,
} from "../../../../../utils";

export const CM1ControlSheetkotputliL1 = () => {
  return (
    <div className="CM1ControlSheetkotputliL1 w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr upArrow position-absolute line-29"></div>
      <div className="yellowline-Vr upArrow position-absolute line-30"></div>
      <div className="yellowline-Vr upArrow position-absolute line-31"></div>
      <div className="yellowline-Vr upArrow position-absolute line-32"></div>
      <div className="yellowline-Vr upArrow position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="d-flex position-absolute line-35">
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
      </div>
      <div className="d-flex position-absolute line-36">
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
      </div>
      <div className="yellowline-Vr downArrow position-absolute line-37"></div>
      <div className="yellowline-Vr downArrow position-absolute line-38"></div>
      <div className="yellowline-Vr downArrow position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>
      <div className="yellowline-Vr position-absolute line-41"></div>
      <div className="yellowline-Vr position-absolute line-42"></div>
      <div className="d-flex flex-column position-absolute line-43">
        <div className="yellowline-Hr rightarrow position-relative"></div>
        <div className="yellowline-Hr rightarrow position-relative"></div>
        <div className="yellowline-Hr rightarrow position-relative"></div>
      </div>
      <div className="d-flex flex-column position-absolute line-44">
        <div className="yellowline-Hr position-relative"></div>
        <div className="yellowline-Hr position-relative"></div>
        <div className="yellowline-Hr position-relative"></div>
      </div>
      <div className="yellowline-Hr position-absolute line-45"></div>
      <div className="yellowline-Hr position-absolute line-46"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-47"></div>
      <div className="yellowline-Hr position-absolute line-48"></div>
      <div className="yellowline-Hr position-absolute line-49"></div>
      <div className="yellowline-Hr position-absolute line-50"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-51"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-52"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-53"></div>
      <div className="yellowline-Hr position-absolute line-54"></div>
      <div className="pipeVr d-flex flex-column pb-3 justify-content-around position-absolute pipe-1">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag mt-4 ${useFanImgTagsColorStatus(
            "CM1_531RF2_A"
          )}`}
          label="CM1_531RF2_A"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM1_531RF1_LH")}`}
          label="CM1_531RF1_LH"
        />
      </div>
      <div className="pipeVr d-flex flex-column justify-content-end pb-3 position-absolute pipe-2">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM1_561SR1_A")}`}
          label="CM1_561SR1_A"
          text="M"
        />
      </div>
      <div className="pipeVr position-absolute pipe-3">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag mt-4 ${useFanImgTagsColorStatus(
            "CM1_531RF3_A"
          )}`}
          label="CM1_531RF3_A"
        />
      </div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="d-flex flex-column align-items-center position-absolute pipe-7">
        <div className="yellowline-Vr upArrow position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="yellowline-Vr upArrow position-relative mt-1"></div>
      </div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9"></div>
      <div className="pipeHr position-absolute pipe-10"></div>
      <div className="pipeHr position-absolute pipe-11"></div>
      <div className="pipeHr position-absolute pipe-12"></div>
      <div className="pipeHr position-absolute pipe-13"></div>
      <div className="pipeHr position-absolute pipe-14"></div>
      <div className="pipeHr position-absolute pipe-15"></div>
      <div className="pipeHr position-absolute pipe-16"></div>
      <div className="pipeHr position-absolute pipe-17">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ml-auto ${useFanImgTagsColorStatus(
            "CM1_531RF1_A"
          )}`}
          label="CM1_531RF1_A"
        />
      </div>
      <div className="pipeHr position-absolute pipe-18"></div>
      <div className="pipeVr position-absolute pipe-19"></div>
      <div className="d-flex flex-column align-items-center bigContainer text-center pt-3 position-absolute single-text-1">
        <BlackContainer
          data={{
            label: "CM1_561CM1_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM1_561CM1_XT",
            useClass: "greenTxt mt-2 ml-3",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-auto">
          <BlackContainer
            data={{
              label: "CM1_561CMMD1_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM1_561CMMD1_JI",
              useClass: "greenTxt ml-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="bagHouse d-flex flex-column justify-content-center align-items-center position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-2 mt-1",
            label: "CM1 BAG HOUSE",
          }}
        />
        <i className="fa-solid fa-bolt-lightning text-dark"></i>
      </div>
      <div className="reject-bin text-center position-absolute single-text-3">
        <BlackContainer
          data={{
            label: "CM1_510HP1_LI",
            useClass: "greenTxt mt-1",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1",
            label: "510HP1",
          }}
        />
      </div>
      <div className="reject-bin text-center position-absolute single-text-4">
        <BlackContainer
          data={{
            label: "CM1_510HP2_LI",
            useClass: "greenTxt mt-1",
            unit: "mtr",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM1_510HP2_WI",
            useClass: "greenTxt mt-1",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1",
            label: "510HP2",
          }}
        />
      </div>
      <div className="reject-bin text-center position-absolute single-text-5">
        <BlackContainer
          data={{
            label: "CM1_510HP3_LI",
            useClass: "greenTxt mt-1",
            unit: "mtr",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM1_510HP3_WI",
            useClass: "greenTxt mt-1",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1",
            label: "510HP3",
          }}
        />
      </div>
      <div className="reject-bin text-center position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1",
            label: "510HP4",
          }}
        />
      </div>
      <div className="connector-both-side position-absolute single-text-7">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus(
            "CM1_561FN4_A"
          )}`}
          label="CM1_561FN4_A"
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-8">
        <BlackContainer
          data={{
            label: "CM1_561FN4_BTE1",
            useClass: "greenTxt",
            unit: "m3/h",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-both-side">
          <MotorCircleDigitalTag className={`line-circle grey-color`} />
        </div>
        <div className="connector-both-side">
          <MotorCircleDigitalTag className={`line-circle grey-color`} />
        </div>
      </div>
      <div className="connector-both-side position-absolute single-text-9">
        <MotorCircleDigitalTag className={`line-circle grey-color`} />
      </div>
      <div className="position-absolute single-text-10">
        <div className="connector-both-side">
          <MotorCircleDigitalTag className={`line-circle grey-color`} />
        </div>
        <div className="connector-both-side">
          <MotorCircleDigitalTag className={`line-circle grey-color`} />
        </div>
        <div className="connector-both-side">
          <MotorCircleDigitalTag className={`line-circle grey-color`} />
        </div>
      </div>
      <div className="position-absolute single-text-11">
        <BlackContainer
          data={{
            label: "CM1_561FN2_PT1",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <div className="connector-both-side mt-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "CM1_561FN2_A"
            )}`}
            label="CM1_561FN2_A"
          />
        </div>
        <div className="connector-both-side mt-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "CM1_561FN3_A"
            )}`}
            label="CM1_561FN3_A"
          />
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <div className="connector-both-side">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "CM1_561FN5_A"
            )}`}
            label="CM1_561FN5_A"
          />
        </div>
        <BlackContainer
          data={{
            label: "CM1_561FN5_SI",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex justify-content-center align-items-end pb-3 reject-bin position-absolute single-text-13">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM1_531HP1_LH")}`}
          label="CM1_531HP1_LH"
        />
      </div>
      <div className="containerImage d-flex justify-content-center pt-2 position-absolute single-text-14">
        <MotorCircleDigitalTag
          className={`square digital-tag p-3 ${useColorStatus("CM1_561BF1_A")}`}
          label="CM1_561BF1_A"
          text="T"
        />
      </div>
      <div className="containerImage d-flex justify-content-center pt-2 position-absolute single-text-15">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM1_531BF1_A")}`}
          label="CM1_531BF1_A"
          text="T"
        />
      </div>
      <div className="containerImage d-flex justify-content-center pt-2 position-absolute single-text-16">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM1_531HP2_LH")}`}
          label="CM1_531HP2_LH"
        />
      </div>
      <PipeWithCircles parentDivClass="pipe dotted-pipe position-absolute single-text-17" />
      <Connector
        parentClass="connector-icon p-1 position-absolute single-text-18"
        childClass={`line-circle digital-tag ${useColorStatus("CM1_561FN1_A")}`}
        childLabel="CM1_561FN1_A"
      />
      <Connector
        parentClass="connector-icon p-1 position-absolute single-text-19"
        childClass={`dot ${useColorStatus("CM1_531FN1_VFD_A")}`}
        childLabel="CM1_531FN1_VFD_A"
        childText="M"
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-20"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus(
            "CM1_531WF1_A"
          )}`,
          secondCircleLabel: "CM1_531WF1_A",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-21"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus(
            "CM1_531WF2_A"
          )}`,
          secondCircleLabel: "CM1_531WF2_A",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-22"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus(
            "CM1_531WF3_A"
          )}`,
          secondCircleLabel: "CM1_531WF3_A",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-23"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus(
            "CM1_531WF4_A"
          )}`,
          secondCircleLabel: "CM1_531WF4_A",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-24"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus(
            "CM1_531BC2_A"
          )}`,
          secondCircleLabel: "CM1_531BC2_A",
          secondCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-25">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "dot grey-color",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus(
              "CM1_561BC3_A"
            )}`,
            secondCircleLabel: "CM1_561BC3_A",
            secondCircleText: "M",
          }}
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CM1_561BC3_BSS"
          )} px-2 ml-4`}
          label="CM1_561BC3_BSS"
          text="BSS"
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-26"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "M",
        }}
      />
      <div className=" position-absolute single-text-27">
        <MotorCircleDigitalTag
          className={`text-dark mx-auto digital-tag ${useColorStatus(
            "CM1_531BC2_BSS"
          )} ml-2`}
          label="CM1_531BC2_BSS"
          text="BSS"
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "dot grey-color",
          }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus(
              "CM1_531BC2_A"
            )}`,
            secondCircleLabel: "CM1_531BC2_A",
            secondCircleText: "M",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-28"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("CM1_531BC3_A")}`,
          firstCircleLabel: "CM1_531BC3_A",
          firstCircleText: "M",
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <div className=" position-absolute single-text-29">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus(
              "CM1_561BC1_A"
            )}`,
            firstCircleLabel: "CM1_561BC1_A",
            firstCircleText: "M",
          }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
          }}
        />
        <MotorCircleDigitalTag
          className={`text-dark mx-auto digital-tag ${useColorStatus(
            "CM1_561BC1_BSS"
          )}`}
          label="CM1_561BC1_BSS"
          text="BSS"
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-30"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("CM1_561BC2_A")}`,
          firstCircleLabel: "CM1_561BC2_A",
          firstCircleText: "M",
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-31"
        text={{ useClass: "text-dark ml-3", label: "591AS1" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-32"
        text={{ useClass: "text-dark ml-3", label: "591AS2" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-33"
        text={{ useClass: "text-dark ml-3", label: "591AS3" }}
      />
      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag position-absolute single-text-34 ${useImgColorStatus(
          "CM1_561DG1:IO"
        )}`}
        label="CM1_561DG1:IO"
      />
      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag position-absolute single-text-35 ${useImgColorStatus(
          "CM1_531DG1_A.Out.PosCls"
        )}`}
        label="CM1_531DG1_A.Out.PosCls"
      />
      <div className="d-flex position-absolute single-text-36">
        <MotorCircleDigitalTag
          className={`hexa-gray-green-red-img digital-tag ${useImgHexaLColorStatus(
            "CM1_531DG2:IO"
          )}`}
          label="CM1_531DG2:IO"
        />
        <MotorCircleDigitalTag
          className={`hexa-gray-green-red-img digital-tag ${useImgHexaRColorStatus(
            "CM1_531DG2:IO.Out.PosCls"
          )}`}
          label="CM1_531DG2:IO.Out.PosCls"
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-37"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn1}
      />
      <TextColumn
        useClass="position-absolute single-text-38"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn2}
      />
      <TextColumn
        useClass="position-absolute single-text-39"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn3}
      />
      <TextColumn
        useClass="position-absolute single-text-40"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn4}
      />
      <div className="position-absolute single-text-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CLINKER",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM1_510HP1_LH")}`}
          label="CM1_510HP1_LH"
        />
      </div>
      <div className="position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GYPSUM",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM1_510HP2_LH")}`}
          label="CM1_510HP2_LH"
        />
      </div>
      <div className="position-absolute single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PI",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM1_510HP3_LH")}`}
          label="CM1_510HP3_LH"
        />
      </div>
      <div className="position-absolute single-text-44">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CM2 HP3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FLYASH",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`text-dark digital-tag position-absolute single-text-45 ${useColorStatus(
          "CM1_531BC1_BSS"
        )} px-2`}
        label="CM1_531BC1_BSS"
        text="BSS"
      />
      <div className="grid-container-4 border position-absolute single-text-46 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "ROLLER FEED",
          }}
        />
        <BlackContainer
          data={{
            label: "CM1_561RL1M_SI1",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM1_561RL2M_SI1",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM1_561RL3M_SI1",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "M POSITION",
          }}
        />
        <BlackContainer
          data={{
            label: "CM1_561RL1M_ZT_PSN",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM1_561RL2M_ZT_PSN",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM1_561RL3M_ZT_PSN",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`circle-img digital-tag position-absolute single-text-47 ${useFanImgTagsColorStatus(
          "CM1_561RA1_A"
        )}`}
        label="CM1_561RA1_A"
      />
      <MotorCircleDigitalTag
        className={`circle-img digital-tag position-absolute single-text-48 ${useFanImgTagsColorStatus(
          "CM1_531RA1_A"
        )}`}
        label="CM1_531RA1_A"
      />
      <MotorCircleDigitalTag
        className={`dot digital-tag position-absolute single-text-49 ${useColorStatus(
          "CM1_561BEMD1_A"
        )}`}
        label="CM1_561BEMD1_A"
        text="M"
      />
      <TextColumn
        useClass="position-absolute single-text-50"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn5}
      />
      <div className="d-flex position-absolute single-text-51">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CM1_531MS1_BSS"
          )} px-2 mr-1`}
          label="CM1_531MS1_BSS"
          text="BSS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM1_531MS1_A")}`}
          label="CM1_531MS1_A"
        />
      </div>
      <BlackContainer
        data={{
          label: "CM1_591BF1_DPT",
          useClass: "greenTxt position-absolute single-text-52",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <MotorCircleDigitalTag
        className={`square digital-tag position-absolute single-text-53 ${useColorStatus(
          "CM1_531MT1_MD"
        )}`}
        label="CM1_531MT1_MD"
      />
      <BlackContainer
        data={{
          label: "CM1_531HP1_WI",
          useClass: "greenTxt position-absolute single-text-54",
          unit: "t",
          unitColor: "unitColor",
        }}
      />
      <MotorCircleDigitalTag
        className={`square digital-tag position-absolute single-text-55 ${useColorStatus(
          "CM1_531MT2_MD"
        )}`}
        label="CM1_531MT2_MD"
      />
      <div className="position-absolute single-text-56">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "CM1_531BC3_BSS"
          )} ml-2`}
          label="CM1_531BC3_BSS"
          text="BSS"
        />
        <BlackContainer
          data={{
            label: "CM1_531BC3_SI",
            useClass: "greenTxt mt-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-57"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn11}
      />
      <MotorCircleDigitalTag
        className={`line-circle digital-tag position-absolute single-text-58 ${useColorStatus(
          "CM1_531GA1_A"
        )}`}
        label="CM1_531GA1_A"
      />
      <TextColumn
        useClass="position-absolute single-text-59"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn13}
      />
      <BlackContainer
        data={{
          label: "CM1_531RF1_A",
          useClass: "greenTxt position-absolute single-text-60",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-61"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn6}
      />
      <div className="d-flex position-absolute single-text-62">
        <MotorCircleDigitalTag
          className={`square mt-2 digital-tag ${useColorStatus(
            "CM1_561BE1_LH"
          )}`}
          label="CM1_561BE1_LH"
        />
        <BlackContainer
          data={{
            label: "CM1_561BC2_FI",
            useClass: "greenTxt",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`text-dark mt-2 digital-tag ${useColorStatus(
            "CM1_561BC2_BSS"
          )} px-2`}
          label="CM1_561BC2_BSS"
          text="BSS"
        />
      </div>
      <BlackContainer
        data={{
          label: "KM_L41KM1_XT",
          useClass: "greenTxt position-absolute single-text-63",
          unit: "RPM",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        useClass="d-flex position-absolute single-text-64"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn12}
      />
      <TextColumn
        useClass="position-absolute single-text-65"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn16}
      />
      <TextColumn
        useClass="position-absolute single-text-66"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn15}
      />
      <TextColumn
        useClass="position-absolute single-text-67"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn7}
      />
      <TextColumn
        useClass="position-absolute single-text-68"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn8}
      />
      <div className="position-absolute single-text-69">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "TO STACK",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "CM1_561BF2_PT2A",
              useClass: "greenTxt mt-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM1_561ST1_SMC",
              useClass: "greenTxt ml-5",
              unit: "mg/m3",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <TextColumn
        useClass="position-absolute single-text-70"
        list={tagsData.kotputliLine1CM1ControlSheetTextcolumn14}
      />
      <BlackContainer
        data={{
          label: "CM1_561FN4_SI",
          useClass: "greenTxt position-absolute single-text-71",
          unit: "rpm",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CM1_561BF2_DPT",
          useClass: "greenTxt position-absolute single-text-72",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <div className="boxContainer position-absolute single-text-73">
        <BlackContainer
          data={{
            label: "CM1_561SR1_KW",
            useClass: "greenTxt ml-auto mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM1_561SR1_SI2",
            useClass: "greenTxt ml-auto mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-1">
          <BlackContainer
            data={{
              label: "CM1_561SR1_SI1",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM1_561SR1_TE3",
              useClass: "greenTxt ml-5",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CM1_561SR1_TE2",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex flex-column boxContainer position-absolute single-text-74">
        <div className={`line-circle  grey-color`} />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt ml-2",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <div className={`line-circle  grey-color`} />
      </div>
      <div className="position-absolute single-text-75">
        <ProgressBarMimic label="CM1_531WT1_LI" />
      </div>
      <div className="boxContainer position-absolute single-text-76">
        <TextColumn
          useClass="grid-container-2"
          list={tagsData.kotputliLine1CM1ControlSheetTextcolumn9}
        />
        <MotorCircleDigitalTag
          className={`dot ml-auto mt-2 digital-tag ${useColorStatus(
            "CM1_531FM2_M"
          )}`}
          label="CM1_531FM2_M"
          text="M"
        />
        <TextColumn
          useClass="d-flex mt-2"
          list={tagsData.kotputliLine1CM1ControlSheetTextcolumn10}
        />
      </div>

      <BlackContainer
        data={{
          label: "CM1_561LD3_ZT",
          useClass: "greenTxt position-absolute single-text-77",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-78",
          label: "FLYASH",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-79",
          label: "FLYASH",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-80",
          label: "FRESH AIR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-81",
          label: "SILO1 SIDE",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-82",
          label: "SILO2 SIDE",
        }}
      />

      <BlackContainer
        data={{
          label: "CM1_561SR1_TE",
          useClass: "greenTxt position-absolute single-text-83",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
    </div>
  );
};

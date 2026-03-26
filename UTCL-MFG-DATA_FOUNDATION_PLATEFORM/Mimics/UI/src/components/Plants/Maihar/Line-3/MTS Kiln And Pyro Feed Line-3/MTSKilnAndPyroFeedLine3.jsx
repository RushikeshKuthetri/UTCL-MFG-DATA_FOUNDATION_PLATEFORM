import {
  BlackContainer,
  TextContainerWithWrapWord,
  MotorCircleDigitalTag,
  PipeWithCircles,
  MimicCaret,
} from "../../../../index";
import {
  useColorStatus,
  useFanImgTagsColorStatus,
  useImgColorStatus,
} from "../../../../../utils";

export const MTSKilnAndPyroFeedLine3 = () => {
  return (
    <div className="MTSKilnAndPyroFeedLine3 w-100 h-100 position-relative">
      <div className="pipeVr position-absolute pipe-1"></div>
      <div className="pipeVr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute pipe-5" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute pipe-6" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute pipe-7" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute pipe-8" />
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeVr position-absolute pipe-11"></div>
      <div className="pipeVr position-absolute pipe-12"></div>
      <div className="pipeVr position-absolute pipe-13"></div>
      <div className="pipeVr position-absolute pipe-14"></div>
      <div className="pipeHr position-absolute pipe-15"></div>
      <div className="pipeHr position-absolute pipe-16"></div>
      <div className="pipeHr position-absolute pipe-17"></div>
      <div className="pipeHr position-absolute pipe-18"></div>
      <div className="pipeVr position-absolute pipe-19"></div>
      <div className="pipeVr position-absolute pipe-20"></div>
      <div className="pipeVr position-absolute pipe-21"></div>
      <div className="pipeVr position-absolute pipe-22"></div>
      <div className="pipeHr position-absolute pipe-23"></div>
      <div className="pipeHr position-absolute pipe-24"></div>
      <div className="pipeVr position-absolute pipe-25"></div>
      <div className="pipeVr position-absolute pipe-26"></div>
      <div className="pipe dotted-pipe pipe-27"></div>
      <div className="pipe dotted-pipe pipe-28"></div>
      <div className="pipeVr position-absolute pipe-29"></div>
      <div className="pipeVr position-absolute pipe-30"></div>
      <div className="pipeVr position-absolute pipe-31"></div>
      <div className="pipeHr position-absolute pipe-32"></div>
      <div className="pipeVr position-absolute pipe-33"></div>
      <div className="pipeHr position-absolute pipe-34"></div>
      <div className="pipeVr position-absolute pipe-35"></div>
      <div className="pipeVr position-absolute pipe-36"></div>
      <div className="pipeHr position-absolute pipe-37"></div>
      <div className="pipeVr position-absolute pipe-38"></div>
      <div className="pipeHr position-absolute pipe-39"></div>
      <div className="pipeVr position-absolute pipe-40"></div>
      <div className="pipeHr position-absolute pipe-41"></div>
      <div className="pipeVr position-absolute pipe-42"></div>
      <div className="pipeHr position-absolute pipe-43"></div>
      <div className="pipeVr position-absolute pipe-44"></div>
      <div className="pipeHr position-absolute pipe-45"></div>
      <div className="pipeVr position-absolute pipe-46"></div>
      <div className="pipeHr position-absolute pipe-47"></div>
      <div className="pipeVr position-absolute pipe-48"></div>
      <div className="yellowline-Vr position-absolute pipe-49"></div>
      <div className="yellowline-Vr position-absolute pipe-50"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-51"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-52"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-53"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-54"></div>
      <div className="yellowline-Hr position-absolute pipe-55"></div>
      <div className="yellowline-Hr position-absolute pipe-56"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-57"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-58"></div>

      <div className=" position-absolute single-text-1">
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatus(
            "416DG2"
          )}`}
          label="416DG2"
        />
      </div>
      <div className=" position-absolute single-text-2">
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ${useImgColorStatus(
            "416DG1"
          )}`}
          label="416DG1"
        />
      </div>
      <div className=" position-absolute single-text-3">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("416FN1")}`}
            label="416FN1"
            text="M"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-4">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("416FN2")}`}
            label="416FN2"
            text="M"
          />
        </div>
      </div>
      <div className="triangle-with-squares position-absolute single-text-5">
        <div className="d-flex justify-content-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "2",
            }}
          />
        </div>
      </div>
      <div className="triangle-with-squares position-absolute single-text-6">
        <div className="d-flex justify-content-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "2",
            }}
          />
        </div>
      </div>
      <div className="triangle-with-squares position-absolute single-text-7">
        <div className="d-flex justify-content-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "1",
            }}
          />
        </div>
      </div>
      <div className="triangle-with-squares position-absolute single-text-8">
        <div className="d-flex justify-content-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "1",
            }}
          />
        </div>
      </div>
      {/* <div className="position-absolute single-text-9 d-flex ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_571SG3_CLS")}`}
          label="CM_571SG3_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_571SG3_OLS")}`}
          label="CM_571SG3_OLS"
        />
      </div> */}
      {/* <div className="position-absolute single-text-10 d-flex ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_571SG3_CLS")}`}
          label="CM_571SG3_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_571SG3_OLS")}`}
          label="CM_571SG3_OLS"
        />
      </div> */}
      {/* <div className="position-absolute single-text-11 d-flex ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_571SG3_CLS")}`}
          label="CM_571SG3_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_571SG3_OLS")}`}
          label="CM_571SG3_OLS"
        />
      </div> */}
      {/* <div className="position-absolute single-text-12 d-flex ">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_571SG3_CLS")}`}
          label="CM_571SG3_CLS"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CM_571SG3_OLS")}`}
          label="CM_571SG3_OLS"
        />
      </div> */}
      <div className="position-absolute single-text-13 d-flex ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("416BE2")}`}
          label="416BE2"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("416BE1")}`}
          label="416BE1"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-14 d-flex ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "KILN LINE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "PYRO LINE",
          }}
        />
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "416DG2-OPEN Material to Airlift",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "416DG2-CLOSE Material to MTS",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "416DG1-OPEN Material to MTS",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "416DG1-CLOSE Material to Airlift",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO AIR LIFT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "TO AIR LIFT",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 d-flex ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "MTS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "MTS",
          }}
        />
      </div>
      <div className="position-absolute single-text-18 d-flex ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "RM Silo Side",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "132KVSS Side",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 d-flex ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "CCR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "LSR",
          }}
        />
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "KILN FEED ACT",
              }}
            />
            <BlackContainer
              data={{
                label: "AF3001A",
                useClass: "greenTxt ml-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "KILN MTS KW",
              }}
            />
            <BlackContainer
              data={{
                label: "KT4026B",
                useClass: "greenTxt ml-2",
                unit: "KW",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "PRYO FEED ACT",
              }}
            />
            <BlackContainer
              data={{
                label: "AF3002A",
                useClass: "greenTxt ml-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "PYRO MTS KW",
              }}
            />
            <BlackContainer
              data={{
                label: "KT4025",
                useClass: "greenTxt ml-2",
                unit: "KW",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div>
          <div className="">
            <BlackContainer
              data={{
                label: "GT3014",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "PT3007",
                useClass: "greenTxt mt-1",
                unit: "WG",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <div className="">
            <BlackContainer
              data={{
                label: "GT3016",
                useClass: "greenTxt",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "PT3004",
                useClass: "greenTxt mt-1",
                unit: "WG",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  grey-color-caret`}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  grey-color-caret`}
        />
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  grey-color-caret`}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  grey-color-caret`}
        />
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "416RF2"
          )}`}
          label="416RF2"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "416RF1"
          )}`}
          label="416RF1"
        />
      </div>
      <div className=" position-absolute single-text-25 d-flex">
        <div className="containerImage"></div>
        <div className="containerImage"></div>
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "416RF3"
          )}`}
          label="416RF3"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "416RF4"
          )}`}
          label="416RF4"
        />
      </div>
      <div className="position-absolute single-text-27 d-flex ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("416FN7")}`}
          label="416FN7"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("416FN8")}`}
          label="416FN8"
          text="M"
        />
      </div>
    </div>
  );
};

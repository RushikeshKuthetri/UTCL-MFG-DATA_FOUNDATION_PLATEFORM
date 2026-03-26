import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  SingleText,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";

import * as tagsData from "../../../../../data/maihar/line-4/Crusher/maiharL4CrusherTextcolumn";
import {
  useColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useFanImgTagsColorStatus,
  useImgColorStatus,
} from "../../../../../utils";
export const CrusherMaterialHandlingMaiharL4 = () => {
  return (
    <div className="cmh-kotputli cmh-maihar w-100 h-100 position-relative">
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="yellowline-Vr upArrow position-absolute line-1"></div>
      <div className="yellowline-Vr upArrow position-absolute line-2"></div>
      <div className="yellowline-Vr upArrow position-absolute line-4"></div>
      <div className="yellowline-Vr upArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Vr downArrow position-absolute line-55"></div>
      <div className="yellowline-Hr leftArrow position-absolute line-56"></div>
      <div className="yellowline-Hr position-absolute line-57"></div>
      <div className="yellowline-Hr position-absolute line-58"></div>
      <div className="yellowline-Hr position-absolute line-59"></div>
      <div className="yellowline-Vr position-absolute line-61"></div>
      <div className="yellowline-Vr position-absolute line-62"></div>
      <div className="yellowline-Hr position-absolute line-68"></div>
      <div className="yellowline-Vr upArrow position-absolute line-70"></div>
      <div className="yellowline-Vr upArrow position-absolute line-71"></div>
      <div className="yellowline-Vr upArrow position-absolute line-72"></div>
      <div className="yellowline-Vr downArrow position-absolute line-73"></div>
      <div className="yellowline-Vr downArrow position-absolute line-74"></div>
      <div className="yellowline-Vr downArrow position-absolute line-75"></div>
      <div className="yellowline-Vr downArrow position-absolute line-76"></div>
      <div className="yellowline-Vr downArrow position-absolute line-77"></div>
      <div className="yellowline-Vr downArrow position-absolute line-78"></div>
      <div className="yellowline-Vr downArrow position-absolute line-79"></div>
      <div className="yellowline-Vr downArrow position-absolute line-80"></div>
      <div className="yellowline-Vr downArrow position-absolute line-81"></div>
      <div className="yellowline-Vr downArrow position-absolute line-82"></div>
      <div className="yellowline-Vr downArrow position-absolute line-83"></div>
      <div className="yellowline-Vr downArrow position-absolute line-84"></div>
      <div className="yellowline-Vr downArrow position-absolute line-85"></div>
      <div className="yellowline-Vr downArrow position-absolute line-86"></div>
      <div className="yellowline-Vr downArrow position-absolute line-87"></div>
      <div className="yellowline-Vr downArrow position-absolute line-88"></div>
      <div className="yellowline-Vr downArrow position-absolute line-89"></div>
      <div className="yellowline-Vr position-absolute line-90"></div>
      <div className="yellowline-Vr position-absolute line-91"></div>
      <div className="yellowline-Vr position-absolute line-92"></div>
      <div className="yellowline-Vr position-absolute line-93"></div>
      <div className="yellowline-Vr position-absolute line-94"></div>
      <div className="yellowline-Hr position-absolute line-95"></div>
      <div className="yellowline-Hr position-absolute line-96"></div>
      <div className="yellowline-Vr upArrow position-absolute line-97"></div>

      <div className="CGRnBox position-absolute single-text-127"> </div>
      <div className="pipeVr position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "214CR1P",
          }}
        />
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CR_214CR1P"
            )} mr-5 p-3`}
            text="M"
            label="CR_214CR1P"
          />
          <div className={`dot grey-color p-3`}></div>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <div className={`dot mr-5 grey-color p-3`}></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214CR1S")} p-3`}
            text="M"
            label="CR_214CR1S"
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-2"
        text={{ useClass: "text-dark bg-light ml-auto", label: "214CR1S" }}
      />
      <div className="d-flex position-absolute single-text-3">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CR_214BF2")}`}
            label="CR_214BF2"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214FN2")} p-3`}
            text="M"
            label="CR_214FN2"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-4">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CR_214BF3")}`}
            label="CR_214BF3"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div className="yellowline-Vr upArrow position-relative"></div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "CR_214FN3_PH", runLabel: "CR_214FN3_RN" }
            )} p-3`}
            label="CR_214FN3_RN"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-6">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("CR_214BF4")}`}
            label="CR_214BF4"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214FN4")} p-3`}
            text="M"
            label="CR_214FN4"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-7">
        <div className="squareplustri d-flex align-items-center justify-content-center"></div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_214FN1_RUN", healthyLabel: "CR_214FN1_PH" }
            )} p-3`}
            label="CR_214FN1_RUN"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DUMPER",
          }}
        />
        <div className="roller-jcb"></div>
      </div>
      <div className="position-absolute single-text-17">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block  grey-color-caret`}
        />
      </div>
      <div className="position-absolute single-text-18">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block  grey-color-caret`}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-19"
        text={{ useClass: "text-dark ml-4", label: "214SX1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("CR_214SX1")}`,
          secondCircleText: "M",
          secondCircleLabel: "CR_214SX1",
        }}
      />
      <div className="position-absolute single-text-20">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "214AF1" }}
          secondCircle={{
            secondCircleClass: `dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_214AF1_RN", healthyLabel: "CR_214AF1_PH" }
            )}`,
            secondCircleLabel: "CR_214AF1_RN",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <div className="d-flex justify-content-between mb-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214BC2_DE_MG")}`}
            label="CR_214BC2_DE_MG"
            text="E"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214BC2_NDE_MG")}`}
            label="CR_214BC2_NDE_MG"
            text="E"
          />
        </div>
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens({
              healthyLabel: "CR_214BC2_PH",
              runLabel: "CR_214BC2_RUN",
            })} digital-tag`,
            firstCircleText: "M",
            firstCircleLabel: "CR_214BC2_RUN",
          }}
          text={{ useClass: "text-dark", label: "214BC2" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <div className="d-flex justify-content-between mb-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214BC1_NDE_MG")}`}
            label="CR_214BC1_NDE_MG"
            text="E"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214BC1_DE_MG")}`}
            label="CR_214BC1_DE_MG"
            text="E"
          />
        </div>
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "214BC1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "CR_214BC1_PH", runLabel: "CR_214BC1_RUN" }
            )}`,
            secondCircleText: "M",
            secondCircleLabel: "CR_214BC1_RUN",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <div className="d-flex justify-content-between mb-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214BC5_NDE_MG")}`}
            label="CR_214BC5_NDE_MG"
            text="E"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214BC5_DE_MG")}`}
            label="CR_214BC5_DE_MG"
            text="E"
          />
        </div>
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "214BC5" }}
          secondCircle={{
            secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_214BC5_RUN", healthyLabel: "CR_214BC5_PH" }
            )} digital-tag`,
            secondCircleText: "M",
            secondCircleLabel: "CR_214BC5_RUN",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-24"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "214BC4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "CR_214BC4_PH", runLabel: "CR_214BC4_RUN" }
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "CR_214BC4_RUN",
        }}
      />
      <div className="position-absolute single-text-26">
        <div className="d-flex justify-content-between mb-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214BC3_DE_MG")}`}
            label="CR_214BC3_DE_MG"
            text="E"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214BC3_NDE_MG")}`}
            label="CR_214BC3_NDE_MG"
            text="E"
          />
        </div>
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot p-3 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CR_214BC3_RUN",
                healthyLabel: "CR_214BC3_PH",
              }
            )} digital-tag`,
            firstCircleText: "M",
            firstCircleLabel: "CR_214BC3_RUN",
          }}
          text={{ useClass: "text-dark", label: "214BC3" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-27"
        text={{ useClass: "text-dark ml-4", label: "214SC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus(
            "CR_214SC1"
          )} digital-tag`,
          secondCircleText: "M",
          secondCircleLabel: "CR_214SC1",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-28"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus(
            "CR_214SC2"
          )} digital-tag`,
          firstCircleText: "M",
          firstCircleLabel: "CR_214SC2",
        }}
        text={{ useClass: "text-dark mr-4", label: "214SC2" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-29"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus(
            "CR_214SC3"
          )} digital-tag`,
          firstCircleText: "M",
          firstCircleLabel: "CR_214SC3",
        }}
        text={{ useClass: "text-dark mr-4", label: "214SC3" }}
      />
      <div className="position-absolute single-text-44">
        <PipeWithCircles parentDivClass="hpipecircle" />
        <div className="triangle-down "></div>
      </div>
      <div className="position-absolute single-text-45">
        <PipeWithCircles parentDivClass="hpipecircle" />
        <div className="triangle-down"> </div>
        <div className="position-absolute">
          <div className="yellowline-Vr upArrow position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("CR_214WX1")}`}
            label="CR_214WX1"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-46">
        <div className="containerImage"></div>
        <div className="d-flex justify-content-between pipeVr w-100">
          <BlackContainer
            data={{
              label: "CR_214BF1_DPT1",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <div className="squareplustri d-flex align-items-center justify-content-center">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("CR_214BF1")}`}
              label="CR_214BF1"
            />
          </div>

          <BlackContainer
            data={{
              label: "CR_214BF1_PT5",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage"></div>
      </div>
      <div className="d-flex justify-content-center align-items-center containerImage position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214TK1",
          }}
        />
      </div>
      <div className="position-absolute single-text-50">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mb-2",
            label: "214LD2",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CR_214LD2_EOLS",
                closeLabel: "CR_214LD2_EX_CLS",
                healthyLabel: "CR_214LD2_PH",
              }
            )}`}
            label="CR_214LD2_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-51">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "CR_214RA3"
          )}`}
          label="CR_214RA3"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "214RA3",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-52">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "214RA4",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "CR_214RA4"
          )}`}
          label="CR_214RA4"
        />
      </div>
      <div className="position-absolute single-text-54">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4",
            label: "214RA1",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img ml-auto mt-2 digital-tag ${useFanImgTagsColorStatus(
            "CR_214RA1"
          )}`}
          label="CR_214RA1"
        />
      </div>
      <div className="position-absolute single-text-55">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto",
            label: "214RA1A",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
            "CR_214RA1A"
          )}`}
          label="CR_214RA1A"
        />
      </div>
      <div className="position-absolute single-text-56">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4",
            label: "214RA2A",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img ml-auto mt-1 digital-tag ${useFanImgTagsColorStatus(
            "CR_214RA2A"
          )}`}
          label="CR_214RA2A"
        />
      </div>
      <div className="position-absolute single-text-57">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto",
            label: "214RA2",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img mt-1 digital-tag ${useFanImgTagsColorStatus(
            "CR_214RA2"
          )}`}
          label="CR_214RA2"
        />
      </div>
      <div className="d-flex position-absolute single-text-58">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "CR_214RA5"
          )}`}
          label="CR_214RA5"
        />
      </div>
      <div className="position-absolute single-text-65">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus(
            "CR_214CR1P_M01"
          )}`}
          label="CR_214CR1P_M01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CR1P.M01",
          }}
        />
      </div>
      <div className="position-absolute single-text-66">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus(
            "CR_214CR1S_M02"
          )}`}
          label="CR_214CR1S_M02"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CR1S.M02",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-67">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214WP1")} p-3`}
            text="M"
            label="CR_214WP1"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214WP1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-68">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214WP2",
          }}
        />
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214WP2")} p-3`}
            text="M"
            label="CR_214WP2"
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-69",
          label: "REJECT",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-70",
          label: "214BC2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-71",
          label: "TO 214BC3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-73",
          label: "TO 214BC2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-74",
          label: "Screen",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-75",
          label: "214FN2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-76",
          label: "214FN3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-79",
          label: "214FN1",
        }}
      />
      <SingleText
        useClass="containerImage position-absolute single-text-93"
        yellowTextUp="214HP1"
        textClass="text-dark mx-auto"
        data={{
          blackTextLabel: "CR_214HP1_LT",
          blackTextClass: "greenTxt mt-2 mx-auto",
          unit: "m",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-94",
          label: "214BF1",
        }}
      />
      <div className="position-absolute single-text-96">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("CR_214SN1")}`}
            label="CR_214SN1"
          />

          <MotorCircleDigitalTag
            className={`dot p-3 ml-2 digital-tag ${useColorStatus(
              "CR_214SN1"
            )}`}
            label="CR_214SN1"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "214SN1",
          }}
        />
      </div>
      <div className="position-absolute single-text-97">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("CR_214SN2")}`}
            label="CR_214SN2"
          />

          <MotorCircleDigitalTag
            className={`dot p-3 ml-2 digital-tag ${useColorStatus(
              "CR_214SN2"
            )}`}
            label="CR_214SN2"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "214SN2",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-99"
        list={tagsData.maiharL4CrusherTextcolumn5}
      />
      <TextColumn
        useClass="position-absolute single-text-100"
        list={tagsData.maiharL4CrusherTextcolumn1}
      />
      <TextColumn
        useClass="position-absolute single-text-101"
        list={tagsData.maiharL4CrusherTextcolumn4}
      />
      <MotorCircleDigitalTag
        className={`dot digital-tag position-absolute single-text-102 ${useColorStatus(
          "CR_214BC3_VGT"
        )}`}
        label="CR_214BC3_VGT"
        text="V"
      />
      <SingleText
        useClass="position-absolute single-text-103"
        yellowTextUp="214WP1_PT"
        textClass="text-dark"
        data={{
          blackTextLabel: "CR_214WP1_PT",
          blackTextClass: "greenTxt mt-1",
          unit: "bar",
        }}
      />
      <SingleText
        useClass="position-absolute single-text-104"
        yellowText="214BW1"
        textClass="text-dark"
        data={{
          blackTextLabel: "CR_214BW1_TPH",
          blackTextClass: "greenTxt mb-1",
          unit: "TPH",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-105"
        list={tagsData.maiharL4CrusherTextcolumn2}
      />
      <TextColumn
        useClass="position-absolute single-text-106"
        list={tagsData.maiharL4CrusherTextcolumn3}
      />
      <TextColumn
        useClass="position-absolute single-text-107"
        list={tagsData.maiharL4CrusherTextcolumn7}
      />
      <TextColumn
        useClass="position-absolute single-text-120"
        list={tagsData.maiharL4CrusherTextcolumn8}
      />
      <SingleText
        useClass="position-absolute single-text-122"
        yellowTextUp="214TK1_LT"
        textClass="text-dark"
        data={{
          blackTextLabel: "CR_214WP1_LT",
          blackTextClass: "greenTxt mt-1",
          unit: "%",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-123"
        list={tagsData.maiharL4CrusherTextcolumn6}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-124",
          label: "WATER TANK",
        }}
      />
      <div className=" boxContainer position-absolute single-text-126">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mb-1",
            label: "CLS1_WX1",
          }}
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214CLS1_M1")} p-3`}
            text="M"
            label="CR_214CLS1_M1"
          />
          <MotorCircleDigitalTag
            className={`dot ml-5 digital-tag ${useColorStatus(
              "CR_214CLS1_M2"
            )} p-3`}
            text="M"
            label="CR_214CLS1_M2"
          />
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-128">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mb-1",
            label: "CLS3_CR",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CR_214CLS2_M1")} p-3`}
          text="M"
          label="CR_214CLS2_M1"
        />
        <MotorCircleDigitalTag
          className={`dot mt-5 digital-tag ${useColorStatus(
            "CR_214CLS2_M2"
          )} p-3`}
          text="M"
          label="CR_214CLS2_M2"
        />
      </div>
      <div className="boxContainer px-4 position-absolute single-text-129">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CR_214HPP1")} p-3`}
          text="M"
          label="CR_214HPP1"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Hydraulic Power pack",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214HPP",
          }}
        />
      </div>
      <div className="position-absolute single-text-130">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-danger p-1",
            label: "214MS1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot grey-color p-3 mt-2`}
          label="NA"
        />
      </div>
      <div className="position-absolute single-text-132">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214WP1_DPS",
          }}
        />
        <div className="d-flex justify-content-end">
          <div>
            <MotorCircleDigitalTag
              className={`dot mt-1 digital-tag ${useColorStatus(
                "CR_214WP1_DPS"
              )}`}
              label="CR_214WP1_DPS"
              text="P"
            />
            <MotorCircleDigitalTag
              className={`dot mt-1 digital-tag ${useColorStatus(
                "CR_214WP1_ZS1"
              )}`}
              label="CR_214WP1_ZS1"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot mt-1 digital-tag ${useColorStatus(
                "CR_214WP1_ZS2"
              )}`}
              label="CR_214WP1_ZS2"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot mt-1 digital-tag ${useColorStatus(
                "CR_214WP1_ZS3"
              )}`}
              label="CR_214WP1_ZS3"
              text="Z"
            />
          </div>
          <div className="ml-2">
            <div className={`dot mt-1 grey-color`}>L</div>
            <div className={`dot mt-1 grey-color`}>L</div>
            <div className={`dot mt-1 grey-color`}>L</div>
          </div>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-danger p-1 position-absolute single-text-138",
          label: "214WX1",
        }}
      />
      <MotorCircleDigitalTag
        className={`position-absolute single-text-139 dot digital-tag ${useColorStatus(
          "CR_214AF1_ZSS"
        )}`}
        label="CR_214AF1_ZSS"
      />
      <MotorCircleDigitalTag
        className={`dot digital-tag ${useColorStatus(
          "CR_214SX2_ZSS1"
        )} position-absolute single-text-141`}
        label="CR_214SX2_ZSS1"
        text="H"
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-144",
          label: "Water Spray System",
        }}
      />
      <div className="d-flex position-absolute single-text-150">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CR_214BC4_NDE_MG")}`}
          label="CR_214BC4_NDE_MG"
          text="E"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CR_214BC4_DE_MG")}`}
          label="CR_214BC4_DE_MG"
          text="E"
        />
      </div>
      {/* new added */}
      <div className="trapezoid position-absolute single-text-151"></div>
      <div className="trapezoid position-absolute single-text-152"></div>
      <div className="d-flex position-absolute single-text-153">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "CR_214BF8_TMR_PH",
                runLabel: "CR_214BF8_TMR_RUN",
              }
            )}`}
            label="CR_214BF8_TMR_RUN"
          />
        </div>

        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "CR_214FN8"
            )} p-3`}
            label="CR_214FN8"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-154">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "CR_214BF9_TMR_PH",
                runLabel: "CR_214BF9_TMR_RUN",
              }
            )}`}
            label="CR_214BF9_TMR_RUN"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div className="yellowline-Vr upArrow position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "CR_214FN9_PH", runLabel: "CR_214FN9_RUN" }
            )}`}
            label="CR_214FN9_RUN"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-155">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "CR_214BFA_TMR_PH",
                runLabel: "CR_214BFA_TMR_RUN",
              }
            )}`}
            label="CR_214BFA_TMR_RUN"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214FNA")} p-3`}
            label="CR_214FNA"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-156">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "CR_214BFB_TMR_PH",
                runLabel: "CR_214BFB_TMR_RUN",
              }
            )}`}
            label="CR_214BFB_TMR_RUN"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("CR_214FNB")}`}
            label="CR_214FNB"
          />
        </div>
      </div>
      <div className="img-98 position-absolute single-text-157"></div>
      <div className="roller-jcb position-absolute single-text-158"></div>
      <div className="position-absolute single-text-159">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "214BC6" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "CR_214BC6_PH", runLabel: "CR_214BC6_RUN" }
            )}`,
            secondCircleText: "M",
            secondCircleLabel: "CR_214BC6_RUN",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_214BC6_II",
            useClass: "greenTxt mt-1 ml-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-161"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "214BC6A" }}
        secondCircle={{
          secondCircleClass: `dot p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              healthyLabel: "CR_214BC6A_PH",
              runLabel: "CR_214BC6A_RUN",
            }
          )} digital-tag`,
          secondCircleText: "M",
          secondCircleLabel: "CR_214BC6A_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-162"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "214BCC" }}
        secondCircle={{
          secondCircleClass: `dot p-3 grey-color`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-163"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "214BCA" }}
        secondCircle={{
          secondCircleClass: "dot p-3 grey-color",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-164"
        text={{ useClass: "text-dark ml-4", label: "214SX2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus(
            "CR_214SX2"
          )} digital-tag`,
          secondCircleText: "M",
          secondCircleLabel: "CR_214SX2",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-165"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "214AF2" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              healthyLabel: "CR_214AF2_PH",
              runLabel: "CR_214AF2_RN",
            }
          )} digital-tag`,
          secondCircleLabel: "CR_214AF2_RN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-166"
        firstCircle={{
          firstCircleClass: `dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "CR_214BC8A_PH", runLabel: "CR_214BC8A_RUN" }
          )}`,
          firstCircleLabel: "CR_214BC8A_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark mx-auto", label: "214BC8A" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-167"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "214BC8" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-168"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "214BCA" }}
        secondCircle={{
          secondCircleClass: `dot p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CR_214BCA_RUN",
              healthyLabel: "CR_214BCA_PH",
            }
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "CR_214BCA_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-169"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "214BC9" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "CR_214BC9_PH", runLabel: "CR_214BC9_RUN" }
          )}`,
          secondCircleLabel: "CR_214BC9_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-170"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "214BCB" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "CR_214BCB_PH", runLabel: "CR_214BCB_RUN" }
          )}`,
          secondCircleLabel: "CR_214BCB_RUN",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-171"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "214BC7" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "CR_214BC7_PH", runLabel: "CR_214BC7_RUN" }
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "CR_214BC7_RUN",
        }}
      />
      <div className="containerImage pt-1 position-absolute single-text-172">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mb-1",
            label: "214HP2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "SURGE HOPPER",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-173">
        <MotorCircleDigitalTag
          className={`circle-img ${useFanImgTagsColorStatus("CR_214RA9")}`}
          label="CR_214RA9"
        />
      </div>
      <div className="d-flex position-absolute single-text-174">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "CR_214RAA"
          )}`}
          label="CR_214RAA"
        />
      </div>
      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag position-absolute single-text-175 ${useImgColorStatus(
          "CR_214GD1"
        )}`}
        label="CR_214GD1"
      />
      <div className="d-flex position-absolute single-text-176">
        <MotorCircleDigitalTag className={`dot p-3 grey-color`} label="NA" />
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ml-1 ${useImgColorStatus(
            "CR_214GD3"
          )}`}
          label="CR_214GD3"
        />
      </div>
      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag position-absolute single-text-177 ${useImgColorStatus(
          "CR_214GD2"
        )}`}
        label="CR_214GD2"
      />
      <div className="boxContainer position-absolute single-text-178">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mb-1",
            label: "CLS2_SX2",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CR_214CLS3_M1")} p-3`}
          text="M"
          label="CR_214CLS3_M1"
        />
        <MotorCircleDigitalTag
          className={`dot mt-5 digital-tag ${useColorStatus(
            "CR_214CLS3_M2"
          )} p-3`}
          text="M"
          label="CR_214CLS3_M2"
        />
      </div>
      <div className="d-flex position-absolute single-text-179">
        <div className="squareplustri">
          <div className="squareplustri d-flex align-items-center justify-content-center">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  healthyLabel: "CR_214BF7_TMR_PH",
                  runLabel: "CR_214BF7_TMR_RUN",
                }
              )}`}
              label="CR_214BF7_TMR_RUN"
            />
          </div>
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "CR_214FN7"
            )} p-3`}
            label="CR_214FN7"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-180">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "CR_214BF6_TMR_PH",
                runLabel: "CR_214BF6_TMR_RUN",
              }
            )}`}
            label="CR_214BF6_TMR_RUN"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div className="yellowline-Vr upArrow position-relative"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_214FN6_RUN", healthyLabel: "CR_214FN6_PH" }
            )} p-3`}
            label="CR_214FN6_RUN"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-181">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CR_214BF5_TMR_RUN",
                healthyLabel: "CR_214BF5_TMR_PH",
              }
            )}`}
            label="CR_214BF5_TMR_RUN"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "CR_214FN5"
            )} p-3`}
            label="CR_214FN5"
          />
        </div>
      </div>
      <div className="position-absolute single-text-182">
        <BlackContainer
          data={{
            label: "CR_214BF7_DPT1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_214BF7_PT1",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-183">
        <BlackContainer
          data={{
            label: "CR_214BFB_DPT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_214BFB_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-184">
        <BlackContainer
          data={{
            label: "CR_214BF8_PT1",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_214BF8_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-185">
        <BlackContainer
          data={{
            label: "CR_214BFA_DPT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_214BFA_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-186">
        <BlackContainer
          data={{
            label: "CR_214BF6_DPT1",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_214BF6_PT1",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-187">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214BF8",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "ByPass",
          }}
        />
      </div>
      <div className="position-absolute single-text-188">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214BFA",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "ByPass",
          }}
        />
      </div>
      <div className="position-absolute single-text-189">
        <div className="roller-jcb"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TRUCK LOADING",
          }}
        />
      </div>
      <div className="position-absolute single-text-190">
        <BlackContainer
          data={{
            label: "CR_214BC9_MT1_SI",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-danger px-1",
            label: "214BCA",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_214BW3_TPH",
            useClass: "greenTxt mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-191">
        <BlackContainer
          data={{
            label: "CR_214BC8_MT1_SI",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "EXISITING_LINE_212BC5_RUN"
          )} mt-1`}
          label="EXISITING_LINE_212BC5_RUN"
        />
      </div>
      <div className="boxContainer position-absolute single-text-192">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mr-1",
              label: "OLS_WX1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CR_214OLS_M1"
            )} ml-auto p-3`}
            text="M"
            label="CR_214OLS_M1"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "M1 SEL",
            }}
          />
        </div>

        <div className=" d-flex mt-01">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214OLS_M3")} p-3`}
            text="M"
            label="CR_214OLS_M3"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "214OLS M3",
            }}
          />
        </div>

        <div className="mt-01 d-flex justify-content-end">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "M3",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_214OLS_M2")} p-3`}
            text="M"
            label="CR_214OLS_M2"
          />
        </div>
      </div>
      <div className="position-absolute single-text-193">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SP",
            }}
          />
          <BlackContainer
            data={{
              label: "UPIDB_214AF1",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>

        <BlackContainer
          data={{
            label: "AF1_EXT_SP",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-194">
        <BlackContainer
          data={{
            label: "CR_214BF1_PT3",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_214BF1_PT4",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`circle-img digital-tag ${useFanImgTagsColorStatus(
          "CR_214RA8"
        )} position-absolute single-text-195`}
        label="CR_214RA8"
      />
      <div className="d-flex position-absolute single-text-196">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "CR_214RA7"
          )}`}
          label="CR_214RA7"
        />
      </div>
      <div className="d-flex position-absolute single-text-197">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "CR_214RA6"
          )}`}
          label="CR_214RA6"
        />
      </div>
      <div className="position-absolute single-text-198">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "CR_214RAB"
          )}`}
          label="CR_214RAB"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "214BCA",
          }}
        />
      </div>
      <div className="position-absolute single-text-199">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "CR_214RAC"
          )}`}
          label="CR_214RAC"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "214BCB",
          }}
        />
      </div>
      <div className="position-absolute single-text-200">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("OLBC2_O_P_M01")}`}
            label="OLBC2_O_P_M01"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 ml-1 digital-tag ${useColorStatus(
              "OLBC2_O_P_M02"
            )}`}
            label="OLBC2_O_P_M02"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 ml-1 digital-tag ${useColorStatus(
              "OLBC2_O_P_M03"
            )}`}
            label="OLBC2_O_P_M03"
          />
        </div>
        <div className="d-flex mt-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("OLBC2_C_P_M01")}`}
            label="OLBC2_C_P_M01"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 ml-1 digital-tag ${useColorStatus(
              "OLBC2_C_P_M02"
            )}`}
            label="OLBC2_C_P_M02"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 ml-1 digital-tag ${useColorStatus(
              "OLBC2_C_P_M03"
            )}`}
            label="OLBC2_C_P_M03"
          />
        </div>
      </div>
      <div className="position-absolute single-text-201">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("OLBC1_O_P_M01")}`}
            label="OLBC1_O_P_M01"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 ml-1 digital-tag ${useColorStatus(
              "OLBC1_O_P_M02"
            )}`}
            label="OLBC1_O_P_M02"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 ml-1 digital-tag ${useColorStatus(
              "OLBC1_O_P_M03"
            )}`}
            label="OLBC1_O_P_M03"
          />
        </div>
        <div className="d-flex mt-1">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("OLBC1_C_P_M01")}`}
            label="OLBC1_C_P_M01"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 ml-1 digital-tag ${useColorStatus(
              "OLBC1_C_P_M02"
            )}`}
            label="OLBC1_C_P_M02"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 ml-1 digital-tag ${useColorStatus(
              "OLBC1_C_P_M03"
            )}`}
            label="OLBC1_C_P_M03"
          />
        </div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-202">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("EXISITING_LINE1_OK")}`}
          label="EXISITING_LINE1_OK"
          text="P"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1 ml-2",
            label: "EXISTING SURGE BIN - A1",
          }}
        />
      </div>
      <div className="position-absolute single-text-203">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CR_214BFB_TMR_PH")}`}
          label="CR_214BFB_TMR_PH"
        />
        <MotorCircleDigitalTag
          className={`square mt-1 digital-tag ${useColorStatus(
            "CR_214BFB_TMR_RUN"
          )}`}
          label="CR_214BFB_TMR_RUN"
        />
      </div>
      <div className="position-absolute single-text-204">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("CR_214BFA_TMR_PH")}`}
          label="CR_214BFA_TMR_PH"
        />
        <MotorCircleDigitalTag
          className={`square mt-1 digital-tag ${useColorStatus(
            "CR_214BFA_TMR_RUN"
          )}`}
          label="CR_214BFA_TMR_RUN"
        />
      </div>
      <MotorCircleDigitalTag
        className={`dot digital-tag ${useColorStatus(
          "CR_214HP2_LS"
        )} position-absolute single-text-205`}
        label="CR_214HP2_LS"
        text="L"
      />
      <div className="position-absolute single-text-206">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214BF7",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "ByPass",
          }}
        />
      </div>
      <div className="position-absolute single-text-207">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214BF5",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "ByPass",
          }}
        />
      </div>
      <div className="position-absolute single-text-208">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214BF6",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "ByPass",
          }}
        />
      </div>
      <div className="position-absolute single-text-209">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214BF9",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "ByPass",
          }}
        />
      </div>
      <div className="position-absolute single-text-210">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214BFB",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "ByPass",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-danger p-1 position-absolute single-text-211",
          label: "214BCC",
        }}
      />
      <div className="position-absolute single-text-213">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "Bypass",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214BF3",
          }}
        />
      </div>
      <div className="position-absolute single-text-214">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "Bypass",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214BF4",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-215",
          label: "WOBBLER",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-216",
          label: "214FN9",
        }}
      />
      <div className="position-absolute single-text-217">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "214ST1",
          }}
        />

        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "CR_214ST1_PH", runLabel: "CR_214ST1_RUN" }
          )}`}
          text="M"
          label="CR_214ST1_RUN"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-218",
          label: "214MS2",
        }}
      />

      <div className="position-absolute single-text-219">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "Bypass",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "214BF2",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CR_214HP2_LT",
          useClass: "greenTxt position-absolute single-text-220",
          unit: "m",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-221">
        <BlackContainer
          data={{
            label: "CR_214BF9_PT1",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_214BF9_DPT",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
    </div>
  );
};

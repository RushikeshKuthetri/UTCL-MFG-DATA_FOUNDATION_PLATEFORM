import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  SingleText,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";

import * as tagsData from "../../../../../data/Kotputli/Crusher/kotputliCrusherTextcolumn";
import {
  useColorStatus,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const CrusherandMaterialHandlingkotputli = () => {
  return (
    <div className="cmh-kotputli w-100 h-100 position-relative">
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="yellowline-Vr upArrow position-absolute line-1"></div>
      <div className="yellowline-Vr upArrow position-absolute line-2"></div>
      <div className="yellowline-Vr upArrow position-absolute line-3"></div>
      <div className="yellowline-Vr upArrow position-absolute line-4"></div>
      <div className="yellowline-Vr upArrow position-absolute line-5"></div>
      <div className="yellowline-Vr upArrow position-absolute line-6"></div>
      <div className="yellowline-Vr upArrow position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow position-absolute line-8"></div>
      <div className="yellowline-Vr upArrow position-absolute line-9"></div>
      <div className="yellowline-Vr upArrow position-absolute line-10"></div>
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
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Vr downArrow position-absolute line-36"></div>
      <div className="yellowline-Vr downArrow position-absolute line-37"></div>
      <div className="yellowline-Vr downArrow position-absolute line-38"></div>
      <div className="yellowline-Vr downArrow position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow position-absolute line-41"></div>
      <div className="yellowline-Vr downArrow position-absolute line-42"></div>
      <div className="yellowline-Vr downArrow position-absolute line-43"></div>
      <div className="yellowline-Vr downArrow position-absolute line-44"></div>
      <div className="yellowline-Vr downArrow position-absolute line-45"></div>
      <div className="yellowline-Vr downArrow position-absolute line-46"></div>
      <div className="yellowline-Vr downArrow position-absolute line-47"></div>
      <div className="yellowline-Vr downArrow position-absolute line-48"></div>
      <div className="yellowline-Vr downArrow position-absolute line-49"></div>
      <div className="yellowline-Vr downArrow position-absolute line-50"></div>
      <div className="yellowline-Vr downArrow position-absolute line-51"></div>
      <div className="yellowline-Vr downArrow position-absolute line-52"></div>
      <div className="yellowline-Vr downArrow position-absolute line-53"></div>
      <div className="yellowline-Vr downArrow position-absolute line-54"></div>
      <div className="yellowline-Vr downArrow position-absolute line-55"></div>
      <div className="yellowline-Hr leftArrow position-absolute line-56"></div>
      <div className="yellowline-Hr position-absolute line-57"></div>
      <div className="yellowline-Hr position-absolute line-58"></div>
      <div className="yellowline-Hr position-absolute line-59"></div>
      <div className="yellowline-Hr position-absolute line-60"></div>
      <div className="yellowline-Vr position-absolute line-61"></div>
      <div className="yellowline-Vr position-absolute line-62"></div>
      <div className="yellowline-Hr position-absolute line-63"></div>
      <div className="yellowline-Vr downArrow position-absolute line-64"></div>
      <div className="yellowline-Vr downArrow position-absolute line-65"></div>
      <div className="yellowline-Vr downArrow position-absolute line-66"></div>
      <div className="yellowline-Vr upArrow position-absolute line-67"></div>
      <div className="yellowline-Hr position-absolute line-68"></div>
      <div className="yellowline-Vr downArrow position-absolute line-69"></div>
      <div className="yellowline-Vr upArrow position-absolute line-70"></div>
      <div className="yellowline-Vr upArrow position-absolute line-71"></div>
      <div className="yellowline-Vr upArrow position-absolute line-72"></div>

      <div className="CGRnBox position-absolute single-text-127"> </div>
      <div className="pipeVr position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "212CR1P",
          }}
        />
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212CR1P_RUN", healthyLabel: "CR_212CR1P_PH" }
            )} mr-5 p-3`}
            text="M"
            label="CR_212CR1P_RUN"
          />
          <div className={`dot grey-color p-3`}></div>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <div className={`dot mr-5 grey-color p-3`}></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212CR1S_RUN", healthyLabel: "CR_212CR1S_PH" }
            )} p-3`}
            text="M"
            label="CR_212CR1S_RUN"
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-2"
        text={{ useClass: "text-dark bg-light ml-auto", label: "212CR1S" }}
      />
      <div className="d-flex position-absolute single-text-3">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CR_212BF2_PURGE_ON"
            )}`}
            label="CR_212BF2_PURGE_ON"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212FN2_RUN", healthyLabel: "CR_212FN2_PH" }
            )} p-3`}
            text="M"
            label="CR_212FN2_RUN"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-4">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CR_212BF3_PURGE_ON"
            )}`}
            label="CR_212BF3_PURGE_ON"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div className="yellowline-Vr upArrow position-relative"></div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "CR_212FN3_PH", runLabel: "CR_212FN3_RUN" }
            )} p-3`}
            label="CR_212FN3_RUN"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-5">
        <div className="squareplustri">
          <div className="squareplustri d-flex align-items-center justify-content-center">
            {/* <div className={`square grey-color`}></div> */}
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CR_212BF4_PURGE_ON"
              )}`}
              label="CR_212BF4_PURGE_ON"
            />
          </div>
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212FN4_RUN", healthyLabel: "CR_212FN4_PH" }
            )} p-3`}
            text="M"
            label="CR_212FN4_RUN"
          />
          {/* <div className={`dot grey-color p-3`}>M</div> */}
        </div>
      </div>
      <div className="d-flex position-absolute single-text-6">
        <div className="squareplustri d-flex align-items-center justify-content-center"></div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "CR_212FN7_PH", runLabel: "CR_212FN7_RUN" }
            )} p-3`}
            text="M"
            label="CR_212FN7_RUN"
          />
          {/* <div className={`dot grey-color p-3`}>M</div> */}
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
              { runLabel: "CR_212FN1_RUN", healthyLabel: "CR_212WP1_PH" }
            )} p-3`}
            label="CR_212FN1_RUN"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-8">
        <div className="squareplustri d-flex align-items-center justify-content-center"></div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212FN9_RUN", healthyLabel: "CR_212FN9_PH" }
            )} p-3`}
            label="CR_212FN9_RUN"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-9">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "CR_212BF8_TMR_PH",
                runLabel: "CR_212BF8_TMR_RUN",
              }
            )}`}
            label="CR_212BF8_TMR_RUN"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div className="yellowline-Vr upArrow position-relative"></div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212FNA_RUN", healthyLabel: "CR_212FNA_PH" }
            )} p-3`}
            label="CR_212FNA_RUN"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-10">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "CR_212BF9_TMR_PH",
                runLabel: "CR_212BF9_TMR_RUN",
              }
            )}`}
            label="CR_212BF9_TMR_RUN"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div className={`line-circle grey-color`}> </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-11">
        <div className="squareplustri"></div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div className={`dot grey-color p-3`}></div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-12">
        <div className="squareplustri"></div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div className={`dot grey-color p-3`}></div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-13">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CR_212BF6_TMR_RUN",
                healthyLabel: "CR_212BF6_TMR_PH",
              }
            )}`}
            label="CR_212BF6_TMR_RUN"
          />
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212FN8_RUN", healthyLabel: "CR_212FN8_PH" }
            )} p-3`}
            text="M"
            label="CR_212FN8_RUN"
          />
        </div>
      </div>
      <div className="img-98 position-absolute single-text-14"></div>
      <div className="roller-jcb position-absolute single-text-15"></div>
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
        text={{ useClass: "text-dark ml-4", label: "212SX1" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
          secondCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-20">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "212AF1" }}
          secondCircle={{
            secondCircleClass: `dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212AF1_RUN", healthyLabel: "CR_212AF1_PH" }
            )}`,
            secondCircleLabel: "CR_212AF1_RUN",
          }}
        />
      </div>

      <div className="position-absolute single-text-21">
        <div className="d-flex justify-content-between mb-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_212BC2_DE_MG")}`}
            label="CR_212BC2_DE_MG"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_212BC2_NDE_MG")}`}
            label="CR_212BC2_NDE_MG"
          />
        </div>
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens({
              healthyLabel: "CR_212BC2_PH",
              runLabel: "CR_212BC2_RUN",
            })} digital-tag`,
            firstCircleText: "M",
            firstCircleLabel: "CR_212BC2_RUN",
          }}
          text={{ useClass: "text-dark", label: "212BC2" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <MotorCircleDigitalTag
          className={`dot digital-tag mb-1 ${useColorStatus(
            "CR_212BC1_NDE_MG"
          )}`}
          label="CR_212BC1_NDE_MG"
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "212BC1" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <div className="d-flex justify-content-between mb-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_212BC5_NDE_MG")}`}
            label="CR_212BC5_NDE_MG"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_212BC5_DE_MG")}`}
            label="CR_212BC5_DE_MG"
          />
        </div>
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "212BC5" }}
          secondCircle={{
            secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212BC5_RUN", healthyLabel: "CR_212BC5_PH" }
            )} digital-tag`,
            secondCircleText: "M",
            secondCircleLabel: "CR_212BC5_RUN",
          }}
        />
      </div>

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-24"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "212BC4" }}
        secondCircle={{
          secondCircleClass: `dot ${useColorStatus("CR_212BC4_NDE_MG")}`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212BC4_NDE_MG",
        }}
      />

      <div className="position-absolute single-text-25">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "212BC6" }}
          secondCircle={{
            secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212BC6_RUN", healthyLabel: "CR_212BC6_PH" }
            )}  digital-tag`,
            secondCircleText: "M",
            secondCircleLabel: "CR_212BC6_RUN",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_212BC6_II",
            useClass: "greenTxt mt-1 ml-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <div className="d-flex justify-content-between mb-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_212BC4_NDE_MG")}`}
            label="CR_212BC4_NDE_MG"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_212BC3_NDE_MG")}`}
            label="CR_212BC3_NDE_MG"
          />
        </div>
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "CR_212BC3_RUN",
              healthyLabel: "CR_212BC3_PH",
            })} digital-tag`,
            firstCircleText: "M",
            firstCircleLabel: "CR_212BC3_RUN",
          }}
          text={{ useClass: "text-dark", label: "212BC3" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ml-auto mt-1 ${useColorStatus(
            "CR_212BC3_VGT"
          )}`}
          label="CR_212BC3_VGT"
        />
      </div>

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-27"
        text={{ useClass: "text-dark ml-4", label: "212SC1" }}
        secondCircle={{
          secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens({
            runLabel: "CR_212SC1_RUN",
            healthyLabel: "CR_212SC1_PH",
          })} digital-tag`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212SC1_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-28"
        firstCircle={{
          firstCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens({
            runLabel: "CR_212SC2_RUN",
            healthyLabel: "CR_212SC2_PH",
          })} digital-tag`,
          firstCircleText: "M",
          firstCircleLabel: "CR_212SC2_RUN",
        }}
        text={{ useClass: "text-dark mr-4", label: "212SC2" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-29"
        firstCircle={{
          firstCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens({
            runLabel: "CR_212SC3_RUN",
            healthyLabel: "CR_212SC3_PH",
          })} digital-tag`,
          firstCircleText: "M",
          firstCircleLabel: "CR_212SC3_RUN",
        }}
        text={{ useClass: "text-dark mr-4", label: "212SC3" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-30"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "212BC6A" }}
        secondCircle={{
          secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens({
            healthyLabel: "CR_212BC6A_PH",
            runLabel: "CR_212BC6A_RUN",
          })} digital-tag`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212BC6A_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-31"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "211BC4" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <div className="position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "CR_212BC7_II",
            useClass: "greenTxt mb-1 ml-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark", label: "212BC7" }}
          secondCircle={{
            secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "CR_212BC7_PH", runLabel: "CR_212BC7_RUN" }
            )} digital-tag`,
            secondCircleText: "M",
            secondCircleLabel: "CR_212BC7_RUN",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <div className="d-flex justify-content-between mb-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_212BC7A_NDE_MG")}`}
            label="CR_212BC7A_NDE_MG"
          />
          <PipeWithCircles
            parentDivClass="hpipecircle mt-1"
            firstCircle={{ firstCircleClass: "dot grey-color" }}
            text={{ useClass: "text-dark", label: "212BC7A" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_212BC7A_RUN", healthyLabel: "CR_212BC7A_PH" }
              )}`,
              secondCircleText: "M",
              secondCircleLabel: "CR_212BC7A_RUN",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("CR_212BC7A_DE_MG")}`}
            label="CR_212BC7A_DE_MG"
          />
        </div>

        <BlackContainer
          data={{
            label: "CR_212HP2_LT",
            useClass: "greenTxt mt-1 mx-auto",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-34"
        text={{ useClass: "text-dark ml-4", label: "212SX2" }}
        secondCircle={{
          secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens(
            "CR_212SX2_ZSS1"
          )} digital-tag`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212SX2_ZSS1_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-35"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens({
            healthyLabel: "CR_212AF2_PH",
            runLabel: "CR_212AF2_RUN",
          })} digital-tag`,
          secondCircleLabel: "CR_212AF2_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-36"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "212BC8" }}
        secondCircle={{
          secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens({
            runLabel: "CR_212BC8_RUN",
            healthyLabel: "CR_212BC8_PH",
          })} digital-tag`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212BC8_RUN",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-37"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "212BC9" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_212BC9_RUN", healthyLabel: "CR_212BC9_PH" }
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212BC9_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-38"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "212BCA" }}
        secondCircle={{
          secondCircleClass: `dot ${useMotorTagsColorStatusForNewPlantScreens({
            runLabel: "CR_212BCA_RUN",
            healthyLabel: "CR_212BCA_PH",
          })}`,
          secondCircleText: "M",
          secondCircleLabel: "CR_212BCA_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-39"
        firstCircle={{
          firstCircleClass: "dot grey-color",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "312BC1" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-40"
        firstCircle={{
          firstCircleClass: "dot grey-color",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "312BC2" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-41"
        firstCircle={{
          firstCircleClass: "dot grey-color",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "312BC3" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <div className="gray-green-red-img gray-img position-absolute single-text-42"></div>
      <div className="gray-green-red-img gray-img position-absolute single-text-43"></div>
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
            className={`dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212WX1_RUN", healthyLabel: "CR_212WX1_PHs" }
            )}`}
            label="CR_212WX1_RUN"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-46">
        <div className="containerImage"></div>
        <div className="d-flex justify-content-between pipeVr w-100">
          <BlackContainer
            data={{
              label: "CR_212BF1_DPT1",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "CR_212BF1_PURGE_ON"
            )}`}
            label="CR_212BF1_PURGE_ON"
          />

          <TextColumn list={tagsData.kotputliCrusherTextcolumn3} />
        </div>
        <div className="containerImage"></div>
      </div>
      <div className="d-flex justify-content-center align-items-center containerImage position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212TK1",
          }}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center containerImage position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212HP2",
          }}
        />
      </div>
      <div className=" containerImage position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "SURGE HOPPER Line-1",
          }}
        />
      </div>
      <div className="position-absolute single-text-50">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mb-2",
            label: "212LD2",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                openLabel: "CR_212LD2_EOLS",
                closeLabel: "CR_212LD2_EX_CLS",
                healthyLabel: "CR_212LD2_PH",
              }
            )}`}
            label="CR_212LD2_EOLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-51">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "NA"
          )}`}
          label="NA"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "212RA3",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-52">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "212RA4",
          }}
        />
        <div className={`circle-img c-grey-img-2`}></div>
      </div>
      <div className="d-flex position-absolute single-text-53">
        <div className={`circle-img c-grey-img-2`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "212RA5",
          }}
        />
      </div>
      <div className="position-absolute single-text-54">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4",
            label: "212RA1",
          }}
        />
        <div className={`circle-img ml-auto mt-2 c-grey-img-2`}></div>
      </div>
      <div className="position-absolute single-text-55">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto",
            label: "212RA1A",
          }}
        />
        <div className={`circle-img mt-2 c-grey-img-2`}></div>
      </div>
      <div className="position-absolute single-text-56">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4",
            label: "212RA2A",
          }}
        />
        <div className={`circle-img ml-auto mt-1 c-grey-img-2`}></div>
      </div>
      <div className="position-absolute single-text-57">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto",
            label: "212RA2",
          }}
        />
        <div className={`circle-img mt-1 c-grey-img-2`}></div>
      </div>
      <div className="d-flex position-absolute single-text-58">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "212RA6",
          }}
        />
        <div className={`circle-img c-grey-img-2`}></div>
      </div>
      <div className="d-flex position-absolute single-text-59">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "212RA7",
          }}
        />
        <div className={`circle-img c-grey-img-2`}></div>
      </div>
      <div className="d-flex position-absolute single-text-60">
        <div className={`circle-img c-grey-img-2`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "212RA8",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-61">
        <div className={`circle-img c-grey-img-2`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "212RA9",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-62">
        <div className={`circle-img c-grey-img-2`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "212RAA",
          }}
        />
      </div>
      {/* <div className="d-flex position-absolute single-text-63">
        <div className={`dot grey-color`}>M</div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "312RA1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-64">
        <div className={`dot grey-color`}>M</div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "312RA2",
          }}
        />
      </div> */}
      <div className="position-absolute single-text-65">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              healthyLabel: "CR_212CR1P_M01_PH",
              runLabel: "CR_212CR1P_M01_RUN",
            }
          )}`}
          label="CR_212CR1P_M01_RUN"
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
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              healthyLabel: "CR_212CR1S_M02_PH",
              runLabel: "CR_212CR1S_M02_RUN",
            }
          )}`}
          label="CR_212CR1S_M02_RUN"
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
          {/* <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212WP1_RUN", healthyLabel: "CR_212WP1_PH" }
            )} p-3`}
            text="M"
            label="CR_212WP1_RUN"
          /> */}
          <div className={`dot p-3 grey-color`}>M</div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212WP1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-68">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212WP2",
          }}
        />
        <div className="connector-icon">
          {/* <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212WP2_RUN", healthyLabel: "CR_212WP2_PH" }
            )} p-3`}
            text="M"
            label="CR_212WP2_RUN"
          /> */}
          <div className={`dot p-3 grey-color`}>M</div>
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
          label: "212BC2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-71",
          label: "TO 212BC3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-72",
          label: "212BC4",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-73",
          label: "TO 212BC2",
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
          label: "212FN2",
        }}
      />
      <div className="position-absolute single-text-76">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "212FN3",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus("CR_212FN3_ES")}`}
          label="CR_212FN3_ES"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus("CR_212FN3_PH")}`}
          label="CR_212FN3_PH"
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-77",
          label: "212FN4",
        }}
      />
      <div className="position-absolute single-text-78">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "212FN7",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "CR_212BF5_TMR_PH"
          )}`}
          label="CR_212BF5_TMR_PH"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "CR_212BF5_TMR_RUN"
          )}`}
          label="CR_212BF5_TMR_RUN"
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-79",
          label: "212FN1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-80",
          label: "212FN9",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-81",
          label: "212FNA",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-82",
          label: "212FNB",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-83",
          label: "312FN1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-84",
          label: "312FN2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-85",
          label: "TO BELT CONV. 312BC2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-86",
          label: "TO BELT CONV. 312BC3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-87",
          label: "TO RAWMILL HOPPER",
        }}
      />
      <div className="position-absolute single-text-88">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Bag filter at Head End of Reclaimer Belt",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mt-1 mx-auto",
            label: "312BF1",
          }}
        />
      </div>
      <div className="position-absolute single-text-89">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Bag filter at Head End of Reclaimer Belt",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mt-1 mx-auto",
            label: "312BF2",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-secondary position-absolute single-text-90",
          label: "SHALE POINT PILE",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-secondary position-absolute single-text-91",
          label: "LIME STONE STOCKPILE CAP_47000 T",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-secondary position-absolute single-text-92",
          label: "LIME STONE STOCKPILE CAP_47000 T",
        }}
      />
      <SingleText
        useClass="containerImage position-absolute single-text-93"
        yellowTextUp="212HP1"
        textClass="text-dark mx-auto"
        data={{
          blackTextLabel: "CR_212HP1_LT",
          blackTextClass: "greenTxt mt-2 mx-auto",
          unit: "m",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-94",
          label: "212BF2",
        }}
      />
      <div className="d-flex position-absolute single-text-96">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "212SN1",
          }}
        />
        {/* <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_212SN1_RUN", healthyLabel: "CR_212SN1_PH" }
          )}`}
          text="M"
          label="CR_212SN1_RUN"
        /> */}
        <div className={`dot grey-color`}>M</div>
      </div>
      <div className="d-flex position-absolute single-text-97">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "212SN2",
          }}
        />
        {/* <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_212SN2_RUN", healthyLabel: "CR_212SN2_PH" }
          )}`}
          text="M"
          label="CR_212SN2_RUN"
        /> */}
        <div className={`dot grey-color`}>M</div>
      </div>
      <div className="position-absolute single-text-98">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "212ST1",
          }}
        />
        <div className={`dot mx-auto grey-color`}>M</div>
      </div>

      <TextColumn
        useClass="position-absolute single-text-99"
        list={tagsData.kotputliCrusherTextcolumn12}
      />
      <TextColumn
        useClass="position-absolute single-text-100"
        list={tagsData.kotputliCrusherTextcolumn1}
      />
      <TextColumn
        useClass="position-absolute single-text-101"
        list={tagsData.kotputliCrusherTextcolumn11}
      />
      <TextColumn
        useClass="position-absolute single-text-102"
        list={tagsData.kotputliCrusherTextcolumn15}
      />
      <SingleText
        useClass="position-absolute single-text-103"
        yellowTextUp="212WP1_PT"
        textClass="text-dark"
        data={{
          blackTextLabel: "CR_212WP1_PT",
          blackTextClass: "greenTxt mt-1",
          unit: "bar",
        }}
      />
      <SingleText
        useClass="position-absolute single-text-104"
        yellowText="212BW1"
        textClass="text-dark"
        data={{
          blackTextLabel: "CR_212BW1_TPH",
          blackTextClass: "greenTxt mb-1",
          unit: "TPH",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-105"
        list={tagsData.kotputliCrusherTextcolumn5}
      />
      <TextColumn
        useClass="position-absolute single-text-106"
        list={tagsData.kotputliCrusherTextcolumn6}
      />
      <TextColumn
        useClass="position-absolute single-text-107"
        list={tagsData.kotputliCrusherTextcolumn2}
      />
      <div className="position-absolute single-text-108">
        <div className={`dot grey-color`}>E</div>
        <BlackContainer
          data={{
            label: "CR_212BW2_TPH",
            useClass: "greenTxt mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "212BW2",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-109">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4",
            label: "212DG2",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "CR_212GD2_PH",
                closeLabel: "CR_212GD2_CLS",
                openLabel: "CR_212GD2_OLS",
              }
            )}`}
            label="CR_212GD2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-110">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "CR_212GD1_PH",
                closeLabel: "CR_212GD1_CLS",
                openLabel: "CR_212GD1_OLS",
              }
            )}`}
            label="CR_212GD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "212DG1",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-111"
        list={tagsData.kotputliCrusherTextcolumn9}
      />
      <div className="position-absolute single-text-112">
        <BlackContainer
          data={{
            label: "CR_212AF2_SI",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_212AF2_SP",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_212AF2_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-danger p-1 mt-1",
            label: "212AF2",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-113"
        list={tagsData.kotputliCrusherTextcolumn10}
      />
      <TextColumn
        useClass="position-absolute single-text-114"
        list={tagsData.kotputliCrusherTextcolumn13}
      />
      <div className="position-absolute single-text-115">
        <div className={`dot grey-color`}>E</div>
        <BlackContainer
          data={{
            label: "CR_212BW3_TPH",
            useClass: "greenTxt mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "212BW3",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-116",
          label: "212BF2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-117",
          label: "212BF4",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-118",
          label: "212BF3",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-119"
        list={tagsData.kotputliCrusherTextcolumn8}
        text="212FN8"
        textClass="text-dark"
      />
      <TextColumn
        useClass="position-absolute single-text-120"
        list={tagsData.kotputliCrusherTextcolumn4}
      />
      <TextColumn
        useClass="position-absolute single-text-121"
        list={tagsData.kotputliCrusherTextcolumn7}
      />

      <SingleText
        useClass="position-absolute single-text-122"
        yellowTextUp="212TK1_LT"
        textClass="text-dark"
        data={{
          blackTextLabel: "CR_212WP1_LT",
          blackTextClass: "greenTxt mt-1",
          unit: "%",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-123"
        list={tagsData.kotputliCrusherTextcolumn14}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-124",
          label: "WATER TANK",
        }}
      />
      <div className="boxContainer position-absolute single-text-125">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mb-1",
            label: "OLS_WX1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_212OLS_M1_RUN", healthyLabel: "CR_212OLS_M1_PH" }
          )} ml-auto p-3`}
          text="M"
          label="CR_212OLS_M1_RUN"
        />
        <div className="mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212OLS_M3_RUN", healthyLabel: "CR_212OLS_M3_PH" }
            )} p-3`}
            text="M"
            label="CR_212OLS_M3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "212OLS M3",
            }}
          />
        </div>

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_212OLS_M2_RUN", healthyLabel: "CR_212OLS_M2_PH" }
          )} ml-auto mt-2 p-3`}
          text="M"
          label="CR_212OLS_M2_RUN"
        />
      </div>
      <div className=" boxContainer position-absolute single-text-126">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mb-1",
            label: "CLS1_WX1",
          }}
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CR_212CLS1_M1_RUN",
                healthyLabel: "CR_212CLS1_M1_PH",
              }
            )} p-3`}
            text="M"
            label="CR_212CLS1_M1_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot ml-5 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "CR_212CLS1_M2_PH",
                runLabel: "CR_212CLS1_M2_RUN",
              }
            )} p-3`}
            text="M"
            label="CR_212CLS1_M2_RUN"
          />
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-128">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mb-1",
            label: "CLS2_CR",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "CR_212CLS2_M1_PH", runLabel: "CR_212CLS2_M1_RUN" }
          )} p-3`}
          text="M"
          label="CR_212CLS2_M1_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot mt-5 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "CR_212CLS2_M2_PH", runLabel: "CR_212CLS2_M2_RUN" }
          )} p-3`}
          text="M"
          label="CR_212CLS2_M2_RUN"
        />
      </div>
      <div className="boxContainer px-4 position-absolute single-text-129">
        {/* <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_212HPP1_RUN", healthyLabel: "CR_212HPP1_PH" }
          )} p-3`}
          text="M"
          label="CR_212HPP1_RUN"
        /> */}
        <div className={`dot p-3 grey-color`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Hydraulic Power pack",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212HPP",
          }}
        />
      </div>
      <div className="position-absolute single-text-130">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-danger p-1",
            label: "212MS1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_212BC4_RUN", healthyLabel: "CR_212BC4_PH" }
          )} p-3 mt-2`}
          text="M"
          label="CR_212BC4_RUN"
        />
      </div>
      <div className="d-flex position-absolute single-text-131">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PERMANENT MAGNET",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "312BC1",
          }}
        />
      </div>
      <div className="position-absolute single-text-132">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212WP1_DPS",
          }}
        />
        <div className="d-flex justify-content-end">
          <div>
            <MotorCircleDigitalTag
              className={`dot mt-1 digital-tag ${useColorStatus(
                "CR_212WP1_DPS"
              )}`}
              label="CR_212WP1_DPS"
            />
            <MotorCircleDigitalTag
              className={`dot mt-1 digital-tag ${useColorStatus(
                "CR_212BF2_DPT"
              )}`}
              label="CR_212BF2_DPT"
            />
            <MotorCircleDigitalTag
              className={`dot mt-1 digital-tag ${useColorStatus(
                "CR_212WP1_ZS2"
              )}`}
              label="CR_212WP1_ZS2"
            />
            <MotorCircleDigitalTag
              className={`dot mt-1 digital-tag ${useColorStatus(
                "CR_212WP1_ZS3"
              )}`}
              label="CR_212WP1_ZS3"
            />
          </div>
          <div className="ml-2">
            <div className={`dot mt-1 grey-color`}>L</div>
            <div className={`dot mt-1 grey-color`}>L</div>
            <div className={`dot mt-1 grey-color`}>L</div>
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-133">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CR_212BF6_TMR_PH")}`}
          label="CR_212BF6_TMR_PH"
        />
        <MotorCircleDigitalTag
          className={`dot ml-1 digital-tag ${useColorStatus(
            "CR_212BF6_TMR_RUN"
          )}`}
          label="CR_212BF6_TMR_RUN"
        />
      </div>
      <div className="position-absolute single-text-134">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CR_212FN9_ES")}`}
          label="CR_212FN9_ES"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus("CR_212FN9_PH")}`}
          label="CR_212FN9_PH"
        />
        <div className={`dot mt-1 grey-color`}></div>
      </div>
      <div className="position-absolute single-text-135">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CR_212BF8_TMR_PH")}`}
          label="CR_212BF8_TMR_PH"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "CR_212BF8_TMR_RUN"
          )}`}
          label="CR_212BF8_TMR_RUN"
        />
      </div>
      <div className="position-absolute single-text-136">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CR_212BF9_TMR_PH")}`}
          label="CR_212BF9_TMR_PH"
        />
        <MotorCircleDigitalTag
          className={`dot mt-1 digital-tag ${useColorStatus(
            "CR_212BF9_TMR_RUN"
          )}`}
          label="CR_212BF9_TMR_RUN"
        />
      </div>
      <div className="boxContainer position-absolute single-text-137">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mb-1",
            label: "CLS3_SX2",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "CR_212CLS3_M1_PH", runLabel: "CR_212CLS3_M1_RUN" }
          )} p-3`}
          text="M"
          label="CR_212CLS3_M1_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-5 ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "CR_212CLS3_M2_PH", runLabel: "CR_212CLS3_M2_RUN" }
          )} p-3`}
          text="M"
          label="CR_212CLS3_M2_RUN"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-danger p-1 position-absolute single-text-138",
          label: "212WX1",
        }}
      />
      <MotorCircleDigitalTag
        className={`position-absolute single-text-139 dot digital-tag ${useColorStatus(
          "CR_212AF1_ZSS"
        )}`}
        label="CR_212AF1_ZSS"
      />
      <MotorCircleDigitalTag
        className={`position-absolute single-text-140 dot digital-tag ${useColorStatus(
          "CR_212SX1_ZSS"
        )}`}
        label="CR_212SX1_ZSS"
      />
      <div className={`position-absolute single-text-141 dot grey-color`}></div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-142",
          label: "212BF7",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-143",
          label: "212BF8",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-144",
          label: "Water Spray System",
        }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-147",
          label: "212BF6",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-148",
          label: "212BF9",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-149",
          label: "212BF5",
        }}
      />
      <div className="d-flex position-absolute single-text-150">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CR_212BC4_NDE_MG")}`}
          label="CR_212BC4_NDE_MG"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CR_212BC5_DE_MG")}`}
          label="CR_212BC5_DE_MG"
        />
      </div>
    </div>
  );
};

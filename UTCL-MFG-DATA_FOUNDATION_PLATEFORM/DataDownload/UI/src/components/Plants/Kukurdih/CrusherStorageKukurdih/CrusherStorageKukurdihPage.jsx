import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  SingleText,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../index";

import * as tagsData from "../../../../data/Kukurdih/Crusher/kukurdihCrusherTextcolumn";
import {
  useMotorTagsColorStatusForNewPlantScreens,
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const CrusherStorageKukurdihPage = () => {
  return (
    <div className="cmh-kotputli cs-kukurdih w-100 h-100 position-relative">
      <div className="yellowline-Vr upArrow position-absolute line-1"></div>
      <div className="yellowline-Vr upArrow position-absolute line-2"></div>
      <div className="yellowline-Vr upArrow position-absolute line-4"></div>
      <div className="yellowline-Vr upArrow position-absolute line-5"></div>
      <div className="yellowline-Vr upArrow position-absolute line-6"></div>
      <div className="yellowline-Vr upArrow position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow position-absolute line-8"></div>
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
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Vr downArrow position-absolute line-38"></div>
      <div className="yellowline-Vr downArrow position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow position-absolute line-45"></div>
      <div className="yellowline-Vr downArrow position-absolute line-46"></div>
      <div className="yellowline-Vr downArrow position-absolute line-47"></div>
      <div className="yellowline-Vr downArrow position-absolute line-48"></div>
      <div className="yellowline-Vr downArrow position-absolute line-49"></div>
      <div className="yellowline-Vr downArrow position-absolute line-50"></div>
      <div className="yellowline-Vr downArrow position-absolute line-55"></div>
      <div className="yellowline-Hr position-absolute line-57"></div>
      <div className="yellowline-Hr position-absolute line-58"></div>
      <div className="yellowline-Hr position-absolute line-59"></div>
      <div className="yellowline-Vr position-absolute line-61"></div>
      <div className="yellowline-Hr position-absolute line-63"></div>
      <div className="yellowline-Vr upArrow position-absolute line-67"></div>
      <div className="yellowline-Hr position-absolute line-68"></div>
      <div className="yellowline-Vr upArrow position-absolute line-70"></div>
      <div className="yellowline-Vr upArrow position-absolute line-71"></div>
      <div className="yellowline-Vr upArrow position-absolute line-72"></div>
      <div className="yellowline-Vr downArrow position-absolute line-73"></div>
      <div className="yellowline-Vr upArrow position-absolute line-74"></div>
      <div className="yellowline-Vr downArrow position-absolute line-75"></div>
      <div className="yellowline-Vr downArrow position-absolute line-76"></div>
      <div className="yellowline-Vr upArrow position-absolute line-77"></div>
      <div className="yellowline-Vr upArrow position-absolute line-78"></div>
      <div className="yellowline-Vr upArrow position-absolute line-79"></div>
      <div className="yellowline-Vr upArrow position-absolute line-80"></div>
      <div className="yellowline-Vr upArrow position-absolute line-81"></div>
      <div className="yellowline-Vr upArrow position-absolute line-82"></div>
      <div className="yellowline-Hr  position-absolute line-83"></div>
      <div className="yellowline-Vr downArrow position-absolute line-84"></div>
      <div className="yellowline-Vr downArrow position-absolute line-85"></div>
      <div className="yellowline-Vr downArrow position-absolute line-86"></div>
      <div className="yellowline-Vr upArrow position-absolute line-88"></div>

      <div className="box-1 position-absolute single-text-127"> </div>
      <div className="pipeVr position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "211CR1P",
          }}
        />
        <div className="d-flex ml-5">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "M02",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CR_211CR1S_M02_RUN",
                  healthyLabel: "CR_211CR1S_M02_PH",
                }
              )} ml-1 mr-3 p-3`}
              text="M"
              label="CR_211CR1S_M02_RUN"
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "M01",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CR_211CR1P_M01_RUN",
                  healthyLabel: "CR_211CR1P_M01_PH",
                }
              )} ml-1 p-3`}
              text="M"
              label="CR_211CR1P_M01_RUN"
            />
          </div>
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_211CR1P_RUN", healthyLabel: "CR_211CR1P_PH" }
            )} mr-5 p-3`}
            text="M"
            label="CR_211CR1P_RUN"
          />
          {/* <div className={`dot mr-5 grey-color p-3`}>M</div> */}
          <div className={`dot grey-color p-3`}></div>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <div className={`dot mr-5 grey-color p-3`}></div>
          {/* <div className={`dot grey-color p-3`}>M</div> */}
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_211CR1S_RUN", healthyLabel: "CR_211CR1S_PH" }
            )} p-3`}
            text="M"
            label="CR_211CR1S_RUN"
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-2"
        text={{ useClass: "text-dark bg-light ml-auto", label: "211CR1S" }}
      />
      <div className="d-flex position-absolute single-text-3">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <div>
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CR_211BF2_DPT"
              )}`}
              label="CR_211BF2_DPT"
            />
          </div>
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot p-3 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_211FN2_RUN", healthyLabel: "CR_211FN2_PH" }
            )}`}
            text="M"
            label="CR_211FN2_RUN"
          />
          {/* <div className={`dot grey-color p-3`}>M</div> */}
        </div>
      </div>
      <div className="d-flex position-absolute single-text-4">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <div>
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CR_211BF3_DPT"
              )}`}
              label="CR_211BF3_DPT"
            />
          </div>
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag motor-dot p-3 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211FN3_RUN", healthyLabel: "CR_211FN3_PH" }
              )}`}
              label="CR_211FN3_RUN"
            />
          </div>
        </div>
      </div>

      <div className="d-flex position-absolute single-text-6">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <div>
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CR_211BF4_DPT"
              )}`}
              label="CR_211BF4_DPT"
            />
          </div>
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_211FN7_RUN", healthyLabel: "CR_211FN7_PH" }
            )} p-3`}
            text="M"
            label="CR_211FN7_RUN"
          />
          {/* <div className={`dot grey-color p-3`}>M</div> */}
        </div>
      </div>
      <div className="d-flex position-absolute single-text-7">
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211FN1_RUN", healthyLabel: "CR_211FN1_PH" }
              )} p-3`}
              label="CR_211FN1_RUN"
            />
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-8">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <div>
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CR_211BF6_DPT"
              )}`}
              label="CR_211BF6_DPT"
            />
          </div>
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211FN9_RUN", healthyLabel: "CR_211FN9_PH" }
              )} p-3`}
              label="CR_211FN9_RUN"
            />
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-9">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <div>
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CR_211BF7_DPT"
              )}`}
              label="CR_211BF7_DPT"
            />
          </div>
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211FNA_RUN", healthyLabel: "CR_211FNA_PH" }
              )} p-3`}
              label="CR_211FNA_RUN"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-10">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <div>
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CR_211BF9_DPT"
              )}`}
              label="CR_211BF9_DPT"
            />
          </div>
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211FNC_RUN", healthyLabel: "CR_211FNC_PH" }
              )} p-3`}
              text="M"
              label="CR_211FNC_RUN"
            />{" "}
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-13">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <div>
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "CR_211BF5_DPT"
              )}`}
              label="CR_211BF5_DPT"
            />
          </div>
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_211FN8_RUN", healthyLabel: "CR_211FN8_PH" }
            )} p-3`}
            text="M"
            label="CR_211FN8_RUN"
          />
          {/* <div className={`dot grey-color p-3`}>M</div> */}
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
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "SV2",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CR_211WP1_SV2", closeLabel: "CR_211WP1_SV2" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CR_211WP1_SV2", closeLabel: "CR_211WP1_SV2" }
          )}`}
          label="CR_211WP1_SV2"
        />
      </div>
      <div className="position-absolute single-text-18">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CR_211WP1_SV1", closeLabel: "CR_211WP1_SV1" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "CR_211WP1_SV1", closeLabel: "CR_211WP1_SV1" }
          )}`}
          label="CR_211WP1_SV1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "SV1",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          text={{ useClass: "text-dark ml-4" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_211SX1_RUN", healthyLabel: "CR_211SX1_PH" }
            )}`,
            secondCircleText: "M",
            secondCircleLabel: "CR_211SX1_RUN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2  ml-auto",
            label: "211SX1",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_211SX1_Simo_Stx",
            useClass: "greenTxt mt-1 mr-3 ml-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-20"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_211AF1_RUN", healthyLabel: "CR_211AF1_PH" }
          )}`,
          secondCircleLabel: "CR_211AF1_RUN",
        }}
      />
      <div className="position-absolute single-text-21">
        <div className="d-flex justify-content-between mb-1">
          <div>
            <MotorCircleDigitalTag
              className={`dot mr-2 digital-tag ${useColorStatus(
                "CR_211BC2_NDE_MG"
              )}`}
              text="P"
              label="CR_211BC2_NDE_MG"
            />
          </div>

          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: "dot grey-color motor-dot",
              firstCircleText: "",
              firstCircleLabel: "CR_212BC2_RUN",
            }}
            text={{ useClass: "text-dark" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211BC2_RUN", healthyLabel: "CR_211BC2_PH" }
              )}`,
              secondCircleText: "M",
              secondCircleLabel: "CR_211BC2_RUN",
            }}
          />
          <div>
            <MotorCircleDigitalTag
              className={`dot ml-2 digital-tag ${useColorStatus(
                "CR_211BC2_DE_MG"
              )}`}
              text="P"
              label="CR_211BC2_DE_MG"
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`dot ml-2 digital-tag ${useColorStatus(
                "CR_211BC2_VGT"
              )}`}
              text="P"
              label="CR_211BC2_VGT"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mx-auto",
            label: "211BC2",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_211BC2_Simo_Stx",
            useClass: "greenTxt mt-1 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <div className="d-flex justify-content-between mb-1">
          <div className="mr-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "CR_211BC1_NDE_MG"
              )}`}
              text="P"
              label="CR_211BC1_NDE_MG"
            />
          </div>

          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{ firstCircleClass: "dot grey-color" }}
            text={{ useClass: "text-dark" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211BC1_RUN", healthyLabel: "CR_211BC1_PH" }
              )}`,
              secondCircleText: "M",
              secondCircleLabel: "CR_211BC1_RUN",
            }}
          />
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("CR_211BC1_DE_MG")}`}
              text="P"
              label="CR_211BC1_DE_MG"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mx-auto",
            label: "211BC1",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_211BC1_Simo_Stx",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <div className="d-flex justify-content-between mb-1">
          <div>
            <MotorCircleDigitalTag
              className={`dot mr-2 digital-tag ${useColorStatus(
                "CR_211BC5_NDE_MG"
              )}`}
              text="P"
              label="CR_211BC5_NDE_MG"
            />
          </div>

          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{ firstCircleClass: "dot grey-color" }}
            text={{ useClass: "text-dark" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211BC5_RUN", healthyLabel: "CR_211BC5_PH" }
              )}`,
              secondCircleText: "M",
              secondCircleLabel: "CR_211BC5_RUN",
            }}
          />
          <div>
            <MotorCircleDigitalTag
              className={`dot ml-2 digital-tag ${useColorStatus(
                "CR_211BC5_DE_MG"
              )}`}
              text="P"
              label="CR_211BC5_DE_MG"
            />
          </div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-5 mt-2",
              label: "211BC5",
            }}
          />
          <BlackContainer
            data={{
              label: "CR_211BC5_Simo_Stx",
              useClass: "greenTxt mt-2 ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <div className="d-flex justify-content-between mb-1">
          <div>
            <MotorCircleDigitalTag
              className={`dot mr-2 digital-tag ${useColorStatus(
                "CR_211BC4_NDE_MG"
              )}`}
              text="P"
              label="CR_211BC4_NDE_MG"
            />
          </div>

          <PipeWithCircles
            parentDivClass="hpipecircle "
            firstCircle={{ firstCircleClass: "dot grey-color" }}
            text={{ useClass: "text-dark" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211BC4_RUN", healthyLabel: "CR_211BC4_PH" }
              )}`,
              secondCircleText: "M",
              secondCircleLabel: "CR_211BC4_RUN",
            }}
          />
          <div>
            <MotorCircleDigitalTag
              className={`dot ml-2 digital-tag ${useColorStatus(
                "CR_211BC4_DE_MG"
              )}`}
              text="P"
              label="CR_211BC4_DE_MG"
            />
          </div>
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "CR_211BC4_Simo_Stx",
              useClass: "greenTxt mt-2 ml-5",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "211BC4",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-25">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          text={{ useClass: "text-dark" }}
          secondCircle={{
            secondCircleClass: "dot grey-color motor-dot",
            secondCircleText: "",
            secondCircleLabel: "CR_212BC6_RUN",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-5 bg-danger",
              label: "211BC6",
            }}
          />
          <BlackContainer
            data={{
              label: "CR_211BC6_Simo_Stx",
              useClass: "greenTxt mt-2 ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "CR_211BC3_Simo_Stx",
            useClass: "greenTxt  mb-4 ml-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex justify-content-between mb-1">
          <div className="d-flex">
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("CR_211BC3_VGT")}`}
                text="P"
                label="CR_211BC3_VGT"
              />
            </div>
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "CR_211BC3_DE_MG"
                )} ml-2`}
                text="P"
                label="CR_211BC3_DE_MG"
              />
            </div>
          </div>

          {/* <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PP_623VS1_RUN", healthyLabel: "PP_623VS1_PH" }
          )}`}
          text="M"
          label="PP_623VS1_RUN"
        /> */}
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{
              firstCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211BC3_RUN", healthyLabel: "CR_211BC3_PH" }
              )}`,
              firstCircleText: "M",
              firstCircleLabel: "CR_211BC3_RUN",
            }}
            text={{ useClass: "text-dark", label: "211BC3" }}
            secondCircle={{
              secondCircleClass: "dot grey-color",
            }}
          />
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag mt-4 ${useColorStatus(
                "CR_211BC3_NDE_MG"
              )}`}
              text="P"
              label="CR_211BC3_NDE_MG"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "CR_211SC1_Simo_Stx",
            useClass: "greenTxt mb-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "211SC1",
            }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle "
            text={{ useClass: "text-dark ml-4" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211SC1_RUN", healthyLabel: "CR_211SC1_PH" }
              )}`,
              secondCircleText: "M",
              secondCircleLabel: "CR_211SC1_RUN",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28">
        <BlackContainer
          data={{
            label: "CR_211SC2_Simo_Stx",
            useClass: "greenTxt mb-2 ml-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <PipeWithCircles
            parentDivClass="hpipecircle "
            firstCircle={{
              firstCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211SC2_RUN", healthyLabel: "CR_211SC2_PH" }
              )}`,
              firstCircleText: "M",
              firstCircleLabel: "CR_211SC2_RUN",
            }}
            text={{ useClass: "text-dark mr-4" }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "211SC2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29">
        <div className="d-flex">
          <PipeWithCircles
            parentDivClass="hpipecircle "
            firstCircle={{
              firstCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211SC3_RUN", healthyLabel: "CR_211SC3_PH" }
              )}`,
              firstCircleText: "M",
              firstCircleLabel: "CR_211SC3_RUN",
            }}
            text={{ useClass: "text-dark mr-4" }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "211SC3",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CR_211SC3_Simo_Stx",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-32">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_211BC6_RUN", healthyLabel: "CR_211BC6_PH" }
            )}`,
            secondCircleText: "M",
            secondCircleLabel: "CR_211BC6_RUN",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_211BC6A_RUN", healthyLabel: "CR_211BC6A_PH" }
            )}`,
            secondCircleText: "M",
            secondCircleLabel: "CR_211BC6A_RUN",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-34"
        text={{ useClass: "text-dark ml-4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_211SX2_RUN", healthyLabel: "CR_211SX2_PH" }
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "CR_211SX2_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-35"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_211AF2_RUN", healthyLabel: "CR_211AF2_PH" }
          )}`,
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-36"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_211BC7_RUN", healthyLabel: "CR_211BC7_PH" }
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "CR_211BC7_RUN",
        }}
      />
      <div className="position-absolute single-text-37">
        <div className="d-flex justify-content-between mb-1">
          <PipeWithCircles
            parentDivClass="hpipecircle"
            firstCircle={{ firstCircleClass: "dot grey-color" }}
            secondCircle={{
              secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211BC9_RUN", healthyLabel: "CR_211BC9_PH" }
              )}`,
              secondCircleText: "M",
              secondCircleLabel: "CR_211BC9_RUN",
            }}
          />
          <div>
            <MotorCircleDigitalTag
              className={`dot ml-2 digital-tag ${useColorStatus(
                "CR_211ST1_PH"
              )}`}
              text="P"
              label="CR_211ST1_PH"
            />
          </div>
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-38"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_211BCA_RUN", healthyLabel: "CR_211BCA_PH" }
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "CR_211BCA_RUN",
        }}
      />

      <div className="position-absolute single-text-44">
        <PipeWithCircles parentDivClass="hpipecircle" />
        <div className="triangle-down "></div>
      </div>
      <div className="position-absolute single-text-45">
        <PipeWithCircles parentDivClass="hpipecircle" />
        <div className="triangle-down "></div>
      </div>
      <div className="d-flex justify-content-between position-absolute single-text-46">
        <div className="containerImage"></div>
        <div className="d-flex justify-content-between pipeVr w-100">
          <BlackContainer
            data={{
              label: "CR_211BF1_DPT1",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <div className="squareplustri d-flex align-items-center justify-content-center">
            <div>
              <MotorCircleDigitalTag
                className={`square digital-tag ${useColorStatus("CR_211BF1")}`}
                label="CR_211BF1"
              />
            </div>
          </div>
          <TextColumn list={tagsData.kukurdihCrusherTextcolumn3} />
        </div>
        <div className="containerImage"></div>
      </div>
      <div className="d-flex justify-content-center align-items-center containerImage position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "211TK1",
          }}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center containerImage position-absolute single-text-48">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "211HP2",
            }}
          />
          <BlackContainer
            data={{
              label: "CR_211HP2_LT",
              useClass: "greenTxt mt-1 mx-auto",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-50">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mb-2",
            label: "211LD2",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center">
          <div
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              { openLabel: "", closeLabel: "" }
            )}`}
          ></div>
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-51">
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CR_211RA3"
            )}`}
            label="CR_211RA3_RUN"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "211RA3",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-52">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "211RA4",
          }}
        />
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CR_211RA4"
            )}`}
            label="CR_211RA4_RUN"
          />
        </div>
      </div>

      <div className="position-absolute single-text-54">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4 mt-3",
            label: "211RA1A",
          }}
        />
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CR_211RA1A"
            )} ml-auto `}
            label="CR_211RA1A_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-55">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto",
            label: "211RA1",
          }}
        />
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CR_211RA1"
            )} mt-2`}
            label="CR_211RA1_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-56">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-4",
            label: "211RA2A",
          }}
        />
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CR_211RA2A"
            )} ml-auto mt-2`}
            label="CR_211RA2A_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-57">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto",
            label: "211RA2",
          }}
        />
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CR_211RA2"
            )} mt-2`}
            label="CR_211RA2_RUN"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-58">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "211RA5",
          }}
        />
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CR_211RA5"
            )}`}
            label="CR_211RA5_RUN"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-59">
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CR_211RA6"
            )}`}
            label="CR_211RA6_RUN"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-3 ml-2",
            label: "211RA6",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-60">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mr-2",
            label: "211RA7",
          }}
        />
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CR_211RA7"
            )}`}
            label="CR_211RA7_RUN"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-61">
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CR_211RA8"
            )}`}
            label="CR_211RA8_RUN"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "211RA8",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-62">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mr-2",
            label: "211RAA",
          }}
        />
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CR_211RAA"
            )}`}
            label="CR_211RAA_RUN"
          />
        </div>
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

      <div className=" position-absolute single-text-67">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WP1 SEL",
          }}
        />
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot p-3 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_211WP1_RUN", healthyLabel: "CR_211WP1_PH" }
            )}`}
            text="M"
            label="CR_211WP1_RUN"
          />
          {/* <div className={`dot p-3 grey-color`}>M</div> */}
        </div>
      </div>
      <div className=" position-absolute single-text-68">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_211WP2_RUN", healthyLabel: "CR_211WP2_PH" }
            )}`}
            text="M"
            label="CR_211WP2_RUN"
          />
          {/* <div className={`dot p-3 grey-color`}>M</div> */}
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WP2 SEL",
          }}
        />
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
          label: "211BC2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-71",
          label: "211BC3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-75",
          label: "211FN2",
        }}
      />
      <div className="position-absolute single-text-76">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "211FN3",
          }}
        />
      </div>

      <div className="position-absolute single-text-78">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "211FN7",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-79",
          label: "211FN1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-80",
          label: "211FN9",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-81",
          label: "211FNA",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-82",
          label: "211FNC",
        }}
      />

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
        yellowTextUp="211HP1"
        textClass="text-dark mx-auto"
        data={{
          blackTextLabel: "CR_211HP1_LT",
          blackTextClass: "greenTxt mt-2 mx-auto",
          unit: "m",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-94",
          label: "211BF1",
        }}
      />
      <div className="d-flex position-absolute single-text-96">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "211SN1A",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_211SN1_RUN", healthyLabel: "CR_211SN1_PH" }
          )}`}
          text="M"
          label="CR_211SN1_RUN"
        />
        {/* <div className={`dot green-color`}>M</div> */}
      </div>
      <div className="d-flex position-absolute single-text-97">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "211SN2",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_211SN2_RUN", healthyLabel: "CR_211SN2_PH" }
          )}`}
          text="M"
          label="CR_211SN2_RUN"
        />
        {/* <div className={`dot green-color`}>M</div> */}
      </div>
      <div className="position-absolute single-text-98">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "211ST1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot mx-auto ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_211ST1_RUN", healthyLabel: "CR_211ST1_PH" }
          )}`}
          text="M"
          label="CR_211ST1_RUN"
        />
        {/* <div className={`dot mx-auto green-color`}>M</div> */}
      </div>

      <TextColumn
        useClass="position-absolute single-text-99"
        list={tagsData.kukurdihCrusherTextcolumn12}
      />
      <TextColumn
        useClass="position-absolute single-text-100"
        list={tagsData.kukurdihCrusherTextcolumn1}
      />
      <TextColumn
        useClass="position-absolute single-text-101"
        list={tagsData.kukurdihCrusherTextcolumn11}
      />
      <SingleText
        useClass="position-absolute single-text-103"
        // yellowTextUp="211WP1_PT"
        // textClass="text-dark"
        data={{
          blackTextLabel: "CR_211WP1_PT",
          blackTextClass: "greenTxt mt-1",
          unit: "bar",
        }}
      />
      <SingleText
        useClass="position-absolute single-text-104"
        yellowText="211BW1_TPH"
        textClass="text-dark"
        data={{
          blackTextLabel: "CR_211BW1_TPH",
          blackTextClass: "greenTxt mb-1",
          unit: "TPH",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-105"
        list={tagsData.kukurdihCrusherTextcolumn5}
      />
      <TextColumn
        useClass="position-absolute single-text-106"
        list={tagsData.kukurdihCrusherTextcolumn6}
      />
      <TextColumn
        useClass="position-absolute single-text-107"
        list={tagsData.kukurdihCrusherTextcolumn2}
      />

      <TextColumn
        useClass="position-absolute single-text-111"
        list={tagsData.kukurdihCrusherTextcolumn9}
      />
      <div className="position-absolute single-text-112">
        <BlackContainer
          data={{
            label: "CR_211AF2_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_211AF2_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AF1_EXT_SP",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-danger p-1 mt-1",
            label: "211AF2",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-113"
        list={tagsData.kukurdihCrusherTextcolumn10}
      />
      <TextColumn
        useClass="position-absolute single-text-114"
        list={tagsData.kukurdihCrusherTextcolumn13}
      />
      <div className="position-absolute single-text-115">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "211BW3_TPH",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_211BW3_TPH",
            useClass: "greenTxt mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-116",
          label: "211BF2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-117",
          label: "211BF4",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-118",
          label: "211BF3",
        }}
      />

      <TextColumn
        useClass="position-absolute single-text-120"
        list={tagsData.kukurdihCrusherTextcolumn4}
      />
      <TextColumn
        useClass="position-absolute single-text-121"
        list={tagsData.kukurdihCrusherTextcolumn7}
      />

      <SingleText
        useClass="position-absolute single-text-122"
        yellowTextUp="WP LT"
        textClass="text-dark"
        data={{
          blackTextLabel: "CR_211WP1_LT",
          blackTextClass: "greenTxt mt-1",
          unit: "%",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-123"
        list={tagsData.kukurdihCrusherTextcolumn14}
      />

      <div className="boxContainer position-absolute single-text-125">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mb-1",
            label: "OLS",
          }}
        />
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "211OP3",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CR_211OLS_M1_RUN",
                  healthyLabel: "CR_211OLS_M1_PH",
                }
              )} mt-2 p-3`}
              text="M"
              label="CR_211OLS_M1_RUN"
            />
          </div>
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CR_211OLS_M3_RUN",
                  healthyLabel: "CR_211OLS_M3_PH",
                }
              )}  p-3`}
              text="M"
              label="CR_211OLS_M3_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-1",
                label: "211OP1",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_211OLS_M2_RUN", healthyLabel: "CR_211OLS_M2_PH" }
            )} ml-5  p-3`}
            text="M"
            label="CR_211OLS_M2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-1",
              label: "211OP2",
            }}
          />
        </div>

        {/* <div className={`dot ml-5 green-color p-3`}>M</div>
        <div className={`dot mt-2 green-color p-3`}>M</div>
        <div className={`dot ml-5 mt-2 green-color p-3`}>M</div> */}
      </div>
      <div className=" boxContainer position-absolute single-text-126">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mb-1",
            label: "CLS1_OLS",
          }}
        />
        <div>
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CR_211CLS2_M1_RUN",
                  healthyLabel: "CR_211CLS2_M1_PH",
                }
              )} p-3`}
              text="M"
              label="CR_211CLS2_M1_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "M1",
              }}
            />
          </div>
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "CR_211CLS2_M2_RUN",
                  healthyLabel: "CR_211CLS2_M2_PH",
                }
              )} mt-3 p-3`}
              text="M"
              label="CR_211CLS2_M2_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1 mt-3",
                label: "M2",
              }}
            />
          </div>
          {/* <div className={`dot green-color p-3`}>M</div>
          <div className={`dot ml-5 green-color p-3`}>M</div> */}
        </div>
      </div>
      <div className="boxContainer position-absolute single-text-128">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mb-1",
            label: "CLS2_CR",
          }}
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CR_211CLS1_M1_RUN",
                healthyLabel: "CR_211CLS1_M1_PH",
              }
            )} p-3`}
            text="M"
            label="CR_211CLS1_M1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "M1",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag mt-3 motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CR_211CLS1_M2_RUN",
                healthyLabel: "CR_211CLS1_M2_PH",
              }
            )} p-3`}
            text="M"
            label="CR_211CLS1_M2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1 mt-3",
              label: "M2",
            }}
          />
        </div>
        {/* <div className={`dot green-color p-3`}>M</div>
        <div className={`dot mt-5 green-color p-3`}>M</div> */}
      </div>
      <div className="boxContainer px-4 position-absolute single-text-129">
        <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_211HPP1_RUN", healthyLabel: "CR_211HPP1_PH" }
          )} p-3`}
          text="M"
          label="CR_211HPP1_RUN"
        />
        {/* <div className={`dot green-color p-3`}>M</div> */}
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "211HPP1",
          }}
        />
      </div>
      <div className="position-absolute single-text-132">
        <div className="d-flex justify-content-end">
          <div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "ZS1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 ${useColorStatus(
                  "CR_211WP1_ZS1"
                )} `}
                text="P"
                label="CR_211WP1_ZS1"
              />
            </div>

            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "ZS2",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 ${useColorStatus(
                  "CR_211WP1_ZS2"
                )} `}
                text="P"
                label="CR_211WP1_ZS2"
              />
            </div>
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "ZS3",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 ${useColorStatus(
                  "CR_211WP1_ZS3"
                )} `}
                text="P"
                label="CR_211WP1_ZS3"
              />
            </div>
          </div>
          <div className="ml-2">
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 ${useColorStatus(
                  "CR_211WP1_TL_L1"
                )} `}
                text="P"
                label="CR_211WP1_TL_L1"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "TF1",
                }}
              />
            </div>
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 ${useColorStatus(
                  "CR_211WP1_TL_L2"
                )} `}
                text="P"
                label="CR_211WP1_TL_L2"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "TF2",
                }}
              />
            </div>
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 ${useColorStatus(
                  "CR_211WP1_TL_L3"
                )} `}
                text="P"
                label="CR_211WP1_TL_L3"
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "TF3",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-danger p-1 position-absolute single-text-138",
          label: "211WX1",
        }}
      />

      <div className={`position-absolute single-text-139`}>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DPS",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-1 p-1 ${useColorStatus(
            "CR_211WP1_DPS"
          )} ml-2`}
          text="P"
          label="CR_211WP1_DPS "
        />
      </div>
      <div className={`position-absolute single-text-140`}>
        <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_211WX1_RUN", healthyLabel: "CR_211WX1_PH" }
          )}`}
          label="CR_211WX1_RUN"
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-142",
          label: "211BF6",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-143",
          label: "211BF7",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-144",
          label: "Water Spray Popup",
        }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-147",
          label: "211BF5",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-148",
          label: "211BF9",
        }}
      />

      <div className=" d-flex position-absolute single-text-149">
        <div>
          <BlackContainer
            data={{
              label: "CR_211MD1_II",
              useClass: "greenTxt mb-1 ml-auto",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CR_211MD1_JI",
              useClass: "greenTxt mt-2 ml-auto",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-4">
          <BlackContainer
            data={{
              label: "CR_211MD2_II",
              useClass: "greenTxt mb-1 ml-auto",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CR_211MD2_JI",
              useClass: "greenTxt mt-2 ml-auto",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "CR_211BF1_PT3",
          useClass: "greenTxt mb-1 ml-auto position-absolute single-text-150",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-151">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "211BC6A",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_211BC6A_Simo_Stx",
            useClass: "greenTxt mb-1 mx-auto ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 bg-light",
            label: "211BC6A",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-152"
        list={tagsData.kukurdihCrusherTextcolumn14}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-153",
          label: "211BC8",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-154",
          label: "211BCA",
        }}
      />
      <div className="position-absolute single-text-155">
        <BlackContainer
          data={{
            label: "CR_211BCA_Simo_Stx",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-danger p-1 mt-1",
            label: "211BCA",
          }}
        />
      </div>
      <div className="position-absolute single-text-156">
        <BlackContainer
          data={{
            label: "CR_211BC9_Simo_Stx",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-danger p-1 mt-1",
            label: "211BC9",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-157">
        <div>
          <BlackContainer
            data={{
              label: "CR_211BC7_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-danger p-1 mt-1",
              label: "211BC7",
            }}
          />
        </div>
        <div className="ml-3 mt-2">
          <BlackContainer
            data={{
              label: "CR_211BC8_Simo_Stx",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-danger p-1 mt-1",
              label: "211BC8",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-158">
        <MotorCircleDigitalTag
          className={`dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_211MS1_RUN", healthyLabel: "CR_211MS1_PH" }
          )} p-1`}
          text="M"
          label="CR_211MS1_RUN"
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
            secondCircleText: "",
          }}
        />
      </div>
      <div className="position-absolute single-text-159">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "211SX2",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_211SX2_Simo_Stx",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="boxContainer position-absolute single-text-160">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light mb-1",
            label: "CLS3_SX2",
          }}
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot p-3 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CR_211CLS3_M1_RUN",
                healthyLabel: "CR_211CLS3_M1_PH",
              }
            )}`}
            text="M"
            label="CR_211CLS3_M1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "M1",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag motor-dot mt-3 p-3 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CR_211CLS3_M2_RUN",
                healthyLabel: "CR_211CLS3_M2_PH",
              }
            )}`}
            text="M"
            label="CR_211CLS3_M2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1 mt-3",
              label: "M2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-161">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "211BW2_TPH",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_211BW2_TPH",
            useClass: "greenTxt mt-1",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-162">
        <div className="squareplustri d-flex align-items-center justify-content-center">
          <div>
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("CR_211BF8")}`}
              label="CR_211BF8"
            />
          </div>
        </div>
        <div className="pipeHr position-relative"></div>
        <div className="pipeVr position-relative"></div>
        <div className="pipeHr align-self-center position-relative"></div>
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag motor-dot p-3 ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CR_211FNB_RUN", healthyLabel: "CR_211FNB_PH" }
              )}`}
              label="CR_211FNB_RUN"
            />
          </div>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-163",
          label: "211BF8",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-164"
        list={tagsData.kukurdihCrusherTextcolumn7}
      />
      <div className="d-flex position-absolute single-text-165">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "211RA9",
          }}
        />
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "CR_211RA9"
            )}`}
            label="CR_211RA9_RUN"
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-166",
          label: "211BC9",
        }}
      />
      <div className="position-absolute single-text-167">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "211FNB",
          }}
        />
        <TextColumn
          useClass=" mt-1"
          list={tagsData.kukurdihCrusherTextcolumn9}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-168"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_211BC9_RUN", healthyLabel: "CR_211BC9_PH" }
          )}`,
          secondCircleText: "",
          secondCircleLabel: "CR_211BC9_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-169"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag motor-dot ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "CR_211BC8_RUN", healthyLabel: "CR_211BC8_PH" }
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "CR_211BC8_RUN",
        }}
      />
      <div className="position-absolute single-text-170">
        <BlackContainer
          data={{
            label: "PIDB_AF2",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIDB_AF2",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIDB_AF2",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-171">
        <BlackContainer
          data={{
            label: "PIDB_AF1",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIDB_AF1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PIDB_AF1",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-172">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DUMP HOPPER",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LIME STONE",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-danger p-1 position-absolute single-text-173",
          label: "211AF1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-174",
          label: "211HP2",
        }}
      />

      {/* <div
        className={`position-absolute single-text-141 dot green-color`}
      ></div> */}
    </div>
  );
};

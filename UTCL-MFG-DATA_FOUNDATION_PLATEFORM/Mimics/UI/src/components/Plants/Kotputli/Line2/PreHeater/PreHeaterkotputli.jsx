import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  TopLeftBox,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";

import * as tagsData from "../../../../../data/Kotputli/preheater/kotputliPreheaterTextcolumn";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const PreHeaterkotputli = () => {
  return (
    <div className="PreHeater-kotputli w-100 h-100 position-relative">
      <div className="d-flex justify-content-around align-items-center yellowline-Hr leftarrow position-absolute line-1">
        <i className="fa-solid fa-caret-left"></i>
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div className="yellowline-Hr rightarrow position-absolute line-2"> </div>
      <div className="yellowline-Hr rightarrow position-absolute line-3"> </div>
      <div className="yellowline-Hr rightarrow position-absolute line-4"> </div>
      <div className="yellowline-Hr rightarrow position-absolute line-5"> </div>
      <div className="yellowline-Hr rightarrow position-absolute line-6"> </div>
      <div className="yellowline-Hr rightarrow position-absolute line-8"> </div>
      <div className="yellowline-Hr rightarrow position-absolute line-9"> </div>
      <div className="yellowline-Hr leftarrow position-absolute line-10"> </div>
      <div className="yellowline-Hr leftarrow position-absolute line-11"> </div>
      <div className="yellowline-Hr leftarrow position-absolute line-12"> </div>
      <div className="yellowline-Hr leftarrow position-absolute line-13"> </div>
      <div className="yellowline-Hr position-absolute line-14"> </div>
      <div className="yellowline-Hr position-absolute line-15"> </div>
      <div className="yellowline-Hr position-absolute line-16"> </div>
      <div className="yellowline-Hr position-absolute line-17"> </div>
      <div className="yellowline-Hr position-absolute line-18"> </div>
      <div className="yellowline-Hr position-absolute line-19"> </div>
      <div className="yellowline-Hr position-absolute line-20"> </div>
      <div className="yellowline-Hr position-absolute line-21"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-22"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-23"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-24"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-25"> </div>
      <div className="yellowline-Vr position-absolute line-26"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-27"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-28"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-29"> </div>
      <div className="yellowline-Vr position-absolute line-30"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-31"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-32"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-33"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-34"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-35"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-36"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-37"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-38"> </div>
      <div className="yellowline-Vr position-absolute line-39"> </div>
      <div className="yellowline-Vr position-absolute line-40"> </div>
      <div className="yellowline-Vr position-absolute line-41"> </div>
      <div className="yellowline-Vr position-absolute line-42"> </div>
      <div className="yellowline-Vr position-absolute line-43"> </div>
      <div className="yellowline-Vr position-absolute line-44"> </div>
      <div className="yellowline-Vr position-absolute line-45"> </div>
      <div className="yellowline-Vr position-absolute line-46"> </div>
      <div className="yellowline-Vr position-absolute line-47"> </div>
      <div className="yellowline-Vr position-absolute line-48"> </div>
      <div className="yellowline-Vr downArrow position-absolute line-49"> </div>
      <div className="yellowline-Hr position-absolute line-50"> </div>
      <div className="yellowline-Hr position-absolute line-51"> </div>
      <div className="yellowline-Vr position-absolute line-52"> </div>
      <div className="yellowline-Vr position-absolute line-53"> </div>
      <div className="yellowline-Hr position-absolute line-54"> </div>
      <div className="yellowline-Vr position-absolute line-55"></div>
      <div className="yellowline-Vr position-absolute line-56"></div>
      <div className="yellowline-Vr downArrow position-absolute line-57"> </div>
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeHr position-absolute pipe-3"></div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeHr position-absolute pipe-5"></div>
      <div className="pipeHr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9"></div>
      <div className="pipeHr position-absolute pipe-10"></div>
      <div className="pipeHr position-absolute pipe-11"></div>
      <div className="pipeHr position-absolute pipe-12"></div>
      <div className="pipeHr position-absolute pipe-13"></div>
      <div className="pipeHr position-absolute pipe-14"></div>
      <div className="pipeHr position-absolute pipe-15"></div>
      <div className="pipeHr position-absolute pipe-16"></div>
      <div className="pipeHr px-1 position-absolute pipe-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "442PI1_PT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "442TK1_LT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Water Tank 1-2",
          }}
        />
      </div>
      <div className="pipeVr position-absolute pipe-18"></div>
      <div className="pipeVr position-absolute pipe-19"></div>
      <div className="pipeVr position-absolute pipe-20"></div>
      <div className="pipeVr position-absolute pipe-21"></div>
      <div className="pipeVr position-absolute pipe-22"></div>
      <div className="pipeVr position-absolute pipe-23"></div>
      <div className="pipeVr position-absolute pipe-24"></div>
      <div className="pipeVr position-absolute pipe-25"></div>
      <div className="pipeVr position-absolute pipe-26"></div>
      <div className="pipeVr position-absolute pipe-27"></div>
      <div className="pipeVr position-absolute pipe-28"></div>
      <div className="pipeVr position-absolute pipe-29"></div>
      <div className="pipeVr position-absolute pipe-30"></div>
      <div className="pipeVr position-absolute pipe-31"></div>
      <div className="pipeVr position-absolute pipe-32"></div>
      <div className="pipeVr position-absolute pipe-33"></div>
      <div className="pipeVr position-absolute pipe-34"></div>
      <div className="pipeVr position-absolute pipe-35"></div>
      <div className="pipeVr position-absolute pipe-36"></div>
      <div className="pipeVr position-absolute pipe-37"></div>
      <div className="pipeVr position-absolute pipe-38"></div>
      <div className="pipeHr position-absolute pipe-39"></div>
      <div className="pipeHr position-absolute pipe-40"></div>
      <div className="triangle-with-squares text-center position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "1B",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "1A",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "2",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "4",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "5",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "6",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "1B",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "1A",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-10">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "2",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "4",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "5",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "6",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-15"></div>
      <div className="position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FROM 432BE1",
          }}
        />
        <div className="pipeVr position-relative"></div>
      </div>
      <div className="d-flex justify-content-center align-items-center position-absolute text-center single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "442FN2",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "PH_442FN2_RUN",
              healthyLabel: "PH_442FN2_PH",
            }
          )}`}
          label="PH_442FN2_RUN"
        />
        <div className="yellowline-Hr rightarrow position-relative"> </div>
      </div>
      <div className="d-flex justify-content-center align-items-center position-absolute text-center single-text-18">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "442FN3",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "PH_442FN3_RUN",
              healthyLabel: "PH_442FN3_PH",
            }
          )}`}
          label="PH_442FN3_RUN"
        />

        <div className="yellowline-Hr rightarrow position-relative"> </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-19">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "PH_452FN2_RUN",
              healthyLabel: "PH_452FN2_PH",
            }
          )}`}
          label="PH_452FN2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "452FN2",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-20">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_452FN1_RUN",
              healthyLabel: "KL_452FN1_PH",
            }
          )}`}
          label="KL_452FN1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "452FN1",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-21">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_462FN9_RUN",
              healthyLabel: "KL_462FN9_PH",
            }
          )}`}
          label="KL_462FN9_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "462FN9 (S)",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-22">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_462FN7_RUN",
              healthyLabel: "KL_462FN7_PH",
            }
          )}`}
          label="KL_462FN7_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "462FN7",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-23">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_462FN8_RUN",
              healthyLabel: "KL_462FN8_PH",
            }
          )}`}
          label="KL_462FN8_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "462FN8",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <div className="yellowline-Vr upArrow position-absolute"></div>

        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_482BL5_RUN",
              healthyLabel: "KL_482BL5_PH",
            }
          )}`}
          label="KL_482BL5_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "482BL5",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_452BL2_RUN",
              healthyLabel: "KL_452BL2_PH",
            }
          )}`}
          label="KL_452BL2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "452BL2",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_452BL3_RUN",
              healthyLabel: "KL_452BL3_PH",
            }
          )}`}
          label="KL_452BL3_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "452BL3",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_482BL1_RUN",
              healthyLabel: "KL_482BL1_PH",
            }
          )}`}
          label="KL_482BL1_RUN"
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_482BL2_RUN",
              healthyLabel: "KL_482BL2_PH",
            }
          )}`}
          label="KL_482BL2_RUN"
        />
      </div>
      <div className="position-absolute single-text-29">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_482BL4_RUN",
              healthyLabel: "KL_482BL4_PH",
            }
          )}`}
          label="KL_482BL4_RUN"
        />
      </div>
      <div className="position-absolute single-text-30">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_482BL3_RUN",
              healthyLabel: "KL_482BL3_PH",
            }
          )}`}
          label="KL_482BL3_RUN"
        />
      </div>
      <div className="position-absolute text-center single-text-31">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "462FNR",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_462FNR_RUN", healthyLabel: "KL_462FNR_PH" }
          )} p-3`}
          label="KL_462FNR_RUN"
        />
        <div className="yellowline-Vr position-relative"> </div>
      </div>
      <div className="gray-green-red-img red-img position-absolute single-text-32">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_442DG1_CLS",
                openLabel: "PH_442DG1_OLS",
              }
            )}`}
            label="PH_442DG1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="gray-green-red-img red-img position-absolute single-text-33">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_442DG2_CLS",
                openLabel: "PH_442DG2_OLS",
              }
            )}`}
            label="PH_442DG2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-34">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_432SG4_CLS",
                openLabel: "PH_432SG4_OLS",
              }
            )}`}
            label="PH_432SG4_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "432SG4",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center ml-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_432DG1_EX_CLS",
                openLabel: "PH_432DG1_EX_OLS",
              }
            )}`}
            label="PH_432DG1_EX_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "432DG1",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center ml-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_432DG2_EX_CLS",
                openLabel: "PH_432DG2_EX_OLS",
              }
            )}`}
            label="PH_432DG2_EX_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "432DG2",
          }}
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-35">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_432SG5_CLS",
                openLabel: "PH_432SG5_OLS",
              }
            )}`}
            label="PH_432SG5_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "432SG5",
          }}
        />
      </div>
      <div className="position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "442LD1",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_442LD1_CLS",
                openLabel: "PH_442LD1_OLS",
              }
            )}`}
            label="PH_442LD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-37">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_442SD3_CLS",
                openLabel: "PH_442SD3_OLS",
              }
            )}`}
            label="PH_442SD3_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "442SD3",
          }}
        />
      </div>
      <div className="d-flex align-items-end position-absolute single-text-38">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_462SD1_CLS",
                openLabel: "PH_462SD1_OLS",
              }
            )}`}
            label="PH_462SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "462SD1",
          }}
        />
      </div>
      <div className="d-flex align-items-end position-absolute single-text-39">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_442SD2_CLS",
                openLabel: "PH_442SD2_OLS",
              }
            )}`}
            label="PH_442SD2_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "442SD2",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-40">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_442SD1_CLS",
                openLabel: "PH_442SD1_OLS",
              }
            )}`}
            label="PH_442SD1_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "442SD1",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-41"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "PH_442CV1_RUN",
              healthyLabel: "PH_442CV1_PH",
            }
          )}`,
          firstCircleLabel: "PH_442CV1_RUN",
        }}
        text={{ useClass: "text-dark mr-4", label: "442CV1" }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "text-dark bg-secondary p-3 position-absolute single-text-42",
          label: "TO WHR SYSTEM",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-43",
          label: "FROM 432FV1",
        }}
      />
      {/* <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-44",
          label: "TO RAW MILL",
        }}
      /> */}
      {/* <TextColumn
        useClass="text-center position-absolute single-text-46"
        list={tagsData.kotputliPreheaterTextcolumn2}
      /> */}
      <TextColumn
        useClass="text-center position-absolute single-text-47"
        list={tagsData.kotputliPreheaterTextcolumn4}
      />
      {/* <TextColumn
        useClass="position-absolute single-text-48"
        list={tagsData.kotputliPreheaterTextcolumn3}
      /> */}
      <TextColumn
        useClass="text-center position-absolute single-text-49"
        list={tagsData.kotputliPreheaterTextcolumn6}
      />
      {/* <TextColumn
        useClass="position-absolute single-text-50"
        list={tagsData.kotputliPreheaterTextcolumn9}
      /> */}
      <TextColumn
        useClass="text-center position-absolute single-text-51"
        list={tagsData.kotputliPreheaterTextcolumn10}
      />
      <TextColumn
        useClass="text-center position-absolute single-text-52"
        list={tagsData.kotputliPreheaterTextcolumn13}
      />
      <TextColumn
        useClass="text-center position-absolute single-text-53"
        list={tagsData.kotputliPreheaterTextcolumn5}
      />
      {/* <TextColumn
        useClass="position-absolute single-text-54"
        list={tagsData.kotputliPreheaterTextcolumn7}
      /> */}
      <TextColumn
        useClass="text-center position-absolute single-text-55"
        list={tagsData.kotputliPreheaterTextcolumn8}
      />
      <TextColumn
        useClass="text-center position-absolute single-text-56"
        list={tagsData.kotputliPreheaterTextcolumn11}
      />
      {/* <TextColumn
        useClass="position-absolute single-text-57"
        list={tagsData.kotputliPreheaterTextcolumn16}
      /> */}
      {/* <TextColumn
        useClass="position-absolute single-text-58"
        list={tagsData.kotputliPreheaterTextcolumn15}
      /> */}
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-45",
          label: "442PH1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-59",
          label: "442PH2",
        }}
      />
      <TextColumn
        useClass="text-center position-absolute single-text-60"
        list={tagsData.kotputliPreheaterTextcolumn20}
      />
      <TextColumn
        useClass="text-center position-absolute single-text-61"
        list={tagsData.kotputliPreheaterTextcolumn22}
      />
      {/* <TextColumn
        useClass="position-absolute single-text-62"
        list={tagsData.kotputliPreheaterTextcolumn24}
      /> */}
      <TextColumn
        useClass="text-center position-absolute single-text-63"
        list={tagsData.kotputliPreheaterTextcolumn25}
      />
      {/* <TextColumn
        useClass="position-absolute single-text-64"
        list={tagsData.kotputliPreheaterTextcolumn27}
      /> */}
      {/* <TextColumn
        useClass="position-absolute single-text-65"
        list={tagsData.kotputliPreheaterTextcolumn30}
      />
      <TextColumn
        useClass="position-absolute single-text-66"
        list={tagsData.kotputliPreheaterTextcolumn31}
      /> */}
      <TextColumn
        useClass="text-center position-absolute single-text-67"
        list={tagsData.kotputliPreheaterTextcolumn28}
      />
      <TextColumn
        useClass="text-center position-absolute single-text-68"
        list={tagsData.kotputliPreheaterTextcolumn26}
      />
      {/* <TextColumn
        useClass="position-absolute single-text-69"
        list={tagsData.kotputliPreheaterTextcolumn23}
      /> */}
      <TextColumn
        useClass="position-absolute single-text-70"
        list={tagsData.kotputliPreheaterTextcolumn21}
      />
      <TextColumn
        useClass="text-center position-absolute single-text-71"
        list={tagsData.kotputliPreheaterTextcolumn19}
      />
      {/* <TextColumn
        useClass="position-absolute single-text-72"
        list={tagsData.kotputliPreheaterTextcolumn29}
      /> */}
      <TopLeftBox
        parentDivClass="boxContainer position-absolute p-1 text-center single-text-73"
        useClass="d-flex mt-1"
        list={tagsData.kotputliPreheaterTextcolumn34}
        headText={{ text: "PC1 ANALYSER", class: "text-dark bg-light" }}
      />
      <TopLeftBox
        parentDivClass="boxContainer position-absolute p-1 text-center single-text-74"
        useClass="d-flex mt-1"
        list={tagsData.kotputliPreheaterTextcolumn35}
        headText={{ text: "PC2 ANALYSER", class: "text-dark bg-light" }}
      />
      <TopLeftBox
        parentDivClass="boxContainer position-absolute p-1 text-center single-text-75"
        useClass="d-flex mt-1"
        list={tagsData.kotputliPreheaterTextcolumn36}
        headText={{ text: "I/L ANALYSER", class: "text-dark bg-light" }}
      />
      <TopLeftBox
        parentDivClass="boxContainer position-absolute p-1 text-center single-text-76"
        useClass="d-flex mt-1"
        list={tagsData.kotputliPreheaterTextcolumn37}
        headText={{ text: "O/L ANALYSER", class: "text-dark bg-light" }}
      />
      <div className="boxContainer position-absolute p-1 text-center single-text-77">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark border-bottom",
            label: "NUCLEONIC LG",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CN4_FS",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "PH_442PH2_CN4_FS"
            )}`}
            label="PH_442PH2_CN4_FS"
            text="F"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CN4_LS",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-1 ${useColorStatus(
              "PH_442PH2_CN4_LS"
            )}`}
            label="PH_442PH2_CN4_LS"
            text="L"
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_442PH2_CN4_LT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="boxContainer position-absolute p-1 text-center single-text-78">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark border-bottom",
            label: "NUCLEONIC LG",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CN5_FS",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_442PH2_CN5_FS")}`}
            label="PH_442PH2_CN5_FS"
            text="F"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CN5_LS",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_442PH2_CN5_LS")}`}
            label="PH_442PH2_CN5_LS"
            text="L"
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_442PH2_CN5_LT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="boxContainer position-absolute p-1 text-center single-text-79">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KILN FEED BIN",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-2 ${useColorStatus("PH_432BI1_LS")}`}
            label="PH_432BI1_LS"
            text="L"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MIXING BIN",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_412BI1_WI",
              useClass: "greenTxt ml-1",
              unit: "T",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-2 ${useColorStatus("PH_412BI1_LS")}`}
            label="PH_412BI1_LS"
            text="L"
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-80",
          label: "TO BLENDING SILO",
        }}
      />
      <div className="position-absolute single-text-81">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "NUCLEONIC LEVEL GAUGE-6",
          }}
        />
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_442PH2_CN6_FS")}`}
            label="PH_442PH2_CN6_FS"
            text="F"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-1 ${useColorStatus(
              "PH_442PH2_CN6_LS"
            )}`}
            label="PH_442PH2_CN6_LS"
            text="L"
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_442PH2_CN6_LT",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-82"
        list={tagsData.kotputliPreheaterTextcolumn33}
      />
      <div className="boxContainer position-absolute p-1 text-center single-text-83">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark border-bottom",
            label: "NUCLEONIC LG",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CN4_FS",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-1 ${useColorStatus(
              "PH_442PH1_CN4_FS"
            )}`}
            label="PH_442PH1_CN4_FS"
            text="F"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CN4_LS",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-1 ${useColorStatus(
              "PH_442PH1_CN4_LS"
            )}`}
            label="PH_442PH1_CN4_LS"
            text="L"
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_442PH1_CN4_LT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="boxContainer position-absolute p-1 text-center single-text-84">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark border-bottom",
            label: "NUCLEONIC LG",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CN6_FS",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-1 ${useColorStatus(
              "PH_442PH1_CN6_FS"
            )}`}
            label="PH_442PH1_CN6_FS"
            text="F"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CN6_LS",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-1 ${useColorStatus(
              "PH_442PH1_CN6_LS"
            )}`}
            label="PH_442PH1_CN6_LS"
            text="L"
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_442PH1_CN6_LT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      {/* <TextColumn
        useClass="position-absolute single-text-85"
        list={tagsData.kotputliPreheaterTextcolumn14}
      /> */}
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark text-center position-absolute single-text-87",
          label: "TO HOT DUSTBIN FEED ELEVATOR",
        }}
      />
      {/* <TextColumn
        useClass="position-absolute single-text-86"
        list={tagsData.kotputliPreheaterTextcolumn40}
      /> */}
      <TopLeftBox
        parentDivClass="boxContainer position-absolute p-1 text-center single-text-88"
        useClass="d-flex mt-1"
        list={tagsData.kotputliPreheaterTextcolumn41}
        headText={{ text: "422FN1", class: "text-dark bg-light" }}
      />
      <div className="boxContainer position-absolute p-3 text-center single-text-89">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "432BE1",
          }}
        />
        <div className="d-flex mt-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_432BE1_RUN", healthyLabel: "PH_432BE1_PH" }
            )}`}
            label="PH_432BE1_RUN"
          />
          {/* <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "CR_212CR1S_RUN", healthyLabel: "CR_212CR1S_PH" }
            )} ml-3`}
            label="CR_212CR1S_RUN"
          /> */}
          {/* <div className={`dot grey-color`}></div> */}
          <div className={`dot ml-3 grey-color`}></div>
        </div>
      </div>
      <TextColumn
        useClass="position-absolute single-text-90"
        list={tagsData.kotputliPreheaterTextcolumn38}
      />
      {/* <TextColumn
        useClass="position-absolute single-text-91"
        list={tagsData.kotputliPreheaterTextcolumn39}
      />
      <TextColumn
        useClass="position-absolute single-text-92"
        list={tagsData.kotputliPreheaterTextcolumn12}
      /> */}
      <BlackContainer
        data={{
          label: "PH_432DG2_ZT",
          useClass: "greenTxt position-absolute single-text-93",
          unit: "%",
          unitColor: "unitColor",
        }}
      />

      <div className="boxContainer position-absolute p-1 text-center single-text-94">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark border-bottom",
            label: "NUCLEONIC LG",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CN5_FS",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-1 ${useColorStatus(
              "PH_442PH1_CN5_FS"
            )}`}
            label="PH_442PH1_CN5_FS"
            text="F"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CN5_LS",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot  digital-tag ml-1 ${useColorStatus(
              "PH_442PH1_CN5_LS"
            )}`}
            label="PH_442PH1_CN5_LS"
            text="L"
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_442PH1_CN5_LT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-95 d-flex">
                <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mt-2",
            label: "462MD2",
          }}
        />
        <div>
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_462MD2_RUN",
                healthyLabel: "KL_462MD2_PH",
              }
            )}`}
            label="KL_462MD2_RUN"
          />
        </div>

      </div>
      <div className="position-absolute single-text-96">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_462MD1_RUN",
              healthyLabel: "KL_462MD1_PH",
            }
          )}`}
          label="KL_462MD1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "462MD1",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`position-absolute single-text-97 dot digital-tag ${useColorStatus(
          "KL_452FN1_RUN"
        )}`}
        text="M"
        label="KL_452FN1_RUN"
      />
      <MotorCircleDigitalTag
        className={`position-absolute single-text-98 dot digital-tag ${useColorStatus(
          "KL_462FN7_9_RUN"
        )}`}
        text="M"
        label="KL_462FN7_9_RUN"
      />
      <div className="position-absolute single-text-99">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_482BL1_M02_RUN",
                healthyLabel: "KL_482BL1_M02_PH",
              }
            )}`}
            label="KL_482BL1_M02_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot ml-3 ${useMotorTagsColorStatusForNewPlantScreens({
              runLabel: "KL_482BL1_M03_RUN",
              healthyLabel: "KL_482BL1_M03_PH",
            })}`}
            label="KL_482BL1_M03_RUN"
          />
        </div>
        <BlackContainer
          data={{
            label: "KL_482BL1",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />

        <div className="d-flex mt-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_482BL2_M02_RUN",
                healthyLabel: "KL_482BL2_M02_PH",
              }
            )}`}
            label="KL_482BL2_M02_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-3 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_482BL2_M03_RUN",
                healthyLabel: "KL_482BL2_M03_PH",
              }
            )}`}
            label="KL_482BL2_M03_RUN"
          />
        </div>
        <BlackContainer
          data={{
            label: "KL_482BL2",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-3 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_482BL4_M02_RUN",
              healthyLabel: "KL_482BL4_M02_PH",
            }
          )}`}
          label="KL_482BL4_M02_RUN"
        />
        <BlackContainer
          data={{
            label: "KL_482BL4",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_482BL3_M02_RUN",
              healthyLabel: "KL_482BL3_M02_PH",
            }
          )} mt-3`}
          label="KL_482BL3_M02_RUN"
        />
        <div className="d-flex mt-1">
          <BlackContainer
            data={{
              label: "KL_482BL3",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_482BL3",
              useClass: "greenTxt ml-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-100">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV1_OPN", closeLabel: "KL_482BV1_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV1_OPN", closeLabel: "KL_482BV1_CLS" }
          )} d-block`}
          label="KL_482BV1_OPN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "482BV1",
          }}
        />
      </div>
      <div className="position-absolute single-text-101">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV2_OPN", closeLabel: "KL_482BV2_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV2_OPN", closeLabel: "KL_482BV2_CLS" }
          )} d-block`}
          label="KL_482BV2_OPN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "482BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-102">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV4_OPN", closeLabel: "KL_482BV4_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV4_OPN", closeLabel: "KL_482BV4_CLS" }
          )} d-block`}
          label="KL_482BV4_OPN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "482BV4",
          }}
        />
      </div>
      <div className="position-absolute single-text-103">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV3_OPN", closeLabel: "KL_482BV3_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV3_OPN", closeLabel: "KL_482BV3_CLS" }
          )} d-block`}
          label="KL_482BV3_OPN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "482BV3",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-104">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "482BV5",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV5_OPN", closeLabel: "KL_482BV5_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV5_OPN", closeLabel: "KL_482BV5_CLS" }
          )} d-block`}
          label="KL_482BV5_OPN"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-105",
          label: "TO COAL MILL",
        }}
      />
      <TextColumn
        useClass="text-center position-absolute single-text-106"
        list={tagsData.kotputliPreheaterTextcolumn18}
      />
      <div className="pt-3 pl-3 d-flex img-107 position-absolute single-text-107">
        <TextColumn list={tagsData.kotputliPreheaterTextcolumn32} />
        <div className="ml-2">
          <BlackContainer
            data={{
              label: "KL_462KL1_TT1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_462KL1_TT2",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-1",
              label: "INLET AIR BLASTER",
            }}
          />
        </div>
         </div>
      <div className="lightBox position-absolute single-text-108"></div>
      <div className="d-flex position-absolute single-text-109">
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PH_441CP1_RUN",
                healthyLabel: "PH_441CP1_PH",
              }
            )}`}
            label="PH_441CP1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-2",
              label: "CP1",
            }}
          />
        </div>
        <div className="ml-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PH_441CP2_RUN",
                healthyLabel: "PH_441CP2_PH",
              }
            )}`}
            label="PH_441CP2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-2",
              label: "CP2",
            }}
          />
        </div>
        <div className="ml-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PH_441CP3_RUN",
                healthyLabel: "PH_441CP3_PH",
              }
            )}`}
            label="PH_441CP3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-2",
              label: "CP3",
            }}
          />
        </div>
        <div className="ml-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PH_441CP4_RUN",
                healthyLabel: "PH_441CP4_PH",
              }
            )}`}
            label="PH_441CP4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-2",
              label: "CP4",
            }}
          />
        </div>
        <div className="ml-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PH_441CP5_RUN",
                healthyLabel: "PH_441CP5_PH",
              }
            )}`}
            label="PH_441CP5_RUN"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-2",
              label: "CP5",
            }}
          />
        </div>
      </div>
      <div className="boxContainer d-flex position-absolute px-3 text-center single-text-110">
        <div className="ml-4">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "CL_472RC1_RUN",
                healthyLabel: "CL_472RC1_PH",
              }
            )}`}
            label="CL_472RC1_RUN"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472RC1",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-111"
        secondCircle={{
          secondCircleClass: `dot ml-auto p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "CL_492DB1_PH", runLabel: "CL_492DB1_RUN" }
          )}`,
          secondCircleLabel: "CL_492DB1_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-112"
        secondCircle={{
          secondCircleClass: `dot ml-auto p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "CL_492DB2_PH", runLabel: "CL_492DB2_RUN" }
          )}`,
          secondCircleLabel: "CL_492DB2_RUN",
        }}
      />
      {/* new added*/}
      <div className="boxContainer p-1 position-absolute single-text-113">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white text-center",
            label: "STR1 5th CYC FEED PIPE",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "LN",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_442DG1_TT01",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white ml-2",
              label: "P",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_442DG1_PT01",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "PC",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_442DG1_TT02",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white ml-2",
              label: "P",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_442DG1_PT02",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white text-center mt-1",
            label: "STR2 6th CYC FEED PIPE",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "LN",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_442DG2_TT01",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white ml-2",
              label: "P",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_442DG2_PT01",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "PC",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_442DG2_TT02",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white ml-2",
              label: "P",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_442DG2_PT02",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white text-center mt-1",
            label: "TAD",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white",
              label: "IL",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_462DU1_TT1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white ml-2",
              label: "P",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_462DU1_PT1",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-light",
              label: "OL",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_462DU1_TT2",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-light ml-2",
              label: "P",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_462DU1_PT2",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      {/* tag 20 */}
      <BlackContainer
        data={{
          label: "PH_442FN1_PT02",
          useClass: "greenTxt position-absolute single-text-114",
          unit: "mmWC",
          unitColor: "unitColor",
        }}
      />
      <div className="grid-container-2 position-absolute single-text-115">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "FEED AVG",
          }}
        />
        <BlackContainer
          data={{
            label: "KL2_FEED_POWER",
            useClass: "greenTxt",
            unit: "KWH/T",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "SP PWR",
          }}
        />
        <BlackContainer
          data={{
            label: "KL2_SP_POWER",
            useClass: "greenTxt",
            unit: "KWH/T",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "SP PWR AVG.",
          }}
        />
        <BlackContainer
          data={{
            label: "KL2_SP_POWER_AVG",
            useClass: "greenTxt",
            unit: "KWH/T",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="boxContainer d-flex position-absolute single-text-116">
        <div>
          <TextColumn list={tagsData.kotputliPreheaterTextcolumn40} />
          <MotorCircleDigitalTag
            className={`text-dark mt-1 digital-tag ${useColorStatus(
              "PH_442FN1_PS"
            )}`}
            label="PH_442FN1_PS"
            text="PS"
          />
          <MotorCircleDigitalTag
            className={`dot mt-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PH_442FN1_M03_RUN",
                healthyLabel: "PH_442FN1_M03_PH",
              }
            )}`}
            label="PH_442FN1_M03_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "EXLUBR",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "442FN1",
            }}
          />
          <TextColumn list={tagsData.kotputliPreheaterTextcolumn2} />
        </div>
      </div>

      <div className="text-center position-absolute single-text-117">
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PH_442FN1_M02_RUN",
                healthyLabel: "PH_442FN1_M02_PH",
              }
            )}`}
            label="PH_442FN1_M02_RUN"
          />
          <div className="yellowline-Hr position-relative"> </div>
          <MotorCircleDigitalTag
            className={`line-circle p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_442FN1_RUN", healthyLabel: "PH_442FN1_PH" }
            )}`}
            label="PH_442FN1_RUN"
          />
        </div>
        <TextColumn list={tagsData.kotputliPreheaterTextcolumn1} />
      </div>

      {/* new box */}
      <div className="boxContainer d-flex p-1 position-absolute single-text-118">
        <div className="mr-2">
          <div className="d-flex justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "KILN",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_482DQ1_RUN",
                  healthyLabel: "KL_482DQ1_PH",
                }
              )}`}
              label="KL_482DQ1_RUN"
            />
          </div>
          <div className="d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "PC",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_452DQ1_RUN",
                  healthyLabel: "KL_452DQ1_PH",
                }
              )}`}
              label="KL_452DQ1_RUN"
            />
          </div>
          <div className="d-flex justify-content-between mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "STD BY",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "KL_452DQ2_RUN",
                  healthyLabel: "KL_452DQ2_PH",
                }
              )}`}
              label="KL_452DQ2_RUN"
            />
          </div>
        </div>
        <div className="mr-2">
          <BlackContainer
            data={{
              label: "KL_482DQ1",
              useClass: "greenTxt",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_482DQ1_FR",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_482BI1_WT",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mr-2">
          <BlackContainer
            data={{
              label: "KL_452DQ1",
              useClass: "greenTxt",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_452DQ1_FR",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_452BI1_WT",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mr-2">
          <BlackContainer
            data={{
              label: "KL_452DQ2",
              useClass: "greenTxt",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_452DQ2_FR",
              useClass: "greenTxt mt-1",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_452BI2_WT",
              useClass: "greenTxt mt-1",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      {/* 36-37*/}
      <TextColumn
        useClass="position-absolute single-text-119"
        list={tagsData.kotputliPreheaterTextcolumn42}
      />

      {/* 42,45 */}
      <TextColumn
        useClass="position-absolute single-text-120"
        list={tagsData.kotputliPreheaterTextcolumn43}
      />

      {/*44,50  */}
      <TextColumn
        useClass="position-absolute single-text-121"
        list={tagsData.kotputliPreheaterTextcolumn44}
      />
      {/* 43, 46-49 */}
      <TextColumn
        useClass="position-absolute single-text-122"
        list={tagsData.kotputliPreheaterTextcolumn45}
      />
      <div className="position-absolute single-text-123">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag c-grey-img-2`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag c-grey-img-2`}
          label="NA"
        />
      </div>
      <div className="position-absolute single-text-124">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag c-grey-img-2`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag c-grey-img-2`}
          label="NA"
        />
      </div>
      {/* new added tags */}
    <div className="d-flex box-1 p-1 position-absolute single-text-125">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TOTAL KILN FEED RATE",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt ml-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-126">

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_463MD2_M02_RUN",
              healthyLabel: "KL_463MD2_M02_PH",
            }
          )}`}
          label="KL_463MD2_M02_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1 mr-3",
            label: "M02",
          }}
        />

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_463MD2_M03_RUN",
              healthyLabel: "KL_463MD2_M03_PH",
            }
          )}`}
          label="KL_463MD2_M03_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "M03",
          }}
        />
      </div>
      <div className="position-absolute single-text-127">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KW",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-128">

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_463MD2_M02_RUN",
              healthyLabel: "KL_463MD2_M02_PH",
            }
          )}`}
          label="KL_463MD2_M02_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1 mr-3",
            label: "M02",
          }}
        />

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "KL_463MD2_M03_RUN",
              healthyLabel: "KL_463MD2_M03_PH",
            }
          )}`}
          label="KL_463MD2_M03_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "M03",
          }}
        />
      </div>
    </div>
  );
};

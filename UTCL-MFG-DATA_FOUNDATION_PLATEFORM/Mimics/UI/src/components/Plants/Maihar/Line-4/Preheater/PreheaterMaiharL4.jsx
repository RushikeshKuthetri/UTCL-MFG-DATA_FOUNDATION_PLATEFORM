import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";
export const PreheaterMaiharL4 = () => {
  return (
    <div className="PreHeater-kotputli PreheaterMaiharL4 w-100 h-100 position-relative">
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
        <BlackContainer
          data={{
            label: "PH_444PI1_PT",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444TK1_LT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
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
            label: "FROM 434BE1",
          }}
        />
        <div className="pipeVr position-relative"></div>
      </div>
      <div className="d-flex justify-content-center align-items-center position-absolute text-center single-text-17">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "444FN2",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "PH_444FN2_PH", runLabel: "PH_444FN2_RUN" }
          )}`}
          label="PH_444FN2_RUN"
        />
        <div className="yellowline-Hr rightarrow position-relative"> </div>
      </div>
      <div className="d-flex justify-content-center align-items-center position-absolute text-center single-text-18">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "444FN3",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "PH_444FN3_PH", runLabel: "PH_444FN3_RUN" }
          )}`}
          label="PH_444FN3_RUN"
        />

        <div className="yellowline-Hr rightarrow position-relative"> </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-19">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "PH_454FN2_PH", runLabel: "PH_454FN2_RUN" }
          )}`}
          label="PH_454FN2_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "454FN2",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-20">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`line-circle p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "PH_454FN1_PH", runLabel: "PH_454FN1_RUN" }
          )}`}
          label="PH_454FN1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "454FN1",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-21">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`line-circle p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_464FN9_PH", runLabel: "KL_464FN9_RUN" }
          )}`}
          label="KL_464FN9_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "464FN9 (S)",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-22">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`line-circle p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_464FN7_PH", runLabel: "KL_464FN7_RUN" }
          )}`}
          label="KL_464FN7_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "464FN7",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-23">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`line-circle p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_464FN8_PH", runLabel: "KL_464FN8_RUN" }
          )}`}
          label="KL_464FN8_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "464FN8",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <div className="yellowline-Vr upArrow position-absolute"></div>

        <MotorCircleDigitalTag
          className={`dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_484BL5_PH", runLabel: "KL_484BL5_RUN" }
          )}`}
          label="KL_484BL5_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "484BL5",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <MotorCircleDigitalTag
          className={`dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_454BL2_PH", runLabel: "KL_454BL2_RUN" }
          )}`}
          label="KL_454BL2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "454BL2",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <MotorCircleDigitalTag
          className={`dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_454BL3_PH", runLabel: "KL_454BL3_RUN" }
          )}`}
          label="KL_454BL3_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "454BL3",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_484BL1_RUN", healthyLabel: "KL_484BL1_PH" }
          )}`}
          label="KL_484BL1_RUN"
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_484BL2_RUN", healthyLabel: "KL_484BL2_PH" }
          )}`}
          label="KL_484BL2_RUN"
        />
      </div>
      <div className="position-absolute single-text-29">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_484BL3_RUN", healthyLabel: "KL_484BL3_PH" }
          )}`}
          label="KL_484BL3_RUN"
        />
      </div>
      <div className="position-absolute single-text-30">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag p-3 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_484BL4_RUN", healthyLabel: "KL_484BL4_PH" }
          )}`}
          label="KL_484BL4_RUN"
        />
      </div>
      <div className="position-absolute text-center single-text-31">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "464FNR",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "PH_464FNR_PH", runLabel: "PH_464FNR_RUN" }
          )} p-3`}
          label="PH_464FNR_RUN"
        />
        <div className="yellowline-Vr position-relative"> </div>
      </div>
      <div className="gray-green-red-img red-img position-absolute single-text-32">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_444DG1_EX_CLS",
                openLabel: "PH_444DG1_EX_OLS",
              }
            )}`}
            label="PH_444DG1_EX_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "444DG1",
            }}
          />
        </div>
      </div>
      <div className="gray-green-red-img red-img position-absolute single-text-33">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_444DG2_EX_CLS",
                openLabel: "PH_444DG2_EX_OLS",
              }
            )}`}
            label="PH_444DG2_EX_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "444DG2",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-34">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_434SG4_CLS")}`}
          label="PH_434SG4_CLS"
        />
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { closeLabel: "PH_434SG4_CLS", openLabel: "PH_434SG4_OLS" }
              )}`}
              label="PH_434SG4_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "434SG4",
            }}
          />
        </div>
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_434SG4_OLS")}`}
          label="PH_434SG4_OLS"
        />
        <MotorCircleDigitalTag
          className={`square ml-1 digital-tag ${useColorStatus(
            "PH_434DG1_EX_CLS"
          )}`}
          label="PH_434DG1_EX_CLS"
        />
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  closeLabel: "PH_434DG1_EX_CLS",
                  openLabel: "PH_434DG1_EX_OLS",
                }
              )}`}
              label="PH_434DG1_EX_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "434DG1",
            }}
          />
        </div>
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_434DG1_EX_OLS")}`}
          label="PH_434DG1_EX_OLS"
        />
        <BlackContainer
          data={{
            label: "PH_434DG1_ZT",
            useClass: "greenTxt ml-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  closeLabel: "PH_434DG2_EX_CLS",
                  openLabel: "PH_434DG2_EX_OLS",
                }
              )}`}
              label="PH_434DG2_EX_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "434DG2",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_434DG2_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_434DG2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-35">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_434SG5_CLS",
                openLabel: "PH_434SG5_OLS",
              }
            )}`}
            label="PH_434SG5_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "434SG5",
          }}
        />
      </div>
      <div className="position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "444LD1",
          }}
        />
        <div className="dot-square-line d-flex flex-column align-items-center mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_444LD1_EX_CLS",
                openLabel: "PH_444LD1_EX_OLS",
                healthyLabel: "PH_444LD1_PH",
              }
            )}`}
            label="PH_444LD1_EX_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-37">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_444SD3_EX_CLS",
                openLabel: "PH_444SD3_EX_OLS",
                healthyLabel: "PH_444SD3_PH",
              }
            )}`}
            label="PH_444SD3_EX_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "444SD3",
          }}
        />
      </div>
      <div className="d-flex align-items-end position-absolute single-text-38">
        <div className="dot-square-line d-flex flex-column align-items-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
              {
                closeLabel: "PH_464SD1_EX_CLS",
                openLabel: "PH_464SD1_EX_OLS",
                healthyLabel: "PH_464SD1_PH",
              }
            )}`}
            label="PH_464SD1_EX_OLS"
          />
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "464SD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-39">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_444SD2_EX_CLS"
            )}`}
            label="PH_444SD2_EX_CLS"
          />
          <div className="mx-1 dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PH_444SD2_EX_OLS",
                  closeLabel: "PH_444SD2_EX_CLS",
                  healthyLabel: "PH_444SD2_PH",
                }
              )}`}
              label="PH_444SD2_EX_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_444SD2_EX_OLS"
            )}`}
            label="PH_444SD2_EX_OLS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "444SD2",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_444SD1_EX_CLS"
            )}`}
            label="PH_444SD1_EX_CLS"
          />
          <div className="mx-1 dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  closeLabel: "PH_444SD1_EX_CLS",
                  openLabel: "PH_444SD1_EX_OLS",
                  healthyLabel: "PH_444SD1_PH",
                }
              )}`}
              label="PH_444SD1_EX_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_444SD1_EX_OLS"
            )}`}
            label="PH_444SD1_EX_OLS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "444SD1",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-41"
        firstCircle={{
          firstCircleClass: `dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "PH_444CV1_PH", runLabel: "PH_444CV1_RUN" }
          )}`,
          firstCircleLabel: "PH_444CV1_RUN",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark mr-4", label: "444CV1" }}
      />
      <div className="d-flex align-items-center boxContainer p-1 position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "TO WHR SYSTEM",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("PH_WHR_TRIPPED")}`}
          label="PH_WHR_TRIPPED"
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-43",
          label: "FROM 434FV1",
        }}
      />

      <div className="position-absolute single-text-45">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "444PH1",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN1B_PT01",
            useClass: "greenTxt mt-01",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN1B_TT01",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-46">
        <BlackContainer
          data={{
            label: "PH_444PH1_CN1A_PT01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN1A_TT01",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-47">
        <BlackContainer
          data={{
            label: "PH_444PH1_CN1B_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN1B_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-48">
        <BlackContainer
          data={{
            label: "PH_444PH1_CN2_PT01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN2_TT01",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-49">
        <BlackContainer
          data={{
            label: "PH_444PH1_CN2_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN2_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-50">
        <BlackContainer
          data={{
            label: "PH_444PH1_CN4_PT01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN4_TT01",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-51">
        <div className="d-flex justify-content-between">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_444PH1_CN4_FS")}`}
            label="PH_444PH1_CN4_FS"
            text="F"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_444PH1_CN4_LS")}`}
            label="PH_444PH1_CN4_LS"
            text="L"
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_444PH1_CN4_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN4_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-52">
        <div className="d-flex justify-content-between">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_444PH1_CN6_FS")}`}
            label="PH_444PH1_CN6_FS"
            text="F"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_444PH1_CN6_LS")}`}
            label="PH_444PH1_CN6_LS"
            text="L"
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_444PH1_CN6_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN6_PT03",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN6_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-53">
        <BlackContainer
          data={{
            label: "PH_444PH1_CN1A_PT02",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN1A_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-55">
        <BlackContainer
          data={{
            label: "PH_444PH1_CN3_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN3_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-56">
        <div className="d-flex justify-content-between">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_444PH1_CN5_FS")}`}
            label="PH_444PH1_CN5_FS"
            text="F"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_444PH1_CN5_LS")}`}
            label="PH_444PH1_CN5_LS"
            text="L"
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_444PH1_CN5_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN5_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN5_PT03",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-57">
        <BlackContainer
          data={{
            label: "PH_444DG1_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444DG1_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-58">
        <BlackContainer
          data={{
            label: "PH_444DG1_PT01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_464KL1_TT2",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-59">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "444PH2",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN1B_PT01",
            useClass: "greenTxt mt-01",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN1B_TT01",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-60">
        <BlackContainer
          data={{
            label: "PH_444PH2_CN1B_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN1B_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-61">
        <BlackContainer
          data={{
            label: "PH_444PH2_CN3_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN3_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-63">
        <div className="d-flex justify-content-between">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_444PH2_CN5_FS")}`}
            label="PH_444PH2_CN5_FS"
            text="F"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_444PH2_CN5_LS")}`}
            label="PH_444PH2_CN5_LS"
            text="L"
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_444PH2_CN5_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN5_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-65">
        <BlackContainer
          data={{
            label: "PH_444DG2_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444DG2_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-66">
        <BlackContainer
          data={{
            label: "PH_444DG2_PT01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444DG2_TT01",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-67">
        <div className="d-flex justify-content-between">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_444PH2_CN6_FS")}`}
            label="PH_444PH2_CN6_FS"
            text="F"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_444PH2_CN6_LS")}`}
            label="PH_444PH2_CN6_LS"
            text="L"
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_444PH2_CN6_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN6_PT03",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN6_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-68">
        <div className="d-flex justify-content-between">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_444PH2_CN4_FS")}`}
            text="F"
            label="PH_444PH2_CN4_FS"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_444PH2_CN4_LS")}`}
            text="L"
            label="PH_444PH2_CN4_LS"
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_444PH2_CN4_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN4_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-69">
        <BlackContainer
          data={{
            label: "PH_444PH2_CN4_PT01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN4_TT01",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-70">
        <BlackContainer
          data={{
            label: "PH_444PH2_CN2_PT01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN2_TT01",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-71">
        <BlackContainer
          data={{
            label: "PH_444PH2_CN2_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN2_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="boxContainer position-absolute p-1 text-center single-text-73">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light px-1",
            label: "PC1 ANALYZER",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "454AM1_CO",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_454AM1_CO",
              useClass: "greenTxt ml-1",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "454AM1_O2",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_454AM1_O2",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "454AM1_NOX",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_454AM1_NOX",
              useClass: "greenTxt ml-1",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer position-absolute p-1 text-center single-text-75">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light px-1",
            label: "PC2 ANALYZER",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "454AM2_CO",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_454AM2_CO",
              useClass: "greenTxt ml-1",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "454AM2_O2",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_454AM2_O2",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "454AM2_NOX",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_454AM2_NOX",
              useClass: "greenTxt ml-1",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-80",
          label: "TO BLENDING SILO",
        }}
      />

      <div className="position-absolute single-text-82">
        <BlackContainer
          data={{
            label: "KL_464DU1_PT2",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_464DU1_TT2",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark text-center position-absolute single-text-87",
          label: "TO HOT DUSTBIN FEED ELEVATOR",
        }}
      />

      <div className="boxContainer position-absolute p-3 text-center single-text-88">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "424FN1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot ml-auto digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "PH_424FN1_RTS", runLabel: "PH_424FN1_RUN" }
          )}`}
          label="PH_424FN1_RUN"
          text="M"
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SP",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_424FN1_PID",
              useClass: "greenTxt ml-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer position-absolute p-3 text-center single-text-89">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "434BE1",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_434BE1_II_DIFF",
            useClass: "greenTxt my-1",
            unit: "T",
            unitColor: "unitColor",
          }}
        />

        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "PH_434BE1_PH", runLabel: "PH_434BE1_RUN" }
          )}`}
          label="PH_434BE1_RUN"
        />
      </div>
      <div className="position-absolute single-text-91">
        <BlackContainer
          data={{
            label: "PH_444FN1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "PH_444FN1_JI",
            useClass: "greenTxt mt-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-96">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus(
            "KL_464MD1_2_RUN"
          )} `}
          label="KL_464MD1_2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "464MD1",
          }}
        />

      </div>


      <div className="position-absolute single-text-100">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV1_OLS", closeLabel: "KL_484BV1_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV1_OLS", closeLabel: "KL_484BV1_CLS" }
          )} d-block`}
          label="KL_484BV1_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "484BV1",
          }}
        />
      </div>
      <div className="position-absolute single-text-101">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV2_OLS", closeLabel: "KL_484BV2_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV2_OLS", closeLabel: "KL_484BV2_CLS" }
          )} d-block`}
          label="KL_484BV2_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "484BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-102">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV4_OLS", closeLabel: "KL_484BV4_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV4_OLS", closeLabel: "KL_484BV4_CLS" }
          )} d-block`}
          label="KL_484BV4_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "484BV4",
          }}
        />
      </div>
      <div className="position-absolute single-text-103">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV3_OLS", closeLabel: "KL_484BV3_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV3_OLS", closeLabel: "KL_484BV3_CLS" }
          )} d-block`}
          label="KL_484BV3_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "484BV3",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-104">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "484BV5",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV5_OLS", closeLabel: "KL_484BV5_CLS" }
          )} d-block`}
          secondCaretClass={`fa-solid fa-caret-left digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV5_OLS", closeLabel: "KL_484BV5_CLS" }
          )} d-block`}
          label="KL_484BV5_OLS"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-105",
          label: "TO COAL MILL",
        }}
      />

      <div className="position-absolute single-text-106">
        <BlackContainer
          data={{
            label: "PH_444PH2_CN1A_PT02",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN1A_TT02",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="img-107 d-flex align-items-center pt-3 pl-3 position-absolute single-text-107">
        <div className="ml-2">
          <BlackContainer
            data={{
              label: "KL_464KL1_TT1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464KL1_TT2",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464KL1_PT1",
              useClass: "greenTxt mt-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light ml-1",
            label: "INLET AIR BLASTER",
          }}
        />

        <BlackContainer
          data={{
            label: "KL_464MD1_SP_PID",
            useClass: "greenTxt ml-5",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="lightBox position-absolute single-text-108"></div>
      <div className="d-flex position-absolute single-text-109">
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_444CP1_RUN")}`}
            label="PH_444CP1_RUN"
            text="M"
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
            className={`dot digital-tag ${useColorStatus("PH_444CP2_RUN")}`}
            label="PH_444CP2_RUN"
            text="M"
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
            className={`dot digital-tag ${useColorStatus("PH_444CP3_RUN")}`}
            label="PH_444CP3_RUN"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-2",
              label: "CP3",
            }}
          />
        </div>
      </div>
      <div className="boxContainer d-flex position-absolute p-3 text-center single-text-110">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CL_474RC1_RUN",
              healthyLabel: "CL_474RC1_PH",
            }
          )}`}
          label="CL_474RC1_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CL_474RC2_RUN",
              healthyLabel: "CL_474RC2_PH",
            }
          )}`}
          label="CL_474RC2_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CL_474RC3_RUN",
              healthyLabel: "CL_474RC3_PH",
            }
          )}`}
          label="CL_474RC3_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CL_474RC4_RUN",
              healthyLabel: "CL_474RC4_PH",
            }
          )}`}
          label="CL_474RC4_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CL_474RC5_RUN",
              healthyLabel: "CL_474RC5_PH",
            }
          )}`}
          label="CL_474RC5_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "CL_474RC6_RUN",
              healthyLabel: "CL_474RC6_PH",
            }
          )}`}
          label="CL_474RC6_RUN"
          text="M"
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-111"
        secondCircle={{
          secondCircleClass: `dot ml-auto p-3  digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "CL_494DB1_PH", runLabel: "CL_494DB1_RUN" }
          )}`,
          secondCircleLabel: "CL_494DB1_RUN",
        }}
      />
      <BlackContainer
        data={{
          label: "BH_FAN_RST_TIME",
          useClass: "greenTxt position-absolute single-text-114",
          unit: "s",
          unitColor: "unitColor",
        }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light px-1 position-absolute single-text-121",
          label: "Kiln trip Timer",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light px-1 position-absolute single-text-122",
          label: "Rise Air Blaster",
        }}
      />
      <div className="position-absolute single-text-123">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_434RA2"
          )}`}
          label="PH_434RA2"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_434RA3"
          )}`}
          label="PH_434RA3_RUN"
        />
      </div>
      <div className="position-absolute single-text-124">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_434RA4"
          )}`}
          label="PH_434RA4_RUN"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "PH_434RA5"
          )}`}
          label="PH_434RA5_RUN"
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

      <div className="position-absolute single-text-131">
        <BlackContainer
          data={{
            label: "PH_444LD1_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444LD1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444SD3_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444SD3",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-132">
        <BlackContainer
          data={{
            label: "PH_434BE1_MT1_JI",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "PH_434BE1_MT2_JI",
            useClass: "greenTxt mt-1",
            unit: "T",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_394SB1_LT",
            useClass: "greenTxt mt-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "PH_444LD1_EX_OLS"
        )} position-absolute single-text-133`}
        label="PH_444LD1_EX_OLS"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "PH_444LD1_EX_CLS"
        )} position-absolute single-text-134`}
        label="PH_444LD1_EX_CLS"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "PH_444SD3_EX_OLS"
        )} position-absolute single-text-135`}
        label="PH_444SD3_EX_OLS"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "PH_444SD3_EX_CLS"
        )} position-absolute single-text-136`}
        label="PH_444SD3_EX_CLS"
      />
      <div className="d-flex position-absolute single-text-137">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SP",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444FN1_PID",
            useClass: "greenTxt ml-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-right position-absolute single-text-138">
        <BlackContainer
          data={{
            label: "PH_444FN1_PT01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "PH_444FN1_TT01",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_FAN_RST_TIME",
            useClass: "greenTxt mt-2",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444FN1_PT02",
            useClass: "greenTxt mt-3",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-139">
        <BlackContainer
          data={{
            label: "PH_444PH1_CN6_PT01",
            useClass: "greenTxt ml-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "PH_444PH1_CN6_TT01",
            useClass: "greenTxt mt-1 ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN6_LT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-140">
        <BlackContainer
          data={{
            label: "PH_444PH1_CN5_LT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_454PR1_PT2",
            useClass: "greenTxt mt-3",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_454PR1_TT5",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444DG1",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444DG1",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-141">
        <BlackContainer
          data={{
            label: "PH_444PH1_CN5_PT01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN5_TT01",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "PH_444PH1_CN4_LT",
          useClass: "greenTxt position-absolute single-text-142",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-143">
        <BlackContainer
          data={{
            label: "PH_444PH2_CN1A_PT01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN1A_TT01",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-144">
        <BlackContainer
          data={{
            label: "PH_444PH2_CN3_PT01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN3_TT01",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "PH_434BI1_WI",
          useClass: "greenTxt position-absolute single-text-145",
          unit: "T",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PH_444PH2_CN4_LT",
          useClass: "greenTxt position-absolute single-text-146",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-147">
        <BlackContainer
          data={{
            label: "PH_454PR1_PT1",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_454PR1_TT1",
            useClass: "greenTxt mt-01",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN5_PT01",
            useClass: "greenTxt mt-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN5_TT01",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-148">
        <BlackContainer
          data={{
            label: "PH_444PH2_CN5_LT",
            useClass: "greenTxt mr-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("PH_444PH2_CN5_PH")}`}
          label="PH_444PH2_CN5_PH"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-149">
        <BlackContainer
          data={{
            label: "PH_454PR1_PT3",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_454PR1_TT6",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />

        <div className="mt-2 ml-3">
          <MotorCircleDigitalTag
            className={`square digital-tag ml-auto ${useColorStatus(
              "PH_444DG2_EX_CLS"
            )}`}
            label="PH_444DG2_EX_CLS"
          />
          <BlackContainer
            data={{
              label: "PH_444DG2",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-150">
        <BlackContainer
          data={{
            label: "PH_444PH2_CN6_PT01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "PH_444PH2_CN6_TT01",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH2_CN6_LT",
            useClass: "greenTxt mt-1 ml-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-151">
        <MotorCircleDigitalTag
          className={`dot  digital-tag ${useColorStatus("PH_444PH1_CN6_PH")}`}
          label="PH_444PH1_CN6_PH"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`square ml-2 digital-tag ${useColorStatus(
            "PH_444DG1_EX_CLS"
          )}`}
          label="PH_444DG1_EX_CLS"
        />
      </div>
      <div className="position-absolute single-text-152">
        <BlackContainer
          data={{
            label: "PH_444PH2_CN5_PT03",
            useClass: "greenTxt mb-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex justify-content-between">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "PH_444DG2_EX_OLS"
            )}`}
            label="PH_444DG2_EX_OLS"
          />
          <MotorCircleDigitalTag
            className={`dot ml-auto digital-tag ${useColorStatus(
              "PH_444PH2_CN6_PH"
            )}`}
            label="PH_444PH2_CN6_PH"
            text="P"
          />
        </div>

        <BlackContainer
          data={{
            label: "PH_444DG2",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="boxContainer position-absolute p-1 text-center single-text-153">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light px-1",
            label: "I/L ANALYZER",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "464AM1_CO",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464AM1_CO",
              useClass: "greenTxt ml-1",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "464AM1_O2",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464AM1_O2",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "464AM1_NOX",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464AM1_NOX",
              useClass: "greenTxt ml-1",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer position-absolute p-1 text-center single-text-154">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light px-1",
            label: "O/L ANALYZER",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "444AM1_CO",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_444AM1_CO",
              useClass: "greenTxt ml-1",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "444AM1_O2",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_444AM1_O2",
              useClass: "greenTxt ml-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "444AM1_NOX",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_444AM1_NOX",
              useClass: "greenTxt ml-1",
              unit: "PPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      {/* New Added By TRIDAI as part of mimic developement on 16-01-2026 */}
      <div className="boxContainer position-absolute p-1 text-center single-text-173">
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SHELL_TEMP_16",
            }}
          />
          <BlackContainer
            data={{
              label: "SHELL_TEMP_16",
              useClass: "greenTxt ml-1",
              unit: "deg C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SHELL_TEMP_17",
            }}
          />
          <BlackContainer
            data={{
              label: "SHELL_TEMP_17",
              useClass: "greenTxt ml-1",
              unit: "deg C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CL_BED_HEIGHT",
            }}
          />
          <BlackContainer
            data={{
              label: "CL_BED_HEIGHT",
              useClass: "greenTxt ml-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      {/* New Added By TRIDAI as part of mimic developement on 21-01-2026 */}
      <div className="boxContainer position-absolute p-1 text-center single-text-174">
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WHRS Generation ",
            }}
          />
          <BlackContainer
            data={{
              label: "WHRS_STG_KW",
              useClass: "greenTxt ml-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AQC Boiler DP",
            }}
          />
          <BlackContainer
            data={{
              label: "WHRS_AQC_BOLLER_DP",
              useClass: "greenTxt ml-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer position-absolute p-1 text-center single-text-155">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DQ1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot  ml-auto digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "PH_434DQ1_PH", runLabel: "PH_434DQ1_ON" }
          )}`}
          label="PH_434DQ1_ON"
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PV",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_434DQ1",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "OUT",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_434DQ1",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer position-absolute p-1 text-center single-text-156">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DQ2",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot  ml-auto digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "PH_434DQ2_PH", runLabel: "PH_434DQ2_ON" }
          )}`}
          label="PH_434DQ2_ON"
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PV",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_434DQ2",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "OUT",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_434DQ2",
              useClass: "greenTxt ml-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="boxContainer position-absolute p-1 text-center single-text-157">
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "KLIN FEED BIN",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_434BI1_LS")}`}
            label="PH_434BI1_LS"
            text="L"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "MIXING BIN",
            }}
          />

          <BlackContainer
            data={{
              label: "PH_414BI1_WI",
              useClass: "greenTxt my-1",
              unit: "T",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("PH_414BI1_LS")}`}
            label="PH_414BI1_LS"
            text="L"
          />
        </div>
      </div>
      <div className="boxContainer p-1 text-center position-absolute single-text-158">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "ESP FAN PID",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CL_474FNF_M01")}`}
          label="CL_474FNF_M01"
        />

        <BlackContainer
          data={{
            label: "CL_474FNF_M01",
            useClass: "greenTxt mt-01",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "CL_474FNF_M01",
            useClass: "greenTxt mt-01",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <MotorCircleDigitalTag
        className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          { healthyLabel: "KL_464AD1_M02_PH", runLabel: "KL_464AD1_M02_RUN" }
        )} position-absolute single-text-159`}
        label="KL_464AD1_M02_RUN"
      />
      <MotorCircleDigitalTag
        className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          { healthyLabel: "KL_464AD1_M02_PH", runLabel: "KL_464AD1_M02_RUN" }
        )} position-absolute single-text-160`}
        label="KL_464AD1_M02_RUN"
      />

      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-161">
        <div className="line-circle p-3 grey-color d-flex justify-content-center align-items-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "PH_424FN1_RTS", runLabel: "PH_444FN1_RUN" }
            )}`}
            label="PH_444FN1_RUN"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "444FN1",
          }}
        />
        <div className="yellowline-Vr downArrow position-relative"> </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "TO RAW MILL",
          }}
        />
      </div>
      <div className="position-absolute single-text-162">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "PH_444FN3_PH", runLabel: "PH_444FN3_RUN" }
          )}`}
          label="PH_444FN3_RUN"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "PH_444FN2_PH", runLabel: "PH_444FN2_RUN" }
          )}`}
          label="PH_444FN2_RUN"
          text="M"
        />
      </div>
      <MotorCircleDigitalTag
        className={`square digital-tag ${useColorStatus(
          "PH_444DG1_EX_OLS"
        )} position-absolute single-text-163`}
        label="PH_444DG1_EX_OLS"
      />
      <MotorCircleDigitalTag
        className={`dot digital-tag ${useColorStatus(
          "PH_444PH1_CN4_PH"
        )} position-absolute single-text-164`}
        label="PH_444PH1_CN4_PH"
        text="P"
      />
      <MotorCircleDigitalTag
        className={`dot digital-tag ${useColorStatus(
          "PH_444PH2_CN4_PH"
        )} position-absolute single-text-165`}
        label="PH_444PH2_CN4_PH"
        text="P"
      />
      <MotorCircleDigitalTag
        className={`dot digital-tag ${useColorStatus(
          "PH_444PH1_CN5_PH"
        )} position-absolute single-text-166`}
        label="PH_444PH1_CN5_PH"
        text="P"
      />

      <div className="position-absolute single-text-167">
        <BlackContainer
          data={{
            label: "PH_ESTIMATED_CLINKER",
            useClass: "greenTxt",
            unit: "TONS",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_CLINKER_PRD",
            useClass: "greenTxt mt-01",
            unit: "TPD",
            unitColor: "unitColor",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-secondary p-2 mt-1",
            label: "Kiln Feed",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light px-1 mt-1",
            label: "Preheater Air Blaster",
          }}
        />
      </div>
      <div className="position-absolute single-text-168">
        <BlackContainer
          data={{
            label: "PH_444SD1_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444SD1",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-169">
        <BlackContainer
          data={{
            label: "PH_444SD2_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444SD2",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "PH_434DG1",
          useClass: "greenTxt position-absolute single-text-170",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-171">
        <BlackContainer
          data={{
            label: "PH_444PH1_CN3_PT01",
            useClass: "greenTxt",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_444PH1_CN3_TT01",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-172",
          label: "474RC1-6",
        }}
      />


    </div>
  );
};

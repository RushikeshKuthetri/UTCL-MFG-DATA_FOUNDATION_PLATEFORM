import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../index";

import * as tagsData from "../../../../data/Kotputli/kilnmainpage/kotputliKilnMainPageTextcolumn";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
  useImgColorStatusForNewPlantScreen,
  useGateTagsColorStatusForNewPlantScreens,
  useImgGateColorStatusForNewPlantScreen,
} from "../../../../utils";

export const BlendingSiloKukurdih = () => {
  return (
    <div className="BlendingSiloKukurdih w-100 h-100 position-relative">
      <div className="dashedHr-Pipe position-absolute pipe-1"></div>
      <div className="dashedHr-Pipe position-absolute pipe-2"></div>
      <div className="dashedHr-Pipe position-absolute pipe-3"></div>
      <div className="dashedHr-Pipe position-absolute pipe-4"></div>
      <div className="dashedHr-Pipe position-absolute pipe-5"></div>
      <div className="dashedHr-Pipe position-absolute pipe-6"></div>
      <div className="pipe dotted-pipe position-absolute pipe-7"></div>
      <div className="pipe dotted-pipe position-absolute pipe-8"></div>
      <div className="dashedHr-Pipe position-absolute pipe-9"></div>
      <div className="dashedHr-Pipe position-absolute pipe-10"></div>
      <div className="dashedHr-Pipe position-absolute pipe-11"></div>
      <div className="dashedHr-Pipe position-absolute pipe-12"></div>
      <div className="dashedHr-Pipe position-absolute pipe-13"></div>
      <div className="dashedHr-Pipe position-absolute pipe-14"></div>
      <div className="dashedHr-Pipe position-absolute pipe-15"></div>
      <div className="dashedHr-Pipe position-absolute pipe-16"></div>
      <div className="dashedHr-Pipe position-absolute pipe-17"></div>
      <div className="dashedHr-Pipe position-absolute pipe-18"></div>
      <div className="dashedHr-Pipe position-absolute pipe-19"></div>
      <div className="dashedHr-Pipe position-absolute pipe-20"></div>
      <div className="dashedHr-Pipe position-absolute pipe-21"></div>
      <div className="dashedHr-Pipe position-absolute pipe-22"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-23"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-24"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-25"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-26"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-27"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-28"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-29"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-30"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-31"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-32"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-33"></div>
      <div class="yellowline-Vr position-absolute pipe-34"></div>
      <div class="yellowline-Hr position-absolute pipe-35"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-36"></div>
      <div class="yellowline-Vr upArrow  position-absolute pipe-37"></div>
      <div class="yellowline-Vr upArrow  position-absolute pipe-38"></div>
      <div class="yellowline-Hr position-absolute pipe-39"></div>
      <div class="yellowline-Hr position-absolute pipe-40"></div>
      <div class="yellowline-Vr position-absolute pipe-41"></div>
      <div class="yellowline-Vr position-absolute pipe-42"></div>
      <div class="yellowline-Hr position-absolute pipe-43"></div>
      <div class="yellowline-Vr position-absolute pipe-44"></div>
      <div class="yellowline-Vr position-absolute pipe-45"></div>
      <div class="yellowline-Vr position-absolute pipe-46"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-47"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-48"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-49"></div>
      <div class="yellowline-Hr position-absolute pipe-50"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-51"></div>
      <div class="yellowline-Hr leftarrow position-absolute pipe-52"></div>
      <div class="yellowline-Vr position-absolute pipe-53"></div>
      <div class="yellowline-Hr position-absolute pipe-54"></div>
      <div class="yellowline-Vr position-absolute pipe-55"></div>
      <div class="yellowline-Vr position-absolute pipe-56"></div>
      <div class="yellowline-Hr position-absolute pipe-57"></div>
      <div class="yellowline-Vr position-absolute pipe-58"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-59"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-60"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-61"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-62"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-63"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-64"></div>
      <div class="yellowline-Vr upArrow  position-absolute pipe-65"></div>
      <div class="yellowline-Vr position-absolute pipe-66"></div>
      <div class="yellowline-Hr position-absolute pipe-67"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-68"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-69"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-70"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-71"></div>
      <div class="yellowline-Hr leftarrow position-absolute pipe-72"></div>
      <div class="yellowline-Hr leftarrow position-absolute pipe-73"></div>
      <div class="yellowline-Vr position-absolute pipe-74"></div>
      <div class="yellowline-Vr position-absolute pipe-75"></div>
      <div class="yellowline-Hr position-absolute pipe-76"></div>
      <div class="yellowline-Vr upArrow position-absolute pipe-77"></div>
      <div class="yellowline-Vr upArrow position-absolute pipe-78"></div>
      <div class="yellowline-Vr upArrow position-absolute pipe-79"></div>
      <div class="yellowline-Hr position-absolute pipe-80"></div>
      <div class="yellowline-Vr upArrow position-absolute pipe-81"></div>
      <div class="yellowline-Hr position-absolute pipe-82"></div>
      <div class="yellowline-Vr position-absolute pipe-83"></div>
      <div class="yellowline-Vr position-absolute pipe-84"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-85"></div>
      <div class="yellowline-Vr position-absolute pipe-86"></div>
      <div class="yellowline-Hr position-absolute pipe-87"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-88"></div>
      <div class="yellowline-Vr upArrow position-absolute pipe-89"></div>
      <div class="yellowline-Vr position-absolute pipe-90"></div>
      <div class="yellowline-Hr position-absolute pipe-91"></div>
      <div class="yellowline-Vr position-absolute pipe-92"></div>
      <div class="yellowline-Hr position-absolute pipe-93"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-94"></div>
      <div class="yellowline-Vr position-absolute pipe-95"></div>
      <div class="yellowline-Hr position-absolute pipe-96"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-97"></div>
      <div class="yellowline-Vr position-absolute pipe-98"></div>
      <div class="yellowline-Vr position-absolute pipe-99"></div>
      <div class="yellowline-Vr upArrow position-absolute pipe-100"></div>
      <div class="yellowline-Hr position-absolute pipe-101"></div>
      <div class="yellowline-Vr upArrow position-absolute pipe-102"></div>
      <div class="yellowline-Hr position-absolute pipe-103"></div>
      <div class="yellowline-Vr position-absolute pipe-104"></div>
      <div class="yellowline-Vr position-absolute pipe-105"></div>
      <div class="yellowline-Vr position-absolute pipe-106"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-107"></div>
      <div class="yellowline-Hr position-absolute pipe-108"></div>
      <div class="yellowline-Hr position-absolute pipe-109"></div>
      <div class="yellowline-Vr position-absolute pipe-110"></div>
      <div class="yellowline-Hr position-absolute pipe-111"></div>
      <div class="yellowline-Vr position-absolute pipe-112"></div>
      <div class="yellowline-Hr position-absolute pipe-113"></div>
      <div class="yellowline-Vr upArrow position-absolute pipe-114"></div>
      <div class="yellowline-Vr upArrow position-absolute pipe-115"></div>
      <div class="yellowline-Vr upArrow position-absolute pipe-116"></div>
      <div class="yellowline-Hr position-absolute pipe-117"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-118"></div>
      <div class="yellowline-Hr position-absolute pipe-119"></div>
      <div class="yellowline-Hr position-absolute pipe-120"></div>
      <div class="yellowline-Hr position-absolute pipe-121"></div>
      <div class="yellowline-Vr position-absolute pipe-122"></div>
      <div class="yellowline-Vr position-absolute pipe-123"></div>
      <div class="yellowline-Vr position-absolute pipe-124"></div>
      <div class="yellowline-Vr upArrow position-absolute pipe-125"></div>
      <div class="yellowline-Hr position-absolute pipe-126"></div>
      <div class="yellowline-Hr position-absolute pipe-127"></div>
      <div class="yellowline-Hr position-absolute pipe-128"></div>
      <div class="yellowline-Hr position-absolute pipe-129"></div>
      <div class="yellowline-Vr position-absolute pipe-130"></div>
      <div class="yellowline-Hr position-absolute pipe-131"></div>

      <div className="position-absolute single-text-1 d-flex">
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "391BF4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-primary",
              label: "BYPASS",
            }}
          />

          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center squareplustri">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                label="NA"
              />
            </div>
            <div>
              <div className="img-97 d-flex justify-content-center align-items-end mt-3">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                    {
                      runLabel: "PH_391FNL_RUN",
                      healthyLabel: "PH_391FNL_PH",
                    }
                  )}`}
                  label="PH_391FNL_RUN"
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-3",
                  label: "391FNL",
                }}
              />
            </div>
          </div>
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "411BF1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-primary",
              label: "BYPASS",
            }}
          />

          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center squareplustri">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                label="NA"
              />
            </div>
            <div>
              <div className="img-97 d-flex justify-content-center align-items-end mt-3">
                <div className="yellowline-Vr upArrow position-absolute"></div>
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                    {
                      runLabel: "PH_411FN7_RUN",
                      healthyLabel: "PH_411FN7_PH",
                    }
                  )}`}
                  label="PH_411FN7_RUN"
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-3",
                  label: "411FN7",
                }}
              />
            </div>
          </div>
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "411BF2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-primary",
              label: "BYPASS",
            }}
          />

          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center squareplustri">
              <MotorCircleDigitalTag
                className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "NA", healthyLabel: "NA" }
                )}`}
                label="NA"
              />
            </div>
            <div>
              <div className="img-97 d-flex justify-content-center align-items-end mt-3">
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                    {
                      runLabel: "PH_411FN8_RUN",
                      healthyLabel: "PH_411FN8_PH",
                    }
                  )}`}
                  label="PH_411FN8_RUN"
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1 ml-3",
                  label: "411FN8",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "431BF1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "BYPASS",
          }}
        />

        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "NA", healthyLabel: "NA" }
              )}`}
              label="NA"
            />
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PH_431FN6_RUN", healthyLabel: "PH_431FN6_PH" }
                )}`}
                label="PH_431FN6_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "431FN6",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "RM1_361RP1_BIN_BIW",
                useClass: "greenTxt",
                unit: "mmwc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "RM1_361RP1_BIN_BIW",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "411BF3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "BYPASS",
          }}
        />

        <div className="d-flex justify-content-center align-items-center gap">
          <div className="d-flex justify-content-center align-items-center squareplustri">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "NA", healthyLabel: "NA" }
              )}`}
              label="NA"
            />
          </div>
          <div>
            <div className="img-97 d-flex justify-content-center align-items-end mt-3">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PH_411FNB_RUN", healthyLabel: "PH_411FN_PH" }
                )}`}
                label="PH_411FNB_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "411FNB",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "PH_431BF1_DPT",
                useClass: "greenTxt",
                unit: "mmwc",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "PH_431BF1_PT",
                useClass: "greenTxt mt-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_431BE1_TS1"
              )}`}
              label="PH_431BE1_TS1"
              text="TS1"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_431BE1_TS2"
              )} mt-1`}
              label="PH_431BE1_TS2"
              text="TS2"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_431BE1_ZS1"
              )} mt-1`}
              label="PH_431BE1_ZS1"
              text="ZS1"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_431BE1_ZS2"
              )} mt-1`}
              label="PH_431BE1_ZS2"
              text="ZS2"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <div className="triangle-with-squares text-center d-flex flex-column gap align-items-center">
          <div className="d-flex  align-items-center p-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "PH_431BI1_LS"
              )} mt-1`}
              label="PH_431BI1_LS"
              text="L"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "MIXING BIN",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "431BI",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_431DQ1_BN_WT",
              useClass: "greenTxt ",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                { openLabel: "NA", closeLabel: "NA" }
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                { openLabel: "NA", closeLabel: "NA" }
              )}`}
              label="NA"
            />
            <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                { openLabel: "NA", closeLabel: "NA" }
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                { openLabel: "NA", closeLabel: "NA" }
              )}`}
              label="NA"
            />
            <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                { openLabel: "NA", closeLabel: "NA" }
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                { openLabel: "NA", closeLabel: "NA" }
              )}`}
              label="NA"
            />
            <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                { openLabel: "NA", closeLabel: "NA" }
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
                { openLabel: "NA", closeLabel: "NA" }
              )}`}
              label="NA"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-5">
        <div className="triangle-with-squares text-center ">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "COLLECTION BIN",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "PH_411BI1_WI",
              useClass: "greenTxt mt-1",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "PH_411BI1_LS1"
            )} mt-1`}
            label="PH_411BI1_LS1"
          />
        </div>
      </div>
      <div className="position-absolute single-text-6">
        <div className="d-flex justify-content-center pipeVr">
          <div className="trapezoid"></div>
        </div>
        <div className="d-flex">
          <div className="pipeHr"></div>
          <div className="pipeHr gap"></div>
        </div>
      </div>
      <div className="position-absolute single-text-7 d-flex flex-column">
        <div className="d-flex align-items-center">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG5",
              }}
            />
            <div className="dot-square-line d-flex flex-column align-items-center ml-1">
              <MotorCircleDigitalTag
                className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411SG5_OLS",
                    closeLabel: "PH_411SG5_CLS",
                  }
                )} `}
                label="PH_411SG5_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex ml-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411CG5_EX_OLS",
                    closeLabel: "PH_411CG5_EX_CLS",
                    healthyLabel: "PH_411CG5_PH",
                  }
                )}`}
                label="PH_411CG5_EX_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-1",
                label: "CG5",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG4",
              }}
            />
            <div className="dot-square-line d-flex flex-column align-items-center ml-1">
              <MotorCircleDigitalTag
                className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411SG4_OLS",
                    closeLabel: "PH_411SG4_CLS",
                  }
                )} `}
                label="PH_411SG4_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex ml-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411CG4_EX_OLS",
                    closeLabel: "PH_411CG4_EX_CLS",
                    healthyLabel: "PH_411CG4_PH",
                  }
                )}`}
                label="PH_411CG4_EX_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-1",
                label: "CG4",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG3",
              }}
            />
            <div className="dot-square-line d-flex flex-column align-items-center ml-1">
              <MotorCircleDigitalTag
                className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411SG3_OLS",
                    closeLabel: "PH_411SG3_CLS",
                  }
                )} `}
                label="PH_411SG3_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex ml-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411CG3_EX_OLS",
                    closeLabel: "PH_411CG3_EX_CLS",
                    healthyLabel: "PH_411CG3_PH",
                  }
                )}`}
                label="PH_411CG3_EX_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-1",
                label: "CG3",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG2",
              }}
            />
            <div className="dot-square-line d-flex flex-column align-items-center ml-1">
              <MotorCircleDigitalTag
                className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411SG2_OLS",
                    closeLabel: "PH_411SG2_CLS",
                  }
                )} `}
                label="PH_411SG2_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex ml-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411CG2_EX_OLS",
                    closeLabel: "PH_411CG2_EX_CLS",
                    healthyLabel: "PH_411CG2_PH",
                  }
                )}`}
                label="PH_411CG2_EX_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-1",
                label: "CG2",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SG1",
              }}
            />
            <div className="dot-square-line d-flex flex-column align-items-center ml-1">
              <MotorCircleDigitalTag
                className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411SG1_OLS",
                    closeLabel: "PH_411SG1_CLS",
                  }
                )} `}
                label="PH_411SG1_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex ml-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411CG1_EX_OLS",
                    closeLabel: "PH_411CG1_EX_CLS",
                    healthyLabel: "PH_411CG1_PH",
                  }
                )}`}
                label="PH_411CG1_EX_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-1",
                label: "CG1",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex flex-column">
        <div className="d-flex align-items-center">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG6",
              }}
            />
            <div className="dot-square-line d-flex flex-column align-items-center ml-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411CG6_EX_OLS",
                    closeLabel: "PH_411CG6_EX_CLS",
                    healthyLabel: "PH_411CG6_PH",
                  }
                )} `}
                label="PH_411CG6_EX_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex ml-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411SG6_OLS",
                    closeLabel: "PH_411SG6_CLS",
                  }
                )}`}
                label="PH_411SG6_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-1",
                label: "SG6",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG7",
              }}
            />
            <div className="dot-square-line d-flex flex-column align-items-center ml-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411CG7_EX_OLS",
                    closeLabel: "PH_411CG7_EX_CLS",
                    healthyLabel: "PH_411CG7_PH",
                  }
                )}`}
                label="PH_411CG7_EX_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex ml-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411SG7_OLS",
                    closeLabel: "PH_411SG7_CLS",
                  }
                )}`}
                label="PH_411SG7_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-1",
                label: "SG7",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG8",
              }}
            />
            <div className="dot-square-line d-flex flex-column align-items-center ml-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411CG8_EX_OLS",
                    closeLabel: "PH_411CG8_EX_CLS",
                    healthyLabel: "PH_411CG8_PH",
                  }
                )}`}
                label="PH_411CG8_EX_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex ml-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411SG8_OLS",
                    closeLabel: "PH_411SG8_CLS",
                  }
                )}`}
                label="PH_411SG8_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-1",
                label: "SG8",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CG9",
              }}
            />
            <div className="dot-square-line d-flex flex-column align-items-center ml-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411CG9_EX_OLS",
                    closeLabel: "PH_411CG9_EX_CLS",
                    healthyLabel: "PH_411CG9_PH",
                  }
                )}`}
                label="PH_411CG9_EX_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex ml-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411SG9_OLS",
                    closeLabel: "PH_411SG9_CLS",
                  }
                )}`}
                label="PH_411SG9_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-1",
                label: "SG9",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-9 d-flex">
        <div>
      <MotorCircleDigitalTag
            className={`gray-green-red-img digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen({
              openLabel: "PH_431DG1_EX_OLS",
              closeLabel: "PH_431DG1_EX_CLS",
              healthyLabel: "PH_431DG1_PH",
            })}`}
            label="PH_431DG1_EX_OLS"
          />
          </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "431DG1",
          }}
        />
      </div>
      <div>
      <MotorCircleDigitalTag
            className={`gray-green-red-img single-text-10 digital-tag position-absolute ${useImgGateColorStatusForNewPlantScreen({
              openLabel: "PH_431DG3_EX_OLS",
              closeLabel: "PH_431DG3_EX_CLS",
              healthyLabel: "PH_431DG3_PH",
            })}`}
            label="PH_431DG3_EX_OLS"
          />
          </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431FN3_RUN", healthyLabel: "PH_431FN3_PH" }
            )}`}
            label="PH_431FN3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "431FN3",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431FN5_RUN", healthyLabel: "PH_431FN5_PH" }
            )}`}
            label="PH_431FN5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "431FN5",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431FN4_RUN", healthyLabel: "PH_431FN4_PH" }
            )}`}
            label="PH_431FN4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "431FN4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div>
          <div className="d-flex align-items-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "431RA2",
              }}
            />
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "PH_431RA2"
              )} ml-1`}
              label="PH_431RA2_RUN"
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "431RA3",
              }}
            />
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "PH_431RA3"
              )} ml-1`}
              label="PH_431RA3_RUN"
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "431SG7",
              }}
            />
            <div className="dot-square-line d-flex flex-column align-items-center deg">
              <MotorCircleDigitalTag
                className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_431SG7_OLS",
                    closeLabel: "PH_431SG7_CLS",
                  }
                )} `}
                label="PH_431SG7_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "PH_431RA4"
              )} ml-1`}
              label="PH_431RA4_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "431RA4",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "PH_431RA5"
              )} ml-1`}
              label="PH_431RA5_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "431RA5",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <div className="dot-square-line d-flex flex-column align-items-center deg">
              <MotorCircleDigitalTag
                className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_431SG8_OLS",
                    closeLabel: "PH_431SG8_CLS",
                  }
                )} `}
                label="PH_431SG8_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark t",
                label: "431SG8",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "431SG6",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center deg">
            <MotorCircleDigitalTag
              className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PH_431SG6_OLS",
                  closeLabel: "PH_431SG6_CLS",
                }
              )} `}
              label="PH_431SG6_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "431RA1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431RA1_RUN", healthyLabel: "PH_431RA1_PH" }
            )}`}
            label="PH_431RA1_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_431BV5_OLS", closeLabel: "PH_431BV5_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_431BV5_OLS", closeLabel: "PH_431BV5_CLS" }
            )}`}
            label="PH_431BV5_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BV5",
            }}
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_431BV6_OLS", closeLabel: "PH_431BV6_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_431BV6_OLS", closeLabel: "PH_431BV6_CLS" }
            )}`}
            label="PH_431BV6_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BV6",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BV3",
            }}
          />
          <MimicCaret
            parentClass="d-flex tringle-item ml-1"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_431BV3_OLS", closeLabel: "PH_431BV3_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_431BV3_OLS", closeLabel: "PH_431BV3_CLS" }
            )}`}
            label="PH_431BV3_OLS"
          />
        </div>
        <div className="d-flex align-items-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_431BV4_OLS", closeLabel: "PH_431BV4_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_431BV4_OLS", closeLabel: "PH_431BV4_CLS" }
            )}`}
            label="PH_431BV4_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BV4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 ">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "RM1_361BE1_ZS1"
          )}`}
          label="RM1_361BE1_ZS1"
          text="ZSS"
        />
        <BlackContainer
          data={{
            label: "PH_431RA1_SP",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_431DG1_ZT",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "PH_391BF4_DPT",
              useClass: "greenTxt",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_391BF4_PT",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_411BF1_DPT",
              useClass: "greenTxt",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_411BF1_PT",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_411BF2_DPT",
              useClass: "greenTxt",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_411BF2_PT",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "PH_431BE1_ITA_M1",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_431BE1_ITA_M2",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <div className=" ">
          <div className="d-flex align-items-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "RA8",
              }}
            />
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "PH_391RA8"
              )} ml-1`}
              label="PH_391RA8_RUN"
            />
          </div>
          <div className="text-center mt">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "To 391SB1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "SILO",
              }}
            />
          </div>
        </div>
        <div className=" ">
          <div className="d-flex align-items-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "RA1",
              }}
            />
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "PH_411RA1"
              )} ml-1`}
              label="PH_411RA1_RUN"
            />
          </div>
          <div className="text-center mt">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "To 411BI1",
              }}
            />
          </div>
        </div>
        <div className=" ">
          <div className="d-flex align-items-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "RA2",
              }}
            />
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                "PH_411RA2"
              )} ml-1`}
              label="PH_411RA2_RUN"
            />
          </div>
          <div className="text-center mt">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "411ASC",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "PH_431SG4_TT1",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_431DG2_PID",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_431SG4_TT1",
              useClass: "greenTxt mt-4",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-20 d-flex align-items-center">
        <div>
          <BlackContainer
            data={{
              label: "PH_431DG2_ZT",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_431DG3_SP_ENTRY",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_431DG2_SP_ENTRY",
              useClass: "greenTxt mt-4",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "PH_431DG3_ZT",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TO 431AS5",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex ">
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "PH_411BE1_BSS3_ALM"
            )}`}
            label="PH_411BE1_BSS3_ALM"
            text="BSS3A"
          />
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("NA")}`}
              label="NA"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_411BE1_BSS3"
              )} mt-1`}
              label="PH_411BE1_BSS3"
              text="BSS3"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_411BE1_TS1"
              )} mt-1`}
              label="PH_411BE1_TS1"
              text="TS1"
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_411BE1_ZSS"
              )}`}
              label="PH_411BE1_ZSS"
              text="ZSS1"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_411BE1_BSS4"
              )} mt-1`}
              label="PH_411BE1_BSS4"
              text="BSS4"
            />
          </div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "PH_411BE1_BSS4_ALM"
            )} ml-2`}
            label="PH_411BE1_BSS4_ALM"
            text="BSS4A"
          />
        </div>
      </div>
      <div className="position-absolute single-text-23 d-flex ">
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "PH_411BE1_BSS1_ALM"
            )}`}
            label="PH_411BE1_BSS1_ALM"
            text="BSS1A"
          />
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_411BE1_BSS1"
              )} mt-1`}
              label="PH_411BE1_BSS1"
              text="BSS1"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_411BE1_LS1"
              )} mt-1`}
              label="PH_411BE1_LS1"
              text="LS1"
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_411BE1_BSS2"
              )}`}
              label="PH_411BE1_BSS2"
              text="BSS2"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_411BE1_LS2"
              )} mt-1`}
              label="PH_411BE1_LS2"
              text="LS2"
            />
          </div>
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "PH_411BE1_BSS2_ALM"
            )} ml-2`}
            label="PH_411BE1_BSS2_ALM"
            text="BSS2A"
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex ">
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`text-dark digital-tag ${useColorStatus(
              "PH_431BE1_LS1"
            )}`}
            label="PH_431BE1_LS1"
            text="LS1"
          />
        </div>
        <div className="d-flex align-items-center">
          <div className="">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_431BE1_LS2"
              )}`}
              label="PH_431BE1_LS2"
              text="LS2"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag ${useColorStatus(
                "PH_431BE1_ZSS"
              )} mt-1`}
              label="PH_431BE1_ZSS"
              text="ZSS1"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "PH_431DQ1_DV_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_431DQ1_FR",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_431DQ2_DV_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_431DQ2_FR",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-26 d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FROM 431AS4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "431AS5",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "PH_431BL1_PT",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_431BL1_TT",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_431BL2_PT",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_431BL2_TT",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "431BL1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-1 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431BL1_RUN", healthyLabel: "PH_431BL1_PH" }
            )}`}
            label="PH_431BL1_RUN"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431BL2_RUN", healthyLabel: "PH_431BL2_PH" }
            )}`}
            label="PH_431BL2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "431BL2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29 d-flex flex-column">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "411BL1",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PH_411BL1_M01_RUN",
                healthyLabel: "PH_411BL1_M01_PH",
              }
            )} ml-1`}
            label="PH_411BL1_M01_RUN"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "411BL2",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PH_411BL2_M01_RUN",
                healthyLabel: "PH_411BL2_M01_PH",
              }
            )} ml-1`}
            label="PH_411BL2_M01_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "391FNF",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_391FNF_RUN", healthyLabel: "RM_391FNF_PH" }
            )}`}
            label="RM_391FNF_RUN"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FNH",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_391FNH_RUN", healthyLabel: "RM_391FNH_PH" }
            )}`}
            label="RM_391FNH_RUN"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FNG",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-1 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_391FNG_RUN", healthyLabel: "RM_391FNG_PH" }
            )}`}
            label="RM_391FNG_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-31 d-flex flex-column ">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "391BL1",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "RM_391BL1_RUN",
                healthyLabel: "RM_391BL1_PH",
              }
            )} ml-1`}
            label="RM_391BL1_RUN"
          />
        </div>
        <div className="d-flex justify-content-end  align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BL2",
            }}
          />
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "RM_391BL2_RUN",
                healthyLabel: "RM_391BL2_PH",
              }
            )} ml-1`}
            label="RM_391BL2_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-32">
        <div className="d-flex ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "431BE1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431BE1_M1M2_RUN", healthyLabel: "PH_431BE1_M1M2_PH" }
            )}`}
            label="PH_431BE1_M1M2_RUN"
            text="M"
          />
        </div>
        <div className="d-flex mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "M03",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PH_431BE1_M3M4_RUN", healthyLabel: "PH_431BE1_M3M4_PH" }
              )}`}
              label="PH_431BE1_M3M4_RUN"
            />
          </div>
          <div className="d-flex ml-3 ">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PH_431BE1_M3M4_RUN", healthyLabel: "PH_431BE1_M3M4_PH" }
              )}`}
              label="PH_431BE1_M3M4_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "M04",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-33">
        <div className="d-flex mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "M02",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PH_411BE1_M02_RUN", healthyLabel: "PH_411BE1_M02_PH" }
              )}`}
              label="PH_411BE1_M02_RUN"
              text="M"
            />
          </div>
          <div className="d-flex ml-3 ">
            <MotorCircleDigitalTag
              className={`dot digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PH_411BE1_M01_RUN", healthyLabel: "PH_411BE1_M01_PH" }
              )}`}
              label="PH_411BE1_M01_RUN"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "M01",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431FN7_RUN", healthyLabel: "PH_431FN7_PH" }
            )}`}
            label="PH_431FN7_RUN"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "431FN7",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431FN8_RUN", healthyLabel: "PH_431FN8_PH" }
            )}`}
            label="PH_431FN8_RUN"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "431FN8",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_391FNJ_RUN", healthyLabel: "PH_391FNJ_PH" }
            )}`}
            label="PH_391FNJ_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "391FNJ",
            }}
          />
        </div>
        <div className="text-center mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_391FNK_RUN", healthyLabel: "PH_391FNK_PH" }
            )}`}
            label="PH_391FNK_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "391FNK",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-36">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_391BL3_RUN", healthyLabel: "PH_391BL3_PH" }
            )}`}
            label="PH_391BL3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "391BL3",
            }}
          />
        </div>
        <div className="text-center mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_391BL5_RUN", healthyLabel: "PH_391BL5_PH" }
            )}`}
            label="PH_391BL5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "391BL5",
            }}
          />
        </div>
        <div className="text-center mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_391BL4_RUN", healthyLabel: "PH_391BL4_PH" }
            )}`}
            label="PH_391BL4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "391BL4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_411FN4_RUN", healthyLabel: "PH_411FN4_PH" }
            )}`}
            label="PH_411FN4_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "411FN4",
            }}
          />
        </div>
        <div className="text-center mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_411FN6_RUN", healthyLabel: "PH_411FN6_PH" }
            )}`}
            label="PH_411FN6_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "411FN6",
            }}
          />
        </div>
        <div className="text-center mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_411FN5_RUN", healthyLabel: "PH_411FN5_PH" }
            )}`}
            label="PH_411FN5_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "411FN5",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-38 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_411FN1_RUN", healthyLabel: "PH_411FN1_PH" }
            )}`}
            label="PH_411FN1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "411FN1",
            }}
          />
        </div>
        <div className="text-center mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_411FN3_RUN", healthyLabel: "PH_411FN3_PH" }
            )}`}
            label="PH_411FN3_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "411FN3",
            }}
          />
        </div>
        <div className="text-center mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_411FN2_RUN", healthyLabel: "PH_411FN2_PH" }
            )}`}
            label="PH_411FN2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "411FN2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-39 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_411FN9_RUN", healthyLabel: "PH_411FN9_PH" }
            )}`}
            label="PH_411FN9_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "411FN9",
            }}
          />
        </div>
        <div className="text-center mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_411FNA_RUN", healthyLabel: "PH_411FNA_PH" }
            )}`}
            label="PH_411FNA_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "411FNA",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-40 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM_391BE1_RUN", healthyLabel: "RM_391BE1_PH" }
            )}`}
            label="RM_391BE1_RUN"
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FROM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "391BE1.MO1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-41 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431FN1_RUN", healthyLabel: "PH_431FN1_PH" }
            )}`}
            label="PH_431FN1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "431FN1",
            }}
          />
        </div>
        <div className="text-center mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431FN2_RUN", healthyLabel: "PH_431FN2_PH" }
            )}`}
            label="PH_431FN2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "431FN2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-42 d-flex">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BV7",
            }}
          />
          <MimicCaret
            parentClass="d-flex tringle-item ml-1"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_431BV7_OLS", closeLabel: "PH_431BV7_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_431BV7_OLS", closeLabel: "PH_431BV7_CLS" }
            )}`}
            label="PH_431BV7_OLS"
          />
        </div>
        <div className="d-flex align-items-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_431BV8_OLS", closeLabel: "PH_431BV8_CLS" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "PH_431BV8_OLS", closeLabel: "PH_431BV8_CLS" }
            )}`}
            label="PH_431BV8_OLS"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BV8",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43 d-flex">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BVF",
            }}
          />
          <MimicCaret
            parentClass="d-flex tringle-item ml-1"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
        </div>
        <div className="d-flex align-items-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "BVG",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-44 d-flex">
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BVH",
            }}
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BVJ",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-45 d-flex flex-column">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "BVK",
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
        <div className="text-center">
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
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BVL",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-46 d-flex">
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "PBV3",
            }}
          />
        </div>
        <div className="text-center">
          <MimicCaret
            parentClass="d-flex tringle-item"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              { openLabel: "NA", closeLabel: "NA" }
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PBV4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-47 d-flex">
        <div className="d-flex align-items-center">
          <div className="">
            <div className="dot-square-line d-flex flex-column align-items-center ml-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411CGA_EX_OLS",
                    closeLabel: "PH_411CGA_EX_CLS",
                    healthyLabel: "PH_411CGA_PH",
                  }
                )}`}
                label="PH_411CGA_EX_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CGA",
              }}
            />
          </div>
          <div className="ml-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411SGA_OLS",
                    closeLabel: "PH_411SGA_CLS",
                  }
                )}`}
                label="PH_411SGA_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SGA",
              }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="">
            <div className="dot-square-line d-flex flex-column align-items-center ml-1">
              <MotorCircleDigitalTag
                className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411SGB_OLS",
                    closeLabel: "PH_411SGB_CLS",
                  }
                )} `}
                label="PH_411SGB_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SGB",
              }}
            />
          </div>
          <div className="ml-2">
            <div className="dot-square-line d-flex flex-column align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "PH_411CGB_EX_OLS",
                    closeLabel: "PH_411CGB_EX_CLS",
                    healthyLabel: "PH_411CGB_PH",
                  }
                )}`}
                label="PH_411CGB_EX_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CGB",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-48 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "421CV5",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PH_421CV5_RUN", healthyLabel: "PH_421CV5_PH" }
          )}`}
          label="PH_421CV5_RUN"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-49 d-flex">
        <div className=" text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431DQ1_RUN", healthyLabel: "PH_431DQ1_PH" }
            )}`}
            label="PH_431DQ1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "431DQ1",
            }}
          />
        </div>
        <div className=" text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431DQ2_RUN", healthyLabel: "PH_431DQ2_PH" }
            )}`}
            label="PH_431DQ2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "431DQ2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-50">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "431SM1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-2 ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PH_431SM1_RUN", healthyLabel: "PH_431SM1_PH" }
            )}`}
            label="PH_431SM1_RUN"
            text="M"
          />
        </div>
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "431SG3",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center deg">
            <MotorCircleDigitalTag
              className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PH_431SG3_OLS",
                  closeLabel: "PH_431SG3_CLS",
                }
              )} `}
              label="PH_431SG3_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-51 d-flex align-items-center">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TO 431AS5",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SILO RECIRCULATON",
            }}
          />
        </div>
        <div className="">
          <div className="dot-square-line d-flex flex-column align-items-center ml-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "NA",
                  closeLabel: "NA",
                }
              )} `}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "431SG5",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-52 ">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RA3",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "PH_411RA3"
            )} ml-1`}
            label="PH_411RA3_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-53 ">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RA6",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "PH_431RA6"
            )} ml-1`}
            label="PH_431RA6_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-54 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TO KILN INLET",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "HOUSING",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-55 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "TO 6 STAGE PREHEATER",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-56">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "391SG2",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center deg">
            <MotorCircleDigitalTag
              className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "NA",
                  closeLabel: "NA",
                }
              )} `}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-57 d-flex">
        <BlackContainer
          data={{
            label: "PH_411_CGA_PID",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_411_CGB_PID",
            useClass: "greenTxt",
            unit: "T",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-58 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "PH_411BL1_TT",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_411BL1_PT",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_411BL2_TT",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_411BL2_PT",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-59 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "PH_391BL3_TT",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_391BL3_PT",
              useClass: "greenTxt mt-1",
              unit: "kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_391BL5_TT",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_391BL5_PT",
              useClass: "greenTxt mt-1",
              unit: "kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_391BL4_TT",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_391BL4_PT",
              useClass: "greenTxt mt-1",
              unit: "kg/cm2",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-60 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "PH_391BL1_PT1",
              useClass: "greenTxt ",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_391BL1_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "PH_391BL2_PT1",
              useClass: "greenTxt ",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_391BL2_TT1",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-61">
        <BlackContainer
          data={{
            label: "PH_391FNL_SI",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_391FNL_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_391FNL",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
          data={{
            label: "RM1_361RP1_ZT_RPC_AO",
            useClass: "greenTxt position-absolute single-text-62",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      <BlackContainer
          data={{
            label: "RM1_361RP1_ZT_RPC_AO",
            useClass: "greenTxt position-absolute single-text-63",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="position-absolute single-text-64 d-flex">
        <BlackContainer
          data={{
            label: "PH_411CGA_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_411CGB_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-65">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "411SGC",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center deg">
            <MotorCircleDigitalTag
              className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PH_411SGC_OLS",
                  closeLabel: "PH_411SGC_CLS",
                }
              )} `}
              label="PH_411SGC_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-66 d-flex flex-column">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "391AS5",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "391ASC",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "391ASD",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-67 d-flex align-items-center">
        <div className="text-center">
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "PH_391SB1_LS"
              )} ml-3`}
              label="PH_391SB1_LS"
              text="L"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "LS",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "PH_391SB1_PT1",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "BLENDING",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "SILO",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "PH_391SB1_LT",
              useClass: "greenTxt mt-1",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SILO AERATION",
          }}
        />
      </div>
      <div className="position-absolute single-text-68 d-flex align-items-center">
        <div className="">
          <div className="dot-square-line d-flex flex-column align-items-center ml-1">
            <MotorCircleDigitalTag
              className={`sqr digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PH_431SG4_OLS",
                  closeLabel: "PH_431SG4_CLS",
                }
              )} `}
              label="PH_431SG4_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "431SG4",
            }}
          />
        </div>
        <div className="">
          <div className="dot-square-line d-flex flex-column align-items-center ml-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PH_431DG2_OLS",
                  closeLabel: "PH_431DG2_CLS",
                  healthyLabel: "PH_431DG2_PH",
                }
              )} `}
              label="PH_431DG2_OLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "431DG2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-69 d-flex ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "411ASA",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "IN SEL",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "411ASB",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "OUT SEL",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "PH_411BI1_PT1",
          useClass: "greenTxt position-absolute single-text-70",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "RM1_361DG1_SP01",
          useClass: "greenTxt position-absolute single-text-71",
          unit: "bar",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-72",
          label: "411ASD",
        }}
      />
    </div>
  );
};

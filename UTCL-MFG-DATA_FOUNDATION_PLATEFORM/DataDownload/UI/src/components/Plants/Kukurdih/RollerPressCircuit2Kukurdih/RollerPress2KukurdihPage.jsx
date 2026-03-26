import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../index";

import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const RollerPress2KukurdihPage = () => {
  return (
    <div className="RollerPressCircuitKarurPage RollerPress2 w-100 h-100 position-relative">
      <div className="yellowline-Hr position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr  position-absolute line-3"></div>
      <div className="yellowline-Hr position-absolute line-4"></div>
      <div className="yellowline-Vr position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr  position-absolute line-10"></div>
      <div className="yellowline-Hr  position-absolute line-11"></div>
      <div className="yellowline-Vr  position-absolute line-12"></div>
      <div className="yellowline-Hr  position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Hr  position-absolute line-17"></div>
      <div className="yellowline-Vr  position-absolute line-18"></div>
      <div className="yellowline-Hr  position-absolute line-19"></div>
      <div className="yellowline-Vr  position-absolute line-20"></div>
      <div className="yellowline-Hr  position-absolute line-21"></div>
      <div className="yellowline-Vr  position-absolute line-22"></div>
      <div className="yellowline-Hr  position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr  position-absolute line-27"></div>
      <div className="yellowline-Vr  position-absolute line-28"></div>
      <div className="yellowline-Vr  position-absolute line-29"></div>
      <div className="yellowline-Hr  position-absolute line-30"></div>
      <div className="yellowline-Hr  position-absolute line-31"></div>
      <div className="yellowline-Hr  position-absolute line-32"></div>
      <div className="yellowline-Vr  position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Hr  position-absolute line-35"></div>
      <div className="yellowline-Hr  position-absolute line-36"></div>
      <div className="yellowline-Vr  position-absolute line-37"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-38"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-39"></div>
      <div className="yellowline-Hr  position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow position-absolute line-41"></div>
      <div className="yellowline-Vr  position-absolute line-42"></div>
      <div className="yellowline-Hr  position-absolute line-43"></div>
      <div className="yellowline-Hr  position-absolute line-44"></div>
      <div className="yellowline-Hr  position-absolute line-45"></div>
      <div className="yellowline-Hr  position-absolute line-46"></div>
      <div className="yellowline-Vr  position-absolute line-47"></div>
      <div className="yellowline-Vr  position-absolute line-48"></div>
      <div className="yellowline-Vr  position-absolute line-49"></div>
      <div className="yellowline-Vr downArrow position-absolute line-50"></div>
      <div className="yellowline-Vr downArrow position-absolute line-51"></div>
      <div className="yellowline-Vr downArrow position-absolute line-52"></div>
      <div className="yellowline-Vr downArrow position-absolute line-53"></div>
      <div className="yellowline-Vr  position-absolute line-54"></div>
      <div className="yellowline-Vr  position-absolute line-55"></div>
      <div className="yellowline-Vr  position-absolute line-56"></div>
      <div className="yellowline-Vr  position-absolute line-57"></div>
      <div className="yellowline-Hr  position-absolute line-58"></div>
      <div className="yellowline-Hr  position-absolute line-59"></div>
      <div className="yellowline-Vr  position-absolute line-60"></div>
      <div className="yellowline-Vr  position-absolute line-61"></div>
      <div className="yellowline-Vr downArrow position-absolute line-62"></div>
      <div className="yellowline-Vr downArrow position-absolute line-63"></div>
      <div className="yellowline-Vr position-absolute line-64"></div>
      <div className="yellowline-Vr position-absolute line-65"></div>
      <div className="yellowline-Hr position-absolute line-67"></div>
      <div className="yellowline-Vr position-absolute line-68"></div>
      <div className="yellowline-Hr position-absolute line-69"></div>
      <div className="yellowline-Vr downArrow position-absolute line-70"></div>
      <div className="yellowline-Vr  position-absolute line-71"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-72"></div>
      <div className="yellowline-Vr  position-absolute line-74"></div>
      <div className="yellowline-Hr  position-absolute line-75"></div>
      <div className="yellowline-Vr  position-absolute line-77"></div>
      <div className="yellowline-Hr  position-absolute line-79"></div>
      <div className="yellowline-Vr  position-absolute line-80"></div>
      <div className="yellowline-Vr  position-absolute line-81"></div>
      <div className="yellowline-Vr  position-absolute line-82"></div>
      <div className=" position-absolute  single-text-1 d-flex">
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe"
          // d15
          firstCircle={{
            firstCircleClass: `dot digital-tag  ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "SM_562BE1_RUN",
                healthyLabel: "SM_562BE1_PH",
              }
            )}`,

            label: "SM_562BE1_RUN",
          }}
        />
        {/* a10 */}
        <BlackContainer
          data={{
            label: "SM_562BE1M01_II1",
            useClass: "greenTxt  mt-2 ml-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute  single-text-2 d-flex">
        <div className="ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-2",
              label: "532MS1",
            }}
          />
          <div className="hpipecircle">
            <span className={`dot grayDot `}></span>

            {/* d3 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "SM_532MS1_RUN",
                  healthyLabel: "SM_532MS1_PH",
                }
              )}`}
              label="SM_532MS1_RUN"
            />
          </div>
          <div className="d-flex mt-1 ml-3">
            <div>
              {/* d4 */}
              <MotorCircleDigitalTag
                className={`square digital-tag ml-2 ${useColorStatus(
                  "SM_532MT1_PH"
                )}`}
                label="SM_532MT1_PH"
              />
            </div>
            <div>
              {/* d5 */}
              <MotorCircleDigitalTag
                className={`square digital-tag ml-2 ${useColorStatus(
                  "SM_532MT1_MD"
                )}`}
                label="SM_532MT1_MD"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute  single-text-3">
        <div className="d-flex">
          <div className="hpipecircle">
            {/* d1 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "SM_532VM1_RUN",
                  healthyLabel: "SM_532VM1_PH",
                }
              )}`}
              label="SM_532VM1_RUN"
              text="M"
            />
            {/* d2 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "SM_532WF1_RUN",
                  healthyLabel: "SM_532WF1_PH",
                }
              )}`}
              label="SM_532WF1_RUN"
            />
          </div>
        </div>
        <div className="d-flex mt-1 ml-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-1",
              label: "532WF1",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute  single-text-4">
        <div className="d-flex">
          <div className="hpipecircle">
            <span className={`dot grayDot `}></span>
            {/* d122 */}

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "SM_532BC1_RUN",
                  healthyLabel: "SM_532BC1_PH",
                }
              )}`}
              label="SM_532BC1_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-1",
              label: "532BC1",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-5">
        <div className="d-flex">
          <span>
            {/* d6 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mr-1 ${useColorStatus(
                "SM_532DG1_OLS"
              )}`}
              label="SM_532DG1_OLS"
            />
          </span>
          <div>
            {/* d10 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-3 ${useColorStatus("")}`}
              label=""
            />
            <div className="gry-img  ml-1"></div>
          </div>
          <span>
            {/* d11 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-1 ${useColorStatus(
                "SM_532DG1_CLS"
              )}`}
              label="SM_532DG1_CLS"
            />
          </span>
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div className="containerImage text-center ml-2">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-1 ml-3",
                label: "532BI1",
              }}
            />
            <span>
              {/* d7 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 ml-1 ${useColorStatus(
                  "SM_532BI1_LS"
                )}`}
                label="SM_532BI1_LS"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-1 mt-2",
              label: "REJECT BIN",
            }}
          />
          {/* a6 */}
          <BlackContainer
            data={{
              label: "SM_532BI1_WT",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-7">
        {/* a85 */}
        <BlackContainer
          data={{
            label: "SM_532MT1_CNT",
            useClass: "greenTxt ml-auto mr-5",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "SM_532MT1_CNT",
            useClass: "greenTxt  mt-1 ml-auto mr-5",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <div className=" d-flex mt-2">
          <div>
            <div className="d-flex ml-2">
              <span>
                <MotorCircleDigitalTag
                  className={`square digital-tag mt-1 ml-1 ${useColorStatus(
                    "SM_532VN1_ZSS"
                  )}`}
                  label="SM_532VN1_ZSS"
                />
              </span>
              {/* d9 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag ml-1 mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "SM_532VN1_M1_RUN",
                    healthyLabel: "SM_532VN1_M1_PH",
                  }
                )}`}
                label="SM_532VN1_M1_RUN"
                text="M"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-1",
                label: "532VN1",
              }}
            />
          </div>

          <div className="triangle-with-squares"></div>
          <div className="triangle-with-squares mt-4 ml-3"></div>
          <div className="img-85 mt-4 ml-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <div>
          {/* d18 */}
          <MotorCircleDigitalTag
            className={`square digital-tag mt-3 mr-4 ${useColorStatus(
              "SM_532SG2_CLS"
            )}`}
            label="SM_532SG2_CLS"
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            {/* d19 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "SM_532SG2_OLS",
                  closeLabel: "SM_532SG2_CLS",
                  healthyLabel: "SM_532SG2_PH",
                }
              )}`}
              label="SM_532SG2_OLS"
            />

            <div className="yellowline-Vr pt-2 position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div>
          {/* d20 */}
          <MotorCircleDigitalTag
            className={`square digital-tag mt-3 ml-4 ${useColorStatus(
              "SM_532SG2_OLS"
            )}`}
            label="SM_532SG2_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "532CR1",
          }}
        />
        <div>
          {/* d21 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-3 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "SM_532CR1_RUN",
                healthyLabel: "SM_532CR1_PH",
              }
            )}`}
            label="SM_532CR1_RUN"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-2",
            label: "532CR1",
          }}
        />
      </div>
      <div className=" position-absolute  single-text-10">
        <div className="hpipecircle">
          <span className={`dot grayDot `}></span>
          {/* d56 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "SM_532BC2_RUN",
                healthyLabel: "SM_532BC2_PH",
              }
            )}`}
            label="SM_532BC2_RUN"
            text="M"
          />
        </div>

        <div className="d-flex mt-1 ml-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-5",
              label: "532BC2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div>
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            {/* d17 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "SM_532SG3_OLS", closeLabel: "SM_532SG3_CLS" }
              )}`}
              label="SM_532SG3_OLS"
            />

            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-1",
            label: "532SG3",
          }}
        />
      </div>

      <div className="position-absolute single-text-13 ">
        <div className="d-flex">
          <div>
            {/* d116 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "SM_532SG1_ECLS"
              )}`}
              label="SM_532SG1_ECLS"
            />
          </div>
          <div>
            {/* d117 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-3 ${useColorStatus(
                "SM_532SG1_EOLS"
              )}`}
              label="SM_532SG1_EOLS"
            />
          </div>
        </div>
        <div className="d-flex ml-3">
          <div>
            <div className="dot-square-line d-flex flex-column align-items-center">
              {/* d118 */}

              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "SM_532SG1_EOLS",
                    closeLabel: "SM_532SG1_ECLS",
                    healthyLabel: "SM_532SG1_PH",
                  }
                )}`}
                label="SM_532SG1_EOLS"
              />

              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-14">
        <div className="roller-jcb mt-4"></div>
      </div>
      <div class="hpipecircle flex-column py-1 position-absolute single-text-15">
        <div className="d-flex justify-content-around mt-2">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  ml-5 mb-3",
                label: "562IC1",
              }}
            />
            <div className="hpipecircle mt-1">
              {/* d22 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  {
                    runLabel: "SM_562IC1_M1_RUN",
                    healthyLabel: "SM_562IC1_M1_PH",
                  }
                )}`}
                label="SM_562IC1_M1_RUN"
                text="M"
              />
              <span className={`dot grayDot `}></span>
            </div>
            <div className="d-flex mt-1 ">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  ml-1",
                  label: "532IC1_MO1",
                }}
              />
            </div>
          </div>
          <div className="ml-5 mt-5 d-flex">
            <div>
              <div className="hpipecircle mt-1">
                <span className={`dot grayDot `}></span>
                {/* d25 */}
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                    {
                      runLabel: "SM_562IC1_M2_RUN",
                      healthyLabel: "SM_562IC1_M2_PH",
                    }
                  )}`}
                  label="SM_562IC1_M2_RUN"
                  text="M"
                />
              </div>
              <div className="d-flex mt-1 ">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark  ml-1",
                    label: "532IC1_MO2",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hpipecircle flex-column py-1 position-absolute single-text-16"></div>
      <div class="hpipecircle flex-column py-1 position-absolute single-text-17"></div>
      <div class="hpipecircle flex-column py-1 position-absolute single-text-18"></div>
      <div class="position-absolute single-text-19">
        <div className="d-flex">
          {/* d23 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag p-2 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "SM_562VF2_M1_RUN",
                healthyLabel: "SM_562VF2_M1_PH",
              }
            )}`}
            label="SM_562VF2_M1_RUN"
            text="M"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "562VF2_MO1",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          {/* d24 */}
          <MotorCircleDigitalTag
            className={`dot digital-tag p-2 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "SM_562VF2_M2_RUN",
                healthyLabel: "SM_562VF2_M2_PH",
              }
            )}`}
            label="SM_562VF2_M2_RUN"
            text="M"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "562VF2_MO2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-20">
        <div className="containerImage text-center ml-2">
          <div className="d-flex justify-content-around">
            <span>
              {/* d26 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 ml-1 ${useColorStatus(
                  "SM_562BI2_LS"
                )}`}
                text="LS"
                label="SM_562BI2_LS"
              />
            </span>
            <span>
              {/* d27 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 ml-1 ${useColorStatus(
                  "SM_562BI2_PH"
                )}`}
                text="PH"
                label="SM_562BI2_PH"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1 ml-3",
              label: "562B12",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-1 mt-2",
              label: "REJECT BIN",
            }}
          />
          {/* a20 */}
          <BlackContainer
            data={{
              label: "SM_562BI2_WI",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21 ">
        <div className="d-flex ml-5">
          <div className="dot-square-line d-flex flex-column align-items-center">
            {/* d30 */}

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "SM_562SG4_EOLS",
                  closeLabel: "SM_562SG4_ECLS",
                  healthyLabel: "SM_562SG4_PH",
                }
              )}`}
              label="SM_562SG4_EOLS"
            />

            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>

      <div className="position-absolute single-text-22 d-flex">
        {/* <div className="dot-square-line d-flex flex-column align-items-center">
            <div className="dot grey-color"></div>
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div> */}

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-4",
            label: "562SG4",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 ">
        <span>
          {/* d28 */}
          <MotorCircleDigitalTag
            className={`text-dark px-1 digital-tag mt-1 ml-2 ${useColorStatus(
              "SM_562SG4_ECLS"
            )}`}
            text="ECLS"
            label="SM_562SG4_ECLS"
          />
        </span>
        <span>
          {/* d29 */}
          <MotorCircleDigitalTag
            className={`text-dark px-1 digital-tag mt-1 ml-2 ${useColorStatus(
              "SM_562SG4_EOLS"
            )}`}
            text="EOLS"
            label="SM_562SG4_EOLS"
          />
        </span>
      </div>
      <div className="position-absolute single-text-24">
        {/* a73 */}
        <BlackContainer
          data={{
            label: "SM_562SG4",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "SM_562SG4",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        {/* a84 */}
        <BlackContainer
          data={{
            label: "SM_532SG1",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "SM_532SG1",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="truck position-absolute single-text-26"></div>
      <div class="hpipecircle flex-column py-1 position-absolute single-text-27">
        {/* d57 */}
        <MotorCircleDigitalTag
          className={`dot mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "SM_562DC1_RUN",
              healthyLabel: "SM_562DC1_PH",
            }
          )}`}
          label="SM_562DC1_RUN"
        />
      </div>
      <div className="position-absolute single-text-28">
        {/* a12 */}
        <BlackContainer
          data={{
            label: "SM_562DC1_II",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        {/* a13 */}
        <BlackContainer
          data={{
            label: "SM_562DC1_SI",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        {/* a14 */}
        <BlackContainer
          data={{
            label: "SM_562DC1",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "562VF1_MO1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "562VF1_MO2",
            }}
          />
        </div>
        {/* <div>
          <span className={`dot grayDot mt-1 ml-1 p-2 ${"RM_362BC2"} `}>M</span>
        </div> */}
        <div>
          {/* <span className={`dot grayDot mt-1 p-2 ${"RM_362BC2"} `}></span> */}
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "562DC1",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute  single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mx-auto",
            label: "562BC1",
          }}
        />
        {/* a15 */}
        <BlackContainer
          data={{
            label: "SM_562BW1_FR",
            useClass: "greenTxt  mt-1 mx-auto",
            unit: "Tph",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <span>
            {/* d55 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mr-2 ${useColorStatus(
                "SM_562BC1_NDE_MG"
              )}`}
              label="SM_562BC1_NDE_MG"
            />
          </span>
          <div className="hpipecircle">
            <span className={`dot grayDot `}></span>
            {/* 58 */}

            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "SM_562BC1_RUN",
                  healthyLabel: "SM_562BC1_PH",
                }
              )}`}
              label="SM_562BC1_RUN"
            />
          </div>
          <span>
            {/* d59 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ml-2 ${useColorStatus(
                "SM_562BC1_DE_MG"
              )}`}
              label="SM_562BC1_DE_MG"
            />
          </span>
        </div>
      </div>
      <div className=" position-absolute  single-text-31 d-flex">
        <div>
          <div className="hpipecircle">
            <span className={`dot grayDot `}></span>
            {/* d54 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "SM_562SC1_RUN",
                  healthyLabel: "SM_562SC1_PH",
                }
              )}`}
              label="SM_562SC1_RUN"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-auto",
              label: "562SC1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-33">
        {/* a11 */}
        <BlackContainer
          data={{
            label: "SM_562MM1_MI1",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <div>
          {/* a86 */}
          <BlackContainer
            data={{
              label: "",
              useClass: "greenTxt  mt-4 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center ml-2">
          <div className="d-flex justify-content-around">
            <span>
              {/* d60 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 ml-1 ${useColorStatus(
                  "SM_562BI1_LS"
                )}`}
                label="SM_562BI1_LS"
              />
            </span>
            <span>
              {/* d61 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 ml-1 ${useColorStatus(
                  "SM_562BI1_PH"
                )}`}
                label="SM_562BI1_PH"
              />
            </span>
          </div>
          {/* a16 */}
          <BlackContainer
            data={{
              label: "SM_562BI1_WT",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1 ml-3",
              label: "562Bl1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35">
        <div class="pipeHr position-relative rounded-pill"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "562AB3",
          }}
        />
        <div class="pipeHr position-relative rounded-pill"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "562AB2",
          }}
        />
        <div class="pipeHr position-relative rounded-pill"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "562AB1",
          }}
        />
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            {/* d53 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                { openLabel: "SM_562SG1_OLS", closeLabel: "SM_562SG1_CLS" }
              )}`}
              label="SM_562SG1_OLS"
            />

            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-2",
              label: "562SG1",
            }}
          />
        </div>
        <div className="ml-3 mt-3">
          {/* a90 */}
          <BlackContainer
            data={{
              label: "SM_562SG5",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SM_562SG5",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <div>
          <span>
            {/* d49 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-3 mr-4 ${useColorStatus(
                "SM_562SG5_ECLS"
              )}`}
              label="SM_562SG5_ECLS"
            />
          </span>
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            {/* d121 */}

            <MotorCircleDigitalTag
              className={`dot ml-1 mt-1 digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabelLabel: "SM_562SG5_EOLS",
                  closeLabel: "SM_562SG5_ECLS",
                  healthyLabel: "SM_562SG5_PH",
                }
              )}`}
              label="SM_562SG5_EOLS"
            />

            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div>
          <span>
            {/* d52 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mt-3 ml-4 ${useColorStatus(
                "SM_562SG5_EOLS"
              )}`}
              label="SM_562SG5_EOLS"
            />
          </span>
        </div>
      </div>
      <div className="position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "562SG5",
          }}
        />
        <div className="asset-71"></div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  bg-white",
              label: "562MD1",
            }}
          />
          {/* a60 */}
          <BlackContainer
            data={{
              label: "SM_562RP1_ZT",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "mm.",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1 bg-white",
              label: "562MD2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-39">
        {/* a53 */}
        <BlackContainer
          data={{
            label: "SM_562MD1_II",
            useClass: "greenTxt  mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        {/* a54 */}
        <BlackContainer
          data={{
            label: "SM_562MD1_SI",
            useClass: "greenTxt  mt-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        {/* a55 */}
        <BlackContainer
          data={{
            label: "SM_562MD1_KW",
            useClass: "greenTxt  mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        {/* a56 */}
        <BlackContainer
          data={{
            label: "SM_562RP1_ZT1",
            useClass: "greenTxt  mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        {/* a57 */}
        <BlackContainer
          data={{
            label: "SM_562RP1_XT1",
            useClass: "greenTxt  mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        {/* a58 */}
        <BlackContainer
          data={{
            label: "SM_562RP1_XT2",
            useClass: "greenTxt  mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        {/* a59 */}
        <BlackContainer
          data={{
            label: "SM_562HD1_PT1",
            useClass: "greenTxt  mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        {/* a61 */}
        <BlackContainer
          data={{
            label: "SM_562MD2_II",
            useClass: "greenTxt  mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        {/* a62 */}
        <BlackContainer
          data={{
            label: "SM_562MD2_SI",
            useClass: "greenTxt  mt-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        {/* a63 */}
        <BlackContainer
          data={{
            label: "SM_562MD2_KW",
            useClass: "greenTxt  mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        {/* a64 */}
        <BlackContainer
          data={{
            label: "SM_562RP1_ZT2",
            useClass: "greenTxt  mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        {/* a65 */}
        <BlackContainer
          data={{
            label: "SM_562RP1_XT3",
            useClass: "greenTxt  mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        {/* a66 */}
        <BlackContainer
          data={{
            label: "SM_562RP1_XT4",
            useClass: "greenTxt  mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        {/* a67 */}
        <BlackContainer
          data={{
            label: "SM_562HD1_PT2",
            useClass: "greenTxt  mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        {/* a68 */}
        <BlackContainer
          data={{
            label: "SM_562VS1_PT2",
            useClass: "greenTxt  mt-3 mr-2",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        {/* a69 */}
        <BlackContainer
          data={{
            label: "SM_562VS1_TT2",
            useClass: "greenTxt  mt-1 mr-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        {/* a70 */}
        <BlackContainer
          data={{
            label: "SM_562VS1_TT3",
            useClass: "greenTxt  mt-2 mr-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        {/* a71 */}
        <BlackContainer
          data={{
            label: "SM_562VS1_PT1",
            useClass: "greenTxt  mt-3 mr-4",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        {/* a72 */}
        <BlackContainer
          data={{
            label: "SM_562VS1_TT1",
            useClass: "greenTxt  mt-1 mr-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        {/* a75 */}
        <BlackContainer
          data={{
            label: "SM_562SG2",
            useClass: "greenTxt  mt-3 mr-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM_562SG2",
            useClass: "greenTxt  mt-1 mr-4",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center img-92 position-absolute single-text-41">
        <div className="m-lines">
          <div className="d-flex">
            <div className={`m-line-left  green-color${""}`}></div>

            <div className={`m-line-right green-color ml-4 ${""}`}></div>
          </div>

          <div className="d-flex">
            <div className={`m-line-left  green-color${""}`}></div>

            <div className={`m-line-right green-color ml-4 ${""}`}></div>
          </div>

          <div className="d-flex">
            <div className={`m-line-left  green-color${""}`}></div>

            <div className={`m-line-right green-color ml-4 ${""}`}></div>
          </div>

          <div className="d-flex">
            <div className={`m-line-left  green-color${""}`}></div>

            <div className={`m-line-right green-color ml-4 ${""}`}></div>
          </div>

          <div className="d-flex">
            <div className={`m-line-left  green-color${""}`}></div>

            <div className={`m-line-right green-color ml-4 ${""}`}></div>
          </div>

          <div className="d-flex">
            <div className={`m-line-left  green-color${""}`}></div>

            <div className={`m-line-right green-color ml-4 ${""}`}></div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-42">
        <div class="pipeHr position-relative rounded-pill"></div>
        <div class="pipeHr position-relative rounded-pill mt-2"></div>
      </div>
      <div className=" position-absolute  single-text-43 ">
        <div className="d-flex ml-5 mb-2">
          <span>
            {/* d33 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mr-2 ${useColorStatus(
                "SM_562BC2_DE_MG"
              )}`}
              label="SM_562BC2_DE_MG"
            />
          </span>
          <span>
            {/* d34 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mr-2 ${useColorStatus(
                "SM_562BC2_NDE_MG"
              )}`}
              label="SM_562BC2_NDE_MG"
            />
          </span>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "562BC2",
            }}
          />
          <div className="hpipecircle">
            <span className={`dot grayDot `}></span>
            {/* d36 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "SM_562BC2_RUN",
                  healthyLabel: "SM_562BC2_PH",
                }
              )}`}
              label="SM_562BC2_RUN"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute  single-text-44 ">
        <div>
          <div className="hpipecircle">
            <span className={`dot grayDot `}></span>
            {/* d35 */}
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "SM_562SC2_RUN",
                  healthyLabel: "SM_562SC2_PH",
                }
              )}`}
              label="SM_562SC2_RUN"
              text="M"
            />
          </div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "562SC2",
            }}
          />
          {/* <span>
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "SM_562SC2_ZSS"
              )}`}
              text="ZSS"
              label="SM_562SC2_ZSS"
            />
          </span> */}
        </div>
      </div>
      <div className="position-absolute single-text-45 ">
        <div className="d-flex">
          <span>
            {/* d39 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "SM_562SG2_ECLS"
              )}`}
              label="SM_562SG2_ECLS"
            />
          </span>
        </div>

        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 mr-4",
              label: "532SG2",
            }}
          />
          <div>
            <div className="dot-square-line d-flex flex-column align-items-center">
              {/* d37 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "SM_562SG2_OLS",
                    closeLabel: "SM_562SG2_CLS",
                    healthyLabel: "SM_562SG2_PH",
                  }
                )}`}
                label="SM_562SG2_OLS"
              />

              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-46 ">
        <div>
          <div>
            <div className="dot-square-line d-flex flex-column align-items-center">
              {/* d31 */}
              <MotorCircleDigitalTag
                className={` square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "SM_562SG3_OLS", closeLabel: "SM_562SG3_CLS" }
                )}`}
                label="SM_562SG3_OLS"
              />

              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-4",
              label: "562SG3",
            }}
          />
          <span>
            {/* d32 */}
            <MotorCircleDigitalTag
              className={`text-dark px-1 digital-tag mt-1 mx-auto ${useColorStatus(
                "SM_562BE1_LS1"
              )}`}
              text="BLLS"
              label="SM_562BE1_LS1"
            />
          </span>
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-48",
          label: "562VS1",
        }}
      />
      <div className="position-absolute single-text-49 d-flex">
        <div>
          <div>
            <div className="dot-square-line d-flex flex-column align-items-center">
              {/* d42 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "SM_562LD2_EOLS",
                    healthyLabel: "SM_562LD2_PH",
                    closeLabel: "SM_562LD2_ECLS",
                  }
                )}`}
                label="SM_562LD2_OLS"
              />

              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex">
            <span>
              {/* d40 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 mx-auto ${useColorStatus(
                  "SM_562LD2_ECLS"
                )}`}
                label="SM_562LD2_ECLS"
              />
            </span>
            <span>
              {/* d41 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 ml-3 ${useColorStatus(
                  "SM_562LD2_EOLS"
                )}`}
                label="SM_562LD2_EOLS"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "562LD2",
            }}
          />
        </div>
        <div>
          {/* a76 */}
          <BlackContainer
            data={{
              label: "SM_562LD2",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SM_562LD2",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-50 d-flex">
        <div>
          <div>
            <div className="dot-square-line d-flex flex-column align-items-center">
              {/* d48 */}

              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "SM_562LD3_EOLS",
                    closeLabel: "SM_562LD3_ECLS",
                    healthyLabel: "SM_562LD3_PH",
                  }
                )}`}
                label="SM_562LD3_EOLS"
              />

              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex">
            <span>
              {/* d46 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 mx-auto ${useColorStatus(
                  "SM_562LD3_ECLS"
                )}`}
                label="SM_562LD3_ECLS"
              />
            </span>
            <span>
              {/* d47 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 ml-3 ${useColorStatus(
                  "SM_562LD3_EOLS"
                )}`}
                label="SM_562LD3_EOLS"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "562LD3",
            }}
          />
        </div>
        <div>
          {/* 78 */}
          <BlackContainer
            data={{
              label: "SM_562LD3",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SM_562LD3",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-51 d-flex">
        <div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "562LD4",
              }}
            />
            <div className="dot-square-line d-flex flex-column align-items-center">
              {/* d45 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "SM_562LD4_EOLS",
                    closeLabel: "SM_562LD4_ECLS",
                    healthyLabel: "SM_562LD4_PH",
                  }
                )}`}
                label="SM_562LD4_EOLS"
              />

              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex">
            <span>
              {/* d43 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 mx-auto ${useColorStatus(
                  "SM_562LD4_ECLS"
                )}`}
                label="SM_562LD4_ECLS"
              />
            </span>
            <span>
              {/* d44 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 ml-3 ${useColorStatus(
                  "SM_562LD4_EOLS"
                )}`}
                label="SM_562LD4_EOLS"
              />
            </span>
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "SM_562LD4",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SM_562LD4",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-52 d-flex">
        <div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "562LD6",
              }}
            />
            <div className="dot-square-line d-flex flex-column align-items-center">
              {/* d111 */}

              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "SM_562LD6_EOLS",
                    closeLabel: "SM_562LD6_ECLS",
                    healthyLabel: "SM_562LD6_PH",
                  }
                )}`}
                label="SM_562LD6_EOLS"
              />

              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex">
            <span>
              {/* d110 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 mx-auto ${useColorStatus(
                  "SM_562LD6_ECLS"
                )}`}
                label="SM_562LD6_ECLS"
              />
            </span>
            <span>
              {/* d112 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 ml-3 ${useColorStatus(
                  "SM_562LD6_EOLS"
                )}`}
                label="SM_562LD6_EOLS"
              />
            </span>
          </div>
        </div>
        <div>
          {/* a79 */}
          <BlackContainer
            data={{
              label: "SM_562LD6",
              useClass: "greenTxt  mt-3 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SM_562LD6",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-53 d-flex">
        <div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FRESH AIR",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "562LD5",
              }}
            />
            <div className="dot-square-line d-flex flex-column align-items-center">
              {/* d114 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "SM_562LD5_EOLS",
                    closeLabel: "SM_562LD5_ECLS",
                    healthyLabel: "SM_562LD5_PH",
                  }
                )}`}
                label="SM_562LD5_EOLS"
              />

              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex">
            <span>
              {/* d113 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 mx-auto ${useColorStatus(
                  "SM_562LD5_ECLS"
                )}`}
                label="SM_562LD5_ECLS"
              />
            </span>
            <span>
              {/* d115 */}
              <MotorCircleDigitalTag
                className={`dot digital-tag mt-1 ml-4 ${useColorStatus(
                  "SM_562LD5_EOLS"
                )}`}
                label="SM_562LD5_EOLS"
              />
            </span>
          </div>
        </div>
        <div className="mt-3">
          {/* a80 */}
          <BlackContainer
            data={{
              label: "SM_562LD5",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "%m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SM_562LD5",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "%m",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-54 ">
        <div className="asset-72"></div>
      </div>
      <div className="position-absolute single-text-55 d-flex">
        <div>
          <span>
            {/* d62 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mx-auto ${useColorStatus(
                "SM_562BF1_HP1_LS"
              )}`}
              label="SM_562BF1_HP1_LS"
            />
          </span>
          {/* a42 */}
          <BlackContainer
            data={{
              label: "SM_562BF1_HP1_DPT",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          {/* a43 */}
          <BlackContainer
            data={{
              label: "SM_562BF1_HP1_TE",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <span>
            {/* d63 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mx-auto ${useColorStatus(
                "SM_562BF1_HP2_LS"
              )}`}
              label="SM_562BF1_HP2_LS"
            />
          </span>
          {/* a44 */}
          <BlackContainer
            data={{
              label: "SM_562BF1_HP2_DPT",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          {/* a45 */}
          <BlackContainer
            data={{
              label: "SM_562BF1_HP2_TE",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <span>
            {/* d64 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mx-auto ${useColorStatus(
                "SM_562BF1_HP3_LS"
              )}`}
              label="SM_562BF1_HP3_LS"
            />
          </span>
          {/* a46 */}
          <BlackContainer
            data={{
              label: "SM_562BF1_HP3_DPT",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          {/* a47 */}
          <BlackContainer
            data={{
              label: "SM_562BF1_HP3_TE",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <span>
            {/* d65 */}
            <MotorCircleDigitalTag
              className={`square digital-tag mx-auto ${useColorStatus(
                "SM_562BF1_HP4_LS"
              )}`}
              label="SM_562BF1_HP4_LS"
            />
          </span>
          {/* a48 */}
          <BlackContainer
            data={{
              label: "SM_562BF1_HP4_DPT",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          {/* a49 */}
          <BlackContainer
            data={{
              label: "SM_562BF1_HP4_TE",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-56 d-flex">
        <div className="d-flex">
          {/* d97 */}
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "SM_592RA1"
            )}`}
            label="SM_592RA1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-1",
              label: "592RA1",
            }}
          />
        </div>
        <div className="d-flex ml-1">
          {/* d96 */}

          <MotorCircleDigitalTag
            className={`circle-img mt-1 ml-0 digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "SM_592RA2"
            )}`}
            label="SM_592RA2_RUN"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-1",
              label: "592RA2",
            }}
          />
        </div>
        <div className="d-flex ml-1">
          {/* d95 */}

          <MotorCircleDigitalTag
            className={`circle-img mt-1 ml-0 digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "SM_592RA3"
            )}`}
            label="SM_592RA3_RUN"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-1",
              label: "592RA3",
            }}
          />
        </div>
        <div className="d-flex ml-1">
          {/* d94 */}
          <MotorCircleDigitalTag
            className={`circle-img mt-1 ml-0 digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "SM_592RA4"
            )}`}
            label="SM_592RA4_RUN"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-1",
              label: "592RA4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-57">
        {/* a25 */}
        <BlackContainer
          data={{
            label: "SM_562BF1_DPT",
            useClass: "greenTxt  mt-2 mx-auto",
            unit: "mmWcc",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          {/* a24 */}
          <BlackContainer
            data={{
              label: "SM_562BF1_CMP1_DPT",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          {/* a26 */}
          <BlackContainer
            data={{
              label: "SM_562BF1_CMP2_DPT",
              useClass: "greenTxt  mt-2 ml-5",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div class="hpipecircle flex-column py-1 position-absolute single-text-58">
        <div className=" mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "562SR1",
            }}
          />
          {/* d66 */}

          <MotorCircleDigitalTag
            className={`dot mt-1 mx-auto digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "SM_562SR1_RUN",
                healthyLabel: "SM_562SR1_PH",
              }
            )}`}
            label="SM_562SR1_RUN"
          />
          <div class="yellowline-Vr downArrow position-absolute line-24a"></div>
        </div>
      </div>
      <div class="hpipecircle flex-column py-1 position-absolute single-text-59">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto mr-2 mt-3",
            label: "562SR1",
          }}
        />
      </div>
      <div className="hpipecircle flex-column py-1 position-absolute single-text-60"></div>
      <div className="hpipecircle flex-column py-1 position-absolute single-text-61"></div>
      <div className="hpipecircle flex-column py-1 position-absolute single-text-62"></div>
      <div className="dashedHr-Pipe position-absolute single-text-63 mt-2"></div>
      {/* extra */}
      <div className="position-absolute single-text-64">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto",
            label: "562LQ3_WI",
          }}
        />
        <BlackContainer
          data={{
            label: "SM_562LQ3_WI",
            useClass: "greenTxt  mt-1 mx-auto",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-65">
        {/* a52 */}
        <BlackContainer
          data={{
            label: "SM_562LQ4_PT1",
            useClass: "greenTxt  mt-1 mx-auto",
            unit: "bar.",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-auto",
              label: "562LQ4",
            }}
          />
          {/* d68 */}
          <MotorCircleDigitalTag
            className={`dot ml-3 mt-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "SM_562LQ4_M1_RUN",
                healthyLabel: "SM_562LQ4_M1_PH",
              }
            )}`}
            label="SM_562LQ4_M1_RUN"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-66">
        {/* d67 */}
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ml-3 mt-3 ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "SM_562FN2_RUN", healthyLabel: "SM_562FN2_PH" }
          )}`}
          label="SM_562FN2_RUN"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-auto",
            label: "562FN2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-auto",
            label: "562AS1",
          }}
        />
      </div>
      <div className="position-absolute single-text-67">
        {/* a22 */}
        <BlackContainer
          data={{
            label: "SM_562BF1_PT2",
            useClass: "greenTxt  mt-1 mx-auto",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        {/* a23 */}
        <BlackContainer
          data={{
            label: "SM_562BF1_TT1",
            useClass: "greenTxt  mt-1 mx-auto",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-5",
            label: "To 562BF1",
          }}
        />
        {/* a40 */}
        <BlackContainer
          data={{
            label: "SM_562SR1_PT2",
            useClass: "greenTxt  mt-3 mx-auto",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        {/* a41 */}
        <BlackContainer
          data={{
            label: "SM_562SR1_TT2",
            useClass: "greenTxt  mt-1 mx-auto",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-68">
        {/* a19 */}
        <BlackContainer
          data={{
            label: "SM_562SR1_II",
            useClass: "greenTxt  mt-1 mx-auto",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        {/* a20 */}
        <BlackContainer
          data={{
            label: "SM_562SR1_SI",
            useClass: "greenTxt  mt-1 mx-auto",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        {/* a21 */}
        <BlackContainer
          data={{
            label: "SM_562SR1",
            useClass: "greenTxt  mt-1 mx-auto",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        {/* a18 */}
        <div className="mt-3 mr-3">
          <BlackContainer
            data={{
              label: "SM_562SR1_TT1",
              useClass: "greenTxt  mt-1 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-69 mt-2">
        <div className="d-flex mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "592AS1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-4",
              label: "592AS2",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-70 mt-2">
        <div className="d-flex mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "592AS3",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-4",
              label: "592AS4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-71 d-flex">
        <div className="mr-2">
          <div className="img-66 ml-3 d-flex justify-content-center align-items-center">
            {/* d119 */}

            <MotorCircleDigitalTag
              className={`line-circle mt-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "SM_592FN3_RUN", healthyLabel: "SM_592FN3_PH" }
              )}`}
              label="SM_592FN3_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "592FN3",
            }}
          />
        </div>
        <div>
          <div className="img-66 ml-3 d-flex justify-content-center align-items-center">
            {/* d120 */}
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "SM_592FN4_RUN", healthyLabel: "SM_592FN4_PH" }
              )}`}
              label="SM_592FN4_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "592FN4",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-72 mt-2">
        <div className="mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "592AS5",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-73 d-flex">
        <div className="ml-5">
          <div className="img-66 ml-4 d-flex justify-content-center align-items-center">
            {/* d69 */}
            <MotorCircleDigitalTag
              className={`line-circle mt-1 p-2  digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "SM_592FN6_RUN", healthyLabel: "SM_592FN6_PH" }
              )}`}
              label="SM_592FN6_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "592FN6",
            }}
          />
        </div>
        <div>
          <div className="img-66 ml-4 d-flex justify-content-center align-items-center">
            {/* d70 */}
            <MotorCircleDigitalTag
              className={`line-circle mt-1 p-2  digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "SM_592FN5_RUN", healthyLabel: "SM_592FN5_PH" }
              )}`}
              label="SM_592FN5_RUN"
            />{" "}
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "592FN5",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute  single-text-74 d-flex">
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe"
          // d101
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "SM_592BE1_RUN", healthyLabel: "SM_592BE1_PH" }
            )} `,
            firstCircleLabel: "SM_592BE1_RUN",
          }}
        />
        {/* a87 */}
        <BlackContainer
          data={{
            label: "SM_592BE1_II",
            useClass: "greenTxt  mt-2 ml-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-75">
        <div>
          <div>
            {/* d100 */}
            <MotorCircleDigitalTag
              className={`text-dark px-1 digital-tag mt-2 mx-auto ${useColorStatus(
                "SM_592BE1_BMS"
              )}`}
              text="BMS"
              label="SM_592BE1_BMS"
            />
          </div>
        </div>
        <div className="d-flex mt-2">
          {/* d92 */}
          <MotorCircleDigitalTag
            className={`dot  mt-1 p-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "SM_592BE1_AD_RUN",
                healthyLabel: "SM_592BE1_AD_PH",
              }
            )}`}
            label="SM_592BE1_AD_RUN"
            text="M"
          />

          <div>
            {/* d91 */}
            <MotorCircleDigitalTag
              className={`text-dark digital-tag mt-1 ml-2 ${useColorStatus(
                "SM_592BE1_ZS"
              )}`}
              label="SM_592BE1_ZS"
            />
          </div>
          <div>
            {/* d102 */}
            <MotorCircleDigitalTag
              className={`text-dark digital-tag mt-1 ml-3 ${useColorStatus(
                "SM_592BE1_TS"
              )}`}
              label="SM_592BE1_TS"
            />
          </div>
        </div>
        <div className="d-flex mt-2">
          <div>
            {/* d81 */}
            <MotorCircleDigitalTag
              className={`text-dark px-1 digital-tag mt-2 ${useColorStatus(
                "SM_592BE1_BSS3_ALM"
              )}`}
              text="BSS3A"
              label="SM_592BE1_BSS3_ALM"
            />
          </div>

          <div>
            {/* d89  */}
            <MotorCircleDigitalTag
              className={`text-dark px-1 digital-tag mt-2 ml-3 ${useColorStatus(
                "SM_592BE1_BSS4_ALM"
              )}`}
              text="BSS4A"
              label="SM_592BE1_BSS4_ALM"
            />
          </div>
        </div>
        <div className="d-flex">
          <div>
            {/* d82 */}
            <MotorCircleDigitalTag
              className={`text-dark px-1 digital-tag mt-2 ${useColorStatus(
                "SM_592BE1_BSS3"
              )}`}
              text="BSS3T"
              label="SM_592BE1_BSS3"
            />
          </div>

          <div>
            {/* d84 */}
            <MotorCircleDigitalTag
              className={`text-dark px-1 digital-tag mt-2 ml-3 ${useColorStatus(
                "SM_592BE1_BSS4"
              )}`}
              text="BSS4T"
              label="SM_592BE1_BSS4"
            />
          </div>
        </div>
        <div className="d-flex mt-4">
          <div>
            {/* d76 */}
            <MotorCircleDigitalTag
              className={`text-dark px-1 digital-tag mt-2 ${useColorStatus(
                "SM_592BE1_BSS1_ALM"
              )}`}
              text="BSS1A"
              label="SM_592BE1_BSS1_ALM"
            />
          </div>

          <div>
            {/* d83 */}
            <MotorCircleDigitalTag
              className={`text-dark px-1 digital-tag mt-2 ml-3 ${useColorStatus(
                "SM_592BE1_BSS2_ALM"
              )}`}
              text="BSS2A"
              label="SM_592BE1_BSS2_ALM"
            />
          </div>
        </div>
        <div className="d-flex">
          <div>
            {/* d75 */}
            <MotorCircleDigitalTag
              className={`text-dark px-1 digital-tag mt-2 ${useColorStatus(
                "SM_592BE1_BSS1"
              )}`}
              text="BSS1T"
              label="SM_592BE1_BSS1"
            />
          </div>

          <div>
            {/* d74 */}
            <MotorCircleDigitalTag
              className={`text-dark px-1 digital-tag mt-2 ml-3 ${useColorStatus(
                "SM_592BE1_BSS2"
              )}`}
              text="BSS2T"
              label="SM_592BE1_BSS2"
            />
          </div>
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-76 mt-2">
        <div className="mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto",
              label: "592AS6",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-77 d-flex">
        <div className="mr-2">
          <div className="img-66 ml-3 d-flex justify-content-center align-items-center">
            {/* d86 */}

            <MotorCircleDigitalTag
              className={`line-circle mt-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "SM_592FN9_RUN", healthyLabel: "SM_592FN9_PH" }
              )}`}
              label="SM_592FN9_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "592FN9(W)",
            }}
          />
        </div>
        <div>
          <div className="img-66 ml-3 d-flex justify-content-center align-items-center">
            {/* d87 */}

            <MotorCircleDigitalTag
              className={`line-circle mt-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "SM_592FNA_RUN", healthyLabel: "SM_592FNA_PH" }
              )}`}
              label="SM_592FNA_RUN"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "592FNA(S)",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-81 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  bg-info mb-4",
                  label: "592BF2_BYP",
                }}
              />

              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  {/* d93 */}
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "SM_592RA5"
                    )}`}
                    label="SM_592RA5_RUN"
                  />

                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "592RA5",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr  downArrow position-absolute line-39a ml-3 mb-2"></div>
            </div>
            <div className="ml-5 mt-3 position-absolute">
              <div>
                {/* a38 */}
                <BlackContainer
                  data={{
                    label: "SM_592BF2_DPT",
                    useClass: "greenTxt  mx-auto",
                    unit: "mmWc",
                    unitColor: "unitColor",
                  }}
                />
                {/* a39 */}
                <BlackContainer
                  data={{
                    label: "SM_592BF2_PT",
                    useClass: "greenTxt  mt-1 mx-auto",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  {/* d99 */}
                  <MotorCircleDigitalTag
                    className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "SM_592FN2_RUN",
                        healthyLabel: "SM_592FN2_PH",
                      }
                    )}`}
                    label="SM_592FN2_RUN"
                  />
                </div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "592FN2",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-82 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark  bg-info mb-4",
                  label: "592BF1_BYP",
                }}
              />

              <div className="squareplustri d-flex align-items-end justify-content-center mt-1"></div>
            </div>
            <div className="ml-5 mt-3 position-absolute">
              <div>
                {/* a50 */}
                <BlackContainer
                  data={{
                    label: "SM_592BF1_DPT",
                    useClass: "greenTxt  mx-auto",
                    unit: "mmWc.",
                    unitColor: "unitColor",
                  }}
                />
                {/* a51 */}
                <BlackContainer
                  data={{
                    label: "SM_592BF1_PT",
                    useClass: "greenTxt  mt-1 mx-auto",
                    unit: "bar",
                    unitColor: "unitColor",
                  }}
                />
                <div className="img-97 d-flex justify-content-center  align-items-end">
                  {/* d80 */}

                  <MotorCircleDigitalTag
                    className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                      {
                        runLabel: "SM_592FN1_RUN",
                        healthyLabel: "SM_592FN1_PH",
                      }
                    )}`}
                    label="SM_592FN1_RUN"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-83 ">
        <div className="d-flex">
          <div>
            {/* a27 */}
            <BlackContainer
              data={{
                label: "SM_562BF1_PT3",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            {/* a28 */}
            <BlackContainer
              data={{
                label: "SM_562BF1_TT2",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-2">
            {/* a29 */}
            <BlackContainer
              data={{
                label: "SM_562FN1_PT1",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "mmWcc",
                unitColor: "unitColor",
              }}
            />
            {/* a30 */}
            <BlackContainer
              data={{
                label: "SM_562FN1_TT1",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "°Cc",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-2">
            {/* a31 */}
            <BlackContainer
              data={{
                label: "SM_562SK1_DUST",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            {/* a32 */}
            <BlackContainer
              data={{
                label: "SM_562SK1_FT",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "m3/hr",
                unitColor: "unitColor",
              }}
            />
            {/* a33 */}
            <BlackContainer
              data={{
                label: "SM_562SK1_PT",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            {/* a34 */}
            <BlackContainer
              data={{
                label: "SM_562SK1_TT",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-2">
          <div>
            {/* a88 */}
            <BlackContainer
              data={{
                label: "SM_562BF1_PT1",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "562SD1",
              }}
            />
            {/* a82 */}
            <BlackContainer
              data={{
                label: "SM_562SD1",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "%m",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "SM_562SD1",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "%m",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-2">
            {/* a35 */}
            <BlackContainer
              data={{
                label: "SM_562FN1_II",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "Am",
                unitColor: "unitColor",
              }}
            />
            {/* a36 */}
            <BlackContainer
              data={{
                label: "SM_562FN1_SI",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            {/* a83 */}
            <BlackContainer
              data={{
                label: "SM_562FN1",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "562FN1",
              }}
            />
          </div>
          <div className="ml-2">
            {/* a37 */}
            <BlackContainer
              data={{
                label: "SM_562FN1_PT2",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
            {/* a81 */}
            <BlackContainer
              data={{
                label: "SM_562LD1",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "SM_562LD1",
                useClass: "greenTxt  mt-2 mx-auto",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-84  chimni-red"></div>
      <div className="position-absolute single-text-85 d-flex">
        <div>
          <div className="d-flex">
            <span>
              {/* d103 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 mx-auto ${useColorStatus(
                  "SM_562SD1_ECLS"
                )}`}
                label="SM_562SD1_ECLS"
              />
            </span>
            <span>
              {/* d105 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 ml-2 ${useColorStatus(
                  "SM_562SD1_EOLS"
                )}`}
                label="SM_562SD1_EOLS"
              />
            </span>
          </div>
          <div>
            <div className="dot-square-line d-flex flex-column align-items-center">
              {/* d104 */}

              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "SM_562SD1_EOLS",
                    closeLabel: "SM_562SD1_ECLS",
                    healthyLabel: "SM_562SD1_PH",
                  }
                )}`}
                label="SM_562SD1_EOLS"
              />

              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-86 d-flex">
        <div>
          <div>
            <div className="dot-square-line d-flex flex-column align-items-center">
              {/* d107 */}

              <MotorCircleDigitalTag
                className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                  {
                    openLabel: "SM_562LD1_EOLS",
                    closeLabel: "SM_562LD1_ECLS",
                    healthyLabel: "SM_562LD1_PH",
                  }
                )}`}
                label="SM_562LD1_EOLS"
              />

              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <div className="d-flex">
            <span>
              {/* d108 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 mx-auto ${useColorStatus(
                  "SM_562LD1_ECLS"
                )}`}
                label="SM_562LD1_ECLS"
              />
            </span>
            <span>
              {/* d109 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 ml-2 ${useColorStatus(
                  "SM_562LD1_EOLS"
                )}`}
                label="SM_562LD1_EOLS"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "562LD1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-87 d-flex">
        <div>
          <div className="d-flex">
            <span>
              <MotorCircleDigitalTag
                className={`square digital-tag mt-1 mx-auto ${useColorStatus(
                  "SM_592SM1_ZSS"
                )}`}
                label="SM_592SM1_ZSS"
              />
            </span>
          </div>
          <div>
            <div className="dot-square-line d-flex flex-column align-items-center">
              {/* d71 */}

              <MotorCircleDigitalTag
                className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "SM_592SG1_OLS", closeLabel: "SM_592SG1_CLS" }
                )}`}
                label="SM_592SG1_OLS"
              />

              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "592SG1",
            }}
          />
        </div>
      </div>
      {/* d78 */}
      <MotorCircleDigitalTag
        className={`dot position-absolute single-text-88 mt-1 mx-auto digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          {
            runLabel: "SM_592SM1_RUN",
            healthyLabel: "SM_592SM1_PH",
          }
        )}`}
        label="SM_592SM1_RUN"
        text="M"
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-89",
          label: "FORM 562FN1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute box-1 p-1 single-text-90",
          label: "HAG HOT GAS",
        }}
      />
      <div className="position-absolute single-text-91 d-flex">
        <div className="d-flex mr-4">
          <MimicCaret
            parentClass="tringle-item"
            // d85
            firstCaretClass={`fa-solid fa-caret-down  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "SM_592BV1_OLS",
                closeLabel: "SM_592BV1_CLS",
              }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "SM_592BV1_OLS",
                closeLabel: "SM_592BV1_CLS",
              }
            )}`}
            label="SM_592BV1_OLS"
          />
        </div>
        <div className="d-flex ml-5">
          {/* d88 */}
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "SM_592BV2_OLS",
                closeLabel: "SM_592BV2_CLS",
              }
            )}`}
            secondCaretClass={`fa-solid fa-caret-up  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
              {
                openLabel: "SM_592BV2_OLS",
                closeLabel: "SM_592BV2_CLS",
              }
            )}`}
            label="SM_592BV2_OLS"
          />
        </div>
      </div>
      <div className="position-absolute single-text-93">
        {/* d106 */}
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "SM_562FN1_RUN",
              healthyLabel: "SM_562FN1_PH",
            }
          )}`}
          label="SM_562FN1_RUN"
        />
        <div class="yellowline-Vr downArrow position-absolute line-24a"></div>
      </div>
      <div className="position-absolute single-text-94 d-flex">
        {/* d12 */}
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "SM_562BE1_AD_RUN",
              healthyLabel: "SM_562BE1_AD_PH",
            }
          )}`}
          label="SM_562BE1_AD_RUN"
          text="M"
        />

        <span>
          {/* d14 */}
          <MotorCircleDigitalTag
            className={`square digital-tag ml-2 ${useColorStatus(
              "SM_562BE1M01_ZS1"
            )}`}
            label="SM_562BE1M01_ZS1"
          />
        </span>
        <span>
          {/* d16 */}
          <MotorCircleDigitalTag
            className={`square digital-tag ml-4 mt-4 ${useColorStatus(
              "SM_562BE1_TS1"
            )}`}
            label="SM_562BE1_TS1"
          />
        </span>
      </div>
      <div className="position-absolute single-text-95">
        {/* d50 */}
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "SM_562MD1_RUN",
              healthyLabel: "SM_562MD1_PH",
            }
          )}`}
          label="SM_562MD1_RUN"
        />

        <div class="yellowline-Vr downArrow position-absolute line-24a"></div>
      </div>
      <div className="position-absolute single-text-96">
        {/* d51 */}
        <MotorCircleDigitalTag
          className={`dot digital-tag mt-1 ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "SM_562MD2_RUN",
              healthyLabel: "SM_562MD2_PH",
            }
          )}`}
          label="SM_562MD2_RUN"
        />
        <div class="yellowline-Vr downArrow position-absolute line-24a"></div>
      </div>
      <div className="position-absolute single-text-97">
        <span className=" mt-2">
          {/* d13 */}
          <MotorCircleDigitalTag
            className={`text-dark digital-tag px-2 mt-1 ml-2 ${useColorStatus(
              "SM_562BE1_BMS1"
            )}`}
            text="BMS"
            label="SM_562BE1_BMS1"
          />
        </span>
      </div>
      <div className="position-absolute single-text-98 ">
        <div className="d-flex">
          <div>
            <div className="dot-square-line d-flex flex-column align-items-center">
              {/* d90 */}
              <MotorCircleDigitalTag
                className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                  { openLabel: "SM_592SG4_OLS", closeLabel: "SM_592SG4_CLS" }
                )}`}
                label="SM_592SG4_OLS"
              />
              <div className="yellowline-Vr position-relative"></div>
              <div className={`square grey-color`}></div>
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-4 mt-3",
              label: "592SG3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-100">
        <div>
          {/* d73 */}
          <MotorCircleDigitalTag
            className={`text-dark px-1 digital-tag mt-2 ${useColorStatus(
              "SM_592BE1_LS1"
            )}`}
            text="BLLS"
            label="SM_592BE1_LS1"
          />
        </div>
        <div>
          {/* d72 */}
          <MotorCircleDigitalTag
            className={`text-dark px-1 digital-tag mt-2 ${useColorStatus(
              "SM_592BE1_LS2"
            )}`}
            text="BLLS"
            label="SM_592BE1_LS2"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-101">
        <span>
          <MotorCircleDigitalTag
            className={`square digital-tag ml-1 ${useColorStatus(
              "SM_592BF1_DPT"
            )}`}
            label="SM_592BF1_DPT"
          />
        </span>

        <span>
          <MotorCircleDigitalTag
            className={`square digital-tag ml-1 ${useColorStatus(
              "SM_592BF1_PT"
            )}`}
            label="SM_592BF1_PT"
          />
        </span>
      </div>
      <div className="d-flex position-absolute single-text-102">
        <span>
          <MotorCircleDigitalTag
            className={`square digital-tag ml-1 ${useColorStatus(
              "SM_592BF2_DPT"
            )}`}
            label="SM_592BF2_DPT"
          />
        </span>
        <span>
          <MotorCircleDigitalTag
            className={`square digital-tag ml-1 ${useColorStatus(
              "SM_592BF2_PT"
            )}`}
            label="SM_592BF2_PT"
          />
        </span>
      </div>
      <div className="position-absolute single-text-103">
        <span>
          {/* d38 */}
          <MotorCircleDigitalTag
            className={`square digital-tag ml-5 ${useColorStatus(
              "SM_562SG2_EOLS"
            )}`}
            label="SM_562SG2_EOLS"
          />
        </span>
      </div>
      <div className="position-absolute single-text-104">
        <div class="triangle-with-squares">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "532HP1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-105">
        {/* a1 */}
        <BlackContainer
          data={{
            label: "SM_532WF1_WI",
            useClass: "greenTxt  mt-2",
            unit: "Ton",
            unitColor: "unitColor",
          }}
        />
        {/* a2 */}
        <BlackContainer
          data={{
            label: "SM_532WF1_FR",
            useClass: "greenTxt  mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        {/* a3 */}
        <BlackContainer
          data={{
            label: "SM_532WF1_II",
            useClass: "greenTxt  mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        {/* a4 */}
        <BlackContainer
          data={{
            label: "SM_532WF1_SI",
            useClass: "greenTxt  mt-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        {/* a5 */}
        <BlackContainer
          data={{
            label: "SM_532WF1_EXT_SP",
            useClass: "greenTxt  mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-106 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "592BV1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-3",
            label: "592BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-107 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "TO SILO 2",
          }}
        />
      </div>
      <div className="position-absolute single-text-108">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "592FN1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "592SM1",
          }}
        />
      </div>
      <div className="position-absolute single-text-109">
        {/* a8 */}
        <BlackContainer
          data={{
            label: "SM_532MT1_CNT",
            useClass: "greenTxt  mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        {/* a9 */}
        <BlackContainer
          data={{
            label: "SM_532DG1_CNT",
            useClass: "greenTxt  mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-110">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2 mt-2",
              label: "PV",
            }}
          />
          {/* a89 */}
          <BlackContainer
            data={{
              label: "SM_532Wf1_PID",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2 mt-2",
              label: "MV",
            }}
          />
          <BlackContainer
            data={{
              label: "SM_532Wf1_PID",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2 mt-2",
              label: "PV",
            }}
          />
          <BlackContainer
            data={{
              label: "SM_532Wf1_PID",
              useClass: "greenTxt  mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-111">
        {/* a74 */}
        <BlackContainer
          data={{
            label: "SM_562SC2_TT",
            useClass: "greenTxt  mt-2",
            unit: " S",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-112">
        {/* a17 */}
        <BlackContainer
          data={{
            label: "SM_562SC1_TT",
            useClass: "greenTxt  mt-2",
            unit: " S",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-113">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "532SG2",
          }}
        />
      </div>
      <div className="position-absolute single-text-114">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "532AB5",
          }}
        />
      </div>
    </div>
  );
};

import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../index";

import {
  useMotorTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useBVTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const CementSilo2Karur = () => {
  return (
    <div className="CementSilo1Kukurdih CS2Kukurdih w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <div className="d-flex justify-content-center pipeVr position-absolute pipe-1">
          <div className="trapezoid"></div>
          <div className="position-absolute single-text-2">
            <div className="dashedHr-Pipe mt-1 position-relative single-text-3"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-4"></div>

            <div className="dashedHr-Pipe mt-1 position-relative single-text-5"></div>
          </div>
          <div className="position-absolute single-text-6">
            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-3"></div>

            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-4"></div>

            <div className="dashedHr-Pipe mt-1 ml-auto position-relative single-text-5"></div>
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-7">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGB",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d4 */}
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SGB_OLS",
                      closeLabel: "PP_611SGB_CLS",
                      healthyLabel:"PP_611SGB_PH"
                    }
                  )}`}
                  label="PP_611SGB_OLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-4",
                label: "611CGB",
              }}
            />
            <div className="d-flex">
              {/* d5 */}
              <MotorCircleDigitalTag
                className={`square digital-tag mr-1 mt-3 ${useColorStatus(
                  "PP_611CGB_ECLS"
                )}`}
                label="PP_611CGB_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d6 */}
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGB_EOLS",
                      closeLabel: "PP_611CGB_ECLS",
                      healthyLabel: "PP_611CGB_PH",
                    }
                  )}`}
                  label="PP_611CGB_EOLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              {/* d7 */}
              <MotorCircleDigitalTag
                className={`square digital-tag ml-2 mt-3 ${useColorStatus(
                  "PP_611CGB_EOLS"
                )}`}
                label="PP_611CGB_EOLS"
              />
            </div>
          </div>
        </div>

        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGD",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d11 */}
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SGD_OLS",
                      closeLabel: "PP_611SGD_CLS",
                      healthyLabel:"PP_611SGD_PH"
                    }
                  )}`}
                  label="PP_611SGD_OLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-4",
                label: "611CGD",
              }}
            />
            <div className="d-flex">
              {/* d9 */}
              <MotorCircleDigitalTag
                className={`square mr-1 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGD_ECLS"
                )}`}
                label="PP_611CGD_ECLS"
              />
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d8 */}

                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGD_EOLS",
                      closeLabel: "PP_611CGD_ECLS",
                      healthyLabel: "PP_611CGD_PH",
                    }
                  )}`}
                  label="PP_611CGD_EOLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              {/* d10 */}
              <MotorCircleDigitalTag
                className={`square ml-2 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGD_EOLS"
                )}`}
                label="PP_611CGD_EOLS"
              />
            </div>
          </div>
        </div>

        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGF",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d12 */}
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SGF_OLS",
                      closeLabel: "PP_611SGF_CLS",
                      healthyLabel:"PP_611SGF_PH"
                    }
                  )}`}
                  label="PP_611SGF_OLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-4",
                label: "611CGF",
              }}
            />
            <div className="d-flex">
              {/* d13 */}
              <MotorCircleDigitalTag
                className={`square mr-1 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGF_ECLS"
                )}`}
                label="PP_611CGF_ECLS"
              />

              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d14 */}

                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGF_EOLS",
                      closeLabel: "PP_611CGF_ECLS",
                      healthyLabel: "PP_611CGF_PH",
                    }
                  )}`}
                  label="PP_611CGF_EOLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              {/* d15 */}
              <MotorCircleDigitalTag
                className={`square ml-2 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGF_EOLS"
                )}`}
                label="PP_611CGF_EOLS"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-8">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CGC",
              }}
            />
            <div className="d-flex">
              {/* d18 */}
              <MotorCircleDigitalTag
                className={`square mr-1 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGC_EOLS"
                )}`}
                label="PP_611CGC_EOLS"
              />

              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d17 */}
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGC_EOLS",
                      closeLabel: "PP_611CGC_ECLS",
                      healthyLabel: "PP_611CGC_PH",
                    }
                  )}`}
                  label="PP_611CGC_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              {/* d19 */}
              <MotorCircleDigitalTag
                className={`square ml-2 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGC_ECLS"
                )}`}
                label="PP_611CGC_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGC",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d20 */}
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SGC_OLS",
                      closeLabel: "PP_611SGC_CLS",
                      healthyLabel:"PP_611SGC_PH"
                    }
                  )}`}
                  label="PP_611SGC_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CGE",
              }}
            />
            <div className="d-flex">
              {/* d22 */}
              <MotorCircleDigitalTag
                className={`square mr-1 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGE_EOLS"
                )}`}
                label="PP_611CGE_EOLS"
              />

              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d21 */}

                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGE_EOLS",
                      closeLabel: "PP_611CGE_ECLS",
                      healthyLabel: "PP_611CGE_PH",
                    }
                  )}`}
                  label="PP_611CGE_EOLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              {/* d23 */}
              <MotorCircleDigitalTag
                className={`square ml-2 mt-3 digital-tag ${useColorStatus(
                  "v"
                )}`}
                label="PP_611CGE_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGE",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d24 */}
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SGE_OLS",
                      closeLabel: "PP_611SGE_CLS",
                      healthyLabel:"PP_611SGE_PH"
                    }
                  )}`}
                  label="PP_611SGE_OLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CGG",
              }}
            />
            <div className="d-flex">
              {/* d28 */}
              <MotorCircleDigitalTag
                className={`square mr-1 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGG_EOLS"
                )}`}
                label="PP_611CGG_EOLS"
              />

              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d27 */}

                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGG_EOLS",
                      closeLabel: "PP_611CGG_ECLS",
                      healthyLabel: "PP_611CGG_PH",
                    }
                  )}`}
                  label="PP_611CGG_EOLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              {/* d26 */}
              <MotorCircleDigitalTag
                className={`square ml-2 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGG_ECLS"
                )}`}
                label="PP_611CGG_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGG",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d25 */}
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SGG_OLS",
                      closeLabel: "PP_611SGG_CLS",
                      healthyLabel:"PP_611SGG_PH"
                    }
                  )}`}
                  label="PP_611SGG_OLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute  single-text-9 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RUN SEQ",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "TIMER PV",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "OVERLAP TIME",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SILO COMMON CG S",
            }}
          />
        </div>
        <div className="ml-3">
          {/* a23 */}
          <BlackContainer
            data={{
              label: "SILO2_SEQ_CV",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          {/* a24 */}
          <BlackContainer
            data={{
              label: "SILO2_TIMER1_PV",
              useClass: "greenTxt mt-1",
              unit: "Sec",
              unitColor: "unitColor",
            }}
          />
          {/* a25 */}
          <BlackContainer
            data={{
              label: "SILO2_OVLP_TIME",
              useClass: "greenTxt mt-1",
              unit: "Sec",
              unitColor: "unitColor",
            }}
          />
          {/* a26 */}
          <BlackContainer
            data={{
              label: "SILO2_CG_SP",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute  single-text-10">
        {/* d29 */}
        <MotorCircleDigitalTag
          className={`square mx-auto digital-tag ${useColorStatus(
            "PP_611BI2_PH"
          )}`}
          label="PP_611BI2_PH"
        />

        <div className="containerImage text-center ml-2">
          <div className="d-flex pt-3">
          <MotorCircleDigitalTag
            className={`square  mt-1 ml-2 digital-tag ${useColorStatus(
              "PP_611BI2_LS"
            )}`}
            label="PP_611BI2_LS"
          />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "611Bl2",
              }}
            />
          </div>
          {/* a9 */}
          <BlackContainer
            data={{
              label: "PP_611BI2_WI",
              useClass: "greenTxt  mt-5 ml-2",
              unit: "Tons",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-11"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-12"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-13"></div>
      <div className="position-absolute  single-text-14">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CGH",
              }}
            />
            <div className="d-flex">
              {/* d30 */}
              <MotorCircleDigitalTag
                className={`square mr-1 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGH_EOLS"
                )}`}
                label="PP_611CGH_EOLS"
              />

              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d31 */}
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGH_EOLS",
                      closeLabel: "PP_611CGH_ECLS",
                      healthyLabel: "PP_611CGH_PH",
                    }
                  )}`}
                  label="PP_611CGH_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              {/* d32 */}
              <MotorCircleDigitalTag
                className={`square ml-2 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGH_ECLS"
                )}`}
                label="PP_611CGH_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGH",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d33 */}
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SGH_OLS",
                      closeLabel: "PP_611SGH_CLS",
                      healthyLabel:"PP_611SGH_PH"
                    }
                  )}`}
                  label="PP_611SGH_OLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CGJ",
              }}
            />
            <div className="d-flex">
              {/* d34 */}
              <MotorCircleDigitalTag
                className={`square mr-1 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGJ_EOLS"
                )}`}
                label="PP_611CGJ_EOLS"
              />

              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d35 */}

                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGJ_EOLS",
                      closeLabel: "PP_611CGJ_ECLS",
                      healthyLabel: "PP_611CGJ_PH",
                    }
                  )}`}
                  label="PP_611CGJ_EOLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              {/* d36 */}
              <MotorCircleDigitalTag
                className={`square ml-2 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGJ_ECLS"
                )}`}
                label="PP_611CGJ_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGJ",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d37 */}
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SGJ_OLS",
                      closeLabel: "PP_611SGJ_CLS",
                      healthyLabel:"PP_611SGJ_PH"
                    }
                  )}`}
                  label="PP_611SGJ_OLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611CGK",
              }}
            />
            <div className="d-flex">
              {/* d39 */}
              <MotorCircleDigitalTag
                className={`square mr-1 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGK_EOLS"
                )}`}
                label="PP_611CGK_EOLS"
              />

              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d40 */}

                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGK_EOLS",
                      closeLabel: "PP_611CGK_ECLS",
                      healthyLabel: "PP_611CGK_PH",
                    }
                  )}`}
                  label="PP_611CGK_EOLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              {/* d41 */}
              <MotorCircleDigitalTag
                className={`square ml-2 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGK_ECLS"
                )}`}
                label="PP_611CGK_ECLS"
              />
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGK",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d42 */}
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SGK_OLS",
                      closeLabel: "PP_611SGK_CLS",
                      healthyLabel:"PP_611SGK_PH"
                    }
                  )}`}
                  label="PP_611SGK_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-15"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-16"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-17"></div>
      <div className="position-absolute  single-text-18">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1P",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d71 */}
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1P_OLS",
                      closeLabel: "PP_611SG1P_CLS",
                      healthyLabel:"PP_611SG1P_PH"
                    }
                  )}`}
                  label="PP_611SG1P_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-4",
                label: "611CG1K",
              }}
            />
            <div className="d-flex">
              {/* d72 */}
              <MotorCircleDigitalTag
                className={`square mr-1 mt-3 digital-tag ${useColorStatus(
                  "PP_611CG1K_ECLS"
                )}`}
                label="PP_611CG1K_ECLS"
              />

              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d73 */}
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1K_EOLS",
                      closeLabel: "PP_611CG1K_ECLS",
                      healthyLabel: "PP_611CG1K_PH",
                    }
                  )}`}
                  label="PP_611CG1K_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              {/* d74 */}
              <MotorCircleDigitalTag
                className={`square ml-2 mt-3 digital-tag ${useColorStatus(
                  "PP_611CG1K_EOLS"
                )}`}
                label="PP_611CG1K_EOLS"
              />
            </div>
          </div>
        </div>

        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SG1Q",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d70 */}
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SG1Q_OLS",
                      closeLabel: "PP_611SG1Q_CLS",
                      healthyLabel:"PP_611SG1Q_PH"
                    }
                  )}`}
                  label="PP_611SG1Q_OLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-4",
                label: "611CG1L",
              }}
            />
            <div className="d-flex">
              {/* d69 */}
              <MotorCircleDigitalTag
                className={`square mr-1 mt-3 digital-tag ${useColorStatus(
                  "PP_611CG1L_ECLS"
                )}`}
                label="PP_611CG1L_ECLS"
              />

              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d68 */}

                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CG1L_EOLS",
                      closeLabel: "PP_611CG1L_ECLS",
                      healthyLabel: "PP_611CG1L_PH",
                    }
                  )}`}
                  label="PP_611CG1L_EOLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              {/* d67 */}
              <MotorCircleDigitalTag
                className={`square ml-2 mt-3 digital-tag ${useColorStatus(
                  "PP_611CG1L_EOLS"
                )}`}
                label="PP_611CG1L_EOLS"
              />
            </div>
          </div>
        </div>

        <div className="d-flex mt-1">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "611SGL",
              }}
            />
            <div className="d-flex">
              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                {/* d66 */}
                <MotorCircleDigitalTag
                  className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611SGL_OLS",
                      closeLabel: "PP_611SGL_CLS",
                      healthyLabel:"PP_611SGL_PH"
                    }
                  )}`}
                  label="PP_611SGL_OLS"
                />

                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
            </div>
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-4",
                label: "611CGL",
              }}
            />
            <div className="d-flex">
              {/* d65 */}
              <MotorCircleDigitalTag
                className={`square mr-1 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGL_ECLS"
                )}`}
                label="PP_611CGL_ECLS"
              />

              <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                    {
                      openLabel: "PP_611CGL_EOLS",
                      closeLabel: "PP_611CGL_ECLS",
                      healthyLabel: "PP_611CGL_PH",
                    }
                  )}`}
                  label="PP_611CGL_EOLS"
                />
                <div className="yellowline-Vr position-relative"></div>
                <div className={`square grey-color`}></div>
              </div>
              {/* d64 */}
              <MotorCircleDigitalTag
                className={`square ml-2 mt-3 digital-tag ${useColorStatus(
                  "PP_611CGL_EOLS"
                )}`}
                label="PP_611CGL_EOLS"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-19"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-20"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-21"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-22"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-23"></div>
      <div className="dashedHr-Pipe mt-1 position-relative single-text-24"></div>
      <div className="position-relative single-text-25 d-flex justify-content-around">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "611ASH",
          }}
        />
        <div>
          {/* a5 */}
          <BlackContainer
            data={{
              label: "PP_611CGJ_ZT",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          {/* a6 */}
          <BlackContainer
            data={{
              label: "PP_611CGJ",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-relative single-text-26 d-flex justify-content-around">
        <div>
          {/* a19 */}
          <BlackContainer
            data={{
              label: "PP_611CG1L_ZT",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          {/* a18 */}
          <BlackContainer
            data={{
              label: "PP_611CG1L",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "611AS1Q",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex justify-content-around">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611ASJ",
          }}
        />
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d38 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNC_RUN", healthyLabel: "PP_611FNC_PH" }
                )}`}
                label="PP_611FNC_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FNC",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex justify-content-around">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611ASK",
          }}
        />
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d43 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FND_RUN", healthyLabel: "PP_611FND_PH" }
                )}`}
                label="PP_611FND_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FND",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29 d-flex justify-content-around">
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d44 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNE_RUN", healthyLabel: "PP_611FNE_PH" }
                )}`}
                label="PP_611FNE_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FNE",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex justify-content-around">
        {/* <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_621FN4_RUN", healthyLabel: "PP_621FN4_PH" }
                )}`}
                label="PP_621FN4_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN1P",
            }}
          />
        </div> */}
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611AS1P",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 d-flex justify-content-around">
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d63 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN2N_RUN", healthyLabel: "PP_611FN2N_PH" }
                )}`}
                label="PP_611FN2N_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FN2N",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "611ASL",
          }}
        />
      </div>
      <div className="position-absolute single-text-32 d-flex justify-content-around">
        <div className=" d-flex">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d62 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNF_RUN", healthyLabel: "PP_611FNF_PH" }
                )}`}
                label="PP_611FNF_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "611FNF",
            }}
          />
        </div>
      </div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-33"></div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-34"></div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-35"></div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-36"></div>
      <div className="dashedHr-Pipe mt-1 position-absolute single-text-37"></div>
      <div className=" position-absolute  single-text-38">
        {/* a13 */}
        <BlackContainer
          data={{
            label: "PP_641BI4_WI",
            useClass: "greenTxt  mt-2 mb-2",
            unit: "tons",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="pipe dotted-pipe position-relative"
          // d61
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "PP_641BE4_RUN", healthyLabel: "PP_641BE4_PH" }
            )} `,
            firstCircleLabel: "PP_641BE4_RUN",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "641BE4",
          }}
        />
      </div>
      <div className=" position-absolute  single-text-39">
        <div className="d-flex">
          <PipeWithCircles
            parentDivClass="pipe dotted-pipe position-relative"
            // d48
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PP_641BE1_RUN", healthyLabel: "PP_641BE1_PH" }
              )} `,
              firstCircleLabel: "PP_641BE1_RUN",
            }}
          />
          <div className="ml-3">
            {/* a10 */}
            <BlackContainer
              data={{
                label: "PP_641BI1_WI",
                useClass: "greenTxt  mt-2 mb-2",
                unit: "tons",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "641BE1",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611ASY",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute  single-text-40">
        <div className="d-flex">
          <PipeWithCircles
            parentDivClass="pipe dotted-pipe position-relative"
            // d49
            firstCircle={{
              firstCircleClass: `dot grayDot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PP_641BE2_RUN", healthyLabel: "PP_641BE2_PH" }
              )} `,
              firstCircleLabel: "PP_641BE2_RUN",
            }}
          />
          <div className="ml-3">
            {/* a11 */}
            <BlackContainer
              data={{
                label: "PP_641BI2_WI",
                useClass: "greenTxt  mt-2 mb-2",
                unit: "tons",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "641BE2",
              }}
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611ASZ",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute  single-text-41">
        <div className="d-flex">
          <PipeWithCircles
            parentDivClass="pipe dotted-pipe position-relative"
            // d53
            firstCircle={{
              firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "PP_641BE3_RUN", healthyLabel: "PP_641BE3_PH" }
              )} `,
              firstCircleLabel: "PP_641BE3_RUN",
            }}
          />
          <div className="ml-3">
            {/* a12 */}
            <BlackContainer
              data={{
                label: "PP_641BI3_WI",
                useClass: "greenTxt  mt-2 mb-2",
                unit: "tons",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "641BE3",
              }}
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="position-absolute single-text-42 d-flex">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d76 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNA_RUN", healthyLabel: "PP_611FNA_PH" }
                )}`}
                label="PP_611FNA_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FNA",
            }}
          />
        </div>
        <div className="ml-3">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d75 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNB_RUN", healthyLabel: "PP_611FNB_PH" }
                )}`}
                label="PP_611FNB_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FNB",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43 d-flex justify-content-around">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d45 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNN_RUN", healthyLabel: "PP_611FNN_PH" }
                )}`}
                label="PP_611FNN_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FNN",
            }}
          />
        </div>
        <div className="ml-2">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d46 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNS_RUN", healthyLabel: "PP_611FNS_PH" }
                )}`}
                label="PP_611FNS_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-1",
              label: "611FNS",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-44 d-flex justify-content-around">
        <div className="ml-3 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FNP",
            }}
          />
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d50 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNP_RUN", healthyLabel: "PP_611FNP_PH" }
                )}`}
                label="PP_611FNP_RUN"
              />
            </span>
          </div>
        </div>
        <div className="ml-3 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 mr-1",
              label: "611FNT",
            }}
          />
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d51 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNT_RUN", healthyLabel: "PP_611FNT_PH" }
                )}`}
                label="PP_611FNT_RUN"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-45 d-flex justify-content-around">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d58 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNR_RUN", healthyLabel: "PP_611FNR_PH" }
                )}`}
                label="PP_611FNR_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "611FNR",
            }}
          />
        </div>

        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d57 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNQ_RUN", healthyLabel: "PP_611FNQ_PH" }
                )}`}
                label="PP_611FNQ_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "611FNQ",
            }}
          />
        </div>

        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d56 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNV_RUN", healthyLabel: "PP_611FNV_PH" }
                )}`}
                label="PP_611FNV_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "611FNV",
            }}
          />
        </div>

        <div className="ml-2">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d55 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNU_RUN", healthyLabel: "PP_611FNU_PH" }
                )}`}
                label="PP_611FNU_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 mr-1",
              label: "611FNU",
            }}
          />
        </div>
      </div>
      {/* <div className="position-absolute single-text-46 d-flex justify-content-around">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_621FN4_RUN", healthyLabel: "PP_621FN4_PH" }
                )}`}
                label="PP_621FN4_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FN1V",
            }}
          />
        </div>
      </div> */}
      <div className="position-absolute single-text-47 d-flex justify-content-around">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4",
              label: "FROM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "611FNR",
            }}
          />
        </div>

        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d59 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN1S_RUN", healthyLabel: "PP_611FN1S_PH" }
                )}`}
                label="PP_611FN1S_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FN1S",
            }}
          />
        </div>

        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4",
              label: "FROM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "611FNV",
            }}
          />
        </div>

        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d60 */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FN1T_RUN", healthyLabel: "PP_611FN1T_PH" }
                )}`}
                label="PP_611FN1T_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FN1T",
            }}
          />
        </div>
      </div>
      <div className="position-absolute  single-text-48">
        <div className="d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            {/* d47 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PP_611SGX_OLS",
                  closeLabel: "PP_611SGX_CLS",
                  healthyLabel:"PP_611SGX_PH"
                }
              )}`}
              label="PP_611SGX_OLS"
            />

            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "611SGX",
          }}
        />
      </div>
      <div className="position-absolute  single-text-49">
        <div className="d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            {/* d52 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PP_611SGY_OLS",
                  closeLabel: "PP_611SGY_CLS",
                  healthyLabel:"PP_611SGY_PH"
                }
              )}`}
              label="PP_611SGY_OLS"
            />

            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "611SGY",
          }}
        />
      </div>
      <div className="position-absolute  single-text-50">
        <div className="d-flex">
          <div className="dot-square-line  ml-2 d-flex flex-column align-items-center">
            {/* d54 */}
            <MotorCircleDigitalTag
              className={`square digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "PP_611SGZ_OLS",
                  closeLabel: "PP_611SGZ_CLS",
                  healthyLabel:"PP_611SGZ_PH"
                }
              )}`}
              label="PP_611SGZ_OLS"
            />

            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "611SGZ",
          }}
        />
      </div>
      <div className="position-absolute  single-text-52 d-flex">
        <div>
          {/* a22 */}
          <BlackContainer
            data={{
              label: "PP_611HR2_TE",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "611HR2",
            }}
          />
        </div>
        <div className="ml-2">
          {/* d78 */}

          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PP_611HR2_RUN",
                healthyLabel: "PP_611HR2_PH",
              }
            )}`}
            label="PP_611HR2_RUN"
          />
        </div>
      </div>
      <div className="position-absolute  single-text-53 d-flex">
        <div>
          {/* a27 */}
          <BlackContainer
            data={{
              label: "PP_611HR6_TE",
              useClass: "greenTxt  mt-2 mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          {/* d84 */}

          <MotorCircleDigitalTag
            className={`dot digital-tag ml-1 mt-3 ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "PP_611HR6_RUN",
                healthyLabel: "PP_611HR6_PH",
              }
            )}`}
            label="PP_611HR6_RUN"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "611HR5",
          }}
        />
      </div>

      <div className="position-absolute single-text-55 d-flex">
        <MimicCaret
          parentClass="tringle-item"
          // d82
          firstCaretClass={`fa-solid fa-caret-down  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV2J_OLS",
              closeLabel: "PP_611BV2J_CLS",
            }
          )}`}
          secondCaretClass={`fa-solid fa-caret-up  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV2J_OLS",
              closeLabel: "PP_611BV2J_CLS",
            }
          )}`}
          label="PP_611BV2J_OLS"
        />
      </div>

      <div className="position-absolute single-text-56">
        {/* d77 */}
        <MimicCaret
          parentClass="tringle-item d-flex ml-3"
          firstCaretClass={`fa-solid fa-caret-right  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV7_OLS",
              closeLabel: "PP_611BV7_CLS",
            }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV7_OLS",
              closeLabel: "PP_611BV7_CLS",
            }
          )}`}
          label="PP_611BV7_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "611BV7",
          }}
        />
      </div>
      <div className="position-absolute single-text-57">
        {/* d79 */}
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right   d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV3_OLS",
              closeLabel: "PP_611BV3_CLS",
            }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV3_OLS",
              closeLabel: "PP_611BV3_CLS",
            }
          )}`}
          label="PP_611BV3_OLS"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV3",
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        {/* d85 */}
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV2B_OLS",
              closeLabel: "PP_611BV2B_CLS",
            }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV2B_OLS",
              closeLabel: "PP_611BV2B_CLS",
            }
          )}`}
          label="PP_611BV2B_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV2B",
          }}
        />
      </div>
      <div className="position-absolute single-text-59">
        {/* d83 */}
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right  d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV2E_OLS",
              closeLabel: "PP_611BV2E_CLS",
            }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left  d-block digital-tag  ${useBVTagsColorStatusForNewPlantScreens(
            {
              openLabel: "PP_611BV2E_OLS",
              closeLabel: "PP_611BV2E_CLS",
            }
          )}`}
          label="PP_611BV2E_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611BV2E",
          }}
        />
      </div>
      <div className="position-absolute single-text-60 d-flex">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d80 */}
              {/* <div className="line-circle mt-2 grey-color" /> */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611BL2_RUN", healthyLabel: "PP_611BL2_PH" }
                )}`}
                label="PP_611BL2_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611BL2",
            }}
          />
        </div>
        <div className="ml-3">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d81 */}
              {/* <div className="line-circle mt-2 grey-color" /> */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611BL9_RUN", healthyLabel: "PP_611BL9_PH" }
                )}`}
                label="PP_611BL9_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611BL9",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-61 d-flex">
        {/* a14 */}
        <BlackContainer
          data={{
            label: "PP_611BL2_PT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        {/* a15 */}
        <BlackContainer
          data={{
            label: "PP_611BL9_PT",
            useClass: "greenTxt  ml-4",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-62 d-flex">
        <div>
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d86 */}
              {/* <div className="line-circle mt-2 grey-color" /> */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611BL6_RUN", healthyLabel: "PP_611BL6_PH" }
                )}`}
                label="PP_611BL6_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611BL6",
            }}
          />
        </div>
        <div className="ml-3">
          <div class="img-66 ml-3 d-flex justify-content-center align-items-center">
            <span>
              {/* d87 */}
              {/* <div className="line-circle mt-2 grey-color" /> */}
              <MotorCircleDigitalTag
                className={`line-circle mt-2 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611BLA_RUN", healthyLabel: "PP_611BLA_PH" }
                )}`}
                label="PP_611BLA_RUN"
              />
            </span>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611BLA",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-63 d-flex">
        {/* a28 */}
        <BlackContainer
          data={{
            label: "PP_611BL6_PT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        {/* a29 */}
        <BlackContainer
          data={{
            label: "PP_611BLA_PT",
            useClass: "greenTxt  ml-4",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-64">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "TO SILO 2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark   mt-4 mr-4 ",
            label: " ",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "TO ATM",
          }}
        />
      </div>
      <div className="position-absolute single-text-65">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ",
            label: "611BV2J",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 mr-4",
            label: "TO 611BI-2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4",
            label: "TO ATM",
          }}
        />
      </div>
      <div className="position-absolute single-text-66">
        {/* a21 */}
        <BlackContainer
          data={{
            label: "PP_611CG1K_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        {/* a20 */}
        <BlackContainer
          data={{
            label: "PP_611CG1K",
            useClass: "greenTxt  mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-67">
        {/* a3 */}
        <BlackContainer
          data={{
            label: "PP_611CGH_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        {/* a4 */}
        <BlackContainer
          data={{
            label: "PP_611CGH",
            useClass: "greenTxt  mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-68 d-flex">
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark bg-info ml-2 mt-2",
                    label: "BYP",
                  }}
                />
                <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark mt-2",
                      label: "611BF2",
                    }}
                  />
              </div>
              <div className="squareplustri d-flex align-items-end justify-content-center mt-1">
                <div className="d-flex align-items-end justify-content-center ml-5 mt-1">
                  {/* d2 */}
                  <MotorCircleDigitalTag
                    className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
                      "PP_611RA2"
                    )}`}
                    label="PP_611RA2_RUN"
                  />
                  <TextContainerWithWrapWord
                    data={{
                      useClass: "text-dark  ",
                      label: "611RA2",
                    }}
                  />
                </div>
              </div>
              <div className="yellowline-Vr  downArrow position-absolute line-39a ml-3 mb-2"></div>
            </div>
            <div className="mt-5 ml-5 position-absolute">
              <div>
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mt-2 ",
                    label: "611FN2",
                  }}
                />
                <div className="d-flex">
                  <div className="img-97 d-flex justify-content-center  align-items-end">
                    {/* d3 */}

                    <MotorCircleDigitalTag
                      className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                        {
                          runLabel: "PP_611FN2_RUN",
                          healthyLabel: "PP_611FN2_PH",
                        }
                      )}`}
                      label="PP_611FN2_RUN"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-69">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "611AS1A",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "BULK LOADING",
          }}
        />
      </div>
      <div className="position-absolute single-text-70">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "CEMENT SILO",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "611SI2",
          }}
        />
      </div>
      <div className="position-absolute single-text-71 d-flex justify-content-between">
        <div>
          {/* a7 */}
          <BlackContainer
            data={{
              label: "PP_611CGK_ZT",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          {/* a8 */}
          <BlackContainer
            data={{
              label: "PP_611CGK",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          {/* a17 */}
          <BlackContainer
            data={{
              label: "PP_611CGL_ZT",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          {/* a16 */}
          <BlackContainer
            data={{
              label: "PP_611CGL",
              useClass: "greenTxt  mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-72">
        <span>
          <MotorCircleDigitalTag
            className={`square digital-tag ml-1 ${useColorStatus(
              "PP_611BF2_DPT"
            )}`}
            label="PP_611BF2_DPT"
          />
        </span>

        <span>
          <MotorCircleDigitalTag
            className={`square digital-tag ml-1 ${useColorStatus(
              "PP_611BF2_PT"
            )}`}
            label="PP_611BF2_PT"
          />
        </span>
      </div>
      <div className="position-absolute single-text-73 d-flex">
        <div>
          <div class="ml-3 d-flex justify-content-center align-items-center">
                        {/* d16 */}
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "PP_611FNZ_RUN", healthyLabel: "PP_611FNZ_PH" }
                )}`}
                label="PP_611FNZ_RUN"
              />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "611FNZ",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-74">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "611ASX",
          }}
        />
      </div>
      <div className="position-absolute single-text-75">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "614AS1V",
          }}
        />
      </div>
      <div className="position-absolute single-text-76">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "614AS1W",
          }}
        />
      </div>
      <div className="position-absolute single-text-77">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "FUTURE BE",
          }}
        />
      </div>
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
      <div className="yellowline-Vr upArrow position-absolute line-13"></div>
      <div className="yellowline-Vr upArrow position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Vr upArrow position-absolute line-17"></div>
      <div className="yellowline-Vr upArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr  position-absolute line-25"></div>
      <div className="yellowline-Hr  position-absolute line-26"></div>
      <div className="yellowline-Vr  position-absolute line-27"></div>
      <div className="yellowline-Hr  position-absolute line-28"></div>
      <div className="yellowline-Vr  position-absolute line-29"></div>
      <div className="yellowline-Hr  position-absolute line-30"></div>
      <div className="yellowline-Vr  position-absolute line-31"></div>
      <div className="yellowline-Hr  position-absolute line-32"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-33"></div>
      <div className="yellowline-Hr  position-absolute line-34"></div>
      <div className="yellowline-Vr upArrow position-absolute line-35"></div>
      <div className="yellowline-Vr upArrow position-absolute line-36"></div>
      <div className="yellowline-Hr  position-absolute line-37"></div>
      <div className="yellowline-Vr  position-absolute line-38"></div>
      <div className="yellowline-Vr  position-absolute line-39"></div>
      <div className="yellowline-Hr  position-absolute line-40"></div>
      <div className="yellowline-Hr  position-absolute line-41"></div>
      <div className="yellowline-Vr  position-absolute line-42"></div>
      <div className="yellowline-Hr  position-absolute line-43"></div>
      <div className="yellowline-Hr  position-absolute line-44"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-45"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-46"></div>
      <div className="yellowline-Vr  upArrow position-absolute line-47"></div>
      <div className="yellowline-Vr  position-absolute line-48"></div>
      <div className="yellowline-Hr  position-absolute line-49"></div>
      <div className="yellowline-Hr  position-absolute line-50"></div>
      <div className="yellowline-Hr  position-absolute line-51"></div>
      <div className="yellowline-Vr upArrow position-absolute line-52"></div>
      <div className="yellowline-Vr upArrow position-absolute line-53"></div>
      <div className="yellowline-Vr upArrow position-absolute line-54"></div>
      <div className="yellowline-Vr  position-absolute line-55"></div>
      <div className="yellowline-Vr  position-absolute line-56"></div>
      <div className="yellowline-Vr  position-absolute line-57"></div>
      <div className="yellowline-Vr  position-absolute line-58"></div>
      <div className="yellowline-Hr  position-absolute line-59"></div>
      <div className="yellowline-Hr  position-absolute line-60"></div>
      <div className="yellowline-Hr  position-absolute line-61"></div>
      <div className="yellowline-Hr  position-absolute line-62"></div>
      <div className="yellowline-Vr  position-absolute line-63"></div>
      <div className="yellowline-Vr  position-absolute line-64"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-65"></div>
      <div className="yellowline-Hr  position-absolute line-66"></div>
    </div>
  );
};

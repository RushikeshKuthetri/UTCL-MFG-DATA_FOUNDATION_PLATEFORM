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
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useImgColorStatusForNewPlantScreen,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const RawMill1Kukurdih = () => {
  return (
    <div className="RawMill1Kukurdih w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
          // firstCircleLabel: "66CL8",
        }}
        text={{ useClass: "text-dark", label: "361WF1" }}
        secondCircle={{
          secondCircleText: "",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RM1_361WF1_RUN", healthyLabel: "RM1_361WF1_PH" }
          )}`,
          secondCircleLabel: "RM1_361WF1_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
          // firstCircleLabel: "66CL8",
        }}
        text={{ useClass: "text-dark", label: "361BC2" }}
        secondCircle={{
          secondCircleText: "",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RM1_361BC2_RUN", healthyLabel: "RM1_361BC2_PH" }
          )}`,
          secondCircleLabel: "RM1_361BC2_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
          // firstCircleLabel: "66CL8",
        }}
        text={{ useClass: "text-dark", label: "361BC1" }}
        secondCircle={{
          secondCircleText: "",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RM1_361BC1_RUN", healthyLabel: "RM1_361BC1_PH" }
          )}`,
          secondCircleLabel: "RM1_361BC1_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
          // firstCircleLabel: "66CL8",
        }}
        text={{ useClass: "text-dark", label: "361CV1" }}
        secondCircle={{
          secondCircleText: "X",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RM1_361CV1_RUN", healthyLabel: "RM1_361CV1_PH" }
          )}`,
          secondCircleLabel: "RM1_361CV1_RUN",
        }}
      />
      <div className="dashedHr-Pipe position-absolute pipe-5"></div>
      <div className="dashedHr-Pipe position-absolute pipe-6"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RM1_391SM1_RUN", healthyLabel: "RM1_391SM1_PH" }
          )}`,
          firstCircleLabel: "RM1_391SM1_RUN",
        }}
        text={{ useClass: "text-dark", label: "391SM1" }}
        secondCircle={{
          secondCircleText: "",
          // secondCircleClass: `dot grey-color`,
        }}
      />
      <div className="pipe dotted-pipe position-absolute pipe-8"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-9"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-10"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-11"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-12"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-13"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-14"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-15"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-16"></div>
      <div class="yellowline-Vr position-absolute pipe-17"></div>
      <div class="yellowline-Hr position-absolute pipe-18"></div>
      <div class="yellowline-Vr position-absolute pipe-19"></div>
      <div class="yellowline-Hr position-absolute pipe-20"></div>
      <div class="yellowline-Vr position-absolute pipe-21"></div>
      <div class="yellowline-Vr position-absolute pipe-22"></div>
      <div class="yellowline-Hr position-absolute pipe-23"></div>
      <div class="yellowline-Vr position-absolute pipe-24"></div>
      <div class="yellowline-Hr rightarrow  position-absolute pipe-25"></div>
      <div class="yellowline-Vr position-absolute pipe-26"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-27"></div>
      <div class="yellowline-Hr position-absolute pipe-28"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-29"></div>
      <div class="yellowline-Vr position-absolute pipe-30"></div>
      <div class="yellowline-Hr position-absolute pipe-31"></div>
      <div class="yellowline-Vr downArrow position-absolute pipe-32"></div>
      <div class="yellowline-Hr position-absolute pipe-33"></div>
      <div class="yellowline-Vr position-absolute pipe-34"></div>
      <div class="yellowline-Vr position-absolute pipe-35"></div>
      <div class="yellowline-Hr position-absolute pipe-36"></div>
      <div class="yellowline-Vr position-absolute pipe-37"></div>
      <div class="yellowline-Hr position-absolute pipe-38"></div>
      <div class="yellowline-Vr position-absolute pipe-39"></div>
      <div class="yellowline-Hr position-absolute pipe-40"></div>
      <div class="yellowline-Vr position-absolute pipe-41"></div>
      <div class="yellowline-Vr position-absolute pipe-42"></div>
      <div class="yellowline-Hr position-absolute pipe-43"></div>
      <div class="yellowline-Hr position-absolute pipe-44"></div>
      <div class="yellowline-Hr position-absolute pipe-45"></div>
      <div class="yellowline-Vr position-absolute pipe-46"></div>
      <div class="yellowline-Hr position-absolute pipe-47"></div>
      <div class="yellowline-Hr position-absolute pipe-48"></div>
      <div class="yellowline-Hr position-absolute pipe-49"></div>
      <div class="yellowline-Vr position-absolute pipe-50"></div>
      <div class="yellowline-Vr position-absolute pipe-51"></div>
      <div class="yellowline-Vr position-absolute pipe-52"></div>
      <div class="yellowline-Hr position-absolute pipe-53"></div>
      <div class="yellowline-Vr position-absolute pipe-54"></div>
      <div class="yellowline-Vr position-absolute pipe-55"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-56"></div>
      <div className="yellowline-Vr position-absolute pipe-57"></div>
      <div className="yellowline-Hr position-absolute pipe-58"></div>
      <div className="yellowline-Vr position-absolute pipe-59"></div>
      <div className="yellowline-Vr position-absolute pipe-60"></div>
      <div className="yellowline-Hr position-absolute pipe-61"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-62"></div>
      <div class="yellowline-Vr downArrow  position-absolute pipe-63"></div>


      <div className="position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "BYPASS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "361BF2",
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
                  { runLabel: "RM1_361FN3_RUN", healthyLabel: "RM1_361FN3_PH" }
                )}`}
                label="RM1_361FN3_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "361FN3",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-primary",
            label: "BYPASS",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "361BF1",
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
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { runLabel: "RM1_361FN2_RUN", healthyLabel: "RM1_361FN2_PH" }
                )}`}
                label="RM1_361FN2_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "361FN2",
              }}
            />
            <BlackContainer
              data={{
                label: "RM1_361BF1_PT2",
                useClass: "greenTxt mt-1  ml-3",
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
            label: "391BF1",
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
                  { runLabel: "RM_391FN9_RUN", healthyLabel: "RM_391FN9_PH" }
                )}`}
                label="RM_391FN9_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "391FN9",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-4">
        <div className="triangle-with-squares text-center ">
          <BlackContainer
            data={{
              label: "RM1_361BI1_WI",
              useClass: "greenTxt ",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361BI1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("RM1_361BI1_LS1")} mt-1`}
            label="RM1_361BI1_LS1"
            text="L"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-5">
        <div className="triangle-with-squares text-center ">
          <BlackContainer
            data={{
              label: "RM1_361BI2_WI",
              useClass: "greenTxt ",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361BI4",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("RM1_361BI2_LS1")} mt-1`}
            label="RM1_361BI2_LS1"
            text="L"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-6 d-flex">
        <div className="triangle-with-squares text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361CN1",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("RM1_361CN1_LS")} mt-1`}
            label="RM1_361CN1_LS"
          />
        </div>
        <div className="triangle-with-squares text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361CN2",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("RM1_361CN2_LS")} mt-1`}
            label="RM1_361CN2_LS"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-7 d-flex">
        <div className="triangle-with-squares text-center "></div>
        <div className="triangle-with-squares text-center "></div>
      </div>
      <div className="pipeHr position-absolute single-text-8 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 bg-secondary",
            label: "BAG HOUSE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "361CN1",
          }}
        />
      </div>
      <div className="triangle-with-squares text-center position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PRE BIN",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361RP1_BIN_BIW",
            useClass: "greenTxt mt-1",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="asset-71 position-absolute single-text-10 d-flex flex-column align-items-center justify-content-end">
        <BlackContainer
          data={{
            label: "RM1_361RP1_ZT_RPC_AO",
            useClass: "greenTxt ",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-11 d-flex">
        <div className=" text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_361MD1_RUN", healthyLabel: "RM1_361MD1_PH"}
            )} `}
            label="RM1_361MD1_RUN"
          />
        </div>
        <div className=" text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_361AD1_RUN", healthyLabel: "RM1_361AD1_PH"}
            )} `}
            label="RM1_361AD1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361AD1",
            }}
          />
        </div>
        <div className=" text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_361MD2_RUN", healthyLabel: "RM1_361MD2_PH"}
            )} `}
            label="RM1_361MD2_RUN"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-12 d-flex">
        <div className=" text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_361MD1_M02_RUN", healthyLabel: "RM1_361MD1_M02_PH"}
            )} `}
            label="RM1_361MD1_M02_RUN"
            text="M"
          />
        </div>

        <div className=" text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_361MD1_M03_RUN", healthyLabel: "RM1_361MD1_M03_PH"}
            )} `}
            label="RM1_361MD1_M03_RUN"
            text="M"
          />
        </div>
        <div className=" text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Cooling",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Blower",
            }}
          />
        </div>
        <div className=" text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_361MD2_M02_RUN", healthyLabel: "RM1_361MD2_M02_PH"}
            )} `}
            label="RM1_361MD2_M02_RUN"
            text="M"
          />
        </div>

        <div className=" text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_361MD2_M03_RUN", healthyLabel: "RM1_361MD2_M03_PH"}
            )} `}
            label="RM1_361MD2_M03_RUN"
            text="M"
          />
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag position-absolute single-text-13 ${useImgColorStatusForNewPlantScreen(
          { closeLabel: "RM1_361DG1_CLS", openLabel: "RM1_361DG1_OLS" }
        )}`}
        label="RM1_361DG1_OLS"
      />
      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag position-absolute single-text-14 ${useImgColorStatusForNewPlantScreen(
          { closeLabel: "RM1_361DG2_CLS", openLabel: "RM1_361DG2_OLS" }
        )}`}
        label="RM1_361DG2_OLS"
      />
      <div className="position-absolute single-text-15 d-flex">
        <div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "WF1",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "LIMESTONE",
                  }}
                />
              </div>
              <div className="ml-2">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                    { runLabel: "RM1_331WF1_RUN", healthyLabel: "RM1_331WF1_PH" }
                  )}`}
                  label="RM1_331WF1_RUN"
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "SP",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM1_331WF1_SP",
                    useClass: "greenTxt ",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TPH",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM1_331WF1_SP_TPH",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TON",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM1_331WF1_FR",
                    useClass: "greenTxt ",
                    unit: "tph",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "WF2",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ADDITIVE1",
                  }}
                />
              </div>
              <div className="ml-2">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                    { runLabel: "RM1_331WF2_RUN", healthyLabel: "RM1_331WF2_PH" }
                  )}`}
                  label="RM1_331WF2_RUN"
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "SP",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM1_331WF2_SP",
                    useClass: "greenTxt ",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TPH",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM1_331WF2_SP_TPH",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TON",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM1_331WF2_FR",
                    useClass: "greenTxt ",
                    unit: "tph",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "WF3",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ADDITIVE2",
                  }}
                />
              </div>
              <div className="ml-2">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                    { runLabel: "RM1_331WF3_RUN", healthyLabel: "RM1_331WF3_PH" }
                  )}`}
                  label="RM1_331WF3_RUN"
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "SP",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM1_331WF3_SP",
                    useClass: "greenTxt ",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TPH",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM1_331WF3_SP_TPH",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TON",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM1_331WF3_FR",
                    useClass: "greenTxt ",
                    unit: "tph",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "WF4",
                  }}
                />
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "ADDITIVE3",
                  }}
                />
              </div>
              <div className="ml-2">
                <MotorCircleDigitalTag
                  className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                    { runLabel: "RM1_331WF4_RUN", healthyLabel: "RM1_331WF4_PH" }
                  )}`}
                  label="RM1_331WF4_RUN"
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "SP",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM1_331WF4_SP",
                    useClass: "greenTxt ",
                    unit: "",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TPH",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM1_331WF4_SP_TPH",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TON",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM1_331WF4_FR",
                    useClass: "greenTxt ",
                    unit: "tph",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TOTAL FEED",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TOTAL S.P",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "RM1_331WF_FEED_SP",
                    useClass: "greenTxt ",
                    unit: "%",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "TOTAL FEEDRATE",
                  }}
                />
                <BlackContainer
                  data={{
                    label: "RM1_331WF_FEED_ACT",
                    useClass: "greenTxt ",
                    unit: "tph",
                    unitColor: "unitColor",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-16 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "RM1_361BE1_M01_JI",
              useClass: "greenTxt ",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361BE1_M02_JI",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "RM1_361BE1_M01_II",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361BE1_M02_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "RM1_361BF2_DPT",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361BF2_PT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "RM1_361BF1_DPT",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361BF1_PT1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <BlackContainer
          data={{
            label: "PH_391BF1_DPT",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_391BF1_PT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <BlackContainer
          data={{
            label: "RM1_361CN1_DPT",
            useClass: "greenTxt ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361CN2_DPT",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "RM1_361SD3_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361SD3",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "RM1_361FN1_II",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361FN1",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "RM1_361FN1_JI",
            useClass: "greenTxt ",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361SD2_SP_PID",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "PH_421BF1_PT1",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_421BF1_TT1",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "PH_421BF1_PT3",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "PH_421BF1_PT2",
              useClass: "greenTxt ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_421BF1_TT4",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "RM1_361FN1_SI",
              useClass: "greenTxt ",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361FN1_SP_PID",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "RM1_361LD5_SP_PID",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361LD5",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361SD2",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <BlackContainer
          data={{
            label: "RM1_361SD3_SP_PID",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "RM1_361FN1_TT1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361FN1_PT",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "RM1_361MD3_SI",
              useClass: "greenTxt ",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361MD3_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "RM1_361SR2_TT1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361SR2_PT1",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex flex-column">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "331WF RATIO PID",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_331WF_RATIO",
              useClass: "greenTxt mt-2",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361MD3_SP_PID",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361MD3_SP_PID",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29 d-flex flex-column">
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "RM1_361LD3_SP_PID",
              useClass: "greenTxt ml-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "RM1_361LD3_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="text-center">
          <BlackContainer
            data={{
              label: "RM1_361LD2",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361LD3",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex flex-column justify-content-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FRESH AIR",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361LD2_ZT",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "RM1_361LD2",
          useClass: "greenTxt position-absolute single-text-31",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "RM1_361LD2_SP_PID",
          useClass: "greenTxt position-absolute single-text-32",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-33 d-flex flex-column">
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "RM1_361MT1_CNT",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "NA", healthyLabel: "NA" }
              )} mt-2`}
              label="NA"
              text='P'
            />
        </div>

        <div className="text-center">
          <BlackContainer
            data={{
              label: "RM1_361DG1_SP01",
              useClass: "greenTxt",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361DG1_SP02",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34 d-flex flex-column">
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="text-center">
          <BlackContainer
            data={{
              label: "RM1_361BW1_FR",
              useClass: "greenTxt",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex ">
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "RM1_361SR1_PT1",
              useClass: "greenTxt",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "RM1_361SR1_TT1",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-36 d-flex ">
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "RM1_361SR2_XT1",
              useClass: "greenTxt",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "RM1_361SR2_BTE2",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-37 ">
        <div className="text-center d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Grinding Hours",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_GRND_HOURS",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Total Grinding",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_GRND_VALUE",
              useClass: "greenTxt ml-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-38 d-flex ">
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "RM1_361HD1_ZT1",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "RM1_361HD1_ZT2",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "RM1_361RP1_XT1",
          useClass: "greenTxt position-absolute single-text-39",
          unit: "mm/s",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PH_421BF1_DPT",
          useClass: "greenTxt position-absolute single-text-40",
          unit: "mmwc",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-41 ">
        <div className="text-center d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Pause Time",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_391SM1_PS_TIME",
              useClass: "greenTxt ml-2",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Sampling Time",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_391SM1_ON_TIME",
              useClass: "greenTxt ml-2",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-42  border p-1 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RP Diff. Parameter",
          }}
        />
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Mean Gap",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361RP1_ZT_MDBR",
              useClass: "greenTxt ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Skew",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361RP1_ZT_RPC_AO",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Mean Press",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361HD1_OIL_PRES",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Grind. Press",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361HD1_GRIND_PRES",
              useClass: "greenTxt ml-2",
              unit: "mpa",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-43  border p-1 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RP Left Parameter",
          }}
        />
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Press.",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361HD1_PT1",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Current",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361MD1_II",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Power",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361MD1_JI",
              useClass: "greenTxt ml-2",
              unit: "Kw",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-44  border p-1 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RP Right Parameter",
          }}
        />
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Press.",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361HD1_PT2",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Current",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361MD2_II",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Power",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361MD2_JI",
              useClass: "greenTxt ml-2",
              unit: "Kw",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-45  border p-1 text-center d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Slider FL",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361HD1_FL_SP",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361HD1_ZT2",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Common Slider Setpoint",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361HD1_FXFL_SP",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Slider FX",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361HD1_FX_SP",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361HD1_ZT1",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-46  border p-1 text-center">
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Blending Silo Level",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_391SB1_LT",
              useClass: "greenTxt ml-2",
              unit: "mtr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1 align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "391BE1",
            }}
          />
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM_391BE1_RUN", healthyLabel: "RM_391BE1_PH"}
              )}`}
              label="RM_391BE1_RUN"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM_391BE1_RUN", healthyLabel: "RM_391BE1_PH"}
              )} mt-1`}
              label="RM_391BE1_RUN"
            />
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "NA",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "NA",
                useClass: "greenTxt mt-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <BlackContainer
        data={{
          label: "RM1_361LD4",
          useClass: "greenTxt position-absolute single-text-47",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-48 d-flex flex-column">
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "RM1_361LD1_SP_PID",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "RM1_361LD1_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM1_361LD1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-49 d-flex flex-column">
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "RM1_361LD4_SP_PID",
              useClass: "greenTxt",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "RM1_361SD1_SP_PID",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM1_361SD1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-50">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="P"
        />
        <BlackContainer
          data={{
            label: "RM1_361MT2_CNT",
            useClass: "greenTxt ml-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-51 d-flex">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "RM1_361LD5_EOLS",
                  closeLabel: "RM1_361LD5_ECLS",
                }
              )}`}
              label="RM1_361LD5_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361LD5",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "RM1_361SD2_EOLS",
                  closeLabel: "RM1_361SD2_ECLS",
                }
              )}`}
              label="RM1_361SD2_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361SD2",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-52 d-flex">
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "RM1_361LD1_EOLS",
                  closeLabel: "RM1_361LD1_ECLS",
                }
              )}`}
              label="RM1_361LD1_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361LD1",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "RM1_361SD1_EOLS",
                  closeLabel: "RM1_361SD1_ECLS",
                }
              )}`}
              label="RM1_361SD1_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361SD1",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-53 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361SD3",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "RM1_361SD3_EOLS",
                  closeLabel: "RM1_361SD3_ECLS",
                }
              )}`}
              label="RM1_361SD3_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-54 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361SG3",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "RM1_361SG3_EOLS",
                  closeLabel: "RM1_361SG3_ECLS",
                  healthyLabel: "RM1_361SG3_PH",
                }
              )}`}
              label="RM1_361SG3_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361SG2",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "NA",
                  closeLabel: "NA",
                  healthyLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-55 d-flex">
        <div className="d-flex">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useGateTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "RM1_361SG1_EOLS",
                  closeLabel: "RM1_361SG1_ECLS",
                  healthyLabel: "RM1_361SG1_PH",
                }
              )}`}
              label="RM1_361SG1_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361SG1",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-56 d-flex">
        <div className="d-flex">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "RM1_361LD4_EOLS",
                  closeLabel: "RM1_361LD4_ECLS",
                }
              )}`}
              label="RM1_361LD4_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361LD4",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-57 d-flex flex-column">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("NA")}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361RP1_ZSS1",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("NA")}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361RP1_ZSS2",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("RM1_361RP1_ZT_FLT")}`}
            label="RM1_361RP1_ZT_FLT"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361RP1_ZT_FL",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-58 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_391FN1_RUN", healthyLabel: "RM1_391FN1_PH"}
            )}`}
            label="RM1_391FN1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "391FN1",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_391FN2_RUN", healthyLabel: "RM1_391FN2_PH"}
            )}`}
            label="RM1_391FN2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "391FN2",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-59 d-flex">
        <div className="d-flex">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "RM1_361LD3_EOLS",
                  closeLabel: "RM1_361LD3_ECLS",
                }
              )}`}
              label="RM1_361LD3_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361LD3",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "RM1_361LD2_EOLS",
                  closeLabel: "RM1_361LD2_ECLS",
                }
              )}`}
              label="RM1_361LD2_EOLS"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361LD2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-60 d-flex flex-column align-items-end ">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "361RA2",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "RM1_361RA2"
            )} ml-1`}
            label="RM1_361RA2_RUN"
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "To 361BE1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-61 d-flex flex-column align-items-end ">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "361RA1",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "RM1_361RA1"
            )} ml-1`}
            label="RM1_361RA1_RUN"
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "To 361BE1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-62 d-flex flex-column align-items-end ">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "391RA3",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "RM_391RA3"
            )} ml-1`}
            label="RM_391RA3_RUN"
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "To 391AS3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-63 d-flex  ">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "391RA1",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "RM1_391RA1"
            )} ml-1`}
            label="RM1_391RA1_RUN"
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "RM1_391RA2"
            )} ml-1`}
            label="RM1_391RA2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "391RA2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-64 d-flex  ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_361BE1_M3M4_RUN", healthyLabel: "RM1_361BE1_M3M4_PH"}
            )} mt-2`}
          label="RM1_361BE1_M3M4_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_361BE1_M1M2_RUN", healthyLabel: "RM1_361BE1_M1M2_PH"}
            )}`}
          label="RM1_361BE1_M1M2_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_361BE1_M3M4_RUN", healthyLabel: "RM1_361BE1_M3M4_PH"}
            )} mt-2`}
          label="RM1_361BE1_M3M4_RUN"
        />
      </div>
      <div className="position-absolute single-text-65 d-flex flex-column text-center">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "RM1_361BE1_II_HH"
          )}`}
          label="RM1_361BE1_II_HH"
          text="II"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "RM1_361BE1_BMS1"
          )}`}
          label="RM1_361BE1_BMS1"
          text="BMS1"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "RM1_361BE1_ZS1"
          )}`}
          label="RM1_361BE1_ZS1"
          text="ZS1"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "RM1_361BE1_ZS2"
          )}`}
          label="RM1_361BE1_ZS2"
          text="ZS2"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "RM1_361BE1_M01_TS1"
          )}`}
          label="RM1_361BE1_M01_TS1"
          text="TS1"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "RM1_361BE1_M02_TS2"
          )}`}
          label="RM1_361BE1_M02_TS2"
          text="TS2"
        />
      </div>
      <div className="position-absolute single-text-66 text-center ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361SG1_EOLS")}`}
          label="RM1_361SG1_EOLS"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361SG1_ECLS")} mt-1`}
          label="RM1_361SG1_ECLS"
          text="P"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "361SG1",
          }}
        />
      </div>
      <div className="position-absolute single-text-67 text-center">
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "RM1_361BE1_LS1"
          )}`}
          label="RM1_361BE1_LS1"
          text="LS1"
        />
        <MotorCircleDigitalTag
          className={`text-dark digital-tag ${useColorStatus(
            "NA"
          )} mt-2`}
          label="NA"
          text="ZSS1"
        />
      </div>
      <div className="position-absolute single-text-68 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361BI2_PH")}`}
          label="RM1_361BI2_PH"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "RM1_361SG3_ECLS"
          )} mt-3 ml-3`}
          label="RM1_361SG3_ECLS"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-69 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_331BC2_RUN", healthyLabel: "RM1_331BC2_PH" }
            )}`}
          label="RM1_331BC2_RUN"
          // text="P"
        />
      </div>
      <div className="position-absolute single-text-70 text-center">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM1_361MT1_PH")}`}
          label="RM1_361MT1_PH"
          // text="P"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "RM1_361MT1_MD"
          )} mt-1`}
          label="RM1_361MT1_MD"
          // text="P"
        />
      </div>
      <div className="position-absolute single-text-71 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361BC1_DE_MG")}`}
          label="RM1_361BC1_DE_MG"
          text="x"
        />
      </div>
      <div className="position-absolute single-text-72 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "361BW1 PH",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361BW1_PH")} ml-2`}
          label="RM1_361BW1_PH"
          text="x"
        />
      </div>
      <div className="position-absolute single-text-73 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PH_421FN1_M01_RUN", healthyLabel: "PH_421FN1_M01_PH" }
          )}`}
          label="PH_421FN1_M01_RUN"
          text=""
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "421FN1",
          }}
        />
      </div>
      <div className="position-absolute single-text-74 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361LD1_EOLS")}`}
          label="RM1_361LD1_EOLS"
          text="x"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361LD1_ECLS")}`}
          label="RM1_361LD1_ECLS"
          text="x"
        />
      </div>
      <div className="position-absolute single-text-75 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361SD1_EOLS")}`}
          label="RM1_361SD1_EOLS"
          text="x"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361SD1_ECLS")}`}
          label="RM1_361SD1_ECLS"
          text="x"
        />
      </div>
      <div className="position-absolute single-text-76 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361LD5_EOLS")}`}
          label="RM1_361LD5_EOLS"
          text="E"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361LD5_ECLS")}`}
          label="RM1_361LD5_ECLS"
          text="E"
        />
      </div>
      <div className="position-absolute single-text-77 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361SD2_EOLS")}`}
          label="RM1_361SD2_EOLS"
          text="E"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361SD2_ECLS")}`}
          label="RM1_361SD2_ECLS"
          text="E"
        />
      </div>
      <div className="position-absolute single-text-78 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361SD3_EOLS")}`}
          label="RM1_361SD3_EOLS"
          text="x"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361SD3_ECLS")}`}
          label="RM1_361SD3_ECLS"
          text="x"
        />
      </div>
      <div className="position-absolute single-text-79 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361LD2_ECLS")}`}
          label="RM1_361LD2_ECLS"
          text="E"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361LD2_EOLS")}`}
          label="RM1_361LD2_EOLS"
          text="E"
        />
      </div>
      <div className="position-absolute single-text-80 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361LD3_EOLS")}`}
          label="RM1_361LD3_EOLS"
          text="E"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361LD3_ECLS")}`}
          label="RM1_361LD3_ECLS"
          text="E"
        />
      </div>
      <div className="position-absolute single-text-81 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361LD4_EOLS")}`}
          label="RM1_361LD4_EOLS"
          text="E"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361LD4_ECLS")}`}
          label="RM1_361LD4_ECLS"
          text="E"
        />
      </div>
      <div className="position-absolute single-text-82 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM1_361RP1_BIN_PH")}`}
          label="RM1_361RP1_BIN_PH"
          // text="E"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="E"
        />
      </div>
      <div className="position-absolute single-text-83 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361HD1_SVA_ZL")}`}
          label="RM1_361HD1_SVA_ZL"
          text="Z"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361HD1_SVB_ZL")}`}
          label="RM1_361HD1_SVB_ZL"
          text="Z"
        />
      </div>
      <div className="position-absolute single-text-84 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "MD GB Lub.",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LQ1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM1_361LQ1_M01_RUN", healthyLabel: "RM1_361LQ1_M01_PH"}
            )} ml-2`}
            label="RM1_361LQ1_M01_RUN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM1_361LQ1_M02_RUN", healthyLabel: "RM1_361LQ1_M02_PH"}
            )} ml-2`}
            label="RM1_361LQ1_M02_RUN"
            text="M"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "LQ2",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM1_361LQ2_M01_RUN", healthyLabel: "RM1_361LQ2_M01_PH"}
            )} ml-2`}
            label="RM1_361LQ2_M01_RUN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM1_361LQ2_M02_RUN", healthyLabel: "RM1_361LQ2_M02_PH"}
            )} ml-2`}
            label="RM1_361LQ2_M02_RUN"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-85 border p-1">
        <div className="d-flex justify-content-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SEAL AIR FAN",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "NA"
            )} ml-2`}
            label="NA"
            text="P"
          />
        </div>
        <div className="d-flex mt-2">
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM1_361FN4_RUN", healthyLabel: "RM1_361FN4_PH"}
              )}`}
              label="RM1_361FN4_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "361FN4",
              }}
            />
          </div>
          <div className="text-center ml-1">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM1_361FN6_RUN", healthyLabel: "RM1_361FN6_PH"}
              )}`}
              label="RM1_361FN6_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "361FN6",
              }}
            />
          </div>
          <div className="text-center ml-1">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM1_361FN5_RUN", healthyLabel: "RM1_361FN5_PH"}
              )}`}
              label="RM1_361FN5_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "361FN5",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-86 border p-1">
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "391LT_LH",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "NA"
            )} ml-3`}
            label="NA"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "421FN1_RUN",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "NA"
            )} ml-3`}
            label="NA"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "421SD2_POS1",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "NA"
            )} ml-3`}
            label="NA"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RM1_PH_TRX_RUN",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "NA"
            )} ml-3`}
            label="NA"
          />
        </div>
      </div>
      <div className="position-absolute single-text-87 border p-1">
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Brg. Lub. Opr",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "RM1_361LQ3_OPER"
            )} ml-3`}
            label="RM1_361LQ3_OPER"
            text="I"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Grease Lub. Oper",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "RM1_361LQ1_2_OPER"
            )} ml-3`}
            label="RM1_361LQ1_2_OPER"
            text="P"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Open Polycom",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "RM1_POLYCOM_OPENED"
            )} ml-3`}
            label="RM1_POLYCOM_OPENED"
            text="P"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Close Polycom",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "RM1_POLYCOM_CLOSE"
            )} ml-3`}
            label="RM1_POLYCOM_CLOSE"
            text="P"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Press. Built",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "RM1_POLYCOM_CLOSED"
            )} ml-3`}
            label="RM1_POLYCOM_CLOSED"
            text="P"
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Scavenge Due",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "RM1_361HD1_SCV_DUE"
            )} ml-3`}
            label="RM1_361HD1_SCV_DUE"
            text="P"
          />
        </div>
      </div>
      <div className="truck position-absolute single-text-88"></div>
      <div className=" position-absolute single-text-89 text-center p-1">
      <BlackContainer
            data={{
              label: "RM1_361SR2_BTE1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SEPERATOR",
          }}
        />
        <div className="text-center mt-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM1_361MD3_RUN", healthyLabel: "RM1_361MD3_PH" }
            )}`}
            label="RM1_361MD3_RUN"
            text=""
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361MD3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-90 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="P"
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("RM1_361MT2_PH")}`}
            label="RM1_361MT2_PH"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "RM1_361MT2_MD"
            )} ml-2`}
            label="RM1_361MT2_MD"
          />
        </div>
      </div>
      <div className="position-absolute single-text-91">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361SG3_EOLS")}`}
          label="RM1_361SG3_EOLS"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-92">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM1_361BC1_NDE_MG")}`}
          label="RM1_361BC1_NDE_MG"
          text="X"
        />
      </div>
      <div className="position-absolute single-text-93 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RM1_361FN1_RUN", healthyLabel: "RM1_361FN1_PH" }
          )}`}
          label="RM1_361FN1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "361FN1",
          }}
        />
      </div>
      <div className="position-absolute single-text-94">
      <BlackContainer
            data={{
              label: "RM1_361WF1_SP_PID",
              useClass: "greenTxt ",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
      </div>
    </div>
  );
};

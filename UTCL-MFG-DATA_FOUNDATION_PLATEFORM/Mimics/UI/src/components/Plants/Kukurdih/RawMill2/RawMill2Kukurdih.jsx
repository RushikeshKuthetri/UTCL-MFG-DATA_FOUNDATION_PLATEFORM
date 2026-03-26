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
  useImgColorStatusForNewPlantScreen,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../utils";

export const RawMill2Kukurdih = () => {
  return (
    <div className="RawMill2Kukurdih w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
          // firstCircleLabel: "66CL8",
        }}
        text={{ useClass: "text-dark", label: "361WF2" }}
        secondCircle={{
          secondCircleText: "",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RM2_361WF2_RUN", healthyLabel: "RM2_361WF2_PH" }
          )}`,
          secondCircleLabel: "RM2_361WF2_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
          // firstCircleLabel: "66CL8",
        }}
        text={{ useClass: "text-dark", label: "361BC4" }}
        secondCircle={{
          secondCircleText: "",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RM2_361BC4_RUN", healthyLabel: "RM2_361BC4_PH" }
          )}`,
          secondCircleLabel: "RM2_361BC4_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
          // firstCircleLabel: "66CL8",
        }}
        text={{ useClass: "text-dark", label: "361BC3" }}
        secondCircle={{
          secondCircleText: "",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RM2_361BC3_RUN", healthyLabel: "RM2_361BC3_PH" }
          )}`,
          secondCircleLabel: "RM2_361BC3_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleText: "",
          firstCircleClass: `dot grey-color`,
          // firstCircleLabel: "66CL8",
        }}
        text={{ useClass: "text-dark", label: "361CV2" }}
        secondCircle={{
          secondCircleText: "",
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RM2_361CV2_RUN", healthyLabel: "RM2_361CV2_PH" }
          )}`,
          secondCircleLabel: "RM2_361CV2_RUN",
        }}
      />
      <div className="dashedHr-Pipe position-absolute pipe-5"></div>
      <div className="dashedHr-Pipe position-absolute pipe-6"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RM2_391SM3_RUN", healthyLabel: "RM2_391SM3_PH" }
          )}`,
          firstCircleLabel: "RM2_391SM3_RUN",
        }}
        text={{ useClass: "text-dark", label: "391SM3" }}
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
            useClass: "text-dark",
            label: "361BF4",
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
                  { runLabel: "RM2_361FN9_RUN", healthyLabel: "RM2_361FN9_PH" }
                )}`}
                label="RM2_361FN9_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "361FN9",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "361BF3",
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
                  { runLabel: "RM2_361FN8_RUN", healthyLabel: "RM2_361FN8_PH" }
                )}`}
                label="RM2_361FN8_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "361FN8",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "391BF3",
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
                  { runLabel: "RM2_391FNE_RUN", healthyLabel: "RM2_391FNE_PH" }
                )}`}
                label="RM2_391FNE_RUN"
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1 ml-3",
                label: "391FNE",
              }}
            />
            <BlackContainer
              data={{
                label: "RM2_391FNE_T1",
                useClass: "greenTxt mt-1  ml-3",
                unit: "S",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-4">
        <div className="triangle-with-squares text-center ">
          <BlackContainer
            data={{
              label: "RM2_361BI3_WI",
              useClass: "greenTxt ",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361BI3",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "RM2_361BI3_LS1"
            )} mt-1`}
            label="RM2_361BI3_LS1"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-5">
        <div className="triangle-with-squares text-center ">
          <BlackContainer
            data={{
              label: "RM2_361BI4_WI",
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
            className={`square digital-tag ${useColorStatus(
              "RM2_361BI4_LS1"
            )} mt-1`}
            label="RM2_361BI4_LS1"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-6 d-flex">
        <div className="triangle-with-squares text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361CN3",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "RM2_361CN3_LS"
            )} mt-1`}
            label="RM2_361CN3_LS"
          />
        </div>
        <div className="triangle-with-squares text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361CN4",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "RM2_361CN4_LS"
            )} mt-1`}
            label="RM2_361CN4_LS"
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
            label: "421BF1",
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
            label: "RM2_361RP2_GAP",
            useClass: "greenTxt mt-1",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="asset-71 position-absolute single-text-10 d-flex flex-column align-items-center justify-content-end">
        {/* <BlackContainer
          data={{
            label: "CM_561BF2_DPT",
            useClass: "greenTxt ",
            unit: "",
            unitColor: "unitColor",
          }}
        /> */}
      </div>
      <div className=" position-absolute single-text-11 d-flex">
        <div className=" text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM2_361MD4_RUN", healthyLabel: "RM2_361MD4_PH" }
            )} `}
            label="RM2_361MD4_RUN"
          />
        </div>
        <div className=" text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM2_361AD2_RUN", healthyLabel: "RM2_361AD2_PH" }
            )} `}
            label="RM2_361AD2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361AD2",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )} `}
            label="NA"
            text="P"
          />
        </div>
        <div className=" text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM2_361MD5_RUN", healthyLabel: "RM2_361MD5_PH" }
            )} `}
            label="RM2_361MD5_RUN"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-12 d-flex">
        <div className=" text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "RM2_361MD4_M02_RUN",
                healthyLabel: "RM2_361MD4_M02_PH",
              }
            )} `}
            label="RM2_361MD4_M02_RUN"
            text=""
          />
        </div>

        <div className=" text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "RM2_361MD4_M03_RUN",
                healthyLabel: "RM2_361MD4_M03_PH",
              }
            )} `}
            label="RM2_361MD4_M03_RUN"
            text=""
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
              {
                runLabel: "RM2_361MD5_M02_RUN",
                healthyLabel: "RM2_361MD5_M02_PH",
              }
            )} `}
            label="RM2_361MD5_M02_RUN"
            text=""
          />
        </div>

        <div className=" text-center ">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "RM2_361MD5_M03_RUN",
                healthyLabel: "RM2_361MD5_M03_PH",
              }
            )} `}
            label="RM2_361MD5_M03_RUN"
            text=""
          />
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag position-absolute single-text-13 ${useImgColorStatusForNewPlantScreen(
          { closeLabel: "NA", openLabel: "NA" }
        )}`}
        label="NA"
      />
      <MotorCircleDigitalTag
        className={`gray-green-red-img digital-tag position-absolute single-text-14 ${useImgColorStatusForNewPlantScreen(
          { closeLabel: "NA", openLabel: "NA" }
        )}`}
        label="NA"
      />
      <div className="position-absolute single-text-15 d-flex">
        <div>
          <div className="border">
            <div className="d-flex align-items-center">
              <div className="text-center">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark",
                    label: "WF5",
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
                    {
                      runLabel: "RM2_331WF5_RUN",
                      healthyLabel: "RM2_331WF5_PH",
                    }
                  )}`}
                  label="RM2_331WF5_RUN"
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
                    label: "PERCENTAGE",
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
                    label: "SP",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM2_331WF5_SP",
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
                    label: "RM2_331WF5_SP_TPH",
                    useClass: "greenTxt ",
                    unit: "tph",
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
                    label: "APMS",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM2_331WF5_II",
                    useClass: "greenTxt ",
                    unit: "A",
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
                    label: "RM2_331WF5_FR",
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
                    label: "WF6",
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
                    {
                      runLabel: "RM2_331WF6_RUN",
                      healthyLabel: "RM2_331WF6_PH",
                    }
                  )}`}
                  label="RM2_331WF6_RUN"
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
                    label: "PERCENTAGE",
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
                    label: "SP",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM2_331WF6_SP",
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
                    label: "RM2_331WF6_SP_TPH",
                    useClass: "greenTxt ",
                    unit: "tph",
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
                    label: "APMS",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM2_331WF6_II",
                    useClass: "greenTxt ",
                    unit: "A",
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
                    label: "RM2_331WF6_FR",
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
                    label: "WF7",
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
                    {
                      runLabel: "RM2_331WF7_RUN",
                      healthyLabel: "RM2_331WF7_PH",
                    }
                  )}`}
                  label="RM2_331WF7_RUN"
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
                    label: "PERCENTAGE",
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
                    label: "SP",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM2_331WF7_SP",
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
                    label: "RM2_331WF7_SP_TPH",
                    useClass: "greenTxt ",
                    unit: "tph",
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
                    label: "APMS",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM2_331WF7_II",
                    useClass: "greenTxt ",
                    unit: "A",
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
                    label: "RM2_331WF7_FR",
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
                    label: "WF8",
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
                    {
                      runLabel: "RM2_331WF8_RUN",
                      healthyLabel: "RM2_331WF8_PH",
                    }
                  )}`}
                  label="RM2_331WF8_RUN"
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
                    label: "PERCENTAGE",
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
                    label: "SP",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM2_331WF8_SP",
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
                    label: "RM2_331WF8_SP_TPH",
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
                    label: "APMS",
                  }}
                />
              </div>
              <div className="ml-2">
                <BlackContainer
                  data={{
                    label: "RM2_331WF8_II",
                    useClass: "greenTxt ",
                    unit: "A",
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
                    label: "RM2_331WF8_FR",
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
                    label: "RM2_331WF_FEED_SP",
                    useClass: "greenTxt ",
                    unit: "tph",
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
                    label: "RM2_331WF_FEED_ACT",
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
              label: "RM2_361BE2_M01_JI",
              useClass: "greenTxt ",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM2_361BE2_M02_JI",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "RM2_361BE2_M01_II",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM2_361BE2_M02_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "RM2_361BF4_DPT",
            useClass: "greenTxt ",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_361BF4_PT1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "RM2_361BF3_PT2",
            useClass: "greenTxt ",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_361FN8_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_361FN8_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_361FN8_SP",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <BlackContainer
          data={{
            label: "RM2_361RP2_BIN_BIW",
            useClass: "greenTxt ",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_361RP2_XT1",
            useClass: "greenTxt ",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <BlackContainer
          data={{
            label: "RM2_361CN3_DPT",
            useClass: "greenTxt ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_361CN4_DPT",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <BlackContainer
          data={{
            label: "RM2_361LD6_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_361SD4_ZT",
            useClass: "greenTxt ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "RM2_361FN7_RST_TME",
            useClass: "greenTxt ",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_361FN7_PT_TMR",
            useClass: "greenTxt mt-1",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_361FN7_SP_PID",
            useClass: "greenTxt mt-2 ml-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "RM2_361FN7_II",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "RM2_361FN7_JI",
            useClass: "greenTxt ",
            unit: "kW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        
          <BlackContainer
            data={{
              label: "RM2_361DG4_SP01",
              useClass: "greenTxt ",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM2_361DG4_SP02",
              useClass: "greenTxt mt-1",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
       
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "RM2_361LDA_SP_PID",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "RM2_361LDA_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_361SD5_ZT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 ">
        <BlackContainer
          data={{
            label: "RM2_361FN7_PT",
            useClass: "greenTxt ",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "RM2_361FN7_TT1",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "RM2_361MD6_SI",
              useClass: "greenTxt ",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM2_361MD6_II",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM2_361MD6_JI",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex flex-column align-items-end">
          <BlackContainer
            data={{
              label: "RM2_361SD6_ZT",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM2_361SR4_PT1",
              useClass: "greenTxt",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />

          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "RM2_361SR4_BTE1",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />

            <BlackContainer
              data={{
                label: "RM2_361SR4_TT1",
                useClass: "greenTxt ml-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-28">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361MD3_SP_PID",
            }}
          />
          <BlackContainer
            data={{
              label: "RM2_361MD6_SP_PID",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29 d-flex flex-column">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "RM2_361LD8_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM2_361LD8_SP_PID",
              useClass: "greenTxt mt-2",
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
      </div>
      <BlackContainer
        data={{
          label: "RM2_361LD7_ZT",
          useClass: "greenTxt position-absolute single-text-31",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "RM2_361LD7_SP_PID",
          useClass: "greenTxt position-absolute single-text-32",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-33 d-flex flex-column">
        <div className="text-center d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("NA")} `}
            label="NA"
            text="P"
          />
          <BlackContainer
            data={{
              label: "RM2_361MT3_MD_CNT",
              useClass: "greenTxt ml-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="text-center">
          <BlackContainer
            data={{
              label: "RM2_361DG3_SP01",
              useClass: "greenTxt",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RM2_361DG3_SP02",
              useClass: "greenTxt mt-1",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34 ">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "RM2_361BW2_FR",
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
              label: "RM2_361SR3_PT1",
              useClass: "greenTxt",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "RM2_361SR3_TT1",
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
              label: "RM2_361SR4_XT1",
              useClass: "greenTxt",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "RM2_361SR4_BTE2",
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
              label: "RM2_GRND_HOURS",
              useClass: "greenTxt ml-2",
              unit: "h",
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
              label: "RM2_GRND_VALUE",
              useClass: "greenTxt ml-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-38 d-flex ">
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "RM2_361HD2_ZT1",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "RM2_361HD2_ZT2",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-39 d-flex">
        <BlackContainer
          data={{
            label: "RM2_361MD4_M23_T1",
            useClass: "greenTxt ",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_361MD5_M23_T1",
            useClass: "greenTxt ",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
      </div>
      {/* <BlackContainer
        data={{
          label: "CM_561BI1_WT",
          useClass: "greenTxt position-absolute single-text-40",
          unit: "mmwc",
          unitColor: "unitColor",
        }}
      /> */}
      <div className="position-absolute single-text-41 ">
        <div className="text-center d-flex">
          <BlackContainer
            data={{
              label: "RM2_391SM3_PS_TIME",
              useClass: "greenTxt ml-2",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center d-flex mt-1">
          <BlackContainer
            data={{
              label: "RM2_391SM3_ON_TIME",
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
              label: "RM2_361RP2_GAP",
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
              label: "RM2_361RP2_ZT_RPC",
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
        </div>
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Grind. Press",
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
              label: "RM2_361HD2_PT1",
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
              label: "RM2_361MD4_II",
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
              label: "RM2_361MD4_JI",
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
              label: "RM2_361HD2_PT2",
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
              label: "RM2_361MD5_II",
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
              label: "RM2_361MD5_JI",
              useClass: "greenTxt ml-2",
              unit: "Kw",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      {/* <div className="position-absolute single-text-45  border p-1 text-center d-flex">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Slider FL",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BI1_WT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BI1_WT",
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
              label: "CM_561BI1_WT",
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
              label: "CM_561BI1_WT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BI1_WT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div> */}
      {/* <div className="position-absolute single-text-46  border p-1 text-center">
        <div className="text-center d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Blending Silo Level",
            }}
          />
          <BlackContainer
            data={{
              label: "CM_561BI1_WT",
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
                { runLabel: "CM_531WF3_RUN", healthyLabel: "CM_531WF3_PH" }
              )}`}
              label="CM_531WF3_RUN"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "CM_531WF3_RUN", healthyLabel: "CM_531WF3_PH" }
              )} mt-1`}
              label="CM_531WF3_RUN"
            />
          </div>
          <div className="ml-2">
            <BlackContainer
              data={{
                label: "CM_561BI1_WT",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "CM_561BI1_WT",
                useClass: "greenTxt mt-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div> */}
      <div className="position-absolute single-text-47 text-center">
        <BlackContainer
          data={{
            label: "PH_391SB1_LT",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Blending Silo Level",
          }}
        />
      </div>
      <div className="position-absolute single-text-48 ">
        <div className="text-center ">
          <BlackContainer
            data={{
              label: "RM2_361LD6_SP_PID",
              useClass: "greenTxt",
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
              label: "RM2_361LD9_ZT",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "RM2_361LD9_SP_PID",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-50 text-center">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("NA")}`}
            label="NA"
            text="P"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "RM2_361MT4_PH"
            )} ml-3`}
            label="RM2_361MT4_PH"
            text="X"
          />
        </div>
        <BlackContainer
          data={{
            label: "RM2_361MT4_MD_CNT",
            useClass: "greenTxt mt-1",
            unit: "t",
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
                  openLabel: "NA",
                  closeLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361LDA",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "NA",
                  closeLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361SD5",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "NA",
                  closeLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "421SD2",
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
                  openLabel: "NA",
                  closeLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361LD6",
            }}
          />
        </div>
        <div>
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "NA",
                  closeLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361SD4",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-53 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361SD6",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "NA",
                  closeLabel: "NA",
                }
              )}`}
              label="NA"
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
              label: "361SG6",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "NA",
                  closeLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361SG5",
            }}
          />
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "NA",
                  closeLabel: "NA",
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
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "",
                  closeLabel: "",
                }
              )}`}
              label=""
            />
            <div className="yellowline-Vr position-relative"></div>
            <div
              className={`square digital-tag ${useColorStatus("RM2_361SG4")}`}
              label="RM2_361SG4"
            ></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361SG4",
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
                  openLabel: "NA",
                  closeLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361LD9",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-57 d-flex flex-column">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "NA"
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361RP2_ZSS1",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "NA"
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361RP2_ZSS2",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "NA"
            )}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361RP2_ZT_FLT",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-58 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM2_391FNB_RUN", healthyLabel: "RM2_391FNB_PH" }
            )}`}
            label="RM2_391FNB_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "391FNB",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM2_391FND_RUN", healthyLabel: "RM2_391FND_PH" }
            )}`}
            label="RM2_391FND_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "391FND",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM2_391FNC_RUN", healthyLabel: "RM2_391FNC_PH" }
            )}`}
            label="RM2_391FNC_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "391FNC",
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
                  openLabel: "NA",
                  closeLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361LD8",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="dot-square-line d-flex flex-column align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "NA",
                  closeLabel: "NA",
                }
              )}`}
              label="NA"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "361LD7",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-60 d-flex flex-column align-items-end ">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "361RA4",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "RM2_361RA4"
            )} ml-1`}
            label="RM2_361RA4_RUN"
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "To 361BE2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-61 d-flex flex-column align-items-end ">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "361RA3",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "RM2_361RA3"
            )} ml-1`}
            label="RM2_361RA3_RUN"
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "To 361BE2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-62 d-flex flex-column align-items-end ">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "391RA7",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "RM2_391RA7"
            )} ml-1`}
            label="RM2_391RA7_RUN"
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "To 391AS2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-63 d-flex  ">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "391RA5",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "RM2_391RA5"
            )} ml-1`}
            label="RM2_391RA5_RUN"
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
              "RM2_391RA6"
            )} ml-1`}
            label="RM2_391RA6_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "391RA6",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-64 d-flex  ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_361BE2_M3M4_RUN",
              healthyLabel: "RM2_361BE2_M3M4_PH",
            }
          )} mt-2`}
          label="RM2_361BE2_M3M4_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_361BE2_M1M2_RUN",
              healthyLabel: "RM2_361BE2_M1M2_PH",
            }
          )}`}
          label="RM2_361BE2_M1M2_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_361BE2_M3M4_RUN",
              healthyLabel: "RM2_361BE2_M3M4_PH",
            }
          )} mt-2`}
          label="RM2_361BE2_M3M4_RUN"
        />
      </div>
      <div className="position-absolute single-text-65 d-flex flex-column text-center">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM2_361BE2_II_HH")}`}
          label="RM2_361BE2_II_HH"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM2_361BE2_BMS1")}`}
          label="RM2_361BE2_BMS1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM2_361BE2_ZS1")}`}
          label="RM2_361BE2_ZS1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM2_361BE2_ZS2")}`}
          label="RM2_361BE2_ZS2"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "RM2_361BE2_M01_TS1"
          )}`}
          label="RM2_361BE2_M01_TS1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "RM2_361BE2_M02_TS2"
          )}`}
          label="RM2_361BE2_M02_TS2"
        />
      </div>
      <div className="position-absolute single-text-66 text-center d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="P"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")} ml-3`}
          label="NA"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-67 text-center">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "RM2_361BE2_LS1"
          )} mt-2`}
          label="RM2_361BE2_LS1"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("NA")} mt-2`}
          label="NA"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("NA")} mt-2`}
          label="NA"
        />
      </div>
      <div className="position-absolute single-text-68 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM2_361BI4_PH")}`}
          label="RM2_361BI4_PH"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-69 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM2_361BC3_DE_MG")}`}
          label="RM2_361BC3_DE_MG"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "RM2_361BC3_NDE_MG"
          )} ml-2`}
          label="RM2_361BC3_NDE_MG"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")} ml-2`}
          label="NA"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-70 text-center">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("RM2_361MT3_PH")}`}
          label="RM2_361MT3_PH"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "RM2_361MT3_MD"
          )} mt-1`}
          label="RM2_361MT3_MD"
        />
      </div>
      {/* <div className="position-absolute single-text-71 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="x"
        />
      </div> */}
      <div className="position-absolute single-text-72 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM2_361BW2_PH")}`}
          label="RM2_361BW2_PH"
          text="X"
        />
      </div>
      <div className="position-absolute single-text-73 text-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "PH_421FN1_M01_RUN", healthyLabel: "PH_421FN1_M01_PH" }
          )}`}
          label="PH_421FN1_M01_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "421FN1",
          }}
        />
      </div>
      {/* <div className="position-absolute single-text-74 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="x"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="x"
        />
      </div>
      <div className="position-absolute single-text-75 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="x"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="x"
        />
      </div> */}
      {/* <div className="position-absolute single-text-76 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="E"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="E"
        />
      </div>
      <div className="position-absolute single-text-77 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="E"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="E"
        />
      </div> */}
      <div className="position-absolute single-text-78">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RM2_361FN7_RUN", healthyLabel: "RM2_361FN7_PH" }
          )}`}
          label="RM2_361FN7_RUN"
        />
      </div>
      {/* <div className="position-absolute single-text-79 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="E"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="E"
        />
      </div> */}
      {/* <div className="position-absolute single-text-80 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="E"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="E"
        />
      </div> */}
      {/* <div className="position-absolute single-text-81 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="E"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM_561SG2_CLS")}`}
          label="CM_561SG2_CLS"
          text="E"
        />
      </div> */}
      <div className="position-absolute single-text-82 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "RM2_361RP2_BIN_PH"
          )}`}
          label="RM2_361RP2_BIN_PH"
          // text="E"
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "RM2_361RP2_BIN_LS1"
            )} ml-2`}
            label="RM2_361RP2_BIN_LS1"
            // text="E"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "RM2_361RP2_BIN_LSH"
            )} ml-2`}
            label="RM2_361RP2_BIN_LSH"
            // text="E"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "CM_561SG2_CLS"
            )} ml-2`}
            label="CM_561SG2_CLS"
            text="P"
          />
        </div>
      </div>
      <div className="position-absolute single-text-83 d-flex">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "RM2_361HD2_SVA_ZL"
          )}`}
          label="RM2_361HD2_SVA_ZL"
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus(
            "RM2_361HD2_SVB_ZL"
          )}`}
          label="RM2_361HD2_SVB_ZL"
        />
      </div>
      <div className="position-absolute single-text-84 border p-1 text-center">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "MD GB Lub.",
            }}
          />
        </div>
        <div className="d-flex mt-1 justify-content-around">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "RM2_361LQ5_M01_RUN",
                healthyLabel: "RM2_361LQ5_M01_PH",
              }
            )}`}
            label="RM2_361LQ5_M01_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "RM2_361LQ5_M02_RUN",
                healthyLabel: "RM2_361LQ5_M02_PH",
              }
            )}`}
            label="RM2_361LQ5_M02_RUN"
          />
        </div>
        <BlackContainer
          data={{
            label: "RM2_361LQ56_PMP_T1",
            useClass: "greenTxt mt-1",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-2 justify-content-around">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "RM2_361LQ6_M01_RUN",
                healthyLabel: "RM2_361LQ6_M01_PH",
              }
            )}`}
            label="RM2_361LQ6_M01_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "RM2_361LQ6_M02_RUN",
                healthyLabel: "RM2_361LQ6_M02_PH",
              }
            )}`}
            label="RM2_361LQ6_M02_RUN"
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
        </div>
        <div className="d-flex mt-2 justify-content-around">
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM2_361FNA_RUN", healthyLabel: "RM2_361FNA_PH" }
              )}`}
              label="RM2_361FNA_RUN"
            />
          </div>
          <div className="text-center ">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "RM2_361FNABC_FLT"
              )} `}
              label="RM2_361FNABC_FLT"
              text="P"
            />
          </div>
          <div className="text-center ">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM2_361FNC_RUN", healthyLabel: "RM2_361FNC_PH" }
              )}`}
              label="RM2_361FNC_RUN"
            />
          </div>
          <div className="text-center ">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM2_361FNB_RUN", healthyLabel: "RM2_361FNB_PH" }
              )}`}
              label="RM2_361FNB_RUN"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-86">
        <div className=" mt-1 text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("NA")} `}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "391LT1_LH",
            }}
          />
        </div>
        <div className=" mt-1 text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("NA")} `}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "421FN1_RUN",
            }}
          />
        </div>
        <div className=" mt-1 text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("NA")}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "421SD2_POS1",
            }}
          />
        </div>
        <div className=" mt-1 text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("NA")} `}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RM1_2_TRX_RUN",
            }}
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
              "RM2_361LQ7_OPER"
            )} ml-3`}
            label="RM2_361LQ7_OPER"
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
              "RM2_361LQ5_6_OPER"
            )} ml-3`}
            label="RM2_361LQ5_6_OPER"
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
              "RM2_POLYCOM_OPENED"
            )} ml-3`}
            label="RM2_POLYCOM_OPENED"
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
              "RM2_POLYCOM_CLOSE"
            )} ml-3`}
            label="RM2_POLYCOM_CLOSE"
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
              "RM2_POLYCOM_CLOSED"
            )} ml-3`}
            label="RM2_POLYCOM_CLOSED"
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
              "RM2_361HD2_SCV_DUE"
            )} ml-3`}
            label="RM2_361HD2_SCV_DUE"
            text="P"
          />
        </div>
      </div>
      <div className="truck position-absolute single-text-88"></div>
      <div className=" position-absolute single-text-89 text-center p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SEPERATOR",
          }}
        />
        <div className="d-flex justify-content-end mt-2">

           <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "NA", healthyLabel: "NA" }
            )} `}
            label="NA"
            text='P'
          />
        </div>
        <div className="text-center mt-3">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { runLabel: "RM2_361MD6_RUN", healthyLabel: "RM2_361MD6_PH" }
            )}`}
            label="RM2_361MD6_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "361MD6",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-90 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("RM2_361BI3_PH")}`}
          label="RM2_361BI3_PH"
          text="P"
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("RM2_361MT4_MD")}`}
            label="RM2_361MT4_MD"
          />
        </div>
      </div>
      <div className="position-absolute single-text-91 d-flex">
        <div className="text-center">
          <div className="d-flex ">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "331BC3",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM2_331BC3_RUN", healthyLabel: "RM2_331BC3_PH"}
              )} ml-2`}
              label="RM2_331BC3_RUN"
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "331BC4",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { runLabel: "RM2_331BC4_RUN", healthyLabel: "RM2_331BC4_PH"}
              )} ml-2`}
              label="RM2_331BC4_RUN"
            />
          </div>
          <BlackContainer
            data={{
              label: "RM2_331BC4_SP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
        <BlackContainer
            data={{
              label: "RM2_331BC3_SP",
              useClass: "greenTxt ",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        <BlackContainer
            data={{
              label: "RM2_361BF3_PT1",
              useClass: "greenTxt mt-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        <BlackContainer
            data={{
              label: "RM2_361BF3_DPT",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-92">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="P"
        />
      </div>
      <div className="position-absolute single-text-93">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "RM2_361LQ7_RUN", healthyLabel: "RM2_361LQ7_PH" }
          )}`}
          label="RM2_361LQ7_RUN"
        />
      </div>
      <div className="position-absolute single-text-94">
      <BlackContainer
            data={{
              label: "RM2_361WF2_SP_PID",
              useClass: "greenTxt ",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
      </div>
      <div className="position-absolute single-text-95">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("NA")}`}
          label="NA"
          text="P"
        />
      </div>
    </div>
  );
};

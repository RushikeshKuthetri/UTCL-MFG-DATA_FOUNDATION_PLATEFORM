import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";

import * as tagsData from "../../../../../data/maihar/line-4/kilnmainpage/MaiharL4KilnTextcolumn";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useCaretColorStatus,
  useColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";
export const KilnAuxiliariesMaiharL4 = () => {
  return (
    <div className="KilnAuxilaieskotputli KilnAuxiMaiharL4 w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow position-absolute line-8"></div>
      <div className="yellowline-Vr position-absolute line-9"></div>
      <div className="yellowline-Vr position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Vr position-absolute line-12"></div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Vr position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr position-absolute line-16"></div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Vr position-absolute line-18"></div>
      <div className="yellowline-Vr position-absolute line-19"></div>
      <div className="yellowline-Vr position-absolute line-20"></div>
      <div className="yellowline-Vr position-absolute line-21"></div>
      <div className="yellowline-Vr position-absolute line-22"></div>
      <div className="yellowline-Vr position-absolute line-23"></div>
      <div className="yellowline-Vr position-absolute line-24"></div>
      <div className="yellowline-Vr position-absolute line-25"></div>
      <div className="yellowline-Vr position-absolute line-26"></div>
      <div className="yellowline-Vr position-absolute line-27"></div>
      <div className="yellowline-Vr position-absolute line-28"></div>
      <div className="yellowline-Vr position-absolute line-29"></div>
      <div className="yellowline-Vr position-absolute line-30"></div>
      <div className="yellowline-Vr position-absolute line-31"></div>
      <div className="yellowline-Vr position-absolute line-32"></div>
      <div className="yellowline-Vr position-absolute line-33"></div>
      <div className="yellowline-Vr position-absolute line-34"></div>
      <div className="yellowline-Vr position-absolute line-35"></div>
      <div className="yellowline-Hr position-absolute line-36"></div>
      <div className="yellowline-Hr position-absolute line-37"></div>
      <div className="yellowline-Hr position-absolute line-38"></div>
      <div className="yellowline-Hr position-absolute line-39"></div>
      <div className="yellowline-Hr position-absolute line-40"></div>
      <div className="yellowline-Hr position-absolute line-41"></div>
      <div className="yellowline-Hr position-absolute line-42"></div>
      <div className="yellowline-Hr position-absolute line-43"></div>
      <div className="yellowline-Hr position-absolute line-44"></div>
      <div className="yellowline-Hr position-absolute line-45"></div>
      <div className="yellowline-Hr position-absolute line-46"></div>
      <div className="yellowline-Hr position-absolute line-47"></div>
      <div className="yellowline-Hr position-absolute line-48"></div>
      <div className="yellowline-Hr position-absolute line-49"></div>
      <div className="yellowline-Hr position-absolute line-50"></div>
      <div className="yellowline-Hr position-absolute line-51"></div>
      <div className="yellowline-Hr position-absolute line-52"></div>
      <div className="yellowline-Hr position-absolute line-53"></div>
      <div className="yellowline-Hr position-absolute line-54"></div>
      <div className="yellowline-Hr position-absolute line-55"></div>
      <div className="pl-5 pr-2 d-flex justify-content-between img-107 position-absolute single-text-1">
        <TextColumn list={tagsData.maiharL4KilnTextcolumn5} />
        <div>
          <MotorCircleDigitalTag
            className={`dot ml-auto digital-tag ${useColorStatus(
              "KL_CL_474CC1_RUN"
            )}`}
            label="KL_CL_474CC1_RUN"
            text="X"
          />
          <BlackContainer
            data={{
              label: "TOF_26_ET",
              useClass: "greenTxt mt-1",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex mt-5">
            <MotorCircleDigitalTag
              className={`dot ${useColorStatus(
                "KL_SHUTDOWN_HOLD"
              )} digital-tag`}
              text="I"
              label="KL_SHUTDOWN_HOLD"
            />
            <MotorCircleDigitalTag
              className={`dot ml-1 ${useColorStatus("KL_UP_MOVE")} digital-tag`}
              text="I"
              label="KL_UP_MOVE"
            />
            <MotorCircleDigitalTag
              className={`dot ml-1 ${useColorStatus(
                "KL_REV_MOVE"
              )} digital-tag`}
              text="I"
              label="KL_REV_MOVE"
            />
            <MotorCircleDigitalTag
              className={`dot ml-1 digital-tag ${useColorStatus(
                "KL_DOWN_MOVE"
              )}`}
              text="I"
              label="KL_DOWN_MOVE"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1",
                label: "464KL1",
              }}
            />
            <BlackContainer
              data={{
                label: "KL_464MD1_MD2_SI_DIFF",
                useClass: "greenTxt",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mr-1",
                label: "Rotary Kiln",
              }}
            />
            <BlackContainer
              data={{
                label: "KL_464MD1_MD2_II_DIFF",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "KL_464KT1_TE1",
              useClass: "greenTxt mt-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-3">
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KL_464MD1_2_RUN")}`}
              label="KL_464MD1_2_RUN"
              text="X"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light ml-2",
                label: "464MD2",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "KL_464MD1_SP_PID",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KL_464KT1_ZT",
              useClass: "greenTxt",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464MD2_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464MD2_Speed",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464MD1_SI",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464MD1_Speed",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464KT2_TE1",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "464KT2",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "TON_25_ET",
              useClass: "greenTxt",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "TON_22_ET",
              useClass: "greenTxt mt-1",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex mt-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KL_464KT1_ZS1")}`}
              label="KL_464KT1_ZS1"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_464KT1_ZS2"
              )} ml-2`}
              label="KL_464KT1_ZS2"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_464KT1_ZS3"
              )} ml-2`}
              label="KL_464KT1_ZS3"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_464KT1_ZT_ALM"
              )} ml-2`}
              label="KL_464KT1_ZT_ALM"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_464KT1_ZT_ALM2"
              )} ml-2`}
              label="KL_464KT1_ZT_ALM2"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_CL_474CC1_RUN"
              )} ml-2`}
              label="KL_CL_474CC1_RUN"
              text="Z"
            />
          </div>
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_464KT1_ZT_P_30"
              )} ml-2`}
              label="KL_464KT1_ZT_P_30"
              text="X"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_464KT1_ZT_P_25"
              )} ml-2`}
              label="KL_464KT1_ZT_P_25"
              text="X"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_464KT1_ZT_M_25"
              )} ml-2`}
              label="KL_464KT1_ZT_M_25"
              text="X"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_464KT1_ZT_M_30"
              )} ml-2`}
              label="KL_464KT1_ZT_M_30"
              text="X"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_464MD1_2_RUN"
              )} ml-2`}
              label="KL_464MD1_2_RUN"
              text="X"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_CL_474FNG_RUN"
              )} ml-2`}
              label="KL_CL_474FNG_RUN"
              text="Z"
            />
          </div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Kiln, Position Limit Acknowledge More > 6Hrs",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Two NoseRing Cool, Fans, Not Running - 30Hrs",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464KL1_PT3",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464KL1_FT1",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464KL1_FT2",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextColumn list={tagsData.maiharL4KilnTextcolumn4} />
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-2" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-4" />
      <div className="position-absolute pl-1 pt-1 pr-5 pb-5 text-center border border-dark single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "Supporting Roller Lube. Station-1",
          }}
        />
        <div className="d-flex justify-content-between mt-2">
          <TextColumn list={tagsData.maiharL4KilnTextcolumn6} />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQ6_DPS1"
                )}`}
                text="S"
                label="KL_464LQ6_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQ6_FS1"
                )} ml-2`}
                text="S"
                label="KL_464LQ6_FS1"
              />
            </div>
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "LQ6",
                }}
              />
            </div>

            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-1",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { healthyLabel: "KL_464LQ6_PH", runLabel: "KL_464LQ6_RUN" }
                )}`}
                label="KL_464LQ6_RUN"
                text="M"
              />
            </div>
          </div>
          <TextColumn list={tagsData.maiharL4KilnTextcolumn7} useClass="ml-2" />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQ8_DPS1"
                )}`}
                text="S"
                label="KL_464LQ8_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQ8_FS1"
                )} ml-2`}
                text="S"
                label="KL_464LQ8_FS1"
              />
            </div>

            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "LQ8",
                }}
              />
            </div>

            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-1",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { healthyLabel: "KL_464LQ8_PH", runLabel: "KL_464LQ8_RUN" }
                )}`}
                label="KL_464LQ8_RUN"
                text="M"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <TextColumn list={tagsData.maiharL4KilnTextcolumn11} />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQ7_DPS1"
                )}`}
                text="S"
                label="KL_464LQ7_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQ7_FS1"
                )} ml-2`}
                text="S"
                label="KL_464LQ7_FS1"
              />
            </div>
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "LQ7",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-1",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { healthyLabel: "KL_464LQ7_PH", runLabel: "KL_464LQ7_RUN" }
                )}`}
                label="KL_464LQ7_RUN"
                text="M"
              />
            </div>
          </div>
          <TextColumn
            list={tagsData.maiharL4KilnTextcolumn12}
            useClass="ml-2"
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQ9_DPS1"
                )}`}
                text="S"
                label="KL_464LQ9_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQ9_FS1"
                )} ml-2`}
                text="S"
                label="KL_464LQ9_FS1"
              />
            </div>

            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "LQ9",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-1",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { healthyLabel: "KL_464LQ9_PH", runLabel: "KL_464LQ9_RUN" }
                )}`}
                label="KL_464LQ9_RUN"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute pl-1 pt-1 pr-5 pb-5 text-center border border-dark single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "Supporting Roller Lube. Station-2",
          }}
        />
        <div className="d-flex justify-content-between mt-2">
          <TextColumn list={tagsData.maiharL4KilnTextcolumn13} />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQA_DPS1"
                )}`}
                text="S"
                label="KL_464LQA_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQA_FS1"
                )} ml-2`}
                text="S"
                label="KL_464LQA_FS1"
              />
            </div>
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "LQA",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-1",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { healthyLabel: "KL_464LQA_PH", runLabel: "KL_464LQA_RUN" }
                )}`}
                label="KL_464LQA_RUN"
                text="M"
              />
            </div>
          </div>
          <TextColumn
            useClass="ml-2"
            list={tagsData.maiharL4KilnTextcolumn14}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQC_DPS1"
                )}`}
                text="S"
                label="KL_464LQC_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQC_FS1"
                )} ml-2`}
                text="S"
                label="KL_464LQC_FS1"
              />
            </div>
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "LQC",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-1",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { healthyLabel: "KL_464LQC_PH", runLabel: "KL_464LQC_RUN" }
                )}`}
                label="KL_464LQC_RUN"
                text="M"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <TextColumn list={tagsData.maiharL4KilnTextcolumn15} />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQB_DPS1"
                )}`}
                text="S"
                label="KL_464LQB_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQB_FS1"
                )} ml-2`}
                text="S"
                label="KL_464LQB_FS1"
              />
            </div>
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "LQB",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-1",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { healthyLabel: "KL_464LQB_PH", runLabel: "KL_464LQB_RUN" }
                )}`}
                label="KL_464LQB_RUN"
                text="M"
              />
            </div>
          </div>
          <TextColumn
            list={tagsData.maiharL4KilnTextcolumn16}
            className="ml-2"
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQD_DPS1"
                )}`}
                text="S"
                label="KL_464LQD_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQD_FS1"
                )} ml-2`}
                text="S"
                label="KL_464LQD_FS1"
              />
            </div>
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "LQD",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-1",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { healthyLabel: "KL_464LQD_PH", runLabel: "KL_464LQD_RUN" }
                )}`}
                label="KL_464LQD_RUN"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute pl-1 pt-1 pr-5 pb-5 text-center border border-dark single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "Supporting Roller Lube. Station-3",
          }}
        />
        <div className="d-flex justify-content-between mt-2">
          <TextColumn list={tagsData.maiharL4KilnTextcolumn17} />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQE_DPS1"
                )}`}
                text="S"
                label="KL_464LQE_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQE_FS1"
                )} ml-2`}
                text="S"
                label="KL_464LQE_FS1"
              />
            </div>
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "LQE",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-1",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { healthyLabel: "KL_464LQE_PH", runLabel: "KL_464LQE_RUN" }
                )}`}
                label="KL_464LQE_RUN"
                text="M"
              />
            </div>
          </div>
          <TextColumn
            list={tagsData.maiharL4KilnTextcolumn18}
            useClass="ml-2"
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQG_DPS1"
                )}`}
                text="S"
                label="KL_464LQG_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQG_FS1"
                )} ml-2`}
                text="S"
                label="KL_464LQG_FS1"
              />
            </div>
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "LQG",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-1",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { healthyLabel: "KL_464LQG_PH", runLabel: "KL_464LQG_RUN" }
                )}`}
                label="KL_464LQG_RUN"
                text="M"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <TextColumn list={tagsData.maiharL4KilnTextcolumn19} />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQF_DPS1"
                )}`}
                text="S"
                label="KL_464LQF_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQF_FS1"
                )} ml-2`}
                text="S"
                label="KL_464LQF_FS1"
              />
            </div>
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "LQF",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-1",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { healthyLabel: "KL_464LQF_PH", runLabel: "KL_464LQF_RUN" }
                )}`}
                label="KL_464LQF_RUN"
                text="M"
              />
            </div>
          </div>
          <TextColumn
            list={tagsData.maiharL4KilnTextcolumn20}
            useClass="ml-2"
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQH_DPS1"
                )}`}
                text="S"
                label="KL_464LQH_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_464LQH_FS1"
                )} ml-2`}
                text="S"
                label="KL_464LQH_FS1"
              />
            </div>
            <div className="yellowline-Hr position-absolute line-1"></div>
            <div className="yellowline-Hr position-absolute line-2"></div>
            <div className="yellowline-Hr position-absolute line-3"></div>
            <div className="yellowline-Vr position-absolute line-4"></div>
            <div className="yellowline-Vr position-absolute line-5"></div>
            <div className="yellowline-Vr position-absolute line-6"></div>
            <div className="position-absolute single-text-5c">
              <div className="CGRnBox bg-light"> </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-2",
                  label: "LQH",
                }}
              />
            </div>
            <div className="d-flex single-text-5b position-absolute">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white mr-1",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  { healthyLabel: "KL_464LQH_PH", runLabel: "KL_464LQH_RUN" }
                )}`}
                label="KL_464LQH_RUN"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute text-center p-2 border border-dark single-text-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light",
            label: "Shell Cooling Fans",
          }}
        />
        <div className="grid-container-8 mt-2">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNA",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNA_PH", runLabel: "KL_464FNA_RUN" }
              )} mt-2`}
              label="KL_464FNA_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNB",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNB_PH", runLabel: "KL_464FNB_RUN" }
              )} mt-2`}
              label="KL_464FNB_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNC",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNC_PH", runLabel: "KL_464FNC_RUN" }
              )} mt-2`}
              label="KL_464FNC_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FND",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FND_PH", runLabel: "KL_464FND_RUN" }
              )} mt-2`}
              label="KL_464FND_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNE",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNE_PH", runLabel: "KL_464FNE_RUN" }
              )} mt-2`}
              label="KL_464FNE_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNF",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNF_PH", runLabel: "KL_464FNF_RUN" }
              )} mt-2`}
              label="KL_464FNF_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNG",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNG_PH", runLabel: "KL_464FNG_RUN" }
              )} mt-2`}
              label="KL_464FNG_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNH",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNH_RH", runLabel: "KL_464FNH_RUN" }
              )} mt-2`}
              label="KL_464FNH_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNJ",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNJ_PH", runLabel: "KL_464FNJ_RUN" }
              )} mt-2`}
              label="KL_464FNJ_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNK",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNK_PH", runLabel: "KL_464FNK_RUN" }
              )} mt-2`}
              label="KL_464FNK_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNL",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNL_PH", runLabel: "KL_464FNL_RUN" }
              )} mt-2`}
              label="KL_464FNL_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNM",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNM_PH", runLabel: "KL_464FNM_RUN" }
              )} mt-2`}
              label="KL_464FNM_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNN",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNN_PH", runLabel: "KL_464FNN_RUN" }
              )} mt-2`}
              label="KL_464FNN_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNP",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNP_PH", runLabel: "KL_464FNP_RUN" }
              )} mt-2`}
              label="KL_464FNP_RUN"
              text="M"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNQ",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNQ_PH", runLabel: "KL_464FNQ_RUN" }
              )} mt-2`}
              label="KL_464FNQ_RUN"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute text-center p-2 border border-dark single-text-9">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FN1",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot ${useMotorTagsColorStatusForNewPlantScreens({
                healthyLabel: "KL_464FN1_PH",
                runLabel: "KL_464FN1_RUN",
              })} digital-tag mt-2`}
              label="KL_464FN1_RUN"
              text="M"
            />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FN2",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot ${useMotorTagsColorStatusForNewPlantScreens({
                healthyLabel: "KL_464FN2_PH",
                runLabel: "KL_464FN2_RUN",
              })} digital-tag mt-2`}
              label="KL_464FN2_RUN"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "464KS1",
          }}
        />
      </div>
      <div className="position-absolute text-center p-2 border border-dark single-text-10">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FN3",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FN3_PH", runLabel: "KL_464FN3_RUN" }
              )} mt-2`}
              label="KL_464FN3_RUN"
              text="M"
            />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FN4",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FN4_PH", runLabel: "KL_464FN4_RUN" }
              )} mt-2`}
              label="KL_464FN4_RUN"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "464KS2",
          }}
        />
      </div>
      <div className="position-absolute text-center p-2 border border-dark single-text-11">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FN6",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FN5_PH", runLabel: "KL_464FN5_RUN" }
              )} mt-2`}
              label="KL_464FN5_RUN"
              text="M"
            />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FN6",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FN6_PH", runLabel: "KL_464FN6_RUN" }
              )} mt-2`}
              label="KL_464FN6_RUN"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "464KS3",
          }}
        />
      </div>
      <div className="position-absolute text-center p-2 border border-dark single-text-12">
        <div className="d-flex">
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464PU3_PH", runLabel: "KL_464PU3_RUN" }
              )} mb-2`}
              label="KL_464PU3_RUN"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464PU3",
              }}
            />
          </div>
          <div className="ml-3">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464PU4_PH", runLabel: "KL_464PU4_RUN" }
              )} mb-2`}
              label="KL_464PU4_RUN"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464PU4",
              }}
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Main GB-1 Lub. Unit",
          }}
        />
      </div>
      <div className="position-absolute text-center p-2 border border-dark single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Main GB-3 Lub. Unit",
          }}
        />
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464PU7",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464PU7_PH", runLabel: "KL_464PU7_RUN" }
              )} mb-2`}
              label="KL_464PU7_RUN"
              text="M"
            />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464PU8",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464PU8_PH", runLabel: "KL_464PU8_RUN" }
              )} mb-2`}
              label="KL_464PU8_RUN"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute text-center p-2 border border-dark single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "TAD Damper Cooling Fan",
          }}
        />
        <div className="d-flex mt-1">
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                { healthyLabel: "KL_464FNR_PH", runLabel: "KL_464FNR_RUN" }
              )} mb-2`}
              label="KL_464FNR_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464FNR",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "TOF_16_ET",
              useClass: "greenTxt ml-1",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute text-center p-2 border border-dark single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Burner Carriage & Rails",
          }}
        />
        <div className="d-flex justify-content-center align-items-center">
          <div className="dot-square-line d-flex flex-column align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KL_484CG1")}`}
              label="KL_484CG1"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "484CG1",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "KL_484CG1_ZS1"
            )} mb-2`}
            text="X"
            label="KL_484CG1_ZS1"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "484BV5",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV5_OLS", closeLabel: "KL_484BV5_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV5_OLS", closeLabel: "KL_484BV5_CLS" }
          )}`}
          label="KL_484BV5_OLS"
        />
      </div>
      <div className="position-absolute single-text-17">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV1_OLS", closeLabel: "KL_484BV1_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV1_OLS", closeLabel: "KL_484BV1_CLS" }
          )}`}
          label="KL_484BV1_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "484BV1",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV2_OLS", closeLabel: "KL_484BV2_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV2_OLS", closeLabel: "KL_484BV2_CLS" }
          )}`}
          label="KL_484BV2_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "484BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV3_OLS", closeLabel: "KL_484BV3_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV3_OLS", closeLabel: "KL_484BV3_CLS" }
          )}`}
          label="KL_484BV3_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "484BV3",
          }}
        />
      </div>
      <div className="position-absolute single-text-20">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV4_OLS", closeLabel: "KL_484BV4_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_484BV4_OLS", closeLabel: "KL_484BV4_CLS" }
          )}`}
          label="KL_484BV4_OLS"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "484BV4",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_484BL1_PH", runLabel: "KL_484BL1_RUN" }
          )} p-3`}
          label="KL_484BL1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "484BL1",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_484BL2_PH", runLabel: "KL_484BL2_RUN" }
          )} p-3`}
          label="KL_484BL2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "484BL2",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_484BL3_PH", runLabel: "KL_484BL3_RUN" }
          )} p-3`}
          label="KL_484BL3_RUN"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "484BL3",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_484BL4_PH", runLabel: "KL_484BL4_RUN" }
          )} p-3`}
          label="KL_484BL4_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "484BL4",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_484BL5_PH", runLabel: "KL_484BL5_RUN" }
          )} p-3`}
          label="KL_484BL5_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "484BL5",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_454BL2_PH", runLabel: "KL_454BL2_RUN" }
          )} p-3`}
          label="KL_454BL2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "454BL2",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_454BL3_PH", runLabel: "KL_454BL3_RUN" }
          )} p-3`}
          label="KL_454BL3_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "454BL3",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-28"
        list={tagsData.maiharL4KilnTextcolumn8}
      />
      <TextColumn
        useClass="position-absolute single-text-29"
        list={tagsData.maiharL4KilnTextcolumn1}
      />
      <TextColumn
        useClass="position-absolute single-text-30"
        list={tagsData.maiharL4KilnTextcolumn2}
      />
      <TextColumn
        useClass="position-absolute single-text-31"
        list={tagsData.maiharL4KilnTextcolumn3}
      />
      <TextColumn
        useClass="position-absolute single-text-32"
        list={tagsData.maiharL4KilnTextcolumn9}
      />
      <TextColumn
        useClass="position-absolute single-text-33"
        list={tagsData.maiharL4KilnTextcolumn10}
      />
      <div className="position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "KL_464MD2_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "KL_464MD2_M03_PH",
                runLabel: "KL_464MD2_M03_RUN",
              }
            )}`}
            label="KL_464MD2_M03_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "KL_464MD2_M02_PH",
                runLabel: "KL_464MD2_M02_RUN",
              }
            )} ml-2`}
            label="KL_464MD2_M02_RUN"
          />
        </div>
      </div>

      <div className="position-absolute single-text-35">
        <BlackContainer
          data={{
            label: "KL_464AD2_I01",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_464AD1_M02_PH",
                healthyLabel: "KL_464AD1_M02_RUN",
              }
            )}`}
            label="KL_464AD1_M02_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                runLabel: "KL_464AD2_M02_PH",
                healthyLabel: "KL_464AD2_M02_RUN",
              }
            )} ml-2`}
            label="KL_464AD2_M02_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-36">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "KL_464AD2_M02_PH",
                runLabel: "KL_464AD2_M02_RUN",
              }
            )}`}
            label="KL_464AD2_M02_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "KL_464AD1_M02_PH",
                runLabel: "KL_464AD1_M02_RUN",
              }
            )} ml-2`}
            label="KL_464AD1_M02_RUN"
          />
        </div>
        <BlackContainer
          data={{
            label: "KL_464AD1_I01",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "M01",
            }}
          />
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "KL_464MD1_PH",
                runLabel: "KL_464MD1_RUN",
              }
            )} p-3`}
            label="KL_464MD1_RUN"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "KL_464MD1_M02_PH",
                runLabel: "KL_464MD1_M02_RUN",
              }
            )}`}
            label="KL_464MD1_M02_RUN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "KL_464MD1_M03_PH",
                runLabel: "KL_464MD1_M03_RUN",
              }
            )} ml-3`}
            label="KL_464MD1_M03_RUN"
            text="M"
          />
        </div>
        <BlackContainer
          data={{
            label: "KL_464MD1_II",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KL_464KL1_PT4",
          useClass: "greenTxt position-absolute single-text-41",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BU1_PT3",
          useClass: "greenTxt position-absolute single-text-42",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-44">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1",
            label: "Thruster Matrix",
          }}
        />
        <div className="d-flex mt-1">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("KL_464KT1_FS")}`}
            label="KL_464KT1_FS"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("KL_464KT1_GS")} ml-2`}
            label="KL_464KT1_GS"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "KL_464KT1_LS_LL"
            )} ml-2`}
            label="KL_464KT1_LS_LL"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "KL_464KT1_LS_HH"
            )} ml-2`}
            label="KL_464KT1_LS_HH"
            text="L"
          />
        </div>
        <BlackContainer
          data={{
            label: "KL_464KT1_PT",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute text-center px-2 py-3 border border-dark single-text-45">
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464KT1.V03",
              }}
            />
            <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "KL_464KT1_SV3"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
                "KL_464KT1_SV3"
              )}`}
              label="KL_464KT1_SV3"
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464KT1.V04",
              }}
            />
            <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "KL_464KT1_SV4"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
                "KL_464KT1_SV4"
              )}`}
              label="KL_464KT1_SV4"
            />
          </div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "KL_464PU1_PH", runLabel: "KL_464PU1_RUN" }
            )} ml-auto mt-2`}
            label="KL_464PU1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "464PU1",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_464KT1_TE2",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="d-flex">
            <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "KL_464KT1_SV1"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
                "KL_464KT1_SV1"
              )}`}
              label="KL_464KT1_SV1"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464KT1.V01",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "KL_464KT1_SV2"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
                "KL_464KT1_SV2"
              )}`}
              label="KL_464KT1_SV2"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464KT1.V02",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`dot mt-2 mr-auto digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "KL_464PU2_PH", runLabel: "KL_464PU2_RUN" }
            )}`}
            label="KL_464PU2_RUN"
          />
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "464PU2",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_464PU1_2_ALM"
              )} ml-3`}
              label="KL_464PU1_2_ALM"
              text="X"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 w-75",
              label: "Hydraulic Unit For Thrust Roller",
            }}
          />
        </div>
        <div className="CGRnBox bg-light position-absolute"></div>
      </div>
      <div className="position-absolute text-center p-2 border border-dark single-text-46">
        <div className="d-flex">
          <div>
            <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "KL_464LQ3_V01"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "KL_464LQ3_V01"
              )}`}
              label="KL_464LQ3_V01"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "464LQ3.V01",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "KL_464LQ3_ZS_ALM"
            )} ml-3`}
            text="X"
            label="KL_464LQ3_ZS_ALM"
          />
          <div className="ml-3">
            <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "KL_464LQ3_V02"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "KL_464LQ3_V02"
              )}`}
              label="KL_464LQ3_V02"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "464LQ3.V02",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("KL_464LQ3_P1_WNG")}`}
            label="KL_464LQ3_P1_WNG"
            text="X"
          />
          <MotorCircleDigitalTag
            className={`dot ml-2 digital-tag ${useColorStatus(
              "KL_464LQ3_P1_FLT"
            )}`}
            label="KL_464LQ3_P1_FLT"
            text="X"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "464LQ3",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-2 ${useColorStatus(
              "KL_464LQ3_P2_WNG"
            )}`}
            label="KL_464LQ3_P2_WNG"
            text="X"
          />
          <MotorCircleDigitalTag
            className={`dot ml-2 digital-tag ${useColorStatus(
              "KL_464LQ3_P2_FLT"
            )}`}
            label="KL_464LQ3_P2_FLT"
            text="X"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Girth Gear Spray Lube.",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-47">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "KL_464PU1_2_ALM"
          )} ml-2`}
          label="KL_464PU1_2_ALM"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "KILN_AUXILIARY_RUN"
          )} ml-2`}
          label="KILN_AUXILIARY_RUN"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "KL_464FN7_9_RUN"
          )} ml-2`}
          label="KL_464FN7_9_RUN"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_464FNR_RUN")} ml-2`}
          label="KL_464FNR_RUN"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_454FN1_RUN")} ml-2`}
          label="KL_454FN1_RUN"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_464MD1_D3")} ml-2`}
          label="KL_464MD1_D3"
          text="I"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "KL_CL_COAN_TEMP_HH"
          )} ml-2`}
          label="KL_CL_COAN_TEMP_HH"
          text="I"
        />
      </div>
      <div className="d-flex position-absolute single-text-48">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_484BL1_M02_PH", runLabel: "KL_484BL1_M02_RUN" }
          )}`}
          label="KL_484BL1_M02_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_484BL1_M03_PH", runLabel: "KL_484BL1_M03_RUN" }
          )} ml-2`}
          label="KL_484BL1_M03_RUN"
        />
      </div>
      <div className="d-flex position-absolute single-text-49">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_484BL2_M02_PH", runLabel: "KL_484BL2_M02_RUN" }
          )}`}
          label="KL_484BL2_M02_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_484BL2_M03_PH", runLabel: "KL_484BL2_M03_RUN" }
          )} ml-2`}
          label="KL_484BL2_M03_RUN"
        />
      </div>
      <MotorCircleDigitalTag
        className={`position-absolute single-text-50 ml-2 dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          { healthyLabel: "KL_484BL3_M02_PH", runLabel: "KL_484BL3_M02_RUN" }
        )}`}
        label="KL_484BL3_M02_RUN"
      />
      <MotorCircleDigitalTag
        className={`position-absolute single-text-51 dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          { healthyLabel: "KL_484BL4_M02_PH", runLabel: "KL_484BL4_M02_RUN" }
        )} ml-2`}
        label="KL_484BL4_M02_RUN"
      />
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-52">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`dot gdigital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_464FN7_PH", runLabel: "KL_464FN7_RUN" }
          )}`}
          label="KL_464FN7_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "464FN7",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-53">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_464FN8_PH", runLabel: "KL_464FN8_RUN" }
          )}`}
          label="KL_464FN8_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "464FN8",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-54">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_464FN9_PH", runLabel: "KL_464FN9_RUN" }
          )}`}
          label="KL_464FN9_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "464FN9",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-55">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { runLabel: "KL_454FN1_RUN", healthyLabel: "KL_454FN1_PH" }
          )}`}
          label="KL_454FN1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "452FN1",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-56">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_464LQ4_PH", runLabel: "KL_464LQ4_RUN" }
          )}`}
          label="KL_464LQ4_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "464LQ4",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-57">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "KL_464LQ5_PH", runLabel: "KL_464LQ5_RUN" }
          )}`}
          label="KL_464LQ5_RUN"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "464LQ5",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-58">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_464AD1_ZS1")}`}
          text="Z"
          label="KL_464AD1_ZS1"
        />
        <MotorCircleDigitalTag
          className={`dot mt-2 digital-tag ${useColorStatus("KL_464AD1_ZS2")}`}
          text="Z"
          label="KL_464AD1_ZS2"
        />
      </div>
      <div className="d-flex position-absolute text-center single-text-59">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "464LQ2",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_GB2_TEMP_HH")} ml-2`}
          label="KL_GB2_TEMP_HH"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_GB2_COND_OK")} ml-2`}
          label="KL_GB2_COND_OK"
          text="H"
        />
      </div>
      <div className="d-flex position-absolute text-center single-text-60">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "464LQ2",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_GB1_TEMP_HH")} ml-2`}
          label="KL_GB1_TEMP_HH"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_GB1_COND_OK")} ml-2`}
          label="KL_GB1_COND_OK"
          text="H"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mr-2 d-flex position-absolute single-text-61",
          label: "464GB2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-62",
          label: "FROM PREHEATER",
        }}
      />

      <div className="position-absolute text-center single-text-63">
        <MotorCircleDigitalTag
          className={`dot digital-tag  ${useColorStatus("KL_464AD2_ZS2")}`}
          text="Z"
          label="KL_464AD2_ZS2"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_464AD2_ZS1")} mt-2`}
          text="Z"
          label="KL_464AD2_ZS1"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-danger position-absolute single-text-65",
          label: "Kiln Will Trip",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-66",
          label: "464KH1",
        }}
      />
      <div className={`position-absolute single-text-67 p-3 square grey-color`}>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_484CG1_ZS1")}`}
          label="KL_484CG1_ZS1"
          text="X"
        />
      </div>
      <div className="position-absolute single-text-68">
        <BlackContainer
          data={{
            label: "KL_484BL4_PT",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "KILN BURNER",
          }}
        />
      </div>
      <div className="position-absolute single-text-69">
        <BlackContainer
          data={{
            label: "TOF_12_ET",
            useClass: "greenTxt",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "464KT1.V05",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "KL_464KT1_SV5"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "KL_464KT1_SV5"
          )}`}
          label="KL_464KT1_SV5"
        />
      </div>
      <MotorCircleDigitalTag
        className={`position-absolute single-text-70 dot digital-tag ${useColorStatus(
          "KL_464LQ4_LS1"
        )}`}
        text="L"
        label="KL_464LQ4_LS1"
      />
      <MotorCircleDigitalTag
        className={`position-absolute single-text-71 dot digital-tag ${useColorStatus(
          "KL_464LQ5_LS1"
        )}`}
        text="L"
        label="KL_464LQ5_LS1"
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-72" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-73" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-74" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-75" />
      <div className="position-absolute single-text-76">
        <BlackContainer
          data={{
            label: "KL_484BU1_PT1",
            useClass: "greenTxt",
            unit: "mBar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_484BU1_PT2",
            useClass: "greenTxt mt-01",
            unit: "mBar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-77">
        <BlackContainer
          data={{
            label: "KL_484BL2",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_484BL2_II",
            useClass: "greenTxt ml-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-78">
        <BlackContainer
          data={{
            label: "KL_484BL3",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_484BL3_II",
            useClass: "greenTxt ml-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-79">
        <BlackContainer
          data={{
            label: "KL_484BL4",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_484BL4_II",
            useClass: "greenTxt ml-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-80">
        <BlackContainer
          data={{
            label: "KL_484BL1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_484BL1",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KL_484BL1_PT",
          useClass: "greenTxt position-absolute single-text-81",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BL2_PT",
          useClass: "greenTxt position-absolute single-text-82",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_484BL3_PT",
          useClass: "greenTxt position-absolute single-text-83",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
      {/* kiln maihar added tags */}
      <BlackContainer
        data={{
          label: "TOF_17_ET",
          useClass: "greenTxt position-absolute single-text-84",
          unit: "s",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "TON_40_ET",
          useClass: "greenTxt position-absolute single-text-85",
          unit: "s",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "TOF_10_ET",
          useClass: "greenTxt position-absolute single-text-86",
          unit: "s",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "TON_39_ET",
          useClass: "greenTxt position-absolute single-text-87",
          unit: "s",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-88",
          label: "Cooler Grate Drivers, Not Running - 5 Min",
        }}
      />

      <div className="position-absolute text-center single-text-89">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("KL_464KT1_FS")}`}
            label="KL_464KT1_FS"
            text="F"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "464KT1_FS",
            }}
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("KL_464KT1_GS")}`}
            label="KL_464KT1_GS"
            text="S"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "464KT1_GS",
            }}
          />
        </div>
      </div>

      <div className="d-flex position-absolute text-center single-text-90">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474FNJ",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "KL_474FNJ_PH", runLabel: "KL_474FNJ_RUN" }
            )}`}
            label="KL_474FNJ_RUN"
          />
        </div>

        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "474RAA",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "KL_474RAA_PH", runLabel: "KL_474RAA_RUN" }
            )}`}
            label="KL_474RAA_RUN"
          />
        </div>
      </div>
    </div>
  );
};

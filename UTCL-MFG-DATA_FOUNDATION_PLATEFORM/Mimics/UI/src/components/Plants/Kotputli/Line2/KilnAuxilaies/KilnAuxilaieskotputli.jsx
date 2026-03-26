import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
} from "../../../../index";

import * as tagsData from "../../../../../data/Kotputli/kilnmainpage/kotputliKilnMainPageTextcolumn";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const KilnAuxilaieskotputli = () => {
  return (
    <div className="KilnAuxilaieskotputli w-100 h-100 position-relative">
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
      <div className="px-5 d-flex justify-content-between img-107 position-absolute single-text-1">
        <TextColumn list={tagsData.kotputliKilnMainPageTextcolumn4} />
        <div>
          <div className={`dot ${useColorStatus("KL_CL_472CC1_RUN")}`}>x</div>
          <div className="d-flex mt-5">
            <div className={`dot ${useColorStatus("KL_SHUTDOWN_HOLD")}`}>I</div>
            <div className={`dot ${useColorStatus("KL_UP_MOVE")}`}>I</div>
            <div className={`dot ${useColorStatus("KL_REV_MOVE")}`}>I</div>
            <div className={`dot ${useColorStatus("KL_DOWN_MOVE")}`}>I</div>
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KL_462KT1_TE1",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "462KL1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "Rotary Kiln",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_462KT2_TE1",
              useClass: "greenTxt mt-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KL_462MD1_2_RUN")}`}
              label="KL_462MD1_2_RUN"
              text="X"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark bg-light ml-2",
                label: "462MD2",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "KL_462MD1_SP_PID",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mt-3",
              label: "462MD1",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "KL_462KT1_ZT",
              useClass: "greenTxt",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_462MD2_SI",
              useClass: "greenTxt mt-3",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_462MD1_SI",
              useClass: "greenTxt mt-3",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "462KT2",
            }}
          />
        </div>
        <div>
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KL_462KT1_ZS1")}`}
              label="KL_462KT1_ZS1"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_462KT1_ZS2"
              )} ml-2`}
              label="KL_462KT1_ZS2"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_462KT1_ZS3"
              )} ml-2`}
              label="KL_462KT1_ZS3"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_462KT1_ZT_ALM"
              )} ml-2`}
              label="KL_462KT1_ZT_ALM"
              text="Z"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_462KT1_ZT_ALM2"
              )} ml-2`}
              label="KL_462KT1_ZT_ALM2"
              text="Z"
            />
          </div>
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_462KT1_ZT_P_30"
              )} ml-2`}
              label="KL_462KT1_ZT_P_30"
              text="X"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_462KT1_ZT_P_25"
              )} ml-2`}
              label="KL_462KT1_ZT_P_25"
              text="X"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_462KT1_ZT_M_25"
              )} ml-2`}
              label="KL_462KT1_ZT_M_25"
              text="X"
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_462KT1_ZT_M_30"
              )} ml-2`}
              label="KL_462KT1_ZT_M_30"
              text="X"
            />
          </div>
        </div>
        <TextColumn list={tagsData.kotputliKilnMainPageTextcolumn5} />
        <TextColumn list={tagsData.kotputliKilnMainPageTextcolumn6} />
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
          <TextColumn list={tagsData.kotputliKilnMainPageTextcolumn10} />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQ6_DPS1"
                )}`}
                text="S"
                label="KL_462LQ6_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQ6_FS1"
                )} ml-2`}
                text="S"
                label="KL_462LQ6_FS1"
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
                  useClass: "text-white",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  "KL_462LQ6"
                )}`}
                label="KL_462LQ6_RUN"
              />
            </div>
          </div>
          <TextColumn
            list={tagsData.kotputliKilnMainPageTextcolumn12}
            useClass="ml-2"
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQ8_DPS1"
                )}`}
                text="S"
                label="KL_462LQ8_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQ8_FS1"
                )} ml-2`}
                text="S"
                label="KL_462LQ8_FS1"
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
                  useClass: "text-white",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  "KL_462LQ8"
                )}`}
                label="KL_462LQ8_RUN"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <TextColumn list={tagsData.kotputliKilnMainPageTextcolumn11} />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQ7_DPS1"
                )}`}
                text="S"
                label="KL_462LQ7_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQ7_FS1"
                )} ml-2`}
                text="S"
                label="KL_462LQ7_FS1"
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
                  useClass: "text-white",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  "KL_462LQ7"
                )}`}
                label="KL_462LQ7_RUN"
              />
            </div>
          </div>
          <TextColumn
            list={tagsData.kotputliKilnMainPageTextcolumn13}
            useClass="ml-2"
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQ9_DPS1"
                )}`}
                text="S"
                label="KL_462LQ9_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQ9_FS1"
                )} ml-2`}
                text="S"
                label="KL_462LQ9_FS1"
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
                  useClass: "text-white",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  "KL_462LQ9"
                )}`}
                label="KL_462LQ9_RUN"
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
          <TextColumn list={tagsData.kotputliKilnMainPageTextcolumn14} />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQA_DPS1"
                )}`}
                text="S"
                label="KL_462LQA_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQA_FS1"
                )} ml-2`}
                text="S"
                label="KL_462LQA_FS1"
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
                  useClass: "text-white",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  "KL_462LQA"
                )}`}
                label="KL_462LQA_RUN"
              />
            </div>
          </div>
          <TextColumn
            useClass="ml-2"
            list={tagsData.kotputliKilnMainPageTextcolumn16}
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQB_DPS1"
                )}`}
                text="S"
                label="KL_462LQB_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQB_FS1"
                )} ml-2`}
                text="S"
                label="KL_462LQB_FS1"
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
                  useClass: "text-white",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  "KL_462LQB"
                )}`}
                label="KL_462LQB_RUN"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <TextColumn list={tagsData.kotputliKilnMainPageTextcolumn15} />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQC_DPS1"
                )}`}
                text="S"
                label="KL_462LQC_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQC_FS1"
                )} ml-2`}
                text="S"
                label="KL_462LQC_FS1"
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
                  useClass: "text-white",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  "KL_462LQC"
                )}`}
                label="KL_462LQC_RUN"
              />
            </div>
          </div>
          <TextColumn
            list={tagsData.kotputliKilnMainPageTextcolumn17}
            className="ml-2"
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQD_DPS1"
                )}`}
                text="S"
                label="KL_462LQD_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQD_FS1"
                )} ml-2`}
                text="S"
                label="KL_462LQD_FS1"
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
                  useClass: "text-white",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  "KL_462LQD"
                )}`}
                label="KL_462LQD_RUN"
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
          <TextColumn list={tagsData.kotputliKilnMainPageTextcolumn18} />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQE_DPS1"
                )}`}
                text="S"
                label="KL_462LQE_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQE_FS1"
                )} ml-2`}
                text="S"
                label="KL_462LQE_FS1"
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
                  useClass: "text-white",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  "KL_462LQE"
                )}`}
                label="KL_462LQE_RUN"
              />
            </div>
          </div>
          <TextColumn
            list={tagsData.kotputliKilnMainPageTextcolumn20}
            useClass="ml-2"
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQG_DPS1"
                )}`}
                text="S"
                label="KL_462LQG_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQG_FS1"
                )} ml-2`}
                text="S"
                label="KL_462LQG_FS1"
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
                  useClass: "text-white",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  "KL_462LQG"
                )}`}
                label="KL_462LQG_RUN"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <TextColumn list={tagsData.kotputliKilnMainPageTextcolumn19} />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQF_DPS1"
                )}`}
                text="S"
                label="KL_462LQF_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQF_FS1"
                )} ml-2`}
                text="S"
                label="KL_462LQF_FS1"
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
                  useClass: "text-white",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  "KL_462LQF"
                )}`}
                label="KL_462LQF_RUN"
              />
            </div>
          </div>
          <TextColumn
            list={tagsData.kotputliKilnMainPageTextcolumn21}
            useClass="ml-2"
          />
          <div className="mx-4 mb-3 position-relative">
            <div className="d-flex mb-2">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQH_DPS1"
                )}`}
                text="S"
                label="KL_462LQH_DPS1"
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus(
                  "KL_462LQH_FS1"
                )} ml-2`}
                text="S"
                label="KL_462LQH_FS1"
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
                  useClass: "text-white",
                  label: "PL1",
                }}
              />
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                  "KL_462LQH"
                )}`}
                label="KL_462LQH_RUN"
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
                label: "462FNA",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNA"
              )} mt-2`}
              label="KL_462FNA_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FNB",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNB"
              )} mt-2`}
              label="KL_462FNB_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FNC",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNC"
              )} mt-2`}
              label="KL_462FNC_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FND",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FND"
              )} mt-2`}
              label="KL_462FND_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FNE",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNE"
              )} mt-2`}
              label="KL_462FNE_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FNF",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNF"
              )} mt-2`}
              label="KL_462FNF_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FNG",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNG"
              )} mt-2`}
              label="KL_462FNG_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FNH",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNH"
              )} mt-2`}
              label="KL_462FNH_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FNJ",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNJ"
              )} mt-2`}
              label="KL_462FNJ_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FNK",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNK"
              )} mt-2`}
              label="KL_462FNK_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FNL",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNL"
              )} mt-2`}
              label="KL_462FNL_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FNM",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNM"
              )} mt-2`}
              label="KL_462FNM_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FNN",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNN"
              )} mt-2`}
              label="KL_462FNN_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FNP",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNP"
              )} mt-2`}
              label="KL_462FNP_RUN"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FNQ",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FNQ"
              )} mt-2`}
              label="KL_462FNQ_RUN"
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
                label: "462FN1",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FN1"
              )} mt-2`}
              label="KL_462FN1_RUN"
            />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FN2",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FN2"
              )} mt-2`}
              label="KL_462FN2_RUN"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "462KS1",
          }}
        />
      </div>
      <div className="position-absolute text-center p-2 border border-dark single-text-10">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FN3",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FN3"
              )} mt-2`}
              label="KL_462FN3_RUN"
            />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FN4",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FN4"
              )} mt-2`}
              label="KL_462FN4_RUN"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "462KS2",
          }}
        />
      </div>
      <div className="position-absolute text-center p-2 border border-dark single-text-11">
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FN6",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FN5"
              )} mt-2`}
              label="KL_462FN5_RUN"
            />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462FN6",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462FN6"
              )} mt-2`}
              label="KL_462FN6_RUN"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "462KS3",
          }}
        />
      </div>
      <div className="position-absolute text-center p-2 border border-dark single-text-12">
        <div className="d-flex">
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462PU3"
              )} mb-2`}
              label="KL_462PU3_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462PU3",
              }}
            />
          </div>
          <div className="ml-3">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462PU4"
              )} mb-2`}
              label="KL_462PU4_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462PU4",
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
                label: "462PU7",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462PU7"
              )} mb-2`}
              label="KL_462PU7_RUN"
            />
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462PU8",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_462PU8"
              )} mb-2`}
              label="KL_462PU8_RUN"
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
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "KL_462FNR"
            )} mb-2`}
            label="KL_462FNR_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "462FNR",
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
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                "KL_482CG1"
              )}`}
              label="KL_482CG1_RUN"
            />
            <div className="yellowline-Vr position-relative"></div>
            <div className={`square grey-color`}></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "482CG1",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "KL_482CG1_ZS1"
            )} mb-2`}
            text="X"
            label="KL_482CG1_ZS1"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "482BV5",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV5_OPN", closeLabel: "KL_482BV5_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV5_OPN", closeLabel: "KL_482BV5_CLS" }
          )}`}
          label="KL_482BV5_OPN"
        />
      </div>
      <div className="position-absolute single-text-17">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV1_OPN", closeLabel: "KL_482BV1_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV1_OPN", closeLabel: "KL_482BV1_CLS" }
          )}`}
          label="KL_482BV1_OPN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "482BV1",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV2_OPN", closeLabel: "KL_482BV2_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV2_OPN", closeLabel: "KL_482BV2_CLS" }
          )}`}
          label="KL_482BV2_OPN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "482BV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV3_OPN", closeLabel: "KL_482BV3_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV3_OPN", closeLabel: "KL_482BV3_CLS" }
          )}`}
          label="KL_482BV3_OPN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "482BV3",
          }}
        />
      </div>
      <div className="position-absolute single-text-20">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV4_OPN", closeLabel: "KL_482BV4_CLS" }
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag ${useBVTagsColorStatusForNewPlantScreens(
            { openLabel: "KL_482BV4_OPN", closeLabel: "KL_482BV4_CLS" }
          )}`}
          label="KL_482BV4_OPN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "482BV4",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_482BL1"
          )} p-3`}
          label="KL_482BL1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "482BL1",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_482BL2"
          )} p-3`}
          label="KL_482BL2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "482BL2",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_482BL3"
          )} p-3`}
          label="KL_482BL3_RUN"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "482BL3",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_482BL4"
          )} p-3`}
          label="KL_482BL4_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "482BL4",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_482BL5"
          )} p-3`}
          label="KL_482BL5_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "482BL5",
          }}
        />
      </div>
      <div className="position-absolute single-text-26">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_452BL2"
          )} p-3`}
          label="KL_452BL2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "452BL2",
          }}
        />
      </div>
      <div className="position-absolute single-text-27">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_452BL3"
          )} p-3`}
          label="KL_452BL3_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "452BL3",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-28"
        list={tagsData.kotputliKilnMainPageTextcolumn7}
      />
      <TextColumn
        useClass="position-absolute single-text-29"
        list={tagsData.kotputliKilnMainPageTextcolumn1}
      />
      <TextColumn
        useClass="position-absolute single-text-30"
        list={tagsData.kotputliKilnMainPageTextcolumn2}
      />
      <TextColumn
        useClass="position-absolute single-text-31"
        list={tagsData.kotputliKilnMainPageTextcolumn3}
      />
      <TextColumn
        useClass="position-absolute single-text-32"
        list={tagsData.kotputliKilnMainPageTextcolumn8}
      />
      <TextColumn
        useClass="position-absolute single-text-33"
        list={tagsData.kotputliKilnMainPageTextcolumn9}
      />
      <div className="position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "KL_462MD2_II",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "KL_462MD2_M03"
            )}`}
            label="KL_462MD2_M03_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "KL_462MD2_M02"
            )} ml-2`}
            label="KL_462MD2_M02_RUN"
          />
        </div>
        <div className="mt-2">
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "KL_462MD2"
            )} p-3`}
            label="KL_462MD2_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "462MD2.M01",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-35">
        <BlackContainer
          data={{
            label: "KL_462AD2_I01",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "KL_462AD2_M02"
            )}`}
            label="KL_462AD2_M02_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "KL_462AD2"
            )} ml-2`}
            label="KL_462AD2_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-36">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "KL_462AD1_M02"
            )}`}
            label="KL_462AD1_M02_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "KL_462AD1"
            )} ml-2`}
            label="KL_462AD1_RUN"
          />
        </div>
        <BlackContainer
          data={{
            label: "KL_462AD1_I01",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "462MD1.M01",
            }}
          />
          <div className="yellowline-Vr upArrow position-absolute"></div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "KL_462MD1"
            )} p-3`}
            label="KL_462MD1_RUN"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "KL_462MD1_M02"
            )}`}
            label="KL_462MD1_M02_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "KL_462MD1_M03"
            )} ml-3`}
            label="KL_462MD1_M03_RUN"
          />
        </div>
        <BlackContainer
          data={{
            label: "KL_462MD1_II",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KL_462FN8",
          useClass: "greenTxt position-absolute single-text-41",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_482BU1_PT3",
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
            className={`dot digital-tag ${useColorStatus("KL_462KT1_FS")}`}
            label="KL_462KT1_FS"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("KL_462KT1_GS")} ml-2`}
            label="KL_462KT1_GS"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "KL_462KT1_LS_LL"
            )} ml-2`}
            label="KL_462KT1_LS_LL"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "KL_462KT1_LS_HH"
            )} ml-2`}
            label="KL_462KT1_LS_HH"
            text="L"
          />
        </div>
        <BlackContainer
          data={{
            label: "KL_462KT1_PT",
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
                label: "462KT1.V03",
              }}
            />
            <div className={`dot ${useColorStatus("KL_462KT1_V03")}`}> v </div>
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462KT1.V04",
              }}
            />
            <div className={`dot ${useColorStatus("KL_462KT1_V04")}`}> v </div>
          </div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "KL_462PU1"
            )} ml-auto mt-2`}
            label="KL_462PU1_RUN"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "462PU1",
            }}
          />
          <BlackContainer
            data={{
              label: "KL_462KT1_TE2",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <div className="d-flex">
            <div className={`dot ${useColorStatus("KL_462KT1_V01")}`}> v </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462KT1.V01",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KL_462KT1_V05")}`}
              text="V"
              label="KL_462KT1_V05"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462KT1.V02",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`dot mt-2 mr-auto digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              "KL_462PU2"
            )}`}
            label="KL_462PU2_RUN"
          />
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "462PU2",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "KL_462PU1_2_ALM"
              )} ml-3`}
              label="KL_462PU1_2_ALM"
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
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "KL_462LQ3_V01_OPN",
                  closeLabel: "KL_462LQ3_V01_CLS",
                }
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "KL_462LQ3_V01_OPN",
                  closeLabel: "KL_462LQ3_V01_CLS",
                }
              )}`}
              label="KL_462LQ3_V01_OPN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "462LQ3.V01",
              }}
            />
          </div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "KL_462LQ3_ZS_ALM"
            )} ml-3`}
            text="X"
            label="KL_462LQ3_ZS_ALM"
          />
          <div className="ml-3">
            <MimicCaret
              parentClass="d-flex tringle-item"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "KL_462LQ3_V02_OPN",
                  closeLabel: "KL_462LQ3_V02_CLS",
                }
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useBVTagsColorStatusForNewPlantScreens(
                {
                  openLabel: "KL_462LQ3_V02_OPN",
                  closeLabel: "KL_462LQ3_V02_CLS",
                }
              )}`}
              label="KL_462LQ3_V02_OPN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "462LQ3.V02",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("KL_462PU1_2_ALM")}`}
            label="KL_462PU1_2_ALM"
            text="X"
          />
          <MotorCircleDigitalTag
            className={`dot ml-2 digital-tag ${useColorStatus(
              "KL_462LQ3_P1_FLT"
            )}`}
            label="KL_462LQ3_P1_FLT"
            text="X"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "462LQ3",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ml-2 ${useColorStatus(
              "KL_462LQ3_P2_WNG"
            )}`}
            label="KL_462LQ3_P2_WNG"
            text="X"
          />
          <MotorCircleDigitalTag
            className={`dot ml-2 digital-tag ${useColorStatus(
              "KL_462LQ3_P2_FLT"
            )}`}
            label="KL_462LQ3_P2_FLT"
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
            "KL_462PU1_2_ALM"
          )} ml-2`}
          label="KL_462PU1_2_ALM"
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
            "KL_462FN7_9_RUN"
          )} ml-2`}
          label="KL_462FN7_9_RUN"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus(
            "KL_462FN7_9_RUN"
          )} ml-2`}
          label="KL_462FN7_9_RUN"
          text="X"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_452FN1_RUN")} ml-2`}
          label="KL_452FN1_RUN"
          text="X"
        />
      </div>
      <div className="d-flex position-absolute single-text-48">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_482BL1_M02"
          )}`}
          label="KL_482BL1_M02_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_482BL1_M03"
          )} ml-2`}
          label="KL_482BL1_M03_RUN"
        />
      </div>
      <div className="d-flex position-absolute single-text-49">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_482BL2_M02"
          )}`}
          label="KL_482BL2_M02_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_482BL2_M03"
          )} ml-2`}
          label="KL_482BL2_M03_RUN"
        />
      </div>
      <MotorCircleDigitalTag
        className={`position-absolute single-text-50 ml-2 dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          "KL_482BL3_M02"
        )}`}
        label="KL_482BL3_M02_RUN"
      />
      <MotorCircleDigitalTag
        className={`position-absolute single-text-51 dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
          "KL_482BL4_M02"
        )} ml-2`}
        label="KL_482BL4_M02_RUN"
      />
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-52">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_462FN7"
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
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-53">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_462FN8"
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
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-54">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_462FN9"
          )}`}
          label="KL_462FN9_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "462FN9",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-55">
        <i className="fa-solid fa-up-long"></i>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_452FN1"
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
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-56">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_462LQ4"
          )}`}
          label="KL_462LQ4_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "462LQ4",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-57">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            "KL_462LQ5"
          )}`}
          label="KL_462LQ5_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "462LQ5",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-58">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_462AD1_ZS1")}`}
          text="Z"
          label="KL_462AD1_ZS1"
        />
        <MotorCircleDigitalTag
          className={`dot mt-2 digital-tag ${useColorStatus("KL_462AD1_ZS2")}`}
          text="Z"
          label="KL_462AD1_ZS2"
        />
      </div>
      <div className="d-flex position-absolute text-center single-text-59">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "462LQ2",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_GB2_TEMP_HH")} ml-2`}
          text="X"
          label="KL_GB2_TEMP_HH"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_GB2_COND_OK")} ml-2`}
          text="H"
          label="KL_GB2_COND_OK"
        />
      </div>
      <div className="d-flex position-absolute text-center single-text-60">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "462LQ1",
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
          label: "462GB2",
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
          className={`dot digital-tag  ${useColorStatus("KL_462AD2_ZS2")}`}
          text="Z"
          label="KL_462AD2_ZS2"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_462AD2_ZS1")} mt-2`}
          text="Z"
          label="KL_462AD2_ZS1"
        />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center position-absolute text-center single-text-64">
        <i className="fa-solid fa-up-long"></i>
        <div className={`dot ${useColorStatus("KL_462CP1")}`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "462CP1",
          }}
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
          label: "462KH1",
        }}
      />
      <div className={`position-absolute single-text-67 p-3 square grey-color`}>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("KL_482CG1_ZS1")}`}
          label="KL_482CG1_ZS1"
          text="X"
        />
      </div>
      <div className="position-absolute single-text-68">
        <BlackContainer
          data={{
            label: "KL_482BU1_PT2",
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

      <MotorCircleDigitalTag
        className={`position-absolute single-text-69 dot digital-tag ${useColorStatus(
          "KL_462KT1_V05"
        )}`}
        text="V"
        label="KL_462KT1_V05"
      />
      <MotorCircleDigitalTag
        className={`position-absolute single-text-70 dot digital-tag ${useColorStatus(
          "KL_462LQ4_LS1"
        )}`}
        text="L"
        label="KL_462LQ4_LS1"
      />
      <MotorCircleDigitalTag
        className={`position-absolute single-text-71 dot digital-tag ${useColorStatus(
          "KL_462LQ5_LS1"
        )}`}
        text="L"
        label="KL_462LQ5_LS1"
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-72" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-73" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-74" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-75" />
      <div className="d-flex position-absolute single-text-76">
        <BlackContainer
          data={{
            label: "KL_482BU1_PT1",
            useClass: "greenTxt",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482BL2_PT",
            useClass: "greenTxt ml-4",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-77">
        <BlackContainer
          data={{
            label: "KL_482BL2_SI",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482BL2_II",
            useClass: "greenTxt ml-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-78">
        <BlackContainer
          data={{
            label: "KL_482BL3_SI",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482BL3_II",
            useClass: "greenTxt ml-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-79">
        <BlackContainer
          data={{
            label: "KL_482BL4_SI",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482BL4_II",
            useClass: "greenTxt ml-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-80">
        <BlackContainer
          data={{
            label: "KL_482BL1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482BL1_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KL_482BL1_PT",
          useClass: "greenTxt position-absolute single-text-81",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_482BL3_PT",
          useClass: "greenTxt position-absolute single-text-82",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "KL_482BL4_PT",
          useClass: "greenTxt position-absolute single-text-83",
          unit: "mbar",
          unitColor: "unitColor",
        }}
      />
    </div>
  );
};

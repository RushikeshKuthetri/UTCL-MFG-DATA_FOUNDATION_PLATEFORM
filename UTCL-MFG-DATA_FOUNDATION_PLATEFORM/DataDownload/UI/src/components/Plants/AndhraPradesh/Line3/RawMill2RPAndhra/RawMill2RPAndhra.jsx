import {
  TextContainerWithWrapWord,
  BlackContainer,
  MimicCaret,
  PipeWithCircles,
  TextColumn,
  MotorCircleDigitalTag,
} from "../../../../index";

import * as tagsData from "../../../../../data/andhrapradesh/Rawmill2RP/rawmill2rpAPTextcolumn";
import { useMotorTagsColorStatusForNewPlantScreens } from "../../../../../utils";

export const RawMill2RPAndhra = () => {
  return (
    <div className="RawMill1RPAndra RawMill2RPAndhra w-100 h-100 position-relative">
      <div className="yellowline-Vr upArrow position-absolute line-1"></div>
      <div className="yellowline-Vr upArrow position-absolute line-2"></div>
      <div className="yellowline-Vr position-absolute line-3"></div>
      <div className="yellowline-Hr position-absolute line-4"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-5"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-6"></div>
      <div className="yellowline-Vr position-absolute line-7"></div>
      <div className="yellowline-Vr position-absolute line-8"></div>
      <div className="yellowline-Vr position-absolute line-9"></div>
      <div className="yellowline-Vr position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Vr position-absolute line-12"></div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Vr position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr position-absolute line-16"></div>
      <div className="yellowline-Hr position-absolute line-17"></div>
      <div className="yellowline-Hr position-absolute line-18"></div>
      <div className="yellowline-Hr position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="yellowline-Hr position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <TextColumn
        useClass="d-flex flex-column justify-content-end pipeVr position-absolute pipe-1"
        list={tagsData.rawmill2rpAPTextcolumn8}
      />
      <TextColumn
        useClass="d-flex flex-column justify-content-end pipeVr position-absolute pipe-2"
        list={tagsData.rawmill2rpAPTextcolumn9}
      />
      <div className="d-flex position-absolute single-text-7">
        <div className="yellowline-Vr position-relative"></div>
        <div className="yellowline-Vr position-relative"></div>
        <div className="yellowline-Vr position-relative"></div>
      </div>
      <div className="d-flex position-absolute single-text-8">
        <div className="yellowline-Vr position-relative"></div>
        <div className="yellowline-Vr position-relative"></div>
        <div className="yellowline-Vr position-relative"></div>
      </div>
      <div className="text-center position-absolute single-text-1">
        <div className="containerImage">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-3",
              label: "RP PRE BIN",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "WEIGHT",
            }}
          />
          <BlackContainer
            data={{
              label: "RM2_363RP2_BT",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="pipeVr position-relative"> </div>
      </div>
      <div className="text-center position-absolute single-text-3">
        <div className="pipeHr position-relative"> </div>
        <div className="pipeVr position-relative"> </div>
      </div>
      <div className="text-center position-absolute single-text-4">
        <div className="pipeHr position-relative"> </div>
        <div className="pipeVr position-relative"> </div>
      </div>
      <div className="d-flex flex-column img-93 position-absolute single-text-2">
        <div className="d-flex justify-content-between align-items-end mt-auto px-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "MR",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FR",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-5">
        <PipeWithCircles parentDivClass="hpipecircle position-relative box-1" />
        <PipeWithCircles parentDivClass="hpipecircle position-relative box-2" />
        <div className="pipeVr position-relative"> </div>
      </div>
      <div className="text-center position-absolute single-text-6">
        <PipeWithCircles parentDivClass="hpipecircle position-relative box-1" />
        <PipeWithCircles parentDivClass="hpipecircle position-relative box-2" />
        <div className="pipeVr position-relative"> </div>
      </div>
      <div className="CGRnBox position-absolute single-text-9"></div>
      <div className="CGRnBox position-absolute single-text-10"></div>
      <div className="d-flex align-items-center position-absolute single-text-11">
        <div className="d-flex align-items-center CGRnBox box-3">
          <div className="CGRnBox"></div>
        </div>
        <div className="CGRnBox box-4"></div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-12">
        <div className="d-flex align-items-center CGRnBox box-3">
          <div className="CGRnBox"></div>
        </div>
        <div className="CGRnBox box-4"></div>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center position-absolute single-text-13">
        <div className={`dot grey-color`} />
        <div className="d-flex">
          <div className={`square grey-color`} />
          <div className={`square grey-color`} />
        </div>
        <div className={`dot grey-color`} />
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center position-absolute single-text-14">
        <div className={`dot grey-color`} />
        <div className="d-flex">
          <div className={`square grey-color`} />
          <div className={`square grey-color`} />
        </div>
        <div className={`dot grey-color`} />
      </div>
      <div className="CGRnBox position-absolute single-text-15"></div>
      <div className="d-flex position-absolute single-text-16">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363LQ6_M02_RUN",
              healthyLabel: "RM2_363LQ6_M02_PH",
            }
          )}`}
          label="RM2_363LQ6_M02_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363LQ6_M01_RUN",
              healthyLabel: "RM2_363LQ6_M01_PH",
            }
          )}`}
          label="RM2_363LQ6_M01_RUN"
        />
      </div>
      <div className="d-flex position-absolute single-text-17">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363LQ5_M01_RUN",
              healthyLabel: "RM2_363LQ5_M01_PH",
            }
          )}`}
          label="RM2_363LQ5_M01_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363LQ5_M02_RUN",
              healthyLabel: "RM2_363LQ5_M02_PH",
            }
          )}`}
          label="RM2_363LQ5_M02_RUN"
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-18"
        list={tagsData.rawmill2rpAPTextcolumn2}
      />
      <TextColumn
        useClass="position-absolute single-text-19"
        list={tagsData.rawmill2rpAPTextcolumn3}
      />
      <TextColumn
        useClass="position-absolute single-text-20"
        list={tagsData.rawmill2rpAPTextcolumn1}
      />
      <TextColumn
        useClass="position-absolute single-text-21"
        list={tagsData.rawmill2rpAPTextcolumn4}
      />
      <TextColumn
        useClass="position-absolute single-text-22"
        list={tagsData.rawmill2rpAPTextcolumn5}
      />
      <TextColumn
        useClass="position-absolute single-text-23"
        list={tagsData.rawmill2rpAPTextcolumn6}
      />
      <TextColumn
        useClass="position-absolute single-text-24"
        list={tagsData.rawmill2rpAPTextcolumn11}
        text="MD5"
        textClass="text-dark"
      />
      <TextColumn
        useClass="position-absolute single-text-25"
        list={tagsData.rawmill2rpAPTextcolumn12}
        text="MD4"
        textClass="text-dark"
      />

      <div className="position-absolute single-text-26">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "363LQ7_SOV2CYC",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_363LQ7_SOV2CYC",
            useClass: "greenTxt mt-01",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "363LQ7_SOV2CYT",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_363LQ7_SOV2CYT",
            useClass: "greenTxt mt-01",
            unit: "s",
            unitColor: "unitColor",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "363LQ7_SOV2FCT",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_363LQ7_SOV2FCT",
            useClass: "greenTxt mt-01",
            unit: "s",
            unitColor: "unitColor",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "363LQ7_SOV3CYC",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_363LQ7_SOV3CYC",
            useClass: "greenTxt mt-01",
            unit: "s",
            unitColor: "unitColor",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "363LQ7_SOV3CYT",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_363LQ7_SOV3CYT",
            useClass: "greenTxt mt-01",
            unit: "s",
            unitColor: "unitColor",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "363LQ7_SOV3FCT",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_363LQ7_SOV3FCT",
            useClass: "greenTxt mt-01",
            unit: "s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-27">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "363FNABC.FLT",
          }}
        />
        <div className={`dot grey-color`}>X</div>
      </div>
      <TextColumn
        useClass="position-absolute single-text-28"
        list={tagsData.rawmill2rpAPTextcolumn7}
      />
      <TextColumn
        useClass="position-absolute single-text-29"
        list={tagsData.rawmill2rpAPTextcolumn10}
      />
      <BlackContainer
        data={{
          label: "RM2_363MD4_GB_TT1",
          useClass: "greenTxt position-absolute single-text-30",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "RM2_363HD2_ZT2",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className={`square mt-2 ml-3 grey-color`} />
      </div>

      <div className="position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "RM2_363HD2_ZT1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className={`square mt-2 ml-3 grey-color`} />
      </div>
      <div className="text-center position-absolute single-text-33">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363MD4_HR1_RUN",
              healthyLabel: "RM2_363MD4_HR1_PH",
            }
          )}`}
          label="RM2_363MD4_HR1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "363MD4_HR1",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-34">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363MD4_HR2_RUN",
              healthyLabel: "RM2_363MD4_HR2_PH",
            }
          )}`}
          label="RM2_363MD4_HR2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "363MD4_HR2",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-35">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363MD5_HR1_RUN",
              healthyLabel: "RM2_363MD5_HR1_PH",
            }
          )}`}
          label="RM2_363MD5_HR1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "363MD5_HR1",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-36">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363MD5_HR2_RUN",
              healthyLabel: "RM2_363MD5_HR2_PH",
            }
          )}`}
          label="RM2_363MD5_HR2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "363MD5_HR2",
          }}
        />
      </div>
      <div className="grid-container-2 position-absolute single-text-37">
        <div className="text-center">
          <div className={`dot grey-color`}>P</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "363MD4_LOC_CMD",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`dot grey-color`}>P</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "363MD4_TRP_CMD",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`square  grey-color`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "363MD4_5_JI_FL",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`square  grey-color`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "363MD5_RES_TL",
            }}
          />
        </div>
        <div className="text-center">
          <div className={`square  grey-color`} />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RM2_363MD4_RES_TL",
            }}
          />
        </div>
      </div>
      <div className="text-center CGRnBox position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "MR Cooling Blower",
          }}
        />
        <div className="d-flex mt-1">
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "RM2_363MD5_M02_RUN",
                  healthyLabel: "RM2_363MD5_M02_PH",
                }
              )}`}
              label="RM2_363MD5_M02_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "363MD5.M02",
              }}
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "RM2_363MD5_M03_RUN",
                  healthyLabel: "RM2_363MD5_M03_PH",
                }
              )}`}
              label="RM2_363MD5_M03_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "363MD5.M03",
              }}
            />
          </div>
        </div>
      </div>
      <div className="text-center CGRnBox position-absolute single-text-39">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FR Cooling Blower",
          }}
        />
        <div className="d-flex mt-1">
          <div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "RM2_363MD4_M02_RUN",
                  healthyLabel: "RM2_363MD4_M02_PH",
                }
              )}`}
              label="RM2_363MD4_M02_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "361MD4.M02",
              }}
            />
          </div>
          <div className="ml-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
                {
                  runLabel: "RM2_363MD4_M03_RUN",
                  healthyLabel: "RM2_363MD4_M03_PH",
                }
              )}`}
              label="RM2_363MD4_M03_RUN"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "361MD4.M03",
              }}
            />
          </div>
        </div>
      </div>
      <div className="text-center CGRnBox position-absolute single-text-40">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FIXED ROLLER",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "FIX MOTOR DRIVE CURRENT GT MAX1",
            }}
          />
          <div className={`dot grey-color`}>x</div>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "FIX MOTOR DRIVE CURRENT GT MAX2",
            }}
          />
          <div className={`dot grey-color`}>x</div>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "FIX MOTOR DRIVE CURRENT GT MAX3",
            }}
          />
          <div className={`dot grey-color`}>x</div>
        </div>
      </div>
      <div className="text-center CGRnBox position-absolute single-text-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "MOVABLE ROLLER",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "MOV MOTOR DRIVE CURRENT GT MAX1",
            }}
          />
          <div className={`dot grey-color`}>x</div>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "MOV MOTOR DRIVE CURRENT GT MAX2",
            }}
          />
          <div className={`dot grey-color`}>x</div>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "MOV MOTOR DRIVE CURRENT GT MAX3",
            }}
          />
          <div className={`dot grey-color`}>x</div>
        </div>
      </div>
      <div className="text-center CGRnBox position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LRS INDICATIONS",
          }}
        />
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "LRS HEALTHY",
            }}
          />
          <div className={`dot grey-color`}>x</div>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "LRS LIQ LEVEL LOW",
            }}
          />
          <div className={`dot grey-color`}>x</div>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "LRS MAX",
            }}
          />
          <div className={`dot grey-color`}>x</div>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "LRS MIN",
            }}
          />
          <div className={`dot grey-color`}>x</div>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "LRS STARTING MAX TIME",
            }}
          />
          <div className={`dot grey-color`}>x</div>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "LRS TEMP MAX",
            }}
          />
          <div className={`dot grey-color`}>x</div>
        </div>
      </div>
      <div className="position-absolute single-text-43">
        <div className={`square grey-color`} />
        <div className={`square mt-1 grey-color`} />
      </div>
      <div className="position-absolute single-text-44">
        <div className={`square grey-color`} />
        <div className={`square mt-1 grey-color`} />
      </div>
      <div className={`square position-absolute single-text-45 grey-color`} />
      <div className={`square position-absolute single-text-46 grey-color`} />
      <div className="text-center position-absolute single-text-47">
        <div className={`dot grey-color`}>P</div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark my-1",
            label: "363LQ5_6_OPER",
          }}
        />
        <div className={`square mt-1 grey-color`} />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "363MD4_5_BW_AL",
          }}
        />
      </div>
      <div className="position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "363BV6",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center mt-2"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
        />
      </div>
      <div className="position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "363BV7",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center mt-2"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
        />
      </div>
      <div className="text-center position-absolute single-text-50">
        <MimicCaret
          parentClass="tringle-item mb-4"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363FNA_RUN",
              healthyLabel: "RM2_363FNA_PH",
            }
          )}`}
          label="RM2_363FNA_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "363FNA",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_363FNA_PT1",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-51">
        <MimicCaret
          parentClass="tringle-item mb-4"
          firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363FNB_RUN",
              healthyLabel: "RM2_363FNB_PH",
            }
          )}`}
          label="RM2_363FNB_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "363FNB",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_363FNB_PT1",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-52">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363FNC_RUN",
              healthyLabel: "RM2_363FNC_PH",
            }
          )}`}
          label="RM2_363FNC_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "363FNC",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "(STAND BY)",
          }}
        />
        <BlackContainer
          data={{
            label: "RM2_363FNC_PT1",
            useClass: "greenTxt mt-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <MimicCaret
        parentClass="d-flex tringle-item position-absolute single-text-53"
        firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
        secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
      />
      <MimicCaret
        parentClass="d-flex tringle-item position-absolute single-text-54"
        firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
        secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
      />

      <div className="text-center position-absolute single-text-55">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363AD2_RUN",
              healthyLabel: "RM2_363AD2_PH",
            }
          )}`}
          label="RM2_363AD2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "361AD2",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-56">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363MD5_RUN",
              healthyLabel: "RM2_363MD5_PH",
            }
          )}`}
          label="RM2_363MD5_RUN"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            {
              runLabel: "RM2_363MD4_RUN",
              healthyLabel: "RM2_363MD4_PH",
            }
          )}`}
          label="RM2_363MD4_RUN"
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-57",
          label: "363LQ6.M02",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-58",
          label: "363LQ6.M01",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-59",
          label: "363LQ5.M02",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-60",
          label: "363LQ5.M01",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-61",
          label: "GEAR BOX - LUBRICATION",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-62",
          label: "COOLING WATER CONNECTION",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light p-1 position-absolute single-text-63",
          label: "SEAL AIR FAN 2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-64",
          label: "363BV8",
        }}
      />
    </div>
  );
};

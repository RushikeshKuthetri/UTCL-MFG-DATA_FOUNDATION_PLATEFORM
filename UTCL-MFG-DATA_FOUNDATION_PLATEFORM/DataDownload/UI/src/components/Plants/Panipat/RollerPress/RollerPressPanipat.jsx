import { TextContainerWithWrapWord, BlackContainer, PipeWithCircles, MotorCircleDigitalTag, MimicCaret } from "../../../index";

import { useColorStatus, useFanImgTagsColorStatus } from "../../../../utils";

export const RollerPressPanipat = () => {
  return (
    <div className="RollerPressPanipat w-100 h-100 position-relative">
      <div className="containerImage text-center position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-2 mr-2",
            label: "541FB1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-1 mr-2",
            label: "30 Ton",
          }}
        />
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <div className="containerImage text-center ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mx-auto mt-2 mr-2",
              label: "GREASE TANK",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "CM_541_GRHTR_TEMP",
            useClass: "greenTxt  mt-2 ml-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-2 mr-2",
            label: "OIL TANK",
          }}
        />
      </div>
      <div className=" position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "GB_SPOIL_TMP_FR",
            useClass: "greenTxt  mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "GB_BRG_MR",
            useClass: "greenTxt mx-auto mt-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute d-flex single-text-27">
        <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("CM_541SG2_OLS")}`} label="CM_541SG2_OLS" />
        <MotorCircleDigitalTag className={`square digital-tag  ml-5 ${useColorStatus("CM_541SG2_CLS")}`} label="CM_541SG2_CLS" />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "FEED_REG_GATE",
              useClass: "greenTxt  ml-5",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "PV",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "GRS_SPRY_COUNT_LFT",
          useClass: "greenTxt  mt-2 position-absolute single-text-28",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "GRS_SPRY_COUNT_RGT",
          useClass: "greenTxt  mt-2 position-absolute single-text-29",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "GB_BRG_FR",
          useClass: "greenTxt  mt-2 position-absolute single-text-30",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "GB_SPOIL_TMP_MR",
          useClass: "greenTxt  mt-2 position-absolute single-text-31",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="pipeVr position-absolute pipe-1"></div>
      <div className="position-absolute single-text-8">
        <div className="pipeHr position-absolute pipe-2"></div>
        <div className="pipeHr position-absolute pipe-3">
          <div className="d-flex justify-content-around">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mx-auto mt-4 mr-2",
                  label: "FIXED ROLL",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mx-auto mt-1 mr-2",
                  label: "541RP1",
                }}
              />
            </div>
          </div>
        </div>
        <div className="pipeHr position-absolute pipe-4"></div>
        <div className="img-86 position-absolute single-text-9"></div>
        <div className="img-86 position-absolute single-text-10"></div>
        <div className="img-86 position-absolute single-text-11"></div>
        <div className="pipeHr position-absolute pipe-5"></div>

        <div className="pipeVr position-absolute pipe-10"></div>
        <div className="pipeVr position-absolute pipe-11"></div>
        <div className="pipeVr position-absolute pipe-12"></div>
        <div className="pipeVr position-absolute pipe-13"></div>
        <div className="pipeVr position-absolute pipe-14"></div>
        <div className="pipeVr position-absolute pipe-15"></div>
        <div className="pipeHr position-absolute pipe-16"></div>
        <div className="pipeHr position-absolute pipe-17"></div>
        <div className="pipeVr position-absolute pipe-18"></div>
        <div className="pipeVr position-absolute pipe-19"></div>

        <div className="img-41 position-absolute single-text-12"></div>
        <div className="yellowline-Vr position-absolute line-1"></div>
        <div className="yellowline-Vr position-absolute line-2"></div>
        <div className="yellowline-Hr position-absolute line-3"></div>
        <div className="yellowline-Hr position-absolute line-4"></div>
        <div className="yellowline-Hr position-absolute line-5"></div>
        <div className="yellowline-Vr position-absolute line-6"></div>
        <div className="yellowline-Vr downArrow position-absolute line-7"></div>
        <div className="yellowline-Vr downArrow position-absolute line-8"></div>
        <div className="yellowline-Vr downArrow position-absolute line-9"></div>
        <div className="yellowline-Vr downArrow position-absolute line-10"></div>
        <div className="yellowline-Hr leftarrow position-absolute line-11"></div>
        <div className="yellowline-Hr rightarrow position-absolute line-12"></div>
        <div className="yellowline-Vr position-absolute line-13"></div>
        <div className="yellowline-Vr position-absolute line-14"></div>
        <div className="yellowline-Hr position-absolute line-15"></div>
        <div className="yellowline-Hr position-absolute line-16"></div>
        <div className="yellowline-Hr position-absolute line-17"></div>
        <div className="yellowline-Vr position-absolute line-18"></div>
        <div className="yellowline-Vr position-absolute line-19"></div>
        <div className="yellowline-Vr upArrow position-absolute line-20"></div>
        <div className="yellowline-Vr upArrow position-absolute line-21"></div>
        <div className="yellowline-Hr  position-absolute line-22"></div>
        <div className="yellowline-Vr  position-absolute line-23"></div>
        <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      </div>
      <div className="position-absolute single-text-16">
        <div className="pipeHr position-absolute pipe-2"></div>
        <div className="pipeHr position-absolute pipe-3">
          <div className="d-flex justify-content-around">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mx-auto mt-4 mr-2",
                  label: "MOVABLE ROLL",
                }}
              />
            </div>
          </div>
        </div>
        <div className="pipeHr position-absolute pipe-4"></div>
        <div className="img-86 position-absolute single-text-9"></div>
        <div className="img-86 position-absolute single-text-10"></div>
        <div className="img-86 position-absolute single-text-11"></div>
        <div className="pipeHr position-absolute pipe-5"></div>
        <div className="img-41 position-absolute single-text-12"></div>
        <div className="yellowline-Vr position-absolute line-1"></div>
        <div className="yellowline-Vr position-absolute line-2"></div>
        <div className="yellowline-Hr position-absolute line-3"></div>
        <div className="yellowline-Hr position-absolute line-4"></div>
        <div className="position-absolute single-text-18">
          <MimicCaret parentClass="tringle-item" firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`} secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`} />
        </div>
        <div className="position-absolute single-text-19">
          <MimicCaret parentClass="tringle-item" firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`} secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`} />
        </div>
        <div className="position-absolute single-text-20">
          <MimicCaret parentClass="tringle-item" firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`} secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`} />
        </div>
        <div className="position-absolute single-text-21">
          <MimicCaret parentClass="tringle-item" firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`} secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`} />
        </div>
        <div className="position-absolute single-text-22">
          <MimicCaret parentClass="tringle-item" firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`} secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`} />
        </div>
        <div className="position-absolute single-text-23">
          <MimicCaret parentClass="tringle-item" firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`} secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`} />
        </div>
        <div className="position-absolute single-text-24">
          <MimicCaret parentClass="tringle-item" firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`} secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`} />
        </div>
      </div>

      <div className="position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "541MD1",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag p-3 mx-auto ${useColorStatus("CM_541MD1_M01")}`} text="M" label="CM_541MD1_M01" />
      </div>
      <div className="position-absolute single-text-43">
        <MotorCircleDigitalTag className={`dot digital-tag p-3 mx-auto ${useColorStatus("CM_541MD2_M01")}`} text="M" label="CM_541MD2_M01" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "362MD2",
          }}
        />
      </div>

      <div className="position-absolute single-text-46">
        <MimicCaret parentClass="tringle-item" firstCaretClass={`fa-solid fa-caret-down d-block grey-color-caret`} secondCaretClass={`fa-solid fa-caret-up d-block grey-color-caret`} />
      </div>
      <div className="position-absolute single-text-49 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mx-auto",
            label: "V9",
          }}
        />
      </div>
      <div className="position-absolute single-text-50">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mb-4",
            label: "V5",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mx-auto",
            label: "V1&2",
          }}
        />
      </div>
      <div className="position-absolute single-text-51">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mb-3",
            label: "V8",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mx-auto",
            label: "V7",
          }}
        />
      </div>
      <div className="position-absolute single-text-52 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mr-5",
            label: "V10",
          }}
        />
      </div>
      <div className="position-absolute single-text-53">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mr-5",
            label: "V6",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white  mt-5 ml-4",
            label: "V3&4",
          }}
        />
      </div>
      <div className=" position-absolute single-text-55">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "541LQ1",
            }}
          />
          <div className="img-41 d-flex justify-content-around">
            <MotorCircleDigitalTag className={`dot digital-tag p-1 mt-2 mx-auto ${useColorStatus("CM_541LQ1_M01")}`} text="M" label="CM_541LQ1_M01" />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-56">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 mr-2",
              label: "541LQ2",
            }}
          />
          <div className="img-41 d-flex justify-content-around">
            <MotorCircleDigitalTag className={`dot digital-tag p-1 mt-2 mx-auto ${useColorStatus("CM_541LQ2_M01")}`} text="M" label="CM_541LQ2_M01" />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "SPD_MR",
            useClass: "greenTxt  mt-3",
            unit: "Rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-57">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "CM_541HD1_M01_II",
              useClass: "greenTxt  mt-2 mr-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="img-41 d-flex justify-content-around">
            <MotorCircleDigitalTag className={`dot digital-tag p-1 mt-2 mx-auto ${useColorStatus("CM_541HD1_M01")}`} text="M" label="CM_541HD1_M01" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "541HD1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-58 d-flex">
        <BlackContainer
          data={{
            label: "RP_BRG_DIS_LFT_RDM",
            useClass: "greenTxt ",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "GAP DIFF",
            }}
          />
          <BlackContainer
            data={{
              label: "RP_GAP_DIFF",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "RP_BRG_DIS_RGT_RDM",
            useClass: "greenTxt ",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-59">
        <BlackContainer
          data={{
            label: "CM_541RP1_FR_VIB",
            useClass: "greenTxt ",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CM_541RP1_FR_VIB_VERT",
            useClass: "greenTxt mt-3",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "SPD_FR",
          useClass: "greenTxt position-absolute single-text-60",
          unit: "Rpm",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-61">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "LO SP",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "HI SP",
          }}
        />
      </div>
    </div>
  );
};

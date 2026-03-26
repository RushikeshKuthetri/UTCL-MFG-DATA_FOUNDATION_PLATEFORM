import { useBorderTagsColorStatus, useColorStatus, useFanImgTagsColorStatus } from "../../../../utils";
import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, TransparentBoxWithGate, BlueContainerWithDynamicBorder, PipeWithCircles } from "../../../index";
export const ReclaimerJafrabad = () => {
  return (
    <div className="ReclaimerJafrabad w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "C4_RUNHR",
              useClass: "greenTxt",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
          <div className="fiveside-shape shape-1 mt-2"></div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "RECMR_AMPS",
              useClass: "greenTxt ",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="fiveside-shape  mt-2"></div>
          <BlackContainer
            data={{
              label: "C6_CURRENT",
              useClass: "greenTxt  mt-3",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BUCKET WHEEL",
            }}
          />
          <BlackContainer
            data={{
              label: "REC_BW_AMPS",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "C4 RBC",
            }}
          />
          <BlackContainer
            data={{
              label: "REC_C4_AMPS",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CROSS TRAVEL",
            }}
          />
          <BlackContainer
            data={{
              label: "REC_CT_VFD_SP",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "REC_CT_VFD_SPD",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "REC_CT_VFD_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RECLAIMER",
            }}
          />
          <BlackContainer
            data={{
              label: "RECL_DISTANCE",
              useClass: "greenTxt mt-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "MICRO_TIME",
              useClass: "greenTxt mt-2",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "MICRO_TIME_SP",
              useClass: "greenTxt mt-2",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "STACKER",
            }}
          />
          <BlackContainer
            data={{
              label: "D11_RATIO1",
              useClass: "greenTxt mt-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "REC_DISTANCE",
              useClass: "greenTxt mt-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-3"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
          firstCircleLabel: "",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "M",
          secondCircleLabel: "",
        }}
      />
      <div className=" position-absolute single-text-4 ">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "B_IT110",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "",
              firstCircleLabel: "",
            }}
            text={{ useClass: "text-dark", label: "B15 RBC" }}
            secondCircle={{
              secondCircleClass: `dot grey-color`,
              secondCircleText: "M",
              secondCircleLabel: "",
            }}
          />
        </div>
        <div className="text-center text-1">
          <BlackContainer
            data={{
              label: "BC1_RBC_CURRENT",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <PipeWithCircles
            parentDivClass="hpipecircle mt-2"
            firstCircle={{
              firstCircleClass: `dot grey-color`,
              firstCircleText: "",
              firstCircleLabel: "",
            }}
            text={{ useClass: "text-dark", label: "" }}
            secondCircle={{
              secondCircleClass: `dot grey-color`,
              secondCircleText: "M",
              secondCircleLabel: "",
            }}
          />
        </div>
      
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle mt-2 position-absolute single-text-6"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
          firstCircleLabel: "",
        }}
        text={{ useClass: "text-dark", label: "C19" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("C19 mtr")}`,
          secondCircleText: "M",
          secondCircleLabel: "C19 mtr",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle mt-2 position-absolute single-text-7"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
          firstCircleLabel: "",
        }}
        text={{ useClass: "text-dark", label: "C22.1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("C22_1")}`,
          secondCircleText: "M",
          secondCircleLabel: "C22_1",
        }}
      />
      <div className=" position-absolute single-text-8">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "RECL LS RUN  HR",
            }}
          />
          <BlackContainer
            data={{
              label: "RECL_LS_RH",
              useClass: "greenTxt ml-auto",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "RECL ADD RUN  HR",
            }}
          />
          <BlackContainer
            data={{
              label: "RECL_ADD_RH",
              useClass: "greenTxt ml-auto",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-2 mt-1">
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "D15 RH",
              }}
            />
            <BlackContainer
              data={{
                label: "D15SEL_RH",
                useClass: "greenTxt ml-auto",
                unit: "h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "D19A RH",
              }}
            />
            <BlackContainer
              data={{
                label: "D19ASEL_RH",
                useClass: "greenTxt ml-auto",
                unit: "h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "D19 RH",
              }}
            />
            <BlackContainer
              data={{
                label: "D19SEL_RH",
                useClass: "greenTxt ml-auto",
                unit: "h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "D7 RH",
              }}
            />
            <BlackContainer
              data={{
                label: "D7SEL_RH",
                useClass: "greenTxt ml-auto",
                unit: "h",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "ADD.TOTAL RH",
              }}
            />
            <BlackContainer
              data={{
                label: "ADDIT_TOT_RH",
                useClass: "greenTxt ml-auto",
                unit: "h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-9">
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CR TPH",
            }}
          />
          <BlackContainer
            data={{
              label: "B_FT230",
              useClass: "greenTxt  mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BOOM HEIGHT",
            }}
          />
          <BlackContainer
            data={{
              label: "CYL_POS_EU",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="text-center">
          <div className="containerImage mt-1 pt-2">
            <BlackContainer
              data={{
                label: "D19A_LVL_TX",
                useClass: "greenTxt mt-2",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "LATERITE",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "D19A",
            }}
          />
        </div>
        <div className="text-center">
          <div className="containerImage mt-1 pt-2">
            <BlackContainer
              data={{
                label: "D19_LVL_TX",
                useClass: "greenTxt mt-2",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "BLACK TRAP",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "D19",
            }}
          />
        </div>
        <div className="text-center">
          <div className="containerImage mt-1 pt-2">
            <BlackContainer
              data={{
                label: "D7_LVL_TX",
                useClass: "greenTxt mt-2",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "SWEETNER",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "D7",
            }}
          />
        </div>
        <div className="text-center">
          <div className="containerImage mt-1 pt-2">
            <BlackContainer
              data={{
                label: "D15_LVL_TX",
                useClass: "greenTxt mt-2",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "BAUXITE",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "D15",
            }}
          />
        </div>
        <div className="text-center">
          <div className="containerImage mt-1 pt-2">
            <BlackContainer
              data={{
                label: "D3_LVL_TX",
                useClass: "greenTxt mt-2",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "LIME STONE",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "D3",
            }}
          />
        </div>
        <div className="text-center">
          <div className="containerImage mt-1 pt-2">
            <BlackContainer
              data={{
                label: "D11_LVL_TX",
                useClass: "greenTxt mt-2",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "LIME STONE",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "D11",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11">
        <BlackContainer
          data={{
            label: "D_PT1138",
            useClass: "greenTxt mt-2",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "C31BF",
          }}
        />
        <div className="squareplustri text-center pt-3"></div>
        <div className="d-flex mt-1 ml-1 text-center">
          <MotorCircleDigitalTag className={`circle-img mt-2 c-grey-img-2`} label="" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-2",
              label: "C32",
            }}
          />
          <div className="yellowline-Vr  downArrow position-absolute line-1"></div>
          <div className="yellowline-Hr  position-absolute line-2"></div>
          <div className="yellowline-Vr upArrow position-absolute line-3"></div>
        </div>
      </div>
      <div className="position-absolute single-text-12 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "C31",
          }}
        />
        <div>
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("C31 mtr")}`} label="C31 mtr" />
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <BlackContainer
          data={{
            label: "C31_CURRENT",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "c22_2_DISTAN",
            useClass: "greenTxt mt-2 ml-3",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "C22_1_CURRENT",
            useClass: "greenTxt mt-2 ml-5",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "C19_CURRENT",
          useClass: "greenTxt position-absolute single-text-14",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className=" position-absolute single-text-15">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
            firstCircleLabel: "",
          }}
          text={{ useClass: "text-dark", label: " " }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "M",
            secondCircleLabel: "",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "C22.2",
          }}
        />
        <BlackContainer
          data={{
            label: "C22_2_CURRENT",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-11"></div>
    </div>
  );
};

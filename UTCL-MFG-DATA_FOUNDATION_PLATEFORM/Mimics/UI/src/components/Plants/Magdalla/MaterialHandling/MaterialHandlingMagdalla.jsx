import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  PipeWithCircles,
  BlueContainerWithDynamicBorder,
} from "../../../index";
import { useBorderTagsColorStatus, useColorStatus } from "../../../../utils";

export const MaterialHandlingMagdalla = () => {
  return (
    <div className="MaterialHandlingMagdalla w-100 h-100 position-relative">
      <div className="pipe dotted-pipe position-absolute single-text-1"></div>
      <div className="pipe dotted-pipe position-absolute single-text-2"></div>
      <div className="position-absolute single-text-3 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "512 BE1 AUX",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "512 BE1",
            }}
          />
        </div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("512BE1/M01_BE")}`}
          label="512BE1/M01_BE"
          text="M"
        />
        <BlackContainer
          data={{
            label: "512BE1/JT",
            useClass: "greenTxt ",
            unit: "Kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "232 BE1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot mt-1 digital-tag ${useColorStatus("232BE1/BE1")}`}
            label="232BE1/BE1"
            text="M"
          />
        </div>
        <BlackContainer
          data={{
            label: "232BE1/JT",
            useClass: "greenTxt mt-2",
            unit: "Kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-5">
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "CURRENT",
            }}
          />
          <BlackContainer
            data={{
              label: "532WF1/CLNKR_TOTLZR",
              useClass: "greenTxt mt-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "532WF3/FEEDRATE",
              useClass: "greenTxt mt-1",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "532WF3/GYPSUM_TOTLZR",
              useClass: "greenTxt mt-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "292SFF/SFF_TOTLZR",
              useClass: "greenTxt mt-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "OPC_CUR",
              useClass: "greenTxt mt-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PPC_CUR",
              useClass: "greenTxt mt-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex gap-1 mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PREV DAY",
            }}
          />
          <BlackContainer
            data={{
              label: "CLINKER_TOT_PREV",
              useClass: "greenTxt mt-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "GYPSUM2_TOT_PREV",
              useClass: "greenTxt mt-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "GYPSUM3_TOT_PREV",
              useClass: "greenTxt mt-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Flyash_292SFF_TOT_PREV",
              useClass: "greenTxt mt-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PPC_PREV_DAY",
              useClass: "greenTxt mt-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "OPC_PREV_DAY",
              useClass: "greenTxt mt-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6">
        <PipeWithCircles
          parentDivClass="hpipecircle "
          firstCircle={{
            firstCircleClass: `dot grey-color`,
          }}
          text={{ useClass: "text-dark", label: "512BC1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus(
              "512BC1/M01"
            )}`,
            secondCircleLabel: "512BC1/M01",
            secondCircleText: "M",
          }}
        />
        <BlackContainer
          data={{
            label: "512BC1/JT",
            useClass: "greenTxt mt-4",
            unit: "Kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-7">
        <BlackContainer
          data={{
            label: "532WF1/FEEDRATE",
            useClass: "greenTxt mx-auto",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2"
          firstCircle={{
            firstCircleClass: `dot grey-color`,
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "532WF1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("532WF1/WF")}`,
            secondCircleLabel: "532WF1/WF",
            secondCircleText: "M",
          }}
        />
        <BlackContainer
          data={{
            label: "532WF1/JT",
            useClass: "greenTxt mt-3",
            unit: "Kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-8">
        <BlackContainer
          data={{
            label: "532WF2/FEEDRATE",
            useClass: "greenTxt mx-auto",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2"
          firstCircle={{
            firstCircleClass: `dot digital-tag  ${useColorStatus(
              "532WF2/WF"
            )}`,
            firstCircleLabel: "532WF2/WF",
            firstCircleText: "M",
          }}
          text={{ useClass: "text-dark", label: "532WF2" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
          }}
        />
        <BlackContainer
          data={{
            label: "532WF2/JT",
            useClass: "greenTxt mt-3 ml-auto",
            unit: "Kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle mt-2 position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "532BC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("532BC1/M1")}`,
          secondCircleLabel: "532BC1/M1",
          secondCircleText: "➟",
        }}
      />
      <div className="position-absolute single-text-10">
        <BlackContainer
          data={{
            label: "532WF3/FEEDRATE",
            useClass: "greenTxt mx-auto",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2"
          firstCircle={{
            firstCircleClass: `dot digital-tag  ${useColorStatus("532WF3/WF")}`,
            firstCircleLabel: "532WF3/WF",
            firstCircleText: "M",
          }}
          text={{ useClass: "text-dark", label: "532WF3" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
          }}
        />
        <BlackContainer
          data={{
            label: "532WF3/JT",
            useClass: "greenTxt mt-3 ml-3",
            unit: "Kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "532-FY1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CLINKER",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <BlackContainer
          data={{
            label: "532HOPPER/532FY1",
            useClass: "greenTxt mt-3 ml-2",
            unit: "TON",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-12 d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "532-FY1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CLINKER",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <BlackContainer
          data={{
            label: "532HOPPER/532FY2",
            useClass: "greenTxt mt-3 ml-2",
            unit: "TON",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "532-FY1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "CLINKER",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <BlackContainer
          data={{
            label: "532HOPPER/532FY3",
            useClass: "greenTxt mt-3 ml-2",
            unit: "TON",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-14 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "512BF1",
            }}
          />
          <div className="containerImage">
            <MotorCircleDigitalTag
              className={`dot mt-1 p-3 digital-tag ${useColorStatus(
                "512BF1/BF_Timer"
              )}`}
              label="512BF1/BF_Timer"
              text="M"
            />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <div className="yellowline-Hr  position-absolute line-2"></div>
          <div className="yellowline-Vr upArrow position-absolute line-3"></div>

          <div className="mt-2 d-flex  position-absolute single-text-15">
            <MotorCircleDigitalTag
              className={`dot mt-1 p-3  digital-tag ${useColorStatus(
                "512BF1/RA"
              )}`}
              label="512BF1/RA"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3 ml-2",
                label: "512RA1",
              }}
            />
          </div>
        </div>
        <div className="mt-4 ml-2">
          <div className="img-66 pr-2">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus(
                  "512BF1/HP_Fan"
                )}`}
                label="512BF1/HP_Fan"
                text="M"
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "512FN1",
            }}
          />
        </div>
      </div>

      <div className="text-center position-absolute single-text-16 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "232BF1",
            }}
          />
          <div className="containerImage">
            <MotorCircleDigitalTag
              className={`dot mt-1 p-3 digital-tag ${useColorStatus(
                "232BF1/BF_Timer"
              )}`}
              label="232BF1/BF_Timer"
              text="M"
            />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <div className="yellowline-Hr  position-absolute line-2"></div>
          <div className="yellowline-Vr upArrow position-absolute line-3"></div>

          <div className="mt-2 d-flex  position-absolute single-text-15">
            <MotorCircleDigitalTag
              className={`dot mt-1 p-3  digital-tag ${useColorStatus(
                "232BF1/RA"
              )}`}
              label="232BF1/RA"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3 ml-2",
                label: "232RA1",
              }}
            />
          </div>
        </div>
        <div className="mt-4 ml-2">
          <div className="img-66 pr-2">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus(
                  "232BF1/HP_Fan"
                )}`}
                label="232BF1/HP_Fan"
                text="M"
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "232FN1",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-17 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "232BF2",
            }}
          />
          <div className="containerImage">
            <MotorCircleDigitalTag
              className={`dot mt-1 p-3 digital-tag ${useColorStatus(
                "232BF2/BF_Timer"
              )}`}
              label="232BF2/BF_Timer"
              text="M"
            />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <div className="yellowline-Hr  position-absolute line-2"></div>
          <div className="yellowline-Vr upArrow position-absolute line-3"></div>

          <div className="mt-2 d-flex  position-absolute single-text-15">
            <MotorCircleDigitalTag
              className={`dot mt-1 p-3  digital-tag ${useColorStatus(
                "232BF2/RA"
              )}`}
              label="232BF2/RA"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3 ml-2",
                label: "232RA2",
              }}
            />
          </div>
        </div>
        <div className="mt-4 ml-2">
          <div className="img-66 pr-2">
            <div className="connector-icon">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus(
                  "232BF2/HP_Fan"
                )}`}
                label="232BF2/HP_Fan"
                text="M"
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "232FN2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "512-SE1",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={`${useBorderTagsColorStatus("512SE1/DIV1")}`}
            isClickable={true}
            tagLabel="512SE1/DIV1"
          />
        </div>
        <BlackContainer
          data={{
            label: "512SE1/Position",
            useClass: "greenTxt mt-3 ml-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle mt-2 position-absolute single-text-19"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        text={{ useClass: "text-dark", label: "232BC1" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,

          secondCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-20">
        <div className="gray-img"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3 mt-2",
            label: "232DG1",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "CLINKER EXTRACTION",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1",
            label: "EXISTING FROM SILO 2",
          }}
        />
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <div className="containerImage text-center">
          <div className="yellowline-Vr  position-absolute line-1"></div>
          <div className="yellowline-Hr  position-absolute line-2"></div>
          <div className="yellowline-Vr downArrow  position-absolute line-3"></div>
        </div>
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "CLINKER TOTAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "GYPSUM WF2 TOTAL",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "GYPSUM WF3 TOTAL",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "292SFF/SFF_TOTLZR",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "OPC TOTAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PPC TOTAL",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-24",
          label: "MILL FEED CHUTE ",
        }}
      />
      <div className="roller-jcb position-absolute single-text-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-2"></div>
      <div className="yellowline-Vr  position-absolute line-3"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-4"></div>
      <div className="yellowline-Vr  position-absolute line-5"></div>
      <div className="yellowline-Hr  position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-9"></div>
      <div className="yellowline-Hr  position-absolute line-10"></div>
      <div className="yellowline-Vr  position-absolute line-11"></div>
      <div className="yellowline-Hr leftarrow  position-absolute line-12"></div>
      <div className="yellowline-Hr leftarrow  position-absolute line-13"></div>
      <div className="yellowline-Vr position-absolute line-14"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-15"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-16"></div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Vr position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr  position-absolute line-23"></div>
      <div className="yellowline-Vr  position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Hr  position-absolute line-27"></div>
      <div className="yellowline-Hr  position-absolute line-28"></div>
      <div className="yellowline-Vr  position-absolute line-29"></div>
      <div className="yellowline-Vr downArrow position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-32"></div>
    </div>
  );
};

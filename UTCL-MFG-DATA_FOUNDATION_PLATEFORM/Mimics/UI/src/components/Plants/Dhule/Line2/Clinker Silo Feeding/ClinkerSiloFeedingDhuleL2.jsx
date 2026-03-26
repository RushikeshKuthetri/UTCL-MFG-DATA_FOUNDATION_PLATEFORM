import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";
import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgsTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const ClinkerSiloFeedingDhuleL2 = () => {
  return (
    <div className="CSFeedingDhuleL2 w-100 h-100 position-relative">
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
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="d-flex position-absolute line-16">
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
      </div>
      <div className="d-flex position-absolute line-17">
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
      </div>
      <div className="d-flex position-absolute line-18">
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
        <div className="yellowline-Vr downArrow position-relative"></div>
      </div>
      <div className="yellowline-Hr position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Vr upArrow position-absolute line-23"></div>
      <div className="yellowline-Vr upArrow position-absolute line-24"></div>
      <div className="yellowline-Vr upArrow position-absolute line-25"></div>
      <div className="position-absolute single-text-1">
        <div className="trapezoid"></div>
        <div className="pipeVr text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "CLINKER SILO",
            }}
          />
        </div>
      </div>
      <PipeWithCircles parentDivClass="pipe dotted-pipe position-absolute single-text-2" />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-3"
        text={{ useClass: "text-dark mx-auto", label: "492BC4" }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-4"
        text={{ useClass: "text-dark mx-auto", label: "492BC1" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-5"
        text={{ useClass: "text-dark mx-auto", label: "512BC3" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "MH2_512BC3_PH", runLabel: "MH2_512BC3_RUN" }
          )}`,
          secondCircleLabel: "MH2_512BC3_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-6"
        text={{ useClass: "text-dark mx-auto", label: "512BC2" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "MH2_512BC2_PH", runLabel: "MH2_512BC2_RUN" }
          )}`,
          secondCircleLabel: "MH2_512BC2_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        text={{ useClass: "text-dark mx-auto", label: "512BC1" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "MH2_512BC1_PH", runLabel: "MH2_512BC1_RUN" }
          )}`,
          secondCircleLabel: "MH2_512BC1_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        text={{ useClass: "text-dark mx-auto", label: "512BC4" }}
        secondCircle={{
          secondCircleClass: `dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "MH2_512BC4_PH", runLabel: "MH2_512BC4_RUN" }
          )}`,
          secondCircleLabel: "MH2_512BC4_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        text={{ useClass: "text-dark mx-auto", label: "512BC5" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "MH2_512BC5_PH", runLabel: "MH2_512BC5_RUN" }
          )}`,
          secondCircleLabel: "MH2_512BC5_RUN",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        text={{ useClass: "text-dark mx-auto", label: "511BC3" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "MH2_512BC5_PH", runLabel: "MH2_512BC5_RUN" }
          )}`,
          secondCircleLabel: "MH2_512BC5_RUN",
        }}
      />
      <div className="position-absolute single-text-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "512BF2",
          }}
        />
        <div className="squareplustri"></div>
      </div>
      <div className="position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "512BF3",
          }}
        />
        <div className="squareplustri"></div>
      </div>
      <div className="position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "512BF4",
          }}
        />
        <div className="squareplustri p-2">
          <MotorCircleDigitalTag
            className={`square mx-auto  digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              { healthyLabel: "MH2_512BF4_PH", runLabel: "MH2_512BF4_RUN" }
            )}`}
            label="MH2_512BF4_RUN"
          />
        </div>
      </div>
      <div className="position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "512BF6",
          }}
        />
        <div className="squareplustri"></div>
      </div>
      <div className="position-absolute text-center single-text-15">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("MH2_492SI1_LS1")}`}
          label="MH2_492SI1_LS1"
          text="L"
        />
        <BlackContainer
          data={{
            label: "MH2_492SI1_LT1",
            useClass: "greenTxt mb-1",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-16">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("MH2_492SI1_LS2")}`}
          label="MH2_492SI1_LS2"
          text="L"
        />
        <BlackContainer
          data={{
            label: "MH2_492SI1_LT2",
            useClass: "greenTxt mb-1",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-17">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("MH2_492SI1_LS3")}`}
          label="MH2_492SI1_LS3"
          text="L"
        />
        <BlackContainer
          data={{
            label: "MH2_492SI1_LT3",
            useClass: "greenTxt mb-1",
            unit: "m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "MH2_512BF1_DPT",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "MH2_512BF1_PT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "MH2_512BF2_DPT",
          useClass: "greenTxt position-absolute single-text-19",
          unit: "mmWG",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "MH2_512BF4_DPT",
          useClass: "greenTxt position-absolute single-text-20",
          unit: "mmWG",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-21">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "492SG1",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            { openLabel: "MH2_492SG1_Open", closeLabel: "MH2_492SG1_Close" }
          )}`}
          label="MH2_492SG1_Close"
        />
      </div>
      <div className="d-flex position-absolute single-text-22">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "492CG1",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            { openLabel: "MH2_512CG1_Open", closeLabel: "MH2_512CG1_Close" }
          )}`}
          label="MH2_512CG1_Close"
        />
      </div>
      <div className="d-flex position-absolute single-text-23">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "MH2_512BC3_HTR_PH",
                runLabel: "MH2_512BC3_HTR_RUN",
              }
            )}`}
            label="MH2_512BC3_HTR_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC3_NDE_MG"
            )}`}
            label="MH2_512BC3_NDE_MG"
            text="X"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC3_DE_MG"
            )}`}
            label="MH2_512BC3_DE_MG"
            text="X"
          />
        </div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("MH2_512BC3_VGTU")}`}
          label="MH2_512BC3_VGTU"
          text="V"
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("MH2_512BC3BSSL1")}`}
            label="MH2_512BC3BSSL1"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC3BSSR1"
            )}`}
            label="MH2_512BC3BSSR1"
            text="S"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("MH2_512BC3PCSL1")}`}
            label="MH2_512BC3PCSL1"
            text="P"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC3PCSR1"
            )}`}
            label="MH2_512BC3PCSR1"
            text="P"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-24">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "MH2_512BC4_HTR_PH",
                runLabel: "MH2_512BC4_HTR_RUN",
              }
            )}`}
            label="MH2_512BC4_HTR_RUN"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC4_NDE_MG"
            )}`}
            label="MH2_512BC4_NDE_MG"
            text="X"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC4_DE_MG"
            )}`}
            label="MH2_512BC4_DE_MG"
            text="X"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("MH2_512BC4_DE_MG")}`}
            label="MH2_512BC4_DE_MG"
            text="Z"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC4_R_DR_ZS2"
            )}`}
            label="MH2_512BC4_R_DR_ZS2"
            text="Z"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-25">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus(
              "MH2_512BC4_L_DR_ZS1"
            )}`}
            label="MH2_512BC4_L_DR_ZS1"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC4BSSR1"
            )}`}
            label="MH2_512BC4BSSR1"
            text="S"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("MH2_512BC4PCSL1")}`}
            label="MH2_512BC4PCSL1"
            text="P"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC4PCSR1"
            )}`}
            label="MH2_512BC4PCSR1"
            text="P"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-26">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("MH2_512BC5BSSL1")}`}
            label="MH2_512BC5BSSL1"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC5BSSR1"
            )}`}
            label="MH2_512BC5BSSR1"
            text="S"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC5PCSL1"
            )}`}
            label="MH2_512BC5PCSL1"
            text="P"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC5PCSR1"
            )}`}
            label="MH2_512BC5PCSR1"
            text="P"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC5_VGTU"
            )}`}
            label="MH2_512BC5_VGTU"
            text="V"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("MH2_512BC5_DE_MG")}`}
            label="MH2_512BC5_DE_MG"
            text="X"
          />
          <MotorCircleDigitalTag
            className={`dot ml-1 digital-tag ${useColorStatus(
              "MH2_512BC5_NDE_MG"
            )}`}
            label="MH2_512BC5_NDE_MG"
            text="X"
          />
          <MotorCircleDigitalTag
            className={`square ml-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "MH2_512BC5_HTR_PH",
                runLabel: "MH2_512BC5_HTR_RUN",
              }
            )}`}
            label="MH2_512BC5_HTR_RUN"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-27">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "512DG1",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            { openLabel: "MH2_512DG1_OLS", closeLabel: "MH2_512DG1_CLS" }
          )}`}
          label="MH2_512DG1_OLS"
        />
      </div>
      <div className="d-flex position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "512SG1",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            { openLabel: "MH2_512SG1_OLS", closeLabel: "MH2_512SG1_CLS" }
          )}`}
          label="MH2_512SG1_OLS"
        />
      </div>
      <div className="position-absolute single-text-29">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "MH2_512FN1_PH", runLabel: "MH2_512FN1_RUN" }
          )}`}
          label="MH2_512FN1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FN2",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "MH2_512FN2_PH", runLabel: "MH2_512FN2_RUN" }
          )}`}
          label="MH2_512FN2_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FN3",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
            { healthyLabel: "MH2_512FN4_PH", runLabel: "MH2_512FN4_RUN" }
          )}`}
          label="MH2_512FN4_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "FN4",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "RA2",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag  ${useFanImgsTagsColorStatusForNewPlantScreens(
            "MH2_512RA1"
          )}`}
          label="MH2_512RA1_RUN"
        />
      </div>
      <div className="d-flex position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "RA6",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgsTagsColorStatusForNewPlantScreens(
            "MH2_512RA6"
          )}`}
          label="MH2_512RA6_RUN"
        />
      </div>
      <div className="d-flex position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "RA4",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag  ${useFanImgsTagsColorStatusForNewPlantScreens(
            "MH2_512RA4"
          )}`}
          label="MH2_512RA4_RUN"
        />
      </div>
      <div className="d-flex flex-column text-center position-absolute single-text-35">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "512BE1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "MH2_512BE1M01_PH",
                runLabel: "MH2_512BE1M01_RUN",
              }
            )}`}
            label="MH2_512BE1M01_RUN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot p-3 mt-1 digital-tag ${useMotorTagsColorStatusForNewPlantScreens(
              {
                healthyLabel: "MH2_512BE1M02_PH",
                runLabel: "MH2_512BE1M02_RUN",
              }
            )}`}
            label="MH2_512BE1M02_RUN"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot mt-1 digital-tag ${useColorStatus(
              "MH2_512BE1_TS1"
            )}`}
            label="MH2_512BE1_TS1"
            text="T"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("MH2_512BE1_ZSS1")}`}
            label="MH2_512BE1_ZSS1"
            text="Z"
          />
          <MotorCircleDigitalTag
            className={`dot mt-1 digital-tag ${useColorStatus(
              "MH2_512BE1_ZSS2"
            )}`}
            label="MH2_512BE1_ZSS2"
            text="Z"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("MH2_512BE1_LS1")}`}
            label="MH2_512BE1_LS1"
            text="L"
          />
          <MotorCircleDigitalTag
            className={`dot mt-1 digital-tag ${useColorStatus(
              "MH2_512BE1_LS2"
            )}`}
            label="MH2_512BE1_LS2"
            text="L"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("MH2_512BE1_BMS1")}`}
            label="MH2_512BE1_BMS1"
            text="X"
          />
          <MotorCircleDigitalTag
            className={`dot mt-1 digital-tag ${useColorStatus(
              "MH2_512BE1_BMS2"
            )}`}
            label="MH2_512BE1_BMS2"
            text="X"
          />
        </div>
      </div>
      <MotorCircleDigitalTag
        className={`dot digital-tag ${useColorStatus(
          "MH2_512BC2PCSR1"
        )} position-absolute single-text-36`}
        label="MH2_512BC2PCSR1"
        text="P"
      />
      <MotorCircleDigitalTag
        className={`dot digital-tag ${useColorStatus(
          "MH2_512BC1PCSR1"
        )} position-absolute single-text-37`}
        label="MH2_512BC1PCSR1"
        text="P"
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-38",
          label: "512BC4",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-39",
          label: "512BC4",
        }}
      />
      <div className="text-center position-absolute single-text-40">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "To 511BE1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Exisiting Belt Conveyor",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-41",
          label: "512BC5",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-42",
          label: "532HP1",
        }}
      />
      <MotorCircleDigitalTag
        className={`dot digital-tag ${useColorStatus(
          "MH2_512BE1_MT1_ZS1"
        )} position-absolute single-text-43`}
        label="MH2_512BE1_MT1_ZS1"
        text="L"
      />

      <div className="d-flex position-absolute single-text-44">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "F",
          }}
        />
        <MotorCircleDigitalTag
          className={`square digital-tag ${useDampersValveTagsColorStatusForNewPlantScreens(
            { openLabel: "MH2_512CGF_Open", closeLabel: "MH2_512CGF_Close" }
          )}`}
          label="MH2_512CGF_Close"
        />
      </div>
    </div>
  );
};

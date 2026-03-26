import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  TransparentBoxWithGate,
  PipeWithCircles,
} from "../../../../index";
export const CementMillBMU3L3Vasavdatta = () => {
  return (
    <div className="cement-mill-bm-vasavdatta w-100 h-100 position-relative">
      <div className="single-text-1 position-absolute d-flex">
        <div className="containerImage text-center pt-2">GYP SUM</div>
        <div className="containerImage text-center pt-2">POZZOLANA</div>
      </div>
      <div className="single-text-2 position-absolute d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("3N05WF")}`,
            secondCircleText: "M",
            secondCircleLabel: "3N05WF",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{ firstCircleClass: "dot grey-color" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("3N06WF")}`,
            secondCircleText: "M",
            secondCircleLabel: "3N06WF",
          }}
        />
      </div>
      <div className="single-text-3 position-absolute d-flex">
        <div>
          <BlackContainer
            data={{
              label: "3N05WF_FI",
              useClass: "greenTxt mb-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3N05WF_SI",
              useClass: "greenTxt mb-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "3N06WF_FI",
              useClass: "greenTxt mb-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3N06WF_SI",
              useClass: "greenTxt mb-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-4 position-absolute d-flex">
        <div className="containerImage"></div>
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "3N47DC-DPI-11",
              useClass: "greenTxt mb-2 mt-2",
              unit: "MMV",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("3N47BH_TMR")}`}
            label="3N47BH_TMR"
          />{" "}
        </div>
        <div className="containerImage"></div>
      </div>
      <div className="single-text-5 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "3N47RA-1"
          )}`}
          label="3N47RA-1"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "3N47RA-2"
          )}`}
          label="3N47RA-2"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "3N47RA-3"
          )}`}
          label="3N47RA-3"
        />
      </div>
      <div className="single-text-6 position-absolute">
        <BlackContainer
          data={{
            label: "3N48FN_SI",
            useClass: "greenTxt mb-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N48FN_PI",
            useClass: "greenTxt mb-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N75ARC_PI",
            useClass: "greenTxt mb-2",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3n32BM-TI-21",
            useClass: "greenTxt mb-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle single-text-7 position-absolute"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("3N122BC")}`,
          secondCircleText: "M",
          secondCircleLabel: "3N122BC",
        }}
      />
      <div className="single-text-8 position-absolute">
        <BlackContainer
          data={{
            label: "3N49PC_SP/4_ANA_OP",
            useClass: "greenTxt mb-2",
            unit: "SP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N49PC_SI",
            useClass: "greenTxt mb-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N49PC_JI",
            useClass: "greenTxt mb-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "",
            useClass: "greenTxt mb-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N49PC_JI",
            useClass: "greenTxt mb-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N49DIS_TI",
            useClass: "greenTxt mb-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle single-text-9 position-absolute"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("3N49PC")}`,
          secondCircleText: "M",
          secondCircleLabel: "3N49PC",
        }}
      />
      <div className="single-text-10  position-absolute d-flex">
        <div className="text-center">
          <div className=" squareplustri"></div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "3N44_2RA"
            )}`}
            label="3N44_2RA"
          />
        </div>
        <div className="text-center">
          <div className=" squareplustri"></div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "3N44_3RA"
            )}`}
            label="3N44_3RA"
          />
        </div>
        <div className="text-center">
          <div className=" squareplustri"></div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "3N44_4RA"
            )}`}
            label="3N44_4RA"
          />
        </div>
      </div>
      <div className="single-text-11 position-absolute containerImage text-center">
        <BlackContainer
          data={{
            label: "3N37SR_SI/4_ANA_OP",
            useClass: "greenTxt mt-1 mb-1",
            unit: "SP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N37SR_SI",
            useClass: "greenTxt mb-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N37SR_GB_TI_BOT",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N37SR_JI",
            useClass: "greenTxt mb-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N37CY_TI_20",
            useClass: "greenTxt mb-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N38CENTERCYN_PI",
            useClass: "greenTxt",
            unit: "MMV",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-12  position-absolute d-flex">
        <div className="text-center">
          <div className=" squareplustri"></div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "3N44_1RA"
            )}`}
            label="3N44_1RA"
          />
        </div>
      </div>
      <div className="single-text-13 position-absolute">
        <BlackContainer
          data={{
            label: "3N38CY1_PI_ADD",
            useClass: "greenTxt mb-2",
            unit: "MMV",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N38CY1_PI_1",
            useClass: "greenTxt mb-2",
            unit: "mmV",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-14 position-absolute">
        <BlackContainer
          data={{
            label: "3N45SC1VFD_SP/4_ANA_OP",
            useClass: "greenTxt mb-2",
            unit: "SP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N45SC1VFD_SI",
            useClass: "greenTxt mb-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-15 position-absolute">
        <BlackContainer
          data={{
            label: "3N39FNSPRS_SI/4_ANA_OP1",
            useClass: "greenTxt mb-1",
            unit: "SP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N39FNGRR_SI",
            useClass: "greenTxt mb-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N39FN_JI_01",
            useClass: "greenTxt mb-1",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "3N39FN",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "3N45SCVFD_SI",
          useClass: "greenTxt single-text-16 position-absolute",
          unit: "RPM",
          unitColor: "unitColor",
        }}
      />
      <div className="single-text-17 position-absolute d-flex">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("3N39FN")}`}
            label="3N39FN"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-18 position-absolute drumContainer d-flex align-items-center justify-content-center">
        <div>
          <BlackContainer
            data={{
              label: "3N32BM_JI",
              useClass: "greenTxt mb-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3N32BM_VI",
              useClass: "greenTxt",
              unit: "MM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "3N32BM_MTR_NDE_VI",
              useClass: "greenTxt mb-2",
              unit: "MM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "3N32BM_MTR_DE_VI",
              useClass: "greenTxt",
              unit: "MM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="single-text-19  position-absolute d-flex align-items-center">
        <MotorCircleDigitalTag
          className={`square mr-2 digital-tag ${useColorStatus("3N43SFM")}`}
          label="3N43SFM"
        />
        <TransparentBoxWithGate
          isClickable={false}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "",
            squareClass: `${useColorStatus("NA")}`,
          }}
        />
      </div>
      <div className="single-text-20 position-absolute d-flex">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("3N36BL")}`}
          label="3N36BL"
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus(
            "3N36BL_STDBY"
          )}`}
          label="3N36BL_STDBY"
        />
      </div>
      <div className="single-text-21 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ml-2",
            label: "3N34BL",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("3N34BL")}`}
          label="3N34BL"
        />
      </div>
      <div className="single-text-22 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("3N42BL")}`}
          label="3N42BL"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "3N42BL",
          }}
        />
      </div>
      <div className="single-text-23 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "3N57BL1",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("3N57BL1")}`}
          label="3N57BL1"
        />
      </div>
      <div className="single-text-24 position-absolute text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("3N57BL2")}`}
          label="3N57BL2"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "3N57BL2",
          }}
        />
      </div>
      <div className="single-text-25 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "3N65BL",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag  ${useColorStatus("3N65BL")}`}
          label="3N65BL"
        />
      </div>
      <div className="single-text-26 position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "3N43FM",
          }}
        />
        <BlackContainer
          data={{
            label: "3N43SFM_FI",
            useClass: "greenTxt",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-27 position-absolute">
        <BlackContainer
          data={{
            label: "3N38CY-PI-4",
            useClass: "greenTxt mb-2",
            unit: "MMV",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N38CY2_PI_2",
            useClass: "greenTxt mb-2",
            unit: "mmV",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-28 position-absolute">
        <BlackContainer
          data={{
            label: "3N38CY-PI-5",
            useClass: "greenTxt mb-3",
            unit: "MMV",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N38CY2_PI_3",
            useClass: "greenTxt",
            unit: "mmV",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-29 position-absolute">
        <BlackContainer
          data={{
            label: "3N38CY-PI-6",
            useClass: "greenTxt mb-3",
            unit: "MMV",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N38CY2_PI_4",
            useClass: "greenTxt",
            unit: "mmV",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-30 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "3N44-2RA",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "3N44-3RA",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "3N44-4RA",
          }}
        />
      </div>
      <div className="single-text-31 position-absolute d-flex">
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("3N49_RPM")}`}
            label="3N49_RPM"
            text="M"
          />
        </div>
      </div>
      <div className="single-text-32 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "3N47-1RA",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "3N47-2RA",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "3N47-3RA",
          }}
        />
      </div>
      <div className="single-text-33 position-absolute d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "3N35BE",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("3N35BE")}`}
          label="3N35BE"
          text="M"
        />
      </div>
      <div className="single-text-34 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "3N42BL OR 3N16BL ",
          }}
        />
      </div>
      <div className="single-text-35 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "TO 3N08BCM01",
          }}
        />
      </div>
      <div className="single-text-36 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "3N47BH_PI",
            useClass: "greenTxt mb-3",
            unit: "KG/C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N47BH_OPI",
            useClass: "greenTxt mt-2",
            unit: "MMV",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-37 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "3N32BM-PI-9",
            useClass: "greenTxt  mb-3",
            unit: "MMV",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "3N32BM-TI-19",
            useClass: "greenTxt  mt-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-38 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "3N32BM-TI-22A",
            useClass: "greenTxt  mt-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-39 position-absolute d-flex">
        <BlackContainer
          data={{
            label: "3N35BE_JI",
            useClass: "greenTxt  mt-3",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-40 position-absolute d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "3N32BM",
          }}
        />
        <div className="img-41 d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("3N32BM")}`}
            label="3N32BM"
            text=""
          />
        </div>
      </div>
      <div className="single-text-41 position-absolute d-flex align-items-center">
        <div className="img-41 d-flex align-items-center justify-content-center">
          <MotorCircleDigitalTag
            className={`dot p-2 digital-tag ${useColorStatus("3N47SC")}`}
            label="3N47SC"
            text=""
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "3N47SC",
          }}
        />
      </div>
      <div className="single-text-42 position-absolute img-41  d-flex align-items-center justify-content-center ">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("3N45SC")}`}
          label="3N45SC"
          text=""
        />
      </div>
      <div className="single-text-43 position-absolute img-41  d-flex align-items-center justify-content-center">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("3N45SC1")}`}
          label="3N45SC1"
          text=""
        />
      </div>
      <div className="single-text-44 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "3N37SR",
          }}
        />
      </div>
      <div className="single-text-45 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "TO SILO",
          }}
        />
      </div>
      <div className="single-text-46  position-absolute text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "3N50",
          }}
        />
        <div className=" squareplustri"></div>
        <MotorCircleDigitalTag
          className={`circle-img ${useFanImgTagsColorStatus("NA")}`}
          label="NA"
        />
      </div>
      <div className="single-text-47 position-absolute d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "3N45SC",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "3N44-1RA",
          }}
        />
      </div>
      <div className="single-text-48 position-absolute box-1 bg-secondary"></div>
      <div className="single-text-49 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "3N122BC",
          }}
        />
      </div>
      <div className="single-text-50 position-absolute">
        <MotorCircleDigitalTag
          className={`dot p-2 digital-tag ${useColorStatus("3N37SR")}`}
          label="3N37SR"
          text="M"
        />
      </div>

      <div className="pipe-1 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-2 position-absolute pipeHr"></div>
      <div className="pipe-3 position-absolute pipeHr"></div>
      <div className="pipe-4 position-absolute pipeHr"></div>
      <div className="pipe-5 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-6 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-7 position-absolute pipe dotted-pipe"></div>
      <div className="pipe-8 position-absolute pipe dotted-pipe"></div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr position-absolute line-4"></div>
      <div className="yellowline-Hr position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr position-absolute line-8"></div>
      <div className="yellowline-Vr position-absolute line-9"></div>
      <div className="yellowline-Vr position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Hr position-absolute line-19"></div>
      <div className="yellowline-Vr position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr position-absolute line-23"></div>
      <div className="yellowline-Hr position-absolute rightarrow line-24"></div>
      <div className="yellowline-Vr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Vr position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute rightarrow line-28"></div>
      <div className="yellowline-Vr position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Hr position-absolute leftarrow rightarrow line-34"></div>
      <div className="yellowline-Hr position-absolute leftarrow rightarrow line-35"></div>
      <div className="yellowline-Hr position-absolute leftarrow line-36"></div>
      <div className="yellowline-Vr position-absolute line-37"></div>
      <div className="yellowline-Vr position-absolute line-38"></div>
      <div className="yellowline-Vr position-absolute line-39"></div>
      <div className="yellowline-Hr position-absolute line-40"></div>
      <div className="yellowline-Vr position-absolute line-41"></div>
      <div className="yellowline-Hr position-absolute line-42"></div>
      <div className="yellowline-Vr downArrow position-absolute line-43"></div>
      <div className="yellowline-Hr position-absolute line-44"></div>
      <div className="yellowline-Vr position-absolute line-45"></div>
      <div className="yellowline-Hr position-absolute rightarrow line-46"></div>
      <div className="yellowline-Vr position-absolute line-47"></div>
      <div className="yellowline-Vr upArrow position-absolute line-48"></div>
      <div className="yellowline-Vr upArrow position-absolute line-49"></div>
      <div className="yellowline-Hr position-absolute line-50"></div>
      <div className="yellowline-Hr position-absolute line-51"></div>
      <div className="yellowline-Vr upArrow position-absolute line-52"></div>
      <div className="yellowline-Hr position-absolute line-53"></div>
      <div className="yellowline-Vr upArrow position-absolute line-54"></div>
      <div className="yellowline-Hr position-absolute line-55"></div>
      <div className="yellowline-Vr upArrow position-absolute line-56"></div>
      <div className="yellowline-Hr position-absolute line-57"></div>
      <div className="yellowline-Vr upArrow position-absolute line-58"></div>
      <div className="yellowline-Vr upArrow position-absolute line-59"></div>
      <div className="yellowline-Vr downArrow position-absolute line-60"></div>
      <div className="yellowline-Vr position-absolute line-61"></div>
      <div className="yellowline-Hr position-absolute line-62"></div>
      <div className="yellowline-Vr position-absolute line-63"></div>
      <div className="yellowline-Hr position-absolute rightarrow line-64"></div>
      <div className="yellowline-Vr position-absolute line-65"></div>
      <div className="yellowline-Hr position-absolute line-66"></div>
      <div className="yellowline-Vr downArrow position-absolute line-67"></div>
    </div>
  );
};

import {
  useBorderTagsColorStatus,
  useCaretColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
  useImgColorStatus,
} from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  BlueContainerWithDynamicBorder,
  MimicCaret,
} from "../../../../index";

export const CoolerRawanL2 = () => {
  return (
    <div className="CoolerRawanL2 w-100 h-100 position-relative">
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-1"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: "dot grey-color ml-auto",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        secondCircle={{
          secondCircleClass: `dot ${useColorStatus(
            "492PC2/M01"
          )} digital-tag ml-auto`,
          secondCircleLabel: "492PC2/M01",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute pipe-4" />
      <div className="pipeHr position-absolute pipe-3"></div>
      <div className="pipeHr position-absolute pipe-5 d-flex flex-column justify-content-center">
        <div>
          <div className="d-flex justify-content-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "AQC2 INLET TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "472LD4/TE1",
                useClass: "greenTxt ml-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "MID TAP TEMP",
              }}
            />
            <BlackContainer
              data={{
                label: "472SD6/TE1",
                useClass: "greenTxt ml-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "WHRS POWER",
              }}
            />
            <BlackContainer
              data={{
                label: "WHRS/MW",
                useClass: "greenTxt ml-2",
                unit: "MW",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "BOILER DP",
              }}
            />
            <BlackContainer
              data={{
                label: "472SD6/DPTD",
                useClass: "greenTxt ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "ROLLER CRUSHER",
              }}
            />
          </div>
          <div className="g d-flex justify-content-center mt-1">
            <MotorCircleDigitalTag
              className={`fa fa-arrow-right digital-tag ${useCaretColorStatus(
                "472RC1/M01"
              )}`}
              label="472RC1/M01"
            />
            <MotorCircleDigitalTag
              className={`fa fa-arrow-left digital-tag ${useCaretColorStatus(
                "472RC2/M01"
              )}`}
              label="472RC2/M01"
            />
            <MotorCircleDigitalTag
              className={`fa fa-arrow-right digital-tag ${useCaretColorStatus(
                "472RC3/M01"
              )}`}
              label="472RC3/M01"
            />
            <MotorCircleDigitalTag
              className={`fa fa-arrow-left digital-tag ${useCaretColorStatus(
                "472RC4/M01"
              )}`}
              label="472RC4/M01"
            />
            <MotorCircleDigitalTag
              className={`fa fa-arrow-right digital-tag ${useCaretColorStatus(
                "472RC5/M01"
              )}`}
              label="472RC5/M01"
            />
            <MotorCircleDigitalTag
              className={`fa fa-arrow-left digital-tag ${useCaretColorStatus(
                "472RC6/M01"
              )}`}
              label="472RC6/M01"
            />
          </div>
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-6">
        <div className="text-center mt-1">
          <BlackContainer
            data={{
              label: "462K01/TTA",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "462K01/PTP",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="yellowline-Vr downArrow position-absolute pipe-7"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-8"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-9"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-10"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-11"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-12"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-13"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-14"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-15"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-21"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-25"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-26"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-27"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-28"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-29"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-30"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-31"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-32"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-33"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-34"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-35"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-36"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-37"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-38"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-39"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-40"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr position-absolute pipe-42"></div>
      <div className="yellowline-Hr position-absolute pipe-43"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-44"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-45"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-46"></div>
      <div className="yellowline-Vr position-absolute pipe-47"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-48"></div>
      <div className="yellowline-Hr position-absolute pipe-49"></div>
      <div className="yellowline-Hr position-absolute pipe-50"></div>
      <div className="yellowline-Vr position-absolute pipe-51"></div>
      <div className="yellowline-Vr position-absolute pipe-52"></div>
      <div className="pipeVr position-absolute pipe-53"></div>
      <div className="yellowline-Vr position-absolute pipe-54"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-55"></div>

      <div className="squareplustri position-absolute single-text-1"></div>
      <div className="squareplustri position-absolute single-text-2"></div>
      <div className="position-absolute single-text-3 d-flex">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472ER1/M01")}`}
            label="472ER1/M01"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472CR1/M01")} ml-2`}
            label="472CR1/M01"
            text="M"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472ER5/M01")}`}
            label="472ER5/M01"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472CR2/M01")} ml-2`}
            label="472CR2/M01"
            text="M"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472ER2/M01")}`}
            label="472ER2/M01"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472CR2/M01")} ml-2`}
            label="472CR2/M01"
            text="M"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472ER6/M01")}`}
            label="472ER6/M01"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472CR6/M01")} ml-2`}
            label="472CR6/M01"
            text="M"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472ER3/M01")}`}
            label="472ER3/M01"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472CR3/M01")} ml-2`}
            label="472CR3/M01"
            text="M"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472ER7/M01")}`}
            label="472ER7/M01"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472CR7/M01")} ml-2`}
            label="472CR7/M01"
            text="M"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472ER4/M01")}`}
            label="472ER4/M01"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472CR4/M01")} ml-2`}
            label="472CR4/M01"
            text="M"
          />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472ER8/M01")}`}
            label="472ER8/M01"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472CR8/M01")} ml-2`}
            label="472CR8/M01"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-4 p-1 border d-flex">
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FN1",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN1/IA",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN1/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN1/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN1/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FN2",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN2/IA",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN2/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN2/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN2/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FN3",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN3/IA",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN3/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN3/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN3/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FN4",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN4/IAV",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN4/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN4/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN4/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FN5",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN5/IA",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN5/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN5/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN5/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FN6",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN6/IA",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN6/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN6/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN6/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FN7",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN7/IA",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN7/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN7/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN7/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FN8",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN8/IA",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN8/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN8/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN8/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FN9",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN9/IA",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN9/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN9/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN9/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FNA",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNA/IA",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNA/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNA/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNA/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FNB",
            }}
          />
          <BlackContainer
            data={{
              label: "472FN2B/IA",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNB/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNB/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNB/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FNC",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNC/IA",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNC/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNC/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNC/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FND",
            }}
          />
          <BlackContainer
            data={{
              label: "472FND/IA",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FND/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FND/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FND/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472FNE",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNE/IA",
              useClass: "greenTxt mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNE/SA",
              useClass: "greenTxt mt-1",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNE/PT01",
              useClass: "greenTxt mt-1",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472FNE/FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/m",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="squareplustri position-absolute single-text-5"></div>
      <div className="squareplustri position-absolute single-text-6"></div>
      <div className="position-absolute single-text-7 d-flex">
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FN1/M01")}`}
              label="472FN1/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FN1",
            }}
          />
        </div>
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FN2/M01")}`}
              label="472FN2/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FN2",
            }}
          />
        </div>
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FN3/M01")}`}
              label="472FN3/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FN3",
            }}
          />
        </div>
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FN4/M01")}`}
              label="472FN4/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FN4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FN5/M01")}`}
              label="472FN5/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FN5",
            }}
          />
        </div>
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FN6/M01")}`}
              label="472FN6/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FN6",
            }}
          />
        </div>
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FN7/M01")}`}
              label="472FN7/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FN7",
            }}
          />
        </div>
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FN8/M01")}`}
              label="472FN8/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FN8",
            }}
          />
        </div>
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FN9/M01")}`}
              label="472FN9/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FN9",
            }}
          />
        </div>
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FNA/M01")}`}
              label="472FNA/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FNA",
            }}
          />
        </div>
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FNB/M01")}`}
              label="472FNB/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FNB",
            }}
          />
        </div>
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FNC/M01")}`}
              label="472FNC/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FNC",
            }}
          />
        </div>
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FND/M01")}`}
              label="472FND/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FND",
            }}
          />
        </div>
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FNE/M01")}`}
              label="472FNE/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FNE",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "ROLLER CRUSHER TEMPERATURES",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RC1",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC1/BTE1",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC1/BTE2",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RC2",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC2/BTE1",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC2/BTE2",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RC3",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC3/BTE1",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC3/BTE2",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RC4",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC4/BTE1",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC4/BTE2",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RC5",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC5/BTE1",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC5/BTE2",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RC6",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC6/BTE1",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC6/BTE2",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-10 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "472RC CURRENT",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RC1",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC1/IA",
              useClass: "greenTxt ",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RC2",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC2/IA",
              useClass: "greenTxt ",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RC3",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC3/IA",
              useClass: "greenTxt ",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RC4",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC4/IA",
              useClass: "greenTxt ",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RC5",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC5/IA",
              useClass: "greenTxt ",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RC6",
            }}
          />
          <BlackContainer
            data={{
              label: "472RC6/IA",
              useClass: "greenTxt ",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11">
        <div className="d-flex flex-column align-items-center">
          <div className="squareplustri text-center p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "472BF1",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "472BF1/M01"
              )} mt-1`}
              label="472BF1/M01"
            />
          </div>
          <div className="t d-flex">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "472RAH/M01"
              )}`}
              label="472RAH/M01"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "472RAH",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <BlackContainer
          data={{
            label: "512PC1/TE1",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "512PC2/M01",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "512PC3/M01",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-13">
        {/* <BlackContainer
          data={{
            label: "CL_471FN2_II",
            useClass: "greenTxt",
            unit: "4",
            unitColor: "unitColor",
          }}
        /> */}
        <BlackContainer
          data={{
            label: "472FNG/RPM",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "472FNG/AMP",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "COOLING AIR",
          }}
        />
        {/* doubt on tag no and tag */}
        <BlackContainer
          data={{
            label: "472FN1/COOLINGFAN",
            useClass: "greenTxt  ml-2",
            unit: "Nm3",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "CLINKER TEMP",
          }}
        />
        <BlackContainer
          data={{
            label: "492PC1/TTP",
            useClass: "greenTxt  ml-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "492PC1/TTP1",
            useClass: "greenTxt  ml-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        {/* doubt as its tag no is a analog tag but in excel it is a digital tag */}
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt ",
            unit: "AMPS",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "492PC1/XA1",
            useClass: "greenTxt ",
            unit: "mm/sec",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "492PC2/XA",
            useClass: "greenTxt ",
            unit: "mm/sec",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        {/* doubt as tag no shows it is a digital tag but in image its an analog tag */}
        <BlackContainer
          data={{
            label: "492PC2/CURRENT",
            useClass: "greenTxt ",
            unit: "AMPS",
            unitColor: "unitColor",
          }}
        />
        {/* <BlackContainer
          data={{
            label: "CL_471FN1_PT1",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        /> */}
      </div>
      <div className="position-absolute single-text-20">
        <BlackContainer
          data={{
            label: "472IN1/AIR_Volume",
            useClass: "greenTxt ",
            unit: "m3/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Main Silo Level (Centre)",
            }}
          />
          <BlackContainer
            data={{
              label: "492SB1/LTP",
              useClass: "greenTxt ml-2",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Reject Silo Level",
            }}
          />
          <BlackContainer
            data={{
              label: "492SB2/LTP",
              useClass: "greenTxt ml-2",
              unit: "M",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "472IN1/IA01",
            useClass: "greenTxt ",
            unit: "AMPS",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "472IN1/IA02",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "472IN1/IA03",
            useClass: "greenTxt mt-1",
            unit: "AMPS",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "GRATE SPEED ACTUAL",
          }}
        />
        <BlackContainer
          data={{
            label: "472IN1/GSA",
            useClass: "greenTxt  ml-2",
            unit: "SPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472RA1",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RA1/M01"
            )}`}
            label="472RA1/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "472RA9",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RA9/M01"
            )}`}
            label="472RA9/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472RA2",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RA2/M01"
            )}`}
            label="472RA2/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472RAA",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RAA/M01"
            )}`}
            label="472RAA/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "472RA3",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RA3/M01"
            )}`}
            label="472RA3/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472RAB",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RAB/M01"
            )}`}
            label="472RAB/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472RA4",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RA4/M01"
            )}`}
            label="472RA4/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472RAC",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RAC/M01"
            )}`}
            label="472RAC/M01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "472RA5",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RA5/M01"
            )}`}
            label="472RA5/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "472RAD",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RAD/M01"
            )}`}
            label="472RAD/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472RA6",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RA6/M01"
            )}`}
            label="472RA6/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "472RAE",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RAE/M01"
            )}`}
            label="472RAE/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472RA7",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RA7/M01"
            )}`}
            label="472RA7/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472RAF",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RAF/M01"
            )}`}
            label="472RAF/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "472RA8",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RA8/M01"
            )}`}
            label="472RA8/M01"
          />
        </div>
        <div className="d-flex align-items-center left">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "472RAG",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "472RAG/M01"
            )}`}
            label="472RAG/M01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "472EP1/IIA1",
              useClass: "greenTxt",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "472TR1/M01"
            )} mt-1`}
            label="472TR1/M01"
          />
          <BlackContainer
            data={{
              label: "472EP1/JTA1",
              useClass: "greenTxt mt-1",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "472EP1/ITA5",
              useClass: "greenTxt ",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "472TR5/M01"
            )} mt-1`}
            label="472TR5/M01"
          />
          <BlackContainer
            data={{
              label: "472EP1/JTA5",
              useClass: "greenTxt mt-1",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "472EP1/ITA2",
              useClass: "greenTxt ",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "472TR2/M01"
            )} mt-1`}
            label="472TR2/M01"
          />
          <BlackContainer
            data={{
              label: "472EP1/JTA2",
              useClass: "greenTxt mt-1",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "472EP1/ITA6",
              useClass: "greenTxt ",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "472TR6/M01"
            )} mt-1`}
            label="472TR6/M01"
          />
          <BlackContainer
            data={{
              label: "472EP1/JTA6",
              useClass: "greenTxt mt-1",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "472EP1/ITA3",
              useClass: "greenTxt ",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "472TR3/M01"
            )} mt-1`}
            label="472TR3/M01"
          />
          <BlackContainer
            data={{
              label: "472EP1/JTA3",
              useClass: "greenTxt mt-1",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "472EP1/ITA7",
              useClass: "greenTxt ",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "472TR7/M01"
            )} mt-1`}
            label="472TR7/M01"
          />
          <BlackContainer
            data={{
              label: "472EP1/JTA7",
              useClass: "greenTxt mt-1",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "472EP1/ITA",
              useClass: "greenTxt ",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "472TR4/M01"
            )} mt-1`}
            label="472TR4/M01"
          />
          <BlackContainer
            data={{
              label: "472EP1/JTA4",
              useClass: "greenTxt mt-1",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <BlackContainer
            data={{
              label: "472EP1/ITA8",
              useClass: "greenTxt ",
              unit: "mA",
              unitColor: "unitColor",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "472TR8/M01"
            )} mt-1`}
            label="472TR8/M01"
          />
          <BlackContainer
            data={{
              label: "472EP1/JTA8",
              useClass: "greenTxt mt-1",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "COOLER WILL TRIP",
          }}
        />
        <BlackContainer
          data={{
            label: "472EP1/PTP",
            useClass: "greenTxt mt-1",
            unit: "mmW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "WIND SPEED AT CCR",
          }}
        />
        <BlackContainer
          data={{
            label: "ANEMOMETERSCCR/WIND_SPEED",
            useClass: "greenTxt mt-1",
            unit: "Km/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-30 ">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "472GD1_M01",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472GD1/M01")} ml-2`}
            label="472GD1/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "472EP1/PTP2",
              useClass: "greenTxt ml-3",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "NOX",
            }}
          />
          <BlackContainer
            data={{
              label: "422SK1/NOX",
              useClass: "greenTxt ml-2",
              unit: "mg/hr",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "472GD1_M02",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472GD2/M01")} ml-2`}
            label="472GD2/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "472EP1/TTP2",
              useClass: "greenTxt ml-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FNF_CF2/M01")}`}
              label="472FNF_CF2/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FN_CF2",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FNF_CF1/M02")}`}
              label="472FNF_CF1/M02"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FN_CF1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "472FNF/SA",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "472FNF/IA",
            useClass: "greenTxt mt-1",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "472FNF/JA",
            useClass: "greenTxt mt-1",
            unit: "Kw",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "472WS1/SOV3"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
            "472WS1/SOV3"
          )}`}
          label="472WS1/SOV3"
        />
      </div>

      <div className="position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "472EP1/TTP1",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-35">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "HYD CYLENDER-1/2 POSITION DIFF",
            }}
          />
          <BlackContainer
            data={{
              label: "472IN1/POSO3",
              useClass: "greenTxt ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Working Pressure - Actual Value",
            }}
          />
          <BlackContainer
            data={{
              label: "472IN1/PIO5",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "Working Pressure - Set Value",
            }}
          />
          <BlackContainer
            data={{
              label: "472IN1/PIO6",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-36">
        <BlackContainer
          data={{
            label: "472IN1/TEA17",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-37">
        <BlackContainer
          data={{
            label: "472WS1/FLOW_RATE",
            useClass: "greenTxt ",
            unit: "m3/hr",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-38">
        <div className="d-flex align-items-center g">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "442CP1",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("442CP1/M01")} mt-1`}
              label="442CP1/M01"
              text="M"
            />
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "442CP2",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("442CP2/M01")} mt-1`}
              label="442CP2/M01"
              text="M"
            />
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "442CP3",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("442CP3/M01")} mt-1`}
              label="442CP3/M01"
              text="M"
            />
          </div>
          <BlackContainer
            data={{
              label: "422BH1/PTP",
              useClass: "greenTxt ",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "442CP4",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("442CP4/M01")} mt-1`}
              label="442CP4/M01"
              text="M"
            />
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "442CP5",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("442CP5/M01")} mt-1`}
              label="442CP5/M01"
              text="M"
            />
          </div>
        </div>
        <div className="d-flex align-items-center g mt-1">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "442AD1",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "442AD1/442AD1"
              )} mt-1`}
              label="442AD1/442AD1"
              text="M"
            />
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "442AD2",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "442AD2/442AD2"
              )} mt-1`}
              label="442AD2/442AD2"
              text="M"
            />
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "442AD3",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "442AD2/442AD3"
              )} mt-1`}
              label="442AD2/442AD3"
              text="M"
            />
          </div>
          <BlackContainer
            data={{
              label: "442CP5/AIR_PRESSURE",
              useClass: "greenTxt ",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "442AD4",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "442AD4/442AD4"
              )} mt-1`}
              label="442AD4/442AD4"
              text="M"
            />
          </div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "442AD5",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus(
                "442AD5/442AD5"
              )} mt-1`}
              label="442AD5/442AD5"
              text="M"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-39 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472PU1_M01/M01")}`}
            label="472PU1_M01/M01"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "472PU1",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472PU1_M02/M01")}`}
            label="472PU1_M02/M01"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "472PU2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-40">
        <BlackContainer
          data={{
            label: "472SK1/OPACITY",
            useClass: "greenTxt ",
            unit: "mg/m",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <BlackContainer
          data={{
            label: "472IN1/CHAMBER_TEMP",
            useClass: "greenTxt ",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="img-66 position-absolute single-text-42 d-flex align-items-center justify-content-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("472WS1/M01")}`}
          label="472WS1/M01"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-43">
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472WS1/M02")}`}
              label="472WS1/M02"
              text="F"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-44 d-flex flex-column">
        <div>
          <BlueContainerWithDynamicBorder
            useClass={` ${useBorderTagsColorStatus("472WS1/M04")}`}
            isClickable={true}
            tagLabel="472WS1/M04"
          />
        </div>
        <div>
          <BlueContainerWithDynamicBorder
            useClass={`ml-2 ${useBorderTagsColorStatus("472WS1/M03")}`}
            isClickable={true}
            tagLabel="472WS1/M03"
          />
        </div>
      </div>
      <div className="position-absolute single-text-45 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "COOLER GRATE PLATE TEMP",
            }}
          />
        </div>
        <div className="d-flex g mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Row-3",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-3",
                label: "FAN 1,2",
              }}
            />
          </div>
        </div>
        <div className="d-flex mt-1 g">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Row-4",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-3",
                label: "FAN 1,2",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "472IN1/TEA2",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472IN1/TEA1",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472IN1/TEA3",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1 g">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Row-5",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-3",
                label: "FAN 3,4",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "472IN1/TEA4",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472IN1/TEA5",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472IN1/TEA6",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1 g">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Row-13",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-3",
                label: "FAN 5",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "472IN1/TEA7",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472IN1/TEA8",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472IN1/TEA9",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472IN1/TEA10",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472IN1/TEA11",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472IN1/TEA12",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1 g">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Row-20",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-3",
                label: "FAN 5",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "472IN1/TEA13",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "472IN1/TEA14",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1 g">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Row-29",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-3",
                label: "FAN 6",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "472IN1/TEA15",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "472IN1/TEA16",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          /> */}
          <BlackContainer
            data={{
              label: "472IN1/TEA16",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-46">
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FNF/M01")}`}
              label="472FNF/M01"
              text="F"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-47 text-center">
        <div>
          <BlueContainerWithDynamicBorder
            useClass={` ${useBorderTagsColorStatus("472SD5/K01")}`}
            isClickable={true}
            tagLabel="472SD5/K01"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "72SD5",
          }}
        />
      </div>
      <div className=" position-absolute single-text-49 d-flex">
        <MotorCircleDigitalTag
          className={`grn-gry-img digital-tag ${useImgColorStatus(
            "492DG1/M01"
          )}`}
          label="492DG1/M01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "492DG1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-50 d-flex align-items-center">
        <div className="text-center">
          <div className="img-66 d-flex align-items-center justify-content-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472IN1/M01")}`}
              label="472IN1/M01"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "472IKN1",
            }}
          />
        </div>
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("472OT/M01")}`}
            label="472OT/M01"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "472O7",
            }}
          />
        </div>
      </div>
      <div className="chimni-red position-absolute single-text-51"></div>
      <div className="position-absolute single-text-52">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Inlet Valve",
          }}
        />
      </div>
      <div className="position-absolute single-text-53">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "INTERMEDIATE SILO",
          }}
        />
      </div>
      <div className="position-absolute single-text-54">
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("472FNG/M01")}`}
              label="472FNG/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "472FNG",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-55">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("472LU1/M01")}`}
          label="472LU1/M01"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "472LU1",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-56">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "472WS1",
          }}
        />
      </div>
    </div>
  );
};

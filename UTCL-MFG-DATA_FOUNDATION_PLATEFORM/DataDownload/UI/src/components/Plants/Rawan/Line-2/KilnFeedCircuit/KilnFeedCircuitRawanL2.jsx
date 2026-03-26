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

export const KilnFeedCircuitRawanL2 = () => {
  return (
    <div className="KilnFeedCircuitRawanL2 w-100 h-100 position-relative">
      <PipeWithCircles parentDivClass="hpipecircle position-absolute pipe-1" />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        text={{ useClass: "text-dark mx-auto", label: "432.AS8" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        text={{ useClass: "text-dark mx-auto", label: "432.AS9" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        text={{ useClass: "text-dark mx-auto", label: "432.AS7" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        text={{ useClass: "text-dark mx-auto", label: "432.AS6" }}
      />
      <div className="yellowline-Vr downArrow position-absolute pipe-6"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-7"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-8"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-9"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-10"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-11"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-12"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-13"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-14"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-15"></div>
      <div className="yellowline-Vr position-absolute pipe-16"></div>
      <div className="yellowline-Hr position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Vr position-absolute pipe-19"></div>
      <div className="yellowline-Hr position-absolute pipe-20"></div>
      <div className="yellowline-Vr position-absolute pipe-21"></div>
      <div className="yellowline-Vr position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr position-absolute pipe-24"></div>
      <div className="yellowline-Hr position-absolute pipe-25"></div>
      <div className="yellowline-Vr position-absolute pipe-26"></div>
      <div className="yellowline-Vr position-absolute pipe-27"></div>
      <div className="yellowline-Hr position-absolute pipe-28"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-29"></div>
      <div className="yellowline-Vr position-absolute pipe-30"></div>
      <div className="yellowline-Hr position-absolute pipe-31"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-32"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-33"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-34"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-35"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-36"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-37"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-38"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-39"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-40"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-42"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-43"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-44"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-45"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-46"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-47"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-48"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-49"></div>
      <div className="yellowline-Hr position-absolute pipe-50"></div>
      <div className="yellowline-Hr position-absolute pipe-51"></div>
      <div className=" position-absolute single-text-1 d-flex">
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center squareplustri">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "432.BF4",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "432BF4/M01"
              )} mt-1`}
              label="432BF4/M01"
            />
          </div>
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "432RA4/M01"
              )}`}
              label="432RA4/M01"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "432.RA4",
              }}
            />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center squareplustri">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "432.BF5",
              }}
            />
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus(
                "432BF5/M01"
              )} mt-1`}
              label="432BF5/M01"
            />
          </div>
          <div className="d-flex">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "432RA5/M01"
              )}`}
              label="432RA5/M01"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "432.RA5",
              }}
            />
          </div>
        </div>
      </div>
      <div className="pipe dotted-pipe position-absolute single-text-2"></div>
      <div className="pipe dotted-pipe position-absolute single-text-3"></div>
      <div className="d-flex position-absolute single-text-4">
        <div className="text-center">
          <div className="img-41 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432BE1_M01/M01")}`}
              label="432BE1_M01/M01"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "432.BE2_M01",
            }}
          />
        </div>
        <div className="text-center">
          <div className="img-41 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432BE2_M01/M01")}`}
              label="432BE2_M01/M01"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "432.BE1_M01",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-5">
        <div className="text-center position-absolute single-text-98">
          <MimicCaret
            parentClass="d-flex tringle-item justify-content-center"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "432SGG/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
              "432SGG/V01"
            )}`}
            label="432SGG/V01"
          />
          <MotorCircleDigitalTag
            className={` mt-2 circle-img digital-tag ${useFanImgTagsColorStatus(
              "432RAC/M01"
            )}`}
            label="432RAC/M01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNV/M01")}`}
              label="432FNV/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNV.FNU",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNU/M01")}`}
              label="432FNU/M01"
              text="F"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNE/M01")}`}
              label="432FNE/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNE",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNF/M01")}`}
              label="432FNF/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNF",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNG/M01")}`}
              label="432FNG/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNG",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNH/M01")}`}
              label="432FNH/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNH",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNN/M01")}`}
              label="432FNN/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNN",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNP/M01")}`}
              label="432FNP/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNP",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNQ/M01")}`}
              label="432FNQ/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNQ",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNR/M01")}`}
              label="432FNR/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNR",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNS/M01")}`}
              label="432FNS/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNS",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNT/M01")}`}
              label="432FNT/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNT",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNJ/M01")}`}
              label="432FNJ/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNJ",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNK/M01")}`}
              label="432FNK/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNK",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FN1/M01")}`}
              label="432FN1/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNL",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNM/M01")}`}
              label="432FNM/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNM",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-11">
        <div className="border p-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M01_KW",
              }}
            />
            <BlackContainer
              data={{
                label: "432BE1_M01/IB",
                useClass: "greenTxt  ml-2",
                unit: "KW",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M01_AMP",
              }}
            />
            <BlackContainer
              data={{
                label: "432BE1_M01/IA",
                useClass: "greenTxt  ml-2",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "GB-1_VIB",
              }}
            />
            <BlackContainer
              data={{
                label: "432BE1_M01/VIB",
                useClass: "greenTxt  ml-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="border p-1 mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M02_KW",
              }}
            />
            <BlackContainer
              data={{
                label: "432BE1_M02/IB1",
                useClass: "greenTxt  ml-2",
                unit: "KW",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M02_AMP",
              }}
            />
            <BlackContainer
              data={{
                label: "432BE1_M02/IA",
                useClass: "greenTxt  ml-2",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "GB-2_VIB",
              }}
            />
            <BlackContainer
              data={{
                label: "432BE1_M02/VIB",
                useClass: "greenTxt  ml-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <div className="border p-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M01_KW",
              }}
            />
            <BlackContainer
              data={{
                label: "432BE2_M01/IB1",
                useClass: "greenTxt  ml-2",
                unit: "KW",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M01_AMP",
              }}
            />
            <BlackContainer
              data={{
                label: "432BE2_M01/IA",
                useClass: "greenTxt  ml-2",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "GB-1_VIB",
              }}
            />
            <BlackContainer
              data={{
                label: "432BE2_M01/VIB",
                useClass: "greenTxt  ml-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="border p-1 mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M02_KW",
              }}
            />
            <BlackContainer
              data={{
                label: "432BE2_M02/IB1",
                useClass: "greenTxt  ml-2",
                unit: "KW",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "M02_AMP",
              }}
            />
            <BlackContainer
              data={{
                label: "432BE2_M02/IA",
                useClass: "greenTxt  ml-2",
                unit: "AMP",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "GB-2_VIB",
              }}
            />
            <BlackContainer
              data={{
                label: "432BE2_M02/VIB",
                useClass: "greenTxt  ml-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <div className="border p-1">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "432.BE1_M01",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE1_M01/BTE1",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "BRG TEMP.1",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE1_M01/BTE2",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "BRG TEMP.2",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE1_M01/WTE1",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "WND TEMP.1",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE1_M01/WTE2",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "WND TEMP.2",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE1_M01/WTE3",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "WND TEMP.3",
              }}
            />
          </div>
        </div>
        <div className="border p-1 mt-1">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "432.BE1_M02",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE1_M02/BTE1",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "BRG TEMP.1",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE1_M02/BTE2",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "BRG TEMP.2",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE1_M02/WTE1",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "WND TEMP.1",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE1_M02/WTE2",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "WND TEMP.2",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE1_M02/WTE3",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "WND TEMP.3",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-14">
        <div className="border p-1">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "432.BE2_M01",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE2_M01/BTE1",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "BRG TEMP.1",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE2_M01/BTE2",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "BRG TEMP.2",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE2_M01/WTE1",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "WND TEMP.1",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE2_M01/WTE2",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "WND TEMP.2",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE2_M01/WTE3",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "WND TEMP.3",
              }}
            />
          </div>
        </div>
        <div className="border p-1 mt-1">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "432.BE2_M02",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE2_M02/BTE1",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "BRG TEMP.1",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE2_M02/BTE2",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "BRG TEMP.2",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE2_M01/WTE1",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "WND TEMP.1",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE2_M01/WTE2",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "WND TEMP.2",
              }}
            />
          </div>
          <div className="d-flex mt-1">
            <BlackContainer
              data={{
                label: "432BE2_M01/WTE3",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "WND TEMP.3",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-15 d-flex align-items-center">
        <MotorCircleDigitalTag
          className={` grn-gry-img digital-tag ${useImgColorStatus(
            "432DG2/K01"
          )}`}
          label="432DG2/K01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "432.DG2",
          }}
        />
      </div>
      <div className=" position-absolute single-text-16 d-flex align-items-center">
        <MotorCircleDigitalTag
          className={` grn-gry-img digital-tag ${useImgColorStatus(
            "432DG3/K01"
          )}`}
          label="432DG3/K01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "432.DG3",
          }}
        />
      </div>
      <div className=" position-absolute single-text-17 d-flex align-items-center">
        <MotorCircleDigitalTag
          className={` grn-gry-img digital-tag ${useImgColorStatus(
            "432PG2/K01"
          )}`}
          label="432PG2/K01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "432.PG2",
          }}
        />
      </div>
      <div className=" position-absolute single-text-18 d-flex align-items-center">
        <MotorCircleDigitalTag
          className={` grn-gry-img digital-tag ${useImgColorStatus(
            "432PG4/K01"
          )}`}
          label="432PG4/K01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "432.PG4",
          }}
        />
      </div>
      <div className=" position-absolute single-text-19 d-flex align-items-center">
        <MotorCircleDigitalTag
          className={` grn-gry-img digital-tag ${useImgColorStatus("432PG3/")}`}
          label="432PG3/"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "432.PG3",
          }}
        />
      </div>
      <div className=" position-absolute single-text-20 d-flex align-items-center">
        <MotorCircleDigitalTag
          className={` grn-gry-img digital-tag ${useImgColorStatus(
            "432PG1/K01"
          )}`}
          label="432PG1/K01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "432.PG1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-21 d-flex">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "432RAA",
            }}
          />
          <MotorCircleDigitalTag
            className={` ml-1 circle-img digital-tag ${useFanImgTagsColorStatus(
              "432RAA/M01"
            )}`}
            label="432RAA/M01"
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={` circle-img digital-tag ${useFanImgTagsColorStatus(
              "432RAB/M01"
            )}`}
            label="432RAB/M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "432RAA",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-22 d-flex">
        <div className="d-flex align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "432RA8",
            }}
          />
          <MotorCircleDigitalTag
            className={` ml-1 circle-img digital-tag ${useFanImgTagsColorStatus(
              "432RA8/M01"
            )}`}
            label="432RA8/M01"
          />
        </div>
        <div className="d-flex align-items-center">
          <MotorCircleDigitalTag
            className={` circle-img digital-tag ${useFanImgTagsColorStatus(
              "432RA9/M01"
            )}`}
            label="432RA9/M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "432RA9",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "432SGA",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={`ml-1 ${useBorderTagsColorStatus("432SGA/V01")}`}
            isClickable={true}
            tagLabel="432SGA/V01"
          />
        </div>
        <div className="d-flex">
          <BlueContainerWithDynamicBorder
            useClass={` ${useBorderTagsColorStatus("432SGB/V01")}`}
            isClickable={true}
            tagLabel="432SGB/V01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "432SGB",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "432SG8",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={`ml-1 ${useBorderTagsColorStatus("512DG8/M01")}`}
            isClickable={true}
            tagLabel="432SG8/V01"
          />
        </div>
        <div className="d-flex">
          <BlueContainerWithDynamicBorder
            useClass={` ${useBorderTagsColorStatus("432SG9/V01")}`}
            isClickable={true}
            tagLabel="432SG9/V01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "432SG9",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-25">
        <BlackContainer
          data={{
            label: "432BE1_M01/BSTA3",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "432PG3/ZTA",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "432PG4/ZTA",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-28">
        <BlackContainer
          data={{
            label: "432PG1/ZTA",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-29">
        <BlackContainer
          data={{
            label: "432BE1_M01/BSTA1",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-30">
        <BlackContainer
          data={{
            label: "432PG2/ZTA",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "Aux Drive",
          }}
        />
        <BlackContainer
          data={{
            label: "432BE2_M01/BSTA3",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "432FN5/IA",
            useClass: "greenTxt",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "432FN5/SA",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-34">
        <BlackContainer
          data={{
            label: "432BF5/DPTP",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-35">
        <BlackContainer
          data={{
            label: "432BF4/DPTP",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-36">
        <BlackContainer
          data={{
            label: "432DG2/432DG2_SEL_TREND",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "432SG2/TE1",
            useClass: "greenTxt mt-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-37">
        <BlackContainer
          data={{
            label: "432RAC/432RAC_RPM",
            useClass: "greenTxt ",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "432RAC/432RAC_AMP",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "Aux Drive",
          }}
        />
        <BlackContainer
          data={{
            label: "432BE1_M01/BSTA1",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-39 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("432BE1_M02/M01")}`}
          label="432BE1_M02/M01"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("432BE2_M01A/M01")}`}
          label="432BE2_M01A/M01"
          text="M"
        />
      </div>
      <div className=" position-absolute single-text-40 text-center">
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "432SG2/V01"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  digital-tag ${useCaretColorStatus(
            "432SG2/V01"
          )}`}
          label="432SG2/V01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "432.SG2",
          }}
        />
      </div>
      <div className=" position-absolute single-text-41 d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "432SG3",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item justify-content-center ml-1"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "432SG3/V01"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag  ${useCaretColorStatus(
            "432SG3/V01"
          )}`}
          label="432SG3/V01"
        />
      </div>
      <div className="position-absolute single-text-42 d-flex">
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FN4/M01")}`}
              label="432FN4/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432.FN4",
            }}
          />
        </div>
        <div className="text-center">
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FN45/M01")}`}
              label="432FN45/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432.FN5",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-43 d-flex ">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "(TO 442.PH1)",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "(TO 442.PH2)",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "442PH3",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "442PH4",
            }}
          />
        </div>
      </div>
    </div>
  );
};

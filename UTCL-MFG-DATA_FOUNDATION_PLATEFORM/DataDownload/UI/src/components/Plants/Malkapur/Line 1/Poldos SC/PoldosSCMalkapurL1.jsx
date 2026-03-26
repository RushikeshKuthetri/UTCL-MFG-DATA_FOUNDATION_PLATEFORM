import {
  useCaretColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
} from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../../index";

export const PoldosSCMalkapurL1 = () => {
  return (
    <div className="PoldosSCMalkapurL1 w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr upArrow position-absolute line-7"></div>
      <div className="yellowline-Vr upArrow position-absolute line-8"></div>
      <div className="yellowline-Vr upArrow position-absolute line-9"></div>
      <div className="yellowline-Vr upArrow position-absolute line-10"></div>
      <div className="yellowline-Vr upArrow position-absolute line-11"></div>
      <div className="yellowline-Vr upArrow position-absolute line-12"></div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="yellowline-Vr position-absolute line-14"></div>
      <div className="yellowline-Vr position-absolute line-15"></div>
      <div className="yellowline-Vr position-absolute line-16"></div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Vr position-absolute line-18"></div>
      <div className="yellowline-Vr position-absolute line-19"></div>
      <div className="yellowline-Vr position-absolute line-20"></div>
      <div className="d-flex flex-column position-absolute line-21">
        <div className="yellowline-Hr position-relative"></div>
        <div className="yellowline-Hr position-relative"></div>
        <div className="yellowline-Hr position-relative"></div>
      </div>
      <div className="d-flex flex-column position-absolute line-22">
        <div className="yellowline-Hr position-relative"></div>
        <div className="yellowline-Hr position-relative"></div>
        <div className="yellowline-Hr position-relative"></div>
      </div>
      <div className="yellowline-Hr rightarrow position-absolute line-23"></div>
      <div className="yellowline-Hr position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>
      <div className="yellowline-Hr position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Hr position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Hr position-absolute line-33"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-34"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-35"></div>
      <div className="yellowline-Vr downArrow position-absolute line-36"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-37"></div>
      <div className="yellowline-Vr position-absolute line-38"></div>
      <div className="yellowline-Vr position-absolute line-39"></div>

      <div className="containerImage d-flex flex-column justify-content-around align-items-center position-absolute single-text-1">
        <BlackContainer
          data={{
            label: "S1W0451/UM",
            useClass: "greenTxt mt-1",
            unit: "ton",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BIN-1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("SM204/M")}`}
          text="M"
          label="SM204/M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SM204",
          }}
        />
        <BlackContainer
          data={{
            label: "KC_BIN_TZ/TZ52",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage d-flex flex-column justify-content-around align-items-center position-absolute single-text-2">
        <BlackContainer
          data={{
            label: "SA206/S1W0551",
            useClass: "greenTxt mt-1",
            unit: "ton",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BIN-2",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("SM207/M")}`}
          text="M"
          label="SM207/M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SM207",
          }}
        />
        <BlackContainer
          data={{
            label: "PC_BIN_TZ/TZ62",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "SM154",
          }}
        />
        <div className="containerImage text-center pt-3">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("SM153/M")}`}
            label="SM153/M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "SM220",
          }}
        />
        <div className="containerImage text-center pt-3">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("SM221/M")}`}
            label="SM221/M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "SM223",
          }}
        />
        <div className="containerImage text-center pt-3">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("SM224/M")}`}
            label="SM224/M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "SM157",
          }}
        />
        <div className="containerImage text-center pt-3">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("SM157/M")}`}
            label="SM157/M"
          />
        </div>
      </div>
      <div className="img-87 position-absolute single-text-7"></div>
      <div className="img-87 position-absolute single-text-8"></div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-9" />
      <div className="img-66 position-absolute single-text-10">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("SM154/M")}`}
            label="SM154/M"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-11">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("SM220/M")}`}
            label="SM220/M"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-12">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("SM223/M")}`}
            label="SM223/M"
            text="M"
          />
        </div>
      </div>
      <div className="img-66 position-absolute single-text-13">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("SM157/M")}`}
            label="SM157/M"
            text="M"
          />
        </div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "SM137",
          }}
        />
        <div className="img-41 text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("SM137/M")}`}
            label="SM137/M"
            text="M"
          />
        </div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-15">
        <div className="img-41 text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("SM119/M")}`}
            label="SM119/M"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "SM119",
          }}
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-16">
        <div className="img-66 text-center">
          <MotorCircleDigitalTag
            className={`line-circle p-3 digital-tag ${useColorStatus(
              "SM209/SM209"
            )}`}
            label="SM209/SM209"
          />
        </div>
        <div className="img-66 text-center">
          <MotorCircleDigitalTag
            className={`line-circle p-3 digital-tag ${useColorStatus(
              "SM210/SM210"
            )}`}
            label="SM210/SM210"
          />
        </div>
        <div className="img-66 text-center">
          <MotorCircleDigitalTag
            className={`line-circle p-3 digital-tag ${useColorStatus(
              "SM211/M"
            )}`}
            label="SM211/M"
          />
        </div>
        <div className="img-66 mt-3 text-center">
          <MotorCircleDigitalTag
            className={`line-circle p-3 digital-tag ${useColorStatus(
              "SM214/M"
            )}`}
            label="SM214/M"
          />
        </div>
        <div className="img-66 text-center">
          <MotorCircleDigitalTag
            className={`line-circle p-3 digital-tag ${useColorStatus(
              "SM213/M"
            )}`}
            label="SM213/M"
          />
        </div>
        <div className="img-66 text-center">
          <MotorCircleDigitalTag
            className={`line-circle p-3 digital-tag ${useColorStatus(
              "SM212/M"
            )}`}
            label="SM212/M"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-17">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("S19SV09/V")}`}
          label="S19SV09/V"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "S19SV09",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-18">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("S19SV10/V")}`}
          label="S19SV10/V"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "S19SV10",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-19">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "SM205/M"
          )}`}
          label="SM205/M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "SM205",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-20">
                <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "PC_RAL_2"
          )}`}
          label="PC_RAL_2"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "SM208",
          }}
        />

      </div>
      <div className="d-flex position-absolute single-text-21">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "SV01",
          }}
        />
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "S19SV01/V"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "S19SV01/V"
          )}`}
          label="S19SV01/V"
        />
      </div>
      <div className="d-flex position-absolute single-text-22">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "S19SV03/V"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "S19SV03/V"
          )}`}
          label="S19SV03/V"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "SV03",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-23">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "S19SV04/V"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "S19SV04/V"
          )}`}
          label="S19SV04/V"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "SV04",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "SV07",
          }}
        />
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "S19SV07/V"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "S19SV07/V"
          )}`}
          label="S19SV07/V"
        />
      </div>
      <div className="d-flex position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "SV08",
          }}
        />
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "S19SV08/V"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "S19SV08/V"
          )}`}
          label="S19SV08/V"
        />
      </div>
      <div className="d-flex position-absolute single-text-26">
        <MimicCaret
          parentClass="tringle-item d-flex"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "S19SV05/V"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "S19SV05/V"
          )}`}
          label="S19SV05/V"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "SV05",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-around align-items-center position-absolute single-text-27">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("SA203/PNL")}`}
          label="SA203/PNL"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "POLDOS-KC",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SP",
            }}
          />
          <BlackContainer
            data={{
              label: "SA203/SA20352S",
              useClass: "greenTxt ml-2",
              unit: "ton",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Act.",
            }}
          />
          <BlackContainer
            data={{
              label: "KLN01_G02/WEIGHT",
              useClass: "greenTxt ml-2",
              unit: "ton",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-around align-items-center position-absolute single-text-28">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("SA206/PNL")}`}
          label="SA206/PNL"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "POLDOS-PC",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SP",
            }}
          />
          <BlackContainer
            data={{
              label: "SA206/SA20653S",
              useClass: "greenTxt ml-2",
              unit: "ton",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Act.",
            }}
          />
          <BlackContainer
            data={{
              label: "KLN01)G12/WEIGHT",
              useClass: "greenTxt ml-2",
              unit: "ton",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="box-1 p-1 position-absolute single-text-30">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "AVAILABLE",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("SA206/SA20601")}`}
            label="SA206/SA20601"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "CONTROL AIR PRES",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("SA206/SA20620")}`}
            label="SA206/SA20620"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "FILLING WT>75% SP",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("SA206/SA20611")}`}
            label="SA206/SA20611"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "FILLING WT<125% SP",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("SA206/SA20612")}`}
            label="SA206/SA20612"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "FILLING ON COMD",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "SA206/FILLINGONCMD"
            )}`}
            label="SA206/FILLINGONCMD"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "ENABLE MATRL.FEED",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("SA206/SA20605")}`}
            label="SA206/SA20605"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "CALIB ON FROM PNL",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("SA206/SA20608")}`}
            label="SA206/SA20608"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "CALIB ON COMD.",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "SA206/CALIBONCMDSA206"
            )}`}
            label="SA206/CALIBONCMDSA206"
          />
        </div>
      </div>
      <div className="box-1 p-1 position-absolute single-text-29">
        <div className="d-flex justify-content-between">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "AVAILABLE",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("SA203/SA20301")}`}
            label="SA203/SA20301"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "CONTROL AIR PRES",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("SA203/SA20320")}`}
            label="SA203/SA20320"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "FILLING WT>75% SP",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("SA203/SA20311")}`}
            label="SA203/SA20311"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "FILLING WT<125% SP",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("SA203/SA20312")}`}
            label="SA203/SA20312"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "FILLING ON COMD",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "SA203/FILLINGONCMD"
            )}`}
            label="SA203/FILLINGONCMD"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "ENABLE MATRL.FEED",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("SA203/SA20305")}`}
            label="SA203/SA20305"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "CALIB ON FROM PNL",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("SA203/SA20308")}`}
            label="SA203/SA20308"
          />
        </div>
        <div className="d-flex justify-content-between mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1",
              label: "CALIB ON COMD.",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus(
              "SA203/CALIBONCMD"
            )}`}
            label="SA203/CALIBONCMD"
          />
        </div>
      </div>
      <div className="position-absolute single-text-31">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KC COAL%",
          }}
        />
        <BlackContainer
          data={{
            label: "KLN01_G02/KC_COAL_PER",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM205/AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM205/KW",
            useClass: "greenTxt mt-1",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM205/SA20351",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SA203/SCTOPPR",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "PC COAL%",
          }}
        />
        <BlackContainer
          data={{
            label: "KLN01_G12/PC_COAL_PER",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM208/AMP",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM208/KW",
            useClass: "greenTxt mt-1",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM208/SA2651",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PCTOPPR/PCTOPPR",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="box-1 p-1 position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "THROUGHPUT",
          }}
        />
        <BlackContainer
          data={{
            label: "SA203/SA20355SP",
            useClass: "greenTxt mt-1",
            unit: "Set tph",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACT",
            }}
          />
          <BlackContainer
            data={{
              label: "SA203/SA20355_FB",
              useClass: "greenTxt ml-2",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACC",
            }}
          />
          <BlackContainer
            data={{
              label: "KLN01_G02/KC_COAL_ACC",
              useClass: "greenTxt ml-2",
              unit: "ton",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="box-1 p-1 position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "THROUGHPUT",
          }}
        />
        <BlackContainer
          data={{
            label: "SA206/TPH_SP",
            useClass: "greenTxt mt-1",
            unit: "Set tph",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACT",
            }}
          />
          <BlackContainer
            data={{
              label: "SA206/TPH_FB",
              useClass: "greenTxt ml-2",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "ACC",
            }}
          />
          <BlackContainer
            data={{
              label: "KLN01_G02/PC_COAL_ACC",
              useClass: "greenTxt ml-2",
              unit: "ton",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35">
        <BlackContainer
          data={{
            label: "SA203/SA20352S",
            useClass: "greenTxt ml-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "MAIN AIR PRESSURE",
          }}
        />
      </div>
      <div className="position-absolute single-text-36">
        <BlackContainer
          data={{
            label: "SA206/SA20652",
            useClass: "greenTxt ml-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "MAIN AIR PRESSURE",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "AERATION PRESSURE",
          }}
        />
        <BlackContainer
          data={{
            label: "SA20381/UM",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "AERATION PRESSURE",
          }}
        />
        <BlackContainer
          data={{
            label: "SA20681/SA20681",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "KC_BIN_TZ/TZ51",
          useClass: "greenTxt position-absolute single-text-39",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PC_BIN_TZ/TZ61",
          useClass: "greenTxt position-absolute single-text-40",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex flex-column position-absolute single-text-41">
        <BlackContainer
          data={{
            label: "SM209/AMP",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM210/AMP",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM211/AMP",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "SM214/AMP",
            useClass: "greenTxt mt-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM213/AMP",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "SM212/AMP",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex flex-column position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SM209",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SM210",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SM211",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "SM212",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SM213",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SM214",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-43",
          label: "TO SILO 1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-44",
          label: "TO SILO 2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-45",
          label: "TO POLDOS1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-46",
          label: "TO POLDOS2",
        }}
      />
      <div className="d-flex flex-column position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SV03",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SV01",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-48",
          label: "TO KILN",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-49",
          label: "TO PRE-CALCINER",
        }}
      />
      <div className="text-center position-absolute single-text-50">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("SM146/M")}`}
          label="SM146/M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "SM146",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-51",
          label: "FROM B.F (SA132)",
        }}
      />
    </div>
  );
};

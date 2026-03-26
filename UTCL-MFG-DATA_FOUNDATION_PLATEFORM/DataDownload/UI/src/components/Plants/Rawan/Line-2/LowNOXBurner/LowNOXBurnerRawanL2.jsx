import {
  useBorderTagsColorStatus,
  useCaretColorStatus,
  useColorStatus,
} from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  BlueContainerWithDynamicBorder,
  MimicCaret,
} from "../../../../index";

export const LowNOXBurnerRawanL2 = () => {
  return (
    <div className="LowNOXBurnerRawanL2 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 d-flex">
        <div>
          <div className="pipeVr position-absolute pipe-1"></div>
          <div className="pipeVr position-absolute pipe-2"></div>
          <div className="triangle-with-squares text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "KILN",
              }}
            />
            <BlackContainer
              data={{
                label: "482FP1/S_HPR",
                useClass: "greenTxt mt-1",
                unit: "Tons",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "Ton",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "G",
              }}
            />
          </div>
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("482FP1/M01")}`}
              label="482FP1/M01"
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "482.FP1 M01",
              }}
            />
          </div>
        </div>
        <div>
          <div className="pipeVr position-absolute pipe-1"></div>
          <div className="pipeVr position-absolute pipe-2"></div>
          <div className="triangle-with-squares text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "PC2",
              }}
            />
            <BlackContainer
              data={{
                label: "482FP2/SURGE_HPR_LVL",
                useClass: "greenTxt mt-1",
                unit: "Tons",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "Ton",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "G",
              }}
            />
          </div>
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("482FP2/M01")}`}
              label="482FP2/M01"
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "482.FP2 M01",
              }}
            />
          </div>
        </div>
        <div>
          <div className="pipeVr position-absolute pipe-1"></div>
          <div className="pipeVr position-absolute pipe-2"></div>
          <div className="triangle-with-squares text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "PC1",
              }}
            />
            <BlackContainer
              data={{
                label: "482FP3/SURGE_HPR_LVL",
                useClass: "greenTxt mt-1",
                unit: "Tons",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "Ton",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "G",
              }}
            />
          </div>
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("482FP3/M01")}`}
              label="482FP3/M01"
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "482.FP3 M01",
              }}
            />
          </div>
        </div>
        <div>
          <div className="pipeVr position-absolute pipe-1"></div>
          <div className="pipeVr position-absolute pipe-2"></div>
          <div className="triangle-with-squares text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "STBY-1",
              }}
            />
            <BlackContainer
              data={{
                label: "482FP4/SURGE_HPR_HPR_LVL",
                useClass: "greenTxt mt-1",
                unit: "Tons",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "Ton",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "G",
              }}
            />
          </div>
          <div className="text-center">
            <MotorCircleDigitalTag className={`square grey-color`} />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "482.FP4 M01",
              }}
            />
          </div>
        </div>
        <div>
          <div className="pipeVr position-absolute pipe-1"></div>
          <div className="pipeVr position-absolute pipe-2"></div>
          <div className="triangle-with-squares text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "STBY-2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "482FP5",
              }}
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "Ton",
              }}
            />
          </div>
          <div className="text-center">
            <MotorCircleDigitalTag
              className={`square digital-tag ${useColorStatus("482FP5/M01")}`}
              label="482FP5/M01"
            />

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "482.FP5",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <div className=" box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "482FP1",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP1/FRA",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP1/IIA",
              useClass: "greenTxt mt-2",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP1/SAA",
              useClass: "greenTxt mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "AGITATOR",
              }}
            />
            <MotorCircleDigitalTag
              className={`ml-2 line-circle digital-tag ${useColorStatus(
                "482FP1/M01"
              )} `}
              label="482FP1/M01"
            />
          </div>
        </div>
        <div className=" box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "482FP2",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP2/FRA",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP2/IIA",
              useClass: "greenTxt mt-2",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP2/SAA",
              useClass: "greenTxt mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className=" box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "482FP3",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP3/FRA",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP3/IIA",
              useClass: "greenTxt mt-2",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP3/SAA",
              useClass: "greenTxt mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "AGITATOR",
              }}
            />
            <MotorCircleDigitalTag
              className={`ml-2 line-circle digital-tag ${useColorStatus(
                "482FP3/M03"
              )} `}
              label="482FP3/M03"
            />
          </div>
          <BlackContainer
            data={{
              label: "482FP3/II",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className=" box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "482FP4",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP4/FRA",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP4/IIA",
              useClass: "greenTxt mt-2",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP4/SAA",
              useClass: "greenTxt mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "AGITATOR",
              }}
            />
            <MotorCircleDigitalTag
              className={`ml-2 line-circle digital-tag ${useColorStatus(
                "482FP4/M02"
              )} `}
              label="482FP4/M02"
            />
          </div>
          <BlackContainer
            data={{
              label: "482FP4/II",
              useClass: "greenTxt mt-2",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "KILN SEL",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP1/SAP",
              useClass: "greenTxt mt-1",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PC2 SEL",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP2/SAP",
              useClass: "greenTxt mt-1",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PC1 SEL",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP3/SAP",
              useClass: "greenTxt mt-1",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "482FP4/SAP",
              useClass: "greenTxt mt-1",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
          <div>
            <BlackContainer
              data={{
                label: "482FP5/TE",
                useClass: "greenTxt mt-1 ml-3",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "482FP5/SAP",
                useClass: "greenTxt mt-1 ml-3",
                unit: "Bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "482FP1.M02",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "482FP2.M02",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "482FP3.M02",
          }}
        />
        <div className="gap-1 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "482FP4.M02",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "482FP5.M02",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div>
          <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
          <div className="pipeVr position-absolute pipe-2"></div>
          <div className="triangle-with-squares text-center">
            <BlackContainer
              data={{
                label: "482BI1/WTAI",
                useClass: "greenTxt mt-1",
                unit: "T",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="single-text-1 d-flex">
            <MotorCircleDigitalTag className={`circle-img c-grey-img-2`} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "482FP1.M03",
              }}
            />
          </div>
        </div>
        <div className="text-1">
          <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
          <div className="pipeVr position-absolute pipe-2"></div>
          <div className="pipeVr position-absolute pipe-3"></div>
          <div className="triangle-with-squares text-center">
            <BlackContainer
              data={{
                label: "482BI2/WTAI",
                useClass: "greenTxt mt-1",
                unit: "T",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="single-text-1 d-flex">
            <MotorCircleDigitalTag className={`circle-img c-grey-img-2`} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "482FP2.M03",
              }}
            />
          </div>
        </div>
        <div className="text-1 text-2">
          <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
          <div className="pipeVr position-absolute pipe-2"></div>
          <div className="pipeVr position-absolute pipe-3"></div>
          <div className="triangle-with-squares text-center">
            <BlackContainer
              data={{
                label: "482BI3/WTAI",
                useClass: "greenTxt mt-1",
                unit: "T",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="single-text-1 d-flex">
            <MotorCircleDigitalTag className={`circle-img c-grey-img-2`} />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "482FP4.M03",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "482BI1",
            }}
          />
          <div className="ml-4">
            <BlackContainer
              data={{
                label: "482BI1/LIW",
                useClass: "greenTxt mt-1",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "482FCB1/TEA1",
                useClass: "greenTxt mt-5",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "482BI2",
            }}
          />
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mt-1 ml-4",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1 text-1",
            label: "482BI3",
          }}
        />
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "482SG1",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482SG1/V01")}`}
            isClickable={true}
            tagLabel="482SG1/V01"
          />
        </div>
        <div className="d-flex">
          <BlueContainerWithDynamicBorder
            useClass={`mr-3 mt-1 ${useBorderTagsColorStatus("482SG2/V01")}`}
            isClickable={true}
            tagLabel="482SG2/V01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "482SG2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <div className=" box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "482FP5",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP5/FRA",
              useClass: "greenTxt mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP5/IIA",
              useClass: "greenTxt mt-2",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482FP5/SAA",
              useClass: "greenTxt mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9">
        <div className="box-1 p-1">
          <div className="gap-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "482BL1",
              }}
            />
            <div className="connector-icon mt-3 ml-3">
              <div className="yellowline-Vr upArrow position-absolute line-1"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("482BL1/M01")}`}
                label="482BL1/M01"
                text="F"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "482BL1/SAA",
              useClass: "greenTxt mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482BL1/PTP",
              useClass: "greenTxt mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1 mt-3">
          <div className="gap-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "482BL4",
              }}
            />
            <div className="connector-icon mt-3 ml-3">
              <div className="yellowline-Vr upArrow position-absolute line-1"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("482BL4/M01")}`}
                label="482BL4/M01"
                text="F"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "482BL4/SAA",
              useClass: "greenTxt mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482BL4/PTP",
              useClass: "greenTxt mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1 mt-3">
          <div className="gap-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "482BL2",
              }}
            />
            <div className="connector-icon mt-3 ml-3">
              <div className="yellowline-Vr upArrow position-absolute line-1"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("482BL2/M01")}`}
                label="482BL2/M01"
                text="F"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "482BL2/SAA",
              useClass: "greenTxt mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482BL2/PTP",
              useClass: "greenTxt mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex flex-column">
        <div className="squareplustri"></div>
        <div className="squareplustri"></div>
        <div className="squareplustri"></div>
      </div>
      <div className="position-absolute single-text-11 d-flex">
        <div className="d-flex">
          <BlueContainerWithDynamicBorder
            useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482VA1/V01")}`}
            isClickable={true}
            tagLabel="482VA1/V01"
          />
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "482.VA1",
              }}
            />
            <BlackContainer
              data={{
                label: "482VA1/POS",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <BlueContainerWithDynamicBorder
            useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482VA3/V01")}`}
            isClickable={true}
            tagLabel="482VA3/V01"
          />
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "482.VA3",
              }}
            />
            <BlackContainer
              data={{
                label: "482VA3/POS",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex">
          <BlueContainerWithDynamicBorder
            useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482VA2/V01")}`}
            isClickable={true}
            tagLabel="482VA2/V01"
          />
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "482.VA2",
              }}
            />
            <BlackContainer
              data={{
                label: "482VA2/POS",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <div className="d-flex">
          <BlueContainerWithDynamicBorder
            useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482DGY/M01")}`}
            isClickable={true}
            tagLabel="482DGY/M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "482DGY",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <BlueContainerWithDynamicBorder
            useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482DGZ/M01")}`}
            isClickable={true}
            tagLabel="482DGZ/M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "482DGZ",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <MimicCaret
            parentClass="tringle-item d-flex ml-3"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "482VA4/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "482VA4/V01"
            )}`}
            label="482VA4/V01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "482.VA4",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-13 flex-column">
        <div className="d-flex">
          <MimicCaret
            parentClass="tringle-item d-flex ml-3"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "482VA5/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "482VA5/V01"
            )}`}
            label="482VA5/V01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "482.VA5",
            }}
          />
        </div>
        <div className="d-flex">
          <BlueContainerWithDynamicBorder
            useClass={`ml-2 ${useBorderTagsColorStatus("482VA6/V01")}`}
            isClickable={true}
            tagLabel="482VA6/V01"
          />

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "482.VA6",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-14 flex-column">
        <BlackContainer
          data={{
            label: "482VA4/POS",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "482VA5/POS",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "482VA6/POS",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15 d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "482.DG1",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482DG1/M01")}`}
          isClickable={true}
          tagLabel="482DG1/M01"
        />
        <BlackContainer
          data={{
            label: "482DG1/ZTA",
            useClass: "greenTxt mt-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "482.DG2",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={`ml-3 mt-3 ${useBorderTagsColorStatus("482DG2/M01")}`}
          isClickable={true}
          tagLabel="482DG2/M01"
        />

        <BlackContainer
          data={{
            label: "482DG2/ZTA",
            useClass: "greenTxt mt-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "KG2",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482KG2/V01")}`}
            isClickable={true}
            tagLabel="482KG2/V01"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "KG3",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482KG3/V01")}`}
            isClickable={true}
            tagLabel="482KG3/V01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex">
        <BlueContainerWithDynamicBorder
          useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482KG1/V01")}`}
          isClickable={true}
          tagLabel="482KG1/V01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "KG1",
          }}
        />
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <BlueContainerWithDynamicBorder
          useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482KG4/V01")}`}
          isClickable={true}
          tagLabel="482KG4/V01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "KG4",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <BlueContainerWithDynamicBorder
          useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482KG6/V01")}`}
          isClickable={true}
          tagLabel="482KG6/V01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "KG6",
          }}
        />
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "482KG7",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482KG7/V01")}`}
          isClickable={true}
          tagLabel="482KG7/V01"
        />
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "482KG5",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("482KG5/V01")}`}
          isClickable={true}
          tagLabel="482KG5/V01"
        />
      </div>
      <div className="position-absolute single-text-22 box-1 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "KNIFE GATE",
          }}
        />
        <div className="d-flex mt-2">
          <div>
            <MimicCaret
              parentClass="tringle-item d-flex"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "KNIFE_GATE_/V01"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "KNIFE_GATE_/V01"
              )}`}
              label="KNIFE_GATE_/V01"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1 mt-1",
                label: "PC2",
              }}
            />
          </div>
          <div className="ml-3">
            <MimicCaret
              parentClass="tringle-item d-flex"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "KNIFE_GATE_/V02"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "KNIFE_GATE_/V02"
              )}`}
              label="KNIFE_GATE_/V02"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1 mt-1",
                label: "PC1",
              }}
            />
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-23 flex-column">
        <div>
          <BlueContainerWithDynamicBorder
            useClass={`ml-3 ${useBorderTagsColorStatus("482BV1/V01")}`}
            isClickable={true}
            tagLabel="482BV1/V01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "482.BV1",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "482.BV3",
            }}
          />
          <MimicCaret
            parentClass="tringle-item d-flex ml-3"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "482BV3/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "482BV3/V01"
            )}`}
            label="482BV3/V01"
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "482.BV2",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={`ml-3 ${useBorderTagsColorStatus("482BV2/V01")}`}
            isClickable={true}
            tagLabel="482BV2/V01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "482.BV7",
              }}
            />
            <MimicCaret
              parentClass="tringle-item d-flex ml-3"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "482BV7/V01"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "482BV7/V01"
              )}`}
              label="482BV7/V01"
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "482.BV4",
              }}
            />
            <BlueContainerWithDynamicBorder
              useClass={`ml-3 ${useBorderTagsColorStatus("482BV4/V01")}`}
              isClickable={true}
              tagLabel="482BV4/V01"
            />
          </div>
          <div className="mt-2 d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3",
                label: "482.BL5",
              }}
            />
            <div className="connector-icon mt-3 ml-3">
              <div className="yellowline-Vr upArrow position-absolute line-1"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("482BL5/M01")}`}
                label="482BL5/M01"
                text="F"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "482.BVA",
              }}
            />
            <MimicCaret
              parentClass="tringle-item d-flex ml-3"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "482BVA/V01"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "482BVA/V01"
              )}`}
              label="482BVA/V01"
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "482.BV5",
              }}
            />
            <MimicCaret
              parentClass="tringle-item d-flex ml-3"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "482BV5/V01"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "482BV5/V01"
              )}`}
              label="482BV5/V01"
            />
          </div>
          <div className="mt-2 d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3",
                label: "482.BL3",
              }}
            />
            <div className="connector-icon mt-3 ml-3">
              <div className="yellowline-Vr upArrow position-absolute line-1"></div>
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("482BL3/V01")}`}
                label="482BL3/V01"
                text="F"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-25 flex-column">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "482.BV6",
            }}
          />
          <MimicCaret
            parentClass="tringle-item d-flex ml-3"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "482BV6/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "482BV6/V01"
            )}`}
            label="482BV6/V01"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-26 flex-column">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "482.BV8",
            }}
          />
          <MimicCaret
            parentClass="tringle-item d-flex ml-3"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "482BV8/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "482BV8/V01"
            )}`}
            label="482BV8/V01"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-27 flex-column">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "482.BV9",
            }}
          />
          <MimicCaret
            parentClass="tringle-item d-flex ml-3"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "482BV9/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "482BV9/V01"
            )}`}
            label="482BV9/V01"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-28 flex-column">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "482.BVB",
            }}
          />
          <MimicCaret
            parentClass="tringle-item d-flex ml-3"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "482BVB/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "482BVB/V01"
            )}`}
            label="482BVB/V01"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-29">
        <div>
          <BlackContainer
            data={{
              label: "482BL5/SAA",
              useClass: "greenTxt",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482BL5/PTP",
              useClass: "greenTxt mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "482BL3/SAA",
              useClass: "greenTxt",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "482BL3/PTP",
              useClass: "greenTxt mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "482FP5/M02_II",
          useClass: "greenTxt position-absolute single-text-30",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark ml-2 position-absolute single-text-31",
          label: "TO KLIN BURNER",
        }}
      />
      <div className=" position-absolute single-text-32 d-flex  flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "PC FIRING 1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "PC FIRING 2",
          }}
        />
      </div>
      <div className=" position-absolute single-text-33 d-flex  flex-column">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 bg-info",
              label: "UPPER FIRING TO PH1 & PH2",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-4 bg-info",
              label: "LOWER FIRING TO PH1 & PH2",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 bg-info",
              label: "LOWER COAL FIRING TO PH3 & PH4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-4 bg-info",
              label: "UPPER COAL FIRING TO PH3 & PH4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34">
        <MimicCaret
          parentClass="tringle-item d-flex ml-3"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "482BVC/V01"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "482BVC/V01"
          )}`}
          label="482BVC/V01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "482.BVC",
          }}
        />
      </div>
      <div className="yellowline-Hr rightarrow position-absolute line-2"></div>
      <div className="yellowline-Hr rightarrow  position-absolute line-3"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-4"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-5"></div>
      <div className="yellowline-Vr  position-absolute line-6"></div>
      <div className="yellowline-Vr  position-absolute line-7"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-8"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-9"></div>
      <div className="yellowline-Vr position-absolute line-10"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-11"></div>
      <div className="yellowline-Hr  position-absolute line-12"></div>
      <div className="yellowline-Hr  position-absolute line-13"></div>
      <div className="yellowline-Vr  position-absolute line-14"></div>
      <div className="yellowline-Vr  position-absolute line-15"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-16"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-17"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-18"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-19"></div>
      <div className="yellowline-Hr  position-absolute line-20"></div>
      <div className="yellowline-Vr  position-absolute line-21"></div>
      <div className="yellowline-Hr  position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-25"></div>
      <div className="yellowline-Vr   position-absolute line-26"></div>
      <div className="yellowline-Hr   position-absolute line-27"></div>
      <div className="yellowline-Hr   position-absolute line-28"></div>
      <div className="pipeVr position-absolute line-29"></div>
      <div className="pipeVr position-absolute line-30"></div>
      <div className="pipeVr position-absolute line-31"></div>
      <div className="pipeVr position-absolute line-32"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-33"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-34"></div>
      <div className="yellowline-Hr position-absolute line-35"></div>
      <div className="yellowline-Hr position-absolute line-36"></div>
      <div className="yellowline-Vr upArrow position-absolute line-37"></div>
      <div className="yellowline-Vr upArrow position-absolute line-38"></div>
      <div className="yellowline-Hr position-absolute line-39"></div>
      <div className="yellowline-Hr position-absolute line-40"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-41"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-42"></div>
    </div>
  );
};

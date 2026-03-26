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

export const KilnBurnerRawanL2 = () => {
  return (
    <div className="KilnBurnerRawanL2 w-100 h-100 position-relative">
      <div className="img-95 position-absolute single-text-1"></div>
      <div className="position-absolute single-text-2 d-flex flex-column">
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "Swirl Air",
            }}
          />
          <div className="mt-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "482.LD1",
              }}
            />
            <BlueContainerWithDynamicBorder
              useClass={useBorderTagsColorStatus("482LD1/M01")}
              isClickable={true}
              tagLabel="482LD1/M01"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "482.FN1",
              }}
            />

            <div className="connector-icon mt-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("482FN1/M01")}`}
                label="482FN1/M01"
                text="F"
              />
            </div>
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          </div>
          <div>
            <BlackContainer
              data={{
                label: "482FN1/SAA",
                useClass: "greenTxt ",
                unit: "Rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "482FN1/IAA",
                useClass: "greenTxt mt-2",
                unit: "Amp",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "Swirl Air",
            }}
          />
          <div className="mt-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "482.LD2",
              }}
            />
            <BlueContainerWithDynamicBorder
              useClass={useBorderTagsColorStatus("482LD2/M01")}
              isClickable={true}
              tagLabel="482LD2/M01"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "482.FN2",
              }}
            />

            <div className="connector-icon mt-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("482FN2/M01")}`}
                label="482FN2/M01"
                text="F"
              />
            </div>
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
          </div>
          <div>
            <BlackContainer
              data={{
                label: "482FN2/SAA",
                useClass: "greenTxt ",
                unit: "Rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "482FN2/IAA",
                useClass: "greenTxt mt-2",
                unit: "Amp",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex flex-column">
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "Jet Air",
            }}
          />

          <div>
            <div className="connector-icon mt-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("482BL7/M01")}`}
                label="482BL7/M01"
                text="F"
              />
            </div>
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3",
                label: "482.BL7",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "482BL7/SAA",
                useClass: "greenTxt ",
                unit: "Rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "482BL7/IAA",
                useClass: "greenTxt mt-2",
                unit: "Amp",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Air Temperature",
              }}
            />
            <BlackContainer
              data={{
                label: "482BL7/482BL7_AIRTEMP",
                useClass: "greenTxt mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "Jet Air",
            }}
          />

          <div>
            <div className="connector-icon mt-1">
              <MotorCircleDigitalTag
                className={`dot digital-tag ${useColorStatus("482BL6/M01")}`}
                label="482BL6/M01"
                text="F"
              />
            </div>
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>

            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-3",
                label: "482.BL6",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "482BL6/SAA",
                useClass: "greenTxt ",
                unit: "Rpm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "482BL6/IAA",
                useClass: "greenTxt mt-2",
                unit: "Amp",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "482BL6/482BL6_AIRTEMP",
                useClass: "greenTxt mt-4",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Air Temperature",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex flex-column">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "482.BVE",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("482BVE/V01")}
            isClickable={true}
            tagLabel="482BVE/V01"
          />
        </div>
        <div className=" d-flex ml-2">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
              "482BVD/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
              "482BVD/V01"
            )}`}
            label="482BVD/V01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-1 mb-2",
              label: "482.BVD",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <BlackContainer
          data={{
            label: "482BU1/PTP1",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "482BU1/PTP2",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "482BU1/PTP4",
            useClass: "greenTxt mt-1",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-6 box-1 p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Burner Carriage",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "462DD1 M01",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot ml-3 digital-tag ${useColorStatus("482DD1/M01")}`}
            label="482DD1/M01"
            text="M"
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "462DD1 M02",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot ml-3 digital-tag ${useColorStatus("482DD1/M02")}`}
            label="482DD1/M02"
            text="M"
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "462DD1 M03",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot ml-3 digital-tag ${useColorStatus("482DD1/M03")}`}
            label="482DD1/M03"
            text="M"
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "462DD1 M04",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot ml-3 digital-tag ${useColorStatus("482DD1/M04")}`}
            label="482DD1/M04"
            text="M"
          />
        </div>
      </div>

      <div className="position-absolute single-text-7 box-1 p-2">
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "Oil Return pressure",
            }}
          />
          <BlackContainer
            data={{
              label: "482BU1/PTP5",
              useClass: "greenTxt mt-2 ml-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "Air line pressure",
            }}
          />
          <BlackContainer
            data={{
              label: "482BU1/PTP6",
              useClass: "greenTxt mt-2 ml-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "Return line Valve pos",
            }}
          />
          <BlackContainer
            data={{
              label: "482BU1/RV_ZTA",
              useClass: "greenTxt mt-2 ml-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "Flow control Valve",
            }}
          />
          <BlackContainer
            data={{
              label: "482BU1/FCU_ZTA",
              useClass: "greenTxt mt-2 ml-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "Main Line flow",
            }}
          />
          <BlackContainer
            data={{
              label: "482BU1/FTA",
              useClass: "greenTxt mt-2 ml-3",
              unit: "lph",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "Oil Tank Level",
            }}
          />
          <BlackContainer
            data={{
              label: "482BU1/LTP",
              useClass: "greenTxt mt-2 ml-3",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex flex-column">
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "482.FN3",
            }}
          />
          <div className="connector-icon mt-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("482FN3/M01")}`}
              label="482FN3/M01"
              text="F"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Cooling Air",
              }}
            />
          </div>
        </div>
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "482.FN4",
            }}
          />
          <div className="connector-icon mt-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("482FN4/M01")}`}
              label="482FN4/M01"
              text="F"
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Stand By Fan",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Pulverised Coal Conveying Air",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Oil Burner for Start Up",
          }}
        />
      </div>

      <div className="yellowline-Vr  position-absolute line-1"></div>
      <div className="yellowline-Hr  position-absolute line-2"></div>
      <div className="yellowline-Hr  position-absolute line-3"></div>
      <div className="yellowline-Vr upArrow position-absolute line-4"></div>
      <div className="yellowline-Hr  position-absolute line-5"></div>
      <div className="yellowline-Vr  position-absolute line-6"></div>
      <div className="yellowline-Hr  position-absolute line-7"></div>
      <div className="yellowline-Hr  position-absolute line-8"></div>
      <div className="yellowline-Vr  position-absolute line-9"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-10"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-11"></div>
      <div className="yellowline-Hr  position-absolute line-12"></div>
      <div className="yellowline-Hr  position-absolute line-13"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-14"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-15"></div>
    </div>
  );
};

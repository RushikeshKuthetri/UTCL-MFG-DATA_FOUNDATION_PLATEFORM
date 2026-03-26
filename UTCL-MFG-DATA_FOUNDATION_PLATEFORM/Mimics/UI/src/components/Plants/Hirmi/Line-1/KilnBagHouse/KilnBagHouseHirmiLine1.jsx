import {
  useBorderTagsColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
} from "../../../../../utils";
import {
  BlackContainer,
  BlueContainerWithDynamicBorder,
  MimicCaret,
  MotorCircleDigitalTag,
  TextColumn,
  TextContainerWithWrapWord,
  TopLeftBox,
} from "../../../../index";

import * as tagsData from "../../../../../data/hirmi/Line-1/KilnBagHouse/hirmiKilnBagHouseL1TextColumn";

export const KilnBagHouseHirmiLine1 = () => {
  return (
    <div className="kilnbag-house-hirmi-l1 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 asset-72"></div>
      <div className="position-absolute single-text-2 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "J1S12"
          )}`}
          label="J1S12"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "J1S14"
          )}`}
          label="J1S14"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "J1S16"
          )}`}
          label="J1S16"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "J1S18"
          )}`}
          label="J1S18"
        />
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "J1P11A1_P2",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A1_P3",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "J1P11A1",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A1_DP1",
              useClass: "greenTxt mb-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "J1P11A2_P2",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A2_P3",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "J1P11A2",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A2_DP1",
              useClass: "greenTxt mb-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "J1P11A3_P2",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A3_P3",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "J1P11A3",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A3_DP1",
              useClass: "greenTxt mb-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "J1P11A4_P2",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A4_P3",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "J1P11A4",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A4_DP1",
              useClass: "greenTxt mb-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "J1S12",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "J1S14",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "J1S16",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "J1S18",
          }}
        />
      </div>
      <div className="position-absolute single-text-5 asset-72"></div>
      <div className="position-absolute single-text-6 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "J1S22"
          )}`}
          label="J1S22"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "J1S24"
          )}`}
          label="J1S24"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "J1S26"
          )}`}
          label="J1S26"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "J1S28"
          )}`}
          label="J1S28"
        />
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "J1P11A5_P2",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A5_P3",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "J1P11A5",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A5_DP1",
              useClass: "greenTxt mb-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "J1P11A6_P2",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A6_P3",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "J1P11A6",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A6_DP1",
              useClass: "greenTxt mb-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "J1P11A7_P2",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A7_P3",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "J1P11A7",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A7_DP1",
              useClass: "greenTxt mb-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "J1P11A8_P2",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A8_P3",
              useClass: "greenTxt mb-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "J1P11A8",
            }}
          />
          <BlackContainer
            data={{
              label: "J1P11A8_DP1",
              useClass: "greenTxt mb-1",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "J1S22",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "J1S24",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "J1S26",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "J1S28",
          }}
        />
      </div>
      <div className="position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "RM FAN",
          }}
        />
      </div>
      <div className="position-absolute single-text-10 chimni-red"></div>
      <div className="position-absolute single-text-11">
        <TextColumn
          useClass="border p-2"
          list={tagsData.hirmiKilnBagHouseL1TextColumn8}
        />
        <TextColumn
          useClass="border p-2 mt-1"
          list={tagsData.hirmiKilnBagHouseL1TextColumn9}
          text="JIP09"
          text2Class="text-dark mb-1"
        />
      </div>
      <TopLeftBox
        parentDivClass="single-text-12 position-absolute border p-2"
        useClass="d-flex justify-content-between"
        list={tagsData.hirmiKilnBagHouseL1TextColumn2}
        headText={{
          text: "Temp.>260 deg.Bag house trips",
          class: "text-dark mb-2",
        }}
      />
      <TopLeftBox
        parentDivClass="single-text-13 position-absolute border p-2"
        useClass="d-flex justify-content-between"
        list={tagsData.hirmiKilnBagHouseL1TextColumn3}
      />
      <TopLeftBox
        parentDivClass="single-text-14 position-absolute"
        useClass="d-flex justify-content-between"
        list={tagsData.hirmiKilnBagHouseL1TextColumn1}
      />
      <TopLeftBox
        parentDivClass="single-text-15 position-absolute border p-2"
        useClass="d-flex justify-content-between"
        list={tagsData.hirmiKilnBagHouseL1TextColumn10}
        headText={{
          text: "HEAT LOSS DIFF",
          class: "text-dark mb-2",
        }}
      />
      <div className="single-text-16 position-absolute border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "B/H STACK EMISSION",
          }}
        />
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-between">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-3",
                label: "SO2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-3",
                label: "NO",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "O2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "TEMP",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "PRES",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ",
                label: "FLOW",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-1",
                label: "AIR PR",
              }}
            />
          </div>
          <div className="d-flex flex-column justify-content-between">
            <BlackContainer
              data={{
                label: "J1P09AX2_SOx",
                useClass: "greenTxt mb-2",
                unit: "ppm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "J1P09AX2_SOx_CPCB",
                useClass: "greenTxt mb-2",
                unit: "mg/Nm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "J1P09AX2_NOx",
                useClass: "greenTxt mb-2",
                unit: "ppm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "J1P09AX2_NOX_ECS_VALUE",
                useClass: "greenTxt mb-2",
                unit: "mg/Nm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "J1P09AX2_O2",
                useClass: "greenTxt mb-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "J1P09AX2_T1",
                useClass: "greenTxt mb-2",
                unit: "degC",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "J1P09AX2_P1",
                useClass: "greenTxt mb-2",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "J1P09AX2_F1",
                useClass: "greenTxt mb-2",
                unit: "Nm³/h",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "J1P09AX2_AIR_PR_STACK",
                useClass: "greenTxt mb-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex flex-column align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "Emergency Dilution",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Air Damper",
          }}
        />
      </div>
      <div className="position-absolute single-text-18 d-flex  align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "ACTUAL DP",
          }}
        />
        <BlackContainer
          data={{
            label: "J1P11_DP2",
            useClass: "greenTxt mb-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "DP_CALCULATED5_8",
            useClass: "greenTxt mb-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "CALCULATED DP-A5-A8>180 fan trips",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-19 d-flex flex-column"
        list={tagsData.hirmiKilnBagHouseL1TextColumn7}
      />
      <div className="single-text-20 position-absolute d-flex border p-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BH COMP DEW TEMP",
          }}
        />
        <BlackContainer
          data={{
            label: "BH_COMP_DEW_T",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-21 d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "ACTUAL DP",
          }}
        />
        <BlackContainer
          data={{
            label: "J1P11_DP1",
            useClass: "greenTxt mb-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "DP_CALULATED1_4",
            useClass: "greenTxt mb-2",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "CALCULATED DP-A1-A4>180 fan trips",
          }}
        />
      </div>
      <TopLeftBox
        parentDivClass="single-text-23 position-absolute"
        useClass="d-flex justify-content-between"
        list={tagsData.hirmiKilnBagHouseL1TextColumn5}
      />
      <div className="position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "J1P09 RESTRICTED SETPOINT VALUE",
          }}
        />
        <BlackContainer
          data={{
            label: "J1P09_Y1_RESTRICT_VAL",
            useClass: "greenTxt mt-1 mx-auto",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="single-text-25 position-absolute d-flex">
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block grey-color-caret`}
        />
      </div>
      <div className="position-absolute single-text-26 d-flex flex-column align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "STACK",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "EMISSION",
          }}
        />
        <BlackContainer
          data={{
            label: "J1P09_AX1",
            useClass: "greenTxt mt-1",
            unit: "mg/Nm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BH ROOF TEMP",
          }}
        />
        <BlackContainer
          data={{
            label: "J1P11_BH_ROOF_TEMP",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TopLeftBox
        parentDivClass="single-text-28 position-absolute"
        useClass="d-flex justify-content-between"
        list={tagsData.hirmiKilnBagHouseL1TextColumn6}
      />
      <div className="position-absolute single-text-29">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("J1P09")} mb-2`}
          label="J1P09"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "J1P09",
          }}
        />
      </div>
      <div className="single-text-30 position-absolute">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("J1K19_EDD_CMD_IND")}
          isClickable={true}
          tagLabel="J1K19_EDD_CMD_IND"
        />
      </div>
      <div className="border single-text-32 position-absolute p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-2 mb-2",
            label: "BAGHOUSE COMPRESSORS",
          }}
        />
        <div className="d-flex justify-content-between p-1">
          <div className="d-flex border p-1">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-2 mt-1",
                  label: "J1BHCOMP1",
                }}
              />
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "J1BHCOMP1"
                )}`}
                label="J1BHCOMP1"
              />
            </div>
            <TextColumn
              useClass="ml-1"
              list={tagsData.hirmiKilnBagHouseL1TextColumn4}
            />
          </div>
          <div className="ml-1">
            <div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-3 ml-1",
                  label: "J1BHCOMP2",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "J1BHCOMP2"
                )} mb-2`}
                label="J1BHCOMP2"
              />
              <MotorCircleDigitalTag
                className={`text-dark ml-3 p-1 digital-tag ${useColorStatus(
                  "COMP2_SEL"
                )}`}
                label="COMP2_SEL"
                text="S"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="single-text-34 position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-1",
            label: "J1K19",
          }}
        />
      </div>
      <div className="single-text-36 position-absolute d-flex flex-column">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("J1J22")}
          isClickable={true}
          tagLabel="J1J22"
        />
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("J1J23")}
          isClickable={true}
          tagLabel="J1J23"
        />
      </div>
      <div className="single-text-37 position-absolute">
        <BlackContainer
          data={{
            label: "J1J05_P1",
            useClass: "greenTxt mb-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-9"></div>
      <div className="yellowline-Vr upArrow position-absolute line-10"></div>
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Vr position-absolute line-12"></div>
      <div className="yellowline-Vr position-absolute line-13"></div>
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeHr position-absolute pipe-3"></div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
    </div>
  );
};

import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  BlueContainerWithDynamicBorder,
} from "../../../../index";
import {
  useBorderTagsColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
  useImgColorStatus,
} from "../../../../../utils";

export const StackDataRawanLine1 = () => {
  return (
    <div className="StackDataRawanLine1 w-100 h-100 position-relative">
      <div className="img-83 position-absolute single-text-1">
        <div className="d-flex mt-2 gap-1">
          <BlackContainer
            data={{
              label: "47BF1PT2/MODULE-1_DP",
              useClass: "greenTxt mt-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47BF1PT3/MODULE-2_DP",
              useClass: "greenTxt mt-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47BF1PT4/MODULE-3_DP",
              useClass: "greenTxt mt-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47BF1PT5/MODULE4-_DP",
              useClass: "greenTxt mt-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47BF1PT6/MODULE5-_DP",
              useClass: "greenTxt mt-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47BF1PT7/MODULE6-_DP",
              useClass: "greenTxt mt-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-2 d-flex">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "5R_47AC1/M01"
          )}`}
          label="5R_47AC1/M01"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "5R_47AC2/M01"
          )}`}
          label="5R_47AC2/M01"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "5R_47AC3/M01"
          )}`}
          label="5R_47AC3/M01"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "5R_47AC4/M01"
          )}`}
          label="5R_47AC4/M01"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "5R_47AC5/M01"
          )}`}
          label="5R_47AC5/M01"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "5R_47AC6/M01"
          )}`}
          label="5R_47AC6/M01"
        />
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "47AC1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "47AC2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "47AC3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "47AC4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "47AC5",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "47AC6",
          }}
        />
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div className="mt-4">
          <BlackContainer
            data={{
              label: "47BF1TE1/TE1",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47BF1TE2/TE2",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47BF1TE3/TE3",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47BF1TE3/TE3",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47BF1PT8/COMP_AIR_PRESS",
              useClass: "greenTxt mt-1",
              unit: "kg/cm²",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="connector-icon d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("3K_47FN1/M01")}`}
              label="3K_47FN1/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "47FN1",
            }}
          />
          <BlackContainer
            data={{
              label: "47FN1SI/SPEED",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47FN1II/CURRENT",
              useClass: "greenTxt mt-1",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47FN1XA1/VIB",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47FN1YA1/VIB",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47FN1XA2/VIB",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47FN1YA2/VIB",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
              "5R_47SC1/M01"
            )}`,
            firstCircleText: "M",
            firstCircleLabel: "5R_47SC1/M01",
          }}
          text={{ useClass: "text-dark", label: "47SC1" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
              "5R_47SC2/M01"
            )}`,
            firstCircleText: "M",
            firstCircleLabel: "5R_47SC2/M01",
          }}
          text={{ useClass: "text-dark", label: "47SC2" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
              "5R_47SC3/M01"
            )}`,
            firstCircleText: "M",
            firstCircleLabel: "5R_47SC3/M01",
          }}
          text={{ useClass: "text-dark", label: "47SC3" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
            secondCircleText: "",
          }}
        />
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "47DG1",
            }}
          />
          <MotorCircleDigitalTag
            className={`gray-green-red-img ml-1 digital-tag ${useImgColorStatus(
              "5R_47DG1/K01"
            )}`}
            label="5R_47DG1/K01"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "47DG2",
            }}
          />
          <MotorCircleDigitalTag
            className={`gray-green-red-img ml-1 digital-tag ${useImgColorStatus(
              "5R_47DG2/K01"
            )}`}
            label="5R_47DG2/K01"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "47DG3",
            }}
          />
          <MotorCircleDigitalTag
            className={`gray-green-red-img ml-1 digital-tag ${useImgColorStatus(
              "5R_47DG2/K01"
            )}`}
            label="5R_47DG2/K01"
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "47SC4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
            "5R_47SC4/M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "5R_47SC4/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "47SC5" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
            "5R_47SC5/M02"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "5R_47SC5/M02",
        }}
      />
      <div className="position-absolute single-text-9 d-flex">
        <BlackContainer
          data={{
            label: "47BF1PT1/DP",
            useClass: "greenTxt mt-1",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <div className="text-center d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BH PURGING",
            }}
          />
          <div className="ml-2">
            <BlueContainerWithDynamicBorder
              useClass={useBorderTagsColorStatus("3K_47BH1/RM_KILN_BH")}
              isClickable={true}
              tagLabel="3K_47BH1/RM_KILN_BH"
            />
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "47BF1PTM/DRAFT",
              useClass: "greenTxt mt-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47BF1TE5/OUTLET_TEMP",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-10">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "47DA1",
          }}
        />
        <div className="ml-2">
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("7R_47DA1/K01")}
            isClickable={true}
            tagLabel="7R_47DA1/K01"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FRESH AIR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "47BF1ED1",
          }}
        />
        <div className="ml-2 mt-4">
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("3K_47BH1/ED1")}
            isClickable={true}
            tagLabel="3K_47BH1/ED1"
          />
        </div>
      </div>
      <div className="position-absolute single-text-12">
        <div className="chimni-red"></div>
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div>
          <div className="d-flex ml-4">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KB_47DAA/K01")} `}
              label="KB_47DAA/K01"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "47DAA",
              }}
            />
          </div>
          <div className="connector-icon  mt-4 d-flex justify-content-center align-items-center">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KB_47FN4/M01")}`}
              label="KB_47FN4/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "47FN4",
            }}
          />
          <BlackContainer
            data={{
              label: "47FN4XA1/VIB",
              useClass: "greenTxt mt-1",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47FN4JI/POWER",
              useClass: "greenTxt mt-1",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47FN4JI/CURRENT",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47BE1II1/AMP",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "47DA4",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("KB_47DA4/K01")} `}
            label="KB_47DA4/K01"
          />
          <BlackContainer
            data={{
              label: "47DA4ZT1/POS",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47FN4SI/RPM",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div className="containerImage">
          <div className="yellowline-Vr downArrow line-1"></div>
        </div>

        <div className="containerImage">
          <div className="yellowline-Vr downArrow line-1"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-15 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "47ACC",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img ml-2 digital-tag ${useFanImgTagsColorStatus(
              "KB_47ACC/M01"
            )}`}
            label="KB_47ACC/M01"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "47ACD",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img ml-2 digital-tag ${useFanImgTagsColorStatus(
              "KB_47ACD/M01"
            )}`}
            label="KB_47ACD/M01"
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-16"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "47SCB" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
            "KB_47SCB/M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "KB_47SCB/M01",
        }}
      />
      <div className="position-absolute single-text-17">
        <div className="containerImage  text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "47TK1",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "BAG HOUSE IL DRAFT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-4",
            label: "BAG HOUSE",
          }}
        />
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "47WP1",
            }}
          />
          <div className="connector-icon ml-2 ">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("WP_47WP1/M01")}`}
              label="WP_47WP1/M01"
              text="M"
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("WP_47WP2/M01")}`}
              label="WP_47WP2/M01"
              text="M"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "47WP2",
            }}
          />
        </div>
      </div>
      <div className="drumContainer position-absolute single-text-19"></div>
      <div className="position-absolute single-text-20">
        <BlackContainer
          data={{
            label: "47CT1TE2/TEMP",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "47CT1PT2/DRAFT",
            useClass: "greenTxt mt-1",
            unit: "MBAR",
            unitColor: "unitColor",
          }}
        />

        <div className="mt-5">
          <BlackContainer
            data={{
              label: "47CT1TT3/TEMP",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47CT1TE1/TEMP",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "42SK1XA1/STACK",
              useClass: "greenTxt mt-1",
              unit: "mg/mm³",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47CT1PT1/DRAFT",
              useClass: "greenTxt mt-1",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO RAW MILL",
          }}
        />
        <BlackContainer
          data={{
            label: "47DA8ZT1/POS",
            useClass: "greenTxt mt-1",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FRESH AIR",
            }}
          />
          <div className="d-flex mt-2">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KB_47DA8/K02")}`}
              label="KB_47DA8/K02"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-2",
                label: "47DA8",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <div className="mt-5 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "47DA8",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("KB_47DA8/K03")}`}
            label="KB_47DA8/K03"
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "47DA7ZT1/POS",
              useClass: "greenTxt mt-5",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "44DA3ZT1/POS",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "44PH1TED/TEMP",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47BF4TEA/TEMP",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "47BF4TE7/TEMP",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "47CN1",
            }}
          />
          <div className="yellowline-Vr downArrow line-1"></div>
        </div>

        <div className="containerImage ml-4 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "47CN2",
            }}
          />
          <div className="yellowline-Vr downArrow line-1"></div>
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-24"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "47SC8" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus(
            "6C_47SC8/M01"
          )}`,
          secondCircleText: "",
          secondCircleLabel: "6C_47SC8/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-25"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "47SC9" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
            "6C_47SC9/M01"
          )}`,
          secondCircleText: "",
          secondCircleLabel: "6C_47SC9/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-26"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "47SC7" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
            "5R_47SC7/M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "5R_47SC7/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-27"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("5R_47SC6/M01")}`,
          firstCircleText: "",
          firstCircleLabel: "5R_47SC6/M01",
        }}
        text={{ useClass: "text-dark", label: "47SC6" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus(
            "5R_47SC6/M01"
          )}`,
          secondCircleText: "",
          secondCircleLabel: "5R_47SC6/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-28"
        firstCircle={{
          firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
            "5R_47CV6/M01"
          )}`,
          firstCircleText: "M",
          firstCircleLabel: "5R_47CV6/M01",
        }}
        text={{ useClass: "text-dark", label: "47CV6" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
        }}
      />
      <div className=" position-absolute single-text-29 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "47AC7",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img ml-2 digital-tag ${useFanImgTagsColorStatus(
            "5R_47AC7/M01"
          )}`}
          label="5R_47AC7/M01"
        />
      </div>
      <div className="pipe position-absolute single-text-30"></div>
      <div className="position-absolute single-text-31 d-flex">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("5R_47BE1/M01")}`}
          label="5R_47BE1/M01"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "47BE1",
          }}
        />
      </div>
      <div className="position-absolute single-text-32">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "47HP3",
            }}
          />
          <div className="yellowline-Vr downArrow line-1"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-33 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "47AC9",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img ml-2 digital-tag ${useFanImgTagsColorStatus(
            "5R_47AC9/M01"
          )}`}
          label="5R_47AC9/M01"
        />
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-34" />
      <div className="position-absolute single-text-35 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "47_47BL3/M01"
            )}`}
            label="47_47BL3/M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "47BL3",
            }}
          />
          <div className="yellowline-Vr upArrow line-1"></div>
        </div>
        <div className="text-center ml-2">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "4R_47BL4/M01"
            )}`}
            label="4R_47BL4/M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "47BL4",
            }}
          />
          <div className="yellowline-Vr upArrow line-1"></div>
        </div>
      </div>
      <div className="text-center position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "47SGE",
          }}
        />
        <div className="ml-2 mt-2">
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("5R_47SGE/K01")}
            isClickable={true}
            tagLabel="5R_47SGE/K01"
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-37"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "47CV2" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
            "5R_47CV2/M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "5R_47CV2/M01",
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-38" />
      <div className="position-absolute single-text-39 d-flex">
        <div className="text-center ml-2">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("NA")}`}
            label="NA"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "47BL1",
            }}
          />
          <div className="yellowline-Vr upArrow line-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-40 d-flex">
        <div className="text-center ml-2">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "KB_47BL5/M01"
            )}`}
            label="KB_47BL5/M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "47BL5",
            }}
          />
          <div className="yellowline-Vr upArrow line-1"></div>
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-41"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark", label: "47SCA" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
            "5R_47SCA/M01"
          )}`,
          secondCircleText: "M",
          secondCircleLabel: "5R_47SCA/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-42"
        firstCircle={{
          firstCircleClass: `dot digital-tag dot-rotat ${useColorStatus(
            "9K_47CV3/M01"
          )}`,
          firstCircleText: "M",
          firstCircleLabel: "9K_47CV3/M01",
        }}
        text={{ useClass: "text-dark", label: "47CV3" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "",
        }}
      />
      <div className="text-center position-absolute single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "47SGD",
          }}
        />
        <div className="ml-2">
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("5R_47SGD/V01")}
            isClickable={true}
            tagLabel="5R_47SGD/V01"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-44 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "47SGC",
          }}
        />
        <div className="ml-2">
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("5R_47SGC/K01")}
            isClickable={true}
            tagLabel="5R_47SGC/K01"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-45 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "47SGG",
          }}
        />
        <div className="ml-2">
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("KB_47SGG/V01")}
            isClickable={true}
            tagLabel="KB_47SGG/V01"
          />
        </div>
      </div>
      <div className="text-center position-absolute single-text-46 d-flex">
        <BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("KB_47SGH/V01")}
          isClickable={true}
          tagLabel="KB_47SGH/V01"
        />
      </div>
      <div className="text-center position-absolute single-text-47 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "47SGA",
          }}
        />
        <div className="ml-2">
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("5R_47SGA/K01")}
            isClickable={true}
            tagLabel="5R_47SGA/K01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-48 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "47DA4ZT1/POS",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <div className="connector-icon mt-4">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("KB_47DA4/K01")}`}
              label="KB_47DA4/K01"
              text="F"
            />
          </div>
        </div>
        <div>
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("KB_47DA4/K01")}
            isClickable={true}
            tagLabel="KB_47DA4/K01"
          />
          <BlackContainer
            data={{
              label: "47FN4XA1/VIB",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "44DA1ZT1/POS",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "47DA7ZT1/POS",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "44DA3ZT1/POS",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-49 box-1 p-1">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "DP",
            }}
          />
          <BlackContainer
            data={{
              label: "4R_47BFB/DP",
              useClass: "greenTxt ml-3",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "PT",
            }}
          />
          <BlackContainer
            data={{
              label: "4R_47BFBPT",
              useClass: "greenTxt ml-3",
              unit: "mmwc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "RPM",
            }}
          />
          <BlackContainer
            data={{
              label: "4R_47FNB/RPM",
              useClass: "greenTxt ml-3",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "AMP",
            }}
          />
          <BlackContainer
            data={{
              label: "4R_47FNBAMP",
              useClass: "greenTxt ml-3",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-50 d-flex">
        <div>
          <div className="connector-icon mt-4">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("4R_47FNB/M01")}`}
              label="4R_47FNB/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "47FNB",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "47BFB",
            }}
          />
          <div className="squareplustri mt-1 d-flex align-items-center justify-content-center ">
            <MotorCircleDigitalTag
              className={`square digital-tag position-absolute ${useColorStatus(
                "4R_47BFB/M01"
              )}`}
              label="4R_47BFB/M01"
            />
            <div className="yellowline-Vr downArrow line-1"></div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-51 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "47ACB",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img ml-2 digital-tag ${useFanImgTagsColorStatus(
            "4R_47ACB/M01"
          )}`}
          label="4R_47ACB/M01"
        />
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-52" />
      <div className="position-absolute single-text-53 d-flex">
        <div className="text-center ml-2">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "4R_47BL2/M01"
            )}`}
            label="4R_47BL2/M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "47BL2",
            }}
          />
          <div className="yellowline-Vr upArrow line-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-54 d-flex">
        <BlackContainer
          data={{
            label: "47VA1ZT1/POS",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RM_GCT_WATER_TANK/FT",
            useClass: "greenTxt mt-2",
            unit: "LPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-55 d-flex ">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("5R_47VA1/K01")} `}
          label="5R_47VA1/K01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "47VA1",
          }}
        />
      </div>
      <div className="position-absolute single-text-56 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "REJECT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "TO TRUCK",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-57">
        <div className="ml-2">
          <BlueContainerWithDynamicBorder
            useClass={useBorderTagsColorStatus("DHS_47SGF/K01")}
            isClickable={true}
            tagLabel="DHS_47SGF/K01"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ",
            label: "47SGF",
          }}
        />
      </div>
      <div className="position-absolute single-text-58  ">
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("KB_47DA9/K01")} `}
            label="KB_47DA9/K01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "47DA9",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "47BF4PT5/DRAFT",
            useClass: "greenTxt mt-4",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-59 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BH I/L DRAFT",
          }}
        />
        <BlackContainer
          data={{
            label: "47EP1_PT1/DRAFT1",
            useClass: "greenTxt ml-3",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeHr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeVr position-absolute pipe-11"></div>
      <div className="pipeVr position-absolute pipe-12"></div>
      <div className="pipeHr position-absolute pipe-13"></div>
      <div className="pipeVr position-absolute pipe-14"></div>
      <div className="pipeVr position-absolute pipe-15"></div>
      <div className="pipeHr position-absolute pipe-16"></div>
      <div className="pipeHr position-absolute pipe-17"></div>
      <div className="pipeVr position-absolute pipe-18"></div>
      <div className="pipeVr position-absolute pipe-19"></div>
      <div className="pipeVr position-absolute pipe-20"></div>
      <div className="pipeVr position-absolute pipe-21"></div>
      <div className="pipeHr position-absolute pipe-22"></div>

      <div className="yellowline-Vr position-absolute downArrow line-1"></div>
      <div className="yellowline-Vr position-absolute downArrow line-2"></div>
      <div className="yellowline-Vr position-absolute downArrow line-3"></div>
      <div className="yellowline-Vr position-absolute downArrow line-4"></div>
      <div className="yellowline-Vr position-absolute downArrow line-5"></div>
      <div className="yellowline-Vr position-absolute downArrow line-6"></div>
      <div className="yellowline-Vr position-absolute downArrow line-7"></div>
      <div className="yellowline-Vr position-absolute downArrow line-8"></div>
      <div className="yellowline-Vr position-absolute downArrow line-9"></div>
      <div className="yellowline-Vr position-absolute downArrow line-10"></div>
      <div className="yellowline-Vr position-absolute downArrow line-11"></div>
      <div className="yellowline-Vr position-absolute downArrow line-12"></div>
      <div className="yellowline-Vr position-absolute downArrow line-13"></div>
      <div className="yellowline-Vr position-absolute downArrow line-14"></div>
      <div className="yellowline-Vr position-absolute downArrow line-15"></div>
      <div className="yellowline-Vr  position-absolute upArrow line-16"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-17"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-18"></div>
      <div className="yellowline-Vr  position-absolute  line-19"></div>
      <div className="yellowline-Vr  position-absolute  line-20"></div>
      <div className="yellowline-Hr  position-absolute  line-21"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-22"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-23"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-24"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-25"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-26"></div>
      <div className="yellowline-Vr  position-absolute  line-27"></div>
      <div className="yellowline-Hr  position-absolute  line-28"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-29"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-30"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-31"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-32"></div>
      {/* <div className="yellowline-Vr  position-absolute downArrow line-33"></div> */}
      <div className="yellowline-Vr  position-absolute downArrow line-34"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-35"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-36"></div>
      <div className="yellowline-Vr  position-absolute downArrow line-37"></div>
      <div className="yellowline-Vr  position-absolute upArrow line-38"></div>
      <div className="yellowline-Hr  position-absolute  line-39"></div>
    </div>
  );
};

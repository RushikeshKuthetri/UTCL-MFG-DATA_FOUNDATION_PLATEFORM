import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MimicCaret,
  MotorCircleDigitalTag,
  BlueContainerWithDynamicBorder,
} from "../../../../index";
import {
  useBorderTagsColorStatus,
  useCaretColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
  useImgColorStatus,
} from "../../../../../utils";

export const CoalMillRawanL2 = () => {
  return (
    <div className="CoalMillRawanL2 w-100 h-100 position-relative">
      <div className="d-flex position-absolute pipe-1">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("L22RE1/M01")}`}
          label="L22RE1/M01"
        />
        <PipeWithCircles
          parentDivClass="hpipecircle ml-3"
          firstCircle={{
            firstCircleClass: "dot grey-color",
          }}
          text={{ useClass: "text-dark", label: "L22BC3" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus(
              "L22BC3/M01"
            )}`,
            secondCircleLabel: "L22BC3/M01",
            secondCircleText: "M",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-2"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "L22MS1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("L22MS1/M01")}`,
          secondCircleLabel: "L22MS1/M01",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-3"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "L22BC4" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("L22BC4/M01")}`,
          secondCircleLabel: "L22BC4/M01",
          secondCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-1 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "L22DG1",
          }}
        />
        <MotorCircleDigitalTag
          className={`gray-green-red-img digital-tag ml-2 ${useImgColorStatus(
            "L22DG1/V"
          )}`}
          label="L22DG1/V"
        />
      </div>
      <BlackContainer
        data={{
          label: "L22BC3/IA",
          useClass: "greenTxt position-absolute single-text-2",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-3">
        <BlackContainer
          data={{
            label: "SLAG_FEEDING/HP2_PT1",
            useClass: "greenTxt mb-3",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-4 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "L22BC1/IA",
              useClass: "greenTxt ml-4",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "L22BF3",
            }}
          />
          <BlackContainer
            data={{
              label: "L22BF3/DPTP",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex align-items-center justify-content-cente mt-2">
            <div className="squareplustri text-center">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-2 ${useColorStatus(
                  "L22BF3/M01"
                )} `}
                label="L22BF3/M01"
              />
              <div className="yellowline-Vr downArrow line-1 ml-auto"></div>
            </div>
          </div>
          <div className="d-flex mt-3 single-text-15">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-1",
                label: "L22RA3",
              }}
            />
            <MotorCircleDigitalTag
              className={`circle-img ml-2 digital-tag ${useFanImgTagsColorStatus(
                "L22RA3/M01"
              )}`}
              label="L22RA3/M01"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="yellowline-Vr upArrow position-absolute line-2"></div>
          <div className="yellowline-Hr  position-absolute line-3"></div>
          <div className="connector-icon">
            <div className="dot grey-color">F</div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "L22FN3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-5 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "L22FN3/IA",
              useClass: "greenTxt ml-4",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "L42BF2",
            }}
          />
          <BlackContainer
            data={{
              label: "L22BF2/DPTP",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex align-items-center justify-content-cente mt-2">
            <div className="squareplustri text-center">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-2 ${useColorStatus(
                  "L42FN3/IA"
                )} `}
                label="L42FN3/IA"
              />
              <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
            </div>
          </div>
          <div className="d-flex mt-3 single-text-15 ">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "L42RA2/M01"
              )}`}
              label="L42RA2/M01"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark  mt-1 ml-2",
                label: "L42RA2",
              }}
            />
          </div>
        </div>
        <div className=" mt-5">
          <div className="yellowline-Vr upArrow position-absolute line-2"></div>
          <div className="yellowline-Hr  position-absolute line-3"></div>
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot digital-tag  ${useColorStatus("L42FN3/M01")}`}
              label="L42FN3/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "L42FN3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-6 d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42HP2",
            }}
          />
          <BlackContainer
            data={{
              label: "L42HP2/WA",
              useClass: "greenTxt mt-1",
              unit: "Ton",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "PET",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "COAL",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <BlackContainer
          data={{
            label: "L22BC4/IA",
            useClass: "greenTxt mt-1",
            unit: "AM",
            unitColor: "unitColor",
          }}
        />
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "L42HP1/WA",
              useClass: "greenTxt mt-1",
              unit: "Tons",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42HP1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "US",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "COAL",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-7 d-flex">
        <BlackContainer
          data={{
            label: "L42WF1/TOTAL",
            useClass: "greenTxt mt-1",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "L42WF1/FRA",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42WF1/BELT$LOAD",
              useClass: "greenTxt mt-1",
              unit: "tph",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42HP4",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "REJ",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "HOPPER",
            }}
          />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "FOR CALIBRATION",
            }}
          />
          <BlackContainer
            data={{
              label: "L42HP4/WA",
              useClass: "greenTxt mt-1",
              unit: "TON",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "L42BC1/IA",
              useClass: "greenTxt mt-1 ml-3",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42WF2/FR",
              useClass: "greenTxt mt-1",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9 box-1 p-1">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "GB Oil Inlet Pres",
            }}
          />
          <BlackContainer
            data={{
              label: "L42GB1/PTA2",
              useClass: "greenTxt mt-1 ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "GB Oil Outlet Pres",
            }}
          />
          <BlackContainer
            data={{
              label: "L42GB1/PTA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 box-1 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info text-center p-1",
            label: "COAL MILL HYDRAULICS",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Tension Press",
            }}
          />
          <BlackContainer
            data={{
              label: "L42HT1/PTA1",
              useClass: "greenTxt mt-1 ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Liftting Press",
            }}
          />
          <BlackContainer
            data={{
              label: "L42HT1/PTA2",
              useClass: "greenTxt mt-1 ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Cyclinder-1 Pos",
            }}
          />
          <BlackContainer
            data={{
              label: "L42HT1_ZTA1/UM",
              useClass: "greenTxt mt-1 ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Cyclinder-2 Pos",
            }}
          />
          <BlackContainer
            data={{
              label: "L42HT1_ZTA2/UM",
              useClass: "greenTxt mt-1 ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Cyclinder-3 Pos",
            }}
          />
          <BlackContainer
            data={{
              label: "L42HT1_ZTA3/UM",
              useClass: "greenTxt mt-1 ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Avg Position",
            }}
          />
          <BlackContainer
            data={{
              label: "L42HT1_ZTA2/4/UM",
              useClass: "greenTxt mt-1 ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SV01-11.1",
              }}
            />
            <MimicCaret
              parentClass="tringle-item ml-1"
              firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV1/V"
              )}`}
              secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV1/V"
              )}`}
              label="L42HT1_SV1/V"
            />
          </div>
          <div className="d-flex ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SV06-27.1",
              }}
            />
            <MimicCaret
              parentClass="tringle-item  ml-1"
              firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV6/V"
              )}`}
              secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV6/V"
              )}`}
              label="L42HT1_SV6/V"
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SV02-11.2",
              }}
            />
            <MimicCaret
              parentClass="tringle-item ml-1"
              firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV2/V"
              )}`}
              secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV2/V"
              )}`}
              label="L42HT1_SV2/V"
            />
          </div>
          <div className="d-flex ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SV07-27.2",
              }}
            />
            <MimicCaret
              parentClass="tringle-item  ml-1"
              firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV7/V"
              )}`}
              secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV7/V"
              )}`}
              label="L42HT1_SV7/V"
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SV03-17.1",
              }}
            />
            <MimicCaret
              parentClass="tringle-item ml-1"
              firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV3/V"
              )}`}
              secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV3/V"
              )}`}
              label="L42HT1_SV3/V"
            />
          </div>
          <div className="d-flex ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SV08-28.1",
              }}
            />
            <MimicCaret
              parentClass="tringle-item  ml-1"
              firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV8/V"
              )}`}
              secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV8/V"
              )}`}
              label="L42HT1_SV8/V"
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SV04-17.2",
              }}
            />
            <MimicCaret
              parentClass="tringle-item ml-1"
              firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV4/V"
              )}`}
              secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV4/V"
              )}`}
              label="L42HT1_SV4/V"
            />
          </div>
          <div className="d-flex ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SV09-28.2",
              }}
            />
            <MimicCaret
              parentClass="tringle-item  ml-1"
              firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV9/V"
              )}`}
              secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV9/V"
              )}`}
              label="L42HT1_SV9/V"
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SV05-18",
              }}
            />
            <MimicCaret
              parentClass="tringle-item ml-1"
              firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV5/V"
              )}`}
              secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV5/V"
              )}`}
              label="L42HT1_SV5/V"
            />
          </div>
          <div className="d-flex ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "SV10-28.3",
              }}
            />
            <MimicCaret
              parentClass="tringle-item  ml-1"
              firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV10/V"
              )}`}
              secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
                "L42HT1_SV10/V"
              )}`}
              label="L42HT1_SV10/V"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-11 box-1 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info text-center p-1",
            label: "COAL MILL GEAR BOX LUB",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42LQ1M01",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag  ml-2  ${useColorStatus(
              "L42LQ1M01/M01"
            )}`}
            label="L42LQ1M01/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "L421LQ1M01/IA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42LQ1M02",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag  ml-2  ${useColorStatus(
              "L42LQ1M02/M01"
            )}`}
            label="L42LQ1M02/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "L421M02/IA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42LQ1M03",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag  ml-2  ${useColorStatus(
              "L42LQ1M03/M01"
            )}`}
            label="L42LQ1M03/M01"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag  ml-2  ${useColorStatus("L42GB1/M01")}`}
            label="L42GB1/M01"
            text="M"
          />
          <BlackContainer
            data={{
              label: "L421M03/IA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42LQ1_TTA1",
            }}
          />
          <BlackContainer
            data={{
              label: "L421M01/TTA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42LQ1_TTA2",
            }}
          />
          <BlackContainer
            data={{
              label: "L421M01/TTA2",
              useClass: "greenTxt mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42LQ1_FTA1",
            }}
          />
          <BlackContainer
            data={{
              label: "L421M01/FTA1",
              useClass: "greenTxt mt-1 ml-2",
              unit: "I/min",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42LQ1_FTA2",
            }}
          />
          <BlackContainer
            data={{
              label: "L421M01/FTA2",
              useClass: "greenTxt mt-1 ml-2",
              unit: "I/min",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-12 box-1 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info text-center p-1",
            label: "L42MD1",
          }}
        />

        <BlackContainer
          data={{
            label: "L42MD1/SA",
            useClass: "greenTxt mt-2 ml-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42MD1/IA",
            useClass: "greenTxt mt-2 ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42MD1/ZTA",
            useClass: "greenTxt mt-2 ml-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-13 box-1 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info text-center p-1",
            label: "CLASSIFIER GB LUBRICATION",
          }}
        />
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SHAFT UPPER BRG TEMP",
            }}
          />

          <BlackContainer
            data={{
              label: "L42SR1/TTA2",
              useClass: "greenTxt mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SHAFT MIDDLE BRG TEMP",
            }}
          />

          <BlackContainer
            data={{
              label: "L42SR1/TTA3",
              useClass: "greenTxt mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SHAFT LOWER BRG TEMP",
            }}
          />

          <BlackContainer
            data={{
              label: "L42SR1/TTA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "Classifier Lub oil TEMP",
            }}
          />

          <BlackContainer
            data={{
              label: "L42SR1M01/TTA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42LQ3_LS",
            }}
          />
          <BlackContainer
            data={{
              label: "L42LQ3M02/IA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42LQ3M01/IA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L42LQ2_LS",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag  ml-2  ${useColorStatus(
              "L42LQ2_LS/M01"
            )}`}
            label="L42LQ2_LS/M01"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "L42SR1/IA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42SR1/SA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "L42CM1/PTP3",
              useClass: "greenTxt mt-1 ml-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42CM1/TTP2",
              useClass: "greenTxt mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42SR1/ZTA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="bigContainer position-absolute single-text-15 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 ",
            label: "L42SR1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag  mt-4  ${useColorStatus("L42SR1/M01")}`}
          label="L42SR1/M01"
          text="M"
        />
        <BlackContainer
          data={{
            label: "L42CM1/DPTP",
            useClass: "greenTxt mt-5",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42GB1/XTA1",
            useClass: "greenTxt mt-3",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 ml-2 ",
            label: "L42FN1",
          }}
        />
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "L42FN1/M01"
            )}`}
            label="L42FN1/M01"
          />
        </div>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 mt-2 ml-2",
            label: "L42FN2",
          }}
        />
        <div className="connector-icon mt-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "L42FN2/M01"
            )}`}
            label="L42FN2/M01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "L42FN1/PTA1",
            useClass: "greenTxt mt-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42FN1/PTA2",
            useClass: "greenTxt mt-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42FN1/PTA3",
            useClass: "greenTxt mt-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <MotorCircleDigitalTag
            className={`line-circle mt-2 digital-tag ${useColorStatus(
              "L42MD1M02/M01"
            )}`}
            label="L42MD1M02/M01"
          />
          <div className=" ml-3 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "L42MD1",
              }}
            />
            <div className="img-86 d-flex mt-1 justify-content-center  align-items-center">
              <MotorCircleDigitalTag
                className={`dot digital-tag  mt-2 ${useColorStatus(
                  "L42MD1/M01"
                )}`}
                label="L42MD1/M01"
              />
            </div>
          </div>
        </div>
        <BlackContainer
          data={{
            label: "L42GB1/TTA1",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L42.BC1",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ml-3 ${useColorStatus(
              "L42BC1/M01"
            )} `}
            label="L42BC1/M01"
          />
        </div>
        <div className="d-flex mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L42RA1",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ml-3 ${useColorStatus(
              "L42RA1/M03"
            )}`}
            label="L42RA1/M03"
          />
        </div>
        <BlackContainer
          data={{
            label: "L42RA1/IA",
            useClass: "greenTxt mt-1",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />

        <MotorCircleDigitalTag
          className={`circle-img ml-2 mt-1 digital-tag ${useFanImgTagsColorStatus(
            "L42UT1/M01"
          )}`}
          label="L42UT1/M01"
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2",
            label: "L42UT1",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-2",
              label: "L42EX2",
            }}
          />
        </div>
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-2 ml-2",
              label: "L42EX1",
            }}
          />
        </div>
      </div>
      <div className="img-83 position-absolute single-text-20 d-flex">
        <div className="ml-3 mt-2">
          <BlackContainer
            data={{
              label: "L42BH1/TTP2",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42BH1/PTP2",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-auto mr-2 mt-2">
          <BlackContainer
            data={{
              label: "L42BH1/TTP1",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42BH1/PTP2",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-21 ">
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "L42RA4-J",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RA4/M01"
            )}`}
            label="L42RA4/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RA6/M01"
            )}`}
            label="L42RA6/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RA8/M01"
            )}`}
            label="L42RA8/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RAA/M01"
            )}`}
            label="L42RAA/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RAC/M01"
            )}`}
            label="L42RAC/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RAE/M01"
            )}`}
            label="L42RAE/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RAG/M01"
            )}`}
            label="L42RAG/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RAJ/M01"
            )}`}
            label="L42RAJ/M01"
          />
        </div>
        <div className="d-flex mt-3 gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "L42RA3-H",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RA3/M01"
            )}`}
            label="L42RA3/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RA5/M01"
            )}`}
            label="L42RA5/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RA7/M01"
            )}`}
            label="L42RA7/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RA9/M01"
            )}`}
            label="L42RA9/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RAB/M01"
            )}`}
            label="L42RAB/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RAD/M01"
            )}`}
            label="L42RAD/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RAF/M01"
            )}`}
            label="L42RAF/M01"
          />
          <MotorCircleDigitalTag
            className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus(
              "L42RAH/M01"
            )}`}
            label="L42RAH/M01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info text-center p-1",
              label: "MILL O/L GAS ANALYSER",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "MILL O/L 02",
              }}
            />

            <BlackContainer
              data={{
                label: "L42GA2_O2/O2",
                useClass: "greenTxt mt-1 ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "MILL 0/L CO",
              }}
            />
            <BlackContainer
              data={{
                label: "L42GA2_CO/CO",
                useClass: "greenTxt mt-1 ml-2",
                unit: "PPM",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="mt-1 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "SPC",
            }}
          />
          <BlackContainer
            data={{
              label: "EO_P8/SPECIFIC POWER",
              useClass: "greenTxt mt-1 ml-2",
              unit: "Kw/t",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23">
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info text-center p-1",
              label: "MILL WATER SPRAY SYSTEM",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "Flow Rate",
              }}
            />

            <BlackContainer
              data={{
                label: "L42WPA/FTA",
                useClass: "greenTxt mt-1 ml-2",
                unit: "Lph",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "Water Temp",
              }}
            />

            <BlackContainer
              data={{
                label: "L42WPA/TEA2",
                useClass: "greenTxt mt-1 ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="mt-1 ml-auto">
          <BlackContainer
            data={{
              label: "WATER INJECTION FLOW",
              useClass: "greenTxt mt-1 ml-2",
              unit: "l/hr",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42WP1/LVL",
              useClass: "greenTxt mt-1 ml-2",
              unit: "Mtr",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24">
        <MotorCircleDigitalTag
          className={`dot digital-tag mx-auto  ${useColorStatus("L22SC1/M02")}`}
          label="L22SC1/M02"
          text="M"
        />

        <BlueContainerWithDynamicBorder
          useClass={`mx-auto mt-4 ${useBorderTagsColorStatus("L42EF1/M01")}`}
          isClickable={true}
          tagLabel="L42EF1/M01"
        />
        <div className="box-1 mt-4 p-1 d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "COLD MILL RAC",
            }}
          />
          <MotorCircleDigitalTag
            className={`circle-img ml-2 digital-tag ${useFanImgTagsColorStatus(
              "432RAC/M01"
            )}`}
            label="432RAC/M01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div className="box-1 p-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CAL CULATED DP",
              }}
            />

            <BlackContainer
              data={{
                label: "L42BH1/DPTP1",
                useClass: "greenTxt mt-1 ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "ACTUAL DP",
              }}
            />

            <BlackContainer
              data={{
                label: "L42BH1/DPTP",
                useClass: "greenTxt mt-1 ml-2",
                unit: "mmWc",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info text-center p-1",
              label: "B.H O/L ANALYSER",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "B.H O/L CO",
              }}
            />

            <BlackContainer
              data={{
                label: "L42GA1_CO/CO",
                useClass: "greenTxt mt-1 ml-2",
                unit: "ppm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "B.H O/L O2",
              }}
            />

            <BlackContainer
              data={{
                label: "L42GA1_O2/O2",
                useClass: "greenTxt mt-1 ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "L42SK1_SMA/SMA",
            useClass: "greenTxt mt-4 ml-2",
            unit: "mg/m³",
            unitColor: "unitColor",
          }}
        />

        <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ml-5 ${useColorStatus(
            "L52FN1/BTE4"
          )} `}
          label="L52FN1/BTE4"
        />
      </div>
      <div className=" position-absolute single-text-26">
        <div className="d-flex">
          <MimicCaret
            parentClass="tringle-item ml-1"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
              "L42SG1/M01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
              "L42SG1/M01"
            )}`}
            label="L42SG1/M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "L42SG1",
            }}
          />
        </div>
        <div className="d-flex">
          <MimicCaret
            parentClass="tringle-item ml-1"
            firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
              "L42SG2/M01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
              "L42SG2/M01"
            )}`}
            label="L42SG2/M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "L42SG2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3",
              label: "L42CV1",
            }}
          />
          <div className="containerImage text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "L42HP3",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "REJ &",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CALIB HPR",
              }}
            />
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-5",
              label: "L42SG3",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={`ml-3 mt-1 ${useBorderTagsColorStatus("L42SG3/M01")}`}
            isClickable={true}
            tagLabel="L42SG3/M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ML-2",
              label: "REJECT",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "L42SG3/WA",
              useClass: "greenTxt mt-3 ml-3",
              unit: "ton",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <div className="position-absolute single-text-28 d-flex">
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info text-center p-1",
              label: "COAL BIN CO MONITOR",
            }}
          />
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CO Gas Coal Bin-1",
              }}
            />

            <BlackContainer
              data={{
                label: "482BI1/CO",
                useClass: "greenTxt mt-1 ml-2",
                unit: "ppm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CO Gas Coal Bin-2",
              }}
            />

            <BlackContainer
              data={{
                label: "482BI2/CO",
                useClass: "greenTxt mt-1 ml-2",
                unit: "ppm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "CO Gas Coal Bin-3",
              }}
            />

            <BlackContainer
              data={{
                label: "482BI3/CO",
                useClass: "greenTxt mt-1 ml-2",
                unit: "ppm",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "L52FN1/SA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L52FN1/IA",
              useClass: "greenTxt mt-1 ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L52FN1/XTA1",
              useClass: "greenTxt mt-1 ml-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L52FN1/XTA2",
              useClass: "greenTxt mt-1 ml-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "L42CM1/TTP5",
              useClass: "greenTxt mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42CM1/KW",
              useClass: "greenTxt mt-1 ml-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex">
            <div className="mt-2">
              <div className="connector-icon">
                <MotorCircleDigitalTag
                  className={`dot digital-tag mx-auto p-2  ${useColorStatus(
                    "L42CM1/M01"
                  )}`}
                  label="L42CM1/M01"
                  text="M"
                />
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-2 ml-2 ",
                  label: "L42CM1",
                }}
              />
            </div>
            <BlackContainer
              data={{
                label: "L42CM1/TTP6",
                useClass: "greenTxt mt-3 ml-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-29 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "L52SD1",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("L52SD1/M01")}`}
            isClickable={true}
            tagLabel="L52SD1/M01"
          />
        </div>
        <div className="mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "FROM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "PRE HEATER",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30">
        <BlackContainer
          data={{
            label: "L52FN1/BTE3",
            useClass: "greenTxt mt-1 ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L52FN1/BTE4",
            useClass: "greenTxt mt-3 ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "482BI2_DPTP/DPTP",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "482.BF2",
            }}
          />
          <div className="d-flex align-items-center justify-content-cente">
            <div className="squareplustri text-center">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-2 ${useColorStatus(
                  "482BF2/M01"
                )} `}
                label="482BF2/M01"
              />
              <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
            </div>
            <div className="ml-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "482.FN6",
                }}
              />
              <BlackContainer
                data={{
                  label: "482FN6/IA",
                  useClass: "greenTxt mt-1",
                  unit: "AMP",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "482BI3_DPTP/DPTP",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "482.BF3",
            }}
          />
          <div className="d-flex align-items-center justify-content-cente">
            <div className="squareplustri text-center">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-2 ${useColorStatus(
                  "482BF3/M01"
                )} `}
                label="482BF3/M01"
              />
              <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
            </div>
            <div className=" ml-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "482.FN6",
                }}
              />
              <BlackContainer
                data={{
                  label: "482FN7/IA",
                  useClass: "greenTxt mt-1",
                  unit: "AMP",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "482BI1_DPTP/DPTP",
              useClass: "greenTxt mt-1",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  mt-1",
              label: "482.BF1",
            }}
          />
          <div className="d-flex align-items-center justify-content-cente">
            <div className="squareplustri text-center">
              <MotorCircleDigitalTag
                className={`square digital-tag mt-2 ${useColorStatus(
                  "482BF1/M01"
                )} `}
                label="482BF1/M01"
              />
              <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
            </div>
            <div className=" ml-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "482.FN6",
                }}
              />
              <BlackContainer
                data={{
                  label: "482FN5/IA",
                  useClass: "greenTxt mt-1",
                  unit: "AMP",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-32 d-flex">
        <div>
          <div className="containerImage text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "482.B12",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FINE",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "COAL BIN-2",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "L42BH1/FB2-MAXT",
              useClass: "greenTxt mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="containerImage text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "482.B12",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FINE",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "COAL BIN-3",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "L42BH1/FB3-MAXT",
              useClass: "greenTxt mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="containerImage text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "482.B12",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "FINE",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "COAL BIN-1",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "L42BH1/FB1-MAXT",
              useClass: "greenTxt mx-auto",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <BlackContainer
          data={{
            label: "L92SG2/IA",
            useClass: "greenTxt mt-2",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "L92SG5/IA",
              useClass: "greenTxt mt-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <div className="ml-3">
            <BlackContainer
              data={{
                label: "L93FK1/BIN-LEVEL.",
                useClass: "greenTxt mt-2",
                unit: "ton",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "482FCB1/TEA1",
                useClass: "greenTxt mt-2",
                unit: "°C",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "L92SG2",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("L92SG2/M01")}`}
            isClickable={true}
            tagLabel="L92SG2/M01"
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "L92SG5",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("L92SG5/M01")}`}
            isClickable={true}
            tagLabel="L92SG5/M01"
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-35">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-3",
            label: "L42EF3",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("L42EF3/M01")}`}
          isClickable={true}
          tagLabel="L42EF3/M01"
        />
      </div>
      <div className="d-flex position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-3",
            label: "L42LD2",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("L42LD2/M01")}`}
          isClickable={true}
          tagLabel="L42LD2/M01"
        />
      </div>
      <div className="d-flex position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-3",
            label: "L42SD1",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("L42SD1/M01")}`}
          isClickable={true}
          tagLabel="L42SD1/M01"
        />
        <BlackContainer
          data={{
            label: "L42CM1/TTP4",
            useClass: "greenTxt ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-3",
            label: "L42EF2",
          }}
        />
        <BlueContainerWithDynamicBorder
          useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("L42EF2/M01")}`}
          isClickable={true}
          tagLabel="L42EF2/M01"
        />
      </div>
      <div className="position-absolute single-text-39">
        <div className="connector-icon">
          <MotorCircleDigitalTag
            className={`dot digital-tag mx-auto p-2  ${useColorStatus(
              "L42FN4/M01"
            )}`}
            label="L42FN4/M01"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 mt-2 ml-2 ",
            label: "L42FN4",
          }}
        />
        <BlackContainer
          data={{
            label: "L42FN4/SAA",
            useClass: "greenTxt mt-1 ml-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42FN4/IAA",
            useClass: "greenTxt mt-1 ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42FN4/KW",
            useClass: "greenTxt mt-1 ml-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40">
        <BlackContainer
          data={{
            label: "L42CM1/PTP4",
            useClass: "greenTxt mt-1 ml-5",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42CM1/FTP",
            useClass: "greenTxt mt-2 ml-2",
            unit: "m³/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-41">
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-info text-center p-1",
              label: "L42WP1",
            }}
          />

          <BlackContainer
            data={{
              label: "L42WP1/ST01",
              useClass: "greenTxt mt-1 ml-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42WP1/IT01",
              useClass: "greenTxt mt-1 ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-42">
        <BlackContainer
          data={{
            label: "L42GB1/XTA2",
            useClass: "greenTxt mt-1 ml-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag
          className={`line-circle digital-tag mt-1 ${useColorStatus(
            "L42WP1/M02"
          )}`}
          label="L42WP1/M02"
        />

        <BlackContainer
          data={{
            label: "L42CM1/PTP1",
            useClass: "greenTxt mt-1 ml-2",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42CM1/TTP1",
            useClass: "greenTxt mt-3 ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-43 d-flex">
        <BlueContainerWithDynamicBorder
          useClass={`mx-auto mt-1 ${useBorderTagsColorStatus("L42SG4/M01")}`}
          isClickable={true}
          tagLabel="L42SG4/M01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-1",
            label: "L42SG4",
          }}
        />
      </div>
      <div className="position-absolute single-text-44 chimni-red"></div>
      <div className="position-absolute single-text-45">
        <BlackContainer
          data={{
            label: "L42WF2/FR",
            useClass: "greenTxt mt-5",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42WF2/IA",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42WF2/RPM",
            useClass: "greenTxt mt-2",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "362LDJ" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("362LDJ/ZTA")}`,
          secondCircleLabel: "362LDJ/ZTA",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("L42WF1/M01")}`,
          firstCircleLabel: "L42WF1/M01",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L42WF1" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute pipe-6" />
      <PipeWithCircles
        parentDivClass="hpipecircle  position-absolute pipe-22"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("L42CV1/M02")}`,
          firstCircleLabel: "L42CV1/M02",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "L42CV1" }}
      />
      <div className="position-absolute pipe-25">
        <BlackContainer
          data={{
            label: "L92SC2/IA",
            useClass: "greenTxt mt-2 ml-4",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2"
          firstCircle={{
            firstCircleClass: "dot grey-color",
          }}
          text={{ useClass: "text-dark", label: "L92SC4" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="position-absolute pipe-26">
        <BlackContainer
          data={{
            label: "L92SC2/IA",
            useClass: "greenTxt mt-2 ml-auto",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 "
          firstCircle={{
            firstCircleClass: "dot grey-color",
          }}
          text={{ useClass: "text-dark", label: "L92SC2" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus(
              "L92SC2/M01"
            )}`,
            secondCircleLabel: "L92SC2/M01",
            secondCircleText: "M",
          }}
        />
      </div>
      <div className="position-absolute pipe-27">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 "
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("L92SC3/M01")}`,
            firstCircleText: "M",
            firstCircleLabel: "L92SC3/M01",
          }}
          text={{ useClass: "text-dark", label: "L92SC3" }}
          secondCircle={{
            secondCircleClass: "dot grey-color",
          }}
        />
        <BlackContainer
          data={{
            label: "L92SC3/IA",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute pipe-28">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 "
          firstCircle={{
            firstCircleClass: "dot grey-color",
          }}
          text={{ useClass: "text-dark", label: "L92SC1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus(
              "L92SC1/M01"
            )}`,
            secondCircleLabel: "L92SC1/M01",
            secondCircleText: "M",
          }}
        />
        <BlackContainer
          data={{
            label: "L92SC1/IA",
            useClass: "greenTxt mt-2 ml-auto",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute pipe-29">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 "
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("L92SC5/M01")}`,
            firstCircleText: "M",
            firstCircleLabel: "L92SC5/M01",
          }}
          text={{ useClass: "text-dark", label: "L92SC5" }}
        />
        <BlackContainer
          data={{
            label: "L92SC5/IA",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute pipe-30">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 "
          firstCircle={{
            firstCircleClass: "",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "L92SC6" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus(
              "L92SC6/M01"
            )}`,
            secondCircleLabel: "L92SC6/M01",
            secondCircleText: "M",
          }}
        />
        <BlackContainer
          data={{
            label: "L92SC6/IA",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute pipe-31 d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 "
          firstCircle={{
            firstCircleClass: "",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "L92SM1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus(
              "L92SM1/M01"
            )}`,
            secondCircleLabel: "L92SM1/M01",
            secondCircleText: "M",
          }}
        />
        <BlackContainer
          data={{
            label: "L42 LD2/ZTA",
            useClass: "greenTxt mt-2 ml-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute pipe-32">
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 "
          firstCircle={{
            firstCircleClass: "",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark", label: "L92SC7" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus(
              "L92SC7/M01"
            )}`,
            secondCircleLabel: "L92SC7/M01",
          }}
        />
        <BlackContainer
          data={{
            label: "L92SC7/IA",
            useClass: "greenTxt mt-2 ml-5",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute pipe-33 ">
        <BlackContainer
          data={{
            label: "L92SC8/IA",
            useClass: "greenTxt ml-auto",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2 "
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("L92SC8/M01")}`,

            firstCircleLabel: "L92SC8/M01",
          }}
          text={{ useClass: "text-dark", label: "L92SC8" }}
        />
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr  position-absolute line-3"></div>
      <div className="yellowline-Hr  position-absolute line-4"></div>
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
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Vr upArrow position-absolute line-27"></div>
      <div className="yellowline-Vr upArrow position-absolute line-28"></div>
      <div className="yellowline-Vr upArrow position-absolute line-29"></div>

      <div className="pipeVr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeVr position-absolute pipe-11"></div>
      <div className="pipeHr position-absolute pipe-12"></div>
      <div className="pipeVr position-absolute pipe-13"></div>
      <div className="pipeHr position-absolute pipe-14"></div>
      <div className="pipeVr position-absolute pipe-15"></div>
      <div className="pipeHr position-absolute pipe-16"></div>
      <div className="pipeHr position-absolute pipe-17"></div>
      <div className="pipeVr position-absolute pipe-18"></div>
      <div className="pipeHr position-absolute pipe-19"></div>
      <div className="pipeVr position-absolute pipe-20"></div>
      <div className="pipeHr position-absolute pipe-21"></div>
      <div className="pipeHr position-absolute pipe-23"></div>
      <div className="pipeVr position-absolute pipe-24"></div>
    </div>
  );
};

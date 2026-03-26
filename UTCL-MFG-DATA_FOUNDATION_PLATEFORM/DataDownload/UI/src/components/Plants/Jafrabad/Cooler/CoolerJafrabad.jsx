import {
  TextContainerWithWrapWord,
  BlackContainer,
  BlueContainerWithDynamicBorder,
  PipeWithCircles,
} from "../../../index";
export const CoolerJafrabad = () => {
  return (
    <div className="CoolerJafrabad w-100 h-100 position-relative">
      <div className="yellowline-Vr position-absolute pipe-4"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-5"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-6"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-7"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-8"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-9"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-10"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-11"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-12"></div>
      <div className="yellowline-Vr position-absolute pipe-15"></div>
      <div className="yellowline-Hr position-absolute pipe-16"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-21"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-25"></div>
      <div className="yellowline-Hr position-absolute pipe-26"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-27"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-13"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-14"
        firstCircle={{
          firstCircleClass: `dot grey-color`,
        }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleText: "M",
        }}
      />

      <div className="position-absolute single-text-1 pipeHr">
        <div className="d-flex justify-content-around mt-2">
          <div className="d-flex flex-column gap">
            <BlackContainer
              data={{
                label: "441CC100N11T01",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "441CC100N21T01",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "441CC100N31T01",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column gap">
            <BlackContainer
              data={{
                label: "441CC100N12T01",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "441CC100N22T01",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "441CC100N32T01",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column gap">
            <BlackContainer
              data={{
                label: "MD140A01S11_SP",
                useClass: "greenTxt",
                unit: "st/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "441FN305N02P01_PID_SPM",
                useClass: "greenTxt",
                unit: "st/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "MD140A01S13_SP",
                useClass: "greenTxt",
                unit: "st/min",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column gap">
            <BlackContainer
              data={{
                label: "MD140A01S01",
                useClass: "greenTxt",
                unit: "st/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "MD140A01S02",
                useClass: "greenTxt",
                unit: "st/min",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "MD140A01S03",
                useClass: "greenTxt",
                unit: "st/min",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column gap">
            <BlackContainer
              data={{
                label: "MD140A01P01",
                useClass: "greenTxt",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "MD140A01P02",
                useClass: "greenTxt",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "MD140A01P03",
                useClass: "greenTxt",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column gap">
            <BlackContainer
              data={{
                label: "441MD140M01_E3_CURRENT",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "441MD140M02_E3_CURRENT",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "441MD140M03_E3_CURRENT",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex flex-column gap">
            <BlackContainer
              data={{
                label: "441MD140M07_E3_CURRENT",
                useClass: "greenTxt",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-2 pipeVr"></div>
      <div className="position-absolute single-text-3 pipeHr"></div>
      <div className="position-absolute single-text-4 pipeHr"></div>
      <div className="position-absolute single-text-5 d-flex">
        <div className="d-flex align-items-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FN300",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K11",
              }}
            />
          </div>
          <div className={`line-circle grey-color ml-2`} />
        </div>
        <div className="d-flex align-items-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FN305",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K21",
              }}
            />
          </div>
          <div className={`line-circle grey-color ml-2`} />
        </div>
        <div className="d-flex align-items-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FN310",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K31",
              }}
            />
          </div>
          <div className={`line-circle grey-color ml-2`} />
        </div>
        <div className="d-flex align-items-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FN315",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K41",
              }}
            />
          </div>
          <div className={`line-circle grey-color ml-2`} />
        </div>
        <div className="d-flex align-items-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FN320",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K51",
              }}
            />
          </div>
          <div className={`line-circle grey-color ml-2`} />
        </div>
        <div className="d-flex align-items-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FN325",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K61",
              }}
            />
          </div>
          <div className={`line-circle grey-color ml-2`} />
        </div>
        <div className="d-flex align-items-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FN330",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K71",
              }}
            />
          </div>
          <div className={`line-circle grey-color ml-2`} />
        </div>
      </div>
      <div className="squareplustri position-absolute single-text-6">
        <div className="d-flex justify-content-around mt-1">
          <BlackContainer
            data={{
              label: "FCR_TT540",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "LH_HTR_CURRENT",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FCR_TT541",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RH_HTR_CURRENT",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <BlackContainer
            data={{
              label: "ESP_HOP1_DRAFT",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "ESP_HOP3_DRAFT",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "ESP_HOP5_DRAFT",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <BlackContainer
            data={{
              label: "ESP_HOP2_DRAFT",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "ESP_HOP4_DRAFT",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "ESP_HOP6_DRAFT",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <div className="d-flex flex-column align-items-center gap">
          <BlackContainer
            data={{
              label: "441FN300N01F01",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN300N01F01_PID_SPA",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN300N01F01_PIDSPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN300U01S01",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN300U01I01",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FLC-211A",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN300N02P01",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FN300_KW1",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex flex-column align-items-center gap">
          <BlackContainer
            data={{
              label: "441FN305N01F01",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN305N01F01_PID_SPA",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN305N02P01_PID_1SPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN305U01S01",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN305U01I01",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FLC-440A",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN305N02P01",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FN305_KW1",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex flex-column align-items-center gap">
          <BlackContainer
            data={{
              label: "441FN310N01F01",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN310N01F01_PID_SPA",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN310U01SPSPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN310U01S01",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN310U01I01",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FLC-440A",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN310N02P01",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FN310_KW1",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex flex-column align-items-center gap">
          <BlackContainer
            data={{
              label: "441FN315N01F01",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN315N01F01_PIDSPA",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN315N01F01_PIDSPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN315U01S01",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN315U01I01",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FLC-396A",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN315N02P01",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FN315_KW1",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex flex-column align-items-center gap">
          <BlackContainer
            data={{
              label: "441FN320N01F01",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN320N01F01_PIDSPA",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN320N01F01_PIDSPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN320U01S01",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN320U01I01",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FLC-327A",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN320N02P01",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FN320_KW1",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex flex-column align-items-center gap">
          <BlackContainer
            data={{
              label: "441FN325N01F01",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN325N01F01_PIDSPA",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN325N01F01_PIDSPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN325U01S01",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN325U01I01",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FLC-327A",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN325N02P01",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FN325_KW1",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex flex-column align-items-center gap">
          <BlackContainer
            data={{
              label: "441FN330N01F01",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN330N01F01_PIDSPA",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN330N01F01_PIDSPM",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN330U01S01",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN330U01I01",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "FLC-211A",
            }}
          />
          <BlackContainer
            data={{
              label: "441FN330N02P01",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FN330_KWATT",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex align-items-center">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "COOLER_TOTAL_FLOW",
              useClass: "greenTxt",
              unit: "m³/min",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "COOLER_AIR_CLKR_RATIO",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AVG_UG_1_2",
              useClass: "greenTxt mt-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "AVG_UG_2_3",
              useClass: "greenTxt mt-1",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "F55_DPC_SPEED",
              }}
            />
            <BlackContainer
              data={{
                label: "F55_DPC_SPEED",
                useClass: "greenTxt",
                unit: "rpm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="mt-1 text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "COOLER SP PWR",
              }}
            />
            <BlackContainer
              data={{
                label: "COOLER_SP_PWR",
                useClass: "greenTxt",
                unit: "kW/t",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-10">
        <div className="d-flex text-center">
          <div className="border p-1 w">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "F-96A BELT WEIGHER",
              }}
            />
          </div>
          <div className="border p-1 w1">
            <BlackContainer
              data={{
                label: "F96A_BW",
                useClass: "greenTxt",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex text-center ">
          <div className="border p-1 w">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "F-97 BELT WEIGHER",
              }}
            />
          </div>
          <div className="border p-1 w1">
            <BlackContainer
              data={{
                label: "N_F97_FT",
                useClass: "greenTxt",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex text-center ">
          <div className="border p-1 w">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "",
              }}
            />
          </div>
          <div className="border p-1 w1">
            <BlackContainer
              data={{
                label: "N_F200_RADAR",
                useClass: "greenTxt",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex text-center ">
          <div className="border p-1 w">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "",
              }}
            />
          </div>
          <div className="border p-1 w1">
            <BlackContainer
              data={{
                label: "JETTY_SILO_CLINKER",
                useClass: "greenTxt",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="d-flex text-center ">
          <div className="border p-1 w2">
            <BlackContainer
              data={{
                label: "441CC100N09P01",
                useClass: "greenTxt",
                unit: "mmWG",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "441FN305N02P01_PID_SPA",
                useClass: "greenTxt mt-2",
                unit: "WG",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mx-auto mt-1",
                label: "TOWER PRESSURE",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div className="d-flex align-items-center">
          <div className="text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Bypass Anyone",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "Temp.",
              }}
            />
          </div>
          <div className="ml-4">
            <BlackContainer
              data={{
                label: "441KH050N01T01",
                useClass: "greenTxt",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "FCR_TT520",
                useClass: "greenTxt mt-1",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "FCR_TT518",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "FCR_PT523",
              useClass: "greenTxt mt-1",
              unit: "WG",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex flex-column">
        <div>
          <BlackContainer
            data={{
              label: "FCR_PT340",
              useClass: "greenTxt",
              unit: "mmWG",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "F49_SPD_CONTROL_SPA",
              useClass: "greenTxt mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "441MD140M08_E3",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "FCR_ZT507",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F35A_PID_SPM",
            useClass: "greenTxt mt-1 ml-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "RISER_DUCT_AIR_BLSTR2_TIMER",
              useClass: "greenTxt",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "RISER_DUCT_AIR_BLSTR_TIMER",
              useClass: "greenTxt mt-1",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-2">
          <BlackContainer
            data={{
              label: "F35A_PID_SPA",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "ESP_INLET_DARFT",
              useClass: "greenTxt mt-1",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16 text-center">
        <BlackContainer
          data={{
            label: "441WI130N01F01",
            useClass: "greenTxt",
            unit: "m³/h",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "F49_W",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "FCR_YT302E",
            useClass: "greenTxt",
            unit: "mg/Nn",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <BlackContainer
          data={{
            label: "COOLER_ESP_STK_TEMP",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "ESP STK TEMP",
          }}
        />
      </div>
      <div className="position-absolute single-text-20 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GREASE SPRAY",
            }}
          />
        </div>
        <div className="d-flex align-items-center">
          <div>
            <div className="d-flex align-items-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "ON TIME",
                }}
              />
              <BlackContainer
                data={{
                  label: "CLBKR_GRSE_SPRAY_ONTIME",
                  useClass: "greenTxt ml-2",
                  unit: "min",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex align-items-center mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "OFF TIME",
                }}
              />
              <BlackContainer
                data={{
                  label: "CLBKR_GRSE_SPRAY_OFFTIME",
                  useClass: "greenTxt ml-2",
                  unit: "min",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
          <div className="ml-2 text-center">
            <div className="text-center">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SEL",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "PRES BYPASS ",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "TO RESET ONCE",
                }}
              />
            </div>
            <BlackContainer
              data={{
                label: "GREASE_DIST_COUNT_IND",
                useClass: "greenTxt mt-1",
                unit: "C/h",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "FCR_ZT340",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F48_PIC340_SPM",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <BlackContainer
          data={{
            label: "F44_CRNT",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F49_SPD_CONTROL_SPM",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <BlackContainer
          data={{
            label: "FCR_VT524K",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "FCR_ST524J",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F49_SPEED2",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F49_VFD_AMPSK",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "F49_VFD_SPDK",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 border p-1">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "F49 GRR_VFD_SP",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "10.5 RPM = 1 STEP",
            }}
          />
          <BlackContainer
            data={{
              label: "GRR_STEP",
              useClass: "greenTxt mt-1",
              unit: "",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "SPRS_GRR_TRAKING_SP",
              useClass: "greenTxt mt-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27 border p-1">
        <div className="text-center">
          <BlackContainer
            data={{
              label: "F55_PYRO_DISCHARGE",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "CR400",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "AMP",
            }}
          />
          <BlackContainer
            data={{
              label: "CR400_CURRENT",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BRK DE",
            }}
          />
          <BlackContainer
            data={{
              label: "441CR400N11T01",
              useClass: "greenTxt ml-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BRK NDE",
            }}
          />
          <BlackContainer
            data={{
              label: "441CR400N12T01",
              useClass: "greenTxt ml-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29">
        <BlackContainer
          data={{
            label: "CR400_HOOD_DRAFT",
            useClass: "greenTxt",
            unit: "mmWG",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "471AC100N01T01",
            useClass: "greenTxt mt-2",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <BlackContainer
          data={{
            label: "F55_CURRENT",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-32 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "F55_1",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-33"></div>
      <div className="position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Clinker Trans",
          }}
        />
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <div className={`circle-img c-grey-img-2`}></div>
        <div className={`circle-img c-grey-img-2`}></div>
        <div className={`circle-img c-grey-img-2`}></div>
        <div className={`circle-img c-grey-img-2`}></div>
        <div className={`circle-img c-grey-img-2`}></div>
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "F43.1-6",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "F44",
          }}
        />
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "441SD301",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={"grey-border"}
            isClickable={false}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "441SD306",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={"grey-border"}
            isClickable={false}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "441SD311",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={"grey-border"}
            isClickable={false}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "441SD316",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={"grey-border"}
            isClickable={false}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "441SD321",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={"grey-border"}
            isClickable={false}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "441SD326",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={"grey-border"}
            isClickable={false}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "441SD331",
            }}
          />
          <BlueContainerWithDynamicBorder
            useClass={"grey-border"}
            isClickable={false}
          />
        </div>
      </div>
      <div className="position-absolute single-text-40 text-center">
        <BlueContainerWithDynamicBorder
          useClass={"grey-border"}
          isClickable={false}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "F48",
          }}
        />
      </div>
      <div className="position-absolute single-text-41 text-center">
        <div className={`line-circle grey-color `} />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "F49",
          }}
        />
      </div>
      <div
        className={`line-circle grey-color position-absolute single-text-42`}
      />

      <BlackContainer
        data={{
          label: "F44_ANALG_SPEED",
          useClass: "greenTxt position-absolute single-text-43",
          unit: "rpm",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex align-items-center position-absolute single-text-44">
        <div className="img-96"> </div>
        <div className="pipeHr position-relative"></div>
      </div>
    </div>
  );
};

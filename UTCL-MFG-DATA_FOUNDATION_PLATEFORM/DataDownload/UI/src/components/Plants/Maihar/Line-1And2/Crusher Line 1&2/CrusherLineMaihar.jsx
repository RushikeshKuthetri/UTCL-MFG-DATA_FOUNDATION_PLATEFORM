import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
} from "../../../../index";

import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";
import { useDispatch } from "react-redux";

export const CrusherLineMaihar = () => {
  const dispatch = useDispatch();
  return (
    <div className="CrusherLineMaihar w-100 h-100 position-relative">
      <div className="position-absolute pipe-1">
        <div className="hpipecircle">
          <span className="dot grey-color"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "212AF1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("212AF1_M1")}`}
            label="212AF1_M1"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute pipe-2">
        <div className="hpipecircle ">
          <span className="dot grey-color"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "212SX1",
            }}
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("212SX1_M1")}`}
            label="212SX1_M1"
            text="M"
          />
        </div>
      </div>
      <div className="hpipecircle position-absolute pipe-3">
        <span className="dot grey-color"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212BC1",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CR_212BC1")}`}
          label="CR_212BC1"
          text="M"
        />
      </div>
      <div className="hpipecircle position-absolute pipe-4">
        <span className="dot grey-color"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212BC2",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("212BC2_M1")}`}
          label="212BC2_M1"
          text="M"
        />
      </div>
      <div className="hpipecircle position-absolute pipe-5">
        <span className="dot grey-color"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212BC3",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CR_212BC3_M1")}`}
          label="CR_212BC3_M1"
          text="M"
        />
      </div>
      <div className="hpipecircle position-absolute pipe-6">
        <span className="dot grey-color"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212BC4",
          }}
        />
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("212BC4_M1")}`}
          label="212BC4_M1"
          text="M"
        />
      </div>

      <div className="hpipecircle position-absolute pipe-7">
        <span className="dot grey-color"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "211AF3",
          }}
        />
        <span className="dot grey-color">M</span>
      </div>
      <div className="hpipecircle position-absolute pipe-8">
        <span className="dot grey-color"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "211SX3",
          }}
        />
        <span className="dot grey-color">M</span>
      </div>
      <div className="position-absolute pipe-9">
        <div className="d-flex">
          <div className="hpipecircle ">
            <span className="dot grey-color"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "OLBC 211 BC 7",
              }}
            />
            <span className="dot grey-color">M</span>
          </div>
        </div>
      </div>
      <div className="position-absolute pipe-10">
        <div className="d-flex">
          <div className="hpipecircle ">
            <span className="dot grey-color"></span>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "212MS1",
              }}
            />
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("212MS1")}`}
              label="212MS1"
              text="M"
            />
          </div>
        </div>
      </div>

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
      <div className="yellowline-Hr position-absolute pipe-22"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-23"></div>
      <div className="yellowline-Vr position-absolute pipe-24"></div>
      <div className="yellowline-Hr position-absolute pipe-25"></div>
      <div className="yellowline-Vr position-absolute pipe-26"></div>
      <div className="yellowline-Hr position-absolute pipe-27"></div>
      <div className="yellowline-Vr position-absolute pipe-28"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-29"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-30"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-31"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-32"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-33"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-34"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-35"></div>
      <div className="yellowline-Vr  position-absolute pipe-50"></div>
      <div className="yellowline-Hr  position-absolute pipe-51"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-52"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-53"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-54"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-55"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-56"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-57"></div>
      <div className="yellowline-Hr position-absolute pipe-58"></div>
      <div className="yellowline-Vr position-absolute pipe-59"></div>
      <div className="yellowline-Vr position-absolute pipe-60"></div>
      <div className="yellowline-Hr position-absolute pipe-61"></div>

      <div className="roller-jcb position-absolute single-text-1"></div>
      <div className="fiveside-shape position-absolute single-text-2"></div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-3",
          label: "212HP1",
        }}
      />
      <div className="position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "212HP1 L1",
          }}
        />
        <BlackContainer
          data={{
            label: "212HP1_L1",
            useClass: "greenTxt mb-4",
            unit: "mtr",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212AF1_M1_IT",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212AF1_M1_ST",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-5">
        <BlackContainer
          data={{
            label: "212_WQ1_M1_IT",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212_WX1_M1_ST",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "212SX1_M1_II",
          useClass: "greenTxt position-absolute single-text-6",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-7">
        <BlackContainer
          data={{
            label: "_212CR1P_M1_IT",
            useClass: "greenTxt ",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CR_212BC1_II",
            useClass: "greenTxt mt-5",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "212BC2_M1_II",
          useClass: "greenTxt position-absolute single-text-8",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-9">
        <BlackContainer
          data={{
            label: "212MS1_IT",
            useClass: "greenTxt ",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212MS1_TT",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <button
          className="btn greenbtn Btn-1 mr-2"
          onClick={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "maiharline1crusherpopup1",
                plant: "maihar",
                plantcode: "MACW",
              },
            });
          }}
          onTouchStart={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "maiharline1crusherpopup1",
                plant: "maihar",
                plantcode: "MACW",
              },
            });
          }}
        >
          P
        </button>
        <BlackContainer
          data={{
            label: "CR_212BC3_M1_II",
            useClass: "greenTxt ",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "212BC4_M1_II",
          useClass: "greenTxt position-absolute single-text-11",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-12">
        <div className="hpipecircle"> </div>
        <div className="triangle-down "></div>
      </div>
      <div className="position-absolute single-text-13">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("212WX1")}`}
          label="212WX1"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3 ml-4",
            label: "212WX1",
          }}
        />
      </div>

      <div className="position-absolute single-text-14 fiveside-shape"></div>
      <div className="position-absolute single-text-15">
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag p-3 ${useColorStatus("212CR1P")}`}
            label="212CR1P"
            text="M"
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`dot digital-tag p-3 ml-5 ${useColorStatus("212CR1S")}`}
            label="212CR1S"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-17 text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag mt-4 ${useColorStatus(
            "212CR1P_M2"
          )}`}
          label="212CR1P_M2"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "212CR1P M2",
          }}
        />
      </div>
      <div className="position-absolute single-text-18 text-center">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag mt-4 ${useColorStatus(
            "212CR1S_M2"
          )}`}
          label="212CR1S_M2"
          text=""
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "212CR1P M2",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 text-center">
        <div class="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto pt-3 mt-3",
              label: "212BF2",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "212RA5_M1"
            )}`}
            label="212RA5_M1"
          />
        </div>
      </div>

      <div className="position-absolute single-text-20 text-center">
        <div>
          <MotorCircleDigitalTag
            className={`line-circle digital-tag mt-2 ${useColorStatus(
              "212FN2_M1"
            )}`}
            label="212FN2_M1"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "212RN2",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "212FN2_M1_II",
          useClass: "greenTxt mb-2 position-absolute single-text-22",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "212RA5_M1_II",
          useClass: "greenTxt mb-2 position-absolute single-text-23",
          unit: "Amp",
          unitColor: "unitColor",
        }}
      />
      <div className="bagHouse  position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-3",
            label: "212BF1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-25">
        <div className="triangle-with-squares"></div>
        <div className="triangle-with-squares"></div>
        <div className="triangle-with-squares"></div>
        <div className="triangle-with-squares"></div>
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "212RA1_M1_II",
              useClass: "greenTxt mb-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div class="d-flex align-items-center">
            <div>
              <MotorCircleDigitalTag
                className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                  "212RA1_M1"
                )}`}
                label="212RA1_M1"
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "212RA1",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "212RA2_M1_II",
              useClass: "greenTxt mb-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div class="d-flex align-items-center">
            <div>
              <MotorCircleDigitalTag
                className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                  "212RA2_M1"
                )}`}
                label="212RA2_M1"
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "212RA2",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "212RA3_M1_II",
              useClass: "greenTxt mb-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div class="d-flex align-items-center">
            <div>
              <MotorCircleDigitalTag
                className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                  "212RA3_M1"
                )}`}
                label="212RA3_M1"
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "212RA3",
            }}
          />
        </div>

        <div>
          <BlackContainer
            data={{
              label: "212RA4_M1_II",
              useClass: "greenTxt mb-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div class="d-flex align-items-center">
            <div>
              <MotorCircleDigitalTag
                className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                  "212RA4_M1"
                )}`}
                label="212RA4_M1"
              />
            </div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "212RA4",
            }}
          />
        </div>
      </div>
      <div class=" position-absolute single-text-27">
        <div className="d-flex">
          <div className="dashedHr-Pipe">
            <MotorCircleDigitalTag
              className={`dot digital-tag ml-auto ${useColorStatus(
                "212SC1_M1"
              )}`}
              label="212SC1_M1"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "212SC1",
          }}
        />
      </div>
      <div class="position-absolute single-text-28">
        <div className="d-flex">
          <div className="dashedHr-Pipe">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("212SC2_M1")}`}
              label="212SC2_M1"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "212SC2",
          }}
        />
      </div>
      <div class="position-absolute single-text-29">
        <div className="d-flex">
          <div className="dashedHr-Pipe">
            <MotorCircleDigitalTag
              className={`dot digital-tag ml-auto ${useColorStatus(
                "212SC3_M1"
              )}`}
              label="212SC3_M1"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "212SC3",
          }}
        />
      </div>
      <div className="position-absolute single-text-30  d-flex text-center">
        <div>
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag mt-2 ${useColorStatus(
                "212FN1_M1"
              )}`}
              label="212FN1_M1"
              text=""
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "212FN1",
            }}
          />
        </div>
        <button
          className="btn greenbtn Btn-1 ml-2 mt-4"
          onClick={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "maiharline1crusherpopup2",
                plant: "maihar",
                plantcode: "MACW",
              },
            });
          }}
          onTouchStart={() => {
            dispatch({
              type: "SHOW_MIMIC_POPUP",
              payload: {
                mimicName: "maiharline1crusherpopup2",
                plant: "maihar",
                plantcode: "MACW",
              },
            });
          }}
        >
          P
        </button>
      </div>
      <div className="position-absolute single-text-31">
        <BlackContainer
          data={{
            label: "212_FN1_M01_IT",
            useClass: "greenTxt",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212_FN1_M01_ST",
            useClass: "greenTxt mt-2",
            unit: "Rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="CGRnBox position-absolute single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-a",
            label: "212CR1P",
          }}
        />
        <div className="d-flex">
          <div>
            <BlackContainer
              data={{
                label: "212CR1P_TU1",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_TU2",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_TV1",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_TV2",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_TW1",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_TW2",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_TA",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_TB",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-3">
            <BlackContainer
              data={{
                label: "212CR1P_NC3",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_ND3",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_NC4",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_ND4",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_NC1",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_NC2",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-3">
            <BlackContainer
              data={{
                label: "212CR1P_ND1",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_ND2",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_TC1",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_TD1",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_TC2",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1P_TD2",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="CGRnBox position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-a",
            label: "212CR1S",
          }}
        />
        <div className="d-flex">
          <div>
            <BlackContainer
              data={{
                label: "212CR1S_TU1",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_TU2",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_TV1",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_TV2",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_TW1",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_TW2",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_TA",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_TB",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-3">
            <BlackContainer
              data={{
                label: "212CR1S_NC5",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_ND5",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_NC6",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_ND6",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_NC7",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_ND7",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-3">
            <BlackContainer
              data={{
                label: "212CR1S_NC8",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_ND8",
                useClass: "greenTxt mt-2",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_TD3",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_TC4",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_TD4",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "212CR1S_TC3",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="box-1 p-2 position-absolute single-text-34 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white ml-4",
              label: "TO 212AF1 & CR1",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "212CLS1_M1_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="ml-3">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white  mt-2",
                  label: "LINE1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white  mt-2 ml-4",
                  label: "LINE2",
                }}
              />
            </div>
            <div className="yellowline-Vr  position-absolute pipe-36"></div>
            <div className="yellowline-Vr position-absolute pipe-37"></div>
            <div className="yellowline-Hr position-absolute pipe-38"></div>
            <div className="yellowline-Vr position-absolute pipe-39"></div>
            <div className="yellowline-Hr position-absolute pipe-40"></div>
            <div className="yellowline-Vr position-absolute pipe-41"></div>
            <div className="yellowline-Vr position-absolute pipe-42"></div>
            <div className="position-absolute single-text-35 text-center">
              <div>
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag mt-2 ${useColorStatus(
                    "212CLS1_M1"
                  )}`}
                  label="212CLS1_M1"
            
                />
              </div>
              <div className="img-85"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "212CLS1 M1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info mt-1",
                  label: "STAND BY",
                }}
              />
            </div>
            <div className="position-absolute single-text-36 text-center">
              <div>
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag mt-2 ${useColorStatus(
                    "212CLS1_M2"
                  )}`}
                  label="212CLS1_M2"
                
                />
              </div>
              <div className="img-85"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "212CLS1 M2",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info mt-1",
                  label: "WORKING",
                }}
              />
            </div>
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white bg-secondary ml-4",
                label: "ELO",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white bg-secondary mt-3",
                label: "RST",
              }}
            />
            <BlackContainer
              data={{
                label: "212CLS1_M2_II",
                useClass: "greenTxt mt-3",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="box-1 p-2 position-absolute single-text-37 ">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white ml-4",
              label: "TO 212WX1",
            }}
          />
        </div>
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "212CLS2_M1_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="ml-3">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white  mt-2",
                  label: "LINE1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white  mt-2 ml-4",
                  label: "LINE2",
                }}
              />
            </div>
            <div className="yellowline-Vr  position-absolute pipe-36"></div>
            <div className="yellowline-Vr position-absolute pipe-37"></div>
            <div className="yellowline-Hr position-absolute pipe-38"></div>
            <div className="yellowline-Vr position-absolute pipe-39"></div>
            <div className="yellowline-Hr position-absolute pipe-40"></div>
            <div className="yellowline-Vr position-absolute pipe-41"></div>
            <div className="yellowline-Vr position-absolute pipe-42"></div>
            <div className="position-absolute single-text-35 text-center">
              <div>
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag mt-2 ${useColorStatus(
                    "212CLS2_M1"
                  )}`}
                  label="212CLS2_M1"
               
                />
              </div>
              <div className="img-85"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "212CLS1 M1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info mt-1",
                  label: "STAND BY",
                }}
              />
            </div>
            <div className="position-absolute single-text-36 text-center">
              <div>
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag mt-2 ${useColorStatus(
                    "212CLS2_M2"
                  )}`}
                  label="212CLS2_M2"
                  text=""
                />
              </div>
              <div className="img-85"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "212CLS1 M2",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info mt-1",
                  label: "WORKING",
                }}
              />
            </div>
          </div>
          <div className="ml-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white bg-secondary ml-4",
                label: "ELO",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white bg-secondary mt-3",
                label: "RST",
              }}
            />
            <BlackContainer
              data={{
                label: "212CLS2_M2_II",
                useClass: "greenTxt mt-3",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="box-1 p-2 position-absolute single-text-38">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white ml-4",
              label: "TO 211AF3",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="ml-5">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white  mt-2",
                  label: "LINE1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-white  mt-2 ml-4",
                  label: "LINE2",
                }}
              />
            </div>
            <div className="yellowline-Vr  position-absolute pipe-36"></div>
            <div className="yellowline-Vr position-absolute pipe-37"></div>
            <div className="yellowline-Hr position-absolute pipe-38"></div>
            <div className="yellowline-Vr position-absolute pipe-39"></div>
            <div className="yellowline-Hr position-absolute pipe-40"></div>
            <div className="yellowline-Vr position-absolute pipe-41"></div>
            <div className="yellowline-Vr position-absolute pipe-42"></div>
            <div className="position-absolute single-text-35 text-center">
              <div>
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag mt-2 ${useColorStatus(
                    "211CLS1_M1"
                  )}`}
                  label="211CLS1_M1"
                  
                />
              </div>
              <div className="img-85"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "212CLS1 M1",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info mt-1",
                  label: " WORKING ",
                }}
              />
            </div>
            <div className="position-absolute single-text-36 text-center">
              <div>
                <MotorCircleDigitalTag
                  className={`line-circle digital-tag mt-2 ${useColorStatus(
                    "211CLS1_M2"
                  )}`}
                  label="211CLS1_M2"
                  
                />
              </div>
              <div className="img-85"></div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "212CLS1 M2",
                }}
              />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark bg-info mt-1",
                  label: "STAND BY",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="box-1 p-2 position-absolute single-text-39">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white ml-4",
              label: "DUST SUPRESSTUN SYSTEM",
            }}
          />
        </div>
        <div className="d-flex">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white bg-info mt-2",
                label: "WP1",
              }}
            />
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white bg-info mt-2",
                label: "WP2",
              }}
            />
          </div>
          <div className="ml-3">
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag p-3 pipe-43 ${useColorStatus(
                  "212WP1_M1"
                )}`}
                label="212WP1_M1"
                text="M"
              />
            </div>
            <div className="yellowline-Vr  position-absolute pipe-36"></div>
            <div className="yellowline-Vr position-absolute pipe-37"></div>
            <div>
              <MotorCircleDigitalTag
                className={`dot digital-tag p-3 pipe-44 ${useColorStatus(
                  "212WP2_M2"
                )}`}
                label="212WP2_M2"
                text="M"
              />
            </div>
            <div className="yellowline-Hr position-absolute pipe-45"></div>
            <div className="yellowline-Hr position-absolute pipe-46"></div>
            <div className="yellowline-Hr position-absolute pipe-47"></div>
            <div className="yellowline-Vr position-absolute pipe-48"></div>
            <div className="yellowline-Vr position-absolute pipe-49"></div>
          </div>
          <div className="ml-5">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-2",
                label: "212WP",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: " bg-info mt-2",
                label: "212WP_AUTO_PERM",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white mt-5",
                label: "212TK1",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute d-flex single-text-40">
        <div className="tringle-item">
          <i className="fa-solid fa-caret-down  d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up  d-block grey-color-caret"></i>
        </div>
        <div className="tringle-item ml-3">
          <i className="fa-solid fa-caret-down  d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up  d-block grey-color-caret"></i>
        </div>
      </div>
      <div className="position-absolute d-flex single-text-41">
        <div className="tringle-item">
          <i className="fa-solid fa-caret-down  d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up  d-block grey-color-caret"></i>
        </div>
        <div className="tringle-item ml-3">
          <i className="fa-solid fa-caret-down  d-block grey-color-caret"></i>
          <i className="fa-solid fa-caret-up  d-block grey-color-caret"></i>
        </div>
      </div>

      <div className="position-absolute d-flex single-text-42">
        <div className="gry-img "></div>
        <TextContainerWithWrapWord
          data={{
            useClass: " text-dark ml-2",
            label: "212DG1",
          }}
        />
      </div>

      <div className="position-absolute d-flex single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-secondary text-dark",
            label: "212BC6",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "bg-secondary text-dark mr-3",
            label: "211HP3",
          }}
        />
      </div>
      <div className="position-absolute single-text-46 d-flex">
        <BlackContainer
          data={{
            label: "_212CR1S_M1_IT",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212SC1_M1_II",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>

      <BlackContainer
        data={{
          label: "212SC2_M1_II",
          useClass: "greenTxt ml-3 position-absolute single-text-47",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "212SC3_M1_II",
          useClass: "greenTxt position-absolute single-text-48",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="text-center position-absolute single-text-49">
        <div className="containerImage pt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "SURGE HQPPER 211HP3",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "LT1001",
            useClass: "greenTxt mt-1",
            unit: "MTR",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-50">
        <BlackContainer
          data={{
            label: "212RA1_M1_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212RA2_M1_II",
            useClass: "greenTxt ml-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212RA3_M1_II",
            useClass: "greenTxt ml-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "212RA4_M1_II",
            useClass: "greenTxt ml-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-51">
        <MotorCircleDigitalTag
          className={`square digital-tag ${useColorStatus("_20SB1VP1_RUN")}`}
          label="_20SB1VP1_RUN"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "PLANT PERMISSIVE",
          }}
        />
      </div>
    </div>
  );
};

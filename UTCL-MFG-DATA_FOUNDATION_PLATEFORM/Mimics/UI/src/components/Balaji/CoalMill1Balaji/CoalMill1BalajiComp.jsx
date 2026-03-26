import {
  TextContainerWithWrapWord,
  BlackContainer,
  TopLeftBox,
  TextColumn,
  SingleText,
} from "../../index";
import { useDispatch, useSelector } from "react-redux";
import {
  balajiKM1TextColumn1,
  balajiKM1TextColumn2,
} from "../../../data/balaji/CoalMill1/balajiKM1TextColumn";

export const CoalMill1BalajiComp = () => {
  const dispatch = useDispatch();
  const { balajiPopup } = useSelector((state) => state);

  return (
    <div className="p-1 CoalMill1Balaji w-100 h-100 position-relative">
      <div className="yellowline-Hr rightarrow position-absolute pipe-1"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-2"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-3"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-4"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-5"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-6"></div>
      <div className="yellowline-Hr position-absolute pipe-7"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-8"></div>
      <div className="yellowline-Hr position-absolute pipe-9"></div>
      <div className="yellowline-Hr position-absolute pipe-10"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-11"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-12"></div>
      <div className="yellowline-Vr position-absolute pipe-13"></div>
      <div className="yellowline-Vr position-absolute pipe-14"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-15"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-21"></div>
      <div className="yellowline-Hr rightarrow leftarrow position-absolute pipe-22"></div>
      <div className="yellowline-Vr position-absolute pipe-23"></div>
      <div className="yellowline-Hr position-absolute pipe-24"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-25"></div>
      <div className="yellowline-Vr position-absolute pipe-26"></div>
      <div className="yellowline-Vr position-absolute pipe-27"></div>
      <div className="yellowline-Hr position-absolute pipe-28"></div>

      <div className="bigContainer position-absolute single-text-1">
        <span className="greenDot mt-4 mx-auto">M</span>
        <BlackContainer
          data={{
            label: "CLM1_FEEDRATE",
            useClass: "greenTxt mt-4 mx-auto",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 text-center",
            label: "L41RM1",
          }}
        />
        <BlackContainer
          data={{
            label: "L41RM1_PT03",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="px-2 img-83 d-flex flex-column justify-content-between pb-2 position-absolute single-text-2 text-center">
        <BlackContainer
          data={{
            label: "K21BC1_IT01",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex w-100 justify-content-between px-">
          <div className="greenDot">L</div>
          <div className="greenDot">L</div>
          <div className="greenDot">L</div>
          <div className="greenDot">L</div>
          <div className="greenDot">L</div>
          <div className="greenDot">L</div>
        </div>
      </div>
      <div className="squareplustri position-absolute single-text-3 text-center">
        <BlackContainer
          data={{
            label: "L41HP1_WT01",
            useClass: "greenTxt mt-2",
            unit: "ton",
            hhValue: 85,
            hhTime: 0,
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "AUS/IMP(coal)",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "L41 HP1",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-4 text-center">
        <BlackContainer
          data={{
            label: "L41HP2_WT01",
            useClass: "greenTxt mt-2",
            unit: "ton",
            hhValue: 85,
            hhTime: 0,
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "INDAIN Coal",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "L41 HP2",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-5 text-center">
        <BlackContainer
          data={{
            label: "451SFF1_WT01",
            useClass: "greenTxt mt-4",
            unit: "ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-6 text-center">
        <BlackContainer
          data={{
            label: "481SFF1_WT01",
            useClass: "greenTxt mt-4",
            unit: "ton",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="brick-cooler-img position-absolute single-text-7"></div>
      <div className="position-absolute single-text-8 d-flex">
        <div className="hpipecircle">
          <span className="greenDot">M</span>
          <span className="grayDot"> M</span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "L41WF1",
          }}
        />
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <div className="hpipecircle">
          <span className="greenDot">M</span>
          <span className="grayDot"> M</span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "L41WF2",
          }}
        />
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="hpipecircle">
          <span className="greenDot">M</span>
          <span className="grayDot"> M</span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "L41CV1",
          }}
        />
      </div>
      <div className="pole-shape position-absolute single-text-11">
        {" "}
        <span className="greenDot mt-3 position-absolute">M</span>
      </div>

      <div className="position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "Feed Belt",
          }}
        />
        <BlackContainer
          data={{
            label: "L41WF1_BL",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41WF1_IT01",
            useClass: "greenTxt mt-01",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41WF1_FT01",
            useClass: "greenTxt mt-01",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41WF1_SP_SPM",
            useClass: "greenTxt mt-01 ml-2",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="box-1 position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "BH TEMP",
          }}
        />
        <div className="px-1">
          <BlackContainer
            data={{
              label: "L41BF1_TT04",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 80,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41BF1_TT05",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 80,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41BF1_TT06",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 80,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41BF1_TT07",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 80,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41BF1_TT08",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 80,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41BF1_TT09",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 80,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "L41WF2_BL",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41WF2_IT01",
            useClass: "greenTxt mt-01",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41WF2_FT01",
            useClass: "greenTxt mt-01",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K21BC1_IT01",
            useClass: "greenTxt mt-01 ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="box-1 position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "L41GA1",
          }}
        />
        <div className="px-1">
          <BlackContainer
            data={{
              label: "L41GA1_AT01",
              useClass: "greenTxt mt-01",
              unit: "ppm",
              hhValue: 0.2,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41GA1_AT02",
              useClass: "greenTxt mt-01",
              unit: "%",
              hhValue: 9,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-16">
        <BlackContainer
          data={{
            label: "L41BF1_PT04",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41WF2_SP_SPA",
            useClass: "greenTxt mt-2",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "L41CV1_IT01",
            useClass: "greenTxt",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41CV1_ST01",
            useClass: "greenTxt mt-01",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "L41RM1_TT05",
            useClass: "greenTxt",
            unit: "°C",
            hhValue: 82,
            hhTime: 0,
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41RM1_PT02",
            useClass: "greenTxt mt-01",
            unit: "mBar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-19 box-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "CLM-1 N2",
          }}
        />
        <div className="d-flex mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "1",
            }}
          />
          <BlackContainer
            data={{
              label: "IGG1_PT01",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "2",
            }}
          />
          <BlackContainer
            data={{
              label: "IGG1_PT02",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "3",
            }}
          />
          <BlackContainer
            data={{
              label: "IGG1_PT03",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "4",
            }}
          />
          <BlackContainer
            data={{
              label: "IGG1_PT04",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "5",
            }}
          />
          <BlackContainer
            data={{
              label: "IGG1_PT05",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "6",
            }}
          />
          <BlackContainer
            data={{
              label: "IGG1_PT06",
              useClass: "greenTxt ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "L91PP2_PT01",
            useClass: "greenTxt ml-1 mt-1",
            unit: "bar",
            hhValue: 1.2,
            hhTime: 5000,
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "Pressure",
            }}
          />
          <BlackContainer
            data={{
              label: "L91PP1_PT01",
              useClass: "greenTxt ml-2",
              unit: "bar",
              hhValue: 1.2,
              hhTime: 5000,
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex  mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "pp1",
            }}
          />
          <BlackContainer
            data={{
              label: "L91PP1_IT01",
              useClass: "greenTxt ml-2",
              unit: "amp",
              unitColor: "unitColor",
            }}
          />
        </div>

        <div className="d-flex mt-01 px-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "pp2",
            }}
          />
          <BlackContainer
            data={{
              label: "L91PP2_IT01",
              useClass: "greenTxt ml-2",
              unit: "amp",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-20">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "CLM-2 N2",
          }}
        />
        <BlackContainer
          data={{
            label: "IGG2_PT01",
            useClass: "greenTxt mt-01",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IGG2_PT02",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IGG2_PT03",
            useClass: "greenTxt mt-01",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IGG2_PT04",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IGG2_PT05",
            useClass: "greenTxt mt-01",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "IGG2_PT06",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41FN1_PT01",
            useClass: "greenTxt mt-01",
            unit: "mBar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41FN1_PT02",
            useClass: "greenTxt",
            unit: "mBar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41FN1_PT03",
            useClass: "greenTxt mt-01",
            unit: "mBar",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "L41RM1_VT02",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L411R2_ST02",
            useClass: "greenTxt mt-3",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute d-flex justify-content-around single-text-22">
        <BlackContainer
          data={{
            label: "L41RM1_VT01",
            useClass: "greenTxt",
            unit: "mm/s",
            hhValue: 1,
            hhTime: 2000,
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41RM1_VT02",
            useClass: "greenTxt ml-1",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="box-1 position-absolute single-text-23">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "L41SR1",
          }}
        />
        <div className="px-1">
          <BlackContainer
            data={{
              label: "L41SR1_TB01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 80,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41SR1_TB02",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 80,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41SR1_TB03",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 100,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41SR1_IT01",
              useClass: "greenTxt mt-01",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41SR1_ST01_ACT",
              useClass: "greenTxt mt-01",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41SR1_SP01_ACT",
              useClass: "greenTxt mt-01",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="box-1 position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "L41WP1",
          }}
        />
        <div className="px-1">
          <BlackContainer
            data={{
              label: "L41WP1_TT01",
              useClass: "greenTxt mt-01",
              unit: "degC",
              hhValue: 70,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41WP1_IT01",
              useClass: "greenTxt mt-01",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41WP1_ST01",
              useClass: "greenTxt mt-01",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41WP1_SP01_SPA",
              useClass: "greenTxt mt-01",
              unit: "m3/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="box-1 position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "L41FN2",
          }}
        />
        <div className="px-1">
          <BlackContainer
            data={{
              label: "L41FN2_VT01",
              useClass: "greenTxt mt-01",
              unit: "mm/s",
              hhValue: 4.5,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41FN2_VT02",
              useClass: "greenTxt mt-01",
              unit: "mm/s",
              hhValue: 4.5,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41FN2_VT03",
              useClass: "greenTxt mt-01",
              unit: "mm/s",
              hhValue: 4.5,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41FN2_VT04",
              useClass: "greenTxt mt-01",
              unit: "mm/s",
              hhValue: 4.5,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <button
        className="btn greenbtn Btn-1 position-absolute single-text-26"
        onClick={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",

            payload: "coalMill1Popup3",
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",

            payload: "coalMill1Popup3",
          });
        }}
        style={{
          backgroundColor: balajiPopup.coalMill1Popup3 ? "red" : "#64cb00",
        }}
      >
        L41FN2 Temp
      </button>
      <div className="position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "L41FN2_ST01",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41FN2_SP01_SPM",
            useClass: "greenTxt mt-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <BlackContainer
          data={{
            label: "L411R2_ST01",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41FN2_STEP_SP",
            useClass: "greenTxt mt-2",
            unit: "Step",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <BlackContainer
          data={{
            label: "L51LD1_ZT01",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L51LD1_SP01_SPM",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="box-1 position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "L41W1",
          }}
        />
        <div className="p-2">
          <div className="d-flex mt-2 mb-2">
            <div className="mr-2">
              <div className="tringle-item ml-2">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-caret-left"></i>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SV1",
                }}
              />
            </div>
            <div className="mr-2">
              <div className="tringle-item ml-2">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-caret-left"></i>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SV2",
                }}
              />
            </div>
            <div>
              <div className="tringle-item ml-2">
                <i className="fa-solid fa-caret-right"></i>
                <i className="fa-solid fa-caret-left"></i>
              </div>
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "SV3",
                }}
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "L41WI1_FT01",
              useClass: "greenTxt",
              unit: "m3/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "L41BF1_PT03",
          useClass: "greenTxt position-absolute single-text-31",
          unit: "mmWC",
          hhValue: 90,
          hhTime: 5000,
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-32">
        <BlackContainer
          data={{
            label: "L41BF1_TT02",
            useClass: "greenTxt",
            unit: "°C",
            hhValue: 80,
            hhTime: 5000,
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41BF1_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "L41BF1_TT03",
            useClass: "greenTxt",
            unit: "°C",
            hhValue: 90,
            hhTime: 5000,
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41BF1_TT01",
            useClass: "greenTxt mt-01",
            unit: "°C",
            hhValue: 80,
            hhTime: 5000,
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "L41BF1_PT01",
            useClass: "greenTxt mt-01",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="box-1 position-absolute single-text-34">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "L41GA2",
          }}
        />
        <div className="px-1">
          <BlackContainer
            data={{
              label: "L41GA2_AT01",
              useClass: "greenTxt mt-01",
              unit: "PPM",
              hhValue: 0.2,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <TextColumn
        useClass="position-absolute single-text-35"
        list={balajiKM1TextColumn2}
      />
      <div className="box-1 position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "L41LQ1",
          }}
        />
        <button
          className="btn greenbtn mt-2"
          onClick={() => {
            dispatch({
              type: "SHOW_BALAJI_POPUP",

              payload: "coalMill1Popup1",
            });
          }}
          onTouchStart={() => {
            dispatch({
              type: "SHOW_BALAJI_POPUP",

              payload: "coalMill1Popup1",
            });
          }}
          style={{
            backgroundColor: balajiPopup.coalMill1Popup1 ? "red" : "#64cb00",
          }}
        >
          L4TGB1 TEMP
        </button>
        <div className="d-flex">
          <div className="circle-group">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "L41LU4",
              }}
            />
            <span className="green-line-circle"></span>
          </div>
          <div className="circle-group ml-2 ">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "561HT1",
              }}
            />
            <span className="green-line-circle"></span>
          </div>
        </div>
        <div className="px-1">
          <BlackContainer
            data={{
              label: "L41LQ1_PT01",
              useClass: "greenTxt mt-01",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41LQ1_PT02",
              useClass: "greenTxt mt-01",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41LQ1_TT01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41LQ1_TT02",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 47,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41GB1_TT01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 75,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="box-1 position-absolute single-text-37 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "L41LQ2 & L41LQ3",
          }}
        />
        <div className="p-2 mt-3">
          <BlackContainer
            data={{
              label: "L41LQ2_TT01",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 90,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <TopLeftBox
        parentDivClass="position-absolute single-text-38 box-1"
        useClass="d-flex justify-content-between"
        list={balajiKM1TextColumn1}
      />
      <div className="box-1 position-absolute single-text-39 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "L41RM1 Roller Oil",
          }}
        />
        <div className="p-2 mt-1">
          <BlackContainer
            data={{
              label: "L41RM1_TT02",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 90,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41RM1_TT03",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 90,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41RM1_TT04",
              useClass: "greenTxt mt-01",
              unit: "°C",
              hhValue: 90,
              hhTime: 0,
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="box-1 position-absolute single-text-40">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "L41LQ2 & L41LQ3",
          }}
        />
        <div className="px-1">
          <BlackContainer
            data={{
              label: "K21BC1_IT01",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K21BC1_IT01",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <button
        className="btn greenbtn Btn-1 position-absolute single-text-41"
        onClick={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",

            payload: "coalMill1Popup2",
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",

            payload: "coalMill1Popup2",
          });
        }}
        style={{
          backgroundColor: balajiPopup.coalMill1Popup2 ? "red" : "#64cb00",
        }}
      >
        L41MD1 Temp
      </button>

      <div className="box-1 d-flex align-items-center position-absolute single-text-42">
        <div className="p-2">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "CP1",
              }}
            />
            <BlackContainer
              data={{
                label: "L41HT1_ZT01",
                useClass: "greenTxt ml-2",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-01">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "CP2",
              }}
            />
            <BlackContainer
              data={{
                label: "L41HT1_ZT02",
                useClass: "greenTxt ml-2",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-01">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "CP3",
              }}
            />
            <BlackContainer
              data={{
                label: "L41HT1_ZT03",
                useClass: "greenTxt ml-2",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-01">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "CP AV",
              }}
            />
            <BlackContainer
              data={{
                label: "L41HT1_CY_AVG",
                useClass: "greenTxt ml-2",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-01">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "LP",
              }}
            />
            <BlackContainer
              data={{
                label: "L41HT1_PT02",
                useClass: "greenTxt ml-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-01">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "TP",
              }}
            />
            <BlackContainer
              data={{
                label: "L41HT1_PT01",
                useClass: "greenTxt ml-2",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div className="p-2">
          <div className="circle-group">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "L41LU1",
              }}
            />
            <span className="green-line-circle"></span>
          </div>
          <button
            className="btn greenbtn Btn-1"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",

                payload: "coalMill1Popup4",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",

                payload: "coalMill1Popup4",
              });
            }}
            style={{
              backgroundColor: balajiPopup.coalMill1Popup4 ? "red" : "#64cb00",
            }}
          >
            Ten HYD
          </button>
        </div>
        <div className="p-2">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "11.1",
              }}
            />
            <div className="tringle-item ml-2">
              <i className="fa-solid fa-caret-right"></i>
              <i className="fa-solid fa-caret-left"></i>
            </div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "11.2",
              }}
            />
            <div className="tringle-item ml-2">
              <i className="fa-solid fa-caret-right"></i>
              <i className="fa-solid fa-caret-left"></i>
            </div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "17.1",
              }}
            />
            <div className="tringle-item ml-2">
              <i className="fa-solid fa-caret-right"></i>
              <i className="fa-solid fa-caret-left"></i>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "17.2",
              }}
            />
            <div className="tringle-item ml-2">
              <i className="fa-solid fa-caret-right"></i>
              <i className="fa-solid fa-caret-left"></i>
            </div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "18",
              }}
            />
            <div className="tringle-item ml-2">
              <i className="fa-solid fa-caret-right"></i>
              <i className="fa-solid fa-caret-left"></i>
            </div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "27.1",
              }}
            />
            <div className="tringle-item ml-2">
              <i className="fa-solid fa-caret-right"></i>
              <i className="fa-solid fa-caret-left"></i>
            </div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "27.2",
              }}
            />
            <div className="tringle-item ml-2">
              <i className="fa-solid fa-caret-right"></i>
              <i className="fa-solid fa-caret-left"></i>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "28.1",
              }}
            />
            <div className="tringle-item ml-2">
              <i className="fa-solid fa-caret-right"></i>
              <i className="fa-solid fa-caret-left"></i>
            </div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "28.2",
              }}
            />
            <div className="tringle-item ml-2">
              <i className="fa-solid fa-caret-right"></i>
              <i className="fa-solid fa-caret-left"></i>
            </div>
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "28.3",
              }}
            />
            <div className="tringle-item ml-2">
              <i className="fa-solid fa-caret-right"></i>
              <i className="fa-solid fa-caret-left"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute single-text-43">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "L41LD1",
          }}
        />
        <div className="redlineshape1 mr-2"></div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-44",
          label: "From Coal Mill 2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-45",
          label: "Transport RAL TRIP",
        }}
      />
      <div className="circle-group position-absolute single-text-46">
        <span className="green-line-circle"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "L41FN2",
          }}
        />
      </div>
      <div className="position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L51LD1",
          }}
        />
        <div className="redlineshape1 mt-2"></div>
      </div>
      <div className="circle-group position-absolute single-text-48">
        <span className="green-line-circle"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "L41WP1",
          }}
        />
      </div>
      <div className="circle-group position-absolute single-text-49">
        <span className="green-line-circle"></span>
      </div>
      <div className="d-flex position-absolute single-text-50">
        <div className="circle-img c-img-1"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-2",
            label: "L41RA1",
          }}
        />
      </div>
      <div className="position-absolute single-text-51">
        <div className="redlineshape1 mb-2"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L41SD3",
          }}
        />
      </div>
      <div className="position-absolute single-text-52">
        <div className="redlineshape1 mb-2"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L41SD2",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-53",
          label: "Water Level LL",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-54",
          label: "LC1 TEMP HI",
        }}
      />
      <div className="position-absolute single-text-55"></div>
      <div className="position-absolute single-text-56">
        <BlackContainer
          data={{
            label: "L41LD2_ZT01",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
    </div>
  );
};

import {
  TextContainerWithWrapWord,
  BlackContainer,
  TopLeftBox,
  TextColumn,
  SingleText,
} from "../../index";
import { useDispatch, useSelector } from "react-redux";
import {
  balajiKM2TextColumn1,
  balajiKM2TextColumn10,
  balajiKM2TextColumn12,
  balajiKM2TextColumn14,
  balajiKM2TextColumn16,
  balajiKM2TextColumn17,
  balajiKM2TextColumn2,
  balajiKM2TextColumn3,
  balajiKM2TextColumn5,
  balajiKM2TextColumn6,
  balajiKM2TextColumn8,
} from "../../../data/balaji/CoalMill2/balajiKM2TextColumn";

export const CoalMill2BalajiComp = () => {
  const dispatch = useDispatch();
  const { balajiPopup } = useSelector((state) => state);

  return (
    <div className="p-1 CoalMill1Balaji CoalMill2Balaji w-100 h-100 position-relative">
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

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 text-center",
            label: "L42RM1",
          }}
        />
        <BlackContainer
          data={{
            label: "L42RM1_PT03",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "mbar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="img-83 px-2 d-flex flex-column justify-content-between pb-2 position-absolute single-text-2 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 text-center",
            label: "L42BF1",
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
            label: "L42HP1_WT01",
            useClass: "greenTxt mt-2",
            unit: "t",
            // hhValue: 85,
            // hhTime: 0,
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 text-center",
            label: "L42HP1 Coal S.A",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-4 text-center">
        <BlackContainer
          data={{
            label: "L42HP2_WT01",
            useClass: "greenTxt mt-2",
            unit: "t",
            hhValue: 85,
            hhTime: 0,
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-4 text-center",
            label: "L42HP2 US IMP Coal",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-5 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-3",
            label: "L91BI1",
          }}
        />
      </div>
      <div className="squareplustri position-absolute single-text-6 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-3",
            label: "L91BI2",
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
            label: "L42WF1",
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
            label: "L42WF2",
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
            label: "L42CV1",
          }}
        />
      </div>
      <div className="pole-shape position-absolute single-text-11">
        <span className="greenDot mt-3 position-absolute">M</span>
      </div>

      <TextColumn
        useClass="position-absolute single-text-12"
        list={balajiKM2TextColumn16}
      />

      <div className="box-1 position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "BH TEMP",
          }}
        />
        <TextColumn useClass="px-1" list={balajiKM2TextColumn17} />
      </div>
      <div className="position-absolute single-text-14">
        <BlackContainer
          data={{
            label: "L42WF2_BSP",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42WF2_BL",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42WF2_IT01",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42WF2_FT01",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42WF2_SP_SPM",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="box-1 position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "L42GA1",
          }}
        />
        <TextColumn useClass="px-1" list={balajiKM2TextColumn14} />
      </div>

      <BlackContainer
        data={{
          label: "L42BF1_PT04",
          useClass: "greenTxt position-absolute single-text-16",
          unit: "tph",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "L42CV1_IT01",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42CV1_ST01",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42CV1_SP01_SPM",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>

      <TextColumn
        useClass="position-absolute single-text-18"
        list={balajiKM2TextColumn12}
      />
      <div className="position-absolute single-text-19 box-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "CLM-1 N2",
          }}
        />
        <SingleText
          useClass="d-flex mt-01 px-1"
          yellowTextUp="1"
          textClass="text-dark text-center"
          data={{
            blackTextLabel: "IGG1_PT01",
            blackTextClass: "greenTxt ml-2",
            unit: "bar",
          }}
        />
        <SingleText
          useClass="d-flex mt-01 px-1"
          yellowTextUp="2"
          textClass="text-dark text-center"
          data={{
            blackTextLabel: "IGG1_PT02",
            blackTextClass: "greenTxt ml-2",
            unit: "bar",
          }}
        />
        {/* <SingleText
          useClass="d-flex mt-01 px-1"
          yellowTextUp="1"
          textClass="text-dark text-center"
          data={{
            blackTextLabel: "IGG1_PT03",
            blackTextClass: "greenTxt ml-2",
            unit: "barC",
          }}
        /> */}
        <SingleText
          useClass="d-flex mt-01 px-1"
          yellowTextUp="3"
          textClass="text-dark text-center"
          data={{
            blackTextLabel: "IGG1_PT03",
            blackTextClass: "greenTxt ml-2",
            unit: "bar",
          }}
        />
        <SingleText
          useClass="d-flex mt-01 px-1"
          yellowTextUp="4"
          textClass="text-dark text-center"
          data={{
            blackTextLabel: "IGG1_PT04",
            blackTextClass: "greenTxt ml-2",
            unit: "bar",
          }}
        />
        <SingleText
          useClass="d-flex mt-01 px-1"
          yellowTextUp="5"
          textClass="text-dark text-center"
          data={{
            blackTextLabel: "IGG1_PT05",
            blackTextClass: "greenTxt ml-2",
            unit: "bar",
          }}
        />
        <SingleText
          useClass="d-flex mt-01 px-1"
          yellowTextUp="6"
          textClass="text-dark text-center"
          data={{
            blackTextLabel: "IGG1_PT06",
            blackTextClass: "greenTxt ml-2",
            unit: "bar",
          }}
        />
        <BlackContainer
          data={{
            label: "L92PP1_PT01",
            useClass: "greenTxt ml-1 mt-1",
            unit: "bar",
            hhValue: 1.2,
            hhTime: 5000,
            unitColor: "unitColor",
          }}
        />
        <SingleText
          useClass="d-flex mt-01 px-1"
          yellowTextUp="Pressure"
          textClass="text-dark text-center"
          data={{
            blackTextLabel: "L92PP2_PT01",
            blackTextClass: "greenTxt ml-2",
            unit: "bar",
            hhValue: 1.2,
            hhTime: 5000,
          }}
        />
        <SingleText
          useClass="d-flex mt-01 px-1"
          yellowTextUp="pp1"
          textClass="text-dark text-center"
          data={{
            blackTextLabel: "L92PP1_IT01",
            blackTextClass: "greenTxt ml-2",
            unit: "A",
          }}
        />
        <SingleText
          useClass="d-flex mt-01 px-1"
          yellowTextUp="pp2"
          textClass="text-dark text-center"
          data={{
            blackTextLabel: "L92PP2_IT01",
            blackTextClass: "greenTxt ml-2",
            unit: "A",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-20"
        list={balajiKM2TextColumn8}
        text="CLM-2 N2"
        text2Class="text-dark text-center box-1"
      />
      <div className="position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "L42MD1_VT03",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42MD1_ST01",
            useClass: "greenTxt mt-4",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
      </div>

      <TextColumn
        useClass="position-absolute d-flex justify-content-around single-text-22"
        list={balajiKM2TextColumn6}
      />
      <div className="box-1 position-absolute single-text-23">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "L42SR1",
          }}
        />
        <TextColumn useClass="px-1" list={balajiKM2TextColumn5} />
      </div>

      <div className="box-1 position-absolute single-text-24">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "L42WP1",
          }}
        />
        <div className="px-1">
          <BlackContainer
            data={{
              label: "L42WP1_TT01",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42WP1_IT01",
              useClass: "greenTxt mt-01",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42WP1_ST01",
              useClass: "greenTxt mt-01",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42WI1_FT01",
              useClass: "greenTxt mt-01",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42WP1_SP01_SPA",
              useClass: "greenTxt mt-01",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="box-1 position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "L42FN2",
          }}
        />
        <TextColumn useClass="px-1" list={balajiKM2TextColumn3} />
      </div>
      <button
        className="btn greenbtn Btn-1 position-absolute single-text-26"
        onClick={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",

            payload: "coalMill2Popup3",
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",

            payload: "coalMill2Popup3",
          });
        }}
        style={{
          backgroundColor: balajiPopup.coalMill2Popup3 ? "red" : "#64cb00",
        }}
      >
        L42FN2 Temp
      </button>
      <div className="position-absolute single-text-28">
        <BlackContainer
          data={{
            label: "L421R2_ST01",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42FN2_STEP_SP",
            useClass: "greenTxt mt-2",
            unit: "Step",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <BlackContainer
          data={{
            label: "L52LD1_ZT01",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L52LD1_SP01_SPM",
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
            label: "L42WI1",
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
              label: "L42WI1_FT01",
              useClass: "greenTxt",
              unit: "m3/h",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "L42BF1_PT03",
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
            label: "L42BF1_TT02",
            useClass: "greenTxt",
            unit: "°C",
            hhValue: 80,
            hhTime: 5000,
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42BF1_PT02",
            useClass: "greenTxt mt-01",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <BlackContainer
          data={{
            label: "L42BF1_TT03",
            useClass: "greenTxt",
            unit: "°C",
            hhValue: 90,
            hhTime: 5000,
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42BF1_TT01",
            useClass: "greenTxt mt-01",
            unit: "°C",
            hhValue: 80,
            hhTime: 5000,
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "L42BF1_PT01",
            useClass: "greenTxt mt-01",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-35"
        list={balajiKM2TextColumn2}
      />
      <div className="box-1 position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "L42LQ1",
          }}
        />
        <button
          className="btn greenbtn mt-2"
          onClick={() => {
            dispatch({
              type: "SHOW_BALAJI_POPUP",

              payload: "coalMill2Popup1",
            });
          }}
          onTouchStart={() => {
            dispatch({
              type: "SHOW_BALAJI_POPUP",

              payload: "coalMill2Popup1",
            });
          }}
          style={{
            backgroundColor: balajiPopup.coalMill2Popup1 ? "red" : "#64cb00",
          }}
        >
          L42GB1 TEMP
        </button>
        <div className="d-flex">
          <div className="circle-group">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "L42LU3",
              }}
            />
            <span className="green-line-circle"></span>
          </div>
          <div className="circle-group ml-2 ">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "L42LU4",
              }}
            />
            <span className="green-line-circle"></span>
          </div>
        </div>
        <TextColumn useClass="px-1" list={balajiKM2TextColumn10} />
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
              label: "L42LQ2_TT01",
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
        list={balajiKM2TextColumn1}
      />
      <div className="box-1 position-absolute single-text-39 p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "L42RM1",
          }}
        />
        <BlackContainer
          data={{
            label: "L42RM1_TT02",
            useClass: "greenTxt mt-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42RM1_TT03",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42RM1_TT04",
            useClass: "greenTxt mt-01",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />{" "}
        <BlackContainer
          data={{
            label: "L42RM1_VT01",
            useClass: "greenTxt mt-01",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="box-1 position-absolute single-text-40">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "GRR",
          }}
        />
        <div className="px-1">
          <BlackContainer
            data={{
              label: "L421R3_STEP_IND",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L42MD1_STEP_SP",
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

            payload: "coalMill2Popup2",
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",

            payload: "coalMill2Popup2",
          });
        }}
        style={{
          backgroundColor: balajiPopup.coalMill2Popup2 ? "red" : "#64cb00",
        }}
      >
        L42MD1 Temp
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
                label: "L42HT1_ZT01",
                useClass: "greenTxt ml-1",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "CP2",
              }}
            />
            <BlackContainer
              data={{
                label: "L42HT1_ZT02",
                useClass: "greenTxt ml-1",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "CP3",
              }}
            />
            <BlackContainer
              data={{
                label: "L42HT1_ZT03",
                useClass: "greenTxt ml-1",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "CP AV",
              }}
            />
            <BlackContainer
              data={{
                label: "L42HT1_CY_AVG",
                useClass: "greenTxt ml-1",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "LP",
              }}
            />
            <BlackContainer
              data={{
                label: "L42HT1_PT02",
                useClass: "greenTxt ml-1",
                unit: "bar",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "TP",
              }}
            />
            <BlackContainer
              data={{
                label: "L42HT1_PT01",
                useClass: "greenTxt ml-1",
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

                payload: "coalMill2Popup4",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",

                payload: "coalMill2Popup4",
              });
            }}
            style={{
              backgroundColor: balajiPopup.coalMill2Popup4 ? "red" : "#64cb00",
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
      <div className="position-absolute single-text-43">
        <div className="redlineshape1"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "L42SD1",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-44",
          label: "From Coal Mill 1",
        }}
      />
      <div className="d-flex position-absolute single-text-45">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Feed Rate",
          }}
        />
        <BlackContainer
          data={{
            label: "CLM2_FEEDRATE",
            useClass: "greenTxt ml-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="circle-group position-absolute single-text-46">
        <span className="green-line-circle"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "L42FN2",
          }}
        />
      </div>
      <div className="position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L52LD1",
          }}
        />
        <div className="redlineshape1 mt-2"></div>
      </div>
      <div className="circle-group position-absolute single-text-48">
        <span className="green-line-circle"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "L42WP1",
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
            label: "L42RA1",
          }}
        />
      </div>
      <div className="position-absolute single-text-51">
        <div className="redlineshape1 mb-2"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L42SD3",
          }}
        />
      </div>
      <div className="position-absolute single-text-52">
        <div className="redlineshape1 mb-2"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L42SD2",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-53",
          label: "Feed Belt",
        }}
      />
      <div className="circle-group position-absolute single-text-54">
        <span className="green-line-circle"></span>
      </div>
      <div className="position-absolute single-text-55"></div>
      <div className="position-absolute single-text-56">
        <BlackContainer
          data={{
            label: "L42LD2_ZT01",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L42LD2_SP01",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-57",
          label: "Transport RAL Trip",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-58",
          label: "WATER LEVEL LL",
        }}
      />
      <div className="position-absolute single-text-59">
        <div className="redlineshape1"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "L42LD2",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "L42FN2_JT01",
          useClass: "greenTxt position-absolute single-text-60",
          unit: "kW",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-61">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L42LD3",
          }}
        />
        <div className="redlineshape1 ml-2"></div>
      </div>
      <BlackContainer
        data={{
          label: "L42LD3_ZT01",
          useClass: "greenTxt position-absolute single-text-62",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
    </div>
  );
};

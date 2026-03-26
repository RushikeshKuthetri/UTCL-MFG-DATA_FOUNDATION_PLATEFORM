import {
  TextContainerWithWrapWord,
  BlackContainer,
  TopLeftBox,
  TextColumn,
  SingleText,
} from "../../index";
import {
  balajiCM3TextColumn1,
  balajiCM3TextColumn10,
  balajiCM3TextColumn11,
  balajiCM3TextColumn12,
  balajiCM3TextColumn13,
  balajiCM3TextColumn14,
  balajiCM3TextColumn15,
  balajiCM3TextColumn16,
  balajiCM3TextColumn17,
  balajiCM3TextColumn18,
  balajiCM3TextColumn19,
  balajiCM3TextColumn2,
  balajiCM3TextColumn20,
  balajiCM3TextColumn21,
  balajiCM3TextColumn22,
  balajiCM3TextColumn3,
  balajiCM3TextColumn4,
  balajiCM3TextColumn5,
  balajiCM3TextColumn6,
  balajiCM3TextColumn7,
  balajiCM3TextColumn8,
  balajiCM3TextColumn9,
} from "../../../data/balaji/Cementmill3/balajiCM3Textcolumn";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
export const CementMill3Balaji = () => {
  const dispatch = useDispatch();
  const { balajiPopup } = useSelector((state) => state);
  return (
    <div className="p-1 CementMill3Balaji w-100 h-100 position-relative d-flex flex-column justify-content-between">
      <div className="row m-0">
        <div className="yellowline-Vr downArrow pipe-1 position-absolute"></div>
        <div className="yellowline-Vr downArrow pipe-2 position-absolute"></div>
        <div className="yellowline-Vr downArrow pipe-3 position-absolute"></div>
        <div className="yellowline-Vr downArrow pipe-4 position-absolute"></div>
        <div className="yellowline-Vr downArrow pipe-5 position-absolute"></div>
        <div className="yellowline-Hr pipe-6 position-absolute"></div>
        <div className="yellowline-Hr leftarrow pipe-7 position-absolute"></div>
        <div className="yellowline-Hr rightarrow pipe-8 position-absolute"></div>
        <div className="outlinediv position-absolute pipe-9"></div>
        <div className="yellowline-Hr pipe-10 position-absolute"></div>
        <div className="yellowline-Vr pipe-11 position-absolute"></div>
        <div className="yellowline-Vr pipe-12 position-absolute"></div>
        <div className="yellowline-Hr pipe-13 position-absolute"></div>
        <div className="yellowline-Vr downArrow pipe-14 position-absolute"></div>
        <div className="yellowline-Vr downArrow pipe-15 position-absolute"></div>
        <div className="yellowline-Vr downArrow pipe-16 position-absolute"></div>
        <div className="d-flex position-absolute single-text-1">
          <div className="text-center">
            <BlackContainer
              data={{
                label: "513HP1_LT01",
                useClass: "greenTxt",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Clinker",
              }}
            />
            <div className="greenDot text-dark text-center mx-auto">M</div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "533WF1",
              }}
            />
            <BlackContainer
              data={{
                label: "533WF1_FT01",
                useClass: "greenTxt",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "_563RM1_RECIPE_F21",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center ml-1">
            <BlackContainer
              data={{
                label: "513HP3_LT01",
                useClass: "greenTxt",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Gypsum",
              }}
            />
            <div className="greenDot text-dark text-center mx-auto">M</div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "533WF2",
              }}
            />
            <BlackContainer
              data={{
                label: "533WF2_FT01",
                useClass: "greenTxt",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "_563RM1_RECIPE_F22",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center ml-1">
            <BlackContainer
              data={{
                label: "513HP2_LT01",
                useClass: "greenTxt",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Lime Stone",
              }}
            />
            <div className="greenDot text-dark text-center mx-auto">M</div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "533WF3",
              }}
            />
            <BlackContainer
              data={{
                label: "533WF3_FT01",
                useClass: "greenTxt",
                unit: "t/h",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "_563RM1_RECIPE_F23",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="text-center ml-1">
            <BlackContainer
              data={{
                label: "K93SFF1_FT01",
                useClass: "greenTxt",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Dry Fly Ash",
              }}
            />
            <div className="yellowpolygon d-inline-block"></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "K93SFF1",
              }}
            />
            <BlackContainer
              data={{
                label: "K93SFF1_WT01",
                useClass: "greenTxt",
                unit: "t/h",
                unitColor: "unitColor",
                hhValue: 70,
                hhTime: 0,
              }}
            />
            <BlackContainer
              data={{
                label: "_563RM1_RECIPE_F24",
                useClass: "greenTxt mt-1",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="position-absolute single-text-54">
            <div className="greenDot text-dark text-center">M</div>
            <div className="greenDot text-dark text-center mt-1">M</div>
          </div>
          <div className="position-absolute single-text-55">
            <div className="greenDot text-dark text-center">M</div>
            <div className="greenDot text-dark text-center mt-1">M</div>
          </div>
          <div></div>
        </div>
        <div className="box-1 position-absolute single-text-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center box-1",
              label: "Normal",
            }}
          />
          <TopLeftBox
            parentDivClass="p-2"
            useClass="d-flex justify-content-between"
            list={balajiCM3TextColumn21}
          />
        </div>

        <TextColumn
          useClass="position-absolute single-text-3"
          list={balajiCM3TextColumn12}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-4",
            label: "Cleaning Seq Trip 30 Mins Delay",
          }}
        />

        <div className="triangle-with-squares position-absolute single-text-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "563BF2",
            }}
          />
          <BlackContainer
            data={{
              label: "563BF2_PT03",
              useClass: "greenTxt mt-01 mx-auto",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextColumn
          useClass="position-absolute single-text-6"
          list={balajiCM3TextColumn13}
        />
        <BlackContainer
          data={{
            label: "563FN2_JT01",
            useClass: "greenTxt position-absolute single-text-7",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <TextColumn
          useClass="position-absolute single-text-8"
          list={balajiCM3TextColumn16}
        />
        <div className="text-center position-absolute single-text-9">
          <div className="greenDot text-dark text-center mx-auto">M</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "563MD2",
            }}
          />
          <BlackContainer
            data={{
              label: "563MD2_JT01",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="pipe dotted-pipe position-absolute single-text-10">
          <div className="greenDot"></div>
        </div>
        <div className="hpipecircle position-absolute single-text-11">
          <span className="grayDot"></span>
          <span className="greenDot">M</span>
        </div>
        <div className="hpipecircle position-absolute single-text-12">
          <span className="grayDot"></span>
          <span className="greenDot">M</span>
        </div>
        <SingleText
          useClass="position-absolute single-text-13"
          yellowTextUp="GYPSUM RPM"
          textClass="text-dark"
          data={{
            blackTextLabel: "533WF2_ST01",
            blackTextClass: "greenTxt mt-04",
            unit: "rpm",
          }}
        />
        <TextColumn
          useClass="position-absolute single-text-14"
          list={balajiCM3TextColumn20}
        />
        <TextColumn
          useClass="position-absolute single-text-15"
          list={balajiCM3TextColumn19}
        />
        <div className="hpipecircle position-absolute single-text-16">
          <span className="greenDot">M</span>
          <span className="grayDot"></span>
        </div>
        <button
          className="btn greenbtn position-absolute single-text-17"
          onClick={() => {
            dispatch({
              type: "SHOW_BALAJI_POPUP",
              payload: "cementMill3popup6",
            });
          }}
          onTouchStart={() => {
            dispatch({
              type: "SHOW_BALAJI_POPUP",
              payload: "cementMill3popup6",
            });
          }}
          style={{
            backgroundColor: balajiPopup.cementMill3popup6 ? "red" : "#64cb00",
          }}
        >
          563FN2
        </button>

        {/* <BlackContainer
          data={{
            label: "471FND_JT01",
            useClass: "greenTxt position-absolute single-text-17",
            unit: "KW",
            unitColor: "unitColor",
          }}
        /> */}
        <div className="containerImage d-flex justify-content-center align-items-center position-absolute single-text-18">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Reject",
            }}
          />
        </div>
        <div className="position-absolute single-text-19">
          <BlackContainer
            data={{
              label: "563WI1_FT01",
              useClass: "greenTxt mt-1",
              unit: "m3/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "563WP1_SP01_SPA",
              useClass: "greenTxt mt-1",
              unit: "m3/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextColumn
          useClass="position-absolute single-text-20"
          list={balajiCM3TextColumn8}
        />
        <div className="d-flex justify-content-around position-absolute single-text-21">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "box-1 text-dark text-center",
                label: "CURRENT",
              }}
            />
            <TextColumn list={balajiCM3TextColumn2} useClass="box-1 p-2" />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "box-1 text-dark text-center",
                label: "SPEED",
              }}
            />
            <TextColumn list={balajiCM3TextColumn3} useClass="box-1 p-2" />
          </div>
        </div>
        <TextColumn
          useClass="position-absolute single-text-22"
          list={balajiCM3TextColumn9}
        />
        <TextColumn
          useClass="position-absolute single-text-23"
          list={balajiCM3TextColumn10}
        />
        <div className="d-flex position-absolute single-text-24">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Comp 1",
              }}
            />
            <BlackContainer
              data={{
                label: "593SB1_LT01",
                useClass: "greenTxt",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Comp 2",
              }}
            />
            <BlackContainer
              data={{
                label: "593SB1_LT02",
                useClass: "greenTxt",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center",
                label: "Comp 3",
              }}
            />
            <BlackContainer
              data={{
                label: "593SB1_LT03",
                useClass: "greenTxt",
                unit: "m",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <TextColumn
          useClass="position-absolute single-text-25"
          list={balajiCM3TextColumn14}
        />
        <button
          className="btn greenbtn p-1 Btn-1 single-text-51"
          onClick={() => {
            dispatch({
              type: "SHOW_BALAJI_POPUP",
              payload: "cementMill3popup11",
            });
          }}
          onTouchStart={() => {
            dispatch({
              type: "SHOW_BALAJI_POPUP",
              payload: "cementMill3popup11",
            });
          }}
          style={{
            backgroundColor: balajiPopup.cementMill3popup11 ? "red" : "#64cb00",
          }}
        >
          563FN2
        </button>
        <TextColumn
          useClass="position-absolute single-text-26"
          list={balajiCM3TextColumn15}
        />
        <div className="position-absolute single-text-27">
          <TextContainerWithWrapWord
            data={{
              useClass: "mt-1 text-dark text-center",
              label: "Compress Air Pressure",
            }}
          />
          <BlackContainer
            data={{
              label: "611CP_PT01",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "mt-1 text-dark text-center",
              label: "Cooling Tower Pressure",
            }}
          />
          <BlackContainer
            data={{
              label: "561WP_PT01",
              useClass: "greenTxt mt-1",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="brick-cooler-img position-absolute single-text-28"></div>

        <div className="position-absolute single-text-29">
          <TextContainerWithWrapWord
            data={{
              useClass: "box-1 text-dark text-center",
              label: "563FN2",
            }}
          />
          <div className="box-1 p-2">
            <BlackContainer
              data={{
                label: "563FN2_VT01",
                useClass: "greenTxt",
                unit: "mm/s",
                unitColor: "unitColor",
                hhValue: 4.5,
                hhTime: 0,
              }}
            />
            <BlackContainer
              data={{
                label: "563FN2_VT02",
                useClass: "greenTxt mt-01",
                unit: "mm/s",
                unitColor: "unitColor",
                hhValue: 4.5,
                hhTime: 0,
              }}
            />
            <BlackContainer
              data={{
                label: "563FN2_VT03",
                useClass: "greenTxt mt-01",
                unit: "mm/s",
                unitColor: "unitColor",
                hhValue: 4.5,
                hhTime: 0,
              }}
            />
            <BlackContainer
              data={{
                label: "563FN2_VT04",
                useClass: "greenTxt mt-01",
                unit: "mm/s",
                unitColor: "unitColor",
                hhValue: 4.5,
                hhTime: 0,
              }}
            />
            <button
              className="btn greenbtn p-1 Btn-1"
              // onClick={() => {
              //   dispatch({
              //     type: "SHOW_BALAJI_POPUP",
              //     payload: "cementMill3popup12",
              //   });
              // }}
              // onTouchStart={() => {
              //   dispatch({
              //     type: "SHOW_BALAJI_POPUP",
              //     payload: "cementMill3popup12",
              //   });
              // }}
              // style={{
              //   backgroundColor: balajiPopup.cementMill3popup12
              //     ? "red"
              //     : "#64cb00",
              // }}
            >
              563LQ9
            </button>
          </div>
        </div>
        <TextColumn
          useClass="position-absolute single-text-30"
          list={balajiCM3TextColumn18}
        />
        <div className="circle-group position-absolute single-text-31">
          <span className="green-line-circle"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "573FN1",
            }}
          />
        </div>
        <div className="circle-group position-absolute single-text-32">
          <span className="green-line-circle"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "563FN2",
            }}
          />
        </div>
        <div className="bigContainer d-flex flex-column justify-content-around align-items-center position-absolute single-text-33">
          <span className="greenDot">M</span>
          <div>
            <BlackContainer
              data={{
                label: "563RM1_PT01",
                useClass: "greenTxt mx-auto",
                unit: "mbar",
                unitColor: "unitColor",
              }}
            />
          </div>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "Cement Mill",
            }}
          />
        </div>
        <div className="d-flex position-absolute single-text-34">
          <div className="circle-img c-img-2"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "563RAI",
            }}
          />
        </div>
        <div className="containerImage d-flex flex-column justify-content-center align-items-center position-absolute single-text-35">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "563LC1",
            }}
          />
          <BlackContainer
            data={{
              label: "563HP1_WT01",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="triangle-with-squares position-absolute single-text-36">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "563BF3",
            }}
          />
          <BlackContainer
            data={{
              label: "563BF3_PT03",
              useClass: "greenTxt mt-01 mx-auto",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextColumn
          useClass="position-absolute single-text-37"
          list={balajiCM3TextColumn11}
        />
        <button
          className="btn d-block greenbtn p-1 Btn-1 position-absolute single-text-38"
          // onClick={() => {
          //   dispatch({
          //     type: "SHOW_BALAJI_POPUP",
          //     payload: "cementMill3popup16",
          //   });
          // }}
          // onTouchStart={() => {
          //   dispatch({
          //     type: "SHOW_BALAJI_POPUP",
          //     payload: "cementMill3popup16",
          //   });
          // }}
          // style={{
          //   backgroundColor: balajiPopup.cementMill3popup16 ? "red" : "#64cb00",
          // }}
        >
          573FN1
        </button>
        <div className="box-1 text-center position-absolute single-text-39">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark box-1 ",
              label: "593MD1",
            }}
          />
          <div className="p-2">
            <div className="greenDot text-dark text-center">M</div>
            <BlackContainer
              data={{
                label: "593MD1_JT01",
                useClass: "greenTxt mx-auto mt-2",
                unit: "KW",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark text-center mt-2",
                label: "BDS_ALARM",
              }}
            />
          </div>
        </div>
        <TextColumn
          useClass="position-absolute single-text-40"
          list={balajiCM3TextColumn17}
        />
        <div className="position-absolute single-text-41">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "563WP1",
            }}
          />
          <div className="d-flex">
            <div className="p-1">
              <button
                className="btn d-block greenbtn p-1 Btn-1"
                onClick={() => {
                  dispatch({
                    type: "SHOW_BALAJI_POPUP",
                    payload: "cementMill3popup7",
                  });
                }}
                onTouchStart={() => {
                  dispatch({
                    type: "SHOW_BALAJI_POPUP",
                    payload: "cementMill3popup7",
                  });
                }}
                style={{
                  backgroundColor: balajiPopup.cementMill3popup7
                    ? "red"
                    : "#64cb00",
                }}
              >
                T1
              </button>
              <button
                className="btn d-block greenbtn p-1 Btn-1 mt-1"
                onClick={() => {
                  dispatch({
                    type: "SHOW_BALAJI_POPUP",
                    payload: "cementMill3popup8",
                  });
                }}
                onTouchStart={() => {
                  dispatch({
                    type: "SHOW_BALAJI_POPUP",
                    payload: "cementMill3popup8",
                  });
                }}
                style={{
                  backgroundColor: balajiPopup.cementMill3popup8
                    ? "red"
                    : "#64cb00",
                }}
              >
                T2
              </button>
            </div>
            <div className="p-1">
              <button
                className="btn d-block greenbtn p-1 Btn-1"
                onClick={() => {
                  dispatch({
                    type: "SHOW_BALAJI_POPUP",
                    payload: "cementMill3popup9",
                  });
                }}
                onTouchStart={() => {
                  dispatch({
                    type: "SHOW_BALAJI_POPUP",
                    payload: "cementMill3popup9",
                  });
                }}
                style={{
                  backgroundColor: balajiPopup.cementMill3popup9
                    ? "red"
                    : "#64cb00",
                }}
              >
                T3
              </button>
              <button
                className="btn d-block greenbtn p-1 Btn-1 mt-1"
                onClick={() => {
                  dispatch({
                    type: "SHOW_BALAJI_POPUP",
                    payload: "cementMill3popup10",
                  });
                }}
                onTouchStart={() => {
                  dispatch({
                    type: "SHOW_BALAJI_POPUP",
                    payload: "cementMill3popup10",
                  });
                }}
                style={{
                  backgroundColor: balajiPopup.cementMill3popup10
                    ? "red"
                    : "#64cb00",
                }}
              >
                T4
              </button>
            </div>
          </div>
        </div>
        <TextColumn
          useClass="position-absolute single-text-42"
          list={balajiCM3TextColumn4}
        />
        <div className="position-absolute single-text-43">
          <TextContainerWithWrapWord
            data={{
              useClass: "box-1 p-1 text-dark text-center",
              label: "K21BE1",
            }}
          />
          <div className=" box-1 p-2">
            <BlackContainer
              data={{
                label: "K21MD1_JT01",
                useClass: "greenTxt",
                unit: "kW",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <SingleText
          useClass="position-absolute single-text-44"
          yellowTextUp="563MT1"
          textClass="text-dark text-center"
          data={{
            blackTextLabel: "563RA1_IT01",
            blackTextClass: "greenTxt mt-01",
            unit: "A",
          }}
        />
        <div className="position-absolute single-text-45">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "563FN3",
            }}
          />
          <div className="col-2 p-1">
            <span className="green-line-circle"></span>
          </div>
          <BlackContainer
            data={{
              label: "563FN3_IT01",
              useClass: "greenTxt mt-01",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <TextColumn
          useClass="d-flex position-absolute single-text-46"
          list={balajiCM3TextColumn1}
        />
        <div className="p-1 position-absolute single-text-47">
          <button
            className="btn greenbtn p-1 Btn-1"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup14",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup14",
              });
            }}
            style={{
              backgroundColor: balajiPopup.cementMill3popup14
                ? "red"
                : "#64cb00",
            }}
          >
            LUB
          </button>
          <button
            className="btn greenbtn p-1 Btn-1 ml-2"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup13",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup13",
              });
            }}
            style={{
              backgroundColor: balajiPopup.cementMill3popup13
                ? "red"
                : "#64cb00",
            }}
          >
            T1
          </button>
        </div>
        <TextColumn
          useClass="position-absolute single-text-48"
          list={balajiCM3TextColumn5}
          text="563WP1"
          text2Class="text-dark"
        />
        <div className="position-absolute single-text-49">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "K21BC1",
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
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center mt-2 ml-3",
              label: "563WP1",
            }}
          />
          <BlackContainer
            data={{
              label: "563WB1_FT01",
              useClass: "greenTxt mt-01 ml-3",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-text-50">
          <div className="pole-shape">
            <div className="greenDot position-absolute mt-2">M</div>
          </div>
        </div>
        <div className="circle-group position-absolute single-text-52">
          <span className="green-line-circle">T</span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "563FN2",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-53",
            label: "WATER PRESSURE LOW",
          }}
        />
      </div>

      <div className="row m-0">
        <div className="offset-1 col-4 box-1 p-0">
          <div className="d-flex w-100 box-1 justify-content-around">
            <TextContainerWithWrapWord
              data={{
                useClass: "w-33 text-dark text-center border-right border-dark",
                label: "HYDRAULIC SYSTEM",
              }}
            />
            <div className="w-33 border-right border-dark pl-3 pr-3 text-center">
              <button
                className="pl-2 pr-2 btn greenbtn Btn-1"
                onClick={() => {
                  dispatch({
                    type: "SHOW_BALAJI_POPUP",
                    payload: "cementMill3popup16",
                  });
                }}
                onTouchStart={() => {
                  dispatch({
                    type: "SHOW_BALAJI_POPUP",
                    payload: "cementMill3popup16",
                  });
                }}
                style={{
                  backgroundColor: balajiPopup.cementMill3popup16
                    ? "red"
                    : "#64cb00",
                }}
              >
                HYD
              </button>
            </div>

            <TextContainerWithWrapWord
              data={{
                useClass: "w-33 text-dark text-center",
                label: "Tension Hyd Error",
              }}
            />
          </div>
          <div className="row m-0 justify-content-between align-items-center">
            <div className="col-2 p-1">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mb-2",
                  label: "563OP5",
                }}
              />
              <span className="grey-line-circle"></span>
            </div>
            <TopLeftBox
              parentDivClass="p-1 col-5"
              useClass="d-flex justify-content-between"
              list={balajiCM3TextColumn6}
            />
            <TopLeftBox
              parentDivClass="p-1 col-5"
              useClass="d-flex justify-content-between"
              list={balajiCM3TextColumn7}
            />
          </div>
        </div>
        <div className="col-1">
          <button
            className="btn d-block greenbtn p-0 Btn-1"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup1",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup1",
              });
            }}
            style={{
              backgroundColor: balajiPopup.cementMill3popup1
                ? "red"
                : "#64cb00",
            }}
          >
            563LQ1
          </button>
          <button
            className="btn d-block greenbtn p-0 mt-01 Btn-1"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup2",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup2",
              });
            }}
            style={{
              backgroundColor: balajiPopup.cementMill3popup2
                ? "red"
                : "#64cb00",
            }}
          >
            563LQ2
          </button>
          <button
            className="btn d-block greenbtn p-0 mt-01 Btn-1"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup3",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup3",
              });
            }}
            style={{
              backgroundColor: balajiPopup.cementMill3popup3
                ? "red"
                : "#64cb00",
            }}
          >
            563LQ3
          </button>
          <button
            className="btn d-block greenbtn p-0 mt-01 Btn-1"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup4",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup4",
              });
            }}
            style={{
              backgroundColor: balajiPopup.cementMill3popup4
                ? "red"
                : "#64cb00",
            }}
          >
            563LQ4
          </button>
          <button
            className="btn d-block greenbtn p-0 mt-01 Btn-1"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup5",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill3popup5",
              });
            }}
            style={{
              backgroundColor: balajiPopup.cementMill3popup5
                ? "red"
                : "#64cb00",
            }}
          >
            563LQ5
          </button>
        </div>
        <div className="col-2 box-1 p-0 justify-content-between align-items-center">
          <TopLeftBox
            parentDivClass="p-1"
            useClass="d-flex justify-content-between"
            list={balajiCM3TextColumn22}
          />
        </div>
      </div>
    </div>
  );
};

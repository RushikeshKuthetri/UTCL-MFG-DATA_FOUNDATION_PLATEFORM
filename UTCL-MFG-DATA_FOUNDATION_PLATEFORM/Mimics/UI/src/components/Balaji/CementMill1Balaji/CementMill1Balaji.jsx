import {
  TextContainerWithWrapWord,
  BlackContainer,
  TopLeftBox,
  SingleText,
  TextColumn,
} from "../../index";
import { useDispatch, useSelector } from "react-redux";
import {
  balajiCM1TextColumn1,
  balajiCM1TextColumn10,
  balajiCM1TextColumn11,
  balajiCM1TextColumn12,
  balajiCM1TextColumn13,
  balajiCM1TextColumn14,
  balajiCM1TextColumn15,
  balajiCM1TextColumn16,
  balajiCM1TextColumn17,
  balajiCM1TextColumn18,
  balajiCM1TextColumn19,
  balajiCM1TextColumn2,
  balajiCM1TextColumn20,
  balajiCM1TextColumn21,
  balajiCM1TextColumn22,
  balajiCM1TextColumn23,
  balajiCM1TextColumn3,
  balajiCM1TextColumn4,
  balajiCM1TextColumn5,
  balajiCM1TextColumn6,
  balajiCM1TextColumn7,
  balajiCM1TextColumn8,
  balajiCM1TextColumn9,
} from "../../../data/balaji/Cementmill1/balajiCM1Textcolumn";

export const CementMill1Balaji = () => {
  const dispatch = useDispatch();
  const { balajiPopup } = useSelector((state) => state);
  return (
    <div className="p-1 CementMill1Balaji w-100 h-100 position-relative d-flex flex-column justify-content-between">
      <div className="yellowline-Hr rightarrow position-absolute pipe-1"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-2"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-3"></div>
      <div className="yellowline-Hr position-absolute pipe-4"></div>
      <div className="yellowline-Vr position-absolute pipe-5"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-6"></div>
      <div className="yellowline-Hr position-absolute pipe-7"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-8"></div>
      <div className="yellowline-Vr position-absolute pipe-9"></div>
      <div className="yellowline-Hr position-absolute pipe-10"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-11"></div>
      <div className="yellowline-Hr position-absolute pipe-12"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-13"></div>
      <div className="yellowline-Vr position-absolute pipe-14"></div>
      <div className="yellowline-Hr position-absolute pipe-15"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>
      <div className="yellowline-Vr position-absolute pipe-17"></div>
      <div className="yellowline-Hr position-absolute pipe-18"></div>
      <div className="yellowline-Hr rightarrow position-absolute pipe-19"></div>
      <div className="yellowline-Vr position-absolute pipe-20"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-40"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-41"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-42"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-43"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-44"></div>
      <div className="yellowline-Hr position-absolute pipe-45"></div>
      <div className="yellowline-Hr position-absolute pipe-46"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-47"></div>
      <div className="yellowline-Hr position-absolute pipe-48"></div>
      <div className="yellowline-Vr position-absolute pipe-49"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-50"></div>
      <div className="yellowline-Vr position-absolute pipe-51"></div>
      <div className="yellowline-Vr upArrow position-absolute pipe-52"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-53"></div>
      <div className="yellowline-Hr position-absolute pipe-54"></div>
      <div className="yellowline-Vr position-absolute pipe-55"></div>
      <div className="yellowline-Vr position-absolute pipe-56"></div>
      <div className="yellowline-Vr position-absolute pipe-57"></div>

      <div className="pipe dotted-pipe position-absolute single-text-1"></div>
      <div className="pipe dotted-pipe position-absolute single-text-2"></div>
      <div className="position-absolute single-text-3 d-flex">
        <div className="squareplustri mr-2 d-flex align-items-end justify-content-center">
          <div className="circle-img c-img-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "7",
            }}
          />
        </div>
        <div className="squareplustri mr-2 d-flex align-items-end justify-content-center">
          <div className="circle-img c-img-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "8",
            }}
          />
        </div>
        <div className="squareplustri mr-2 d-flex align-items-end justify-content-center">
          <div className="circle-img c-img-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "D",
            }}
          />
        </div>
        <div className="squareplustri mr-2 d-flex align-items-end justify-content-center">
          <div className="circle-img c-img-1"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "E",
            }}
          />
        </div>
      </div>
      <div className="asset-72 position-absolute single-text-4 text-center">
        <BlackContainer
          data={{
            label: "561BF7_PT03",
            useClass: "greenTxt mx-auto",
            unit: "mmWc",
            unitColor: "unitColor",
            // hhValue: 0,
            // hhTime: 0,
          }}
        />
      </div>
      <div className="containerImage d-flex flex-column justify-content-center align-items-center position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "561BI2",
          }}
        />
        <BlackContainer
          data={{
            label: "561BI2_WT01",
            useClass: "greenTxt mx-auto",
            unit: "t",
            unitColor: "unitColor",
            // hhtime: 0,
            // hhValue: 0
          }}
        />
      </div>
      <div className="containerImage d-flex flex-column justify-content-center align-items-center position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "561B12",
          }}
        />
      </div>
      <div className="containerImage d-flex flex-column justify-content-center align-items-center position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "561BI1",
          }}
        />
        <BlackContainer
          data={{
            label: "561BI1_WT01",
            useClass: "greenTxt mx-auto",
            unit: "t",
            unitColor: "unitColor",
            hhValue: 16,
            hhTime: 0,
          }}
        />
      </div>
      <div className="hpipecircle position-absolute single-text-63"> </div>
      <div className="squareplustri position-absolute single-text-8"></div>
      <div className="squareplustri position-absolute single-text-9"></div>
      <div className="asset-71 position-absolute single-text-10 pt-4">
        <div className="pl-4 d-flex w-100 justify-content-between align-items-end top">
          <div className=""></div>
          <div>
            <div className="greenoutlineshape1"></div>
            <div className="redlineshape1 mt-2 ml-2"></div>
          </div>
          <div>
            <div className="greenoutlineshape1"></div>
            <div className="redlineshape1 mt-2 mr-2"></div>
          </div>
          <div className="pole-shape">
            <div className="greenDot position-absolute mt-2">M</div>
          </div>
        </div>
        <div className="d-flex justify-content-between h-75 mt-2">
          <TextColumn
            list={balajiCM1TextColumn20}
            useClass="d-flex flex-column justify-content-between"
          />
          {/* <BlackContainer
            data={{
              label: "533WF1_FT01",
              useClass: "greenTxt m-auto",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          /> */}
          <TextColumn
            list={balajiCM1TextColumn21}
            useClass="d-flex flex-column justify-content-between"
          />
        </div>
      </div>
      <div className="asset-67 position-absolute single-text-11 d-flex justify-content-around align-items-end">
        <TextColumn list={balajiCM1TextColumn5} />
        <div className="d-flex flex-column">
          <button
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill1popup7",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill1popup7",
              });
            }}
            style={{
              backgroundColor: balajiPopup.cementMill1popup7
                ? "red"
                : "#64cb00",
            }}
          >
            561LQ1
          </button>
          <button
            className="mt-1"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill1popup8",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill1popup8",
              });
            }}
            style={{
              backgroundColor: balajiPopup.cementMill1popup8
                ? "red"
                : "#64cb00",
            }}
          >
            561LQ2
          </button>
          <button
            className="mt-1"
            onClick={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill1popup10",
              });
            }}
            onTouchStart={() => {
              dispatch({
                type: "SHOW_BALAJI_POPUP",
                payload: "cementMill1popup10",
              });
            }}
            style={{
              backgroundColor: balajiPopup.cementMill1popup10
                ? "red"
                : "#64cb00",
            }}
          >
            561LQ3
          </button>
        </div>
        <TextColumn list={balajiCM1TextColumn6} />
        <TextColumn list={balajiCM1TextColumn4} />
      </div>
      <div className="brick-cooler-img position-absolute single-text-12"></div>
      <div className="asset-68 position-absolute single-text-13"></div>
      <div className="position-absolute single-text-14 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "Clinker",
            }}
          />
          <BlackContainer
            data={{
              label: "511HP1_LT01",
              useClass: "greenTxt",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "531WF1",
            }}
          />
          <BlackContainer
            data={{
              label: "531WF1_FT01",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_561BM1_RECIPE_F21",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "Gypsum",
            }}
          />
          <BlackContainer
            data={{
              label: "511HP3_LT01",
              useClass: "greenTxt",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "531WF3",
            }}
          />
          <BlackContainer
            data={{
              label: "531WF3_FT01",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_561BM1_RECIPE_F22",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "Dry Flyash",
            }}
          />
          <BlackContainer
            data={{
              label: "K91HP1_WT01",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "K91SFF1",
            }}
          />
          <BlackContainer
            data={{
              label: "K91SFF1_FT01",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_561BM1_RECIPE_F24",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "Limestone",
            }}
          />
          <BlackContainer
            data={{
              label: "511HP2_LT01",
              useClass: "greenTxt",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "531WF2",
            }}
          />
          <BlackContainer
            data={{
              label: "531WF2_FT01",
              useClass: "greenTxt",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_561BM1_RECIPE_F23",
              useClass: "greenTxt mt-1",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <TopLeftBox
        parentDivClass="position-absolute single-text-15"
        useClass="d-flex justify-content-between"
        list={balajiCM1TextColumn15}
      />
      <div className="box-1 position-absolute single-text-16">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "Not Compl.",
          }}
        />
        <TopLeftBox
          parentDivClass="p-2"
          useClass="d-flex justify-content-between"
          list={balajiCM1TextColumn16}
        />
      </div>
      <div className="position-absolute single-text-17 text-right">
        <div className="yellowline-Vr downArrow position-absolute pipe-21"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-22"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-24"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-25"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-26"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-27"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-28"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-29"></div>
        <div className="yellowline-Vr downArrow position-absolute pipe-30"></div>
        <div className="yellowline-Hr position-absolute pipe-31"></div>
        <div className="yellowline-Hr position-absolute pipe-32"></div>
        <div className="yellowline-Vr position-absolute pipe-33"></div>
        <div className="yellowline-Vr position-absolute pipe-34"></div>
        <div className="yellowline-Hr position-absolute pipe-35"></div>
        <div className="yellowline-Hr position-absolute pipe-36"></div>
        <div className="yellowline-Hr position-absolute pipe-38"></div>
        <div className="yellowline-Vr position-absolute pipe-39"></div>
        <div className="d-flex justify-content-end pl-2">
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "WF3",
              }}
            />
            <span className="greenDot">M</span>
          </div>

          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "WF3",
              }}
            />
            <span className="greenDot mr-2">M</span>
          </div>
          <div className="mr-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "WF3",
              }}
            />
            <span className="greenDot mr-2">M</span>
          </div>
        </div>
        <div className="hpipecircle w-75 ml-auto mt-4">
          <span className="grayDot"></span>
          <span className="greenDot">M</span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "531BC1",
          }}
        />
        <div className="hpipecircle w-100 ml-auto">
          <span className="grayDot"></span>
          <span className="greenDot">M</span>
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "531BC2",
            }}
          />
          <BlackContainer
            data={{
              label: "531BC2_IT01",
              useClass: "greenTxt ml-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-end mt-3 ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "531MW1",
            }}
          />
          <div className="redlineshape1 ml-3"></div>
        </div>
        <div className="justify-content-end d-flex ml-auto mt-3 pr-3">
          <BlackContainer
            data={{
              label: "531BC1_IT01",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark position-absolute mill",
              label: "MILL",
            }}
          />
        </div>

        <div className="d-flex w-100 justify-content-end mt-3 ml-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "531BC3",
            }}
          />
          <div className="hpipecircle w-50">
            <span className="grayDot"></span>
            <span className="greenDot">M</span>
          </div>
        </div>
        <div className="d-flex w-100 justify-content-end mt-2 pr-2 ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "561BC4",
            }}
          />
          <div className="hpipecircle w-50">
            <span className="grayDot"></span>
            <span className="greenDot">M</span>
          </div>
        </div>
        <BlackContainer
          data={{
            label: "561BC4_IT01",
            useClass: "greenTxt ml-auto mr-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-18"
        list={balajiCM1TextColumn17}
        text="RPM"
        text2Class="text-dark"
      />
      <div className="d-flex position-absolute single-text-19">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "561AD2",
          }}
        />
        <BlackContainer
          data={{
            label: "561CN1_PT01",
            useClass: "greenTxt ml-2",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        list={balajiCM1TextColumn8}
        useClass="position-absolute single-text-20"
      />
      <button
        className="btn greenbtn Btn-1 position-absolute single-text-21"
        onClick={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",
            payload: "cementMill1popup4",
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",
            payload: "cementMill1popup4",
          });
        }}
        style={{
          backgroundColor: balajiPopup.cementMill1popup4 ? "red" : "#64cb00",
        }}
      >
        561FNC
      </button>
      <TextColumn
        list={balajiCM1TextColumn9}
        useClass="position-absolute single-text-22"
      />
      <div className="circle-group position-absolute single-text-23">
        <span className="green-line-circle"></span>
      </div>
      <div className="greenDot position-absolute single-text-24">M</div>
      <button
        className="btn greenbtn Btn-1 position-absolute single-text-25"
        onClick={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",
            payload: "cementMill1popup1",
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",
            payload: "cementMill1popup1",
          });
        }}
        style={{
          backgroundColor: balajiPopup.cementMill1popup1 ? "red" : "#64cb00",
        }}
      >
        TEMP
      </button>
      <div className="pole-shape position-absolute single-text-26">
        <div className="greenDot position-absolute mt-2">M</div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-65",
          label: "561HT1",
        }}
      />
      <div className="d-flex position-absolute single-text-66">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "561HT1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BDS AlARAM",
          }}
        />
      </div>
      <div className="position-absolute single-text-67">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "561AS1",
          }}
        />
        <BlackContainer
          data={{
            label: "561MD1_JT01",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
            hhTime: 0,
            hhValue: 4800,
          }}
        />
      </div>
      <div className="circle-group position-absolute single-text-68">
        <span className="green-line-circle"></span>
      </div>
      <div className="d-flex position-absolute single-text-69">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-5",
            label: "BM2 Inlet",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Fresh Air",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-70",
          label: "WATER PRESSURE LOW",
        }}
      />
      <div className="d-flex position-absolute single-text-71">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "561MW1",
          }}
        />
        <div className="redlineshape1"></div>
      </div>

      <TextColumn
        list={balajiCM1TextColumn3}
        useClass="position-absolute single-text-27"
      />
      <TextColumn
        list={balajiCM1TextColumn1}
        useClass="position-absolute single-text-28"
      />
      <div className="box-1 position-absolute single-text-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "561HT1",
          }}
        />
        <div className="d-flex align-items-end p-1">
          {/* Circle add hoga */}

          <TextColumn list={balajiCM1TextColumn22} />
        </div>
      </div>

      <BlackContainer
        data={{
          label: "561LQ4_TT01",
          useClass: "greenTxt mt-1 position-absolute single-text-30",
          unit: "°C",
          unitColor: "unitColor",
          hhTime: 0,
          hhValue: 65,
        }}
      />

      <div className="box-1 position-absolute single-text-31">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "K21BE1",
          }}
        />
        <div className="d-flex align-items-end p-1">
          <BlackContainer
            data={{
              label: "K21MD1_JT01",
              useClass: "greenTxt mt-1",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <TextColumn
        list={balajiCM1TextColumn23}
        useClass="d-flex position-absolute single-text-32"
      />
      <div className="box-1 position-absolute single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center box-1",
            label: "594MD1",
          }}
        />
        <div className="p-1">
          <BlackContainer
            data={{
              label: "594MD1_JT01",
              useClass: "greenTxt",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "594MD1_JT02",
              useClass: "greenTxt mt-01",
              unit: "kW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <TextColumn
        list={balajiCM1TextColumn7}
        useClass="position-absolute single-text-34"
      />
      <TextColumn
        list={balajiCM1TextColumn2}
        useClass="position-absolute single-text-35"
      />

      <div className="box-1 position-absolute single-text-36">
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
            label: "533WF1_FT01",
            useClass: "greenTxt mt-01",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div>

      <BlackContainer
        data={{
          label: "561BF2_TT01",
          useClass: "greenTxt mt-01 position-absolute single-text-37",
          unit: "°C",
          unitColor: "unitColor",
          // hhTime: 0,
          // hhValue: 0
        }}
      />
      {/* <div className="position-absolute single-text-38">
        <div className="greenDot  mx-auto"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "l",
          }}
        />
        <BlackContainer
          data={{
            label: "533WF1_FT01",
            useClass: "greenTxt mx-auto",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "533WF1_FT01",
            useClass: "greenTxt mt-5 mx-auto",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
      </div> */}
      <div className="position-absolute single-text-39">
        <div className="greenDot  mx-auto">M</div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
            label: "561SR1",
          }}
        />
        <BlackContainer
          data={{
            label: "561SR1_TB03",
            useClass: "greenTxt mx-auto",
            unit: "°C",

            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "561SR1_TB04",
            useClass: "greenTxt mt-5 mx-auto",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <button
        className="btn greenbtn Btn-1 position-absolute single-text-40"
        onClick={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",
            payload: "cementMill1popup6",
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",
            payload: "cementMill1popup6",
          });
        }}
        style={{
          backgroundColor: balajiPopup.cementMill1popup6 ? "red" : "#64cb00",
        }}
      >
        TEMP
      </button>
      <div className="position-absolute single-text-41 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "591MD1",
          }}
        />
        <BlackContainer
          data={{
            label: "591MD1_JT01",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
            hhValue: 70,
            hhTime: 3,
          }}
        />
      </div>
      <div className="position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "Lime stone not coming",
          }}
        />
        <BlackContainer
          data={{
            label: "561PG1_TB01",
            useClass: "greenTxt ml-auto",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        list={balajiCM1TextColumn14}
        useClass="position-absolute single-text-43"
      />
      <BlackContainer
        data={{
          label: "561RP1_PT01",
          useClass: "greenTxt position-absolute single-text-44",
          unit: "mmWc",
          unitColor: "unitColor",
          // hhValue: 0,
          // hhTime: 0,
        }}
      />
      <button
        className="btn greenbtn Btn-1 position-absolute single-text-45"
        onClick={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",
            payload: "cementMill1popup2",
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",
            payload: "cementMill1popup2",
          });
        }}
        style={{
          backgroundColor: balajiPopup.cementMill1popup2 ? "red" : "#64cb00",
        }}
      >
        TEMP
      </button>
      <TextColumn
        useClass="d-flex justify-content-between position-absolute single-text-46"
        list={balajiCM1TextColumn19}
      />
      <div className="d-flex position-absolute single-text-47">
        <div className="yellowline-Hr rightarrow position-absolute pipe-37"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "561LUJ",
          }}
        />
        <div className="circle-group ml-2">
          <span className="green-line-circle text-center"></span>
        </div>

        <div className="redlineshape1 ml-3"></div>
      </div>
      <TextColumn
        useClass="position-absolute single-text-48"
        list={balajiCM1TextColumn11}
      />
      <TextColumn
        useClass="position-absolute single-text-49"
        list={balajiCM1TextColumn13}
        text="561LD1"
        text2Class="text-dark"
      />
      <TextColumn
        useClass="position-absolute single-text-50"
        list={balajiCM1TextColumn12}
      />
      <button
        className="btn greenbtn Btn-1 position-absolute single-text-51"
        onClick={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",
            payload: "cementMill1popup5",
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",
            payload: "cementMill1popup5",
          });
        }}
        style={{
          backgroundColor: balajiPopup.cementMill1popup5 ? "red" : "#64cb00",
        }}
      >
        561FNB
      </button>
      <TextColumn
        useClass="position-absolute single-text-52"
        list={balajiCM1TextColumn10}
      />
      <div className="position-absolute single-text-53">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "561MS2",
          }}
        />
        <div className="hpipecircle mt-2">
          <span className="grayDot"></span>
          <span className="greenDot">M</span>
        </div>
      </div>
      <div className="position-absolute single-text-54">
        <div className="hpipecircle">
          <span className="greenDot">M</span>
          <span className="grayDot"></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "561VF1",
          }}
        />
      </div>
      <div className="position-absolute single-text-55">
        <div className="hpipecircle">
          <span className="greenDot">M</span>
          <span className="grayDot"></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "561BC3",
          }}
        />
      </div>
      <div className="position-absolute single-text-56">
        <div className="hpipecircle">
          <span className="grayDot"></span>
          <span className="greenDot">M</span>
        </div>
      </div>
      <TextColumn
        useClass="position-absolute single-text-57"
        list={balajiCM1TextColumn18}
      />
      <BlackContainer
        data={{
          label: "K21BC1_IT01",
          useClass: "greenTxt position-absolute single-text-58",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-59">
        <div className="redlineshape1 mr-3"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "561MW3",
          }}
        />
      </div>
      <SingleText
        useClass="position-absolute single-text-60"
        yellowTextUp="561SFM1"
        textClass="text-dark text-center"
        data={{
          blackTextLabel: "561SFM1_FT01",
          blackTextClass: "greenTxt mt-01",
          unit: "t/h",
          hhValue: 450,
          hhTime: 0,
        }}
      />
      <SingleText
        useClass="position-absolute single-text-61"
        yellowTextUp="561BF2"
        textClass="text-dark text-center"
        data={{
          blackTextLabel: "561BF2_PT03",
          blackTextClass: "greenTxt mt-01",
          unit: "mmWc",
          // hhValue: 0,
          // hhTime: 0
        }}
      />
      <div className="position-absolute single-text-62 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mr-5",
            label: "To 591ASI",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "To 591AS2",
          }}
        />
      </div>
      <div className="hpipecircle position-absolute single-text-64"> </div>
      <button
        className="btn greenbtn Btn-1 position-absolute single-text-72"
        onClick={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",
            payload: "cementMill1popup9",
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_BALAJI_POPUP",
            payload: "cementMill1popup9",
          });
        }}
        style={{
          backgroundColor: balajiPopup.cementMill1popup9 ? "red" : "#64cb00",
        }}
      >
        RP_FEED
      </button>
    </div>
  );
};

import { useDispatch } from "react-redux";
import {
  baikunthKM2TextColumn1,
  baikunthKM2TextColumn2,
  baikunthKM2TextColumn3,
  baikunthKM2TextColumn4,
  baikunthKM2TextColumn5,
  baikunthKM2TextColumn6,
  baikunthKM2TextColumn7,
} from "../../../data/baikunth/coalMills/CoalMill2/baikunthKM2TextColumn";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  TopLeftBox,
  ProgressBarMimic,
} from "../../index";

export const CoalMill2Baikunth = () => {
  const dispatch = useDispatch();
  return (
    <div className="coalmill2-baikunth w-100 h-100 position-relative">
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeVr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="yellowline-Vr position-absolute pipe-10"></div>
      <div className="yellowline-Hr position-absolute pipe-11"></div>
      <div className="yellowline-Vr position-absolute pipe-12"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-13"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-14"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-15"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <button
        className="btn greenbtn Btn-1 position-absolute single-text-31"
        onClick={() => {
          dispatch({
            type: "SHOW_BAIKUNTH_POPUP",
            payload: "baikunthcoalmills",
          });
        }}
        onTouchStart={() => {
          dispatch({
            type: "SHOW_BAIKUNTH_POPUP",
            payload: "baikunthcoalmills",
          });
        }}
      >
        Overview
      </button>
      <div className="middle-sqr-container position-absolute single-text-1">
        <ProgressBarMimic />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "FINE COAL HOPPER",
          }}
        />
        <BlackContainer
          data={{
            label: "FCHN02_T",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-2 d-flex justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "CYCLONE",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-3 d-flex">
        <span className="greenDot m-auto">M</span>
      </div>
      <div className="img-64 pr-3 position-absolute single-text-4 d-flex  flex-column align-items-center justify-content-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "SND.LVL.",
          }}
        />
        <BlackContainer
          data={{
            label: "CLM2_SOUND_LVL",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="img-65 position-absolute single-text-5 d-flex flex-column pb-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "RAW COAL HOPPER",
          }}
        />
        <span className="greenDot mx-auto mt-auto"></span>
      </div>
      <div className="img-66 position-absolute single-text-6 d-flex justify-content-center align-items-center">
        <span className="greenDot"></span>
      </div>
      <div className="containerImage position-absolute single-text-7">
        <BlackContainer
          data={{
            label: "CLM2_DPDC",
            useClass: "greenTxt mt-1 mx-auto",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-3",
            label: "BAGFILTER",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-8"></div>
      <div className="roller-drum position-absolute single-text-9 d-flex justify-content-center align-items-center">
        <span className="greenDot"></span>
      </div>
      <div className="roller-drum position-absolute single-text-10 d-flex justify-content-center align-items-center">
        <span className="greenDot"></span>
      </div>
      <div className="roller-drum position-absolute single-text-11 d-flex justify-content-center align-items-center">
        <span className="greenDot"></span>
      </div>
      <div className="hpipecircle position-absolute single-text-12">
        <span className="greenDot"></span>
      </div>
      <div className=" position-absolute single-text-13">
        <div className="hpipecircle">
          <span className="grayDot"></span>
          <span className="grayDot"></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "TK20 T OFF TK20 T ON TIME",
          }}
        />
      </div>
      <div className="position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt",
            label: "COMP PRESSURE",
          }}
        />
        <BlackContainer
          data={{
            label: "COMPRS_PRESS",
            useClass: "greenTxt mt-01",
            unit: "KG/CM2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        list={baikunthKM2TextColumn1}
        useClass="position-absolute single-text-15"
      />
      <TextColumn
        list={baikunthKM2TextColumn4}
        useClass="boxContainer d-flex position-absolute single-text-16"
      />
      <TopLeftBox
        parentDivClass="position-absolute single-text-17"
        useClass="d-flex justify-content-between mt-1"
        list={baikunthKM2TextColumn2}
      />
      <TopLeftBox
        parentDivClass="position-absolute single-text-18"
        useClass="d-flex justify-content-between mt-1"
        list={baikunthKM2TextColumn5}
      />
      <BlackContainer
        data={{
          label: "CLM2_IL_OIL_PRS_M",
          useClass: "greenTxt position-absolute single-text-19",
          unit: "KW",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CLM2_OL_OIL_PRS_M",
          useClass: "greenTxt position-absolute single-text-20",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        list={baikunthKM2TextColumn6}
        useClass="position-absolute single-text-21"
      />
      <BlackContainer
        data={{
          label: "CLM2_CSC_TMP",
          useClass: "greenTxt position-absolute single-text-22",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />

      <BlackContainer
        data={{
          label: "CLM2_DCEXHF_KW",
          useClass: "greenTxt position-absolute single-text-23",
          unit: "KW",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        list={baikunthKM2TextColumn7}
        useClass="vposition-absolute single-text-24"
      />
      <BlackContainer
        data={{
          label: "FCHN02_LVL",
          useClass: "greenTxt position-absolute single-text-25",
          unit: "mtr",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-26">
        <div className="redgrey-sqaure"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt ml-2",
            label: "GB OIL PUMP",
          }}
        />
      </div>

      <TextColumn
        list={baikunthKM2TextColumn3}
        useClass="CGRnBox position-absolute single-text-27"
      />
      <div className="position-absolute single-text-28 redgrey-sqaure"></div>
      <div className="d-flex position-absolute single-text-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mr-2",
            label: "COLD AIR DMP",
          }}
        />{" "}
        <div className="greenSqure"></div>
      </div>
      <div className="d-flex position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mr-2",
            label: "HOT AIR DMP",
          }}
        />
        <div className="greenSqure"></div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-32",
          label: "OIL PUMP A ",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-33",
          label: "OIL PUMP B ",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-34",
          label: "TO KILN TO PRECALCINER",
        }}
      />
    </div>
  );
};

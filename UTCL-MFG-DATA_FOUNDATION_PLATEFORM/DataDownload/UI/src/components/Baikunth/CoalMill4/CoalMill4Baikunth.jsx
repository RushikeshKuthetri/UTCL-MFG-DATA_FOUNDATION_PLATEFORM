import { useDispatch } from "react-redux";
import {
  baikunthKM4TextColumn1,
  baikunthKM4TextColumn2,
  baikunthKM4TextColumn3,
  baikunthKM4TextColumn4,
  baikunthKM4TextColumn5,
  baikunthKM4TextColumn6,
  baikunthKM4TextColumn7,
} from "../../../data/baikunth/coalMills/CoalMill4/baikunthKM4TextColumn";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  TopLeftBox,
} from "../../index";
export const CoalMill4Baikunth = () => {
  const dispatch = useDispatch();
  return (
    <div className="coalmill4-baikunth w-100 h-100 position-relative">
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeHr position-absolute pipe-3"></div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeVr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeHr position-absolute pipe-11"></div>
      <div className="pipeHr position-absolute pipe-12">HOT AIR</div>
      <div className="pipeVr position-absolute pipe-13"></div>
      <div className="pipeHr position-absolute pipe-14"></div>
      <div className="yellowline-Hr leftarrow position-absolute pipe-16"></div>
      <div className="pipeHr position-absolute pipe-15"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      
      <div className="yellowline-Vr downArrow position-absolute pipe-19"></div>  
      <div className="yellowline-Vr downArrow position-absolute pipe-20"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-21"></div>  
      <div className="yellowline-Vr downArrow position-absolute pipe-22"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-23"></div>
      <button
        className="btn greenbtn Btn-1 position-absolute single-text-33"
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
        <BlackContainer
          data={{
            label: "FCHN04_LVL",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "FINE COAL HOPPER",
          }}
        />
        <BlackContainer
          data={{
            label: "FCHN04_T",
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
        <span className="greenDot m-auto"></span>
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
            label: "CLM4_SOUND_LVL",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-5">
        <div className="middle-sqr-container d-flex flex-column pb-5">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark text-center",
              label: "RAW COAL HOPPER",
            }}
          />
        </div>
        <div className="containerImage"></div>
      </div>

      <div className="img-66 position-absolute single-text-6 d-flex justify-content-center align-items-center">
        <span className="greenDot"></span>
      </div>
      <div className="containerImage position-absolute single-text-7">
        <BlackContainer
          data={{
            label: "CLM4_DPDC",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
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
        {" "}
        <span className="greenDot"></span>
      </div>
      <div className="hpipecircle position-absolute single-text-12">
        <span className="greenDot"></span>
        <span className="greenDot"></span>
      </div>
      <div className="hpipecircle position-absolute single-text-13">
        <span className="greenDot"></span>
        <span>WEIGH FEEDER</span>
        <span className="greenDot"></span>
      </div>
      <div className=" position-absolute single-text-14">
      <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt",
            label: "COMP PRESSURE",
          }}
        />
      <BlackContainer
        data={{
          label: "COMPRS_PRESS",
          useClass: "greenTxt mt-1",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      </div>
      <TextColumn
        list={baikunthKM4TextColumn1}
        useClass="position-absolute single-text-15"
      />
      <TextColumn
        list={baikunthKM4TextColumn3}
        useClass="boxContainer d-flex position-absolute single-text-16"
      />
      <TextColumn
        list={baikunthKM4TextColumn2}
        useClass="position-absolute single-text-17"
      />
      <TextColumn
        list={baikunthKM4TextColumn4}
        useClass="position-absolute single-text-18"
      />
      <BlackContainer
        data={{
          label: "CLM4_IL_OIL_PRS_M",
          useClass: "greenTxt position-absolute single-text-19",
          unit: "KG/CM2",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CLM4_OL_OIL_PRS_M",
          useClass: "greenTxt position-absolute single-text-20",
          unit: "KG/CM2",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        list={baikunthKM4TextColumn5}
        useClass="position-absolute single-text-21"
      />
      <div className="greenDot position-absolute single-text-22"></div>
      <TopLeftBox
        parentDivClass="position-absolute single-text-23"
        useClass="d-flex justify-content-between mt-1"
        list={baikunthKM4TextColumn7}
      />
      <BlackContainer
        data={{
          label: "CLM4_HPR_TMP",
          useClass: "greenTxt position-absolute single-text-24",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CLM4_CSC_TMP",
          useClass: "greenTxt position-absolute single-text-25",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="greenSqure position-absolute single-text-26"></div>
      <div className="boxContainer position-absolute single-text-27">
        <div className="d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt",
            label: "K-1 BOOSTER FAN",
          }}
        />
        <div className="greenDot ml-2"></div>
        </div>
      
        <TextColumn list={baikunthKM4TextColumn6} useClass="d-flex mt-2" />
      </div>
      <div className="img-66 position-absolute single-text-28 d-flex justify-content-center align-items-center">
        <span className="greenDot"></span>
      </div>

      <div className="d-flex position-absolute single-text-29">
      <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mr-3",
            label: "HOT AIR DMP",
          }}
        />  
       <div className="greenSqure"></div>
      </div>
   
          <div className="d-flex position-absolute single-text-30">
      <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mr-3",
            label: "COLD AIR DMP",
          }}
        />  
       <div className="greenSqure"></div>
      </div>
    
      <div className="position-absolute single-text-31">
      <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt",
            label: "I/L BRG OIL PUMP",
          }}
        />
       <div className="greenDot mt-2"></div>
      </div>
      <div className="CGRnBox position-absolute single-text-32 cgreen-text">
        MILL I/L TEMP &#62; 200 THEN MILL TRIP
      </div>
      <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-text-34",
            label: "TO KILN TO PRECALCINER",
          }}
        />
      <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-text-35",
            label: "GB OIL PUMP-1",
          }}
        />
            <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-text-36",
            label: "GB OIL PUMP-2",
          }}
        />
         
         <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-39",
          label: "K-1 ID FAN  INLET",
        }}
      />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-text-40",
            label: "FEED PIT",
          }}
        />
        <div className="position-absolute single-text-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt",
            label: "MILL I/L DRAFT",
          }}
        />
      <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "MILL I/L TMP.",
          }}
        />
      <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "MILL I/L BRG TEMP",
          }}
        />
        </div>
        <div className="position-absolute single-text-42">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt",
            label: "MILL O/L DRAFT",
          }}
        />
      <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "MILL O/L TMP.",
          }}
        />
      <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "MILL O/L BRG TEMP",
          }}
        />
        </div>
    </div>
  );
};

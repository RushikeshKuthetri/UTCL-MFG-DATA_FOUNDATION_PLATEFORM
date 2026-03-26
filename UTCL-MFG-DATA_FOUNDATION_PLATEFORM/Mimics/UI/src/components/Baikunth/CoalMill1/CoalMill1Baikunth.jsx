import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  TopLeftBox,
} from "../../index";
import { useDispatch } from "react-redux";
import {
  baikunthKM1TextColumn1,
  baikunthKM1TextColumn2,
  baikunthKM1TextColumn3,
  baikunthKM1TextColumn4,
  baikunthKM1TextColumn5,
  baikunthKM1TextColumn6,
  baikunthKM1TextColumn7,
} from "../../../data/baikunth/coalMills/CoalMill1/baikunthKM1TextColumn";
export const CoalMill1Baikunth = () => {
  const dispatch = useDispatch();
  return (
    <div className="coalmill1-baikunth w-100 h-100 position-relative">
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeVr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="yellowline-Vr downArrow  position-absolute pipe-10"></div>
      <div className="yellowline-Hr position-absolute pipe-11"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-12"></div>      
      <div className="yellowline-Vr downArrow position-absolute pipe-13"></div>  
      <div className="yellowline-Vr downArrow position-absolute pipe-14"></div>  
      <div className="yellowline-Vr downArrow position-absolute pipe-15"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>  
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
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
        <BlackContainer
          data={{
            label: "FCHNOI_LVL",
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
            label: "FCHNOI_T",
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
            label: "SND LVI..",
          }}
        />
        <BlackContainer
          data={{
            label: "CLM1_SOUND_LVL",
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
            label: "RAW COAL BOPPER",
          }}
        />
        <span className="greenDot mx-auto mt-auto"></span>
      </div>
      <div className="img-66 position-absolute single-text-6 d-flex justify-content-center align-items-center">
        <span className="greenDot"></span>
      </div>
      <div className="containerImage position-absolute single-text-7 p-1">
        <BlackContainer
          data={{
            label: "CLM1_DPDC",
            useClass: "greenTxt",
            unit: "MMWG",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center mt-2",
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
      <div className="hpipecircle position-absolute single-text-13">
        <span className="grayDot"></span>
        <span className="grayDot"></span>
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
          useClass: "greenTxt mt-2",
          unit: "KG/CM2",
          unitColor: "unitColor",
        }}
      />
      </div>

      <TextColumn
        list={baikunthKM1TextColumn5}
        useClass="position-absolute single-text-15"
      />
      <TextColumn
        list={baikunthKM1TextColumn4}
        useClass="boxContainer d-flex position-absolute single-text-16"
      />
      <TopLeftBox
        parentDivClass="position-absolute single-text-17"
        useClass="d-flex justify-content-between mt-1"
        list={baikunthKM1TextColumn2}
      />
      <TopLeftBox
        parentDivClass="position-absolute single-text-18"
        useClass="d-flex justify-content-between mt-1"
        list={baikunthKM1TextColumn3}
      />
      <BlackContainer
        data={{
          label: "CLM1_IL_OIL_PRS_M",
          useClass: "greenTxt position-absolute single-text-19",
          unit: "KG/CM2",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CLM1_OL_OIL_PRS_M",
          useClass: "greenTxt position-absolute single-text-20",
          unit: "KG/CM2",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        list={baikunthKM1TextColumn6}
        useClass="position-absolute single-text-21"
      />
      <BlackContainer
        data={{
          label: "CLM1_DCEXF_RPM",
          useClass: "greenTxt position-absolute single-text-23",
          unit: "rpm",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-24">
      <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mb-2",
            label: "SEP SPEED SETPOINT",
          }}
        />
      <BlackContainer
        data={{
          label: "CMIDYNSEP_EXTSP_REF",
          useClass: "greenTxt",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      </div>

      <BlackContainer
        data={{
          label: "CLM1_CSG_TMP",
          useClass: "greenTxt position-absolute single-text-25",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-26">
      <span className="greenSqure"></span>
      <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt ml-2",
            label: "TMR FB",
          }}
        />
      </div>
      <TextColumn
        list={baikunthKM1TextColumn7}
        useClass="position-absolute single-text-27"
      />
      <TextColumn
        list={baikunthKM1TextColumn1}
        useClass="position-absolute single-text-28"
      />
      <div className="d-flex position-absolute single-text-29">
         <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mr-2",
            label: "COLD AIR DMP",
          }}
        /> <div className="greenSqure"></div>
     
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
            label: "TO KILN TO PRECALCINER",
          }}
        />
             <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-text-33",
            label: "FEED PIT",
          }}
        />
           <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-text-34",
            label: "OIL PUMP A (I/L OIL PUMP)",
          }}
        />
            <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt position-absolute single-text-35",
            label: "OIL PUMP B (O/L OIL PUMP)",
          }}
        />
        <div className="CGRnBox position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt",
            label: "MILL I/L TEMP  > 200THEN MILL TRIP)",
          }}
        />
        </div>
  
    </div>
  );
};

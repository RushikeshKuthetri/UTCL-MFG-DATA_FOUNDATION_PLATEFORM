import { useDispatch } from "react-redux";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  ProgressBarMimic,
} from "../../index";
export const CoalMill3Baikunth = () => {
  const dispatch = useDispatch();
  return (
    <div className="coalmill3-baikunth w-100 h-100 position-relative">
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeHr position-absolute pipe-3"></div>
      <div className="pipeHr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeVr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="yellowline-Vr downArrow  position-absolute pipe-10"></div>
      <div className="yellowline-Hr position-absolute pipe-11"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-12"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-14"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-15"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-16"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-17"></div>
      <div className="yellowline-Vr downArrow position-absolute pipe-18"></div>
      <button
        className="btn greenbtn Btn-1 position-absolute single-text-28"
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
            label: "FCHN03 T",
            useClass: "greenTxt mt-2 mx-auto",
            unit: "",
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
            label: "Clinker",
          }}
        />
        <BlackContainer
          data={{
            label: "CLM3 SOUND LVL",
            useClass: "greenTxt mt-2",
            unit: "",
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
        {" "}
        <span className="greenDot"></span>
      </div>
      <div className="containerImage position-absolute single-text-7 d-flex justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "BAGFILTER",
          }}
        />
      </div>
      <div className="containerImage position-absolute single-text-8"></div>
      <div className="roller-drum position-absolute single-text-9 d-flex justify-content-center align-items-center">
        {" "}
        <span className="greenDot"></span>
      </div>
      <div className="roller-drum position-absolute single-text-10 d-flex justify-content-center align-items-center">
        {" "}
        <span className="greenDot"></span>
      </div>
      <div className="roller-drum position-absolute single-text-11 d-flex justify-content-center align-items-center">
        {" "}
        <span className="greenDot"></span>
      </div>
      <div className="hpipecircle position-absolute single-text-12">
        <span className="greenDot"></span>
      </div>
      <div className="hpipecircle position-absolute single-text-13">
        <span className="grayDot"></span>
        <span className="grayDot"></span>
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
            label: "COMPRS PRESS",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <BlackContainer
          data={{
            label: "CLM3 DYNTEMP TOP TMP",
            useClass: "greenTxt ml-3",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CLM3 DYNSEP RPM",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CLM3 DYN SEP REF",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CLM3 DYNTEMP BOT TMP",
            useClass: "greenTxt mt-1",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="boxContainer d-flex position-absolute single-text-16">
        <BlackContainer
          data={{
            label: "CLM3 MD KW",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CLM3 MD CUR",
            useClass: "greenTxt ml-5",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mr-1",
              label: "MILL I/L DFT",
            }}
          />
          <BlackContainer
            data={{
              label: "CLM3 IL DFT",
              useClass: "greenTxt",
              unit: "MMWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mr-1",
              label: "MILL I/L TMP.",
            }}
          />

          <BlackContainer
            data={{
              label: "CLM3 IL TMP",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mr-1",
              label: "MILL I/L BRG TEMP",
            }}
          />

          <BlackContainer
            data={{
              label: "CLM3 ILBRG TMP",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-18">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mr-1",
              label: "MILL O/L DRAFT",
            }}
          />
          <BlackContainer
            data={{
              label: "CLM3 OL DFT",
              useClass: "greenTxt",
              unit: "MMWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mr-1",
              label: "MILL O/L TMP",
            }}
          />
          <BlackContainer
            data={{
              label: "CLM3 OL TMP",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt mr-1",
              label: "MILL O/L BRG TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "CLM3 OLBRG TMP",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>

      <BlackContainer
        data={{
          label: "CLM3 IL OIL PRS M",
          useClass: "greenTxt position-absolute single-text-19",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CLM3 OL OIL PRS M",
          useClass: "greenTxt position-absolute single-text-20",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-21">
        <BlackContainer
          data={{
            label: "CLM3 DPDCA",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CLM3 CSG TMP",
            useClass: "greenTxt mt-1",
            unit: "C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <BlackContainer
          data={{
            label: "CLM3 H PR TMP",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CLM3 HPR2 TMP",
            useClass: "greenTxt ml-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "CLM3 DCEXF RPM",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CLM3 DCEXFAN REF",
            useClass: "greenTxt mt-4",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "CLM3 DCEXHF KW",
          useClass: "greenTxt position-absolute single-text-24",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "FCHN03 LVL",
          useClass: "greenTxt position-absolute single-text-25",
          unit: "",
          unitColor: "unitColor",
        }}
      />
      <div className="greenSqure position-absolute single-text-26"></div>
      <div className="CGRnBox position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "CLM3 FT RPM",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CLM3 FT CUR",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-29",
          label: "TO KILN TO PRECALCINER",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-30",
          label: "OIL PUMP A ",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-31",
          label: "GRAB BOX OIL PUMP",
        }}
      />
    </div>
  );
};

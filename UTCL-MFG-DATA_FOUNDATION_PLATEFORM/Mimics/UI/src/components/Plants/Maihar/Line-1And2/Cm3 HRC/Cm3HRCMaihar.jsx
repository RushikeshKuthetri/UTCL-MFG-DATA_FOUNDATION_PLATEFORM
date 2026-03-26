import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
} from "../../../../index";

import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

export const Cm3HRCMaihar = () => {
  return (
    <div className="Cm3HRCMaihar w-100 h-100 position-relative">
      <div className="pipeVr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeHr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeVr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeHr position-absolute pipe-11"></div>
      <div className="pipeVr position-absolute pipe-12"></div>
      <div className="pipeHr position-absolute pipe-13"></div>
      <div className="pipeVr position-absolute pipe-14"></div>
      <div className="pipeVr position-absolute pipe-15"></div>
      <div className="pipeVr position-absolute pipe-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Hr  position-absolute line-8"></div>
      <div className="yellowline-Vr  position-absolute line-9"></div>
      <div className="yellowline-Hr  position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Hr  position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="squareplustri text-center position-absolute single-text-1"></div>
      <div className="d-flex position-absolute text-center single-text-2">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("64DCF")}`}
            label="64DCF"
          />
        </div>
      </div>
      <div className="d-flex position-absolute text-center single-text-4">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`dot mr-2 digital-tag ${useColorStatus("64DCASB")}`}
            label="64DCASB"
            text="M"
          />
        </div>
      </div>
      <div className="d-flex position-absolute  single-text-3">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "64DCRF1"
          )}`}
          label="64DCRF1"
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "64DCRF2"
          )} ml-4`}
          label="64DCRF2"
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-5"></div>
      <div className="position-absolute single-text-6">
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "64KW01",
              useClass: "greenTxt",
              unit: "kw",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage text-center mx-auto d-flex">
          <div className="position-absolute d-flex mt-3">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("64MDR")}`}
              label="64MDR"
              text="M"
            />
            <MotorCircleDigitalTag
              className={`dot ml-2 digital-tag ${useColorStatus("64MDR")}`}
              label="64MDR"
              text="M"
            />
          </div>
        </div>
        <div className="containerImage text-center">
          <BlackContainer
            data={{
              label: "DE_NDE DIFF",
              useClass: "greenTxt",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute text-center single-text-7">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("64HHP")}`}
            label="64HHP"
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useColorStatus("64BC5")}`,
          firstCircleLabel: "64BC5",
        }}
        text={{ useClass: "text-dark", label: "64BC5" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useColorStatus("64BC6")}`,
          firstCircleLabel: "64BC6",
        }}
        text={{ useClass: "text-dark", label: "64BC6" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useColorStatus("64BC7")}`,
          firstCircleLabel: "64BC7",
        }}
        text={{ useClass: "text-dark", label: "64BC7" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <div className="roller-drum position-absolute d-flex justify-content-center align-items-center single-text-11"></div>
      <div className="containerImage text-center position-absolute single-text-12"></div>
      <div className="containerImage text-center position-absolute single-text-13"></div>
      {/* <div className="position-absolute d-flex mt-3 ml-1 single-text-14">
        <span className="dot grey-color p-2"> M</span>
        <span className="dot grey-color p-2 ml-5"> M</span>
      </div> */}
      <div className="containerImage text-center position-absolute single-text-15"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-16"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useColorStatus("63CWF")}`,
          firstCircleLabel: "63CWF",
        }}
        text={{ useClass: "text-dark", label: "63CWF" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-17"
        firstCircle={{
          firstCircleClass: `dot ${useColorStatus("64BC1:IO.out.runY")}`,
          firstCircleLabel: "64BC1:IO.out.runY",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark", label: "64BC1" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useColorStatus(
            "64BC1:IO.out.runX"
          )}`,
          secondCircleLabel: "64BC1:IO.out.runX",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-18"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "64BC2" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useColorStatus("64BC2")}`,
          secondCircleLabel: "64BC2",
        }}
      />

      <div className="pipe dotted-pipe position-absolute single-text-19"></div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-20"
        firstCircle={{
          firstCircleText: "M",
          firstCircleClass: `dot digital-tag ${useColorStatus("64BC4")}`,
          firstCircleLabel: "64BC4",
        }}
        text={{ useClass: "text-dark", label: "64BC4" }}
        secondCircle={{
          secondCircleClass: "dot grey-color",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-21"
        firstCircle={{ firstCircleClass: "dot grey-color" }}
        text={{ useClass: "text-dark", label: "64BC3" }}
        secondCircle={{
          secondCircleText: "M",
          secondCircleClass: `dot digital-tag ${useColorStatus("64BC3")}`,
          secondCircleLabel: "64BC3",
        }}
      />
      <div className=" position-absolute single-text-22">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "PRESSURE DE",
            }}
          />
          <BlackContainer
            data={{
              label: "64PT01",
              useClass: "greenTxt ml-2",
              unit: "PSI",
              unitColor: "unitColor",
            }}
          />
        </div>
        {/* <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "HHP PSW1",
            }}
          />
          <span className="greenSqure ml-3"></span>
        </div> */}
      </div>
      <div className=" position-absolute single-text-23">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "PRESSURE NDE",
            }}
          />
          <BlackContainer
            data={{
              label: "64PT02",
              useClass: "greenTxt ml-2",
              unit: "PSI",
              unitColor: "unitColor",
            }}
          />
        </div>
        {/* <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "HHP PSW2",
            }}
          />
          <span className="greenSqure ml-5"></span>
        </div> */}
      </div>
      <div className=" position-absolute single-text-24">
        {/* <div className="d-flex mt-2">
          <span className="greenSqure mr-3"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "FILT CLOG SW",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <span className="greenSqure mr-3"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "64HHP LSW",
            }}
          />
        </div> */}
        <div className="d-flex mt-2">
          <BlackContainer
            data={{
              label: "64RT28",
              useClass: "greenTxt mr-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt",
              label: "64HHP TEMP",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-25">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt",
            label: "GAP NDE",
          }}
        />
        <BlackContainer
          data={{
            label: "64DT02",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "64RECD_POS",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="bg-dark p-1 mt-1">
          <BlackContainer
            data={{
              label: "_64RECD_PID",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "_64RECD_PID",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="bg-dark p-1 mt-1 position-absolute single-text-26">
        <BlackContainer
          data={{
            label: "63CWFR",
            useClass: "greenTxt mt-2",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        {/* <BlackContainer
          data={{
            label: "63CWFR",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        /> */}
      </div>
      <div className=" position-absolute single-text-27">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt",
            label: "64DCF",
          }}
        />
        <div className="bg-dark p-1 mt-1">
          <BlackContainer
            data={{
              label: "_64DCFRPM",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "_64DCFRPM",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
      </div>
      <div className=" position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt",
            label: "GAP DE",
          }}
        />
        <BlackContainer
          data={{
            label: "64DT01",
            useClass: "greenTxt mt-2",
            unit: "mm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center  mx-auto",
            label: "BELT",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "WEIGHER",
          }}
        />
        <BlackContainer
          data={{
            label: "64BC6_BW",
            useClass: "greenTxt mt-2",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute text-center single-text-30">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("64HCP")}`}
            label="64HCP"
          />
        </div>
      </div>
      <div className="d-flex position-absolute text-center single-text-31">
        <div className="connector-icon p-1">
          <div className="width-fit-content">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "64HHPSBY"
              )}`}
              label="64HHPSBY"
            />
          </div>
        </div>
      </div>
      <div className="position-absolute text-center single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "HHP",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-33">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "HHP",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-34">
        <BlackContainer
          data={{
            label: "63MF01",
            useClass: "greenTxt mt-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "63KW03",
            useClass: "greenTxt mt-3",
            unit: "kw",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="position-absolute text-center single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "HRC DUST COLL",
          }}
        />
        <BlackContainer
          data={{
            label: "64DCDP",
            useClass: "greenTxt mt-4",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "63GWFR",
          useClass: "greenTxt mt-4 position-absolute single-text-37",
          unit: "tph",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "64KW02",
          useClass: "greenTxt mt-4 position-absolute single-text-38",
          unit: "kw",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "64DT03",
          useClass: "greenTxt mt-4 position-absolute single-text-39",
          unit: "mm",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "63DT04",
          useClass: "greenTxt mt-4 position-absolute single-text-40",
          unit: "mm",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "64FEEDBIN_WT",
          useClass: "greenTxt mt-4 position-absolute single-text-41",
          unit: "Ton",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt text-center position-absolute single-text-42",
          label: "64BE1",
        }}
      />

      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt text-center position-absolute single-text-44",
          label: "64HCP",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt text-center position-absolute single-text-52",
          label: "64MRGBP",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt text-center position-absolute single-text-53",
          label: "64FRGBP",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt text-center position-absolute single-text-54",
          label: "64LOPM",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt text-center position-absolute single-text-55",
          label: "64LOP3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt text-center position-absolute single-text-56",
          label: "64LOP2",
        }}
      />
      {/* <div className="d-flex position-absolute single-text-57">
        <span className="greenSqure mr-2"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "64MS",
          }}
        />
      </div> */}
      <div className="position-absolute single-text-58">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "BIN LVL",
          }}
        />
        {/* <span className="greenSqure text-center mt-3 ml-3"></span> */}
      </div>
      <div className="d-flex position-absolute single-text-59">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center",
            label: "PZ",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt text-center ml-5",
            label: "GYP",
          }}
        />
      </div>
      <div className=" position-absolute single-text-60">
        <div className="yellowTxt text-center">REJECT</div>
        <div className="yellowTxt text-center">TO MILL</div>
      </div>
      <div className=" position-absolute single-text-61">
        <div className="yellowTxt text-center">TO PTASB</div>
      </div>
      <div className=" position-absolute single-text-62">
        <div className="text-center">CLK</div>
      </div>
      <div className="position-absolute text-center single-text-45 border p-1">
        <div className="d-flex">
          <div className="bg-secondary mt-1 mr-2">SV1</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mt-1",
              label: "SV1 SYSTEM PRESS",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="bg-secondary mt-1 mr-2">SV2</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mt-1",
              label: "SV2 DE INC",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="bg-secondary mt-1 mr-2">SV3</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mt-1",
              label: "SV3 NDE INC",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="bg-secondary mt-1 mr-2">SV4</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mt-1",
              label: "SV4 DE DEC",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="bg-secondary mt-1 mr-2">SV5</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mt-1",
              label: "SV5 NDE DEC",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="bg-secondary mt-1 mr-2">SV6</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mt-1",
              label: "SV6 DE PRESS HOLD",
            }}
          />
        </div>
        <div className="d-flex">
          <div className="bg-secondary mt-1 mr-2">SV7</div>
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mt-1",
              label: "SV7 NDE PRESS HOLD",
            }}
          />
        </div>
      </div>
      <div className="position-absolute text-center single-text-46">
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mt-1",
              label: "HRC FIXED GB TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "64RT25",
              useClass: "greenTxt mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mt-1",
              label: "LOP TANK OIL TEMP",
            }}
          />
          <BlackContainer
            data={{
              label: "64RT27",
              useClass: "greenTxt mt-1 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        {/* <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mt-1",
              label: "64LOP_FSW",
            }}
          />
          <span className="greenSqure ml-2"></span>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "yellowTxt text-center mt-1",
              label: "64LOP_FSW",
            }}
          />
          <span className="graySqure ml-2"></span>
        </div> */}
      </div>
      <div className="d-flex position-absolute text-center single-text-47">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("64MRGBP")}`}
            label="64MRGBP"
          />
        </div>
      </div>
      <div className="d-flex position-absolute text-center single-text-48">
        <div className="connector-icon p-1">
          <div className=" width-fit-content">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("64LOP3")}`}
              label="64LOP3"
            />
          </div>
        </div>
      </div>
      <div className="d-flex position-absolute text-center single-text-51">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("_64LOP2")}`}
            label="_64LOP2"
          />
        </div>
      </div>

      <div className="d-flex position-absolute text-center single-text-49">
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("64FRGBP")}`}
            label="64FRGBP"
          />
        </div>
      </div>
      <div className="d-flex position-absolute text-center single-text-50">
        <div className="connector-icon p-1">
          <div className="width-fit-content">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus("64LOPM")}`}
              label="64LOPM"
            />
          </div>
        </div>
      </div>
      {/* <div className="single-text-64 position-absolute px-2">
        <span className="square green-color"></span>
      </div> */}
      <div className="containerImage position-absolute single-text-76 text-center"></div>
      <div className="gray-green-red-img gray-img mr-2 position-absolute   single-text-77"></div>
      <div className=" position-absolute  text-center  single-text-78">
        <MotorCircleDigitalTag
          className={`line-circle mx-auto digital-tag ${useColorStatus(
            "64GP"
          )}`}
          label="64GP"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt",
            label: "64GP",
          }}
        />
      </div>
      <div className=" position-absolute  text-center  single-text-79">
        <MotorCircleDigitalTag
          className={`dot mr-2 digital-tag ${useColorStatus("64BE")}`}
          label="64BE"
          text="M"
        />
      </div>
    </div>
  );
};

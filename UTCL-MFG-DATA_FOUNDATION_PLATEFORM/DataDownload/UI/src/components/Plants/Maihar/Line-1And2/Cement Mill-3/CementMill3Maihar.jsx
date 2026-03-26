import {
  TextContainerWithWrapWord,
  BlackContainer,
  TextColumn,
  PipeWithCircles,
  SingleText,
  MotorCircleDigitalTag,
} from "../../../../index";

import * as tagsData from "../../../../../data/maihar/cementmill-3/maiharCM3Textcolumn";
import { useColorStatus, useFanImgTagsColorStatus } from "../../../../../utils";

export const CementMill3Maihar = () => {
  return (
    <div className="cm_1_maihar cm_3_maihar w-100 h-100 position-relative">
      <div className="yellowline-Hr position-absolute line-3"></div>
      <div className="yellowline-Hr position-absolute line-4"></div>
      <div className="yellowline-Hr position-absolute line-5"></div>
      <div className="yellowline-Hr position-absolute line-6"></div>
      <div className="yellowline-Hr position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Vr position-absolute line-9"></div>
      <div className="yellowline-Vr position-absolute line-10"></div>
      <div className="yellowline-Vr position-absolute line-11"></div>
      <div className="yellowline-Vr position-absolute line-16"></div>
      <div className="yellowline-Vr position-absolute line-17"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-18"></div>
      <div className="yellowline-Hr position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>

      <div className="pipeHr position-absolute pipe-76"></div>
      <div className="pipeVr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeVr position-absolute pipe-7"></div>
      <div className="pipeVr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-12"></div>
      <div className="pipeVr position-absolute pipe-13"></div>
      <div className="pipeVr text-center pt-3 position-absolute pipe-14">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("63FARAV")} p-2`}
          label="63FARAV"
          text="M"
        />
      </div>
      <div className="pipeVr position-absolute pipe-15"></div>
      <div className="pipeVr position-absolute pipe-17"></div>
      <div className="pipeVr position-absolute pipe-18"></div>
      <div className="pipeVr position-absolute pipe-19"></div>
      <div className="pipeVr position-absolute pipe-21"></div>
      <div className="pipeVr position-absolute pipe-22"></div>
      <div className="pipeVr position-absolute pipe-23"></div>
      <div className="pipeVr position-absolute pipe-26"></div>
      <div className="pipeVr position-absolute pipe-28"></div>
      <div className="pipeVr position-absolute pipe-29"></div>
      <div className="pipeVr position-absolute pipe-30"></div>
      <div className="pipeVr position-absolute pipe-31"></div>
      <div className="pipeVr position-absolute pipe-32"></div>
      <div className="pipeVr position-absolute pipe-33"></div>
      <div className="pipeVr position-absolute pipe-34"></div>
      <div className="pipeHr position-absolute pipe-36"></div>
      <div className="pipeHr position-absolute pipe-37"></div>
      <div className="pipeHr position-absolute pipe-38"></div>
      <div className="pipeHr position-absolute pipe-39"></div>
      <div className="pipeHr position-absolute pipe-40"></div>
      <div className="pipeHr position-absolute pipe-41"></div>
      <div className="pipeHr position-absolute pipe-42"></div>
      <div className="pipeHr position-absolute pipe-43"></div>
      <div className="pipeHr position-absolute pipe-44"></div>
      <div className="pipeHr position-absolute pipe-46"></div>
      <div className="pipeHr position-absolute pipe-49"></div>
      <div className="pipeHr position-absolute pipe-51"></div>
      <div className="pipeHr position-absolute pipe-52"></div>
      <div className="pipeHr position-absolute pipe-53"></div>
      <div className="pipeHr position-absolute pipe-55"></div>
      <div className="pipeVr position-absolute pipe-56"></div>
      <div className="pipeVr position-absolute pipe-57"></div>
      <div className="pipeVr position-absolute pipe-59"></div>
      <div className="pipeHr position-absolute pipe-60"></div>

      <div className="pipeVr pt-3 position-absolute pipe-62">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "63SEPVDCRF1"
          )}`}
          label="63SEPVDCRF1"
        />
      </div>
      <div className="pipeVr pt-3 position-absolute pipe-63">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "63SEPVDCRF2"
          )}`}
          label="63SEPVDCRF2"
        />
      </div>
      <div className="pipeVr position-absolute pipe-64"></div>
      <div className="pipeVr position-absolute pipe-65"></div>
      <div className="pipeHr position-absolute pipe-66"></div>
      <div className="pipeVr position-absolute pipe-67"></div>
      <div className="pipeHr position-absolute pipe-68"></div>
      <div className="pipeHr position-absolute pipe-69"></div>
      <div className="pipeVr position-absolute pipe-70"></div>
      <div className="pipeHr position-absolute pipe-71"></div>
      <div className="pipeHr position-absolute pipe-72"></div>
      <div className="pipeHr position-absolute pipe-73"></div>
      <div className="pipeHr position-absolute pipe-74">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "63ESPRF1"
          )} mx-auto`}
          label="63ESPRF1"
        />
      </div>
      <div className="pipeHr position-absolute pipe-75">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "63ESPRF2"
          )} mx-auto`}
          label="63ESPRF2"
        />
      </div>
      <div className="img-64 d-flex flex-column pl-5 pt-3 position-absolute single-text-1">
        <BlackContainer
          data={{
            label: "63MF01",
            useClass: "greenTxt ml-5",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <div className="circle-group mt-2 ml-5">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("63MDR")}`}
            label="63MDR"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-5 mt-1",
            label: "63MDR",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-between align-items-center thinContainer pt-5 text-center position-absolute single-text-2">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("63OS")}`}
          label="63OS"
          text="M"
        />

        <BlackContainer
          data={{
            label: "63PT05",
            useClass: "greenTxt",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-3"></div>
      <div className="containerImage text-center position-absolute single-text-4"></div>
      <div className="containerImage text-center position-absolute single-text-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CLK",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-9">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "GYP",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-10">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "POZZ",
          }}
        />
      </div>
      <SingleText
        useClass="containerImage text-center position-absolute single-text-11"
        yellowTextUp="BIN WT"
        textClass="text-dark"
        data={{
          blackTextLabel: "_63FABW",
          blackTextClass: "greenTxt",
          unit: "Ton",
        }}
      />
      <div className="squareplustri text-center position-absolute single-text-12">
        <div className="d-flex justify-content-around">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("63ESPCOLR")}`}
            label="63ESPCOLR"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("63ESPEMR")}`}
            label="63ESPEMR"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("63ESPPAF")}`}
            label="63ESPPAF"
            text="M"
          />
        </div>
        <div className="d-flex justify-content-around mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "COL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "EM",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "PAF",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "63ESPAPT",
            useClass: "greenTxt mt-3",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex justify-content-around mt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("63ESPZ1")}`}
            label="63ESPZ1"
            text="M"
          />
          <MotorCircleDigitalTag
            className={`dot digital-tag ${useColorStatus("63_ETS")}`}
            label="63_ETS"
            text="M"
          />
        </div>

        <BlackContainer
          data={{
            label: "63BFDP",
            useClass: "greenTxt mt-3",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="chimni-red position-absolute single-text-13"></div>

      <div className="position-absolute single-text-16">
        <i className="fas fa-long-arrow-alt-up ml-1"></i>
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("63MOASB2")}`}
            label="63MOASB2"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "MOASB2",
          }}
        />
      </div>

      <div className="position-absolute single-text-20">
        <div className="img-66 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle m-auto digital-tag ${useColorStatus(
              "63FCP"
            )}`}
            label="63FCP"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "I/LCPM",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <div className="img-66 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle m-auto digital-tag ${useColorStatus(
              "63FCPS"
            )}`}
            label="63FCPS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "I/LCPS",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <div className="img-66 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle m-auto digital-tag ${useColorStatus(
              "63FSP"
            )}`}
            label="63FSP"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "I/LSP",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <div className="img-66 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle m-auto digital-tag ${useColorStatus(
              "63DCPM"
            )}`}
            label="63DCPM"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "O/LCPM",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <div className="img-66 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle m-auto digital-tag ${useColorStatus(
              "63DCPS"
            )}`}
            label="63DCPS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "O/LCPS",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <div className="img-66 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle m-auto digital-tag ${useColorStatus(
              "63DSP"
            )}`}
            label="63DSP"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "O/LSP",
          }}
        />
      </div>

      <div className="position-absolute single-text-27">
        <div className="connector-icon d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle m-auto digital-tag ${useColorStatus(
              "63GB1OPM"
            )}`}
            label="63GB1OPM"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "G3B1OPM",
          }}
        />
      </div>
      <div className="position-absolute single-text-28">
        <div className="connector-icon d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle ma-auto digital-tag ${useColorStatus(
              "63GB2OPM"
            )}`}
            label="63GB2OPM"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "G3B2OPM",
          }}
        />
      </div>
      <div className="position-absolute single-text-29">
        <div className="connector-icon d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle m-auto digital-tag ${useColorStatus(
              "63GB1OPS"
            )}`}
            label="63GB1OPS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "G3B1OPS",
          }}
        />
      </div>
      <div className="position-absolute single-text-30">
        <div className="connector-icon d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle m-auto digital-tag ${useColorStatus(
              "63GB2OPS"
            )}`}
            label="63GB2OPS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "G3B2OPS",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <div className="img-66 ml-auto mt-1">
          <div className="connector-icon">
            <div className="circle-group">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "63FAASB"
                )}`}
                label="63FAASB"
              />
            </div>
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "63FAASB",
          }}
        />
      </div>
      <div className="position-absolute single-text-32">
        <div className="img-66">
          <div className="connector-icon">
            <div className="circle-group">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "63FARB1"
                )}`}
                label="63FARB1"
              />
            </div>
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto mt-1",
            label: "RB1",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <div className="img-66">
          <div className="connector-icon">
            <div className="circle-group">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "63FARB2"
                )}`}
                label="63FARB2"
              />
            </div>
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto mt-1",
            label: "RB2",
          }}
        />
      </div>
      <div className="position-absolute single-text-34">
        <div className="img-66 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "63SEPF"
            )} m-auto`}
            label="63SEPF"
          />
        </div>
      </div>
      <div className="position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "INCD",
          }}
        />
        <div className="roller-drum  d-flex justify-content-center align-items-center">
          <div className="circle-group">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("63INCD")}`}
              label="63INCD"
              text="M"
            />
          </div>
        </div>
        <MotorCircleDigitalTag
          className={`square mt-01 ml-auto digital-tag ${useColorStatus(
            "63DSP_PSW"
          )}`}
          label="63DSP_PSW"
        />
      </div>
      <div className="d-flex position-absolute single-text-37">
        <div className="img-66">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("63GAP")}`}
              label="63GAP"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt ml-3 mt-4",
            label: "63GAP",
          }}
        />
      </div>
      <div className="position-absolute single-text-38">
        <div className="connector-icon p-1 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle m-auto digital-tag ${useColorStatus(
              "63ESPF"
            )}`}
            label="63ESPF"
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="pipe dotted-pipe position-absolute single-text-40"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("63BE1")}`,
          firstCircleLabel: "63BE1",
          firstCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="pipe dotted-pipe position-absolute  single-text-41"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("63ESPBE")}`,
          firstCircleLabel: "63ESPBE",
          firstCircleText: "M",
        }}
      />

      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-43"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("63CWF")}`,
          secondCircleLabel: "63CWF",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-44"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("63GWF")}`,
          secondCircleLabel: "63GWF",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-45"
        firstCircle={{ firstCircleClass: "grayDot" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("63PWF")}`,
          secondCircleLabel: "63PWF",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-47" />
      <TextColumn
        useClass="position-absolute single-text-54"
        list={tagsData.maiharCM3Textcolumn2}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-49"
        text={{ useClass: "text-dark ml-2", label: "SC1" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("63ESPSC1")}`,
          secondCircleLabel: "63ESPSC1",
          secondCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-50">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("63ESPSC2")}`,
            firstCircleLabel: "63ESPSC2",
            firstCircleText: "M",
          }}
          text={{ useClass: "text-dark mr-2", label: "SC2" }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt ml-auto mt-2",
            label: "ESPRF2",
          }}
        />
      </div>

      <TextColumn
        useClass="position-absolute single-text-56"
        list={tagsData.maiharCM3Textcolumn3}
      />
      {/* <BlackContainer
        data={{
          label: "61PT08",
          useClass: "greenTxt position-absolute single-text-57",
          unit: "mmwc",
          unitColor: "unitColor",
        }}
      /> */}

      <TextColumn
        list={tagsData.maiharCM3Textcolumn1}
        useClass="d-flex position-absolute single-text-62"
      />

      <SingleText
        useClass="position-absolute single-text-65"
        yellowTextUp="FEED TRUN TEMP"
        textClass="yellowTxt"
        data={{
          blackTextLabel: "63RT23",
          blackTextClass: "greenTxt mt-3",
          unit: "°C",
        }}
      />
      <SingleText
        useClass="position-absolute single-text-66"
        yellowTextUp="DISC TRUN TEMP"
        textClass="yellowTxt"
        data={{
          blackTextLabel: "63RT24",
          blackTextClass: "greenTxt mt-3",
          unit: "°C",
        }}
      />

      <BlackContainer
        data={{
          label: "_63GAP_FLOW",
          useClass: "greenTxt position-absolute single-text-68",
          unit: "LPH",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "63GB1PST",
          useClass: "greenTxt position-absolute single-text-71",
          unit: "kg",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "63GB2PST",
          useClass: "greenTxt position-absolute single-text-72",
          unit: "kg",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-70">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt",
            label: "GP",
          }}
        />

        <MotorCircleDigitalTag
          className={`dot mt-2 digital-tag ${useColorStatus("63GP")}`}
          label="63GP"
          text="M"
        />
        <BlackContainer
          data={{
            label: "_63GPPST",
            useClass: "greenTxt mt-1",
            unit: "Kg/cm2",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "63KW03",
          useClass: "greenTxt position-absolute single-text-73",
          unit: "kw",
          unitColor: "unitColor",
        }}
      />

      <TextColumn
        list={tagsData.maiharCM3Textcolumn7}
        useClass="position-absolute single-text-74"
        yellowText="MILL O/L"
        textClass="yellowTxt"
      />

      <TextColumn
        useClass="position-absolute single-text-78"
        list={tagsData.maiharCM3Textcolumn6}
      />
      <div className="bg-secondary CGRnBox px-2 position-absolute single-text-81">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-info font-weight-bold",
            label: "MTS ELEV KW",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-1",
              label: "BE1A/1",
            }}
          />
          {/* <div className="greenDot ml-2">M</div> */}
          <BlackContainer
            data={{
              label: "65KW01",
              useClass: "greenTxt ml-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-1",
              label: "BE1B/2",
            }}
          />
          {/* <div className="greenDot ml-2">M</div> */}
          <BlackContainer
            data={{
              label: "65KW02",
              useClass: "greenTxt ml-2",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-white mt-1",
              label: "BE1C/3",
            }}
          />
          {/* <div className=" circle-group m-auto">
            <div className="circle-group">
              <div className="grayDot p-2">M</div>
              
            </div>
          </div> */}
          <BlackContainer
            data={{
              label: "65KW03",
              useClass: "greenTxt ml-2",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "63FAFR",
          useClass: "greenTxt position-absolute single-text-82",
          unit: "tph",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        useClass="bg-secondary CGRnBox p-2 position-absolute single-text-83"
        list={tagsData.maiharCM3Textcolumn8}
      />
      <BlackContainer
        data={{
          label: "63WTR_FLOW",
          useClass: "greenTxt position-absolute single-text-84",
          unit: "Lpm",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "63WTR_CV_POS",
          useClass: "greenTxt position-absolute single-text-85",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      {/* after mapping push */}

      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-87",
          label: "TO MTS",
        }}
      />
      <div className="d-flex position-absolute single-text-88">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "CYRF1",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "63BCYRF1"
          )} ml-2`}
          label="63BCYRF1"
        />
      </div>
      <div className="d-flex position-absolute single-text-89">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "CYRF2",
          }}
        />
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "63BCYRF2"
          )} ml-2`}
          label="63BCYRF2"
        />
      </div>

      <div className="bg-secondary CGRnBox p-2 position-absolute single-text-95"></div>
      <div className="bg-secondary CGRnBox p-2 position-absolute single-text-97">
        <div className="connector-both-side-2 d-flex justify-content-center align-items-center mt-2">
          <div className="circle-group m-auto">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "63OSBLPM"
              )}`}
              label="63OSBLPM"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "SGBLP-M",
          }}
        />
        <div className="connector-both-side-2 d-flex justify-content-center align-items-center mt-1">
          <div className="circle-group m-auto">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "63OSBLPS"
              )}`}
              label="63OSBLPS"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "SGBLP-S",
          }}
        />
        <div className="connector-both-side-2 d-flex justify-content-center align-items-center mt-1">
          <div className="circle-group m-auto">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "63OSGBLP"
              )}`}
              label="63OSGBLP"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "SGBP",
          }}
        />
      </div>
      <div className="CGRnBox position-absolute single-text-98"></div>

      <div className="CGRnBox position-absolute single-text-99"></div>

      <div className="CGRnBox position-absolute single-text-100"></div>
      <div className="CGRnBox position-absolute single-text-101"></div>
      <div className="middle-sqr-container position-absolute single-text-102">
        <div className="d-flex justify-content-around mt-4">
          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "63WTRINJP"
              )}`}
              label="63WTRINJP"
            />
            <div className="pipeVr"></div>
          </div>

          <div>
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "_63WTRINJP_SBY"
              )}`}
              label="_63WTRINJP_SBY"
            />
            <div className="pipeVr"></div>
          </div>
        </div>
      </div>
      <div className="img-79 position-absolute single-text-103"></div>
      <div className="position-absolute single-text-104">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "AIR MIX",
          }}
        />
        <div className="tringle-item mt-1">
          <i className="fa-solid fa-caret-right"></i>
          <i className="fa-solid fa-caret-left"></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "SV 3",
          }}
        />
      </div>
      <div className="position-absolute single-text-105">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "SV 1",
          }}
        />
        <div className="tringle-item mt-1">
          <i className="fa-solid fa-caret-right"></i>
          <i className="fa-solid fa-caret-left"></i>
        </div>
      </div>
      <div className="position-absolute single-text-106">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "SV 2",
          }}
        />
        <div className="tringle-item mt-1">
          <i className="fa-solid fa-caret-right"></i>
          <i className="fa-solid fa-caret-left"></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "WTR LINE",
          }}
        />
      </div>
      <div className="position-absolute single-text-107">
        <div className="tringle-item">
          <i className="fa-solid fa-caret-right"></i>
          <i className="fa-solid fa-caret-left"></i>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "SV 4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "AIR PUR",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-108">
        <div className="greenSqure"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white  ml-4 mt-2",
            label: "AIR PRS",
          }}
        />
      </div>
      <div className="position-absolute single-text-109">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "WTR PSW",
          }}
        />
        <div className="greenSqure mx-auto mt-3"></div>
      </div>
      <div className="d-flex position-absolute single-text-110">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "COMP AIR",
          }}
        />

        <div className="greenSqure ml-4 mt-2"></div>
      </div>
      {/* new text */}
      <div className="squareplustri  text-center position-absolute single-text-111">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FAP",
          }}
        />
        <BlackContainer
          data={{
            label: "_63PT16",
            useClass: "greenTxt mt-2",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-2",
            label: "DP",
          }}
        />
      </div>
      <div className="hpipecircle position-absolute single-text-112"></div>
      <div className="hpipecircle position-absolute single-text-113"></div>
      <div className="hpipecircle position-absolute single-text-114"></div>
      <div className="chimni-red position-absolute single-text-115"></div>
      <div className="position-absolute single-text-116">
        <div className="connector-both-side-2 d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag
            className={`line-circle m-auto digital-tag ${useColorStatus(
              "63SEPVDCF"
            )}`}
            label="63SEPVDCF"
          />
        </div>
      </div>

      <div className="position-absolute single-text-117">
        <i className="fas fa-long-arrow-alt-up ml-1"></i>
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("63ESPASBM")}`}
            label="63ESPASBM"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-01",
            label: "ESPASBM",
          }}
        />
      </div>
      <div className="position-absolute single-text-118">
        <i className="fas fa-long-arrow-alt-up ml-1"></i>
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("63ESPASBS")}`}
            label="63ESPASBS"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-01",
            label: "ESPASBS",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-119"
        firstCircle={{ firstCircleClass: "grayDot" }}
        text={{ useClass: "text-dark", label: "64BC7" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("64BC7")}`,
          secondCircleLabel: "64BC7",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="pipe dotted-pipe position-absolute single-text-120"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("63BE2")}`,
          firstCircleLabel: "63BE2",
          firstCircleText: "M",
        }}
      />

      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-121" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-122" />
      <TextColumn
        useClass="position-absolute single-text-123"
        list={tagsData.maiharCM3Textcolumn4}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-124",
          label: "SEP VENT DUST COLL",
        }}
      />
      <BlackContainer
        data={{
          label: "63RT43",
          useClass: "greenTxt position-absolute single-text-125",
          unit: "C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "64BC6_BW",
          useClass: "greenTxt position-absolute single-text-126",
          unit: "TPH",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex align-items-center position-absolute single-text-127">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HAG",
          }}
        />
        <div className="yellowline-Hr rightarrow position-relative ml-2"></div>
      </div>
      <div className="position-absolute single-text-128">
        <BlackContainer
          data={{
            label: "63PT02",
            useClass: "greenTxt ml-3",
            unit: "mmwc",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-3 ml-auto",
            label: "MILL I/L",
          }}
        />
      </div>
      <div className="position-absolute single-text-129">
        <i className="fas fa-long-arrow-alt-up ml-1"></i>
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("63PTASB")}`}
            label="63PTASB"
          />
        </div>
      </div>
      <div className="position-absolute single-text-130">
        <i className="fas fa-long-arrow-alt-up ml-1"></i>
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus(
              "63PTASBSBY"
            )}`}
            label="63PTASBSBY"
          />
        </div>
      </div>
      <div className="position-absolute single-text-131">
        <i className="fas fa-long-arrow-alt-up ml-1"></i>
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("63SRASB")}`}
            label="63SRASB"
          />
        </div>
      </div>
      <div className="position-absolute single-text-132">
        <i className="fas fa-long-arrow-alt-up ml-1"></i>
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("63SASB")}`}
            label="63SASB"
          />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "63FCP_FLOW",
          useClass: "greenTxt position-absolute single-text-133",
          unit: "LPM",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "63DCP_FLOW",
          useClass: "greenTxt position-absolute single-text-134",
          unit: "LPM",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-135"
        list={tagsData.maiharCM3Textcolumn5}
      />
      <div className="position-absolute single-text-136">
        <i className="fas fa-long-arrow-alt-up ml-1"></i>
        <div className="connector-icon p-1">
          <MotorCircleDigitalTag
            className={`line-circle digital-tag ${useColorStatus("63MOASB1")}`}
            label="63MOASB1"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mt-1",
            label: "63MOASB1",
          }}
        />
      </div>
      <TextColumn
        list={tagsData.maiharCM3Textcolumn9}
        useClass="position-absolute single-text-137"
        yellowText="BF DP"
        textClass="yellowTxt ml-4"
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "yellowTxt position-absolute single-text-138",
          label: "TO MTS",
        }}
      />
      <BlackContainer
        data={{
          label: "63SP01",
          useClass: "greenTxt CGRnBox p-2 position-absolute single-text-139",
          unit: "rpm",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "63SBPST",
          useClass: "greenTxt position-absolute single-text-140",
          unit: "kg/cm2",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "63KW02",
          useClass: "greenTxt position-absolute single-text-141",
          unit: "kw",
          unitColor: "unitColor",
        }}
      />
      <SingleText
        useClass="position-absolute single-text-142"
        yellowTextUp="SEP BG-PT"
        textClass="yellowTxt"
        data={{
          blackTextLabel: "_63SEP_GBPT",
          blackTextClass: "greenTxt mt-1",
          unit: "bar",
        }}
      />
      <SingleText
        useClass="position-absolute single-text-143"
        yellowText="BE-1"
        textClass="yellowTxt mt-1 ml-auto"
        data={{
          blackTextLabel: "63KW01",
          blackTextClass: "greenTxt",
          unit: "kw",
        }}
      />
      <div className="position-absolute single-text-144">
        <TextContainerWithWrapWord
          data={{
            useClass: "yellowTxt mx-auto",
            label: "ESPBE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-primary mt-2",
            label: "TO MTS AIR  SLIDE",
          }}
        />
      </div>
      <div className="position-absolute single-text-145">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "DP SW",
          }}
        />
        <div className="greenSqure mx-auto mt-3"></div>
      </div>
      <BlackContainer
        data={{
          label: "_63WTR_APT",
          useClass: "greenTxt position-absolute single-text-146",
          unit: "Bar",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-147",
          label: "AIR PSW",
        }}
      />
      <MotorCircleDigitalTag
        className={`square digital-tag position-absolute single-text-148 ${useColorStatus(
          "63FCP_FSW"
        )}`}
        label="63FCP_FSW"
      />
      <MotorCircleDigitalTag
        className={`square digital-tag position-absolute single-text-149 ${useColorStatus(
          "63DCPM_FSW"
        )}`}
        label="63DCPM_FSW"
      />
    </div>
  );
};

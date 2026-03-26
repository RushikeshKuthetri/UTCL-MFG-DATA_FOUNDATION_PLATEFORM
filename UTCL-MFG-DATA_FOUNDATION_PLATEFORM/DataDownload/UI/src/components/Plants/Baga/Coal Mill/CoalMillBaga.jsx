import { TextContainerWithWrapWord, BlackContainer } from "../../../index";
import {
  useColorStatus,
  useFanImgTagsColorStatus,
  useImgHexaLColorStatus,
  useImgHexaRColorStatus,
  usePipeColorStatus,
} from "../../../../utils";
export const CoalMillBaga = () => {
  return (
    <div className="CoalMillBaga w-100 h-100 position-relative">
      <div className="hpipecircle position-absolute single-text-1">
        <span className={`dot ${useColorStatus("L41MS1_M")}`}>M</span>
        <span className="grayDot"></span>
      </div>
      <div className="hpipecircle position-absolute single-text-2">
        <span className="grayDot"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L31BC3",
          }}
        />
        <span className={`dot ${useColorStatus("L31BC3_M")}`}>M</span>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div className=" ml-2 text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "TAKEUP GUARD",
            }}
          />
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L41HP1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "RAW COAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HOPPER",
          }}
        />
        <BlackContainer
          data={{
            label: "L41HP1_WT01",
            useClass: "greenTxt mt-2",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L41HP2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PET COKE",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HOPPER",
          }}
        />
        <BlackContainer
          data={{
            label: "L41HP2_WT01",
            useClass: "greenTxt mt-2",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-6">
        <div className="hpipecircle">
          <span className="grayDot"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "L41WF1",
            }}
          />
          <span className={`dot ${useColorStatus("L41WF1_M")}`}>M</span>
        </div>
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "L41WF1_ST01",
              useClass: "greenTxt mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41WF1_FT01",
              useClass: "greenTxt mt-2",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-7">
        <div className="hpipecircle">
          <span className={`dot ${useColorStatus("L41WF2_M")}`}>M</span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "L41WF2",
            }}
          />
          <span className="grayDot"></span>
        </div>
        <div className="ml-3">
          <BlackContainer
            data={{
              label: "L41WF2_ST01",
              useClass: "greenTxt mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41WF2_FT01",
              useClass: "greenTxt mt-2",
              unit: "Tph",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <div className="hpipecircle ">
          <span className="grayDot"></span>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "L41BC1",
            }}
          />
          <span className={`dot ${useColorStatus("L41BC1_M")}`}>M</span>
        </div>
      </div>
      <div className=" position-absolute single-text-9">
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Tension Pressure < 46",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Tension Pressure",
            }}
          />
          <BlackContainer
            data={{
              label: "Tension_Pressure_SP",
              useClass: "greenTxt ml-2",
              unit: "",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-10 p-2 box-1">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "L41RM1_TE01",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41RM1_TE02",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L41RM1_TE03",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Tension Pressure",
            }}
          />
          <BlackContainer
            data={{
              label: "L41HY1_PT01",
              useClass: "greenTxt ml-auto",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Litting Pressure",
            }}
          />
          <BlackContainer
            data={{
              label: "L41HY1_PT02",
              useClass: "greenTxt ml-auto",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Roller 1 Position",
            }}
          />
          <BlackContainer
            data={{
              label: "L41HY1_ZT01",
              useClass: "greenTxt ml-auto",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Roller 2 Position",
            }}
          />
          <BlackContainer
            data={{
              label: "L41HY1_ZT02",
              useClass: "greenTxt ml-auto",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Roller 3 Position",
            }}
          />
          <BlackContainer
            data={{
              label: "L41HY1_ZT03",
              useClass: "greenTxt  ml-auto",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Rollere Lifted",
            }}
          />
          <span
            className={`line-circle ml-auto ${useColorStatus("L41LU7_M")}`}
          ></span>
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Rollere Pos Equal",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto",
              label: "L41LU7",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto bg-light p-1",
            label: "CM Tension hydraulic",
          }}
        />
      </div>
      <div className=" position-absolute single-text-11">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1 bg-info ml-2",
            label: "L31 BC3",
          }}
        />
        <BlackContainer
          data={{
            label: "L31BC3_IT01",
            useClass: "greenTxt mt-2",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
      </div>
      {/* <div className=" position-absolute single-text-11">
           <div className="d-flex mt-2">
           <span className="dot grey-color">M</span>
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1 bg-info ml-2",
            label: "L31 BC3",
          }}
        />
        </div>
        <BlackContainer
          data={{
            label: "531HP3_WT01",
            useClass: "greenTxt mt-2",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        </div>  */}
      <div className=" position-absolute single-text-12">
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark p-1 bg-info",
              label: "COAL SELECTION",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-13">
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark p-1 bg-info",
              label: "MW",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3 mt-1",
              label: "L41MW1",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-14",
          label: "TO REJECT",
        }}
      />
      <div className="bigContainer text-center position-absolute single-text-15"></div>
      <div className=" position-absolute single-text-16 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Coal Mill",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 single-font",
            label: "MD will stop with H2 in",
          }}
        />
        <BlackContainer
          data={{
            label: "L41RM1_VT01",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-17">
        <BlackContainer
          data={{
            label: "L41GB1_TED",
            useClass: "greenTxt ml-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41GB1_TE01",
            useClass: "greenTxt ml-5",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-18 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "REJECTS",
          }}
        />
        <BlackContainer
          data={{
            label: "L41RM1_VT02",
            useClass: "greenTxt mt-2",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div class=" position-absolute single-text-19">
        <div class="connector-icon ">
          <span class={`line-circle ${useColorStatus("L41FN1_M")}`}> </span>
        </div>
      </div>

      <div className=" position-absolute single-text-20">
        <div
          className={`circle-img ml-auto ${useFanImgTagsColorStatus(
            "L41RA1_M"
          )}`}
        ></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L41RA1",
          }}
        />
      </div>
      <div className=" text-center position-absolute single-text-21">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L41EX1-2",
          }}
        />
        <div className="containerImage"></div>
      </div>
      <div className="position-absolute single-text-22">
        <BlackContainer
          data={{
            label: "L41RM1_TB02A",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41RM1_TB02B",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <BlackContainer
          data={{
            label: "L41GA2_CO",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41GA2_O2",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <BlackContainer
          data={{
            label: "Coal_Mill_Power",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-25">
        <BlackContainer
          data={{
            label: "L41RM1_TT02",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "L41SR1",
          }}
        />
        <span class={`dot ${useColorStatus("L41SR1_M")}`}>M</span>
      </div>
      <div className="position-absolute single-text-26">
        <div className="d-flex">
          <span className={`line-circle ${useColorStatus("L41WP2_M")}`}> </span>

          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L41WP2",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <span className={`line-circle ${useColorStatus("L41WP1_M")}`}> </span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "L41WP1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27">
        <BlackContainer
          data={{
            label: "L41RM1_TT01",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41RM1_PT01",
            useClass: "greenTxt mt-2",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41MD1_Speed",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41RM1_JT01",
            useClass: "greenTxt mt-4",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41MD1_IT01",
            useClass: "greenTxt mt-2",
            unit: "Amps",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="img-83 position-absolute single-text-28"></div>
      <div className="position-absolute single-text-29 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "L41BF1_PT03",
              useClass: "greenTxt",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "L41BF1_DP01",
              useClass: "greenTxt mt-2 ml-5",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-30 d-flex">
        <BlackContainer
          data={{
            label: "L41BF1_PT02",
            useClass: "greenTxt",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41BF1_TT01",
            useClass: "greenTxt ml-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-31 d-flex text-center">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "L91RA5",
            }}
          />
          <div
            className={`circle-img ${useFanImgTagsColorStatus("L91RA5_M")}`}
          ></div>
        </div>
        <div className="ml-2">
          <div
            className={`circle-img ${useFanImgTagsColorStatus("L91RA6_M")}`}
          ></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "L91RA6",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "L91RA2",
            }}
          />
          <div
            className={`circle-img ${useFanImgTagsColorStatus("L91RA2_M")}`}
          ></div>
        </div>
        <div className="ml-2">
          <div
            className={`circle-img ${useFanImgTagsColorStatus("L91RA3_M")}`}
          ></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "L91RA3",
            }}
          />
        </div>
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-2",
              label: "L91RA4",
            }}
          />
          <div
            className={`circle-img ${useFanImgTagsColorStatus("L91RA4_M")}`}
          ></div>
        </div>
        <div className="ml-2">
          <div
            className={`circle-img ${useFanImgTagsColorStatus("L91RA1_M")}`}
          ></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "L91RA1",
            }}
          />
        </div>
      </div>
      <div class="dashedHr-Pipe position-absolute single-text-32">
        <span class={`dot ml-auto ${useColorStatus("L91SC1_M")}`}>M</span>
      </div>
      <div class="dashedHr-Pipe position-absolute single-text-33">
        <span class={`dot ${useColorStatus("L91SC3_M")}`}>M</span>
      </div>
      <div class="dashedHr-Pipe position-absolute single-text-34">
        <span class={`dot ml-auto ${useColorStatus("L91SC2_M")}`}>M</span>
      </div>
      <div class="dashedHr-Pipe position-absolute single-text-35">
        <span class={`dot ${useColorStatus("L91SC4_M")}`}>M</span>
      </div>
      <div class="dashedHr-Pipe position-absolute single-text-36">
        <span class={`dot ml-auto ${useColorStatus("L91SC5_M")}`}>M</span>
      </div>
      <div class="dashedHr-Pipe position-absolute single-text-37">
        <span class={`dot ${useColorStatus("L91SC6_M")}`}>M</span>
      </div>
      <div class="dashedHr-Pipe position-absolute single-text-38">
        <span class={`dot ml-auto ${useColorStatus("L91SM1_M")}`}>M</span>
      </div>
      <div class="dashedHr-Pipe position-absolute single-text-39">
        <span class={`dot ml-auto ${useColorStatus("L91SC7_M")}`}>M</span>
      </div>
      <div class="dashedHr-Pipe position-absolute single-text-40">
        <span class={`dot ml-auto ${useColorStatus("L91PP1_M")}`}>M</span>
      </div>
      <div class="dashedHr-Pipe position-absolute single-text-41">
        <span class={`dot ml-auto ${useColorStatus("L91PP2_M")}`}>M</span>
      </div>
      <div className="position-absolute single-text-42 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "L91SG3",
          }}
        />
        <div className="d-flex mr-2">
          <div
            className={`hexa-gray-green-red-img ${useImgHexaLColorStatus(
              "L91SG3_OPN"
            )}`}
          ></div>
          <div
            className={`hexa-gray-green-red-img ${useImgHexaRColorStatus(
              "L91SG3_CLS"
            )}`}
          ></div>
        </div>
      </div>
      <div className="position-absolute single-text-43 d-flex">
        <div className="d-flex mr-2">
          <div
            className={`hexa-gray-green-red-img ${useImgHexaLColorStatus(
              "L91SG4_CLS"
            )}`}
          ></div>
          <div
            className={`hexa-gray-green-red-img ${useImgHexaRColorStatus(
              "L91SG4_OPN"
            )}`}
          ></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91SG4",
          }}
        />
      </div>
      <div className="position-absolute single-text-44 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91SG5",
          }}
        />
        <div className="d-flex mr-2">
          <div
            className={`hexa-gray-green-red-img ${useImgHexaLColorStatus(
              "L91SG5_OPN"
            )}`}
          ></div>
          <div
            className={`hexa-gray-green-red-img ${useImgHexaRColorStatus(
              "L91SG5_CLS"
            )}`}
          ></div>
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-45">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "481FB3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Stand by",
          }}
        />

        <BlackContainer
          data={{
            label: "481SFF3_WT",
            useClass: "greenTxt mt-2",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "481FB3_TT01",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "481GA3_CO",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-46">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "481FB4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Stand by",
          }}
        />

        <BlackContainer
          data={{
            label: "481CFF4_WT",
            useClass: "greenTxt mt-2",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "481FB4_TT01",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "481GA4_CO",
            useClass: "greenTxt mt-2",
            unit: "",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-47">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "481FB1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PYROCLON",
          }}
        />

        <BlackContainer
          data={{
            label: "481CFF1_WT",
            useClass: "greenTxt mt-2",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "481FB1_TT01",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "481GA1_CO",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-48">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "481FB2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PYROCLON",
          }}
        />

        <BlackContainer
          data={{
            label: "481CFF2_WT",
            useClass: "greenTxt mt-2",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "481FB2_TT01",
            useClass: "greenTxt mt-2",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "481GA2_CO",
            useClass: "greenTxt mt-2",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "481BF3",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-50">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "481BF4",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-51">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "481BF1",
          }}
        />
      </div>
      <div className="containerImage text-center position-absolute single-text-52">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "481BF2",
          }}
        />
      </div>
      <div className="position-absolute single-text-53">
        <div class="connector-icon ">
          <span class={`line-circle ${useColorStatus("481FN3_M")}`}></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "481FN3",
          }}
        />
      </div>

      <div className="position-absolute single-text-54">
        <div class="connector-icon ">
          <span class={`line-circle ${useColorStatus("481FN4_M")}`}> </span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "481FN4",
          }}
        />
      </div>
      <div className="position-absolute single-text-55">
        <div class="connector-icon ">
          <span class={`line-circle ${useColorStatus("481FN2_M")}`}> </span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "481FN2",
          }}
        />
      </div>
      <div className="position-absolute single-text-56">
        <div class="connector-icon ">
          <span class={`line-circle ${useColorStatus("481FN1_M")}`}></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "481FN1",
          }}
        />
      </div>
      <div className="position-absolute single-text-57">
        <span className={`line-circle ${useColorStatus("L91CP3_M")}`}></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91CP3",
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        <div class="connector-icon ">
          <span className={`dot p-2 ${useColorStatus("L91BL1_M")}`}>M </span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91BL1_VFD",
          }}
        />
      </div>
      <div className="position-absolute single-text-59 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L41FN4",
          }}
        />
        <div class="connector-icon ">
          <span className={`line-circle ${useColorStatus("L91FN4_M")}`}></span>
        </div>
      </div>
      <div className="position-absolute single-text-60 d-flex">
        <div class="connector-icon ">
          <span className={`line-circle ${useColorStatus("L41FN5_M")}`}></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L41FN5",
          }}
        />
      </div>
      <div className=" position-absolute single-text-61 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91RA8",
          }}
        />
        <div
          className={`circle-img ${useFanImgTagsColorStatus("L91RA8_M")}`}
        ></div>
      </div>
      <div className=" position-absolute single-text-62 d-flex">
        <div
          className={`circle-img ${useFanImgTagsColorStatus("L91RA7_M")}`}
        ></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91RA7",
          }}
        />
      </div>
      <div className="position-absolute single-text-63">
        <div class="connector-icon ">
          <span className={`line-circle ${useColorStatus("L91CP2_M")}`}></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91CP2",
          }}
        />
      </div>
      <div className="position-absolute single-text-64">
        <div class="connector-icon ">
          <span class={`line-circle ${useColorStatus("L41FN2_M")}`}></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L41FN2",
          }}
        />
      </div>
      <div className="position-absolute single-text-65">
        <BlackContainer
          data={{
            label: "L41BF1_PT01",
            useClass: "greenTxt",
            unit: "",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L41BF1_TT02",
            useClass: "greenTxt  mt-2",
            unit: "C",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "L41GA1_CO",
              useClass: "greenTxt mt-4",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ml-3 mt-4",
              label: "L41SD3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-66 d-flex">
        <BlackContainer
          data={{
            label: "L41FN2_KWH",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <div className="ml-4">
          <BlackContainer
            data={{
              label: "L41FN2_MV_ST",
              useClass: "greenTxt  mt-2",
              unit: "Rpm",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "L41FN2_MV_IT",
              useClass: "greenTxt mt-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-67 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91SC1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-5",
            label: "L91SC3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "L91SC2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-5",
            label: "L91SC4",
          }}
        />
      </div>
      <div className="position-absolute single-text-68 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L91SC5",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2",
            label: "L91SM1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-5",
            label: "L91SC6",
          }}
        />
      </div>
      <div className=" position-absolute single-text-69">
        <div className="chimni-red"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "L91ST1",
          }}
        />
      </div>

      <div className="position-absolute single-text-70 d-flex">
        <span className={`dot ${useColorStatus("L41BF1_M")}`}>M</span>

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3 bg-light p-1",
            label: "L41BF1",
          }}
        />
      </div>
      <div className="position-absolute single-text-71 img-41 text-center">
        <span className={`dot ${useColorStatus("L41MD1_M")}`}>M</span>
      </div>
      <div className="containerImage position-absolute single-text-72"></div>
      <div className="containerImage position-absolute single-text-73"></div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-74",
          label: "L41LD3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-75",
          label: "L91PP1",
        }}
      />
      <div className=" position-absolute single-text-76 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "L91SG1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-auto",
            label: "L91SG2",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-77",
          label: "Pyro Co Signal",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-78",
          label: "From Preheater",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-79",
          label: "L51SD1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-80",
          label: "L41SD1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-81",
          label: "SELECT ATLEAST 1 BIN FOR VM COAL",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-82",
          label: "481FB3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-83",
          label: "481FB4",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-84",
          label: "481FB2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-85",
          label: "481FB1",
        }}
      />
      <div className="position-absolute single-text-86 bg-light p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ",
            label: "Coal Mill",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ",
            label: "Interlooks",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-87",
          label: "L41SD2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-88",
          label: "Callbration",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-89",
          label: "ZSS",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-90",
          label: "ZSS",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  position-absolute single-text-91",
          label: "ZSS",
        }}
      />
      <div className="position-absolute text-center single-text-92 bg-light p-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ",
            label: "RENK Gear box",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ",
            label: "Lubrication",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-93">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ",
            label: "L41MD1",
          }}
        />
        <div className=" mt-2 bg-light p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ",
              label: "L41MD1",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark  ",
              label: "Temperatures",
            }}
          />
        </div>
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-94",
          label: "L91PP2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-95",
          label: "L91SC7",
        }}
      />

      <div
        className={`pipe-gray-green-red position-absolute pipe-1 ${usePipeColorStatus(
          "L41MW1_ZL"
        )}`}
      ></div>
      {/* <div className="pipe-gray-green-red arrow-pipe-green position-absolute pipe-2"> */}
      <div
        className={`pipe-gray-green-red position-absolute pipe-2 ${usePipeColorStatus(
          "L41MW1_ZR"
        )}`}
      ></div>
      <div
        className={`pipe-gray-green-red position-absolute pipe-3 ${usePipeColorStatus(
          "L41MW1_ZH"
        )}`}
      ></div>
      <div className="pipeVr position-absolute pipe-4"> </div>
      <div className="pipeVr position-absolute pipe-5"> </div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeVr position-absolute pipe-8"></div>
      <div className="pipeHr position-absolute pipe-9">
        <div class="d-flex ml-5">
          <i class="fas fa-long-arrow-alt-left ml-5"></i>
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeHr position-absolute pipe-11">
        <div class="d-flex ml-5">
          <i class="fas fa-long-arrow-alt-left ml-5"></i>
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-12">
        <div class="d-flex ml-5">
          <i class="fas fa-long-arrow-alt-right ml-5"></i>
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-13"></div>
      <div className="pipeHr position-absolute pipe-14"></div>
      <div className="pipeHr position-absolute pipe-15"></div>
      <div className="pipeVr position-absolute pipe-16"></div>
      <div className="pipeVr position-absolute pipe-17"></div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr  position-absolute line-5"></div>
      <div className="yellowline-Hr  position-absolute line-6"></div>
      <div className="yellowline-Hr  position-absolute line-7"></div>
      <div className="yellowline-Hr  position-absolute line-8"></div>
      <div className="yellowline-Hr  position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      {/* <div className="yellowline-Vr downArrow position-absolute line-23"></div> */}
      {/* <div className="yellowline-Vr downArrow position-absolute line-24"></div> */}
      <div className="yellowline-Vr  position-absolute line-25"></div>
      <div className="yellowline-Vr  position-absolute line-26"></div>
      <div className="yellowline-Hr  position-absolute line-27"></div>
      <div className="yellowline-Vr  position-absolute line-28"></div>
      <div className="yellowline-Vr  position-absolute line-29"></div>
      <div className="yellowline-Vr  position-absolute line-30"></div>
      <div className="yellowline-Hr  position-absolute line-31"></div>
      <div className="yellowline-Hr  position-absolute line-32"></div>
      <div className="yellowline-Vr  position-absolute line-33"></div>
      <div className="yellowline-Vr  position-absolute line-34"></div>
      <div className="yellowline-Vr  position-absolute line-35"></div>
      <div className="yellowline-Vr  position-absolute line-36"></div>
      <div className="yellowline-Vr  position-absolute line-37"></div>
      <div className="yellowline-Vr  position-absolute line-38"></div>
      <div className="yellowline-Vr downArrow position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow position-absolute line-41"></div>
      <div className="yellowline-Vr downArrow position-absolute line-42"></div>
      <div className="yellowline-Vr upArrow position-absolute line-43"></div>
      <div className="yellowline-Vr upArrow position-absolute line-44"></div>
      <div className="yellowline-Vr upArrow position-absolute line-45"></div>
      <div className="yellowline-Vr upArrow position-absolute line-46"></div>
      <div className="yellowline-Hr position-absolute line-47"></div>
      <div className="yellowline-Hr position-absolute line-48"></div>
      <div className="yellowline-Hr position-absolute line-49"></div>
      <div className="yellowline-Hr position-absolute line-50"></div>
      <div className="yellowline-Vr upArrow position-absolute line-51"></div>
      <div className="yellowline-Vr upArrow position-absolute line-52"></div>
      <div className="yellowline-Vr upArrow position-absolute line-53"></div>
      <div className="yellowline-Vr upArrow position-absolute line-54"></div>
      <div className="yellowline-Vr upArrow position-absolute line-55"></div>
      <div className="yellowline-Vr upArrow position-absolute line-56"></div>
      <div className="yellowline-Vr upArrow position-absolute line-57"></div>
      <div className="yellowline-Vr upArrow position-absolute line-58"></div>
      <div className="yellowline-Vr downArrow position-absolute line-59"></div>
      <div className="yellowline-Vr downArrow position-absolute line-60"></div>
      <div className="yellowline-Vr downArrow position-absolute line-61"></div>
      <div className="yellowline-Vr downArrow position-absolute line-62"></div>
      <div className="yellowline-Vr downArrow position-absolute line-63"></div>
      <div className="yellowline-Vr upArrow position-absolute line-64"></div>
      <div className="yellowline-Vr downArrow position-absolute line-65"></div>
      <div className="yellowline-Vr downArrow position-absolute line-66"></div>
      <div className="yellowline-Vr downArrow position-absolute line-67"></div>
      <div className="yellowline-Vr downArrow position-absolute line-68"></div>
      <div className="yellowline-Vr downArrow position-absolute line-69"></div>
    </div>
  );
};

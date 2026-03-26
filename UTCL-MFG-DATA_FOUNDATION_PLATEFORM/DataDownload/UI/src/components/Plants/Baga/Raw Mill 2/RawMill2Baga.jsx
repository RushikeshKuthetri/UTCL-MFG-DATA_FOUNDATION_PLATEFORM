import { TextContainerWithWrapWord, BlackContainer, TextColumn, ProgressBarMimic } from "../../../index";
import { useBorderTagsColorStatus, useCaretColorStatus, useColorStatus, useFanImgTagsColorStatus, useImgHexaLColorStatus, useImgHexaRColorStatus, usePipeColorStatus } from "../../../../utils";
import * as tagsData from "../../../../data/baga/cooler/bagaCoolerTextcolumn";
export const RawMill2Baga = () => {
  return (
    <div className="RawMill2Baga w-100 h-100 position-relative">
      <div className="containerImage text-center position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pt-2",
            label: "332HP1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "MILL MIX",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "HOPPER 2",
          }}
        />
      </div>
      <div className="hpipecircle position-absolute single-text-2">
        <span className="grayDot"></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "332WF1",
          }}
        />
        <span className={`dot ${useColorStatus("332WF1_M")}`}>M</span>
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      </div>
      <div className="position-absolute single-text-3">
        <div className="d-flex mr-2 ">
          <div className={`hexa-gray-green-red-img ${useImgHexaLColorStatus("")}`}></div>
          <div className={`hexa-gray-green-red-img ${useImgHexaRColorStatus("")}`}></div>
        </div>
      </div>
      <div className=" position-absolute single-text-4">
        <div className="d-flex ml-3 mb-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-1 mt-1",
              label: "TEAR SW",
            }}
          />
          <div class="square grey-color ml-2"></div>
        </div>
        <div className="hpipecircle">
          <span className="grayDot"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto",
              label: "332BC1",
            }}
          />
          <span className={`dot ${useColorStatus("332BC1_M")}`}>M</span>
        </div>
        <div className="d-flex mt-1 justify-content-around">
          <div class="square grey-color mt-1"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-5">
        <BlackContainer
          data={{
            label: "332WF1_FT01",
            useClass: "greenTxt",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "332WF1_ST01",
            useClass: "greenTxt  mt-1",
            unit: "Rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-6">
        <div className="hpipecircle">
          <span className="grayDot"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto",
              label: "332BC2",
            }}
          />
          <span className={`dot ${useColorStatus("332BC2_M")}`}>M</span>
        </div>
        <div className="d-flex mt-1 justify-content-around">
          <div className={`text-dark px-1 grey-color mt-1 ${useColorStatus("")}`} text="BDS" label="" />
          <div>
            <div className={`text-dark px-1 grey-color mt-1 ${useColorStatus("")}`} text="PCS" label="" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mx-auto",
                label: "332BC2",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CALIBRARTION",
          }}
        />
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Tension Pressure < 74",
            }}
          />
          <div className="square grey-color ml-3"></div>
        </div>
        <div className="d-flex mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Tension Pressure SP",
            }}
          />
        </div>
      </div>
      <div className="boxContainer p-2 position-absolute single-text-8">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "362RM1_TT03",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362RM1_TT04",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362RM1_TT05",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Tension Pressure",
            }}
          />
          <BlackContainer
            data={{
              label: "362HY1_PT01",
              useClass: "greenTxt ml-2",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Lefting Pressure",
            }}
          />
          <BlackContainer
            data={{
              label: "362HY1_PT02",
              useClass: "greenTxt ml-2",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Roller 1 Position",
            }}
          />
          <BlackContainer
            data={{
              label: "362HY1_ZT01",
              useClass: "greenTxt ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Roller 2 Position",
            }}
          />
          <BlackContainer
            data={{
              label: "362HY1_ZT02",
              useClass: "greenTxt ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Roller 3 Position",
            }}
          />
          <BlackContainer
            data={{
              label: "362HY1_ZT03",
              useClass: "greenTxt ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Rollers Lifted",
            }}
          />
          <div className={`line-circle  px-1 grey-color mt-1 ${useColorStatus("362LUA_M")}`} label="" />
          {/* <span className="line-circle grey-color"> </span> */}
        </div>
        <div className="d-flex justify-content-around mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Rollers Pos Equal",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "362LUA",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-9 d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-4",
              label: "332BF1",
            }}
          />
        </div>
        <div className="connector-icon ml-4">
          <span className="dot grey-color">M</span>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="circle-img c-grey-img-2"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3 mt-2",
            label: "332RA1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-11">
        <BlackContainer
          data={{
            label: "362MD2_JT01",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "362MD2_IT02",
            useClass: "greenTxt  mt-1",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3 mb-1",
            label: "362MD2",
          }}
        />
        <div className="pipe dotted-pipe">
          <span className={`dot ${useColorStatus("362 MD2_M")}`}>M</span>
        </div>
      </div>
      <div className="position-absolute single-text-13">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3 mb-1",
              label: "321BC1",
            }}
          />
          <BlackContainer
            data={{
              label: "321BC1_IT01",
              useClass: "greenTxt  mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3 mb-1",
              label: "211BC2",
            }}
          />
          <BlackContainer
            data={{
              label: "211BC2_IT01",
              useClass: "greenTxt  mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3 mb-1",
              label: "312BC2",
            }}
          />
          <BlackContainer
            data={{
              label: "312BC2_IT01",
              useClass: "greenTxt  mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-3 mb-1",
              label: "311BC1",
            }}
          />
          <BlackContainer
            data={{
              label: "311BC1_IT01",
              useClass: "greenTxt  mt-1",
              unit: "Amp",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-14">
        <div className="d-flex mr-2 ">
          <div className={`hexa-gray-green-red-img ${useImgHexaLColorStatus("")}`}></div>
          <div className={`hexa-gray-green-red-img ${useImgHexaRColorStatus("")}`}></div>
        </div>
      </div>
      <div className="containerImage text-center position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pt-2",
            label: "362HP1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-16">
        <div className="hpipecircle">
          <span className="grayDot"></span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto",
              label: "362BC2",
            }}
          />
          <span className={`dot ${useColorStatus("362BC2_M")}`}>M</span>
        </div>
        <div className="d-flex mt-1 justify-content-around">
          <div className={`text-dark px-1 grey-color mt-1 ${useColorStatus("")}`} text="BDS" label="" />
          <div>
            <div className={`text-dark px-1 grey-color mt-1 ${useColorStatus("")}`} text="PCS" label="" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mx-auto mt-2",
                label: "362MW2",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-17">
        <div className="d-flex mr-2 ">
          <div className={`hexa-gray-green-red-img ${useImgHexaLColorStatus("")}`}></div>
          <div className={`hexa-gray-green-red-img ${useImgHexaRColorStatus("")}`}></div>
        </div>
      </div>
      <div className=" position-absolute single-text-18">
        <div className="hpipecircle">
          <span className={`dot ${useColorStatus("362BC1_M")}`}>M</span>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto",
              label: "362BC1",
            }}
          />
          <span className="grayDot"></span>
        </div>
        <div className="d-flex mt-1 justify-content-around">
          <div className={`text-dark px-1 grey-color mt-1 ${useColorStatus("")}`} text="BDS" label="" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto",
              label: "362BW1",
            }}
          />
          <div className={`text-dark px-1 grey-color mt-1 ${useColorStatus("")}`} text="PCS" label="" />
        </div>
      </div>
      <div className="position-absolute single-text-19">
        <div className="d-flex">
          <div className="square  grey-color"></div>
          <div className="square ml-3  grey-color"></div>
        </div>
        <div className="d-flex">
          <div className="containerImage mt-2 text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-4",
                label: "362BF1",
              }}
            />
          </div>
          <div>
            <div className="connector-icon ml-4">
              <span class="line-circle grey-color"></span>

              <div className="yellowline-Vr downArrow position-absolute line-1"></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ml-3",
                label: "362FN1",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-20 d-flex">
        <div className="circle-img c-grey-img-2"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3 mt-2",
            label: "362RA1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-21">
        <div className="bigContainer pt-5 text-center">
          <BlackContainer
            data={{
              label: "362RM1_DP01",
              useClass: "greenTxt  mt-1 ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5",
              label: "Raw Mill 2",
            }}
          />
          <div className="square mt-3  grey-color"></div>

          <BlackContainer
            data={{
              label: "362RM1_VT02",
              useClass: "greenTxt  mt-5",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-2">
          <BlackContainer
            data={{
              label: "362GB1_TEB",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362GB1_TED",
              useClass: "greenTxt  ml-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <div className="square mt-1 ml-4 grey-color"></div>
        <div className="containerImage text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-2",
              label: "362HP2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div className="triangle-with-squares mt-2 ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3 mt-1",
              label: "362CN3",
            }}
          />
        </div>

        <div className="triangle-with-squares  ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3 mt-1",
              label: "362CN1",
            }}
          />
        </div>
        <div className="triangle-with-squares  ml-3 mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3 mt-1",
              label: "362CN4",
            }}
          />
        </div>
        <div className="triangle-with-squares  ml-1 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3 mt-1",
              label: "362CN2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2 mt-2",
            label: "392RA3",
          }}
        />
        <span className={`circle-img ${useFanImgTagsColorStatus("392RA3_M")}`}></span>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <span className={`circle-img ${useFanImgTagsColorStatus("392RA1_M")}`}></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "392RA1",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <span className={`circle-img ${useFanImgTagsColorStatus("392RA4_M")}`}></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "392RA4",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <span className={`circle-img ${useFanImgTagsColorStatus("392RA2_M")}`}></span>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "392RA2",
          }}
        />
      </div>
      <div className="hpipecircle position-absolute single-text-28"></div>
      <div className="hpipecircle position-absolute single-text-29"></div>
      <div className="hpipecircle position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "392AS3",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <div className="connector-icon ml-4">
          <span className={`line-circle ${useColorStatus("392FN1_M")}`}></span>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-2",
            label: "392FN1",
          }}
        />
      </div>
      <div className="position-absolute single-text-32">
        <div className="connector-icon ml-4">
          <span className={`line-circle ${useColorStatus("392FN2_M")}`}></span>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-2",
            label: "392FN2",
          }}
        />
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <div className="mr-3">
          <div className="connector-icon ml-2">
            <span className={`line-circle ${useColorStatus("392FN3_M")}`}></span>
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "392FN3",
            }}
          />
        </div>
        <div className="ml-5">
          <div className="connector-icon ml-2">
            <span className={`line-circle ${useColorStatus("392FN4_M")}`}></span>
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "392FN4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34">
        <div className="connector-both-side-2 ">
          <span className={`line-circle ${useColorStatus("362FN2_M")}`}></span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "362FN2",
          }}
        />
      </div>
      <div className="bagHouse position-absolute single-text-35"></div>
      <div className="connector-both-side-2 position-absolute single-text-36">
        <span className="line-circle grey-color"></span>
      </div>
      <div className="chimni-red position-absolute single-text-37"></div>
      <div className=" position-absolute single-text-38 d-flex">
        <div className="mr-1">
          <BlackContainer
            data={{
              label: "422BH1_TT01",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422BH1_PT01",
              useClass: "greenTxt  mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "422BH1_TT02",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "422BH1_PT02",
              useClass: "greenTxt  mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-39">
        <BlackContainer
          data={{
            label: "3621R2_ST01",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "362FN2_IT01",
            useClass: "greenTxt  mt-2",
            unit: "AMPS",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "362FN2_JT01",
            useClass: "greenTxt  mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        '
      </div>
      <div className="position-absolute single-text-40">
        <div className="d-flex">
          <div className="square  grey-color"></div>
          <div className="square ml-3  grey-color"></div>
        </div>
        <div className="d-flex">
          <div className="containerImage mt-2 text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-4",
                label: "391BF2",
              }}
            />
          </div>
          <div>
            <div className="connector-icon ml-4">
              <span class="line-circle grey-color"></span>

              <div className="yellowline-Vr downArrow position-absolute line-1"></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ml-3",
                label: "391FN8",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-41">
        <BlackContainer
          data={{
            label: "362SR1_ST01",
            useClass: "greenTxt",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "362SR1_IT01",
            useClass: "greenTxt  mt-2",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <div className="mt-5 ml-4 mb-5">
          <BlackContainer
            data={{
              label: "362RM1_TT01",
              useClass: "greenTxt  mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362RM1_PT02",
              useClass: "greenTxt  mt-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-5 ml-4">
          <BlackContainer
            data={{
              label: "361MD1_JT01",
              useClass: "greenTxt  mt-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "361MD1_IT01",
              useClass: "greenTxt  mt-2",
              unit: "Amps",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-42">
        <div className="connector-icon ml-2">
          <span className={`line-circle ${useColorStatus("362FN3_M")}`}></span>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-43">
        <BlackContainer
          data={{
            label: "Raw mil 2 power",
            useClass: "greenTxt ml-auto",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Raw mill _energy_consumption",
            useClass: "greenTxt  mt-2 ml-auto",
            unit: "kwh/t",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Raw mill 2_specific_power _clinker ",
            useClass: "greenTxt  mt-2 ml-auto",
            unit: "units",
            unitColor: "unitColor",
          }}
        />

        <div className="d-flex">
          <BlackContainer
            data={{
              label: "332MW2_PT01",
              useClass: "greenTxt  mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "362RM1_TT02",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="hpipecircle position-absolute single-text-44">
        <div className="bars mx-auto"></div>
      </div>
      <div className="position-absolute single-text-45 d-flex">
        <div className="mr-1">
          <div className="connector-icon ml-2">
            <span className={`line-circle ${useColorStatus("392FN5_M")}`}></span>
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "392FN5",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="connector-icon ml-2">
            <span className={`line-circle ${useColorStatus("392FN6_M")}`}></span>
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "392FN6",
            }}
          />
        </div>
        <div className="ml-4">
          <div className="connector-icon ml-2">
            <span className={`line-circle ${useColorStatus("392FN7_M")}`}></span>
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "392FN7",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="connector-icon ml-2">
            <span className={`line-circle ${useColorStatus("392FN8_M")}`}></span>
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "392FN8",
            }}
          />
        </div>
      </div>
      <div className="hpipecircle position-absolute single-text-46">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "391ASS",
          }}
        />
      </div>
      <div className="position-absolute single-text-47 d-flex">
        <div className="mr-1">
          <div className="connector-icon ml-2">
            <span className={`line-circle ${useColorStatus("391FN5_M")}`}></span>
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "391FN5",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="connector-icon ml-2">
            <span className={`line-circle ${useColorStatus("391FNF_M")}`}></span>
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "391FNF",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-48">
        <BlackContainer
          data={{
            label: "392MD1_JT01",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "392MD1_IT01",
            useClass: "greenTxt mt-1 mb-3",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3 mb-1",
            label: "362MD1",
          }}
        />
        <div className="pipe dotted-pipe">
          <span className={`dot ${useColorStatus("392MD1_M")}`}>M</span>
        </div>
      </div>
      <div className="position-absolute single-text-49">
        <div className="dashedHr-Pipe ">
          <span className={`dot ${useColorStatus("392SM1_M")}`}>M</span>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2 mt-2 ml-2",
            label: "392SM1",
          }}
        />
      </div>
      <div className="position-absolute single-text-50">
        <div className={`text-dark px-1 grey-color ${useColorStatus("")}`} text="BDS1" label="" />
        <div className={`text-dark px-1 grey-color mt-2 ${useColorStatus("")}`} text="BDS2" label="" />
      </div>
      <div className="position-absolute single-text-51">
        <div className={`text-dark px-1 grey-color ${useColorStatus("")}`} text="BDS3" label="" />
        <div className={`text-dark px-1 grey-color mt-2 ${useColorStatus("")}`} text="BDS4" label="" />
      </div>
      <div className="position-absolute single-text-52">
        <div className={`text-dark px-1 grey-color ${useColorStatus("")}`} text="BL" label="" />
      </div>
      <div className="position-absolute single-text-53">
        <div className="d-flex">
          <div className="square  grey-color"></div>
          <div className="square ml-3  grey-color"></div>
        </div>
        <div className="d-flex">
          <div className="containerImage mt-2 text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-4",
                label: "391BF3",
              }}
            />
          </div>
          <div>
            <div className="connector-icon ml-4">
              <span className="dot grey-color">M</span>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ml-3",
                label: "391FN9",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-54 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mr-2",
            label: "391RA5",
          }}
        />
        <div className="d-flex mr-2 ">
          <div className={`hexa-gray-green-red-img ${useImgHexaLColorStatus("")}`}></div>
          <div className={`hexa-gray-green-red-img ${useImgHexaRColorStatus("")}`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-55">
        <div className="square mt-1 grey-color mx-auto"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "ZSS_PH_SIDE",
          }}
        />
      </div>
      <div className="position-absolute single-text-56">
        <div className="square mt-1 grey-color mx-auto"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "ZSS_PH_SIDE",
          }}
        />
      </div>
      <div className="square mt-1 grey-color position-absolute single-text-57"></div>
      <span className={`position-absolute single-text-58 dot ${useColorStatus("362HY2_M")}`}>M</span>
      <span className={`position-absolute single-text-59 dot ${useColorStatus("362SR1_M")}`}>M</span>
      <span className="position-absolute single-text-60 dot grey-color">M</span>
      <div className="position-absolute single-text-61">
        <div className="dot grey-color mx-auto"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "391CVS",
          }}
        />
      </div>
      <div className="position-absolute single-text-62 img-41 text-center">
        <span className="dot grey-color pt-2">M</span>
      </div>
      <div className="position-absolute single-text-63 img-41 text-center">
        <span className="dot grey-color">M</span>
      </div>
      <div className="position-absolute single-text-64">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "To Standby",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "431BE5",
          }}
        />
      </div>
      <div className="position-absolute single-text-65">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "To",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "392AS6",
          }}
        />
      </div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Hr position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr  position-absolute line-19"></div>
      <div className="yellowline-Hr  position-absolute line-20"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr  downArrow position-absolute line-26"></div>
      <div className="yellowline-Hr   position-absolute line-27"></div>
      <div className="yellowline-Hr   position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-29"></div>
      <div className="yellowline-Hr   position-absolute line-30"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-35"></div>
      <div className="yellowline-Hr  position-absolute line-36"></div>
      <div className="yellowline-Vr downArrow position-absolute line-37"></div>
      <div className="yellowline-Vr downArrow position-absolute line-38"></div>
      <div className="yellowline-Vr downArrow position-absolute line-39"></div>
      <div className="yellowline-Vr downArrow position-absolute line-40"></div>

      <div className="pipeVr position-absolute pipe-1"></div>
      <div className="pipeHr position-absolute pipe-2"></div>
      <div className="pipeVr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8">
        <div className="d-flex ml-4">
          <i className="fas fa-long-arrow-alt-left"></i>
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeVr position-absolute pipe-11"></div>
      <div className="pipeHr position-absolute pipe-12">
        <div className="d-flex justify-content-around">
          <i className="fas fa-long-arrow-alt-left"></i>
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-13">
        <div className="d-flex justify-content-around">
          <i className="fas fa-long-arrow-alt-right"></i>
          <div className="bars"></div>
        </div>
      </div>
      <div className="pipeHr position-absolute pipe-14"></div>
      <div className="pipeVr position-absolute pipe-15"></div>
      <div className="pipeVr position-absolute pipe-16"></div>
    </div>
  );
};

import { TextContainerWithWrapWord, BlackContainer, MotorCircleDigitalTag, PipeWithCircles } from "../../../index";
import { useColorStatus, useFanImgTagsColorStatus, useImgHexaLColorStatus, useImgHexaRColorStatus } from "../../../../utils";

export const RawMill1Baga = () => {
  return (
    <div className=" RawMill2Baga RawMill1Baga w-100 h-100 position-relative">
      <div className="containerImage text-center position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pt-2",
            label: "331HP1",
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
            label: "HOPPER 1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-2">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "grayDot",
          }}
          text={{ useClass: "text-dark", label: "331WF1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("331WF1_M")}`,
            secondCircleText: "M",
            secondCircleLabel: "331WF1_M",
          }}
        />
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
        </div>
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "grayDot",
          }}
          text={{ useClass: "text-dark", label: "331BC1" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("331BC1_M")}`,
            secondCircleText: "M",
            secondCircleLabel: "331BC1_M",
          }}
        />
        <div className="d-flex mt-1 justify-content-around"></div>
      </div>
      <div className=" position-absolute single-text-5">
        <BlackContainer
          data={{
            label: "331WF1_FT01",
            useClass: "greenTxt",
            unit: "tph",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "331WF1_ST01",
            useClass: "greenTxt  mt-1",
            unit: "Rpm",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-6">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "grayDot",
          }}
          text={{ useClass: "text-dark", label: "331BC2" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("331BC1_M")}`,
            secondCircleText: "M",
            secondCircleLabel: "331BC1_M",
          }}
        />
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
        <div className="d-flex justify-content-around">
          <BlackContainer
            data={{
              label: "361RM1_TT03",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "361RM1_TT04",
              useClass: "greenTxt ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "361RM1_TT05",
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
              label: "361HY1_PT01",
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
              label: "361HY1_PT02",
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
              label: "361HY1_ZT01",
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
              label: "361HY1_ZT02",
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
              label: "361HY1_ZT03",
              useClass: "greenTxt ml-2",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "Rollers Lifted",
            }}
          />
          <MotorCircleDigitalTag className={`line-circle digital-tag px-1 ml-auto ${useColorStatus("361LUA_M")}`} label="361LUA_M" />
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
              useClass: "text-dark ml-2",
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
        <div>
          <div className="connector-icon ml-4">
            <div className={`line-circle grey-color`}></div>
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "331FN1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "332RA1",
          }}
        />
        <div className="circle-img  ml-3 c-grey-img-2"></div>
      </div>
      <div className=" position-absolute single-text-11 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "361BE1_IT01",
              useClass: "greenTxt ml-3",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "332RA1",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "361BE1_IT01",
            useClass: "greenTxt ",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-12">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3 mb-1",
            label: "361MD2",
          }}
        />
        <div className="pipe dotted-pipe">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("361MD2_M")}`} label="361MD2_M" text="M" />
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
            label: "361HP1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-16">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "grayDot",
          }}
          text={{ useClass: "text-dark", label: "361BC2" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("361BC2_M")}`,
            secondCircleText: "M",
            secondCircleLabel: "361BC2_M",
          }}
        />

        <div className="d-flex mt-1 justify-content-around">
          <div className={`text-dark px-1 grey-color mt-1 ${useColorStatus("")}`} text="BDS" label="" />
          <div>
            <div className={`text-dark px-1 grey-color mt-1 ${useColorStatus("")}`} text="PCS" label="" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mx-auto mt-2",
                label: "361MW2",
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
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: `dot digital-tag ${useColorStatus("361BC1_M")}`,
            firstCircleText: "M",
            firstCircleLabel: "361BC1_M",
          }}
          text={{ useClass: "text-dark", label: "361BC1" }}
          secondCircle={{
            secondCircleClass: `dot grey-color`,
          }}
        />

        <div className="d-flex mt-1 justify-content-around">
          <div className={`text-dark px-1 grey-color mt-1 ${useColorStatus("")}`} text="BDS" label="" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto",
              label: "361BW1",
            }}
          />
          <div className={`text-dark px-1 grey-color mt-1 ${useColorStatus("")}`} text="PCS" label="" />
        </div>
      </div>
      <div className="position-absolute single-text-19">
        <div className="d-flex">
          <div className="containerImage mt-2 text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-4",
                label: "361BF1",
              }}
            />
          </div>
          <div>
            <div className="connector-icon mt-3 ml-4">
              <div className={`line-circle grey-color`}></div>
              <div className="yellowline-Vr downArrow position-absolute line-1"></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ml-3",
                label: "361FN1",
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
            label: "361RA1",
          }}
        />
      </div>
      <div className=" position-absolute single-text-21">
        <div className="bigContainer pt-5 text-center">
          <BlackContainer
            data={{
              label: "361RM1_DPT01",
              useClass: "greenTxt  mt-1 ",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5",
              label: "Raw Mill 1",
            }}
          />

          <BlackContainer
            data={{
              label: "361RM1_VT01",
              useClass: "greenTxt  mt-5",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex justify-content-around mt-2">
          <BlackContainer
            data={{
              label: "361GB1_TE11",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "361GB1_TE13",
              useClass: "greenTxt  ml-3",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <div className="containerImage text-center mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-2",
              label: "361HP2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div className="triangle-with-squares mt-2 ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3 mt-1",
              label: "361CN3",
            }}
          />
        </div>

        <div className="triangle-with-squares  ml-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3 mt-1",
              label: "361CN1",
            }}
          />
        </div>
        <div className="triangle-with-squares  ml-3 mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3 mt-1",
              label: "361CN4",
            }}
          />
        </div>
        <div className="triangle-with-squares  ml-1 mt-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-3 mt-1",
              label: "361CN2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2 mt-2",
            label: "391RA3",
          }}
        />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("391RA3_M")}`} label="391RA3_M" />
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("391RA1_M")}`} label="391RA1_M" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "391RA1",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("391RA4_M")}`} label="391RA4_M" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "391RA4",
          }}
        />
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("391RA2_M")}`} label="391RA2_M" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "391RA2",
          }}
        />
      </div>
      <div className="hpipecircle position-absolute single-text-28"></div>
      <div className="hpipecircle position-absolute single-text-29"></div>
      <div className="hpipecircle position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "391AS3",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <div className="connector-icon ml-4">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("391FN1_M")}`} label="391FN1_M" />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-2",
            label: "391FN1",
          }}
        />
      </div>
      <div className="position-absolute single-text-32">
        <div className="connector-icon ml-4">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("391FN2_M")}`} label="391FN2_M" />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto mt-2",
            label: "391FN2",
          }}
        />
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <div className="mr-3">
          <div className="connector-icon ml-2">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("391FN3_M")}`} label="391FN3_M" />
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "391FN3",
            }}
          />
        </div>
        <div className="ml-5">
          <div className="connector-icon ml-2">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("391FNA_M")}`} label="391FNA_M" />
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "391FNA",
            }}
          />
        </div>
        <div className="ml-5">
          <div className="connector-icon ml-2">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("391FNB_M")}`} label="391FNB_M" />
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "391FNB",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-34">
        <div className="connector-both-side-2 ">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("361FN2_M")}`} label="361FN2_M" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "361FN2",
          }}
        />
      </div>
      <div className="bagHouse position-absolute single-text-35"></div>
      <div className="connector-both-side-2 position-absolute single-text-36">
        <div className={`line-circle grey-color`}></div>
      </div>
      <div className="chimni-red position-absolute single-text-37"></div>
      <div className=" position-absolute single-text-38 d-flex">
        <div className="mr-1">
          <BlackContainer
            data={{
              label: "421BH1_TT01",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "421BH1_PT01",
              useClass: "greenTxt  mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "421BH1_PT03",
            useClass: "greenTxt  mt-4",
            unit: "mmWc",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "421BH1_TT02",
              useClass: "greenTxt",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "421BH1_PT02",
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
            label: "3611R2_ST01",
            useClass: "greenTxt",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "361FN2_IT01",
            useClass: "greenTxt  mt-2",
            unit: "AMPS",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "361FN2_JT01",
            useClass: "greenTxt  mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        '
      </div>
      <div className="position-absolute single-text-40">
        <div className="d-flex">
          <div className="containerImage mt-2 text-center">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark pt-4",
                label: "391BF1",
              }}
            />
          </div>
          <div>
            <div className="connector-icon ml-4">
              <div className={`line-circle grey-color`}></div>
              <div className="yellowline-Vr downArrow position-absolute line-1"></div>
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2 ml-3",
                label: "391FN7",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-41">
        <BlackContainer
          data={{
            label: "361SR1_IT02",
            useClass: "greenTxt",
            unit: "AMP",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "361SR1_ST01",
            useClass: "greenTxt mt-2",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <div className="mt-5 ml-4 mb-5">
          <BlackContainer
            data={{
              label: "361RM1_TT01",
              useClass: "greenTxt  mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "361RM1_PT01",
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
              useClass: "greenTxt  mt-4",
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
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "361FN3",
          }}
        />
        <div className="connector-icon ml-2 mr-1">
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("361FN3_M")}`} label="361FN3_M" />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
      </div>
      <div className=" position-absolute single-text-43">
        <BlackContainer
          data={{
            label: "Raw mill 1 power",
            useClass: "greenTxt ml-auto",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Raw mill 1_Energy_Consumption",
            useClass: "greenTxt  mt-2 ml-auto",
            unit: "kwh/t",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "Raw mill 1_specific_power _clinker",
            useClass: "greenTxt  mt-2 ml-auto",
            unit: "units",
            unitColor: "unitColor",
          }}
        />

        <div className="d-flex">
          <BlackContainer
            data={{
              label: "331MW2_PT01",
              useClass: "greenTxt  mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "361RM1_TT01",
              useClass: "greenTxt  mt-2 ml-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="hpipecircle position-absolute single-text-44">
        <div className="d-flex mx-auto">
          <div className="bars ml-5"></div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "391AS4",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-45 d-flex">
        <div className="mr-1">
          <div className="connector-icon ml-2">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("391FN4_M")}`} label="391FN4_M" />
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "391FN4",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="connector-icon ml-2">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("391FNC_M")}`} label="391FNC_M" />
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "391FNC",
            }}
          />
        </div>
        <div className="ml-4">
          <div className="connector-icon ml-2">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("391FND_M")}`} label="391FND_M" />
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "391FND",
            }}
          />
        </div>
        <div className="ml-2">
          <div className="connector-icon ml-2">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("391FNE_M")}`} label="391FNE_M" />
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mx-auto mt-2",
              label: "391FNE",
            }}
          />
        </div>
      </div>
      <div className="hpipecircle position-absolute single-text-46">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "391AS5",
          }}
        />
      </div>
      <div className="position-absolute single-text-47 d-flex">
        <div className="mr-1">
          <div className="connector-icon ml-2">
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("391FN5_M")}`} label="391FN5_M" />
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
            <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("391FNF_M")}`} label="391FNF_M" />
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
            label: "391BE1_JT01",
            useClass: "greenTxt",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "391BE1_IT01",
            useClass: "greenTxt mt-1 mb-3",
            unit: "Amp",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3 mb-1",
            label: "391MD1",
          }}
        />
        <div className="pipe dotted-pipe">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("391MD1_M")}`} label="391MD1_M" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-49">
        <div className="dashedHr-Pipe ">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("391SM1_M")}`} label="391SM1_M" text="M" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2 mt-2 ml-2",
            label: "391SM1",
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
                label: "391FN9_M",
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
      <MotorCircleDigitalTag className={`dot digital-tag position-absolute single-text-58  ${useColorStatus("361RA2_M")}`} label="361RA2_M" text="M" />
      <div className="position-absolute single-text-59 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "361SR1",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag mt-1  ${useColorStatus("361SR1_M")}`} label="361SR1_M" text="M" />
      </div>
      <span className="position-absolute single-text-60 dot grey-color">M</span>
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
            label: "391AS6",
          }}
        />
      </div>
      <div className="position-absolute single-text-67 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mr-2",
            label: "331MW1",
          }}
        />
        <div className="d-flex mr-2 ">
          <div className={`hexa-gray-green-red-img ${useImgHexaLColorStatus("")}`}></div>
          <div className={`hexa-gray-green-red-img ${useImgHexaRColorStatus("")}`}></div>
        </div>
      </div>
      <div className="position-absolute single-text-68 d-flex">
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark pt-4",
              label: "331BF2",
            }}
          />
        </div>
        <div>
          <div className="connector-icon ml-4">
            <div className={`line-circle grey-color`}></div>
            <div className="yellowline-Vr downArrow position-absolute line-1"></div>
            <div className="yellowline-Vr downArrow position-absolute line-2"></div>
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "331FN2",
            }}
          />
        </div>
      </div>
      <div className="loadingtruck position-absolute single-text-69"></div>
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
      <div className="yellowline-Hr  position-absolute line-41"></div>
      <div className="yellowline-Vr downArrow position-absolute line-42"></div>
      <div className="yellowline-Vr downArrow position-absolute line-43"></div>
      <div className="yellowline-Vr downArrow position-absolute line-44"></div>
      <div className="yellowline-Vr downArrow position-absolute line-45"></div>
      <div className="yellowline-Vr downArrow position-absolute line-46"></div>
      <div className="yellowline-Vr downArrow position-absolute line-47"></div>
      <div className="yellowline-Vr downArrow position-absolute line-48"></div>

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

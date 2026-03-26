import { TextContainerWithWrapWord, BlackContainer, PipeWithCircles, MotorCircleDigitalTag, RedBoxWithGate } from "../../../../index";
import { useColorStatus, useFanImgTagsColorStatus, useImgColorStatus } from "../../../../../utils";

export const CoolerChilmakurLine1 = () => {
  return (
    <div className="Chilmakur-L1-Cooler  w-100 h-100 position-relative">
      <div className="position-absolute single-text-1 box-1 d-flex">
        <div className="d-flex justify-content-between w-75 px-5 pt-1">
          <div className="ml-4">
            <BlackContainer
              data={{
                label: "L1S01A",
                useClass: "greenTxt",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "L1102A",
                useClass: "greenTxt mt-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "L1S02A",
                useClass: "greenTxt",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "L1I03A",
                useClass: "greenTxt mt-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div>
            <BlackContainer
              data={{
                label: "L1S03A",
                useClass: "greenTxt",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "L1I04A",
                useClass: "greenTxt mt-1",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-2 d-flex">
        <div className="triangle-with-squares text-center d-flex justify-content-center align-items-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "1",
            }}
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("NAA")}`} label="NA" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "2",
            }}
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M503_S171")}`} label="L1M503_S171" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "3",
            }}
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M504_S171")}`} label="L1M504_S171" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "4",
            }}
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M505_S171")}`} label="L1M505_S171" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "5",
            }}
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M506_S171")}`} label="L1M506_S171" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "6",
            }}
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M507_S171")}`} label="L1M507_S171" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "7",
            }}
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M508_S171")}`} label="L1M508_S171" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "8",
            }}
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M509_S171")}`} label="L1M509_S171" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "9",
            }}
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M510_S171")}`} label="L1M510_S171" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "10",
            }}
          />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M511_S171")}`} label="L1M511_S171" t />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "11",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-3 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M502SV_ PON1")}`} label="P_L1M502SV_ PON1" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M502SV_PON2")} mt-1`} label="P_L1M502SV_PON2" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M503SV_ PON1")}`} label="P_L1M503SV_ PON1" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M503SV_PON2")} mt-1`} label="P_L1M503SV_PON2" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M504SV_ PON1")}`} label="P_L1M504SV_ PON1" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M504SV_PON2")} mt-1`} label="P_L1M504SV_PON2" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M505SV_ PON1")}`} label="P_L1M505SV_ PON1" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M505SV_PON2")} mt-1`} label="P_L1M505SV_PON2" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M506SV_ PON1")}`} label="P_L1M506SV_ PON1" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M506SV_PON2")} mt-1`} label="P_L1M506SV_PON2" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M507SV_ PON1")}`} label="P_L1M507SV_ PON1" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M507SV_PON2")} mt-1`} label="P_L1M507SV_PON2" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M508SV_ PON1")}`} label="P_L1M508SV_ PON1" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M508SV_PON2")} mt-1`} label="P_L1M508SV_PON2" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M509SV_ PON1")}`} label="P_L1M509SV_ PON1" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M509SV_PON2")} mt-1`} label="P_L1M509SV_PON2" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M510SV_ PON1")}`} label="P_L1M510SV_ PON1" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M510SV_PON2")} mt-1`} label="P_L1M510SV_PON2" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M511SV_ PON1")}`} label="P_L1M511SV_ PON1" />
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("P_L1M511SV_PON2")} mt-1`} label="P_L1M511SV_PON2" />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-4"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("L1M124")}`,
          secondCircleLabel: "L1M124",
          secondCircleText: "M",
        }}
      />
      <div className=" position-absolute single-text-5 drumContainer d-flex align-items-center justify-content-between px-5 pt-2">
        <div>
          <BlackContainer
            data={{
              label: "L1A934_MA",
              useClass: "greenTxt",
              unit: "MA",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L1A934",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("L1A934")} mt-1`} label="L1A934" text="M" />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "L1A935_MA",
              useClass: "greenTxt",
              unit: "MA",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L1A935",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("L1A935")} mt-1`} label="L1A935" text="M" />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "L1A936_MA",
              useClass: "greenTxt",
              unit: "MA",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L1A936",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("L1A936")} mt-1`} label="L1A936" text="M" />
        </div>
      </div>
      <div className=" position-absolute single-text-6 d-flex">
        <div className="triangle-with-squares text-center d-flex justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1L01_S174")}`} label="L1L01_S174" />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1L02_S174")}`} label="L1L02_S174" />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1L03_S174")}`} label="L1L03_S174" />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1L04_S174")}`} label="L1L04_S174" />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1L05_S174")}`} label="L1L05_S174" />
        </div>
        <div className="triangle-with-squares ml d-flex flex-column justify-content-center align-items-center">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1L06_S174")}`} label="L1L06_S174" />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("L1M203")}`,
          secondCircleLabel: "L1M203",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("L1M204")}`,
          secondCircleLabel: "L1M204",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("L1M202")}`,
          secondCircleLabel: "L1M202",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("L1M201")}`,
          secondCircleLabel: "L1M201",
          secondCircleText: "M",
        }}
      />
      <div className=" position-absolute single-text-11 chimni-red"></div>
      <div className=" position-absolute single-text-12 img-41"></div>
      <div className=" position-absolute single-text-13 d-flex">
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("L1M205")}`} label="L1M205" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("L1M206")}`} label="L1M206" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("L1M207")}`} label="L1M207" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("L1M208")}`} label="L1M208" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("L1M209")}`} label="L1M209" />
        <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("L1M210")}`} label="L1M210" />
      </div>
      <div className="position-absolute single-text-14 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M153")}`} label="L1M153" text="M" />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M157")}`} label="L1M157" text="M" />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M159")}`} label="L1M159" text="M" />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M146")}`} label="L1M146" text="M" />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M155")}`} label="L1M155" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-15 d-flex ">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M149")}`} label="L1M149" text="M" />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M143")}`} label="L1M143" text="M" />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M161")}`} label="L1M161" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-16 d-flex ">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M151")}`} label="L1M151" text="M" />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M134")}`} label="L1M134" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-17 d-flex flex-column">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M140")}`} label="L1M140" text="M" />
        </div>
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M137")}`} label="L1M137" text="M" />
        </div>
      </div>
      <div className=" position-absolute single-text-18">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M503_TOP_OPN")}`} label="L1M503_TOP_OPN" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M503_TOP_CLS")} mt-1`} label="L1M503_TOP_CLS" />
      </div>
      <div className=" position-absolute single-text-19">
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M503_BTM_OPN")}`} label="L1M503_BTM_OPN" />
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M503_BTM_CLS")} mt-1`} label="L1M503_BTM_CLS" />
      </div>
      <div className=" position-absolute single-text-20 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "K1T93",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L1T01",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "K1T94",
              useClass: "greenTxt ",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L1T02",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-21 d-flex">
        <div className="mr-3">
          <BlackContainer
            data={{
              label: "L1M155_ZI1",
              useClass: "greenTxt ",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L1M155_RPM",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L1I13",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "L1M146_RPM",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L1I15",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "L1M159_RPM",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L1I16",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "L1M157_RPM",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L1I14",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "L1M153_RPM",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L1I06",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-22 d-flex">
        <div>
          {/* <BlackContainer
            data={{
              label: "not found",
              useClass: "greenTxt ",
              unit: "not found",
              unitColor: "unitColor",
            }}
          /> */}
          <BlackContainer
            data={{
              label: "L1M137_RPM",
              useClass: "greenTxt mt-1 ml-3",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L1I12",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-3">
          <BlackContainer
            data={{
              label: "L1M140_RPM",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L1I17",
              useClass: "greenTxt mt-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-23 d-flex">
        <BlackContainer
          data={{
            label: "L1M142",
            useClass: "greenTxt ",
            unit: "STATE",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1M146",
            useClass: "greenTxt ",
            unit: "STATE",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1M148",
            useClass: "greenTxt ",
            unit: "STATE",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1M157",
            useClass: "greenTxt ",
            unit: "STATE",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1M153",
            useClass: "greenTxt ",
            unit: "STATE",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-24 d-flex">
        {/* <BlackContainer
          data={{
            label: "not found",
            useClass: "greenTxt ",
            unit: "not found",
            unitColor: "unitColor",
          }}
        /> */}
        <BlackContainer
          data={{
            label: "L1M139",
            useClass: "greenTxt ",
            unit: "STATE",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-25">
        <BlackContainer
          data={{
            label: "L1I10",
            useClass: "greenTxt mb-1 ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-3 text-center",
            label: "L1M134",
          }}
        />
        <MotorCircleDigitalTag className={`bar digital-tag ${useColorStatus("L1M133")}`} label="L1M133" />
        <BlackContainer
          data={{
            label: "L1P10A",
            useClass: "greenTxt mt-3 ml-2",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1I11",
            useClass: "greenTxt mt-2 ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-3 mt-1 text-center",
            label: "L1M151",
          }}
        />
        <MotorCircleDigitalTag className={`bar digital-tag ${useColorStatus("L1M158")}`} label="L1M158" />
        {/* <BlackContainer
          data={{
            label: "not found",
            useClass: "greenTxt ml-2 mt-3",
            unit: "not found",
            unitColor: "unitColor",
          }}
        /> */}
        <BlackContainer
          data={{
            label: "L1P11",
            useClass: "greenTxt mt-3 ml-2",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-26 ">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M101")}`} label="L1M101" text="M" />
        </div>
        <div className="connector-icon mt-5">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M164")}`} label="L1M164" text="M" />
        </div>
      </div>
      <div className=" position-absolute single-text-27 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "L1P02A",
              useClass: "greenTxt ",
              unit: "MMWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "L1P06A",
              useClass: "greenTxt mt-1",
              unit: "MMWC",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "L1I05",
              useClass: "greenTxt mt-3",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L1M101",
          }}
        />
        <BlackContainer
          data={{
            label: "L1I01A",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L1M163",
          }}
        />
      </div>
      <div className=" position-absolute single-text-29 d-flex">
        <BlackContainer
          data={{
            label: "K1T38",
            useClass: "greenTxt ",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K1P09",
            useClass: "greenTxt ",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-30">
        <BlackContainer
          data={{
            label: "L1P12",
            useClass: "greenTxt ",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1P13",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1P15",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1P16",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1P17",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1P18",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1P19",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1P21",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 ">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M125")}`} label="L1M125" text="M" />
        </div>
        <div className="connector-icon mt-4">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M126")}`} label="L1M126" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-32">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "L1M011",
          }}
        />
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M011")}`} label="L1M011" text="M" />
        </div>
        <BlackContainer
          data={{
            label: "L1I20A",
            useClass: "greenTxt mt-2 ml-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("L1M218")} ml-3 mt-3`} label="L1M218" text="M" />
      </div>
      <div className="position-absolute single-text-33 d-flex">
        <BlackContainer
          data={{
            label: "L1M502_T02",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1M503_T03",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1M504_T04",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1M505_T05",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1M506_T06",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1M507_T07",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1M508_T08",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1M509_T09",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1M510_T10",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "L1M511_T11",
            useClass: "greenTxt",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34">
        <div className="d-flex">
          <BlackContainer
            data={{
              label: "L1P08A",
              useClass: "greenTxt",
              unit: "MMWC",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "not found",
              useClass: "greenTxt ml-3",
              unit: "not found",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
        <div className="d-flex mt-4">
          <BlackContainer
            data={{
              label: "L1P09A",
              useClass: "greenTxt",
              unit: "MMWC",
              unitColor: "unitColor",
            }}
          />
          {/* <BlackContainer
            data={{
              label: "not found",
              useClass: "greenTxt ml-3",
              unit: "not found",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
      </div>
      <div className=" position-absolute single-text-35 d-flex">
        <div>
          <MotorCircleDigitalTag className={`gray-green-red-img digital-tag position-absolute ${useImgColorStatus("NA")}`} label="NA" />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-36"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "L1M180" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("L1M180")}`,
          secondCircleLabel: "L1M180",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-37"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        text={{ useClass: "text-dark", label: "L1M181" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("L1M181")}`,
          secondCircleLabel: "L1M181",
          secondCircleText: "M",
        }}
      />
      <div className=" position-absolute single-text-38 containerImage text-center">CLINKER STOCKPILE</div>
      <div className="position-absolute single-text-39">
        <BlackContainer
          data={{
            label: "L1G11",
            useClass: "greenTxt mb-3",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag className={`bar digital-tag ${useColorStatus("L1M217")}`} label="L1M217" />
        {/* <BlackContainer
          data={{
            label: "not found",
            useClass: "greenTxt mt-3",
            unit: "not found",
            unitColor: "unitColor",
          }}
        /> */}
        <BlackContainer
          data={{
            label: "L1M203_II1",
            useClass: "greenTxt mt-5",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2 text-center",
            label: "L1M137",
          }}
        />
        <MotorCircleDigitalTag className={`bar digital-tag ${useColorStatus("L1M136")}`} label="L1M136" />
      </div>
      <div className=" position-absolute single-text-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-3 text-center",
            label: "L1M161",
          }}
        />
        <MotorCircleDigitalTag className={`bar digital-tag ${useColorStatus("L1M160")}`} label="L1M160" />
        <BlackContainer
          data={{
            label: "L1I08",
            useClass: "greenTxt mt-3 ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-3 mt-1 text-center",
            label: "L1M143",
          }}
        />
        <MotorCircleDigitalTag className={`bar digital-tag ${useColorStatus("L1M154")}`} label="L1M154" />
        <BlackContainer
          data={{
            label: "L1I09",
            useClass: "greenTxt mt-3 ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-3 mt-1 text-center",
            label: "L1M149",
          }}
        />
        <MotorCircleDigitalTag className={`bar digital-tag ${useColorStatus("L1M156")}`} label="L1M156" />
      </div>
      <div className="position-absolute single-text-42 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1",
              label: "L1M131",
            }}
          />
          <div className="connector-icon">
            <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M131")}`} label="L1M131" text="M" />
          </div>
        </div>
        <RedBoxWithGate
          isClickable={true}
          parentClass="ml-3 mt-3"
          squareProps={{
            tagLabel: "NA",
            squareClass: `${useColorStatus("NA")}`,
          }}
        />
      </div>
      <div className="position-absolute single-text-43">
        <div className="d-flex ">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "L1M266",
            }}
          />
          <MotorCircleDigitalTag className={`dot ml-2 digital-tag ${useColorStatus("L1M266")}`} label="L1M266" text="M" />
          {/* <BlackContainer
            data={{
              label: "not found",
              useClass: "greenTxt  ml-5",
              unit: "not found",
              unitColor: "unitColor",
            }}
          /> */}
        </div>
      </div>
      <div className="position-absolute single-text-44 ">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M269")}`} label="L1M269" text="M" />
        </div>
        <div className="connector-icon mt-1">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M270")}`} label="L1M270" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-45">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M271")}`} label="L1M271" text="M" />
        </div>
        <div className="connector-icon mt-1">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M272")}`} label="L1M272" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-46">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M273")}`} label="L1M273" text="M" />
        </div>
        <div className="connector-icon mt-1">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M274")}`} label="L1M274" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-47 d-flex align-items-center ">
        <div className="squareplustri d-flex align-items-center justify-content-center  ">
          <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M469")}`} label="L1M469" />
        </div>
        <MotorCircleDigitalTag className={`square digital-tag ${useColorStatus("L1M468")}`} label="L1M468" />
      </div>
      <div className="position-absolute single-text-48 d-flex align-items-center ">
        <div className="squareplustri d-flex align-items-center justify-content-center  ">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("L1M474")}`} label="L1M474" text="M" />
        </div>
        <div>
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("L1M471")}`} label="L1M471" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L1M471",
            }}
          />
        </div>
      </div>
      {/* <div className="position-absolute single-text-49">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4",
            label: "L1M126",
          }}
        />
        <BlackContainer
          data={{
            label: "remove",
            useClass: "greenTxt",
            unit: "remove",
            unitColor: "unitColor",
          }}
        />
      </div> */}
      <div className="position-absolute single-text-50 d-flex align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "L1A193",
          }}
        />
        <div className="d-flex align-items-center justify-content-center align-self-center img-66">
          <MotorCircleDigitalTag className={`dot p-3 digital-tag ${useColorStatus("L1A193")}`} label="L1A193" text="M" />
        </div>
        <BlackContainer
          data={{
            label: "L1M166_II1",
            useClass: "greenTxt ml-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-51 ">
        <div className="containerImage text-center pt-2">OIL TANK</div>
      </div>
      <div className="position-absolute single-text-52">
        <BlackContainer
          data={{
            label: "L1P07A",
            useClass: "greenTxt mb-5",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
        {/* <BlackContainer
          data={{
            label: "not found",
            useClass: "greenTxt mb-3",
            unit: "not found",
            unitColor: "unitColor",
          }}
        /> */}
        <BlackContainer
          data={{
            label: "L1I07",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "L1I08",
          useClass: "greenTxt position-absolute single-text-53",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-54">
        <div className="connector-icon">
          <MotorCircleDigitalTag className={`dot p-2 digital-tag ${useColorStatus("L1M103")}`} label="L1M103" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-55 d-flex flex-column">
        <div className="">
          <MotorCircleDigitalTag className={`bar digital-tag ${useColorStatus("L1M102")}`} label="L1M102" />
        </div>
        <div className="">
          <MotorCircleDigitalTag className={`bar digital-tag ${useColorStatus("L1M163")}`} label="L1M163" />
        </div>
      </div>
      <BlackContainer
        data={{
          label: "L1M202_II1",
          useClass: "greenTxt position-absolute single-text-56",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "L1P01",
          useClass: "greenTxt position-absolute single-text-57",
          unit: "MMWC",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-58">
        <RedBoxWithGate
          isClickable={true}
          squareProps={{
            tagLabel: "L1M142",
            squareClass: `${useColorStatus("L1M142")}`,
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "K1S05",
          useClass: "greenTxt position-absolute single-text-59",
          unit: "RPM",
          unitColor: "unitColor",
        }}
      />
      {/* <BlackContainer
        data={{
          label: "not found",
          useClass: "greenTxt position-absolute single-text-60",
          unit: "not found",
          unitColor: "unitColor",
        }}
      /> */}
      <div className="position-absolute single-text-61 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "LIM127",
          }}
        />
        <MotorCircleDigitalTag className={`dot mt-1 digital-tag ${useColorStatus("LIM127")}`} label="LIM127" text="M" />
        <BlackContainer
          data={{
            label: "L1I19",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-62">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-2",
            label: "L1M150",
          }}
        />
        <RedBoxWithGate
          isClickable={true}
          squareProps={{
            tagLabel: "L1M150",
            squareClass: `${useColorStatus("L1M150")}`,
          }}
        />
      </div>
      <div className="position-absolute single-text-63 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CD-2 UNDERGRATI PRESSURE",
          }}
        />
        <BlackContainer
          data={{
            label: "L1P14",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-64 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "CD-3 UNDERGRATI PRESSURE",
          }}
        />
        <BlackContainer
          data={{
            label: "L1P20",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-65">
        <BlackContainer
          data={{
            label: "L1I23A",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-66",
          label: "L1M218",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-67",
          label: "L1M140",
        }}
      />
      <div className="position-absolute single-text-68 d-flex flex-column">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L1M125",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L1M126",
          }}
        />
      </div>
      <div className="d-flex  position-absolute single-text-69">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L1M267",
          }}
        />
        <MotorCircleDigitalTag className={`dot ml-2 digital-tag ${useColorStatus("L1M267")}`} label="L1M267" text="M" />
        {/* <BlackContainer
          data={{
            label: "not found",
            useClass: "greenTxt  ml-5",
            unit: "not found",
            unitColor: "unitColor",
          }}
        /> */}
      </div>
      <div className="d-flex  position-absolute single-text-70 ">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L1M268",
          }}
        />
        <MotorCircleDigitalTag className={`dot ml-2 digital-tag ${useColorStatus("L1M268")}`} label="L1M268" text="M" />
        {/* <BlackContainer
            data={{
              label: "not found",
              useClass: "greenTxt  ml-5",
              unit: "not found",
              unitColor: "unitColor",
            }}
          /> */}
      </div>

      <div className="pipe-1 pipeHr position-absolute"></div>
      <div className="pipe-2 pipeVr position-absolute"></div>
      <div className="pipe-3 pipeHr position-absolute"></div>
      <div className="pipe-4 pipeHr position-absolute"></div>
      <div className="pipe-5 pipeVr position-absolute"></div>
      <div className="pipe-6 pipeHr position-absolute"></div>

      <div class="yellowline-Vr downArrow  position-absolute line-1"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-2"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-3"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-4"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-6"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-7"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-8"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-9"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-10"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-11"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-12"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-13"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-14"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-15"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-16"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-17"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-18"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-19"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-20"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-21"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-22"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-23"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-24"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-25"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-26"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-27"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-28"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-29"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-30"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-31"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-32"></div>
      <div class="yellowline-Vr upArrow  position-absolute line-33"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-34"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-35"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-36"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-37"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-38"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-39"></div>
      <div class="yellowline-Hr leftarrow  position-absolute line-40"></div>
      <div class="yellowline-Hr leftarrow  position-absolute line-41"></div>
      <div class="yellowline-Hr leftarrow  position-absolute line-42"></div>
      <div class="yellowline-Hr position-absolute line-43"></div>
      <div class="yellowline-Hr position-absolute line-44"></div>
      <div class="yellowline-Vr upArrow position-absolute line-45"></div>
      <div class="yellowline-Vr upArrow position-absolute line-46"></div>
      <div class="yellowline-Hr rightarrow position-absolute line-47"></div>
      <div class="yellowline-Hr position-absolute line-48"></div>
      <div class="yellowline-Hr position-absolute line-49"></div>
      <div class="yellowline-Vr downArrow  position-absolute line-50"></div>
      <div class="yellowline-Hr rightarrow position-absolute line-51"></div>
      <div class="yellowline-Hr rightarrow position-absolute line-52"></div>
      <div class="yellowline-Hr rightarrow position-absolute line-53"></div>
      <div class="yellowline-Hr rightarrow position-absolute line-54"></div>
      <div class="yellowline-Hr rightarrow position-absolute line-55"></div>
      <div class="yellowline-Hr rightarrow position-absolute line-56"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-57"></div>
    </div>
  );
};

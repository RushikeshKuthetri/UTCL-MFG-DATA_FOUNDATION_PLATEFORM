import { TextContainerWithWrapWord, ProgressBarMimic, BlackContainer, PipeWithCircles, MimicCaret, TransparentBoxWithGate, MotorCircleDigitalTag } from "../../../../index";

import { useColorStatus, useFanImgTagsColorStatus, useCaretColorStatus, useBorderTagsColorStatus } from "../../../../../utils";

export const RollerPressChilamkurL1 = () => {
  return (
    <div className="RollerPressChilamkurL1 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <BlackContainer
          data={{
            label: "E1I15",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle mt-2"
          firstCircle={{
            firstCircleClass: "dot grey-color",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark mx-auto", label: "E1M503" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("E1M503")}`,
            secondCircleLabel: "E1M503",
            secondCircleText: "M",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-2"
        firstCircle={{
          firstCircleClass: "dot grey-color",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark mx-auto", label: "638" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("K2M638")}`,
          secondCircleLabel: "K2M638",
          secondCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-3 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "K2T30",
          }}
        />
        <div>
          <div className="grn-gry-img"></div>
          <div className="d-flex mt-1">
            <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("NA")} `} label="NA" />
            <MotorCircleDigitalTag className={`square ml-2 digital-tag  ${useColorStatus("K2M654")} `} label="K2M654" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-4">
        <div className="grn-gry-img"></div>
        <div className="d-flex mt-1">
          <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("K2M655")} `} label="K2M655" />
          <MotorCircleDigitalTag className={`square ml-2 digital-tag  ${useColorStatus("K2M656")} `} label="K2M656" />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-5"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("K2M653")}`,
          firstCircleLabel: "K2M653",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark mx-auto", label: "653" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <BlackContainer
        data={{
          label: "K2P03",
          useClass: "greenTxt position-absolute single-text-6",
          unit: "MMWC",
          unitColor: "unitColor",
        }}
      />

      <div className=" text-center position-absolute single-text-7 d-flex">
        <div className="containerImage pt-2">
          <BlackContainer
            data={{
              label: "K2L02",
              useClass: "greenTxt",
              unit: "MTRS",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage pt-2">
          <BlackContainer
            data={{
              label: "K2L04",
              useClass: "greenTxt",
              unit: "MTRS",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="containerImage pt-2">
          <BlackContainer
            data={{
              label: "K2L05",
              useClass: "greenTxt",
              unit: "MTRS",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-8 d-flex">
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "dot grey-color",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark mx-auto", label: "632" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("K2M632")}`,
            secondCircleLabel: "K2M632",
            secondCircleText: "M",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "dot grey-color",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark mx-auto", label: "633" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("K2M633")}`,
            secondCircleLabel: "K2M633",
            secondCircleText: "M",
          }}
        />
        <PipeWithCircles
          parentDivClass="hpipecircle"
          firstCircle={{
            firstCircleClass: "dot grey-color",
            firstCircleText: "",
          }}
          text={{ useClass: "text-dark mx-auto", label: "634" }}
          secondCircle={{
            secondCircleClass: `dot digital-tag ${useColorStatus("K2M634")}`,
            secondCircleLabel: "K2M634",
            secondCircleText: "M",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-9"
        firstCircle={{
          firstCircleClass: "dot grey-color",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark mx-auto", label: "666" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("K2M666")}`,
          secondCircleLabel: "K2M666",
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-10"
        firstCircle={{
          firstCircleClass: "dot grey-color",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark mx-auto", label: "630" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("K2M630")}`,
          secondCircleLabel: "K2M630",
          secondCircleText: "M",
        }}
      />

      <div className="position-absolute single-text-11 d-flex">
        <MotorCircleDigitalTag className={`square ml-2 digital-tag  ${useColorStatus("K2M630_BSS")} `} label="K2M630_BSS" />
        <MotorCircleDigitalTag className={`square ml-2 digital-tag  ${useColorStatus("K2M630_MEDE")} `} label="K2M630_MEDE" />
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("K2M630_B")}`} label="K2M630_B" text="M" />
        <MotorCircleDigitalTag className={`square ml-2 digital-tag  ${useColorStatus("K2M630_LEMO")} `} label="K2M630_LEMO" />
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div className="box-1 p-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "SCRAPLOAB",
              }}
            />
            <BlackContainer
              data={{
                label: "E1I12",
                useClass: "greenTxt ml-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "REC SPEED",
              }}
            />
            <BlackContainer
              data={{
                label: "E1S02",
                useClass: "greenTxt ml-2",
                unit: "RPM",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "REC SPEED",
              }}
            />
            <BlackContainer
              data={{
                label: "E1I11",
                useClass: "greenTxt ml-2",
                unit: "A",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt ml-2",
            unit: "NA",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-14 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt ml-2",
              unit: "NA",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex mt-2">
            <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("K2Y672")} `} label="K2Y672" />
            <MotorCircleDigitalTag className={`square ml-2 digital-tag  ${useColorStatus("K2Y672_AB1")} `} label="K2Y672_AB1" />
            <MotorCircleDigitalTag className={`square ml-2 digital-tag  ${useColorStatus("K2Y674")} `} label="K2Y674" />
          </div>
          <div className="d-flex mt-2">
            <BlackContainer
              data={{
                label: "NA",
                useClass: "greenTxt ml-2",
                unit: "NA",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2M673_POS",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <div className="box-1 p-1">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "K2M672_DP",
              }}
            />
            <BlackContainer
              data={{
                label: "K2M672_DP",
                useClass: "greenTxt ml-2 mt-1",
                unit: "MMWC",
                unitColor: "unitColor",
              }}
            />
          </div>
          <BlackContainer
            data={{
              label: "K2T33",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2T34",
              useClass: "greenTxt mt-2",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2S04",
              useClass: "greenTxt mt-2",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2M672_LOAD",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="box-1 p-1 position-absolute single-text-15 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L/S W/F",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "WATER SPRAY",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag mt-1 ${useColorStatus("K2M632_WATERSPRAY")}`} label="K2M632_WATERSPRAY" text="M" />
      </div>
      <div className="box-1 p-1 position-absolute single-text-16 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "FEED",
          }}
        />
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "TOTAL FEED",
            }}
          />
          <BlackContainer
            data={{
              label: "K2F00",
              useClass: "greenTxt ml-2",
              unit: "TONS",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "LS",
            }}
          />
          <BlackContainer
            data={{
              label: "K2F01",
              useClass: "greenTxt ml-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2S51",
              useClass: "greenTxt ml-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BAUX",
            }}
          />
          <BlackContainer
            data={{
              label: "K2F02",
              useClass: "greenTxt ml-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2S52",
              useClass: "greenTxt ml-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "IRON",
            }}
          />
          <BlackContainer
            data={{
              label: "K2F03",
              useClass: "greenTxt ml-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2S53",
              useClass: "greenTxt ml-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="box-1 p-1 position-absolute single-text-17 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AVG GAP",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt mt-1",
            unit: "NA",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "HYD_PRE_DIFF",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt mt-1",
            unit: "NA",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "P_MAX",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt mt-1",
            unit: "NA",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-18">
        <BlackContainer
          data={{
            label: "K2I04",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-2",
            label: "626",
          }}
        />
        <div className="pipe dotted-pipe mt-3">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2M626")} `} label="K2M626" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square ml-2 digital-tag  ${useColorStatus("K2A637_PRS")} `} label="K2A637_PRS" />
          <div className="d-flex align-items-center justify-content-cente">
            <div className="squareplustri text-center mt-2">
              <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("K2A637")} `} label="K2A637" />
              <MotorCircleDigitalTag className={`square mt-2 digital-tag ${useColorStatus("K2A637_LVL")} `} label="K2A637_LVL" />
              <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
              <div className="yellowline-Hr  line-2"></div>
              <div className="yellowline-Vr upArrow  line-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-20">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("K2M636")} `} label="K2M636" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "636",
          }}
        />
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div>
          <div className="d-flex align-items-center justify-content-cente">
            <div className="squareplustri text-center mt-2">
              <div className={`square mt-2 digital-tag  grey-color`}></div>
              <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
              <div className="yellowline-Hr  line-2"></div>
              <div className="yellowline-Vr upArrow  line-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-22">
        <div className={`line-circle grey-color`}></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "627",
          }}
        />
      </div>

      <div className="containerImage pt-2 position-absolute single-text-23"></div>
      <div className="containerImage pt-2 position-absolute  text-center single-text-24">
        <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("K2M635")} `} label="K2M635" text="M" />
      </div>
      <div className="position-absolute  text-center single-text-25 d-flex">
        <div>
          <MotorCircleDigitalTag className={`square mt-2 ml-4 digital-tag  ${useColorStatus("K2M626_LEVEL")} `} label="K2M626_LEVEL" />
          <div className="box-1 p-2 mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mb-2",
                label: "K2M629",
              }}
            />
            <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("K2M629")} `} label="K2M629" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "K2I10",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="box-1 p-2 position-absolute text-center single-text-26">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "DRAIN VALVE",
          }}
        />
        <div className="d-flex border-top pt-2 mt-1">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "DE SIDE",
              }}
            />
            <MotorCircleDigitalTag className={`square ml-3 digital-tag  ${useColorStatus("NA")} `} label="NA" />
          </div>
          <div className="d-flex ml-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "NDE SIDE",
              }}
            />
            <MotorCircleDigitalTag className={`square ml-3 digital-tag  ${useColorStatus("K2M643A")} `} label="K2M643A" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto mt-2"
          squareProps={{
            tagLabel: "K2M674",
            squareClass: `${useBorderTagsColorStatus("K2M674")} `,
          }}
        />
        <div>
          <TransparentBoxWithGate
            isClickable={true}
            parentClass="mx-auto mt-2"
            squareProps={{
              tagLabel: "K2M673 ",
              squareClass: `${useBorderTagsColorStatus("K2M673 ")}`,
            }}
          />
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mt-2",
              unit: "NA",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("NA")} `} label="NA" />
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt mt-2",
              unit: "NA",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2M672_RPM",
              useClass: "greenTxt mt-3 ml-4",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TransparentBoxWithGate
            isClickable={true}
            parentClass="mx-auto mt-2"
            squareProps={{
              tagLabel: "K2M652",
              squareClass: `${useBorderTagsColorStatus("K2M652")}`,
            }}
          />
          <BlackContainer
            data={{
              label: "K2P63",
              useClass: "greenTxt mt-2",
              unit: "MMWC",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2P61",
              useClass: "greenTxt mt-4 ml-4",
              unit: "MMWC",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-28">
        <BlackContainer
          data={{
            label: "K2I03",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 ml-2",
            label: "623",
          }}
        />
        <div className="pipe dotted-pipe mt-2">
          <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("K2M623")} `} label="K2M623" text="M" />
        </div>
      </div>
      <div className="triangle-with-squares  pt-2 position-absolute single-text-29"></div>
      <div className="position-absolute single-text-30 d-flex">
        <div className="triangle-with-squares"></div>
        <div className="triangle-with-squares"></div>
        <div className="triangle-with-squares"></div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-31"
        firstCircle={{
          firstCircleClass: `dot digital-tag ${useColorStatus("K2M641")}`,
          firstCircleLabel: "K2M641",
          firstCircleText: "M",
        }}
        text={{ useClass: "text-dark mx-auto", label: "641" }}
        secondCircle={{
          secondCircleClass: `dot grey-color`,
          secondCircleLabel: "",
          secondCircleText: "",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-32"
        firstCircle={{
          firstCircleClass: "dot grey-color",
          firstCircleText: "",
        }}
        text={{ useClass: "text-dark mx-auto", label: "621" }}
        secondCircle={{
          secondCircleClass: `dot digital-tag ${useColorStatus("K2M621")}`,
          secondCircleLabel: "K2M621",
          secondCircleText: "M",
        }}
      />
      <div className="position-absolute single-text-33 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "NA",
              useClass: "greenTxt",
              unit: "NA",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2M711_SI1",
              useClass: "greenTxt mt-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "Z2M711_II1",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <TransparentBoxWithGate
            isClickable={true}
            parentClass="mx-auto mt-2"
            squareProps={{
              tagLabel: "K2M657",
              squareClass: `${useBorderTagsColorStatus("K2M657")} `,
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-3",
              label: "624",
            }}
          />
          <MotorCircleDigitalTag className={`dot mt-1 ml-4 digital-tag ${useColorStatus("K2M624")}`} label="K2M624" text="M" />
        </div>

        <BlackContainer
          data={{
            label: "K2T27",
            useClass: "greenTxt mt-4",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt ",
            unit: "NA",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2Z02",
            useClass: "greenTxt ",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2S03",
            useClass: "greenTxt ",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <div>
          <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("K2M658_EPOS")} `} label="K2M658_EPOS" />
          <MotorCircleDigitalTag className={`square mt-3 digital-tag  ${useColorStatus("K2M658_OPOS")} `} label="K2M658_OPOS" />
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "618",
          }}
        />
        <div>
          <div className="connector-icon p-1 ml-2 mt-1">
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M618")}`} label="K2M618" text="M" />
          </div>
          <BlackContainer
            data={{
              label: "K2I05",
              useClass: "greenTxt mt-1 ml-3",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-36">
        <div className="d-flex ml-4">
          <BlackContainer
            data={{
              label: "K2P64",
              useClass: "greenTxt",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          {/* <MotorCircleDigitalTag className={`square ml-2 digital-tag  ${useColorStatus("RM1_332BC2")} `} label="RM1_332BC2" /> */}
        </div>
        <div className="squareplustri mt-2 pt-2">
          <div className="d-flex justify-content-center">
            <MotorCircleDigitalTag className={`dot digital-tag  ${useColorStatus("K2M613")}`} label="K2M613" text="M" />
            <div className="ml-3">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "DP",
                }}
              />
              <BlackContainer
                data={{
                  label: "NA",
                  useClass: "greenTxt mt-2",
                  unit: "NA",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
        <div className="circle-1 d-flex">
          <div>
            <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("K2M615_LVL1")} `} label="K2M615_LVL1" />
            <MotorCircleDigitalTag className={`circle-img  mt-3 digital-tag ${useFanImgTagsColorStatus("K2M615 ")}`} label="K2M615 " />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square ml-1 digital-tag  ${useColorStatus("K2M616_LVL1")} `} label="K2M616_LVL1" />
            <MotorCircleDigitalTag className={`circle-img  mt-3 digital-tag ${useFanImgTagsColorStatus("K2M616")}`} label="K2M616" />
          </div>
          <div>
            <MotorCircleDigitalTag className={`square ml-1 digital-tag  ${useColorStatus("K2M617_LVL1")} `} label="K2M617_LVL1" />
            <MotorCircleDigitalTag className={`circle-img  mt-3 digital-tag ${useFanImgTagsColorStatus("K2M617")}`} label="K2M617" />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-37 d-flex">
        <div>
          <TransparentBoxWithGate
            isClickable={true}
            parentClass="mx-auto mt-3"
            squareProps={{
              tagLabel: "K2M649A",
              squareClass: `${useBorderTagsColorStatus("K2M649A")} `,
            }}
          />
          <BlackContainer
            data={{
              label: "K2Z03",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "K2I07",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <div className="connector-icon p-1 mt-2">
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M612")}`} label="K2M612" text="M" />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "612",
            }}
          />
        </div>
      </div>
      <div className="chimni-red position-absolute single-text-38"></div>
      <div className="position-absolute single-text-39">
        <BlackContainer
          data={{
            label: "K2S54B",
            useClass: "greenTxt mt-1",
            unit: "RPM",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt mt-2",
            unit: "NA",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2I06",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-40 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "615",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "616",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "617",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-41",
          label: "635",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-42"
        // text={{ useClass: "text-dark mx-auto", label: "621" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-43"
        // text={{ useClass: "text-dark mx-auto", label: "621" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-44"
        // text={{ useClass: "text-dark mx-auto", label: "621" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-45"
        // text={{ useClass: "text-dark mx-auto", label: "621" }}
      />
      <div className="position-absolute single-text-46 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "K2T28",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2T29",
              useClass: "greenTxt mt-1",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "K2P04",
            useClass: "greenTxt mt-1",
            unit: "MMWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-47 d-flex">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "610",
            }}
          />
          <MotorCircleDigitalTag className={`circle-img ml-2 digital-tag ${useFanImgTagsColorStatus("K2M610")}`} label="K2M610" />
        </div>
        <div className="d-flex">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("K2M611")}`} label="K2M611" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "611",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-48 d-flex">
        <div>
          <div className="d-flex align-items-center justify-content-cente">
            <div className="squareplustri text-center mt-2">
              <MotorCircleDigitalTag className={`square mt-2 digital-tag  ${useColorStatus("K2M606")} `} label="K2M606" />
              <div className="yellowline-Hr  line-2"></div>
              <div className="yellowline-Vr upArrow  line-3"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-cente">
            <div className="squareplustri text-center mt-2">
              <MotorCircleDigitalTag className={`square mt-2 digital-tag  ${useColorStatus("K2M620")} `} label="K2M620" />
              <div className="yellowline-Hr  line-2"></div>
              <div className="yellowline-Vr upArrow  line-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-49 d-flex">
        <MotorCircleDigitalTag className={`circle-img ml-2 digital-tag ${useFanImgTagsColorStatus("K2M662")}`} label="K2M662" />
        <div className="d-flex">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("K2M661")}`} label="K2M661" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "661",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-50 d-flex ">
        <div>
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("K2M605")} `} label="K2M605" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "605",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("K2M619")} `} label="K2M619" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "619",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-51">
        <div className="yellowline-Vr upArrow  position-absolute line-1"></div>
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("K2M614")} `} label="K2M614" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "614",
          }}
        />
      </div>
      <div className="position-absolute single-text-52">
        <div className="yellowline-Vr upArrow  position-absolute line-1"></div>
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("K2M669")} `} label="K2M669" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "669",
          }}
        />
      </div>
      <div className="position-absolute single-text-53">
        <div className="yellowline-Vr upArrow  position-absolute line-1"></div>
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("K2M609")} `} label="K2M609" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "609",
          }}
        />
      </div>
      <div className="position-absolute single-text-54">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "PUMP HOUSE SYSTEM",
          }}
        />
        <div className="box-1 p-2">
          <div className="d-flex gap-1 text-center">
            <div>
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E1M701")}`} label="E1M701" text="M" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "E1M701",
                }}
              />
            </div>
            <div>
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E1M702")}`} label="E1M702" text="M" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "E1M702",
                }}
              />
            </div>
            <div>
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E1M703")}`} label="E1M703" text="M" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "E1M703",
                }}
              />
            </div>
            <div>
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E1M704")}`} label="E1M704" text="M" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "E1M704",
                }}
              />
            </div>
            <div>
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E1M705")}`} label="E1M705" text="M" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "E1M705",
                }}
              />
            </div>
          </div>
          <div className="d-flex gap-1 mt-3 text-center">
            <div>
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E1M706")}`} label="E1M706" text="M" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "E1M706",
                }}
              />
            </div>
            <div>
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E1M707")}`} label="E1M707" text="M" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "E1M707",
                }}
              />
            </div>
            <div>
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E1M708")}`} label="E1M708" text="M" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "E1M708",
                }}
              />
            </div>
            <div>
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E1M709")}`} label="E1M709" text="M" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "E1M709",
                }}
              />
            </div>
            <div>
              <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("E1M710")}`} label="E1M710" text="M" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "E1M710",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-55">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("K2Y608B_CLOSE")} `} label="K2Y608B_CLOSE" />
          <MotorCircleDigitalTag className={`square digital-tag ml-3  ${useColorStatus("K2Y608B_OPEN")} `} label="K2Y608B_OPEN" />
        </div>
        <MotorCircleDigitalTag className={`square digital-tag ml-3 ${useColorStatus("K2Y608B")} `} label="K2Y608B" />
      </div>
      <div className="position-absolute single-text-56">
        <div className="yellowline-Vr upArrow  position-absolute line-1"></div>
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("K2M608")} `} label="K2M608" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "608",
          }}
        />
      </div>
      <div className="position-absolute single-text-57">
        <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("K2Y608A_CLOSE")} `} label="K2Y608A_CLOSE" />
        <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("K2Y608A_OPEN")} `} label="K2Y608A_OPEN" />
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-58" />
      <div className="position-absolute single-text-59">
        <MotorCircleDigitalTag className={`square digital-tag   ${useColorStatus("K2Y608A_PON1")} `} label="K2Y608A_PON1" />
        <BlackContainer
          data={{
            label: "K2L06",
            useClass: "greenTxt mt-2",
            unit: "MTRS",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage pt-2 position-absolute single-text-60 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "RP_HOP_LVL",
          }}
        />
        <div className="truck"></div>
      </div>
      <div className="containerImage pt-2 position-absolute single-text-61 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "AEROPOL",
          }}
        />
      </div>
      <div className="position-absolute single-text-62 d-flex flex-column">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "603",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ml-3 ${useColorStatus("K2M603")}`} label="K2M603" text="M" />
        </div>
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "604",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag ml-3 ${useColorStatus("K2M604")}`} label="K2M604" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-63">
        <BlackContainer
          data={{
            label: "K2I08",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2I09",
            useClass: "greenTxt mt-3 ml-3",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-64 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO BLENDING SILO",
          }}
        />
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt mt-2",
            unit: "NA",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-65 d-flex flex-column">
        <BlackContainer
          data={{
            label: "K2F04",
            useClass: "greenTxt mt-2 ml-4",
            unit: "L/hr",
            unitColor: "unitColor",
          }}
        />
        <div className="d-flex">
          <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M622")}`} label="K2M622" text="M" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2",
              label: "622",
            }}
          />
        </div>
        <MotorCircleDigitalTag className={`square ml-4 digital-tag   ${useColorStatus("K2M621_MDME")} `} label="K2M621_MDME" />
      </div>
      <div className=" position-absolute single-text-66">
        <div className="d-flex">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("K2M631")}`} label="K2M631" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-2 mt-2",
              label: "631",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "K2L01",
            useClass: "greenTxt mt-4",
            unit: "TONS",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="containerImage pt-2 position-absolute single-text-67 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "625",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag pt-2 mt-2 ${useColorStatus("K2M625")}`} label="K2M625" text="M" />
      </div>
      <div className="position-absolute single-text-68 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "639",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag  mt-2 ${useColorStatus("K2M639")}`} label="K2M639" text="M" />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "640",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag  mt-2 ${useColorStatus("K2M640")}`} label="K2M640" text="M" />
        </div>
        <div className="ml-4">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "659",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag  mt-2 ${useColorStatus("K2M659")}`} label="K2M659" text="M" />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "660",
            }}
          />
          <MotorCircleDigitalTag className={`dot digital-tag  mt-2 ${useColorStatus("K2M660")}`} label="K2M660" text="M" />
        </div>
      </div>
      <div className="position-absolute single-text-69 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "K2I01",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2S01",
              useClass: "greenTxt",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2M642_POW1",
              useClass: "greenTxt",
              unit: "POWER",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="box-1 p-1 bg-grey">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "K2M642",
            }}
          />
          <div className="d-flex mt-1">
            <div>
              <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M642")}`} label="K2M642" text="M" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "M",
                }}
              />
            </div>
            <div className="ml-3">
              <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M642")}`} label="K2M642" text="M" />
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark mt-1",
                  label: "F",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "K2I02",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2S02",
              useClass: "greenTxt",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "K2M642_ POWR",
              useClass: "greenTxt",
              unit: "POWER",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-70 d-flex">
        <BlackContainer
          data={{
            label: "K2M642_ VIB2",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "K2M642_ VIB1",
            useClass: "greenTxt",
            unit: "mm/s",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-71 box-1 p-1">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "L-NDE",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-4",
              label: "R-DE",
            }}
          />
        </div>
        <div className="d-flex gap-1 mt-2">
          <div className="">
            <BlackContainer
              data={{
                label: "K2S02",
                useClass: "greenTxt",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2G02",
                useClass: "greenTxt mt-1",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2P02",
                useClass: "greenTxt mt-1",
                unit: "BAR",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className=" d-flex">
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M647")}`} label="K2M647" text="M" />
            <MotorCircleDigitalTag className={`square digital-tag ml-2  ${useColorStatus("K2M642_LVL3")} `} label="K2M642_LVL3" />
          </div>
          <div className=" d-flex">
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M643")}`} label="K2M643" text="M" />
            <MotorCircleDigitalTag className={`square digital-tag ml-2  ${useColorStatus("K2M642_LVL4")} `} label="K2M642_LVL4" />
          </div>
          <div className="">
            <BlackContainer
              data={{
                label: "K2S01",
                useClass: "greenTxt",
                unit: "mm/s",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2G01",
                useClass: "greenTxt",
                unit: "mm",
                unitColor: "unitColor",
              }}
            />
            <BlackContainer
              data={{
                label: "K2P01",
                useClass: "greenTxt mt-1",
                unit: "BAR",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-72 d-flex">
        <BlackContainer
          data={{
            label: "K2BW1",
            useClass: "greenTxt",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "GREASE SPRAY FLT",
            }}
          />
          <MotorCircleDigitalTag className={`square digital-tag mt-2  ${useColorStatus("K1M648_FLT")} `} label="K1M648_FLT" />
        </div>
      </div>
      <div className="position-absolute single-text-73 d-flex">
        <div className="box-1 p-1 d-flex gap-1 text-center">
          <div>
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("NA")}`} label="NA" text="M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "K2M643",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M647")}`} label="K2M647" text="M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "647",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M644")}`} label="K2M644" text="M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "644",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M645")}`} label="K2M645" text="M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "645",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-1 d-flex gap-1 text-center">
          <div>
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M667")}`} label="K2M667" text="M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "667",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M709")}`} label="K2M709" text="M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "709",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M648")}`} label="K2M648" text="M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "648",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M670")}`} label="K2M670" text="M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "",
              }}
            />
          </div>
        </div>
        <div className="box-1 p-1 d-flex gap-1 text-center">
          <div>
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M665")}`} label="K2M665" text="M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "665",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M646")}`} label="K2M646" text="M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "646",
              }}
            />
          </div>
          <div>
            <MotorCircleDigitalTag className={`dot digital-tag pt-2 ${useColorStatus("K2M664")}`} label="K2M664" text="M" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "664",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-74 text-center ">
        <BlackContainer
          data={{
            label: "NA",
            useClass: "greenTxt",
            unit: "NA",
            unitColor: "unitColor",
          }}
        />
        <MotorCircleDigitalTag className={`text-dark digital-tag p-1 mt-2 ${useColorStatus("NA")}`} label="NA" text="K2M648_AUTO" />

        {/* <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-info ",
            label: "K2M648_AUTO",
          }}
        /> */}
      </div>
      <div className="position-absolute single-text-75">
        <ProgressBarMimic />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-76",
          label: "620",
        }}
      />
      <div className="position-absolute single-text-77">
        <ProgressBarMimic />
      </div>
      <MimicCaret
        parentClass="d-flex mt-1 tringle-item justify-content-center position-absolute single-text-78"
        firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus("K2M623A")}`}
        secondCaretClass={`fa-solid fa-caret-left d-block  digital-tag  ${useCaretColorStatus("K2M623A")}`}
        label="K2M623A"
      />
      <MotorCircleDigitalTag className={`square mt-2 digital-tag position-absolute single-text-79 ${useColorStatus("K2M635_BYPASS")} `} label="K2M635_BYPASS" />
      <TransparentBoxWithGate
        isClickable={true}
        parentClass="mx-auto mt-3 position-absolute single-text-80"
        squareProps={{
          tagLabel: "NA",
          squareClass: `${useBorderTagsColorStatus("NA")} `,
        }}
      />

      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeVr position-absolute pipe-2"></div>
      <div className="pipeHr position-absolute pipe-3"></div>
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeVr position-absolute pipe-6"></div>
      <div className="pipeHr position-absolute pipe-7"></div>
      <div className="pipeHr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="pipeVr position-absolute pipe-10"></div>
      <div className="pipeHr position-absolute pipe-11"></div>
      <div className="pipeVr position-absolute pipe-12"></div>
      <div className="pipeHr position-absolute pipe-13"></div>
      <div className="pipeVr position-absolute pipe-14"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-24"></div>
      <div className="yellowline-Hr leftarrow  position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-26"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-27"></div>
      <div className="yellowline-Vr upArrow  position-absolute line-28"></div>
      <div className="yellowline-Hr  position-absolute line-29"></div>
      <div className="yellowline-Hr  position-absolute line-30"></div>
      <div className="yellowline-Vr  position-absolute line-31"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-34"></div>
    </div>
  );
};

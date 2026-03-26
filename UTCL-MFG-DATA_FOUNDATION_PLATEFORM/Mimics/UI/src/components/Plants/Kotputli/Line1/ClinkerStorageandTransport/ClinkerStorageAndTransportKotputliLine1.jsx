import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../../index";
import { useColorStatus } from "../../../../../utils";
export const ClinkerStorageAndTransportKotputliLine1 = () => {
  return (
    <div className="ClinkerStoragekotputli w-100 h-100 position-relative">
      <div className="pipeVr position-absolute pipe-1">
        <div className="d-flex g-2 justify-content-end">
          <div className="mr-3 text-center">
            491CS1 CLINKER SILO <br /> (1,50,000 MT)
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light p-1 mt-1",
              label: "CLINKER SILO GATE OPERATION COUNTER",
            }}
          />
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-2 d-flex justify-content-center align-items-center">
        <p>REJECT SILO 2000 MT</p>
      </div>
      <div className="d-flex position-absolute single-text-3">
        <div className="containerImage d-flex flex-column justify-content-start align-items-center">
          <div className="d-flex justify-content-between p-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag p-1 mr-4  ${useColorStatus(
                "CM1_491HP1_LH1:IO.SigHw.Value"
              )}`}
              text="LH1"
              label="CM1_491HP1_LH1:IO.SigHw.Value"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag p-1 ${useColorStatus(
                "CM1_491HP1_LH2:IO.SigHw.Value"
              )}`}
              text="LH2"
              label="CM1_491HP1_LH2:IO.SigHw.Value"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light p-1 mb-2 mt-3",
              label: "491HP1_SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HP1",
            }}
          />
        </div>
        <div className="containerImage d-flex flex-column justify-content-start align-items-center">
          <div className="d-flex justify-content-between p-2">
            <MotorCircleDigitalTag
              className={`text-dark digital-tag p-1 mr-4  ${useColorStatus(
                "CM1_491HP2_LH1"
              )}`}
              text="LH1"
              label="CM1_491HP2_LH1"
            />
            <MotorCircleDigitalTag
              className={`text-dark digital-tag p-1 ${useColorStatus(
                "CM1_491HP2_LH2"
              )}`}
              text="LH2"
              label="CM1_491HP2_LH2"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light p-1 mb-2 mt-3",
              label: "491HP2_SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "HP2",
            }}
          />
        </div>
      </div>
      <div className="pipe position-absolute dotted-pipe single-text-4"></div>
      <div className="pipe position-absolute dotted-pipe single-text-5"></div>
      <div className="single-text-6 position-absolute d-flex ">
        <div className="containerImage d-flex justify-content-center align-items-center"></div>

        <div className="containerImage mt-3 d-flex justify-content-center align-items-center"></div>

        <div className="containerImage mt-4"></div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-4"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot ml-auto grey-color`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-5"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot ml-auto grey-color`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-6"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot ml-auto grey-color`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-7"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot ml-auto grey-color`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-8"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot ml-auto grey-color`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-9"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot ml-auto grey-color`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-10"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot ml-auto grey-color`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-11"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot ml-auto grey-color`,
          secondCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute pipe-12"
        firstCircle={{
          firstCircleClass: "dot grey-color",
        }}
        secondCircle={{
          secondCircleClass: `dot ml-auto grey-color`,
          secondCircleText: "M",
        }}
      />
      <div className="containerImage position-absolute single-text-7 text-center"></div>
      <div className="containerImage position-absolute single-text-8 text-center"></div>
      <div className="containerImage position-absolute single-text-9"></div>
      <div className="connector-both-side-2 position-absolute single-text-10 d-flex justify-content-center align-items-center">
        <div className="yellowline-Vr upArrow line-1 position-absolute"></div>
        <div className="line-circle  grey-color "></div>
      </div>
      <div className="connector-both-side-2 position-absolute single-text-11 d-flex justify-content-center align-items-center">
        <div className="yellowline-Vr upArrow line-1 position-absolute"></div>
        <div className="line-circle  grey-color "></div>
      </div>
      <div className="connector-both-side-2 position-absolute single-text-12 d-flex justify-content-center align-items-center">
        <div className="yellowline-Vr upArrow line-1 position-absolute"></div>
        <div className="line-circle  grey-color "></div>
      </div>
      <div className="connector-both-side-2 position-absolute single-text-13 d-flex justify-content-center align-items-center">
        <div className="yellowline-Vr upArrow line-1 position-absolute"></div>
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CM1_491FN4_VFD_A")}`}
          label="CM1_491FN4_VFD_A"
          text="M"
        />
      </div>
      <div className="connector-both-side-2 position-absolute single-text-14 d-flex justify-content-center align-items-center">
        <div className="yellowline-Vr upArrow line-1 position-absolute"></div>
        <div className="line-circle  grey-color"></div>
      </div>
      <div className="connector-both-side-2 position-absolute single-text-15 d-flex justify-content-center align-items-center">
        <div className="yellowline-Vr upArrow line-1 position-absolute"></div>
        <div className="line-circle  grey-color"></div>
      </div>
      <div className="yellowline-Vr upArrow  line-2 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-3 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-4 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-5 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-6 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-7 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-8 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-9 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-10 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-11 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-12 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-13 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-14 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-15 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-16 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-17 position-absolute"></div>
      <div className="yellowline-Vr downArrow line-18 position-absolute"></div>
      <div className="yellowline-Vr upArrow line-19 position-absolute"></div>
      <div className="yellowline-Vr upArrow line-20 position-absolute"></div>
      <div className="yellowline-Vr upArrow line-21 position-absolute"></div>
      <div className="position-absolute single-text-16 loadingtruck"></div>
      <div className="single-text-17 containerImage position-absolute">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "BRU",
          }}
        />
      </div>
      {/* <div className="single-text-18 p-1 position-absolute box-1 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1 mb-1",
            label: "WB-1",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1 mb-1",
            label: "TOTAL TRUCKS",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1 mb-1",
            label: "WB-1",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark bg-light p-1 mb-1",
            label: "TOTAL TRUCKS",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div>
    </div> */}
      {/* <div className="single-text-19 p-1 position-absolute box-1 d-flex flex-column justify-content-center align-items-center ">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light p-1 mb-1",
          label: "CLINKER PRODUCTION CONSUMPTION",
        }}
      />
      <div className="d-flex justify-content-center align-items-center">
        <div className="text-center mr-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light p-1 mb-1",
              label: "PRODUCTION",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_461KL1_TT2",
              useClass: "greenTxt mb-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light p-1 mb-1",
              label: "PRODUCTION",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_461KL1_TT2",
              useClass: "greenTxt mb-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
    </div> */}
      {/* <div className="position-absolute single-text-20 text-center">
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "CL_491FN2_VFD_SI",
            useClass: "greenTxt mb-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        /> */}
      {/* <div className="text-center box-1 p-1">
        <div className="d-flex mb-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light mr-2 px-1",
              label: "AUTO",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark bg-light px-1",
              label: "BT",
            }}
          />
        </div>

        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt mb-1",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div> */}
      {/* </div> */}
      <div className="position-absolute single-text-21 text-center d-flex flex-column justify-content-center align-items-center">
        <div className=" d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "491PC3 CLKBLK SEL",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "491BE2_SEL",
            }}
          />
        </div>
        {/* <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        /> */}
      </div>
      <div className="position-absolute yellowline-Hr line-22"></div>
      <div className="position-absolute yellowline-Vr line-23"></div>
      <div className="position-absolute yellowline-Vr downArrow line-24"></div>
      <div className="gray-green-red-img gray-img position-absolute single-text-22"></div>
      <div className="position-absolute downArrow yellowline-Vr line-25"></div>
      <div className="position-absolute yellowline-Vr line-26"></div>
      <div className="position-absolute yellowline-Hr line-27"></div>
      <div className="position-absolute downArrow yellowline-Vr line-28"></div>
      <div className="position-absolute yellowline-Hr rightarrow line-29"></div>
      <div className="position-absolute yellowline-Hr rightarrow line-30"></div>
      <div className="position-absolute downArrow yellowline-Vr line-31"></div>
      <div className="position-absolute downArrow yellowline-Vr line-32"></div>
      <div className="position-absolute yellowline-Vr downArrow line-33"></div>
      <div className="position-absolute downArrow yellowline-Vr line-34"></div>
      <div className="position-absolute downArrow yellowline-Vr line-35"></div>
      <div className="position-absolute yellowline-Hr rightarrow line-36"></div>
      <div className="gray-green-red-img gray-img position-absolute single-text-23"></div>
      {/* <div className="position-absolute single-text-24 d-flex flex-column">
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div> */}

      {/* <div className="position-absolute single-text-25 d-flex flex-column">
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div> */}

      {/* <div className="position-absolute single-text-26 d-flex flex-column">
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div> */}
      {/* <BlackContainer
        data={{
          label: "PH_461KL1_TT2",
          useClass: "greenTxt position-absolute single-text-27",
          unit: "℃",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "PH_461KL1_TT2",
          useClass: "greenTxt position-absolute single-text-28",
          unit: "℃",
          unitColor: "unitColor",
        }}
      /> */}
      <BlackContainer
        data={{
          label: "CM1_491PC4_TT",
          useClass: "greenTxt position-absolute single-text-29",
          unit: "℃",
          unitColor: "unitColor",
        }}
      />

      <BlackContainer
        data={{
          label: "CM1_491PC4_A",
          useClass: "greenTxt position-absolute single-text-30",
          unit: "",
          unitColor: "unitColor",
        }}
      />

      <BlackContainer
        data={{
          label: "CM1_491PC3_A",
          useClass: "greenTxt position-absolute single-text-31",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "CM1_491PC5_A",
          useClass: "greenTxt position-absolute single-text-32",
          unit: "A",
          unitColor: "unitColor",
        }}
      />
      {/* <BlackContainer
      data={{
        label: "PH_461KL1_TT2",
        useClass: "greenTxt position-absolute single-text-33",
        unit: "℃",
        unitColor: "unitColor",
      }}
    /> */}
      <BlackContainer
        data={{
          label: "CM1_491PC6_TT",
          useClass: "greenTxt position-absolute single-text-34",
          unit: "℃",
          unitColor: "unitColor",
        }}
      />
      {/* <BlackContainer
      data={{
        label: "PH_461KL1_TT2",
        useClass: "greenTxt position-absolute single-text-35",
        unit: "℃",
        unitColor: "unitColor",
      }}
    /> */}
      {/* <div className="position-absolute single-text-36 d-flex">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light px-1",
          label: "LVL",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light px-1",
          label: "BSS",
        }}
      />
    </div> */}
      <div className="position-absolute single-text-37 d-flex flex-column">
        <MimicCaret
          parentClass="d-flex tringle-item  justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block  grey-color-caret`}
        />

        <MimicCaret
          parentClass="d-flex tringle-item  justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block  grey-color-caret`}
        />
      </div>
      <div className="position-absolute single-text-38">
        <MimicCaret
          parentClass="d-flex tringle-item  justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block  grey-color-caret`}
        />
      </div>
      {/* <div className="position-absolute single-text-39 d-flex flex-column">
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "PH_461KL1_TT2",
            useClass: "greenTxt",
            unit: "℃",
            unitColor: "unitColor",
          }}
        />
      </div> */}
      {/* <div className="position-absolute single-text-40 d-flex flex-column">
      <div className="d-flex">
        <div className="square green-color mr-2"></div>
        <div className="square green-color"></div>
      </div>
      <div className="d-flex">
        <div className="square green-color mr-2"></div>
        <div className="square green-color"></div>
      </div>
    </div> */}
      <div className="position-absolute single-text-41 d-flex">
        {/* <div className="square green-color"></div> */}

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "TO CEMENT MILL HOPPERS",
          }}
        />
      </div>
      <div className="position-absolute single-text-42 ">
        <BlackContainer
          data={{
            label: "CM1_491PC6_II",
            useClass: "greenTxt mb-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        {/* <div className="greenDot mb-1 ml-3">M</div> */}
        <BlackContainer
          data={{
            label: "CM1_491PC6MD2_II",
            useClass: "greenTxt mb-1 ml-3 mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-43 d-flex justify-content-center align-items-center">
        <div className="dot grey-color">M</div>
        <div className="yellowline-Hr"></div>
        <div className="dot grey-color">M</div>
      </div>
      {/* <div className="position-absolute single-text-44 d-flex flex-column">
      <BlackContainer
        data={{
          label: "PH_461KL1_TT2",
          useClass: "greenTxt",
          unit: "℃",
          unitColor: "unitColor",
        }}
      />
      <div className="square green-color"></div>
    </div> */}
      <div className="position-absolute downArrow yellowline-Vr line-37"></div>
      <div className="position-absolute downArrow yellowline-Vr line-38"></div>
      <div className="position-absolute downArrow yellowline-Vr line-39"></div>
      <div className="position-absolute yellowline-Hr line-40"></div>
      <div className="position-absolute rightarrow yellowline-Hr line-41"></div>
      <div className="position-absolute  yellowline-Vr line-42"></div>
      <div className="position-absolute circle-img c-grey-img-2 single-text-46"></div>
      <div className="position-absolute circle-img  c-grey-img-2 single-text-47"></div>
      <div className="position-absolute downArrow yellowline-Vr line-43"></div>
      <div className="position-absolute  yellowline-Vr line-44"></div>
      <div className="position-absolute downArrow yellowline-Vr line-45"></div>
      <div className="position-absolute yellowline-Hr line-46"></div>
      <div className="position-absolute downArrow yellowline-Vr line-47"></div>
      <div class="gray-green-red-img gray-img position-absolute single-text-48"></div>
      <div className="position-absolute yellowline-Hr line-49"></div>
      <div className="position-absolute yellowline-Hr line-50"></div>
      <div className="position-absolute  yellowline-Vr line-51"></div>
      <div className="position-absolute  yellowline-Vr line-52"></div>
      <div className="position-absolute downArrow yellowline-Vr line-53"></div>
      <div className="position-absolute downArrow yellowline-Vr line-54"></div>
      <div className="position-absolute yellowline-Hr line-55"></div>
      <div className="position-absolute yellowline-Hr line-56"></div>
      <div className="position-absolute yellowline-Hr line-57"></div>
      <div className="position-absolute upArrow yellowline-Vr line-58"></div>
      <div className="position-absolute upArrow yellowline-Vr line-59"></div>
      <div className="position-absolute upArrow yellowline-Vr line-60"></div>
      <div className="position-absolute yellowline-Hr line-61"></div>
      <div className="position-absolute yellowline-Vr line-62"></div>
      <div className="position-absolute bg-secondary single-text-49"></div>
      <div className="position-absolute bg-secondary single-text-50"></div>
      <div className="position-absolute single-text-51">
        <div className="square bg-light box-1"></div>
        <div className="square bg-light box-1"></div>
        <div className="square bg-light box-1"></div>
      </div>
      <div className="position-absolute single-text-52">
        <div className="square bg-light box-1"></div>
        <div className="square bg-light box-1"></div>
        <div className="square bg-light box-1"></div>
      </div>
      <div className="position-absolute downArrow yellowline-Vr line-63"></div>
      <div className="position-absolute downArrow yellowline-Vr line-64"></div>
      <div className="position-absolute downArrow yellowline-Vr line-65"></div>
      <div className="position-absolute downArrow yellowline-Vr line-66"></div>
      {/* <MotorCircleDigitalTag
      className={`text-dark digital-tag px-1 grey-color position-absolute single-text-53 ${useColorStatus(
        "CMH_511DG2_EOLS"
      )}`}
      text="PULLY GUARD"
      label="CMH_511DG2_EOLS"
    /> */}
      {/* <div className="position-absolute d-flex single-text-54">
      <MotorCircleDigitalTag
        className={`text-dark digital-tag px-1 grey-color  ${useColorStatus(
          "CMH_511DG2_EOLS"
        )}`}
        text="BSS"
        label="CMH_511DG2_EOLS"
      />
      <MotorCircleDigitalTag
        className={`text-dark digital-tag px-1 grey-color  ${useColorStatus(
          "CMH_511DG2_EOLS"
        )}`}
        text="TEAR SW"
        label="CMH_511DG2_EOLS"
      />
      <MotorCircleDigitalTag
        className={`text-dark digital-tag px-1 grey-color  ${useColorStatus(
          "CMH_511DG2_EOLS"
        )}`}
        text="DOOR 1 & 2"
        label="CMH_511DG2_EOLS"
      />
      <MotorCircleDigitalTag
        className={`text-dark digital-tag px-1 grey-color  ${useColorStatus(
          "CMH_511DG2_EOLS"
        )}`}
        text="DOOR 3 & 4"
        label="CMH_511DG2_EOLS"
      />
    </div> */}
      <div className="position-absolute single-text-55">
        <MimicCaret
          parentClass="d-flex tringle-item  justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block  grey-color-caret`}
        />
      </div>
      <div className="position-absolute d-flex flex-column single-text-56 ">
        <MimicCaret
          parentClass="d-flex tringle-item  justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block  grey-color-caret`}
        />

        <MimicCaret
          parentClass="d-flex tringle-item  justify-content-center"
          firstCaretClass={`fa-solid fa-caret-right d-block grey-color-caret`}
          secondCaretClass={`fa-solid fa-caret-left d-block  grey-color-caret`}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-57",
          label: "BULK LOADING",
        }}
      />
      {/* <div className="position-absolute single-text-58">
      <BlackContainer
        data={{
          label: "PH_461KL1_TT2",
          useClass: "greenTxt mb-1",
          unit: "℃",
          unitColor: "unitColor",
        }}
      />

      <BlackContainer
        data={{
          label: "PH_461KL1_TT2",
          useClass: "greenTxt",
          unit: "℃",
          unitColor: "unitColor",
        }}
      />
    </div> */}
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark bg-light position-absolute single-text-59",
          label: "491BE1_SEL",
        }}
      />
      {/* <BlackContainer
      data={{
        label: "PH_461KL1_TT2",
        useClass: "greenTxt position-absolute single-text-60",
        unit: "℃",
        unitColor: "unitColor",
      }}
    /> */}
      <div className="position-absolute single-text-61 d-flex justify-content-center align-items-center">
        <div className="dot grey-color">M</div>
        <div className="yellowline-Hr"></div>
        <div className="dot grey-color">M</div>
      </div>
      <div className="position-absolute single-text-62 d-flex flex-column">
        <MotorCircleDigitalTag
          className={`square digital-tag mt-5 ${useColorStatus(
            "CM1_491BE1_ZSS"
          )}`}
          label="CM1_491BE1_ZSS"
        />
      </div>
      <div className="position-absolute downArrow yellowline-Vr line-67"></div>
      <div className="position-absolute  yellowline-Vr line-68"></div>
      <div className="position-absolute  yellowline-Hr line-69"></div>
      <div className="position-absolute  yellowline-Hr line-70"></div>
      <div className="position-absolute upArrow  yellowline-Vr line-71"></div>
      <div className="position-absolute  yellowline-Hr line-72"></div>
      <div className="position-absolute upArrow  yellowline-Vr line-73"></div>
      <div className="position-absolute  yellowline-Hr line-74"></div>
      <div className="position-absolute upArrow  yellowline-Vr line-75"></div>
      {/* <MotorCircleDigitalTag
      className={`text-dark digital-tag px-1 grey-color single-text-63 ${useColorStatus(
        "CMH_511DG2_EOLS"
      )}`}
      text="BS5"
      label="CMH_511DG2_EOLS"
    /> */}
      {/* <div className="position-absolute d-flex single-text-64">
      <div className="greenSqure p-1"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
      <div className="greenSqure"></div>
    </div> */}
      {/* <div className="position-absolute d-flex single-text-65">
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
    </div> */}
      <div className="position-absolute circle-img c-grey-img-2 single-text-66"></div>
      <div className="position-absolute downArrow  yellowline-Vr line-76"></div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-67",
          label: "TO 491PC6",
        }}
      />
      <div className="position-absolute circle-img c-grey-img-2 single-text-68"></div>
      <div className="position-absolute downArrow  yellowline-Vr line-77"></div>
      <div className="position-absolute downArrow  yellowline-Vr line-78"></div>
      <div className="position-absolute downArrow  yellowline-Vr line-79"></div>
      <div className="position-absolute downArrow  yellowline-Vr line-80"></div>
      <div className="position-absolute downArrow  yellowline-Vr line-81"></div>
    </div>
  );
};

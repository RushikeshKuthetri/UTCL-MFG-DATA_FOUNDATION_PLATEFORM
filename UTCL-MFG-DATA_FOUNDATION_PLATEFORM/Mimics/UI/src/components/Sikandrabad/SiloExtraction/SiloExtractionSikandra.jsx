import { useSKCWCaretColorStatus, useSKCWColorStatus } from "../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  SingleText,
  ProgressBarMimic,
  Connector,
  MimicCaret,
} from "../../index";

export const SiloExtractionSikandra = () => {
  return (
    <div className="SiloExtractionsikandra w-100 h-100 position-relative">
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr bg-success position-absolute line-19"></div>
      <div className="yellowline-Vr bg-success position-absolute line-20"></div>
      <div className="yellowline-Vr bg-success position-absolute line-21"></div>
      <div className="yellowline-Vr bg-success position-absolute line-22"></div>
      <div className="yellowline-Vr bg-success position-absolute line-23"></div>
      <div className="yellowline-Hr position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr bg-success position-absolute line-27"></div>
      <div className="yellowline-Hr bg-success position-absolute line-28"></div>
      <div className="yellowline-Hr bg-success position-absolute line-29"></div>
      <div className="yellowline-Hr bg-success position-absolute line-30"></div>
      <div className="yellowline-Hr bg-success position-absolute line-31"></div>
      <div className="yellowline-Hr bg-success position-absolute line-32"></div>
      <div className="yellowline-Hr bg-success position-absolute line-33"></div>
      <div className="d-flex position-absolute single-text-1">
        <ProgressBarMimic />
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4",
              label: "STEEL CEMENT SILO 1",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-2">
        <ProgressBarMimic />
        <div className="containerImage text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4",
              label: "STEEL CEMENT SILO 2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mb-1",
            label: "591BF3",
          }}
        />
        <div className="squareplustri pt-3 text-center"></div>
      </div>
      <div className="position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mb-1",
            label: "592BF1",
          }}
        />
        <div className="squareplustri pt-3 text-center"></div>
      </div>
      <div className="position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mb-3",
            label: "612BF1",
          }}
        />
        <div className="squareplustri pt-3 text-center">
          {/* <span className="greenSqure"></span> */}
        </div>
      </div>
      <div className="position-absolute text-center single-text-6">
        <i className="fas fa-long-arrow-alt-up ml-3"></i>
        <Connector
          parentClass="connector-icon p-1"
          childClass={`line-circle ${useSKCWColorStatus("591FN9_MR")}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "611AV1",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-7">
        <i className="fas fa-long-arrow-alt-up ml-3"></i>
        <Connector
          parentClass="connector-icon p-1"
          childClass={`line-circle ${useSKCWColorStatus("591FN8_MR")}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "591FN8",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-8">
        <i className="fas fa-long-arrow-alt-up ml-3"></i>
        <Connector
          parentClass="connector-icon p-1"
          childClass={`line-circle ${useSKCWColorStatus("611FN2_MR")}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "611FN2",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-9">
        <i className="fas fa-long-arrow-alt-up ml-3"></i>
        <Connector
          parentClass="connector-icon p-1"
          childClass={`line-circle ${useSKCWColorStatus("611FN3_MR")}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "611FN3",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-10">
        <i className="fas fa-long-arrow-alt-up ml-3"></i>
        <Connector
          parentClass="connector-icon p-1"
          childClass={`line-circle ${useSKCWColorStatus("612FN2_MR")}`}
        />
      </div>
      <div className="position-absolute text-center single-text-11">
        <i className="fas fa-long-arrow-alt-up ml-3"></i>
        <Connector
          parentClass="connector-icon p-1"
          childClass={`line-circle ${useSKCWColorStatus("611FN1_MR")}`}
        />
      </div>
      <div className="position-absolute text-center single-text-12">
        <i className="fas fa-long-arrow-alt-up ml-3"></i>
        <Connector
          parentClass="connector-icon p-1"
          childClass={`line-circle ${useSKCWColorStatus("592FN2_MR")}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "592FN1",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-13">
        <i className="fas fa-long-arrow-alt-up ml-3"></i>
        <Connector
          parentClass="connector-icon p-1"
          childClass={`line-circle ${useSKCWColorStatus("612FN3_MR")}`}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-3",
            label: "612FN3",
          }}
        />
      </div>
      <div className="position-absolute text-center single-text-14">
        <i className="fas fa-long-arrow-alt-up ml-3"></i>
        <Connector
          parentClass="connector-icon p-1"
          childClass={`line-circle ${useSKCWColorStatus("611FN1_MR")}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "611FN1",
          }}
        />
      </div>
      <div className="position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "611BS1",
          }}
        />
        <div className="truck mt-2"></div>
      </div>
      <div className="text-center position-absolute single-text-16">
        <div
          className={`line-circle ${useSKCWColorStatus("611FN_BLS_MR")}`}
        ></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "611FN_BLS",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="pipe dotted-pipe position-absolute single-text-17"
        firstCircle={{
          firstCircleClass: `dot ${useSKCWColorStatus("641BE1_MR")}`,
          firstCircleText: "M",
        }}
      />
      <PipeWithCircles
        parentDivClass="pipe dotted-pipe position-absolute single-text-18"
        firstCircle={{
          firstCircleClass: `dot ${useSKCWColorStatus("642BE1_MR")}`,
          firstCircleText: "M",
        }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-19" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-20" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-21" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-22" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-23" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-24" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-25" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-26" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-27" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-28" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-29" />
      <div className="position-absolute single-text-30">
        <div className="pipeVr position-relative  mx-auto"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "611PD1",
          }}
        />
      </div>
      <div className="position-absolute single-text-31">
        <div className="pipeVr position-relative  mx-auto"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "612PD1",
          }}
        />
      </div>
      <div className="boxContainer text-center position-absolute single-text-32">
        <div className="d-flex justify-content-around">
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "611PV1",
              }}
            />
            <MimicCaret
              parentClass="d-flex tringle-item mt-2"
              firstCaretClass={`fa-solid fa-caret-right d-block ${useSKCWCaretColorStatus(
                "611PV1"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block ${useSKCWCaretColorStatus(
                "611PV1"
              )}`}
            />
          </div>
          <div className="mt-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "611PV2",
              }}
            />
            <MimicCaret
              parentClass="d-flex tringle-item mt-2"
              firstCaretClass={`fa-solid fa-caret-right d-block ${useSKCWCaretColorStatus(
                "611PV2"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block ${useSKCWCaretColorStatus(
                "611PV2"
              )}`}
            />
          </div>
          <div className="mt-3">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "611PV3",
              }}
            />
            <MimicCaret
              parentClass="d-flex tringle-item mt-2"
              firstCaretClass={`fa-solid fa-caret-right d-block ${useSKCWCaretColorStatus(
                "611PV3"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block ${useSKCWCaretColorStatus(
                "611PV3"
              )}`}
            />
          </div>
          <div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "611PV4",
              }}
            />
            <MimicCaret
              parentClass="d-flex tringle-item mt-2"
              firstCaretClass={`fa-solid fa-caret-right d-block ${useSKCWCaretColorStatus(
                "611PV4"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block ${useSKCWCaretColorStatus(
                "611PV4"
              )}`}
            />
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-around px-5">
          <div className="text-center">
            {/* <div className="tringle-item">
              <i className="fa-solid fa-caret-down d-block"></i>
              <i className="fa-solid fa-caret-up d-block"></i>
            </div> */}
            <div
              className={`line-circle ${useSKCWColorStatus("611BL1_MR")}`}
            ></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "611BL1",
              }}
            />
          </div>
          <div className="text-center">
            {/* <div className="tringle-item">
              <i className="fa-solid fa-caret-down d-block"></i>
              <i className="fa-solid fa-caret-up d-block"></i>
            </div> */}
            <div
              className={`line-circle ${useSKCWColorStatus("611BL2_MR")}`}
            ></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "611BL2",
              }}
            />
          </div>
          <div className="text-center">
            {/* <div className="tringle-item">
              <i className="fa-solid fa-caret-down d-block"></i>
              <i className="fa-solid fa-caret-up d-block"></i>
            </div> */}
            <div
              className={`line-circle ${useSKCWColorStatus("611BL3_MR")}`}
            ></div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-white",
                label: "611BL3",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-33">
        <MimicCaret
          parentClass="d-flex justify-content-center align-items-center tringle-item tringle-item-width"
          firstCaretClass={`fa-solid fa-caret-right d-block ${useSKCWCaretColorStatus(
            "612PG1"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block ${useSKCWCaretColorStatus(
            "612PG1"
          )}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-2",
            label: "626AS1",
          }}
        />
      </div>
      <MimicCaret
        parentClass="d-flex justify-content-center align-items-center tringle-item tringle-item-width position-absolute single-text-34"
        firstCaretClass={`fa-solid fa-caret-right d-block ${useSKCWCaretColorStatus(
          "611PG1"
        )}`}
        secondCaretClass={`fa-solid fa-caret-left d-block ${useSKCWCaretColorStatus(
          "611PG1"
        )}`}
      />
      <div
        className={`square ${useSKCWColorStatus(
          "611DV1_MR"
        )} position-absolute single-text-35`}
      ></div>
      <div
        className={`square ${useSKCWColorStatus(
          "612DV1_MR"
        )} position-absolute single-text-36`}
      ></div>
      <div className="d-flex position-absolute single-text-37">
        <div className="mr-3">
          <div className="containerImage pt-2">
            <div
              className={`square mx-auto ${useSKCWColorStatus("591DG1")}`}
            ></div>
          </div>
          <div className="pipeVr position-absolute pipe-3"></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "591DG1",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "_611SB1_LI",
          useClass: "greenTxt position-absolute single-text-38",
          unit: "Mtr",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "_612SB1_LI",
          useClass: "greenTxt position-absolute single-text-39",
          unit: "Mtr",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "611DV1_ZI",
          useClass: "greenTxt position-absolute single-text-40",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "612DV1_ZI",
          useClass: "greenTxt position-absolute single-text-41",
          unit: "%",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-44">
        <BlackContainer
          data={{
            label: "611DV2_ZI",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "611DV3_ZI",
            useClass: "greenTxt ml-5",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-45">
        <BlackContainer
          data={{
            label: "612DV2_ZI",
            useClass: "greenTxt",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "612DV3_ZI",
            useClass: "greenTxt ml-5",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <SingleText
        useClass="position-absolute single-text-46"
        yellowTextUp="641HP1"
        textClass="text-white mb-1"
        data={{
          blackTextLabel: "_641HP1_WI",
          blackTextClass: "greenTxt",
          unit: "",
        }}
      />
      <SingleText
        useClass="position-absolute single-text-47"
        yellowTextUp="642HP1"
        textClass="text-white mb-1"
        data={{
          blackTextLabel: "642HP1_WI",
          blackTextClass: "greenTxt",
          unit: "",
        }}
      />
      <MimicCaret
        parentClass="d-flex justify-content-center align-items-center tringle-item tringle-item-width position-absolute single-text-48"
        firstCaretClass={`fa-solid fa-caret-right d-block ${useSKCWCaretColorStatus(
          "611PG2"
        )}`}
        secondCaretClass={`fa-solid fa-caret-left d-block ${useSKCWCaretColorStatus(
          "611PG2"
        )}`}
      />
      <MimicCaret
        parentClass="d-flex justify-content-center align-items-center tringle-item tringle-item-width position-absolute single-text-49"
        firstCaretClass={`fa-solid fa-caret-right d-block ${useSKCWCaretColorStatus(
          "611PG3"
        )}`}
        secondCaretClass={`fa-solid fa-caret-left d-block ${useSKCWCaretColorStatus(
          "611PG3"
        )}`}
      />
      <MimicCaret
        parentClass="d-flex justify-content-center align-items-center tringle-item tringle-item-width position-absolute single-text-50"
        firstCaretClass={`fa-solid fa-caret-right d-block ${useSKCWCaretColorStatus(
          "612PG2"
        )}`}
        secondCaretClass={`fa-solid fa-caret-left d-block ${useSKCWCaretColorStatus(
          "612PG2"
        )}`}
      />
      <MimicCaret
        parentClass="d-flex justify-content-center align-items-center tringle-item tringle-item-width position-absolute single-text-51"
        firstCaretClass={`fa-solid fa-caret-right d-block ${useSKCWCaretColorStatus(
          "612PG3"
        )}`}
        secondCaretClass={`fa-solid fa-caret-left d-block ${useSKCWCaretColorStatus(
          "612PG3"
        )}`}
      />
      <div
        className={`square position-absolute single-text-52 ${useSKCWColorStatus(
          "611DV2_MR"
        )}`}
      ></div>
      <div
        className={`square position-absolute single-text-53 ${useSKCWColorStatus(
          "611DV3_MR"
        )}`}
      ></div>
      <div
        className={`square ${useSKCWColorStatus(
          "612DV2_MR"
        )} position-absolute single-text-54`}
      ></div>
      <div
        className={`square ${useSKCWColorStatus(
          "612DV3_MR"
        )} position-absolute single-text-55`}
      ></div>
      <div className="position-absolute single-text-56">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "611SG2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "611PG2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "611DV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-57">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "611SG3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "611PG3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "611DV3",
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "612SG2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "612PG2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "612DV2",
          }}
        />
      </div>
      <div className="position-absolute single-text-59">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "612SG3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "612PG3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "612DV3",
          }}
        />
      </div>
      <div className="position-absolute single-text-60">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "611SG1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "611PG1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "611DV1",
          }}
        />
      </div>
      <div className="position-absolute single-text-61">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white",
            label: "612SG1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "612PG1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white mt-1",
            label: "612DV1",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-62",
          label: "591FN9",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-63",
          label: "591AS5",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-64",
          label: "612AV1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-65",
          label: "612FV1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-66",
          label: "611ASR",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-67",
          label: "612FN1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-68",
          label: "612ASP",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-69",
          label: "611ASQ",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-70",
          label: "612FN2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-71",
          label: "641BE1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-72",
          label: "612ASQ",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-73",
          label: "PACKER 1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-74",
          label: "PACKER 2",
        }}
      />
      <div className="d-flex position-absolute single-text-75">
        <MimicCaret
          parentClass="d-flex flex-column justify-content-center align-items-center tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useSKCWCaretColorStatus(
            "611PG4"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useSKCWCaretColorStatus(
            "611PG4"
          )}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ml-2",
            label: "611PG4",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-76">
        <MimicCaret
          parentClass="d-flex flex-column justify-content-center align-items-center tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useSKCWCaretColorStatus(
            "612PG4"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useSKCWCaretColorStatus(
            "612PG4"
          )}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ml-2",
            label: "612PG4",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-77">
        <MimicCaret
          parentClass="d-flex flex-column justify-content-center align-items-center tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useSKCWCaretColorStatus(
            "612PG5"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useSKCWCaretColorStatus(
            "612PG5"
          )}`}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ml-2",
            label: "612PG5",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-78">
        <MimicCaret
          parentClass="d-flex flex-column justify-content-center align-items-center tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useSKCWCaretColorStatus(
            "611PG5"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useSKCWCaretColorStatus(
            "611PG5"
          )}`}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-white ml-2",
            label: "611PG5",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-79",
          label: "642BE1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass:
            "bg-secondary text-dark px-2 py-1 position-absolute single-text-80",
          label: "FROM 591BE1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-81",
          label: "611SB1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-white position-absolute single-text-82",
          label: "612SB1",
        }}
      />
      <div className="pipeVr position-absolute pipe-1"></div>
      <div className="pipeVr position-absolute pipe-2"></div>
    </div>
  );
};

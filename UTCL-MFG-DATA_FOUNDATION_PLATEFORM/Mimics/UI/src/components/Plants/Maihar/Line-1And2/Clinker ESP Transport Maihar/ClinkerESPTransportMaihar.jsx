import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  MimicCaret,
  TransparentBoxWithGate,
} from "../../../../index";
import {
  useColorStatus,
  useCaretColorStatus,
  useImgColorStatus,
} from "../../../../../utils";

export const ClinkerESPTransportMaihar = () => {
  return (
    <div className="ClinkerESPTransportMaihar w-100 h-100 position-relative">
      <div className="pipeVr position-absolute pipe-4"></div>
      <div className="pipeVr position-absolute pipe-5"></div>
      <div className="pipeHr position-absolute pipe-6"></div>
      <div className="pipeVr position-absolute pipe-7"></div>
      <div className="pipeVr position-absolute pipe-8"></div>
      <div className="pipeVr position-absolute pipe-9"></div>
      <div className="pipeHr position-absolute pipe-10"></div>
      <div className="pipeVr position-absolute pipe-11"></div>
      <div className="pipeVr position-absolute pipe-12"></div>
      <div className="pipeVr position-absolute pipe-13"></div>
      <div className="pipeHr position-absolute pipe-14"></div>
      <div className="pipeVr position-absolute pipe-15"></div>
      <div className="pipeHr position-absolute pipe-16"></div>
      <div className="pipeHr position-absolute pipe-17"></div>
      <div className="pipeVr position-absolute pipe-18"></div>

      <div className="yellowline-Hr rightarrow position-absolute line-1"></div>
      <div className="yellowline-Vr position-absolute line-2"></div>
      <div className="yellowline-Hr position-absolute line-3"></div>
      <div className="yellowline-Vr position-absolute line-4"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-5"></div>
      <div className="yellowline-Hr position-absolute line-6"></div>
      <div className="yellowline-Hr position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Hr position-absolute line-9"></div>
      <div className="yellowline-Vr upArrow position-absolute line-10"></div>
      <div className="yellowline-Vr upArrow position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr position-absolute line-16"></div>
      <div className="yellowline-Hr position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr position-absolute line-19"></div>
      <div className="yellowline-Vr position-absolute line-20"></div>
      <div className="yellowline-Vr position-absolute line-21"></div>
      <div className="yellowline-Vr position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>
      <div className="yellowline-Vr downArrow position-absolute line-28"></div>
      <div className="yellowline-Vr downArrow position-absolute line-29"></div>
      <div className="yellowline-Vr  position-absolute line-30"></div>
      <div className="yellowline-Vr  position-absolute line-31"></div>
      <div className="yellowline-Hr  position-absolute line-32"></div>
      <div className="yellowline-Vr downArrow position-absolute line-33"></div>
      <div className="yellowline-Vr downArrow position-absolute line-34"></div>
      <div className="yellowline-Vr downArrow position-absolute line-35"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-36"></div>
      <div className="yellowline-Vr  position-absolute line-37"></div>
      <div className="yellowline-Hr  position-absolute line-38"></div>
      <div className="yellowline-Hr  position-absolute line-39"></div>
      <div className="yellowline-Vr upArrow position-absolute line-40"></div>
      <div className="yellowline-Hr  position-absolute line-41"></div>
      <div className="yellowline-Vr upArrow position-absolute line-42"></div>
      <div className="yellowline-Vr upArrow position-absolute line-43"></div>
      <div className="yellowline-Vr downArrow position-absolute line-44"></div>
      <div className="yellowline-Hr  position-absolute line-45"></div>

      <div className="position-absolute single-text-1  d-flex">
        <div className="text-center d-flex">
          <div>
            <div className="containerImage">
              <BlackContainer
                data={{
                  label: "PT4052",
                  useClass: "greenTxt mt-2 text",
                  unit: "MMWC",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <MotorCircleDigitalTag
              className={`dot p-3 mt-2 digital-tag ${useColorStatus("430RF1")}`}
              label="430RF1"
              text="M"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-4",
                label: "TO CLK SILO 1",
              }}
            />
          </div>

          <div className="img-66 mt-4 ml-3">
            <div className="connector-icon ">
              <div className="circle-group">
                <MotorCircleDigitalTag
                  className={`dot p-3 digital-tag ${useColorStatus("430FN1")}`}
                  label="430FN1"
                  text="M"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center d-flex mt-5 ml-3">
          <div>
            <div className="containerImage">
              <BlackContainer
                data={{
                  label: "PT4053",
                  useClass: "greenTxt mt-2 text",
                  unit: "MMWC",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-4",
                label: "TO CLK SILO 2",
              }}
            />
          </div>

          <div className="img-66 mt-4 ml-3">
            <div className="connector-icon ">
              <div className="circle-group">
                <MotorCircleDigitalTag
                  className={`dot p-3 digital-tag ${useColorStatus("430FN2")}`}
                  label="430FN2"
                  text="M"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-2 ">
        <div className="img-41 mt-1  text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 mt-2 digital-tag ${useColorStatus("430PC1")}`}
            label="430PC1"
            text="M"
          />
        </div>
        <div className="img-41 mr-1  text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 mt-2 digital-tag ${useColorStatus("430PC2")}`}
            label="430PC2"
            text="M"
          />
        </div>
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-3"></div>
      <div className="dashedHr-Pipe position-absolute single-text-4"></div>
      <div className="dashedHr-Pipe position-absolute single-text-5"></div>
      <div className="dashedHr-Pipe position-absolute single-text-6"></div>
      <div className="dashedHr-Pipe position-absolute single-text-7"></div>
      <div className="dashedHr-Pipe position-absolute single-text-8"></div>

      <div className="position-absolute single-text-9">
        <div className="containerImage"></div>
      </div>
      <div className="gry-img position-absolute single-text-10"></div>
      <div className=" position-absolute  single-text-11">
        <div className="hpipecircle">
          <span className="dot grayDot "></span>

          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("430BC2")}`}
            label="430BC2"
            text="M"
          />
        </div>
      </div>
      <div className=" position-absolute  single-text-12">
        <div className="hpipecircle">
          <span className="dot grayDot "></span>
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("430BC1")}`}
            label="430BC1"
            text="M"
          />
        </div>
      </div>
      <div className=" position-absolute  single-text-13">
        <div className="hpipecircle">
          <span className="dot grayDot "></span>
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("430PC3")}`}
            label="430PC3"
            text="M"
          />
        </div>
      </div>
      <div className=" position-absolute  containerImage single-text-14"></div>
      <div className=" position-absolute  containerImage single-text-15"></div>
      <div className=" position-absolute  single-text-16">
        <BlackContainer
          data={{
            label: "KT4019",
            useClass: "greenTxt mt-2 text",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RT4057",
            useClass: "greenTxt mt-2 text",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "RT4058",
            useClass: "greenTxt mt-2 text",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "VS4002",
            useClass: "greenTxt mt-2 text",
            unit: "MM/S",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "AS4013",
            useClass: "greenTxt mt-2 text",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="bagHouse text-center position-absolute single-text-17">
        <div className="d-flex  justify-content-around mt-2">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("422EP3")}`}
            label="422EP3"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("422EP2")}`}
            label="422EP2"
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("422EP1")}`}
            label="422EP1"
          />
        </div>
      </div>
      <div className=" position-absolute single-text-18">
        <MotorCircleDigitalTag
          className={`dot p-3 mt-2 digital-tag ${useColorStatus("422FN12")}`}
          label="422FN12"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-19 d-flex">
        <div className=" mt-3">
          <BlackContainer
            data={{
              label: "TT4016",
              useClass: "greenTxt mt-2 text",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PT4021",
              useClass: "greenTxt mt-2 text",
              unit: "WG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "IT4007",
              useClass: "greenTxt mt-2 text",
              unit: "MA",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "ET4006",
              useClass: "greenTxt mt-2 text",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "IT4006",
              useClass: "greenTxt mt-2 text",
              unit: "MA",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "ET4005",
              useClass: "greenTxt mt-2 text",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5">
          <BlackContainer
            data={{
              label: "IT4005",
              useClass: "greenTxt mt-2 text",
              unit: "MA",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "ET4004",
              useClass: "greenTxt mt-2 text",
              unit: "KV",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5 mt-4">
          <BlackContainer
            data={{
              label: "PT4020",
              useClass: "greenTxt mt-2 text",
              unit: "WG",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="ml-5 mt-4">
          <BlackContainer
            data={{
              label: "13TT109_IND",
              useClass: "greenTxt mt-2 text",
              unit: "°C",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute  containerImage single-text-20"></div>
      <div className=" position-absolute  containerImage single-text-21"></div>
      <div className=" position-absolute single-text-22 ">
        <div className="img-41 mt-1  text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 mt-2 digital-tag ${useColorStatus("422CV1")}`}
            label="422CV1"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "422CV1",
          }}
        />
        <div className="img-41 mr-1  text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 mt-2 digital-tag ${useColorStatus("422PS1")}`}
            label="422PS1"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "422PS1",
          }}
        />
      </div>

      <div className="dashedHr-Pipe position-absolute single-text-23"></div>
      <div className="dashedHr-Pipe position-absolute single-text-24"></div>
      <div className=" position-absolute single-text-25 ">
        <div className="img-41 mt-1  text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 mt-2 digital-tag ${useColorStatus("422CV2")}`}
            label="422CV2"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "422CV2",
          }}
        />
        <div className="img-41 mr-1  text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 mt-2 digital-tag ${useColorStatus("422PS2")}`}
            label="422PS2"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "422PS2",
          }}
        />
      </div>
      <div className="dashedHr-Pipe position-absolute single-text-26"></div>
      <div className="dashedHr-Pipe position-absolute single-text-27"></div>

      <MotorCircleDigitalTag
        className={`gray-green-red-img position-absolute single-text-28 digital-tag ${useImgColorStatus(
          "422DG1"
        )}`}
        label="422DG1"
      />
      <div className="position-absolute single-text-29">
        <div className="containerImage"></div>
        <MotorCircleDigitalTag
          className={`dot p-3 mx-auto digital-tag ${useColorStatus("422RF13")}`}
          label="422RF13"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-30">
        <div className="img-66 mt-4 ml-3">
          <div className="connector-icon ">
            <div className="circle-group">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("422OP1")}`}
                label="422OP1"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-31">
        <div className="img-66 mt-4 ml-3">
          <div className="connector-icon ">
            <div className="circle-group">
              <MotorCircleDigitalTag
                className={`dot p-3 digital-tag ${useColorStatus("422FN13")}`}
                label="422FN13"
                text="M"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" img-87 position-absolute single-text-32"></div>
      <div className="position-absolute single-text-33 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "from cooler",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "exhaust",
          }}
        />
        <BlackContainer
          data={{
            label: "TT4017",
            useClass: "greenTxt mt-1 text",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-34 text-center">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "from cooler",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "midtap",
          }}
        />
        <BlackContainer
          data={{
            label: "13TT101_IND",
            useClass: "greenTxt mt-1 text",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-35">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Retum dust to",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "DPC",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-36",
          label: "422DG1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-37",
          label: "ON TIME",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-38",
          label: "430PC1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-39",
          label: "430PC2",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-40",
          label: "TO REJECT",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-41",
          label: "430PC3",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-42",
          label: "430BC1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-43",
          label: "430BC2",
        }}
      />
      <div className=" position-absolute single-text-44 d-flex">
        <MotorCircleDigitalTag
          className={`dot p-3 mt-2 digital-tag ${useColorStatus("422WP3")}`}
          label="422WP3"
          text="M"
        />

        <MotorCircleDigitalTag
          className={`dot p-3 mt-2 ml-2 digital-tag ${useColorStatus(
            "422WP3A"
          )}`}
          label="422WP3A"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-45 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "SG1",
          }}
        />
        <div className="tringle-item">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down digital-tag d-block ${useCaretColorStatus(
              "430SG1"
            )}`}
            secondCaretClass={`fa-solid fa-caret-up digital-tag d-block ${useCaretColorStatus(
              "430SG1"
            )}`}
            label="430SG1"
          />
        </div>
      </div>
      <div className="position-absolute single-text-46 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "SG2",
          }}
        />
        <div className="tringle-item">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down digital-tag d-block ${useCaretColorStatus(
              "430SG2"
            )}`}
            secondCaretClass={`fa-solid fa-caret-up digital-tag d-block ${useCaretColorStatus(
              "430SG2"
            )}`}
            label="430SG2"
          />
        </div>
      </div>
      <div className="position-absolute single-text-47 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "SG3",
          }}
        />
        <div className="tringle-item">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down digital-tag d-block ${useCaretColorStatus(
              "430SG3"
            )}`}
            secondCaretClass={`fa-solid fa-caret-up digital-tag d-block ${useCaretColorStatus(
              "430SG3"
            )}`}
            label="430SG3"
          />
        </div>
      </div>
      <div className="position-absolute single-text-48 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "SG4",
          }}
        />
        <div className="tringle-item">
          <MimicCaret
            parentClass="tringle-item"
            firstCaretClass={`fa-solid fa-caret-down digital-tag d-block ${useCaretColorStatus(
              "430SG4"
            )}`}
            secondCaretClass={`fa-solid fa-caret-up digital-tag d-block ${useCaretColorStatus(
              "430SG4"
            )}`}
            label="430SG4"
          />
        </div>
      </div>
      <div className="position-absolute single-text-49">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "422LD2",
            squareClass: `${useColorStatus("422LD2")}`,
          }}
        />
      </div>
      <div className="position-absolute single-text-50">
        <i className="fa-solid fa-gear"></i>
      </div>
      <div className="position-absolute single-text-51">
        <i className="fa-solid fa-gear"></i>
      </div>
      <div className="position-absolute single-text-52">
        <i className="fa-solid fa-gear"></i>
      </div>
      <div className="position-absolute single-text-53">
        <i className="fa-solid fa-gear"></i>
      </div>
      <div className="position-absolute single-text-54">
        <BlackContainer
          data={{
            label: "13ZTMLD01_IND",
            useClass: "greenTxt mt-2 text",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1 position-absolute single-text-55",
          label: "AQC",
        }}
      />
      <div className=" img-86 position-absolute single-text-56"></div>
      <div className=" position-absolute single-text-57">
        <i className="fa-solid fa-bolt-lightning"></i>
      </div>
      <div className="pipeHr position-absolute pipe-1"></div>
      <div className="pipeVr position-absolute pipe-2 rounded">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "SILO 1",
            }}
          />
          <BlackContainer
            data={{
              label: "LT4001",
              useClass: "greenTxt mt-2 text",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="pipeVr position-absolute pipe-3 rounded">
        <div className="text-center">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "SILO 2",
            }}
          />
          <BlackContainer
            data={{
              label: "LT4002",
              useClass: "greenTxt mt-2 text",
              unit: "MTR",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
    </div>
  );
};

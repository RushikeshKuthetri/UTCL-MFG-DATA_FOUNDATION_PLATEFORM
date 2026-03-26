import {
  BlackContainer,
  TextContainerWithWrapWord,
  MotorCircleDigitalTag,
  PipeWithCircles,
  MimicCaret,
  TextColumn,
} from "../../../../index";
import { useCaretColorStatus, useColorStatus } from "../../../../../utils";

import * as tagsData from "../../../../../data/maihar/Line-3/Kiln/maiharL3KilnTextcolumn";

export const KilnMaiharL3 = () => {
  return (
    <div className="KilnMaiharL3 w-100 h-100 position-relative">
      <div className="yellowline-Vr position-absolute line-1"></div>
      <div className="yellowline-Vr position-absolute line-2"></div>
      <div className="yellowline-Vr position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr position-absolute line-7"></div>
      <div className="yellowline-Hr position-absolute line-8"></div>
      <div className="yellowline-Hr position-absolute line-9"></div>
      <div className="yellowline-Hr position-absolute line-10"></div>
      <div className="yellowline-Hr position-absolute line-11"></div>
      <div className="yellowline-Hr position-absolute line-12"></div>
      <div className="yellowline-Hr position-absolute line-13"></div>
      <div className="yellowline-Hr position-absolute line-14"></div>
      <div className="yellowline-Hr position-absolute line-15"></div>
      <div className="yellowline-Hr position-absolute line-16"></div>
      <div className="yellowline-Hr position-absolute line-17"></div>
      <div className="yellowline-Hr position-absolute line-18"></div>
      <div className="yellowline-Hr position-absolute line-19"></div>
      <div className="yellowline-Hr position-absolute line-20"></div>
      <div className="yellowline-Hr position-absolute line-21"></div>
      <div className="yellowline-Hr position-absolute line-22"></div>
      <div className="yellowline-Hr position-absolute line-23"></div>
      <div className="yellowline-Hr position-absolute line-24"></div>
      <div className="yellowline-Hr position-absolute line-25"></div>
      <div className="yellowline-Hr position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>
      <div className="yellowline-Vr position-absolute line-29"></div>
      <div className="yellowline-Vr position-absolute line-30"></div>
      <div className="yellowline-Vr position-absolute line-31"></div>
      <div className="yellowline-Vr position-absolute line-32"></div>
      <div className="pipeHr border border-dark position-absolute pipe-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto",
            label: "TAD DUCT",
          }}
        />
      </div>
      <div className="pipeVr text-center border border-dark position-absolute pipe-8">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "RISER DUCT",
          }}
        />
      </div>
      <div className="img-107 position-absolute single-text-1"></div>
      <div className="pipeHr border border-dark position-absolute pipe-2"></div>
      <div className="pipeVr border border-dark position-absolute pipe-3">
        {" "}
      </div>
      <div className="d-flex align-items-center justify-content-center pipeHr border border-dark position-absolute pipe-4">
        <div className="yellowline-Hr leftarrow w-25 position-relative"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "P5",
          }}
        />
      </div>
      <div className="pipeVr border border-dark position-absolute pipe-5"></div>
      <div className="pipeVr border border-dark position-absolute pipe-6"></div>
      <div className="pipeVr text-center border border-dark position-absolute pipe-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "K5",
          }}
        />
        <div className="yellowline-Vr downArrow h-50 position-relative"></div>
      </div>
      <div className="pipeVr border border-dark position-absolute pipe-9"></div>
      <div className="pipeVr border border-dark position-absolute pipe-10"></div>
      <div className="pipeVr border border-dark position-absolute pipe-11"></div>
      <div className="pipeVr border border-dark position-absolute pipe-12"></div>
      <div className="pipeVr border border-dark position-absolute pipe-13"></div>
      <div className="pipeVr border border-dark position-absolute pipe-14"></div>
      <div className="pipeVr border border-dark position-absolute pipe-15"></div>
      <div className="pipeVr border border-dark position-absolute pipe-16"></div>
      <div className="pipeVr border border-dark position-absolute pipe-17"></div>
      <div className="pipeVr border border-dark position-absolute pipe-18"></div>
      <div className="pipeHr border border-dark position-absolute pipe-19"></div>
      <div className="pipeHr border border-dark position-absolute pipe-20"></div>
      <div className="pipeHr border border-dark position-absolute pipe-21"></div>
      <div className="pipeHr border border-dark position-absolute pipe-22"></div>
      <div className="pipeHr border border-dark position-absolute pipe-23"></div>
      <div className="pipeVr border border-dark position-absolute pipe-24"></div>
      <div className="pipeHr border border-dark position-absolute pipe-25"></div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-2" />
      <div className="position-absolute single-text-3">
        <div className="img-41"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "STN-3",
          }}
        />
      </div>
      <div className="position-absolute single-text-4">
        <div className="img-41"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "STN-2",
          }}
        />
      </div>
      <div className="img-41 position-absolute single-text-5"></div>
      <div className="position-absolute single-text-6">
        <div className="img-41"></div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "STN-1",
          }}
        />
      </div>
      <div className="position-absolute single-text-7">
        <div className="img-41 text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("421AD1")}`}
            label="421AD1"
            text="M"
          />
        </div>
        <BlackContainer
          data={{
            label: "IT4004A",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="img-41 text-center pt-2 position-absolute single-text-8">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421MD1")}`}
          label="421MD1"
          text="M"
        />
      </div>
      <div className="img-86 position-absolute single-text-9"></div>
      <div className="img-86 position-absolute single-text-10"></div>
      <div className="img-41 text-center position-absolute single-text-11">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("420SC1")}`}
          label="420SC1"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-12">
        <div className="img-41 text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("SB2_FAN")}`}
            label="SB2_FAN"
            text="M"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "GIRTH GEAR COMP",
          }}
        />
      </div>
      <div className="position-absolute single-text-13">
        <div className="img-86 pt-2 text-center">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("421KL1P1")}`}
            label="421KL1P1"
            text="M"
          />
        </div>
        <div className="img-86 pt-2 text-center mt-2">
          <MotorCircleDigitalTag
            className={`dot p-3 digital-tag ${useColorStatus("421KL1P2")}`}
            label="421KL1P2"
            text="M"
          />
        </div>
      </div>
      <div className="img-86 pt-2 text-center position-absolute single-text-14">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421GL")}`}
          label="421GL"
          text="M"
        />
      </div>
      <div className="img-86 pt-2 text-center position-absolute single-text-15">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421KL1P5")}`}
          label="421KL1P5"
          text="M"
        />
      </div>
      <div className="position-absolute single-text-16">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN7")}`}
          label="421FN7"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "421FN7",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN7A")}`}
          label="421FN7A"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "421FN7A",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <div className="img-66">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("421BL1")}`}
              label="421BL1"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "421BL1",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <div className="img-66">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("421BL1A")}`}
              label="421BL1A"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "421BL1A",
          }}
        />
      </div>
      <div className="position-absolute single-text-20">
        <div className="img-66">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("421BL1B")}`}
              label="421BL1B"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "421BL1B",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <div className="img-66">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("421FN1")}`}
              label="421FN1"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "421FN1",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <div className="img-66">
          <div className="connector-icon">
            <MotorCircleDigitalTag
              className={`dot p-3 digital-tag ${useColorStatus("421FN1A")}`}
              label="421FN1A"
              text="M"
            />
          </div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "421FN1A",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-23">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN9")}`}
          label="421FN9"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN10")}`}
          label="421FN10"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN11")}`}
          label="421FN11"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN12")}`}
          label="421FN12"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN13")}`}
          label="421FN13"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN14")}`}
          label="421FN14"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN15")}`}
          label="421FN15"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN16")}`}
          label="421FN16"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN17")}`}
          label="421FN17"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN18")}`}
          label="421FN18"
          text="M"
        />
      </div>
      <div className="d-flex position-absolute single-text-24">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN19")}`}
          label="421FN19"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN20")}`}
          label="421FN20"
          text="M"
        />
      </div>
      <div className="d-flex position-absolute single-text-25">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421KL1P3")}`}
          label="421KL1P3"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421KL1P4")}`}
          label="421KL1P4"
          text="M"
        />
      </div>
      <div className="d-flex position-absolute single-text-26">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN3")}`}
          label="421FN3"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN4")}`}
          label="421FN4"
          text="M"
        />
      </div>
      <div className="d-flex position-absolute single-text-28">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN5")}`}
          label="421FN5"
          text="M"
        />
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("421FN6")}`}
          label="421FN6"
          text="M"
        />
      </div>
      <MotorCircleDigitalTag
        className={`position-absolute single-text-29 dot p-3 digital-tag ${useColorStatus(
          "421FN23"
        )}`}
        label="421FN23"
        text="M"
      />
      <MotorCircleDigitalTag
        className={`position-absolute single-text-30 dot p-3 digital-tag ${useColorStatus(
          "421FN22"
        )}`}
        label="421FN22"
        text="M"
      />
      <MotorCircleDigitalTag
        className={`position-absolute single-text-32 dot p-3 digital-tag ${useColorStatus(
          "421FN21"
        )}`}
        label="421FN21"
        text="M"
      />
      <BlackContainer
        data={{
          label: "TT4030",
          useClass: "greenTxt position-absolute single-text-33",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <div className="d-flex position-absolute single-text-34">
        <MimicCaret
          parentClass="tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "421BL1A_SOV"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "421BL1A_SOV"
          )}`}
          label="421BL1A_SOV"
        />
        <BlackContainer
          data={{
            label: "KW4026A",
            useClass: "greenTxt ml-3 mt-3",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-35">
        <MimicCaret
          parentClass="tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "421BL1B_SOV"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "421BL1B_SOV"
          )}`}
          label="421BL1B_SOV"
        />
        <BlackContainer
          data={{
            label: "KT4170",
            useClass: "greenTxt ml-3 mt-3",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-36">
        <MimicCaret
          parentClass="tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "421FN1_SOV"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "421FN1_SOV"
          )}`}
          label="421FN1_SOV"
        />
        <BlackContainer
          data={{
            label: "KT4036",
            useClass: "greenTxt ml-3 mt-3",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-37">
        <MimicCaret
          parentClass="tringle-item justify-content-center"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "421FN1A_SOV"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "421FN1A_SOV"
          )}`}
          label="421FN1A_SOV"
        />
        <BlackContainer
          data={{
            label: "KT4039",
            useClass: "greenTxt ml-3 mt-3",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <TextColumn
        useClass="position-absolute single-text-38"
        list={tagsData.maiharL3KilnTextcolumn1}
      />
      <TextColumn
        useClass="position-absolute single-text-39"
        list={tagsData.maiharL3KilnTextcolumn2}
      />
      <TextColumn
        useClass="position-absolute single-text-40"
        list={tagsData.maiharL3KilnTextcolumn3}
      />
      <TextColumn
        useClass="position-absolute single-text-41"
        list={tagsData.maiharL3KilnTextcolumn4}
      />
      <BlackContainer
        data={{
          label: "TT4004",
          useClass: "greenTxt position-absolute single-text-42",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <TextColumn
        useClass="position-absolute single-text-43"
        list={tagsData.maiharL3KilnTextcolumn5}
      />
      <TextColumn
        useClass="position-absolute single-text-44"
        list={tagsData.maiharL3KilnTextcolumn6}
      />
      <BlackContainer
        data={{
          label: "TT4003",
          useClass: "greenTxt position-absolute single-text-45",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <BlackContainer
        data={{
          label: "TT4002",
          useClass: "greenTxt position-absolute single-text-46",
          unit: "°C",
          unitColor: "unitColor",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-47",
          label: "GEAR BOX LUB",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-48",
          label: "THURST ROLL HYD UNIT",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-49",
          label: "TO REJECT PIT",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-50",
          label: "PYRO DUST",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-51",
          label: "FLOW CONTROL VALVE",
        }}
      />
      <div className="bg-secondary p-3 position-absolute single-text-52">
        <div className="d-flex">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DIESEL FLOW",
            }}
          />
          <BlackContainer
            data={{
              label: "FT4017",
              useClass: "greenTxt ml-3",
              unit: "LPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="d-flex mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "DIESEL TANK LVL",
            }}
          />
          <BlackContainer
            data={{
              label: "LT4003",
              useClass: "greenTxt ml-3",
              unit: "Mtr",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-53">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "COAL",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "DIESEL",
          }}
        />
      </div>
      <MimicCaret
        parentClass="tringle-item justify-content-center position-absolute single-text-54"
        firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
          "421BU_SOV"
        )}`}
        secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
          "421BU_SOV"
        )}`}
        label="421BU_SOV"
      />
    </div>
  );
};

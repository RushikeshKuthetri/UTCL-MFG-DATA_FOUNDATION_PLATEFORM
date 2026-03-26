import {
  useBorderTagsColorStatus,
  useCaretColorStatus,
  useColorStatus,
  useFanImgTagsColorStatus,
  useImgColorStatus,
} from "../../../../../utils";
import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  BlueContainerWithDynamicBorder,
  MimicCaret,
} from "../../../../index";

export const BlendingSiloRawanL2 = () => {
  return (
    <div className="BlendingSiloRawanL2 w-100 h-100 position-relative">
      <div className="position-absolute single-text-1">
        <BlackContainer
          data={{
            label: "392BE2/IT03",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "392BE2/IT04",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "392BE2/392BE2-M01",
            useClass: "greenTxt mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "392BE2/392BE2-M02",
            useClass: "greenTxt mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-2">
        <BlackContainer
          data={{
            label: "392BE1M01/IT03",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "392BE1M02/IT04",
            useClass: "greenTxt mt-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "392BE1M01/IT01",
            useClass: "greenTxt mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "392BE1M01/IT02",
            useClass: "greenTxt mt-2",
            unit: "KW",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="pipe  position-absolute single-text-3"></div>
      <div className="pipe  position-absolute single-text-4"></div>
      <div className="d-flex position-absolute single-text-5">
        <div className="img-86 d-flex align-items-center justify-content-cente">
          <MotorCircleDigitalTag
            className={`dot  digital-tag ${useColorStatus("392BE2/M01")}`}
            label="392BE2/M01"
          />
        </div>
        <MotorCircleDigitalTag
          className={`dot  digital-tag ${useColorStatus("392BE2/M02")}`}
          label="392BE2/M02"
          text="M"
        />
      </div>
      <div className="d-flex position-absolute single-text-6">
        <div className="img-86 d-flex align-items-center justify-content-cente">
          <MotorCircleDigitalTag
            className={`dot  digital-tag ${useColorStatus("393BE1M01/M01")}`}
            label="393BE1M01/M01"
          />
        </div>
        <MotorCircleDigitalTag
          className={`dot  digital-tag ${useColorStatus("392BE1M01A/M01")}`}
          label="392BE1M01A/M01"
          text="M"
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-7"
        text={{ useClass: "text-dark mx-auto", label: "392ASC" }}
      />
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-8"
        text={{ useClass: "text-dark mx-auto", label: "392ASB" }}
      />
      <div className="position-absolute single-text-9 d-flex">
        <div className="d-flex gap-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "392FNS",
            }}
          />
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("392FNS1/M01")}`}
              label="392FNS1/M01"
              text="F"
            />
          </div>
        </div>
        <div className="d-flex gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("392FNT/M01")}`}
              label="392FNT/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "392FNT",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-10 d-flex">
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("392FNW/M01")}`}
              label="392FNW/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "392FNW",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("392FNX/M01")}`}
              label="392FNX/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "392FNX",
            }}
          />
        </div>
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-11"
        text={{ useClass: "text-dark mx-auto", label: "432ASA" }}
      />
      <div className="position-absolute single-text-12 d-flex">
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNV/M01")}`}
              label="432FNV/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNV",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNU/M01")}`}
              label="432FNU/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNU",
            }}
          />
        </div>
      </div>
      <div className="containerImage pt-2 text-center position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "392PD1",
          }}
        />
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-14" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-15" />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-16" />
      <div className="d-flex justify-content-center pipeVr position-absolute single-text-17">
        <div className="trapezoid"></div>
      </div>
      <div className="position-absolute single-text-18 d-flex">
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("382FN4/M01")}`}
              label="382FN4/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "382FN4",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("382FN5/M01")}`}
              label="382FN5/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "382FN5",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-19">
        <div className="d-flex align-items-end justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DGD/K01")}`}
            isClickable={true}
            tagLabel="412DGD/K01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SGD/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SGD/V01"
            )}`}
            label="412SGD/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BVH/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BVH/V01"
            )}`}
            label="412BVH/V01"
          />
        </div>
        <div className="d-flex align-items-end ml-2 mt-2 justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DGC/K01")}`}
            isClickable={true}
            tagLabel="412DGC/K01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SGC/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SGC/V01"
            )}`}
            label="412SGC/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BVG/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BVG/V01"
            )}`}
            label="412BVG/V01"
          />
        </div>
        <div className="d-flex align-items-end ml-3 mt-2 justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DGB/K01")}`}
            isClickable={true}
            tagLabel="412DGB/K01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SGB/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SGB/V01"
            )}`}
            label="412SGB/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BVF/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BVF/V01"
            )}`}
            label="412BVF/V01"
          />
        </div>
        <div className="d-flex align-items-end ml-4 mt-2 justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DGA/K01")}`}
            isClickable={true}
            tagLabel="412DGA/K01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SGA/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SGA/V01"
            )}`}
            label="412SGA/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BVE/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BVE/V01"
            )}`}
            label="412BVE/V01"
          />
        </div>
        <div className="d-flex align-items-end mimi5 mt-2 justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DG9/K01")}`}
            isClickable={true}
            tagLabel="412DG9/K01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SG9/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SG9/V01"
            )}`}
            label="412SG9/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BVD/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BVD/V01"
            )}`}
            label="412BVD/V01"
          />
        </div>
        <div className="d-flex align-items-end mimi6 mt-2 justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DG8/K01")}`}
            isClickable={true}
            tagLabel="412DG8/K01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SG8/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SG8/V01"
            )}`}
            label="412SG8/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BVC/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BVC/V01"
            )}`}
            label="412BVC/V01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-20">
        <div className="d-flex align-items-end justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DG6/K01")}`}
            isClickable={true}
            tagLabel="412DG6/K01"
          />

          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SG6/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SG6/V01"
            )}`}
            label="412SG6/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BVA/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BVA/V01"
            )}`}
            label="412BVA/V01"
          />
        </div>
        <div className="d-flex align-items-end ml-2 mt-2 justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DG5/K01")}`}
            isClickable={true}
            tagLabel="412DG5/K01"
          />

          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SG5/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SG5/V01"
            )}`}
            label="412SG5/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BV9/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BV9/V01"
            )}`}
            label="412BV9/V01"
          />
        </div>
        <div className="d-flex align-items-end ml-3 mt-2 justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DG4/K01")}`}
            isClickable={true}
            tagLabel="412DG4/K01"
          />

          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SG4/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SG4/V01"
            )}`}
            label="412SG4/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BV8/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BV8/V01"
            )}`}
            label="412BV8/V01"
          />
        </div>
        <div className="d-flex align-items-end ml-4 mt-2 justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DG3/K01")}`}
            isClickable={true}
            tagLabel="412DG3/K01"
          />

          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SG3/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SG3/V01"
            )}`}
            label="412SG3/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BV7/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BV7/V01"
            )}`}
            label="412BV7/V01"
          />
        </div>
        <div className="d-flex align-items-end mimi5 mt-2 justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DG2/K01")}`}
            isClickable={true}
            tagLabel="412DG2/K01"
          />

          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SG2/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SG2/V01"
            )}`}
            label="412SG2/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BV6/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BV6/V01"
            )}`}
            label="412BV6/V01"
          />
        </div>
        <div className="d-flex align-items-end mimi6 mt-2 justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DG1/K01")}`}
            isClickable={true}
            tagLabel="412DG1/K01"
          />

          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SG1/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SG1/V01"
            )}`}
            label="412SG1/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BV5/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BV5/V01"
            )}`}
            label="412BV5/V01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-21 d-flex">
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("382FN3/M01")}`}
              label="382FN3/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "382N3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-22 d-flex">
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("382FN2/M01")}`}
              label="382FN2/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "382FN2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("382FN1/M01")}`}
              label="382FN1/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "382FN1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-24 d-flex">
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr  position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("412FN1/M01")}`}
              label="412FN1/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "412.FN1",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr  position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("412FN2/M01")}`}
              label="412FN2/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "412.FN2",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr  position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("412FN3/M01")}`}
              label="412FN3/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "412.FN3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-25 d-flex">
        <div className="d-flex align-items-end justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BVB/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BVB/V01"
            )}`}
            label="412BVB/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SG7/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SG7/V01"
            )}`}
            label="412SG7/V01"
          />
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DG7/K01")}`}
            isClickable={true}
            tagLabel="412DG7/K01"
          />
        </div>
        <div className="d-flex align-items-end justify-content-between">
          <div className="pipeHr position-absolute pipe-1"></div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("412DGE/K01")}`}
            isClickable={true}
            tagLabel="412DGE/K01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412SGE/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412SGE/V01"
            )}`}
            label="412SGE/V01"
          />
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BVJ/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BVJ/V01"
            )}`}
            label="412BVJ/V01"
          />
        </div>
      </div>
      <div className="position-absolute single-text-26 d-flex  box-1 p-1">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ",
              label: "KILN FEED BIN",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4",
              label: "412AS7",
            }}
          />
        </div>
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "BULK LOADING",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-4",
              label: "412ASE",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div>
          <BlackContainer
            data={{
              label: "412BL1/IA",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "412BL1",
            }}
          />
          <div className="connector-icon mt-1 mb-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "412BL1/M01"
              )} `}
              label="412BL1/M01"
            />
          </div>
          <BlackContainer
            data={{
              label: "412BL1/PTP",
              useClass: "greenTxt",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <MimicCaret
            parentClass="tringle-item d-flex mt-2"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BV1/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BV1/V01"
            )}`}
            label="412BV1/V01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "BV1",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "412BL2/IA",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "412BL2",
            }}
          />
          <div className="connector-icon mt-1 mb-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "412BL2/M01"
              )} `}
              label="412BL2/M01"
            />
          </div>
          <BlackContainer
            data={{
              label: "412BL2/PTP",
              useClass: "greenTxt",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <MimicCaret
            parentClass="tringle-item d-flex mt-2"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BV2/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BV2/V01"
            )}`}
            label="412BV2/V01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "BV2",
            }}
          />
        </div>
        <div>
          <BlackContainer
            data={{
              label: "412BL3/IA",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "412BL3",
            }}
          />
          <div className="connector-icon mt-1 mb-2">
            <MotorCircleDigitalTag
              className={`line-circle digital-tag ${useColorStatus(
                "412BL3/M01"
              )} `}
              label="412BL3/M01"
            />
          </div>
          <BlackContainer
            data={{
              label: "412BL3/PTP",
              useClass: "greenTxt",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <MimicCaret
            parentClass="tringle-item d-flex mt-2"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "412BV3/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "412BV3/V01"
            )}`}
            label="412BV3/V01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "BV3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-28 d-flex">
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("392FNS1/M01")}`}
              label="392FNS1/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "392FNS1",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("392FNT/M01")}`}
              label="392FNT/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "392FNT",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "392SB1_LTP",
          }}
        />
        <BlackContainer
          data={{
            label: "432DG1/POS_TREND",
            useClass: "greenTxt mt-2",
            unit: "mtr",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className=" position-absolute single-text-30 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "392BF4",
            }}
          />
          <div className="squareplustri d-flex  mt-1">
            <MotorCircleDigitalTag
              className={`square position-absolute ml-2 digital-tag mt-3 ${useColorStatus(
                "392BF4/M01"
              )}`}
              label="392BF4/M01"
            />
            <div className="d-flex  mt-5 ml-2">
              <MotorCircleDigitalTag
                className={`circle-img digital-tag mt-3 ${useFanImgTagsColorStatus(
                  "392RA4/M01"
                )}`}
                label="392RA4/M01"
              />
              <div className="mt-4 ml-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mr-2",
                    label: "392RA4",
                  }}
                />
              </div>
              <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
              <div className="yellowline-Hr position-absolute line-1"></div>
              <div className="yellowline-Vr upArrow position-absolute line-2"></div>
            </div>
          </div>
        </div>
        <div className="text-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "412.BF1",
            }}
          />
          <div className="squareplustri d-flex  mt-1">
            <MotorCircleDigitalTag
              className={`square position-absolute ml-2 digital-tag mt-3 ${useColorStatus(
                "412BF1/M01"
              )}`}
              label="412BF1/M01"
            />
            <div className="d-flex  mt-5 ml-2">
              <MotorCircleDigitalTag
                className={`circle-img digital-tag mt-3 ${useFanImgTagsColorStatus(
                  "412RA1/M01"
                )}`}
                label="412RA1/M01"
              />
              <div className="mt-4 ml-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mr-2",
                    label: "412.RA1",
                  }}
                />
              </div>
              <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
              <div className="yellowline-Hr position-absolute line-1"></div>
              <div className="yellowline-Vr upArrow position-absolute line-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-31 d-flex">
        <div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("392LD1/M01")}`}
            isClickable={true}
            tagLabel="392LD1/M01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "392LD1",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("392FNV/M01")}`}
              label="392FNV/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "392FNV",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-32">
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("412FN6/M01")}`}
              label="412FN6/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "412.FN6",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-33 d-flex">
        <div className="text-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "432.BF1",
            }}
          />
          <div className="squareplustri d-flex  mt-1">
            <MotorCircleDigitalTag
              className={`square position-absolute ml-2 digital-tag mt-3 ${useColorStatus(
                "432BF1/M01"
              )}`}
              label="432BF1/M01"
            />
            <div className="d-flex  mt-5 ml-2">
              <MotorCircleDigitalTag
                className={`circle-img digital-tag mt-3 ${useFanImgTagsColorStatus(
                  "432RA1/M01"
                )}`}
                label="432RA1/M01"
              />
              <div className="mt-4 ml-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mr-2",
                    label: "432.RA1",
                  }}
                />
              </div>
              <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
              <div className="yellowline-Hr position-absolute line-1"></div>
              <div className="yellowline-Vr upArrow position-absolute line-2"></div>
            </div>
          </div>
        </div>
        <div className="text-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "432.BF1",
            }}
          />
          <div className="squareplustri d-flex  mt-1">
            <div
              className={`square grey-color position-absolute ml-2 mt-3`}
            ></div>
            <div className="d-flex  mt-5 ml-2">
              <MotorCircleDigitalTag
                className={`circle-img digital-tag mt-3 ${useFanImgTagsColorStatus(
                  "432RA2/M01"
                )}`}
                label="432RA2/M01"
              />
              <div className="mt-4 ml-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mr-2",
                    label: "432.RA2",
                  }}
                />
              </div>
              <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
              <div className="yellowline-Hr position-absolute line-1"></div>
              <div className="yellowline-Vr upArrow position-absolute line-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-34 d-flex">
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FN1/M01")}`}
              label="432FN1/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432.FN1",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FN2/M01")}`}
              label="432FN2/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432.FN2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-35 d-flex">
        <BlackContainer
          data={{
            label: "392BF4/DPTP",
            useClass: "greenTxt ",
            unit: "Bar",
            unitColor: "unitColor",
          }}
        />
        <div className="mt-4">
          <BlackContainer
            data={{
              label: "412FN6/RPM$FEEDBACK",
              useClass: "greenTxt ",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "412FN6/IA",
              useClass: "greenTxt mt-2",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
        </div>
        <BlackContainer
          data={{
            label: "412BF1/DPTP",
            useClass: "greenTxt ",
            unit: "Bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-36 d-flex">
        <BlackContainer
          data={{
            label: "432BI1/WTIA",
            useClass: "greenTxt ",
            unit: "Tons",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "432BF1/DPTP",
            useClass: "greenTxt ",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "432BF2DPTP",
            useClass: "greenTxt mt-4",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "432FM1/V01",
              useClass: "greenTxt",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />

          <BlackContainer
            data={{
              label: "432FN2/S1",
              useClass: "greenTxt mt-1",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="containerImage pt-2 text-center position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "432.BI1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "KILN FEED BIN",
          }}
        />
      </div>
      <PipeWithCircles
        parentDivClass="hpipecircle position-absolute single-text-38"
        text={{ useClass: "text-dark mx-auto", label: "432.DG6" }}
      />
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-39" />
      <div className="position-absolute single-text-40 d-flex">
        <div className="mt-3">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432BL1",
            }}
          />
          <div className="d-flex">
            <div className="connector-icon mt-1">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "432BL1/M01"
                )} `}
                label="432BL1/M01"
              />
            </div>
            <BlueContainerWithDynamicBorder
              useClass={`mt-2 ${useBorderTagsColorStatus("432BV1/V01/M01")}`}
              isClickable={true}
              tagLabel="432BV1/V01/M01"
            />
          </div>
          <BlackContainer
            data={{
              label: "432BL1/PTP",
              useClass: "greenTxt mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "432FM1/432FM1_SP",
              useClass: "greenTxt  mt-2",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="text-2">
          <BlackContainer
            data={{
              label: "432BI1/432BI1_PTI",
              useClass: "greenTxt ",
              unit: "Bar",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432BL2",
            }}
          />
          <div className="d-flex">
            <MimicCaret
              parentClass="tringle-item d-flex mt-2"
              firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
                "432BV2/V01"
              )}`}
              secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
                "432BV2/V01"
              )}`}
              label="432BV2/V01"
            />
            <div className="connector-icon mt-1">
              <MotorCircleDigitalTag
                className={`line-circle digital-tag ${useColorStatus(
                  "432BL2/M01"
                )} `}
                label="432BL2/M01"
              />
            </div>
          </div>
          <BlackContainer
            data={{
              label: "432BL2/PTP",
              useClass: "greenTxt mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-41 d-flex">
        <div>
          <BlueContainerWithDynamicBorder
            useClass={` mt-2 ${useBorderTagsColorStatus("432FM1/V01")}`}
            isClickable={true}
            tagLabel="432FM1/V01"
          />

          <MotorCircleDigitalTag
            className={`dot mt-5 ml-3 digital-tag ${useColorStatus(
              "432FM1/M01"
            )}`}
            label="432FM1/M01"
            text="M"
          />
        </div>
        <MotorCircleDigitalTag
          className={`dot mt-5 digital-tag ${useColorStatus("432FM1/M01")}`}
          label="432FM1/M01"
          text="M"
        />
      </div>

      <div className="position-absolute single-text-42 d-flex">
        <div className="box-1 p-1 mt-3">
          <div className="d-flex">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FR",
              }}
            />
            <BlackContainer
              data={{
                label: "432FM1/FR",
                useClass: "greenTxt ml-2",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "POS",
              }}
            />
            <BlackContainer
              data={{
                label: "E432FM1/ZTA",
                useClass: "greenTxt ml-2",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "DPT",
              }}
            />
            <BlackContainer
              data={{
                label: "432FM1/DPTP",
                useClass: "greenTxt ml-2",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
        <div>
          <BlackContainer
            data={{
              label: "432FM2/432FM2-FEED-SP",
              useClass: "greenTxt",
              unit: "TPH",
              unitColor: "unitColor",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432.FM2",
            }}
          />

          <div className="box-1 p-1">
            <div className="d-flex">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "FR",
                }}
              />
              <BlackContainer
                data={{
                  label: "432FM2/FR",
                  useClass: "greenTxt ml-2",
                  unit: "TPH",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "POS",
                }}
              />
              <BlackContainer
                data={{
                  label: "432FM2/ZTA",
                  useClass: "greenTxt ml-2",
                  unit: "%",
                  unitColor: "unitColor",
                }}
              />
            </div>
            <div className="d-flex mt-2">
              <TextContainerWithWrapWord
                data={{
                  useClass: "text-dark",
                  label: "DPT",
                }}
              />
              <BlackContainer
                data={{
                  label: "432FM2/DPTP",
                  useClass: "greenTxt ml-2",
                  unit: "bar",
                  unitColor: "unitColor",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-43" />
      <div className="position-absolute single-text-44 d-flex">
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FN6/M01")}`}
              label="432FN6/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FN6",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FN7/M01")}`}
              label="432FN7/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FN7",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FN8/M01")}`}
              label="432FN8/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FN8",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FN9/M01")}`}
              label="432FN9/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FN9",
            }}
          />
        </div>
      </div>
      <PipeWithCircles parentDivClass="hpipecircle position-absolute single-text-45" />
      <div className="position-absolute single-text-46 d-flex">
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNA/M01")}`}
              label="432FNA/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNA",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNB/M01")}`}
              label="432FNB/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNB",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FNC/M01")}`}
              label="432FNC/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FNC",
            }}
          />
        </div>
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FND/M01")}`}
              label="432FND/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432FND",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-47 d-flex">
        <div>
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "432FN3/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "432FN3/V01"
            )}`}
            label="432FN3/V01"
          />
          <MotorCircleDigitalTag
            className={`dot mt-4 ml-4  digital-tag ${useColorStatus(
              "432FM3/M01"
            )}`}
            label="432FM3/M01"
            text="M"
          />
        </div>
      </div>
      <div className="position-absolute single-text-48 d-flex">
        <MotorCircleDigitalTag
          className={`grn-gry-img digital-tag ${useImgColorStatus(
            "432DGB/M02"
          )}`}
          label="432DGB/M02"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "432.DGB",
          }}
        />
      </div>
      <div className="position-absolute single-text-49 d-flex">
        <MotorCircleDigitalTag
          className={`grn-gry-img digital-tag ${useImgColorStatus(
            "432DG7/K01"
          )}`}
          label="432DG7/K01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "432.DG7",
          }}
        />
      </div>
      <div className="position-absolute single-text-50 d-flex">
        <MotorCircleDigitalTag
          className={`grn-gry-img digital-tag ${useImgColorStatus(
            "432DG1/K01"
          )}`}
          label="432DG1/K01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "432.DG1",
          }}
        />
      </div>
      <div className="position-absolute single-text-51 d-flex">
        <BlackContainer
          data={{
            label: "432FM3/432FM3-FEED-SP",
            useClass: "greenTxt mt-5",
            unit: "TPH",
            unitColor: "unitColor",
          }}
        />
        <div className="box-1 p-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark",
              label: "432.FM3",
            }}
          />
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "FR",
              }}
            />
            <BlackContainer
              data={{
                label: "432FM3/FR",
                useClass: "greenTxt ml-3",
                unit: "TPH",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "POS",
              }}
            />
            <BlackContainer
              data={{
                label: "432FM3/ZTA",
                useClass: "greenTxt ml-3",
                unit: "%",
                unitColor: "unitColor",
              }}
            />
          </div>
          <div className="d-flex mt-2">
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark",
                label: "DPT",
              }}
            />
            <BlackContainer
              data={{
                label: "432FM3/DPTP",
                useClass: "greenTxt ml-3",
                unit: "mmWC",
                unitColor: "unitColor",
              }}
            />
          </div>
        </div>
      </div>
      <div className=" position-absolute single-text-52 d-flex">
        <div className="text-1">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mr-2",
              label: "432.BF3",
            }}
          />
          <div className="squareplustri d-flex  mt-1">
            <MotorCircleDigitalTag
              className={`square position-absolute ml-2 digital-tag mt-3 ${useColorStatus(
                "432BF3/M01"
              )}`}
              label="432BF3/M01"
            />

            <div className="d-flex  mt-5 ml-2">
              <MotorCircleDigitalTag
                className={`circle-img digital-tag mt-3 ${useFanImgTagsColorStatus(
                  "432RA3/M01"
                )}`}
                label="432RA3/M01"
              />
              <div className="mt-4 ml-2">
                <TextContainerWithWrapWord
                  data={{
                    useClass: "text-dark mr-2",
                    label: "432.RA3",
                  }}
                />
              </div>
              <div className="yellowline-Vr  downArrow position-absolute line-139 ml-3 mb-2"></div>
              <div className="yellowline-Hr position-absolute line-1"></div>
              <div className="yellowline-Vr upArrow position-absolute line-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-53 d-flex">
        <div className="gap-1">
          <div className="connector-icon mt-1">
            <div className="yellowline-Vr upArrow position-absolute line-1"></div>
            <MotorCircleDigitalTag
              className={`dot digital-tag ${useColorStatus("432FN3/M01")}`}
              label="432FN3/M01"
              text="F"
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "432.FN3",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-54 d-flex">
        <BlackContainer
          data={{
            label: "432BF3/DPTP",
            useClass: "greenTxt  mt-5",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <div>
          <BlackContainer
            data={{
              label: "432FN3/IA",
              useClass: "greenTxt",
              unit: "AMP",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "432FN3/SA",
              useClass: "greenTxt mt-2",
              unit: "RPM",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-3">
          <BlackContainer
            data={{
              label: "432BE1-M01/1BI",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "432BE1-M02/1BI",
              useClass: "greenTxt mt-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-3">
          <BlackContainer
            data={{
              label: "432BE2-M01/1BI",
              useClass: "greenTxt",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "432BE2-M02/1BI",
              useClass: "greenTxt mt-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-55 d-flex">
        <MotorCircleDigitalTag
          className={`grn-gry-img digital-tag ${useImgColorStatus(
            "4323DG8/M01"
          )}`}
          label="4323DG8/M01"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "432.DG8",
          }}
        />
      </div>
      <div className="position-absolute single-text-56 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "432.BE1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "432.BE2",
          }}
        />
      </div>
      <div className="position-absolute single-text-57 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "432.AS4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "432.AS5",
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        <div className=" d-flex ml-4">
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "432SG4V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "432SG4V01"
            )}`}
            label="432SG4V01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-3",
              label: "432.SG4",
            }}
          />
        </div>
        <div className=" d-flex">
          <MotorCircleDigitalTag
            className={`dot mt-5  digital-tag ${useColorStatus("432SM1/M01")}`}
            label="432SM1/M01"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5 ml-3",
              label: "432.SM1",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-59">
        <div className=" d-flex ml-4">
          <MimicCaret
            parentClass="tringle-item d-flex"
            firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
              "432SG5/V01"
            )}`}
            secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
              "432SG5/V01"
            )}`}
            label="432SG5/V01"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2 ml-3",
              label: "432.SG5",
            }}
          />
        </div>
        <div className=" d-flex">
          <MotorCircleDigitalTag
            className={`dot mt-5  digital-tag ${useColorStatus("432SM2/M01")}`}
            label="432SM2/M01"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-5 ml-3",
              label: "432.SM2",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-60 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "TO 432.BE1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "TO 432.BE2",
          }}
        />
      </div>
      <BlackContainer
        data={{
          label: "432FN2/II",
          useClass: "greenTxt position-absolute single-text-61",
          unit: "AMP",
          unitColor: "unitColor",
        }}
      />
      <div className="position-absolute single-text-62 d-flex">
        <div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "CYCLE TIMING",
            }}
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "412AS6",
            }}
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "412ASD",
          }}
        />
      </div>
      <div className="position-absolute single-text-63 d-flex ">
        <div>
          <MotorCircleDigitalTag
            className={`dot  digital-tag ${useColorStatus("392SM8/M01")}`}
            label="392SM8/M01"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "392.SM8",
            }}
          />
        </div>
        <div className="mt-5">
          <MotorCircleDigitalTag
            className={`dot  digital-tag ${useColorStatus("392SM7/M02")}`}
            label="392SM7/M02"
            text="M"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-2",
              label: "392.SM7",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-64 d-flex">
        <BlueContainerWithDynamicBorder
          useClass={`mt-2 ${useBorderTagsColorStatus("432DG2/K01")}`}
          isClickable={true}
          tagLabel="432DG2/K01"
        />
        <BlueContainerWithDynamicBorder
          useClass={`mt-2 ${useBorderTagsColorStatus("432DG3/K01")}`}
          isClickable={true}
          tagLabel="432DG3/K01"
        />
      </div>
      <div className="position-absolute single-text-65 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "BV",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "SG",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "DG",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "DG",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "SG",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "BV",
          }}
        />
      </div>
      <div className="position-absolute single-text-66 d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "412DG1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "412DG8",
          }}
        />
      </div>

      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Hr  position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Vr downArrow position-absolute line-5"></div>
      <div className="yellowline-Vr downArrow position-absolute line-6"></div>
      <div className="yellowline-Vr downArrow position-absolute line-7"></div>
      <div className="yellowline-Vr downArrow position-absolute line-8"></div>
      <div className="yellowline-Vr downArrow position-absolute line-9"></div>
      <div className="yellowline-Vr downArrow position-absolute line-10"></div>
      <div className="yellowline-Vr downArrow position-absolute line-11"></div>
      <div className="yellowline-Vr  position-absolute line-12"></div>
      <div className="yellowline-Hr  position-absolute line-13"></div>
      <div className="yellowline-Vr downArrow position-absolute line-14"></div>
      <div className="yellowline-Vr downArrow position-absolute line-15"></div>
      <div className="yellowline-Vr downArrow position-absolute line-16"></div>
      <div className="yellowline-Vr downArrow position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Vr downArrow position-absolute line-19"></div>
      <div className="yellowline-Vr downArrow position-absolute line-20"></div>
      <div className="yellowline-Vr downArrow position-absolute line-21"></div>
      <div className="yellowline-Vr downArrow position-absolute line-22"></div>
      <div className="yellowline-Vr downArrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Hr position-absolute line-27"></div>
      <div className="yellowline-Hr position-absolute line-28"></div>
      <div className="yellowline-Hr position-absolute line-29"></div>
      <div className="yellowline-Vr  position-absolute line-30"></div>
      <div className="yellowline-Vr  position-absolute line-31"></div>
      <div className="yellowline-Vr position-absolute line-32"></div>
      <div className="yellowline-Hr position-absolute line-33"></div>
      <div className="yellowline-Vr position-absolute line-34"></div>
      <div className="yellowline-Vr position-absolute line-35"></div>
      <div className="yellowline-Vr position-absolute line-36"></div>
      <div className="yellowline-Hr position-absolute line-37"></div>
      <div className="yellowline-Hr leftarrow position-absolute line-38"></div>
      <div className="yellowline-Vr  position-absolute line-39"></div>
      <div className="yellowline-Hr position-absolute line-40"></div>
      <div className="yellowline-Vr downArrow position-absolute line-41"></div>
      <div className="yellowline-Hr  position-absolute line-42"></div>
      <div className="yellowline-Hr  position-absolute line-43"></div>
      <div className="yellowline-Vr upArrow position-absolute line-44"></div>
      <div className="yellowline-Vr upArrow position-absolute line-45"></div>
      <div className="yellowline-Vr downArrow position-absolute line-46"></div>
      <div className="yellowline-Vr downArrow position-absolute line-47"></div>
      <div className="yellowline-Hr  position-absolute line-48"></div>
      <div className="yellowline-Vr downArrow position-absolute line-49"></div>
      <div className="yellowline-Vr downArrow position-absolute line-50"></div>
      <div className="yellowline-Vr downArrow position-absolute line-51"></div>
      <div className="yellowline-Vr  position-absolute line-52"></div>
      <div className="yellowline-Hr  position-absolute line-53"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-54"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-55"></div>
      <div className="yellowline-Vr downArrow  position-absolute line-56"></div>
    </div>
  );
};

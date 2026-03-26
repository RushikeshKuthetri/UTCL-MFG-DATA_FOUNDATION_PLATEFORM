import {
  TextContainerWithWrapWord,
  BlackContainer,
  MotorCircleDigitalTag,
  MimicCaret,
  BlueContainerWithDynamicBorder,
} from "../../../../index";

import {
  useColorStatus,
  useCaretColorStatus,
  useFanImgTagsColorStatus,
  useBorderTagsColorStatus,
} from "../../../../../utils";

export const KilnFiringHirmiLine2 = () => {
  return (
    <div className="KilnFiringHirmil2 w-100 h-100 position-relative">
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
      <div className="yellowline-Vr upArrow position-absolute line-12"></div>
      <div className="yellowline-Vr upArrow position-absolute line-13"></div>
      <div className="yellowline-Vr upArrow position-absolute line-14"></div>
      <div className="yellowline-Vr upArrow position-absolute line-15"></div>
      <div className="yellowline-Vr upArrow position-absolute line-16"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-17"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-18"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-19"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-20"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-21"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-22"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-23"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-24"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-25"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-26"></div>
      <div className="yellowline-Vr position-absolute line-27"></div>
      <div className="yellowline-Vr position-absolute line-28"></div>
      <div className="yellowline-Vr position-absolute line-29"></div>
      <div className="yellowline-Hr position-absolute line-30"></div>
      <div className="yellowline-Hr position-absolute line-31"></div>
      <div className="yellowline-Hr position-absolute line-32"></div>
      <div className="yellowline-Hr position-absolute line-33"></div>
      <div className="yellowline-Hr position-absolute line-34"></div>
      <div className="yellowline-Hr position-absolute line-35"></div>
      <div className="yellowline-Hr position-absolute line-36"></div>
      <div className="yellowline-Hr position-absolute line-37"></div>
      <div className="yellowline-Hr position-absolute line-38"></div>

      <div className="polygon-shape text-center position-absolute single-text-1">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "PC Firing",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "452BI1",
          }}
        />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "Silo-1",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452BI1_WI",
            useClass: "greenTxt mt-1",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="polygon-shape text-center position-absolute single-text-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Standby",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "452BI2",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "Silo-2",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452BI2_WI",
            useClass: "greenTxt mt-1",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="polygon-shape text-center position-absolute single-text-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Kiln Firing",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "482BI1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "Silo-3",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482BI1_WI",
            useClass: "greenTxt mt-1",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="polygon-shape text-center position-absolute single-text-4">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Silo-4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-01",
            label: "472BI1",
          }}
        />
      </div>
      <div className="position-absolute single-text-5">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "452BF1",
          }}
        />
        <div className="squareplustri mt-1"></div>
      </div>
      <div className="position-absolute single-text-6">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "452BF2",
          }}
        />
        <div className="squareplustri mt-1 p-2 text-center">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KL_452BF2")}`}
            label="KL_452BF2"
          />
        </div>
      </div>
      <div className="position-absolute single-text-7">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "482BF1",
          }}
        />
        <div className="squareplustri mt-1 text-center p-2">
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KL_482BF1")}`}
            label="KL_482BF1"
          />
        </div>
      </div>
      <div className="position-absolute single-text-8">
        <BlackContainer
          data={{
            label: "KL_472BF2_PT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_472BF2_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "472BF2",
          }}
        />
        <div className="squareplustri mt-1 text-center"></div>
      </div>
      <div className="img-113 position-absolute single-text-9"></div>
      <div className="img-113 position-absolute single-text-10"></div>
      <div className="img-113 position-absolute single-text-11"></div>
      <div className="border p-1 position-absolute single-text-12">
        <BlackContainer
          data={{
            label: "KL_452DQ_DR_PTA",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482DQ_DR_PTB",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482DQ_DR_DW",
            useClass: "greenTxt mt-1",
            unit: "°C",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-13">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mb-1",
            label: "452DQ2",
          }}
        />

        <BlackContainer
          data={{
            label: "KL_452DQ2_AGT_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ2_AGT_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ2_MC_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ2_MC_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ2_MT_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ2_MT_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ1_FT",
            useClass: "greenTxt mt-1",
            unit: "l/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-14">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mb-1",
            label: "482DQ1",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482DQ1_AGT_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482DQ1_AGT_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482DQ1_MC_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482DQ1_MC_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482DQ1_MT_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482DQ1_MT_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482DQ1_FT",
            useClass: "greenTxt mt-1",
            unit: "l/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="border p-1 position-absolute single-text-15">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1 mb-1",
            label: "452DQ1",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ1_AGT_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ1_AGT_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ1_MC_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ1_MC_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ1_MT_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ1_MT_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ1_FT",
            useClass: "greenTxt mt-1",
            unit: "l/min",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-16">
        <BlackContainer
          data={{
            label: "KL_452DQ2_FR",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ2_MC_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ2_MC_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ2_PT1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-17">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("KL_482BL5")}`}
          label="KL_482BL5"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "482BL5",
          }}
        />
      </div>
      <div className="position-absolute single-text-18">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("KL_452BL2")}`}
          label="KL_452BL2"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "452BL2",
          }}
        />
      </div>
      <div className="position-absolute single-text-19">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("KL_452BL3")}`}
          label="KL_452BL3"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "452BL3",
          }}
        />
      </div>
      <div className="position-absolute single-text-20">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("KL_452BL1")}`}
          label="KL_452BL1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "452BL1",
          }}
        />
      </div>
      <div className="position-absolute single-text-21">
        <div className="yellowline-Vr upArrow position-absolute"></div>
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("KL_472BL2")}`}
          label="KL_472BL2"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "472BL2",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_472BL2_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-22">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("KL_452FN1A")}`}
          label="KL_452FN1A"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "452FN1A",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("KL_452FN2")}`}
          label="KL_452FN2"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "452FN2",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452BF2_PT",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-24">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("KL_482FN1")}`}
          label="KL_482FN1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "482FN1",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482FN1II_B",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-25">
        <MotorCircleDigitalTag
          className={`line-circle digital-tag ${useColorStatus("KL_472FNJ")}`}
          label="KL_472FNJ"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "472FNJ",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-26">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "KL_452SG1"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "KL_452SG1"
          )}`}
          label="KL_452SG1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "452SG1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-27">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "KL_482SG1"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "KL_482SG1"
          )}`}
          label="KL_482SG1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "482SG1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-28">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "452VA1",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "KL_452VA1"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "KL_452VA1"
          )}`}
          label="KL_452VA1"
        />
      </div>
      <div className="d-flex position-absolute single-text-29">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "452VA4",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "KL_452VA4"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "KL_452VA4"
          )}`}
          label="KL_452VA4"
        />
        <MimicCaret
          parentClass="tringle-item ml-3"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "KL_452VA2"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "KL_452VA2"
          )}`}
          label="KL_452VA2"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "452VA2",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-30">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "452VA5",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "KL_452VA5"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "KL_452VA5"
          )}`}
          label="KL_452VA5"
        />
        <MimicCaret
          parentClass="tringle-item ml-3"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "KL_452VA3"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "KL_452VA3"
          )}`}
          label="KL_452VA3"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "452VA3",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-31">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-1",
            label: "482VA1",
          }}
        />
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "KL_482VA1"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "KL_482VA1"
          )}`}
          label="KL_482VA1"
        />
      </div>
      <div className="position-absolute single-text-32">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "KL_452BV5"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "KL_452BV5"
          )}`}
          label="KL_452BV5"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "452BV5",
          }}
        />
      </div>
      <div className="position-absolute single-text-33">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "KL_452BV4"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "KL_452BV4"
          )}`}
          label="KL_452BV4"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "452BV4",
          }}
        />
      </div>
      <div className="position-absolute single-text-34">
        <MimicCaret
          parentClass="tringle-item"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus(
            "KL_452BV6"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus(
            "KL_452BV6"
          )}`}
          label="KL_452BV6"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "452BV6",
          }}
        />
      </div>
      <div className="position-absolute single-text-35">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "BV1",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "KL_472BV1"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "KL_472BV1"
          )}`}
          label="KL_472BV1"
        />
      </div>
      <div className="position-absolute single-text-36">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "482BV6",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "KL_482BV6"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "KL_482BV6"
          )}`}
          label="KL_482BV6"
        />
      </div>
      <div className="position-absolute single-text-37">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "452BV2",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "KL_452BV2"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "KL_452BV2"
          )}`}
          label="KL_452BV2"
        />
      </div>
      <div className="position-absolute single-text-38">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "452BV3",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "KL_452BV3"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "KL_452BV3"
          )}`}
          label="KL_452BV3"
        />
      </div>
      <div className="position-absolute single-text-39">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "452BV1",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "KL_452BV1"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "KL_452BV1"
          )}`}
          label="KL_452BV1"
        />
      </div>
      <div className="position-absolute single-text-40">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "KL_452VA1A",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "KL_452VA1A"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "KL_452VA1A"
          )}`}
          label="KL_452VA1A"
        />
      </div>
      <div className="position-absolute single-text-41">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-1",
            label: "482VA1A",
          }}
        />
        <MimicCaret
          parentClass="d-flex tringle-item"
          firstCaretClass={`fa-solid fa-caret-right d-block digital-tag ${useCaretColorStatus(
            "KL_482VA1A"
          )}`}
          secondCaretClass={`fa-solid fa-caret-left d-block digital-tag ${useCaretColorStatus(
            "KL_482VA1A"
          )}`}
          label="KL_482VA1A"
        />
      </div>
      <div className="d-flex align-items-center position-absolute single-text-42">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("KL_472DQ1")}`}
          label="KL_472DQ1"
          text="M"
        />
        <div className="ml-2">
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mb-1 ml-3",
              label: "472DQ1",
            }}
          />
          <MotorCircleDigitalTag
            className={`square digital-tag ${useColorStatus("KL_472DQ1")}`}
            label="KL_472DQ1"
          />
          <BlackContainer
            data={{
              label: "KL_472DQ1_II",
              useClass: "greenTxt mt-1 ml-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className="d-flex position-absolute single-text-43">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("KL_472FM1")}`}
          label="KL_472FM1"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "472FM1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-44">
        <MotorCircleDigitalTag
          className={`circle-img digital-tag ${useFanImgTagsColorStatus(
            "KL_472RAA"
          )}`}
          label="KL_472RAA"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "472RAA",
          }}
        />
      </div>
      <div className="position-absolute single-text-45">
        <BlueContainerWithDynamicBorder
          useClass={`${useBorderTagsColorStatus("KL_452DG1")}`}
          isClickable={true}
          tagLabel="KL_452DG1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "452DG1",
          }}
        />
      </div>
      <div className="d-flex position-absolute single-text-46">
        <BlueContainerWithDynamicBorder
          useClass={`${useBorderTagsColorStatus("KL_472SG1")}`}
          isClickable={true}
          tagLabel="KL_472SG1"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-1",
            label: "SG1",
          }}
        />
      </div>
      <div className="position-absolute single-text-47">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("KL_452DQ1")}`}
          label="KL_452DQ1"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "452DQ1",
          }}
        />
      </div>
      <div className="position-absolute single-text-48">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("KL_452DQ2")}`}
          label="KL_452DQ2"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "452DQ2",
          }}
        />
      </div>
      <div className="position-absolute single-text-49">
        <MotorCircleDigitalTag
          className={`dot p-3 digital-tag ${useColorStatus("KL_482DQ1")}`}
          label="KL_482DQ1"
          text="M"
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "482DQ1",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-text-50">
        <BlueContainerWithDynamicBorder
          useClass={`${useBorderTagsColorStatus("PH_442SG3")}`}
          isClickable={true}
          tagLabel="PH_442SG3"
        />
        <BlueContainerWithDynamicBorder
          useClass={`${useBorderTagsColorStatus("PH_442SG4")}`}
          isClickable={true}
          tagLabel="PH_442SG4"
        />
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-text-51">
        <BlackContainer
          data={{
            label: "KL_482BL5_II",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452BL2_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452BL3_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452BL1_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-52">
        <BlackContainer
          data={{
            label: "KL_452FN1AII_B",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452BF1_PT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452BF1_DPT",
            useClass: "greenTxt mt-1",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-53">
        <BlackContainer
          data={{
            label: "KL_452DQ1_FR",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ1_MC_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ1_MC_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DQ1_PT1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-54">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "452BI2",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452BF2_PT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452BF2_DPT",
            useClass: "greenTxt mt-01",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-55">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "482BF1",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482BF1_PT",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482BF1_DPT",
            useClass: "greenTxt mt-01",
            unit: "mmWC",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-56">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "472LC1",
          }}
        />
        <BlackContainer
          data={{
            label: "CO_472LC1_WI",
            useClass: "greenTxt mt-01",
            unit: "t",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-57">
        <BlackContainer
          data={{
            label: "KL_COAL_FIRING1_PT1",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_COAL_FIRING1_PT2",
            useClass: "greenTxt mt-01",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_COAL_FIRING2_PT3",
            useClass: "greenTxt mt-01",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_COAL_FIRING2_PT4",
            useClass: "greenTxt mt-01",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_COAL_FIRING3_PT5",
            useClass: "greenTxt mt-01",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_COAL_FIRING3_PT6",
            useClass: "greenTxt mt-01",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_COAL_FIRING4_PT7",
            useClass: "greenTxt mt-01",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_COAL_FIRING4_PT8",
            useClass: "greenTxt mt-01",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-58">
        <BlackContainer
          data={{
            label: "KL_452DG1II_B",
            useClass: "greenTxt",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452DG1_ZT",
            useClass: "greenTxt mt-01",
            unit: "%",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="text-center position-absolute single-text-59">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "COAL FIRING GATES AIR PRESSURE",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482DQ1_PT2",
            useClass: "greenTxt mt-01",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-60">
        <BlackContainer
          data={{
            label: "KL_482BL5_PT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482BL5II_B",
            useClass: "greenTxt mt-01",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_452BL2_PT",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-61">
        <BlackContainer
          data={{
            label: "KL_452BL2II_B",
            useClass: "greenTxt ml-2",
            unit: "A",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "KL_452BL3_PT",
            useClass: "greenTxt mt-2",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-62">
        <BlackContainer
          data={{
            label: "KL_452BL1_PT",
            useClass: "greenTxt",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />

        <BlackContainer
          data={{
            label: "KL_452BL1_II",
            useClass: "greenTxt mt-4",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
      </div>
      <div className="position-absolute single-text-63">
        <BlackContainer
          data={{
            label: "KL_482DQ1_FR",
            useClass: "greenTxt",
            unit: "t/h",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482DQ1_MC_II",
            useClass: "greenTxt mt-1",
            unit: "A",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482DQ1_MC_SI",
            useClass: "greenTxt mt-1",
            unit: "rpm",
            unitColor: "unitColor",
          }}
        />
        <BlackContainer
          data={{
            label: "KL_482DQ1_PT1",
            useClass: "greenTxt mt-1",
            unit: "bar",
            unitColor: "unitColor",
          }}
        />
      </div>

      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-64",
          label: "472BI1",
        }}
      />
      <div className="text-center position-absolute single-text-65">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "From Coal Mill",
          }}
        />
        <div className="yellowline-Vr downArrow position-relative"></div>
      </div>

      <div className="text-center position-absolute single-text-66">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "From Coal Mill",
          }}
        />

        <div className="yellowline-Vr downArrow position-relative"></div>
      </div>

      <div className="text-center position-absolute single-text-67">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "From Coal Mill",
          }}
        />

        <div className="yellowline-Vr downArrow position-relative"></div>
      </div>

      <div className="text-center position-absolute single-text-68">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "From Coal Mill",
          }}
        />

        <div className="yellowline-Vr downArrow position-relative"></div>
      </div>
      <div className="d-flex position-absolute single-text-69">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "PC Firing Standby for 452DQ1",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center ml-3",
            label: "Kiln Firing Standby for 482DQ1",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-70",
          label: "To WHRS",
        }}
      />
      <div className="d-flex flex-column justify-content-between position-absolute single-text-71">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "0% TOWARDS PYROCLONE 2.5 FLOOR",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "100% TOWARDS LOW NOX BOTTOM",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-between position-absolute single-text-72">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "TO PYROCLONE Burner",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark text-center",
            label: "TO Low Nox Burner",
          }}
        />
      </div>
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-73",
          label: "452BI1",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark position-absolute single-text-74",
          label: "To Kiln Burner",
        }}
      />
      <div className="position-absolute single-text-75">
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "Multicor Dryer Tank A pressure",
        }}
      />
      <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "Multicor Dryer Tank B pressure",
        }}
      />
         <TextContainerWithWrapWord
        data={{
          useClass: "text-dark mt-1",
          label: "Dew Point Temperature ",
        }}
      />
      </div>
    </div>
  );
};

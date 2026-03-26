import {
  TextContainerWithWrapWord,
  ProgressBarMimic,
  BlueContainerWithDynamicBorder,
  BlackContainer,
  PipeWithCircles,
  TransparentBoxWithGate,
  MotorCircleDigitalTag,
  MimicCaret,
} from "../../../../index";

import {
  useColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useGateTagsColorStatusForNewPlantScreens,
  useFanImgTagsColorStatus,
  useBorderTagsColorStatus,
  useCaretColorStatus,
} from "../../../../../utils";

export const BagHouseHirmiL2 = () => {
  return (
    <div className="BagHouseHirmiL2 w-100 h-100 position-relative">
      <div className="pipeHr  position-absolute single-text-1 d-flex justify-content-around align-items-center"></div>
      <div className=" position-absolute single-text-2 d-flex">
        <div className="triangle-with-squares text-center">
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="triangle-with-squares ml">
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="triangle-with-squares ml">
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="triangle-with-squares ml">
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="triangle-with-squares ml">
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="triangle-with-squares ml">
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="triangle-with-squares ml">
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="triangle-with-squares ml">
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="triangle-with-squares ml">
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
        <div className="triangle-with-squares ml">
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        </div>
      </div>
      <div className="position-absolute single-text-3 d-flex">
        <div className="text-center">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("PH_422RA1")}`} label="PH_422RA1" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "422RA1",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("PH_422RA6")}`} label="PH_422RA6" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RA6",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("PH_422RA5")}`} label="PH_422RA5" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RA5",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("PH_422RA4")}`} label="PH_422RA4" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RA4",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("PH_422RA3")}`} label="PH_422RA3" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RA3",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("PH_422RA2")}`} label="PH_422RA2" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RA2",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("PH_422RAB")}`} label="PH_422RAB" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RAB",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("PH_422RAA")}`} label="PH_422RAA" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RAA",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("PH_422RA9")}`} label="PH_422RA9" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RA9",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("PH_422RA8")}`} label="PH_422RA8" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RA8",
            }}
          />
        </div>
        <div>
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("PH_422RA7")}`} label="PH_422RA7" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1",
              label: "RA7",
            }}
          />
        </div>
      </div>
      <div className="position-absolute single-text-4">
      <MotorCircleDigitalTag className={`square position-absolute digital-tag mx-auto ${useColorStatus("PH_422CV1")}`} label="PH_422CV1" text="422CV1" />
      <BlackContainer
            data={{
              label: "PH_422CV1II_B",
              useClass: "greenTxt mt-4 ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
</div>
<div className="position-absolute single-text-5">
      <MotorCircleDigitalTag className={`square position-absolute digital-tag mx-auto ${useColorStatus("PH_422CV2")}`} label="PH_422CV2" text="422CV2" />
      <BlackContainer
            data={{
              label: "PH_422CV2II_B",
              useClass: "greenTxt mt-4 ml-auto mr-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
</div>
<div className="position-absolute single-text-6">
      <MotorCircleDigitalTag className={`square position-absolute digital-tag mx-auto ${useColorStatus("PH_422CV3")}`} label="PH_422CV3" text="422CV3" />
      <BlackContainer
            data={{
              label: "PH_422CV3II_B",
              useClass: "greenTxt mt-4 mx-auto ml-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
</div>

      <MotorCircleDigitalTag className={`square position-absolute single-text-7 digital-tag mx-auto ${useColorStatus("PH_422CV4")}`} label="PH_422CV4" text="422CV4" />
      <MotorCircleDigitalTag className={`square position-absolute single-text-8 digital-tag mx-auto ${useColorStatus("PH_442CV1")}`} label="PH_442CV1" text="422CV1" />
<div className="position-absolute single-text-9">
      <BlackContainer
            data={{
              label: "PH_422FN1_SI",
              useClass: "greenTxt",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
             <BlackContainer
            data={{
              label: "PH_422FN1_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="position-absolute single-text-10 text-center">
        <div>
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("PH_422FN1")}`} label="PH_422FN1" />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>

        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "422FN1",
          }}
        />
      </div>
      <div className="position-absolute single-text-11">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "PH_422SD3",
            squareClass: `${useBorderTagsColorStatus("PH_422SD3")}`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "422SD3",
          }}
        />
      </div>
      <div className="position-absolute single-text-12 d-flex">
        <div className="mt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "From Raw",
          }}
        />
             <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Mill 1",
          }}
        />
        </div>
      <div>
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "422LD1",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`mx-auto mt-2 mr-4 ${useBorderTagsColorStatus("PH_422LD1")}`} isClickable={true} tagLabel="PH_422LD1" />

       
      </div>
        <div className="mt-3">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "PH_422SD1",
            squareClass: `${useBorderTagsColorStatus("PH_422SD1")}`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "422SD1",
          }}
        />
        </div>
      </div>
      <div className="position-absolute single-text-13 d-flex">
        <div className="mt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ",
            label: "From Raw",
          }}
        />
             <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Mill 2",
          }}
        />
        </div>
      <div>
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "422LD2",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`mx-auto mt-2 mr-4 ${useBorderTagsColorStatus("PH_422LD2")}`} isClickable={true} tagLabel="PH_422LD2" />

       
      </div>
        <div className="mt-3">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "PH_422SD2",
            squareClass: `${useBorderTagsColorStatus("PH_422SD2")}`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "422SD2",
          }}
        />
        </div>
      </div>
      <div className="position-absolute single-text-14">
      <BlackContainer
            data={{
              label: "PH_422FN1_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
             <BlackContainer
            data={{
              label: "PH_422LD3_ZT",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="position-absolute single-text-15">
          <div className="d-flex">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "422LD3",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`mx-auto mt-2 mr-4 ${useBorderTagsColorStatus("PH_422LD3")}`} isClickable={true} tagLabel="PH_422LD3" />

       
      </div>
      <div className="d-flex mt-4">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "422LD4",
          }}
        />
        <BlueContainerWithDynamicBorder useClass={`mx-auto mt-2 mr-4 ${useBorderTagsColorStatus("PH_422LD4")}`} isClickable={true} tagLabel="PH_422LD4" />

       
      </div>
      <BlackContainer
            data={{
              label: "PH_422LD4_ZT",
              useClass: "greenTxt mt-4 ml-5",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="position-absolute single-text-16 d-flex">
 
        <BlueContainerWithDynamicBorder useClass={`mx-auto mr-4 ${useBorderTagsColorStatus("PH_442LD4")}`} isClickable={true} tagLabel="PH_442LD4" />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark p-1",
            label: "422LD4",
          }}
        />
      </div>      
      <div className="position-absolute single-text-17 ">
 <div className="d-flex">
 <BlueContainerWithDynamicBorder useClass={`mx-auto mr-4 ${useBorderTagsColorStatus("PH_442LD3")}`} isClickable={true} tagLabel="PH_442LD3" />

 <TextContainerWithWrapWord
   data={{
     useClass: "text-dark p-1",
     label: "422LD3",
   }}
 />
 </div>
 <div className="d-flex ml-2">
 <MotorCircleDigitalTag className={`square position-absolute digital-tag mx-auto ${useColorStatus("PH_442SD4")}`} label="PH_442SD4" />

        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "422SD4",
          }}
        />
 </div>
</div>
<div className="position-absolute single-text-18 d-flex">
<BlackContainer
            data={{
              label: "PH_442FN1_PT03",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <div  className="ml-3">
             <TextContainerWithWrapWord
   data={{
     useClass: "text-dark p-1",
     label: "RABH SEQ RUN HRS",
   }}
 />
               <table>
          <tr>
            <td> 
              <TextContainerWithWrapWord
   data={{
     useClass: "text-dark p-1",
     label: "TODAY",
   }}
 />
 </td>
 <td>
 <BlackContainer
            data={{
              label: "RABH_SEQUENCE_TD_RUN_HR",
              useClass: "greenTxt mt-2",
              unit: "h",
              unitColor: "unitColor",
            }}
          />
 </td>
            </tr>
            <tr>
              <td>
              <TextContainerWithWrapWord
   data={{
     useClass: "text-dark p-1",
     label: "YESTERDAY",
   }}
 />
              </td>
              <td>
              <BlackContainer
            data={{
              label: "RABH_SEQUENCE_YD_RUN_HR",
              useClass: "greenTxt mt-2",
              unit: "h",
              unitColor: "unitColor",
            }}
          /> 
              </td>
            </tr>
            </table>
            </div>

</div>
<div className="position-absolute single-text-19">
  <div className="d-flex">
<BlackContainer
            data={{
              label: "PH_422BF1_CH1_DPT",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_422BF1_CH6_DPT",
              useClass: "greenTxt mt-2 ml-5",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="d-flex">
<BlackContainer
            data={{
              label: "PH_422BF1_CH2_DPT",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_422BF1_CH7_DPT",
              useClass: "greenTxt mt-2 ml-5",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="d-flex">
<BlackContainer
            data={{
              label: "PH_422BF1_CH3_DPT",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_422BF1_CH8_DPT",
              useClass: "greenTxt mt-2 ml-5",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="d-flex ">
<BlackContainer
            data={{
              label: "PH_422BF1_CH4_DPT",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_422BF1_CH9_DPT",
              useClass: "greenTxt mt-2 ml-5",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="d-flex">
<BlackContainer
            data={{
              label: "PH_422BF1_CH5_DPT",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_422BF1_CHA_DPT",
              useClass: "greenTxt mt-2 ml-5",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          </div>
          </div>
          <div className="position-absolute single-text-20 d-flex">
            <div>
<BlackContainer
            data={{
              label: "PH_422BF1_TT1",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_422BF1_PT1",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_422BF1_PT4",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_422BF1_PT6",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_422BF1_PT3",
              useClass: "greenTxt mt-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="mt-5">
          <BlackContainer
            data={{
              label: "PH_422BF1_PT2",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
              <BlackContainer
            data={{
              label: "PH_422BF1_PT7",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
             <BlackContainer
            data={{
              label: "PH_422BF1_PT5",
              useClass: "greenTxt mt-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          </div>
          </div>
          <div className="position-absolute single-text-21">
          <BlackContainer
            data={{
              label: "PH_422BF1_DPT",
              useClass: "greenTxt mx-auto",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          <div className="box-1 mt-2">
          <div className="mt-2 d-flex">
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Bag House Seq. Motor",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag ml-3 ${useColorStatus("RABH_DP_MODE")}`} label="RABH_DP_MODE" text="M" />
          </div>
          <div className="mt-2 d-flex">
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Firing Sequence",
          }}
        />
    <BlackContainer
            data={{
              label: "PH_RABH_SEQ",
              useClass: "greenTxt mx-auto",
              unit: "",
              unitColor: "unitColor",
            }}
          />         
          </div>
          </div>
          </div>
          <div className="position-absolute single-text-22 text-center">
        <div>
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("PH_422FN2")}`} label="PH_422FN2" />
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>

        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "422FN2",
          }}
        />
      </div>
      <div className="position-absolute single-text-23">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "PH_422SD4",
            squareClass: `${useBorderTagsColorStatus("PH_422SD4")}`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "422SD4",
          }}
        />
        <BlackContainer
            data={{
              label: "PH_422BF1_TT2",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
      </div>
      <div className="position-absolute single-text-24">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ml-5",
            label: "422BE1",
          }}
        />
      <MotorCircleDigitalTag className={`dot digital-tag ml-5 mt-2 ${useColorStatus("PH_422BE1_M01")}`} label="PH_422BE1_M01" text="M" />
      <MotorCircleDigitalTag className={`dot digital-tag ml-5 mt-2 ${useColorStatus("PH_422BE1_M02")}`} label="PH_422BE1_M02" text="M" />

      <BlackContainer
            data={{
              label: "PH_422FN2_II",
              useClass: "greenTxt mt-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
              <BlackContainer
            data={{
              label: "PH_422FN2_JI",
              useClass: "greenTxt mt-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
              <BlackContainer
            data={{
              label: "PH_422FN2_SI",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "PH_422SK1_SK",
              useClass: "greenTxt mt-5",
              unit: "mg/m3",
              unitColor: "unitColor",
            }}
          />
             <BlackContainer
            data={{
              label: "PH_422SK1_TT",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "PH_422SK1_PT",
              useClass: "greenTxt mt-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "PH_422SK1_FT",
              useClass: "greenTxt mt-2",
              unit: "m3/h",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "PH_422AM1_SOX",
              useClass: "greenTxt mt-2",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "PH_422AM1_O2",
              useClass: "greenTxt mt-2",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "PH_422AM1_NOX",
              useClass: "greenTxt mt-2",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "PH_422CV3AI01",
              useClass: "greenTxt mt-5",
              unit: "s",
              unitColor: "unitColor",
            }}
          />
      </div>
      <div className="position-absolute single-text-25 pipe">
      </div>
      <div className="position-absolute single-text-26 containerImage">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mx-auto",
            label: "422BL1",
          }}
        />
    <div className="yellowline-Vr downArrow position-absolute line-1"></div>

      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div className="text-center d-flex">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("PH_422RAC")}`} label="PH_422RAC" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "422RAC",
            }}
          />
        </div>
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>

        </div>
        <div className="position-absolute single-text-28 d-flex">
          <div>
        <BlackContainer
            data={{
              label: "PH_422BL2_PT",
              useClass: "greenTxt ",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
              <BlackContainer
            data={{
              label: "PH_422RAC_II",
              useClass: "greenTxt mt-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          </div>
          <BlackContainer
            data={{
              label: "PH_422BI1_WI",
              useClass: "greenTxt mt-2 ml-3",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="position-absolute single-text-29">
        <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3",
              label: "422BF2",
            }}
          />
        <div className="squareplustri text-center pt-3"></div>
        <div className="d-flex mt-1 ml-1 text-center">
          <MotorCircleDigitalTag className={`circle-img mt-2 digital-tag ${useFanImgTagsColorStatus("PH_422RAD")}`} label="PH_422RAD" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-3 ml-2",
              label: "422RAD",
            }}
          />
          <div className="yellowline-Vr  downArrow position-absolute line-1"></div>
          <div className="yellowline-Hr  position-absolute line-2"></div>
          <div className="yellowline-Vr upArrow position-absolute line-3"></div>
        </div>
      </div>
      <div className="position-absolute single-text-30 text-center">
        <div>
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("PH_422FN3")}`} label="PH_422FN3" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "422FN3",
          }}
        />
      </div>
      <div className="position-absolute single-text-31 d-flex">
      <BlackContainer
            data={{
              label: "PH_422BF1_PT5",
              useClass: "greenTxt mr-4",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <div>
            <BlackContainer
            data={{
              label: "PH_422BE1I01",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "PH_422BE1J01",
              useClass: "greenTxt mt-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "PH_422BF2_PT",
              useClass: "greenTxt mt-4 ml-4",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
              <BlackContainer
            data={{
              label: "PH_422BF2_DPT",
              useClass: "greenTxt mt-2 ml-4",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
             <BlackContainer
            data={{
              label: "PH_422BL1_PT",
              useClass: "greenTxt mt-4 ml-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          </div>
      </div>
      <MotorCircleDigitalTag className={`square position-absolute single-text-32 digital-tag mx-auto ${useColorStatus("PH_422CV5")}`} label="PH_422CV5" text="422CV5" />
       <div className="position-absolute single-text-33 d-flex">
        <div className="mt-2">
        <div>
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("PH_422BL1")}`} label="PH_422BL1" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "422BL1",
          }}
        />
        </div>
       <div>
       <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-3",
            label: "422BV1",
          }}
        />
        <MimicCaret
          parentClass="tringle-item mt-2"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus("PH_422BV1")}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus("PH_422BV1")}`}
          label="PH_422BV1"
        />
           
      </div>
       </div>
       <div className="position-absolute single-text-34 d-flex">
        <div className="mt-2">
        <div>
          <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("PH_422BL2")}`} label="PH_422BL2" />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "422BL2",
          }}
        />
        </div>
       <div>
       <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mb-3",
            label: "422BV2",
          }}
        />
        <MimicCaret
          parentClass="tringle-item mt-2"
          firstCaretClass={`fa-solid fa-caret-down d-block digital-tag ${useCaretColorStatus("PH_422BV2")}`}
          secondCaretClass={`fa-solid fa-caret-up d-block digital-tag ${useCaretColorStatus("PH_422BV2")}`}
          label="PH_422BV2"
        />
           
      </div>
       </div>
       <div className="position-absolute single-text-35 d-flex">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "PH_422SG1",
            squareClass: `${useBorderTagsColorStatus("PH_422SG1")}`,
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "422SG1",
          }}
        />
      </div>
      <div className="position-absolute single-text-36 d-flex">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2 mr-2",
            label: "422SG1",
          }}
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "PH_442SG1",
            squareClass: `${useBorderTagsColorStatus("PH_442SG1")}`,
          }}
        />
   
      </div>
      <div className="position-absolute single-text-37 containerImage">
      <BlackContainer
            data={{
              label: "PH_442FN1_PT02",
              useClass: "greenTxt mt-2 ",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
    <div className="yellowline-Vr downArrow position-absolute line-1"></div>

      </div>
      <div className="position-absolute single-text-38 d-flex">
        <div className="text-center d-flex">
          <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("PH_442RA1")}`} label="PH_442RA1" />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark mt-1 ml-2",
              label: "442RA1",
            }}
          />
        </div>
        </div>
        <div className="position-absolute single-text-39 ">
 <div className="d-flex ml-2">
 <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-3",
            label: "422SG2",
          }}
        />
 <MotorCircleDigitalTag className={`square digital-tag  ${useColorStatus("PH_422SG2")}`} label="PH_422SG2" />


 </div>
</div>
<TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-40",
            label: "To 392AS3",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-41",
            label: "To 392AS4",
          }}
        />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark position-absolute single-text-42",
            label: "To 412ASD",
          }}
        />
        <div className="triangle-with-squares position-absolute single-text-43"></div>
<div className="truck position-absolute single-text-44"></div>
<div className="position-absolute single-text-45">
  <div className="brick-cooler-img"></div>
  <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "SK01",
          }}
        />
</div>
      <div className="yellowline-Vr downArrow position-absolute line-1"></div>
      <div className="yellowline-Vr downArrow position-absolute line-2"></div>
      <div className="yellowline-Vr downArrow position-absolute line-3"></div>
      <div className="yellowline-Vr downArrow position-absolute line-4"></div>
      <div className="yellowline-Hr  position-absolute line-5"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-6"></div>
      <div className="yellowline-Vr  position-absolute line-7"></div>
      <div className="yellowline-Vr  position-absolute line-8"></div>
      <div className="yellowline-Hr  position-absolute line-9"></div>
      <div className="yellowline-Hr  position-absolute line-10"></div>
      <div className="yellowline-Hr  position-absolute line-11"></div>
      <div className="yellowline-Vr downArrow position-absolute line-12"></div>
      <div className="yellowline-Vr downArrow position-absolute line-13"></div>
      <div className="yellowline-Vr upArrow position-absolute line-14"></div>
      <div className="yellowline-Vr upArrow position-absolute line-15"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-16"></div>
      <div className="yellowline-Hr  position-absolute line-17"></div>
      <div className="yellowline-Vr downArrow position-absolute line-18"></div>
      <div className="yellowline-Hr  position-absolute line-19"></div>
      <div className="yellowline-Hr  position-absolute line-20"></div>
      <div className="yellowline-Vr  position-absolute line-21"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-22"></div>
      <div className="yellowline-Hr rightarrow position-absolute line-23"></div>
      <div className="yellowline-Vr downArrow position-absolute line-24"></div>
      <div className="yellowline-Vr downArrow position-absolute line-25"></div>
      <div className="yellowline-Vr downArrow position-absolute line-26"></div>
      <div className="yellowline-Vr downArrow position-absolute line-27"></div>

     
    </div>
  );
};

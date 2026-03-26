import {
  TextContainerWithWrapWord,
  BlackContainer,
  PipeWithCircles,
  MotorCircleDigitalTag,
  BlueContainerWithDynamicBorder,
  TransparentBoxWithGate,
  ProgressBarMimic,
  MimicCaret,
} from "../../../../index";
import {
  useBVTagsColorStatusForNewPlantScreens,
  useColorStatus,
  useBorderTagsColorStatus,
  useCaretColorStatus,
  useDampersValveTagsColorStatusForNewPlantScreens,
  useFanImgTagsColorStatus,
  useGateTagsColorStatusForNewPlantScreens,
  useMotorTagsColorStatusForNewPlantScreens,
} from "../../../../../utils";

export const CoalMillHirmiL2 = () => {
  return (
    <div className="CoalMillHirmiL2 w-100 h-100 position-relative">
              <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-2 position-absolute pipe-1 ${useColorStatus("CO_L22BC3")} `} label="CO_L22BC3" text="L22BC3" />
              <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-2 position-absolute pipe-2 ${useColorStatus("CO_L22BC4")} `} label="CO_L22BC4" text="L22BC4" />
              <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-2 position-absolute pipe-3 ${useColorStatus("CO_L22BC5")} `} label="CO_L22BC5" text="L22BC5" />
              <PipeWithCircles parentDivClass="hpipecircle position-absolute mt-1 pipe-4"
        text={{ useClass: "text-dark mx-auto", label: "L42BC1" }}
      />
              <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-2 position-absolute pipe-5 ${useColorStatus("CO_L62CV1")} `} label="CO_L62CV1" text="L62CV1" />
              <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-2 position-absolute pipe-6 ${useColorStatus("CO_L92SC1")} `} label="CO_L92SC1" text="L92SC1" />
              <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-2 position-absolute pipe-7 ${useColorStatus("CO_L92SC2")} `} label="CO_L92SC2" text="L92SC2" />
              <div className="position-absolute pipe-8">
              <BlackContainer
            data={{
              label: "CO_L92SC3II_B",
              useClass: "greenTxt ml-auto",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
              <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-2 ${useColorStatus("CO_L92SC3")} `} label="CO_L92SC3" text="L92SC3" />
              </div>
              <div className="position-absolute pipe-9">
              <BlackContainer
            data={{
              label: "CO_L92SC4II_B",
              useClass: "greenTxt ml-auto",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
              <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-2 ${useColorStatus("CO_L92SC4")} `} label="CO_L92SC4" text="L92SC4" />
              </div>
              <div className="position-absolute pipe-10 d-flex">
        
              <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-2 ${useColorStatus("CO_L92SC5")} `} label="CO_L92SC5" text="L92SC5" />
              <BlackContainer
            data={{
              label: "CO_L92SC5II_B",
              useClass: "greenTxt ml-2 mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
              </div>
              <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-2 position-absolute pipe-11 ${useColorStatus("CO_L92SC6")} `} label="CO_L92SC6" text="L92SC6" />
              <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-2 position-absolute pipe-12 ${useColorStatus("CO_L92SC7")} `} label="CO_L92SC7" text="L92SC7" />


  
    
           <div className="position-absolute single-text-1 text-center d-flex">
            <div className="d-flex">
            <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L22BC1",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CO_L22BC1")}`} label="CO_L22BC1" text="M"/>
        </div>
        <div className="d-flex ml-2">
            <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "L22BC2",
          }}
        />
        <MotorCircleDigitalTag className={`dot digital-tag ${useColorStatus("CO_L22BC2_BSSL1")}`} label="CO_L22BC2_BSSL1" text="M"/>
     
        </div>
        <BlackContainer
            data={{
              label: "CO_L22BC1II_B",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
      </div>
 
          <div className="single-text-2 position-absolute d-flex">
        <div className="d-flex">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "CO_L22DG1",
            squareClass: `${useBorderTagsColorStatus("CO_L22DG1")}`,
          }}
        />
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-2",
            label: "L22DG1",
          }}
        />
        </div>
        <div className="ml-3">
        <BlackContainer
            data={{
              label: "CO_L22BC4II_B",
              useClass: "greenTxt ml-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L22BC4JI_B",
              useClass: "greenTxt ml-2 mt-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
        </div>
        </div>
        <div className="single-text-3 position-absolute d-flex">
          <div>
        <BlackContainer
            data={{
              label: "CO_L42HP1_WI_B",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage mt-2 text-center">
          <ProgressBarMimic label="CO_L42HP1_WI_B"/>
          <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CO_L42HP1_LS1")}`}
          label="CO_L42HP1_LS1"
          text="L"
        />
            <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "L42-HP1",
          }}
        />
         <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Wash Coal",
          }}
        />
           <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "(Indigenous)",
          }}
        />
          </div>
          <div className="d-flex">
          <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CO_L42VI1")}`}
          label="CO_L42VI1"
          text="M"
        />
                <div className="yellowline-Vr downArrow position-absolute line-1"></div>
                <div className="yellowline-Vr downArrow position-absolute line-2"></div>

          </div>
          <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-1 position-absolute ${useColorStatus("CO_L42WF1")} `} label="CO_L42WF1" text="" />

        <BlackContainer
            data={{
              label: "CO_L42WFF11",
              useClass: "greenTxt mt-4",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42WF1_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42WF1_FR",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42WF1_SI",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div>
        <BlackContainer
            data={{
              label: "CO_L42HP2_WI_B",
              useClass: "greenTxt",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          <div className="containerImage mt-2 text-center">
     
            <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pt-2",
            label: "L42-HP2",
          }}
        />
         <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Pet Coke",
          }}
        />
          </div>
          <div className="d-flex">
          <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CO_L42VI2")}`}
          label="CO_L42VI2"
          text="M"
        />
                <div className="yellowline-Vr downArrow position-absolute line-1"></div>
                <div className="yellowline-Vr downArrow position-absolute line-2"></div>

          </div>
          <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-1 position-absolute ${useColorStatus("CO_L42WF2")} `} label="CO_L42WF2" text="" />
        <BlackContainer
            data={{
              label: "CO_L42WFF12",
              useClass: "greenTxt mt-4",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42WF2_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42WF2_FR",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42WF2_SI",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="mt-3">
        {/* <BlackContainer
            data={{
              label: "CO_L42HP3_WI_B",
              useClass: "greenTxt",
              unit: "t1",
              unitColor: "unitColor",
            }}
          /> */}
          <div className="containerImage mt-2 text-center">
     
            <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pt-2",
            label: "L42-HP2",
          }}
        />
         <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "Pet Coke",
          }}
        />
          </div>
          <div className="d-flex">
          <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CO_L42VI3")}`}
          label="CO_L42VI3"
          text="M"
        />
                <div className="yellowline-Vr downArrow position-absolute line-1"></div>
                <div className="yellowline-Vr downArrow position-absolute line-2"></div>

          </div>
          <MotorCircleDigitalTag className={`square digital-tag mx-auto mt-1 position-absolute ${useColorStatus("CO_L42WF3")} `} label="CO_L42WF3" text="" />

        <BlackContainer
            data={{
              label: "CO_L42WFF13",
              useClass: "greenTxt mt-4",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42WF3_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42WF3_FR",
              useClass: "greenTxt mt-2",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42WF3_SI",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          </div>

        </div>
        <div className="single-text-4 position-absolute">
          <div className="containerImage mt-2 text-center">
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark pt-2",
            label: "L62-Bl1",
          }}
        />
          <BlackContainer
            data={{
              label: "CO_L62BI1_WI",
              useClass: "greenTxt mt-2",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>

        </div>
        <div className="single-text-5 position-absolute">
        <div className="d-flex">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "CO_L62SG3",
            squareClass: `${useBorderTagsColorStatus("CO_L62SG3")}`,
          }}
        />
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-2",
            label: "L62SG3",
          }}
        />
        </div>
     
        </div>
        <div className="single-text-6 position-absolute d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-3",
            label: "Calibration",
          }}
        />
        <div>
        <BlackContainer
            data={{
              label: "CO_L42MD1_X92AI01",
              useClass: "greenTxt",
              unit: "sec",
              unitColor: "unitColor",
            }}
          />
              <BlackContainer
            data={{
              label: "CO_L92RA_X93AI01",
              useClass: "greenTxt mt-2",
              unit: "sec",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="mt-2 ml-5">
        <BlackContainer
            data={{
              label: "CO_L92RA_X92AI01",
              useClass: "greenTxt",
              unit: "sec",
              unitColor: "unitColor",
            }}
          />
              <BlackContainer
            data={{
              label: "CO_L42MD1_X92AI01",
              useClass: "greenTxt mt-2",
              unit: "sec",
              unitColor: "unitColor",
            }}
          />
        </div>
        </div>
        <div className="text-center position-absolute single-text-7 box-1 d-flex">
     <div>
      <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus("CODIAG_CO_L42PU1")}`}
            label="CODIAG_CO_L42PU1"
          />
           <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "L42PU1",
          }}
        />
        </div>
        <div>
      <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus("CO_L42PU2")}`}
            label="CO_L42PU2"
          />
           <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "L42PU1",
          }}
        />
        </div>
      </div>
      <div className="text-center position-absolute single-text-8 box-1 d-flex">
      <div>
      <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus("CO_L42PU3")}`}
            label="CO_L42PU3"
          />
           <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mx-auto",
            label: "L42PU3",
          }}
        />
        </div>
        <div className="box-1">
          <div className="d-flex mr-2">
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Tention Pr",
          }}
        />
         <BlackContainer
            data={{
              label: "CO_L42HT1_PT1",
              useClass: "greenTxt ml-auto ml-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="d-flex mt-2 mr-2">
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Lifting Pr",
          }}
        />
         <BlackContainer
            data={{
              label: "CO_L42HT1_PT2",
              useClass: "greenTxt ml-auto ml-3",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="d-flex mt-2 mr-2">
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "Avg Rir Postition",
          }}
        />
         <BlackContainer
            data={{
              label: "CO_L42_HT1_AVGPOS",
              useClass: "greenTxt ml-auto ml-3",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          </div>
        </div>
        <div className="box-1">
          <div className="d-flex mr-2">
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "R1",
          }}
        />
         <BlackContainer
            data={{
              label: "CO_L42HT1_ZT01",
              useClass: "greenTxt ml-auto ml-3",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="d-flex mt-2 mr-2">
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "R2",
          }}
        />
         <BlackContainer
            data={{
              label: "CO_L42HT1_ZT02",
              useClass: "greenTxt ml-auto ml-3",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="d-flex mt-2 mr-2">
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "R3",
          }}
        />
         <BlackContainer
            data={{
              label: "CO_L42HT1_ZT03",
              useClass: "greenTxt ml-auto ml-3",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          </div>
        </div>
        <div className="d-flex mr-2">
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark",
            label: "H1",
          }}
        />
         <BlackContainer
            data={{
              label: "CO_HYD_TENSION_GRPSP03",
              useClass: "greenTxt ml-auto ml-3",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          </div>
        </div>
        <div className="single-text-9 position-absolute">
        <BlackContainer
            data={{
              label: "CO_L22BF3_DPT",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "CO_L22BF3_PT1",
              useClass: "greenTxt mt-5",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L22BC5II_B",
              useClass: "greenTxt mt-5",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "CO_L22BC5JI_B",
              useClass: "greenTxt mt-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "CO_L42HP3_WI_B",
              useClass: "greenTxt mt-5 ml-4",
              unit: "t",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "CO_L42BC1II_B",
              useClass: "greenTxt mt-5 ml-4",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="bigContainer single-text-10 position-absolute d-flex align-items-center justify-content-cente">
          <div className="mx-auto">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-3",
            label: "L42KM1",
          }}
        />
        <BlackContainer
            data={{
              label: "CO_L42KM1_PT2",
              useClass: "greenTxt mt-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
             <BlackContainer
            data={{
              label: "CO_L42KM1_PT1_PT2",
              useClass: "greenTxt mt-5",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42_HT1_AVGPOS",
              useClass: "greenTxt mt-1",
              unit: "mm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CO_L42MD1_GB_XT1",
              useClass: "greenTxt mt-4",
              unit: "mm/s",
              unitColor: "unitColor",
            }}
          />
          </div>
        </div>
        <div className=" single-text-11 position-absolute d-flex">
          <div className="mt-4">
        <BlackContainer
            data={{
              label: "CO_L42FN1_2_PT1",
              useClass: "greenTxt",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42FN1_2_PT2",
              useClass: "greenTxt mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42FN1_2_PT3",
              useClass: "greenTxt mt-2",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div>
          <BlackContainer
            data={{
              label: "CO_L42MD1_BTE2",
              useClass: "greenTxt ",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CO_L92RA_X91AI01",
              useClass: "greenTxt mt-4",
              unit: "sec",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "CO_L92RA_X92AI01",
              useClass: "greenTxt mt-2",
              unit: "sec",
              unitColor: "unitColor",
            }}
          />
          </div>
        </div>
        <div className=" single-text-12 position-absolute">
        <BlackContainer
            data={{
              label: "CO_L42KM1_TT2",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "CO_L42KM1_PT3",
              useClass: "greenTxt mt-2",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
            <div className="text-center d-flex mt-4 ml-3 ">
            <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ml-2",
            label: "SV2",
          }}
        />
        <MimicCaret
          parentClass=" tringle-item single-text-1"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
            "CO_L42PI1_V002"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useCaretColorStatus(
            "CO_L42PI1_V002"
          )}`}
          label="CO_L42PI1_V002"
        />
        
      
      </div>
      <BlackContainer
            data={{
              label: "CO_L42PI1_V001_FT",
              useClass: "greenTxt mt-4",
              unit: "t/h",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "CO_L42MD1_AM1_O2",
              useClass: "greenTxt mt-3",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "CO_L42KM1_TT1",
              useClass: "greenTxt mt-4",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42KM1_PT1",
              useClass: "greenTxt mt-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
           <MotorCircleDigitalTag
          className={`square digital-tag mt-3 ${useColorStatus("CO_L42SD1")}`}
          label="CO_L42SD1"
        />
             <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2",
            label: "L42SD1",
          }}
        />
          
        <BlackContainer
            data={{
              label: "CO_L42AD1AI01",
              useClass: "greenTxt mt-4",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42MD1AI03",
              useClass: "greenTxt mt-2",
              unit: "sec",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42MD1AI01",
              useClass: "greenTxt mt-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "CO_L42MD1AI02",
              useClass: "greenTxt mt-2",
              unit: "m",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="position-absolute single-text-13">
     <div className="d-flex">
     <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2 mt-2",
            label: "L42FN1",
          }}
        />
      <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus("CO_L42FN1")}`}
            label="CO_L42FN1"
          />
         
        </div>
        <div className="d-flex mt-3">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2 mt-2",
            label: "L42FN2",
          }}
        />
      <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus("CO_L42FN2")}`}
            label="CO_L42FN2"
          />
          
        </div>
      </div>
      <div className="single-text-14 position-absolute">
        <div className="d-flex">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mr-2",
            label: "L62SG1",
          }}
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "CO_L62SG1",
            squareClass: `${useBorderTagsColorStatus("CO_L62SG1")}`,
          }}
        />
        </div>
        <div className="d-flex mt-2">
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 mr-2",
            label: "L62SG2",
          }}
        />
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "CO_L62SG2",
            squareClass: `${useBorderTagsColorStatus("CO_L62SG2")}`,
          }}
        />
        </div>
     
        </div>
        <div className="position-absolute single-text-15">
        <div className="position-absolute single-text-1 d-flex">
        <div className="dot-square-line d-flex flex-column align-items-center">
        <MotorCircleDigitalTag
          className={`dot digital-tag ${useColorStatus("CO_L42AD1")}`}
          label="CO_L42AD1"
          text="M"
        />
       
          <div className="yellowline-Vr position-relative"></div>
          <div className={`square grey-color`}></div>
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-4 mt-3",
            label: "L42MD1",
          }}
        />
      </div>
        <div className="pole-shape pt-2">
          <MotorCircleDigitalTag
            className={`dot digital-tag pt-2 ml-1 ${useColorStatus("CO_L42MD1")}`}
            label="CO_L42MD1"
          />
        </div>
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark MT-1",
            label: "L42MD1",
          }}
        />
        <BlackContainer
            data={{
              label: "CO_L42MD1_JI",
              useClass: "greenTxt mt-1",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
      </div>
      <div className="position-absolute single-text-16">
     <div className="d-flex">
      <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus("CO_L42MD1_M02")}`}
            label="CO_L42MD1_M02"
          />
             <TextContainerWithWrapWord
          data={{
            useClass: "text-dark ml-2 mt-2",
            label: "M02",
          }}
        />
        </div>
      </div>
      <div className="d-flex align-items-center position-absolute single-text-17">
          <MotorCircleDigitalTag
            className={`circle-img digital-tag ${useFanImgTagsColorStatus(
              "CO_L42RF1"
            )}`}
            label="CO_L42RF1"
          />
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-1",
              label: "L42RF1",
            }}
          />
        </div>
        <div className="single-text-18 position-absolute">
          <div className="d-flex">
      <div>
      <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-auto",
                label: "L22BF3",
              }}
            />
          <div className="d-flex align-items-center justify-content-cente">
            <div className="yellowline-Vr upArrow  line-212 ml-auto"></div>
            <div className="squareplustri text-center">
            <MotorCircleDigitalTag
          className={`square digital-tag position-absolute mt-3 ml-2 ${useColorStatus("CO_L22BF3")}`}
          label="CO_L22BF3"
        />
              <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
              <div className="yellowline-Hr line-2"></div>
            </div>
          </div>
          <div className="d-flex mt-3 single-text-15">
            <div className="d-flex">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("CO_L22RA3")}`} label="CO_L22RA3" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1 mt-2",
                label: "L22RA3",
              }}
            />
            </div>
              <BlackContainer
            data={{
              label: "CO_L22FN3_II",
              useClass: "greenTxt ml-1",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          </div>
        </div>
        <div className="line-circle-1">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CO_L22FN3")} `} label="CO_L22FN3" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L22FN3",
          }}
        />
        </div>

        </div>
        <div className="d-flex mt-4 ml-5 single-text-19">
      <div>
      <BlackContainer
            data={{
              label: "CO_L42BF1_DPT",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "CO_L42BF1_PT",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
      <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-auto mt-2",
                label: "L42BF1",
              }}
            />
          <div className="d-flex align-items-center justify-content-cente">
            <div className="yellowline-Vr upArrow  line-212 ml-auto"></div>
            <div className="squareplustri text-center">
              <div className="yellowline-Vr downArrow  line-1 ml-auto"></div>
              <div className="yellowline-Hr line-2"></div>
            </div>
          </div>
          <div className="d-flex mt-3 single-text-15">
            <MotorCircleDigitalTag className={`circle-img digital-tag ${useFanImgTagsColorStatus("CO_L42RA1")}`} label="CO_L42RA1" />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1 mt-2",
                label: "L42RA1",
              }}
            />
          </div>
          <TextContainerWithWrapWord
            data={{
              useClass: "text-dark ml-auto",
              label: "L42BC1",
            }}
          />
        </div>
        <div className="line-circle-1">
        <MotorCircleDigitalTag className={`line-circle digital-tag ${useColorStatus("CO_L42FN3")} `} label="CO_L42FN3" />
        <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L42FN3",
          }}
        />
        </div>
        
        </div>
      </div>
      <div className="single-text-20 position-absolute">
   
             <BlackContainer
            data={{
              label: "CO_L42MD2_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42MD2JI_B",
              useClass: "greenTxt mt-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
            <MotorCircleDigitalTag
          className={`dot digital-tag mt-4 ${useColorStatus("CO_L42MD2")}`}
          label="CO_L42MD2"
          text="M"
        />
      </div>
      <div className="single-text-21 position-absolute">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1",
            label: "L42EX1",
          }}
        />
        <div className="squareplustri mt-2 text-center"></div>
      </div>
      <div className="single-text-22 position-absolute">
        <div className="img-83 pt-4">
        <BlackContainer
            data={{
              label: "CO_L42BF2_DPT",
              useClass: "greenTxt  mx-auto",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
        </div>
        
      </div>
      <div className="position-absolute single-text-23 d-flex">
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RA1"
              )}`}
              label="CO_L92RA1"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "RA1",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RA2"
              )}`}
              label="CO_L92RA2"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "RA2",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RA3"
              )}`}
              label="CO_L92RA3"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "RA3",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RA4"
              )}`}
              label="CO_L92RA4"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "RA4",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RA5"
              )}`}
              label="CO_L92RA5"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "RA5",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RA6"
              )}`}
              label="CO_L92RA6"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "RA6",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RA7"
              )}`}
              label="CO_L92RA7"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "RA7",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RA8"
              )}`}
              label="CO_L92RA8"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "RA8",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RA9"
              )}`}
              label="CO_L92RA9"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "RA9",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RAA"
              )}`}
              label="CO_L92RAA"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "RAA",
              }}
            />
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RAB"
              )}`}
              label="CO_L92RAB"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "RAB",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RAC"
              )}`}
              label="CO_L92RAC"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "RAC",
              }}
            />
          </div>
        </div>
      </div>
      <div className="position-absolute single-text-24">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-2",
            label: "L42SD2",
          }}
        />
      <MotorCircleDigitalTag
          className={`square digital-tag mt-2 ${useColorStatus("CO_L42SD2")}`}
          label="CO_L42SD2"
        />
          
      </div>
      <div className="position-absolute single-text-25">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mt-1",
            label: "Comp.Air",
          }}
        />
      <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("CO_L42BF2_COMP_AIR_CMD_IND")}`}
          label="CO_L42BF2_COMP_AIR_CMD_IND"
        />  
        <TextContainerWithWrapWord
        data={{
          useClass: "text-dark  mt-1",
          label: "Compressed Air",
        }}
      />
      <BlackContainer
            data={{
              label: "CO_L42BF2_PT1",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CO_L42BF2_PT2",
              useClass: "greenTxt mt-2",
              unit: "bar",
              unitColor: "unitColor",
            }}
          />
          
      </div>
      <div className="position-absolute single-text-26">
      <BlackContainer
            data={{
              label: "CO_L42BF2_DPT_CALC",
              useClass: "greenTxt mx-auto",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          <div className="d-flex mt-3">
          <BlackContainer
            data={{
              label: "CO_L42BF2_PT3",
              useClass: "greenTxt",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "CO_L42BF2_PT4",
              useClass: "greenTxt ml-5",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="d-flex mt-2">
          <BlackContainer
            data={{
              label: "CO_L42BF2_TT1",
              useClass: "greenTxt",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
           <BlackContainer
            data={{
              label: "CO_L42BF2_TT2",
              useClass: "greenTxt ml-5",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          </div>
      </div>
      <div className="position-absolute single-text-27 d-flex">
        <div>
      <BlackContainer
            data={{
              label: "CO_L42FN4_FT",
              useClass: "greenTxt",
              unit: "mbar",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42FN4_FT_CAL",
              useClass: "greenTxt mt-2",
              unit: "m/h",
              unitColor: "unitColor",
            }}
          />
             <BlackContainer
            data={{
              label: "CO_L42FN4_PT05",
              useClass: "greenTxt mt-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div>
      <BlackContainer
            data={{
              label: "CO_L42FN4_TT03",
              useClass: "greenTxt",
              unit: "degC",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42FN4_PT04",
              useClass: "greenTxt mt-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
             <BlackContainer
            data={{
              label: "CO_L42FN4AI01",
              useClass: "greenTxt mt-2",
              unit: "sec",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div>
      <BlackContainer
            data={{
              label: "CO_L42SK1_SK",
              useClass: "greenTxt",
              unit: "mg/m3",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L42SK1_PT",
              useClass: "greenTxt mt-2",
              unit: "mmWC",
              unitColor: "unitColor",
            }}
          />
             <BlackContainer
            data={{
              label: "CO_L42SK1_TT",
              useClass: "greenTxt mt-2",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          </div>
          </div>
          <div className="single-text-28 position-absolute d-flex">
   
      <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus("CO_L42FN4")}`}
            label="CO_L42FN4"
          />
  <div className="d-flex">
  {/* <MotorCircleDigitalTag
          className={`square mt-3 ${useColorStatus("KM_L22BF3")}`}
          label="KM_L22BF3"
        />1 */}
        <div className="ml-4">
<BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("CO_L42LD1")}
          isClickable={true}
          tagLabel="CO_L42LD1"
        />
              <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "L42LD1",
          }}
        />
        </div>
        <BlackContainer
            data={{
              label: "CO_L42LD1_ZT",
              useClass: "greenTxt ml-4 mt-4",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
        </div>
        </div>
        <div className="single-text-29 position-absolute d-flex">
          <div>
        <BlackContainer
            data={{
              label: "CO_L42AM1_O2",
              useClass: "greenTxt",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CO_L42AM1_CO",
              useClass: "greenTxt mt-2",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
          </div>
          <div className="ml-3 mt-3">
        <BlackContainer
            data={{
              label: "CO_L42FN4_II",
              useClass: "greenTxt",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CO_L42FN4_SI",
              useClass: "greenTxt mt-2",
              unit: "rpm",
              unitColor: "unitColor",
            }}
          />
          <BlackContainer
            data={{
              label: "CO_L42FN4JI_B",
              useClass: "greenTxt mt-2",
              unit: "KW",
              unitColor: "unitColor",
            }}
          />
          </div>
        </div>
        <div className="single-text-30 position-absolute d-flex">
        <BlackContainer
            data={{
              label: "CO_L92SC1II_B",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
            <BlackContainer
            data={{
              label: "CO_L92SC2II_B",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div className="single-text-31 position-absolute">
          <div className="d-flex gap-1">
        <div className="d-flex">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "CO_L92SG1",
            squareClass: `${useBorderTagsColorStatus("CO_L92SG1")}`,
          }}
        />1
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-1",
            label: "L92SG1",
          }}
        />
        </div>
        <div className="d-flex">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "CO_L92SG2",
            squareClass: `${useBorderTagsColorStatus("CO_L92SG2")}`,
          }}
        />
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-1",
            label: "L92SG2",
          }}
        />
        </div>
        <div className="d-flex ">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "CO_L92SG3",
            squareClass: `${useBorderTagsColorStatus("CO_L92SG3")}`,
          }}
        />
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-1",
            label: "L92SG3",
          }}
        />
        </div>
        <div className="d-flex">
        <TransparentBoxWithGate
          isClickable={true}
          parentClass="mx-auto"
          squareProps={{
            tagLabel: "CO_L92SG4",
            squareClass: `${useBorderTagsColorStatus("CO_L92SG4")}`,
          }}
        />
          <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-1 ml-1",
            label: "L92SG4",
          }}
        />
        </div>
        </div>
        <div className="d-flex gap-2 mt-1">
        <BlackContainer
            data={{
              label: "CO_L92RADII_B",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
             <BlackContainer
            data={{
              label: "CO_L92RAEII_B",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
             <BlackContainer
            data={{
              label: "CO_L92RAFII_B",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
             <BlackContainer
            data={{
              label: "CO_L92RAGII_B",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
        <div  className="d-flex gap-3 mt-1">
          <div className="d-flex align-items-center">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RAD"
              )}`}
              label="CO_L92RAD"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RAD",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RAE"
              )}`}
              label="CO_L92RAE"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RAE",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RAF"
              )}`}
              label="CO_L92RAF"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RAF",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-2">
            <MotorCircleDigitalTag
              className={`circle-img digital-tag ${useFanImgTagsColorStatus(
                "CO_L92RAG"
              )}`}
              label="CO_L92RAG"
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark ml-1",
                label: "L92RAG",
              }}
            />
          </div>
        </div>

     
        </div>
        <div className=" position-absolute single-text-32 d-flex">
        <div className="containerImage text-center">
          <div className="p-1">
          <BlackContainer
              data={{
                label: "KL_482BI1_WI",
                useClass: "greenTxt ",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "482Bl1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "Kiln",
              }}
            />   
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <MotorCircleDigitalTag
          className={`dot digital-tag mt-5 ${useColorStatus("KL_482DQ1")}`}
          label="KL_482DQ1"
          text="M"
        />
         <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "482DQ1",
              }}
            /> 
             <BlackContainer
              data={{
                label: "CO_482AM1_CO",
                useClass: "greenTxt mt-1",
                unit: "ppm",
                unitColor: "unitColor",
              }}
            />
        </div>
        <div className="containerImage text-center">
          <div className="p-1">
          <BlackContainer
              data={{
                label: "KL_452BI2_WI",
                useClass: "greenTxt ",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "452Bl2",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "Kiln/Calciner",
              }}
            />   
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <MotorCircleDigitalTag
          className={`dot digital-tag mt-5 ${useColorStatus("KL_452DQ2")}`}
          label="KL_452DQ2"
          text="M"
        />
         <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "452DQ2",
              }}
            /> 
             <BlackContainer
              data={{
                label: "CO_452AM2_CO",
                useClass: "greenTxt mt-1",
                unit: "ppm",
                unitColor: "unitColor",
              }}
            />
        </div>
        <div className="containerImage text-center">
          <div className="p-1">
          <BlackContainer
              data={{
                label: "KL_452BI1_WI",
                useClass: "greenTxt ",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "452Bl1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "Calciner",
              }}
            />   
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <MotorCircleDigitalTag
          className={`dot digital-tag mt-5 ${useColorStatus("KL_452DQ1")}`}
          label="KL_452DQ1"
          text="M"
        />
         <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "452DQ1",
              }}
            /> 
             <BlackContainer
              data={{
                label: "CO_452AM1_CO",
                useClass: "greenTxt mt-1",
                unit: "ppm",
                unitColor: "unitColor",
              }}
            />
        </div>
        <div className="containerImage text-center">
          <div className="p-1">
          <BlackContainer
              data={{
                label: "CO_472LC1_WI",
                useClass: "greenTxt ",
                unit: "t",
                unitColor: "unitColor",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "472Bl1",
              }}
            />
            <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-2",
                label: "Inter Transfer",
              }}
            />   
          </div>
          <div className="yellowline-Vr downArrow position-absolute line-1"></div>
          <MotorCircleDigitalTag
          className={`dot digital-tag mt-5 ${useColorStatus("KL_472FM1")}`}
          label="KL_472FM1"
          text="M"
        />
         <TextContainerWithWrapWord
              data={{
                useClass: "text-dark mt-1",
                label: "472FM1",
              }}
            /> 
             <BlackContainer
              data={{
                label: "CO_472AM1_CO",
                useClass: "greenTxt mt-1",
                unit: "ppm",
                unitColor: "unitColor",
              }}
            />
        </div>
        
        
 
      </div>
      <div className=" position-absolute single-text-33 d-flex">
        <div>
      <BlackContainer
              data={{
                label: "CO_L42WP1_TE",
                useClass: "greenTxt ",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
             <BlackContainer
              data={{
                label: "CO_L42WP2_TE",
                useClass: "greenTxt mt-2",
                unit: "℃",
                unitColor: "unitColor",
              }}
            />
             <BlackContainer
              data={{
                label: "CO_L42TK1_LT",
                useClass: "greenTxt mt-3",
                unit: "cm",
                unitColor: "unitColor",
              }}
            />
            </div>
            <div>
            <BlackContainer
              data={{
                label: "CO_L42FN4_X91AI01",
                useClass: "greenTxt mt-3",
                unit: "sec",
                unitColor: "unitColor",
              }}
            />
            </div>
            </div>
            <div className="position-absolute single-text-34">

        <div className="">
     
      <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus("CO_L42WP2")}`}
            label="CO_L42WP2"
          />
           
           <BlackContainer
            data={{
              label: "CO_L42WP2_II",
              useClass: "greenTxt mt-2",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        </div>
      </div>
      <div className=" position-absolute single-text-35 ">
      <div className="text-center d-flex mt-4 ml-3 ">
      
      <MimicCaret
          parentClass="tringle-item mt-4"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
            "CO_L42TK1_V00"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useCaretColorStatus(
            "CO_L42TK1_V00"
          )}`}
          label="CO_L42TK1_V00"
        />
            <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  ml-2",
            label: "L42TK1",
          }}
        />
      </div>
      <div className="containerImage text-center mt-2">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mt-2",
            label: "Water Tank",
          }}
        />
           <ProgressBarMimic label="CO_L42TK1_LT"/>
        </div>
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        <div className="yellowline-Hr  position-absolute line-2"></div>

      </div>
      <div className="position-absolute single-text-36 d-flex">
        <div className="middle-sqr-container">
        <div className="yellowline-Vr  position-absolute line-1"></div>

        </div>
        <div className="middle-sqr-container">
        <div className="yellowline-Vr  position-absolute line-1"></div>

        </div>
        <div className="middle-sqr-container">
        <div className="yellowline-Vr  position-absolute line-1"></div>

        </div>
        <div className="middle-sqr-container">
        <div className="yellowline-Vr  position-absolute line-1"></div>

        </div>
      </div>
      <div className="position-absolute single-text-37 d-flex">
      <BlackContainer
            data={{
              label: "CO_L42KM1_TT3",
              useClass: "greenTxt mt-5",
              unit: "℃",
              unitColor: "unitColor",
            }}
          />
          <div>
          <BlackContainer
            data={{
              label: "PH_442AM1_CO",
              useClass: "greenTxt mt-2",
              unit: "ppm",
              unitColor: "unitColor",
            }}
          />
             <BlackContainer
            data={{
              label: "PH_442FN1_PT02",
              useClass: "greenTxt mt-3",
              unit: "mmWc",
              unitColor: "unitColor",
            }}
          />
          </div>
      </div>
      <div className="ml-4 position-absolute single-text-38 d-flex">
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "L42LD2",
          }}
        />
<BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("CO_L42LD2")}
          isClickable={true}
          tagLabel="CO_L42LD2"
        />
        </div>
        <div className=" position-absolute single-text-39 d-flex">
          <div>
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark  mr-2",
            label: "L52LD1",
          }}
        />
        <div className="mt-2">
<BlueContainerWithDynamicBorder
          useClass={useBorderTagsColorStatus("CO_L52LD1")}
          isClickable={true}
          tagLabel="CO_L52LD1"
        />
        </div> 
        </div>
        <div>
      <TextContainerWithWrapWord
          data={{
            useClass: "text-dark mr-2",
            label: "L52SD1",
          }}
        />
     <MotorCircleDigitalTag
          className={`square digital-tag mt-1 ${useColorStatus("CO_L52SD1")}`}
          label="CO_L52SD1"
        />
        </div>
        </div>
        <BlackContainer
            data={{
              label: "CO_L52LD1_ZT",
              useClass: "greenTxt mt-2 position-absolute single-text-40",
              unit: "%",
              unitColor: "unitColor",
            }}
          />
             <div className="text-center  position-absolute single-text-41">
             <TextContainerWithWrapWord
        data={{
          useClass: "text-dark",
          label: "SV1",
        }}
      />
     
      <MimicCaret
          parentClass=" tringle-item mt-1"
          firstCaretClass={`fa-solid fa-caret-down d-block ${useCaretColorStatus(
            "CO_L42WP1"
          )}`}
          secondCaretClass={`fa-solid fa-caret-up d-block ${useCaretColorStatus(
            "CO_L42WP1"
          )}`}
          label="CO_L42WP1"
        />
       
    </div>
    <div className="brick-cooler-img position-absolute single-text-42"></div>
    <div className="position-absolute single-text-43">
      <div>
    <MotorCircleDigitalTag
            className={`line-circle mt-1 digital-tag ${useColorStatus("CO_L42WP1_CF")}`}
            label="CO_L42WP1_CF"
          />
          </div>
          <div>
               <MotorCircleDigitalTag
            className={`line-circle mt-2 digital-tag ${useColorStatus("CO_L42WP2_CF")}`}
            label="CO_L42WP2_CF"
          />
          </div>
    </div>
    <BlackContainer
            data={{
              label: "CO_L42WP1_II",
              useClass: "greenTxt mt-2 position-absolute single-text-44",
              unit: "A",
              unitColor: "unitColor",
            }}
          />
        <div className="yellowline-Vr downArrow position-absolute line-1"></div>
        <div className="yellowline-Vr downArrow position-absolute line-2"></div>
        <div className="yellowline-Vr downArrow position-absolute line-3"></div>
        <div className="yellowline-Vr downArrow position-absolute line-4"></div>
        <div className="yellowline-Vr downArrow position-absolute line-5"></div>
        <div className="yellowline-Vr downArrow position-absolute line-6"></div>
        <div className="yellowline-Vr  position-absolute line-7"></div>
        <div className="yellowline-Hr  position-absolute line-8"></div>
        <div className="yellowline-Vr downArrow position-absolute line-9"></div>
        <div className="yellowline-Vr downArrow position-absolute line-10"></div>
        <div className="yellowline-Hr rightarrow position-absolute line-11"></div>
        <div className="yellowline-Hr  position-absolute line-12"></div>
        <div className="yellowline-Vr  position-absolute line-13"></div>
        <div className="yellowline-Vr downArrow  position-absolute line-14"></div>
        <div className="yellowline-Vr   position-absolute line-15"></div>
        <div className="yellowline-Hr  position-absolute line-16"></div>
        <div className="yellowline-Hr  position-absolute line-17"></div>
        <div className="yellowline-Vr  position-absolute line-18"></div>
        <div className="yellowline-Vr upArrow position-absolute line-19"></div>
        <div className="yellowline-Hr rightarrow position-absolute line-20"></div>
        <div className="yellowline-Vr downArrow position-absolute line-21"></div>
        <div className="yellowline-Vr downArrow position-absolute line-22"></div>
        <div className="yellowline-Vr downArrow position-absolute line-23"></div>
        <div className="yellowline-Vr downArrow position-absolute line-24"></div>
        <div className="yellowline-Vr downArrow position-absolute line-25"></div>
        <div className="yellowline-Vr downArrow position-absolute line-26"></div>
        <div className="yellowline-Hr rightarrow position-absolute line-27"></div>
        <div className="yellowline-Hr  position-absolute line-28"></div>
        <div className="yellowline-Vr  position-absolute line-29"></div>
        <div className="yellowline-Vr  position-absolute line-30"></div>
        <div className="yellowline-Hr  position-absolute line-31"></div>
        <div className="yellowline-Vr  position-absolute line-32"></div>
        <div className="yellowline-Hr leftarrow  position-absolute line-33"></div>
        <div className="yellowline-Hr   position-absolute line-34"></div>
        <div className="yellowline-Vr   position-absolute line-35"></div>
        <div className="yellowline-Vr   position-absolute line-36"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-37"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-38"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-39"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-40"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-41"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-42"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-43"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-44"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-45"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-46"></div>
        <div className="yellowline-Hr   position-absolute line-47"></div>
        <div className="yellowline-Hr   position-absolute line-48"></div>
        <div className="yellowline-Vr   position-absolute line-49"></div>
        <div className="yellowline-Vr   position-absolute line-50"></div>
        <div className="yellowline-Hr   position-absolute line-51"></div>
        <div className="yellowline-Hr   position-absolute line-52"></div>
        <div className="yellowline-Vr   position-absolute line-53"></div>
        <div className="yellowline-Hr   position-absolute line-54"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-55"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-56"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-57"></div>
        <div className="yellowline-Vr  downArrow position-absolute line-58"></div>
        <div className="yellowline-Hr  position-absolute line-59"></div>
        <div className="yellowline-Vr  position-absolute line-60"></div>
        <div className="yellowline-Hr leftarrow position-absolute line-61"></div>
        <div className="yellowline-Vr position-absolute line-62"></div>
        <div className="yellowline-Hr rightarrow position-absolute line-63"></div>
        <div className="yellowline-Hr leftarrow position-absolute line-64"></div>



    </div>
  );
};
